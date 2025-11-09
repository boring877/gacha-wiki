// Erneste Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawErnesteData = {
  // Basic Character Information
  name: 'Erneste',
  image: 'Erneste', // Character image filename without extension
  rarity: 'S', // EX, SS, S, A, B
  cost: 4, // Deployment cost
  tags: [
    'Warrior',
    'Support',
    'Team Buffer',
    'Melee Damage',
    'Slash Damage',
    'Physical Damage',
    'Area Damage',
    'Block',
    'Counterattack',
    'Tactical Commander',
    'Formation Breaker',
    'Half-swording',
    'Knockback',
    'Morale Boost',
    'Speed Enhancement',
    'Attack Boost',
    'Mercenary Commander',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '14',
    technic: '10',
    intelligence: '9',
    vitality: '13',
    agility: '12',

    // Key Stats
    meleeAtk: '192',
    rangedAtk: '140',
    magicAtk: '128',
    maxHp: '832',
    spd: '92',
    startingAp: '135',
    apRecovery: '113',
    accuracy: '102',
    evade: '161',
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

  // Weapon Information
  weapon: {
    name: 'Dawnbringer',
    type: 'EX Two-handed sword',
    image: '/images/games/horizon-walker/weapons/Erneste_WP.jpg',
    rarity: 'EX',
    stats: {
      weaponMeleeAtk: 91.0,
      meleeAtkPercent: 35.0,
    },
    uniqueSkills: {
      frontlineCharisma: {
        name: 'Frontline Charisma',
        type: 'Unique',
        description:
          "During battle, increases Block Chance by 24%. After using a Support, Charge, Leap, Teleportation, or Self-Mobility skill, at the end of the turn, increases all allies' SPD by 63% for 2 Rounds. Stacks up to 3 times.",
      },
      ourProtector: {
        name: 'Our Protector',
        type: 'Signature',
        description:
          "Increases the caster's SPD by 70% during battle and boosts all allies' Basic ATK DMG (excluding the caster) by 10%. Extends the duration of [Declaration of Victory] to 3 rounds, additionally increasing the target ally's Melee ATK by 36% of the caster's base Melee ATK. Also increases each ally's Ranged ATK and Magic ATK by 55% of the total Melee ATK gained from [Declaration of Victory]. Unlocks the skill [Frontline Disruptor] for use.",
      },
      frontlineDisruptor: {
        name: 'Frontline Disruptor',
        type: 'Skill',
        description:
          "Leaps forward in a sweeping motion, striking nearby enemies. Gains the [Courageous Charge] effect for 2 rounds and deals Slash DMG equal to 120% of Melee ATK to enemies within a 2.5m radius at the target location. Knocks targets back and inflicts [Faultline]. [Courageous Charge]: Increases Elemental DEF by 60. Inflicts Fixed DMG equal to 340% of Melee ATK to countered enemies. [Faultline]: Increases DMG taken by 8%. Ends at the start of the caster's turn.",
      },
    },
  },

  // Character Description
  description:
    "Daughter of the Imperial Mercenary Commander who took over the company at a young age, cursed with compulsive vile speech that led to abandonment by her subordinates before finding redemption through Yeon Chae-young's offer to serve the Federation.",

  // Character Profile
  profile: {
    age: '20',
    racial: 'Human (Noctis Nebula)',
    homeland: 'The Empire, Lamivia',
    height: '162cm',
    birthday: 'November 11th',
    bwhRatio: '73(D)-46-85',
  },

  // Character Story
  story:
    "Erneste, born the daughter of the Imperial Mercenary Commander, took over the mercenary company at a young age when her father could no longer lead. Unfortunately, during one of her missions, she was cursed by a sorcerer, compelled to utter vile words regardless of the situation. Not long after, this curse caused a breakdown in her relationship with her subordinates—the mercenaries lost trust in her as Erneste's words turned increasingly spiteful. Eventually, she was abandoned by her own men. Fortunately, thanks to the kindness of Maximilia, she managed to escape safely to Earth during the Great Escape. However, her notorious reputation made it hard for anyone to accept her. That was when Yeon Chae-young, who had heard of her talent, approached her, offering a chance to put her skills to use for the Federation. Erneste accepted the offer.",

  // Unique Traits
  uniqueTraits: {
    snakeTongue: {
      name: 'Snake-tongue',
      description:
        'Activates the Level 1 passive skill [Snake-tongue]. [Snake-tongue]: Once per round, at the end of own turn, delivers an encouraging word (?) to boost morale among allies. Increases SPD of all allies except self by 10% for 1 round. Has a low chance to decrease ACC of enemies by 20%.',
    },
    tacticalCommander: {
      name: 'Tactical Commander',
      description:
        'Activates the Level 3 passive skill [Command]. [Command]: At the start of any turn until the end, for each ally within a 5m radius, increases melee ATK of self and nearby allies by 5%.',
    },
    marlon: {
      name: 'Marlon',
      description: 'Strength 1, Technic 1, Intelligence 1',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the Chosen Human.',
    },
  },

  // Skills and Passive
  skills: {
    poleBreak: {
      name: 'Pole Break',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        'Swings the greatsword widely to attack enemies. Deals Slash DMG equal to 114% of melee ATK to enemies in a fan-shaped area.',
    },
    gottaProtectMyself: {
      name: 'Gotta Protect Myself!',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description: 'Increases block chance by 38%.',
    },
    formationDestruction: {
      name: 'Formation Destruction',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 2,
      damage: {
        type: 'Melee ATK',
        value: '190%',
      },
      description:
        'Charges towards the target with a half-swording technique, colliding forcefully, then swings the sword widely to attack surrounding enemies. Leaps low at the target, dealing Slash DMG equal to 190% of melee ATK to the target and all enemies within a 2.5m radius, and knocks them back 2.5m.',
    },
    crisisToOpportunity: {
      name: 'Crisis to Opportunity!',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'On a successful block, gains an immediate opportunity for a counterattack. During counterattack, melee ATK increases by 95%.',
    },
    declarationOfVictory: {
      name: 'Declaration of Victory',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 3,
      description:
        "Raises the sword high and declares victory, boosting the morale of allies. Grants the [Declaration of Victory] effect to self and allies within a 5m radius for 2R. [Declaration of Victory]: Increases each target's melee ATK by 76% of the caster's melee ATK, and increases SPD by 95.",
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawErnesteData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const ernesteData = sanitizeCharacterData(rawErnesteData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Snake-tongue|Tactical\s+Commander|Command|Declaration\s+of\s+Victory|block\s+chance|counterattack|morale|half-swording|knockback|fan-shaped\s+area|encouraging\s+word|Great\s+Escape|Frontline\s+Charisma|Our\s+Protector|Frontline\s+Disruptor|Courageous\s+Charge|Faultline|Basic\s+ATK\s+DMG|Elemental\s+DEF|Fixed\s+DMG)\b/gi,
  percentages: /\b(\d{1,3}%)(?:\s*of\s+(?:the\s+caster's\s+)?(?:melee\s+ATK|Max\s+HP))?/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|gains?|grants?|boosts?|knocks?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?|\d+(?:\.\d+)?m?)\b/gi,
  keywords:
    /\b(?:Imperial\s+Mercenary\s+Commander|mercenary\s+company|sorcerer|cursed|vile\s+words|subordinates|notorious\s+reputation|Maximilia|Federation|Yeon\s+Chae-young|half-swording\s+technique|fan-shaped\s+area|Noctis\s+Nebula|The\s+Empire|Lamivia|Chosen\s+Human|Dawnbringer|Two-handed\s+sword|Support|Charge|Leap|Teleportation|Self-Mobility|SPD|Rounds|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|duration|target|caster|base|Slash\s+DMG|radius|Courageous\s+Charge|Faultline)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|Slash|Pierce|Crush|Heat|Cold|Electric|Immaterial|Poison|Max\s+HP|HP|SPD|ACC|Evasion|block\s+chance|counterattack)\b/gi,
};

// Export sanitized highlighting patterns
export const ernesteHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const ernesteSEO = {
  title: 'Erneste - Horizon Walker Character Guide',
  description:
    'Complete guide for Erneste, an S rarity Warrior character in Horizon Walker. Former Imperial Mercenary Commander with tactical abilities, team buffs, and formation-breaking skills.',
  keywords: [
    'Erneste',
    'Horizon Walker',
    'S rarity',
    'warrior',
    'support',
    'human',
    'noctis nebula',
    'tactical commander',
    'team buffer',
    'mercenary commander',
    'slash damage',
    'formation destruction',
    'half-swording',
    'counterattack',
    'block',
    'guide',
    'stats',
    'build',
    'Dawnbringer',
    'EX weapon',
    'two-handed sword',
    'Frontline Charisma',
    'Our Protector',
    'Frontline Disruptor',
    'signature weapon',
    'unique skill',
  ],
};
