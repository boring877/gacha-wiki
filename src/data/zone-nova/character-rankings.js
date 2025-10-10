/**
 * Zone Nova Character Rankings Data
 * Calculates stat rankings and overall analysis for all characters
 */

import { ZONE_NOVA_CHARACTERS } from './characters.js';

/**
 * Helper function to parse stat values
 * @param {any} value - The stat value to parse
 * @returns {number} - Parsed numeric value
 */
function parseStatValue(value) {
  return typeof value === 'string' ? parseFloat(value.replace(/[,%]/g, '')) || 0 : value || 0;
}

/**
 * Calculate rankings for key stats with proper tie handling
 * @returns {Object} Rankings object with stat rankings for each character
 */
function calculateRankings() {
  const stats = ['hp', 'attack', 'defense', 'critRate'];
  const rankings = {};

  stats.forEach(statKey => {
    // Sort characters by stat value (highest first), filtering out undefined values
    const sorted = [...ZONE_NOVA_CHARACTERS]
      .filter(char => char.stats[statKey] !== undefined)
      .sort((a, b) => parseStatValue(b.stats[statKey]) - parseStatValue(a.stats[statKey]));

    rankings[statKey] = {};

    // Handle ties properly - characters with same stat value get same rank
    let currentRank = 1;
    sorted.forEach((char, index) => {
      if (index > 0) {
        const prevValue = parseStatValue(sorted[index - 1].stats[statKey]);
        const currValue = parseStatValue(char.stats[statKey]);

        // If current value is different from previous, update rank to index + 1
        if (currValue !== prevValue) {
          currentRank = index + 1;
        }
        // If values are the same, keep the same rank
      }

      rankings[statKey][char.id] = currentRank;
    });
  });

  return rankings;
}

/**
 * Calculate overall ranking analysis (3 core stats)
 * @returns {Object} Analysis object with overall rankings and performance metrics
 */
function calculateOverallAnalysis() {
  const coreStats = ['hp', 'attack', 'defense']; // Core stats for overall ranking
  const rankings = calculateRankings();
  const analysis = {};

  // First pass: calculate total rank scores
  ZONE_NOVA_CHARACTERS.forEach(char => {
    let totalRankScore = 0;
    let top3Count = 0;
    let top10Count = 0;
    const statBreakdown = {};

    coreStats.forEach(statKey => {
      const rank = rankings[statKey][char.id];
      statBreakdown[statKey] = rank;

      // Lower rank = better (rank 1 is best)
      totalRankScore += rank;

      if (rank <= 3) top3Count++;
      if (rank <= 10) top10Count++;
    });

    analysis[char.id] = {
      character: char,
      totalRankScore,
      top3Count,
      top10Count,
      statBreakdown,
    };
  });

  // Second pass: rank characters by their total rank score (lower = better)
  const sortedCharacters = Object.values(analysis).sort(
    (a, b) => a.totalRankScore - b.totalRankScore
  );

  // Assign overall ranks with proper tie handling
  let currentOverallRank = 1;
  sortedCharacters.forEach((entry, index) => {
    if (index > 0) {
      const prevScore = sortedCharacters[index - 1].totalRankScore;
      const currScore = entry.totalRankScore;

      // If current score is different from previous, update rank to index + 1
      if (currScore !== prevScore) {
        currentOverallRank = index + 1;
      }
      // If scores are the same, keep the same rank
    }

    analysis[entry.character.id].overallRank = currentOverallRank;
  });

  return analysis;
}

// Calculate and export processed data
const rankings = calculateRankings();
const overallAnalysis = calculateOverallAnalysis();
const totalCharacters = ZONE_NOVA_CHARACTERS.length;

// Stat display names
const statNames = {
  hp: 'HP',
  attack: 'ATK',
  defense: 'DEF',
  critRate: 'CRIT',
};

// ============================================
// PRE-COMPUTED DATA FOR INSTANT FILTERING
// ============================================

/**
 * Pre-compute filtered character groups for instant server-side rendering
 */
