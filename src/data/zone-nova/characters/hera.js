// Hera Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const heraData = {
  // Basic Character Information
  name: 'Hera',
  chineseName: '赫拉',
  image: 'Hera', // Use format: charactername (e.g., 'Hera')
  rarity: 'SSR', // SSR, SR, R
  element: 'Chaos', // Fire, Ice, Wind, Holy, Chaos
  class: 'Rogue', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Odius', // Otis (奥蒂斯)

  // Base Stats (Level 80)
  stats: {
    hp: '8,033', // HP: 8033
    attack: '1,461', // Attack: 1461
    defense: '530', // Defense: 530
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDamage: '50%',
  },

  // Skills
  skills: {
    normal: {
      name: "Queen's Torture",
      chineseName: '天后酷刑',
      level: '10+4',
      cooldown: '2.0s',
      description: 'Deals 120% attack power chaos damage to designated enemy unit',
    },
    auto: {
      name: 'Judgment Execution',
      chineseName: '审判延戮',
      level: '10+4',
      cooldown: '8.0s',
      description:
        '8 flying swords around self simultaneously launch, dealing 720% attack power chaos damage to designated enemy unit',
    },
    ultimate: {
      name: 'Despair Strangulation',
      chineseName: '绝望绞杀',
      level: '10+4',
      cooldown: '1.0s',
      energyCost: '6',
      description:
        'Summons giant flying sword to attack designated enemy unit, dealing 1440% attack power chaos damage. When the enemy has 20+ layers of continuous damage targets, can cast [Enhanced Ultimate] within 5 seconds. [Enhanced Ultimate]: Summons more swords to attack designated enemy unit, dealing 1920% attack power chaos damage',
    },
    passive: {
      name: 'Strong Pressure',
      chineseName: '女神威压',
      level: '10+4',
      description:
        'Every 4 sword attacks (Basic Attack also count as 1 sword Attacks, same with Auto Skill 8 swords.), next attack can add [Void] effect. [Void]: Deals 36% attack power chaos damage per second per layer, max 10 layers, lasts 10 seconds',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    chineseName: '组合技',
    level: '1',
    description:
      'Self attack power +10%. Battle Start: Every 500 attack power increases self penetration by 3%, max 6 times, total 18%.',
    requirements: {
      faction: 'Odius',
      element: 'Chaos',
      condition: '2 [Odius] colored or 2 [Chaos] colored characters',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'Attack power +20%' },
    { level: 2, effect: 'Add [Void] required attack count -1' },
    { level: 3, effect: '[Skills] and [Normal Attack] level cap +4' },
    { level: 4, effect: 'Chaos damage +30%' },
    { level: 5, effect: '[Required Skills] and [Passive] level cap +4' },
    { level: 6, effect: "Ultimate skill ignores target's 20% chaos resistance" },
  ],

  // Memory Card
  memoryCard: {
    name: 'Hera Memory',
    chineseName: '黑脸丑人',
    image: 'Heracard', // Use format: characternamecard
    level: '80/80',
    stats: {
      hp: '5,040',
      attack: '780',
      defense: '474',
    },
    effects: [
      'Attack power +40%, When attacking targets affected by continuous damage effects, damage increases by 40%',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'DOT', 'Enhanced Ultimate'],
};

// SEO data for Hera
export const heraSEO = {
  title: `${heraData.name} (${heraData.chineseName}) - Zone Nova Character Guide`,
  description: `Complete guide for ${heraData.name}, a ${heraData.rarity} ${heraData.element} ${heraData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export legacy structure for character registry compatibility
export const hera = {
  id: 'hera',
  name: 'Hera',
  chineseName: '赫拉',
  rarity: 'SSR',
  element: 'Chaos',
  role: 'DPS',
  faction: 'Odius',
  chineseFaction: '奥蒂斯',
  maxLevel: 80,

  baseStats: {
    hp: 8033,
    attack: 1461,
    defense: 530,
    energyRecovery: 0.25,
    critRate: 0,
    critDamage: 50,
  },

  images: {
    portrait: '/images/characters/Hera.jpg',
    card: '/images/characters/Heracard.jpg',
  },

  tags: ['DPS', 'Chaos', 'Odius', 'DOT', 'Enhanced Ultimate'],
};

// Export default for easy importing
export default heraData;
