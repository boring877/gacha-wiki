// Zone Nova EXP Requirements Data
// Contains all EXP values, leveling requirements, and material information

// EXP Grades for Characters
export const EXP_GRADES = {
  HIGHEST: { name: 'Highest Grade', exp: 20000 },
  MID: { name: 'Mid Grade', exp: 5000 },
  LOW: { name: 'Low Grade', exp: 1000 },
};

// Character Level Progression
export const CHARACTER_LEVEL_RANGES = [
  { range: '1 → 20', expRequired: 113000, creditMoney: 11251 },
  { range: '20 → 30', expRequired: 179000, creditMoney: 17791 },
  { range: '30 → 40', expRequired: 207000, creditMoney: 20692 },
  { range: '40 → 50', expRequired: 390000, creditMoney: 38939 },
  { range: '50 → 60', expRequired: 623000, creditMoney: 82214 },
  { range: '60 → 70', expRequired: 1327000, creditMoney: 132605 },
  { range: '70 → 80', expRequired: 2763000, creditMoney: 276300 },
];

// Character Breakthrough Stone Requirements
export const CHARACTER_BREAKTHROUGH = [
  { level: 'LV 20', requirement: '10 Low Stone Grade', quantity: 10, type: 'low' },
  { level: 'LV 30', requirement: '20 Low Stone Grade', quantity: 20, type: 'low' },
  { level: 'LV 40', requirement: '10 Mid Stone Grade', quantity: 10, type: 'mid' },
  { level: 'LV 50', requirement: '20 Mid Stone Grade', quantity: 20, type: 'mid' },
  { level: 'LV 60', requirement: '10 High Stone Grade', quantity: 10, type: 'high' },
  { level: 'LV 70', requirement: '20 High Stone Grade', quantity: 20, type: 'high' },
];

// Memory Level Progression
export const MEMORY_LEVEL_RANGES = [
  { range: '1 → 20', expRequired: 21500, creditMoney: 10535 },
  { range: '20 → 30', expRequired: 34500, creditMoney: 17165 },
  { range: '30 → 40', expRequired: 48000, creditMoney: 23790 },
  { range: '40 → 50', expRequired: 74000, creditMoney: 36855 },
  { range: '50 → 60', expRequired: 115000, creditMoney: 57340 },
  { range: '60 → 70', expRequired: 175000, creditMoney: 87405 },
  { range: '70 → 80', expRequired: 330500, creditMoney: 165205 },
];

// Memory Chip EXP Values
export const MEMORY_CHIPS = {
  HIGH: { name: 'Highgrade Chip', exp: 6000 },
  MID: { name: 'Midgrade Chip', exp: 2000 },
  LOW: { name: 'Lowgrade Chip', exp: 500 },
};

// Memory Breakthrough Chip Requirements
export const MEMORY_BREAKTHROUGH = [
  { level: 'LV 20', requirement: '8 Lowgrade Chip', quantity: 8, type: 'low' },
  { level: 'LV 30', requirement: '16 Lowgrade Chip', quantity: 16, type: 'low' },
  { level: 'LV 40', requirement: '8 Midgrade Chip', quantity: 8, type: 'mid' },
  { level: 'LV 50', requirement: '16 Midgrade Chip', quantity: 16, type: 'mid' },
  { level: 'LV 60', requirement: '8 Highgrade Chip', quantity: 8, type: 'high' },
  { level: 'LV 70', requirement: '16 Highgrade Chip', quantity: 16, type: 'high' },
];

// Runes Leveling Data
export const RUNE_DATA = {
  levelRange: 'Lv 0 → LV 15',
  expRequired: 76000,
  creditCost: 114000,
};

// Detailed Rune Leveling Data for Efficiency Analysis
export const RUNE_LEVELING_DATA = [
  { level: 0, exp: 0, credits: 0 },
  { level: 1, exp: 500, credits: 900 },
  { level: 2, exp: 1400, credits: 2100 },
  { level: 3, exp: 2400, credits: 3600 },
  { level: 4, exp: 3800, credits: 5700 },
  { level: 5, exp: 5500, credits: 8250 },
  { level: 6, exp: 7500, credits: 11250 },
  { level: 7, exp: 10200, credits: 15300 },
  { level: 8, exp: 13400, credits: 20100 },
  { level: 9, exp: 17500, credits: 26250 },
  { level: 10, exp: 22700, credits: 34050 },
  { level: 11, exp: 29000, credits: 43500 },
  { level: 12, exp: 37000, credits: 55500 },
  { level: 13, exp: 47400, credits: 71100 },
  { level: 14, exp: 60400, credits: 90800 },
  { level: 15, exp: 76000, credits: 114000 },
];

