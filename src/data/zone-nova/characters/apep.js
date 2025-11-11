// Apep - Zone Nova Character Data
// Warrior/Tank character from Wind element

export const apepData = {
  // Basic Character Information
  name: 'Apep',
  image: 'Apep',
  rarity: 'SSR',
  element: 'Wind',
  class: 'Warrior', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Chemic',

  // Base Stats (Level 80)
  stats: {
    hp: '10,520',
    attack: '696',
    defense: '1,315',
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDamage: '50%',
  },

  // Character Skills
  skills: {
    normal: {
      name: 'Gang Wind Strike',
      cooldown: '2.0s',
      description: 'Deals wind damage equal to 120% of defense to designated enemy single unit.',
    },
    auto: {
      name: 'Wind Gang Wall',
      cooldown: '5.0s',
      description: 'Grants self a shield equal to 120% of defense.',
    },
    ultimate: {
      name: 'Wind Blessing',
      energyCost: '2',
      cooldown: '1.0s',
      description:
        'When HP is below 50%, deals wind damage equal to 120% of defense to the front square target and recovers health equal to 120% of own defense. When HP is above 50%, can enhance the skill to deal wind damage equal to 120% of defense to all targets in a 3×3 area around the front square target, and deals wind damage equal to 240% of defense.',
    },
    passive: {
      name: 'Wind Wisdom',
      description:
        'Before entering battle, every 1000 defense can increase max HP cap by 4000, max increase 20000 HP cap. When Shielded by the skill Wind Gang Wall, damage taken reduced by 24%, damage dealt increased by 48%.',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Wind Chemic Alliance',
    description:
      'Own defense increased by 15%. At the start of battle, every 500 defense can reduce damage taken by 1.5%, stacking up to 6 times.',
    requirements: {
      faction: 'Chemic',
      element: 'Wind',
      alternativeConditions: 'Team contains 2 Chemic characters or 2 Wind characters',
    },
  },

  // Awakening Effects
  awakenings: [
    {
      level: 1,
      effect:
        'Each time normal attack deals damage, increases defense by 5%, lasting 10 seconds, stacking up to 30%.',
    },
    {
      level: 2,
      effect:
        'Casting enhanced ultimate skill also has recovery effect, recovery amount equal to the ultimate skill.',
    },
    {
      level: 3,
      effect: '[Basic Attack], [Skill], [Ultimate Skill], and [Passive] levels and level cap +2.',
    },
    {
      level: 4,
      effect: 'Defense increased by 45%.',
    },
    {
      level: 5,
      effect: '[Basic Attack], [Skill], [Ultimate Skill], and [Passive] levels and level cap +2.',
    },
    {
      level: 6,
      effect:
        'All resistance increased by 10%, wind resistance additionally increased by 10%. All damage dealt penetrates 10% wind resistance.',
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Wrong Appearance Timing',
    image: 'Apepcard',
    stats: {
      hp: '8,800',
      attack: '480',
      defense: '690',
    },
    effects: [
      'Defense increased by 64%',
      'When HP is above 50%, after the wearer attacks, recover 2% max HP',
      'When HP is above 50%, damage taken reduced by 10%, damage dealt increased by 40%',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'Defense Scale',
    'Shield',
    'Tank',
    'Self Healing',
    'Wind Damage',
    'HP Scaling',
    'Conditional Enhancement',
  ],
};

// SEO and Metadata
export const apepSEO = {
  title: '【Warrior】Apep - Zone Nova Character Guide | GachaWiki',
  description:
    'Complete guide for 【Warrior】Apep in Zone Nova. Learn about his wind-based tank abilities, Wind Gang Wall shield, conditional healing, awakening effects, and optimal build strategies for this powerful Chemic faction defender.',
};
