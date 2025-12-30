// Busty Burst Character Database
// Unified data combining character info, stats, skills, and support data
// All data is imported from individual source files for easy updates

import { BUSTY_BURST_CHARACTER_INFO, getAllCharacters, getCharacterBySlug } from './character-info.js';
import { BUSTY_BURST_CHARACTER_STATS, calculateStatAtLevel, calculateCritRate, STAT_DISPLAY_NAMES } from './character-stats-full.js';
import { BUSTY_BURST_SKILLS_DATA } from './character-skills-full.js';
import { BUSTY_BURST_SUPPORT_DATA, getSupportDataById, ELEMENT_MAP, WEAPON_MAP, WEAPON_INSPIRATION_EFFECTS } from './support-data.js';
import { characterBuilds } from './character-builds.js';

// Re-export commonly used functions and constants
export { calculateStatAtLevel, calculateCritRate, STAT_DISPLAY_NAMES };
export { ELEMENT_MAP, WEAPON_MAP, WEAPON_INSPIRATION_EFFECTS };

// Create a mapping from characterId to slug for cross-referencing
const characterIdToSlugMap = {};
Object.values(BUSTY_BURST_CHARACTER_INFO).forEach(char => {
  // We need to find the corresponding stats entry to get the characterId
  const statsEntry = Object.values(BUSTY_BURST_CHARACTER_STATS).find(
    stats => stats.id === char.slug || stats.name?.includes(char.baseName)
  );
  if (statsEntry && statsEntry.characterId) {
    characterIdToSlugMap[statsEntry.characterId] = char.slug;
  }
});

// Create a mapping from slug to characterId
const slugToCharacterIdMap = {};
Object.entries(BUSTY_BURST_CHARACTER_STATS).forEach(([slug, stats]) => {
  if (stats.characterId) {
    slugToCharacterIdMap[slug] = stats.characterId;
  }
});

// Create a mapping from id to skill data
const skillDataByIdMap = {};
BUSTY_BURST_SKILLS_DATA.forEach(skill => {
  if (skill.id) {
    skillDataByIdMap[skill.id] = skill;
  }
  if (skill.slug) {
    skillDataByIdMap[skill.slug] = skill;
  }
});

// Create a mapping from id to support data
const supportDataByIdMap = {};
BUSTY_BURST_SUPPORT_DATA.forEach(support => {
  if (support.id) {
    supportDataByIdMap[support.id] = support;
  }
});

/**
 * Get unified character data by slug
 * Combines info, stats, skills, and support data
 */
export function getCharacterDataBySlug(slug) {
  const info = BUSTY_BURST_CHARACTER_INFO[slug];
  if (!info) return null;

  const stats = BUSTY_BURST_CHARACTER_STATS[slug];
  const characterId = stats?.characterId;

  // Find skills data - try by id first, then by slug
  let skills = null;
  if (characterId) {
    skills = skillDataByIdMap[characterId];
  }
  if (!skills) {
    skills = skillDataByIdMap[slug];
  }
  // Also try matching by finding the skills entry with matching slug
  if (!skills) {
    skills = BUSTY_BURST_SKILLS_DATA.find(s => s.slug === slug);
  }

  // Find support data by characterId
  let support = null;
  if (characterId) {
    support = supportDataByIdMap[characterId];
  }

  // Find build data by slug
  const build = characterBuilds[slug] || null;

  return {
    // Character info (profile, credits, obtain)
    ...info,

    // Character stats (base stats, limit break, GP ability, ability grade, passive abilities)
    stats: stats || null,
    characterId: characterId || null,

    // Character skills
    skills: skills || null,

    // Support data (support stats and bonuses)
    support: support || null,

    // Build recommendation (if available)
    build: build || null,
  };
}

/**
 * Get all characters with unified data
 */
export function getAllCharacterData() {
  return Object.keys(BUSTY_BURST_CHARACTER_INFO).map(slug => {
    return getCharacterDataBySlug(slug);
  }).filter(Boolean);
}

/**
 * Get all character slugs
 */
export function getAllCharacterSlugs() {
  return Object.keys(BUSTY_BURST_CHARACTER_INFO);
}

/**
 * Get characters filtered by criteria
 */
export function getCharactersFiltered(filters = {}) {
  const allChars = getAllCharacterData();

  return allChars.filter(char => {
    if (filters.rarity && char.rarity !== filters.rarity) return false;
    if (filters.element && char.element !== filters.element) return false;
    if (filters.role && char.role !== filters.role) return false;
    if (filters.weaponType && char.weaponType !== filters.weaponType) return false;
    if (filters.position && char.position?.number !== filters.position) return false;
    if (filters.attackType && char.attackType !== filters.attackType) return false;
    return true;
  });
}

