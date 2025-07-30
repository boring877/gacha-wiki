// Belphegar Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const belphegarData = {
  // Basic Character Information
  name: 'Belphegar',
  image: 'belphegar', // Use format: charactername (e.g., 'penny')
  rarity: 'SR', // SSR, SR, R
  element: 'Chaos', // Fire, Ice, Wind, Holy, Chaos
  class: 'Debuffer', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'Debuffer', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Bicta Tower', // Savir, etc.

  // Base Stats (Level 80)
  stats: {
    hp: '7,970', // e.g., '10,520'
    attack: '837', // e.g., '794'
    defense: '560', // e.g., '1,232'
  },

  // Skills
  skills: {
    normal: {
      name: 'Fatigue Bombardment',
      description: 'Deals chaos damage equal to 120% of Attack to designated enemy unit.',
    },
    auto: {
      name: 'Power of the Blanket',
      cooldown: '5.0s', // e.g., '5.0s'
      description:
        'Attack the enemy target with the highest attack power, dealing 120% attack power chaos damage and reducing their critical rate and critical damage by 24%, lasting 10 seconds.',
    },
    ultimate: {
      name: 'Drowsy Sleep',
      energyCost: '5', // e.g., '5'
      description:
        ' Deal 120% attack power chaos damage to all targets and increase targets auto skill cooldown time by 58%, lasting 10 seconds',
    },
    passive: {
      name: 'Sleepy Aura',
      description:
        "When dealing damage with skills or ultimate skills, additionally applies [Wrath], reducing target's attack speed by 58%, lasting 10 seconds.",
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill', // Usually 'Combination Skill'
    description: 'Own damage dealt increases by 20%.',
    requirements: {
      faction: 'Bicta Tower', // Same as character faction
      element: 'Chaos', // Same as character element
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect:
        'When using auto skills to attack targets that have negative effects on them, skill damage increases by 30%',
    },
    { level: 2, effect: 'Basic attacks additionally deal 20% attack power chaos damage.' },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4.' },
    { level: 4, effect: 'Attack power increases by 20%.' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4.' },
    {
      level: 6,
      effect:
        'Ultimate skill can additionally reduce the targets ultimate skill damage by 20%, lasting 5 seconds.',
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Sleepy Guardian',
    image: 'Belphegarcard', // Use format: characternamecard (e.g., 'pennycard')
    stats: {
      hp: '5,200', // e.g., '8,600'
      attack: '420', // e.g., '480'
      defense: '380', // e.g., '690'
    },
    effects: [' Ultimate skill can reduce targets energy regen by 18%'],
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'Range',
    'Reduce Crit Rate',
    'Reduce Crit Dmg',
    'Inc Skill Cooldown',
    'Reduce Attack Speed',
    'Reduce Ultimate Skill',
    'Debuff',
    'AOE',
  ],
};

// SEO data for Belphegar
export const belphegarSEO = {
  title: `${belphegarData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${belphegarData.name}, a ${belphegarData.rarity} ${belphegarData.element} ${belphegarData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default belphegarData;
