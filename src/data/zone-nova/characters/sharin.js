// Sharin - Zone Nova Character Data
// Fire Buffer character from Monochrome Nation faction

export const sharinData = {
  name: 'Sharin',
  image: 'Sharin.png',
  rarity: 'SSR',
  element: 'Fire',
  class: 'Buffer',
  role: 'Buffer',
  faction: 'Monochrome Nation',

  stats: {
    hp: '9,180',
    attack: '1,004',
    defense: '729',
    critRate: 0,
  },

  skills: {
    normal: {
      name: 'Fire Dance',
      description:
        'Fires a Fire beam at the enemy, dealing Fire damage equal to 120% attack power to the designated enemy unit.',
      cooldown: '2.0s',
    },
    auto: {
      name: 'Brilliant',
      cooldown: '7.0s',
      description:
        'The allied unit with the highest attack power gains [Invigorate], increasing attack power by 60.1% for 10 seconds, up to 4 stacks. The allied unit with the highest defense power gains [Fortify], increasing defense by 48.6% for 10 seconds, up to 4 stacks.',
    },
    ultimate: {
      name: 'Monthly Agreement',
      energyCost: '3',
      cooldown: '1.0s',
      description:
        'The ally with the highest attack power gains [Extreme Battle Spirit], increasing attack power by 170.1% and critical hit damage by 85.1%, lasting 10 seconds. The ally with the highest defense power gains [Guardian Heart], increasing defense by 145.8% and maximum health by 84.4%, lasting 10 seconds.',
    },
    passive: {
      name: 'Qi',
      description:
        'At the start of battle, all allies gain 1 stack of [Qi] every 5 seconds. Each stack of [Qi] provides: Healing received +11.5%, Shield received +11.5%, Damage dealt +11.5%, Energy recovery efficiency +3.3%. Maximum 10 stacks.',
    },
  },

  teamSkill: {
    name: 'Combo Skill',
    description:
      'At the start of battle, the entire team damage is increased by 20%. For every 500 attack power, the entire team attack power and defense increase by 5%, up to a maximum of 8 times.',
    requirements: {
      faction: 'Monochrome Nation',
      element: 'Fire',
      alternativeRequirement: '2 [Monochrome Nation] characters or 2 [Fire] characters',
    },
  },

  awakenings: [
    {
      level: 1,
      effect:
        '[Extreme Battle Spirit] and [Guardian Heart] now target two friendly units instead of one. The first ultimate skill used after entering the battlefield no longer consumes energy.',
    },
    {
      level: 2,
      effect:
        '[Invigorate] and [Fortify] max stack increased to 6. Upon entering the battlefield, all allies immediately gain 5 stacks of [Qi].',
    },
    { level: 3, effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.' },
    {
      level: 4,
      effect:
        'When using the ultimate skill, all allies gain [Hold the Line], increasing defense by 80% and maximum HP by 25% for 10 seconds.',
    },
    { level: 5, effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.' },
    {
      level: 6,
      effect:
        'Entire party gains 20% increased all resistances. The duration of [Hold the Line] is extended to indefinitely when using the ultimate skill.',
    },
  ],

  memoryCard: {
    name: 'Bath Time',
    image: 'Sharincard',
    stats: {
      hp: '6,000',
      attack: '600',
      defense: '600',
    },
    effects: [
      'Increases the attack and defense of all allies by 32%',
      'Each time the wearer uses a skill, the maximum HP of all allies increases by 6% (up to 10 stacks)',
    ],
  },

  tags: ['Ranged', 'Buff', 'Attack Boost', 'Defense Boost', 'HP Boost', 'Energy', 'Team Buff'],
};

export const sharinSEO = {
  title: `${sharinData.name} - Zone Nova Character Guide | GachaWiki`,
  description: `Complete guide for ${sharinData.name} in Zone Nova. Learn about her fire support abilities, team buffing capabilities, Qi stacking mechanics, and optimal build strategies for this powerful Monochrome Nation buffer.`,
};

export default sharinData;
