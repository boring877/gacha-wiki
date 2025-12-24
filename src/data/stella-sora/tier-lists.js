// Stella Sora Tier List Data
// Characters ranked by game mode and overall performance

import { STELLA_SORA_CHARACTERS } from './characters.js';

// Helper function to find character by name (case-insensitive)
// Prefers exact matches, then partial matches
const findCharacter = name => {
  const normalizedName = name.toLowerCase().trim();

  // First try exact match
  const exactMatch = STELLA_SORA_CHARACTERS.find(
    char => char.name.toLowerCase() === normalizedName
  );
  if (exactMatch) return exactMatch;

  // Then try starts with (to handle "Snowish Laru" before "Laru")
  const startsWithMatch = STELLA_SORA_CHARACTERS.find(char =>
    char.name.toLowerCase().startsWith(normalizedName)
  );
  if (startsWithMatch) return startsWithMatch;

  // Finally try contains
  return STELLA_SORA_CHARACTERS.find(
    char =>
      char.name.toLowerCase().includes(normalizedName) ||
      normalizedName.includes(char.name.toLowerCase())
  );
};

// Helper function to process character list and return valid characters
const processCharacterList = names => {
  return names
    .map(name => findCharacter(name.trim()))
    .filter(char => char !== undefined) // Only include characters that exist
    .map(char => ({ ...char })); // Return character data
};

// Tier definitions for Stella Sora
export const TIER_DEFINITIONS = {
  SSS: {
    label: 'SSS',
    description:
      'SSS tier characters are god-tier, broken by themselves and dominate any content with minimal support!',
    color: '#FFD700', // Gold
  },
  SS: {
    label: 'SS',
    description:
      'SS tier characters are exceptional performers who shine brightly and can carry teams with proper support.',
    color: '#9333EA', // Purple
  },
  S: {
    label: 'S',
    description:
      'S tier characters are strong and reliable team members who perform well in most content.',
    color: '#3B82F6', // Blue
  },
  A: {
    label: 'A',
    description:
      'A tier characters are solid picks that can fill specific roles well but may need team support.',
    color: '#10B981', // Green
  },
  B: {
    label: 'B',
    description:
      'B tier characters are situational picks that work in specific team compositions or content.',
    color: '#6B7280', // Gray
  },
};

// Game mode definitions
export const GAME_MODES = {
  OVERALL: {
    id: 'overall',
    name: 'Overall Tier List',
    description: 'Complete character ranking based on overall performance across all game modes.',
  },
  STORY: {
    id: 'story',
    name: 'Story & Exploration',
    description:
      'Best characters for clearing story content, exploration, and general progression.',
  },
  MONOLITH: {
    id: 'monolith',
    name: 'Monolith',
    description: 'Top performers for Monolith content and high-end challenges.',
  },
  SUPPORT: {
    id: 'support',
    name: 'Support Characters',
    description: "Best support characters to enhance your main Trekker's performance.",
  },
};

// Character lists for tier rankings (All 29 characters)
// 5-Star: Nanoha, Freesia, Minova, Nazuka, Fuyuka, Mistique, Chixia, Chitose, Gerie, Shia, Nazuna, Snowish Laru
// 4-Star: Amber, Tilia, Kasimira, Iris, Noya, Shimiao, Ridge, Jinglin, Coronis, Canace, Ann, Flora, Teresa, Cosette, Caramel, Laru
const OVERALL_CHARACTERS = {
  SSS: ['Shia', 'Fuyuka'],
  SS: ['Nazuna', 'Chitose', 'Nazuka', 'Flora', 'Teresa', 'Cosette'],
  S: [
    'Freesia',
    'Gerie',
    'Minova',
    'Mistique',
    'Chixia',
    'Ann',
    'Noya',
    'Nanoha',
    'Tilia',
    'Coronis',
    'Amber',
    'Snowish Laru',
  ],
  A: ['Jinglin', 'Caramel', 'Laru', 'Kasimira', 'Iris', 'Shimiao', 'Ridge', 'Canace'],
  B: [],
};

const STORY_CHARACTERS = {
  SSS: ['Nanoha'],
  SS: ['Nazuna', 'Chixia', 'Shia', 'Chitose'],
  S: ['Freesia', 'Gerie', 'Minova', 'Mistique'],
  A: ['Tilia', 'Jinglin'],
  B: [],
};

const MONOLITH_CHARACTERS = {
  SSS: ['Nanoha'],
  SS: ['Chixia', 'Shia', 'Nazuna'],
  S: ['Minova', 'Freesia', 'Gerie'],
  A: ['Chitose', 'Mistique', 'Tilia', 'Jinglin'],
  B: [],
};

const SUPPORT_CHARACTERS = {
  SSS: ['Nazuna'],
  SS: ['Mistique', 'Gerie'],
  S: ['Freesia', 'Chitose', 'Tilia', 'Jinglin'],
  A: ['Minova', 'Shia'],
  B: ['Chixia', 'Nanoha'],
};

// Process all character lists to create tier lists with valid characters
export const STELLA_SORA_TIER_LISTS = {
  [GAME_MODES.OVERALL.id]: {
    ...GAME_MODES.OVERALL,
    tiers: Object.entries(OVERALL_CHARACTERS).map(([tier, characters]) => ({
      tier,
      definition: TIER_DEFINITIONS[tier],
      characters: processCharacterList(characters),
    })),
  },

  [GAME_MODES.STORY.id]: {
    ...GAME_MODES.STORY,
    tiers: Object.entries(STORY_CHARACTERS).map(([tier, characters]) => ({
      tier,
      definition: TIER_DEFINITIONS[tier],
      characters: processCharacterList(characters),
    })),
  },

  [GAME_MODES.MONOLITH.id]: {
    ...GAME_MODES.MONOLITH,
    tiers: Object.entries(MONOLITH_CHARACTERS).map(([tier, characters]) => ({
      tier,
      definition: TIER_DEFINITIONS[tier],
      characters: processCharacterList(characters),
    })),
  },

  [GAME_MODES.SUPPORT.id]: {
    ...GAME_MODES.SUPPORT,
    tiers: Object.entries(SUPPORT_CHARACTERS).map(([tier, characters]) => ({
      tier,
      definition: TIER_DEFINITIONS[tier],
      characters: processCharacterList(characters),
    })),
  },
};

// Get tier list by game mode
export const getTierListByMode = modeId => {
  return STELLA_SORA_TIER_LISTS[modeId] || null;
};

// Get all available game modes
export const getAllGameModes = () => {
  return Object.values(GAME_MODES);
};

// Get character tier in specific mode
export const getCharacterTier = (characterName, modeId) => {
  const tierList = getTierListByMode(modeId);
  if (!tierList) return null;

  const character = findCharacter(characterName);
  if (!character) return null;

  for (const tier of tierList.tiers) {
    if (tier.characters.some(char => char.id === character.id)) {
      return {
        tier: tier.tier,
        definition: tier.definition,
        character: character,
      };
    }
  }

  return null;
};

// Get all SS tier and above characters
export const getTopTierCharacters = () => {
  const overallTierList = getTierListByMode(GAME_MODES.OVERALL.id);
  if (!overallTierList) return [];

  const topTiers = ['SSS', 'SS'];
  return overallTierList.tiers
    .filter(tier => topTiers.includes(tier.tier))
    .flatMap(tier => tier.characters);
};

export default STELLA_SORA_TIER_LISTS;
