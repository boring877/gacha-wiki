// Lyra Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const lyraData = {
  // Basic Character Information
  name: 'Lyra',
  image: 'Lyra', // Character image identifier
  rarity: 'SSR',
  element: 'Fire',
  class: 'DPS',
  faction: 'Urtexteer',
  
  // Base Stats (Level 80)
  stats: {
    hp: '8,033',
    attack: '1,305',
    defense: '530'
  },
  
  // Skills
  skills: {
    normal: {
      name: 'End Blade Continuous Strike',
      description: 'Deals fire damage equal to 120% of Attack to designated enemy'
    },
    auto: {
      name: 'Two-Blade Flow - End Blade - Continuous Slash',
      cooldown: '8.0s (4.8s with Awakening 2)',
      description: 'Deals fire damage equal to 480% of Attack to designated enemy. Applies [Fire Essence] debuff for 10 seconds. With Awakening 2: Cooldown reduced to 4.8 seconds'
    },
    ultimate: {
      name: 'Two-Blade Flow - End Blade - Ghost Blade Flow',
      energyCost: '5',
      description: 'Base: Deals fire damage equal to 360% of Attack to designated enemy. Enhanced (if target has Fire Essence): Consumes [Fire Essence] and deals fire damage equal to 360% of Attack to target and enemies behind. With Memory Card: Up to 80% damage amplification vs single targets'
    },
    passive: {
      name: 'Black Armor Recommendation System',
      description: 'For each enemy unit on the field, increases attack by 19%. Maximum 4 stacks (76% total attack increase in 4+ enemy scenarios). Scales inversely with memory card bonus - fewer enemies = higher ultimate damage, more enemies = higher base attack'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    description: 'Self critical rate increases by 7.5%. Combat start: Each 15% critical rate can additionally add 7.5% critical damage, maximum 6 times. Provides both crit rate and crit damage scaling',
    requirements: {
      faction: 'Urtexteer',
      element: 'Fire'
    }
  },
  
  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'Critical rate increases by 15%. Combined with base 15% and team skill, reaches high critical rate thresholds' },
    { level: 2, effect: 'Skill cooldown time reduced by 40%. Continuous Slash cooldown: 8.0s → 4.8s (dramatically improves Fire Essence uptime)' },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4' },
    { level: 4, effect: 'Fire damage increases by 35%. Massive damage amplification for all abilities' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    { level: 6, effect: 'Ultimate damage ignores target\'s 20% fire resistance. Ensures full damage against fire-resistant enemies' }
  ],
  
  // Memory Card
  memoryCard: {
    name: 'Self-Release (自我放纵)',
    image: 'Lyracard', // Memory card image identifier
    stats: {
      hp: '5,040',
      attack: '780',
      defense: '474'
    },
    effects: [
      'Ultimate Damage: Ultimate damage increased by 40%',
      'Single Target Bonus: When there\'s one enemy on the field, ultimate damage additionally increases by 10%, maximum 4 times',
      'Maximum Potential: Up to 80% ultimate damage boost vs single targets (40% + 40%)'
    ]
  }
};

// SEO data for Lyra
export const lyraSEO = {
  title: `${lyraData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${lyraData.name}, a ${lyraData.rarity} ${lyraData.element} ${lyraData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`
};

// Export default for easy importing
export default lyraData;
