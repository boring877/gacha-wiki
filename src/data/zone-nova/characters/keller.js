// Keller - Zone Nova Character Data
// SSR Warrior from Monochrome Nation faction with Ice element
// Normal attack focused DPS with Ice Giant transformation

export const kellerData = {
  name: 'Keller',
  image: 'Keller.png',
  rarity: 'SSR',
  element: 'Ice',
  class: 'Warrior',
  role: 'DPS',
  faction: 'Monochrome Nation',

  stats: {
    hp: '9,570',
    attack: '803',
    defense: '690',
    energyRecovery: '0.25/s',
    critRate: '10.8%',
    critDmg: '62%',
  },

  skills: {
    normal: {
      name: 'Ice Mang',
      cooldown: '2.0s',
      description:
        'Deals ice damage equal to 89.4% ATK to all enemy units.',
    },
    auto: {
      name: 'Glacier Dance',
      cooldown: '5.0s',
      description:
        'Grants [Dance of the Glacier] buff. Normal attack damage +29.3%, normal attack cooldown -11.5%. Stacks up to 5 times, lasts 8 seconds. At 5 stacks, normal attacks additionally deal ice damage equal to 11.5% ATK (treated as normal attack damage).',
    },
    ultimate: {
      name: 'Ice Age',
      energyCost: '4',
      cooldown: '5.0s',
      description:
        'Deals ice damage equal to 1710.1% ATK to all enemies and increases their skill cooldown by 40% for 8 seconds. Enters the [Ice Giant] state for 8 seconds: MaxHP +72.9%, ATK +171.5%, DEF +344.3%, resistance to all attributes +58.6%. While in [Ice Giant], normal attacks deal additional ice damage equal to 50.8% ATK (treated as normal attack damage).',
    },
    passive: {
      name: 'Winter Blade',
      description:
        'Each normal attack hit applies [Frostfang] (up to 15 stacks): enemy shield gain -6.9%, healing received -4.6%. Each normal attack hit also applies [Shatter] (up to 10 stacks, 10 seconds): enemy DEF -9.2% per stack.',
    },
  },

  teamSkill: {
    name: 'Combo Skill',
    description:
      'Own ATK +20%, Crit Rate +10%. At battle start, every 500 ATK increases team Crit Damage by 7.5% (up to 8 times). Every 15% Crit Rate increases own Crit Damage by 12% (up to 5 times).',
    requirements: {
      faction: 'Monochrome Nation',
      element: 'Ice',
      alternativeConditions: 'Team contains 2 Monochrome Nation characters or 2 Ice characters',
    },
  },

  awakenings: [
    {
      level: 1,
      effect:
        'Crit Rate +15%. First ULT on entering the arena costs no energy. Gain 1 stack of [Ice Power] after using a skill (normal attack damage +12.5%, up to 5 stacks).',
    },
    {
      level: 2,
      effect:
        'On entering the arena, immediately gain 3 stacks of [Dance of the Glacier] and Crit Damage +30%. At 5 stacks, basic attack damage +50%.',
    },
    {
      level: 3,
      effect: '[Normal Attack], [Skill], [ULT] and [Passive] level cap +2.',
    },
    {
      level: 4,
      effect:
        'Ice damage +50%. When HP drops to 35% or below, instantly restore 75% max HP. Can trigger once per battle.',
    },
    {
      level: 5,
      effect: '[Normal Attack], [Skill], [ULT] and [Passive] level cap +2.',
    },
    {
      level: 6,
      effect: 'All damage penetrates 20% of ice resistance.',
    },
  ],

  memoryCard: {
    name: 'Afternoon Tantrums',
    image: 'Kellercard.png',
    stats: {
      hp: '6,600',
      attack: '480',
      defense: '690',
    },
    effects: [
      'ATK +70%',
      'Crit Damage +90%',
      'Normal attack damage +100%',
      'Every 3rd normal attack deals additional 75% ATK as normal attack damage',
    ],
    restriction: 'Only effective for Warrior class',
  },

  tags: [
    'Normal Attack',
    'Crit Rate',
    'Crit Damage',
    'Ice Damage',
    'Transformation',
    'AOE',
    'DEF Shred',
    'Anti-Heal',
    'Anti-Shield',
  ],
};

export const kellerSEO = {
  title: `${kellerData.name} - Zone Nova Character Guide | GachaWiki`,
  description: `Complete guide for ${kellerData.name}, a ${kellerData.rarity} ${kellerData.element} ${kellerData.class} in Zone Nova. Includes Ice Age ultimate, Glacier Dance skill, Winter Blade passive, awakenings, Afternoon Tantrums memory card, and optimal build strategies.`,
};

export default kellerData;
