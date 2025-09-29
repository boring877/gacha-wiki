/**
 * Goliath - Horizon Walker Mercenary Data
 * Heavy ranged damage dealer with rocket systems and artillery capabilities
 */

export const goliathMercenary = {
  // Basic Information
  id: 'goliath',
  name: 'Goliath',
  slug: 'goliath',
  rarity: 'B',
  cost: 7,

  // Basic Stats (at max level)
  stats: {
    // Basic Stats
    strength: 12,
    technic: 20,
    intelligence: 10,
    vitality: 18,
    agility: 13,

    // Key Combat Stats
    meleeAtk: 153,
    rangedAtk: 256,
    magicAtk: 128,
    maxHp: 1152,
    spd: 92,
    startingAp: 143,
    apRecovery: 112,
    accuracy: 102,
    evade: 166,
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
      name: 'Hand Cannon',
      type: 'Active',
      level: '10/10',
      apCost: 60,
      cooldown: '0R',
      damage: 'Ranged ATK 114%',
      description:
        'Fire at the enemy with a large-caliber hand cannon. Deals Pierce DMG equal to 114% of Ranged ATK.',
      tags: ['Ranged', 'Pierce', 'Heavy Weapon', 'Cannon'],
    },
    {
      name: 'Interception Optimize',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description:
        'If the user Standby during this turn, ACC increases by 50% and Ranged ATK increases by 28.5% for 1 Round.',
      tags: ['Passive', 'Conditional', 'Accuracy', 'Ranged ATK Boost'],
    },
    {
      name: 'Rocket Launch',
      type: 'Active',
      level: '10/10',
      apCost: 90,
      cooldown: '0R',
      damage: 'Ranged ATK 76% + Heat 76%',
      description:
        'Launches a self-guided rocket towards the sky. Deals Crush DMG equal to 76% of Ranged ATK and deals additional Heat DMG equal to 76% of Ranged ATK. This attack benefits from a 100% ACC adjustment.',
      tags: ['Ranged', 'Crush', 'Heat', 'Rocket', 'Perfect Accuracy'],
    },
    {
      name: 'Close-range Reaction',
      type: 'Active',
      level: '10/10',
      apCost: 60,
      cooldown: '0R',
      damage: 'Ranged ATK 190% + Melee ATK 57%',
      description:
        'Forcefully pushes the target away and fires a shot. Deals Pierce DMG equal to 190% of Ranged ATK and additional Crush DMG equal to 57% of melee ATK, while knocking the target back by 5m.',
      tags: ['Ranged', 'Pierce', 'Crush', 'Knockback', 'Multi-Hit'],
    },
    {
      name: 'Triple Rocket Barrage',
      type: 'Active',
      level: '10/10',
      apCost: 150,
      cooldown: '1R',
      description:
        "Entering Rocket Barrage mode. Immediately gain AP 200 and acquire 3 stacks of [Rocket Barrage model].\n\n[Rocket Barrage model]: Unable to move; only 'Rocket Barrage' and 'Standby' skills can be used. The mode ends after using 'Wait' or 3 times of 'Rocket Barrage', changing AP to 0.\n\n[Rocket Barrage]: Fire a rocket upward to bombard the ground. This attack does not consume AP to activate but consumes one stack of [Rocket Barrage model] after use. Deals Crush DMG equal to 76% of Ranged ATK and additional Heat DMG equal to 76% of Ranged ATK. Temporarily increases ACC by 100% during this attack.",
      tags: ['Mode Change', 'Artillery', 'Crush', 'Heat', 'Multi-Shot'],
    },
    {
      name: 'Shooting Learning System',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description:
        'Each time an attack skill is successfully used, increases ACC by 10% and CRIT rate by 5.7%. This effect lasts until the end of battle and can stack up to 10 times.',
      tags: ['Passive', 'Stacking', 'Accuracy', 'Critical', 'Self-Improvement'],
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
      'Heavy artillery damage dealer specializing in ranged attacks and rocket bombardment',
    strengths: [
      'Highest ranged attack (256) among mercenaries for excellent DPS',
      'Powerful rocket systems with heat and crush damage',
      'Self-improving accuracy and critical rate through combat',
      'Artillery mode for sustained bombardment',
      'Strong physical defenses across all damage types',
    ],
    weaknesses: [
      'Highest deployment cost (7) making team composition challenging',
      'Low mobility when in artillery mode',
      'Vulnerable to magical attacks',
      'High AP costs for powerful abilities',
    ],
    bestUse: 'Elite ranged DPS for high-difficulty content and advanced trait farming',
  },

  // Mercenary-specific information
  mercenaryInfo: {
    traitSource: true,
    generalTraitsAvailable: [
      'Machine traits',
      'Ranged attack traits',
      'Artillery traits',
      'Heavy weapon traits',
      'Accuracy enhancement traits',
    ],
    traitTransferNotes:
      'Can be used to transfer general traits to other characters. The specific traits generated are random upon acquisition.',
    acquisitionMethod: 'Elite mercenary recruitment',
  },

  // Tags for filtering and categorization
  tags: [
    'Artillery',
    'Ranged DPS',
    'General Traits',
    'Heavy Weapons',
    'Machine',
    'Rocket Systems',
    'High Cost',
    'Pierce Damage',
    'Heat Damage',
    'Elite',
    'Trait Source',
  ],

  // Detail page URL
  detailUrl: '/guides/horizon-walker/mercenaries/goliath',

  // SEO and metadata
  seo: {
    title: 'Goliath - Horizon Walker Mercenary Guide | B-Rank Heavy Artillery Unit',
    description:
      'Complete guide for Goliath, a B-rank mercenary in Horizon Walker. Heavy artillery unit with rocket systems, highest ranged damage, and general trait farming capabilities.',
    keywords: [
      'horizon walker goliath',
      'goliath mercenary',
      'horizon walker artillery unit',
      'horizon walker ranged mercenary',
      'goliath guide',
      'horizon walker general traits',
      'mercenary trait farming',
      'horizon walker b rank mercenary',
      'rocket mercenary',
    ],
  },
};
