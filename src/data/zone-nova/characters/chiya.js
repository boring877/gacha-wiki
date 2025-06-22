// Chiya Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const chiyaData = {
  // Basic Character Information
  name: 'Chiya',
  image: 'Chiya', // Use format: charactername (e.g., 'penny')
  rarity: 'SSR', // SSR, SR, R
  element: 'Ice', // Fire, Ice, Wind, Holy, Chaos
  class: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer
  faction: 'Saville', // Savir, etc.
  
  // Base Stats (Level 80)
  stats: {
    hp: '8,033', // e.g., '10,520'
    attack: '1,305', // e.g., '794'
    defense: '530' // e.g., '1,232'
  },
  
  // Skills
  skills: {
    normal: {
      name: 'Heavy Hammer Strike',
      description: 'Deals ice damage equal to 120% of Attack to designated enemy unit.'
    },
    auto: {
      name: 'Cold Steel Combo',
      cooldown: '5.0s', // e.g., '5.0s'
      description: 'Deals ice damage equal to 480% of Attack to designated enemy unit.'
    },
    ultimate: {
      name: 'Society Master\'s Fist',
      energyCost: '3', // e.g., '5'
      description: 'Normal Version: Rushes to target and deals ice damage equal to 600% of Attack. [Strengthened Must Kill] Version: Gets 100% critical hit rate, rushes to target and deals ice damage equal to 840% of Attack with guaranteed critical strike.'
    },
    passive: {
      name: 'Beam Assist Framework',
      description: 'After using must kill, enters [Focus] state for 10 seconds. All attacks outside must kill deal an additional 36% attack power ice damage. Gains one [Strengthened Must Kill] charge.'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'Combination Skill', // Usually 'Combination Skill'
    description: 'Self attack power increased by 10%. At battle start, every 500 attack power can increase self critical damage by 7.5%, maximum 6 times (up to 45% critical damage).',
    requirements: {
      faction: 'Saville', // Same as character faction
      element: 'Ice' // Same as character element
    }
  },
  
  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'At battle start, immediately gains one [Strengthened Must Kill].' },
    { level: 2, effect: 'During [Focus] state, attack speed increased by 50%.' },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4.' },
    { level: 4, effect: 'Ice damage increased by 30%.' },
    { level: 5, effect: '[Must Kill] and [Passive] level and level cap +4.' },
    { level: 6, effect: 'After using normal must kill, gains one [Strengthened Must Kill]. Must kill damage increased by 30%.' }
  ],
  
  // Memory Card
  memoryCard: {
    name: 'Lonely Dark Deep Night',
    image: 'Chiyacard', // Use format: characternamecard (e.g., 'pennycard')
    stats: {
      hp: '5,040', // e.g., '8,600'
      attack: '780', // e.g., '480'
      defense: '474' // e.g., '690'
    },
    effects: [
      'Critical Damage increased by 60%',
      'Kill Stacking: After equipped character kills an enemy, increase attack power by 10% for this battle',
      'Maximum 4 stacks (up to 40% attack power increase)'
    ]
  }
};

// SEO data for Chiya
export const chiyaSEO = {
  title: `${chiyaData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${chiyaData.name}, a ${chiyaData.rarity} ${chiyaData.element} ${chiyaData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`
};

// Export default for easy importing
export default chiyaData;
