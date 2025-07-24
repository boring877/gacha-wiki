// Naiya Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const naiyaData = {
  // Basic Character Information
  name: 'Naiya',
  image: 'Naiya', // Character image identifier
  rarity: 'SSR',
  element: 'Ice',
  class: 'Buffer', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'Buffer', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Sapphire',

  // Base Stats (Level 80)
  stats: {
    hp: '9,564',
    attack: '1,004',
    defense: '672',
  },

  // Skills
  skills: {
    normal: {
      name: 'Frost Strike',
      description: 'Deals 120% attack power as ice damage to designated enemy unit',
    },
    auto: {
      name: 'War Intent Detection',
      cooldown: 'Auto-trigger: 5.0s',
      description:
        'The friendly character with the highest attack power gains [Battle Intent]. Increases attack power by 168%, but the increased attack power cannot exceed 84% of their base field attack power. Lasts 15 seconds',
    },
    ultimate: {
      name: 'Hyper-Carry Awakening',
      energyCost: '3',
      description:
        "Deals 480% attack power frost damage to designated enemy unit. [Interrupts] their casting skill. Increases all friendly units' attack power by 36% and crit damage by 53.6% for 10 seconds",
    },
    passive: {
      name: 'Tactical Analysis',
      description:
        'When a character with [Battle Intent] kills an enemy, damage increases by 17% for 10 seconds, max 3 stacks. Immediately recovers 1 energy point for the entire team, can trigger once per second maximum',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill (组合技)',
    description:
      'Team includes 2 [Sapphire] characters or 2 [Ice] characters to trigger. Battle Start: All team damage +10%. Scaling: Every 500 attack power, all team damage additionally +5%, max 6 times',
    requirements: {
      faction: 'Sapphire',
      element: 'Ice',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect:
        "After using ultimate: All friendly units' attack power increased by 20% for 20 seconds. ",
    },
    {
      level: 2,
      effect:
        'When characters with [War Intent] defeat an enemy: Recovers 1 energy for the team. Triggers at most once per battle.',
    },
    { level: 3, effect: 'Skill and Normal Attack: Level and level cap increased by +4' },
    {
      level: 4,
      effect:
        'Characters with [War Intent] when attacking: Deal an additional 500% attack power as ice damage. Triggers at most once every 10 seconds. ',
    },
    { level: 5, effect: 'Ultimate Skill and Passive: Level and level cap increased by +4' },
    {
      level: 6,
      effect:
        'Ultimate skill duration extended to 20 seconds. Damage multiplier increased by 100%. ',
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Frost Dominion',
    image: 'naiyacard', // Memory card image identifier
    stats: {
      hp: '6,000',
      attack: '600',
      defense: '600',
    },
    effects: [
      'Attack power increased by 40%',
      'Team Must-Kill Damage increased by 40% for 5 seconds after Ultimate: Enhances team finishing power after ultimate usage',
    ],
  },
};

// SEO data for Naiya
export const naiyaSEO = {
  title: `${naiyaData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${naiyaData.name}, a ${naiyaData.rarity} ${naiyaData.element} ${naiyaData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default naiyaData;
