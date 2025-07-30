// Lyra Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const lyraData = {
  // Basic Character Information
  name: 'Lyra',
  image: 'Lyra', // Character image identifier
  rarity: 'SSR',
  element: 'Fire',
  class: 'Mage', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Sapphire',

  // Base Stats (Level 80)
  stats: {
    hp: '8,033',
    attack: '1,305',
    defense: '530',
  },

  // Skills
  skills: {
    normal: {
      name: 'End Blade Continuous Strike',
      description: 'Deals fire damage equal to 120% of Attack to enemy',
    },
    auto: {
      name: 'Two-Blade Flow - End Blade - Continuous Slash',
      cooldown: '8.0s',
      description:
        'Deals fire damage equal to 480% of Attack to enemy. Applies [Fire Essence] for 10 seconds.',
    },
    ultimate: {
      name: 'Two-Blade Flow - End Blade - Ghost Blade Flow',
      energyCost: '5',
      description:
        'Deals fire damage equal to 360% of Attack to enemy. Enhanced (if target has Fire Essence): Consumes [Fire Essence] and deals fire damage equal to 360% of Attack to target and enemies behind.',
    },
    passive: {
      name: 'Black Armor Recommendation System',
      description:
        'For every enemy unit on the field, increases attack power by 19%, can increase maximum 4 times',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    description:
      'Self critical rate increases by 7.5%. Combat start: Each 15% critical rate can additionally add 7.5% critical damage, maximum 6 times.',
    requirements: {
      faction: 'Sapphire',
      element: 'Fire',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: 'Critical rate increases by 15%.',
    },
    {
      level: 2,
      effect: 'Auto Skill cooldown time reduced by 40%.',
    },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4' },
    {
      level: 4,
      effect: 'Fire damage increases by 35%.',
    },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    {
      level: 6,
      effect: "Ultimate damage ignores target's 20% fire resistance.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Self-Release (自我放纵)',
    image: 'Lyracard', // Memory card image identifier
    stats: {
      hp: '5,040',
      attack: '780',
      defense: '474',
    },
    effects: [
      'Ultimate Damage: Ultimate damage increased by 40%. For every enemy on the field, ultimate skill damage additionally increases by 10%, maximum 4 times',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'Melee',
    'Crit Rate',
    'Crit Dmg',
    'Enhanced Ultimate',
    'Cooldown Reduction',
    'Increase Attack',
  ],
};

// SEO data for Lyra
export const lyraSEO = {
  title: `${lyraData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${lyraData.name}, a ${lyraData.rarity} ${lyraData.element} ${lyraData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default lyraData;
