// Pages Function: returns the live circulating supply of $GW as plain text.
// circulating = totalSupply - balanceOf(BURN_ADDRESS)
// Data sourced from the Robinhood Chain Blockscout REST v2 API.

const TOKEN = "0x50bE7832849EFEdB15611799074FcC409522f27A";
const BURN = "0x000000000000000000000000000000000000dead".toLowerCase();
const EXPLORER = "https://robinhoodchain.blockscout.com/api/v2";
const DECIMALS = 18;

// Fallback value if the upstream API is down — last known circulating supply.
// Keep this in sync with on-chain state.
const FALLBACK_CIRCULATING = 989999990n;

// Cloudflare Pages recognizes `onRequestGet` by export name at runtime;
// no ambient type dependency is needed.
export const onRequestGet = async (): Promise<Response> => {
  try {
    // Fetch token metadata (total_supply) and holders (burn balance) in parallel.
    const [tokenRes, holdersRes] = await Promise.all([
      fetch(`${EXPLORER}/tokens/${TOKEN}`, { headers: { Accept: "application/json" } }),
      fetch(`${EXPLORER}/tokens/${TOKEN}/holders`, { headers: { Accept: "application/json" } }),
    ]);

    if (!tokenRes.ok) throw new Error(`token endpoint ${tokenRes.status}`);
    const token = await tokenRes.json() as { total_supply?: string };
    if (!token.total_supply) throw new Error("missing total_supply");

    const total = BigInt(token.total_supply);

    // Find the burn address in the holders list and read its balance.
    let burned = 0n;
    if (holdersRes.ok) {
      const holders = await holdersRes.json() as { items?: Array<{ address: { hash?: string } | null; value?: string }> };
      for (const h of holders.items ?? []) {
        const hash = h.address?.hash?.toLowerCase();
        if (hash === BURN && h.value) {
          burned = BigInt(h.value);
          break;
        }
      }
    }

    const circulating = (total - burned) / (10n ** BigInt(DECIMALS));

    return new Response(`${circulating}\n`, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=300, s-maxage=600",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    // Degrade gracefully — return the last-known value so CoinGecko never sees an error.
    return new Response(`${FALLBACK_CIRCULATING}\n`, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=60",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
};
