// Valeta Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawValetaData = {
  // Basic Character Information
  name: 'Valeta',
  image: 'Valeta', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 6, // Deployment cost
  tags: [
    'Warrior',
    'Support',
    'Healer',
    'Knight-nun',
    'Gate Guardian',
    'Divine Warrior',
    'Slash Damage',
    'Immaterial Damage',
    'Area Healing',
    'Self-Buffer',
    'Shield Provider',
    'Exorcist',
    'Vanguard',
    'Aradal Snow Mountain Convent',
    'Human (Noctis Nebula)',
    'Iron-blooded Ascetics',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '11',
    technic: '7',
    intelligence: '11',
    vitality: '12',
    agility: '14',

    // Key Stats
    meleeAtk: '192',
    rangedAtk: '140',
    magicAtk: '204',
    maxHp: '798',
    spd: '93',
    startingAp: '123',
    apRecovery: '120',
    accuracy: '113',
    evade: '204',
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
    slashDef: '-30',
    pierceDef: '-30',
    crushDef: '-30',
    heatDef: '0',
    coldDef: '0',
    electricDef: '0',
    immaterialDef: '0',
    poisonDef: '0',
    blockRate: '-30',
  },

  // Character Description
  description:
    'Known as "The Gate Guardian," Valeta is a strict knight-nun from Aradal Snow Mountain Convent who transformed from a controlling overseer into a devoted protector of novice knight-nuns.',

  // Character Profile
  profile: {
    age: '31',
    racial: 'Human (Noctis Nebula)',
    homeland: 'The Empire, Bethelburg',
    height: '160cm',
    birthday: 'February 21st',
    bwhRatio: '91(J)-48-91',
  },

  // Character Story
  story:
    'The nickname "The Gate Guardian" is not exactly an honorable one. Valeta, who was responsible for overseeing the novice nuns at the Aradal Snow Mountain Convent, was known for excessively controlling the novices, often found guarding the door. Out of resentment for her strict rules, the novice nuns gave her the nickname "The Gate Guardian." When the Rift Crisis began and they moved to Earth, Valeta returned to active duty, fighting on the front lines. She devoted herself to protecting the novice knight-nuns, and the nickname "Guardian of the Gate" gained much more honor compared to before. After arriving on Earth, the order no longer recruited new knight-nuns, leading Valeta to hope to serve as a Vanguard under the Human God.',

  // Unique Traits
  uniqueTraits: {
    ironBloodedAscetics: {
      name: 'Iron-blooded Ascetics',
      description: 'Formation Cost +2, Strength 3, Intelligence 4, Agility 2',
    },
    gateGuardian: {
      name: 'Gate Guardian',
      description:
        'Activates the Level 1 passive skill [The Gate Guardian]. [The Gate Guardian]: Gains 100 AP at the end of the turn, only once per battle, if there is an ally with HP below 40%.',
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
    spinningSlash: {
      name: 'Spinning Slash',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        'Swings the sabre to attack the enemy. Deals Slash DMG equal to 114% of melee ATK.',
    },
    lightInTheDarkness: {
      name: 'Light in the Darkness',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'On each attack, recovers HP of self and allies within a 5m radius by 95% of magic ATK.',
    },
    swordOfTheUnknown: {
      name: 'Sword of the Unknown',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 3,
      description:
        'Channels divine power into the sword through prayer. Grants self a shield effect equal to 380% of magic ATK for 3R and the [Sword of the Unknown] effect. [Sword of the Unknown]: Basic attacks additionally deal Immaterial DMG equal to 95% of melee ATK.',
    },
    exorcistsCrusade: {
      name: "Exorcist's Crusade",
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'On a successful attack, gains [Salvation] and [Judgment] effects. [Salvation]: Increases own magic ATK by 19%. Stacks up to 9 times. [Judgment]: Increases own melee ATK by 19%. Stacks up to 9 times.',
    },
    darkSacrament: {
      name: 'Dark Sacrament',
      level: '10/10',
      type: 'Skill',
      apCost: 15,
      cooldown: 1,
      description:
        "Can only be activated when possessing 3 or more [Judgment] effects. Grants self 3 stacks of [Angel of Condemnation] effect. [Angel of Condemnation]: Changes the 'Spinning Slash' skill to 'Thornwhip of Judgment'. Consumes 1 stack of [Angel of Condemnation] at the end of own turn. Cannot gain [Judgment] or [Salvation] effects while possessing [Angel of Condemnation].",
    },
    thornwhipOfJudgment: {
      name: 'Thornwhip of Judgment',
      level: 'Transform',
      type: 'Transform Skill',
      apCost: 30,
      cooldown: 0,
      damage: {
        type: 'Melee ATK + Magic ATK',
        value: '114% + 95% per [Judgment]',
      },
      description:
        'Attacks enemies with divine power. Deals Slash DMG equal to 114% of melee ATK to enemies within a 5m, 120° fan range, and additional Immaterial DMG equal to 95% of magic ATK for each [Judgment] effect possessed.',
    },
  },

  // Weapon
  weapon: {
    name: 'EX One-handed sword - The Bloody Acacia',
    type: 'One-handed sword',
    rarity: 'EX',
    image: '/images/games/horizon-walker/weapons/Valeta_WP.jpg',
    stats: {
      weaponMeleeAtk: '84.0',
      weaponMagicAtk: '84.0',
      apRecoveryBonus: '+14.0%',
    },
    uniqueSkills: {
      bloodOnTheEdge: {
        name: 'Blood on the Edge',
        type: 'Unique',
        description:
          'During battle, increases Immaterial Boost by 48%. On a successful attack, has a 100% chance to deal Additional Immaterial DMG equal to 200% of magic ATK. If you defeat an enemy, restores HP of all allies by 160% of magic ATK at the end of the turn.',
      },
      thornwhipOfCondemnation: {
        name: 'Voleta Signature: Thornwhip of Condemnation',
        type: 'Voleta Signature',
        description:
          'During battle, the AP cost of basic attack skills decreases by 5. Gains 3 stacks of [Judgment] at the start of the battle.',
      },
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawValetaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const valetaData = sanitizeCharacterData(rawValetaData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Iron-blooded\s+Ascetics|Gate\s+Guardian|The\s+Gate\s+Guardian|Sword\s+of\s+the\s+Unknown|Salvation|Judgment|Angel\s+of\s+Condemnation|Thornwhip\s+of\s+Judgment|Blood\s+on\s+the\s+Edge|Thornwhip\s+of\s+Condemnation|exorcist|crusade|dark\s+sacrament|divine\s+power|shield\s+effect|additional\s+immaterial\s+dmg)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Gate\s+Guardian|Aradal\s+Snow\s+Mountain\s+Convent|novice\s+nuns|knight-nuns|controlling\s+overseer|strict\s+rules|Rift\s+Crisis|front\s+lines|devoted\s+protector|Human\s+God|Vanguard|sabre\s+attack|divine\s+power|prayer\s+channel|exorcist\s+crusade|dark\s+sacrament|thornwhip|fan\s+range|bloody\s+acacia|condemnation)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|All\s+ATK|Slash|Pierce|Crush|Heat|Cold|Electric|Immaterial|Poison|SPD|CRIT\s+rate|CRIT\s+DMG|Accuracy|Evade|HP|Max\s+HP|AP\s+Recovery|Intelligence|Strength|Technic|Vitality|Agility|Formation\s+Cost|Immaterial\s+Boost|Additional\s+Immaterial\s+DMG)\b/gi,
};

// Export sanitized highlighting patterns
export const valetaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const valetaSEO = {
  title: 'Valeta - Horizon Walker Character Guide',
  description:
    'Complete guide for Valeta, an EX rarity Gate Guardian character in Horizon Walker. Knight-nun from Aradal Snow Mountain Convent with divine warrior abilities and area healing.',
  keywords: [
    'Valeta',
    'Horizon Walker',
    'EX rarity',
    'warrior',
    'support',
    'healer',
    'gate guardian',
    'knight-nun',
    'divine warrior',
    'exorcist',
    'slash damage',
    'immaterial damage',
    'area healing',
    'aradal snow mountain convent',
    'guide',
    'stats',
    'build',
  ],
};