/**
 * Get unique values for filters
 */
export function getFilterOptions() {
  const allChars = getAllCharacterData();

  const rarities = [...new Set(allChars.map(c => c.rarity))].sort((a, b) => {
    const order = { 'SSR': 0, 'SR': 1, 'R': 2 };
    return order[a] - order[b];
  });

  const elements = [...new Set(allChars.map(c => c.element))].sort();
  const roles = [...new Set(allChars.map(c => c.role))].sort();
  const weaponTypes = [...new Set(allChars.map(c => c.weaponType))].filter(Boolean).sort();
  const attackTypes = [...new Set(allChars.map(c => c.attackType))].sort();
  const positions = [...new Set(allChars.map(c => c.position?.roman))].filter(Boolean).sort();

  return {
    rarities,
    elements,
    roles,
    weaponTypes,
    attackTypes,
    positions,
  };
}

/**
 * Sort characters by various criteria
 */
export function sortCharacters(characters, sortBy = 'name', order = 'asc') {
  const sorted = [...characters].sort((a, b) => {
    let valA, valB;

    switch (sortBy) {
      case 'name':
        valA = a.displayName || a.name;
        valB = b.displayName || b.name;
        break;
      case 'rarity':
        const rarityOrder = { 'SSR': 0, 'SR': 1, 'R': 2 };
        valA = rarityOrder[a.rarity] ?? 99;
        valB = rarityOrder[b.rarity] ?? 99;
        break;
      case 'element':
        valA = a.element;
        valB = b.element;
        break;
      case 'role':
        valA = a.role;
        valB = b.role;
        break;
      case 'position':
        valA = a.position?.number ?? 99;
        valB = b.position?.number ?? 99;
        break;
      case 'hp':
        valA = a.stats?.baseStats?.hp?.lv90 ?? 0;
        valB = b.stats?.baseStats?.hp?.lv90 ?? 0;
        break;
      case 'atk':
        valA = a.stats?.baseStats?.atk?.lv90 ?? 0;
        valB = b.stats?.baseStats?.atk?.lv90 ?? 0;
        break;
      case 'matk':
        valA = a.stats?.baseStats?.matk?.lv90 ?? 0;
        valB = b.stats?.baseStats?.matk?.lv90 ?? 0;
        break;
      case 'def':
        valA = a.stats?.baseStats?.def?.lv90 ?? 0;
        valB = b.stats?.baseStats?.def?.lv90 ?? 0;
        break;
      case 'mdef':
        valA = a.stats?.baseStats?.mdef?.lv90 ?? 0;
        valB = b.stats?.baseStats?.mdef?.lv90 ?? 0;
        break;
      default:
        valA = a.displayName || a.name;
        valB = b.displayName || b.name;
    }

    // Handle string comparison
    if (typeof valA === 'string' && typeof valB === 'string') {
      return order === 'asc'
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }

    // Handle numeric comparison
    return order === 'asc' ? valA - valB : valB - valA;
  });

  return sorted;
}

/**
 * Get character count by rarity
 */
export function getCharacterCountByRarity() {
  const allChars = getAllCharacterData();
  return {
    total: allChars.length,
    SSR: allChars.filter(c => c.rarity === 'SSR').length,
    SR: allChars.filter(c => c.rarity === 'SR').length,
    R: allChars.filter(c => c.rarity === 'R').length,
  };
}

/**
 * Format stat value for display
 */
export function formatStatValue(stat, value) {
  if (stat === 'hpDrain' || stat === 'mpCostDown') {
    return `${value}%`;
  }
  return value.toLocaleString();
}

/**
 * Get stats at a specific level
 */
export function getStatsAtLevel(characterSlug, level) {
  const stats = BUSTY_BURST_CHARACTER_STATS[characterSlug];
  if (!stats || !stats.baseStats) return null;

  const result = {};
  Object.entries(stats.baseStats).forEach(([stat, values]) => {
    if (values.base !== undefined && values.lv90 !== undefined) {
      result[stat] = calculateStatAtLevel(values.base, values.lv90, level);
    }
  });

  return result;
}

// Export raw data for direct access if needed
export {
  BUSTY_BURST_CHARACTER_INFO,
  BUSTY_BURST_CHARACTER_STATS,
  BUSTY_BURST_SKILLS_DATA,
  BUSTY_BURST_SUPPORT_DATA,
};
