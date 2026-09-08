// Cora Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawCoraData = {
  // Basic Character Information
  name: 'Cora',
  image: 'Cora', // Character image filename without extension
  rarity: 'S', // EX, SS, S, A, B
  cost: 8, // Deployment cost
  tags: [
    'Mage',
    'Summoner',
    'Arcane Engineer',
    'Magic User',
    'Heat Damage',
    'Area Control',
    'Zone Creation',
    'Teleportation',
    'Four Brothers of Mages',
    'The Dwarf',
    'Volcanic Magic',
    'Lava Zones',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '5',
    technic: '7',
    intelligence: '30',
    vitality: '13',
    agility: '13',

    // Key Stats
    meleeAtk: '76',
    rangedAtk: '102',
    magicAtk: '416',
    maxHp: '832',
    spd: '83',
    startingAp: '117',
    apRecovery: '112',
    accuracy: '102',
    evade: '166',
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
    immaterialDef: '40',
    poisonDef: '0',
    blockRate: '0',
  },

  // Character Description
  description:
    'The youngest of the Four Brothers of Mages, known as "the Dwarf," Cora is a world-renowned summoner and arcane engineer who constructs magical edifices.',

  // Character Profile
  profile: {
    age: 'Unknown',
    racial: 'Human (Noctis Nebula)',
    homeland: 'The Empire, Luandra',
    height: '163cm',
    birthday: 'October 22nd',
    bwhRatio: '73(D)-46-87',
  },

  // Character Story
  story:
    "The youngest of the famous Four Brothers of Mages, known as the Dwarf, Cora is one of the world's finest summoners and arcane engineers. She has contributed greatly to the world by constructing countless magical edifices, and later, under the First Human God, her service became a significant asset to the world.",

  // Unique Traits
  uniqueTraits: {
    prisoner: {
      name: 'Prisoner',
      description: 'Starting Ap 20',
    },
    primalCore: {
      name: 'Primal Core',
      description:
        'Activates the Level 3 passive skill [Heat of the Earth]. [Heat of the Earth]: If HP is 100% during battle, reduces the AP cost of the Summon Lava skill by 60%.',
    },
    marlon: {
      name: 'Marlon',
      description: 'Strength 1, Technic 1, Intelligence 1',
    },
    interested: {
      name: 'Interested',
      description: 'Unlocks at Gift Affection Level 5: becomes active after reaching 2,000 affection points through gift-giving. Special trait with no listed characteristics.',
    },
  },

  // Skills and Passive
  skills: {
    summonEnergy: {
      gameKey: 'SummonEnergy',
      icon: 'UI_SkillIcon_SummonEnergy',
      name: 'Summon Energy',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '152%',
      },
      description:
        'Releases pure energy in the form of a heat ray to attack. Deals Heat DMG equal to 152% of magic ATK to enemies within a 1m by 7m rectangular area. This skill cannot be used for a Weakness Attack.',
    },
    spatialShift: {
      gameKey: 'SpaceWarp',
      icon: 'UI_SkillIcon_SpaceWarp',
      name: 'Spatial Shift',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 1,
      description:
        'Crosses through space-time to reach the desired location. Teleports to a specified location within a radius of 18m.',
    },
    summonLava: {
      gameKey: 'SummonLava',
      icon: 'UI_SkillIcon_SummonLava',
      name: 'Summon Lava',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 1,
      damage: {
        type: 'Magic ATK',
        value: '76%',
      },
      description:
        'Deals Heat DMG equal to 76% of magic ATK to enemies within a 3m circular range and creates a [Lava] zone for 5 rounds. Up to 3 [Lava] zones can be summoned; if more than 3 are summoned, the oldest zone disappears. [Lava]: Inflicts the [Heatflow] effect on enemies within the zone. [Heatflow]: Reduces Heat DEF by 380.',
    },
    forbiddenLand: {
      gameKey: 'ProhibitedPlace',
      icon: 'UI_SkillIcon_ProhibitedPlace',
      name: 'Forbidden Land',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "If an enemy on a [Lava] zone is hit, at the end of the turn all [Lava] zones on the battlefield will explode. This explosion deals Additional Heat DMG equal to 76% of the caster's magic ATK to all enemies within the zone. This Additional Heat DMG takes double the effect of the Heat enhancement stat.",
    },
    volcanicEruption: {
      gameKey: 'VolcanicEruption',
      icon: 'UI_SkillIcon_VolcanicEruption',
      name: 'Volcanic Eruption',
      level: '10/10',
      type: 'Skill',
      apCost: 150,
      cooldown: 2,
      damage: {
        type: 'Magic ATK',
        value: '57%',
      },
      description:
        "Explodes the lava, setting the entire battlefield ablaze and unleashing the force of the subterranean depths. Deals Heat DMG equal to 57% of magic ATK to all enemies. This attack increases the damage of the 'Forbidden Land' skill by 8 times. This skill cannot trigger Weakness Attack.",
    },
  },

  // Weapon Information
  weapon: {
    name: "Orbina",
    flavor: "This staff is said to choose the mage most suited to wield it. A legacy of the colossal architects of the Noctis Nebula, it was once used to weave designs drawn from the power of earth and stars. Orbina served both as a tool for calculation and as a medium that resonated with the primal cores of the earth and heavens, shaping space and time itself. Some claim it was the very instrument that raised the Empire's greatest wonders, while others dismiss it as no more than a calculating assistant. What remains certain is that Orbina's power is not freely given. Only those few gifted enough to command the flow of earth and spacetime may unlock its strength - to all others, it is nothing more than a staff of unfamiliar weight and power.",
    type: "Staff",
    rarity: 'EX',
    image: "Weapon_FullIMG_Staff_ForCora",
    imageOnR2: true,
    maxLevel: 60,
    stats: {
      "Magic ATK (weapon)": "91",
      "Magic ATK (%)": "+35%",
    },
    uniqueSkills: {
      unique: {
        name: "Blessing of Earth",
        type: 'Unique',
        description: "During combat, Magic ATK increases by {20,25,30,35,40}%. When using a skill other than Standby on your turn, gain the [Blessing of the Architect] effect for 2R. - [Blessing of the Architect]: Increases Heat Boost by {25,30,35,40,45}%. Stacks up to 3 times.",
      },
      signature: {
        name: "Cora Signature: Blessing of the Architect",
        type: 'Signature',
        description: "At the start of combat, for 3 uses only, the AP cost of \"Summon Lava\" becomes 0 and its cooldown is reduced by 1R. At the start of combat, gain a shield equal to 100% of base Magic ATK for 1R. The shield is removed at the end of the turn if damaged. During combat, Magic ATK and Heat Boost increase by 30%. The attack radius of \"Summon Lava\" and the radius of the [Lava] zone each increase by 1m. During combat, the AP cost of \"Volcanic Eruption\" decreases by 30, and the damage of \"Forbidden Land\" increases by 100%. If HP is at 100%, the AP cost of \"Summon Energy\" decreases by 40%.",
      },
    },
    levelStats: {
      "Magic ATK (weapon)": [14.3, 91.0],
      "Magic ATK (%)": [5.5, 35.0],
    },
    exLevels: {
      effects: [
        { name: "During combat, Magic ATK increases", valuesByLevel: "20% / 25% / 30% / 35% / 40%" },
        { name: "- [Blessing of the Architect]: Increases Heat Boost", valuesByLevel: "25% / 30% / 35% / 40% / 45%" },
      ],
    },
  },
  rarityStages: {
    'EX': {
      strength: 5,
      technic: 7,
      intelligence: 23,
      vitality: 11,
      agility: 11,
      maxHp: 704,
      meleeAtk: 76,
      rangedAtk: 102,
      magicAtk: 322,
      evade: 140,
      apRecovery: 107,
      startingAp: 112
    },
    'EX 1': {
      strength: 5,
      technic: 7,
      intelligence: 25,
      vitality: 11,
      agility: 11,
      maxHp: 704,
      meleeAtk: 76,
      rangedAtk: 102,
      magicAtk: 349,
      evade: 140,
      apRecovery: 107,
      startingAp: 112
    },
    'EX 2': {
      strength: 5,
      technic: 7,
      intelligence: 26,
      vitality: 11,
      agility: 11,
      maxHp: 704,
      meleeAtk: 76,
      rangedAtk: 102,
      magicAtk: 362,
      evade: 140,
      apRecovery: 107,
      startingAp: 112
    },
    'EX 3': {
      strength: 5,
      technic: 7,
      intelligence: 26,
      vitality: 11,
      agility: 13,
      maxHp: 704,
      meleeAtk: 76,
      rangedAtk: 102,
      magicAtk: 362,
      evade: 166,
      apRecovery: 112,
      startingAp: 117
    },
    'EX 4': {
      strength: 5,
      technic: 7,
      intelligence: 26,
      vitality: 13,
      agility: 13,
      maxHp: 832,
      meleeAtk: 76,
      rangedAtk: 102,
      magicAtk: 362,
      evade: 166,
      apRecovery: 112,
      startingAp: 117
    },
    'EX 5': {
      strength: 5,
      technic: 7,
      intelligence: 28,
      vitality: 13,
      agility: 13,
      maxHp: 832,
      meleeAtk: 76,
      rangedAtk: 102,
      magicAtk: 389,
      evade: 166,
      apRecovery: 112,
      startingAp: 117
    },
    'EX 6': {
      strength: 5,
      technic: 7,
      intelligence: 30,
      vitality: 13,
      agility: 13,
      maxHp: 832,
      meleeAtk: 76,
      rangedAtk: 102,
      magicAtk: 416,
      evade: 166,
      apRecovery: 112,
      startingAp: 117
    },
  },
  heroId: 45,

};

