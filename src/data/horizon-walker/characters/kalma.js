// Kalma Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawKalmaData = {
  // Basic Character Information
  name: 'Kalma',
  image: 'Kalma', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 5, // Deployment cost
  tags: [
    'Mage',
    'Electromancer',
    'Electric Damage',
    'Area Damage',
    'Burst Damage',
    'Kesak',
    'Storm Clan',
    'Mobility',
    'Charge',
    'Debuffer',
    'Team Support',
    'Political Ambition',
    'Bel-Lamori',
    'Vanguard',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '4',
    technic: '5',
    intelligence: '13',
    vitality: '10',
    agility: '17',

    // Key Stats
    meleeAtk: '51',
    rangedAtk: '64',
    magicAtk: '316',
    maxHp: '892',
    spd: '82',
    startingAp: '130',
    apRecovery: '127',
    accuracy: '102',
    evade: '217',
    critRate: '10',
    critDmg: '150',

    // Attribute Boost
    slashBoost: '0',
    pierceBoost: '0',
    crushBoost: '0',
    heatBoost: '0',
    coldBoost: '0',
    electricBoost: '8',
    immaterialBoost: '0',
    poisonBoost: '0',

    // Attribute Defense
    slashDef: '0',
    pierceDef: '0',
    crushDef: '0',
    heatDef: '0',
    coldDef: '0',
    electricDef: '0',
    immaterialDef: '0',
    poisonDef: '0',
    blockRate: '0',
  },

  // Character Description
  description:
    'The sole survivor of the Kesak Storm Clan, now serving as a Vanguard with ambitions to become president of the Federation and lead the fight against the Rift.',

  // Character Profile
  profile: {
    age: '28',
    racial: 'Human (Kesak)',
    homeland: 'Bel-Lamori',
    height: '182cm',
    birthday: 'June 4',
    bwhRatio: '105(K)-58-113',
  },

  // Character Story
  story:
    "Once named heir to the Storm Clan of the Kesak, Kalma showed remarkable brilliance from an early age. She mastered the clan's treasured Storm Cell with ease, and all believed she was destined for greatness. But when the Rift annihilated her people, leaving her the sole survivor, she appeared on Earth with a new dream—no longer to be the Kesak's greatest raider, but to become president of the Federation. Now serving as a Vanguard under the Human God, Kalma sees this as the perfect chance to rise as a political powerhouse. With unshakable ambition, she marches forward, determined to claim the presidency and lead the charge against the Rift.",

  // Unique Traits
  uniqueTraits: {
    topGradeMind: {
      name: 'Top-Grade Mind',
      description: 'Formation Cost +1, Max HP -18%, Magic ATK 175%',
    },
    heartOfThunderAndWind: {
      name: 'Heart of Thunder and Wind',
      description:
        'Activates the Level 1 passive skill [Lingering Lightning]. [Lingering Lightning]: When using a skill that is not Standby and not a Response skill, gain 1 stack of [Surging Spark], an energy that circles around you. At the start of your turn, if [Surging Spark] is at max stacks, consumes all stacks to reset the cooldown of "Bolt Chaser." [Surging Spark]: Stacks up to 2 times.',
    },
    kesak: {
      name: 'Kesak',
      description: 'Intelligence -4, Vitality 7',
    },
    interested: {
      name: 'Interested',
      description: 'Special trait with no listed characteristics.',
    },
  },

  // Skills and Passive
  skills: {
    boltSlash: {
      name: 'Bolt Slash',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '152%',
      },
      description:
        'Launches an electrified sphere to attack. The sphere burrows into the targeted enemy before bursting outward in all directions. Deals Electric DMG equal to 152% of Magic ATK to the target, and Splash Electric DMG equal to 48% of Magic ATK to enemies within a 4m radius. The designated target cannot be hit with a standard Weakness Attack by this skill.',
    },
    chargeAccumulation: {
      name: 'Charge Accumulation',
      level: '1/1',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'When using a skill that is not Standby and not a Response skill, gain 1 stack of [Charge].',
    },
    boltChaser: {
      name: 'Bolt Chaser',
      level: '10/10',
      type: 'Skill',
      apCost: 15,
      cooldown: 2,
      damage: {
        type: 'Magic ATK',
        value: '67%',
      },
      description:
        'Dashes like lightning in the chosen direction. Charges 7m forward, dealing Electric DMG equal to 67% of Magic ATK to enemies within 3m along the path, and gains [Extra Action] once. After using this skill, Magic ATK increases by 70% for 1R and any attack made this turn via [Extra Action] is treated as a Weak Point Attack. This skill is considered a Basic Skill and cannot deal Weak Point Attack on its own.',
    },
    lightningCascade: {
      name: 'Lightning Cascade',
      level: '10/10',
      type: 'Skill',
      apCost: 65,
      cooldown: 1,
      damage: {
        type: 'Magic ATK',
        value: '285%',
      },
      description:
        'Emits a powerful current from your fingertips for a short time. Deals Electric DMG equal to 285% of Magic ATK to enemies within a 5m, 150° frontal cone, and inflicts [Volt Mark] for 1R on hit enemies. When an ally attacks an enemy with [Volt Mark], all ATK increases by 20% for 2R. While using this skill, ACC is temporarily increased by 100%.',
    },
    ragingThunderstorm: {
      name: 'Raging Thunderstorm',
      level: '10/10',
      type: 'Skill',
      apCost: 80,
      cooldown: 1,
      damage: {
        type: 'Magic ATK',
        value: '342%',
      },
      description:
        'If you have 5 stacks of [Charge], consumes all stacks to use this skill. Summons a storm and strikes with a fierce bolt of lightning. Deals Electric DMG equal to 342% of Magic ATK to enemies within a 2.5m radius. Upon attack, temporarily increases Crit DMG by 10% for every INT exceeding 6, and if the target has [Volt Mark], reduces their Electric DEF by 800 until the end of the turn. This attack is treated as a Weak Point Attack, and temporarily increases ACC by 300%.',
    },
    flashbreak: {
      name: 'Flashbreak',
      level: '1/1',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'When "Raging Thunderstorm" hits 2 or fewer enemies, temporarily increases Magic ATK by 18%. When using "Bolt Chaser," reduces the AP cost of "Lightning Cascade" and "Raging Thunderstorm" by 15 until the end of the turn.',
    },
  },

  // Effects descriptions
  effects: {
    charge: {
      name: 'Charge',
      description: "A base effect used by the Electromancer's skills. Stacks up to 5 times.",
    },
    extraAction: {
      name: 'Extra Action',
      description:
        'After acting on your turn, gain 1 Extra Action. However, if no Active skills can be used with the remaining AP, the Extra Action is not granted.',
    },
    voltMark: {
      name: 'Volt Mark',
      description:
        "When attacking a target with this effect, the attacker's All ATK increases by 20% for 2R.",
    },
    surgingSpark: {
      name: 'Surging Spark',
      description:
        'An energy that circles around you, gained from Lingering Lightning. Stacks up to 2 times.',
    },
  },

  // Weapon
  weapon: {
    name: "EX Arcane Orb - Storm's Eye",
    type: 'Arcane Orb',
    rarity: 'EX',
    image: 'Kalma_WP.jpg',
    stats: {
      weaponMagicAtk: '105.0',
      critDmgBonus: '+42.0%',
    },
    uniqueSkills: {
      cruiseSystem: {
        name: 'Cruise System',
        type: 'Unique',
        description:
          'During combat, Magic ATK increases by 40%. When using a skill other than Standby, gain [Overvoltage] for 1 Round. [Overvoltage]: Increases Electric Boost by 24%. If the skill used was a charge, leap, teleportation, or self-mobility skill refreshes the effect to increase Electric Boost by 64% instead.',
      },
      clearYourMindAndShoot: {
        name: 'Kalma Signature: Clear Your Mind and Shoot',
        type: 'Signature',
        description:
          'During combat, Increases Crit Rate by 6.8%, and "Raging Thunderstorm" becomes a area-targeted attack, its attack radius increases by 1m, and its damage increases by 15%. When "Lightning Cascade" hits, temporarily reduces the target\'s Electric DEF by 240.',
      },
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawKalmaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const kalmaData = sanitizeCharacterData(rawKalmaData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Top-Grade\s+Mind|Heart\s+of\s+Thunder\s+and\s+Wind|Lingering\s+Lightning|Kesak|Charge|Extra\s+Action|Volt\s+Mark|Surging\s+Spark|Overvoltage|Cruise\s+System|Clear\s+Your\s+Mind\s+and\s+Shoot|Storm\s+Clan|Storm\s+Cell|electromancer|political\s+ambition)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Kalma|Kesak|Storm\s+Clan|Bel-Lamori|Federation|president|Rift|Vanguard|Human\s+God|sole\s+survivor|political\s+powerhouse|electrified\s+sphere|lightning|thunder|storm|bolt|electric|charge|dash|cascade|thunderstorm)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|Electric|Slash|Pierce|Crush|Heat|Cold|Immaterial|Poison|SPD|CRIT\s+rate|CRIT\s+DMG|Accuracy|ACC|Evade|HP|Max\s+HP|AP\s+Recovery|Intelligence|INT|Strength|Technic|Vitality|Agility|Electric\s+Boost|Electric\s+DEF|All\s+ATK|Weak\s+Point\s+Attack|Splash\s+Electric\s+DMG)\b/gi,
};

// Export sanitized highlighting patterns
export const kalmaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const kalmaSEO = {
  title: 'Kalma - Horizon Walker Character Guide',
  description:
    'Complete guide for Kalma, an EX rarity Electromancer character in Horizon Walker. Storm Clan survivor with electric damage, charge mechanics, and political ambitions.',
  keywords: [
    'Kalma',
    'Horizon Walker',
    'EX rarity',
    'mage',
    'electromancer',
    'electric damage',
    'Kesak',
    'Storm Clan',
    'Bel-Lamori',
    'burst damage',
    'area damage',
    'charge',
    'Bolt Chaser',
    'Raging Thunderstorm',
    'Lightning Cascade',
    'guide',
    'stats',
    'build',
  ],
};
