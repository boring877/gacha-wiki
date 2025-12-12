// Zone Nova EXP Requirements API Endpoint
// Generates /data/zone-nova/exp-requirements.json
// Complete leveling data for characters, memories, and runes

import {
  EXP_GRADES,
  CHARACTER_LEVEL_RANGES,
  CHARACTER_BREAKTHROUGH,
  MEMORY_LEVEL_RANGES,
  MEMORY_CHIPS,
  MEMORY_BREAKTHROUGH,
  RUNE_DATA,
  RUNE_LEVELING_DATA,
  RUNE_EFFICIENCY_ANALYSIS,
  EXP_CUBES,
} from '../../../data/zone-nova/exp-requirements.js';

export const prerender = true;

export async function GET() {
  // Calculate totals for character leveling
  const characterTotals = CHARACTER_LEVEL_RANGES.reduce(
    (acc, range) => ({
      totalExp: acc.totalExp + range.expRequired,
      totalCredits: acc.totalCredits + range.creditMoney,
    }),
    { totalExp: 0, totalCredits: 0 }
  );

  // Calculate totals for memory leveling
  const memoryTotals = MEMORY_LEVEL_RANGES.reduce(
    (acc, range) => ({
      totalExp: acc.totalExp + range.expRequired,
      totalCredits: acc.totalCredits + range.creditMoney,
    }),
    { totalExp: 0, totalCredits: 0 }
  );

  const response = {
    game: 'Zone Nova',
    type: 'exp-requirements',
    description:
      'Complete leveling requirements for characters, memories, and runes including EXP values, credit costs, breakthrough materials, and efficiency analysis',
    lastUpdated: new Date().toISOString().split('T')[0],

    // Summary
    summary: {
      characterMaxLevel: 80,
      memoryMaxLevel: 80,
      runeMaxLevel: 15,
      characterTotalExp: characterTotals.totalExp,
      characterTotalCredits: characterTotals.totalCredits,
      memoryTotalExp: memoryTotals.totalExp,
      memoryTotalCredits: memoryTotals.totalCredits,
      runeTotalExp: RUNE_DATA.expRequired,
      runeTotalCredits: RUNE_DATA.creditCost,
    },

    // Character leveling
    character: {
      expGrades: Object.entries(EXP_GRADES).map(([key, value]) => ({
        grade: key.toLowerCase(),
        name: value.name,
        expValue: value.exp,
      })),

      levelRanges: CHARACTER_LEVEL_RANGES.map(range => ({
        range: range.range,
        expRequired: range.expRequired,
        creditCost: range.creditMoney,
      })),

      breakthroughRequirements: CHARACTER_BREAKTHROUGH.map(bt => ({
        level: bt.level,
        material: bt.requirement,
        quantity: bt.quantity,
        stoneGrade: bt.type,
      })),

      totals: {
        totalExp: characterTotals.totalExp,
        totalCredits: characterTotals.totalCredits,
        breakthroughStones: {
          low: 30,
          mid: 30,
          high: 30,
        },
      },
    },

    // Memory leveling
    memory: {
      chipValues: Object.entries(MEMORY_CHIPS).map(([key, value]) => ({
        grade: key.toLowerCase(),
        name: value.name,
        expValue: value.exp,
      })),

      levelRanges: MEMORY_LEVEL_RANGES.map(range => ({
        range: range.range,
        expRequired: range.expRequired,
        creditCost: range.creditMoney,
      })),

      breakthroughRequirements: MEMORY_BREAKTHROUGH.map(bt => ({
        level: bt.level,
        material: bt.requirement,
        quantity: bt.quantity,
        chipGrade: bt.type,
      })),

      totals: {
        totalExp: memoryTotals.totalExp,
        totalCredits: memoryTotals.totalCredits,
        breakthroughChips: {
          low: 24,
          mid: 24,
          high: 24,
        },
      },
    },

    // Rune leveling
    runes: {
      maxLevel: 15,
      totalExp: RUNE_DATA.expRequired,
      totalCredits: RUNE_DATA.creditCost,

      levelingData: RUNE_LEVELING_DATA.map(data => ({
        level: data.level,
        cumulativeExp: data.exp,
        cumulativeCredits: data.credits,
      })),

      efficiencyAnalysis: {
        earlyGame: {
          levelRange: RUNE_EFFICIENCY_ANALYSIS.earlyGame.levelRange,
          expRequired: RUNE_EFFICIENCY_ANALYSIS.earlyGame.totalExpRequired,
          creditsRequired: RUNE_EFFICIENCY_ANALYSIS.earlyGame.totalCreditsRequired,
          efficiency: RUNE_EFFICIENCY_ANALYSIS.earlyGame.efficiency,
          description: RUNE_EFFICIENCY_ANALYSIS.earlyGame.description,
        },
        lateGame: {
          levelRange: RUNE_EFFICIENCY_ANALYSIS.lateGame.levelRange,
          expRequired: RUNE_EFFICIENCY_ANALYSIS.lateGame.totalExpRequired,
          creditsRequired: RUNE_EFFICIENCY_ANALYSIS.lateGame.totalCreditsRequired,
          efficiency: RUNE_EFFICIENCY_ANALYSIS.lateGame.efficiency,
          description: RUNE_EFFICIENCY_ANALYSIS.lateGame.description,
        },
        recommendation:
          'Focus on getting runes to level 10 first for best resource efficiency. Levels 10-15 cost 3x more resources for diminishing returns.',
      },
    },

    // EXP Cubes (for runes)
    expCubes: Object.entries(EXP_CUBES).map(([key, value]) => ({
      grade: key.toLowerCase(),
      name: value.name,
      expValue: value.exp,
    })),

    // Quick reference
    quickReference: {
      characterLv1To80: {
        totalExp: characterTotals.totalExp,
        highGradeExpNeeded: Math.ceil(characterTotals.totalExp / 20000),
        midGradeExpNeeded: Math.ceil(characterTotals.totalExp / 5000),
      },
      memoryLv1To80: {
        totalExp: memoryTotals.totalExp,
        highgradeChipsNeeded: Math.ceil(memoryTotals.totalExp / 6000),
        midgradeChipsNeeded: Math.ceil(memoryTotals.totalExp / 2000),
      },
      runeLv0To15: {
        totalExp: RUNE_DATA.expRequired,
        highCubesNeeded: Math.ceil(RUNE_DATA.expRequired / 1000),
        midCubesNeeded: Math.ceil(RUNE_DATA.expRequired / 500),
      },
    },
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
