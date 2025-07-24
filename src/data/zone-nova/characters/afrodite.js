// Afrodite Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const afroditeData = {
  // Basic Character Information
  name: 'Afrodite',
  image: 'Afrodite', // Use format: charactername (e.g., 'penny')
  rarity: 'SSR', // SSR, SR, R
  element: 'Holy', // Fire, Ice, Wind, Holy, Chaos
  class: 'Warrior', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Odius', // Savir, etc.

  // Base Stats (Level 80)
  stats: {
    hp: '8,033', // e.g., '10,520'
    attack: '1,305', // e.g., '794'
    defense: '530', // e.g., '1,232'
  },

  // Skills
  skills: {
    normal: {
      name: 'Love Fist (爱神之拳)',
      description:
        'Deals 120% attack power as holy damage to designated enemy unit. Builds toward enhanced ultimate - core mechanic for ultimate enhancement.',
    },
    auto: {
      name: 'Charm Impact (魅惑冲拳)',
      cooldown: '8.0s', // e.g., '5.0s'
      description:
        'Automatically deals 816% attack power as holy damage to designated enemy. Increases self attack by 58%. High damage auto skill with substantial self-buffing component.',
    },
    ultimate: {
      name: 'Love and Beauty Waltz (爱与美之圆舞曲)',
      energyCost: '8', // e.g., '5'
      description:
        'Normal Ultimate: Deals 1800% attack power as holy damage to designated enemy. Enhanced Ultimate (after 10 normal attacks): Deals 2160% attack power as holy damage to designated enemy, recovers 2 energy at the end, damage converted to normal attack damage. Core mechanic: Build up through normal attacks for maximum damage.',
    },
    passive: {
      name: 'Beautiful Kill (美丽杀意)',
      description:
        'When HP > 50%: All attacks deal additional 48% attack power as violent damage. When HP < 50%: Damage taken reduced by 96%. Dual-phase passive that provides offensive power when healthy, defensive power when injured.',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill', // Usually 'Combination Skill'
    description:
      'Self attack power increased by 10%. At battle start: For every 500 attack power, increase self holy damage by 5% (maximum 6 times). Maximum scaling: 30% holy damage boost at 3,000+ attack power.',
    requirements: {
      faction: 'Odius', // Same as character faction
      element: 'Holy', // Same as character element
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect:
        'When using skill: Can accumulate 4 times to strengthen the required normal attack count for enhanced ultimate',
    },
    { level: 2, effect: 'When using enhanced ultimate and skill: Damage taken reduced by 10%' },
    { level: 3, effect: '[Skills] and [Normal Attack] level and level cap +4' },
    { level: 4, effect: 'Normal attack damage increased by 35%' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    { level: 6, effect: '[Enhanced Ultimate] ignores 20% elemental resistance' },
  ],

  // Memory Card
  memoryCard: {
    name: 'Secret Garden',
    image: 'Afroditecard', // Use format: characternamecard (e.g., 'pennycard')
    stats: {
      hp: '6,400', // e.g., '8,600'
      attack: '784', // e.g., '480'
      defense: '318', // e.g., '690'
    },
    effects: [
      'Attack power increased by 40%',
      'When equipped character releases enhanced ultimate or higher: Damage increased by 40% for 10 seconds',
    ],
  },
};

// SEO data for Afrodite
export const afroditeSEO = {
  title: `${afroditeData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${afroditeData.name}, a ${afroditeData.rarity} ${afroditeData.element} ${afroditeData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default afroditeData;
