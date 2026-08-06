// Swap module for the /swap page — quotes + executes token swaps on
// Robinhood Chain (4663) via Uniswap V3 contracts, using a custom
// GachaWiki frontend. Heavy (viem) — lazy-loaded only on /swap so wiki pages
// stay fast.
//
// Strategy: talk to the contracts DIRECTLY via viem rather than pulling in the
// (React-leaning, heavy) @uniswap/v3-sdk. A swap needs only two on-chain calls:
//   1. Quote  → QuoterV2.quoteExactInputSingle  (read-only eth_call)
//   2. Execute → Universal Router SWEEP + V3_SWAP commands (wallet send)
//
// Contracts on Robinhood Chain (verified via developers.uniswap.org deployments):
//   UniversalRouter:  0x8876789976decbfcbbbe364623c63652db8c0904
//   QuoterV2:         0x33e885ed0ec9bf04ecfb19341582aadcb4c8a9e7
//   UniswapV3Factory: 0x1f7d7550b1b028f7571e69a784071f0205fd2efa
//   SwapRouter02:     0xcaf681a66d020601342297493863e78c959e5cb2
//
// Reuses the wallet singleton from src/scripts/wallet.ts.

import {
  createPublicClient,
  http,
  erc20Abi,
  encodeFunctionData,
  getAddress,
  parseUnits,
  formatUnits,
  type Address,
  type PublicClient,
} from 'viem';
import { getAppKit, getConnectedAddress } from './wallet';

// ---------------------------------------------------------------------------
// Robinhood Chain config
// ---------------------------------------------------------------------------

const RH_CHAIN_ID = 4663;
const RH_RPC = 'https://rpc.mainnet.chain.robinhood.com';

// Uniswap contracts on Robinhood Chain (official deployments).
const QUOTER_V2: Address = '0x33e885ed0ec9bf04ecfb19341582aadcb4c8a9e7';
const V3_FACTORY: Address = '0x1f7d7550b1b028f7571e69a784071f0205fd2efa';
const SWAP_ROUTER_02: Address = '0xcaf681a66d020601342297493863e78c959e5cb2';

// Native token sentinel (same convention as Uniswap: zero address = native ETH).
export const NATIVE_TOKEN: Address = '0x0000000000000000000000000000000000000000';

// $GW token (default output).
export const GW_TOKEN: Address = '0x50bE7832849EFEdB15611799074FcC409522f27A';
// WETH9 on Robinhood Chain (verified via DexScreener GW/WETH pool quote token).
export const WETH_TOKEN: Address = '0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73';

// ---------------------------------------------------------------------------
// Token list
// ---------------------------------------------------------------------------

export interface TokenInfo {
  address: Address;
  symbol: string;
  name: string;
  decimals: number;
  logoUri?: string;
}

// Curated default token list. ETH (native) + $GW + WETH, with logos.
export const DEFAULT_TOKENS: TokenInfo[] = [
  { address: NATIVE_TOKEN, symbol: 'ETH', name: 'Ether', decimals: 18, logoUri: 'https://www.google.com/s2/favicons?domain=ethereum.org&sz=64' },
  { address: GW_TOKEN, symbol: 'GW', name: 'GachaWiki', decimals: 18, logoUri: 'https://www.google.com/s2/favicons?domain=gachawiki.info&sz=64' },
  { address: WETH_TOKEN, symbol: 'WETH', name: 'Wrapped Ether', decimals: 18, logoUri: 'https://www.google.com/s2/favicons?domain=ethereum.org&sz=64' },
];

// NOTE: This page swaps a single fixed pair (ETH ↔ $GW), so there's no token
// picker, no curated-list fetch, and no on-chain metadata resolution here.
// (An earlier version carried fetchCuratedTokens / fetchTokenList /
// fetchTokenMeta / resolveToken for a Uniswap-style token picker; all removed
// when the UI was narrowed to the GW/ETH pair.)

// ---------------------------------------------------------------------------
// viem clients
// ---------------------------------------------------------------------------

let publicClient: PublicClient | null = null;

function getPublicClient(): PublicClient {
  if (!publicClient) {
    publicClient = createPublicClient({
      chain: { id: RH_CHAIN_ID, name: 'Robinhood Chain', nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 }, rpcUrls: { default: { http: [RH_RPC] } } },
      transport: http(RH_RPC),
    });
  }
  return publicClient;
}

