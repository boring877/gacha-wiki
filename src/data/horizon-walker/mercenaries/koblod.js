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

  // Basic Stats (at max level)
  stats: {
    // Basic Stats
    strength: 8,
    technic: 8,
    intelligence: 8,
    vitality: 12,
    agility: 15,

    // Key Combat Stats
    meleeAtk: 102,
    rangedAtk: 102,
    magicAtk: 102,
    maxHp: 844,
    spd: 117,
    startingAp: 127,
    apRecovery: 117,
    accuracy: 102,
    evade: 211,
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
      'Quickly stabs the enemy with twin blades. Deals Pierce DMG equal to N% of Melee ATK.',
      tags: ['Melee', 'Pierce', 'Twin Blades', 'Basic Attack'],
      gameKey: 'DualSwordThrust',
    },
    {
      name: 'Burrow',
      type: 'Active',
      level: '10/10',
      apCost: 27,
      cooldown: '1R',
      description:
      'Burrows underground and gains the <b>[Burrow]</b> effect for 2 rounds. - <b>[Burrow]</b>: During this effect Response, Evade, Block, or using general skills is prohibited. The user stays Hidden and cannot be targeted by enemy skills. Can use the "Emerge" skill. <b>Emerge</color></b> Select ground within 9m to move to that location and emerge, ending the <b>[Burrow]</b> state.',
      tags: ['Stealth', 'Hidden', 'Mobility', 'Underground'],
      gameKey: 'TunnelMovement',
    },
    {
      name: 'Underground Defense Techniques',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description:
      'Increases Physical DEF by {150,165,180,195,210,225,240,255,270,285} and Block Chance by {10,11,12,13,14,15,16,17,18,19}%.',
      tags: ['Passive', 'Physical Defense', 'Block Chance'],
      gameKey: 'DefenseTechniqueUnderGround',
    },
    {
      name: 'Underground Explosion',
      type: 'Active',
      level: '10/10',
      apCost: 90,
      cooldown: '4R',
      damage: 'Melee ATK 190%',
      description:
      'Erupts from the ground, causing devastation. Can only be used in <b>[Burrow]</b> state. Deals Crush DMG equal to N% of Melee ATK, knocks back the enemy 3m, and <b>[Taunts]</b> for 1R. Cannot perform a weakness attack with this skill.',
      tags: ['Crush', 'Knockback', 'Taunt', 'Burrow Only', 'Eruption'],
      gameKey: 'BangingExplosionUnderGround',
    },
    {
      name: 'Improvised Fortress',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description:
      'If in <b>[Burrow]</b> state at the start of the turn, the effect applies. Increases Physical DEF by {300,330,360,390,420,450,480,510,540,570} and AP Recovery by {20,22,24,26,28,30,32,34,36,38}% until the start of the next round.',
      tags: ['Passive', 'Conditional', 'Physical Defense', 'AP Recovery'],
      gameKey: 'ImprovisedFortress',
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
  detailUrl: '/guides/horizon-walker/mercenaries/koblod/',

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
  heroId: 43,
  rarityStages: {
    'EX': {
      strength: 7,
      technic: 7,
      intelligence: 7,
      vitality: 10,
      agility: 11,
      maxHp: 704,
      meleeAtk: 89,
      rangedAtk: 89,
      magicAtk: 89,
      evade: 154,
      apRecovery: 107,
      startingAp: 117
    },
    'EX 1': {
      strength: 7,
      technic: 7,
      intelligence: 7,
      vitality: 10,
      agility: 13,
      maxHp: 704,
      meleeAtk: 89,
      rangedAtk: 89,
      magicAtk: 89,
      evade: 183,
      apRecovery: 112,
      startingAp: 122
    },
    'EX 2': {
      strength: 8,
      technic: 7,
      intelligence: 7,
      vitality: 10,
      agility: 13,
      maxHp: 704,
      meleeAtk: 102,
      rangedAtk: 89,
      magicAtk: 89,
      evade: 183,
      apRecovery: 112,
      startingAp: 122
    },
    'EX 3': {
      strength: 8,
      technic: 8,
      intelligence: 7,
      vitality: 10,
      agility: 13,
      maxHp: 704,
      meleeAtk: 102,
      rangedAtk: 102,
      magicAtk: 89,
      evade: 183,
      apRecovery: 112,
      startingAp: 122
    },
    'EX 4': {
      strength: 8,
      technic: 8,
      intelligence: 8,
      vitality: 10,
      agility: 13,
      maxHp: 704,
      meleeAtk: 102,
      rangedAtk: 102,
      magicAtk: 102,
      evade: 183,
      apRecovery: 112,
      startingAp: 122
    },
    'EX 5': {
      strength: 8,
      technic: 8,
      intelligence: 8,
      vitality: 12,
      agility: 13,
      maxHp: 844,
      meleeAtk: 102,
      rangedAtk: 102,
      magicAtk: 102,
      evade: 183,
      apRecovery: 112,
      startingAp: 122
    },
    'EX 6': {
      strength: 8,
      technic: 8,
      intelligence: 8,
      vitality: 12,
      agility: 15,
      maxHp: 844,
      meleeAtk: 102,
      rangedAtk: 102,
      magicAtk: 102,
      evade: 211,
      apRecovery: 117,
      startingAp: 127
    },
  },
};
