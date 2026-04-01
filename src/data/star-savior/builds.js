// Star Savior Character Build Recommendations
// Generates per-character build data based on role
// DPS roles: Striker, Assassin, Caster, Ranger -> Motivator set
// Tank/Support roles: Defender, Supporter -> Perses set
// Main stats shown are recommended, not necessarily what the item rolls from data

import { STAR_SAVIOR_CHARACTERS } from './characters.js';
import { STAR_SAVIOR_GEAR } from './gear.js';

export const BUILD_TYPES = {
  dps: {
    name: 'DPS Build',
    set: 'Motivator',
    setKey: 'MOTIVATOR',
    substatTiers: {
      optimal: ['ATK %'],
      great: ['HP %', 'CRIT Rate', 'SPD'],
      acceptable: ['CRIT Damage', 'Effect Hit'],
      filler: [],
    },
  },
  tank: {
    name: 'Tank / Support Build',
    set: 'Perses',
    setKey: 'PERSES',
    substatTiers: {
      optimal: ['HP %'],
      great: ['Effect RES', 'SPD', 'DEF %'],
      acceptable: ['ATK %', 'Effect Hit'],
      filler: [],
    },
  },
};

export const SLOT_ORDER = ['Weapon', 'Gloves', 'Armor', 'Boots', 'Necklace', 'Ring'];

const DPS_ROLES = ['Striker', 'Assassin', 'Caster', 'Ranger'];
const TANK_ROLES = ['Defender', 'Supporter'];

const DPS_MAIN_STATS = {
  Weapon: { stat: 'ATK', label: 'ATK' },
  Gloves: { stat: 'Flat HP', label: 'HP' },
  Armor: { stat: 'DEF', label: 'DEF' },
  Boots: { stat: 'SPD', label: 'SPD' },
  Necklace: { stat: 'ATK %', label: 'ATK %' },
  Ring: { stat: 'SPD', label: 'SPD' },
};

const TANK_MAIN_STATS = {
  Weapon: { stat: 'ATK', label: 'ATK' },
  Gloves: { stat: 'Flat HP', label: 'HP' },
  Armor: { stat: 'DEF', label: 'DEF' },
  Boots: { stat: 'SPD', label: 'SPD' },
  Necklace: { stat: 'Flat HP', label: 'HP' },
  Ring: { stat: 'Flat HP', label: 'HP' },
};

function getSlotRecs(buildType) {
  const mainStats = buildType === 'dps' ? DPS_MAIN_STATS : TANK_MAIN_STATS;
  const setKey = BUILD_TYPES[buildType].setKey;
  const t2Items = STAR_SAVIOR_GEAR.filter(g => g.set === BUILD_TYPES[buildType].set && g.tier === 2 && g.grade === 'Legendary');
  const recs = {};
  SLOT_ORDER.forEach(slot => {
    const item = t2Items.find(g => g.type === slot);
    const recommended = mainStats[slot] || { stat: '', label: '' };
    recs[slot] = {
      itemName: item?.name || slot,
      icon: item?.icon || '',
      actualMainStat: item?.mainStat || '',
      actualMainStatValue: item?.mainStatValue || 0,
      enchantPerStat: item?.enchantPerStat || 0,
      maxEnchantLevel: item?.maxEnchantLevel || 15,
      recommendedMainStat: recommended.stat,
      recommendedMainStatLabel: recommended.label,
    };
  });
  return recs;
}

export const CHARACTER_BUILDS = STAR_SAVIOR_CHARACTERS.map(char => {
  const buildType = TANK_ROLES.includes(char.role) ? 'tank' : 'dps';
  const build = BUILD_TYPES[buildType];
  return {
    id: char.id,
    name: char.name,
    slug: char.slug,
    role: char.role,
    rarity: char.rarity,
    adjustType: char.adjustType,
    buildType,
    buildName: build.name,
    set: build.set,
    substatTiers: build.substatTiers,
    slots: getSlotRecs(buildType),
  };
});
