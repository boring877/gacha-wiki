// Bastet Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const bastetData = {
  // Basic Character Information
  name: 'Bastet',
  image: 'Bastet', // Use format: charactername (e.g., 'penny')
  rarity: 'SR', // SSR, SR, R
  element: 'Wind', // Fire, Ice, Wind, Holy, Chaos
  class: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer
  faction: 'Kemichi', // Savir, etc.
  
  // Base Stats (Level 80)
  stats: {
    hp: '6,694', // e.g., '10,520'
    attack: '1,088', // e.g., '794'
    defense: '442' // e.g., '1,232'
  },
  
  // Skills
  skills: {
    normal: {
      name: 'Cat Shadow Arrow',
      description: 'Deals wind damage equal to 120% of Attack to designated enemy unit.'
    },
    auto: {
      name: 'Cat! Bomb!',
      cooldown: '5.0s', // e.g., '5.0s'
      description: 'Deals wind damage equal to 72% of Attack to designated enemy and surrounding 4-meter range.'
    },
    ultimate: {
      name: 'Cat Bombing!',
      energyCost: '5', // e.g., '5'
      description: 'Deals wind damage equal to 120% of Attack to designated enemy and surrounding 4-meter range.'
    },
    passive: {
      name: 'Cat Frenzy',
      description: 'Every 5 normal attacks, the next normal attack deals wind damage equal to 120% of Attack to designated enemy and surrounding 4-meter range. With Awakening 2: Reduces trigger requirement from 5 to 4 normal attacks.'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'Storm Synergy', // Usually 'Combination Skill'
    description: 'Self wind damage increases by 20%.',
    requirements: {
      faction: 'Kemichi', // Same as character faction
      element: 'Wind' // Same as character element
    }
  },
  
  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'When target\'s HP is below 50%: All self-inflicted damage increases by 20%.' },
    { level: 2, effect: 'Passive enhancement: Required normal attack count changes from 5 to 4.' },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4.' },
    { level: 4, effect: 'Ultimate damage increases by 20%.' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4.' },
    { level: 6, effect: 'After releasing ultimate: Attack increases by 20% for 5 seconds.' }
  ],
  
  // Memory Card
  memoryCard: {
    name: 'Annoying Classroom',
    image: 'Bastetcard', // Use format: characternamecard (e.g., 'pennycard')
    stats: {
      hp: '4,200', // e.g., '8,600'
      attack: '650', // e.g., '480'
      defense: '395' // e.g., '690'
    },
    effects: [
      'When releasing ultimate skill: For each enemy on the field, ultimate skill damage increases by 12%, up to 5 stacks, lasting 5 seconds'
    ]
  }
};

// SEO data for Bastet
export const bastetSEO = {
  title: `${bastetData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${bastetData.name}, a ${bastetData.rarity} ${bastetData.element} ${bastetData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`
};

// Export default for easy importing
export default bastetData;
