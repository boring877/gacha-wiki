// Centralized SEO Configuration and Utilities with TypeScript
// This file manages all SEO-related functionality across games with proper type safety

import { SITE, GAMES } from '../consts';

// Type definitions for better code quality and IntelliSense
export interface SocialLinks {
  readonly github: string;
  readonly youtube: string;
  readonly discord: string;
  readonly x: string;
  readonly rumble: string;
}

export interface GlobalSEOConfig {
  readonly siteName: string;
  readonly author: string;
  readonly defaultImage: string;
  readonly social: SocialLinks;
}

export interface GameSEOConfig {
  readonly gameName: string;
  readonly keywords: readonly string[];
  readonly themeColor: string;
  readonly description: string;
  readonly genres: readonly string[];
  readonly platform: string;
}

export interface StructuredDataGame {
  readonly '@context': 'https://schema.org';
  readonly '@type': 'VideoGame';
  readonly name: string;
  readonly description: string;
  readonly genre: readonly string[];
  readonly platform: string;
  readonly publisher: {
    readonly '@type': 'Organization';
    readonly name: string;
    readonly sameAs?: readonly string[];
    readonly additionalType?: string;
  };
  readonly offers: {
    readonly '@type': 'Offer';
    readonly price: string;
    readonly priceCurrency: string;
    readonly availability: string;
  };
}

export interface StructuredDataCharacter {
  readonly '@context': 'https://schema.org';
  readonly '@type': 'VideoGameCharacter';
  readonly name: string;
  readonly description: string;
  readonly image?: string;
  readonly isPartOf: {
    readonly '@type': 'VideoGame';
    readonly name: string;
  };
  readonly additionalProperty: readonly {
    readonly '@type': 'PropertyValue';
    readonly name: string;
    readonly value: string;
  }[];
}

// Global SEO Configuration (imported from consts.ts)
export const GLOBAL_SEO: GlobalSEOConfig = {
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
} as const;

// Open Source Project Keywords for enhanced discoverability
export const OPEN_SOURCE_KEYWORDS = [
  'open source',
  'github',
  'free wiki',
  'community project',
  'open source wiki',
  'free game guides',
] as const;

// Game-specific SEO configurations with proper typing
const GAME_SEO_CONFIG: Record<string, GameSEOConfig> = {
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
    ] as const,
    themeColor: GAMES.ZONE_NOVA.THEME_COLOR,
    description: `Complete guide and wiki for ${GAMES.ZONE_NOVA.NAME} gacha game with character guides, damage mechanics, and more`,
    genres: ['RPG', 'Gacha', 'Strategy'] as const,
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
    ] as const,
    themeColor: GAMES.SILVER_AND_BLOOD.THEME_COLOR,
    description: `Complete guide and wiki for ${GAMES.SILVER_AND_BLOOD.NAME} vampire game`,
    genres: ['RPG', 'Gacha', 'Strategy'] as const,
    platform: 'Mobile',
  },
} as const;

/**
 * Generate game-specific keywords string for meta tags
 * @param gameKey - The game identifier (e.g., 'zone-nova', 'silver-and-blood')
 * @param additionalKeywords - Optional additional keywords to include
 * @returns Comma-separated keywords string, empty string if game not found
 */
export function generateGameKeywords(
  gameKey: string,
  additionalKeywords: readonly string[] = []
): string {
  const gameConfig = GAME_SEO_CONFIG[gameKey];
  if (!gameConfig) {
    console.warn(`SEO: Game configuration not found for key: ${gameKey}`);
    return '';
  }

  return [...gameConfig.keywords, ...OPEN_SOURCE_KEYWORDS, ...additionalKeywords].join(', ');
}

/**
 * Generate structured data for games following Schema.org VideoGame specification
 * @param gameKey - The game identifier
 * @param customDescription - Optional custom description, falls back to game config description
 * @returns Structured data object or null if game not found
 */
export function generateGameStructuredData(
  gameKey: string,
  customDescription?: string | null
): StructuredDataGame | null {
  const gameConfig = GAME_SEO_CONFIG[gameKey];
  if (!gameConfig) {
    console.warn(`SEO: Game configuration not found for key: ${gameKey}`);
    return null;
  }

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
      sameAs: [
        GLOBAL_SEO.social.github,
        GLOBAL_SEO.social.youtube,
        GLOBAL_SEO.social.discord,
        GLOBAL_SEO.social.x,
        GLOBAL_SEO.social.rumble,
      ].filter(Boolean),
      additionalType: 'https://schema.org/OpenSourceProject',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  } as const;
}

/**
 * Generate character structured data following Schema.org VideoGameCharacter specification
 * @param gameKey - The game identifier
 * @param character - Character data object
 * @returns Character structured data object or null if game not found
 */
export function generateCharacterStructuredData(
  gameKey: string,
  character: {
    readonly name: string;
    readonly description?: string;
    readonly image?: string;
    readonly rarity?: string;
    readonly class?: string;
    readonly role?: string;
    readonly faction?: string;
  }
): StructuredDataCharacter | null {
  const gameConfig = GAME_SEO_CONFIG[gameKey];
  if (!gameConfig) {
    console.warn(`SEO: Game configuration not found for key: ${gameKey}`);
    return null;
  }

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
    ] as const,
  } as const;
}

