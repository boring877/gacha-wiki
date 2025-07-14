// Centralized SEO Configuration and Utilities
// This file manages all SEO-related functionality across games

import { SITE, GAMES } from '../consts';

// Global SEO Configuration (imported from consts.ts)
export const GLOBAL_SEO = {
  siteName: SITE.TITLE,
  author: SITE.AUTHOR,
  defaultImage: SITE.DEFAULT_IMAGE,
  social: {
    github: SITE.SOCIAL.GITHUB,
    youtube: SITE.SOCIAL.YOUTUBE,
    discord: SITE.SOCIAL.DISCORD,
    x: SITE.SOCIAL.X,
    rumble: SITE.SOCIAL.RUMBLE,
  },
};

// Game-specific SEO configurations (enhanced with consts.ts integration)
export const GAME_SEO_CONFIG = {
  [GAMES.ZONE_NOVA.KEY]: {
    gameName: GAMES.ZONE_NOVA.NAME,
    keywords: [
      GAMES.ZONE_NOVA.NAME,
      'gacha game',
      'character guides',
      'game wiki',
      'RPG',
      'memories',
      'rifts',
      'damage mechanics',
    ],
    themeColor: GAMES.ZONE_NOVA.THEME_COLOR,
    description: `Complete guide and wiki for ${GAMES.ZONE_NOVA.NAME} gacha game with character guides, damage mechanics, and more`,
    genres: ['RPG', 'Gacha', 'Strategy'],
    platform: 'Mobile',
  },
  [GAMES.SILVER_AND_BLOOD.KEY]: {
    gameName: GAMES.SILVER_AND_BLOOD.NAME,
    keywords: [
      GAMES.SILVER_AND_BLOOD.NAME,
      'vampire game',
      'gacha game',
      'character guides',
      'game wiki',
      'RPG',
    ],
    themeColor: GAMES.SILVER_AND_BLOOD.THEME_COLOR,
    description: `Complete guide and wiki for ${GAMES.SILVER_AND_BLOOD.NAME} vampire game`,
    genres: ['RPG', 'Gacha', 'Strategy'],
    platform: 'Mobile',
  },
  // Add new games here as needed
};

// Generate game-specific keywords
export function generateGameKeywords(gameKey, additionalKeywords = []) {
  const gameConfig = GAME_SEO_CONFIG[gameKey];
  if (!gameConfig) return [];

  return [...gameConfig.keywords, ...additionalKeywords].join(', ');
}

// Generate structured data for games
export function generateGameStructuredData(gameKey, customDescription = null) {
  const gameConfig = GAME_SEO_CONFIG[gameKey];
  if (!gameConfig) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: gameConfig.gameName,
    description: customDescription || gameConfig.description,
    genre: gameConfig.genres,
    platform: gameConfig.platform,
    publisher: {
      '@type': 'Organization',
      name: GLOBAL_SEO.siteName,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };
}

// Generate character structured data
export function generateCharacterStructuredData(gameKey, character) {
  const gameConfig = GAME_SEO_CONFIG[gameKey];
  if (!gameConfig) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGameCharacter',
    name: character.name,
    description:
      character.description || `${character.name} character guide for ${gameConfig.gameName}`,
    image: character.image,
    isPartOf: {
      '@type': 'VideoGame',
      name: gameConfig.gameName,
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Rarity',
        value: character.rarity || 'Unknown',
      },
      {
        '@type': 'PropertyValue',
        name: 'Class',
        value: character.class || character.role || 'Unknown',
      },
      {
        '@type': 'PropertyValue',
        name: 'Faction',
        value: character.faction || 'Unknown',
      },
    ],
  };
}

// Generate SEO-optimized titles
export function generateTitle(gameKey, pageType, specificData = {}) {
  const gameConfig = GAME_SEO_CONFIG[gameKey];
  if (!gameConfig) return GLOBAL_SEO.siteName;

  const templates = {
    game: `${gameConfig.gameName} - ${GLOBAL_SEO.siteName}`,
    character: `${specificData.name} - ${gameConfig.gameName} Character Guide | ${GLOBAL_SEO.siteName}`,
    characters: `${gameConfig.gameName} Characters - Complete Guide | ${GLOBAL_SEO.siteName}`,
    guide: `${specificData.title} - ${gameConfig.gameName} Guide | ${GLOBAL_SEO.siteName}`,
    tier_list: `${gameConfig.gameName} Tier List - Best Characters | ${GLOBAL_SEO.siteName}`,
    update: `${specificData.title} - ${gameConfig.gameName} Update | ${GLOBAL_SEO.siteName}`,
  };

  return templates[pageType] || `${gameConfig.gameName} - ${GLOBAL_SEO.siteName}`;
}

// Generate SEO-optimized descriptions
export function generateDescription(gameKey, pageType, specificData = {}) {
  const gameConfig = GAME_SEO_CONFIG[gameKey];
  if (!gameConfig) return gameConfig.description;

  const templates = {
    game: gameConfig.description,
    character: `Complete ${specificData.name} character guide for ${gameConfig.gameName}. ${specificData.rarity || ''} ${specificData.class || ''} with detailed stats, skills, builds, and team compositions.`,
    characters: `Complete character database for ${gameConfig.gameName}. Detailed guides, tier lists, builds, and stats for all playable characters.`,
    guide: `${specificData.description || ''} Complete guide for ${gameConfig.gameName} players.`,
    tier_list: `${gameConfig.gameName} tier list ranking the best characters. Updated rankings with detailed analysis and recommendations.`,
    update: `${specificData.description || ''} Latest ${gameConfig.gameName} update news and patch notes.`,
  };

  return templates[pageType] || gameConfig.description;
}

// Get game configuration
export function getGameConfig(gameKey) {
  return GAME_SEO_CONFIG[gameKey] || null;
}

// Add new game configuration
export function addGameConfig(gameKey, config) {
  GAME_SEO_CONFIG[gameKey] = {
    ...config,
    // Ensure required fields
    keywords: config.keywords || [],
    themeColor: config.themeColor || '#4a90e2',
    description: config.description || `Complete guide for ${config.gameName}`,
    genres: config.genres || ['RPG', 'Gacha'],
    platform: config.platform || 'Mobile',
  };
}
