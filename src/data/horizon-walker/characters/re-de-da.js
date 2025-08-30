// Re_De_Da Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawReDeDaData = {
  // Basic Character Information
  name: 'Re_De_Da',
  image: 'Re_De_Da', // Character image filename without extension
  rarity: 'A', // EX, SS, S, A, B
  cost: 2, // Deployment cost
  tags: [
    'Mage',
    'Magic User',
    'Immaterial Damage',
    'Possession',
    'Mind Control',
    'Area Damage',
    'Crowd Control',
    'Stun',
    'Debuffer',
    'Demon',
    'Outer Space',
    'Void Magic',
    'Critical Damage',
    'Support',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '6',
    technic: '8',
    intelligence: '13',
    vitality: '8',
    agility: '11',

    // Key Stats
    meleeAtk: '76',
    rangedAtk: '102',
    magicAtk: '173',
    maxHp: '481',
    spd: '61',
    startingAp: '114',
    apRecovery: '107',
    accuracy: '102',
    evade: '140',
    critRate: '10',
    critDmg: '170',

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
    'A young demon from outer space accidentally summoned to Earth, wielding void magic and possession abilities.',

  // Character Profile
  profile: {
    age: '1',
    racial: 'Demon of Outer Space',
    homeland: 'Palace of Pleasure',
    height: '24cm',
    birthday: 'Unknown',
    bwhRatio: '-',
  },

  // Character Story
  story:
    'Re-De-Da was born in the distant reaches of outer space, in the Palace of Pleasures ruled by the demon known as the Seven-Breasted Cow. Before he could even learn the ways of an incubus, Re-De-Da was accidentally summoned to Earth. There, he faced a crisis at the hands of those who sought to oppress him, but thanks to the help of the Human God, he managed to survive and was given his current name, Re-De-Da.',

  // Unique Traits
  uniqueTraits: {
    soccerOptimized: {
      name: 'Soccer-optimized',
      description: 'Knockback Resistance -50',
    },
    sycophant: {
      name: 'Sycophant',
      description: 'No effect',
    },
    demon: {
      name: 'Demon',
      description: 'Crit DMG 20%',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the chosen Human.',
    },
  },

  // Skills and Passive
  skills: {
    dreamShock: {
      name: 'Dream Shock',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '114%',
      },
      description:
        'Attacks the enemy precisely with the power of the void. Deals Immaterial DMG equal to 114% of magic ATK.',
    },
    ecstasyPossession: {
      name: 'Ecstasy Possession',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 1,
      damage: {
        type: 'Magic ATK',
        value: '57%',
      },
      description:
        "Interpenetrates the enemy's mind with the power of the void. Deals Immaterial DMG equal to 57% of magic ATK and possesses the enemy by seizing control of their body. The lower the enemy's HP and the higher the user's magic ATK, the higher the success rate of possession. (When the user's magic ATK matches the target's remaining HP, possession succeeds with a probability of 100%.) Cannot possess bosses or elite enemies. Upon successful possession, the user's AP is fixed at 0, while the possessed target is controlled instead. If the controlled target is defeated, possession ends, and the user immediately gains 150 AP.",
    },
    othersBody: {
      name: "Other's Body",
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'While in a successful possession state, all ATK of the possessed target increases by 76%.',
    },
    nightmareMaterialization: {
      name: 'Nightmare Materialization',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 2,
      damage: {
        type: 'Magic ATK',
        value: '114%',
      },
      description:
        'Realizes a nightmare, attacking enemies in a wide area. Deals Immaterial DMG equal to 114% of magic ATK to enemies within a 5m radius from self. Has a 57% chance to [Stun] hit enemies and inflict them with the [nightmare materialization] effect. After using this skill, the user also becomes [Stunned]. [nightmare materialization]: Reduces all DEF by 200.',
      note: 'Self-stun after use',
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawReDeDaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const reDeDaData = sanitizeCharacterData(rawReDeDaData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Soccer-optimized|Sycophant|Dream\s+Shock|Ecstasy\s+Possession|Other's\s+Body|Nightmare\s+Materialization|nightmare\s+materialization|Stun|Stunned|possession|possessed|controlled|void\s+magic|power\s+of\s+the\s+void|success\s+rate|interpenetrates|seizing\s+control|realizes\s+a\s+nightmare)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|fixed|gains?|inflict|becomes?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:demon|outer\s+space|Palace\s+of\s+Pleasures|Seven-Breasted\s+Cow|incubus|accidentally\s+summoned|Human\s+God|oppress|survive|void|mind|body|nightmare|wide\s+area|bosses|elite\s+enemies|knockback\s+resistance|immaterial|possession\s+state|remaining\s+HP|probability)\b/gi,
  attributes:
    /\b(?:AP|Magic\s+ATK|Immaterial|DMG|All\s+ATK|All\s+DEF|Crit\s+DMG|Knockback\s+Resistance|Success\s+Rate|Remaining\s+HP|Possession\s+State)\b/gi,
};

// Export sanitized highlighting patterns
export const reDeDaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const reDeDaSEO = {
  title: 'Re_De_Da - Horizon Walker Character Guide',
  description:
    'Complete guide for Re_De_Da, an A rarity demon mage in Horizon Walker. Outer space demon with possession abilities, void magic, and unique mind control mechanics.',
  keywords: [
    'Re_De_Da',
    'Horizon Walker',
    'A rarity',
    'mage',
    'demon',
    'outer space',
    'possession',
    'mind control',
    'void magic',
    'immaterial damage',
    'crowd control',
    'stun',
    'debuffer',
    'guide',
    'stats',
    'build',
  ],
};
