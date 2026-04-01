// Star Savior Character Build Recommendations
// Generates per-character build data based on role
// DPS roles: Striker, Assassin, Caster, Ranger -> Motivator set
// Tank/Support roles: Defender, Supporter -> Perses set
// Main stats are recommended, not necessarily what the item rolls

import { STAR_SAVIOR_CHARACTERS } from './characters.js';
import { STAR_SAVIOR_GEAR } from './gear.js';

export const BUILD_TYPES = {
  dps: {
    name: 'DPS Build',
    set: 'Motivator',
    setKey: 'MOTIVATOR',
    substatPriority: ['ATK %', 'CRIT Rate', 'CRIT Damage', 'SPD', 'HP %'],
  },
  tank: {
    name: 'Tank / Support Build',
    set: 'Perses',
    setKey: 'PERSES',
    substatPriority: ['HP %', 'Effect RES', 'SPD', 'DEF %', 'ATK %'],
  },
};

export const SLOT_ORDER = ['Weapon', 'Gloves', 'Armor', 'Boots', 'Necklace', 'Ring'];

const DPS_ROLES = ['Striker', 'Assassin', 'Caster', 'Ranger'];
const TANK_ROLES = ['Defender', 'Supporter'];

const DPS_MAIN_STATS = {
  Weapon: 'ATK',
  Gloves: 'Flat HP',
  Armor: 'DEF',
  Boots: 'SPD',
  Necklace: 'ATK %',
  Ring: 'SPD',
};

const TANK_MAIN_STATS = {
  Weapon: 'ATK',
  Gloves: 'Flat HP',
  Armor: 'DEF',
  Boots: 'SPD',
  Necklace: 'Flat HP',
  Ring: 'Flat HP',
};

function getSlotRecs(buildType) {
  const mainStats = buildType === 'dps' ? DPS_MAIN_STATS : TANK_MAIN_STATS;
  const setKey = BUILD_TYPES[buildType].setKey;
  const t2Items = STAR_SAVIOR_GEAR.filter(g => g.set === BUILD_TYPES[buildType].set && g.tier === 2 && g.grade === 'Legendary');
  const recs = {};
  SLOT_ORDER.forEach(slot => {
    const item = t2Items.find(g => g.type === slot);
    recs[slot] = {
      itemName: item?.name || slot,
      icon: item?.icon || '',
      mainStat: mainStats[slot] || '',
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
    substatPriority: build.substatPriority,
    slots: getSlotRecs(buildType),
  };
});
