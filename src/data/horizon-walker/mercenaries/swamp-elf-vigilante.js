/**
 * Swamp Elf Vigilante - Horizon Walker Mercenary Data
 * High-mobility melee assassin with dual class options
 */

export const swampElfVigilanteMercenary = {
  // Basic Information
  id: 'swamp-elf-vigilante',
  name: 'Swamp Elf Vigilante',
  slug: 'swamp-elf-vigilante',
  rarity: 'B',
  cost: 4,

  // Basic Stats (at max level)
  stats: {
    // Basic Stats
    strength: 10,
    technic: 8,
    intelligence: 11,
    vitality: 12,
    agility: 15,

    // Key Combat Stats
    meleeAtk: 128,
    rangedAtk: 102,
    magicAtk: 140,
    maxHp: 768,
    spd: 143,
    startingAp: 114,
    apRecovery: 117,
    accuracy: 102,
    evade: 192,
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

  // Skills (Base skills + Class-specific skills with clear organization)
  skills: [
    // === BASE SKILLS (Available to Both Classes) ===
    {
      name: 'Harpe Art',
      type: 'Active',
      level: '10/10',
      apCost: 30,
      cooldown: '0R',
      damage: 'Melee ATK 114%',
      description:
      'The swamp elf extends their long arms and swiftly swings the harpe. Deals Slash DMG equal to N% of Melee ATK.',
      tags: ['Melee', 'Slash', 'Base Skill', 'Harpe'],
      skillClass: 'base-skill',
      gameKey: 'HarpeSlash',
    },
    {
      name: 'Hunter on the Vine',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description:
      'Increases SPD by {20,23,26,29,32,35,38,41,44,47}. Additionally, when attacking, temporarily increases Melee ATK based on the straight-line distance moved. At 10 m, Melee ATK increases by up to {60,66,72,78,84,90,96,102,108,114}%.',
      tags: ['Passive', 'Mobility', 'Evasion', 'Movement Bonus', 'Base Skill'],
      skillClass: 'base-skill',
      gameKey: 'RangerOnTheVine',
    },

    // === SWAMP TYRANT CLASS (Aggressive Assault) ===
    {
      name: 'Assault',
      type: 'Active',
      level: '10/10',
      apCost: 60,
      cooldown: '2R',
      damage: 'Melee ATK 190%',
      description:
      'Leaps high and dives quickly to ambush enemies. Jumps to the designated location and deals Slash DMG equal to N% of Melee ATK to all enemies within a 1.3m circular radius. Ignores counterattacks from the target.',
      tags: ['Melee', 'Slash', 'AoE', 'Leap', 'No Counter', 'Tyrant Class'],
      skillClass: 'class-skill',
      gameKey: 'DescentRaid',
    },
    {
      name: 'Blades of Tyranny',
      type: 'Active',
      level: '10/10',
      apCost: 90,
      cooldown: '2R',
      damage: 'Melee ATK 380%',
      description:
      'Slashes the area in a blinding flash of speed with twin harpes. Deals N% Slash DMG to all enemies within a 2.5m radius. Upon use, temporarily increases Crit Rate by {12.8,13.6,14.4,15.2,16,16.8,17.6,18.4,19.2,20}% of the user\'s Base Evasion. This bonus can reach up to a maximum of {32,34,36,38,40,42,44,46,48,50}%.',
      tags: ['Melee', 'Slash', 'AoE', 'High Damage', 'Lightning Speed', 'Tyrant Class'],
      skillClass: 'class-skill',
      gameKey: 'BladeOfTyranny',
    },
    {
      name: 'Survival Expert',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description:
      'Once per battle, survives a fatal blow with 1 HP and immediately gains {105,110,115,120,125,130,135,140,145,150} AP. Then restores {12,14,16,18,20,22,24,26,28,30}% of own HP.',
      tags: ['Passive', 'Survival', 'AP Gain', 'Once Per Battle', 'Tyrant Class'],
      skillClass: 'class-skill',
      gameKey: 'SurvivalExpert',
    },

    // === SWAMP PREDATOR CLASS (Tactical Debuffer) ===
    {
      name: "Swamp's Arrest",
      type: 'Active',
      level: '10/10',
      apCost: 60,
      cooldown: '2R',
      damage: 'Melee ATK 190%',
      description:
        '[SWAMP PREDATOR CLASS] Leaps over the target while throwing a swamp trap. Deals Slash DMG equal to 190% of melee ATK and has a 100% chance to apply [Slow] effect for 2R. Weakness attacks cannot be performed with this skill.\n\n[Slow]: Reduces SPD by 40%.',
      tags: ['Melee', 'Slash', 'Debuff', 'Slow', 'Leap', 'Predator Class'],
      skillClass: 'class-skill',
    },
    {
      name: 'Fang of the Swamp',
      type: 'Active',
      level: '10/10',
      apCost: 90,
      cooldown: '3R',
      damage: 'Melee ATK 257% + 190%',
      description:
      'Leaps low toward the enemy, slashing past them with a deadly dual strike from both Harpes. Deals Slash DMG equal to N% of Melee ATK as the user vaults over the target.If the target is afflicted with <b>[Slow]</b>, deals additional Slash DMG equal to {100,110,120,130,140,150,160,170,180,190}% of the user\'s combined Melee ATK and Base Evasion.',
      tags: ['Melee', 'Slash', 'Conditional', 'Leap', 'Combo', 'Predator Class'],
      skillClass: 'class-skill',
      gameKey: 'TheFangsOfABog',
    },
  ],

  // Traits
  traits: [
    {
      name: 'Swamp Elf',
      type: 'Unique',
      category: 'unique',
      description: 'Swamp elf heritage providing enhanced mobility and AP efficiency.',
      characteristics: 'Starting AP +10, SPD +10%',
    },
  ],

  // Usage and Notes
  usage: {
    primaryRole:
      'High-mobility melee assassin with dual class specializations for different tactical approaches',
    strengths: [
      'Exceptional speed (157) and evasion (217) for hit-and-run tactics',
      'Dual class system offers tactical flexibility',
      'Strong mobility bonuses and movement-based damage scaling',
      'Excellent gap-closing abilities with leap attacks',
      'Low defensive investment for maximum offensive potential',
    ],
    weaknesses: [
      'Very low HP (640) making positioning critical',
      'No defensive resistances or blocks',
      'Vulnerable to ranged attacks and magic',
      'Must choose between two class paths',
    ],
    bestUse: 'General trait farming and high-mobility assassin tactics',
    classGuide:
      'IMPORTANT: Players can only choose ONE class path at deployment. Base skills are available to both classes. Class skills are marked with [SWAMP TYRANT CLASS] or [SWAMP PREDATOR CLASS].',
    classComparison: {
      swampTyrant: 'Higher raw damage with survival ability, better for solo engagements',
      swampPredator: 'Debuff-focused with conditional damage, better for team synergy',
    },
  },

  // Mercenary-specific information
  mercenaryInfo: {
    traitSource: true,
    generalTraitsAvailable: [
      'Mobility traits',
      'Evasion traits',
      'Melee damage traits',
      'Speed enhancement traits',
      'Swamp elf traits',
    ],
    traitTransferNotes:
      'Can be used to transfer general traits to other characters. The specific traits generated are random upon acquisition.',
    acquisitionMethod: 'Standard mercenary recruitment',
    classSelectionNote:
      'Players must choose between Swamp Tyrant or Swamp Predator class at deployment',
  },

  // Tags for filtering and categorization
  tags: [
    'Assassin',
    'High Mobility',
    'General Traits',
    'Dual Class',
    'Melee DPS',
    'Evasion',
    'Leap Attacks',
    'Swamp Elf',
    'Class Choice',
    'Trait Source',
  ],

  // Detail page URL
  detailUrl: '/guides/horizon-walker/mercenaries/swamp-elf-vigilante/',

  // SEO and metadata
  seo: {
    title: 'Swamp Elf Vigilante - Horizon Walker Mercenary Guide | B-Rank Dual Class Assassin',
    description:
      'Complete guide for Swamp Elf Vigilante, a B-rank mercenary in Horizon Walker. High-mobility dual class assassin with Swamp Tyrant and Swamp Predator specializations.',
    keywords: [
      'horizon walker swamp elf vigilante',
      'swamp elf vigilante mercenary',
      'horizon walker dual class unit',
      'horizon walker assassin mercenary',
      'swamp elf vigilante guide',
      'horizon walker general traits',
      'mercenary trait farming',
      'horizon walker b rank mercenary',
      'dual class mercenary',
    ],
  },
  heroId: 501,
  rarityStages: {
    'EX': {
      strength: 10,
      technic: 8,
      intelligence: 7,
      vitality: 10,
      agility: 14,
      maxHp: 640,
      meleeAtk: 128,
      rangedAtk: 102,
      magicAtk: 89,
      evade: 179,
      apRecovery: 115,
      startingAp: 112
    },
    'EX 1': {
      strength: 10,
      technic: 8,
      intelligence: 8,
      vitality: 10,
      agility: 14,
      maxHp: 640,
      meleeAtk: 128,
      rangedAtk: 102,
      magicAtk: 102,
      evade: 179,
      apRecovery: 115,
      startingAp: 112
    },
    'EX 2': {
      strength: 10,
      technic: 8,
      intelligence: 9,
      vitality: 10,
      agility: 14,
      maxHp: 640,
      meleeAtk: 128,
      rangedAtk: 102,
      magicAtk: 115,
      evade: 179,
      apRecovery: 115,
      startingAp: 112
    },
    'EX 3': {
      strength: 10,
      technic: 8,
      intelligence: 9,
      vitality: 10,
      agility: 15,
      maxHp: 640,
      meleeAtk: 128,
      rangedAtk: 102,
      magicAtk: 115,
      evade: 192,
      apRecovery: 117,
      startingAp: 114
    },
    'EX 4': {
      strength: 10,
      technic: 8,
      intelligence: 9,
      vitality: 11,
      agility: 15,
      maxHp: 704,
      meleeAtk: 128,
      rangedAtk: 102,
      magicAtk: 115,
      evade: 192,
      apRecovery: 117,
      startingAp: 114
    },
    'EX 5': {
      strength: 10,
      technic: 8,
      intelligence: 10,
      vitality: 12,
      agility: 15,
      maxHp: 768,
      meleeAtk: 128,
      rangedAtk: 102,
      magicAtk: 128,
      evade: 192,
      apRecovery: 117,
      startingAp: 114
    },
    'EX 6': {
      strength: 10,
      technic: 8,
      intelligence: 11,
      vitality: 12,
      agility: 15,
      maxHp: 768,
      meleeAtk: 128,
      rangedAtk: 102,
      magicAtk: 140,
      evade: 192,
      apRecovery: 117,
      startingAp: 114
    },
  },
};
