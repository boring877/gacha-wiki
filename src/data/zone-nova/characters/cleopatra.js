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
        'Deal 168% attack power chaos damage to target and surrounding area within 4 meters, and apply one stack of [Shifting Sorrow]',
    },
    ultimate: {
      name: 'Cultural Authority - Supreme Rule',
      energyCost: '8',
      description:
        'After channeling for 4 seconds, deal 480% attack power chaos damage to all targets If targets already have one stack of continuous damage, additionally deal 48% attack power chaos damage, up to 20 times Ultimate skill damage is considered continuous damage type',
    },
    passive: {
      name: 'Filthy Whispers',
      description:
        'Every time a auto skill is cast, gain 2 stacks of [Shifting], maximum can accumulate to 5 stacks When allies use ultimate skills and deal damage, can consume [Shifting] to additionally deal 120% attack power chaos damage to their target and apply one stack of [Shifting Sorrow] to hit targets. Area attacks can trigger multiple marks simultaneously. [Shifting Sorrow]: Every 3 seconds deal 19.2% attack power chaos damage, maximum can stack to 10 times',
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
        'When casting ultimate skill, damage taken decreases by 20% After casting ultimate skill, recover 2 energy points',
    },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4' },
    { level: 4, effect: '[Continuous damage] damage increases by 35%' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    { level: 6, effect: 'Continuous damage ignores 20% chaos resistance' },
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
      'Attack power increases by 40%. Apply one stack of [Erosion] After skills hit targets. [Erosion]: Every 1 second deal 15% chaos damage, maximum can stack to 5 times, lasting 10 seconds',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'DOT', 'AOE', 'Penetration', 'Energy'],
};

// SEO data for Cleopatra
export const cleopatraSEO = {
  title: `${cleopatraData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${cleopatraData.name}, a ${cleopatraData.rarity} ${cleopatraData.element} ${cleopatraData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default cleopatraData;
