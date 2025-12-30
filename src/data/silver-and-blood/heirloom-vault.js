// Heirloom Vault Data Helper
// This file provides helper functions for the Heirloom Vault page

import heirloomData from './heirloom_vault_data.json';
import heirloomStats from './heirloom_stats.json';
import resonantiaSkills from './resonantia_skills.json';
import charactersInfo from './characters_info.json';

// Build a lookup map from character name to info
const characterInfoMap = new Map();
if (charactersInfo.characters) {
  charactersInfo.characters.forEach(char => {
    if (char.name) {
      // Use name + title as key for more precise matching
      const key = `${char.name}-${char.title}`;
      if (!characterInfoMap.has(key)) {
        characterInfoMap.set(key, char);
      }
      // Also store by just name for fallback
      if (!characterInfoMap.has(char.name)) {
        characterInfoMap.set(char.name, char);
      }
    }
  });
}

// Get character info (role, equipment, damage type, etc.) by name
export function getCharacterInfo(name, title) {
  // Try exact match first
  const exactKey = `${name}-${title}`;
  if (characterInfoMap.has(exactKey)) {
    return characterInfoMap.get(exactKey);
  }
  // Fallback to name only
  return characterInfoMap.get(name) || null;
}

// Get all characters
export function getCharacters() {
  return heirloomData.characters || [];
}

// Get characters filtered by camp
export function getCharactersByCamp(camp) {
  if (!camp || camp === 'All') {
    return getCharacters();
  }
  return getCharacters().filter(char => char.camp === camp);
}

// Get all unique camps
export function getCamps() {
  const camps = [...new Set(getCharacters().map(char => char.camp))];
  return ['All', ...camps];
}

// Get materials data
export function getMaterials() {
  return heirloomData.materials || {};
}

// Get rank costs configuration
export function getRankCosts() {
  return heirloomData.rankCosts || {};
}

// Get metadata
export function getMeta() {
  return heirloomData.meta || {};
}

// Get camp color
export function getCampColor(camp) {
  const materials = getMaterials();
  return materials[camp]?.color || '#666666';
}

// Get camp material names
export function getCampMaterialNames(camp) {
  const materials = getMaterials();
  return {
    seedName: materials[camp]?.seedName || 'Seed',
    fruitName: materials[camp]?.fruitName || 'Fruit',
  };
}

// Calculate total materials needed for a character
export function calculateTotalMaterials(character) {
  let basic = 0;
  let advanced = 0;
  let rare = 0;

  character.ranks.forEach(rank => {
    rank.costs.forEach(cost => {
      if (cost.itemName.includes('Basic')) {
        basic += cost.amount;
      } else if (cost.itemName.includes('Advanced')) {
        advanced += cost.amount;
      } else if (cost.itemName.includes('Rare')) {
        rare += cost.amount;
      }
    });
  });

  return { basic, advanced, rare };
}

// Get stats for summary section
export function getStats() {
  const meta = getMeta();
  const characters = getCharacters();

  const campCounts = {};
  characters.forEach(char => {
    campCounts[char.camp] = (campCounts[char.camp] || 0) + 1;
  });

  return {
    totalCharacters: meta.totalCharacters || characters.length,
    charactersWithResonantia: meta.charactersWithResonantia || characters.filter(c => c.hasResonantiaUpgrade).length,
    maxRank: meta.maxRank || 6,
    maxLevel: meta.maxLevel || 70,
    campCounts,
  };
}

// Get heirloom stats data
export function getHeirloomStats() {
  return heirloomStats.level_groups || {};
}

// Get stat bonuses for a specific hero at a level
export function getHeroStatBonuses(heroId, level) {
  const levelGroups = getHeirloomStats();

  // Find which level group this hero belongs to
  for (const [groupId, groupData] of Object.entries(levelGroups)) {
    const heroInGroup = groupData.heroes?.find(h => h.hero_id === heroId);
    if (heroInGroup) {
      // Find the level data
      const levelData = groupData.levels?.find(l => l.level === level);
      if (levelData) {
        return {
          hp: levelData.hp || 0,
          atk: levelData.atk || 0,
          pDef: levelData.p_def || 0,
          mDef: levelData.m_def || 0,
        };
      }
      // If exact level not found, find closest lower level
      const sortedLevels = [...(groupData.levels || [])].sort((a, b) => b.level - a.level);
      const closestLevel = sortedLevels.find(l => l.level <= level);
      if (closestLevel) {
        return {
          hp: closestLevel.hp || 0,
          atk: closestLevel.atk || 0,
          pDef: closestLevel.p_def || 0,
          mDef: closestLevel.m_def || 0,
        };
      }
    }
  }
  return { hp: 0, atk: 0, pDef: 0, mDef: 0 };
}

