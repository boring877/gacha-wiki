// Zone Nova Trials data — generated 2026-09-06 from live master data
// (tower_info + tower_setting_info + translations). Faction ids:
// 1=Safir 2=Kemich 3=Avalon 4=Otis 5=Asa 6=Heikyo Castle 7=Monochrome Realm 8=Bikta

export const FACTIONS = {
  1: 'Safir',
  2: 'Kemich',
  3: 'Avalon',
  4: 'Otis',
  5: 'Asa',
  6: 'Heikyo Castle',
  7: 'Monochrome Realm',
  8: 'Bikta',
};

const factionsOf = ids => ids.map(i => FACTIONS[i]).join(', ');

// Permanent towers (type 0): 114 stages each
export const PERMANENT_TRIALS = [
  {
    id: 10,
    name: 'Trial of Freedom',
    factionLimit: null,
    factionLimitLabel: 'No faction restriction',
    stages: 114,
  },
  {
    id: 11,
    name: 'Trial of Temperance',
    factionLimit: [1, 5],
    factionLimitLabel: factionsOf([1, 5]),
    stages: 114,
  },
  {
    id: 12,
    name: 'Trial of Tolerance',
    factionLimit: [2, 6],
    factionLimitLabel: factionsOf([2, 6]),
    stages: 114,
  },
  {
    id: 13,
    name: 'Trial of Humility',
    factionLimit: [3, 7],
    factionLimitLabel: factionsOf([3, 7]),
    stages: 114,
  },
  {
    id: 14,
    name: 'Trial of Diligence',
    factionLimit: [4, 8],
    factionLimitLabel: factionsOf([4, 8]),
    stages: 114,
  },
];

// Trial of Bravery (type 1): rotating 14-day seasons, 10 stages, 4 factions each
export const BRAVERY_SEASONS = [
  {
    id: 15,
    start: '2026-04-14',
    end: '2026-04-28',
    factions: factionsOf([1, 4, 6, 7]),
    factionsRaw: [1, 4, 6, 7],
    rule: 'The enemy\u2019s defenses have increased significantly.',
  },
  {
    id: 16,
    start: '2026-04-28',
    end: '2026-05-12',
    factions: factionsOf([5, 6, 7, 8]),
    factionsRaw: [5, 6, 7, 8],
    rule: '',
  },
  {
    id: 17,
    start: '2026-05-12',
    end: '2026-05-26',
    factions: factionsOf([4, 5, 7, 8]),
    factionsRaw: [4, 5, 7, 8],
    rule: 'Our Frost Damage and Normal Attack Damage are increased by 30%. When the TANK character uses an ultimate skill, all allies take 40% less damage, the unit with the lowest defense gains 50% more defense, the unit with the lowest maximum health gains 50% more maximum health, and all enemies deal 20% less damage, lasting 10 seconds.',
  },
  {
    id: 18,
    start: '2026-05-26',
    end: '2026-06-09',
    factions: factionsOf([1, 5, 7, 8]),
    factionsRaw: [1, 5, 7, 8],
    rule: 'When the Disruptor deals damage using an ultimate skill, all of the target\u2019s attribute resistances are reduced by 20% and defense is reduced by 30% for 10 seconds. For each debuff on the enemy, damage taken is increased by 5% and damage dealt is reduced by 5%, counting up to a maximum of 5. When using an ultimate skill to apply a shield, the target receiving the shield deals 10% less damage for 10 seconds, stacking up to 5 times.',
  },
  {
    id: 19,
    start: '2026-06-09',
    end: '2026-06-23',
    factions: factionsOf([1, 3, 5, 8]),
    factionsRaw: [1, 3, 5, 8],
    rule: 'Enemies gain +30% Crit Rate. Allies gain +50% ATK and Crit Damage. When an ally is attacked, they gain 1 stack of [Weakness] (2 stacks if Crit). Each stack reduces their damage dealt by 2.5% for 3 seconds, up to 20 stacks. When dealing Normal Attack or Skill damage, the ally gains +1% Penetration for 5 seconds, stacking up to 50 times.',
  },
  {
    id: 20,
    start: '2026-06-23',
    end: '2026-07-07',
    factions: factionsOf([1, 2, 6, 7]),
    factionsRaw: [1, 2, 6, 7],
    rule: 'Each time an ultimate skill is used, the user\u2019s Ultimate Skill Damage is increased by 25% for 3 seconds, stacking up to 3 times.',
  },
  {
    id: 21,
    start: '2026-07-07',
    end: '2026-07-21',
    factions: factionsOf([2, 4, 5, 7]),
    factionsRaw: [2, 4, 5, 7],
    rule: 'The character in position 1 deals and receives 50% less damage. The enemy is immune to ultimate skill damage once every 3 seconds.',
  },
  {
    id: 22,
    start: '2026-07-21',
    end: '2026-08-04',
    factions: factionsOf([1, 2, 3, 7]),
    factionsRaw: [1, 2, 3, 7],
    rule: 'The enemy\u2019s resistance to all attributes is increased by 80%. After our side deals damage of any attribute, the target\u2019s corresponding attribute resistance is reduced by 0.3%. DISRUPTORs further reduce the target\u2019s resistance to all attributes by 0.9% after dealing damage. The effects can stack up to a maximum of 90%.',
  },
  {
    id: 23,
    start: '2026-08-04',
    end: '2026-08-18',
    factions: factionsOf([1, 3, 7, 8]),
    factionsRaw: [1, 3, 7, 8],
    rule: 'After any unit attacks, there is a 20% chance that a lightning strike will be triggered at the target\u2019s current location after a short delay, dealing 15,000 base damage to units within a small area.',
  },
  {
    id: 24,
    start: '2026-08-18',
    end: '2026-09-01',
    factions: factionsOf([1, 2, 3, 4]),
    factionsRaw: [1, 2, 3, 4],
    rule: 'When the TANK is attacked, it reflects damage equal to 10% of its max HP back to the attacker.',
  },
  {
    id: 25,
    start: '2026-09-02',
    end: '2026-09-15',
    factions: factionsOf([1, 3, 4, 8]),
    factionsRaw: [1, 3, 4, 8],
    rule: 'Healing effects dealt by all allies are reduced by 125%, and shield effects received are reduced by 125%. While receiving healing, damage dealt is increased by 50% and penetration rate is increased by 50% for 5 seconds. While receiving a shield, damage taken is reduced by 50% and resistance penetration is increased by 50% for 5 seconds.',
  },
];

// Current season stages (tower_setting_info): 180s time limit each
// Stages from tower_setting_info (time limit per stage verified; reward packs
// in the data don't map cleanly to what the game shows, so rewards are omitted)
export const BRAVERY_STAGES = [
  { stage: 1 },
  { stage: 2 },
  { stage: 3 },
  { stage: 4 },
  { stage: 5 },
  { stage: 6 },
  { stage: 7 },
  { stage: 8 },
  { stage: 9 },
  { stage: 10 },
];
export function getActiveBraverySeason(dateStr) {
  const now = dateStr || new Date().toISOString().slice(0, 10);
  return BRAVERY_SEASONS.find(s => now >= s.start && now <= s.end) || null;
}

export function getBraverySeasonStatus(season, dateStr) {
  const now = dateStr || new Date().toISOString().slice(0, 10);
  if (now >= season.start && now <= season.end) return 'active';
  if (now > season.end) return 'ended';
  return 'upcoming';
}
