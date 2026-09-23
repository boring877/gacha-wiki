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

  description: "Garud is an EX rarity hero with a deployment cost of 8, a phoenix who deals Heat magic damage and revives through death.",

  stats: {
    // Primaries at max rarity raise (base + class rating increments), from game tables
    strength: '6',
    technic: '16',
    intelligence: '39',
    vitality: '22',
    agility: '20',

    maxHp: '1830',
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
  "age": "Unknown",
  "racial": "Phoenix",
  "homeland": "Noctis Nebula, Jade Forest",
  "height": "237cm",
  "birthday": "August 8th",
  "bwhRatio": "126(P)-69-137"
},

  uniqueTraits: {
    transcendent: { name: 'Transcendent', description: 'Cannot perform Weak Point Attacks, but gains Magic ATK, Max HP, Elemental Boost, and AP in return.' },
    phoenix: { name: 'Phoenix', description: 'Heat DMG Boost +10%, Max HP +5%' },
    eternity: { name: 'Eternity', description: 'Activates the Level 1 passive skill [Eternity]. Upon taking fatal damage, nullifies that damage once with transcendent power, recovers 50% of Max HP, and gains [Eternity] for 1R. [Eternity]: At the start of any turn, recovers HP equal to 15% of Max HP. While this effect is active, increases All DEF by 1000, but cannot act or perform Responses and becomes immune to Crowd Control effects. At the start of the next Round, fully recovers HP, gains 200 AP, and can act again. This effect can only trigger once per battle.' },
    interested: { name: 'Interested', description: 'Special trait with no listed characteristics.' },
  },

  skills: {
    incineration: {
      gameKey: "Incineration",
      icon: "UI_SkillIcon_Incineration",
      name: "Incinerate",
      type: 'Skill',
      description: "Deals Heat DMG equal to N% of Magic ATK to the target and all nearby enemies.",
    },
    ember: {
      gameKey: "Ember",
      icon: "UI_SkillIcon_Ember",
      name: "Cinder",
      type: 'Skill',
      description: "On attack, permanently reduces the target's Heat DEF by {300,330,360,390,420,450,480,510,540,570}. At EX+6, further reduces Heat DEF by 300.",
    },
    ignition: {
      gameKey: "Ignition",
      icon: "UI_SkillIcon_Ignition",
      name: "Ignite",
      type: 'Skill',
      description: "Leaps into the air and drops onto the target, dealing Heat DMG equal to N% of Magic ATK to the target and all nearby enemies. Ignores Counterattacks until the end of the turn in which this skill is used. At EX+4, each successful attack with this skill permanently increases Crit Rate by 5% and Crit DMG by 10%. Stacks up to 10 times.",
    },
    solitude: {
      gameKey: "Solitude",
      icon: "UI_SkillIcon_Solitude",
      name: "Solitude",
      type: 'Skill',
      description: "Increases DMG dealt by {32,34,36,38,40,42,44,46,48,50}% during battle and reduces DMG taken by the same amount. At EX+1, reduces the AP cost of all skills by 10 and increases Heat Boost by 15.",
    },
    burningFeather: {
      gameKey: "BurningFeather",
      icon: "UI_SkillIcon_BurningFeather",
      name: "Phoenix Feather",
      type: 'Skill',
      description: "Spreads her wings around herself and soars into the air before plummeting down, dealing Heat DMG equal to N% of Magic ATK and creating an [Blazing Feathers] area that follows her for 3R. Ignores Counterattacks until the end of the turn in which this skill is used. [Blazing Feathers]: When this skill is used and at the end of each turn, inflicts [Flame] on all enemies within the area. At the end of an enemy's turn, at the end of a turn in which Garud uses a skill other than Standby, or whenever Garud performs an additional Response, deals additional Heat DMG equal to {63,66,69,72,75,78,81,84,87,90}% of Magic ATK to all targets with [Flame]. When the [Blazing Feathers] area disappears, all [Flame] effects on the battlefield are also removed. Additional DMG can only trigger once per turn. At EX+2, the additional Heat DMG can Crit.",
    },
    heatDetection: {
      gameKey: "HeatDetection",
      icon: "UI_SkillIcon_HeatDetection",
      name: "Crimson Blaze",
      type: 'Skill',
      description: "Whenever an enemy acts for the first time, performs an additional Response against a random enemy with [Ignite]. For each enemy successfully attacked by an additional Response, increases Heat Boost by {5.5,6,6.5,7,7.5,8,8.5,9,9.5,10} for the rest of the battle. Stacks up to 10 times. Additional Responses have a 1R cooldown for each target.",
    },
  },
  heroId: 70,

  weapon: {
    name: "Undying Flamefeather",
    flavor: "As the old saying goes, a worthy bird chooses with care the tree upon which it rests. So too did the great and benevolent phoenixes take great care in choosing the trees that would become their nests. These mysterious and graceful beings, who return even from death, tended their chosen trees with the utmost care. Over countless years, the trees grew alongside their phoenix keepers, drinking deeply of their breath and magical power until they became potent vessels of magic in their own right. Perhaps it was the result of all those long years spent together. Suffused with the phoenix's power, each tree gradually took on the form its master desired, becoming something akin to a second heart, a living core of magical power bound directly to the phoenix's soul. So profound was this bond that not even death could sever it. When the phoenix rose anew, its tree would return alongside it. And so, bearing their own sacred trees, weapons known as Flamefeathers, phoenixes would descend upon the battlefield like calamities given form, burning all before them. To beings for whom life and death are but parts of one eternal cycle, these treasures are companions without end. Through death and rebirth alike, the Flamefeather remains ever at its master's side.",
    type: "Staff",
    rarity: 'EX',
    image: "Weapon_FullIMG_Staff_ForGarud",
    imageOnR2: true,
    maxLevel: 60,
    stats: {
      "Magic ATK (weapon)": "91",
      "Magic ATK (%)": "49%"
    },
    uniqueSkills: {
      unique: {
        name: "Phoenix's Ascent",
        type: 'Unique',
        description: "Increases Magic ATK by {20,30,40,50,60}% during battle. Whenever a Mobility Skill is used, increases Heat Boost and Additional DMG Boost by {10,15,20,25,30}% for the rest of the battle. Stacks up to 3 times.",
      },
      signature: {
        name: "Garud Signature: Cataclysmic Flame",
        type: 'Signature',
        description: "Gains 30 AP at the start of battle. Increases the additional Heat DMG dealt by [Flame] by 100%.",
      },
    },
    levelStats: {
      "Magic ATK (weapon)": [14.3, 91],
      "Magic ATK (%)": [7.7, 49]
    },
    exLevels: {
      effects: [
        { name: "Increases Magic ATK", valuesByLevel: "20% / 30% / 40% / 50% / 60%" },,
        { name: "Whenever a Mobility Skill is used, increases Heat Boost and Additional DMG Boost", valuesByLevel: "10% / 15% / 20% / 25% / 30%" },
      ],
    },
  },
  story: 'Born from embers and returned from death, the phoenixes wield the destructive power of flame, yet are renowned as guardians of order and the natural cycle. Their lives follow a rhythm much like the laws of nature itself, passing through death and rebirth time and again. Even among their kind, Garud was known for her wisdom and dignity, as well as her grace and gentle nature. Her power was beyond compare, yet she held a deep affection for the small and fleeting lives around her. Across countless myths and histories, the name Garud endured as that of a mighty being who cherished even the briefest of lives. But then came the Rift Crisis, a calamity unlike anything she had witnessed in all her long existence. Garud lost the world she loved... She lost her fellow phoenixes...And yet she did not break. Neither her strength nor her spirit yielded to the Rift. After crossing over to Earth, Garud renewed the vow she had always lived by: to cherish the small and fleeting, and to preserve order and the natural cycle.Then, she encountered the Human God. Before this extraordinary being, Garud found herself wondering...Perhaps this single, fleeting encounter on Earth might prove longer and deeper than all the ages she had lived before.',
  rarityStages: {
    'EX': {
      strength: 6,
      technic: 10,
      intelligence: 23,
      vitality: 14,
      agility: 11,
      maxHp: 1164,
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
      maxHp: 1164,
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
      maxHp: 1248,
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
      intelligence: 31,
      vitality: 17,
      agility: 14,
      maxHp: 1414,
      meleeAtk: 76,
      rangedAtk: 166,
      magicAtk: 595,
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
      maxHp: 1414,
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
      intelligence: 38,
      vitality: 20,
      agility: 19,
      maxHp: 1664,
      meleeAtk: 76,
      rangedAtk: 192,
      magicAtk: 729,
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
      maxHp: 1830,
      meleeAtk: 76,
      rangedAtk: 204,
      magicAtk: 748,
      evade: 256,
      apRecovery: 130,
      startingAp: 135
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
