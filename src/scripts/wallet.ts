// Wallet connection module for the header wallet button (WalletButton.astro).
// Uses Reown AppKit (the maintained successor to Web3Modal) to show a
// Uniswap-style wallet picker (MetaMask, Robinhood Wallet, Coinbase, Trust,
// WalletConnect QR for mobile, etc.). Lazy-loaded by WalletButton.astro so the
// ~bundle only downloads when the user actually interacts with the button.
//
// Network: Robinhood Chain (rh) — Arbitrum Nitro L2, chainId 4663.
// Token:   $GW ERC-20 at 0x50bE7832849EFEdB15611799074FcC409522f27A.
// Balance is read live via ethers (decimals() + balanceOf()).

import { createAppKit } from '@reown/appkit';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import type { AppKitNetwork } from '@reown/appkit/networks';
import { BrowserProvider, Contract, formatUnits } from 'ethers';

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

// Robinhood Chain mainnet — verified via docs.robinhood.com/chain.
// `@reown/appkit/networks` re-exports viem chains, so this is a viem-shaped
// CaipNetwork/AppKitNetwork object (chainNamespace defaults to 'eip155').
export const robinhoodChain: AppKitNetwork = {
  id: 4663,
  name: 'Robinhood Chain',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.mainnet.chain.robinhood.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Blockscout',
      url: 'https://robinhoodchain.blockscout.com',
    },
  },
  // AppKit uses these for the "rh" ticker label and testnet/mainnet detection.
  testnet: false,
} as const;

export const EXPLORER_URL = 'https://robinhoodchain.blockscout.com';

// $GW ERC-20 contract (already referenced in TokenBanner.astro).
export const GW_CONTRACT = '0x50bE7832849EFEdB15611799074FcC409522f27A';

