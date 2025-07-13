// Merlin Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const merlinData = {
  // Basic Character Information
  name: 'Merlin',
  image: 'Merlin', // Character image identifier
  rarity: 'SSR',
  element: 'Fire',
  class: 'DPS',
  faction: 'Avalon',
  
  // Base Stats (Level 80)
  stats: {
    hp: '8,033',
    attack: '1,305',
    defense: '530'
  },
  
  // Skills
  skills: {
    normal: {
      name: 'Flame Slash',
      description: 'Deals fire damage equal to 120% of Attack to designated enemy unit'
    },
    auto: {
      name: 'Magic Swordplay: Molten Core Burst',
      cooldown: '5.0s',
      description: 'Deals fire damage equal to 780% of Attack to designated enemy unit and applies [Mark]. When Merlin uses must kill to attack targets with [Mark], damage increases by 20%'
    },
    ultimate: {
      name: 'Magic Swordplay: King\'s Sword',
      energyCost: '6',
      description: 'Normal Version: Deals fire damage equal to 1080% of Attack to designated enemy unit. [Strengthened Must Kill] Version (Support Mode): Deals fire damage equal to 1200% of Attack to designated enemy unit. When target is the only enemy, damage multiplier increases by 30% (total: 1560% Attack). Support Mode Access: Available within 5 seconds after using normal ultimate (requires Awakening 2)'
    },
    passive: {
      name: 'Rune Oscillation',
      description: 'Must kill hits additionally deal fire damage equal to 120% of Attack. With Awakening 2: This effectively adds 120% damage to all ultimate attacks, making strengthened ultimate deal 1320-1680% damage'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    description: 'Self critical rate increased by 7.5%. Critical damage scaling: At battle start, every 15% critical rate increases self critical damage by 7.5%, maximum 6 times (up to 45% critical damage). Excellent synergy with crit-focused builds',
    requirements: {
      faction: 'Avalon',
      element: 'Fire'
    }
  },
  
  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'Critical rate increased by 15%. Essential for critical damage scaling from team skill' },
    { level: 2, effect: 'Support mode enhancement: Can trigger [Strengthened Must Kill] within 5 seconds after using must kill. When triggering [Strengthened Must Kill]: Critical damage increased by 20%. Unlocks dual-ultimate combo potential' },
    { level: 3, effect: '[Skills] and [Normal Attack] level and level cap +4' },
    { level: 4, effect: 'Must kill damage increased by 35%. Massive boost to ultimate damage output' },
    { level: 5, effect: '[Must Kill] and [Passive] level and level cap +4' },
    { level: 6, effect: '[Strengthened Must Kill] ignores target 20% elemental resistance. Ensures full damage against fire-resistant enemies' }
  ],
  
  // Memory Card
  memoryCard: {
    name: 'King\'s Sword',
    image: 'Merlincard', // Memory card image identifier
    stats: {
      hp: '5,280',
      attack: '857',
      defense: '348'
    },
    effects: [
      'Attack increased by 40%',
      'Must kill damage increased by 40% when the target is the only enemy',
      'Critical rate increased by 12%'
    ]
  }
};

// SEO data for Merlin
export const merlinSEO = {
  title: `${merlinData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${merlinData.name}, a ${merlinData.rarity} ${merlinData.element} ${merlinData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`
};

// Export default for easy importing
export default merlinData;
