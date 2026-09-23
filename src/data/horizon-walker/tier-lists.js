// Horizon Walker Tier List Data
// Characters ranked by game mode, only including those with EX Weapons available

import { HORIZON_WALKER_CHARACTERS } from './characters.js';
import { HORIZON_WALKER_MERCENARIES } from './mercenaries.js';

// Helper function to find character by name (case-insensitive, exact match preferred)
// Exact match must win before substring matching, otherwise short names
// (e.g. "Mira" vs "Mirana", "Marika" vs "Samarika") resolve to the wrong character
const findCharacter = name => {
  const query = name.toLowerCase().trim();
  return (
    HORIZON_WALKER_CHARACTERS.find(char => char.name.toLowerCase() === query) ||
    HORIZON_WALKER_CHARACTERS.find(
      char =>
        char.name.toLowerCase().includes(query) ||
        query.includes(char.name.toLowerCase())
    )
  );
};

// Helper function to find mercenary by name (case-insensitive, exact match preferred)
const findMercenary = name => {
  const query = name.toLowerCase().trim();
  return (
    HORIZON_WALKER_MERCENARIES.find(merc => merc.name.toLowerCase() === query) ||
    HORIZON_WALKER_MERCENARIES.find(
      merc =>
        merc.name.toLowerCase().includes(query) ||
        query.includes(merc.name.toLowerCase())
    )
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
  UR: {
    label: 'UR',
  },
  SSS: {
    label: 'SSS',
  },
  SS: {
    label: 'SS',
  },
  S: {
    label: 'S',
  },
  A: {
    label: 'A',
  },
  B: {
    label: 'B',
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
  UR: ['Cora', 'Luise', 'Juza', 'Garud'],
  SSS: ['Olivia', 'Vlissing', 'Palekar', 'Matrotho', 'Eugenia', 'Ahram', 'Nari'],
  SS: [
    'Yui',
    'Valeta',
    'Everette',
    'Yvonna',
    'Yeonwoo',
    'Griselda',
    'Efreeti',
    'Juha',
    'berga',
    'korabi',
    'kalma',
    'Lisandria',
    'Headless knight',
    'Tx -Manticore',
    'Leah',
    'Erneste',
    'Mahari',
    'Nika',
    'nymset',
    'Bella',
    'Kaul',
    'Puppy Stepper',
    'Emilia',
    'Maximilia',
    'Mira',
    'Mirana',
    'Kotoha',
    'Yeon Chae-Young',
    'Ines',
  ],
  S: [
    'Echidna',
    'Min eun-sol',
    'Kalina',
    'Kilon',
    'Osla',
    'Araha',
    'Pantheri',
    'Marhim',
    'So joo-hee',
    'Samarika',
    'Puppy shooter',
    'Kobold mercenary',
    'Fammene',
    'Kim ga-young',
  ],
  A: [
    'Canisk',
    'Rhasadina',
    'Re_De_Da',
    'Gulsni',
    'Platina',
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
  UR: ['Cora', 'Luise', 'Juza', 'Garud'],
  SSS: ['Yeonwoo', 'Leah', 'Nymset', 'Palekar', 'Juha', 'So Joo-Hee', 'Mahari', 'Matrotho', 'Eugenia', 'Ahram', 'Nari'],
  SS: [
    'Olivia',
    'Yvonna',
    'Vlissing',
    'Korabi',
    'Kalma',
    'Valeta',
    'Griselda',
    'Erneste',
    'Bella',
    'Efreeti',
    'Maximilia',
    'Emilia',
    'Yui',
    'Mira',
    'Mirana',
    'Kotoha',
    'Yeon Chae-Young',
    'Ines',
  ],
  S: [
    'Echidna',
    'Everette',
    'Kilon',
    'Osla',
    'Lisandria',
    'Araha',
    'Pantheri',
    'Samarika',
    'Fammene',
    'Marhim',
    'Nika',
    'Berga',
    'Headless knight',
    'TX - Manticore',
    'Kaul',
    'Puppy stepper',
    'Kobold mercenary',
    'Kim ga-young',
  ],
  A: [
    'Min Eun-sol',
    'Kalina',
    'Platina',
    'Delia',
    'Puppy shooter',
    'Wizard legionnaire',
  ],
  B: [
    'Canisk',
    'Gulsni',
    'Re_De_Da',
    'Gulam',
    'Nonoha',
  ],
};

const DOPAMIN_CHARACTERS = {
  UR: ['Cora', 'Luise', 'Juza', 'Garud'],
  SSS: [
    'Olivia',
    'Kaul',
    'Kalma',
    'Yeonwoo',
    'Yui',
    'Valeta',
    'Yvonna',
    'Vlissing',
    'Everette',
    'Mahari',
    'juha',
    'korabi',
    'Leah',
    'nymset',
    'Palekar',
    'Eugenia',
    'Matrotho',
    'Ahram',
    'Nari',
    'Marhim',
  ],
  SS: [
    'Kalina',
    'Griselda',
    'Kilon',
    'Osla',
    'Erneste',
    'Bella',
    'Efreeti',
    'so joo-hee',
    'Nika',
    'berga',
    'Headless knight',
    'puppy stepper',
    'Emilia',
    'Kim ga-young',
    'Maximilia',
    'Mira',
    'Mirana',
    'Kotoha',
    'Yeon Chae-Young',
    'Ines',
  ],
  S: [
    'Echidna',
    'Min Eun-sol',
    'Platina',
    'araha',
    'Pantheri',
    'Lisandria',
    'Samarika',
    'Fammene',
    'delia',
    'tx -mantocore',
    'puppy shooter',
    'Koblod mercenary',
  ],
  A: ['Canisk', 'Gulsni', 'Re_De_Da', 'Gulam', 'Nonoha', 'Wizard legionnaire'],
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
// Split into two sections: the core must-haves and the rest
const PRIORITIES_CORE_CHARACTERS = [
  'Olivia',
  'Vlissing',
  'Juha',
  'Juza',
  'Nymset',
  'Luise',
  'Ahram',
  'Eugenia',
  'Cora',
  'Palekar',
];
const PRIORITIES_SECONDARY_CHARACTERS = [
  'Mahari',
  'Bella',
  'Yeonwoo',
  'Yui',
  'So joo-hee',
  'Korabi',
  'Leah',
  'Maximilia',
  'Yvonna',
  'Kotoha',
  'Emilia',
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
    sections: [
      {
        id: 'core',
        title: 'Core',
        characters: processUnitList(PRIORITIES_CORE_CHARACTERS),
      },
      {
        id: 'rest',
        title: 'The Rest',
        characters: processUnitList(PRIORITIES_SECONDARY_CHARACTERS),
      },
    ],
    characters: processUnitList([...PRIORITIES_CORE_CHARACTERS, ...PRIORITIES_SECONDARY_CHARACTERS]),
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

// Tier list changelog
export const TIER_LIST_CHANGELOG = [];

// Notes for specific characters displayed on tier list cards
export const TIER_CHARACTER_NOTES = {
  Garud: {
    type: 'info',
    title: 'Either SSS or UR, Needs Testing',
    text: 'She is either SSS or UR. She needs more testing as of now, but she has so much potential to be busted~',
  },
  Matrotho: {
    type: 'warning',
    title: 'Requires Team Synergy',
    text: 'Matrotho needs a proper team to reach SSS potential. On her own she performs much lower. A good starting point is pairing her with Eugenia and Efreeti. Not recommended for new players unfamiliar with team building.',
  },
  Luise: {
    type: 'info',
    title: 'Demi Skill & Weapon Required',
    text: 'Luise needs her Demi skill unlocked to reach UR potential. Without it she performs significantly lower. She also requires at least a 4/5 weapon to be usable and a good team to enable her full potential. Unlike Cora who is easier to deal damage with, Luise has a higher skill ceiling but deals more damage when fully built.',
  },
  Juza: {
    type: 'info',
    title: 'Massive Damage, Locks Herself On Target',
    text: 'Juza deals truly massive damage and can work in all types of content as long as you can keep her locked on the target. Her one weakness is that once she jumps she cannot really move, so she stays locked in place. She does not need a lot of investment, but she needs good teammates: Eugenia is a must. With Eugenia her damage output becomes huge, and she is highly recommended as a speedrun pick for Total War.',
  },
  Nari: {
    type: 'warning',
    title: 'Conditional, Needs Her Demi Skill',
    text: 'Nari needs her Demi skill to scale. Without it she is really quite weak. The only reason she is rated this high is Total War: she can speedrun it quite fast. On other maps she is not that great, and there are a lot of characters much better than her. Overall she is quite conditional, so keep her for Total War.',
  },
  Ines: {
    type: 'warning',
    title: 'Weak Point Hits & AP Required',
    text: 'Ines has the potential to be quite strong and deal quite a bit of damage, but you need to hit the target in its weak point, and she needs quite a bit of AP so she can one shot. She also needs her Demi skill. She is quite great for clearing maps and Dopamin, but she is not very good at Total War or any other kind of maps, and she is also quite bad in Special Operations.',
  },
  'Yeon Chae-Young': {
    type: 'warning',
    title: 'Needs Investment, Has Potential',
    text: 'Yeon Chae-Young\'s damage is actually quite good and you can get a lot of turns, but you need back attacks and quite a bit of AP recovery, and she needs her Demi skill. She is not that great and there are a lot of much better characters than her, though she has some potential, so do not dismiss her fully. She is not great for free to play because she needs quite a bit of investment.',
  },
  Marhim: {
    type: 'info',
    title: 'Dopamin Specialist',
    text: 'Marhim needs her Demi skill to be great at Dopamin: with it she is really strong there. On other maps she is not that much.',
  },
};

export default HORIZON_WALKER_TIER_LISTS;
