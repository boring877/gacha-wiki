// Juza Character Data - Horizon Walker
// Extracted from the game's decrypted data tables (build 2026-09-01, Steam 24963123)
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawJuzaData = {
  name: "Juza",
  image: "Juza",
  rarity: "EX",
  cost: 5,
  tags: ["Crush Damage", "Human (Earth)", "East Asian Federation, Tokyo", "EX Rarity"],

  description: "Juza is an EX rarity hero with a deployment cost of 5, dealing Crush damage. A Human (Earth) from East Asian Federation, Tokyo.",

  stats: {
    // Primaries at max rarity raise (base + class rating increments), from game tables
    strength: '14',
    technic: '6',
    intelligence: '6',
    vitality: '22',
    agility: '8',

    maxHp: '1351',
    spd: '111',
    meleeAtk: '188',
    rangedAtk: '80',
    magicAtk: '79',
    startingAp: '119',
    apRecovery: '104',
    accuracy: '102',
    evade: '102',
    critRate: '10',
    critDmg: '150',

    // Attribute boosts/DEF (Lv 60, full raises, inborn + default kit trait passives included)
    slashBoost: '0',
    pierceBoost: '0',
    crushBoost: '0',
    heatBoost: '0',
    coldBoost: '0',
    electricBoost: '0',
    immaterialBoost: '0',
    poisonBoost: '0',
    slashDef: '30',
    pierceDef: '30',
    crushDef: '30',
    heatDef: '0',
    coldDef: '0',
    electricDef: '0',
    immaterialDef: '0',
    poisonDef: '0',
    blockRate: '0',
  },

  weapon: {
    name: "Doomstar",
    flavor: "It started out as nothing more than a metal bat with a nail-studded iron ball attached to it. But with every life-or-death battle, more scraps and chunks of metal found their way onto the weapon, some salvaged from the battlefield, others hammered into place by Juza herself. By now, it has become something far too monstrous to simply call a bat. It can smash, cut, trim a garden, stab, pierce, and even pry open a crate. But its deadliest application is also the simplest: swing the whole damn thing with enough force to do all of the above at once.",
    type: "Two-Handed Blunt",
    rarity: 'EX',
    image: "Weapon_FullIMG_TwoHandedMaul_ForJuza",
    imageOnR2: false,
    maxLevel: 60,
    stats: {
      "Melee ATK (weapon)": "77",
      "Max HP (%)": "+49%",
    },
    uniqueSkills: {
      unique: {
        name: "Iron Club Supremacy",
        type: 'Unique',
        description: "At the start of battle, increases Max HP by {10,20,30,40,50}%. At the start of battle, increases Melee ATK by {10,20,30,40,50}%. At the start of battle, increases Crush Boost by {10,20,30,40,50}%.",
      },
      signature: {
        name: "Juza Signature: One Heart and Soul",
        type: 'Signature',
        description: "During battle, increases allies' Magic ATK by 50% and Healing Received by 50%. At the start of battle, gains [Deadly Blow]. [Deadly Blow]: When attacking, takes Fixed DMG equal to 60% of current HP, then removes this effect. Afterwards, gains 30% DMG Taken Down for 1 Round.",
      },
    },
    levelStats: {
      "Melee ATK (weapon)": [12.1, 77.0],
      "Max HP (%)": [7.7, 49.0],
    },
    exLevels: {
      effects: [
        { name: "At the start of battle, increases Max HP", valuesByLevel: "10% / 20% / 30% / 40% / 50%" },
        { name: "At the start of battle, increases Melee ATK", valuesByLevel: "10% / 20% / 30% / 40% / 50%" },
        { name: "At the start of battle, increases Crush Boost", valuesByLevel: "10% / 20% / 30% / 40% / 50%" },
      ],
    },
  },
  profile: {
  "age": "21",
  "racial": "Human (Earth)",
  "homeland": "East Asian Federation, Tokyo",
  "height": "202cm",
  "birthday": "October 30th",
  "bwhRatio": "129(R)-76-126"
},

  uniqueTraits: {
    headOnClash: { name: 'Head-On Clash', description: 'Activates the Lv. 1 passive skill [Head-On Clash]. [Head-On Clash]: Reduces Healing Received by 50% and inflicts fixed damage equal to 30% of your current HP whenever you use a skill. This effect cannot reduce you to 0 HP.' },
    human: { name: 'Human', description: 'Technic +1, AP Recovery +4%' },
    intimidation: { name: 'Intimidation', description: 'Aggro Adjustment increases by 50. If Juza\'s attack hits only one target, it performs a Weak Point Attack regardless of direction.' },
    interested: { name: 'Interested', description: 'Unlocks at Gift Affection Level 5: becomes active after reaching 2,000 affection points through gift-giving. Special trait with no listed characteristics.' },
  },

  skills: {
    ironClubPunishment: {
      gameKey: "IronClubPunishment",
      icon: "UI_SkillIcon_IronClubPunishment",
      name: "Iron Club Punishment",
      type: 'Skill',
      description: "Slams the enemy to unleash a shockwave. Deals Crush DMG equal to N% of Melee ATK to the target and all enemies within a 1.5m radius, while dealing Crush DMG equal to {6,6.6,7.2,7.8,8.4,9,9.6,10.2,10.8,11.4}% of Melee ATK to allies and slightly knocking them back. Also deals additional Crush DMG equal to {110,120,130,140,150,160,170,180,190,200}% of your [Fighting Spirit] stacks. [Fighting Spirit]: Allows Juza's other skills to take effect on the target. Additional DMG granted by [Fighting Spirit] only applies to enemies.",
    },
    burningFightingSpirit: {
      gameKey: "BurningFightingSpirit",
      icon: "UI_SkillIcon_BurningFightingSpirit",
      name: "Burning Determination",
      type: 'Skill',
      description: "Gain [Fighting Spirit] stacks equal to the amount of DMG received. At the start of battle, Juza gains 10 stacks of [Fighting Spirit]. When Juza attacks allies, Evasion, Blocking, Critical Hits, Weak Point Attacks, and Support Attacks cannot occur. In addition, allies do not Counterattack Juza. [Fighting Spirit]: Allows Juza's other skills to take effect on the target. Additional DMG granted by [Fighting Spirit] only applies to enemies.",
    },
    forcedExecution: {
      gameKey: "ForcedExecution",
      icon: "UI_SkillIcon_ForcedExecution",
      name: "Forced Execution",
      type: 'Skill',
      description: "Smashes the target and sends them flying. Deals Crush DMG equal to N% of Melee ATK to the target and knocks them back 20m.",
    },
    engineOverheat: {
      gameKey: "EngineOverheat",
      icon: "UI_SkillIcon_EngineOverheat",
      name: "Engine Overheat",
      type: 'Skill',
      description: "At the start of battle, loses all Evade Chance and reduces all DEF by 1,000. Additionally, increases Melee ATK and Max HP by {110,120,130,140,150,160,170,180,190,200}%.",
    },
    rampagingComet: {
      gameKey: "RampagingComet",
      icon: "UI_SkillIcon_RampagingComet",
      name: "Rampaging Comet",
      type: 'Skill',
      description: "Gathers nearby terrain into a massive sphere and slams it into the target. Deals Crush DMG equal to N% of Melee ATK to enemies within a 5m radius, and Crush DMG equal to {30,33,36,39,42,45,48,51,54,57}% of Melee ATK to allies within the area. Deals additional Crush DMG equal to {500,550,600,650,700,750,800,850,900,950}% of current [Fighting Spirit] stacks. At the end of the turn in which this skill is used, [Crazy Stance] is removed and Juza recovers HP equal to 100% of Max HP. [Fighting Spirit]: Allows Juza's other skills to take effect on the target. Additional DMG granted by [Fighting Spirit] only applies to enemies.",
    },
    indiscriminateBarrage: {
      gameKey: "IndiscriminateBarrage",
      icon: "UI_SkillIcon_IndiscriminateBarrage",
      name: "Chaotic Beatdown",
      type: 'Skill',
      description: "When Juza's HP falls to 30% or lower, performs an additional Response with 'Crazy Stance' and gains [Crazy Stance]. [Crazy Stance]: Loses all SPD, but gains {110,120,130,140,150,160,170,180,190,200}% Crush Boost, {38,41,44,47,50,53,56,59,62,65}% DMG Taken Down, and 2m increased Range. While [Crazy Stance] is active, 'Iron Club Punishment' is replaced by 'Swift Punishment · Meteor Shower'. While [Crazy Stance] is active, performs additional Responses against random nearby enemies using 'Swift Punishment · Meteor Shower'. [#sepline]Swift Punishment · Meteor Shower This skill is considered a Basic Skill. Deals Crush DMG equal to {150,165,180,195,210,225,240,255,270,285}% of Melee ATK to enemies within a 3.5m radius of the target, and Crush DMG equal to {15,16.5,18,19.5,21,22.5,24,25.5,27,28.5}% of Melee ATK to allies within the area, slightly pushing them back. Deals additional Crush DMG equal to {220,240,260,280,300,320,340,360,380,400}% of current [Fighting Spirit] stacks.",
    },
  },
  rarityStages: {
    'EX': {
      strength: 12,
      technic: 6,
      intelligence: 6,
      vitality: 17,
      agility: 7,
      maxHp: 1044,
      meleeAtk: 161,
      rangedAtk: 80,
      magicAtk: 79,
      evade: 89,
      apRecovery: 101,
      startingAp: 116
    },
    'EX 1': {
      strength: 12,
      technic: 6,
      intelligence: 6,
      vitality: 18,
      agility: 7,
      maxHp: 1105,
      meleeAtk: 161,
      rangedAtk: 80,
      magicAtk: 79,
      evade: 89,
      apRecovery: 101,
      startingAp: 116
    },
    'EX 2': {
      strength: 12,
      technic: 6,
      intelligence: 6,
      vitality: 19,
      agility: 7,
      maxHp: 1167,
      meleeAtk: 161,
      rangedAtk: 80,
      magicAtk: 79,
      evade: 89,
      apRecovery: 101,
      startingAp: 116
    },
    'EX 3': {
      strength: 12,
      technic: 6,
      intelligence: 6,
      vitality: 20,
      agility: 7,
      maxHp: 1228,
      meleeAtk: 161,
      rangedAtk: 80,
      magicAtk: 79,
      evade: 89,
      apRecovery: 101,
      startingAp: 116
    },
    'EX 4': {
      strength: 14,
      technic: 6,
      intelligence: 6,
      vitality: 20,
      agility: 7,
      maxHp: 1228,
      meleeAtk: 188,
      rangedAtk: 80,
      magicAtk: 79,
      evade: 89,
      apRecovery: 101,
      startingAp: 116
    },
    'EX 5': {
      strength: 14,
      technic: 6,
      intelligence: 6,
      vitality: 20,
      agility: 8,
      maxHp: 1228,
      meleeAtk: 188,
      rangedAtk: 80,
      magicAtk: 79,
      evade: 102,
      apRecovery: 104,
      startingAp: 119
    },
    'EX 6': {
      strength: 14,
      technic: 6,
      intelligence: 6,
      vitality: 22,
      agility: 8,
      maxHp: 1351,
      meleeAtk: 188,
      rangedAtk: 80,
      magicAtk: 79,
      evade: 102,
      apRecovery: 104,
      startingAp: 119
    },
  },
  story: 'Juza hails from Tokyo in the East Asia Federation. From an early age, she exhibited extraordinary physical growth and superhuman strength. She was already pushing six feet tall in elementary school, and after realizing early on just how different she was from everyone else, she began keeping her distance from others and spent much of her time watching television. What ultimately inspired Juza to start calling herself a villain was a biker film. Its protagonist was an outlaw on the run, yet still used his strength to help those who had been abandoned by the law. Even when society turned against him, he refused to compromise his principles. Deeply inspired by him, Juza resolved to become what she called a "villain with class": someone who would wield her strength according to a code of her own. Donning a tokko-fuku, Juza began operating on the outskirts of Tokyo, beating down thugs and criminals who preyed on the locals while lending a hand to anyone in need. Some condemned her actions as illegal vigilantism, but Juza saw things differently. If protecting people the law had abandoned meant stepping outside the law herself, then that was simply her way of being a villain. As word of her exploits spread, the people of the outskirts began calling her Socho, and the streets under her watch gradually became safer. That all changed when the Rift Crisis struck. Juza fought the Abominations while her crew and the local residents evacuated, only to be exposed to Oblivia Madness in the process. She came dangerously close to losing control, but refused to let herself become an Abomination that destroyed without conviction or purpose. She managed to suppress the madness through sheer force of will. But while she fought to retain control of herself, the home she and her crew had protected was devastated. Juza was left carrying the guilt of having failed to save it. Later, she heard rumors of a Human God in the western Federation who could cure Oblivia. Hoping both to rid herself of the madness and learn to control her tremendous strength, Juza left Tokyo behind and headed west.',

  heroId: 68,

};

