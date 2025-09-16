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

  // Images
  image: '/images/games/horizon-walker/characters/Swamp_Elf_Vigilante_member.jpg',

  // Basic Stats (at max level)
  stats: {
    // Basic Stats
    strength: 14,
    technic: 8,
    intelligence: 5,
    vitality: 10,
    agility: 17,

    // Key Combat Stats
    meleeAtk: 179,
    rangedAtk: 102,
    magicAtk: 64,
    maxHp: 640,
    spd: 157,
    startingAp: 119,
    apRecovery: 122,
    accuracy: 102,
    evade: 217,
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
        '[BASE SKILL] The swamp elf extends their long arms and swiftly swings the harpe. Deals Slash DMG equal to 114% of melee ATK.',
      tags: ['Melee', 'Slash', 'Base Skill', 'Harpe'],
      skillClass: 'base-skill',
    },
    {
      name: 'Hunter on the Vine',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description:
        '[BASE SKILL] Increases Mobility by 10. After attacking, Evasion increases by 570% until the end of the turn. Additionally, during a basic attack, Melee ATK increases proportionally to the straight distance moved. Up to 10m movement grants a maximum of 114% increase.',
      tags: ['Passive', 'Mobility', 'Evasion', 'Movement Bonus', 'Base Skill'],
      skillClass: 'base-skill',
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
        '[SWAMP TYRANT CLASS] Leaps high and dives quickly to ambush enemies. Jumps to the designated location and deals Slash DMG equal to 190% of melee ATK to all enemies within a 1.3m circular radius. Ignores counterattacks from the target.',
      tags: ['Melee', 'Slash', 'AoE', 'Leap', 'No Counter', 'Tyrant Class'],
      skillClass: 'class-skill',
    },
    {
      name: 'Blades of Tyranny',
      type: 'Active',
      level: '10/10',
      apCost: 90,
      cooldown: '2R',
      damage: 'Melee ATK 380%',
      description:
        '[SWAMP TYRANT CLASS] The harpe slashes around with lightning-like speed. Deals Slash DMG equal to 380% of melee ATK to all enemies within a 2.5m circular radius.',
      tags: ['Melee', 'Slash', 'AoE', 'High Damage', 'Lightning Speed', 'Tyrant Class'],
      skillClass: 'class-skill',
    },
    {
      name: 'Survival Expert',
      type: 'Passive',
      level: '10/10',
      apCost: 0,
      cooldown: '0R',
      description:
        '[SWAMP TYRANT CLASS] Once per battle, survives with 1 HP and immediately gains 150 AP.',
      tags: ['Passive', 'Survival', 'AP Gain', 'Once Per Battle', 'Tyrant Class'],
      skillClass: 'class-skill',
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
        '[SWAMP PREDATOR CLASS] Leaps low towards the enemy, delivering a deadly strike while passing by with two Harpe blades. Deals Slash DMG equal to 257% of melee ATK while leaping over the enemy. If the target has the [Slow] effect, deals additional Slash DMG equal to 190% of melee ATK.',
      tags: ['Melee', 'Slash', 'Conditional', 'Leap', 'Combo', 'Predator Class'],
      skillClass: 'class-skill',
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
  detailUrl: '/guides/horizon-walker/mercenaries/swamp-elf-vigilante',

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
};
