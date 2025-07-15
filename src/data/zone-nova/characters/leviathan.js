// Leviathan Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const leviathanData = {
  // Basic Character Information
  name: 'Leviathan',
  image: 'Leviathan', // Character image identifier
  rarity: 'SR',
  element: 'Wind',
  class: 'DPS',
  faction: 'Huájiān',

  // Base Stats (Level 80)
  stats: {
    hp: '6,694',
    attack: '1,088',
    defense: '442',
  },

  // Skills
  skills: {
    normal: {
      name: "Leviathan's Kiss (利维坦之吻)",
      description: 'Deals 120% of Attack as wind damage to designated enemy unit',
    },
    auto: {
      name: 'Abyss Roar (深渊之咆哮)',
      cooldown: '5.0s',
      description:
        'Deals wind damage equal to 120% of Attack to designated enemy unit. Gains 2 layers of [Mark]',
    },
    ultimate: {
      name: 'Seven Deadly Sins: Jiāolú (七大罪：娇炉)',
      energyCost: '5',
      description:
        'Deals wind damage equal to 600% of Attack to designated enemy unit. Immediately launches 1 pursuit attack against target. Subsequent pursuit attacks do not consume marks',
    },
    passive: {
      name: 'Grudge Deep Chain (怨恨深链)',
      description:
        'When our allies activate skills and hit enemies, consumes 1 layer of [Mark] and triggers pursuit. Pursuit deals wind damage equal to 180% of Attack. Mark System: Gain marks from Auto Skill, consume for pursuit attacks',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    description: 'Self damage increased by 20%. Enhances DPS potential for sustained damage output',
    requirements: {
      faction: 'Huájiān',
      element: 'Wind',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect:
        'Self triggers [Skills] can trigger activation effects. Improves skill synergy and combo potential',
    },
    {
      level: 2,
      effect:
        '[Pursuit] critical rate increased by 20%. Significantly boosts pursuit attack reliability',
    },
    { level: 3, effect: '[Skills] and [Normal Attack] level and level cap +4' },
    {
      level: 4,
      effect: '[Pursuit] damage increased by 20%. Major boost to her primary damage source',
    },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    {
      level: 6,
      effect:
        'When releasing [Ultimate] skills, the number of pursuit attacks triggered changes from 1 to 2. Doubles ultimate pursuit potential',
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Perverted Little Nurse (变态小护士)',
    image: 'Leviathancard', // Memory card image identifier
    stats: {
      hp: '4,200',
      attack: '650',
      defense: '395',
    },
    effects: [
      'Critical Rate Boost: After causing pursuit damage, critical rate increased by 36% for 10 seconds',
    ],
  },
};

// SEO data for Leviathan
export const leviathanSEO = {
  title: `${leviathanData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${leviathanData.name}, a ${leviathanData.rarity} ${leviathanData.element} ${leviathanData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default leviathanData;
