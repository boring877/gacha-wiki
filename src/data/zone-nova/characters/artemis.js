// Artemis Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const artemisData = {
  // Basic Character Information
  name: 'Artemis',
  image: 'Artemis', // Use format: charactername (e.g., 'penny')
  rarity: 'SSR', // SSR, SR, R
  element: 'Wind', // Fire, Ice, Wind, Holy, Chaos
  class: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer
  faction: 'Olympus', // Savir, etc.

  // Base Stats (Level 80)
  stats: {
    hp: '8,033', // e.g., '10,520'
    attack: '1,461', // e.g., '794'
    defense: '530', // e.g., '1,232'
  },

  // Skills
  skills: {
    normal: {
      name: 'Moon Rising Fist',
      description:
        'Deals 120% attack power as wind damage to designated enemy unit. Standard attack scaling for consistent damage output.',
    },
    auto: {
      name: 'Moon Ancient Boxing',
      cooldown: '5.0s', // e.g., '5.0s'
      description:
        'Automatically deals 240% attack power as wind damage to designated enemy and nearby enemies. Each hit restores 10% max HP. AoE damage with built-in sustain mechanism that triggers automatically.',
    },
    ultimate: {
      name: 'Silver Moon Judgment',
      energyCost: '3', // e.g., '5'
      description:
        'Consumes 50% current HP. Teleports in front of designated enemy. Deals 264% attack power as wind damage to target and nearby enemies. High-risk, high-reward ability that activates low-HP bonuses.',
    },
    passive: {
      name: 'Moon Shadow Hunt',
      description:
        "When HP is below 50%: All attacks deal additional 60% attack power as wind damage. Core low-HP mechanic that significantly amplifies damage output. Synergizes with ultimate's HP consumption.",
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill', // Usually 'Combination Skill'
    description:
      'Self max HP increased by 10%. At battle start: For every 4,000 max HP, increase self attack power by 5% (maximum 6 times). Maximum scaling: 30% attack power boost at 24,000+ max HP.',
    requirements: {
      faction: 'Olympus', // Same as character faction
      element: 'Wind', // Same as character element
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'Attack power increased by 20%.' },
    { level: 2, effect: 'When HP is below 50%: Damage taken reduced by 10%.' },
    { level: 3, effect: '[Skills] and [Normal Attack] level and level cap +4.' },
    { level: 4, effect: 'Wind damage increased by 35%.' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4.' },
    { level: 6, effect: 'When HP is below 50%: All damage ignores 20% elemental resistance.' },
  ],

  // Memory Card
  memoryCard: {
    name: 'The World Seems to Have Stopped',
    image: 'Artemiscard', // Use format: characternamecard (e.g., 'pennycard')
    stats: {
      hp: '5,040', // e.g., '8,600'
      attack: '780', // e.g., '480'
      defense: '474', // e.g., '690'
    },
    effects: ['Attack power increased by 40%', 'When HP is below 50%: All damage increased by 40%'],
  },
};

// SEO data for Artemis
export const artemisSEO = {
  title: `${artemisData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${artemisData.name}, a ${artemisData.rarity} ${artemisData.element} ${artemisData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default artemisData;
