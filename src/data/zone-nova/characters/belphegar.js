// Belphegar Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const belphegarData = {
  // Basic Character Information
  name: 'Belphegar',
  image: 'belphegar', // Use format: charactername (e.g., 'penny')
  rarity: 'SR', // SSR, SR, R
  element: 'Chaos', // Fire, Ice, Wind, Holy, Chaos
  class: 'Debuffer', // Tank, DPS, Buffer, Debuffer, Healer
  faction: 'Guardian', // Savir, etc.
  
  // Base Stats (Level 80)
  stats: {
    hp: '7,970', // e.g., '10,520'
    attack: '837', // e.g., '794'
    defense: '560' // e.g., '1,232'
  },
  
  // Skills
  skills: {
    normal: {
      name: 'Fatigue Bombardment',
      description: 'Deals chaos damage equal to 120% of Attack to designated enemy unit.'
    },
    auto: {
      name: 'Power of the Blanket',
      cooldown: '5.0s', // e.g., '5.0s'
      description: 'Attacks the enemy with highest attack, dealing 120% attack damage. Reduces target\'s critical rate and critical damage by 24% for 10 seconds.'
    },
    ultimate: {
      name: 'Drowsy Sleep',
      energyCost: '5', // e.g., '5'
      description: 'Deals chaos damage to all enemies and applies sleep effect, preventing them from taking actions for a duration.'
    },
    passive: {
      name: 'Sleepy Aura',
      description: 'Reduces enemy team\'s action speed and applies debuffs that weaken their combat effectiveness.'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'Combination Skill', // Usually 'Combination Skill'
    description: 'Team debuff resistance increased. When team has multiple Guardian or Chaos characters, enhances debuff application effectiveness.',
    requirements: {
      faction: 'Guardian', // Same as character faction
      element: 'Chaos' // Same as character element
    }
  },
  
  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'Debuff duration increased by 20%.' },
    { level: 2, effect: 'Critical rate reduction effects enhanced by 15%.' },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4.' },
    { level: 4, effect: 'Chaos damage increased by 25%.' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4.' },
    { level: 6, effect: 'All debuff effects ignore 20% resistance.' }
  ],
  
  // Memory Card
  memoryCard: {
    name: 'Sleepy Guardian',
    image: 'Belphegarcard', // Use format: characternamecard (e.g., 'pennycard')
    stats: {
      hp: '5,200', // e.g., '8,600'
      attack: '420', // e.g., '480'
      defense: '380' // e.g., '690'
    },
    effects: [
      'Debuff application rate increased by 30%',
      'When equipped character applies debuff: Team gains 10% damage reduction for 5 seconds',
      'Critical rate reduction effects are 50% more effective'
    ]
  }
};

// SEO data for Belphegar
export const belphegarSEO = {
  title: `${belphegarData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${belphegarData.name}, a ${belphegarData.rarity} ${belphegarData.element} ${belphegarData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`
};

// Export default for easy importing
export default belphegarData;
