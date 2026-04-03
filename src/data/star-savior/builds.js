// Star Savior Character Build Recommendations
// Generates per-character build data based on role
// DPS roles: Striker, Assassin, Caster, Ranger -> Motivator set
// Tank/Support roles: Defender, Supporter -> Perses set
// Main stats shown are recommended, not necessarily what the item rolls from data
// Arcana recommendations are manually curated per character

import { STAR_SAVIOR_CHARACTERS } from './characters.js';
import { STAR_SAVIOR_GEAR } from './gear.js';
import { STAR_SAVIOR_ARCANA } from './arcana.js';

export const BUILD_TYPES = {
  dps: {
    name: 'DPS Build',
    set: 'Motivator',
    setKey: 'MOTIVATOR',
    substatTiers: {
      optimal: ['ATK %'],
      great: ['HP %', 'CRIT Rate', 'SPD', 'ATK'],
      acceptable: ['CRIT Damage', 'Effect Hit'],
      filler: [],
    },
    ringNote: 'ATK% cannot be a substat on the Ring since it is already the main stat.',
  },
  tank: {
    name: 'Tank / Support Build',
    set: 'Perses',
    setKey: 'PERSES',
    substatTiers: {
      optimal: ['HP %'],
      great: ['ATK %', 'SPD', 'HP'],
      acceptable: ['DEF %', 'Effect Hit', 'Effect RES'],
      filler: [],
    },
    ringNote: 'HP% cannot be a substat on the Ring since it is already the main stat.',
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
  Necklace: { stat: 'SPD', label: 'SPD', value: 15, perLvl: 1 },
  Ring: { stat: 'ATK %', label: 'ATK %', value: 300, perLvl: 75, isPercent: true },
};

const TANK_MAIN_STATS = {
  Weapon: { stat: 'ATK', label: 'ATK' },
  Gloves: { stat: 'Flat HP', label: 'HP' },
  Armor: { stat: 'DEF', label: 'DEF' },
  Boots: { stat: 'SPD', label: 'SPD' },
  Necklace: { stat: 'SPD', label: 'SPD', value: 15, perLvl: 1, isPercent: false },
  Ring: { stat: 'HP %', label: 'HP %', value: 300, perLvl: 75, isPercent: true },
};

function getSlotRecs(buildType) {
  const mainStats = buildType === 'dps' ? DPS_MAIN_STATS : TANK_MAIN_STATS;
  const setKey = BUILD_TYPES[buildType].setKey;
  const t2Items = STAR_SAVIOR_GEAR.filter(g => g.set === BUILD_TYPES[buildType].set && g.tier === 2 && g.grade === 'Legendary');
  const recs = {};
  SLOT_ORDER.forEach(slot => {
    const item = t2Items.find(g => g.type === slot);
    const recommended = mainStats[slot] || { stat: '', label: '' };
    const isRecommended = recommended.stat && recommended.stat !== (item?.mainStat || '');
    const maxLvl = item?.maxEnchantLevel || 15;
    let mainStatValue = 0;
    let enchantPerStat = 0;
    let isPercent = false;
    if (isRecommended && recommended.value !== undefined) {
      mainStatValue = recommended.value;
      enchantPerStat = recommended.perLvl;
      isPercent = recommended.isPercent || false;
    } else if (item) {
      mainStatValue = item.mainStatValue || 0;
      enchantPerStat = item.enchantPerStat || 0;
      isPercent = item.mainStatDisplay?.includes('%') || false;
    }
    recs[slot] = {
      itemName: item?.name || slot,
      icon: item?.icon || '',
      mainStat: recommended.stat || item?.mainStat || '',
      mainStatLabel: recommended.label || item?.mainStat || '',
      mainStatValue,
      enchantPerStat,
      maxEnchantLevel: maxLvl,
      isPercent,
    };
  });
  return recs;
}

export const ARCANA_BUILDS = {
  rosaria: {
    main: [
      'rosaria-the-end-wears-the-face-of-a-girl',
      'lacy-no-pain-no-gain',
      'lyn-under-the-glass-moon-over-the-pavilion',
      'naru-dreams-under-the-stars',
      'claire-the-perfect-bunny-girl',
    ],
    alternatives: [
      'asherah-young-lady-of-stranis',
      'charlotte-a-knight-s-oath',
      'frey-the-indomitable-masterpiece',
      'muriel-divine-judgement',
      'petra-made-by-petra',
    ],
  },
};

function resolveArcana(slugs) {
  return slugs
    .map(slug => STAR_SAVIOR_ARCANA.find(a => a.slug === slug))
    .filter(Boolean);
}

export const CHARACTER_BUILDS = STAR_SAVIOR_CHARACTERS.map(char => {
  const buildType = TANK_ROLES.includes(char.role) ? 'tank' : 'dps';
  const build = BUILD_TYPES[buildType];
  const arcanaBuild = ARCANA_BUILDS[char.slug];
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
    arcana: arcanaBuild ? {
      main: resolveArcana(arcanaBuild.main),
      alternatives: resolveArcana(arcanaBuild.alternatives),
    } : null,
  };
});
