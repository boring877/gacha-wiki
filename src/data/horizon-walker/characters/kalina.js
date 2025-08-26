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
    strength: '14',
    technic: '8',
    intelligence: '5',
    vitality: '10',
    agility: '17',

    // Key Stats
    meleeAtk: '179',
    rangedAtk: '102',
    magicAtk: '64',
    maxHp: '640',
    spd: '157',
    startingAp: '124',
    apRecovery: '127',
    accuracy: '102',
    evade: '228',
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
    name: 'Tyrant Edge',
    type: 'EX Twin Swords',
    rarity: 'EX',
    image: '/images/games/horizon-walker/weapons/Kalina_WP.jpg',
    stats: {
      weaponMeleeAtk: '91.0',
      critRateBonus: '+35.0%',
    },
    uniqueSkills: {
      edgeRunner: {
        name: 'The Edge Runner',
        type: 'Unique',
        description:
          'On successful attack, lifesteals 24% of the damage dealt. When an enemy attacks self, turns to face the attacker, and on evasion, Slash Boost increases by 24%, stacking up to 3 times. On attack, increases CRIT DMG based on the straight-line distance moved during the turn. Increases up to 180% at a maximum of 6m.',
      },
      persistence: {
        name: 'Persistence',
        type: 'Kalina Signature',
        description:
          'When you evade, you counterattack with the "Blades of Tyranny" skill and it has a separate 2R cooldown. If the "Survival Expert" skill effect is triggered, you recover 30% of the Max HP.',
        note: 'This signature skill only activates when Kalina equips this weapon.',
      },
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
      description: 'Interested in the Chosen Human.',
    },
  },

  // Skills and Passive
  skills: {
    harpeArt: {
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
      name: 'Hunter on the Vine',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Increases Mobility by 10. After attacking, Evasion increases by 570% until the end of the turn. Additionally, during a basic attack, Melee ATK increases proportionally to the straight distance moved. Up to 10m movement grants a maximum of 114% increase.',
    },
    assault: {
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
      name: 'Survival Expert',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Once per battle, survives with 1 HP and immediately gains 150 AP.',
    },
  },
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
  keywords: /\b(?:survives?|ignores?\s+counterattacks?|Chosen\s+Human|Swamp\s+Rangers|Bureau\s+of\s+Rift\s+Management|Webwoods|Maximilia|lifesteal|stacking)\b/gi,
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