// ---------------------------------------------------------------------------
// Token metadata (fetch symbol/decimals on-chain for arbitrary addresses)
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Pool + quote (Uniswap V3 QuoterV2)
// ---------------------------------------------------------------------------

/** Call the V3 factory to get the deployed pool address for a pair + fee. */
export async function getPoolAddress(tokenA: Address, tokenB: Address, fee: number): Promise<Address | null> {
  const client = getPublicClient();
  try {
    const pool = (await client.readContract({
      address: V3_FACTORY,
      abi: [
        { inputs: [{ name: 'tokenA', type: 'address' }, { name: 'tokenB', type: 'address' }, { name: 'fee', type: 'uint24' }], name: 'getPool', outputs: [{ name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
      ] as const,
      functionName: 'getPool',
      args: [tokenA, tokenB, fee],
    })) as Address;
    return pool.toLowerCase() === NATIVE_TOKEN.toLowerCase() ? null : pool;
  } catch {
    return null;
  }
}

const V3_FEES = [100, 500, 3000, 10000]; // 0.01%, 0.05%, 0.3%, 1%

export interface QuoteResult {
  amountOut: bigint;
  fee: number;
  priceImpactPct: number; // rough estimate
  routeDescription: string;
}

/**
 * Quote a swap: how much `tokenOut` for `amountIn` of `tokenIn`.
 * Tries each V3 fee tier and the (tokenIn→WETH→tokenOut) hop if no direct pool.
 * Read-only — no wallet connection required.
 *
 * For native ETH input/output, the V3 pools use WETH; we quote on WETH and the
 * Universal Router wraps/unwraps at execution.
 */
export async function getQuote(
  tokenIn: Address,
  tokenOut: Address,
  amountIn: bigint,
): Promise<QuoteResult | null> {
  if (amountIn <= 0n) return null;

  // Normalize native ETH to WETH for quoting (pools are WETH-based).
  const tIn = tokenIn.toLowerCase() === NATIVE_TOKEN.toLowerCase() ? WETH_TOKEN : tokenIn;
  const tOut = tokenOut.toLowerCase() === NATIVE_TOKEN.toLowerCase() ? WETH_TOKEN : tokenOut;
  if (tIn.toLowerCase() === tOut.toLowerCase()) return null;

  const client = getPublicClient();

  // 1) Try direct pools across all fee tiers, pick the best output.
  let best: { amountOut: bigint; fee: number } | null = null;
  for (const fee of V3_FEES) {
    const pool = await getPoolAddress(tIn, tOut, fee);
    if (!pool) continue;
    try {
      const result = (await client.simulateContract({
        address: QUOTER_V2,
        abi: QUOTER_V2_ABI,
        functionName: 'quoteExactInputSingle',
        args: [{ tokenIn: tIn, tokenOut: tOut, amountIn, fee, sqrtPriceLimitX96: 0n }],
      })) as { result: readonly [bigint, bigint, number, bigint] };
      const amountOut = result.result[0];
      if (!best || amountOut > best.amountOut) {
        best = { amountOut, fee };
      }
    } catch {
      /* pool exists but quote failed (e.g. no liquidity in this tier) — skip */
    }
  }

  if (!best) {
    // 2) Try a 2-hop route via WETH (tokenIn → WETH → tokenOut) if neither side is WETH.
    if (tIn.toLowerCase() !== WETH_TOKEN.toLowerCase() && tOut.toLowerCase() !== WETH_TOKEN.toLowerCase()) {
      return getQuoteTwoHop(tIn, WETH_TOKEN, tOut, amountIn);
    }
    return null;
  }

  // Rough price impact: compare (amountIn/decimalsIn) vs (amountOut/decimalsOut)
  // against the pool's spot — a precise calc needs slot0 sqrtPrice; this is a
  // good enough display approximation from the two amounts + a spot quote of 1.
  const priceImpactPct = await estimatePriceImpact(tIn, tOut, amountIn, best.amountOut, best.fee);

  return {
    amountOut: best.amountOut,
    fee: best.fee,
    priceImpactPct,
    routeDescription: `V3 ${best.fee / 10000}% • direct`,
  };
}

/** Two-hop quote: tokenIn → via (WETH) → tokenOut, summing the best tier per leg. */
async function getQuoteTwoHop(
  tokenIn: Address,
  midToken: Address,
  tokenOut: Address,
  amountIn: bigint,
): Promise<QuoteResult | null> {
  const leg1 = await getQuote(tokenIn, midToken, amountIn);
  if (!leg1) return null;
  const leg2 = await getQuote(midToken, tokenOut, leg1.amountOut);
  if (!leg2) return null;
  return {
    amountOut: leg2.amountOut,
    fee: leg1.fee,
    priceImpactPct: leg1.priceImpactPct + leg2.priceImpactPct,
    routeDescription: `V3 2-hop via WETH`,
  };
}

/** Estimate price impact by quoting a small reference amount vs the actual amount. */
async function estimatePriceImpact(
  tokenIn: Address,
  tokenOut: Address,
  amountIn: bigint,
  amountOut: bigint,
  fee: number,
): Promise<number> {
  try {
    // Quote a SMALL fraction of amountIn to approximate the spot rate. Using a
    // proportional reference avoids rounding-to-zero: the old code quoted 1 wei,
    // which for 18-decimal tokens returns ~0 out and made impact always "—".
    // ~0.01% of the trade is large enough to be non-zero but small enough to
    // stay near the pool's spot price.
    const refAmountIn = amountIn / 10_000n;
    if (refAmountIn <= 0n) return 0;
    const client = getPublicClient();
    const pool = await getPoolAddress(tokenIn, tokenOut, fee);
    if (!pool) return 0;
    const ref = (await client.simulateContract({
      address: QUOTER_V2,
      abi: QUOTER_V2_ABI,
      functionName: 'quoteExactInputSingle',
      args: [{ tokenIn, tokenOut, amountIn: refAmountIn, fee, sqrtPriceLimitX96: 0n }],
    })) as { result: readonly [bigint, bigint, number, bigint] };
    const refOut = ref.result[0];
    if (refOut <= 0n) return 0;
    // Expected (linear) output at the spot rate: scale the reference quote up
    // to the full amountIn. Actual = amountOut. Impact = 1 - actual/expected.
    const expected = (amountIn * refOut) / refAmountIn;
    if (expected <= 0n) return 0;
    const impact = Number(((expected - amountOut) * 10000n) / expected) / 100;
    return Math.max(0, impact);
  } catch {
    return 0;
  }
}

// ---------------------------------------------------------------------------
// QuoterV2 ABI (only the function we need)
// ---------------------------------------------------------------------------

const QUOTER_V2_ABI = [
  {
    inputs: [
      {
        components: [
          { name: 'tokenIn', type: 'address' },
          { name: 'tokenOut', type: 'address' },
          { name: 'amountIn', type: 'uint256' },
          { name: 'fee', type: 'uint24' },
          { name: 'sqrtPriceLimitX96', type: 'uint160' },
        ],
        name: 'params',
        type: 'tuple',
      },
    ],
    name: 'quoteExactInputSingle',
    outputs: [
      { name: 'amountOut', type: 'uint256' },
      { name: 'sqrtPriceX96After', type: 'uint160' },
      { name: 'initializedTicksCrossed', type: 'uint32' },
      { name: 'gasEstimate', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

// ---------------------------------------------------------------------------
// Balance + allowance (for the swap button state)
// ---------------------------------------------------------------------------

/** Read an ERC-20 balance, or native ETH balance if address is NATIVE_TOKEN. */
export async function getBalance(token: Address, holder: Address): Promise<bigint> {
  const client = getPublicClient();
  if (token.toLowerCase() === NATIVE_TOKEN.toLowerCase()) {
    return client.getBalance({ address: holder });
  }
  return client.readContract({ address: token, abi: erc20Abi, functionName: 'balanceOf', args: [holder] }) as Promise<bigint>;
}

// ---------------------------------------------------------------------------
// Execute a swap (Universal Router)
// ---------------------------------------------------------------------------

/**
 * Execute a swap through SwapRouter02 using the connected wallet.
 * Handles: native ETH (via multicall so the router credits msg.value as WETH),
 * ERC-20 approval to the router, and native-ETH output unwrapping.
 *
 * NOTE: We use SwapRouter02's exactInputSingle + multicall rather than the
 * Universal Router (which needs its bespoke command bytecode / the
 * @uniswap/universal-router-sdk) to avoid that heavy dependency. Fill on V3
 * pools is identical. CRITICAL: native-ETH input MUST go through multicall —
 * a bare exactInputSingle with msg.value reverts because the router only
 * credits the incoming ETH inside its payable multicall() entrypoint.
 */
export async function executeSwap(
  tokenIn: Address,
  tokenOut: Address,
  amountIn: bigint,
  minAmountOut: bigint,
  onStatus?: (msg: string) => void,
): Promise<{ txHash: string } | { error: string }> {
  try {
    const kit = await getAppKit();
    const account = getConnectedAddress();
    if (!account) return { error: 'Wallet not connected' };

    const from = getAddress(account);
    const isNativeIn = tokenIn.toLowerCase() === NATIVE_TOKEN.toLowerCase();
    const isNativeOut = tokenOut.toLowerCase() === NATIVE_TOKEN.toLowerCase();

    // The actual V3 tokens (pools use WETH for native).
    const v3TokenIn = isNativeIn ? WETH_TOKEN : tokenIn;
    const v3TokenOut = isNativeOut ? WETH_TOKEN : tokenOut;

    // Find the best fee tier for the (v3) pair.
    const quote = await getQuote(v3TokenIn, v3TokenOut, amountIn);
    if (!quote) return { error: 'No liquidity for this pair' };

    // 1) If input is an ERC-20, ensure SwapRouter02 has enough allowance.
    if (!isNativeIn) {
      onStatus?.('Checking approval…');
      const currentAllow = await getPublicClient().readContract({
        address: tokenIn, abi: erc20Abi, functionName: 'allowance', args: [from, SWAP_ROUTER_02],
      }) as bigint;
      if (currentAllow < amountIn) {
        onStatus?.('Approving token…');
        await sendAndWait(kit, {
          to: tokenIn,
          data: encodeFunctionData({ abi: erc20Abi, functionName: 'approve', args: [SWAP_ROUTER_02, amountIn * 2n] }),
        });
      }
    }

    // 2) Build the swap calldata. We ALWAYS route through multicall(bytes[]):
    //
    //  - Native ETH in: a bare exactInputSingle with msg.value REVERTS, because
    //    SwapRouter02 only credits the incoming ETH to the payer inside its
    //    payable multicall() entrypoint (which stores msg.value as a WETH
    //    deposit). Calling exactInputSingle directly leaves the router's
    //    internal "has paid WETH?" check short and the tx reverts after the
    //    wallet signs it. This was the bug behind "I accept in wallet but the
    //    tx don't go." Wrapping in multicall([exactInputSingle]) with
    //    value = amountIn makes the router accept and spend the ETH.
    //
    //  - Native ETH out: pools are WETH-based, so the swap is sent to the
    //    ROUTER and we append unwrapWETH9(minOut, from) so the router unwraps
    //    the resulting WETH and forwards native ETH to the user. (Without it
    //    the WETH just sits in the router.)
    //
    //  - ERC-20 in / out: multicall([exactInputSingle]) works identically to a
    //    direct call; using it uniformly keeps one code path.
    onStatus?.('Sending swap…');
    // SwapRouter02's exactInputSingle has NO deadline field (unlike the older
    // V3 SwapRouter01). Deadline protection is applied via the multicall(bytes32,bytes[])
    // overload instead; we use multicall(bytes[]) here without a blockhash check,
    // which is fine for an immediate-execution swap.
    const exactInputData = encodeFunctionData({
      abi: SWAP_ROUTER_02_ABI,
      functionName: 'exactInputSingle',
      args: [
        {
          tokenIn: v3TokenIn,
          tokenOut: v3TokenOut,
          fee: quote.fee,
          recipient: isNativeOut ? SWAP_ROUTER_02 : from,
          amountIn,
          amountOutMinimum: isNativeOut ? 0n : minAmountOut,
          sqrtPriceLimitX96: 0n,
        },
      ],
    });

    const calls: `0x${string}`[] = [exactInputData];
    if (isNativeOut) {
      // Append unwrap so the WETH bought is converted to native ETH for the user.
      calls.push(encodeFunctionData({
        abi: SWAP_ROUTER_02_ABI,
        functionName: 'unwrapWETH9',
        args: [minAmountOut, from],
      }));
    }
    const data = encodeFunctionData({
      abi: SWAP_ROUTER_02_ABI,
      functionName: 'multicall',
      args: [calls],
    });

    // Pre-flight: simulate the exact tx via eth_call from the connected
    // account BEFORE asking the wallet to sign. This surfaces the real revert
    // reason (decoded by viem) on the page status line, instead of the opaque
    // "transaction may fail" the wallet shows. Reverts here are caught below.
    // Uses a raw eth_call (not viem's client.call with an account object, which
    // triggers gas-estimation/account-resolution that stalls on this RPC).
    onStatus?.('Simulating swap…');
    try {
      await getPublicClient().request({
        method: 'eth_call',
        params: [{
          from,
          to: SWAP_ROUTER_02,
          data,
          value: ('0x' + (isNativeIn ? amountIn : 0n).toString(16)) as `0x${string}`,
        }, 'latest'],
      });
    } catch (simErr) {
      const reason = simErr instanceof Error ? simErr.message : String(simErr);
      return { error: `Swap would revert: ${reason}` };
    }

    const txHash = await sendTx(kit, {
      to: SWAP_ROUTER_02,
      data,
      value: isNativeIn ? amountIn : 0n,
    });

    return { txHash };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return { error: msg };
  }
}

const SWAP_ROUTER_02_ABI = [
  {
    inputs: [
      {
        components: [
          { name: 'tokenIn', type: 'address' },
          { name: 'tokenOut', type: 'address' },
          { name: 'fee', type: 'uint24' },
          { name: 'recipient', type: 'address' },
          { name: 'amountIn', type: 'uint256' },
          { name: 'amountOutMinimum', type: 'uint256' },
          { name: 'sqrtPriceLimitX96', type: 'uint160' },
        ],
        name: 'params',
        type: 'tuple',
      },
    ],
    name: 'exactInputSingle',
    outputs: [{ name: 'amountOut', type: 'uint256' }],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [{ name: 'amountOutMinimum', type: 'uint256' }, { name: 'recipient', type: 'address' }],
    name: 'unwrapWETH9',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [{ name: 'data', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', type: 'bytes[]' }],
    stateMutability: 'payable',
    type: 'function',
  },
] as const;

// ---------------------------------------------------------------------------
// Low-level wallet tx helpers (via the Reown EIP-1193 provider)
// ---------------------------------------------------------------------------

interface TxRequest {
  to: Address;
  data: `0x${string}`;
  value?: bigint;
}

/** Send a tx through the connected wallet and return the tx hash. */
async function sendTx(kit: Awaited<ReturnType<typeof getAppKit>>, tx: TxRequest): Promise<`0x${string}`> {
  const provider = kit.getProvider<{ request: (a: { method: string; params?: unknown[] }) => Promise<unknown> }>('eip155');
  if (!provider) throw new Error('No wallet provider');
  const account = getConnectedAddress();
  if (!account) throw new Error('No connected account');
  try {
    const hash = (await provider.request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: account,
          to: tx.to,
          data: tx.data,
          value: '0x' + (tx.value ?? 0n).toString(16),
        },
      ],
    })) as `0x${string}`;
    return hash;
  } catch (err) {
    // EIP-1193 errors bury the revert reason in different shapes per wallet.
    // Pull the most informative string we can find so the UI shows the real
    // cause (e.g. "execution reverted", "insufficient funds", a 4byte sig).
    throw new Error(extractProviderError(err));
  }
}

/** Dig the most useful message out of a wallet/EIP-1193 error object. */
function extractProviderError(err: unknown): string {
  if (err == null) return 'Transaction failed (no error detail)';
  // Stringify path candidates where wallets stash the reason.
  const e = err as Record<string, unknown>;
  const candidates = [
    e.message,
    e.reason,
    (e.data as Record<string, unknown> | undefined)?.message,
    e.data,
    e.code,
  ].filter(v => v != null && v !== '');
  // Prefer a human-readable string; fall back to code/data.
  for (const c of candidates) {
    if (typeof c === 'string' && c.trim()) return c;
    if (typeof c === 'number') return `wallet error code ${c}`;
  }
  return err instanceof Error ? err.message : String(err);
}

/** Send a tx and wait for it to be mined. */
async function sendAndWait(kit: Awaited<ReturnType<typeof getAppKit>>, tx: TxRequest): Promise<void> {
  const hash = await sendTx(kit, tx);
  await getPublicClient().waitForTransactionReceipt({ hash });
}

// ---------------------------------------------------------------------------
// Formatting helpers (re-exported for the UI)
// ---------------------------------------------------------------------------

export { parseUnits, formatUnits };
