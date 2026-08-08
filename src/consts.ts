// Centralized constants for the entire site
// Single source of truth for all site-wide configuration

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

// Game configurations
export const GAMES = {
  ZONE_NOVA: {
    KEY: 'zone-nova',
    NAME: 'Zone Nova',
    THEME_COLOR: '#4a90e2',
    DAMAGE_K_VALUE: 972.95,
    BASE_URL: '/guides/zone-nova',
  },
  SILVER_AND_BLOOD: {
    KEY: 'silver-and-blood',
    NAME: 'Silver and Blood',
    THEME_COLOR: '#5a7ba7',
    DAMAGE_K_VALUE: 1300,
    BASE_URL: '/guides/silver-and-blood',
  },
  HORIZON_WALKER: {
    KEY: 'horizon-walker',
    NAME: 'Horizon Walker',
    THEME_COLOR: '#e8a547',
    DAMAGE_K_VALUE: 1000,
    BASE_URL: '/guides/horizon-walker',
  },
  STELLA_SORA: {
    KEY: 'stella-sora',
    NAME: 'Stella Sora',
    THEME_COLOR: '#7dd3fc',
    DAMAGE_K_VALUE: 1000,
    BASE_URL: '/guides/stella-sora',
  },
  BUSTY_BURST: {
    KEY: 'busty-burst',
    NAME: 'Busty Burst Fantasy',
    THEME_COLOR: '#FF1493',
    DAMAGE_K_VALUE: 1000,
    BASE_URL: '/guides/busty-burst',
  },
  TAIMANIN_SQUAD: {
    KEY: 'taimanin-squad',
    NAME: 'Taimanin Squad',
    THEME_COLOR: '#6b5b7a',
    DAMAGE_K_VALUE: 1000,
    BASE_URL: '/guides/taimanin-squad',
  },
  LAST_ORIGIN_GLOBAL: {
    KEY: 'last-origin-global',
    NAME: 'Last Origin Global',
    THEME_COLOR: '#e63946',
    DAMAGE_K_VALUE: 1000,
    BASE_URL: '/guides/last-origin-global',
  },
  MAKE_DRAMA: {
    KEY: 'make-drama',
    NAME: 'Make Drama',
    THEME_COLOR: '#34d399',
    DAMAGE_K_VALUE: 1000,
    BASE_URL: '/guides/make-drama',
  },
  DESIRE_IMMORTAL_REALM: {
    KEY: 'desire-immortal-realm',
    NAME: 'Desire Immortal Realm',
    THEME_COLOR: '#3d5a6c',
    DAMAGE_K_VALUE: 1000,
    BASE_URL: '/guides/desire-immortal-realm',
  },
  STAR_SAVIOR: {
    KEY: 'star-savior',
    NAME: 'Star Savior',
    THEME_COLOR: '#5b4a9e',
    DAMAGE_K_VALUE: 1000,
    BASE_URL: '/guides/star-savior',
  },
  REBELLION_GILGAMESH: {
    KEY: 'rebellion-gilgamesh',
    NAME: 'Rebellion Gilgamesh',
    THEME_COLOR: '#c26b6b',
    DAMAGE_K_VALUE: 1000,
    BASE_URL: '/guides/rebellion-gilgamesh',
  },
} as const;

// Backward compatibility exports
export const SITE_TITLE = SITE.TITLE;
export const SITE_DESCRIPTION = SITE.DESCRIPTION;