// Sanitize and validate the character data
export const juzaData = sanitizeCharacterData(rawJuzaData);
export const juzaSEO = {
  title: `Juza - Horizon Walker Character Guide`,
  description: `Complete guide for Juza, EX rarity 5 cost hero in Horizon Walker. Skills, traits, profile and team tips.`,
};

const rawHighlighting = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^\[\]]{1,150})\]/g,
  buffsDebuffs: /\b(?:shield|critical\s+hit|unavoidable|unblockable|counterattack|taunt|weakness\s+attack|buff|debuff|heal|recover|purification|extra\s+action)\b/gi,
  percentages: /\b(\d{1,3}%)\b/gi,
  keywords: /\b(?:reduces?|deals?|inflicts?|additional|equal\s+to|applies?|gains?|grants?|lasting|successful|activates?|increases?|decreases?|deployed|battle|allies|recovers?|defeated|duration|turn|start|end|rounds?|for\s+\d{1,3}\s+rounds?)\b/gi,
  attributes: /\b(?:AP|Magic\s+ATK|Immaterial|Physical|Slash|Pierce|Crush|Heat|Cold|Electric|Poison|Evasion|ATK|AP\s+recovery|all\s+ATK|DEF|max\s+HP|HP|Speed|Accuracy|Crit\s+Rate|Crit\s+DMG)\b/gi,
  searchableTerms: [
    "Juza",
    "EX",
    5,
    ...rawJuzaData.tags,
  ],
  skillNames: Object.keys(rawJuzaData.skills || {})
    .map(key => rawJuzaData.skills[key]?.name)
    .filter(Boolean),
  traitNames: Object.keys(rawJuzaData.uniqueTraits || {})
    .map(key => rawJuzaData.uniqueTraits[key]?.name)
    .filter(Boolean),
};

export const juzaHighlighting = sanitizeHighlightPatterns(rawHighlighting);

export { rawJuzaData };
