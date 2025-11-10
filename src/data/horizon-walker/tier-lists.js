// Horizon Walker Tier List Data
// Characters ranked by game mode, only including those with EX Weapons available

import { HORIZON_WALKER_CHARACTERS } from './characters.js';
import { HORIZON_WALKER_MERCENARIES } from './mercenaries.js';

// Helper function to find character by name (case-insensitive)
const findCharacter = name => {
  return HORIZON_WALKER_CHARACTERS.find(
    char =>
      char.name.toLowerCase().includes(name.toLowerCase().trim()) ||
      name.toLowerCase().trim().includes(char.name.toLowerCase())
  );
};

// Helper function to find mercenary by name (case-insensitive)
const findMercenary = name => {
  return HORIZON_WALKER_MERCENARIES.find(
    merc =>
      merc.name.toLowerCase().includes(name.toLowerCase().trim()) ||
      name.toLowerCase().trim().includes(merc.name.toLowerCase())
  );
};

// Helper function to process character list and return valid characters with EX weapons
const processCharacterList = names => {
  return names
    .map(name => findCharacter(name.trim()))
    .filter(char => char !== undefined) // Only include characters that exist
    .map(char => ({ ...char, hasEXWeapon: true })); // Mark as having EX weapon
};

// Helper function to process mercenary list
const processMercenaryList = names => {
  return names
    .map(name => findMercenary(name.trim()))
    .filter(merc => merc !== undefined) // Only include mercenaries that exist
    .map(merc => ({ ...merc, hasEXWeapon: false, isMercenary: true })); // Mercenaries don't have EX weapons
};

// Unified helper function to process both characters and mercenaries
const processUnitList = names => {
  return names
    .map(name => {
      // First try to find as a character
      let unit = findCharacter(name.trim());
      if (unit) {
        return { ...unit, hasEXWeapon: true, isMercenary: false };
      }

      // Then try to find as a mercenary
      unit = findMercenary(name.trim());
      if (unit) {
        return {
          ...unit,
          hasEXWeapon: false,
          isMercenary: true,
          // Ensure mercenary has a detailUrl based on slug
          detailUrl: unit.detailUrl || `/guides/horizon-walker/mercenaries/${unit.slug}`,
          // Add a default image path for mercenaries that don't have one
          image: unit.image || `/images/games/horizon-walker/mercenaries/${unit.slug}.webp`,
        };
      }

      return null;
    })
    .filter(unit => unit !== null); // Only include units that exist
};

// Tier definitions for Horizon Walker
export const TIER_DEFINITIONS = {
  SSS: {
    label: 'SSS',
    description:
      "SSS tier characters do not need anyone's help, they are broken by themselves and can do very well alone! With little help they become busted!",
    color: '#FFD700', // Gold
  },
  SS: {
    label: 'SS',
    description:
      'SS tier characters are really good, but to become broken they need help from other characters to become super strong!',
    color: '#9333EA', // Purple
  },
  S: {
    label: 'S',
    description: 'S tier characters are weak alone, but do well with other characters!',
    color: '#3B82F6', // Blue
  },
  A: {
    label: 'A',
    description: 'A tier characters are quite weak alone but alright with a team.',
    color: '#10B981', // Green
  },
  B: {
    label: 'B',
    description:
      'B tier characters are useless with a team or without, there might be some way to make them useful!',
    color: '#6B7280', // Gray
  },
};

// Game mode definitions
export const GAME_MODES = {
  MAP_CLEAR: {
    id: 'map-clear',
    name: 'Map Clear and Mission',
    description: 'This tier list is for any story maps, events, wish, bounty and rift exploration.',
  },
  SPECIAL_OPERATIONS: {
    id: 'special-operations',
    name: 'Special Operations',
    description:
      'This was made with lower Turn count and F2P accounts in mind, there are many interesting ways to finish some maps!',
  },
  DOPAMIN: {
    id: 'dopamin',
    name: 'Dopamin',
    description: 'Dopamin has way more characters that do well because of how easy it is!',
  },
  PRIORITIES: {
    id: 'priorities',
    name: 'Priorities Characters',
    description:
      'These units should take care of you anywhere! Must-have characters with their EX weapons.',
  },
};

// Character lists from your tier list data (only characters with EX Weapons)
const MAP_CLEAR_CHARACTERS = {
  SSS: ['Olivia', 'Yui', 'Vlissing'],
  SS: [
    'Valeta',
    'Everette',
    'Yvonna',
    'Cora',
    'Yeonwoo',
    'Griselda',
    'Efreeti',
    'Juha',
    'berga',
    'korabi',
    'kalma',
    'Luise',
    'Lisandria',
    'Headless knight',
    'Tx -Manticore',
    'Leah',
    'Erneste',
    'nari',
    'Mahari',
    'Nika',
    'nymset',
    'Bella',
    'Kaul',
    'Puppy Stepper',
  ],
  S: [
    'Yeon Chae-young',
    'Min eun-sol',
    'Kalina',
    'Kilon',
    'Osla',
    'Araha',
    'Pantheri',
    'Marhim',
    'Matrotho',
    'So joo-hee',
    'Smarika',
    'Puppy shooter',
    'Kobold mercenary',
    'Ines',
    'Fammene',
  ],
  A: [
    'Canisk',
    'Rhasadina',
    'Red-De-Da',
    'Gulsni',
    'Platina',
    'Kim ga-young',
    'Grrik Mercenary',
    'Swamp elf Vigilante',
    'war mercenary',
    'Wizard legionnaire',
    'Nonoha',
    'Delia',
    'Gulam',
  ],
  B: ['Imperial shieldbearer', 'Goliath', 'Torta warrior', 'split twigs priest'],
};

