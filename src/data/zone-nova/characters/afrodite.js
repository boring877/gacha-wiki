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
      description: 'Deals 120% attack power as holy damage to designated enemy unit.',
    },
    auto: {
      name: 'Charm Impact (魅惑冲拳)',
      cooldown: '8.0s', // e.g., '5.0s'
      description:
        'Automatically deals 816% attack power as holy damage to designated enemy. Increases self attack speed by 58%.',
    },
    ultimate: {
      name: 'Love and Beauty Waltz (爱与美之圆舞曲)',
      energyCost: '8', // e.g., '5'
      description:
        'Normal Ultimate: Deals 1800% attack power as holy damage to designated enemy. Enhanced Ultimate (after 10 normal attacks): Deals 2160% attack power as holy damage to designated enemy, recovers 2 energy at the end, Counts as a basic-attack hit for any on-hit or combo effects.',
    },
    passive: {
      name: 'Beautiful Kill (美丽杀意)',
      description:
        'When HP is higher then 50%: +48 % Crit Rate on all outgoing damage. When HP is lower then 50%: +96 % Defense when taking damage.',
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
        'When you using auto skill (Self) it counts as 4 extra basic-attack hits toward the Enhanced Ultimate counter.',
    },
    { level: 2, effect: 'When using ultimate or auto skill: Damage taken reduced by 10%' },
    { level: 3, effect: '[Skills] and [Normal Attack] level and level cap +4' },
    { level: 4, effect: 'Normal attack damage increased by 35%' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    { level: 6, effect: '[Enhanced Ultimate] ignores 20% Holy resistance' },
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
      'If the equipped units Ultimate costs higher then 8 Energy and used ultimate : Damage increased by 40% for 10 seconds',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Crit Rate', 'Atk Speed', 'Normal Atk', 'Melee'],
};

// SEO data for Afrodite
export const afroditeSEO = {
  title: `${afroditeData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${afroditeData.name}, a ${afroditeData.rarity} ${afroditeData.element} ${afroditeData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default afroditeData;
