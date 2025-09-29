/**
 * War Mercenary - Horizon Walker Mercenary Data
 * Balanced warrior with defensive capabilities and team support
 */

export const warMercenaryMercenary = {
  // Basic Information
  id: 'war-mercenary',
  name: 'War Mercenary',
  slug: 'war-mercenary',
  rarity: 'B',
  cost: 4,

  // Basic Stats (at max level)
  stats: {
    // Basic Stats
    strength: 14,
    technic: 10,
    intelligence: 9,
    vitality: 13,
    agility: 12,

    // Key Combat Stats
    meleeAtk: 192,
    rangedAtk: 140,
    magicAtk: 128,
    maxHp: 832,
    spd: 92,
    startingAp: 132,
    apRecovery: 110,
    accuracy: 102,
    evade: 153,
    critRate: 10,
    critDmg: 150,

    // Attribute Defense Stats
    slashBoost: 0,
    slashDef: 0,
    pierceBoost: 0,
    pierceDef: 0,
    crushBoost: 0,
    crushDef: 0,
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
    blockRate: 0,
  },

  // Skills
  skills: [
    {
      name: 'Pole Break',
      type: 'Active',
      level: '10/10',
      apCost: 45,
      cooldown: '0R',
      damage: 'Melee ATK 114%',
      description:
        'Swings the greatsword widely to attack enemies. Deals Slash DMG equal to 114% of melee ATK to enemies in a fan-shaped area.',
      tags: ['Melee', 'Slash', 'AoE', 'Fan Shape', 'Greatsword'],
    },
    {
      name: 'Gotta Protect Myself!',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description: 'Increases block chance by 38%.',
      tags: ['Passive', 'Block Chance', 'Defense'],
    },
    {
      name: 'Formation Destruction',
      type: 'Active',
      level: '10/10',
      apCost: 60,
      cooldown: '2R',
      damage: 'Melee ATK 190%',
      description:
        'Charges towards the target with a half-swording technique, colliding forcefully, then swings the sword widely to attack surrounding enemies. Leaps low at the target, dealing Slash DMG equal to 190% of melee ATK to the target and all enemies within a 2.5m radius, and knocks them back 2.5m.',
      tags: ['Melee', 'Slash', 'AoE', 'Charge', 'Knockback', 'Half-Swording'],
    },
    {
      name: 'Crisis to Opportunity!',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description:
        'On a successful block, gains an immediate opportunity for a counterattack. During counterattack melee ATK increases by 95%.',
      tags: ['Passive', 'Block', 'Counterattack', 'Melee ATK Boost'],
    },
    {
      name: 'Declaration of Victory',
      type: 'Active',
      level: '10/10',
      apCost: 45,
      cooldown: '3R',
      description:
        "Raises the sword high and declares victory, boosting the morale of allies. Grants the [Declaration of Victory] effect to self and allies within a 5m radius for 2R.\n\n[Declaration of Victory]: Increases each target's melee ATK by 76% of the caster's melee ATK, and increases SPD by 95.",
      tags: ['Team Support', 'Buff', 'Melee ATK Boost', 'SPD Boost', 'Morale'],
    },
  ],

  // Traits
  traits: [
    {
      name: 'Marlon',
      type: 'Unique',
      category: 'unique',
      description: 'Imperial heritage providing enhanced combat capabilities.',
      characteristics: 'Strength +1, Technic +1, Intelligence +1',
    },
  ],

  // Usage and Notes
  usage: {
    primaryRole:
      'Balanced warrior mercenary with defensive capabilities and team support abilities',
    strengths: [
      'Good balance of offense and defense',
      'Strong team support with Declaration of Victory buff',
      'Reliable blocking and counterattack capabilities',
      'AoE damage potential with fan-shaped attacks',
      'Moderate deployment cost for versatile performance',
    ],
    weaknesses: [
      'No elemental resistances or special damage types',
      'Lower speed compared to specialized units',
      'Jack-of-all-trades but master of none',
      'Dependent on blocking for optimal damage output',
    ],
    bestUse: 'General trait farming and versatile team support in balanced compositions',
  },

  // Mercenary-specific information
  mercenaryInfo: {
    traitSource: true,
    generalTraitsAvailable: [
      'Warrior traits',
      'Block-type traits',
      'Team support traits',
      'Melee combat traits',
      'Imperial traits',
    ],
    traitTransferNotes:
      'Can be used to transfer general traits to other characters. The specific traits generated are random upon acquisition.',
    acquisitionMethod: 'Standard mercenary recruitment',
  },

  // Tags for filtering and categorization
  tags: [
    'Warrior',
    'Balanced',
    'General Traits',
    'Team Support',
    'Block',
    'Counterattack',
    'AoE',
    'Melee DPS',
    'Imperial',
    'Trait Source',
  ],

  // Detail page URL
  detailUrl: '/guides/horizon-walker/mercenaries/war-mercenary',

  // SEO and metadata
  seo: {
    title: 'War Mercenary - Horizon Walker Mercenary Guide | B-Rank Balanced Warrior Unit',
    description:
      'Complete guide for War Mercenary, a B-rank mercenary in Horizon Walker. Balanced warrior unit with blocking, counterattacks, team support, and general trait farming capabilities.',
    keywords: [
      'horizon walker war mercenary',
      'war mercenary guide',
      'horizon walker warrior unit',
      'horizon walker balanced mercenary',
      'war mercenary stats',
      'horizon walker general traits',
      'mercenary trait farming',
      'horizon walker b rank mercenary',
      'warrior mercenary',
    ],
  },
};
