/**
 * Puppy Stepper - Horizon Walker Mercenary Data
 * Machine-type support unit with combat assistance capabilities
 */

export const puppyStepperMercenary = {
  // Basic Information
  id: 'puppy-stepper',
  name: 'Puppy Stepper',
  slug: 'puppy-stepper',
  rarity: 'B',
  cost: 3,

  // Images
  image: '/images/games/horizon-walker/characters/Puppy_Stepper.jpg',

  // Basic Stats (at max level)
  stats: {
    // Basic Stats
    strength: 10,
    technic: 9,
    intelligence: 8,
    vitality: 13,
    agility: 14,

    // Key Combat Stats
    meleeAtk: 128,
    rangedAtk: 115,
    magicAtk: 102,
    maxHp: 832,
    spd: 117,
    startingAp: 120,
    apRecovery: 115,
    accuracy: 102,
    evade: 179,
    critRate: 10,
    critDmg: 150,

    // Attribute Defense Stats
    slashBoost: 0,
    slashDef: 150,
    pierceBoost: 0,
    pierceDef: 150,
    crushBoost: 0,
    crushDef: 150,
    heatBoost: 0,
    heatDef: 0,
    coldBoost: 0,
    coldDef: 0,
    electricBoost: 0,
    electricDef: 0,
    immaterialBoost: 0,
    immaterialDef: 0,
    poisonBoost: 0,
    poisonDef: 0,
    blockRate: 150,
  },

  // Skills
  skills: [
    {
      name: 'Collide',
      type: 'Active',
      level: '10/10',
      apCost: 45,
      cooldown: '0R',
      damage: 'Melee ATK 114%',
      description:
        'Charges towards the enemy using a sturdy body. Dashes 3m, dealing Crush DMG equal to 114% of melee ATK to all enemies within a 1m radius along the path. Weakness attacks cannot be performed with this skill.',
      tags: ['Charge', 'Crush', 'AoE'],
    },
    {
      name: 'Combat Support',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description:
        "Supports allies within range by providing supplies at just the right timing. At the start of any turn, grants AP to allies within a 1.5m radius equal to 38% of the user's AP Recovery. Also, recovers HP by 0.29% of the target's max HP for each 1 point of the user's AP Recovery. The AP and HP recovery through this effect can only be granted once per round for each ally.",
      tags: ['Support', 'AP Recovery', 'HP Recovery'],
    },
    {
      name: 'Self-shock Therapy',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description:
        'At the start of battle, gains AP equal to 38 once. On a successful attack, recovers HP equal to 9.5% of own max HP.',
      tags: ['Self-Sustain', 'AP Gain', 'HP Recovery'],
    },
    {
      name: 'Rush-type Supply',
      type: 'Active',
      level: '10/10',
      apCost: 60,
      cooldown: '2R',
      damage: 'Melee ATK 190%',
      description:
        'Assumes a caterpillar form to charge fiercely to the desired location. Charges to the designated position, dealing Crush DMG equal to 190% of melee ATK to all enemies within a 1m radius along the path. Weakness attacks cannot be performed with this skill.',
      tags: ['Charge', 'Crush', 'AoE', 'Movement'],
    },
    {
      name: 'Advanced Detection',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description:
        'At the start of any turn, all allies within a 5m radius, excluding self, gain the [Advanced Detection] effect.\n\n[Advanced Detection]: Increases ACC and CRIT rate by 19%.',
      tags: ['Support', 'Buff', 'Accuracy', 'Critical'],
    },
    {
      name: 'Titanium Body',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description: 'Increases Slash DEF by 950.',
      tags: ['Defense', 'Slash Resistance'],
    },
  ],

  // Traits
  traits: [
    {
      name: 'Machine',
      type: 'Unique',
      category: 'unique',
      description: 'Machine-type unit with enhanced defensive capabilities.',
      characteristics: 'Slash DEF 150, Pierce DEF 150, Crush DEF 150',
    },
  ],

  // Usage and Notes
  usage: {
    primaryRole:
      'Support unit that provides AP and HP recovery to allies while offering modest offensive capabilities',
    strengths: [
      'Excellent team support with AP and HP recovery',
      'Good mobility with charge abilities',
      'Self-sustaining with HP recovery on attack',
      'Provides accuracy and critical buffs to team',
      'High defensive stats for survivability',
    ],
    weaknesses: [
      'Low damage output compared to dedicated damage dealers',
      'Limited range on support abilities',
      'Vulnerable to magical attacks',
      'B-rank stats limit overall effectiveness',
    ],
    bestUse: 'General trait farming and team support in lower difficulty content',
  },

  // Mercenary-specific information
  mercenaryInfo: {
    traitSource: true,
    generalTraitsAvailable: [
      'Machine traits',
      'Support-type traits',
      'Physical resistance traits',
      'AP recovery traits',
    ],
    traitTransferNotes:
      'Can be used to transfer general traits to other characters. The specific traits generated are random upon acquisition.',
    acquisitionMethod: 'Standard mercenary recruitment',
  },

  // Tags for filtering and categorization
  tags: [
    'Support',
    'Machine',
    'General Traits',
    'AP Recovery',
    'HP Recovery',
    'Charge',
    'Defense',
    'Team Buff',
    'Self-Sustain',
    'Trait Source',
  ],

  // Detail page URL
  detailUrl: '/guides/horizon-walker/mercenaries/puppy-stepper',

  // SEO and metadata
  seo: {
    title: 'Puppy Stepper - Horizon Walker Mercenary Guide | Machine Support Unit',
    description:
      'Complete guide for Puppy Stepper, a B-rank machine mercenary in Horizon Walker. Support unit with AP/HP recovery, team buffs, and general trait farming capabilities.',
    keywords: [
      'horizon walker puppy stepper',
      'puppy stepper mercenary',
      'horizon walker machine unit',
      'horizon walker support mercenary',
      'puppy stepper guide',
      'horizon walker general traits',
      'mercenary trait farming',
      'horizon walker b rank mercenary',
    ],
  },
};
