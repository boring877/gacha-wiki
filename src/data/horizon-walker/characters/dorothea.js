// Dorothea Character Data - Horizon Walker
// Extracted from the game's decrypted data tables (build 2026-09-01, Steam 24963123)
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawDorotheaData = {
  name: "Dorothea",
  image: "Dorothea",
  rarity: "EX",
  cost: 5,
  tags: ["Slash Damage", "EX Rarity"],

  description: "Dorothea is an EX rarity hero with a deployment cost of 5, dealing Slash damage.",

  stats: {
    // Primaries at max rarity raise (base + class rating increments), from game tables
    strength: '12',
    technic: '8',
    intelligence: '6',
    vitality: '10',
    agility: '9',

    maxHp: '1024',
    spd: '49',
    meleeAtk: '217',
    rangedAtk: '166',
    magicAtk: '76',
    startingAp: '170',
    apRecovery: '102',
    accuracy: '102',
    evade: '112',
    critRate: '10',
    critDmg: '150',

    // Attribute boosts/DEF (Lv 60, full raises, inborn + default kit trait passives included)
    slashBoost: '0',
    pierceBoost: '0',
    crushBoost: '0',
    heatBoost: '8',
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
    ancestorsBeartheRodsWeight: { name: 'Ancestors Bear the Rod\'s Weight', description: 'Weakness Angle Reduction -70º' },
    torta: { name: 'Torta', description: 'Vitality +1, Evade -2%' },
    thrillofBattle: { name: 'Thrill of Battle', description: 'Whenever an enemy is pushed or pulled, recovers 10% of lost HP.' },
    interested: { name: 'Interested', description: 'Unlocks at Gift Affection Level 5: becomes active after reaching 2,000 affection points through gift-giving. Special trait with no listed characteristics.' },
  },

  skills: {
    cursedTreeDomain: {
      gameKey: "CursedTreeDomain",
      icon: "UI_SkillIcon_CursedTreeDomain",
      name: "Domain of the Cursed Tree",
      type: 'Skill',
      description: "Skill details pending game data (no localized description in current build).",
    },
    accumulatedResentment: {
      gameKey: "AccumulatedResentment",
      icon: "UI_SkillIcon_AccumulatedResentment",
      name: "Grudge Accumulation",
      type: 'Skill',
      description: "Skill details pending game data (no localized description in current build).",
    },
    predatoryDistance: {
      gameKey: "PredatoryDistance",
      icon: "UI_SkillIcon_PredatoryDistance",
      name: "Predatory Range",
      type: 'Skill',
      description: "Throws a chained Torturas to pull the enemy closer. Deals Slash DMG equal to N% of Melee ATK and removes Counterattack. If the target is a large enemy, instead of pulling them closer, moves self to the front of the enemy.",
    },
    threatening: {
      gameKey: "Threatening",
      icon: "UI_SkillIcon_Threatening",
      name: "Afflict Pain",
      type: 'Skill',
      description: "Each time an attack is successfully made, has a {30,33,36,39,42,45,48,51,54,57}% chance to Taunt the target.",
    },
  },
  rarityStages: {
    'EX': {
      strength: 12,
      technic: 8,
      intelligence: 6,
      vitality: 10,
      agility: 9,
      maxHp: 1024,
      meleeAtk: 217,
      rangedAtk: 166,
      magicAtk: 76,
      evade: 112,
      apRecovery: 102,
      startingAp: 170
    },
    'EX 1': {
      strength: 12,
      technic: 8,
      intelligence: 6,
      vitality: 10,
      agility: 9,
      maxHp: 1024,
      meleeAtk: 217,
      rangedAtk: 166,
      magicAtk: 76,
      evade: 112,
      apRecovery: 102,
      startingAp: 170
    },
    'EX 2': {
      strength: 12,
      technic: 8,
      intelligence: 6,
      vitality: 10,
      agility: 9,
      maxHp: 1024,
      meleeAtk: 217,
      rangedAtk: 166,
      magicAtk: 76,
      evade: 112,
      apRecovery: 102,
      startingAp: 170
    },
    'EX 3': {
      strength: 12,
      technic: 8,
      intelligence: 6,
      vitality: 10,
      agility: 9,
      maxHp: 1024,
      meleeAtk: 217,
      rangedAtk: 166,
      magicAtk: 76,
      evade: 112,
      apRecovery: 102,
      startingAp: 170
    },
    'EX 4': {
      strength: 12,
      technic: 8,
      intelligence: 6,
      vitality: 10,
      agility: 9,
      maxHp: 1024,
      meleeAtk: 217,
      rangedAtk: 166,
      magicAtk: 76,
      evade: 112,
      apRecovery: 102,
      startingAp: 170
    },
    'EX 5': {
      strength: 12,
      technic: 8,
      intelligence: 6,
      vitality: 10,
      agility: 9,
      maxHp: 1024,
      meleeAtk: 217,
      rangedAtk: 166,
      magicAtk: 76,
      evade: 112,
      apRecovery: 102,
      startingAp: 170
    },
    'EX 6': {
      strength: 12,
      technic: 8,
      intelligence: 6,
      vitality: 10,
      agility: 9,
      maxHp: 1024,
      meleeAtk: 217,
      rangedAtk: 166,
      magicAtk: 76,
      evade: 112,
      apRecovery: 102,
      startingAp: 170
    },
  },
  heroId: 72,

  weapon: {
    name: 'EX Weapon - Vengeful Spirit\'s Gaze Weapon',
    type: 'EX Weapon',
    rarity: 'EX',
    image: '',
    imageOnR2: false,
    maxLevel: 5,
    uniqueSkills: {
      unique: {
        name: 'Vengeful Spirit\'s Gaze',
        type: 'Unique',
        description: '',
      },
        signature: {
          name: 'Dorothea Signature: Land of Vengeful Spirits',
          type: 'Signature',
          description: '',
        },
    },
    exLevels: {
      effects: [
        { name: "Vengeful Spirit's Gaze: Speed Up", valuesByLevel: "1 / 1.5 / 2 / 2.5 / 3" },
        { name: "Vengeful Spirit's Gaze: Vengeful Spirit's Curse", valuesByLevel: "-30 / -35 / -40 / -45 / -50" },
      ],
    },
  },
};

