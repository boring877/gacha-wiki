// Greed Mammon Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const greedMammonData = {
  // Basic Character Information
  name: 'Greed Mammon',
  image: 'Greed Mammon', // Character image identifier
  rarity: 'SR',
  element: 'Chaos',
  class: 'DPS',
  faction: 'Avalon',
  
  // Base Stats (Level 80)
  stats: {
    hp: '6,694',
    attack: '1,088',
    defense: '442'
  },
  
  // Skills
  skills: {
    normal: {
      name: 'The More You Hit, The Richer',
      description: 'Deals chaos damage equal to 120% of Attack to designated enemy unit'
    },
    auto: {
      name: 'Golden Curse',
      cooldown: '5.0s',
      description: 'Deals 96% of Attack as chaos damage to enemies within a 3-meter radius around self. Automatically triggers every 5 seconds'
    },
    ultimate: {
      name: 'Seven Deadly Sins: Greed',
      energyCost: '5',
      description: 'Normal Version: Deals chaos damage equal to 180% of Attack to designated enemy unit. [Enhanced Ultimate] Version: Deals chaos damage equal to 240% of Attack to enemies within a 4-meter radius around self. [Buffer] After an ally uses ultimate skill, can activate [Enhanced Ultimate] once within 5 seconds'
    },
    passive: {
      name: 'Passive Tax Burden',
      description: 'After using enhanced special skill, damage increases by 29%'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'Combo Skill',
    description: 'Self damage increased by 20%',
    requirements: {
      faction: 'Bibilota',
      element: 'Chaos'
    }
  },
  
  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'When you have buff effects: Special skill critical damage increases by 20%' },
    { level: 2, effect: 'After using a special skill: Damage taken is reduced by 10% for 10 seconds' },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4' },
    { level: 4, effect: 'Special skill damage increases by 20%' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    { level: 6, effect: 'After successfully casting an enhanced special skill, gain 1 additional energy point' }
  ],
  
  // Memory Card
  memoryCard: {
    name: 'Method of Revenge',
    image: 'Greed-Mammon-card',
    stats: {
      hp: '4,200',
      attack: '650',
      defense: '395'
    },
    effects: [
      'Support Synergy: When a support character uses their ultimate, own ultimate damage increases by 60% for 10 seconds'
    ]
  }
};

// SEO data for Greed Mammon
export const greedMammonSEO = {
  title: `${greedMammonData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${greedMammonData.name}, a ${greedMammonData.rarity} ${greedMammonData.element} ${greedMammonData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`
};

// Export default for easy importing
export default greedMammonData;
