// Gulsni Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawGulsniData = {
  // Basic Character Information
  name: 'Gulsni',
  image: 'Gulsni', // Character image filename without extension
  rarity: 'S', // EX, SS, S, A, B
  cost: 2, // Deployment cost
  tags: [
    'Warrior',
    'Tank',
    'Evasion Tank',
    'Melee Damage',
    'Pierce Damage',
    'Crush Damage',
    'Underground Fighter',
    'Burrow Mechanic',
    'High Evasion',
    'Physical Defense',
    'Taunt',
    'Self-Healing',
    'Debuffer',
    'Kobold',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '8',
    technic: '7',
    intelligence: '7',
    vitality: '11',
    agility: '14',

    // Key Stats
    meleeAtk: '102',
    rangedAtk: '89',
    magicAtk: '89',
    maxHp: '774',
    spd: '117',
    startingAp: '125',
    apRecovery: '115',
    accuracy: '102',
    evade: '197',
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
    'A young Kobold from the distinguished Gul family, naive but talented in combat with a strong sense of adventure.',

  // Character Profile
  profile: {
    age: '12',
    racial: 'Kobold',
    homeland: 'Rodriga, Margul Cavern',
    height: '121cm',
    birthday: 'August 1st',
    bwhRatio: '-',
  },

  // Character Story
  story:
    'Gulsni was born into the distinguished Gul family, a prominent name even among the Kobolds. Though the Gul family lost their homeland to the Rift, they found business success on Earth by undertaking dangerous mining operations, and they hoped to collaborate with humans to further expand their business. Gulsni, however, was too naive to be suited for business, but he had a talent for combat and a strong sense of adventure, leading to his selection within the Gul family to apply to become a Vanguard. Gulsni is a Kobold whose intelligence falls just slightly below the average in a race with a wide range of intellectual abilities. He is simple, kind-hearted, and views the world without prejudice, seeing things purely for what they are. Despite his limited intelligence, Gulsni possesses considerable insight through his unbiased perspective. He is now aspiring to become a Vanguard, ready to fight against the Rift.',

  // Unique Traits
  uniqueTraits: {
    pureEyes: {
      name: 'Pure Eyes',
      description:
        'Activates the Level 1 passive skill [Pure Eyes]. [Pure Eyes]: When the enemy attacks Gulsni, an unknown guilt is felt, reducing All ATK by 5% for 2 rounds. Can stack up to 3 times.',
    },
    cantCatchUp: {
      name: "Can't Catch Up!",
      description:
        'Activates the Level 3 passive skill [Comfort]. [Comfort]: At the Start of Turn, if in [Burrow] state, Recovers HP by 30% of Max HP.',
    },
    kobold: {
      name: 'Kobold',
      description: 'Evade 10%, Max HP 10%',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the chosen Human.',
    },
  },

  // Skills and Passive
  skills: {
    undergroundTwinSwords: {
      name: 'Underground Twin Swords',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        'Quickly stabs the enemy with twin blades. Deals Pierce DMG equal to 114% of melee ATK.',
    },
    burrow: {
      name: 'Burrow',
      level: '10/10',
      type: 'Skill',
      apCost: 27,
      cooldown: 1,
      description:
        'Burrows underground and gains the [Burrow] effect for 2 rounds. [Burrow]: Unable to counter, evade, block, or use general skills. Hidden and cannot be targeted by enemy skills. Can use the "Emerge" skill. Emerge: Select ground within 9m to move to that location and emerge, ending the [Burrow] state.',
    },
    undergroundDefenseTechniques: {
      name: 'Underground Defense Techniques',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description: 'Increases Physical DEF by 285 and Block Chance by 19%.',
    },
    undergroundExplosion: {
      name: 'Underground Explosion',
      level: '10/10',
      type: 'Skill',
      apCost: 90,
      cooldown: 4,
      damage: {
        type: 'Melee ATK',
        value: '190%',
      },
      description:
        'Erupts from the ground, causing devastation. Can only be used in [Burrow] state. Deals Crush DMG equal to 190% of melee ATK, knocks back the enemy 3m, and [Taunts] for 1R. Cannot perform a weakness attack with this skill.',
    },
    improvisedFortress: {
      name: 'Improvised Fortress',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'If in [Burrow] state at the start of the turn, the effect applies. Increases Physical DEF by 570 and AP Recovery by 38% until the start of the next round.',
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawGulsniData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const gulsniData = sanitizeCharacterData(rawGulsniData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Pure\s+Eyes|Comfort|Burrow|Emerge|Taunt|Block\s+Chance|Physical\s+DEF|AP\s+Recovery|Max\s+HP|All\s+ATK|underground|twin\s+blades|emerges?|erupts?|devastation|guilt|stack|recovers?|hidden|targeted|weakness\s+attack)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|recovers?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:distinguished|prominent|homeland|mining|operations|collaborate|naive|talented|adventure|Vanguard|intelligence|simple|kind-hearted|prejudice|unbiased|perspective|insight|aspiring|Rift|underground|burrows?|emerges?|knocks\s+back|unable|counter|evade|block|general\s+skills|Gul\s+family|Margul\s+Cavern|Kobolds?)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Magic\s+ATK|Pierce|Crush|Physical|Heat|Cold|Electric|Immaterial|Poison|SPD|Block|Accuracy|HP|Max\s+HP|All\s+ATK|DEF|Boost|Evade|Start\s+of\s+Turn)\b/gi,
};

// Export sanitized highlighting patterns
export const gulsniHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const gulsniSEO = {
  title: 'Gulsni - Horizon Walker Character Guide',
  description:
    'Complete guide for Gulsni, an S rarity Kobold warrior in Horizon Walker. Underground fighter with burrow mechanics, high evasion, and unique defensive abilities.',
  keywords: [
    'Gulsni',
    'Horizon Walker',
    'S rarity',
    'warrior',
    'kobold',
    'tank',
    'evasion tank',
    'burrow',
    'underground fighter',
    'pierce damage',
    'crush damage',
    'guide',
    'stats',
    'build',
  ],
};