function computeFilteredGroups() {
  const groups = {
    // By Role
    byRole: {
      all: ZONE_NOVA_CHARACTERS,
      tank: ZONE_NOVA_CHARACTERS.filter(c => c.role === 'Tank'),
      dps: ZONE_NOVA_CHARACTERS.filter(c => c.role === 'DPS'),
      buffer: ZONE_NOVA_CHARACTERS.filter(c => c.role === 'Buffer'),
      debuffer: ZONE_NOVA_CHARACTERS.filter(c => c.role === 'Debuffer'),
      healer: ZONE_NOVA_CHARACTERS.filter(c => c.role === 'Healer'),
    },

    // By Class
    byClass: {
      all: ZONE_NOVA_CHARACTERS,
      guardian: ZONE_NOVA_CHARACTERS.filter(c => c.class === 'Guardian'),
      warrior: ZONE_NOVA_CHARACTERS.filter(c => c.class === 'Warrior'),
      rogue: ZONE_NOVA_CHARACTERS.filter(c => c.class === 'Rogue'),
      mage: ZONE_NOVA_CHARACTERS.filter(c => c.class === 'Mage'),
      buffer: ZONE_NOVA_CHARACTERS.filter(c => c.class === 'Buffer'),
      debuffer: ZONE_NOVA_CHARACTERS.filter(c => c.class === 'Debuffer'),
      healer: ZONE_NOVA_CHARACTERS.filter(c => c.class === 'Healer'),
    },

    // By Rarity
    byRarity: {
      all: ZONE_NOVA_CHARACTERS,
      ssr: ZONE_NOVA_CHARACTERS.filter(c => c.rarity === 'SSR'),
      sr: ZONE_NOVA_CHARACTERS.filter(c => c.rarity === 'SR'),
      r: ZONE_NOVA_CHARACTERS.filter(c => c.rarity === 'R'),
    },

    // By Element
    byElement: {
      all: ZONE_NOVA_CHARACTERS,
      fire: ZONE_NOVA_CHARACTERS.filter(c => c.element === 'Fire'),
      ice: ZONE_NOVA_CHARACTERS.filter(c => c.element === 'Ice'),
      wind: ZONE_NOVA_CHARACTERS.filter(c => c.element === 'Wind'),
      holy: ZONE_NOVA_CHARACTERS.filter(c => c.element === 'Holy'),
      chaos: ZONE_NOVA_CHARACTERS.filter(c => c.element === 'Chaos'),
    },
  };

  return groups;
}

/**
 * Pre-compute sorted character arrays for instant sorting
 */
function computeSortedArrays() {
  const sorted = {
    // By HP (highest first)
    hp: {
      desc: [...ZONE_NOVA_CHARACTERS].sort(
        (a, b) => parseStatValue(b.stats.hp) - parseStatValue(a.stats.hp)
      ),
      asc: [...ZONE_NOVA_CHARACTERS].sort(
        (a, b) => parseStatValue(a.stats.hp) - parseStatValue(b.stats.hp)
      ),
    },

    // By Attack (highest first)
    attack: {
      desc: [...ZONE_NOVA_CHARACTERS].sort(
        (a, b) => parseStatValue(b.stats.attack) - parseStatValue(a.stats.attack)
      ),
      asc: [...ZONE_NOVA_CHARACTERS].sort(
        (a, b) => parseStatValue(a.stats.attack) - parseStatValue(b.stats.attack)
      ),
    },

    // By Defense (highest first)
    defense: {
      desc: [...ZONE_NOVA_CHARACTERS].sort(
        (a, b) => parseStatValue(b.stats.defense) - parseStatValue(a.stats.defense)
      ),
      asc: [...ZONE_NOVA_CHARACTERS].sort(
        (a, b) => parseStatValue(a.stats.defense) - parseStatValue(b.stats.defense)
      ),
    },

    // By Crit Rate (highest first, only characters with crit rate)
    critRate: {
      desc: [...ZONE_NOVA_CHARACTERS]
        .filter(c => c.stats.critRate > 0)
        .sort((a, b) => parseStatValue(b.stats.critRate) - parseStatValue(a.stats.critRate)),
      asc: [...ZONE_NOVA_CHARACTERS]
        .filter(c => c.stats.critRate > 0)
        .sort((a, b) => parseStatValue(a.stats.critRate) - parseStatValue(b.stats.critRate)),
    },

    // By Overall Rank (best first)
    overallRank: {
      desc: [...ZONE_NOVA_CHARACTERS].sort(
        (a, b) => overallAnalysis[a.id].overallRank - overallAnalysis[b.id].overallRank
      ),
      asc: [...ZONE_NOVA_CHARACTERS].sort(
        (a, b) => overallAnalysis[b.id].overallRank - overallAnalysis[a.id].overallRank
      ),
    },
  };

  return sorted;
}

/**
 * Generate view IDs for all possible filter combinations
 */
function generateViewIds() {
  const viewIds = [];
  const roles = ['all', 'tank', 'dps', 'buffer', 'debuffer', 'healer'];
  const classes = ['all', 'guardian', 'warrior', 'rogue', 'mage', 'buffer', 'debuffer', 'healer'];
  const rarities = ['all', 'ssr', 'sr', 'r'];
  const elements = ['all', 'fire', 'ice', 'wind', 'holy', 'chaos'];

  // Generate all single filter views
  roles.forEach(role => viewIds.push(`role-${role}`));
  classes.forEach(cls => viewIds.push(`class-${cls}`));
  rarities.forEach(rarity => viewIds.push(`rarity-${rarity}`));
  elements.forEach(element => viewIds.push(`element-${element}`));

  // Generate all sort views
  const stats = ['hp', 'attack', 'defense', 'critRate', 'overallRank'];
  const directions = ['desc', 'asc'];

  stats.forEach(stat => {
    directions.forEach(dir => {
      viewIds.push(`sort-${stat}-${dir}`);
    });
  });

  return viewIds;
}

// Calculate pre-computed data
const filteredGroups = computeFilteredGroups();
const sortedArrays = computeSortedArrays();
const viewIds = generateViewIds();

export {
  rankings,
  overallAnalysis,
  totalCharacters,
  statNames,
  parseStatValue,
  filteredGroups,
  sortedArrays,
  viewIds,
};
