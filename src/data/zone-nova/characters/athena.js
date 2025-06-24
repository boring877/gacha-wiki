// Athena Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const athenaData = {
  // Basic Character Information
  name: 'Athena',
  image: 'Athena', // Use format: charactername (e.g., 'penny')
  rarity: 'SSR', // SSR, SR, R
  element: 'Wind', // Fire, Ice, Wind, Holy, Chaos
  class: 'Buffer', // Tank, DPS, Buffer, Debuffer, Healer
  faction: 'Otis', // Savir, etc.
  
  // Base Stats (Level 80)
  stats: {
    hp: '9,564', // e.g., '10,520'
    attack: '1,004', // e.g., '794'
    defense: '672' // e.g., '1,232'
  },
  
  // Skills
  skills: {
    normal: {
      name: 'Shadowless Snipe (无影狙击)',
      description: 'Deals 120% attack power wind damage to designated enemy unit. 1.0s cooldown. Core mechanism for building [Typical] stacks.'
    },
    auto: {
      name: 'Military Command (军神号令)',
      cooldown: '5.0s', // e.g., '5.0s'
      description: 'Attacks designated enemy unit 3 times, dealing 3×120% attack power wind damage. Total 360% attack power damage output.'
    },
    ultimate: {
      name: "Athena's Aegis (雅典娜的埃癸斯)",
      energyCost: '3', // e.g., '5'
      description: 'Immediately gains 3 layers [Aegis] (6 with Awakening 2). When having [Aegis], normal attacks become full auto mode, continuously firing strengthening bullets. Each layer fires 12 bullets (60% attack power wind damage each). Every 5 bullet hits grant all allies +2.4% crit rate and +4.6% normal attack damage (max 10 stacks, 10s duration).'
    },
    passive: {
      name: 'Divine Combat Mastery (被动)',
      description: 'All damage from Athena is considered normal attack damage. Every 10 normal attacks by Athena gains 1 layer [Typical]. When allies deal normal attack damage, Athena gains 1 layer [Typical] (max once per character per second). Every 10 layers [Typical] grants all team +1 energy.'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'Combination Skill', // Usually 'Combination Skill'
    description: 'Team includes 2 [Olympus] or 2 [Wind] characters to trigger. Battle start: All team defense +10%. For every 500 attack power, all team defense additionally +5% (max 6 times, total +40% defense).',
    requirements: {
      faction: 'Olympus', // Same as character faction
      element: 'Wind' // Same as character element
    }
  },
  
  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'When allies deal normal attack damage, Athena gets 1 additional layer [Typical] per normal attack (cannot stack, max once per character per second)' },
    { level: 2, effect: 'Using ultimate skill gains 6 layers [Aegis] instead of 3' },
    { level: 3, effect: '[Normal Attack], [Skill], [Ultimate] and [Passive] level cap +2' },
    { level: 4, effect: 'When Athena has [Aegis], all allies receive 10% less damage, strikers receive additional 10% less damage (total 20% for strikers)' },
    { level: 5, effect: '[Normal Attack], [Skill], [Ultimate] and [Passive] level cap +2' },
    { level: 6, effect: "Athena's strengthening bullets deal double damage (120% attack power per bullet)" }
  ],
  
  // Memory Card
  memoryCard: {
    name: 'Embarrassing Pattern (尴尬模样)',
    image: 'Athenacard', // Use format: characternamecard (e.g., 'pennycard')
    stats: {
      hp: '6,000', // e.g., '8,600'
      attack: '600', // e.g., '480'
      defense: '600' // e.g., '690'
    },
    effects: [
      'After battle start: All allies defense +40%, normal attack damage +40%',
      'When equipped character deals 5 normal attack damage: All team attack power +40% for 5 seconds'
    ]
  }
};

// SEO data for Athena
export const athenaSEO = {
  title: `${athenaData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${athenaData.name}, a ${athenaData.rarity} ${athenaData.element} ${athenaData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`
};

// Export default for easy importing
export default athenaData; 