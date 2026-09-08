// Palekar Character Data - Horizon Walker
// Based on the existing character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawPalekarData = {
  // Basic Character Information
  name: 'Palekar',
  image: 'Palekar', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 6, // Deployment cost
  tags: [
    'Mage',
    'Support',
    'Swamp Elf',
    'Magic User',
    'Immaterial Damage',
    'Slash Damage',
    'Support Attack',
    'Team Enabler',
    'Debuffer',
    'High Intelligence',
    'All DEF Reduction',
    'Cooldown Mechanics',
    'Twin Swords',
    'Shadow Chronicler',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '6',
    technic: '7',
    intelligence: '21',
    vitality: '10',
    agility: '11',

    // Key Stats
    meleeAtk: '76',
    rangedAtk: '89',
    magicAtk: '279',
    maxHp: '640',
    spd: '90',
    startingAp: '122',
    apRecovery: '107',
    accuracy: '102',
    evade: '140',
    critRate: '10',
    critDmg: '150',

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
    'A legendary Shadow Chronicler of the Swamp Elves who stepped out of the shadows to guide heroes. Master of chakram warfare and support attacks.',

  // Weapon Information
  weapon: {
    name: "Thread of Ages",
    flavor: "A chakram bound from shards of shattered Thunderstone and fibers of the Father Tree, woven together into a single knot of history. Within it dwells an unfathomable divine power. It is said that from ages long past to the present day, the entire history of the Swamp Elves is recorded within this weapon.",
    type: "Twin Swords",
    rarity: 'EX',
    image: "Weapon_FullIMG_DualSword_ForPalekar",
    imageOnR2: true,
    maxLevel: 60,
    stats: {
      "Melee ATK (weapon)": "91",
      "Magic ATK (weapon)": "91",
      "Evade (%)": "+70%",
    },
    uniqueSkills: {
      unique: {
        name: "Legacy of War",
        type: 'Unique',
        description: "Increases the user's Magic ATK by {20,25,30,35,40}% during battle. When attacking an enemy, increases Immaterial Boost by {40,50,60,70,80}% until the end of the turn.",
      },
      signature: {
        name: "Palekar: She Who Cleaves Through Crisis",
        type: 'Signature',
        description: "During battle, increases Magic ATK by 20% and gains 30 AP. During battle, reduces the AP cost of [Verse of Ordeal] by 15. Targets affected by [Unstable] have All ATK reduced by 30%, and their Slash, Poison, and Immaterial DEF are additionally reduced by 1 for every 1 base Evasion the caster has, up to a maximum reduction of 200.",
        note: "This signature skill only activates when Palekar equips this weapon.",
      },
    },
    levelStats: {
      "Melee ATK (weapon)": [14.3, 91.0],
      "Magic ATK (weapon)": [14.3, 91.0],
      "Evade (%)": [11.0, 70.0],
    },
    exLevels: {
      effects: [
        { name: "Increases the user's Magic ATK", valuesByLevel: "20% / 25% / 30% / 35% / 40%" },
        { name: "When attacking an enemy, increases Immaterial Boost", valuesByLevel: "40% / 50% / 60% / 70% / 80%" },
      ],
    },
  },

  // Character Profile
  profile: {
    age: '500+',
    racial: 'Swamp Elf',
    homeland: 'Azuremarsh Kingdom, Miora Forest',
    height: '174cm',
    birthday: 'January 22nd',
    bwhRatio: '97(M)-52-105',
  },

  // Character Story
  story:
    "Palekar hails from the secretive caste of Shadow Chronicler—sworn historians of the Swamp Elf legacy, bound to record the truth from behind the veil. Of all the tales she preserved, her heart was always drawn most to the stories of heroes and their triumphs. But true heroes are rare. And so, rather than waiting for legends to be born, Palekar chose to shape them herself. From that moment on, she stepped into the role of a mentor—guiding countless champions from the shadows, unseen but ever present. Though her name never graced the pages of history, her wisdom shaped the very figures that filled them. She became a teacher of heroes, forging legends while remaining one step removed from the spotlight. However, an undisclosed incident would one day lead her to abandon both her sacred duty and her pen. She vanished from the world stage, choosing seclusion over service. Even after the fall of Noctis Nebula and her arrival on Jigrad, Palekar kept to herself. But a plea from a younger kin—and a curious pull toward the so-called Human God—would stir something long dormant. And so, at last, the sage stepped out of the shadows… and into the light.",

  // Unique Traits
  uniqueTraits: {
    theChronicler: {
      name: 'The Chronicler',
      description: 'Formation Cost +2',
    },
    pathforger: {
      name: 'Pathforger',
      description:
        'Activates the Level 1 passive skill [Pathforger]. [Pathforger]: Allies with the [Swamp Elf] trait can trigger the effects of Relentless Sworddance up to 2 times per round.',
    },
    swampElf: {
      name: 'Swamp Elf',
      description: 'Starting AP 10, SPD 10%',
    },
  },

  // Skills and Passive
  skills: {
    danceOfPrimalGrace: {
      gameKey: 'CircleDance',
      icon: 'UI_SkillIcon_CircleDance',
      name: 'Dance of Primal Grace',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        'Elegantly slashes the target like a dance, dealing Slash DMG equal to 114% of Melee ATK.',
    },
    bladeDance: {
      gameKey: 'DanceOfBlades',
      icon: 'UI_SkillIcon_DanceOfBlades',
      name: 'Blade Dance',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "Increases the user's Combat Skill DMG by 16.25% of their Base Evasion stat. This effect can increase Combat Skill DMG by up to 32.5%.",
    },
    trajectoryOfSeverance: {
      gameKey: 'TrailOfFatality',
      icon: 'UI_SkillIcon_TrailOfFatality',
      name: 'Trajectory of Severance',
      level: '10/10',
      type: 'Skill',
      apCost: 50,
      cooldown: 1,
      damage: {
        type: 'Magic ATK',
        value: '285%',
      },
      description:
        "Throws two chakrams, dealing Immaterial DMG equal to 285% of Magic ATK to all enemies in a rectangular area. When this skill is used, ACC is temporarily increased by 300%, and Magic ATK increases by 250% of the user's Base Evasion stat. Additionally, for every point of Intelligence exceeding 17, Immaterial Boost and Crit DMG increase by 8%. This skill can only be used when at least one target is afflicted with [Unstable].",
    },
    verseOfOrdeal: {
      gameKey: 'QuotesAboutTrials',
      icon: 'UI_SkillIcon_QuotesAboutTrials',
      name: 'Verse of Ordeal',
      level: '10/10',
      type: 'Skill',
      apCost: 75,
      cooldown: 2,
      damage: {
        type: 'Magic ATK',
        value: '190%',
      },
      description:
        "Infuses magical runes into all enemies within range, dealing Immaterial DMG equal to 190% of Magic ATK and applying [Unstable] and [Slow] for 2 rounds. [Unstable]: Reduces All DEF by 1140. Additionally, for every 1 point of Agility exceeding 9, increases the target's DMG Taken by 7.5%. [Slow]: Reduces SPD by 40%. At the start of each round, if no targets are afflicted with [Unstable], this skill's cooldown is reduced by 1 round.",
    },
    relentlessSworddance: {
      gameKey: 'UnendingSwordDance',
      icon: 'UI_SkillIcon_UnendingSwordDance',
      name: 'Relentless Sworddance',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'When an ally attacks an enemy afflicted with [Unstable] using a skill that consumes 60 or more AP, this unit performs a Support ATK with Trajectory of Severance. The ally who triggered the Support ATK gains 37 AP at the end of their turn. This effect activates once per character per round.',
    },
  },
  rarityStages: {
    'EX': {
      strength: 6,
      technic: 7,
      intelligence: 17,
      vitality: 8,
      agility: 9,
      maxHp: 512,
      meleeAtk: 76,
      rangedAtk: 89,
      magicAtk: 226,
      evade: 115,
      apRecovery: 102,
      startingAp: 117
    },
    'EX 1': {
      strength: 6,
      technic: 7,
      intelligence: 18,
      vitality: 8,
      agility: 9,
      maxHp: 512,
      meleeAtk: 76,
      rangedAtk: 89,
      magicAtk: 239,
      evade: 115,
      apRecovery: 102,
      startingAp: 117
    },
    'EX 2': {
      strength: 6,
      technic: 7,
      intelligence: 18,
      vitality: 9,
      agility: 9,
      maxHp: 576,
      meleeAtk: 76,
      rangedAtk: 89,
      magicAtk: 239,
      evade: 115,
      apRecovery: 102,
      startingAp: 117
    },
    'EX 3': {
      strength: 6,
      technic: 7,
      intelligence: 19,
      vitality: 9,
      agility: 9,
      maxHp: 576,
      meleeAtk: 76,
      rangedAtk: 89,
      magicAtk: 252,
      evade: 115,
      apRecovery: 102,
      startingAp: 117
    },
    'EX 4': {
      strength: 6,
      technic: 7,
      intelligence: 19,
      vitality: 10,
      agility: 9,
      maxHp: 640,
      meleeAtk: 76,
      rangedAtk: 89,
      magicAtk: 252,
      evade: 115,
      apRecovery: 102,
      startingAp: 117
    },
    'EX 5': {
      strength: 6,
      technic: 7,
      intelligence: 21,
      vitality: 10,
      agility: 9,
      maxHp: 640,
      meleeAtk: 76,
      rangedAtk: 89,
      magicAtk: 279,
      evade: 115,
      apRecovery: 102,
      startingAp: 117
    },
    'EX 6': {
      strength: 6,
      technic: 7,
      intelligence: 21,
      vitality: 10,
      agility: 11,
      maxHp: 640,
      meleeAtk: 76,
      rangedAtk: 89,
      magicAtk: 279,
      evade: 140,
      apRecovery: 107,
      startingAp: 122
    },
  },
  heroId: 60,

};

