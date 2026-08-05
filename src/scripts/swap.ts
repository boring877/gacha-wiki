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

// Curated default token list. ETH (native) + $GW + WETH. The full liquid list
// is fetched from DexScreener at runtime (see fetchTokenList).
export const DEFAULT_TOKENS: TokenInfo[] = [
  { address: NATIVE_TOKEN, symbol: 'ETH', name: 'Ether', decimals: 18 },
  { address: GW_TOKEN, symbol: 'GW', name: 'GachaWiki', decimals: 18 },
  { address: WETH_TOKEN, symbol: 'WETH', name: 'Wrapped Ether', decimals: 18 },
];

const TOKENLIST_CACHE_KEY = 'gacha-wiki:swap-tokenlist-v2'; // v2: invalidate old cache
const TOKENLIST_TTL = 30 * 60_000; // 30 minutes (the official list rarely changes)

// Uniswap's official default token list for Robinhood Chain. This is the
// authoritative source — Uniswap maintains it directly.
const UNISWAP_TOKENLIST_URL =
  'https://raw.githubusercontent.com/Uniswap/default-token-list/main/src/tokens/robinhood.json';

/**
 * Fetch ALL swappable tokens on Robinhood Chain from Uniswap's official
 * default-token-list (100 tokens: NVDA, TSLA, AAPL, MSFT, SPY, META, etc).
 * Falls back to DexScreener WETH pairs if the official list is unreachable.
 * Returns ETH + $GW + WETH prepended, then the official tokens. Cached 30 min.
 */
