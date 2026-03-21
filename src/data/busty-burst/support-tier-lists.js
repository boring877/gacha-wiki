// BBB Support Tier Lists
// Two categories: Support Bonus (by rarity) and Stats Support (ATK/MATK focus at LB5)

import { BUSTY_BURST_SUPPORT_DATA } from './support-data.js';



// Tier definitions - matches busty-burst-tier-list.css
export const SUPPORT_TIER_DEFINITIONS = {
  SSS: { label: 'SSS', description: 'Throw/Pierce + ATK + Crit (best combo)' },
  SS: { label: 'SS', description: 'Max ATK/MATK/Crit or Throw/Pierce + any ATK/Crit' },
  S: { label: 'S', description: 'Any weapon + ATK or Crit (below max values)' },
  A: { label: 'A', description: 'No offensive stats' }
};

// Helper to get LB5 offensive stat total
function getOffensiveScore(character) {
  const lb5 = character.supportStats.lb5;
  let score = 0;

  if (lb5['ATK']) score += lb5['ATK'];
  if (lb5['MATK']) score += lb5['MATK'];
  if (lb5['Crit Rate']) score += lb5['Crit Rate'] * 2;
  if (lb5['M.Crit Rate']) score += lb5['M.Crit Rate'] * 2;
  if (lb5['Crit']) score += lb5['Crit'] * 2;
  if (lb5['M.Crit']) score += lb5['M.Crit'] * 2;
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
  return lb5['Crit Rate'] || lb5['M.Crit Rate'] || lb5['Crit'] || lb5['M.Crit'];
}

// Check if character has ATK or Crit in LB5 stats
function hasOffensiveStats(character) {
  return hasATK(character) || hasCrit(character);
}

function isMaxATK(character) {
  const lb5 = character.supportStats.lb5;
  return (lb5['ATK'] && lb5['ATK'] >= 200) || (lb5['MATK'] && lb5['MATK'] >= 200);
}

function isMaxCrit(character) {
  const lb5 = character.supportStats.lb5;
  return (lb5['Crit Rate'] && lb5['Crit Rate'] >= 90) || (lb5['M.Crit Rate'] && lb5['M.Crit Rate'] >= 90);
}

function isSSSTier(character) {
  return character.rarity === 'SSR' && (character.weapon === 'Pierce' || character.weapon === 'Throw') && hasATK(character) && hasCrit(character);
}

function isSSTier(character) {
  if ((character.weapon === 'Throw' || character.weapon === 'Pierce') && hasOffensiveStats(character)) {
    return true;
  }
  if (isMaxATK(character) || isMaxCrit(character)) {
    return true;
  }
  return false;
}

function isSTier(character) {
  return hasOffensiveStats(character);
}

/**
 * @typedef {Object} SupportTierCharacter
 * @property {number} id
 * @property {string} name
 * @property {string} rarity
 * @property {string} element
 * @property {string} weapon
 * @property {Object} supportStats
 * @property {Object} [supportBonus]
 * @property {number} [offensiveScore]
 */

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

  /** @type {{ SSS: SupportTierCharacter[], SS: SupportTierCharacter[], S: SupportTierCharacter[], A: SupportTierCharacter[] }} */
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
  /** @type {{ SSS: SupportTierCharacter[], SS: SupportTierCharacter[], S: SupportTierCharacter[], A: SupportTierCharacter[] }} */
  const tiers = {
    SSS: [],
    SS: [],
    S: [],
    A: []
  };

  allChars.forEach(char => {
    const lb5 = char.supportStats.lb5;
    const hasMaxOffensive = (lb5['ATK'] >= 200 || lb5['MATK'] >= 200);
    const hasMaxCrit = (lb5['Crit Rate'] >= 90 || lb5['M.Crit Rate'] >= 90 || lb5['Crit'] >= 90 || lb5['M.Crit'] >= 90);

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



// Format LB5 stats for display
export function formatLB5Stats(supportStats) {
  const lb5 = supportStats.lb5;
  const stats = [];

  Object.entries(lb5).forEach(([stat, value]) => {
    stats.push(`${stat}: ${value}`);
  });

  return stats.join(', ');
}
