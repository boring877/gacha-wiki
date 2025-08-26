// Min Eun-sol Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawMinEunSolData = {
  // Basic Character Information
  name: 'Min Eun-sol',
  image: 'Min_Eun_sol', // Character image filename without extension
  rarity: 'A', // EX, SS, S, A, B
  cost: 6, // Deployment cost
  tags: [
    'Support',
    'Magic User',
    'Debuffer',
    'Shield Provider',
    'AP Manipulation',
    'Immaterial Damage',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '5',
    technic: '6',
    intelligence: '23',
    vitality: '15',
    agility: '7',

    // Key Stats
    meleeAtk: '64',
    rangedAtk: '76',
    magicAtk: '294',
    maxHp: '960',
    spd: '79',
    startingAp: '115',
    apRecovery: '101',
    accuracy: '102',
    evade: '89',
    critRate: '10',
    critDmg: '148',

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
    'A talented support specialist who excels at healing and magical assistance in battle.',

  // Weapon Information
  weapon: {
    name: 'The Black Idol',
    type: 'Mana Shard',
    rarity: 'EX',
    image: '/images/games/horizon-walker/weapons/Min_Eun_sol_WP.jpg',
    stats: {
      weaponMagicAtk: '77.0',
      maxHpBonus: '+49.0%',
    },
    uniqueSkills: {
      darkGuardianship: {
        name: 'Dark Guardianship',
        type: 'Unique',
        description:
          'During battle, increases magic ATK by 24% of max HP. Recovers 24% of HP each time an enemy on the battlefield is defeated.',
      },
      blackPulse: {
        name: 'Black Pulse',
        type: 'Min Eun-sol Signature',
        description:
          "At the start of any turn, if you have the [King's Favor] effect, all allies except yourself gain +1000 to all DEF for the duration of the turn.",
        note: 'This signature skill only activates when Min Eun-sol equips this weapon.',
      },
    },
  },

  // Character Profile
  profile: {
    age: '21',
    racial: 'Human (Earth)',
    homeland: 'East Asia Federation, Seoul',
    height: '158cm',
    birthday: 'January 20th',
    bwhRatio: '72(C)-51-87',
  },

  // Character Story
  story:
    'Now forgotten by everyone, Eun-sol was one of the victims aboard the ship where the Chosen Human first awakened. She was targeted by the Dark Entity, and the Chosen Human gambled with his life to protect her. Eun-sol remembers that sacrifice, and after pondering how she might help the Chosen Human, she made a selfless but dangerous choice.',

  // Unique Traits
  uniqueTraits: {
    wholehearted: {
      name: 'Wholehearted',
      description:
        'Activates the Level 1 passive skill [Wholehearted]. [Wholehearted]: Looks solely towards the Chosen Human with blind devotion. If deployed with the Chosen Human, decreases Evasion by 10% but increases Magic ATK by 15%.',
    },
    mentalBulwark: {
      name: 'Mental Bulwark',
      description:
        "Activates the Level 1 passive skill [Mental Bulwark]. [Mental Bulwark]: During battle, increase all allies' Heat, Cold, Electric, Poison, and Immaterial DEF by 50.",
    },
    human: {
      name: 'Human',
      description: 'Technic 1 AP Recovery 4%',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the Chosen Human.',
    },
  },

  // Skills and Passive
  skills: {
    mentalShock: {
      name: 'Mental Shock',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '95%',
      },
      description:
        "Inflicts an unavoidable attack by shocking the enemy's mind. Deals Immaterial DMG equal to 95% of magic ATK and reduces the target's AP by 5. If the target has the [One Who Disturbed the King's Offering] effect, deals an additional Immaterial DMG equal to 133% of magic ATK.",
    },
    kingsOffering: {
      name: "King's Offering",
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "When attacked by an enemy, deals additional Immaterial DMG equal to 50% of magic ATK to the target and applies [One Who Disturbed the King's Offering] for 2 rounds. [One Who Disturbed the King's Offering]: Reduces AP recovery by 19% and reduces all ATK by 19%.",
    },
    devourWill: {
      name: 'Devour Will',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 1,
      damage: {
        type: 'Magic ATK',
        value: '57%',
      },
      description:
        "The authority of the Black King devours the enemy's will to survive. Deals unblockable magic ATK equal to 57% as Immaterial DMG to an enemy, inflicting [Devour Will] for 2R and [Taunt]. [Devour Will]: Reduces Evasion by 76% and makes Counterattack impossible.",
    },
    kingsFavor: {
      name: "King's Favor",
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Upon successful attack, gain a shield equal to magic ATK of 95% lasting for 2R.',
    },
    kingsWrath: {
      name: "The King's Wrath",
      level: '10/10',
      type: 'Skill',
      apCost: 90,
      cooldown: 3,
      damage: {
        type: 'Magic ATK',
        value: '380%',
      },
      description:
        "This skill can only target an enemy with the [Touched the King's Offering] effect originating from yourself that exists on the battlefield. This attack does not trigger a critical hit and must hit as a Weakness Attack if the target has a weakness.",
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawMinEunSolData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const minEunSolData = sanitizeCharacterData(rawMinEunSolData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})\]/g,
  buffsDebuffs:
    /\b(?:Devour\s+Will|One\s+Who\s+Disturbed\s+the\s+King's\s+Offering|Wholehearted|Mental\s+Bulwark|King's\s+Favor|Taunt|Weakness\s+Attack|Counterattack|shield|critical\s+hit)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords: /\b(?:unavoidable|unblockable|Choosen\s+Human|blind\s+devotion)\b/gi,
  attributes:
    /\b(?:AP|Magic\s+ATK|Immaterial|Physical|Slash|Pierce|Crush|Heat|Cold|Electric|Poison|Evasion|ATK|AP\s+recovery|all\s+ATK|DEF|Technic|max\s+HP|HP)\b/gi,
};

// Export sanitized highlighting patterns
export const minEunSolHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const minEunSolSEO = {
  title: 'Min Eun-sol - Horizon Walker Character Guide',
  description:
    'Complete guide for Min Eun-sol, an A rarity Support character in Horizon Walker. Includes detailed skills, stats, weapon information, and character lore.',
  keywords: [
    'Min Eun-sol',
    'Horizon Walker',
    'A rarity',
    'support',
    'healer',
    'magic user',
    'guide',
    'stats',
    'build',
  ],
};