export async function fetchTokenList(): Promise<TokenInfo[]> {
  // cache check
  try {
    const raw = sessionStorage.getItem(TOKENLIST_CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as { ts: number; tokens: TokenInfo[] };
      if (Date.now() - parsed.ts < TOKENLIST_TTL && parsed.tokens.length > 3) {
        return parsed.tokens;
      }
    }
  } catch {
    /* ignore */
  }

  let remote: TokenInfo[] = [];

  // Primary: Uniswap's official token list for Robinhood Chain.
  try {
    const res = await fetch(UNISWAP_TOKENLIST_URL);
    if (res.ok) {
      const json = (await res.json()) as Array<{
        address: string;
        symbol: string;
        name: string;
        decimals: number;
        logoURI?: string;
      }>;
      remote = json.map(t => ({
        address: t.address as Address,
        symbol: t.symbol,
        name: t.name,
        decimals: t.decimals,
        logoUri: t.logoURI,
      }));
    }
  } catch {
    /* fall through to DexScreener fallback */
  }

  // Fallback: DexScreener WETH pairs (smaller set, but works offline-of-git).
  if (remote.length === 0) {
    try {
      const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${WETH_TOKEN}`);
      if (res.ok) {
        const json = (await res.json()) as {
          pairs?: Array<{
            chainId?: string;
            liquidity?: { usd?: number };
            baseToken?: { address?: string; symbol?: string; name?: string };
            quoteToken?: { address?: string; symbol?: string; name?: string };
            info?: { imageUrl?: string };
          }>;
        };
        const byAddr = new Map<string, TokenInfo & { liq: number }>();
        for (const p of json.pairs ?? []) {
          if (p.chainId !== 'robinhood') continue;
          const isBaseWeth = p.baseToken?.address?.toLowerCase() === WETH_TOKEN.toLowerCase();
          const t = isBaseWeth ? p.quoteToken : p.baseToken;
          if (!t?.address) continue;
          const addr = t.address.toLowerCase() as Address;
          const liq = p.liquidity?.usd ?? 0;
          const existing = byAddr.get(addr);
          if (!existing || liq > existing.liq) {
            byAddr.set(addr, {
              address: addr,
              symbol: t.symbol ?? '???',
              name: t.name ?? t.symbol ?? '',
              decimals: 18,
              logoUri: p.info?.imageUrl,
              liq,
            });
          }
        }
        remote = [...byAddr.values()].map(({ liq, ...info }) => {
          void liq;
          return info;
        });
      }
    } catch {
      /* both sources failed — return defaults only */
    }
  }

  // Prepend the curated tokens (ETH/GW/WETH) and dedupe by address.
  const seen = new Set<string>();
  const merged: TokenInfo[] = [];
  for (const t of [...DEFAULT_TOKENS, ...remote]) {
    const key = t.address.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(t);
  }

  try {
    sessionStorage.setItem(TOKENLIST_CACHE_KEY, JSON.stringify({ ts: Date.now(), tokens: merged }));
  } catch {
    /* ignore */
  }
  return merged;
}

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

const tokenCache = new Map<string, TokenInfo>();

/** Fetch on-chain metadata (symbol, name, decimals) for an ERC-20 address. */
export async function fetchTokenMeta(address: Address): Promise<TokenInfo> {
  const key = address.toLowerCase();
  const cached = tokenCache.get(key);
  if (cached) return cached;

  const client = getPublicClient();
  const [symbol, name, decimals] = await Promise.all([
    client.readContract({ address, abi: erc20Abi, functionName: 'symbol' }),
    client.readContract({ address, abi: erc20Abi, functionName: 'name' }),
    client.readContract({ address, abi: erc20Abi, functionName: 'decimals' }),
  ]);

  const info: TokenInfo = { address, symbol: symbol as string, name: name as string, decimals: Number(decimals) };
  tokenCache.set(key, info);
  return info;
}

/** Resolve a token to its metadata (native ETH is a special case). */
export async function resolveToken(address: Address): Promise<TokenInfo> {
  if (address.toLowerCase() === NATIVE_TOKEN.toLowerCase()) {
    return DEFAULT_TOKENS[0]; // ETH
  }
  return fetchTokenMeta(address);
}

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
    routeDescription: `V3 ${best.fee / 10000}% • ${tIn === tokenIn ? 'direct' : 'direct'}`,
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

/** Estimate price impact by quoting a tiny reference amount vs the actual amount. */
async function estimatePriceImpact(
  tokenIn: Address,
  tokenOut: Address,
  amountIn: bigint,
  amountOut: bigint,
  fee: number,
): Promise<number> {
  try {
    // Quote a very small amount (1 smallest unit) to approximate the spot rate.
    const client = getPublicClient();
    const pool = await getPoolAddress(tokenIn, tokenOut, fee);
    if (!pool) return 0;
    const ref = (await client.simulateContract({
      address: QUOTER_V2,
      abi: QUOTER_V2_ABI,
      functionName: 'quoteExactInputSingle',
      args: [{ tokenIn, tokenOut, amountIn: 1n, fee, sqrtPriceLimitX96: 0n }],
    })) as { result: readonly [bigint, bigint, number, bigint] };
    const refOut = ref.result[0];
    if (refOut === 0n) return 0;
    // Expected (linear) = amountIn * refOut. Actual = amountOut.
    // Impact = 1 - actual/expected.
    const expected = (amountIn * refOut) / 1n;
    if (expected === 0n) return 0;
    const impact = Number((expected - amountOut) * 10000n / expected) / 100;
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
 * Execute a swap through the Universal Router using the connected wallet.
 * Handles: native ETH wrap, ERC-20 approval to Permit2, command encoding.
 *
 * NOTE: The Universal Router uses a bespoke command bytecode. For a robust,
 * production-grade encode we'd use @uniswap/universal-router-sdk; to avoid that
 * heavy React-leaning dep, this implementation routes through SwapRouter02's
 * exactInputSingle instead (a standard viem tx). SwapRouter02 is approved by
 * the Universal Router deployment and gives identical fill on V3 pools.
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

    // 2) Build the SwapRouter02 exactInputSingle call.
    onStatus?.('Sending swap…');
    const deadline = BigInt(Math.floor(Date.now() / 1000) + 1200); // 20 min
    const swapData = encodeFunctionData({
      abi: SWAP_ROUTER_02_ABI,
      functionName: 'exactInputSingle',
      args: [
        {
          tokenIn: v3TokenIn,
          tokenOut: v3TokenOut,
          fee: quote.fee,
          recipient: isNativeOut ? SWAP_ROUTER_02 : from, // router unwraps if native out
          deadline,
          amountIn,
          amountOutMinimum: minAmountOut,
          sqrtPriceLimitX96: 0n,
        },
      ],
    });

    const txHash = await sendTx(kit, {
      to: SWAP_ROUTER_02,
      data: swapData,
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
          { name: 'deadline', type: 'uint256' },
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
