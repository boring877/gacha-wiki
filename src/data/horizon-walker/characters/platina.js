// Platina Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawPlatinaData = {
  // Basic Character Information
  name: 'Platina',
  image: 'Platina', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 7, // Deployment cost
  tags: [
    'Tank',
    'Warrior',
    'Guardian',
    'Shield User',
    'Melee Damage',
    'Slash Damage',
    'Area Damage',
    'Crowd Control',
    'High Defense',
    'Dimension Guardian',
    'Metallic Lifeform',
    'Shield Deployment',
    'Gravity Control',
    'Stun',
    'Slow',
    'Knockback Resistance',
    'AP Recovery',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '14',
    technic: '9',
    intelligence: '9',
    vitality: '28',
    agility: '13',

    // Key Stats
    meleeAtk: '195',
    rangedAtk: '130',
    magicAtk: '130',
    maxHp: '1893',
    spd: '92',
    startingAp: '128',
    apRecovery: '112',
    accuracy: '102',
    evade: '166',
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
    pierceDef: '50',
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
    'One of the "Dimension Guardians," a metallic lifeform born from gaps between dimensions, adorned in unique platinum armor and devoted to protecting the most dangerous dimensional breaches.',

  // Weapon Information
  weapon: {
    name: 'The First Heart',
    type: 'EX Ancient Core',
    rarity: 'EX',
    image: 'Platina_WP.jpg',
    stats: {
      weaponMeleeAtk: '77.0',
      maxHpBonus: '+49.0%',
    },
    uniqueSkills: {
      symbolOfImmortality: {
        name: 'Symbol of Immortality',
        type: 'Unique',
        description:
          'Each time attacked by an enemy, increases AP Recovery by 24%, and increases Slash DEF, Crush DEF, and Pierce DEF by 480 until the start of the next round. Can stack up to 5 times.',
      },
      thePlatinumKnight: {
        name: 'The Platinum Knight',
        type: 'Platina Signature',
        description: 'Upon starting the battle, gains the [Gravity Focus] effect.',
        note: 'This signature skill only activates when Platina equips this weapon.',
      },
    },
  },

  // Character Profile
  profile: {
    age: '500+',
    racial: 'Dimension Guardian',
    homeland: 'Somewhere Between Dimensions',
    height: '280cm',
    birthday: 'Unknown',
    bwhRatio: '-',
  },

  // Character Story
  story:
    'Born from the gaps between dimensions, Platina is one of the "Dimension Guardians," a metallic lifeform created within these interdimensional fissures. Among these guardians, Platina stands out, adorned in unique platinum armor, and she is convinced that her birth with such a noble color is for a special purpose. She vowed to protect the most dangerous dimensional breaches, and, after meeting the first Human Sovereign, she now guards the most perilous relic within the dimension.',

  // Unique Traits
  uniqueTraits: {
    vigilantKnight: {
      name: 'Vigilant Knight',
      description:
        'Activates the Level 1 passive skill [Vigilant Knight]. [Vigilant Knight]: The Platinum Knight uses a shield to guard in all directions, protecting her back. Platina does not receive a Weakness Attack even when attacked from behind.',
    },
    guardiansStance: {
      name: "Guardian's Stance",
      description:
        "Activates the Level 1 passive skill [Spacial Distortion]. [Guardian's Stance]: Takes an unwavering stance as the Platinum Guardian. Increases Knockback Resistance by 1000.",
    },
    rakhtan: {
      name: 'Rakhtan',
      description: 'Strength 1, Technic 1, Intelligence 1, Vitality 1',
    },
  },

  // Skills and Passive
  skills: {
    shieldBash: {
      name: 'Shield Bash',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        "Designates a target, attacking with a sword and striking with a shield. Deals Slash DMG equal to 114% of melee ATK to the hit enemy and has a 38% chance to inflict [Stun]. This skill transitions to the 'Sword Strike' skill while in [Shield Deployment] state. [Sword Strike]: While in [Shield Deployment] state, designates a target and attacks with a sword. Deals Slash DMG equal to 114% of melee ATK to the hit enemy.",
    },
    songOfTheSword: {
      name: 'Song of the Sword',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '171%',
      },
      description:
        "Rotates in place, swinging the sword to attack. Deals Slash DMG equal to 171% of melee ATK to all enemies within a 2.5m circular range, enters [Shield Deployment] state and gains [Gravity Focus] effect. [Shield Deployment]: Increases Block Rate by 15%, increases Aggro Adjustment, and increases Physical DEF by 150. This skill changes to 'Song of the Shield' while in [Shield Deployment] state. [Song of the Shield]: While in [Shield Deployment] state, rotates in place, swinging the sword to deal Slash DMG equal to 171% of melee ATK to all targets within 2.5m and cancels the [Shield Deployment] state.",
    },
    gravityFall: {
      name: 'Gravity Fall',
      level: '10/10',
      type: 'Skill',
      apCost: 90,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '152%',
      },
      description:
        'Can only be activated by consuming the [Gravity Focus] effect if possessed. Leaps high in place and descends towards the target point. Upon landing, deals Crush DMG equal to 152% of melee ATK to enemies within a 6m radius and pulls them in by 5m. Applies [Slow] effect to all targets for 2R, and the user enters [Shield Deployment] state after using the skill. Weakness attacks cannot be performed with this skill. [Slow]: Reduces SPD by 40%.',
    },
    heartOfPlatinum: {
      name: 'Heart of Platinum',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'If not in the [Shield Deployment] state, gain the [Platinum Heart] effect at the start of the turn. When attacked while in [Shield Deployment], gain the [Platinum Aura] effect. [Platinum Heart]: Increases melee attack power by 57% until the end of the turn. [Platinum Aura]: Reduces AP consumption for the Song of the Shield skill by 28.5%. Stacks up to 8 times. This effect is removed when [Shield Deployment] state ends.',
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawPlatinaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const platinaData = sanitizeCharacterData(rawPlatinaData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Vigilant\s+Knight|Guardian's\s+Stance|Spacial\s+Distortion|Symbol\s+of\s+Immortality|The\s+Platinum\s+Knight|Shield\s+Deployment|Gravity\s+Focus|Platinum\s+Heart|Platinum\s+Aura|Sword\s+Strike|Song\s+of\s+the\s+Shield|Stun|Slow|weakness\s+attack|knockback\s+resistance|aggro\s+adjustment|block\s+rate)\b/gi,
  percentages: /\b(\d{1,3}%)(?:\s*of\s+(?:melee\s+ATK|Max\s+HP))?/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|gains?|grants?|applies?|cancels?|consumes?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?|\d+)\b/gi,
  keywords:
    /\b(?:dimension\s+guardian|metallic\s+lifeform|platinum\s+armor|interdimensional\s+fissures|dimensional\s+breaches|Human\s+God|perilous\s+relic|noble\s+color|special\s+purpose|gaps\s+between\s+dimensions|circular\s+range|target\s+point|weakness\s+attacks)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|Slash|Pierce|Crush|Heat|Cold|Electric|Immaterial|Poison|Max\s+HP|HP|Physical\s+DEF|SPD|Block\s+Rate|AP\s+Recovery|Knockback\s+Resistance|Aggro\s+Adjustment)\b/gi,
};

// Export sanitized highlighting patterns
export const platinaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const platinaSEO = {
  title: 'Platina - Horizon Walker Character Guide',
  description:
    'Complete guide for Platina, an EX rarity Tank character in Horizon Walker. Dimension Guardian with powerful shield mechanics, gravity control, and defensive abilities.',
  keywords: [
    'Platina',
    'Horizon Walker',
    'EX rarity',
    'tank',
    'dimension guardian',
    'shield user',
    'metallic lifeform',
    'slash damage',
    'area damage',
    'crowd control',
    'shield deployment',
    'gravity focus',
    'the first heart',
    'ancient core',
    'guide',
    'stats',
    'build',
  ],
};