// Validate and sanitize the character data
const validation = validateCharacterData(rawCoraData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const coraData = sanitizeCharacterData(rawCoraData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Prisoner|Primal\s+Core|Heat\s+of\s+the\s+Earth|Lava|Heatflow|Forbidden\s+Land|Volcanic\s+Eruption|Blessing\s+of\s+the\s+Architect|Blessing\s+of\s+Earth|Harmony\s+of\s+the\s+Architect|summoner|arcane\s+engineer|magical\s+edifices|battlefield\s+ablaze|subterranean\s+depths|shield)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Four\s+Brothers\s+of\s+Mages|The\s+Dwarf|Noctis\s+Nebula|The\s+Empire|Luandra|First\s+Human\s+God|Staff\s+Orbina|summoner|arcane\s+engineer|magical\s+edifices|heat\s+ray|space-time|teleports|circular\s+range|explode|explosion|battlefield|subterranean\s+depths|volcanic|lava|cooldown|attack\s+radius)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|Heat\s+Boost|Heat|Cold|Electric|Immaterial|Poison|SPD|CRIT\s+rate|CRIT\s+DMG|Accuracy|Evade|HP|Max\s+HP|AP\s+Recovery|Intelligence|Strength|Technic|Vitality|Agility|Heat\s+DEF|Starting\s+Ap|Additional\s+Heat\s+DMG|Weapon\s+Magic\s+ATK)\b/gi,
};

// Export sanitized highlighting patterns
export const coraHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const coraSEO = {
  title: 'Cora - Horizon Walker Character Guide',
  description:
    'Complete guide for Cora, an S rarity Mage character in Horizon Walker. Youngest of the Four Brothers of Mages with volcanic summoning, lava zone control abilities, and Staff Orbina weapon.',
  keywords: [
    'Cora',
    'Horizon Walker',
    'S rarity',
    'mage',
    'summoner',
    'arcane engineer',
    'Four Brothers of Mages',
    'The Dwarf',
    'heat damage',
    'lava zones',
    'volcanic magic',
    'area control',
    'Staff Orbina',
    'weapon',
    'equipment',
    'Blessing of Earth',
    'Harmony of the Architect',
    'guide',
    'stats',
    'build',
  ],
};
