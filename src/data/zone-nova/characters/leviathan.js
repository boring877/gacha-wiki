// Leviathan Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const leviathanData = {
  // Basic Character Information
  name: 'Leviathan',
  image: 'Leviathan', // Character image identifier
  rarity: 'SR',
  element: 'Wind',
  class: 'Rogue', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Bicta Tower',

  // Base Stats (Level 80)
  stats: {
    hp: '6,694',
    attack: '1,088',
    defense: '442',
  },

  // Skills
  skills: {
    normal: {
      name: "Leviathan's Kiss (利维坦之吻)",
      description: 'Deals 120 % ATK Wind damage to the targeted enemy.',
    },
    auto: {
      name: 'Abyss Roar (深渊之咆哮)',
      cooldown: '5.0s',
      description: 'Deals 120 % ATK Wind damage to the targeted enemy and gains 2 Marks.',
    },
    ultimate: {
      name: 'Seven Deadly Sins: Jiāolú (七大罪：娇炉)',
      energyCost: '5',
      description:
        'Deals 600 % ATK Wind damage to the targeted enemy, then immediately performs 1 extra attack that does NOT consume a Mark.',
    },
    passive: {
      name: 'Grudge Deep Chain (怨恨深链)',
      description:
        'When our allied units use auto skills and hit enemies, consume 1 Mark to perform an extra attack dealing 180 % ATK Wind damage.',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    description: 'Self damage increased by 20%.',
    requirements: {
      faction: 'Bicta Tower',
      element: 'Wind',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: 'When self activates [auto Skill], can also trigger passive effects',
    },
    {
      level: 2,
      effect: 'Extra attacks gain +20 % Crit Rate.',
    },
    { level: 3, effect: '[Skills] and [Normal Attack] level and level cap +4' },
    {
      level: 4,
      effect: 'Extra attacks deal +20 % damage.',
    },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    {
      level: 6,
      effect:
        'When using ultimate skill, the number of follow-up attacks triggered changes from 1 time to 2 times.',
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Perverted Little Nurse (变态小护士)',
    image: 'Leviathancard', // Memory card image identifier
    stats: {
      hp: '4,200',
      attack: '650',
      defense: '395',
    },
    effects: ['After landing an extra attack, gain +36 % Crit Rate for 10 s.'],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Melee', 'Crit Rate', 'Extra Attack'],
};

// SEO data for Leviathan
export const leviathanSEO = {
  title: `${leviathanData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${leviathanData.name}, a ${leviathanData.rarity} ${leviathanData.element} ${leviathanData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default leviathanData;
