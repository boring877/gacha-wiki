// Rose Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const roseData = {
  // Basic Character Information
  name: 'Rose',
  image: 'Rose', // Character image identifier
  rarity: 'SR',
  element: 'Ice',
  class: 'DPS',
  faction: 'Black & White Country',
  
  // Base Stats (Level 80)
  stats: {
    hp: '6,694',
    attack: '1,088',
    defense: '442'
  },
  
  // Skills
  skills: {
    normal: {
      name: 'Shatter! Shatter! Shatter! (碎！碎！碎！)',
      description: 'Base: Deals ice damage equal to 96% of Attack to designated enemy. Enhanced (during Frost Cannon): Deals ice damage equal to 96% of Attack to designated enemy and surrounding 2-meter range'
    },
    auto: {
      name: 'Bullet Hell Scatter (弹幕散射)',
      cooldown: '10.0s',
      description: 'Base: Deals ice damage equal to 180% of Attack to designated enemy. Enhanced (during Frost Cannon): Deals ice damage equal to 180% of Attack to designated enemy and surrounding 4-meter range'
    },
    ultimate: {
      name: 'Frost Cannon Transformation',
      energyCost: '8',
      description: 'Enters [Frost Cannon] state for 10 seconds. Increases attack speed by 58%. Gains enhanced normal attacks and enhanced skills. All abilities become AoE during this state'
    },
    passive: {
      name: 'Reckless Spirit\'s Foundation (冒失鬼的底蕴)',
      description: 'Each normal attack increases critical rate by 2.4%. Maximum 20 stacks (48% maximum critical rate increase). Stacks persist through combat and ultimate transformations'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    description: 'Self ice damage increases by 20%. Enhances overall damage output for sustained ice damage dealing',
    requirements: {
      faction: 'Black & White Country',
      element: 'Ice'
    }
  },
  
  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'When in [Frost Cannon] state, critical rate increases by 15%. Combines with passive stacks for massive critical rate during ultimate' },
    { level: 2, effect: 'When in [Frost Cannon] state, damage taken reduced by 10%. Provides survivability during aggressive AoE phases' },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4. Essential skill level upgrade' },
    { level: 4, effect: 'Normal attack damage increases by 20%. Significant DPS boost since normal attacks build critical stacks' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4. Essential skill level upgrade' },
    { level: 6, effect: '[Frost Cannon] state duration becomes 15 seconds. 50% longer transformation window for AoE dominance' }
  ],
  
  // Memory Card
  memoryCard: {
    name: 'During Military Academy Training',
    image: 'Rosecard', // Memory card image identifier
    stats: {
      hp: '4,200',
      attack: '650',
      defense: '395'
    },
    effects: [
      'After using ultimate skill, normal attack and skill damage increased by 60% for 10 seconds'
    ]
  }
};

// SEO data for Rose
export const roseSEO = {
  title: `${roseData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${roseData.name}, a ${roseData.rarity} ${roseData.element} ${roseData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`
};

// Export default for easy importing
export default roseData;
