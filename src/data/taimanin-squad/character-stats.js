// Taimanin Squad Character Stats Data
// Loads character stats by level from character_stats_by_level.json

import statsData from './character_stats_by_level.json';
import loreData from './character_lore.json';
import { hasCharacterImage } from './characters.js';

// Build icon lookup from lore data
const iconLookup = new Map();
(loreData.characters || []).forEach(char => {
  iconLookup.set(char.id, char.icon);
});

// Get all characters with stats (only those with images)
export function getAllCharacterStats() {
  const chars = statsData.characters || [];
  return chars
    .filter(char => hasCharacterImage(char.id))
    .map(char => ({
      ...char,
      icon: iconLookup.get(char.id) || `${char.id}_Unknown`,
    }));
}

// Get character stats by ID
export function getCharacterStatsById(id) {
  return statsData.characters?.find(c => c.id === id);
}

// Get game config (level caps, rarity rates, etc.)
export function getGameConfig() {
  return statsData.game_config || {};
}

// Get stat growth formula info
export function getStatGrowthFormula() {
  return statsData.stat_growth_formula || {};
}

// Calculate stats at a specific level
export function calculateStatsAtLevel(character, level, evolutionLevel = 0) {
  const config = getGameConfig();
  const rarityRates = config.status_rate_by_rarity || [];
  const rarityIndex = Math.min(character.rarity - 1, rarityRates.length - 1);
  const rarityRate = rarityRates[rarityIndex] || 1.7;

  const baseStats = character.base_stats || {};
  const evolBonus = character.evolution_bonuses?.[String(evolutionLevel)] || {};

  const stats = {};
  const statKeys = ['HP', 'ATK', 'DEF', 'SPD', 'CRATE', 'CDMG', 'CRES', 'ACC', 'EVD'];

  statKeys.forEach(stat => {
    const base = baseStats[stat] || 0;
    const bonus = evolBonus[stat] || 0;
    // Formula: Base * (1 + (L-1) * 0.018 * RarityRate) + EvolBonus
    const calculated = Math.floor(base * (1 + (level - 1) * 0.018 * rarityRate)) + bonus;
    stats[stat] = calculated;
  });

  return stats;
}

// Metadata
export const statsMeta = {
  totalCharacters: statsData.total_characters || 0,
  version: statsData.version || '1.0',
};
