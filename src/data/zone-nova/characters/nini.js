// Nini Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const niniData = {
  // Basic Character Information
  name: 'Nini',
  image: 'Nini', // Character image identifier
  rarity: 'SR',
  element: 'Ice',
  class: 'Debuffer', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'Debuffer', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Monochrome Nation',

  // Base Stats (Level 80)
  stats: {
    hp: '7,970',
    attack: '837',
    defense: '560',
  },

  // Skills
  skills: {
    normal: {
      name: 'Suppressive Fire (压制射击)',
      description: 'Deals 120% attack power as ice damage to enemy unit',
    },
    auto: {
      name: 'Steel Charge (钢铁冲锋)',
      cooldown: 'Auto-trigger: 5.0s',
      description:
        'Deals 60% attack power as ice damage to all enemy in fronts. Applies Weakness debuff: Reduces enemy damage by 5.8% per stack. Maximum 3 stacks, lasts 10 seconds',
    },
    ultimate: {
      name: "Black Nation's Glory (黑色带国的荣耀)",
      energyCost: '3',
      description:
        'Deals 84% attack power as ice damage to all enemy in front. Increases damage taken by 38% for 10 seconds',
    },
    passive: {
      name: 'Battle Fanatic (战斗狂热分子)',
      description: 'When attacking enemies with negative status effects: Damage increased by 38%.',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill (组合技)',
    description: 'Self damage dealt increases by 20%',
    requirements: {
      faction: 'Monochrome Nation',
      element: 'Ice',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect:
        'When using auto kill to attack targets with negative effects: Skill damage increased by 30%.',
    },
    {
      level: 2,
      effect: '[Weakness] can stack up to 5 layers.',
    },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4' },
    {
      level: 4,
      effect: 'Auto skill additionally makes target receive 10% more ice damage.',
    },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    {
      level: 6,
      effect: 'When skill hits target with HP below 50%: Immediately applies [Weakness].',
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Battlefield Flower',
    image: 'ninicard', // Memory card image identifier
    stats: {
      hp: '5,000',
      attack: '500',
      defense: '500',
    },
    effects: [
      'For each negative effect on the attacked target, this character damage increases by 20%, maximum stacking 3 layers (60%)',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'Debuffer', 'Vulnerability', 'Weakness'],
};

// SEO data for Nini
export const niniSEO = {
  title: `${niniData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${niniData.name}, a ${niniData.rarity} ${niniData.element} ${niniData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default niniData;
