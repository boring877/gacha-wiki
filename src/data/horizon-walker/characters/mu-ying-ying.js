// Mu Ying-ying Character Data - Horizon Walker
// Extracted from the game's decrypted data tables (build 2026-09-01, Steam 24963123)
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawMu_ying_yingData = {
  name: "Mu Ying-ying",
  image: "Mu Ying-ying",
  rarity: "EX",
  cost: 7,
  tags: ["EX Rarity"],

  description: "Mu Ying-ying is an EX rarity hero with a deployment cost of 7, dealing Physical damage.",

  stats: {
    // Base stats from game data (unequipped, no trait bonuses)
    strength: '9',
    technic: '4',
    intelligence: '6',
    vitality: '15',
    agility: '3',

    maxHp: '960',
    spd: '81',
    meleeAtk: '115',
    rangedAtk: '51',
    magicAtk: '76',
    startingAp: '131',
    apRecovery: '91',
    accuracy: '102',
    evade: '38',
    critRate: '10',
    critDmg: '156',
  },

  profile: {
  "age": "",
  "racial": "",
  "homeland": "",
  "height": "",
  "birthday": "",
  "bwhRatio": ""
},

  uniqueTraits: {
    baseMagicATK50: { name: 'Base Magic ATK +50%', description: 'Cannot perform Weak Point Attacks, but increases base Magic ATK by 50%.' },
    phoenix: { name: 'Phoenix', description: 'Heat DMG Boost +10%, Max HP +5%' },
    eternity: { name: 'Eternity', description: 'This trait has no listed description in the current game build; its text was removed in the September 10, 2026 patch.' },
    interested: { name: 'Interested', description: 'Unlocks at Gift Affection Level 5: becomes active after reaching 2,000 affection points through gift-giving. Special trait with no listed characteristics.' },
  },

  skills: {
    incineration: {
      gameKey: "Incineration",
      icon: "UI_SkillIcon_Incineration",
      name: "Incinerate",
      type: 'Skill',
      description: "None",
    },
    ember: {
      gameKey: "Ember",
      icon: "UI_SkillIcon_Ember",
      name: "Cinder",
      type: 'Skill',
      description: "None",
    },
    ignition: {
      gameKey: "Ignition",
      icon: "UI_SkillIcon_Ignition",
      name: "Ignite",
      type: 'Skill',
      description: "None",
    },
    solitude: {
      gameKey: "Solitude",
      icon: "UI_SkillIcon_Solitude",
      name: "Solitude",
      type: 'Skill',
      description: "None",
    },
    burningFeather: {
      gameKey: "BurningFeather",
      icon: "UI_SkillIcon_BurningFeather",
      name: "Phoenix Feather",
      type: 'Skill',
      description: "None",
    },
    heatDetection: {
      gameKey: "HeatDetection",
      icon: "UI_SkillIcon_HeatDetection",
      name: "Crimson Blaze",
      type: 'Skill',
      description: "None",
    },
  },
  heroId: 71,

  rarityStages: {
    'EX': {
      strength: 9,
      technic: 4,
      intelligence: 6,
      vitality: 15,
      agility: 3,
      maxHp: 960,
      meleeAtk: 115,
      rangedAtk: 51,
      magicAtk: 76,
      evade: 38,
      apRecovery: 91,
      startingAp: 131
    },
    'EX 1': {
      strength: 9,
      technic: 4,
      intelligence: 6,
      vitality: 15,
      agility: 3,
      maxHp: 960,
      meleeAtk: 115,
      rangedAtk: 51,
      magicAtk: 76,
      evade: 38,
      apRecovery: 91,
      startingAp: 131
    },
    'EX 2': {
      strength: 9,
      technic: 4,
      intelligence: 6,
      vitality: 15,
      agility: 3,
      maxHp: 960,
      meleeAtk: 115,
      rangedAtk: 51,
      magicAtk: 76,
      evade: 38,
      apRecovery: 91,
      startingAp: 131
    },
    'EX 3': {
      strength: 9,
      technic: 4,
      intelligence: 6,
      vitality: 15,
      agility: 3,
      maxHp: 960,
      meleeAtk: 115,
      rangedAtk: 51,
      magicAtk: 76,
      evade: 38,
      apRecovery: 91,
      startingAp: 131
    },
    'EX 4': {
      strength: 9,
      technic: 4,
      intelligence: 6,
      vitality: 15,
      agility: 3,
      maxHp: 960,
      meleeAtk: 115,
      rangedAtk: 51,
      magicAtk: 76,
      evade: 38,
      apRecovery: 91,
      startingAp: 131
    },
    'EX 5': {
      strength: 9,
      technic: 4,
      intelligence: 6,
      vitality: 15,
      agility: 3,
      maxHp: 960,
      meleeAtk: 115,
      rangedAtk: 51,
      magicAtk: 76,
      evade: 38,
      apRecovery: 91,
      startingAp: 131
    },
    'EX 6': {
      strength: 9,
      technic: 4,
      intelligence: 6,
      vitality: 15,
      agility: 3,
      maxHp: 960,
      meleeAtk: 115,
      rangedAtk: 51,
      magicAtk: 76,
      evade: 38,
      apRecovery: 91,
      startingAp: 131
    },
  },
};

// Sanitize and validate the character data
export const mu_ying_yingData = sanitizeCharacterData(rawMu_ying_yingData);
export const mu_ying_yingSEO = {
  title: `Mu Ying-ying - Horizon Walker Character Guide`,
  description: `Complete guide for Mu Ying-ying, EX rarity 7 cost hero in Horizon Walker. Skills, traits, profile and team tips.`,
};

const rawHighlighting = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^\[\]]{1,150})\]/g,
  buffsDebuffs: /\b(?:shield|critical\s+hit|unavoidable|unblockable|counterattack|taunt|weakness\s+attack|buff|debuff|heal|recover|purification|extra\s+action)\b/gi,
  percentages: /\b(\d{1,3}%)\b/gi,
  keywords: /\b(?:reduces?|deals?|inflicts?|additional|equal\s+to|applies?|gains?|grants?|lasting|successful|activates?|increases?|decreases?|deployed|battle|allies|recovers?|defeated|duration|turn|start|end|rounds?|for\s+\d{1,3}\s+rounds?)\b/gi,
  attributes: /\b(?:AP|Magic\s+ATK|Immaterial|Physical|Slash|Pierce|Crush|Heat|Cold|Electric|Poison|Evasion|ATK|AP\s+recovery|all\s+ATK|DEF|max\s+HP|HP|Speed|Accuracy|Crit\s+Rate|Crit\s+DMG)\b/gi,
  searchableTerms: [
    "Mu Ying-ying",
    "EX",
    7,
    ...rawMu_ying_yingData.tags,
  ],
  skillNames: Object.keys(rawMu_ying_yingData.skills || {})
    .map(key => rawMu_ying_yingData.skills[key]?.name)
    .filter(Boolean),
  traitNames: Object.keys(rawMu_ying_yingData.uniqueTraits || {})
    .map(key => rawMu_ying_yingData.uniqueTraits[key]?.name)
    .filter(Boolean),
};

export const mu_ying_yingHighlighting = sanitizeHighlightPatterns(rawHighlighting);

export { rawMu_ying_yingData };
