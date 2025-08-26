// Greed Mammon Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const greedMammonData = {
  // Basic Character Information
  name: 'Greed Mammon',
  image: 'GreedMammon', // Character image identifier
  rarity: 'SR',
  element: 'Chaos',
  class: 'Mage', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Bicta Tower',

  // Base Stats (Level 80)
  stats: {
    hp: '6,694',
    attack: '1,088',
    defense: '442',
  },

  // Skills
  skills: {
    normal: {
      name: 'The More You Hit, The Richer',
      description: 'Deals chaos damage equal to 120% of Attack to designated enemy unit',
    },
    auto: {
      name: 'Golden Curse',
      cooldown: '5.0s',
      description: 'Deal 96% attack power chaos damage to surrounding area within 3 meters of self',
    },
    ultimate: {
      name: 'Seven Deadly Sins: Greed',
      energyCost: '5',
      description:
        'Deals chaos damage equal to 180% of Attack to designated enemy unit. [Enhanced Ultimate] Version: Deals chaos damage equal to 240% of Attack to enemies within a 4-meter radius around self. [Buffer] After an ally uses ultimate skill, can activate [Enhanced Ultimate] once within 5 seconds',
    },
    passive: {
      name: 'Passive Tax Burden',
      description: 'After casting enhanced ultimate skill, damage increases by 29%',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combo Skill',
    description: 'Own damage dealt increases by 20%',
    requirements: {
      faction: 'Bicta Tower',
      element: 'Chaos',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: 'When you have buff effects: Ultimate critical damage increases by 20%',
    },
    {
      level: 2,
      effect: 'After casting ultimate skill, damage taken decreases by 10% for 10 seconds',
    },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4' },
    { level: 4, effect: 'Ultimate skill damage increases by 20%' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    {
      level: 6,
      effect:
        'After successfully casting enhanced ultimate skill, additionally gain 1 energy point',
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Method of Revenge',
    image: 'Greed-Mammon-card',
    stats: {
      hp: '4,200',
      attack: '650',
      defense: '395',
    },
    effects: [
      'When a Buffer character uses their ultimate, own ultimate damage increases by 60% for 10 seconds',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Melee', 'AOE', 'Enhanced Ultimate', 'Crit Dmg', 'Energy', 'Damage Reduction'],
};

// SEO data for Greed Mammon
export const greedMammonSEO = {
  title: `${greedMammonData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${greedMammonData.name}, a ${greedMammonData.rarity} ${greedMammonData.element} ${greedMammonData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default greedMammonData;
