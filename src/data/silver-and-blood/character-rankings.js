/**
 * Silver and Blood Character Rankings Data
 * Calculates stat rankings and overall analysis for ALL 71 playable characters
 */

import characterStatsData from './character-stats.json';
import charactersInfoData from './characters_info.json';

// Generate slug from character name
const generateSlug = (name) => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

// Create info map by ID for additional data
const infoMap = new Map();
charactersInfoData.characters.forEach((char) => {
  infoMap.set(char.id, char);
});

// Build complete character list from JSON (all 71 playable characters)
const characters = characterStatsData.characters
  .filter((c) => ['SSR', 'SR', 'R'].includes(c.rarity))
  .map((statsChar) => {
    const infoChar = infoMap.get(statsChar.id) || {};
    const gallery = statsChar.gallery || {};
    const slug = generateSlug(statsChar.name);

    return {
      id: slug,
      numericId: statsChar.id,
      name: statsChar.name,
      title: infoChar.title || statsChar.title || '',
      rarity: statsChar.rarity,
      class: statsChar.class,
      faction: infoChar.camp || '',
      moonPhase: infoChar.moonPhase || '',
      moonPhaseIcon: infoChar.moonPhaseIcon || '',
      attackType: infoChar.damageType || '',
      damageTypeIcon: infoChar.damageTypeIcon || '',
      equipmentType: infoChar.equipmentType || '',
      equipmentTypeIcon: infoChar.equipmentTypeIcon || '',
      tags: infoChar.tags || [],
      stats: {
        hp: gallery.MaxHp || 0,
        atk: gallery.Attack || 0,
        pDef: gallery.PhyDefence || 0,
        mDef: gallery.MagDefence || 0,
        bloodPower: gallery.bloodPower || 0,
      },
    };
  });

/**
 * Calculate rankings for key stats
 * @returns {Object} Rankings object with stat rankings for each character
 */
function calculateRankings() {
  const stats = ['hp', 'atk', 'pDef', 'mDef', 'bloodPower'];
  const rankings = {};

  stats.forEach(statKey => {
    // Sort characters by stat value (highest first)
    const sorted = [...characters].sort((a, b) => b.stats[statKey] - a.stats[statKey]);

    rankings[statKey] = {};
    let currentRank = 1;

    sorted.forEach((char, index) => {
      if (index > 0) {
        const prevValue = sorted[index - 1].stats[statKey];
        const currValue = char.stats[statKey];

        // If current value is different from previous, increment rank by 1 (dense ranking)
        if (currValue !== prevValue) {
          currentRank++;
        }
      }

      rankings[statKey][char.id] = currentRank;
    });
  });

  return rankings;
}

/**
 * Calculate overall ranking analysis (excluding blood power)
 * @returns {Object} Analysis object with overall rankings and performance metrics
 */
function calculateOverallAnalysis() {
  const coreStats = ['hp', 'atk', 'pDef', 'mDef'];
  const rankings = calculateRankings();
  const analysis = {};

  // First pass: calculate total rank scores
  characters.forEach(char => {
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

  // Assign overall ranks with dense ranking (characters with same score get same rank)
  let currentOverallRank = 1;
  sortedCharacters.forEach((entry, index) => {
    if (index > 0) {
      const prevScore = sortedCharacters[index - 1].totalRankScore;
      const currScore = entry.totalRankScore;

      if (currScore !== prevScore) {
        currentOverallRank++;
      }
    }

    analysis[entry.character.id].overallRank = currentOverallRank;
  });

  return analysis;
}

// Calculate and export processed data
const rankings = calculateRankings();
const overallAnalysis = calculateOverallAnalysis();
const totalCharacters = characters.length;

// Stat display names
const statNames = {
  hp: 'HP',
  atk: 'ATK',
  pDef: 'P.DEF',
  mDef: 'M.DEF',
  bloodPower: 'Blood Power',
};

export { characters, rankings, overallAnalysis, totalCharacters, statNames };
