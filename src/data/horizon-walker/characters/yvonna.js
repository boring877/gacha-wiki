// Yvonna Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawYvonnaData = {
  // Basic Character Information
  name: 'Yvonna',
  image: 'Yvonna', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 5, // Deployment cost
  tags: [
    'Mage',
    'Support',
    'Frostmancer',
    'Cold Magic',
    'Area Control',
    'Support Attack',
    'Team Buffer',
    'Cold Damage',
    'Debuffer',
    'Fleet Officer',
    'Orphan Mage',
    'Frost Storm',
    'Tranel Republic',
    'Human (Noctis Nebula)',
    'Cold-blooded',
    'Hoarfrost',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '7',
    technic: '8',
    intelligence: '18',
    vitality: '12',
    agility: '11',

    // Key Stats
    meleeAtk: '102',
    rangedAtk: '115',
    magicAtk: '257',
    maxHp: '768',
    spd: '86',
    startingAp: '140',
    apRecovery: '109',
    accuracy: '102',
    evade: '140',
    critRate: '10',
    critDmg: '150',

    // Attribute Boost
    slashBoost: '0',
    pierceBoost: '0',
    crushBoost: '0',
    heatBoost: '0',
    coldBoost: '6',
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
    'A Frostmancer from Tranel Republic who learned dangerous frost magic as an orphan. She acts kindly like a doll to avoid suspicion, serving as a fleet officer under Vlissing.',

  // Character Profile
  profile: {
    age: '25',
    racial: 'Human (Noctis Nebula)',
    homeland: 'Tranel Republic, Reina',
    height: '167cm',
    birthday: 'December 31st',
    bwhRatio: '80(F)-49-90',
  },

  // Character Story
  story:
    "In Tranel, learning the magic of frost is an extremely dangerous endeavor. Those who master it are often seen as people who halt the natural flow, and thus face religious and social suspicion, even if they manage to attain noble titles—often being talked about behind their backs. For this reason, most Frostmancers are orphans who begin learning frost magic from a very young age. Yvonna was one of these orphans. She learned various dangerous frost spells as a child and was selected as an officer in charge of fleet attacks under Vlissing's command. In the process, she learned to act kindly towards everyone in order not to appear dangerous, and she realized that controlling her emotions allowed her to avoid some of the scrutiny. As a result, she learned to greet others with a smile, almost like a doll. During the process of escaping from Tranel to Earth, she played a significant role, earning the trust of many people, and now, she has become able to work openly in the light.",

  // Unique Traits
  uniqueTraits: {
    tranelsColdBlooded: {
      name: "Tranel's Cold-blooded",
      description:
        "Activates the Level 1 passive skill [Tranel's Cold Commander]. [Tranel's Cold Commander]: During battle, increases allies' Support Attack DMG by 12%, and increases all allies' Basic Attack DMG (excluding self) by 12%.",
    },
    hoarfrost: {
      name: 'Hoarfrost',
      description:
        'Activates the Level 3 passive skill [Snowfall]. [Snowfall]: At the Start of Round, gain the [Snowfall] effect. [Snowfall]: Cold Boost increases by 12%. This effect stacks up to 3 times.',
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
    surroundingFrost: {
      name: 'Surrounding Frost',
      level: '10/10',
      type: 'Skill',
      apCost: 40,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '95%',
      },
      description:
        'Freezes the forward flow and attacks. Deals Cold DMG equal to 95% of magic ATK to enemies in a 25°, 7m fan-shaped area targeting a specified enemy. This attack temporarily increases ACC by 100%, but cannot perform a weakness attack.',
    },
    shroudOfFrost: {
      name: 'Shroud of Frost',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Once per round, whenever each ally is attacked, all DEF increases temporarily by 1600. If the affected ally defeats an enemy within the same round, SPD is increased by 260% until the end of the newly started turn.',
    },
    freezingGrasp: {
      name: 'Freezing Grasp',
      level: '10/10',
      type: 'Skill',
      apCost: 50,
      cooldown: 1,
      damage: {
        type: 'Magic ATK',
        value: '86%',
      },
      description:
        'Perceives the vast flow and stands ever ready to intervene. Designates a target within 15m and attacks enemies within a 2m radius around it, dealing Cold DMG equal to 86% of magic ATK. Afterwards, gains the [World Where Flow Stops] effect for 2 rounds. [World Where Flow Stops]: While performing a support attack with Lingering Cold, temporarily increases Cold Boost by 30% and extends its range to 15m.',
    },
    frostResonance: {
      name: 'Frost Resonance',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "Grants [Frost] and [Presence of Frost] effects. [Frost]: Reduces Slash, Pierce, Crush, and Cold DEF by 285. [Presence of Frost]: Performs a support attack using the 'Gathered Frost' skill, targeting the enemy attacked by the ally this turn or another available enemy within range. The effect is consumed upon activation.",
    },
    gatheredFrost: {
      name: 'Gathered Frost',
      level: 'Support',
      type: 'Skill',
      apCost: 0,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '105%',
      },
      description:
        'Consumes [Presence of Frost] to activate. Harnesses nearby cold to strike enemies. Deals Cold DMG equal to 105% of Magic ATK to enemies within a 3m circular area around the support attack target (range: 7m).',
    },
    theColdsnap: {
      name: 'The Coldsnap',
      level: '10/10',
      type: 'Skill',
      apCost: 15,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '380%',
      },
      description:
        'Gains 1 stack of [Chill] with each support attack, up to 5 stacks. Upon reaching 5 stacks, all [Chill] effects are consumed to unleash a powerful frost storm. Deals Cold DMG equal to 380% of magic ATK to enemies in a 9m, 150° fan-shaped area, and inflicts the [Slow] effect for 2 rounds. Temporarily increases ACC by 300% while this skill is active.',
    },
  },

  // Weapon
  weapon: {
    image: 'Yvonna_WP.jpg',
    name: 'EX Staff - Skadia',
    type: 'Staff',
    rarity: 'EX',
    stats: {
      weaponMagicAtk: '77.0',
      coldBoost: '49.0',
    },
    uniqueSkills: {
      frozenTears: {
        name: 'Frozen Tears',
        type: 'Unique',
        description:
          'Increases Cold Boost by 40%. Each time an ally attacks during battle, increases own magic ATK by 32% for 1 round. Can stack up to 5 times.',
      },
      frozenSmile: {
        name: 'Yvonna Signature: Frozen Smile',
        type: 'Signature',
        description:
          'When successfully attacking with an action other than a response, gains an additional [Chill] effect at the end of the turn.',
      },
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawYvonnaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const yvonnaData = sanitizeCharacterData(rawYvonnaData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Tranel's\s+Cold-blooded|Tranel's\s+Cold\s+Commander|Hoarfrost|Snowfall|World\s+Where\s+Flow\s+Stops|Frost|Presence\s+of\s+Frost|Gathered\s+Frost|Chill|Slow|Frozen\s+Tears|Frozen\s+Smile|frost\s+storm|support\s+attack|natural\s+flow|religious\s+suspicion|social\s+suspicion|controlling\s+emotions|smile\s+like\s+doll)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Tranel\s+Republic|Reina|Vlissing|frostmancer|frost\s+magic|natural\s+flow|religious\s+suspicion|social\s+suspicion|noble\s+titles|orphans|dangerous\s+frost\s+spells|fleet\s+attacks|controlling\s+emotions|greet\s+smile|doll|escaping\s+Earth|trust|work\s+openly|light|freezes\s+forward\s+flow|fan-shaped\s+area|perceives\s+vast\s+flow|harnesses\s+nearby\s+cold|frost\s+storm|circular\s+area|support\s+attack\s+target)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|All\s+DEF|Cold|Slash|Pierce|Crush|Heat|Electric|Immaterial|Poison|SPD|CRIT\s+rate|CRIT\s+DMG|Accuracy|ACC|Evade|HP|Max\s+HP|AP\s+Recovery|Intelligence|Strength|Technic|Vitality|Agility|Cold\s+Boost|Cold\s+DEF|Support\s+Attack\s+DMG|Basic\s+Attack\s+DMG)\b/gi,
};

// Export sanitized highlighting patterns
export const yvonnaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const yvonnaSEO = {
  title: 'Yvonna - Horizon Walker Character Guide',
  description:
    'Complete guide for Yvonna, an EX rarity Frostmancer character in Horizon Walker. Fleet officer from Tranel Republic with frost magic, support attacks, and cold damage abilities.',
  keywords: [
    'Yvonna',
    'Horizon Walker',
    'EX rarity',
    'mage',
    'support',
    'frostmancer',
    'cold magic',
    'frost',
    'tranel republic',
    'fleet officer',
    'support attack',
    'area control',
    'cold damage',
    'frost storm',
    'team buffer',
    'guide',
    'stats',
    'build',
  ],
};
