// Mira Character Data - Horizon Walker
// Extracted from the game's decrypted data tables (build 2026-09-01, Steam 24963123)
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawMiraData = {
  name: "Mira",
  image: "Mira",
  rarity: "EX",
  cost: 5,
  tags: ["Slash Damage", "Immaterial Damage", "Half-Elf", "Kingdom of Platinum Bough, Silverstream Gate", "EX Rarity"],

  description: "Mira is an EX rarity hero with a deployment cost of 5, dealing Slash, Immaterial damage. A Half-Elf from Kingdom of Platinum Bough, Silverstream Gate.",

  stats: {
    // Primaries at max rarity raise (base + class rating increments), from game tables
    strength: '4',
    technic: '4',
    intelligence: '14',
    vitality: '22',
    agility: '4',

    maxHp: '1408',
    spd: '85',
    meleeAtk: '51',
    rangedAtk: '51',
    magicAtk: '179',
    startingAp: '112',
    apRecovery: '97',
    accuracy: '102',
    evade: '51',
    critRate: '10',
    critDmg: '150',

    // Attribute boosts/DEF (Lv 60, full raises, inborn + default kit trait passives included)
    slashBoost: '0',
    pierceBoost: '0',
    crushBoost: '6',
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

  profile: {
  "age": "146",
  "racial": "Half-Elf",
  "homeland": "Kingdom of Platinum Bough, Silverstream Gate",
  "height": "168cm",
  "birthday": "August 27th",
  "bwhRatio": "94(J)-51-106"
},

  uniqueTraits: {
    aHeartThatFollowsBehind: { name: 'A Heart That Follows Behind', description: 'Activates the Level 1 passive skill [A Heart That Follows Behind]. [A Heart That Follows Behind]: At the start of each round, sets AP</color> to 101 + 50% of [Radiance of Oath] stacks.' },
    halfElf: { name: 'Half-Elf', description: 'Starting AP +8, AP Recovery +6%' },
    aKnightsOath: { name: 'A Knight\'s Oath', description: 'Activates the Level 1 passive skill [A Knight\'s Oath]. [A Knight\'s Oath]: At the start of battle, grants [Bound Master] to the ally with the highest INT. [Bound Master]: Mira and Mirana\'s skills are empowered based on the AP Cost of skills used by the holder of this effect.' },
    interested: { name: 'Interested', description: 'Unlocks at Gift Affection Level 5: becomes active after reaching 2,000 affection points through gift-giving. Special trait with no listed characteristics.' },
  },

  skills: {
    oathStrike: {
      gameKey: "OathStrike",
      icon: "UI_SkillIcon_OathStrike",
      name: "Strike of Oath",
      type: 'Skill',
      description: "Cuts through enemies like flowing water. Deals Slash DMG equal to N% of Melee ATK. For each stack of [Radiance of Oath] possessed, deals additional Immaterial DMG equal to {3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,4.0}% of Magic ATK.",
    },
    masterServantBond: {
      gameKey: "MasterServantBond",
      icon: "UI_SkillIcon_MasterServantBond",
      name: "Master-Servant Bond",
      type: 'Skill',
      description: "When a holder of [Bound Master] attacks for the first time each round, gains stacks of [Dawnlight] equal to the AP spent on that attack. [Dawnlight]: At the start of each round, converts into [Radiance of Oath] for 1R.",
    },
    starAfterimage: {
      gameKey: "StarAfterimage",
      icon: "UI_SkillIcon_StarAfterimage",
      name: "Afterimage of Stars",
      type: 'Skill',
      description: "Smoothly cuts through nearby enemies. Deals Slash DMG equal to N% of Melee ATK. For each enemy hit, grants the holder of [Bound Master] 1 stack of [Starlit Veil]. [Starlit Veil]: Grants a Shield equal to 100% of Base Max HP + {110,120,130,140,150,160,170,180,190,200}% of [Radiance of Oath] stacks for 1R.",
    },
    starVeil: {
      gameKey: "StarVeil",
      icon: "UI_SkillIcon_StarVeil",
      name: "Veil of Stars",
      type: 'Skill',
      description: "At the start of each turn, pulls nearby enemies within a 9m radius toward yourself.",
    },
    engravedStarTrajectory: {
      gameKey: "EngravedStarTrajectory",
      icon: "UI_SkillIcon_EngravedStarTrajectory",
      name: "Inscribed Trail of Stars",
      type: 'Skill',
      description: "Gathers the power of light and hurls it at the enemy. Deals Immaterial DMG equal to N% of Magic ATK. For each stack of [Radiance of Oath] you possess, deals additional Immaterial DMG equal to {10.5,11,11.5,12,12.5,13,13.5,14,14.5,15}% of Magic ATK. Afterward, grants the holder of [Bound Master] 1 stack of [Arcane Bond] for each stack of [Radiance of Oath] you possess. [Radiance of Oath]: A stacking effect gained through [Master-Servant Bond]. [Bound Master]: An effect gained through [A Knight's Oath]. Mira and Mirana's skills are empowered based on the AP Cost of skills used by the holder of this effect. [Arcane Bond]: At the start of the [Bound Master] holder's turn, consumes all [Arcane Bond] stacks and grants AP equal to 40% of the number of stacks consumed.",
    },
  },
  rarityStages: {
    'EX': {
      strength: 4,
      technic: 4,
      intelligence: 10,
      vitality: 16,
      agility: 2,
      maxHp: 1024,
      meleeAtk: 51,
      rangedAtk: 51,
      magicAtk: 128,
      evade: 25,
      apRecovery: 91,
      startingAp: 106
    },
    'EX 1': {
      strength: 4,
      technic: 4,
      intelligence: 10,
      vitality: 17,
      agility: 2,
      maxHp: 1088,
      meleeAtk: 51,
      rangedAtk: 51,
      magicAtk: 128,
      evade: 25,
      apRecovery: 91,
      startingAp: 106
    },
    'EX 2': {
      strength: 4,
      technic: 4,
      intelligence: 10,
      vitality: 19,
      agility: 2,
      maxHp: 1216,
      meleeAtk: 51,
      rangedAtk: 51,
      magicAtk: 128,
      evade: 25,
      apRecovery: 91,
      startingAp: 106
    },
    'EX 3': {
      strength: 4,
      technic: 4,
      intelligence: 11,
      vitality: 19,
      agility: 2,
      maxHp: 1216,
      meleeAtk: 51,
      rangedAtk: 51,
      magicAtk: 140,
      evade: 25,
      apRecovery: 91,
      startingAp: 106
    },
    'EX 4': {
      strength: 4,
      technic: 4,
      intelligence: 12,
      vitality: 19,
      agility: 2,
      maxHp: 1216,
      meleeAtk: 51,
      rangedAtk: 51,
      magicAtk: 153,
      evade: 25,
      apRecovery: 91,
      startingAp: 106
    },
    'EX 5': {
      strength: 4,
      technic: 4,
      intelligence: 14,
      vitality: 19,
      agility: 2,
      maxHp: 1216,
      meleeAtk: 51,
      rangedAtk: 51,
      magicAtk: 179,
      evade: 25,
      apRecovery: 91,
      startingAp: 106
    },
    'EX 6': {
      strength: 4,
      technic: 4,
      intelligence: 14,
      vitality: 22,
      agility: 4,
      maxHp: 1408,
      meleeAtk: 51,
      rangedAtk: 51,
      magicAtk: 179,
      evade: 51,
      apRecovery: 97,
      startingAp: 112
    },
  },
  story: 'Mira and Mirana were twin half-blood sisters born of a human parent, a lineage looked down upon among the Highland Elves. With no companions in their childhood, the two sisters grew up relying upon no one but each other. Thus, when they were granted the honor of becoming Knights of the Golden Ratio - royal knights entrusted with guarding their Queen - the sisters rejoiced beyond measure. Yet before long, the Rift Crisis descended upon the world. Though the twins sought to fulfill their duties as knights, the Queen ultimately left them behind in order to shield them from the vengeance of the spirits. To the sisters, it felt as though they had once again been abandoned. Afterward, the twins volunteered to guard the rear of the refugee procession, eventually becoming separated from the Queen as they journeyed across Siberia and into Earth\'s lands. Following the path laid before them by duty alone, the sisters endured countless hardships before finally reaching the Federation. Now reunited with their Queen at last, Mira and Mirana have pledged themselves to the Eternal God, wishing only to serve at his side and guard him for all the years yet to come.',

  heroId: 65,

  weapon: {
    name: "Eleuthia",
    flavor: "Eleuthia is one of the ancient twin-bladed greatswords passed down exclusively to the royal guard knights entrusted with protecting the noble sovereigns of the Platinum Bough Kingdom at the closest of distances. Though its origins have long faded beyond even the memory of the Highland Elves, the weapon continues to gleam with the beauty of a masterwork untouched by time, its twin edges retaining a flawless sharpness even in the modern age. According to ancient legend, the weapon was forged in the image of a heroic elf of old who strode into battle bearing both shield and bow. \"Eleuthia\" itself is merely a codename. The original ancient elven name of the weapon proved too difficult for human tongues to pronounce, and so, with the wielder's permission, it was instead renamed after a word drawn from Earth's mythology. The meaning carried by the original elven name is said to be: \"The Golden Veil of the Constellations.\"",
    type: "Torturas",
    rarity: 'EX',
    image: "Weapon_FullIMG_Torturas_ForMira",
    imageOnR2: false,
    maxLevel: 60,
    stats: {
      "Melee ATK (weapon)": "70",
      "Magic ATK (weapon)": "70",
      "Magic ATK (%)": "+49%",
    },
    uniqueSkills: {
      unique: {
        name: "Guardian Star's Riposte",
        type: 'Unique',
        description: "At the start of each round, gains {1,2,3,4,5} additional Counterattack opportunities. Max HP increases by {20,25,30,35,40}%.",
      },
      signature: {
        name: "Mira Signature: Dawnlight's Response",
        type: 'Signature',
        description: "At the start of battle, gains 280 stacks of [Radiance of Oath]. When using [Afterimage of Stars], the effect is also applied to yourself.",
      },
    },
    levelStats: {
      "Melee ATK (weapon)": [11.0, 70.0],
      "Magic ATK (weapon)": [11.0, 70.0],
      "Magic ATK (%)": [7.7, 49.0],
    },
    exLevels: {
      effects: [
        { name: "At the start of each round, gains", valuesByLevel: "1 / 2 / 3 / 4 / 5" },
        { name: "Max HP increases", valuesByLevel: "20% / 25% / 30% / 35% / 40%" },
      ],
    },
  },
};

// Sanitize and validate the character data
export const miraData = sanitizeCharacterData(rawMiraData);
export const miraSEO = {
  title: `Mira - Horizon Walker Character Guide`,
  description: `Complete guide for Mira, EX rarity 5 cost hero in Horizon Walker. Skills, traits, profile and team tips.`,
};

const rawHighlighting = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^\[\]]{1,150})\]/g,
  buffsDebuffs: /\b(?:shield|critical\s+hit|unavoidable|unblockable|counterattack|taunt|weakness\s+attack|buff|debuff|heal|recover|purification|extra\s+action)\b/gi,
  percentages: /\b(\d{1,3}%)\b/gi,
  keywords: /\b(?:reduces?|deals?|inflicts?|additional|equal\s+to|applies?|gains?|grants?|lasting|successful|activates?|increases?|decreases?|deployed|battle|allies|recovers?|defeated|duration|turn|start|end|rounds?|for\s+\d{1,3}\s+rounds?)\b/gi,
  attributes: /\b(?:AP|Magic\s+ATK|Immaterial|Physical|Slash|Pierce|Crush|Heat|Cold|Electric|Poison|Evasion|ATK|AP\s+recovery|all\s+ATK|DEF|max\s+HP|HP|Speed|Accuracy|Crit\s+Rate|Crit\s+DMG)\b/gi,
  searchableTerms: [
    "Mira",
    "EX",
    5,
    ...rawMiraData.tags,
  ],
  skillNames: Object.keys(rawMiraData.skills || {})
    .map(key => rawMiraData.skills[key]?.name)
    .filter(Boolean),
  traitNames: Object.keys(rawMiraData.uniqueTraits || {})
    .map(key => rawMiraData.uniqueTraits[key]?.name)
    .filter(Boolean),
};

export const miraHighlighting = sanitizeHighlightPatterns(rawHighlighting);

export { rawMiraData };
