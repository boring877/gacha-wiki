// Lancelot Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const lancelotData = {
  // Basic Character Information
  name: 'Lancelot',
  image: 'Lancelot', // Character image identifier
  rarity: 'SR',
  element: 'Holy',
  class: 'Guardian', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'Tank', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Avalon',

  // Base Stats (Level 80)
  stats: {
    hp: '10,857',
    attack: '612',
    defense: '957',
  },

  // Skills
  skills: {
    normal: {
      name: 'Lake Sword',
      description: 'Deals holy damage to designated enemy unit equal to 12% of own maximum HP',
    },
    auto: {
      name: 'Lake Sacred Shield',
      cooldown: '4.0s',
      description:
        'Adds a [Shield] equal to 5.1% of max HP to self. [Shield] can stack up to 30% of HP limit. Provides continuous defensive layering',
    },
    ultimate: {
      name: "Blooming Knight's Flower",
      energyCost: '3',
      description:
        'Immediately moves in front of specified enemy unit. All team characters receive 24% less damage for 15 seconds. Provides crucial team-wide damage reduction',
    },
    passive: {
      name: "Lake Spirit's Blessing",
      description:
        'When HP drops below 50% after taking damage: Recover 9.6% of maximum HP every 3 seconds. Effect lasts for 15 seconds. Provides excellent sustain in critical moments',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    description:
      'Own maximum HP increased by 10%. Defense increased by 10%. Enhances both survivability and damage output since abilities scale with HP',
    requirements: {
      faction: 'Avalon',
      element: 'Holy',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'Defense increased by 45%' },
    {
      level: 2,
      effect:
        'When attacked, if [the character] has a shield, damage received is reduced by 10%. Synergizes perfectly with her auto-skill shield generation',
    },
    { level: 3, effect: '[Skills] and [Normal Attack] level and level cap +4' },
    { level: 4, effect: 'HP increased by 30%' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    {
      level: 6,
      effect:
        "Recovery amount from passive effect increased by 100%. Doubles the healing from Lake Spirit's Blessing (9.6% → 19.2% HP recovery)",
    },
  ],
  // Memory Card
  memoryCard: {
    name: 'Lancelot-HerTrainer',
    image: 'Lancelotcard', // Memory card image identifier
    stats: {
      hp: '5,500',
      attack: '400',
      defense: '575',
    },
    effects: [
      'Only effective for Guardian class',
      '5th Stage Awakening',
      'Ability: Knight of the Tidal Lake (潮水的湖中骑士)',
      'Passive: Defense increased by 36%',
      'Team Buff: After entering battle, all allied characters take 8% less damage',
      'Note: Same skill effects cannot stack',
    ],
  },
};

// SEO data for Lancelot
export const lancelotSEO = {
  title: `${lancelotData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${lancelotData.name}, a ${lancelotData.rarity} ${lancelotData.element} ${lancelotData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default lancelotData;
