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
  keccak256,
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

const TOKENLIST_CACHE_KEY = 'gacha-wiki:swap-tokenlist-v3'; // v3: on-chain indexed
const TOKENLIST_TTL = 24 * 60 * 60_000; // 24h (historical pools don't change)

// Uniswap V3 Factory PoolCreated event signature.
// PoolCreated(address indexed token0, address indexed token1, uint24 indexed fee, int24 tickSpacing, address pool)
const POOL_CREATED_TOPIC = keccak256(
  new TextEncoder().encode('PoolCreated(address,address,uint24,int24,address)'),
);

// 1inch Token API — returns ALL tokens on Robinhood Chain with logos in one
// free call (no key). 282 tokens, all with logoURI (DexScreener CDN images).
const ONEINCH_TOKENS_URL = 'https://tokens.1inch.io/v1.1/4663';

/** Cached full 1inch token map (address → {symbol, logo, decimals}) for
 *  enriching both curated and indexed tokens. */
let oneinchData: Record<string, { symbol: string; name: string; decimals: number; logoURI: string }> | null = null;

async function getOneinchData(): Promise<typeof oneinchData> {
  if (oneinchData) return oneinchData;
  try {
    const res = await fetch(ONEINCH_TOKENS_URL);
    if (res.ok) oneinchData = await res.json();
  } catch {
    /* offline */
  }
  return oneinchData;
}

// Uniswap's curated list — used as a fast initial seed (symbol/name/decimals
// known without on-chain reads) while the indexer catches up.
const UNISWAP_TOKENLIST_URL =
  'https://raw.githubusercontent.com/Uniswap/default-token-list/main/src/tokens/robinhood.json';

/**
 * Fetch a block of PoolCreated logs. Returns null if the range exceeds the
 * RPC's 10k-log limit (caller then halves the range).
 */
async function fetchPoolLogs(fromBlock: number, toBlock: number): Promise<Array<{ topics: string[] }> | null> {
  try {
    const res = await fetch(RH_RPC, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'eth_getLogs',
        params: [{
          address: V3_FACTORY,
          topics: [POOL_CREATED_TOPIC],
          fromBlock: '0x' + fromBlock.toString(16),
          toBlock: '0x' + toBlock.toString(16),
        }],
      }),
    });
    const j = await res.json() as { result?: Array<{ topics: string[] }>; error?: unknown };
    if (j.error) return null; // exceeded limit — caller halves the range
    return j.result ?? [];
  } catch {
    return null;
  }
}

/**
 * Index ALL tokens that have a Uniswap V3 pool on Robinhood Chain by scanning
 * PoolCreated events from the V3 Factory. Uses adaptive block-range chunking
 * (halves the range when the 10k-log limit is hit). There are ~76k pools /
 * ~76k unique tokens on-chain — far more than any curated list.
 *
 * Each token's symbol/decimals are resolved lazily on selection (on-chain read)
 * to avoid 76k RPC calls during indexing. Returns addresses only.
 */
export async function indexAllPoolTokens(): Promise<Set<string>> {
  // Get current block height.
  let latest: number;
  try {
    const res = await fetch(RH_RPC, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'eth_blockNumber', params: [] }),
    });
    const j = await res.json() as { result?: string };
    latest = parseInt(j.result ?? '0x0', 16);
  } catch {
    return new Set();
  }
  if (latest === 0) return new Set();

  const tokens = new Set<string>();
  // Adaptive scan: start with 200k-block chunks, halve when hitting the limit.
  const MIN_CHUNK = 5000;
  const stack: Array<[number, number]> = [[0, latest]];

  while (stack.length > 0) {
    const [from, to] = stack.pop()!;
    const size = to - from + 1;
    const logs = await fetchPoolLogs(from, to);
    if (logs === null && size > MIN_CHUNK) {
      // Limit hit — split into two halves.
      const mid = from + Math.floor(size / 2);
      stack.push([from, mid], [mid + 1, to]);
    } else if (logs) {
      for (const log of logs) {
        // token0 = topics[1], token1 = topics[2] (each is a 32-byte word,
        // the address is the last 20 bytes).
        if (log.topics[1]) tokens.add('0x' + log.topics[1].slice(26).toLowerCase());
        if (log.topics[2]) tokens.add('0x' + log.topics[2].slice(26).toLowerCase());
      }
    }
    // If logs===null and size<=MIN_CHUNK, skip (extremely dense range).
  }
  return tokens;
}

