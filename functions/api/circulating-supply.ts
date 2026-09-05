// Pages Function: returns the live circulating supply of $GW as plain text.
// circulating = totalSupply() - balanceOf(BURN_ADDRESS)
// Sources tried in order: Alchemy RPC (if ALCHEMY_URL is bound) -> public
// Robinhood Chain RPC -> Blockscout REST v2 -> static fallback.
// Blockscout must stay LAST among live sources: it 403s Cloudflare Workers
// egress IPs, so it only works opportunistically from this environment.

const TOKEN = "0x50bE7832849EFEdB15611799074FcC409522f27A";
const BURN = "0x000000000000000000000000000000000000dead";
const PUBLIC_RPC = "https://rpc.mainnet.chain.robinhood.com";
const EXPLORER = "https://robinhoodchain.blockscout.com/api/v2";
const DECIMALS = 18n;

// Fallback value if every upstream fails — last known circulating supply.
// The buyback bot burns continuously, so this drifts; keep it in sync
// whenever the RPC sources are healthy (check against the explorer).
const FALLBACK_CIRCULATING = 979961600n;

const TOTAL_SUPPLY_DATA = "0x18160ddd"; // totalSupply()
const BALANCE_OF_DATA =
  "0x70a08231" + BURN.slice(2).padStart(64, "0"); // balanceOf(dead)

interface RpcEnv {
  ALCHEMY_URL?: string;
}

async function rpcCall(url: string, data: string): Promise<bigint | null> {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "eth_call",
        params: [{ to: TOKEN, data }, "latest"],
      }),
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { result?: string };
    if (!json.result || json.result === "0x") return null;
    return BigInt(json.result);
  } catch {
    return null;
  }
}

async function fromRpc(rpcUrl: string): Promise<bigint | null> {
  const [total, burned] = await Promise.all([
    rpcCall(rpcUrl, TOTAL_SUPPLY_DATA),
    rpcCall(rpcUrl, BALANCE_OF_DATA),
  ]);
  if (total === null || burned === null || burned > total) return null;
  return (total - burned) / (10n ** DECIMALS);
}

async function fromBlockscout(): Promise<bigint | null> {
  try {
    const [tokenRes, holdersRes] = await Promise.all([
      fetch(`${EXPLORER}/tokens/${TOKEN}`, { headers: { Accept: "application/json" } }),
      fetch(`${EXPLORER}/tokens/${TOKEN}/holders`, { headers: { Accept: "application/json" } }),
    ]);
    if (!tokenRes.ok) return null;
    const token = (await tokenRes.json()) as { total_supply?: string };
    if (!token.total_supply) return null;
    const total = BigInt(token.total_supply);

    // burned === null means the holders list was unavailable or the burn
    // wallet wasn't on the first page — returning total supply then would
    // overstate circulating, so fail to the static fallback instead.
    let burned: bigint | null = null;
    if (holdersRes.ok) {
      const holders = (await holdersRes.json()) as {
        items?: Array<{ address: { hash?: string } | null; value?: string }>;
      };
      for (const h of holders.items ?? []) {
        if (h.address?.hash?.toLowerCase() === BURN && h.value) {
          burned = BigInt(h.value);
          break;
        }
      }
    }
    if (burned === null || burned > total) return null;
    return (total - burned) / (10n ** DECIMALS);
  } catch {
    return null;
  }
}

// Cloudflare Pages recognizes `onRequestGet` by export name at runtime;
// no ambient type dependency is needed.
export const onRequestGet = async (context: { env: RpcEnv }): Promise<Response> => {
  const rpcs = [context.env.ALCHEMY_URL, PUBLIC_RPC].filter(
    (u): u is string => typeof u === "string" && u.length > 0,
  );

  let circulating: bigint | null = null;
  for (const rpc of rpcs) {
    circulating = await fromRpc(rpc);
    if (circulating !== null) break;
  }
  if (circulating === null) circulating = await fromBlockscout();
  if (circulating === null) circulating = FALLBACK_CIRCULATING;

  return new Response(`${circulating}\n`, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=600",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
