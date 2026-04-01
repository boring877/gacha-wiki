// Star Savior Character Build Recommendations
// DPS build: Motivator set, ATK% + HP% substats, CRIT Rate/DMG optional
// Tank/Support build: Perses set (HP bonuses), HP% + Effect RES substats

export const BUILD_TYPES = {
  dps: {
    name: 'DPS Build',
    description: 'Maximize damage output with ATK and CRIT bonuses.',
    emoji: '⚔️',
    set: 'Motivator',
    setBonuses: ['Attack Set (4p): ATK % +20%', 'Insight Set (4p): CRIT Rate +30%', 'Valor Set (2p): ATK % +5%, Evasion +5%', 'Precision Set (4p): CRIT Rate +15%, Effect Hit +20%'],
    substatPriority: ['ATK %', 'HP %', 'SPD', 'CRIT Rate', 'CRIT Damage'],
  },
  tank: {
    name: 'Tank / Support Build',
    description: 'Maximize survivability with HP and resistances.',
    emoji: '🛡️',
    set: 'Perses',
    setBonuses: ['Health Set (4p): HP % +30%', 'Destruction Set (4p): CRIT Damage +40%', 'Barrier Set (2p): HP % +10%, Evasion +5%', 'Annihilation Set (4p): CRIT Damage +20%, Effect Hit +20%'],
    substatPriority: ['HP %', 'Effect RES', 'SPD', 'ATK %', 'CRIT Rate'],
  },
};

const STAT_DISPLAY = {
  ATK: 'ATK', DEF: 'DEF', 'Flat HP': 'HP', SPD: 'SPD',
  'ATK %': 'ATK %', 'DEF %': 'DEF %', 'HP %': 'HP %',
  'CRIT Rate': 'CRIT Rate', 'CRIT Damage': 'CRIT DMG', 'Effect Hit': 'Effect Hit', 'Effect RES': 'Effect RES',
};

const SLOT_ORDER = ['Weapon', 'Gloves', 'Armor', 'Boots', 'Necklace', 'Ring'];

const SLOT_MAIN_STATS = {
  Weapon: 'ATK',
  Gloves: 'Flat HP',
  Armor: 'DEF',
  Boots: 'SPD',
};

const GRADE_ORDER = { Uncommon: 0, Rare: 1, Unique: 2, Legendary: 3 };

export function getBuildRecs() {
  return BUILD_TYPES;
}

export function getBuildForClass(classSynergy, statTag) {
  const dpsClasses = ['Assassin', 'Caster', 'Ranger'];
  const tankClasses = ['Defender', 'Savior', 'Supporter'];
  const dpsStats = ['Power', 'Focus'];
  const tankStats = ['Health', 'Endurance', 'Protect'];

  if (dpsClasses.includes(classSynergy) || dpsStats.includes(statTag)) return 'dps';
  if (tankClasses.includes(classSynergy) || tankStats.includes(statTag)) return 'tank';
  return 'dps';
}

export function getEquipRecommendation(buildType) {
  const build = BUILD_TYPES[buildType];
  const recs = {};

  SLOT_ORDER.forEach(slot => {
    if (SLOT_MAIN_STATS[slot]) {
      recs[slot] = {
        mainStat: SLOT_MAIN_STATS[slot],
        note: slot === 'Armor' ? 'Fixed stat (less important)' : null,
      };
    }
  });

  if (buildType === 'dps') {
    recs['Necklace'] = { mainStat: 'CRIT Damage', note: 'Or Flat HP for higher tiers' };
    recs['Ring'] = { mainStat: 'Flat HP', note: 'Only practical option' };
  } else {
    recs['Necklace'] = { mainStat: 'Flat HP', note: 'Best for survivability' };
    recs['Ring'] = { mainStat: 'Flat HP', note: 'Or Effect Hit on Legendary' };
  }

  return recs;
}

export { STAT_DISPLAY, SLOT_ORDER, GRADE_ORDER, BUILD_TYPES };
