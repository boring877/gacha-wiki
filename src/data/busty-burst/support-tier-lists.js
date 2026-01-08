// BBB Support Tier Lists
// Two categories: Support Bonus (by rarity) and Stats Support (ATK/MATK focus at LB5)

import { BUSTY_BURST_SUPPORT_DATA } from './support-data.js';

// Element colors for display badges
export const ELEMENT_COLORS = {
  Dark: '#8b5cf6',    // Purple
  Fire: '#ef4444',    // Red
  Wind: '#22c55e',    // Green
  Water: '#3b82f6',   // Blue
  Holy: '#eab308',    // Yellow
  Mind: '#ec4899'     // Pink
};

// Tier definitions - matches busty-burst-tier-list.css
export const SUPPORT_TIER_DEFINITIONS = {
  SSS: { label: 'SSS', description: 'Best SSR supports with top offensive stats' },
  SS: { label: 'SS', description: 'Other SSR supports' },
  S: { label: 'S', description: 'SR supports' },
  A: { label: 'A', description: 'R supports' }
};

// Helper to get LB5 offensive stat total
function getOffensiveScore(character) {
  const lb5 = character.supportStats.lb5;
  let score = 0;

  if (lb5['ATK']) score += lb5['ATK'];
  if (lb5['MATK']) score += lb5['MATK'];
  if (lb5['P.Crit DMG']) score += lb5['P.Crit DMG'] * 2;
  if (lb5['M.Crit DMG']) score += lb5['M.Crit DMG'] * 2;
  if (lb5['Accuracy']) score += lb5['Accuracy'] * 5;

  return score;
}

// Check if character has ATK in LB5 stats
function hasATK(character) {
  const lb5 = character.supportStats.lb5;
  return lb5['ATK'] || lb5['MATK'];
}

// Check if character has Crit in LB5 stats
function hasCrit(character) {
  const lb5 = character.supportStats.lb5;
  return lb5['P.Crit DMG'] || lb5['M.Crit DMG'];
}

// Check if character has ATK or Crit in LB5 stats
function hasOffensiveStats(character) {
  return hasATK(character) || hasCrit(character);
}

// Tier criteria:
// SSS: Pierce + ATK + Crit (best combo like Stenlina)
// SS: Throw + ATK/Crit OR Pierce + ATK/anything OR Pierce + Crit/anything
// S: Any weapon + ATK or Crit stats
// A: Everything else

function isSSSTier(character) {
  // Pierce weapon with BOTH ATK and Crit
  return character.weapon === 'Pierce' && hasATK(character) && hasCrit(character);
}

function isSSTier(character) {
  // Throw + ATK/Crit
  if (character.weapon === 'Throw' && hasOffensiveStats(character)) {
    return true;
  }
  // Pierce + ATK (any secondary) or Pierce + Crit (any secondary)
  // But not SSS (which has both ATK and Crit)
  if (character.weapon === 'Pierce' && hasOffensiveStats(character)) {
    return true;
  }
  // Any weapon with BOTH ATK and Crit
  if (hasATK(character) && hasCrit(character)) {
    return true;
  }
  return false;
}

function isSTier(character) {
  // Any weapon with ATK or Crit stats
  return hasOffensiveStats(character);
}

// Get Support Bonus tier list
export function getSupportBonusTierList() {
  const allChars = BUSTY_BURST_SUPPORT_DATA.map(c => ({
    id: c.id,
    name: c.name,
    rarity: c.rarity,
    element: c.element,
    weapon: c.weapon,
    supportStats: c.supportStats,
    supportBonus: c.supportBonus,
    offensiveScore: getOffensiveScore(c)
  }));

  const tiers = {
    SSS: [],
    SS: [],
    S: [],
    A: []
  };

  allChars.forEach(char => {
    if (isSSSTier(char)) {
      tiers.SSS.push(char);
    } else if (isSSTier(char)) {
      tiers.SS.push(char);
    } else if (isSTier(char)) {
      tiers.S.push(char);
    } else {
      tiers.A.push(char);
    }
  });

  // Sort each tier by offensive score
  tiers.SSS.sort((a, b) => b.offensiveScore - a.offensiveScore);
  tiers.SS.sort((a, b) => b.offensiveScore - a.offensiveScore);
  tiers.S.sort((a, b) => b.offensiveScore - a.offensiveScore);
  tiers.A.sort((a, b) => b.offensiveScore - a.offensiveScore);

  return {
    name: 'Support Bonus Tier List',
    description: 'Rankings based on weapon type and support stats contribution at LB5',
    lastUpdated: '2025-12-30',
    tiers: [
      { tier: 'SSS', definition: SUPPORT_TIER_DEFINITIONS.SSS, characters: tiers.SSS },
      { tier: 'SS', definition: SUPPORT_TIER_DEFINITIONS.SS, characters: tiers.SS },
      { tier: 'S', definition: SUPPORT_TIER_DEFINITIONS.S, characters: tiers.S },
      { tier: 'A', definition: SUPPORT_TIER_DEFINITIONS.A, characters: tiers.A }
    ]
  };
}

// Get Support Stats tier list (ATK/MATK focused at LB5)
export function getSupportStatsTierList() {
  const allChars = BUSTY_BURST_SUPPORT_DATA.map(c => ({
    id: c.id,
    name: c.name,
    rarity: c.rarity,
    element: c.element,
    weapon: c.weapon,
    supportStats: c.supportStats,
    offensiveScore: getOffensiveScore(c)
  }));

  // Sort by offensive score
  allChars.sort((a, b) => b.offensiveScore - a.offensiveScore);

  // Assign tiers based on rarity and stats
  const tiers = {
    SSS: [],
    SS: [],
    S: [],
    A: []
  };

  allChars.forEach(char => {
    const lb5 = char.supportStats.lb5;
    const hasMaxOffensive = (lb5['ATK'] >= 200 || lb5['MATK'] >= 200);
    const hasMaxCrit = (lb5['P.Crit'] >= 90 || lb5['M.Crit'] >= 90);

    if (char.rarity === 'SSR' && (hasMaxOffensive || hasMaxCrit)) {
      tiers.SSS.push(char);
    } else if (char.rarity === 'SSR') {
      tiers.SS.push(char);
    } else if (char.rarity === 'SR') {
      tiers.S.push(char);
    } else {
      tiers.A.push(char);
    }
  });

  return {
    name: 'Support Stats Tier List',
    description: 'Rankings based on ATK/MATK contribution at LB5 (max limit break)',
    lastUpdated: '2025-12-30',
    tiers: [
      { tier: 'SSS', definition: SUPPORT_TIER_DEFINITIONS.SSS, characters: tiers.SSS },
      { tier: 'SS', definition: SUPPORT_TIER_DEFINITIONS.SS, characters: tiers.SS },
      { tier: 'S', definition: SUPPORT_TIER_DEFINITIONS.S, characters: tiers.S },
      { tier: 'A', definition: SUPPORT_TIER_DEFINITIONS.A, characters: tiers.A }
    ]
  };
}

// Get element color for badge
export function getElementColor(element) {
  return ELEMENT_COLORS[element] || '#6b7280';
}

// Format LB5 stats for display
export function formatLB5Stats(supportStats) {
  const lb5 = supportStats.lb5;
  const stats = [];

  Object.entries(lb5).forEach(([stat, value]) => {
    stats.push(`${stat}: ${value}`);
  });

  return stats.join(', ');
}
