// Canisk Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawCaniskData = {
  // Basic Character Information
  name: 'Canisk',
  image: 'Canisk', // Character image filename without extension
  rarity: 'S', // EX, SS, S, A, B
  cost: 5, // Deployment cost
  tags: [
    'Warrior',
    'Tank',
    'Melee Damage',
    'Slash Damage',
    'Physical Damage',
    'Counterattack',
    'Taunt',
    'Self-Healing',
    'Berserker',
    'High Defense',
    'Area Damage',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '17',
    technic: '7',
    intelligence: '6',
    vitality: '16',
    agility: '9',

    // Key Stats
    meleeAtk: '298',
    rangedAtk: '122',
    magicAtk: '76',
    maxHp: '972',
    spd: '92',
    startingAp: '128',
    apRecovery: '102',
    accuracy: '102',
    evade: '115',
    critRate: '10',
    critDmg: '156',

    // Attribute Boost
    slashBoost: '15',
    pierceBoost: '15',
    crushBoost: '15',
    heatBoost: '0',
    coldBoost: '0',
    electricBoost: '0',
    immaterialBoost: '0',
    poisonBoost: '0',

    // Attribute Defense
    slashDef: '50',
    pierceDef: '50',
    crushDef: '50',
    heatDef: '0',
    coldDef: '0',
    electricDef: '0',
    immaterialDef: '0',
    poisonDef: '0',
    blockRate: '50',
  },

  // Character Description
  description:
    'A young Grrik warrior who grew up on Earth without proper Grrik education, earning the shameful title "rabid dog" for their lack of restraint and honor.',

  // Character Profile
  profile: {
    age: '16',
    racial: 'Grrik',
    homeland: 'Kingdom of Fangs, Luicka',
    height: '225cm',
    birthday: "Bear's month, the Fifth day",
    bwhRatio: '-',
  },

  // Character Story
  story:
    'Canisk was a Grrik who arrived on Earth during childhood. Those early years were harsh—so harsh that Canisk received no proper education beyond combat, nor learned the Grrik code of honor. Concepts like mercy and restraint made no sense; why should one hold back from striking the wicked or the weak? Such thinking, however, earned Canisk the gravest insult among their kind: "rabid dog." Shunned and scorned, Canisk grew more isolated—and more twisted.\\n\\nThough they longed, deep down, to understand the Grrik tradition of brotherhood, they masked that yearning behind a hardened, solitary front. For a time, Canisk wandered from place to place, offering their strength wherever brute force was in demand—like a mercenary. And yet, buried deep within, the old Grrik instinct—the desire to belong to a pack—still stirs, quietly urging Canisk toward something more.',

  // Unique Traits
  uniqueTraits: {
    theRabidDog: {
      name: 'The Rabid Dog',
      description:
        'Activates the Level 1 passive skill [The Rabid Dog]. [The Rabid Dog]: When an ally becomes incapacitated, overwhelming vengeance surges. Immediately gain the [Mad Dog] effect for 2 Rounds. [Mad Dog]: Cannot be commanded as chosen humans, acts aggressively on its own, does not use the "Thousand Arms Stance" skill. SPD increases by 30%, AP Recovery increases by 30%, and Melee ATK increases by 50%.',
    },
    grriksSincerity: {
      name: "Grrik's Sincerity",
      description: 'Melee ATK 30%',
    },
    grrik: {
      name: 'Grrik',
      description:
        'Slash Boost 15%, Pierce Boost 15%, Crush Boost 15%, Slash DEF 50, Pierce DEF 50, Crush DEF 50',
    },
  },

  // Skills and Passive
  skills: {
    brotherhoodsStrike: {
      name: "Brotherhood's Strike",
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        'Swings the greatsword horizontally, slashing enemies within a fan-shaped range. Deals Slash DMG equal to 114% of melee ATK.',
    },
    thousandArmsStance: {
      name: 'Thousand Arms Stance',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 0,
      description:
        'Raises the greatsword and assumes a counterattack stance. Enters [Counterattack Posture] until the start of the next round, increasing CRIT rate by 57% and performing counterattacks regardless of the base number of counterattacks.',
    },
    tauntingRoar: {
      name: 'Taunting Roar',
      level: '10/10',
      type: 'Skill',
      apCost: 15,
      cooldown: 3,
      damage: {
        type: 'Magic ATK',
        value: '57%',
      },
      description:
        'Plant your sword into the ground and unleash a roar. Deals Crush DMG equal to 57% of Magic ATK in a 5m circular AoE. Enemies hit are inflicted with [Taunt] for 2 rounds and have all ATK reduced by 38% for 2 rounds. Your Aggro Adjustment increases for the duration. This attack temporarily increases Accuracy by 300%.',
    },
    splitTheCrown: {
      name: 'Split the Crown',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 2,
      damage: {
        type: 'Melee ATK',
        value: '190%',
      },
      description:
        "Strikes downward with a greatsword to deliver a powerful blow. Deals Slash DMG equal to 190% of Melee ATK. This skill's Slash Boost increases proportionally to missing HP, up to 200% for the turn it's used. If this skill defeats an enemy, restores 76% of Max HP as HP Recovery.",
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawCaniskData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const caniskData = sanitizeCharacterData(rawCaniskData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:The\s+Rabid\s+Dog|Mad\s+Dog|Grrik's\s+Sincerity|Counterattack\s+Posture|Taunt|brotherhood|rabid\s+dog|counterattack|missing\s+HP|HP\s+Recovery|Aggro\s+Adjustment)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:incapacitated|vengeance|aggressively|proportionally|temporarily|defeated|commanded|chosen\s+humans|Kingdom\s+of\s+Fangs|Grrik\s+code\s+of\s+honor|brotherhood|mercenary)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Magic\s+ATK|Slash|Pierce|Crush|Physical|Heat|Cold|Electric|Immaterial|Poison|SPD|CRIT\s+rate|Accuracy|HP|Max\s+HP|all\s+ATK|DEF|Boost)\b/gi,
};

// Export sanitized highlighting patterns
export const caniskHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const caniskSEO = {
  title: 'Canisk - Horizon Walker Character Guide',
  description:
    'Complete guide for Canisk, an S rarity Warrior character in Horizon Walker. Young Grrik warrior with berserker mechanics, high defense, and powerful counterattack abilities.',
  keywords: [
    'Canisk',
    'Horizon Walker',
    'S rarity',
    'warrior',
    'grrik',
    'tank',
    'berserker',
    'melee damage',
    'slash damage',
    'counterattack',
    'rabid dog',
    'guide',
    'stats',
    'build',
  ],
};
