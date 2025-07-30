// Mordred Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const mordredData = {
  // Basic Character Information
  name: 'Mordred',
  image: 'Mordred', // Character image identifier
  rarity: 'SR',
  element: 'Fire',
  class: 'Warrior', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Avalon',

  // Base Stats (Level 80)
  stats: {
    hp: '8,470',
    attack: '837',
    defense: '560',
  },

  // Skills
  skills: {
    normal: {
      name: 'Petty Sword',
      description: 'Deals 120% attack power as Fire damage to enemy unit.',
    },
    auto: {
      name: 'Revenge Blade',
      cooldown: '5.0s',
      description: 'Deals Fire damage to designated enemy unit equal to 36% of own maximum HP.',
    },
    ultimate: {
      name: 'Destructive Fury',
      energyCost: '5',
      description:
        'Recovers 36% max HP to self. Deals Fire damage to target equal to 144% of own max HP.',
    },
    passive: {
      name: 'Deep Hatred',
      description:
        'Every normal attack recovers 5.8% max HP. When HP falls below 50%: All received healing increased by 60%.',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    description: 'Self attack increased by 10%. Healing amount increased by 12.5%.',
    requirements: {
      faction: 'Avalon',
      element: 'Fire',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: 'Damage taken reduced by 10%',
    },
    {
      level: 2,
      effect: 'Each normal attack increases own defense by 5%, can stack up to maximum 10 times',
    },
    {
      level: 3,
      effect:
        '[Auto Skill] and [Normal Attack] level and level cap +4. Increases damage output across her core abilities',
    },
    {
      level: 4,
      effect: 'HP increased by 30%.',
    },
    {
      level: 5,
      effect:
        '[Ultimate] and [Passive] level and level cap +4. Enhances her biggest nuke and sustain mechanics',
    },
    {
      level: 6,
      effect: 'Normal attacks additionally deal Fire damage equal to 5% of own max HP.',
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Behind the Regret',
    image: 'mordredcard', // Memory card image identifier
    stats: {
      hp: '5,000',
      attack: '500',
      defense: '500',
    },
    effects: ['HP increased by 24%', 'Self healing amount increased by 30%'],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Melee', 'Healing', 'HP-Scale', 'Damage Reduction'],
};

// SEO data for Mordred
export const mordredSEO = {
  title: `${mordredData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${mordredData.name}, a ${mordredData.rarity} ${mordredData.element} ${mordredData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default mordredData;
