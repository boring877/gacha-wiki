// Loki Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const lokiData = {
  // Basic Character Information
  name: 'Loki',
  image: 'Loki', // Character image identifier
  rarity: 'SSR',
  element: 'Chaos',
  class: 'Debuffer', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'Debuffer', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'A.S.A',

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
        'Deal 120% attack power chaos damage to all enemy units and apply [Seal], preventing use of ultimate skills, lasting 5 seconds',
    },
    ultimate: {
      name: 'Woeful Wrath',
      energyCost: '5',
      description:
        'Rush to behind the enemy unit with the highest base attack power, deal 240% attack power chaos damage to target and apply [Weakness], reducing their damage dealt by 36%, lasting 10 seconds',
    },
    passive: {
      name: 'Art of Deception',
      description:
        ' auto skills apply 36% vulnerability debuff  for 5 seconds. Refreshable Duration: New applications refresh the timer. Maximum Stacks: 2 layers (72% increased damage at full stacks).',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    description:
      'Own attack power increases by 10%, At battle start, every 500 attack power can increase own chaos damage by 5%, up to 6 times',
    requirements: {
      faction: 'A.S.A',
      element: 'Chaos',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: 'Normal attacks and Ultimate can additionally trigger passive skill effects.',
    },
    {
      level: 2,
      effect:
        'When taking damage, make the attacker deal 10% less damage for 5 seconds, repeated triggering can refresh the duration',
    },
    { level: 3, effect: '[Skills] and [Normal Attack] level and level cap +4' },
    {
      level: 4,
      effect: 'When attacking enemies with debuff status, damage increases by 35%.',
    },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    {
      level: 6,
      effect: 'The passives vulnerability effect can stack 2 additional layers',
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
      'Attack power increases by 40% The last target that took ultimate skill damage from the equipment wearer takes 24% increased damage',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'Debuff', 'Stop Ultimate', 'Reduce Damage', 'Damage Increase'],
};

// SEO data for Loki
export const lokiSEO = {
  title: `${lokiData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${lokiData.name}, a ${lokiData.rarity} ${lokiData.element} ${lokiData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default lokiData;
