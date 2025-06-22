// Horus Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const horusData = {
  // Basic Character Information
  name: 'Horus',
  image: 'Horus', // Character image identifier
  rarity: 'SSR',
  element: 'Holy',
  class: 'Debuffer',
  faction: 'Kemich',
  
  // Base Stats (Level 80)
  stats: {
    hp: '8,033',
    attack: '1,461',
    defense: '530'
  },
  
  // Skills
  skills: {
    normal: {
      name: 'Holy Radiance Arrow',
      description: 'Deals holy damage equal to 120% of Attack to designated enemy'
    },
    auto: {
      name: 'Arrow of Atum',
      cooldown: '5.0s',
      description: 'Shoots arrows at target. Deals 120% attack power holy damage to target and 2m radius. Adds 1 layer [Piercing] to all hit enemies'
    },
    ultimate: {
      name: 'Eye of Wadjet',
      energyCost: '3',
      description: 'Deals 480% attack power holy damage to target. Adds 1 layer [Seal] and 1 layer [Piercing]. Skill Breaking: This damage can interrupt and disable target\'s active skills'
    },
    passive: {
      name: 'Solar Divine Judgment',
      description: 'Seal Consumption & Area Control: When using skills on targets with [Seal], consumes 1 layer and triggers area explosion. Area Damage: 120% attack power holy damage to target and 4m radius. Debuff Application: Hit targets gain 1 layer [Piercing] and continuous damage for 10 seconds. [Piercing] Effect: Each layer deals 19.2% attack power holy damage every 3 seconds. Maximum Stacks: 10 layers for devastating sustained damage'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    description: 'Effect 1: Self attack power increases by 10%. Effect 2: At battle start, every 500 attack power adds 3% penetration, maximum 6 times (18% max)',
    requirements: {
      faction: 'Kemich',
      element: 'Holy'
    }
  },
  
  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'Attack power increased by 20%' },
    { level: 2, effect: 'When dealing continuous damage, targets receive +20% continuous damage amplification for 3 seconds. Effect can be refreshed with new applications' },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4' },
    { level: 4, effect: '[Continuous Damage] effects deal +35% increased damage' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4. Critical: Required for memory card access' },
    { level: 6, effect: 'When dealing damage to targets with [Continuous Damage] status, gain 20% holy elemental penetration' }
  ],
  
  // Memory Card
  memoryCard: {
    name: 'Cute Little Thing',
    image: 'Horuscard',
    stats: {
      hp: '5,040',
      attack: '780',
      defense: '474'
    },
    effects: [
      'Class Restriction: Only effective for Debuffer class',
      '5th Stage Awakening Required',
      'Effect 1: Attack power increases by 40%',
      'Effect 2: When dealing continuous damage, targets take 24% increased damage for 3 seconds'
    ]
  }
};

// SEO data for Horus
export const horusSEO = {
  title: `${horusData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${horusData.name}, a ${horusData.rarity} ${horusData.element} ${horusData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`
};

// Export default for easy importing
export default horusData;
