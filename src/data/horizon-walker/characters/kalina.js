// Kalina Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawKalinaData = {
  // Basic Character Information
  name: 'Kalina',
  image: 'Kalina', // Character image filename without extension
  rarity: 'SS', // EX, SS, S, A, B
  cost: 4, // Deployment cost
  tags: [
    'Assassin',
    'Melee Damage',
    'High Mobility',
    'Evasion Tank',
    'Slash Damage',
    'Counterattack',
    'Lifesteal',
    'Movement Scaling',
    'Self-Sustain',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '10',
    technic: '8',
    intelligence: '11',
    vitality: '12',
    agility: '15',

    // Key Stats
    meleeAtk: '128',
    rangedAtk: '102',
    magicAtk: '140',
    maxHp: '768',
    spd: '143',
    startingAp: '119',
    apRecovery: '122',
    accuracy: '102',
    evade: '201',
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
    'A veteran Swamp Elf soldier and master of evasive combat, specializing in high-speed assassination tactics and guerrilla warfare.',

  // Weapon Information
  weapon: {
    name: "Tyrant Edge",
    flavor: "A modernized version of a weapon used by a legendary figure from the Bluemarsh Swamp Patrol. It features customizations for each distinguished swamp patrol officer. The handle, made from a special resonant metal, effectively transmits air vibrations to the wearer, allowing them to anticipate attacks in advance. The magically forged blade accumulates kinetic energy over a short period to enhance damage.",
    type: "Twin Swords",
    rarity: 'EX',
    image: "Weapon_FullIMG_TyrantEdge",
    imageOnR2: true,
    maxLevel: 60,
    stats: {
      "Melee ATK (weapon)": "91",
      "Crit Rate (%)": "+35%",
    },
    uniqueSkills: {
      unique: {
        name: "The Edge Runner",
        type: 'Unique',
        description: "Increases Slash Boost by {12,15,18,21,24}% of the user's Base Evasion during battle. This effect can stack up to a maximum of {30,37.5,45,52.5,60}%. When targeted by an enemy attack, the user turns to face the attacker. If an attack hits, restores HP equal to {4,6,8,10,12}% of the damage dealt.",
      },
      signature: {
        name: "Kalina Signature: Persistence",
        type: 'Signature',
        description: "At the start of battle, gains 30 AP and increases Melee ATK by 20%. Hunter on the Vine now increases Melee ATK and Crit DMG based on movement distance and AP spent. The increase in Crit DMG matches the percentage of Melee ATK gained through this skill. (1 AP is treated as 0.1m of linear distance.) Once per round, using Blades of Tyranny restores 55 AP and resets its cooldown.",
        note: "This signature skill only activates when Kalina equips this weapon.",
      },
    },
    levelStats: {
      "Melee ATK (weapon)": [14.3, 91.0],
      "Crit Rate (%)": [5.5, 35.0],
    },
    exLevels: {
      effects: [
        { name: "Increases Slash Boost", valuesByLevel: "12% / 15% / 18% / 21% / 24%" },
        { name: "This effect can stack up to a maximum", valuesByLevel: "30% / 37.5% / 45% / 52.5% / 60%" },
        { name: "If an attack hits, restores HP equal", valuesByLevel: "4% / 6% / 8% / 10% / 12%" },
      ],
    },
  },

  // Character Profile
  profile: {
    age: '27X',
    racial: 'Swamp Elf',
    homeland: 'Azuremarsh Kingdom, Miora Forest',
    height: '191cm',
    birthday: 'March 7th',
    bwhRatio: '97(N)-55-110',
  },

  // Character Story
  story:
    'Kalina, a soldier of Webwoods renowned for her accomplishments during the Slave Wars, was among the first group to follow Maximilia in protecting the refugees of Noctis Nebula. With her exceptional scouting abilities, Kalina assisted Maximilia in keeping the refugees safe, and played a significant role in successfully leading most of them to safety on Earth. After parting ways with Maximilia, Kalina heard of the Bureau of Rift Management fighting against the abominations, and chose to join forces with them once more to continue the fight.',

  // Unique Traits
  uniqueTraits: {
    obedience: {
      name: 'Obedience',
      description:
        'Activates the Level 1 passive skill [Obedience]. [Obedience]: If deployed with the Chosen Human, increases own Melee ATK by 10%. Increases the Melee ATK of all Swamp Rangers by 5%.',
    },
    doubleDown: {
      name: 'Double Down',
      description:
        'Activates the Level 3 Active Skill [Full Extent]. [Full Extent]: AP cost 60, pushes self to prepare for more intense actions. For 4R, AP Recovery increases by 36 and Evasion increases by 24%.',
    },
    swampElf: {
      name: 'Swamp Elf',
      description: 'Starting AP 10, SPD 10%',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the Chosen Human. Unlocks at Gift Affection Level 5: becomes active after reaching 2,000 affection points through gift-giving.',
    },
  },

  // Skills and Passive
  skills: {
    harpeArt: {
      gameKey: 'HarpeSlash',
      icon: 'UI_SkillIcon_DualSword',
      name: 'Harpe Art',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        'The swamp elf extends their long arms and swiftly swings the harpe. Deals Slash DMG equal to 114% of melee ATK.',
    },
    hunterOnVine: {
      gameKey: 'RangerOnTheVine',
      icon: 'UI_SkillIcon_RangerOnTheVine',
      name: 'Hunter on the Vine',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Increases Mobility by 10. After attacking, Evasion increases by 570% until the end of the turn. Additionally, during a basic attack, Melee ATK increases proportionally to the straight distance moved. Up to 10m movement grants a maximum of 114% increase.',
    },
    assault: {
      gameKey: 'DescentRaid',
      icon: 'UI_SkillIcon_DescentRaid',
      name: 'Assault',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 2,
      damage: {
        type: 'Melee ATK',
        value: '190%',
      },
      description:
        'Leaps high and dives quickly to ambush enemies. Jumps to the designated location and deals Slash DMG equal to 190% of melee ATK to all enemies within a 1.5m circular radius. Ignores counterattacks from the target.',
    },
    bladesOfTyranny: {
      gameKey: 'BladeOfTyranny',
      icon: 'UI_SkillIcon_BladeOfTyranny',
      name: 'Blades of Tyranny',
      level: '10/10',
      type: 'Skill',
      apCost: 90,
      cooldown: 2,
      damage: {
        type: 'Melee ATK',
        value: '380%',
      },
      description:
        'The harpe slashes around with lightning-like speed. Deals Slash DMG equal to 380% of melee ATK to all enemies within a 2.5m circular radius.',
    },
    survivalExpert: {
      gameKey: 'SurvivalExpert',
      icon: 'UI_SkillIcon_SurvivalExpert',
      name: 'Survival Expert',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description: 'Once per battle, survives with 1 HP and immediately gains 150 AP.',
    },
  },
  rarityStages: {
    'EX': {
      strength: 10,
      technic: 8,
      intelligence: 7,
      vitality: 10,
      agility: 14,
      maxHp: 640,
      meleeAtk: 128,
      rangedAtk: 102,
      magicAtk: 89,
      evade: 188,
      apRecovery: 119,
      startingAp: 116
    },
    'EX 1': {
      strength: 10,
      technic: 8,
      intelligence: 8,
      vitality: 10,
      agility: 14,
      maxHp: 640,
      meleeAtk: 128,
      rangedAtk: 102,
      magicAtk: 102,
      evade: 188,
      apRecovery: 119,
      startingAp: 116
    },
    'EX 2': {
      strength: 10,
      technic: 8,
      intelligence: 9,
      vitality: 10,
      agility: 14,
      maxHp: 640,
      meleeAtk: 128,
      rangedAtk: 102,
      magicAtk: 115,
      evade: 188,
      apRecovery: 119,
      startingAp: 116
    },
    'EX 3': {
      strength: 10,
      technic: 8,
      intelligence: 9,
      vitality: 10,
      agility: 15,
      maxHp: 640,
      meleeAtk: 128,
      rangedAtk: 102,
      magicAtk: 115,
      evade: 201,
      apRecovery: 122,
      startingAp: 119
    },
    'EX 4': {
      strength: 10,
      technic: 8,
      intelligence: 9,
      vitality: 11,
      agility: 15,
      maxHp: 704,
      meleeAtk: 128,
      rangedAtk: 102,
      magicAtk: 115,
      evade: 201,
      apRecovery: 122,
      startingAp: 119
    },
    'EX 5': {
      strength: 10,
      technic: 8,
      intelligence: 10,
      vitality: 12,
      agility: 15,
      maxHp: 768,
      meleeAtk: 128,
      rangedAtk: 102,
      magicAtk: 128,
      evade: 201,
      apRecovery: 122,
      startingAp: 119
    },
    'EX 6': {
      strength: 10,
      technic: 8,
      intelligence: 11,
      vitality: 12,
      agility: 15,
      maxHp: 768,
      meleeAtk: 128,
      rangedAtk: 102,
      magicAtk: 140,
      evade: 201,
      apRecovery: 122,
      startingAp: 119
    },
  },
  heroId: 4,

};