// Default per level gain (standard scaling for most characters)
// Based on groups 1001, 2001, 3001, 4001 which have explicit per_level_gain
const DEFAULT_PER_LEVEL_GAIN = {
  hp: 360,
  atk: 22,
  p_def: 9,
  m_def: 9
};

// Get max level stat bonuses for a hero (Level 70 stats)
export function getHeroMaxStatBonuses(heroId) {
  const levelGroups = getHeirloomStats();
  const targetLevel = 70; // Max heirloom level is 70

  for (const [groupId, groupData] of Object.entries(levelGroups)) {
    const heroInGroup = groupData.heroes?.find(h => h.hero_id === heroId);
    if (heroInGroup) {
      // Use per_level_gain if available, otherwise use default
      const gain = (groupData.per_level_gain && Object.keys(groupData.per_level_gain).length > 0)
        ? groupData.per_level_gain
        : DEFAULT_PER_LEVEL_GAIN;

      return {
        hp: Math.round((gain.hp || DEFAULT_PER_LEVEL_GAIN.hp) * targetLevel),
        atk: Math.round((gain.atk || DEFAULT_PER_LEVEL_GAIN.atk) * targetLevel),
        pDef: Math.round((gain.p_def || DEFAULT_PER_LEVEL_GAIN.p_def) * targetLevel),
        mDef: Math.round((gain.m_def || DEFAULT_PER_LEVEL_GAIN.m_def) * targetLevel),
        maxLevel: targetLevel,
      };
    }
  }

  // Fallback for heroes not found in stats data - use default scaling
  return {
    hp: Math.round(DEFAULT_PER_LEVEL_GAIN.hp * targetLevel),
    atk: Math.round(DEFAULT_PER_LEVEL_GAIN.atk * targetLevel),
    pDef: Math.round(DEFAULT_PER_LEVEL_GAIN.p_def * targetLevel),
    mDef: Math.round(DEFAULT_PER_LEVEL_GAIN.m_def * targetLevel),
    maxLevel: targetLevel,
  };
}

// Get resonantia skills for a hero
export function getResonantiaSkills(heroId) {
  return resonantiaSkills.heroes?.[heroId]?.resonantiaSkills || [];
}

// Check if hero has resonantia
export function hasResonantia(heroId) {
  return !!resonantiaSkills.heroes?.[heroId];
}

// Format skill value based on type
export function formatSkillValue(value, valueType) {
  if (valueType === '2') {
    // Percentage (divide by 100)
    return (value / 100).toFixed(1) + '%';
  } else if (valueType === '3') {
    // Decimal percentage (divide by 10000)
    return (value / 10000).toFixed(2) + '%';
  }
  return value.toString();
}

// Format skill description with values
export function formatResonantiaDescription(skill, level = 0) {
  if (!skill || !skill.description) return '';

  let description = skill.description;

  if (skill.values && skill.values.length > 0) {
    skill.values.forEach((valueData, index) => {
      const levelValue = valueData.perLevelValues?.[level] || valueData.perLevelValues?.[0] || 0;
      const formattedValue = formatSkillValue(levelValue, valueData.valueType);
      description = description.replace(`{${index}}`, formattedValue);
    });
  }

  // Clean up style tags
  description = description.replace(/<style=\w+>/g, '').replace(/<\/style>/g, '');

  return description;
}

// Format skill description showing all 3 level values together (e.g. "70%/85%/100%")
export function formatResonantiaDescriptionAllLevels(skill) {
  if (!skill || !skill.description) return '';

  let description = skill.description;

  if (skill.values && skill.values.length > 0) {
    skill.values.forEach((valueData, index) => {
      // Get values for level 1, 2, 3 (indices 0, 1, 2)
      const val1 = valueData.perLevelValues?.[0] || 0;
      const val2 = valueData.perLevelValues?.[1] || 0;
      const val3 = valueData.perLevelValues?.[2] || 0;

      const formatted1 = formatSkillValue(val1, valueData.valueType);
      const formatted2 = formatSkillValue(val2, valueData.valueType);
      const formatted3 = formatSkillValue(val3, valueData.valueType);

      // Format as colored values: lv1/lv2/lv3
      const allValues = `<span class="res-val res-val-1">${formatted1}</span>/<span class="res-val res-val-2">${formatted2}</span>/<span class="res-val res-val-3">${formatted3}</span>`;
      description = description.replace(`{${index}}`, allValues);
    });
  }

  // Clean up style tags
  description = description.replace(/<style=\w+>/g, '').replace(/<\/style>/g, '');

  return description;
}

