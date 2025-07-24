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
      description: 'Deals 120% attack power as ice damage to designated enemy unit',
    },
    auto: {
      name: 'Steel Charge (钢铁冲锋)',
      cooldown: 'Auto-trigger: 5.0s',
      description:
        'Deals 60% attack power as ice damage to designated enemy. Applies Weakness debuff: Reduces enemy damage by 5.8% per stack. Maximum 3 stacks, lasts 10 seconds',
    },
    ultimate: {
      name: "Black Nation's Glory (黑色带国的荣耀)",
      energyCost: '3',
      description:
        'Deals 84% attack power as ice damage to designated enemy. Increases damage taken by 38% for 10 seconds',
    },
    passive: {
      name: 'Battle Fanatic (战斗狂热分子)',
      description:
        'When attacking enemies with negative status effects: Damage increased by 38%. Synergizes perfectly with her debuff application abilities',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill (组合技)',
    description:
      'Self damage reduction increased by 20%. Provides defensive utility to complement her debuffer role',
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
        'When using skill to attack targets with negative effects: Skill rate increased by 30%. Enhances effectiveness against debuffed enemies',
    },
    {
      level: 2,
      effect:
        '[Weakness] can stack up to 5 layers. Increases maximum debuff potential from 3 to 5 stacks',
    },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4' },
    {
      level: 4,
      effect:
        '[Weakness] additionally makes target receive 10% more ice damage. Adds elemental vulnerability to her debuff arsenal',
    },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    {
      level: 6,
      effect:
        'When skill hits target with HP below 50%: Immediately applies [Weakness]. Provides execute-range debuff application',
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
      'Battlefield Flower: For each negative effect on the target, damage dealt increases by 20%, maximum 3 stacks',
    ],
  },
};

// SEO data for Nini
export const niniSEO = {
  title: `${niniData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${niniData.name}, a ${niniData.rarity} ${niniData.element} ${niniData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default niniData;
