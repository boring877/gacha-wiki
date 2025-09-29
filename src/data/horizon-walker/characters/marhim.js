// Marhim Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawMarhimData = {
  // Basic Character Information
  name: 'Marhim',
  image: 'Marhim', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 4, // Deployment cost
  tags: [
    'Assassin',
    'Melee DPS',
    'Pierce Damage',
    'High Mobility',
    'Stealth',
    'High Evasion',
    'Critical Striker',
    'Weakness Hunter',
    'Execution',
    'Terror Effects',
    'AP Manipulation',
    'Catsidhe',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '14',
    technic: '10',
    intelligence: '6',
    vitality: '9',
    agility: '19',

    // Key Stats
    meleeAtk: '179',
    rangedAtk: '128',
    magicAtk: '76',
    maxHp: '576',
    spd: '138',
    startingAp: '139',
    apRecovery: '132',
    accuracy: '102',
    evade: '295',
    critRate: '10',
    critDmg: '150',

    // Attribute Boost
    slashBoost: '0',
    pierceBoost: '6',
    crushBoost: '0',
    heatBoost: '0',
    coldBoost: '0',
    electricBoost: '0',
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
    'A skilled Catsidhe assassin with a sharp personality who dreams of building a home with her best friend Nika, showcasing exceptional stealth and execution abilities.',

  // Character Profile
  profile: {
    age: '23',
    racial: 'Catsidhe',
    homeland: 'Ere, Square Path',
    height: '161cm',
    birthday: 'April 2nd',
    bwhRatio: '82(H)-50-91',
  },

  // Character Story
  story:
    'Marhim is a girl with clear likes and dislikes. Her sharp and straightforward personality often left her isolated, but she believed that as long as she demonstrated exceptional skill, people would eventually acknowledge her. With this mindset, she dedicated herself to her career as an assassin. Unfortunately, while she earned recognition as a highly skilled assassin, she never managed to make friends. After arriving on Earth, Marhim spent her days idly, which eventually led her to struggle with depression. Fortunately, she found a friend in Nika, someone her own age. Afterward, she applied to become a Vanguard alongside Nika, eager to showcase her abilities. Marhim dreams of becoming a Vanguard and one day building a small house where she and Nika can live together. She thinks of Nika as a sister and cannot imagine ever being separated from her, to the point of even imagining marrying the same man as Nika.',

  // Unique Traits
  uniqueTraits: {
    dirtyPairNika: {
      name: 'Dirty Pair • Nika',
      description:
        "Activates the Level 1 passive skill [Dirty Pair • Nika]. [Dirty Pair • Nika]: When Nika attacks, supports with the 'Dirty Pair • Dagger Throw' skill. Gains [Shadow Step] effect for 1 round afterwards. Dirty Pair • Dagger Throw: Throws a dagger at an enemy within 7m, dealing Pierce DMG equal to 40% of Melee ATK.",
    },
    crimsonMomentum: {
      name: 'Crimson Momentum',
      description:
        "Activates the Level 3 passive skill [Momentum]. [Momentum]: On a successful Weakness Attack, reduces the target's AP by 9 and gains the [Momentum] effect until the start of the next round. [Momentum]: Increases AP Recovery by 12%. Stacks up to 5 times.",
    },
    catsidhe: {
      name: 'Catsidhe',
      description: 'Agility 2',
    },
    interested: {
      name: 'Interested',
      description: 'Special trait with no listed characteristics.',
    },
  },

  // Skills and Passive
  skills: {
    catAttack: {
      name: 'Cat Attack',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        'After attacking the designated enemy, leaps low backward to move 4m away from the target. Deals Pierce DMG equal to 114% of melee ATK.',
    },
    shadowStep: {
      name: 'Shadow Step',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "If not under the Stealth effect at the end of the turn and there are no enemies within a 5m radius, gains the [Shadow Steps] effect for 1R. At the start of own turn, if under the Stealth effect, gains the [Shining Steps from the Shadows] effect. While in Stealth, can perform a support attack using the 'Dirty Pair • Dagger Throw' skill. [Shadow Steps]: Enters Stealth, preventing the user from becoming a target of enemy skills. [Shining Steps from the Shadows]: Increases SPD by 57. This effect is removed at the end of the turn.",
    },
    markOfSilentBlood: {
      name: 'Mark of Silent Blood',
      level: '10/10',
      type: 'Skill',
      apCost: 15,
      cooldown: 1,
      description:
        "Grants the [Assassin's mark] effect to the designated target for the current round, while increasing own SPD by 95% for 1R. [Assassin's mark]: Reduces Pierce DEF by 285 and prevents counterattacks.",
    },
    bloodsoakedExecution: {
      name: 'Bloodsoaked Execution',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 3,
      damage: {
        type: 'Melee ATK',
        value: '228%',
      },
      description:
        'Delivers a sudden deadly series of strikes to the enemy. Deals Pierce DMG equal to 228% of melee ATK. If a Weakness Attack is successful, the cooldown is immediately reset. If the enemy is defeated, gains 60 AP.',
    },
    crimsonTerror: {
      name: 'Crimson Terror',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'When the user defeats an enemy, gains the [Crimson Terror] effect for 2R and applies the [Crimson Oppression] effect to all enemies within a 5m radius. [Crimson Terror]: Increases melee ATK by 57%. [Crimson Oppression]: Prevents counterattacks until the end of the turn in which they are attacked.',
    },
  },

  // Weapon
  weapon: {
    name: 'EX Twin Swords - The Crimson Executioner',
    type: 'Twin Swords',
    rarity: 'EX',
    image: 'Marhim_WP.jpg',
    stats: {
      weaponMeleeAtk: '77.0',
      critRateBonus: '+49.0%',
    },
    uniqueSkills: {
      theCrimsonExecutioner: {
        name: 'The Crimson Executioner',
        type: 'Unique',
        description:
          'Increases Pierce Boost by 40% during battle. On attack, temporarily increases melee ATK proportionally based on the distance moved in a straight line this turn, up to 2m, increasing by 80%.',
      },
      theBloodbath: {
        name: 'Marhim Signature: The Bloodbath',
        type: 'Character Signature',
        description:
          "Using the 'Bloodsoaked Execution' skill during battle reduces its cooldown by 2 rounds.",
      },
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawMarhimData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const marhimData = sanitizeCharacterData(rawMarhimData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Dirty\s+Pair|Crimson\s+Momentum|Shadow\s+Steps|Shining\s+Steps\s+from\s+the\s+Shadows|Assassin's\s+mark|Crimson\s+Terror|Crimson\s+Oppression|Momentum|The\s+Crimson\s+Executioner|The\s+Bloodbath|stealth|weakness\s+attack)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Catsidhe|Nika|Ere|Square\s+Path|assassin|depression|Vanguard|sister|exceptional\s+skill|isolation|straightforward|deadly\s+series\s+of\s+strikes|small\s+house|leaps\s+backward|designated\s+target|support\s+attack|dagger\s+throw)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|Pierce|Slash|Crush|Physical|Heat|Cold|Electric|Immaterial|Poison|SPD|CRIT\s+rate|CRIT\s+DMG|Accuracy|Evade|HP|Max\s+HP|AP\s+Recovery|Intelligence|Strength|Technic|Vitality|Agility|Pierce\s+DEF|Pierce\s+Boost)\b/gi,
};

// Export sanitized highlighting patterns
export const marhimHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const marhimSEO = {
  title: 'Marhim - Horizon Walker Character Guide',
  description:
    'Complete guide for Marhim, an EX rarity Assassin character in Horizon Walker. Skilled Catsidhe assassin with stealth abilities, execution skills, and high mobility.',
  keywords: [
    'Marhim',
    'Horizon Walker',
    'EX rarity',
    'assassin',
    'catsidhe',
    'stealth',
    'pierce damage',
    'high mobility',
    'execution',
    'weakness hunter',
    'terror effects',
    'AP manipulation',
    'guide',
    'stats',
    'build',
  ],
};