// Validate and sanitize the character data
const validation = validateCharacterData(rawPalekarData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const palekarData = sanitizeCharacterData(rawPalekarData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})\]/g,
  buffsDebuffs:
    /\b(?:The\s+Chronicler|Pathforger|Blade\s+Dance|Relentless\s+Sworddance|Legacy\s+of\s+War|She\s+Who\s+Cleaves\s+Through\s+Crisis|Swamp\s+Elf|Unstable|Slow|Support\s+ATK|Immaterial\s+Boost)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Shadow\s+Chronicler|Jigrad|Noctis\s+Nebula|Human\s+God|chakrams|rectangular\s+area|stacking|Support\s+ATK|cooldown\s+reduced)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Magic\s+ATK|Slash|Pierce|Crush|Heat|Cold|Electric|Immaterial|Poison|Evasion|All\s+ATK|All\s+DEF|DEF|SPD|Mobility|CRIT\s+DMG|HP|Accuracy|ACC|Intelligence|Agility|Base\s+Evasion)\b/gi,
};

// Export sanitized highlighting patterns
export const palekarHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const palekarSEO = {
  title: 'Palekar - Horizon Walker Character Guide',
  description:
    'Complete guide for Palekar, an EX rarity Support Mage character in Horizon Walker. Ancient Swamp Elf Shadow Chronicler with powerful support attacks and debuff capabilities.',
  keywords: [
    'Palekar',
    'Horizon Walker',
    'EX rarity',
    'support',
    'mage',
    'swamp elf',
    'immaterial damage',
    'support attack',
    'debuffer',
    'guide',
    'stats',
    'build',
    'Shadow Chronicler',
  ],
};
