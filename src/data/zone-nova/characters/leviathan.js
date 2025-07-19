// Leviathan Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const leviathanData = {
  // Basic Character Information
  name: 'Leviathan',
  image: 'Leviathan', // Character image identifier
  rarity: 'SR',
  element: 'Wind',
  class: 'DPS',
  faction: 'Huájiān',

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
        'Trigger: When any allys skill hits an enemy, consume 1 Mark to perform an extra attack dealing 180 % ATK Wind damage.',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    description: 'Self damage increased by 20%.',
    requirements: {
      faction: 'Biceta',
      element: 'Wind',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: 'Auto skill can also trigger the Passive effect.',
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
      effect: 'When casting the Ultimate, the automatic extra attack increases from 1 to 2 hits.',
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
};

// SEO data for Leviathan
export const leviathanSEO = {
  title: `${leviathanData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${leviathanData.name}, a ${leviathanData.rarity} ${leviathanData.element} ${leviathanData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default leviathanData;
