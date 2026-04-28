// Jill Character Data - Zone Nova
// Character ID: 4032

export const jillData = {
  name: 'Jill',
  image: 'Jill.png',
  rarity: 'SSR',
  element: 'Holy',
  class: 'Healer',
  role: 'Healer',
  faction: 'Monochrome Nation',

  stats: {
    hp: '6,480',
    attack: '1,264',
    defense: '600',
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDamage: '50%',
  },

  skills: {
    normal: {
      name: 'Morning Drill',
      level: '14',
      cooldown: '2.0s',
      description:
        'Deals Holy DMG equal to 120% ATK to the target enemy.',
    },
    auto: {
      name: 'Bliss Brand',
      level: '14',
      cooldown: '5.0s',
      description:
        'All allies gain [Bliss Brand] for 3s. After a unit with [Bliss Brand] is attacked, it recovers HP equal to Jill\'s ATK 17.8% + 293 (up to 10 times).',
    },
    ultimate: {
      name: 'All-Out Assault',
      level: '14',
      cooldown: '6.0s',
      energyCost: '6',
      description:
        'All allies gain [Bloodthirsty Sanction], and the nearest enemy gains 20 stacks of [Surrounded] (stack count resets on cast) for 10s.\n\n[Bloodthirsty Sanction]: After attacking an enemy, recover HP equal to Jill\'s ATK 30.3% + 511 (up to 20 times); ATK increases by 16.8%.\n\n[Surrounded]: Loses 1 stack each time it is attacked. When all stacks are lost, all allies recover HP equal to Jill\'s ATK 104% + 243.',
    },
    passive: {
      name: 'Commander\'s Gaze',
      level: '14',
      description:
        "After an ally is attacked, marks that ally's position for 1s. Triggers based on mark count:\n\n2+ marks: All allies recover HP = ATK 13.5% + 89 (once per 1s)\n\n3+ marks: All allies recover HP = ATK 36.2% + 142; all allies' Chaos RES +20% for 2s (once per 1s)\n\n4+ marks: All allies recover HP = ATK 99.4% + 405; all allies gain [Tenacity] for 1s (once per 1s)\n\n[Tenacity]: While active, the unit cannot die and survives with 1 HP.",
    },
  },

  teamSkill: {
    name: 'Combination Skill',
    level: '1',
    description:
      'ATK +13%. At the start of battle, for every 500 ATK, own healing +9.5% (up to 6x)',
    requirements: {
      faction: 'Monochrome Nation',
      element: 'Holy',
      condition: '2 [Monochrome Realm] or 2 [Holy] characters',
    },
  },

  awakenings: [
    {
      level: 1,
      effect: 'At battle start, all allies gain [Tenacity] for 9s.',
    },
    {
      level: 2,
      effect:
        "Each time [Surrounded] loses 1 stack, all allies recover HP = 5% Jill's ATK. [Bliss Brand] duration extended to 5s.",
    },
    {
      level: 3,
      effect: '[Basic Attack], [Skill], [Ultimate] and [Passive] level and level cap +2',
    },
    {
      level: 4,
      effect:
        "ATK +45%. When all allies receive healing, healing amount additionally +20%.",
    },
    {
      level: 5,
      effect: '[Basic Attack], [Skill], [Ultimate] and [Passive] level and level cap +2',
    },
    {
      level: 6,
      effect:
        'First 3 Ultimate casts additionally grant all allies [Tenacity] for 6s.',
    },
  ],

  memoryCard: {
    name: 'Gentle Morning Command',
    image: 'Jillcard',
    level: '80/80',
    rarity: '6-star (SSR)',
    class: 'Healer',
    stats: {
      hp: '6,000',
      attack: '600',
      defense: '600',
    },
    effects: [
      'ATK +33.5%',
      'After an ally is healed, wearer gains [Military Order] (up to 50 stacks) for 6s.',
      'Every 10 stacks of [Military Order]: all allies\' healing received +16.5%, damage taken -3.3%.',
      'When the wearer casts Ultimate: consumes all [Military Order]. Every 10 stacks increases all allies\' ATK by 5% for 6s.',
    ],
  },

  tags: ['Healing', 'Tenacity', 'Team Buff', 'ATK Buff', 'Ranged', 'Holy'],
};

export const jillSEO = {
  title: `${jillData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${jillData.name}, a ${jillData.rarity} ${jillData.element} ${jillData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

export const jill = {
  id: 'jill',
  name: 'Jill',
  rarity: 'SSR',
  element: 'Holy',
  role: 'Healer',
  class: 'Healer',
  faction: 'Monochrome Nation',
  maxLevel: 80,

  baseStats: {
    hp: 6480,
    attack: 1264,
    defense: 600,
    energyRecovery: 0.25,
    critRate: 0,
    critDamage: 50,
  },

  images: {
    portrait: '/images/games/zone-nova/characters/Jill.png',
    card: '/images/games/zone-nova/memories/Jillcard.jpg',
  },

  tags: [
    'Healer',
    'Holy',
    'Monochrome Nation',
    'Healing',
    'Tenacity',
    'Team Buff',
    'ATK Buff',
    'Ranged',
  ],
};

export default jillData;
