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
  'tier list maker',
  'team builder',
  'gacha calculator',
  'free gacha tools',
  // Clock/Reset time keywords (high search volume across all games)
  'gacha daily reset',
  'gacha reset time',
  'gacha reset times',
  'gacha server time',
  'gacha game timer',
  'gacha game reset time',
  'gacha time reset',
  'gacha reset',
  'daily reset',
  'server reset time',
  'gacha wiki',
  'gachawiki',
  'gacha game database',
  'gacha game wiki',
] as const;

// Game-specific SEO configurations with proper typing
const GAME_SEO_CONFIG: Record<string, GameSEOConfig> = {
  [GAMES.ZONE_NOVA.KEY]: {
    gameName: GAMES.ZONE_NOVA.NAME,
    keywords: [
      // Core game names and variations (from GSC search data)
      GAMES.ZONE_NOVA.NAME,
      'zone nova',
      'zonenova',
      'zone-nova',
      'zona nova',
      'zone nove',
      'zeno nova',
      'nova zone',
      // Japanese keywords (high search volume)
      'ゾーンノヴァ',
      'ゾーンノヴァ 最強',
      'ゾーンノヴァ wiki',
      'ゾーンノヴァ 攻略',
      'ゾーンノヴァ コード',
      'zonenova コード',
      // Tier list keywords
      'zone nova tier list',
      'zone nova tier',
      'tier list zone nova',
      'zonenova tier list',
      'zonenova tier',
      'nova zone tier list',
      'zone nova tier list 2025',
      'character tier list',
      'best characters',
      'top tier characters',
      'worst characters',
      'characters to avoid',
      'SSR characters',
      'character ranking',
      // Build and guide keywords
      'zone nova build',
      'zone nova builds',
      'zone nova guide',
      'zone nova characters',
      'zone nova wiki',
      'zone nova database',
      'zone nova tips',
      'character builds',
      'meta builds',
      'beginner guide',
      // Code keywords (high CTR)
      'zone nova code',
      'zone nova codes',
      'zone nova redeem code',
      'code zone nova',
      'redeem code zone nova',
      'kode redeem zone nova',
      'zone nova シリアル コード',
      // Game mechanics
      'damage mechanics',
      'skill guide',
      'team composition',
      'team synergy',
      'zone nova team',
      'memory cards',
      'memories guide',
      'best memories',
      'rifts strategy',
      'node tree',
      'awakening materials',
      'damage calculator',
      'pvp guide',
      'endgame content',
      // General gacha keywords
      'gacha game',
      'character guides',
      'game wiki',
      'RPG',
      'hero collection',
      'gacha strategy',
      'mobile RPG',
      'anime game',
      'zone nova reroll',
      'zone nova download',
      'zone nova game',
    ] as const,
    themeColor: GAMES.ZONE_NOVA.THEME_COLOR,
    description: `Complete guide and wiki for ${GAMES.ZONE_NOVA.NAME} gacha game with character guides, damage mechanics, and more`,
    genres: ['RPG', 'Gacha', 'Strategy'] as const,
    platform: 'Mobile',
  },
  [GAMES.SILVER_AND_BLOOD.KEY]: {
    gameName: GAMES.SILVER_AND_BLOOD.NAME,
    keywords: [
      // Core game names and variations
      GAMES.SILVER_AND_BLOOD.NAME,
      'silver and blood',
      'silver blood',
      'sab',
      'blood and silver',
      'silver & blood',
      // Tier list keywords (CRITICAL - currently ranking position 31-59)
      'silver and blood tier list',
      'silver and blood tier',
      'tier list silver and blood',
      'silver and blood tier list 2025',
      'blood and silver tier list',
      'sab tier list',
      'silver blood tier list',
      'best characters silver and blood',
      'worst characters silver and blood',
      'characters to avoid',
      'bad characters',
      'low tier characters',
      'skip characters',
      'reroll guide',
      'reroll tier list',
      // Wiki and guide keywords
      'silver and blood wiki',
      'silver and blood characters',
      'silver and blood guide',
      'silver blood wiki',
      'sab wiki',
      'silver and blood database',
      'silver and blood builds',
      'silver and blood tips',
      'beginner guide',
      'character guide',
      // Character specific (from GSC data)
      'silver and blood dutchman revenge',
      "dutchman's revenge silver and blood",
      'silver and blood clan hunt',
      'silver and blood synergy',
      'silver and blood reset time',
      'silver and blood daily reset time',
      'silver and blood equipment',
      // Character names (from searches)
      'timeless aiona',
      'fleeting bella',
      'transcendent ami',
      'transcendent hati',
      'van helsing',
      'acappella',
      'gilrain silver and blood',
      'silver and blood ressa',
      'silver and blood limine',
      'silver and blood mass',
      'silver and blood julius',
      'silver and blood agnes',
      'silver and blood sirene',
      'silver and blood bella',
      // Game mechanics
      'vampire game',
      'vampire characters',
      'blood mechanics',
      'clan system',
      'clan hunt',
      'boss raids',
      'pvp arena',
      'character builds',
      'meta builds',
      'character tier list',
      'character ranking',
      'summon guide',
      // General gacha keywords
      'gacha game wiki',
      'gacha game',
      'character guides',
      'game wiki',
      'RPG',
      'dark fantasy gacha',
      'vampire gacha',
      'dark fantasy rpg',
      'gothic game',
      'mobile vampire game',
      'anime style game',
      'hero collection',
      'game strategy',
    ] as const,
    themeColor: GAMES.SILVER_AND_BLOOD.THEME_COLOR,
    description: `Complete guide and wiki for ${GAMES.SILVER_AND_BLOOD.NAME} - Dark fantasy vampire gacha game with character guides, builds, tier lists, and comprehensive game mechanics`,
    genres: ['RPG', 'Gacha', 'Strategy'] as const,
    platform: 'Mobile',
  },
  [GAMES.HORIZON_WALKER.KEY]: {
    gameName: GAMES.HORIZON_WALKER.NAME,
    keywords: [
      // Core game names and variations
      GAMES.HORIZON_WALKER.NAME,
      'horizon walker',
      'horizonwalker',
      'hw',
      'hw wiki',
      // Japanese/Korean keywords (from GSC)
      'ホライゾンウォーカー',
      'ホライゾンウォーカー tier',
      'ホライゾンウォーカー ティア',
      '호라이즌 워커 티어',
      '호라이즌워커 티어',
      // Tier list keywords
      'horizon walker tier list',
      'horizon walker tier',
      'tier list horizon walker',
      'horizon walker tier list 2025',
      'horizonwalker tier list',
      'horizonwalker tier',
      'horizon walker character tier list',
      'horizon walker vanguard tier list',
      'horizon walker weapon tier list',
      'horizon walker meta',
      // Wiki and guide keywords
      'horizon walker wiki',
      'horizonwalker wiki',
      'horizon walker characters',
      'horizon walker guide',
      'horizon walker database',
      'horizon walker tips',
      'horizon walker strategies',
      'horizon walker beginner guide',
      'horizon walker game wiki',
      'horizon walker unofficial wiki',
      // Gift keywords (high search volume)
      'horizon walker gift guide',
      'horizon walker gifts',
      'horizon walker gift',
      'gift guide horizon walker',
      'horizon walker gift list',
      'horizon walker best gifts',
      'horizon walker affection',
      'horizon walker affection guide',
      // Character specific (from GSC top searches)
      'kim ga young horizon walker',
      'horizon walker kim ga young',
      'horizon walker yui',
      'yui horizon walker',
      'horizon walker bella',
      'horizon walker emilia',
      'horizon walker lisandria',
      'horizon walker kalina',
      'horizon walker osla',
      'horizon walker erneste',
      'yeon chae young',
      'yeon chae-young',
      'horizon walker yeon chae young',
      'so joo hee horizon walker',
      'horizon walker kaul',
      'horizon walker everette',
      'horizon walker marhim',
      'horizon walker vlissing',
      // Build keywords
      'horizon walker builds',
      'horizon walker build guide',
      'horizon walker emilia build',
      'horizon walker character builds',
      'mercenary builds',
      'meta builds',
      'character builds',
      // Game mechanics
      'horizon walker stigma',
      'horizon walker stigma guide',
      'horizon walker weapons',
      'horizon walker ap guide',
      'forsaken entities',
      'purified essence',
      'horizon walker purified essence',
      // General keywords
      'fantasy rpg gacha',
      'adventure gacha',
      'action rpg',
      'mobile rpg',
      'gacha game',
      'character guides',
      'game wiki',
      'RPG',
      'best characters',
      'top tier heroes',
      'character tier list',
      'endgame content',
      'pvp guide',
      'team composition',
      'horizon walker all characters',
      'horizon walker personajes',
    ] as const,
    themeColor: GAMES.HORIZON_WALKER.THEME_COLOR,
    description: `Complete guide and wiki for ${GAMES.HORIZON_WALKER.NAME} - Post-apocalyptic gacha RPG where humanity transcends mortality to battle Forsaken Entities through dimensional rifts`,
    genres: ['Fantasy RPG', 'Gacha', 'Adventure'] as const,
    platform: 'Mobile',
  },
  [GAMES.STELLA_SORA.KEY]: {
    gameName: GAMES.STELLA_SORA.NAME,
    keywords: [
      // Core game names and variations
      GAMES.STELLA_SORA.NAME,
      'stella sora',
      'stellasora',
      'stellar sora',
      'ステラソラ',
      // Wiki keywords (470 impressions, position 6.86 - needs improvement)
      'stella sora wiki',
      'stellasora wiki',
      'stellar sora wiki',
      'stella sora db',
      'stellasoradb',
      'stella sora database',
      'wiki stella sora',
      // Emblem keywords (high search volume - 129 clicks)
      'stella sora emblem',
      'stella sora emblem stats',
      'stella sora emblem stat',
      'stella sora emblem guide',
      'stella sora emblems',
      'emblem stella sora',
      'emblem sora',
      'sora emblem',
      'stella sora emblem build',
      'stella sora emblem list',
      // Quiz/Ascension keywords (119 clicks)
      'stella sora quiz',
      'stella sora quiz answers',
      'stella sora questions and answers',
      'stella sora question answer',
      'stella sora ascension qa',
      'stella sora ascension questions',
      'stella sora ascension answers',
      'stella sora monolith favorite number',
      "what's the monolith favorite number",
      'monolith favorite number stella sora',
      'how would you define aiming high stella sora',
      'what time do you think counts as staying up late stella sora',
      'take a guess which kind of trekker do i admire more',
      // Character builds (top searched)
      'stella sora shia build',
      'shia build stella sora',
      'stella sora fuyuka build',
      'fuyuka build stella sora',
      'stella sora build',
      'stella sora builds',
      'stella sora team build',
      'stella sora character build',
      'stella sora shia team',
      'shia team stella sora',
      // Character names (from GSC)
      'stella sora shia',
      'stella sora fuyuka',
      'stella sora chitose',
      'stella sora nazuka',
      'stella sora nazuna',
      'stella sora laru',
      'snowish laru',
      'stella sora snowish laru',
      'stella sora freesia',
      'stella sora mistique',
      'stella sora minova',
      'stella sora nanoha',
      'stella sora gerie',
      'stella sora coronis',
      'stella sora chixia',
      'stella sora flora',
      'stella sora ann',
      'stella sora cosette',
      'stella sora kasimira',
      'stella sora teresa',
      'stella sora tilia',
      'stella sora ridge',
      'stella sora jinglin',
      'stella sora shimiao',
      // Banner keywords
      'stella sora banners',
      'stella sora banner',
      'stella sora banner schedule',
      'stella sora banner history',
      'stella sora banner list',
      'stella sora upcoming banners',
      'stella sora current banner',
      'stella sora limited banner',
      // Dating/Events keywords
      'stella sora dates special moments',
      'stella sora dating',
      'stella sora date choices',
      'stella sora date events',
      'stella sora gift guide',
      'stella sora gifts',
      // Game mechanics
      'stella sora derivative damage',
      'derivative damage stella sora',
      'stella sora derivative crit rate',
      'stella sora minion damage',
      'stella sora mark damage',
      'stella sora charge efficiency',
      'stella sora disc',
      'stella sora discs',
      'stella sora disc guide',
      'stella sora daily reset time',
      'stella sora reset time',
      'stella sora maintenance countdown',
      // Shop events
      'stella sora shop events',
      'stella sora beyond the dream',
      'stella sora chapter 4 all to the end',
      'clear main story chapter 4 all to the end',
      // General
      'stella sora characters',
      'stella sora guide',
      'stella sora tips',
      'stella sora strategies',
      'stella sora all characters',
      'stella sora character list',
      'stella sora events',
      'stella sora event',
      'stella sora teams',
      'stella sora team',
      'fantasy rpg gacha',
      'mobile rpg',
      'gacha game',
      'character guides',
      'game wiki',
      'RPG',
      'best characters',
      'character builds',
      'meta builds',
      'beginner guide',
    ] as const,
    themeColor: GAMES.STELLA_SORA.THEME_COLOR,
    description: `Complete guide and wiki for ${GAMES.STELLA_SORA.NAME} - Fantasy RPG exploring the Nova Continent with Trekker collection and top-down action gameplay`,
    genres: ['Fantasy RPG', 'Gacha', 'Adventure'] as const,
    platform: 'Mobile',
  },
  [GAMES.BUSTY_BURST.KEY]: {
    gameName: GAMES.BUSTY_BURST.NAME,
    keywords: [
      // Core game names and variations (from GSC)
      GAMES.BUSTY_BURST.NAME,
      'busty burst fantasy',
      'busty fantasy burst',
      'busty burst',
      'busty fantasy',
      'busty burst fantasy',
      'bust fantasy burst',
      'busty fantasy burts',
      'busty fantasy bust',
      'funbag fantasy burst',
      'breast fantasy burst',
      '巨乳ファンタジーバースト',
      // Kyonyuu variations (high search volume)
      'kyonyu burst',
      'kyonyuu burst',
      'kyonyuu fantasy burst',
      'kyonyu fantasy burst',
      'kyonyuu fantasy',
      'kyonyuu fantasy burst wiki',
      'kyonyuu fantasy burst tier list',
      'kyonyuu fantasy burst guide',
      'kyonyuu fantasy burst characters',
      'kyonyuu fantasy burst download',
      'kyonyuu fantasy burst game',
      'kyonyu burst wiki',
      // Tier list keywords (89 clicks - your #4 performer)
      'busty fantasy burst tier list',
      'busty fantasy tier list',
      'busty burst fantasy tier list',
      'busty fantasy burst tier',
      'busty fantasy burst tierlist',
      'kyonyuu fantasy tier list',
      'paladin tier list',
      'best paladins',
      // Wiki and guide keywords
      'busty fantasy burst wiki',
      'busty burst fantasy wiki',
      'busty fantasy burst guide',
      'busty burst fantasy guide',
      'kyonyu burst guide',
      'busty fantasy burst gameplay',
      // Code keywords
      'busty fantasy burst codes',
      'busty fantasy burst code',
      'busty fantasy burst serial code',
      // Download/platform keywords
      'busty fantasy burst download',
      'busty fantasy burst apk',
      'busty fantasy burst pc',
      'busty fantasy burst mod apk',
      'busty fantasy burst mod',
      'busty fantasy burst ios',
      'busty fantasy burst reroll',
      'busty fantasy burst discord',
      // Game mechanics
      'adult gacha game',
      'mature content rpg',
      'paladin summoning',
      'lord system',
      'duel combat',
      'rufus story',
      'kingdom of vern',
      'otherworldly paladins',
      'fantasy rpg',
      'character collection',
      'adult anime game',
      'mature gacha',
      'paladin database',
      'summoning guide',
      'character builds',
      'team composition',
      'character guide',
      'game wiki',
      'RPG',
      'beginner guide',
      'paladin builds',
      'busty day',
    ] as const,
    themeColor: GAMES.BUSTY_BURST.THEME_COLOR,
    description: `Complete guide and wiki for ${GAMES.BUSTY_BURST.NAME} - Adult fantasy RPG featuring Rufus's journey to summon otherworldly paladins and save his lordship through strategic duels`,
    genres: ['Adult RPG', 'Gacha', 'Fantasy'] as const,
    platform: 'Mobile',
  },
  [GAMES.TAIMANIN_SQUAD.KEY]: {
    gameName: GAMES.TAIMANIN_SQUAD.NAME,
    keywords: [
      GAMES.TAIMANIN_SQUAD.NAME,
      'taimanin squad',
      'taimanin',
      'action taimanin',
      'taimanin rpg',
      'collecting rpg',
      'character collection',
      'ninja game',
      'taimanin franchise',
      'igawa asagi',
      'taimanin squad wiki',
      'taimanin squad guide',
      'taimanin squad characters',
      'gacha game',
      'mobile rpg',
      'action rpg',
      'ninja gacha',
      'taimanin squad pre-registration',
      'taimanin squad download',
      'taimanin squad android',
      'taimanin squad ios',
      'taimanin squad pc',
      'summon tickets',
      'premium summon',
      'taimanin stones',
      'exclusive weapons',
      'character builds',
      'tier list',
      'best characters',
      'beginner guide',
      'game wiki',
      'RPG',
    ] as const,
    themeColor: GAMES.TAIMANIN_SQUAD.THEME_COLOR,
    description: `Complete guide and wiki for ${GAMES.TAIMANIN_SQUAD.NAME} - Collecting RPG featuring legendary Taimanin characters with character guides, tier lists, and game strategies`,
    genres: ['Collecting RPG', 'Gacha', 'Action'] as const,
    platform: 'Mobile, PC',
  },
} as const;

