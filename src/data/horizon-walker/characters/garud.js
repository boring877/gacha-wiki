// Garud Character Data - Horizon Walker
// Extracted from the game's decrypted data tables (build 2026-09-01, Steam 24963123)
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawGarudData = {
  name: "Garud",
  image: "Garud",
  rarity: "EX",
  cost: 8,
  tags: ["EX Rarity"],

  description: "Garud is an EX rarity hero with a deployment cost of 8, dealing Physical damage.",

  stats: {
    // Primaries at max rarity raise (base + class rating increments), from game tables
    strength: '6',
    technic: '16',
    intelligence: '39',
    vitality: '22',
    agility: '20',

    maxHp: '1478',
    spd: '92',
    meleeAtk: '76',
    rangedAtk: '204',
    magicAtk: '748',
    startingAp: '135',
    apRecovery: '130',
    accuracy: '102',
    evade: '256',
    critRate: '10',
    critDmg: '150',

    // Attribute boosts/DEF (Lv 60, full raises, inborn + default kit trait passives included)
    slashBoost: '0',
    pierceBoost: '0',
    crushBoost: '0',
    heatBoost: '18',
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
    eternity: { name: 'Eternity', description: 'Activates the Level 1 passive skill [Eternity]. When receiving fatal damage, uses transcendent power to negate the damage once, Purifies all Crowd Control effects, recovers 30% HP, and gains [Eternity] for 1 Round. [Eternity]: At the start of each turn, recovers HP equal to 5% of Max HP. While this effect is active, cannot act or perform Responses and becomes immune to Crowd Control effects. At the start of the next Round, fully recovers HP, gains 200 AP, and can act again.' },
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
  rarityStages: {
    'EX': {
      strength: 6,
      technic: 10,
      intelligence: 23,
      vitality: 14,
      agility: 11,
      maxHp: 940,
      meleeAtk: 76,
      rangedAtk: 128,
      magicAtk: 441,
      evade: 140,
      apRecovery: 107,
      startingAp: 112
    },
    'EX 1': {
      strength: 6,
      technic: 11,
      intelligence: 25,
      vitality: 14,
      agility: 11,
      maxHp: 940,
      meleeAtk: 76,
      rangedAtk: 140,
      magicAtk: 480,
      evade: 140,
      apRecovery: 107,
      startingAp: 112
    },
    'EX 2': {
      strength: 6,
      technic: 12,
      intelligence: 26,
      vitality: 15,
      agility: 11,
      maxHp: 1008,
      meleeAtk: 76,
      rangedAtk: 153,
      magicAtk: 499,
      evade: 140,
      apRecovery: 107,
      startingAp: 112
    },
    'EX 3': {
      strength: 6,
      technic: 13,
      intelligence: 30,
      vitality: 17,
      agility: 14,
      maxHp: 1142,
      meleeAtk: 76,
      rangedAtk: 166,
      magicAtk: 576,
      evade: 179,
      apRecovery: 115,
      startingAp: 120
    },
    'EX 4': {
      strength: 6,
      technic: 14,
      intelligence: 32,
      vitality: 17,
      agility: 16,
      maxHp: 1142,
      meleeAtk: 76,
      rangedAtk: 179,
      magicAtk: 614,
      evade: 204,
      apRecovery: 120,
      startingAp: 125
    },
    'EX 5': {
      strength: 6,
      technic: 15,
      intelligence: 36,
      vitality: 20,
      agility: 19,
      maxHp: 1344,
      meleeAtk: 76,
      rangedAtk: 192,
      magicAtk: 691,
      evade: 243,
      apRecovery: 127,
      startingAp: 132
    },
    'EX 6': {
      strength: 6,
      technic: 16,
      intelligence: 39,
      vitality: 22,
      agility: 20,
      maxHp: 1478,
      meleeAtk: 76,
      rangedAtk: 204,
      magicAtk: 748,
      evade: 256,
      apRecovery: 130,
      startingAp: 135
    },
  },
  heroId: 70,

  weapon: {
    name: "Unreleased Weapon (Garud)",
    type: "Staff",
    rarity: 'EX',
    image: "Weapon_FullIMG_Staff_ForGarud",
    imageOnR2: false,
    maxLevel: 60,
    stats: {
      "Magic ATK (weapon)": "91",
      "Magic ATK (%)": "+49%",
    },
    uniqueSkills: {
      unique: {
        name: "Garud Signature",
        type: 'Unique',
        description: "None",
      },
      signature: {
        name: "Garud Signature: Garud",
        type: 'Signature',
        description: "None",
      },
    },
    levelStats: {
      "Magic ATK (weapon)": [14.3, 91.0],
      "Magic ATK (%)": [7.7, 49.0],
    },
  },
};

// Sanitize and validate the character data
export const garudData = sanitizeCharacterData(rawGarudData);
export const garudSEO = {
  title: `Garud - Horizon Walker Character Guide`,
  description: `Complete guide for Garud, EX rarity 8 cost hero in Horizon Walker. Skills, traits, profile and team tips.`,
};

const rawHighlighting = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^\[\]]{1,150})\]/g,
  buffsDebuffs: /\b(?:shield|critical\s+hit|unavoidable|unblockable|counterattack|taunt|weakness\s+attack|buff|debuff|heal|recover|purification|extra\s+action)\b/gi,
  percentages: /\b(\d{1,3}%)\b/gi,
  keywords: /\b(?:reduces?|deals?|inflicts?|additional|equal\s+to|applies?|gains?|grants?|lasting|successful|activates?|increases?|decreases?|deployed|battle|allies|recovers?|defeated|duration|turn|start|end|rounds?|for\s+\d{1,3}\s+rounds?)\b/gi,
  attributes: /\b(?:AP|Magic\s+ATK|Immaterial|Physical|Slash|Pierce|Crush|Heat|Cold|Electric|Poison|Evasion|ATK|AP\s+recovery|all\s+ATK|DEF|max\s+HP|HP|Speed|Accuracy|Crit\s+Rate|Crit\s+DMG)\b/gi,
  searchableTerms: [
    "Garud",
    "EX",
    8,
    ...rawGarudData.tags,
  ],
  skillNames: Object.keys(rawGarudData.skills || {})
    .map(key => rawGarudData.skills[key]?.name)
    .filter(Boolean),
  traitNames: Object.keys(rawGarudData.uniqueTraits || {})
    .map(key => rawGarudData.uniqueTraits[key]?.name)
    .filter(Boolean),
};

export const garudHighlighting = sanitizeHighlightPatterns(rawHighlighting);

export { rawGarudData };
