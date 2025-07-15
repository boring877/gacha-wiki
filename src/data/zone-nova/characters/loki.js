// Loki Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const lokiData = {
  // Basic Character Information
  name: 'Loki',
  image: 'Loki', // Character image identifier
  rarity: 'SSR',
  element: 'Chaos',
  class: 'Debuffer',
  faction: 'Huájiān',

  // Base Stats (Level 80)
  stats: {
    hp: '9,564',
    attack: '1,004',
    defense: '672',
  },

  // Skills
  skills: {
    normal: {
      name: 'Netherworld Fire',
      description: 'Deals chaos damage equal to 120% of Attack to designated enemy',
    },
    auto: {
      name: "Jormungandr's Poison",
      cooldown: '10.0s',
      description:
        'Deals 120% attack power chaos damage to all enemies. Applies [Seal] debuff: Prevents skill usage for 5 seconds. AoE Control: Massive team disruption through skill lockdown',
    },
    ultimate: {
      name: 'Woeful Wrath',
      energyCost: '5',
      description:
        "Tactical Teleport: Instantly teleports to enemy with highest base attack power. Deals 240% attack power chaos damage and applies [Chaos]. [Chaos] Effect: Target's damage reduced by 36% for 10 seconds. Auto-Return: Automatically returns to original position when completed",
    },
    passive: {
      name: 'Art of Deception',
      description:
        'Vulnerability Stacking & Damage Amplification: All attacks make targets take +36% increased damage for 5 seconds. Refreshable Duration: New applications refresh the timer. Maximum Stacks: 2 layers (72% increased damage at full stacks). Universal Application: Works with all damage sources from Loki',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    description:
      'Self damage increased by 20%. Enhances offensive capabilities for sustained debuff application',
    requirements: {
      faction: 'Huájiān',
      element: 'Chaos',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect:
        'Normal attacks and skills can additionally trigger passive skill effects. Increases passive vulnerability application opportunities',
    },
    {
      level: 2,
      effect:
        'When taking damage, attacker takes 10% less damage for 5 seconds. Can be refreshed with new applications. Provides defensive utility',
    },
    { level: 3, effect: '[Skills] and [Normal Attack] level and level cap +4' },
    {
      level: 4,
      effect:
        'When attacking enemies with debuff status, damage increases by 35%. Massive damage boost against debuffed targets',
    },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    {
      level: 6,
      effect:
        'Passive damage effects can stack up to 2 layers. Enables maximum vulnerability stacking potential for 72% increased damage',
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'True Order (真正的秩序)',
    image: 'Lokicard', // Memory card image identifier
    stats: {
      hp: '6,000',
      attack: '600',
      defense: '600',
    },
    effects: [
      'Attack Enhancement: Attack power increased by 40%',
      'Vulnerability Mark: The last enemy hit by any attack takes 24% increased damage',
    ],
  },
};

// SEO data for Loki
export const lokiSEO = {
  title: `${lokiData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${lokiData.name}, a ${lokiData.rarity} ${lokiData.element} ${lokiData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default lokiData;
