/**
 * Koblod - Horizon Walker Mercenary Data
 * Stealth mercenary with burrow mechanics and mobility
 */

export const koboldMercenary = {
  // Basic Information
  id: 'koblod',
  name: 'Koblod',
  slug: 'koblod',
  rarity: 'B',
  cost: 2,

  // Images
  image: '/images/games/horizon-walker/characters/Koblod_Mercenary.jpg',

  // Basic Stats (at max level)
  stats: {
    // Basic Stats
    strength: 8,
    technic: 7,
    intelligence: 7,
    vitality: 11,
    agility: 14,

    // Key Combat Stats
    meleeAtk: 102,
    rangedAtk: 89,
    magicAtk: 89,
    maxHp: 774,
    spd: 117,
    startingAp: 125,
    apRecovery: 115,
    accuracy: 102,
    evade: 197,
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
      name: 'Underground Twin Swords',
      type: 'Active',
      level: '10/10',
      apCost: 30,
      cooldown: '0R',
      damage: 'Melee ATK 114%',
      description:
        'Quickly stabs the enemy with twin blades. Deals Pierce DMG equal to 114% of melee ATK.',
      tags: ['Melee', 'Pierce', 'Twin Blades', 'Basic Attack'],
    },
    {
      name: 'Burrow',
      type: 'Active',
      level: '10/10',
      apCost: 27,
      cooldown: '1R',
      description:
        'Burrows underground and gains the [Burrow] effect for 2 rounds.\n\n[Burrow]: Unable to counter, evade, block, or use general skills. Hidden and cannot be targeted by enemy skills.\n\nCan use the "Emerge" skill.\n\n[Emerge]: Select ground within 9m to move to that location and emerge, ending the [Burrow] state.',
      tags: ['Stealth', 'Hidden', 'Mobility', 'Underground'],
    },
    {
      name: 'Underground Defense Techniques',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description: 'Increases Physical DEF by 285 and Block Chance by 19%.',
      tags: ['Passive', 'Physical Defense', 'Block Chance'],
    },
    {
      name: 'Underground Explosion',
      type: 'Active',
      level: '10/10',
      apCost: 90,
      cooldown: '4R',
      damage: 'Melee ATK 190%',
      description:
        'Erupts from the ground, causing devastation. Can only be used in [Burrow] state. Deals Crush DMG equal to 190% of melee ATK, knocks back the enemy 3m, and [Taunts] for 1R. Cannot perform a weakness attack with this skill.',
      tags: ['Crush', 'Knockback', 'Taunt', 'Burrow Only', 'Eruption'],
    },
    {
      name: 'Improvised Fortress',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description:
        'If in [Burrow] state at the start of the turn, the effect applies. Increases Physical DEF by 570 and AP Recovery by 38% until the start of the next round.',
      tags: ['Passive', 'Conditional', 'Physical Defense', 'AP Recovery'],
    },
  ],

  // Traits
  traits: [
    {
      name: 'Kobold',
      type: 'Unique',
      category: 'unique',
      description: 'Kobold heritage providing enhanced evasion and survivability.',
      characteristics: 'Evade +10%, Max HP +10%',
    },
  ],

  // Usage and Notes
  usage: {
    primaryRole:
      'Stealth mobility unit specializing in hit-and-run tactics and underground positioning',
    strengths: [
      'Excellent mobility with burrow and emerge mechanics',
      'High evasion (197) for survivability',
      'Very low deployment cost (2) for easy inclusion',
      'Stealth capabilities make untargetable when burrowed',
      'Strong defensive bonuses while underground',
    ],
    weaknesses: [
      'Low overall damage output compared to dedicated DPS',
      'Limited utility when not in burrow state',
      'Vulnerable when forced to surface',
      'No elemental resistances or special damage types',
    ],
    bestUse: 'General trait farming and tactical positioning in mobile compositions',
  },

  // Mercenary-specific information
  mercenaryInfo: {
    traitSource: true,
    generalTraitsAvailable: [
      'Stealth traits',
      'Mobility traits',
      'Evasion traits',
      'Underground traits',
      'Kobold traits',
    ],
    traitTransferNotes:
      'Can be used to transfer general traits to other characters. The specific traits generated are random upon acquisition.',
    acquisitionMethod: 'Standard mercenary recruitment',
  },

  // Tags for filtering and categorization
  tags: [
    'Stealth',
    'Mobility',
    'General Traits',
    'Underground',
    'Evasion',
    'Hit and Run',
    'Low Cost',
    'Tactical',
    'Kobold',
    'Trait Source',
  ],

  // Detail page URL
  detailUrl: '/guides/horizon-walker/mercenaries/koblod',

  // SEO and metadata
  seo: {
    title: 'Koblod - Horizon Walker Mercenary Guide | B-Rank Stealth Mobility Unit',
    description:
      'Complete guide for Koblod, a B-rank mercenary in Horizon Walker. Stealth mobility unit with burrow mechanics, high evasion, and general trait farming capabilities.',
    keywords: [
      'horizon walker koblod',
      'koblod mercenary',
      'horizon walker stealth unit',
      'horizon walker mobility mercenary',
      'koblod guide',
      'horizon walker general traits',
      'mercenary trait farming',
      'horizon walker b rank mercenary',
      'burrow mercenary',
    ],
  },
};
