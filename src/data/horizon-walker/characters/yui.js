// Yui Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawYuiData = {
  // Basic Character Information
  name: 'Yui',
  image: 'Yui', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 7, // Deployment cost
  tags: [
    'Ranged Attacker',
    'Esper',
    'Summoner',
    'Pierce Damage',
    'Stealth',
    'Weak Point Hunter',
    'Telekinesis',
    'Human (Earth)',
    'Discover Agent',
    'Bureau of Rift Management',
    'Area Damage',
    'Critical Striker',
    'Support Summoner',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '7',
    technic: '16',
    intelligence: '9',
    vitality: '13',
    agility: '8',

    // Key Stats
    meleeAtk: '89',
    rangedAtk: '204',
    magicAtk: '122',
    maxHp: '1024',
    spd: '88',
    startingAp: '126',
    apRecovery: '113',
    accuracy: '105',
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
    'A talented Esper agent from the Bureau of Rift Management, wielding telekinetic abilities and dual pistols with deadly precision while dreaming of a peaceful family life.',

  // Character Profile
  profile: {
    age: '29',
    racial: 'Human (Earth)',
    homeland: 'East Asian Federation, Tokyo',
    height: '177cm',
    birthday: 'January 14th',
    bwhRatio: '97(K)-57-106',
  },

  // Character Story
  story:
    "Matsumoto Yui grew up in a peaceful, ordinary home—surrounded by warmth, stability, and love. For as long as she could remember, her dream had been simple: to one day build a quiet, happy family of her own. But fate had other plans. Born with a rare psionic gift, Yui couldn't remain in the background for long. As the Rift Crisis worsened, her abilities made her a natural fit for the Bureau of Rift Management. She rose quickly through the ranks as an Esper agent of Discover, carrying out her duties with calm precision and quiet excellence. Yet her talent came at a price. Her success often went unacknowledged—her accomplishments taken by those above her. And then came the worst of them: Secretary So Joo-hee. Under her, Yui was left to manage the Intelligence Division nearly alone. Even so, she endured. Now, assigned to the command of the Human God—someone unlike any superior she's ever known—Yui is slowly beginning to believe in something more. That maybe her strength doesn't have to come at the cost of isolation. That maybe, in this strange new world... her long-held dream is no longer out of reach.",

  // Unique Traits
  uniqueTraits: {
    withPrecisionAndCare: {
      name: 'With Precision and Care',
      description: 'Formation Cost +1, Vitality 1, Technic 1, Agility 3',
    },
    discoverEsper: {
      name: 'Discover Esper',
      description:
        'Formation Cost +2, Vitality 2, Technic 2, Activates the Level 1 passive skill [Discover Esper Marksmanship]. [Discover Esper Marksmanship]: When firing with a pistol, additional telekinetically controlled firearms fire simultaneously. Increases Basic ATK DMG by 24% and Ranged ATK by 70%.',
    },
    human: {
      name: 'Human',
      description: 'Technic 1, AP Recovery 4%',
    },
    interested: {
      name: 'Interested',
      description: 'Special trait with no listed characteristics.',
    },
  },

  // Skills and Passive
  skills: {
    pistolFire: {
      name: 'Pistol Fire',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      damage: {
        type: 'Ranged ATK',
        value: '114%',
      },
      description: 'Calmly shoots at the target. Deals Pierce DMG equal to 114% of Ranged ATK.',
    },
    conceal: {
      name: 'Conceal',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "When attacking an enemy's weak point, uses optical camouflage to hide. Once per Round, at the end of a turn where you performed a Weak Point Attack, there is a 38% chance to gain [Conceal: Stealth]. Activation chance increases by 1% for every 1% of your missing HP. [Conceal: Stealth]: Becomes hidden and cannot be targeted by enemy skills. SPD decreases by 10%, and ACC increases by 50% for the first attack while hidden.",
    },
    bulletBattalion: {
      name: 'Bullet Battalion',
      level: '2/2',
      type: 'Skill',
      apCost: 60,
      cooldown: 1,
      description:
        'Throws a deployment box forward, summoning 4 player-controllable units of Summon: Bullet Battalion. All previously existing Summon: Bullet Battalion units will be deactivated upon summoning.',
    },
    kineticJump: {
      name: 'Kinetic Jump',
      level: '10/10',
      type: 'Skill',
      apCost: 25,
      cooldown: 1,
      description: 'Harness telekinesis to leap skyward, landing precisely at the chosen spot.',
    },
    anarchicBarrage: {
      name: 'Anarchic Barrage',
      level: '10/10',
      type: 'Skill',
      apCost: 90,
      cooldown: 3,
      damage: {
        type: 'Ranged ATK',
        value: '475%',
      },
      description:
        "Unleashes a telekinetic barrage of pistols, scorching a wide area. This skill has an initial cooldown of 3 rounds. Deals Pierce DMG equal to 475% of Ranged ATK to all enemies within the area. For each target hit, regardless of direction, there is a 10% chance per point of the user's Technic stat exceeding 15 to trigger a Weak Point Attack.",
    },
    spectralLockOn: {
      name: 'Spectral Lock-on',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'When performing a Basic ATK, grants all Summon: Bullet Battalion units on the field the [Calibration] effect for 1 round. Each time a Summon: Bullet Battalion lands a successful Basic ATK, there is a 50% chance to reduce the cooldown of Anarchic Barrage by 1 round. [Calibration]: Gains 200 AP and 100% Crit DMG. Cannot gain this effect again while it is active.',
    },
  },

  // Weapon
  weapon: {
    name: 'EX Dual Pistols - Phantom Stiletto',
    type: 'Dual Pistols',
    rarity: 'EX',
    image: 'Yui_WP.jpg',
    stats: {
      weaponRangedAtk: '77.0',
      critRateBonus: '+49.0%',
    },
    uniqueSkills: {
      lockOnFromBeyond: {
        name: 'Lock-on from Beyond',
        type: 'Unique',
        description:
          'Increases Pierce Boost by 40% during combat. On attack, gain the [Keen Lock-on] effect applied only to that attack. [Keen Lock-on]: Increases your Crit DMG and Ranged ATK by 10% for each ally on the field (excluding yourself), up to a maximum of 8 allies.',
      },
      soulResonance: {
        name: 'Yui Signature: Soul Resonance',
        type: 'Signature',
        description:
          'During battle, increases Basic ATK DMG of both the user and their summons by 16%. The Weak Point Hit chance triggered by the Anarchic Barrage skill is doubled. When Anarchic Barrage targets 2 or fewer enemies: Against 2 enemies: temporarily increases Combat Skill DMG by 18% and restores 12 AP. Against 1 enemy: temporarily increases Combat Skill DMG by 36% and restores 24 AP.',
      },
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawYuiData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const yuiData = sanitizeCharacterData(rawYuiData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:With\s+Precision\s+and\s+Care|Discover\s+Esper|Discover\s+Esper\s+Marksmanship|Human|Conceal:\s+Stealth|Calibration|Keen\s+Lock-on|Lock-on\s+from\s+Beyond|Soul\s+Resonance|telekinesis|psionic|optical\s+camouflage|Bullet\s+Battalion|Anarchic\s+Barrage|Spectral\s+Lock-on)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Matsumoto\s+Yui|Yui|Bureau\s+of\s+Rift\s+Management|Discover|Esper|East\s+Asian\s+Federation|Tokyo|Rift\s+Crisis|psionic\s+gift|Intelligence\s+Division|So\s+Joo-hee|Human\s+God|telekinetic|dual\s+pistols|weak\s+point|stealth|summon|barrage|battalion)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|Pierce|Slash|Crush|Heat|Cold|Electric|Immaterial|Poison|SPD|CRIT\s+rate|CRIT\s+DMG|Accuracy|ACC|Evade|HP|Max\s+HP|AP\s+Recovery|Intelligence|Strength|Technic|Vitality|Agility|Pierce\s+Boost|Combat\s+Skill\s+DMG|Basic\s+ATK\s+DMG)\b/gi,
};

// Export sanitized highlighting patterns
export const yuiHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const yuiSEO = {
  title: 'Yui - Horizon Walker Character Guide',
  description:
    'Complete guide for Yui, an EX rarity Esper character in Horizon Walker. Bureau agent with telekinetic abilities, dual pistols, stealth mechanics, and summoning capabilities.',
  keywords: [
    'Yui',
    'Matsumoto Yui',
    'Horizon Walker',
    'EX rarity',
    'esper',
    'ranged attacker',
    'summoner',
    'pierce damage',
    'stealth',
    'telekinesis',
    'Bureau of Rift Management',
    'Discover',
    'dual pistols',
    'Bullet Battalion',
    'Anarchic Barrage',
    'guide',
    'stats',
    'build',
  ],
};
