// Merlin Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const merlinData = {
  // Basic Character Information
  name: 'Merlin',
  image: 'Merlin', // Character image identifier
  rarity: 'SSR',
  element: 'Fire',
  class: 'Rogue', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Avalon',

  // Base Stats (Level 80)
  stats: {
    hp: '8,033',
    attack: '1,305',
    defense: '530',
  },

  // Skills
  skills: {
    normal: {
      name: 'Flame Slash',
      description: 'Deals fire damage equal to 120% of Attack to enemy unit',
    },
    auto: {
      name: 'Magic Swordplay: Molten Core Burst',
      cooldown: '5.0s',
      description:
        'Deals fire damage equal to 780% of Attack to enemy unit and applies [Mark]. When Merlin uses ultimate skill or attacks targets with [Mark], damage increases by 20%',
    },
    ultimate: {
      name: "Magic Swordplay: King's Sword",
      energyCost: '6',
      description:
        'Deals fire damage equal to 1080% of Attack to enemy unit. After [buffer] uses ultimate skill, can activate [Enhanced Ultimate Skill] once within 5 seconds. [Enhanced Ultimate Skill]: Deal 1200% attack power Fire damage to target enemy unit. When there is only one enemy unit on the field, damage is additionally increased by 30% ',
    },
    passive: {
      name: 'Rune Oscillation',
      description:
        'When ultimate skill critically hits, additionally deals Fire damage equal to 120% attack power',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    description:
      'Self critical rate increased by 7.5%. At the start of battle, every 15% critical hit rate can increase own critical hit damage by 7.5%, maximum 6 times',
    requirements: {
      faction: 'Avalon',
      element: 'Fire',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: 'Critical rate increased by 15%.',
    },
    {
      level: 2,
      effect:
        'After [debuffer] uses ultimate skill, can also activate [Enhanced Ultimate Skill] once within 5 seconds. When activating [Enhanced Ultimate Skill], critical hit damage increases by 20%',
    },
    { level: 3, effect: '[Skills] and [Normal Attack] level and level cap +4' },
    {
      level: 4,
      effect: 'Ultimate skill damage increased by 35%',
    },
    { level: 5, effect: '[Must Kill] and [Passive] level and level cap +4' },
    {
      level: 6,
      effect: '[Enhanced Ultimate Skill] ignores targets 20% elemental resistance',
    },
  ],

  // Memory Card
  memoryCard: {
    name: "King's Sword",
    image: 'Merlincard', // Memory card image identifier
    stats: {
      hp: '5,280',
      attack: '857',
      defense: '348',
    },
    effects: [
      'Attack power increased by 40%, When there is only one enemy on the field, ultimate skill damage increased by 40%',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Melee', 'Crit Dmg', 'Enhanced Ultimate', 'Crit Rate', 'Damage Increase'],
};

// SEO data for Merlin
export const merlinSEO = {
  title: `${merlinData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${merlinData.name}, a ${merlinData.rarity} ${merlinData.element} ${merlinData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default merlinData;
