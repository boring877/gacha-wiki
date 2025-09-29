// Berga Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawBergaData = {
  // Basic Character Information
  name: 'Berga',
  image: 'Berga', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 5, // Deployment cost
  tags: [
    'Warrior',
    'Tank',
    'Torturas User',
    'High ATK',
    'Melee Damage',
    'Slash Damage',
    'Crush Damage',
    'Self-Heal',
    'Defensive Scaling',
    'Torta',
    'Strategist',
    'Shut-in',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '20',
    technic: '8',
    intelligence: '6',
    vitality: '14',
    agility: '9',

    // Key Stats
    meleeAtk: '268',
    rangedAtk: '107',
    magicAtk: '76',
    maxHp: '768',
    spd: '85',
    startingAp: '101',
    apRecovery: '102',
    accuracy: '102',
    evade: '112',
    critRate: '10',
    critDmg: '150',

    // Attribute Boost
    slashBoost: '0',
    pierceBoost: '0',
    crushBoost: '0',
    heatBoost: '0',
    coldBoost: '0',
    electricBoost: '0',
    immaterialBoost: '0',
    poisonBoost: '0',

    // Attribute Defense
    slashDef: '30',
    pierceDef: '30',
    crushDef: '30',
    heatDef: '0',
    coldDef: '0',
    electricDef: '0',
    immaterialDef: '0',
    poisonDef: '0',
    blockRate: '30',
  },

  // Character Description
  description:
    'A brilliant Torta strategist and daughter of Bergo, struggling with PTSD from her journey to Earth while immersing herself in Earth culture as a coping mechanism.',

  // Character Profile
  profile: {
    age: '26',
    racial: 'Torta',
    homeland: 'Tortaria, Fjord of Blades',
    height: '182cm',
    birthday: 'Winter',
    bwhRatio: '111(K)-61-124',
  },

  // Character Story
  story:
    "Berga, the daughter of Bergo, served as the strategist for Osla's warrior corps. Though she was naturally muscular, her intellect surpassed even her physical strength, earning her recognition for her brilliant contributions to the corps. Her reserved demeanor was interpreted as humility, which garnered her widespread trust and respect. In reality, she was simply an introvert, and during the journey to Earth, losing many of her people left her struggling with PTSD, driving her even deeper into herself. Since arriving on Earth, Berga has immersed herself in her hobbies rather than engaging in any work. On the surface, she seems overly fascinated with Earth's culture, appearing to be obsessed with various forms of media. She leads an extremely reclusive life, and to those who don't know her well, she may seem like nothing more than a shut-in. However, Berga is suffering from a deep emotional wound and is in dire need of healing.",

  // Unique Traits
  uniqueTraits: {
    shutInAffinity: {
      name: 'Shut-in Affinity',
      description:
        'Activates the Level 1 passive skill [Healthy Adjustment]. [Healthy Adjustment]: Recovers HP equal to 180% of Magic ATK when using a Basic ATK. If the attack hits a Weak Point, recovers an additional 240% of Magic ATK as HP. Aggro Adjustment -40. Max HP -20%.',
    },
    hikikomoriResilience: {
      name: "Hikikomori's Resilience",
      description:
        'Gain 1 stack of [Kinetic Momentum] for 2 rounds when using a combat skill. [Conservation of Momentum]: At the start of your turn, if you have the [Kinetic Momentum] effect, the SPD increases by 80% and Basic ATK AP cost is reduced by 65% for that turn. At the start of your turn, if another Vanguard (excluding the Human God) is within 3m, gain the [Comfort Zone Breach] effect. [Kinetic Momentum]: Can stack up to 3 times. 1 stack is consumed with each Basic ATK. [Comfort Zone Breach]: Personal space is a thing, you know... SPD decreases by 3%.',
    },
    torta: {
      name: 'Torta',
      description: 'Vitality 1, Evade -2%',
    },
    interested: {
      name: 'Interested',
      description: 'Special trait with no listed characteristics.',
    },
  },

  // Skills and Passive
  skills: {
    hideSplitter: {
      name: 'Hide Splitter',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '190%',
      },
      description:
        'Swings a deadly Torturas to deal Slash DMG equal to 190% of melee ATK to the enemy.',
    },
    giantsLeap: {
      name: "Giant's Leap",
      level: '10/10',
      type: 'Skill',
      apCost: 25,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '285%',
      },
      description:
        "Can only be used when the user's HP is above 15%. Consumes 12% of each ally's AP (excluding self) to activate. After use, the caster loses 12% of their current HP. Leaps toward the enemy and strikes down with force. Deals Crush DMG equal to 285% of Melee ATK to the target on hit. Can only be used once per round on the same target.",
    },
    adaptiveMuscle: {
      name: 'Adaptive Muscle',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'If HP is 50% or higher when attacking, CRIT DMG increases by 80%. If HP is 20% or lower when hit, all DEF increases by the same amount as your CRIT DMG. This DEF increase scales with missing HP, up to a maximum of 1.3X.',
    },
    bladeStorm: {
      name: 'Blade Storm',
      level: '10/10',
      type: 'Skill',
      apCost: 65,
      cooldown: 3,
      damage: {
        type: 'Melee ATK',
        value: '171%',
      },
      description:
        'After using this skill, AP recovery is reduced by 20 for 1 round. Rushes forward while swinging a Torturas. Charges 8m forward, dealing Slash DMG equal to 171% of Melee ATK to all enemies within a 2m radius along the path. This skill cannot trigger Weak Point Attacks, but temporarily increases ACC by 100%.',
    },
    oathOfPunishmentAndCrushing: {
      name: 'Oath of Punishment and Crushing',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "Gain 1 stack of [The Fire Within] whenever an ally is hit. When [The Fire Within] reaches max stacks, automatically respond with the skill 'Pent-Up Wrath.' While under the effect of [Bloodrush], gain 12 AP whenever an ally is hit. [The Fire Within]: Increases Magic ATK by 3% per stack, up to 4 stacks.",
    },
  },

  // Weapon
  weapon: {
    name: 'EX Torturas - Crimson Veil Torturas',
    type: 'Torturas',
    rarity: 'EX',
    image: 'Berga_WP.jpg',
    stats: {
      weaponMeleeAtk: '77.0',
      maxHpBonus: '+49.0%',
    },
    uniqueSkills: {
      crimsonBeastStrike: {
        name: 'Crimson Beast Strike',
        type: 'Unique',
        description:
          'Increases Slash Boost by 3.2% of Max HP during combat. When hit by a Weak Point Attack, All DEF increases by 2000 for the rest of the turn. After using a Charge, Leap, Teleportation, or Self-Mobility skill, gain 3 stacks of [Wild Rush] for 2 rounds. At the start of your turn, if you have [Wild Rush], Slash Boost increases by 40% for that turn. [Wild Rush]: Can stack up to 5 times. Loses 1 stack at the end of your turn after attacking.',
      },
      mirrorOfTheWild: {
        name: 'Berga Signature: Mirror of the Wild',
        type: 'Berga Signature',
        description:
          'At the start of battle, gain 2 stacks of [The Fire Within]. At the start of your first turn, gain 45 AP and increase SPD by 40% for that turn. When gaining the [Bloodrush] effect, CRIT Chance increases by an additional 33% for 2 rounds and grants immunity to [Taunt], [Fear], [Sleep], [Madness], [Stun], and [Focus Disruption].',
      },
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawBergaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const bergaData = sanitizeCharacterData(rawBergaData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Shut-in\s+Affinity|Hikikomori's\s+Resilience|Healthy\s+Adjustment|Kinetic\s+Momentum|Conservation\s+of\s+Momentum|Comfort\s+Zone\s+Breach|The\s+Fire\s+Within|Wild\s+Rush|Bloodrush|Mirror\s+of\s+the\s+Wild|Crimson\s+Beast\s+Strike|Pent-Up\s+Wrath)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Bergo|Osla's\s+warrior\s+corps|Tortaria|Fjord\s+of\s+Blades|Torta|strategist|PTSD|Earth\s+culture|shut-in|reclusive\s+life|emotional\s+wound|healing|muscular|intellect|reserved\s+demeanor|humility|introvert|hobbies|media|Torturas|deadly|leaps\s+toward)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|All\s+ATK|All\s+DEF|Slash|Pierce|Crush|Physical|Heat|Cold|Electric|Immaterial|Poison|SPD|CRIT\s+rate|CRIT\s+DMG|CRIT\s+Chance|Accuracy|ACC|Evade|HP|Max\s+HP|AP\s+Recovery|Intelligence|Strength|Technic|Vitality|Agility|Slash\s+Boost|Aggro\s+Adjustment)\b/gi,
};

// Export sanitized highlighting patterns
export const bergaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const bergaSEO = {
  title: 'Berga - Horizon Walker Character Guide',
  description:
    'Complete guide for Berga, an EX rarity Warrior character in Horizon Walker. Brilliant Torta strategist with Torturas weapons, defensive scaling, and self-healing abilities.',
  keywords: [
    'Berga',
    'Horizon Walker',
    'EX rarity',
    'warrior',
    'tank',
    'torta',
    'torturas',
    'strategist',
    'shut-in',
    'defensive scaling',
    'self-heal',
    'slash damage',
    'crush damage',
    'guide',
    'stats',
    'build',
  ],
};