// Minimal ERC-20 ABI surface for the balance read.
const ERC20_ABI = [
  {
    constant: true,
    inputs: [{ name: 'owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

// ---------------------------------------------------------------------------
// Reown project id — get one free at https://cloud.reown.com → "Create Project".
// Required for the WalletConnect QR relay, the searchable wallet list, and
// wallet icon resolution. Verified working against the registry.
// ---------------------------------------------------------------------------
export const REOWN_PROJECT_ID = 'f47b42aa32a0ccbab70f3bf4bee29b6d';

// App metadata shown inside the wallet modal / pairing screen.
const METADATA = {
  name: 'GachaWiki',
  description: 'Open-source gacha-game wiki. Home of the $GW token.',
  url: 'https://gachawiki.info', // must match the deploy origin
  icons: ['https://gachawiki.info/favicon.svg'],
};

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

let appKit: ReturnType<typeof createAppKit> | null = null;

/** Lazily create the AppKit singleton. Idempotent. */
export async function getAppKit(): Promise<ReturnType<typeof createAppKit>> {
  if (appKit) return appKit;

  appKit = createAppKit({
    adapters: [new EthersAdapter()],
    networks: [robinhoodChain],
    // Force Robinhood Chain as the active network so users land on rh; AppKit
    // will prompt to switch networks if their wallet is elsewhere.
    defaultNetwork: robinhoodChain,
    metadata: METADATA,
    projectId: REOWN_PROJECT_ID,
    // Pin the most-relevant wallets to the top of the modal (with icons).
    // IDs are the stable WalletConnect/Reown explorer registry identifiers,
    // fetched authoritatively from the registry; order is respected.
    featuredWalletIds: [
      'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // MetaMask
      'c03dfee351b6fcc421b4494ea33b9d4b92a984f87aa76d1663bb28705e95034a', // Uniswap Wallet
      '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0', // Trust Wallet
      'd0ca99ff52b99abc48743dad0f7fc891e041be73574f7fac4afe5d4bb83845c8', // Coinbase Wallet
      '8837dd9413b1d9b585ee937d27a816590248386d9dbf59f5cd3422dbbb65683e', // Robinhood Wallet
      '1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369', // Rainbow
      'a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393', // Phantom
    ],
    features: {
      analytics: false, // don't phone home unless the user opts in later
      email: false, // no embedded email/social wallets — keep it native
      socials: [],
      // Always show the full searchable "All Wallets" list, not just installed
      // ones — requires a valid projectId for the registry/search to load.
      allWallets: true,
    },
    // Pull the banner's amber accent into the modal so it matches the chrome.
    themeMode: 'dark',
    themeVariables: {
      '--w3m-accent': '#ffb74d',
    },
  });

  return appKit;
}

/** Open the wallet picker modal. */
export async function openConnectModal(): Promise<void> {
  const kit = await getAppKit();
  // Force the Connect view — a bare open() shows the Account view (fund /
  // swap / send / disconnect) whenever a session happens to exist, which is
  // confusing when the user is explicitly trying to connect.
  await kit.open({ view: 'Connect' });
}

/** Current connected EVM address, if any. */
export function getConnectedAddress(): string | undefined {
  return appKit?.getAddress();
}

/** Disconnect the active wallet. Used by the wallet menu's Disconnect button. */
export async function disconnectWallet(): Promise<void> {
  const kit = appKit ?? (await getAppKit());
  await kit.disconnect();
}

// ---------------------------------------------------------------------------
// $GW balance read (live on-chain via ethers)
// ---------------------------------------------------------------------------

export interface BalanceResult {
  formatted: string; // e.g. "1,234.5"
  symbol: string; // e.g. "$GW" (falls back if the contract read fails)
  display: string; // e.g. "1,234.5 $GW"
}

let cachedDecimals: number | null = null;
let cachedSymbol: string | null = null;

/**
 * Read the live $GW balance for `address` on Robinhood Chain.
 * Uses the connected wallet's provider so it reflects the user's real holdings.
 */
export async function readGwBalance(address: string): Promise<BalanceResult> {
  const kit = appKit ?? (await getAppKit());
  // EIP-1193 provider from the active wallet.
  const rawProvider = kit.getProvider<{ request: (a: unknown) => Promise<unknown> }>('eip155');
  if (!rawProvider) throw new Error('No wallet provider available');

  const provider = new BrowserProvider(rawProvider as never);
  const contract = new Contract(GW_CONTRACT, ERC20_ABI, provider);

  // Read decimals + symbol once, cache for the session.
  if (cachedDecimals === null) {
    try {
      cachedDecimals = Number(await contract.decimals());
      if (!Number.isFinite(cachedDecimals) || cachedDecimals < 0) cachedDecimals = 18;
    } catch {
      cachedDecimals = 18;
    }
  }
  if (cachedSymbol === null) {
    try {
      const s = (await contract.symbol()) as string;
      cachedSymbol = s && s.length > 0 ? s : 'GW';
    } catch {
      cachedSymbol = 'GW';
    }
  }

  const symbol = cachedSymbol.startsWith('$') ? cachedSymbol : `$${cachedSymbol}`;

  const balance = (await contract.balanceOf(address)) as bigint;
  const raw = formatUnits(balance, cachedDecimals);
  const formatted = formatBalanceString(raw);

  return { formatted, symbol, display: `${formatted} ${symbol}` };
}

/** Group thousands, trim trailing zeros, cap at 4 decimals. */
function formatBalanceString(raw: string): string {
  const [whole, fracRaw] = raw.split('.');
  const grouped = Number(whole).toLocaleString('en-US');
  if (!fracRaw) return grouped;
  const frac = fracRaw.replace(/0+$/, '').slice(0, 4);
  return frac ? `${grouped}.${frac}` : grouped;
}

// ---------------------------------------------------------------------------
// Account / network change subscriptions
// ---------------------------------------------------------------------------

/**
 * Subscribe to account & network changes. Returns an unsubscribe function.
 * The callback fires with the latest { address, isConnected, status, chainId }.
 * `status` is AppKit's connection phase ('connecting' | 'reconnecting' | ...);
 * the UI uses it to IGNORE transient mid-handshake states (which otherwise
 * cause a connect/disconnect flicker during automatic reconnection).
 * (account state carries address/isConnected/status; network carries chainId —
 * separate AppKit subscriptions, see UseAppKitAccountReturn /
 * UseAppKitNetworkReturn in @reown/appkit-controllers TypeUtil.)
 */
export function onWalletChange(
  cb: (state: {
    address?: string;
    isConnected: boolean;
    status?: string;
    chainId?: number | string;
  }) => void,
): () => void {
  let latest: {
    address?: string;
    isConnected: boolean;
    status?: string;
    chainId?: number | string;
  } = { isConnected: false };

  const emit = () => cb(latest);

  // Defer subscription creation until AppKit exists (it's lazy). Track
  // cancelled state so an unsubscribe() that races the async init both stops
  // the deferred setup AND tears down subscriptions that already attached.
  let cancelled = false;
  let cleanup: (() => void) | null = null;

  getAppKit().then(kit => {
    if (cancelled) return; // caller unsubscribed before init finished
    const unsubAccount = kit.subscribeAccount(newState => {
      latest = {
        ...latest,
        address: newState.address,
        isConnected: newState.isConnected,
        status: newState.status,
      };
      emit();
    });

    const unsubNetwork = kit.subscribeNetwork(newState => {
      latest = { ...latest, chainId: newState.chainId };
      emit();
    });

    cleanup = () => {
      unsubAccount();
      unsubNetwork();
    };
  }).catch(() => {
    // AppKit failed to initialize — leave `cleanup` null; the returned
    // unsubscribe is a safe no-op. Avoids an unhandled promise rejection.
  });

  return () => {
    cancelled = true; // prevent the deferred setup from ever subscribing
    if (cleanup) cleanup();
  };
}

/** Switch the connected wallet to Robinhood Chain (chainId 4663). */
export async function ensureRobinhoodChain(): Promise<void> {
  const kit = appKit ?? (await getAppKit());
  await kit.switchNetwork(robinhoodChain);
}
