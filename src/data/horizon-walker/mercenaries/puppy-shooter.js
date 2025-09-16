/**
 * Puppy Shooter - Horizon Walker Mercenary Data
 * Machine-type ranged unit with support fire capabilities
 */

export const puppyShooterMercenary = {
  // Basic Information
  id: 'puppy-shooter',
  name: 'Puppy Shooter',
  slug: 'puppy-shooter',
  rarity: 'B',
  cost: 3,

  // Images
  image: '/images/games/horizon-walker/characters/Puppy_Shooter.jpg',

  // Basic Stats (at max level)
  stats: {
    // Basic Stats
    strength: 9,
    technic: 11,
    intelligence: 8,
    vitality: 10,
    agility: 16,

    // Key Combat Stats
    meleeAtk: 115,
    rangedAtk: 140,
    magicAtk: 102,
    maxHp: 640,
    spd: 117,
    startingAp: 125,
    apRecovery: 120,
    accuracy: 102,
    evade: 204,
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
      name: 'Mechanical Shooting',
      type: 'Active',
      level: '10/10',
      apCost: 45,
      cooldown: '0R',
      damage: 'Ranged ATK 114%',
      description:
        'Attacks the enemy by firing the equipped firearm. Deals Pierce DMG equal to 114% of Ranged ATK.',
      tags: ['Ranged', 'Pierce', 'Basic Attack'],
    },
    {
      name: 'Response Fire Mode',
      type: 'Active',
      level: '10/10',
      apCost: 90,
      cooldown: '0R',
      description:
        "Enters [Response Fire mode], using computational power for precise aiming to support ally attacks. While in this state, counterattacking, support counterattacking, evading, and blocking are not possible. Until the user's next turn, provides a support attack with the 'Response Fire' skill whenever an ally attacks an enemy within a 7m range.\n\n[Response Fire]: Assists an ally by shooting the enemy. Deals Pierce DMG equal to 114% of Ranged ATK.",
      tags: ['Support', 'Mode Change', 'Team Support', 'Pierce'],
    },
    {
      name: 'Shooting Learning System',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description:
        'Each time an attack skill is successfully used, increases ACC by 19% and CRIT rate by 5.7%. This effect lasts until the end of battle and can stack up to 10 times.',
      tags: ['Self-Buff', 'Accuracy', 'Critical', 'Stacking'],
    },
    {
      name: 'Rampage Rush',
      type: 'Active',
      level: '10/10',
      apCost: 90,
      cooldown: '4R',
      damage: 'Ranged ATK 162%',
      description:
        'Assumes a caterpillar form and charges forward, firing bullets wildly. Charges 12m, dealing Pierce DMG equal to 162% of Ranged ATK to all enemies within a 4m radius along the path. Weakness attacks cannot be performed with this skill.',
      tags: ['Charge', 'Pierce', 'AoE', 'Movement'],
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
      'Ranged support unit that provides consistent pierce damage and team support through response fire capabilities',
    strengths: [
      'High ranged attack damage with pierce focus',
      'Excellent team support with Response Fire mode',
      'Self-improving accuracy and critical rate through combat',
      'Good mobility with charge ability',
      'High evasion for survivability',
    ],
    weaknesses: [
      'Vulnerable while in Response Fire mode (no counters/evasion)',
      'Limited magical damage capability',
      'Vulnerable to magical attacks',
      'B-rank stats limit overall effectiveness',
    ],
    bestUse: 'General trait farming and ranged support in lower to mid difficulty content',
  },

  // Mercenary-specific information
  mercenaryInfo: {
    traitSource: true,
    generalTraitsAvailable: [
      'Machine traits',
      'Ranged attack traits',
      'Pierce damage traits',
      'Support-type traits',
      'Accuracy enhancement traits',
    ],
    traitTransferNotes:
      'Can be used to transfer general traits to other characters. The specific traits generated are random upon acquisition.',
    acquisitionMethod: 'Standard mercenary recruitment',
  },

  // Tags for filtering and categorization
  tags: [
    'Ranged',
    'Support',
    'Machine',
    'General Traits',
    'Pierce Damage',
    'Team Support',
    'Accuracy',
    'Critical',
    'Charge',
    'Defense',
    'Trait Source',
  ],

  // Detail page URL
  detailUrl: '/guides/horizon-walker/mercenaries/puppy-shooter',

  // SEO and metadata
  seo: {
    title: 'Puppy Shooter - Horizon Walker Mercenary Guide | Machine Ranged Support Unit',
    description:
      'Complete guide for Puppy Shooter, a B-rank machine mercenary in Horizon Walker. Ranged support unit with response fire capabilities, pierce damage focus, and general trait farming potential.',
    keywords: [
      'horizon walker puppy shooter',
      'puppy shooter mercenary',
      'horizon walker machine unit',
      'horizon walker ranged mercenary',
      'puppy shooter guide',
      'horizon walker general traits',
      'mercenary trait farming',
      'horizon walker b rank mercenary',
      'response fire support',
    ],
  },
};
