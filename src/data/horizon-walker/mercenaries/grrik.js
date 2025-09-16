/**
 * Grrik - Horizon Walker Mercenary Data
 * Melee damage dealer with counterattack and execution capabilities
 */

export const grrikMercenary = {
  // Basic Information
  id: 'grrik',
  name: 'Grrik',
  slug: 'grrik',
  rarity: 'B',
  cost: 5,

  // Images
  image: '/images/games/horizon-walker/characters/Grrik_Mercenary.jpg',

  // Basic Stats (at max level)
  stats: {
    // Basic Stats
    strength: 17,
    technic: 7,
    intelligence: 6,
    vitality: 16,
    agility: 9,

    // Key Combat Stats
    meleeAtk: 217,
    rangedAtk: 89,
    magicAtk: 76,
    maxHp: 1024,
    spd: 92,
    startingAp: 128,
    apRecovery: 102,
    accuracy: 102,
    evade: 115,
    critRate: 10,
    critDmg: 150,

    // Attribute Defense Stats
    slashBoost: 15,
    slashDef: 50,
    pierceBoost: 15,
    pierceDef: 50,
    crushBoost: 15,
    crushDef: 50,
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
    blockRate: 50,
  },

  // Skills
  skills: [
    {
      name: "Brotherhood's Strike",
      type: 'Active',
      level: '10/10',
      apCost: 45,
      cooldown: '0R',
      damage: 'Melee ATK 114%',
      description:
        'Swings the greatsword horizontally, slashing enemies within a fan-shaped range. Deals Slash DMG equal to 114% of melee ATK.',
      tags: ['Melee', 'Slash', 'AoE', 'Fan Shape'],
    },
    {
      name: 'Thousand Arms Stance',
      type: 'Active',
      level: '10/10',
      apCost: 30,
      cooldown: '0R',
      description:
        'Raises the greatsword and assumes a counterattack stance. Enters [Counterattack Posture] until the start of the next round, increasing CRIT rate by 57% and performing counterattacks regardless of the base number of counterattacks.',
      tags: ['Stance', 'Counterattack', 'Critical', 'Self-Buff'],
    },
    {
      name: 'Taunting Roar',
      type: 'Active',
      level: '10/10',
      apCost: 15,
      cooldown: '3R',
      damage: 'Magic ATK 57%',
      description:
        'Plant your sword into the ground and unleash a roar. Deals Crush DMG equal to 57% of Magic ATK in a 5m circular AoE. Enemies hit are inflicted with [Taunt] for 2 rounds and have all ATK reduced by 38% for 2 rounds. Your Aggro Adjustment increases for the duration. This attack temporarily increases Accuracy by 300%.',
      tags: ['AoE', 'Crush', 'Taunt', 'ATK Debuff', 'Accuracy Boost'],
    },
    {
      name: 'Split the Crown',
      type: 'Active',
      level: '10/10',
      apCost: 60,
      cooldown: '2R',
      damage: 'Melee ATK 190%',
      description:
        "Strikes downward with a greatsword to deliver a powerful blow. Deals Slash DMG equal to 190% of Melee ATK. This skill's Slash Boost increases proportionally to missing HP, up to 200% for the turn it's used. If this skill defeats an enemy, restores 76% of Max HP as HP Recovery.",
      tags: ['Melee', 'Slash', 'Execute', 'HP Recovery', 'Missing HP Scaling'],
    },
  ],

  // Traits
  traits: [
    {
      name: 'Grrk',
      type: 'Unique',
      category: 'unique',
      description: 'Warrior heritage providing enhanced physical combat capabilities.',
      characteristics:
        'Slash Boost +15%, Pierce Boost +15%, Crush Boost +15%, Slash DEF +50, Pierce DEF +50, Crush DEF +50',
    },
  ],

  // Usage and Notes
  usage: {
    primaryRole: 'Melee damage dealer specializing in counterattacks and execution abilities',
    strengths: [
      'High melee attack damage (217) for strong physical DPS',
      'Powerful counterattack stance with critical rate boost',
      'AoE capabilities with fan-shaped and circular attacks',
      'Execute potential with HP-scaling damage and healing',
      'Good physical resistances across all damage types',
    ],
    weaknesses: [
      'Low speed and mobility (92 SPD)',
      'Vulnerable to magical attacks',
      'Higher deployment cost (5) for B-rank',
      'Limited ranged capabilities',
    ],
    bestUse: 'General trait farming and melee DPS in physical damage compositions',
  },

  // Mercenary-specific information
  mercenaryInfo: {
    traitSource: true,
    generalTraitsAvailable: [
      'Physical damage traits',
      'Counterattack traits',
      'Melee combat traits',
      'Critical hit traits',
      'Warrior-type traits',
    ],
    traitTransferNotes:
      'Can be used to transfer general traits to other characters. The specific traits generated are random upon acquisition.',
    acquisitionMethod: 'Standard mercenary recruitment',
  },

  // Tags for filtering and categorization
  tags: [
    'Damage Dealer',
    'Melee',
    'General Traits',
    'Counterattack',
    'Physical DPS',
    'AoE',
    'Execute',
    'Critical',
    'Taunt',
    'Warrior',
    'Trait Source',
  ],

  // Detail page URL
  detailUrl: '/guides/horizon-walker/mercenaries/grrik',

  // SEO and metadata
  seo: {
    title: 'Grrik - Horizon Walker Mercenary Guide | B-Rank Melee Damage Dealer',
    description:
      'Complete guide for Grrik, a B-rank mercenary in Horizon Walker. Melee damage dealer with counterattack stance, execution abilities, and general trait farming potential.',
    keywords: [
      'horizon walker grrik',
      'grrik mercenary',
      'horizon walker melee unit',
      'horizon walker damage dealer',
      'grrik guide',
      'horizon walker general traits',
      'mercenary trait farming',
      'horizon walker b rank mercenary',
      'counterattack mercenary',
    ],
  },
};
