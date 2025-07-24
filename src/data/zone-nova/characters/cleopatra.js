// Cleopatra Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const cleopatraData = {
  // Basic Character Information
  name: 'Cleopatra',
  image: 'Cleopatra', // Character image identifier
  rarity: 'SSR',
  element: 'Chaos',
  class: 'Mage', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Chemic',

  // Base Stats (Level 80)
  stats: {
    hp: '8,033',
    attack: '1,461',
    defense: '530',
  },

  // Skills
  skills: {
    normal: {
      name: 'Mad Shadow Erosion',
      description: 'Deals chaos damage equal to 120% of Attack to designated enemy',
    },
    auto: {
      name: 'Praise of Heretic Sect',
      cooldown: '5.0s',
      description:
        'Deals chaos damage equal to 168% of Attack to target and surrounding 4-meter range. Adds one layer of [Deception] debuff. With Memory Card: Additionally adds one layer of [Infiltration]',
    },
    ultimate: {
      name: 'Cultural Authority - Supreme Rule',
      energyCost: '8',
      description:
        '4-second channeling time. Deals chaos damage equal to 480% of Attack to all targets. If target has persistent damage layers: Additionally deals 48% Attack chaos damage up to 20 times. All ultimate damage is treated as persistent damage type',
    },
    passive: {
      name: 'Filthy Whispers',
      description:
        'Each skill use grants one [Whisper] layer (maximum 5 layers). When team members use ultimates: Can consume [Whisper] to deal additional 120% Attack chaos damage + add one [Deception] layer. [Deception]: Every 3 seconds deals 19.2% Attack chaos damage, maximum 10 layers',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    description:
      'Self attack power increases by 10%. Battle start: Every 500 attack adds 3% penetration rate, maximum 6 times. Maximum penetration bonus: 18% (at 3,000+ attack)',
    requirements: {
      faction: 'Chemic',
      element: 'Chaos',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'Attack power increases by 20%' },
    {
      level: 2,
      effect:
        'When releasing ultimate: Damage taken reduced by 20%. After releasing ultimate: Recover 2 energy',
    },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4' },
    { level: 4, effect: '[Persistent Damage] damage increases by 35%' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    { level: 6, effect: "Persistent damage ignores target's 20% chaos resistance" },
  ],

  // Memory Card
  memoryCard: {
    name: 'Revolutionary Restructuring',
    image: 'Cleopatracard',
    stats: {
      hp: '5,040',
      attack: '780',
      defense: '474',
    },
    effects: [
      'Attack increases by 40%',
      'Infiltration Effect: When skill hits target, additionally adds one layer [Infiltration]',
      '[Infiltration]: Every 2 seconds deals 15% Chaos damage, maximum 5 layers, lasts 10 seconds',
    ],
  },
};

// SEO data for Cleopatra
export const cleopatraSEO = {
  title: `${cleopatraData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${cleopatraData.name}, a ${cleopatraData.rarity} ${cleopatraData.element} ${cleopatraData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default cleopatraData;