// Validate and sanitize the character data
const validation = validateCharacterData(rawKalinaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const kalinaData = sanitizeCharacterData(rawKalinaData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})\]/g,
  buffsDebuffs:
    /\b(?:Obedience|Double\s+Down|Full\s+Extent|Hunter\s+on\s+the\s+Vine|Survival\s+Expert|Edge\s+Runner|Persistence|Swamp\s+Elf|Slash\s+Boost|lifesteal|counterattack|evasion)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:survives?|ignores?\s+counterattacks?|Chosen\s+Human|Swamp\s+Rangers|Bureau\s+of\s+Rift\s+Management|Webwoods|Maximilia|lifesteal|stacking)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Slash|Physical|Pierce|Crush|Heat|Cold|Electric|Immaterial|Poison|Evasion|All\s+ATK|DEF|SPD|Mobility|CRIT\s+DMG|HP|Accuracy)\b/gi,
};

// Export sanitized highlighting patterns
export const kalinaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const kalinaSEO = {
  title: 'Kalina - Horizon Walker Character Guide',
  description:
    'Complete guide for Kalina, an SS rarity Assassin character in Horizon Walker. High-speed Swamp Elf warrior with exceptional evasion and mobility tactics.',
  keywords: [
    'Kalina',
    'Horizon Walker',
    'SS rarity',
    'assassin',
    'swamp elf',
    'melee damage',
    'high mobility',
    'evasion tank',
    'slash damage',
    'guide',
    'stats',
    'build',
  ],
};