const SPECIAL_OPERATIONS_CHARACTERS = {
  SSS: ['Cora', 'Yeonwoo', 'Yui', 'Leah', 'Nymset'],
  SS: [
    'Olivia',
    'So Joo-Hee',
    'Yvonna',
    'Vlissing',
    'Korabi',
    'Kalma',
    'Mahari',
    'Juha',
    'Valeta',
    'Griselda',
    'Erneste',
    'Bella',
    'Luise',
    'Nari',
    'Efreeti',
  ],
  S: [
    'Everette',
    'Kilon',
    'Osla',
    'Lisandria',
    'Araha',
    'Pantheri',
    'Smarika',
    'Fammene',
    'Ines',
    'Marhim',
    'Nika',
    'Berga',
    'Headless knight',
    'TX - Manticore',
    'Kaul',
    'Puppy stepper',
    'Kobold mercenary',
  ],
  A: [
    'Min Eun-sol',
    'Kalina',
    'Yeon Chae-young',
    'Platina',
    'Delia',
    'Matrotho',
    'Puppy shooter',
    'Wizard legionnaire',
  ],
  B: [
    'Canisk',
    'Gulsni',
    'Kim ga-young',
    'Re-de-da',
    'Gulam',
    'Nonoha',
    'Rhasadina',
    'Imperial shieldbearer',
    'Grrik mercenary',
    'Goliath',
    'weamp elf vigilante member',
    'war mercenary',
    'torta warrior',
    'splite twigs',
  ],
};

const DOPAMIN_CHARACTERS = {
  SSS: [
    'Olivia',
    'cora',
    'Kaul',
    'Kalma',
    'Yeonwwo',
    'Yui',
    'Valeta',
    'Yvonna',
    'Vlissing',
    'Everette',
    'Mahari',
    'juha',
    'korabi',
  ],
  SS: [
    'Kalina',
    'Griselda',
    'Kilon',
    'Osla',
    'Erneste',
    'Bella',
    'luise',
    'Nori',
    'Efreeti',
    'so joo-hee',
    'Nika',
    'berga',
    'nymset',
    'Headless knight',
    'Leah',
    'puppy stepper',
  ],
  S: [
    'Min un-sol',
    'Yeon chae-young',
    'Platina',
    'araha',
    'Pantheri',
    'Lisandria',
    'Samarika',
    'Fammena',
    'delia',
    'ines',
    'Marhim',
    'tx -mantocore',
    'puppy shooter',
    'Koblod mercenary',
  ],
  A: [
    'Canisk',
    'Gulsni',
    'kim ga-young',
    'Re-de-da',
    'Gulam',
    'Nonoha',
    'Matrotho',
    'Wizard legionnaire',
  ],
  B: [
    'Rhasadina',
    'imperial shieldbearer merceneary',
    'Grrik mercenary',
    'Goliath',
    'swamp elf vigilante member',
    'war mercenary',
    'torate awrrior',
    'split twigs priest',
  ],
};

// Priorities characters - simple list (no tiers) of must-have characters with EX weapons
const PRIORITIES_CHARACTERS = [
  'Olivia',
  'Vlissing',
  'Mahari',
  'Cora',
  'Yeonwoo',
  'Juha',
  'Yui',
  'So joo-hee',
  'Korabi',
  'Bella',
  'Nymset',
];

// Process all character lists to create tier lists with valid characters
export const HORIZON_WALKER_TIER_LISTS = {
  [GAME_MODES.MAP_CLEAR.id]: {
    ...GAME_MODES.MAP_CLEAR,
    tiers: Object.entries(MAP_CLEAR_CHARACTERS).map(([tier, characters]) => ({
      tier,
      definition: TIER_DEFINITIONS[tier],
      characters: processUnitList(characters),
    })),
  },

  [GAME_MODES.SPECIAL_OPERATIONS.id]: {
    ...GAME_MODES.SPECIAL_OPERATIONS,
    tiers: Object.entries(SPECIAL_OPERATIONS_CHARACTERS).map(([tier, characters]) => ({
      tier,
      definition: TIER_DEFINITIONS[tier],
      characters: processUnitList(characters),
    })),
  },

  [GAME_MODES.DOPAMIN.id]: {
    ...GAME_MODES.DOPAMIN,
    tiers: Object.entries(DOPAMIN_CHARACTERS).map(([tier, characters]) => ({
      tier,
      definition: TIER_DEFINITIONS[tier],
      characters: processUnitList(characters),
    })),
  },

  [GAME_MODES.PRIORITIES.id]: {
    ...GAME_MODES.PRIORITIES,
    characters: processUnitList(PRIORITIES_CHARACTERS),
    isSimpleList: true, // Flag to indicate this is a simple list, not tiered
  },
};

// Get tier list by game mode
export const getTierListByMode = modeId => {
  return HORIZON_WALKER_TIER_LISTS[modeId] || null;
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

// Get all characters that have EX weapons
export const getCharactersWithEXWeapons = () => {
  const allCharacterNames = new Set();

  // Collect all character names from all modes and tiers
  Object.values(HORIZON_WALKER_TIER_LISTS).forEach(mode => {
    mode.tiers.forEach(tier => {
      tier.characters.forEach(char => {
        allCharacterNames.add(char.name);
      });
    });
  });

  return Array.from(allCharacterNames)
    .map(name => findCharacter(name))
    .filter(Boolean);
};

export default HORIZON_WALKER_TIER_LISTS;