// Get the level cap requirement from the skill's unlockRequirement data
// If not available, falls back to calculated value based on rank
export function getResonantiaLevelRequirement(skill) {
  if (skill?.unlockRequirement?.heirloomLevelCap) {
    return skill.unlockRequirement.heirloomLevelCap;
  }
  // Fallback: calculate based on rank
  return (skill?.rank || 1) * 10 + 10;
}

// Get all 3 level requirements for a resonantia skill using skillLevelUnlocks data
// Parameters: skill object and heroId to look up the specific unlock data
export function getResonantiaAllLevelRequirements(skill, heroId) {
  const skillLevelUnlocks = resonantiaSkills.skillLevelUnlocks?.heroUnlocks;

  if (skillLevelUnlocks && heroId && skillLevelUnlocks[heroId]) {
    const heroUnlocks = skillLevelUnlocks[heroId];

    // Find the skill index by matching the skillId
    // Skills are ordered: R1=index 0, R3=index 1, R5=index 2, R7=index 3, R9=index 4
    const skillIndexMap = { 1: 0, 3: 1, 5: 2, 7: 3, 9: 4 };
    const skillIndex = skillIndexMap[skill.rank];

    if (skillIndex !== undefined) {
      // Get requirements for each skill level (1, 2, 3)
      const level1 = heroUnlocks.find(u => u.skillIndex === skillIndex && u.skillLevel === 1);
      const level2 = heroUnlocks.find(u => u.skillIndex === skillIndex && u.skillLevel === 2);
      const level3 = heroUnlocks.find(u => u.skillIndex === skillIndex && u.skillLevel === 3);

      return [
        level1?.requiredHeirloomLevelCap || 10,
        level2?.requiredHeirloomLevelCap || 20,
        level3?.requiredHeirloomLevelCap || 50
      ];
    }
  }

  // Fallback: use the skill's unlockRequirement for Lv.1, estimate others
  const baseReq = getResonantiaLevelRequirement(skill);
  return [baseReq, baseReq + 10, baseReq + 30];
}

// Calculate stats at any level (not just max)
export function getStatsAtLevel(heroId, level) {
  const levelGroups = getHeirloomStats();
  const targetLevel = Math.max(1, Math.min(70, level));

  for (const [groupId, groupData] of Object.entries(levelGroups)) {
    const heroInGroup = groupData.heroes?.find(h => h.hero_id === heroId);
    if (heroInGroup) {
      const gain = (groupData.per_level_gain && Object.keys(groupData.per_level_gain).length > 0)
        ? groupData.per_level_gain
        : DEFAULT_PER_LEVEL_GAIN;

      return {
        hp: Math.round((gain.hp || DEFAULT_PER_LEVEL_GAIN.hp) * targetLevel),
        atk: Math.round((gain.atk || DEFAULT_PER_LEVEL_GAIN.atk) * targetLevel),
        pDef: Math.round((gain.p_def || DEFAULT_PER_LEVEL_GAIN.p_def) * targetLevel),
        mDef: Math.round((gain.m_def || DEFAULT_PER_LEVEL_GAIN.m_def) * targetLevel),
        level: targetLevel,
      };
    }
  }

  // Fallback
  return {
    hp: Math.round(DEFAULT_PER_LEVEL_GAIN.hp * targetLevel),
    atk: Math.round(DEFAULT_PER_LEVEL_GAIN.atk * targetLevel),
    pDef: Math.round(DEFAULT_PER_LEVEL_GAIN.p_def * targetLevel),
    mDef: Math.round(DEFAULT_PER_LEVEL_GAIN.m_def * targetLevel),
    level: targetLevel,
  };
}

// Export raw data for direct access
export { heirloomData, heirloomStats, resonantiaSkills, charactersInfo };

export default {
  getCharacters,
  getCharactersByCamp,
  getCamps,
  getMaterials,
  getRankCosts,
  getMeta,
  getCampColor,
  getCampMaterialNames,
  calculateTotalMaterials,
  getStats,
  getHeirloomStats,
  getHeroStatBonuses,
  getHeroMaxStatBonuses,
  getStatsAtLevel,
  getCharacterInfo,
  getResonantiaSkills,
  hasResonantia,
  formatSkillValue,
  formatResonantiaDescription,
  formatResonantiaDescriptionAllLevels,
  getResonantiaLevelRequirement,
  getResonantiaAllLevelRequirements,
  heirloomData,
  heirloomStats,
  resonantiaSkills,
  charactersInfo,
};