/**
 * Generate game-specific keywords string for meta tags
 * @param gameKey - The game identifier (e.g., 'zone-nova', 'silver-and-blood', 'horizon-walker')
 * @param additionalKeywords - Optional additional keywords to include
 * @returns Comma-separated keywords string, empty string if game not found
 */
export function generateGameKeywords(
  gameKey: string,
  additionalKeywords: readonly string[] = []
): string {
  const gameConfig = GAME_SEO_CONFIG[gameKey];
  if (!gameConfig) {
    // Game configuration not found
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
    // Game configuration not found
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
    // Game configuration not found
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
    // Game configuration not found
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
    // Game configuration not found
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
    // Game configuration not found
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
    // Game configuration already exists - overwriting
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

// Additional structured data types for enhanced SEO
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

export interface StructuredDataBreadcrumb {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}

export interface StructuredDataFAQ {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

export interface StructuredDataHowTo {
  '@context': 'https://schema.org';
  '@type': 'HowTo';
  name: string;
  description: string;
  image?: string;
  step: Array<{
    '@type': 'HowToStep';
    name: string;
    text: string;
    image?: string;
  }>;
}

/**
 * Generate breadcrumb structured data for navigation hierarchy
 * @param breadcrumbs - Array of breadcrumb items with name and URL
 * @returns Breadcrumb structured data object
 */
export function generateBreadcrumbStructuredData(
  breadcrumbs: BreadcrumbItem[]
): StructuredDataBreadcrumb {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/**
 * Generate FAQ structured data for question-answer content
 * @param faqs - Array of FAQ items with questions and answers
 * @returns FAQ structured data object
 */
export function generateFAQStructuredData(faqs: FAQItem[]): StructuredDataFAQ {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate HowTo structured data for tutorials and guides
 * @param name - Name of the tutorial/guide
 * @param description - Description of what the guide teaches
 * @param steps - Array of steps in the tutorial
 * @param image - Optional main image for the guide
 * @returns HowTo structured data object
 */
export function generateHowToStructuredData(
  name: string,
  description: string,
  steps: HowToStep[],
  image?: string
): StructuredDataHowTo {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    image: image,
    step: steps.map(step => ({
      '@type': 'HowToStep',
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  };
}

/**
 * Generate breadcrumb data for character pages
 * @param gameKey - The game identifier
 * @param gameName - The game display name
 * @param characterName - The character name
 * @returns Array of breadcrumb items
 */
export function generateCharacterBreadcrumbs(
  gameKey: string,
  gameName: string,
  characterName: string
): BreadcrumbItem[] {
  return [
    { name: 'Home', url: 'https://gachawiki.info/' },
    { name: gameName, url: `https://gachawiki.info/guides/${gameKey}/` },
    { name: 'Characters', url: `https://gachawiki.info/guides/${gameKey}/characters/` },
    {
      name: characterName,
      url: `https://gachawiki.info/guides/${gameKey}/characters/${characterName.toLowerCase().replace(/\s+/g, '-')}/`,
    },
  ];
}

/**
 * Generate FAQ data for character pages
 * @param characterName - The character name
 * @param gameName - The game name
 * @param characterData - Character-specific data
 * @returns Array of FAQ items
 */
export function generateCharacterFAQs(
  characterName: string,
  gameName: string,
  characterData?: any
): FAQItem[] {
  return [
    {
      question: `What is the best build for ${characterName} in ${gameName}?`,
      answer: `The optimal build for ${characterName} focuses on ${characterData?.class || 'their'} strengths with recommended memory cards, proper node tree upgrades, and ideal team compositions.`,
    },
    {
      question: `How do I get ${characterName} in ${gameName}?`,
      answer: `${characterName} can be obtained through the standard banner with ${characterData?.rarity || 'base'} rarity rates. Special events may feature increased drop rates.`,
    },
    {
      question: `What are ${characterName}'s skills and abilities?`,
      answer: `${characterName} has unique skills including normal attacks, auto skills, ultimate abilities, and passives that make them effective in ${characterData?.role || 'combat'} situations.`,
    },
  ];
}

// Types are already exported above with their definitions
