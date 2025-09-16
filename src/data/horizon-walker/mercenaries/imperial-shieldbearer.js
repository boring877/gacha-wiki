/**
 * Imperial Shieldbearer - Horizon Walker Mercenary Data
 * Tank-type mercenary with shield wall and healing capabilities
 */

export const imperialShieldbearerMercenary = {
  // Basic Information
  id: 'imperial-shieldbearer',
  name: 'Imperial Shieldbearer',
  slug: 'imperial-shieldbearer',
  rarity: 'B',
  cost: 4,

  // Images
  image: '/images/games/horizon-walker/characters/Imperial_Shieldbearer_Mercenary.jpg',

  // Basic Stats (at max level)
  stats: {
    // Basic Stats
    strength: 9,
    technic: 6,
    intelligence: 7,
    vitality: 19,
    agility: 10,

    // Key Combat Stats
    meleeAtk: 128,
    rangedAtk: 89,
    magicAtk: 102,
    maxHp: 1216,
    spd: 83,
    startingAp: 123,
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
      name: 'Gap Stab',
      type: 'Active',
      level: '10/10',
      apCost: 30,
      cooldown: '0R',
      damage: 'Melee ATK 114%',
      description: 'Stabs with a sword to attack. Deals Pierce DMG equal to 114% of melee ATK.',
      tags: ['Melee', 'Pierce', 'Basic Attack'],
    },
    {
      name: 'Throat Attack',
      type: 'Active',
      level: '10/10',
      apCost: 45,
      cooldown: '3R',
      damage: 'Melee ATK 114%',
      description:
        'Deals a threatening sword strike to the enemy. Deals 114% of Melee ATK as Pierce DMG and inflicts [Taunt] effect to the target for 2R.',
      tags: ['Melee', 'Pierce', 'Taunt', 'CC'],
    },
    {
      name: 'Wall of Shields',
      type: 'Active',
      level: '10/10',
      apCost: 60,
      cooldown: '0R',
      description:
        "Raises a massive shield wall to protect allies from enemies. Increases own Aggro Adjustment for 2 rounds and summons a [Shield Wall] in the front. While the [Shield Wall] is active, all DEF increases by 550, cannot be pushed or pulled, and all responses are disabled. The [Shield Wall] vanishes at the start of the caster's next turn. The [Shield Wall] inherits 50% of the summoner's HP and DEF.",
      tags: ['Defense', 'Shield Wall', 'Team Protection', 'Summon'],
    },
    {
      name: 'Fortification - First Aid',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description:
        'At the start of each round, Recovers the HP of all allies by 9.5% of their max HP at the start of each round.',
      tags: ['Passive', 'Team Healing', 'HP Recovery'],
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
    primaryRole: 'Tank and support mercenary specializing in team protection and healing',
    strengths: [
      'High HP and vitality for tankiness',
      'Powerful shield wall defensive ability',
      'Continuous team healing support',
      'Taunt ability for enemy control',
      'Good deployment cost to effectiveness ratio',
    ],
    weaknesses: [
      'Low speed and mobility',
      'Limited offensive capabilities',
      'No elemental resistances',
      'Vulnerable to magical attacks',
    ],
    bestUse: 'General trait farming and team support in defensive compositions',
  },

  // Mercenary-specific information
  mercenaryInfo: {
    traitSource: true,
    generalTraitsAvailable: [
      'Tank-type traits',
      'Healing traits',
      'Defense enhancement traits',
      'Team support traits',
      'Imperial traits',
    ],
    traitTransferNotes:
      'Can be used to transfer general traits to other characters. The specific traits generated are random upon acquisition.',
    acquisitionMethod: 'Standard mercenary recruitment',
  },

  // Tags for filtering and categorization
  tags: [
    'Tank',
    'Support',
    'General Traits',
    'Team Healing',
    'Shield Wall',
    'Defense',
    'Taunt',
    'HP Recovery',
    'Imperial',
    'Trait Source',
  ],

  // Detail page URL
  detailUrl: '/guides/horizon-walker/mercenaries/imperial-shieldbearer',

  // SEO and metadata
  seo: {
    title: 'Imperial Shieldbearer - Horizon Walker Mercenary Guide | B-Rank Tank Support Unit',
    description:
      'Complete guide for Imperial Shieldbearer, a B-rank mercenary in Horizon Walker. Tank support unit with shield wall protection, team healing, and general trait farming capabilities.',
    keywords: [
      'horizon walker imperial shieldbearer',
      'imperial shieldbearer mercenary',
      'horizon walker tank unit',
      'horizon walker support mercenary',
      'imperial shieldbearer guide',
      'horizon walker general traits',
      'mercenary trait farming',
      'horizon walker b rank mercenary',
      'shield wall mercenary',
    ],
  },
};
