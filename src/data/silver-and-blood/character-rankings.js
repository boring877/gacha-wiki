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
      // Handle ties - characters with same value get same rank
      if (index > 0 && char.stats[statKey] === sorted[index - 1].stats[statKey]) {
        rankings[statKey][char.id] = rankings[statKey][sorted[index - 1].id];
      } else {
        rankings[statKey][char.id] = currentRank;
      }
      // For ties: skip to next available rank position
      // This ensures proper ranking like: 1, 2, 2, 4 (not 1, 2, 2, 5)
      currentRank = index + 2; // Next available rank position
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
  let currentRank = 1;
  sortedCharacters.forEach((entry, index) => {
    // Handle ties - characters with same totalRankScore get same rank
    if (index > 0 && entry.totalRankScore === sortedCharacters[index - 1].totalRankScore) {
      analysis[entry.character.id].overallRank =
        analysis[sortedCharacters[index - 1].character.id].overallRank;
    } else {
      analysis[entry.character.id].overallRank = currentRank;
    }
    currentRank = index + 2; // Next available rank position (handles gaps properly)
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