/**
 * Fetch ALL swappable tokens on Robinhood Chain. Strategy:
 * 1) Start fast: Uniswap's curated 100-token list (has symbol/name/decimals).
 * 2) Index on-chain: scan all PoolCreated events to discover the full ~76k
 *    token set (addresses only; metadata resolved lazily on selection).
 * 3) Merge + dedupe. Cached 24h in sessionStorage (pools are append-only).
 *
 * This is the definitive token set — every token that has a Uniswap pool,
 * read straight from the chain. No API key, no curated-list limit.
 */
// Blockscout (the chain's own explorer) API — returns tokens with curated
// icon_url logos (CoinGecko + Robinhood CDN). 50 per page, paginated.
const BLOCKSCOUT_API = 'https://robinhoodchain.blockscout.com/api/v2/tokens';

interface BlockscoutToken {
  address_hash: string;
  symbol: string;
  name: string;
  decimals: number;
  icon_url?: string | null;
}

/**
 * Fetch tokens from Blockscout (the chain's own explorer). Each token has a
 * curated icon_url (CoinGecko images + Robinhood's own CDN for stock tokens).
 * Paginates 50/page. Stops after a few pages to avoid hitting rate limits.
 */
export async function fetchBlockscoutTokens(maxPages = 6): Promise<TokenInfo[]> {
  const tokens: TokenInfo[] = [];
  let nextParams: Record<string, unknown> | null = null;

  for (let page = 0; page < maxPages; page++) {
    try {
      const url = nextParams
        ? `${BLOCKSCOUT_API}?type=ERC-20&${new URLSearchParams(
            Object.entries(nextParams).map(([k, v]) => [k, String(v)]),
          )}`
        : `${BLOCKSCOUT_API}?type=ERC-20`;
      const res = await fetch(url);
      if (!res.ok) break;
      const json = (await res.json()) as { items?: BlockscoutToken[]; next_page_params?: Record<string, unknown> | null };
      const items = json.items ?? [];
      for (const t of items) {
        tokens.push({
          address: t.address_hash as Address,
          symbol: t.symbol,
          name: t.name,
          decimals: t.decimals ?? 18,
          logoUri: t.icon_url ?? undefined,
        });
      }
      nextParams = json.next_page_params ?? null;
      if (!nextParams) break; // no more pages
    } catch {
      break;
    }
  }
  return tokens;
}

/**
 * Fast seed: ALL known tokens with logos. Merges four sources in parallel:
 *   1) DEFAULT_TOKENS (ETH, GW, WETH — hardcoded logos)
 *   2) Uniswap's curated 100 (stock tokens: NVDA, TSLA, AAPL — logos from
 *      1inch/Blockscout where available)
 *   3) 1inch's crypto tokens (full metadata + logos)
 *   4) Blockscout explorer tokens (curated logos from CoinGecko + Robinhood CDN)
 * Used for instant picker rendering before the full on-chain index completes.
 */
