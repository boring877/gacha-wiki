// Ibaraki-doji - Zone Nova Character Data
// Fire Debuffer character from Pingjing City faction

export const ibarakiDojiData = {
  // Basic Character Information
  name: 'Ibaraki-doji',
  image: 'Ibaraki-doji',
  rarity: 'SSR',
  element: 'Fire',
  class: 'Debuffer', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'Debuffer', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Pingjing City',

  // Base Stats (Level 80)
  stats: {
    hp: '9,180',
    attack: '1,184',
    defense: '729',
    energyRecovery: '0.25/s',
    critRate: 0,
    critDamage: 50,
  },

  // Character Skills
  skills: {
    normal: {
      name: 'Flame Arrow',
      level: '10+4',
      cooldown: '2.0s',
      description: 'Deals 120% of attack power as fiery damage to the designated enemy unit.',
    },
    auto: {
      name: 'Arrow of the Curse',
      level: '10+4',
      cooldown: '5.0s',
      description:
        'Deals fire damage equal to 244.3% of attack power to the target and a 4-meter radius, and applies 1 stack of [Curse Covenant], reducing energy gain efficiency by 35.8% and increasing damage taken by 38.6% for 10 seconds.',
    },
    ultimate: {
      name: 'Fire Phoenix Curse',
      level: '10+4',
      energyCost: '3',
      cooldown: '1.0s',
      description:
        'Unleashes a Fire Phoenix in the direction of the enemy target, dealing 360% fire damage to all enemies in its path. Enemies hit by the damage will be inflicted with 1 stack of [Flame Curse], increasing their damage taken from ultimate skills by 87.9% for 10 seconds. This damage can [Interrupt] any skill being cast by the target.',
    },
    passive: {
      name: 'Deboning',
      level: '10+4',
      description:
        'All attacks inflict [Eviscerate] upon damaging enemies, increasing damage taken from ultimate skills by 3.6%, up to 10 stacks, lasting 5 seconds.',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combo Skill',
    level: '1',
    description:
      'After battle starts, reduces total damage dealt by all enemy units by 2.5%. For every 1000 Attack Power, the effect increases by 100%, up to a maximum of 300%.',
    requirements: {
      faction: 'Heikyo Castle',
      element: 'Fire',
      alternativeRequirement: '2 [Heikyo Castle] characters or 2 [Fire] characters',
    },
  },

  // Awakening Effects
  awakenings: [
    {
      level: 1,
      effect: 'At the start of battle, the first use of a Ultimate Skill does not consume energy.',
    },
    {
      level: 2,
      effect:
        "When your ultimate skill hits an enemy, it inflicts [Flame Pressure], reducing the enemy's attack power by 35% for 3 seconds.",
    },
    {
      level: 3,
      effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
    },
    {
      level: 4,
      effect: 'Attack power increased by 30%.',
    },
    {
      level: 5,
      effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
    },
    {
      level: 6,
      effect:
        'Targets affected by ultimate skills have their all resistances reduced by an additional 20% for 5 sec.',
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'A Perfect Makeup Look?',
    image: 'Ibaraki-dojicard',
    stats: {
      hp: '6,000',
      attack: '600',
      defense: '600',
    },
    effects: [
      'Attack power increased by 40%',
      'When a Ultimate Skill deals damage, the target takes 36% more damage and receives 40% less healing for 5 seconds',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'Debuff',
    'Ranged',
    'Fire Damage',
    'Ultimate Damage Amp',
    'Energy Drain',
    'Resistance Reduction',
    'Attack Reduction',
    'Interrupt',
    'AoE',
  ],

  // Damage Taken Debuff Analysis
  damageAnalysis: {
    title: 'Total Damage Taken Debuffs',
    description:
      'Ibaraki-doji has alot of damage taken debuffs, however she need alot of investment to be effective. like full dupe and memory, and the damage difference between her and Buffer is like 60% to 80% at best.',
    breakdown: [
      {
        source: 'Skill: Arrow of the Curse',
        value: '+38.6%',
        type: 'All damage taken',
        duration: '10s',
      },
      {
        source: 'ULT: Fire Phoenix Curse',
        value: '+87.9%',
        type: 'Ultimate damage taken',
        duration: '10s',
      },
      {
        source: 'Passive: Deboning (max 10 stacks)',
        value: '+36% (3.6% x 10)',
        type: 'Ultimate damage taken',
        duration: '5s',
      },
      {
        source: 'Memory: A Perfect Makeup Look?',
        value: '+36%',
        type: 'All damage taken (on ULT hit)',
        duration: '5s',
      },
      {
        source: 'Awakening 6',
        value: '-20% All Resistances',
        type: 'Multiplicative damage increase',
        duration: '5s',
      },
    ],
    totals: [
      {
        label: 'Ultimate Skill Damage Taken',
        value: '+198.5%',
        calculation: '38.6% + 87.9% + 36% + 36%',
        note: 'Nearly triples damage from teammate ultimates',
      },
      {
        label: 'All Damage Taken',
        value: '+74.6%',
        calculation: '38.6% + 36%',
        note: 'Inculdes DOT Damage too',
      },
    ],
  },
};

// SEO data for Ibaraki-doji
export const ibarakiDojiSEO = {
  title: 'Ibaraki-doji - Zone Nova Character Guide | GachaWiki',
  description:
    'Complete guide for Ibaraki-doji in Zone Nova. Learn about her fire debuffer abilities, curse mechanics, ultimate damage amplification, and optimal build strategies for this powerful Heikyo Castle ranged archer.',
};

// Export default for easy importing
export default ibarakiDojiData;
