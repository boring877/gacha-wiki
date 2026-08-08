// Centralized constants for the entire site
// Single source of truth for site-wide configuration.
// Game identity (id, name, image, theme color, etc.) lives in src/data/games.ts;
// this file no longer holds any game data.

// Site-wide constants
export const SITE = {
  TITLE: 'GachaWiki',
  DESCRIPTION:
    'Comprehensive guides, character builds, tier lists, and game strategies for popular gacha games including Zone Nova, Silver and Blood, Horizon Walker, Stella Sora, Busty Burst, Star Savior, Last Origin, Rebellion Gilgamesh, and more. Complete wiki with character databases, damage mechanics, daily reset timers, and tools.',
  AUTHOR: 'GachaWiki',
  DEFAULT_IMAGE: '/images/about.jpg',
  SOCIAL: {
    GITHUB: 'https://github.com/boring877/gacha-wiki',
    X: 'https://x.com/GachaJunkie888',
    DISCORD: 'https://discord.gg/YdWFddQKR8',
  },
  // Webhooks are handled server-side only for security
} as const;

// Backward compatibility exports
export const SITE_TITLE = SITE.TITLE;
export const SITE_DESCRIPTION = SITE.DESCRIPTION;
