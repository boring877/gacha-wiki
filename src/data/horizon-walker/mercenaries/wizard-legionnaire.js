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
    strength: 5,
    technic: 10,
    intelligence: 19,
    vitality: 13,
    agility: 11,

    // Key Combat Stats
    meleeAtk: 76,
    rangedAtk: 140,
    magicAtk: 256,
    maxHp: 832,
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
        'Shoots an arrow of fire to burn the enemy. Deals Heat DMG equal to 114% of magic ATK.',
      tags: ['Magic', 'Heat', 'Single Target', 'Fire Arrow'],
    },
    {
      name: 'Ember',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description:
        'On a successful attack, applies the [Ember] effect to the enemy for 3 rounds. [Ember]: Reduces Heat DEF by 380.',
      tags: ['Passive', 'Heat Debuff', 'On-Hit', 'Heat DEF Reduction', 'Duration'],
    },
    {
      name: 'Fireball',
      type: 'Active',
      level: '10/10',
      apCost: 90,
      cooldown: '1R',
      damage: 'Magic ATK 143%',
      description:
        'Launches a blazing orb of fire and causes it to explode, burning enemies. Deals Unblockable Heat DMG equal to 143% of magic ATK to all enemies within a 2m circular radius. During this attack, ACC temporarily increases by 300%.',
      tags: ['Magic', 'Heat', 'AoE', 'Unblockable', 'Accuracy Boost', 'Circle AoE'],
    },
    {
      name: 'Fireflake Explosion',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      damage: 'Magic ATK 38%',
      description:
        'Ignites dying embers to burn enemies. At the start of the round, detonates all [Ember] effects on the battlefield, dealing additional Heat DMG equal to 38% of magic ATK.',
      tags: ['Passive', 'Heat', 'Ember Synergy', 'Start of Round', 'Battlefield AoE'],
    },
    {
      name: 'Blaze of Ascension',
      type: 'Active',
      level: '10/10',
      apCost: 150,
      cooldown: '3R',
      damage: 'Magic ATK 380%',
      description:
        'Commands surging flames to burn enemies in front. Deals Unblockable Heat DMG equal to 380% of magic ATK to all enemies within a 3m circular radius. During the attack, ACC temporarily increases by 300%, but weakness attacks are not possible.',
      tags: [
        'Magic',
        'Heat',
        'Ultimate',
        'Unblockable',
        'Large AoE',
        'Accuracy Boost',
        'No Weakness',
      ],
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
  detailUrl: '/guides/horizon-walker/mercenaries/wizard-legionnaire',

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
};
