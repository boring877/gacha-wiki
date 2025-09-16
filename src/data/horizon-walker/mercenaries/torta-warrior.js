/**
 * Torta Warrior - Horizon Walker Mercenary Data
 * High-damage melee unit with chain weapon mechanics and damage reflection
 */

export const tortaWarriorMercenary = {
  // Basic Information
  id: 'torta-warrior',
  name: 'Torta Warrior',
  slug: 'torta-warrior',
  rarity: 'B',
  cost: 5,

  // Images
  image: '/images/games/horizon-walker/characters/Torta_warrior.jpg',

  // Basic Stats (at max level)
  stats: {
    // Basic Stats
    strength: 20,
    technic: 8,
    intelligence: 6,
    vitality: 14,
    agility: 9,

    // Key Combat Stats
    meleeAtk: 256,
    rangedAtk: 102,
    magicAtk: 76,
    maxHp: 960,
    spd: 92,
    startingAp: 118,
    apRecovery: 102,
    accuracy: 102,
    evade: 112,
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
      name: 'Hide Splitter',
      type: 'Active',
      level: '10/10',
      apCost: 45,
      cooldown: '0R',
      damage: 'Melee ATK 190%',
      description:
        'Swings a deadly Torturus to deal Slash DMG equal to 190% of melee ATK to the enemy.',
      tags: ['Melee', 'Slash', 'High Damage', 'Torturus'],
    },
    {
      name: 'Predatory Range',
      type: 'Active',
      level: '10/10',
      apCost: 33,
      cooldown: '0R',
      damage: 'Melee ATK 114%',
      description:
        'Throws a chained Torturus to pull the enemy closer. Deals Slash DMG equal to 114% of melee ATK and removes Counterattack. If the target is a large enemy, instead of pulling them closer, moves self to the front of the enemy.',
      tags: ['Melee', 'Slash', 'Chain Weapon', 'Pull', 'Counter Removal', 'Positioning'],
    },
    {
      name: 'Afflict Pain',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description:
        'Each time an attack is successfully made, has a 57% chance to Taunt the target.',
      tags: ['Passive', 'Taunt', 'Crowd Control', 'On-Hit'],
    },
    {
      name: 'Cry of the Ancients',
      type: 'Active',
      level: '10/10',
      apCost: 45,
      cooldown: '2R',
      damage: 'Magic ATK 57%',
      description:
        'With a shout filled with intense determination, demoralizes enemies and boosts own resolve. Deals Immaterial DMG equal to 57% of magic ATK. Hit enemies lose 10 AP while self gains the [Primal Regeneration] effect for 2R and Aggro Adjustment increases.\n\n[Primal Regeneration]: Whenever damaged, recovers HP by 57% of magic ATK. This recovery amount increases as the current HP ratio decreases, up to 4 times at 40% HP ratio.',
      tags: ['Magic', 'Immaterial', 'AP Drain', 'Self-Heal', 'Scaling Heal', 'Aggro'],
    },
    {
      name: 'Endless Malice',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description:
        'When attacked by an enemy, reflects the damage received back to the attacker, dealing Fixed DMG equal to 57% of the damage taken. This reflected damage increases as own current HP ratio decreases, up to 4 times at 40% HP.',
      tags: ['Passive', 'Damage Reflection', 'Fixed Damage', 'Scaling', 'Retaliation'],
    },
  ],

  // Traits
  traits: [
    {
      name: 'Torta',
      type: 'Unique',
      category: 'unique',
      description: 'Torta heritage with enhanced vitality but reduced agility.',
      characteristics: 'Vitality +1, Evade -2%',
    },
  ],

  // Usage and Notes
  usage: {
    primaryRole:
      'High-damage melee warrior with unique chain weapon mechanics and damage reflection capabilities',
    strengths: [
      'Exceptional melee attack damage (256) - highest among all mercenaries',
      'Unique chain weapon mechanics for positioning and crowd control',
      'Strong damage reflection and self-healing capabilities',
      'Excellent taunt generation for enemy control',
      'Scaling abilities that get stronger at low HP',
    ],
    weaknesses: [
      'Low speed and agility for positioning',
      'No elemental resistances or defensive stats',
      'Vulnerable to magical attacks',
      'Dependent on taking damage for optimal reflection output',
    ],
    bestUse: 'Primary melee DPS for general trait farming and high-damage compositions',
  },

  // Mercenary-specific information
  mercenaryInfo: {
    traitSource: true,
    generalTraitsAvailable: [
      'Torta traits',
      'High damage traits',
      'Chain weapon traits',
      'Damage reflection traits',
      'Warrior-type traits',
    ],
    traitTransferNotes:
      'Can be used to transfer general traits to other characters. The specific traits generated are random upon acquisition.',
    acquisitionMethod: 'Standard mercenary recruitment',
  },

  // Tags for filtering and categorization
  tags: [
    'High Damage',
    'Melee DPS',
    'General Traits',
    'Chain Weapon',
    'Damage Reflection',
    'Taunt',
    'Self-Heal',
    'Crowd Control',
    'Torta',
    'Trait Source',
  ],

  // Detail page URL
  detailUrl: '/guides/horizon-walker/mercenaries/torta-warrior',

  // SEO and metadata
  seo: {
    title: 'Torta Warrior - Horizon Walker Mercenary Guide | B-Rank High Damage Melee Unit',
    description:
      'Complete guide for Torta Warrior, a B-rank mercenary in Horizon Walker. High damage melee unit with chain weapon mechanics, damage reflection, and general trait farming capabilities.',
    keywords: [
      'horizon walker torta warrior',
      'torta warrior mercenary',
      'horizon walker melee unit',
      'horizon walker damage dealer',
      'torta warrior guide',
      'horizon walker general traits',
      'mercenary trait farming',
      'horizon walker b rank mercenary',
      'chain weapon mercenary',
    ],
  },
};
