// Gulam Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawGulamData = {
  // Basic Character Information
  name: 'Gulam',
  image: 'Gulam', // Character image filename without extension
  rarity: 'SS', // EX, SS, S, A, B
  cost: 2, // Deployment cost
  tags: [
    'Assassin',
    'Melee DPS',
    'Evasion Tank',
    'Twin Blades',
    'Pierce Damage',
    'Burrow',
    'High Mobility',
    'Underground Fighter',
    'Counterattack Immune',
    'Kobold',
    'Romance Seeker',
    'High Evasion',
    'Stealth',
    'Critical Striker',
    'Surface Explorer',
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
    startingAp: '137',
    apRecovery: '119',
    accuracy: '102',
    evade: '250',
    critRate: '10',
    critDmg: '140',

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
    heatDef: '40',
    coldDef: '40',
    electricDef: '40',
    immaterialDef: '0',
    poisonDef: '0',
    blockRate: '0',
  },

  // Character Description
  description:
    'A romantic Kobold warrior from Rodriga who journeyed to the surface to learn exceptional swordsmanship and share new perspectives with his people.',

  // Character Profile
  profile: {
    age: '19',
    racial: 'Kobold',
    homeland: 'Rodriga, Margul Cavern',
    height: '118cm',
    birthday: 'September 14th',
    bwhRatio: '-',
  },

  // Character Story
  story:
    'Gulam was a warrior who harbored deep questions about the lives of his fellow kobolds living in the kobold nation of Rodriga. Unsatisfied with simply exploring underground and mining minerals, Gulam set out on a journey to the surface, where he learned about exceptional swordsmanship and a romantic approach to life. Upon returning home, he shared his insights with his fellow kobolds, but few chose to follow his path. After the Rift, Gulam proved his worth by rescuing his people, and now, he is preparing to embark on a new adventure in search of fresh romance.',

  // Unique Traits
  uniqueTraits: {
    unyieldingStyle: {
      name: 'Unyielding Style',
      description: 'Block Rate becomes 0%. Evasion increases by 30%. Block Rate -100%, Evade 30%',
    },
    flutteringRomance: {
      name: 'Fluttering Romance',
      description:
        'Activates the Level 3 passive skill [Bees and Butterflies]. [Bees and Butterflies]: On a successful attack during own turn, increases Evasion by 400% against enemy counterattacks and support counterattacks triggered during that turn.',
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
    undergroundEvasion: {
      name: 'Underground Evasion',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Each time a successful evasion occurs, gains the [Underground Evasion] effect. [Underground Evasion]: Increases Evasion by 76%. Stacks up to 5 times. This effect dissipates upon gaining the [Burrow] effect.',
    },
    lostElegance: {
      name: 'Lost Elegance',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Activates when receiving damage that would lead to incapacitation. Once per battle, HP will not fall below 1, and the user immediately burrows underground, entering [Burrow] state for 2R. Then gains 50 AP.',
    },
    explodingElegance: {
      name: 'Exploding Elegance',
      level: '10/10',
      type: 'Skill',
      apCost: 90,
      cooldown: 3,
      damage: {
        type: 'Melee ATK',
        value: '190%',
      },
      description:
        'Approaches gracefully with fluttering rose petals and delivers a picture-perfect strike. Deals Pierce DMG equal to 190% of melee ATK. Temporarily increases melee ATK by 95% of current Evasion for this attack.',
    },
  },

  // Weapon - Not available yet
  weapon: null,
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawGulamData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const gulamData = sanitizeCharacterData(rawGulamData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Unyielding\s+Style|Fluttering\s+Romance|Bees\s+and\s+Butterflies|Burrow|Underground\s+Evasion|Lost\s+Elegance|Exploding\s+Elegance|Romantic\s+Elegance|Underground\s+Romance|Romantic's\s+Embrace|twin\s+blades|rose\s+petals|picture-perfect\s+strike|gracefully|fluttering|underground|emerge|incapacitation|counterattacks|support\s+counterattacks)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|gains?|dissipates?|recovers?|unable|hidden|cannot\s+be\s+targeted|stacks?)(?:\s+\w{1,15}){0,5}\s+by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:kobold\s+nation|Rodriga|underground|mining\s+minerals|surface|exceptional\s+swordsmanship|romantic\s+approach|insights|fellow\s+kobolds|Rift|rescuing|fresh\s+romance|Margul\s+Cavern|twin\s+blades|burrows|emerges?|evasion|elegance|romance|counterattack\s+immune|stealth)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Pierce|Evasion|Block\s+Rate|Evade|Max\s+HP|Pierce\s+Boost|Current\s+Evasion|Pierce\s+DMG|HP|Cooldown)\b/gi,
};

// Export sanitized highlighting patterns
export const gulamHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const gulamSEO = {
  title: 'Gulam - Horizon Walker Character Guide',
  description:
    'Complete guide for Gulam, an SS rarity Kobold assassin in Horizon Walker. Twin blade wielder with burrow mechanics, high evasion, and romantic combat style.',
  keywords: [
    'Gulam',
    'Horizon Walker',
    'SS rarity',
    'assassin',
    'kobold',
    'twin blades',
    'evasion tank',
    'burrow',
    'underground fighter',
    'pierce damage',
    'high mobility',
    'romance seeker',
    'stealth',
    'critical striker',
    'guide',
    'stats',
    'build',
  ],
};
