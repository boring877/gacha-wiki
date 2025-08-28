/**
 * Silver and Blood Character Rankings Data
 * Calculates stat rankings and overall analysis for all characters
 */

import { characters } from './characters.js';

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
 * Calculate overall ranking analysis (excluding blood power)
 * @returns {Object} Analysis object with overall rankings and performance metrics
 */
function calculateOverallAnalysis() {
  const coreStats = ['hp', 'atk', 'pDef', 'mDef']; // Removed bloodPower
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
const totalCharacters = characters.length;

// Stat display names
const statNames = {
  hp: 'HP',
  atk: 'ATK',
  pDef: 'P.DEF',
  mDef: 'M.DEF',
  bloodPower: 'Blood Power',
};

export { rankings, overallAnalysis, totalCharacters, statNames };
