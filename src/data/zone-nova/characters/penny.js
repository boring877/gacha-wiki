// Penny Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const pennyData = {
  // Basic Character Information
  name: 'Penny',
  image: 'penny', // Use format: charactername (e.g., 'penny')
  rarity: 'SSR', // SSR, SR, R
  element: 'Wind', // Fire, Ice, Wind, Holy, Chaos
  class: 'Tank', // Tank, DPS, Buffer, Debuffer, Healer
  faction: 'Savir', // Savir, etc.
  
  // Base Stats (Level 80)
  stats: {
    hp: '10,520', // e.g., '10,520'
    attack: '794', // e.g., '794'
    defense: '1,232' // e.g., '1,232'
  },
  
  // Skills
  skills: {
    normal: {
      name: 'Shield Impact',
      description: 'Deals Wind damage equal to 120% of own defense to target enemy.'
    },
    auto: {
      name: 'Divine Shield Wind',
      cooldown: '5.0s', // e.g., '5.0s'
      description: 'Deals Wind damage equal to 120% of own defense to target enemy, and reduces damage taken by self for 10 seconds by 24%.'
    },
    ultimate: {
      name: 'Shield of Aethyss',
      energyCost: '5', // e.g., '5'
      description: 'All allied characters gain a shield equal to 60% of defense, and take 24% less damage for 10 seconds.'
    },
    passive: {
      name: 'Aethyss\'s Call for Help',
      description: 'After taking damage, gain 1 stack of [Fortitude], increasing own defense by 4.8%, max 30 stacks.'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'Combination Skill', // Usually 'Combination Skill'
    description: 'Own defense increases by 15%. At battle start, every 500 defense reduces team damage taken by 1.5%, max 6 times.',
    requirements: {
      faction: 'Savir', // Same as character faction
      element: 'Wind' // Same as character element
    }
  },
  
  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'After taking damage, additionally gain 1 stack of [Fortitude]' },
    { level: 2, effect: 'When [Fortitude] reaches 30 stacks, all allies immediately gain special attack shield and damage reduction effect' },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4' },
    { level: 4, effect: 'Defense increased by 45%' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    { level: 6, effect: 'All resistance increased by 15%, Wind resistance additionally increased by 15%' }
  ],
  
  // Memory Card
  memoryCard: {
    name: 'Her Trainer',
    image: 'pennycard', // Use format: characternamecard (e.g., 'pennycard')
    stats: {
      hp: '8,600', // e.g., '8,600'
      attack: '480', // e.g., '480'
      defense: '690' // e.g., '690'
    },
    effects: [
      'Defense increased by 60%',
      'After using ultimate skill, equipped character takes 10% less damage for 5 seconds',
      'Shield amount applied by ultimate skills increased by 20%'
    ]
  }
};

// SEO data for Penny
export const pennySEO = {
  title: `${pennyData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${pennyData.name}, a ${pennyData.rarity} ${pennyData.element} ${pennyData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`
};

// Export default for easy importing
export default pennyData;
