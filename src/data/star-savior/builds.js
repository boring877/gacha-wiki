// Star Savior Character Build Recommendations
// Generates per-character build data based on role
// DPS roles: Striker, Assassin, Caster, Ranger -> Motivator set
// Tank/Support roles: Defender, Supporter -> Perses set

import { STAR_SAVIOR_CHARACTERS } from './characters.js';

export const BUILD_TYPES = {
  dps: {
    name: 'DPS Build',
    description: 'Maximize damage output with ATK and CRIT bonuses.',
    set: 'Motivator',
    setKey: 'MOTIVATOR',
    substatPriority: ['SPD', 'ATK %', 'CRIT Rate', 'CRIT Damage', 'HP %'],
  },
  tank: {
    name: 'Tank / Support Build',
    description: 'Maximize survivability with HP and resistances.',
    set: 'Perses',
    setKey: 'PERSES',
    substatPriority: ['HP %', 'Effect RES', 'SPD', 'ATK %', 'CRIT Rate'],
  },
};

export const SLOT_ORDER = ['Weapon', 'Gloves', 'Armor', 'Boots', 'Necklace', 'Ring'];

const DPS_ROLES = ['Striker', 'Assassin', 'Caster', 'Ranger'];
const TANK_ROLES = ['Defender', 'Supporter'];

const SLOT_FILE_MAP = {
  Weapon: 'WEAPON',
  Gloves: 'GLOVES',
  Armor: 'ARMOR',
  Boots: 'SHOES',
  Necklace: 'NECKLACE',
  Ring: 'RING',
};

const SLOT_MAIN_STATS = {
  Weapon: { mainStat: 'ATK', note: null },
  Gloves: { mainStat: 'Flat HP', note: null },
  Armor: { mainStat: 'DEF', note: null },
  Boots: { mainStat: 'SPD', note: null },
};

function getSlotRecs(buildType) {
  const build = BUILD_TYPES[buildType];
  const recs = {};
  SLOT_ORDER.forEach(slot => {
    const fileName = SLOT_FILE_MAP[slot] || slot.toUpperCase();
    const icon = `EQUIP_${build.setKey}_TIER_2_${fileName}.png`;
    if (SLOT_MAIN_STATS[slot]) {
      recs[slot] = { mainStat: SLOT_MAIN_STATS[slot].mainStat, note: SLOT_MAIN_STATS[slot].note, icon };
    } else {
      recs[slot] = { mainStat: null, note: null, icon };
    }
  });
  if (buildType === 'dps') {
    recs['Necklace'] = { mainStat: 'CRIT Damage', note: null, icon: recs['Necklace'].icon };
    recs['Ring'] = { mainStat: 'Flat HP', note: null, icon: recs['Ring'].icon };
  } else {
    recs['Necklace'] = { mainStat: 'Flat HP', note: null, icon: recs['Necklace'].icon };
    recs['Ring'] = { mainStat: 'Flat HP', note: null, icon: recs['Ring'].icon };
  }
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