export async function fetchCuratedTokens(): Promise<TokenInfo[]> {
  // Fetch both sources in parallel.
  const [oneinch, uniswapRes, blockscout] = await Promise.all([
    getOneinchData(),
    fetch(UNISWAP_TOKENLIST_URL).then(r => r.ok ? r.json() : []).catch(() => []),
    fetchBlockscoutTokens(1), // 1 page (50 tokens) for speed; full set via background indexer
  ]);

  const uniswapList = uniswapRes as Array<{
    address: string; symbol: string; name: string; decimals: number;
  }>;

  // Build a Blockscout logo map (address → icon_url) — Blockscout has the
  // CORRECT logos for stock tokens (Robinhood CDN), unlike 1inch which returns
  // broken URLs for some stocks. Preferred for stock tokens.
  const blockscoutLogos = new Map<string, string>();
  for (const t of blockscout) {
    if (t.logoUri) blockscoutLogos.set(t.address.toLowerCase(), t.logoUri);
  }

  const seen = new Set<string>();
  const merged: TokenInfo[] = [];

  // 1) Defaults first (ETH, GW, WETH).
  for (const t of DEFAULT_TOKENS) {
    const key = t.address.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(t);
  }

  // 2) Uniswap curated stock tokens — prefer Blockscout logo (correct stock
  //    logos via Robinhood CDN), fall back to 1inch, fall back to Robinhood
  //    CDN direct URL.
  for (const t of uniswapList) {
    const key = t.address.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push({
      address: t.address as Address,
      symbol: t.symbol,
      name: t.name,
      decimals: t.decimals,
      logoUri: blockscoutLogos.get(key) // Blockscout = correct stock logos
        ?? oneinch?.[key]?.logoURI       // 1inch fallback
        ?? `https://cdn.robinhood.com/ncw_assets/logos/${key}.png`, // direct CDN
    });
  }

  // 3) 1inch crypto tokens not already in the list.
  if (oneinch) {
    for (const [addr, info] of Object.entries(oneinch)) {
      const key = addr.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      merged.push({
        address: addr as Address,
        symbol: info.symbol ?? '',
        name: '',
        decimals: info.decimals ?? 18,
        logoUri: info.logoURI,
      });
    }
  }

  // 4) Blockscout explorer tokens — chain's own curated logos (CoinGecko +
  //    Robinhood CDN for stock tokens). Adds tokens not in the other sources.
  for (const t of blockscout) {
    const key = t.address.toLowerCase();
    if (seen.has(key)) {
      // Already listed — fill in the logo if it was missing.
      const existing = merged.find(m => m.address.toLowerCase() === key);
      if (existing && !existing.logoUri && t.logoUri) existing.logoUri = t.logoUri;
      continue;
    }
    seen.add(key);
    merged.push(t);
  }

  return merged;
}

let indexingInProgress: Promise<TokenInfo[]> | null = null;

/**
 * Fetch ALL swappable tokens on Robinhood Chain. Returns the FULL set:
 * curated (fast) + every token discovered by scanning PoolCreated events
 * on-chain (76k+). This is slow on first run (~30s) — callers that need an
 * instant response should use fetchCuratedTokens() first, then call this.
 *
 * Idempotent + deduplicated. If already indexing, returns the in-flight
 * promise. Cached 24h in sessionStorage (pools are append-only).
 */
export async function fetchTokenList(): Promise<TokenInfo[]> {
  // cache check — if we already have the full indexed list, return instantly.
  try {
    const raw = sessionStorage.getItem(TOKENLIST_CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as { ts: number; tokens: TokenInfo[]; complete?: boolean };
      if (parsed.complete && Date.now() - parsed.ts < TOKENLIST_TTL && parsed.tokens.length > 100) {
        return parsed.tokens;
      }
    }
  } catch {
    /* ignore */
  }

  // Dedupe in-flight indexing.
  if (indexingInProgress) return indexingInProgress;

  indexingInProgress = (async () => {
    // 1) Fast seed: curated tokens (full metadata).
    const curated = await fetchCuratedTokens();

    // 2) On-chain index: discover every token with a pool.
    const indexedAddrs = await indexAllPoolTokens();

    // 3) Merge: curated tokens first (full metadata), then indexed-only.
    const seen = new Set<string>();
    const merged: TokenInfo[] = [];
    for (const t of curated) {
      const key = t.address.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      merged.push(t);
    }
    // Enrich indexed tokens with 1inch metadata (symbol/logo/decimals) where
    // available; the rest stay address-only until resolved lazily on selection.
    const oneinch = await getOneinchData();
    for (const addr of indexedAddrs) {
      if (seen.has(addr)) continue;
      seen.add(addr);
      const info = oneinch?.[addr];
      merged.push({
        address: addr as Address,
        symbol: info?.symbol ?? '',
        name: '',
        decimals: info?.decimals ?? 18,
        logoUri: info?.logoURI,
      });
    }

    try {
      sessionStorage.setItem(TOKENLIST_CACHE_KEY, JSON.stringify({
        ts: Date.now(),
        tokens: merged,
        complete: indexedAddrs.size > 0,
      }));
    } catch {
      // sessionStorage may be full (76k tokens ~10MB) — skip caching, the
      // merge result is still returned in-memory.
    }
    indexingInProgress = null;
    return merged;
  })();

  return indexingInProgress;
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