// Sanitize and validate the character data
export const dorotheaData = sanitizeCharacterData(rawDorotheaData);
export const dorotheaSEO = {
  title: `Dorothea - Horizon Walker Character Guide`,
  description: `Complete guide for Dorothea, EX rarity 5 cost hero in Horizon Walker. Skills, traits, profile and team tips.`,
};

const rawHighlighting = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^\[\]]{1,150})\]/g,
  buffsDebuffs: /\b(?:shield|critical\s+hit|unavoidable|unblockable|counterattack|taunt|weakness\s+attack|buff|debuff|heal|recover|purification|extra\s+action)\b/gi,
  percentages: /\b(\d{1,3}%)\b/gi,
  keywords: /\b(?:reduces?|deals?|inflicts?|additional|equal\s+to|applies?|gains?|grants?|lasting|successful|activates?|increases?|decreases?|deployed|battle|allies|recovers?|defeated|duration|turn|start|end|rounds?|for\s+\d{1,3}\s+rounds?)\b/gi,
  attributes: /\b(?:AP|Magic\s+ATK|Immaterial|Physical|Slash|Pierce|Crush|Heat|Cold|Electric|Poison|Evasion|ATK|AP\s+recovery|all\s+ATK|DEF|max\s+HP|HP|Speed|Accuracy|Crit\s+Rate|Crit\s+DMG)\b/gi,
  searchableTerms: [
    "Dorothea",
    "EX",
    5,
    ...rawDorotheaData.tags,
  ],
  skillNames: Object.keys(rawDorotheaData.skills || {})
    .map(key => rawDorotheaData.skills[key]?.name)
    .filter(Boolean),
  traitNames: Object.keys(rawDorotheaData.uniqueTraits || {})
    .map(key => rawDorotheaData.uniqueTraits[key]?.name)
    .filter(Boolean),
};

export const dorotheaHighlighting = sanitizeHighlightPatterns(rawHighlighting);

export { rawDorotheaData };
