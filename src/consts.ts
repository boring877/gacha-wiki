// Centralized constants for the entire site
// Single source of truth for all site-wide configuration

// Site-wide constants
export const SITE = {
  TITLE: 'GachaWiki',
  DESCRIPTION:
    'Comprehensive guides, character builds, and game strategies for popular gacha games like Zone Nova and Silver and Blood. Complete wiki with character database, damage mechanics, and game strategies.',
  AUTHOR: 'GachaWiki',
  DEFAULT_IMAGE: '/images/about.jpg',
  SOCIAL: {
    GITHUB: 'https://github.com/boring877/gacha-wiki',
    YOUTUBE: 'https://www.youtube.com/@GachaJunkie888',
    DISCORD: 'https://discord.gg/JKCNtkSGNE',
    X: 'https://x.com/EcchiPen',
    RUMBLE: 'https://rumble.com/user/EcchiPen',
  },
  // Webhooks are handled server-side only for security
  // See scripts/send-discord-update.js for webhook handling
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
} as const;

// URL patterns (centralized to prevent duplication)
export const URLS = {
  ZONE_NOVA: {
    BASE: '/guides/zone-nova',
    CHARACTERS: '/guides/zone-nova/characters',
    CHARACTER_COMPARISON: '/guides/zone-nova/character-comparison',
    CHARACTER_RANKINGS: '/guides/zone-nova/character-rankings',
    MEMORIES: '/guides/zone-nova/memories',
    RIFTS: '/guides/zone-nova/rifts',
    RUNES: '/guides/zone-nova/runes',
    DAMAGE_MECHANICS: '/guides/zone-nova/damage-mechanics',
    CRAFTING: '/guides/zone-nova/crafting',
    UPDATES: '/guides/zone-nova/updates',
    REDEEM_CODES: '/guides/zone-nova/redeem-codes',
    SUMMON_FAQ: '/guides/zone-nova/summon-faq',
    CONTRIBUTING: '/guides/zone-nova/contributing',
    SURVEYS: '/guides/zone-nova/surveys',
  },
  SILVER_AND_BLOOD: {
    BASE: '/guides/silver-and-blood',
    CHARACTERS: '/guides/silver-and-blood/characters',
    CHARACTER_COMPARISON: '/guides/silver-and-blood/character-comparison',
    CHARACTER_RANKINGS: '/guides/silver-and-blood/character-rankings',
    DAMAGE_MECHANICS: '/guides/silver-and-blood/damage-mechanics',
    EVENTS: '/guides/silver-and-blood/events',
    SUMMON_FAQ: '/guides/silver-and-blood/summon-faq',
    WAIFU_GALLERY: '/guides/silver-and-blood/waifu-gallery',
    DUTCHMANS_REVENGE: '/guides/silver-and-blood/dutchmans-revenge',
  },
} as const;

// UI and pagination constants
export const UI = {
  UPDATES_PER_PAGE: 10,
  CHARACTERS_PER_PAGE: 20,
} as const;

// Backward compatibility exports
export const SITE_TITLE = SITE.TITLE;
export const SITE_DESCRIPTION = SITE.DESCRIPTION;
