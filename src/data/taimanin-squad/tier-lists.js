// Taimanin Squad SSR Tier Lists
// Tier list data for SSR (Legend) characters organized by game mode

import { getAllCharacters } from './characters.js';

// Tier definitions with colors
export const TIER_DEFINITIONS = {
  SSS: { label: 'SSS', description: 'Best in class, must-have units', color: '#FFD700' },
  SS: { label: 'SS', description: 'Excellent units, highly recommended', color: '#9333EA' },
  S: { label: 'S', description: 'Great units, very useful', color: '#3B82F6' },
  A: { label: 'A', description: 'Good units, solid choices', color: '#10B981' },
  B: { label: 'B', description: 'Average units, situational use', color: '#6B7280' }
};

// Game modes for tier lists
export const GAME_MODES = {
  MOB_CLEAR: {
    id: 'mob-clear',
    name: 'Mob Clear',
    description: 'Best units for clearing waves of enemies and map exploration'
  },
  BOSS: {
    id: 'boss',
    name: 'Boss / Single Target',
    description: 'Best units for boss fights and single target damage'
  }
};

// Helper function to find character by name (case-insensitive partial match)
function findCharacterByName(name) {
  const allChars = getAllCharacters();
  const normalizedName = name.toLowerCase().trim();

  // Try exact match first
  let char = allChars.find(c =>
    c.names?.english?.toLowerCase() === normalizedName
  );

  // Try partial match
  if (!char) {
    char = allChars.find(c =>
      c.names?.english?.toLowerCase().includes(normalizedName) ||
      normalizedName.includes(c.names?.english?.toLowerCase() || '')
    );
  }

  return char;
}

// Process character names into full character objects
function processCharacterList(names) {
  return names
    .map(name => findCharacterByName(name))
    .filter(char => char !== null && char !== undefined);
}

// Mob Clear tier rankings
const MOB_CLEAR_TIERS = {
  SSS: [
    'Mizuki Yukikaze',
    'Kamimura Maika'
  ],
  SS: [
    'Igawa Sakura',
    'Fuuma Amane',
    'Su Jinglei',
    'Fuuma Tokiko'
  ],
  S: [
    'Mizuki Shiranui',
    'Akiyama Rinko',
    'Koukawa Asuka',
    'Kichi Azusa',
    'Ingrid',
    'Shinganji Kurenai',
    'Oboro'
  ],
  A: [
    'Yatsu Murasaki',
    'Onisaki Kirara',
    'Astaroth'
  ],
  B: []
};

// Boss / Single Target tier rankings
const BOSS_TIERS = {
  SSS: [
    'Koukawa Asuka',
    'Shinganji Kurenai',
    'Ingrid'
  ],
  SS: [
    'Mizuki Yukikaze',
    'Fuuma Kotaro',
    'Mizuki Shiranui',
    'Akiyama Rinko',
    'Fuuma Tokiko'
  ],
  S: [
    'Su Jinglei',
    'Igawa Sakura',
    'Fuuma Amane',
    'Oboro',
    'Yatsu Murasaki',
    'Kamimura Maika'
  ],
  A: [
    'Kichi Azusa',
    'Onisaki Kirara'
  ],
  B: [
    'Astaroth'
  ]
};

// Build tier list structure for a mode
function buildTierList(tierData, mode) {
  return {
    ...mode,
    tiers: Object.entries(tierData).map(([tier, characters]) => ({
      tier,
      definition: TIER_DEFINITIONS[tier],
      characters: processCharacterList(characters)
    })).filter(t => t.characters.length > 0) // Only show tiers with characters
  };
}

// Export tier lists
export const TAIMANIN_SQUAD_TIER_LISTS = {
  [GAME_MODES.MOB_CLEAR.id]: buildTierList(MOB_CLEAR_TIERS, GAME_MODES.MOB_CLEAR),
  [GAME_MODES.BOSS.id]: buildTierList(BOSS_TIERS, GAME_MODES.BOSS)
};

// Get tier list by mode
export function getTierListByMode(modeId) {
  return TAIMANIN_SQUAD_TIER_LISTS[modeId] || null;
}

// Get all tier lists
export function getAllTierLists() {
  return TAIMANIN_SQUAD_TIER_LISTS;
}

// Get all SSR characters (for reference)
export function getAllSSRCharacters() {
  return getAllCharacters().filter(c => c.rarity === 'SSR');
}

// Get character's tier in a specific mode
export function getCharacterTier(characterName, modeId) {
  const tierList = getTierListByMode(modeId);
  if (!tierList) return null;

  for (const tierData of tierList.tiers) {
    const found = tierData.characters.find(c =>
      c.names?.english?.toLowerCase() === characterName.toLowerCase()
    );
    if (found) return tierData.tier;
  }
  return null;
}
