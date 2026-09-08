// Mirana Character Data - Horizon Walker
// Extracted from the game's decrypted data tables (build 2026-09-01, Steam 24963123)
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawMiranaData = {
  name: "Mirana",
  image: "Mirana",
  rarity: "EX",
  cost: 5,
  tags: ["Slash Damage", "Immaterial Damage", "Half-Elf", "Kingdom of Platinum Bough, Silverstream Gate", "EX Rarity"],

  description: "Mirana is an EX rarity hero with a deployment cost of 5, dealing Slash, Immaterial damage. A Half-Elf from Kingdom of Platinum Bough, Silverstream Gate.",

  stats: {
    // Primaries at max rarity raise (base + class rating increments), from game tables
    strength: '4',
    technic: '4',
    intelligence: '20',
    vitality: '16',
    agility: '12',

    maxHp: '1024',
    spd: '96',
    meleeAtk: '51',
    rangedAtk: '51',
    magicAtk: '256',
    startingAp: '115',
    apRecovery: '120',
    accuracy: '102',
    evade: '153',
    critRate: '10',
    critDmg: '150',

    // Attribute boosts/DEF (Lv 60, full raises, inborn + default kit trait passives included)
    slashBoost: '6',
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

  profile: {
  "age": "146",
  "racial": "Half-Elf",
  "homeland": "Kingdom of Platinum Bough, Silverstream Gate",
  "height": "168cm",
  "birthday": "August 27th",
  "bwhRatio": "84(F)-49-92"
},

  uniqueTraits: {
    aHeartThatFollowsBehind: { name: 'A Heart That Follows Behind', description: 'Activates the Level 1 Passive skill [A Heart That Follows Behind]. [A Heart That Follows Behind]: At the start of each round, sets AP</color> to 100 + 50% of [Radiance of the Oath] stacks.' },
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
    radianceDistortion: {
      gameKey: "RadianceDistortion",
      icon: "UI_SkillIcon_RadianceDistortion",
      name: "Radiant Distortion",
      type: 'Skill',
      description: "Traces a path of light to cut down the enemy's legs. Deals Immaterial DMG equal to N% of Magic ATK and inflicts [Fading Starlight] and [Slow] for 1R. [Fading Starlight]: Reduces Immaterial DEF by 120 + {320,340,360,380,400,420,440,460,480,500}% of [Radiance of Oath] stacks. Stacks up to 10 times. [Slow]: SPD is reduced by 40%.",
    },
    tearingLightTrajectory: {
      gameKey: "TearingLightTrajectory",
      icon: "UI_SkillIcon_TearingLightTrajectory",
      name: "Shattered Trail of Light",
      type: 'Skill',
      description: "Throws a spear of light at the enemy. Deals Immaterial DMG equal to N% of Magic ATK. For each stack of [Radiance of Oath] you possess, deals additional Immaterial DMG equal to {10.5,11,11.5,12,12.5,13,13.5,14,14.5,15}% of Magic ATK. Afterward, grants the holder of [Bound Master] 1 stack of [Arcane Bond] for each stack of [Radiance of Oath] you possess. [Radiance of Oath]: A stacking effect gained through [Master-Servant Bond]. [Bound Master]: An effect gained through [A Knight's Oath]. Mira and Mirana's skills are empowered based on the AP Cost of skills used by the holder of this effect. [Arcane Bond]: At the start of the [Bound Master] holder's turn, consumes all [Arcane Bond] stacks and grants AP equal to 40% of the stacks consumed.",
    },
  },
  rarityStages: {
    'EX': {
      strength: 4,
      technic: 4,
      intelligence: 16,
      vitality: 10,
      agility: 10,
      maxHp: 640,
      meleeAtk: 51,
      rangedAtk: 51,
      magicAtk: 204,
      evade: 128,
      apRecovery: 114,
      startingAp: 109
    },
    'EX 1': {
      strength: 4,
      technic: 4,
      intelligence: 16,
      vitality: 11,
      agility: 10,
      maxHp: 704,
      meleeAtk: 51,
      rangedAtk: 51,
      magicAtk: 204,
      evade: 128,
      apRecovery: 114,
      startingAp: 109
    },
    'EX 2': {
      strength: 4,
      technic: 4,
      intelligence: 16,
      vitality: 13,
      agility: 10,
      maxHp: 832,
      meleeAtk: 51,
      rangedAtk: 51,
      magicAtk: 204,
      evade: 128,
      apRecovery: 114,
      startingAp: 109
    },
    'EX 3': {
      strength: 4,
      technic: 4,
      intelligence: 17,
      vitality: 13,
      agility: 10,
      maxHp: 832,
      meleeAtk: 51,
      rangedAtk: 51,
      magicAtk: 217,
      evade: 128,
      apRecovery: 114,
      startingAp: 109
    },
    'EX 4': {
      strength: 4,
      technic: 4,
      intelligence: 18,
      vitality: 13,
      agility: 10,
      maxHp: 832,
      meleeAtk: 51,
      rangedAtk: 51,
      magicAtk: 230,
      evade: 128,
      apRecovery: 114,
      startingAp: 109
    },
    'EX 5': {
      strength: 4,
      technic: 4,
      intelligence: 20,
      vitality: 13,
      agility: 10,
      maxHp: 832,
      meleeAtk: 51,
      rangedAtk: 51,
      magicAtk: 256,
      evade: 128,
      apRecovery: 114,
      startingAp: 109
    },
    'EX 6': {
      strength: 4,
      technic: 4,
      intelligence: 20,
      vitality: 16,
      agility: 12,
      maxHp: 1024,
      meleeAtk: 51,
      rangedAtk: 51,
      magicAtk: 256,
      evade: 153,
      apRecovery: 120,
      startingAp: 115
    },
  },
  story: 'Mira and Mirana were twin half-blood sisters born of a human parent, a lineage looked down upon among the Highland Elves. With no companions in their childhood, the two sisters grew up relying upon no one but each other. Thus, when they were granted the honor of becoming Knights of the Golden Ratio - royal knights entrusted with guarding their Queen - the sisters rejoiced beyond measure. Yet before long, the Rift Crisis descended upon the world. Though the twins sought to fulfill their duties as knights, the Queen ultimately left them behind in order to shield them from the vengeance of the spirits. To the sisters, it felt as though they had once again been abandoned. Afterward, the twins volunteered to guard the rear of the refugee procession, eventually becoming separated from the Queen as they journeyed across Siberia and into Earth\'s lands. Following the path laid before them by duty alone, the sisters endured countless hardships before finally reaching the Federation. Now reunited with their Queen at last, Mira and Mirana have pledged themselves to the Eternal God, wishing only to serve at his side and guard him for all the years yet to come.',

  heroId: 66,

  weapon: {
    name: "Chrysaor",
    flavor: "Chrysaor is one of the ancient twin-bladed greatswords passed down exclusively to the royal guard knights entrusted with protecting the noble sovereigns of the Platinum Bough Kingdom at the closest of distances. Much like the immeasurably long history of the Highland Elves themselves, the origins of this sacred weapon have long faded beyond certainty. Yet even in the modern age, it retains the flawless brilliance of a treasured masterpiece, its gleaming edges remaining untouched by rust or decay. The tips of the blades resemble blooming flower buds, and at first glance do not appear especially sharp. This is said to be because the weapon's true power does not lie in its physical edge, but in the wielder's innate mana. \"Chrysaor\" itself is merely a codename. The original ancient elven name of the weapon proved too difficult for human tongues to pronounce, and so, with the wielder's permission, it was instead renamed after a term drawn from Earth's mythology. The meaning carried by the original elven name is said to be: \"The Keen Trail Across the Heavens.\"",
    type: "Torturas",
    rarity: 'EX',
    image: "Weapon_FullIMG_Torturas_ForMirana",
    imageOnR2: false,
    maxLevel: 60,
    stats: {
      "Melee ATK (weapon)": "70",
      "Magic ATK (weapon)": "70",
      "Magic ATK (%)": "+49%",
    },
    uniqueSkills: {
      unique: {
        name: "Echo of Light",
        type: 'Unique',
        description: "At the start of each round, gains {1,2,3,4,5} additional Counterattack opportunities. Magic ATK increases by {20,25,30,35,40}%.",
      },
      signature: {
        name: "Mirana Signature: Dawnlight's Resonance",
        type: 'Signature',
        description: "At the start of battle, gains 280 stacks of [Radiance of Oath] and increases Immaterial Boost by 40%. When Mira uses [Afterimage of Stars], its effects are also applied to the weapon holder.",
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
        { name: "Magic ATK increases", valuesByLevel: "20% / 25% / 30% / 35% / 40%" },
      ],
    },
  },
};

// Sanitize and validate the character data
export const miranaData = sanitizeCharacterData(rawMiranaData);
export const miranaSEO = {
  title: `Mirana - Horizon Walker Character Guide`,
  description: `Complete guide for Mirana, EX rarity 5 cost hero in Horizon Walker. Skills, traits, profile and team tips.`,
};

const rawHighlighting = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^\[\]]{1,150})\]/g,
  buffsDebuffs: /\b(?:shield|critical\s+hit|unavoidable|unblockable|counterattack|taunt|weakness\s+attack|buff|debuff|heal|recover|purification|extra\s+action)\b/gi,
  percentages: /\b(\d{1,3}%)\b/gi,
  keywords: /\b(?:reduces?|deals?|inflicts?|additional|equal\s+to|applies?|gains?|grants?|lasting|successful|activates?|increases?|decreases?|deployed|battle|allies|recovers?|defeated|duration|turn|start|end|rounds?|for\s+\d{1,3}\s+rounds?)\b/gi,
  attributes: /\b(?:AP|Magic\s+ATK|Immaterial|Physical|Slash|Pierce|Crush|Heat|Cold|Electric|Poison|Evasion|ATK|AP\s+recovery|all\s+ATK|DEF|max\s+HP|HP|Speed|Accuracy|Crit\s+Rate|Crit\s+DMG)\b/gi,
  searchableTerms: [
    "Mirana",
    "EX",
    5,
    ...rawMiranaData.tags,
  ],
  skillNames: Object.keys(rawMiranaData.skills || {})
    .map(key => rawMiranaData.skills[key]?.name)
    .filter(Boolean),
  traitNames: Object.keys(rawMiranaData.uniqueTraits || {})
    .map(key => rawMiranaData.uniqueTraits[key]?.name)
    .filter(Boolean),
};

export const miranaHighlighting = sanitizeHighlightPatterns(rawHighlighting);

export { rawMiranaData };
