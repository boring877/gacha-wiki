// Horus Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const horusData = {
  // Basic Character Information
  name: 'Horus',
  image: 'Horus', // Character image identifier
  rarity: 'SSR',
  element: 'Holy',
  class: 'Debuffer', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'Debuffer', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
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
      name: 'Holy Radiance Arrow',
      description: 'Deals holy damage equal to 120% of Attack to enemy',
    },
    auto: {
      name: 'Arrow of Atum',
      cooldown: '5.0s',
      description:
        'Shoots arrows at target. Deals 120% attack power holy damage to target and 2m radius. Adds 1 layer [Piercing] to all hit enemies. [Piercing] Effect: Each layer deals 19.2% attack power holy damage every 3 seconds. Maximum Stacks: 10 layers for continuous damage for 10 seconds',
    },
    ultimate: {
      name: 'Eye of Wadjet',
      energyCost: '3',
      description:
        'Deals 480% attack power holy damage to target. Adds 1 layer [Seal] and 1 layer [Piercing]. Skill Interrupt: This Ultimate can interrupt Skill casting (Good in PVE for Boss)',
    },
    passive: {
      name: 'Solar Divine Judgment',
      description:
        ' When using skills (Ultimate & Auto skill) on targets with [Seal], consumes 1 layer and triggers area explosion (4m radius) that cause 120% attack power holy damage to targets. Hit targets gain 1 layer [Piercing]. [Piercing] Effect: Each layer deals 19.2% attack power holy damage every 3 seconds. Maximum Stacks: 10 layers for continuous damage for 10 seconds ',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    description:
      'Self attack power increases by 10%. At battle start, every 500 attack power adds 3% penetration, maximum 6 times (18% max)',
    requirements: {
      faction: 'Chemic',
      element: 'Holy',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'Attack power increased by 20%' },
    {
      level: 2,
      effect:
        'When dealing continuous damage, make the targets received continuous damage increase by 20%, lasts 3 seconds, repeated triggers can refresh the duration',
    },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4' },
    { level: 4, effect: '[Continuous Damage] effects deal +35% increased damage' },
    {
      level: 5,
      effect: '[Ultimate] and [Passive] level and level cap +4',
    },
    {
      level: 6,
      effect:
        'When dealing damage to targets that have [Continuous damage] status, gain 20% holy resistance penetration',
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Cute Little Thing',
    image: 'Horuscard',
    stats: {
      hp: '5,040',
      attack: '780',
      defense: '474',
    },
    effects: [
      ' Attack power increases by 40%. When you have (DOT) continuous damage, Target take 24% increased damage, lasts 3 seconds',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'Range',
    'DOT',
    'AOE',
    'Interrupt',
    'Debuff',
    'DOT Intake Increases',
    'Penetration',
    'Damage Increases',
  ],
};

// SEO data for Horus
export const horusSEO = {
  title: `${horusData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${horusData.name}, a ${horusData.rarity} ${horusData.element} ${horusData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default horusData;