/**
 * Generate SEO-optimized page titles with consistent formatting
 * @param gameKey - The game identifier
 * @param pageType - Type of page (game, character, guide, etc.)
 * @param specificData - Page-specific data for title generation
 * @returns Formatted title string
 */
export function generateTitle(
  gameKey: string,
  pageType: 'game' | 'character' | 'characters' | 'guide' | 'tier_list' | 'update',
  specificData: { readonly name?: string; readonly title?: string } = {}
): string {
  const gameConfig = GAME_SEO_CONFIG[gameKey];
  if (!gameConfig) {
    console.warn(`SEO: Game configuration not found for key: ${gameKey}`);
    return GLOBAL_SEO.siteName;
  }

  const titleTemplates: Record<typeof pageType, string> = {
    game: `${gameConfig.gameName} - ${GLOBAL_SEO.siteName}`,
    character: `${specificData.name} - ${gameConfig.gameName} Character Guide | ${GLOBAL_SEO.siteName}`,
    characters: `${gameConfig.gameName} Characters - Complete Guide | ${GLOBAL_SEO.siteName}`,
    guide: `${specificData.title} - ${gameConfig.gameName} Guide | ${GLOBAL_SEO.siteName}`,
    tier_list: `${gameConfig.gameName} Tier List - Best Characters | ${GLOBAL_SEO.siteName}`,
    update: `${specificData.title} - ${gameConfig.gameName} Update | ${GLOBAL_SEO.siteName}`,
  } as const;

  return titleTemplates[pageType];
}

/**
 * Generate SEO-optimized meta descriptions
 * @param gameKey - The game identifier
 * @param pageType - Type of page
 * @param specificData - Page-specific data for description generation
 * @returns Formatted description string
 */
export function generateDescription(
  gameKey: string,
  pageType: 'game' | 'character' | 'characters' | 'guide' | 'tier_list' | 'update',
  specificData: {
    readonly name?: string;
    readonly title?: string;
    readonly description?: string;
    readonly rarity?: string;
    readonly class?: string;
  } = {}
): string {
  const gameConfig = GAME_SEO_CONFIG[gameKey];
  if (!gameConfig) {
    console.warn(`SEO: Game configuration not found for key: ${gameKey}`);
    return 'Game guide and wiki';
  }

  const descriptionTemplates: Record<typeof pageType, string> = {
    game: gameConfig.description,
    character: `Complete ${specificData.name} character guide for ${gameConfig.gameName}. ${specificData.rarity || ''} ${specificData.class || ''} with detailed stats, skills, builds, and team compositions.`,
    characters: `Complete character database for ${gameConfig.gameName}. Detailed guides, tier lists, builds, and stats for all playable characters.`,
    guide: `${specificData.description || ''} Complete guide for ${gameConfig.gameName} players.`,
    tier_list: `${gameConfig.gameName} tier list ranking the best characters. Updated rankings with detailed analysis and recommendations.`,
    update: `${specificData.description || ''} Latest ${gameConfig.gameName} update news and patch notes.`,
  } as const;

  return descriptionTemplates[pageType];
}

/**
 * Get game configuration safely with error handling
 * @param gameKey - The game identifier
 * @returns Game configuration or null if not found
 */
export function getGameConfig(gameKey: string): GameSEOConfig | null {
  const config = GAME_SEO_CONFIG[gameKey];
  if (!config) {
    console.warn(`SEO: Game configuration not found for key: ${gameKey}`);
  }
  return config || null;
}

/**
 * Add new game configuration dynamically (for future games)
 * @param gameKey - The game identifier
 * @param config - Game configuration object
 * @note Currently unused but available for dynamic game addition in the future
 */
export function addGameConfig(
  gameKey: string,
  config: Partial<GameSEOConfig> & { gameName: string }
): void {
  if (GAME_SEO_CONFIG[gameKey]) {
    console.warn(`SEO: Game configuration already exists for key: ${gameKey}. Overwriting.`);
  }

  (GAME_SEO_CONFIG as Record<string, GameSEOConfig>)[gameKey] = {
    gameName: config.gameName,
    keywords: config.keywords || [],
    themeColor: config.themeColor || '#4a90e2',
    description: config.description || `Complete guide for ${config.gameName}`,
    genres: config.genres || ['RPG', 'Gacha'],
    platform: config.platform || 'Mobile',
  };
}

/**
 * Validate that all required SEO data is present
 * @param data - SEO data to validate
 * @returns Validation result with any missing fields
 */
export function validateSEOData(data: {
  title?: string;
  description?: string;
  keywords?: string[];
}): { isValid: boolean; missingFields: string[] } {
  const missingFields: string[] = [];

  if (!data.title || data.title.trim().length === 0) {
    missingFields.push('title');
  }

  if (!data.description || data.description.trim().length === 0) {
    missingFields.push('description');
  }

  if (!data.keywords || data.keywords.length === 0) {
    missingFields.push('keywords');
  }

  return {
    isValid: missingFields.length === 0,
    missingFields,
  };
}

// Types are already exported above with their definitions
