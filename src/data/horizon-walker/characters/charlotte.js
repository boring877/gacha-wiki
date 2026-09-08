// Charlotte Character Data - Horizon Walker
// Extracted from the game's decrypted data tables (build 2026-09-01, Steam 24963123)
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawCharlotteData = {
  name: "Charlotte",
  image: "Charlotte",
  rarity: "EX",
  cost: 8,
  tags: ["EX Rarity"],

  description: "Charlotte is an EX rarity hero with a deployment cost of 8, dealing Physical damage.",

  stats: {
    // Base stats from game data (unequipped, no trait bonuses)
    strength: '',
    technic: '',
    intelligence: '',
    vitality: '',
    agility: '',

    maxHp: '',
    spd: '',
    meleeAtk: '',
    rangedAtk: '',
    magicAtk: '',
    startingAp: '',
    apRecovery: '',
    accuracy: '',
    evade: '',
    critRate: '',
    critDmg: '',
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
  heroId: 74,

};

// Sanitize and validate the character data
export const charlotteData = sanitizeCharacterData(rawCharlotteData);
export const charlotteSEO = {
  title: `Charlotte - Horizon Walker Character Guide`,
  description: `Complete guide for Charlotte, EX rarity 8 cost hero in Horizon Walker. Skills, traits, profile and team tips.`,
};

const rawHighlighting = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^\[\]]{1,150})\]/g,
  buffsDebuffs: /\b(?:shield|critical\s+hit|unavoidable|unblockable|counterattack|taunt|weakness\s+attack|buff|debuff|heal|recover|purification|extra\s+action)\b/gi,
  percentages: /\b(\d{1,3}%)\b/gi,
  keywords: /\b(?:reduces?|deals?|inflicts?|additional|equal\s+to|applies?|gains?|grants?|lasting|successful|activates?|increases?|decreases?|deployed|battle|allies|recovers?|defeated|duration|turn|start|end|rounds?|for\s+\d{1,3}\s+rounds?)\b/gi,
  attributes: /\b(?:AP|Magic\s+ATK|Immaterial|Physical|Slash|Pierce|Crush|Heat|Cold|Electric|Poison|Evasion|ATK|AP\s+recovery|all\s+ATK|DEF|max\s+HP|HP|Speed|Accuracy|Crit\s+Rate|Crit\s+DMG)\b/gi,
  searchableTerms: [
    "Charlotte",
    "EX",
    8,
    ...rawCharlotteData.tags,
  ],
  skillNames: Object.keys(rawCharlotteData.skills || {})
    .map(key => rawCharlotteData.skills[key]?.name)
    .filter(Boolean),
  traitNames: Object.keys(rawCharlotteData.uniqueTraits || {})
    .map(key => rawCharlotteData.uniqueTraits[key]?.name)
    .filter(Boolean),
};

export const charlotteHighlighting = sanitizeHighlightPatterns(rawHighlighting);

export { rawCharlotteData };
