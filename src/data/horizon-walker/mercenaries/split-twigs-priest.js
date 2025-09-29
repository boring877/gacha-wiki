/**
 * Split Twigs Priest - Horizon Walker Mercenary Data
 * Dedicated healer and support unit with resurrection capabilities
 */

export const splitTwigsPriestMercenary = {
  // Basic Information
  id: 'split-twigs-priest',
  name: 'Split Twigs Priest',
  slug: 'split-twigs-priest',
  rarity: 'B',
  cost: 4,

  // Basic Stats (at max level)
  stats: {
    // Basic Stats
    strength: 12,
    technic: 6,
    intelligence: 12,
    vitality: 13,
    agility: 10,

    // Key Combat Stats
    meleeAtk: 166,
    rangedAtk: 89,
    magicAtk: 166,
    maxHp: 832,
    spd: 87,
    startingAp: 121,
    apRecovery: 105,
    accuracy: 102,
    evade: 128,
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
      name: "Guardian's Strike",
      type: 'Active',
      level: '10/10',
      apCost: 30,
      cooldown: '0R',
      damage: 'Melee ATK 114%',
      description:
        "Swings a mace to attack the enemy. Deals Crush DMG equal to 114% of melee ATK and reduces the target's AP by 5.",
      tags: ['Melee', 'Crush', 'AP Drain', 'Mace', 'Guardian'],
    },
    {
      name: 'Grace of Healing',
      type: 'Active',
      level: '10/10',
      apCost: 45,
      cooldown: '0R',
      description:
        'Prays to the Goddess of the Split Twigs with a devout heart for the healing of an ally. Recovers the HP of a designated ally by 190% of magic ATK.',
      tags: ['Single Target', 'Healing', 'Magic ATK Scaling', 'Prayer', 'Split Twigs'],
    },
    {
      name: 'Life Regeneration',
      type: 'Active',
      level: '10/10',
      apCost: 60,
      cooldown: '2R',
      description:
        'Offers a solemn prayer for the mercy of the Goddess of Split Twigs. Recovers the HP of allies within a 2.5m circular range by 285% of magic ATK.',
      tags: ['AoE Healing', 'Magic ATK Scaling', 'Prayer', 'Split Twigs', 'Circle AoE'],
    },
    {
      name: 'Reviving Bough',
      type: 'Active',
      level: '10/10',
      apCost: 90,
      cooldown: '2R',
      description:
        "Opens the path of the branches to invoke the goddess's miracle. Restores consciousness to one incapacitated ally and recovers HP by 380% of magic ATK. The target resumes battle with AP set to 95.",
      tags: ['Resurrection', 'Healing', 'Magic ATK Scaling', 'AP Grant', 'Miracle', 'Split Twigs'],
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
      'Dedicated healer and support mercenary with powerful single-target and AoE healing plus resurrection capabilities',
    strengths: [
      'Exceptional healing capabilities with magic ATK scaling',
      'Unique resurrection ability to revive fallen allies',
      'Both single-target and AoE healing options',
      'Moderate offensive capabilities with AP drain',
      'Balanced stats for survivability',
    ],
    weaknesses: [
      'Low speed making positioning challenging',
      'Limited offensive damage output',
      'No defensive resistances or special protections',
      'High AP costs for powerful healing abilities',
    ],
    bestUse: 'Essential healer for general trait farming and sustained team compositions',
  },

  // Mercenary-specific information
  mercenaryInfo: {
    traitSource: true,
    generalTraitsAvailable: [
      'Healing traits',
      'Support-type traits',
      'Magic scaling traits',
      'Priest traits',
      'Imperial traits',
    ],
    traitTransferNotes:
      'Can be used to transfer general traits to other characters. The specific traits generated are random upon acquisition.',
    acquisitionMethod: 'Standard mercenary recruitment',
  },

  // Tags for filtering and categorization
  tags: [
    'Healer',
    'Support',
    'General Traits',
    'Resurrection',
    'AoE Healing',
    'Magic Scaling',
    'Priest',
    'Split Twigs',
    'AP Drain',
    'Trait Source',
  ],

  // Detail page URL
  detailUrl: '/guides/horizon-walker/mercenaries/split-twigs-priest',

  // SEO and metadata
  seo: {
    title: 'Split Twigs Priest - Horizon Walker Mercenary Guide | B-Rank Healer Support Unit',
    description:
      'Complete guide for Split Twigs Priest, a B-rank mercenary in Horizon Walker. Dedicated healer with resurrection, AoE healing, and general trait farming capabilities.',
    keywords: [
      'horizon walker split twigs priest',
      'split twigs priest mercenary',
      'horizon walker healer unit',
      'horizon walker support mercenary',
      'split twigs priest guide',
      'horizon walker general traits',
      'mercenary trait farming',
      'horizon walker b rank mercenary',
      'healer mercenary',
    ],
  },
};
