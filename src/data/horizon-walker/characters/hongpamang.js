// Hongpamang Character Data - Horizon Walker
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawHongpamangData = {
  name: 'Hongpamang',
  image: 'Hongpamang',
  rarity: 'A',
  cost: 2,
  tags: [
    'Mage',
    'Magic User',
    'Dark Magic',
    'Lesser Incubus',
    'Incubus',
    'Greater Incubus',
    'Dream Manipulation',
    'Area Damage',
    'HP-Based Damage',
  ],

  stats: {
    strength: '6',
    technic: '8',
    intelligence: '13',
    vitality: '8',
    agility: '11',
    meleeAtk: '',
    rangedAtk: '',
    magicAtk: '',
    maxHp: '',
    spd: '',
    startingAp: '',
    apRecovery: '',
    accuracy: '',
    evade: '',
    critRate: '',
    critDmg: '',
    slashBoost: '0',
    pierceBoost: '0',
    crushBoost: '0',
    heatBoost: '0',
    coldBoost: '0',
    electricBoost: '0',
    immaterialBoost: '0',
    poisonBoost: '0',
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

  description:
    'Re-De-Da, a tiny demon born in the Palace of Pleasures in outer space, accidentally summoned to Earth before learning the ways of an incubus.',

  profile: {
    age: '1',
    racial: 'Demon of Outer Space',
    homeland: 'Palace of Pleasure',
    height: '24cm',
    birthday: 'Unknown',
    bvhRatio: '',
  },

  story:
    'Re-De-Da was born in the distant reaches of outer space, in the Palace of Pleasures ruled by the demon known as the Seven-Breasted Cow. Before he could even learn the ways of an incubus, Re-De-Da was accidentally summoned to Earth. There, he faced a crisis at the hands of those who sought to oppress him, but thanks to the help of the Human God, he managed to survive and was given his current name, Re-De-Da.',

  uniqueTraits: {
    soccerOptimized: {
      name: 'Soccer-optimized',
      description: "He's bouncy, flies far when kicked.",
    },
    demon: {
      name: 'Demon',
      description:
        'Beings of malice born from a hell that exists somewhere beyond.',
    },
    sycophant: {
      name: 'Sycophant',
      description:
        'He tries to say sweet things like an incubus, but it just sounds like nonsense.',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the Human God.',
    },
  },

  skills: {
    dreamShock: {
      name: 'Dream Shock',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '138%',
      },
      description:
        'Attacks the enemy precisely with the power of the void. Deals Immaterial DMG equal to 138% of Magic ATK. Coefficient scales from 73% at Lv1 to 138% at Lv10.',
    },
    possessionOfEcstaticDream: {
      name: 'Possession of Ecstatic Dream',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '65%',
      },
      description:
        'Interpenetrates the enemy\'s mind with the power of the void. Deals Immaterial DMG equal to 65% of Magic ATK and possesses the enemy by seizing control of their body. The lower the enemy\'s HP and the higher the user\'s Magic ATK, the higher the success rate. When user\'s Magic ATK matches target\'s remaining HP, possession succeeds with 70-100% probability. Cannot possess bosses or elite enemies. Upon successful possession, user\'s AP is fixed at 0, while the possessed target is controlled instead. If the controlled target is defeated, possession ends, and the user immediately gains 150 AP. Coefficient scales from 36% at Lv1 to 65% at Lv10.',
    },
    someonesBody: {
      name: "Someone's Body",
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'While in a successful possession state, all ATK of the possessed target increases by 40-76%. Requires Possession of Ecstatic Dream Lv3 to unlock.',
    },
    nightmareMaterializes: {
      name: 'Nightmare Materializes',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '138%',
      },
      description:
        'Realizes a nightmare, attacking enemies in a wide area. Deals Immaterial DMG equal to 138% of Magic ATK to enemies within a 5m radius. Has a 30-57% chance to [Stun] hit enemies and inflict [nightmare materialization] (reduces all DEF by 200). After using this skill, the user also becomes [Stunned]. Coefficient scales from 73% at Lv1 to 138% at Lv10. Requires Someone\'s Body Lv3 to unlock.',
    },
  },
};

const validation = validateCharacterData(rawHongpamangData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

export const hongpamangData = sanitizeCharacterData(rawHongpamangData);

const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Dream\s+Shock|Possession\s+of\s+Ecstatic\s+Dream|Someone'?s?\s+Body|Nightmare\s+Materializes|Lesser\s+Incubus|Incubus|Greater\s+Incubus)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Dream\s+Manipulation|Dark\s+Magic|Incubus|Nightmare|HP-based|damage\s+over\s+time)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|Slash|Pierce|Crush|Heat|Cold|Electric|Immaterial|Poison|SPD|ACC|Max\s+HP|HP|DEF|Intelligence|Agility|Vitality)\b/gi,
};

export const hongpamangHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

export const hongpamangSEO = {
  title: 'Hongpamang - Horizon Walker Character Guide',
  description:
    'Complete guide for Hongpamang, an A rarity Mage character in Horizon Walker. A Lesser Incubus specializing in dark magic and dream manipulation with HP-based damage scaling.',
  keywords: [
    'Hongpamang',
    'Horizon Walker',
    'A rarity',
    'mage',
    'dark magic',
    'lesser incubus',
    'dream manipulation',
    'guide',
    'stats',
    'build',
  ],
};
