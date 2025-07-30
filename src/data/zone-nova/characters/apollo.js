// Apollo Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const apolloData = {
  // Basic Character Information
  name: 'Apollo',
  image: 'Apollo', // Use format: charactername (e.g., 'penny')
  rarity: 'SSR', // SSR, SR, R
  element: 'Fire', // Fire, Ice, Wind, Holy, Chaos
  class: 'Buffer', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'Buffer', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Odius', // Savir, etc.

  // Base Stats (Level 80)
  stats: {
    hp: '9,564', // e.g., '10,520'
    attack: '1,004', // e.g., '794'
    defense: '672', // e.g., '1,232'
  },

  // Skills
  skills: {
    normal: {
      name: 'Day Brilliance Flash',
      description: 'Deals fire damage equal to 120% of Attack to designated enemy.',
    },
    auto: {
      name: 'Divine Music Accompaniment',
      cooldown: '5.0s', // e.g., '5.0s'
      description:
        'Allied units gain 24% damage increase. [Type of Attack Called: Extra attacks] damage additionally increases by 36%.',
    },
    ultimate: {
      name: 'Day Brilliance Chanting',
      energyCost: '8', // e.g., '5'
      description:
        'Enters [Day Brilliance] state for 10 seconds. During transformation (State): Allied attack power increases by 120%, and Apollo launches an extra strike dealing 360 % ATK as fire damage when teammate use an ultimate, it will have 100% crit rate and going be counted as Extra damage type. (Rate limit: 1 Extra damage per ally every 5 s.)',
    },
    passive: {
      name: 'Brilliant Verdict',
      description:
        'Each auto skill use (Self): All allies gain 1 layer [Brilliant]. [Brilliant] Effect: +2.4% critical rate and +4.8% critical damage per layer. Maximum 10 layers (24% crit rate + 48% crit damage at full stacks). Extra Damage Synergy: Allied Extra Damage attacks grant additional [Brilliant] layers and Apollo gains 1 stack of Radiance System: gains [Radiance] Every 4 stacks +1 Energy .',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill', // Usually 'Combination Skill'
    description:
      'Battle start: Team damage increases by 10%. Every 500 attack power adds 5% team damage, maximum 6 times (30% max).',
    requirements: {
      faction: 'Odius', // Same as character faction
      element: 'Fire', // Same as character element
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect:
        'Allied characters dealing [Extra Attack] can additionally gain add [Brilliant] to Everyone. Each character can trigger once within 1 second maximum.',
    },
    { level: 2, effect: 'During [Day Brilliance] state, damage taken reduced by 50%.' },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4.' },
    {
      level: 4,
      effect:
        'During [Day Brilliance] state, allied characters gain 10% elemental resistance penetration.',
    },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4.' },
    {
      level: 6,
      effect:
        "During [Day Brilliance] state, Apollo's [Extra Attack] additionally gains 50% critical damage.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'The Loneliest Moment',
    image: 'Apollocard', // Use format: characternamecard (e.g., 'pennycard')
    stats: {
      hp: '6,000', // e.g., '8,600'
      attack: '600', // e.g., '480'
      defense: '600', // e.g., '690'
    },
    effects: [
      "Battle start: All allied characters' damage increases by 40%, Extra Attack damage additionally increases by 40%",
      "When equipped character releases ultimate That cost higher then 8: All allied characters' energy efficiency increases by 100% for 10 seconds",
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Ranged', 'Extra Attack', 'Buff', 'Energy Recovery'],
};

// SEO data for Apollo
export const apolloSEO = {
  title: `${apolloData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${apolloData.name}, a ${apolloData.rarity} ${apolloData.element} ${apolloData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default apolloData;
