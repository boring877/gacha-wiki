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
        'Heal the friendly unit with the lowest current health percentage once, restore health equal to self attack power 69% + 335',
    },
    ultimate: {
      name: 'Divine Intervention',
      energyCost: '3',
      description:
        'Heal the friendly unit with the lowest current health percentage once, restore health equal to self attack power 128% + 682',
    },
    passive: {
      name: 'Master of All (万事通之力)',
      description:
        'When healing friendly units whose current health is below 50%, healing amount increases by 24%',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Divine Sanctuary',
    description: 'Self attack power increases by 10%, healing amount increases by 12.5%',
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
        'After ultimate skill heals friendly units, additionally make the target take 5% reduced damage, lasts 5 seconds',
    },
    {
      level: 2,
      effect:
        'When self health drops below 20% after taking damage, immediately restore health equal to self attack power 750%, can trigger at most once per battle',
    },
    { level: 3, effect: '[Skills] and [Normal Attack] level and level cap +4' },
    {
      level: 4,
      effect: 'Healing amount increases by 20%',
    },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    {
      level: 6,
      effect:
        'Auto Skills healing friendly units can also trigger Awakening 1 effect. Awakening 1 effect is increased by 100% (It become 10%)',
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
      'Healing amount increases by 30%. When healing targets below 50% maximum health, they get 8% reduced damage, lasts 10 seconds',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'Healing', 'Reduce Damage'],
};

// SEO data for Kela
export const kelaSEO = {
  title: `${kelaData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${kelaData.name}, a ${kelaData.rarity} ${kelaData.element} ${kelaData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default kelaData;
