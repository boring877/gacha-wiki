// Taimanin Squad R (3-Star) Tier Lists
// Combined tier list for R (Rare) characters with their aura types

import { getAllCharacters } from './characters.js';
import { TIER_DEFINITIONS } from './tier-lists.js';

// All tier levels in order (for displaying empty tiers)
const ALL_TIERS = ['SSS', 'SS', 'S', 'A', 'B'];

// Aura type definitions with icons and display names
export const AURA_TYPES = {
  TACTICAL_TRAINING: {
    id: 'tactical-training',
    name: 'Tactical Training',
    icon: 'leader_atk'
  },
  ALL_BATTLE: {
    id: 'all-battle',
    name: 'All Battle',
    icon: 'leader_disposition'
  },
  MAIN_STORE: {
    id: 'main-store',
    name: 'Main Store',
    icon: 'leader_hp'
  },
  SPECIAL_OPERATION: {
    id: 'special-operation',
    name: 'Special Operation',
    icon: 'leader_def'
  },
  EXTERMINATION: {
    id: 'extermination',
    name: 'Extermination',
    icon: 'leader_cdmg'
  },
  ARENA: {
    id: 'arena',
    name: 'Arena',
    icon: 'leader_spd'
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

// Process character with aura info
function processCharacterWithAura(name, auraType) {
  const char = findCharacterByName(name);
  if (!char) return null;
  return {
    ...char,
    aura: auraType
  };
}

// Combined R unit tier list with aura information
// Format: { name: 'Character Name', aura: AURA_TYPES.CATEGORY }
const R_TIER_DATA = {
  SSS: [
    { name: 'Minasaki', aura: AURA_TYPES.EXTERMINATION }
  ],
  SS: [
    // Tactical Training
    { name: 'Igawa Sakuya', aura: AURA_TYPES.TACTICAL_TRAINING },
    { name: 'Alectra', aura: AURA_TYPES.TACTICAL_TRAINING },
    // All Battle
    { name: 'Aishu Hebiko', aura: AURA_TYPES.ALL_BATTLE },
    // Main Store
    { name: 'Fuuma Kotaro', aura: AURA_TYPES.MAIN_STORE },
    { name: 'Oomiya Mizuki', aura: AURA_TYPES.MAIN_STORE },
    // Special Operation
    { name: 'Iska', aura: AURA_TYPES.SPECIAL_OPERATION },
    // Arena
    { name: 'Makishima Ayame', aura: AURA_TYPES.ARENA }
  ],
  S: [
    // Tactical Training
    { name: 'Crackle', aura: AURA_TYPES.TACTICAL_TRAINING },
    { name: 'Kiryu Mikoto', aura: AURA_TYPES.TACTICAL_TRAINING },
    { name: 'Kasumigaoka Rika', aura: AURA_TYPES.TACTICAL_TRAINING },
    { name: 'Tekkain Kaworu', aura: AURA_TYPES.TACTICAL_TRAINING },
    { name: 'Uehara Shikanosuke', aura: AURA_TYPES.TACTICAL_TRAINING },
    // All Battle
    { name: 'Shirase Yuzuriha', aura: AURA_TYPES.ALL_BATTLE },
    { name: 'Amadare Natsume', aura: AURA_TYPES.ALL_BATTLE },
    // Main Store
    { name: 'Kannazuki Sora', aura: AURA_TYPES.MAIN_STORE },
    { name: 'Shishimura Koro', aura: AURA_TYPES.MAIN_STORE },
    { name: 'Nisha Gaiza', aura: AURA_TYPES.MAIN_STORE },
    // Special Operation
    { name: 'Hiyama Kirin', aura: AURA_TYPES.SPECIAL_OPERATION },
    { name: 'Echizen Saya', aura: AURA_TYPES.SPECIAL_OPERATION },
    // Extermination
    { name: 'Kuonji R. Spica', aura: AURA_TYPES.EXTERMINATION },
    { name: 'Lilim', aura: AURA_TYPES.EXTERMINATION },
    // Arena
    { name: 'Clear Lovell', aura: AURA_TYPES.ARENA },
    { name: 'Ise Nodoka', aura: AURA_TYPES.ARENA },
    { name: 'Kikuchi Aoi', aura: AURA_TYPES.ARENA },
    { name: 'Kugasa Hikage', aura: AURA_TYPES.ARENA },
    { name: 'Narita Akina', aura: AURA_TYPES.ARENA }
  ],
  A: [
    // Tactical Training
    { name: 'Cult armed priest', aura: AURA_TYPES.TACTICAL_TRAINING },
    { name: 'Yamata no Orochi', aura: AURA_TYPES.TACTICAL_TRAINING },
    { name: 'Torajiro', aura: AURA_TYPES.TACTICAL_TRAINING },
    { name: 'Michea silkys', aura: AURA_TYPES.TACTICAL_TRAINING },
    { name: 'Shishimura Denjia', aura: AURA_TYPES.TACTICAL_TRAINING },
    // All Battle
    { name: 'Orc bodyguard', aura: AURA_TYPES.ALL_BATTLE },
    { name: 'Aello', aura: AURA_TYPES.ALL_BATTLE },
    { name: 'Hayami Uzuki', aura: AURA_TYPES.ALL_BATTLE },
    { name: 'Shirayuki', aura: AURA_TYPES.ALL_BATTLE },
    { name: 'Yatsu Kuro', aura: AURA_TYPES.ALL_BATTLE },
    { name: 'Yuri', aura: AURA_TYPES.ALL_BATTLE },
    { name: 'Shido Rinka', aura: AURA_TYPES.ALL_BATTLE },
    { name: 'Izumo Tsuru', aura: AURA_TYPES.ALL_BATTLE },
    { name: 'Pamela Jager', aura: AURA_TYPES.ALL_BATTLE },
    { name: 'Fuuma Mawari', aura: AURA_TYPES.ALL_BATTLE },
    { name: 'Kannagi Kaede', aura: AURA_TYPES.ALL_BATTLE },
    // Main Store
    { name: 'Hasuma Reiko', aura: AURA_TYPES.MAIN_STORE },
    { name: 'Orc warlord', aura: AURA_TYPES.MAIN_STORE },
    { name: 'Lydia Baretta', aura: AURA_TYPES.MAIN_STORE },
    { name: 'Major', aura: AURA_TYPES.MAIN_STORE },
    { name: 'Fujibayashi Yuno', aura: AURA_TYPES.MAIN_STORE },
    // Special Operation
    { name: 'Tina Worrell', aura: AURA_TYPES.SPECIAL_OPERATION },
    { name: 'Igawa Senshu', aura: AURA_TYPES.SPECIAL_OPERATION },
    { name: 'Kuroki Shizuku', aura: AURA_TYPES.SPECIAL_OPERATION },
    { name: 'Rene', aura: AURA_TYPES.SPECIAL_OPERATION },
    // Extermination
    { name: 'Kagero', aura: AURA_TYPES.EXTERMINATION },
    { name: 'Tekkain Koharu', aura: AURA_TYPES.EXTERMINATION },
    { name: 'Latitia Bellmer', aura: AURA_TYPES.EXTERMINATION },
    { name: 'Donna Burroughs', aura: AURA_TYPES.EXTERMINATION },
    { name: 'Anje', aura: AURA_TYPES.EXTERMINATION },
    { name: 'Kasahara Tatsumi', aura: AURA_TYPES.EXTERMINATION },
    // Arena
    { name: 'Fuuma Yukina', aura: AURA_TYPES.ARENA },
    { name: 'Fuuma Hoensai', aura: AURA_TYPES.ARENA },
    { name: 'Watarase Tsumugi', aura: AURA_TYPES.ARENA },
    { name: 'Inokura Suzuka', aura: AURA_TYPES.ARENA },
    { name: 'Queen Kanaloa', aura: AURA_TYPES.ARENA }
  ],
  B: []
};

// Build the tier list with character data and aura info
function buildRTierList() {
  return {
    name: 'R Unit Tier List',
    description: 'Tier rankings for R (Rare) units with their aura types',
    tiers: ALL_TIERS.map(tier => ({
      tier,
      definition: TIER_DEFINITIONS[tier],
      characters: R_TIER_DATA[tier]
        .map(entry => processCharacterWithAura(entry.name, entry.aura))
        .filter(char => char !== null)
    }))
  };
}

// Export the tier list
export const R_UNIT_TIER_LIST = buildRTierList();

// Get the R tier list
export function getRTierList() {
  return R_UNIT_TIER_LIST;
}

// Get all R characters (for reference)
export function getAllRCharacters() {
  return getAllCharacters().filter(c => c.rarity === 'R');
}
