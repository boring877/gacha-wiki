// Taimanin Squad Character Stats Data

import { TAIMANIN_SQUAD_CHARACTERS } from './characters.js';

const GAME_CONFIG = {
  max_level_by_grade: [0, 10, 20, 30, 40, 50, 60],
  status_rate_by_rarity: { "1_star": 2.0, "2_star": 1.9, "3_star": 1.8, "4_star": 1.7, "5_star": 1.7 },
};

const STAT_GROWTH_FORMULA = {
  description: "HP/ATK/DEF: Base * (1 + (Level-1) * 0.018 * RarityRate) + EvolBonus. SPD/CRATE/CDMG/etc only get evolution bonuses.",
};

export function getAllCharacterStats() {
  return TAIMANIN_SQUAD_CHARACTERS;
}

export function getCharacterStatsById(id) {
  return TAIMANIN_SQUAD_CHARACTERS.find(c => c.id === id);
}

export function getStatGrowthFormula() {
  return STAT_GROWTH_FORMULA;
}

export function getGameConfig() {
  return GAME_CONFIG;
}

export const statsMeta = {
  totalCharacters: TAIMANIN_SQUAD_CHARACTERS.length,
  version: '2.0',
};
