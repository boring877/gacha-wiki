// Fammene Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawFammeneData = {
  // Basic Character Information
  name: 'Fammene',
  image: 'Fammene', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 5, // Deployment cost
  tags: [
    'Mage',
    'Support',
    'Wind Magic',
    'Magic User',
    'Team Buffer',
    'Shield Provider',
    'AP Support',
    'Speed Enhancement',
    'Wind Guide',
    'Windweaver',
    'Area Support',
    'Buff Stacking',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '4',
    technic: '5',
    intelligence: '15',
    vitality: '11',
    agility: '15',

    // Key Stats
    meleeAtk: '64',
    rangedAtk: '76',
    magicAtk: '255',
    maxHp: '682',
    spd: '88',
    startingAp: '118',
    apRecovery: '117',
    accuracy: '102',
    evade: '192',
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
    heatDef: '50',
    coldDef: '50',
    electricDef: '50',
    immaterialDef: '50',
    poisonDef: '50',
    blockRate: '0',
  },

  // Character Description
  description:
    'A beautiful Windweaver from the Windpetal Tower who escaped persecution and joined Crown Princess Maximilia as a Wind Guide, now seeking to prove herself as a Vanguard.',

  // Character Profile
  profile: {
    age: '24',
    racial: 'Human (Noctis Nebula)',
    homeland: 'Tranel Republic, Rhadam',
    height: '171cm',
    birthday: 'May 16th',
    bwhRatio: '88(G)-54-94',
  },

  // Character Story
  story:
    "Fammene, one of the Windweavers of the Windpetal Tower, was known from childhood for her beauty and her colorful romances. At the young age of nineteen, she married one of the scions of the Grand Duke of Tranel's family. Unfortunately for Fammene, her husband mysteriously died one night, and she was accused of causing his death during their conjugal relations, leading to her confinement in a convent. To make matters worse, the rumors from her single days painted her as a debauched woman, resulting in significant persecution. In an unfortunate turn of events that worked to her advantage, the Rift Crisis allowed her to escape from the convent.\\n\\nShe later joined Crown Princess Maximilia, distinguishing herself as an outstanding Wind Guide and playing a key role in ensuring their safe arrival on Earth. She hoped to continue her work on Earth, but soon after, the arrival of people from Tranel once again complicated her situation. Those from Tranel who despised her spread malicious rumors, and with the princess—her primary protector—absent due to diplomatic duties in Seoul, she found herself isolated once again, caught between those who scorned her and those who leered at her. Seeking to escape the harsh refugee community, she has applied to become a Vanguard.",

  // Unique Traits
  uniqueTraits: {
    theTalkOfTheTown: {
      name: 'The Talk of the Town',
      description:
        "Activates the Level 1 passive skill [The Talk of the Town]. [The Talk of the Town]: All female Vanguards take an interest in Fammene and try to stand out more. Once per round, at the end of own turn, CRIT rate of all female Vanguards in the party increases by 15%, but ACC decreases by 10%. This effect only applies for the turn immediately following Fammene's turn.",
    },
    ladyOfTheBreeze: {
      name: 'Lady of the Breeze',
      description:
        'Formation Cost +1, Intelligence 3, Activates the Level 1 passive skill [Rushing Breeze]. [Rushing Breeze]: At the start of battle, grants the [Rushing Breeze] effect to all allies. Reapplies this effect each time the [Monsoon] skill is used. [Rushing Breeze]: Increases SPD by 200% until the end of own turn.',
    },
    marlon: {
      name: 'Marlon',
      description: 'Strength 1, Technic 1, Intelligence 1',
    },
    interested: {
      name: 'Interested',
      description: 'Special trait with no listed characteristics.',
    },
  },

  // Skills and Passive
  skills: {
    bladewind: {
      name: 'Bladewind',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '114%',
      },
      description:
        'Conjures blades of wind to attack. Deals Slash DMG equal to 114% of magic ATK and knocks the target back by 1.5m.',
    },
    windsGathering: {
      name: "Wind's Gathering",
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "Gains the [Whirling Wind] effect whenever performing an action other than Standby. At the end of own turn, grants the [Wind's Gathering] effect to all allies. [Whirling Wind]: Increases SPD by 3%. Stacks up to 6 times. [Wind's Gathering]: Increases SPD by 9.5% per stack of [Whirling Wind] the caster possesses. This effect disappears at the end of own turn.",
    },
    windShield: {
      name: 'Wind Shield',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 1,
      description:
        "Proportionally grants the [Wind Shield] effect to one ally and self for 2R, based on own magic ATK. [Wind Shield]: Provides a shield that blocks damage equal to 190% of the caster's magic ATK.",
    },
    monsoon: {
      name: 'Monsoon',
      level: '10/10',
      type: 'Skill',
      apCost: 90,
      cooldown: 1,
      description:
        'Bestows the blessing of the Great Wind. Can only be activated when possessing 3 or more stacks of the [Whirling Wind] effect. Consumes 3 stacks of [Whirling Wind] to grant all allies AP equal to 39% of own AP Recovery, and increases AP Recovery by the same amount granted until the start of the next round.',
    },
  },

  // Weapon
  weapon: {
    name: 'EX Arcane Orb - The Anguished Rose',
    type: 'Arcane Orb',
    rarity: 'EX',
    image: 'Fammene_WP.jpg',
    stats: {
      weaponMagicAtk: '77.0',
      magicAtkBonus: '+49.0%',
    },
    uniqueSkills: {
      sadEnding: {
        name: 'Sad Ending',
        type: 'Unique',
        description:
          "When using a skill (excluding standby) during the turn, restores all allies' HP by 32% of the caster's Magic ATK. Also grants all allies (excluding the caster) the [Sad Ending] effect for 1 round. [Sad Ending]: Increases Melee ATK by 20% based on the caster's Magic ATK. Increases Ranged ATK by 40% based on the caster's Magic ATK.",
      },
      windOfTragedy: {
        name: 'Fammene Signature: Wind of Tragedy',
        type: 'Signature',
        description:
          "Increases AP Recovery by 8%. Gains the [Whirling Wind] effect at the start of battle. (Same as the [Whirling Wind] effect caused by the level 1 'Wind's Gathering' skill.)",
      },
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawFammeneData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const fammeneData = sanitizeCharacterData(rawFammeneData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:The\s+Talk\s+of\s+the\s+Town|Lady\s+of\s+the\s+Breeze|Whirling\s+Wind|Wind's\s+Gathering|Wind\s+Shield|Rushing\s+Breeze|Sad\s+Ending|Wind\s+of\s+Tragedy|Monsoon|windweaver|wind\s+guide)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Windpetal\s+Tower|Crown\s+Princess\s+Maximilia|Tranel\s+Republic|Rhadam|Noctis\s+Nebula|Rift\s+Crisis|Vanguard|convent|persecution|Wind\s+Guide|colorful\s+romances|conjugal\s+relations|malicious\s+rumors|diplomatic\s+duties|refugee\s+community|outstanding)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Magic\s+ATK|Ranged\s+ATK|Slash|Pierce|Crush|Physical|Heat|Cold|Electric|Immaterial|Poison|SPD|CRIT\s+rate|ACC|Accuracy|HP|Max\s+HP|Formation\s+Cost|AP\s+Recovery|Intelligence|Strength|Technic)\b/gi,
};

// Export sanitized highlighting patterns
export const fammeneHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const fammeneSEO = {
  title: 'Fammene - Horizon Walker Character Guide',
  description:
    'Complete guide for Fammene, an EX rarity Wind Mage character in Horizon Walker. Beautiful Windweaver with wind magic, team support abilities, and speed enhancement skills.',
  keywords: [
    'Fammene',
    'Horizon Walker',
    'EX rarity',
    'mage',
    'wind magic',
    'support',
    'windweaver',
    'wind guide',
    'team buffer',
    'speed enhancement',
    'AP support',
    'shield provider',
    'guide',
    'stats',
    'build',
  ],
};
