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

  // Basic Stats (at max level)
  stats: {
    // Basic Stats
    strength: 11,
    technic: 13,
    intelligence: 6,
    vitality: 14,
    agility: 9,

    // Key Combat Stats
    meleeAtk: 140,
    rangedAtk: 166,
    magicAtk: 76,
    maxHp: 896,
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
    blockRate: 0,
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
      'Raises the greatsword and assumes a counterattack stance. Enters <b>[Counterattack Posture]</b> until the start of the next round, increasing CRIT rate by {30,33,36,39,42,45,48,51,54,57}% and performing counterattacks regardless of the base number of counterattacks.',
      tags: ['Stance', 'Counterattack', 'Critical', 'Self-Buff'],
      gameKey: 'ThousandArmed',
    },
    {
      name: 'Taunting Roar',
      type: 'Active',
      level: '10/10',
      apCost: 15,
      cooldown: '3R',
      damage: 'Magic ATK 57%',
      description:
      'Plant your sword into the ground and unleash a roar. Deals Crush DMG equal to N% of Magic ATK in a 5m circular AoE. Enemies hit are inflicted with <b>[Taunt]</b> for 2 rounds and have all ATK reduced by {20,22,24,26,28,30,32,34,36,38}% for 2 rounds. Your <u>Aggro Adjustment</u> increases for the duration. This attack temporarily increases Accuracy by 300%.',
      tags: ['AoE', 'Crush', 'Taunt', 'ATK Debuff', 'Accuracy Boost'],
      gameKey: 'CryOfProvoke',
    },
    {
      name: 'Split the Crown',
      type: 'Active',
      level: '10/10',
      apCost: 60,
      cooldown: '2R',
      damage: 'Melee ATK 190%',
      description:
      'Strikes downward with a greatsword to deliver a powerful blow. Deals Slash DMG equal to N% of Melee ATK. This skill\'s Slash Boost increases proportionally to missing HP, up to 200% for the turn it\'s used. If this skill defeats an enemy, restores {40,44,48,52,56,60,64,68,72,76}% of Max HP as HP Recovery.',
      tags: ['Melee', 'Slash', 'Execute', 'HP Recovery', 'Missing HP Scaling'],
      gameKey: 'CrownSplitting',
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
  detailUrl: '/guides/horizon-walker/mercenaries/grrik/',

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
  heroId: 22,
  rarityStages: {
    'EX': {
      strength: 11,
      technic: 9,
      intelligence: 6,
      vitality: 13,
      agility: 8,
      maxHp: 832,
      meleeAtk: 140,
      rangedAtk: 115,
      magicAtk: 76,
      evade: 102,
      apRecovery: 100,
      startingAp: 126
    },
    'EX 1': {
      strength: 11,
      technic: 10,
      intelligence: 6,
      vitality: 13,
      agility: 8,
      maxHp: 832,
      meleeAtk: 140,
      rangedAtk: 128,
      magicAtk: 76,
      evade: 102,
      apRecovery: 100,
      startingAp: 126
    },
    'EX 2': {
      strength: 11,
      technic: 10,
      intelligence: 6,
      vitality: 13,
      agility: 9,
      maxHp: 832,
      meleeAtk: 140,
      rangedAtk: 128,
      magicAtk: 76,
      evade: 115,
      apRecovery: 102,
      startingAp: 128
    },
    'EX 3': {
      strength: 11,
      technic: 11,
      intelligence: 6,
      vitality: 13,
      agility: 9,
      maxHp: 832,
      meleeAtk: 140,
      rangedAtk: 140,
      magicAtk: 76,
      evade: 115,
      apRecovery: 102,
      startingAp: 128
    },
    'EX 4': {
      strength: 11,
      technic: 11,
      intelligence: 6,
      vitality: 14,
      agility: 9,
      maxHp: 896,
      meleeAtk: 140,
      rangedAtk: 140,
      magicAtk: 76,
      evade: 115,
      apRecovery: 102,
      startingAp: 128
    },
    'EX 5': {
      strength: 11,
      technic: 12,
      intelligence: 6,
      vitality: 14,
      agility: 9,
      maxHp: 896,
      meleeAtk: 140,
      rangedAtk: 153,
      magicAtk: 76,
      evade: 115,
      apRecovery: 102,
      startingAp: 128
    },
    'EX 6': {
      strength: 11,
      technic: 13,
      intelligence: 6,
      vitality: 14,
      agility: 9,
      maxHp: 896,
      meleeAtk: 140,
      rangedAtk: 166,
      magicAtk: 76,
      evade: 115,
      apRecovery: 102,
      startingAp: 128
    },
  },
};
