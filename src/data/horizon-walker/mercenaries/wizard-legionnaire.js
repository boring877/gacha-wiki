/**
 * Wizard Legionnaire - Horizon Walker Mercenary Data
 * Fire magic specialist with area damage and ember effect mechanics
 */

export const wizardLegionnaireMercenary = {
  // Basic Information
  id: 'wizard-legionnaire',
  name: 'Wizard Legionnaire',
  slug: 'wizard-legionnaire',
  rarity: 'B',
  cost: 5,

  // Basic Stats (at max level)
  stats: {
    // Basic Stats
    strength: 7,
    technic: 10,
    intelligence: 13,
    vitality: 15,
    agility: 11,

    // Key Combat Stats
    meleeAtk: 102,
    rangedAtk: 140,
    magicAtk: 179,
    maxHp: 960,
    spd: 61,
    startingAp: 120,
    apRecovery: 107,
    accuracy: 102,
    evade: 140,
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
      name: 'Flame Arrow',
      type: 'Active',
      level: '10/10',
      apCost: 45,
      cooldown: '0R',
      damage: 'Magic ATK 114%',
      description:
      'Shoots an arrow of fire to burn the enemy. Deals Heat DMG equal to N% of magic ATK.',
      tags: ['Magic', 'Heat', 'Single Target', 'Fire Arrow'],
      gameKey: 'FireBolt',
    },
    {
      name: 'Ember',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description:
      'On a successful attack, applies the <b>[Ember]</b> effect to the enemy for 3 rounds. - <b>[Ember]</b>: Reduces Heat DEF by {200, 220, 240, 260, 280, 300, 320, 340, 360, 380}.',
      tags: ['Passive', 'Heat Debuff', 'On-Hit', 'Heat DEF Reduction', 'Duration'],
      gameKey: 'FireFlakes',
    },
    {
      name: 'Fireball',
      type: 'Active',
      level: '10/10',
      apCost: 90,
      cooldown: '1R',
      damage: 'Magic ATK 143%',
      description:
      'Launches a blazing orb of fire and causes it to explode, burning enemies. Deals Unblockable Heat DMG equal to N% of magic ATK to all enemies within a 2m circular radius. During this attack, ACC temporarily increases by 300%.',
      tags: ['Magic', 'Heat', 'AoE', 'Unblockable', 'Accuracy Boost', 'Circle AoE'],
      gameKey: 'FireBall',
    },
    {
      name: 'Fireflake Explosion',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      damage: 'Magic ATK 38%',
      description:
      'Ignites dying embers to burn enemies. At the start of the round, detonates all <b>[Ember]</b> effects on the battlefield, dealing additional Heat DMG equal to {20, 22, 24, 26, 28, 30, 32, 34, 36, 38}% of magic ATK.',
      tags: ['Passive', 'Heat', 'Ember Synergy', 'Start of Round', 'Battlefield AoE'],
      gameKey: 'FireFlakesExplosion',
    },
    {
      name: 'Blaze of Ascension',
      type: 'Active',
      level: '10/10',
      apCost: 150,
      cooldown: '3R',
      damage: 'Magic ATK 380%',
      description:
      'Commands surging flames to burn enemies in front. Deals Unblockable Heat DMG equal to N% of magic ATK to all enemies within a 3m circular radius. During the attack, ACC temporarily increases by 300%, but weakness attacks are not possible.',
      tags: [
        'Magic',
        'Heat',
        'Ultimate',
        'Unblockable',
        'Large AoE',
        'Accuracy Boost',
        'No Weakness',
      ],
      gameKey: 'SoaringFire',
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
      'Fire magic specialist with powerful area damage and ember effect synergy for battlefield control',
    strengths: [
      'Highest magic attack among all mercenaries (256)',
      'Powerful ember effect system that reduces enemy heat defense',
      'Multiple AoE abilities with unblockable damage',
      'Strong ultimate ability with massive 380% magic ATK scaling',
      'Accuracy boost abilities for reliable hit rates',
    ],
    weaknesses: [
      'Extremely low speed (61) making positioning difficult',
      'High AP costs for powerful abilities',
      'No defensive resistances or protections',
      'Vulnerable to physical attacks with low melee ATK',
      'Limited utility outside of damage dealing',
    ],
    bestUse: 'Primary magic DPS for general trait farming and fire-based team compositions',
  },

  // Mercenary-specific information
  mercenaryInfo: {
    traitSource: true,
    generalTraitsAvailable: [
      'Fire magic traits',
      'Heat damage traits',
      'Magic scaling traits',
      'AoE damage traits',
      'Imperial traits',
    ],
    traitTransferNotes:
      'Can be used to transfer general traits to other characters. The specific traits generated are random upon acquisition.',
    acquisitionMethod: 'Standard mercenary recruitment',
  },

  // Tags for filtering and categorization
  tags: [
    'Magic DPS',
    'Fire Specialist',
    'General Traits',
    'AoE Damage',
    'Heat Damage',
    'Ember Synergy',
    'High Magic ATK',
    'Imperial',
    'Trait Source',
    'Unblockable',
  ],

  // Detail page URL
  detailUrl: '/guides/horizon-walker/mercenaries/wizard-legionnaire/',

  // SEO and metadata
  seo: {
    title: 'Wizard Legionnaire - Horizon Walker Mercenary Guide | B-Rank Fire Magic Specialist',
    description:
      'Complete guide for Wizard Legionnaire, a B-rank mercenary in Horizon Walker. Fire magic specialist with ember effects, AoE damage, and general trait farming capabilities.',
    keywords: [
      'horizon walker wizard legionnaire',
      'wizard legionnaire mercenary',
      'horizon walker fire mage',
      'horizon walker magic unit',
      'wizard legionnaire guide',
      'horizon walker general traits',
      'mercenary trait farming',
      'horizon walker b rank mercenary',
      'fire magic mercenary',
    ],
  },
  heroId: 505,
  rarityStages: {
    'EX': {
      strength: 6,
      technic: 10,
      intelligence: 13,
      vitality: 11,
      agility: 10,
      maxHp: 704,
      meleeAtk: 89,
      rangedAtk: 140,
      magicAtk: 179,
      evade: 128,
      apRecovery: 105,
      startingAp: 118
    },
    'EX 1': {
      strength: 6,
      technic: 10,
      intelligence: 13,
      vitality: 12,
      agility: 10,
      maxHp: 768,
      meleeAtk: 89,
      rangedAtk: 140,
      magicAtk: 179,
      evade: 128,
      apRecovery: 105,
      startingAp: 118
    },
    'EX 2': {
      strength: 6,
      technic: 10,
      intelligence: 13,
      vitality: 13,
      agility: 10,
      maxHp: 832,
      meleeAtk: 89,
      rangedAtk: 140,
      magicAtk: 179,
      evade: 128,
      apRecovery: 105,
      startingAp: 118
    },
    'EX 3': {
      strength: 6,
      technic: 10,
      intelligence: 13,
      vitality: 14,
      agility: 10,
      maxHp: 896,
      meleeAtk: 89,
      rangedAtk: 140,
      magicAtk: 179,
      evade: 128,
      apRecovery: 105,
      startingAp: 118
    },
    'EX 4': {
      strength: 7,
      technic: 10,
      intelligence: 13,
      vitality: 14,
      agility: 10,
      maxHp: 896,
      meleeAtk: 102,
      rangedAtk: 140,
      magicAtk: 179,
      evade: 128,
      apRecovery: 105,
      startingAp: 118
    },
    'EX 5': {
      strength: 7,
      technic: 10,
      intelligence: 13,
      vitality: 14,
      agility: 11,
      maxHp: 896,
      meleeAtk: 102,
      rangedAtk: 140,
      magicAtk: 179,
      evade: 140,
      apRecovery: 107,
      startingAp: 120
    },
    'EX 6': {
      strength: 7,
      technic: 10,
      intelligence: 13,
      vitality: 15,
      agility: 11,
      maxHp: 960,
      meleeAtk: 102,
      rangedAtk: 140,
      magicAtk: 179,
      evade: 140,
      apRecovery: 107,
      startingAp: 120
    },
  },
};
