// Kela Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const kelaData = {
  // Basic Character Information
  name: 'Kela',
  image: 'kela', // Character image identifier
  rarity: 'SR',
  element: 'Holy',
  class: 'Healer', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'Healer', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Sapphire',

  // Base Stats (Level 80)
  stats: {
    hp: '7,650',
    attack: '837',
    defense: '608',
  },

  // Skills
  skills: {
    normal: {
      name: 'Divine Strike',
      description: 'Deals 120% attack power as Holy damage to designated enemy unit',
    },
    auto: {
      name: 'Sacred Healing',
      cooldown: '5.0s',
      description:
        'Heals the ally with the lowest health percentage. Healing amount: 69% attack power + 335 HP. Intelligent targeting ensures optimal healing distribution',
    },
    ultimate: {
      name: 'Divine Intervention',
      energyCost: '3',
      description:
        'Heals the ally with the lowest HP percentage. Healing amount: 128% attack power + 682 HP. Scales with attack buffs, making it potent when paired with attack-boosting allies',
    },
    passive: {
      name: 'Master of All (万事通之力)',
      description:
        'When healing allies below 50% health, healing amount increases by 24%. This passive makes Kela the ultimate clutch healer for critical moments',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Divine Sanctuary',
    description:
      "Effect 1: All allies' healing received increases by 15%. Effect 2: When any ally drops below 30% HP, they gain damage reduction of 10% for 8 seconds",
    requirements: {
      faction: 'Sapphire',
      element: 'Holy',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect:
        'When healing allies below 50% health: Damage they take is reduced by 10% for 10 seconds. Stacks with memory card effect for enhanced damage reduction',
    },
    { level: 2, effect: 'Healing amount increases by 15%' },
    { level: 3, effect: '[Skills] and [Normal Attack] level and level cap +4' },
    {
      level: 4,
      effect:
        'When using healing skills: Attack power increases by 20% for 10 seconds. Self-amplifying healing cycle - each heal makes the next one stronger',
    },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    {
      level: 6,
      effect:
        'When allies are below 30% health: Healing effectiveness increases by an additional 25%',
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Solitary Realm (一人之境)',
    image: 'kelacard',
    stats: {
      hp: '5,000',
      attack: '500',
      defense: '500',
    },
    effects: [
      'Solitary Realm (一人之境): Healing amount increased by 30%',
      'Protection Effect: When healing a target below 50% max HP, the target receives 8% damage reduction for 10 seconds',
    ],
  },
};

// SEO data for Kela
export const kelaSEO = {
  title: `${kelaData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${kelaData.name}, a ${kelaData.rarity} ${kelaData.element} ${kelaData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default kelaData;
