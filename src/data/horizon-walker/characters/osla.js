// Osla Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawOslaData = {
  // Basic Character Information
  name: 'Osla',
  image: 'Osla', // Character image filename without extension
  rarity: 'SS', // EX, SS, S, A, B
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
    'Damage Reflection',
    'High Aggro',
    'Chain Weapon',
    'HP Scaling',
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
    magicAtk: '79',
    maxHp: '960',
    spd: '92',
    startingAp: '118',
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
    'Champion of Torta and daughter of Grand Warrior Magna, seeking a warrior stronger than herself who might be worthy of her hand.',

  // Weapon Information
  weapon: {
    name: "The Grand Ancestor's Spirit",
    type: 'EX Torturas',
    rarity: 'EX',
    image: '/images/games/horizon-walker/weapons/Osla_WP.jpg',
    stats: {
      weaponMeleeAtk: '70.0',
      weaponMagicAtk: '70.0',
      maxHpBonus: '+49.0%',
    },
    uniqueSkills: {
      verdictOfTheHistory: {
        name: 'Verdict of the History',
        type: 'Unique',
        description:
          "During battle, movement speed increases by 32% and Aggro Adjustment increases by 40. For any enemy that initiates an attack on the unit, all support counterattacks, counterattacks, or additional attacks directed at that enemy during the same turn are treated as Weak Point Attacks (provided the skill used is eligible for Weak Point Attacks). When attacked, allied units—except the unit under attack—receive the [Primordial Spirit's Descent] effect. This effect can stack up to 5 times. [Primordial Spirit's Descent]: On a successful attack, inflict additional Slash DMG and remove 1 stack from the effect. Additional DMG equals 320% of the Melee ATK power of the effect provider, with damage increased proportionally to CRIT rate (damage doubles at 100% CRIT rate). This effect activates only via a single weapon during battle; if the weapon-bearer becomes incapacitated, the effect ceases.",
      },
      ancientSpiritsCore: {
        name: "Ancient Spirit's Core",
        type: 'Osla Signature',
        description:
          'During battle, the probability of applying the [Taunt] effect from the "Afflict Pain" skill increases by an additional 43%. In addition, if the current HP of the unit falls below 30% upon receiving an attack, restore 10% of maximum HP. The additional Slash Damage from [Primordial Spirit\'s Descent] is applied at double strength.',
        note: 'This signature skill only activates when Osla equips this weapon.',
      },
    },
  },

  // Character Profile
  profile: {
    age: '26',
    racial: 'Torta',
    homeland: 'Tortaria, Fjord of Blades',
    height: '181cm',
    birthday: 'Secret',
    bwhRatio: '111(I)-68-123',
  },

  // Character Story
  story:
    "Champion of Torta, and daughter of the Grand Warrior Magna. Osla Magnatira was strong from birth. She vowed to the god of Torta that she would never be with a man unless he was stronger than herself. In her 26 years of life, she had yet to meet a single man stronger than her, other than her father. Though she held no belief in the god of Torta, she felt that breaking her vow as a Magnatira would be a stain upon the name of her father. So, even in her moments of regret, she waited for a groom stronger than her to appear. After escaping the Rift under Maximilia's command, she began a new life on Earth. She hoped that here she would find her match, and upon hearing her story, the Bureau of Rift Management told her about the power of the Human Gods. Hearing this, she decided to wait within the bureau as a reserve Vanguard, hoping for a Human God worthy of taking her hand.",

  // Unique Traits
  uniqueTraits: {
    oathOfMagnatira: {
      name: 'Oath of Magnatira',
      description:
        'Activates the Level 1 passive skill [Oath of Magnatira]. [Oath of Magnatira]: On enemy defeat, gains Counterattack count.',
    },
    savageRegeneration: {
      name: 'Savage Regeneration',
      description:
        'Activates the Level 3 passive skill [Physical Regeneration]. [Physical Regeneration]: At the start of own turn, recovers HP equal to 6% of max HP + 120% of magic ATK.',
    },
    torta: {
      name: 'Torta',
      description: 'Vitality 1, Evade -2%',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the Chosen Human.',
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
    predatoryRange: {
      name: 'Predatory Range',
      level: '10/10',
      type: 'Skill',
      apCost: 33,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        'Throws a chained Torturas to pull the enemy closer. Deals Slash DMG equal to 114% of melee ATK and removes Counterattack. If the target is a large enemy, instead of pulling them closer, moves self to the front of the enemy.',
    },
    afflictPain: {
      name: 'Afflict Pain',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Each time an attack is successfully made, has a 57% chance to Taunt the target.',
    },
    cryOfTheAncients: {
      name: 'Cry of the Ancients',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 2,
      damage: {
        type: 'Magic ATK',
        value: '57%',
      },
      description:
        'With a shout filled with intense determination, demoralizes enemies and boosts own resolve. Deals Immaterial DMG equal to 57% of magic ATK. Hit enemies lose 10 AP, while self gains the [Primal Regeneration] effect for 2R and Aggro Adjustment increases. [Primal Regeneration]: Whenever damaged, recovers HP by 57% of magic ATK. This recovery amount increases as the current HP ratio decreases, up to 4 times at 40% HP ratio.',
    },
    endlessMalice: {
      name: 'Endless Malice',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'When attacked by an enemy, reflects the damage received back to the attacker, dealing Fixed DMG equal to 57% of the damage taken. This reflected damage increases as own current HP ratio decreases, up to 4 times at 40% HP.',
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawOslaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const oslaData = sanitizeCharacterData(rawOslaData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Oath\s+of\s+Magnatira|Savage\s+Regeneration|Physical\s+Regeneration|Verdict\s+of\s+the\s+History|Ancient\s+Spirit's\s+Core|Primordial\s+Spirit's\s+Descent|Primal\s+Regeneration|Taunt|counterattack|damage\s+reflection|fixed\s+damage|weak\s+point\s+attacks|aggro\s+adjustment)\b/gi,
  percentages: /\b(\d{1,3}%)(?:\s*of\s+(?:max\s+)?HP|\s*of\s+\w+\s+ATK|\s*CRIT\s+rate)?/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|gains?|loses?|recovers?|reflects?|inflicts?|removes?|stacks?)\s+(?:\w{1,15}\s+){0,5}(?:by\s+(\d{1,3}%?|\d+)|up\s+to\s+(\d+)\s+times)\b/gi,
  keywords:
    /\b(?:champion|vow|groom|stronger|Magnatira|Grand\s+Warrior\s+Magna|Tortaria|Fjord\s+of\s+Blades|Bureau\s+of\s+Rift\s+Management|reserve\s+Vanguard|Chosen\s+Human|chained\s+Torturas|large\s+enemy|intense\s+determination|current\s+HP\s+ratio|weapon-bearer|incapacitated)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Magic\s+ATK|Slash|Physical|Pierce|Crush|Heat|Cold|Electric|Immaterial|Poison|Max\s+HP|HP|movement\s+speed|Aggro\s+Adjustment|CRIT\s+rate|counterattack\s+count|Vitality|Evade|Fixed\s+DMG)\b/gi,
};

// Export sanitized highlighting patterns
export const oslaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const oslaSEO = {
  title: 'Osla - Horizon Walker Character Guide',
  description:
    'Complete guide for Osla, an SS rarity Warrior character in Horizon Walker. Champion of Torta with powerful tanking abilities, damage reflection, and chain weapon mechanics.',
  keywords: [
    'Osla',
    'Horizon Walker',
    'SS rarity',
    'warrior',
    'torta',
    'tank',
    'melee damage',
    'slash damage',
    'damage reflection',
    'taunt',
    'torturas',
    'chain weapon',
    'self-healing',
    'grand ancestors spirit',
    'guide',
    'stats',
    'build',
  ],
};
