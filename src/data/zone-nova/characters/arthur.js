// Arthur Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const arthurData = {
  // Basic Character Information
  name: 'Arthur',
  image: 'Arthur', // Use format: charactername (e.g., 'penny')
  rarity: 'SSR', // SSR, SR, R
  element: 'Holy', // Fire, Ice, Wind, Holy, Chaos
  class: 'Mage', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Avalon', // Savir, etc.

  // Base Stats (Level 80)
  stats: {
    hp: '8,033', // e.g., '10,520'
    attack: '1,305', // e.g., '794'
    defense: '530', // e.g., '1,232'
  },

  // Skills
  skills: {
    normal: {
      name: 'Oath Victory Sword',
      description: 'Deals holy damage equal to 120% of Attack to designated enemy.',
    },
    auto: {
      name: "King's Sword",
      cooldown: '5.0s', // e.g., '5.0s'
      description:
        'Deal 240% attack power as holy damage to front enemy unit. For each target damaged, critical damage increases by 12%, maximum 4 stacks, lasts 5 seconds',
    },
    ultimate: {
      name: 'Imperial Sacred Judgment',
      energyCost: '6', // e.g., '5'
      description:
        'Deals holy damage equal to 600% of Attack to frontal enemy units. After a Support unit uses their Ultimate, you can trigger an Enhanced Ultimate within 5 s. Enhanced Ultimate: ATK +36 % for 10 s and deal 720 % ATK Holy damage to enemies in front. ',
    },
    passive: {
      name: 'Royal Dominance',
      description:
        'Each ultimate use: Increases attack by 12% and defense by 5.6%. Maximum 3 layers, lasts 10 seconds. Full Stack Potential: 36% attack + 16.8% defense.',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill', // Usually 'Combination Skill'
    description:
      'Self critical rate increases by 7.5%. Battle start: Every 15% critical rate adds 5% holy damage, maximum 6 times. Maximum Potential: 30% holy damage increase with optimal critical rate.',
    requirements: {
      faction: 'Avalon', // Same as character faction
      element: 'Holy', // Same as character element
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'Critical rate increases by 15%.' },
    {
      level: 2,
      effect: 'When activating [Enhanced Ultimate], critical hit damage increases by 30% .',
    },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4.' },
    { level: 4, effect: 'Ultimate damage increases by 35%.' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4.' },
    { level: 6, effect: "[Enhanced Ultimate] ignores target's 20% elemental resistance." },
  ],

  // Memory Card
  memoryCard: {
    name: 'Night of Bloody Storm',
    image: 'Night-of-Bloody-Storm', // Using the actual Night of Bloody Storm image
    stats: {
      hp: '5,040', // e.g., '8,600'
      attack: '780', // e.g., '480'
      defense: '474', // e.g., '690'
    },
    effects: [
      'Attack power increased by 40%',
      "After an ally buffers uses their ultimate skill, this character's ultimate skill damage increases by 40% for 5 seconds",
      'Total Potential: 40% base attack + 40% conditional ultimate damage boost',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Melee', 'Crit Rate', 'Crit Dmg', 'Buff'],
};

// SEO data for Arthur
export const arthurSEO = {
  title: `${arthurData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${arthurData.name}, a ${arthurData.rarity} ${arthurData.element} ${arthurData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default arthurData;
