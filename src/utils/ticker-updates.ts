// Server-side helper that auto-generates "latest wiki update" ticker items
// from the git history. Imported ONLY from .astro frontmatter (it uses
// node:child_process, so it must never reach the client bundle).
// Every wiki update lands as a commit whose subject is "game key: summary",
// so the git log is a complete, already-written changelog: at dev/build time
// we turn the last few weeks of commits into ticker items, with the commit
// prefix mapped to a display name + page link via PREFIX_LINKS below.
import { execSync } from 'node:child_process';

export interface TickerItem {
  date: string;
  game: string;
  text: string;
  href: string;
}

interface LinkTarget {
  name: string;
  href: string;
}

// Commit subject prefix (lowercased text before the first ':') to the game
// name and the page a visitor should land on. Unknown prefixes fall back to
// a title-cased name linked to the homepage.
const PREFIX_LINKS: Record<string, LinkTarget> = {
  'taimanin squad': { name: 'Taimanin Squad', href: '/guides/taimanin-squad/updates/' },
  'busty burst': { name: 'Busty Burst', href: '/guides/busty-burst/banner-timeline/' },
  'muv-luv girls garden': { name: 'Muv-Luv Girls Garden', href: '/guides/muv-luv-girls-garden/students/' },
  mlgg: { name: 'Muv-Luv Girls Garden', href: '/guides/muv-luv-girls-garden/students/' },
  majo: { name: 'MAJO: Witches Night', href: '/guides/majo/updates/' },
  'stella sora': { name: 'Stella Sora', href: '/guides/stella-sora/updates/' },
  'gene-sys-adam': { name: 'Gene-Sys: Adam', href: '/guides/gene-sys-adam/' },
  gsa: { name: 'Gene-Sys: Adam', href: '/guides/gene-sys-adam/' },
  'gsa music': { name: 'Gene-Sys: Adam', href: '/guides/gene-sys-adam/' },
  'zone nova': { name: 'Zone Nova', href: '/guides/zone-nova/' },
  zn: { name: 'Zone Nova', href: '/guides/zone-nova/' },
  'agent-x': { name: 'Agent X', href: '/guides/agent-x/' },
  'agent x': { name: 'Agent X', href: '/guides/agent-x/' },
  'horizon walker': { name: 'Horizon Walker', href: '/guides/horizon-walker/updates/' },
  hw: { name: 'Horizon Walker', href: '/guides/horizon-walker/updates/' },
  'hw tier list': { name: 'Horizon Walker', href: '/guides/horizon-walker/tier-list/' },
  'silver and blood': { name: 'Silver and Blood', href: '/guides/silver-and-blood/' },
  'star savior': { name: 'Star Savior', href: '/guides/star-savior/' },
  'last origin': { name: 'Last Origin Global', href: '/guides/last-origin-global/' },
  'make drama': { name: 'Make Drama', href: '/guides/make-drama/' },
  'desire immortal realm': { name: 'Desire Immortal Realm', href: '/guides/desire-immortal-realm/' },
  'rebellion gilgamesh': { name: 'Rebellion Gilgamesh', href: '/guides/rebellion-gilgamesh/' },
  apps: { name: 'Apps', href: '/apps/' },
  shop: { name: 'Shop', href: '/shop/' },
  // Site-wide work (seo, landing videos, registry...) points at the homepage
  seo: { name: 'GachaWiki', href: '/' },
  'landing videos': { name: 'GachaWiki', href: '/' },
  'character videos': { name: 'GachaWiki', href: '/' },
  'video-only landings': { name: 'GachaWiki', href: '/' },
};

// Internal-only prefixes a visitor does not need to see in the ticker
const SKIP_PREFIXES = new Set(['fix', 'merge', 'chore', 'revert', 'wip']);

const WINDOW_DAYS = 21; // how far back to look for updates
const MAX_ITEMS = 8; // total items in the ticker
const MAX_PER_GAME = 2; // keep one game from flooding the whole ticker
const CACHE_TTL = 5 * 60_000; // re-read git log at most this often (dev server)

let cache: { at: number; items: TickerItem[] } | null = null;

// Ticker text style rules: commas and colons only, no dashes as punctuation.
function cleanSummary(raw: string): string {
  let text = raw;
  text = text.replace(/\s*\([^)]*\)/g, ''); // drop parentheticals
  text = text.replace(/\s+[-\u2013\u2014]+\s+/g, ', '); // " - " separators become commas
  text = text.replace(/(\d{1,2})-(\d{1,2})/g, '$1 to $2'); // date ranges: Sep 15-29 -> Sep 15 to 29
  text = text.replace(/\s{2,}/g, ' ').trim();
  if (text.length > 80) {
    const cut = text.lastIndexOf(',', 80);
    text = cut >= 40 ? text.slice(0, cut) : text.slice(0, text.lastIndexOf(' ', 80));
  }
  return text.replace(/[,;:\s]+$/, '').trim().replace(/^fix /i, 'fixed ');
}

function titleCase(key: string): string {
  return key
    .trim()
    .split(' ')
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ');
}

function formatDate(isoDay: string): string {
  const d = new Date(`${isoDay}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return '';
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' }).format(d);
}

function readGitLog(): Array<{ day: string; subject: string }> {
  try {
    const out = execSync(
      // %x09 is a tab separator: shell-safe on Windows cmd (a | would be
      // parsed as a pipe there).
      'git log --since=' + WINDOW_DAYS + '.days --date=short --pretty=%ad%x09%s',
      { encoding: 'utf8', maxBuffer: 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] },
    );
    return out
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const sep = line.indexOf('\t');
        return { day: line.slice(0, sep), subject: line.slice(sep + 1) };
      })
      .filter((entry) => /^\d{4}-\d{2}-\d{2}$/.test(entry.day) && entry.subject.length > 0);
  } catch {
    // No git (or a shallow/odd checkout): the ticker simply shows manual items.
    return [];
  }
}

export function getTickerUpdates(): TickerItem[] {
  if (cache && Date.now() - cache.at < CACHE_TTL) return cache.items;

  const items: TickerItem[] = [];
  const perGame = new Map<string, number>();

  for (const { day, subject } of readGitLog()) {
    if (items.length >= MAX_ITEMS) break;

    const colon = subject.indexOf(':');
    if (colon <= 0) continue; // subjects without a "key: summary" shape are skipped
    const key = subject.slice(0, colon).trim().toLowerCase();
    if (SKIP_PREFIXES.has(key)) continue;

    const target = PREFIX_LINKS[key] ?? { name: titleCase(key), href: '/' };

    const text = cleanSummary(subject.slice(colon + 1));
    if (text.length < 8) continue; // too short to be a useful headline

    const seen = perGame.get(target.name) ?? 0;
    if (seen >= MAX_PER_GAME) continue;
    perGame.set(target.name, seen + 1);

    items.push({ date: formatDate(day), game: target.name, text, href: target.href });
  }

  cache = { at: Date.now(), items };
  return items;
}