// Rune Efficiency Analysis
export const RUNE_EFFICIENCY_ANALYSIS = {
  earlyGame: {
    levelRange: '1 → 10',
    totalExpRequired: 22700,
    totalCreditsRequired: 34050,
    efficiency: 'Excellent',
    description: 'Best value for resources spent',
  },
  lateGame: {
    levelRange: '10 → 15',
    totalExpRequired: 53300,
    totalCreditsRequired: 79950,
    efficiency: 'Poor',
    description: '3x resources for less stat gains',
  },
};

// EXP Cube Values
export const EXP_CUBES = {
  HIGH: { name: 'Highgrade EXP Cube', exp: 1000 },
  MID: { name: 'Midgrade EXP Cube', exp: 500 },
  LOW: { name: 'Lowgrade EXP Cube', exp: 100 },
};

// Calculate total EXP needed for character levels
export function calculateCharacterExp(fromLevel, toLevel) {
  if (fromLevel >= toLevel) return 0;

  let totalExp = 0;
  let totalCredits = 0;

  const levelRanges = [
    { start: 1, end: 20, data: CHARACTER_LEVEL_RANGES[0] },
    { start: 20, end: 30, data: CHARACTER_LEVEL_RANGES[1] },
    { start: 30, end: 40, data: CHARACTER_LEVEL_RANGES[2] },
    { start: 40, end: 50, data: CHARACTER_LEVEL_RANGES[3] },
    { start: 50, end: 60, data: CHARACTER_LEVEL_RANGES[4] },
    { start: 60, end: 70, data: CHARACTER_LEVEL_RANGES[5] },
    { start: 70, end: 80, data: CHARACTER_LEVEL_RANGES[6] },
  ];

  for (const range of levelRanges) {
    if (toLevel > range.start && fromLevel < range.end) {
      const _actualStart = Math.max(fromLevel, range.start);
      const _actualEnd = Math.min(toLevel, range.end);

      // For simplicity, we'll use the full range value for now
      // In a more detailed implementation, we'd calculate per-level requirements
      if (fromLevel <= range.start && toLevel >= range.end) {
        totalExp += range.data.expRequired;
        totalCredits += range.data.creditMoney;
      }
    }
  }

  return { totalExp, totalCredits };
}

// Calculate total EXP needed for memory levels
export function calculateMemoryExp(fromLevel, toLevel) {
  if (fromLevel >= toLevel) return 0;

  let totalExp = 0;
  let totalCredits = 0;

  const levelRanges = [
    { start: 1, end: 20, data: MEMORY_LEVEL_RANGES[0] },
    { start: 20, end: 30, data: MEMORY_LEVEL_RANGES[1] },
    { start: 30, end: 40, data: MEMORY_LEVEL_RANGES[2] },
    { start: 40, end: 50, data: MEMORY_LEVEL_RANGES[3] },
    { start: 50, end: 60, data: MEMORY_LEVEL_RANGES[4] },
    { start: 60, end: 70, data: MEMORY_LEVEL_RANGES[5] },
    { start: 70, end: 80, data: MEMORY_LEVEL_RANGES[6] },
  ];

  for (const range of levelRanges) {
    if (toLevel > range.start && fromLevel < range.end) {
      if (fromLevel <= range.start && toLevel >= range.end) {
        totalExp += range.data.expRequired;
        totalCredits += range.data.creditMoney;
      }
    }
  }

  return { totalExp, totalCredits };
}

// Get breakthrough requirements for level range
export function getCharacterBreakthroughRequirements(fromLevel, toLevel) {
  const requirements = [];

  for (const breakthrough of CHARACTER_BREAKTHROUGH) {
    const level = parseInt(breakthrough.level.replace('LV ', ''));
    if (level > fromLevel && level <= toLevel) {
      requirements.push(breakthrough);
    }
  }

  return requirements;
}

// Get memory chip requirements for level range
export function getMemoryChipRequirements(fromLevel, toLevel) {
  const requirements = [];

  for (const breakthrough of MEMORY_BREAKTHROUGH) {
    const level = parseInt(breakthrough.level.replace('LV ', ''));
    if (level > fromLevel && level <= toLevel) {
      requirements.push(breakthrough);
    }
  }

  return requirements;
}
