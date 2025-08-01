// Athena Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const athenaData = {
  // Basic Character Information
  name: 'Athena',
  image: 'Athena', // Use format: charactername (e.g., 'penny')
  rarity: 'SSR', // SSR, SR, R
  element: 'Wind', // Fire, Ice, Wind, Holy, Chaos
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
      name: 'Shadowless Snipe (无影狙击)',
      description: 'Deals 120% attack power wind damage to designated enemy unit. 1.0s cooldown.',
    },
    auto: {
      name: 'Military Command (军神号令)',
      cooldown: '5.0s', // e.g., '5.0s'
      description:
        'Attacks designated enemy unit 3 times, dealing 3×120% attack power wind damage. Total 360% attack power damage output.',
    },
    ultimate: {
      name: "Athena's Aegis (雅典娜的埃癸斯)",
      energyCost: '3', // e.g., '5'
      description:
        'Immediately gains 3 layers [Aegis]. When having [Aegis], normal attacks become full auto mode, can continuously fire Enhanced bullets during the period. Each layer [Aegis] can fire 12 Enhanced bullets. After interrupting normal attack, need to consume 1 layer [Aegis] again to reload. Each Enhanced bullet deals 60% attack power wind damage. Every 5 Enhanced bullet hits on targets, all friendly characters gain +2.4% crit rate and +4.6% normal attack damage, max 10 stacks, lasts 10 seconds',
    },

    passive: {
      name: 'Divine Combat Mastery (被动)',
      description:
        'All damage from Athena is considered normal attack damage. Every 5 normal attack damage dealt by Athena, all friendly characters gain +4.8% attack speed and skill cooldown reduced by 2.4%, max 10 stacks, lasts 10 seconds. Every 10 normal attack damage dealt by Athena, Athena gains 1 layer [Typical]. When other friendly characters deal normal attack damage, Athena gains 1 layer [Typical], each character can trigger once per second maximum. Every 10 layers [Typical] Athena gains, all team energy +1 point',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill', // Usually 'Combination Skill'
    description:
      'Battle start: All team Damage increases by 10%. For every 500 attack power, all team Damage additionally +5% (max 6 times, total +40% Damage).',
    requirements: {
      faction: 'Odius', // Same as character faction
      element: 'Wind', // Same as character element
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect:
        'After any allied characters deal basic attack damage, Athena will additionally deal 50% attack power Wind damage to that target. This damage cannot critically hit, and each character can trigger this effect at most once per second.',
    },
    { level: 2, effect: 'Using ultimate skill gains 6 layers [Aegis] instead of 3' },
    { level: 3, effect: '[Normal Attack], [Skill], [Ultimate] and [Passive] level cap +4' },
    {
      level: 4,
      effect:
        'While Athena has [Aegis] active: All allies take 10% reduced damage, Warriors and Rogues gain an additional 10% damage reduction (total 20%).',
    },
    { level: 5, effect: '[Normal Attack], [Skill], [Ultimate] and [Passive] level cap +4' },
    {
      level: 6,
      effect: "Athena's Enhanced bullets deal double damage (120% attack power per bullet)",
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Embarrassing Pattern (尴尬模样)',
    image: 'Athenacard', // Use format: characternamecard (e.g., 'pennycard')
    stats: {
      hp: '6,000', // e.g., '8,600'
      attack: '600', // e.g., '480'
      defense: '600', // e.g., '690'
    },
    effects: [
      'After battle start: All allies damage +40%, normal attack damage +40%',
      'When equipped character deals 5 normal attack damage: All team attack power +40% for 5 seconds',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'Cooldown Reduction', 'Normal Attack', 'Crit Rate', 'Energy', 'Damage Reduction'],
};

// SEO data for Athena
export const athenaSEO = {
  title: `${athenaData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${athenaData.name}, a ${athenaData.rarity} ${athenaData.element} ${athenaData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default athenaData;
