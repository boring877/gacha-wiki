// Silver and Blood - Artifacts Database Helper
// This file provides artifact data and helper functions for the artifact database page

import artifactsData from './artifacts.json';

// Get all artifacts as an array
export function getArtifacts() {
  return Object.entries(artifactsData.artifacts).map(([key, artifact]) => ({
    ...artifact,
    key,
  }));
}

// Get artifact by key
export function getArtifactByKey(key) {
  const artifact = artifactsData.artifacts[key];
  if (!artifact) return null;
  return { ...artifact, key };
}

// Get artifact by id
export function getArtifactById(id) {
  const entry = Object.entries(artifactsData.artifacts).find(([_, a]) => a.id === id);
  if (!entry) return null;
  return { ...entry[1], key: entry[0] };
}

// Get max level stats for an artifact
export function getMaxLevelStats(artifact) {
  const maxLevel = artifact.levels[artifact.levels.length - 1];
  return maxLevel ? maxLevel.stats : null;
}

// Get summary statistics
export function getArtifactStats() {
  const artifacts = getArtifacts();
  return {
    total: artifacts.length,
    byQuality: {
      4: artifacts.filter(a => a.quality === 4).length,
      3: artifacts.filter(a => a.quality === 3).length,
      2: artifacts.filter(a => a.quality === 2).length,
    },
    totalSkills: artifacts.reduce((sum, a) => sum + (a.skills?.length || 0), 0),
    totalExplorationSkills: artifacts.reduce((sum, a) => sum + (a.explorationSkills?.length || 0), 0),
  };
}

// Format skill description with values at a specific level (returns HTML with highlighted values)
export function formatSkillDescription(skill, level = 1) {
  if (!skill || !skill.description) return '';

  let description = skill.description;

  // Replace placeholders {0}, {1}, etc. with actual values wrapped in highlight span
  if (skill.valuesPerLevel) {
    skill.valuesPerLevel.forEach((valueData, index) => {
      const levelIndex = level - 1;
      const rawValue = valueData.values[levelIndex] || valueData.values[0];

      // Format value based on valueType
      let formattedValue;
      if (valueData.valueType === '2') {
        // Percentage value (divide by 100)
        formattedValue = (rawValue / 100).toFixed(0) + '%';
      } else if (valueData.valueType === '3') {
        // Bloodsoul value (divide by 10000)
        formattedValue = (rawValue / 10000).toFixed(1);
      } else {
        // Regular value
        formattedValue = rawValue.toString();
      }

      // Wrap in highlight span
      description = description.replace(`{${index}}`, `<span class="skill-highlight">${formattedValue}</span>`);
    });
  }

  // Remove style tags
  description = description.replace(/<style=\w+>/g, '').replace(/<\/style>/g, '');

  return description;
}

// Get skill values range (min to max across levels)
export function getSkillValueRange(skill) {
  if (!skill || !skill.valuesPerLevel) return null;

  const ranges = skill.valuesPerLevel.map(valueData => {
    const minValue = Math.min(...valueData.values);
    const maxValue = Math.max(...valueData.values);

    if (valueData.valueType === '2') {
      return {
        min: (minValue / 100).toFixed(0) + '%',
        max: (maxValue / 100).toFixed(0) + '%',
      };
    }
    return {
      min: minValue.toString(),
      max: maxValue.toString(),
    };
  });

  return ranges;
}

// Map artifact keys to image filename prefixes
export function getArtifactImagePrefix(key) {
  const mapping = {
    'philosophers-stone': 'PhilosophersStone',
    'silvershadow-chronometer': 'SilvershadowChronometer',
    'fruit-of-immortality': 'FruitOfImmortality',
    'poseidons-skull': 'PoseidonsSkull',
    'eye-of-truth': 'EyeOfTruth',
    'soul-binding-reliquary': 'SoulBindingReliquary',
    'cage-of-the-invisible-nightingale': 'CageOfTheInvisibleNightingale',
    'peacemaker': 'Peacemaker',
  };
  return mapping[key] || key;
}

// Export artifacts directly
export const artifacts = getArtifacts();

// Export default for convenience
export default {
  artifacts,
  getArtifacts,
  getArtifactByKey,
  getArtifactById,
  getMaxLevelStats,
  getArtifactStats,
  formatSkillDescription,
  getSkillValueRange,
  getArtifactImagePrefix,
};
