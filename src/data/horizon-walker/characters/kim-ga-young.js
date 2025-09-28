// Kim Ga-young Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawKimGaYoungData = {
  // Basic Character Information
  name: 'Kim Ga-young',
  image: 'Kim_Ga_Young', // Character image filename without extension
  rarity: 'S', // EX, SS, S, A, B
  cost: 3, // Deployment cost
  tags: [
    'Archer',
    'Sniper',
    'Ranged DPS',
    'Pierce Damage',
    'Stealth',
    'Support Fire',
    'Drone User',
    'Wire Maneuver',
    'Government Agent',
    'Scout',
    'Critical Damage',
    'High Technic',
    'Human',
    'Mobility',
    'Stealth Detection',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '7',
    technic: '19',
    intelligence: '9',
    vitality: '9',
    agility: '10',

    // Key Stats
    meleeAtk: '76',
    rangedAtk: '230',
    magicAtk: '102',
    maxHp: '448',
    spd: '88',
    startingAp: '122',
    apRecovery: '109',
    accuracy: '102',
    evade: '102',
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
    'An inspired young government scout who idolizes Yeon Chae-young and supports operations with drone reconnaissance and sniper fire.',

  // Character Profile
  profile: {
    age: '23',
    racial: 'Human (Earth)',
    homeland: 'East Asia Federation, Yeongwol',
    height: '160cm',
    birthday: 'October 10th',
    bwhRatio: '72(C)-46-87',
  },

  // Character Story
  story:
    "Kim Ga-young was an ordinary girl who lived her life as naturally as water flows. Though her academic performance was always outstanding, she simply followed what others told her to do, eventually getting into a prestigious university. One day, by chance, she witnessed Yeon Chae-young commanding a Rift site—a scene that left a deep impression on her, especially seeing a woman take charge so confidently. It was a defining moment for Ga-young: she had found her role model. Inspired by Yeon Chae-young, she decided that she wanted to become an impressive woman like her, and immediately began studying for the civil service examination. Given her talent for studying, she passed the exam with ease and applied to become an agent under Yeon Chae-young's lead. Though people around her expressed concerns, she remained determined for the first time in her life. Although she couldn't become a dedicated agent to the Human God like Yeon Chae-young, she managed to become a scout that supports them.",

  // Unique Traits
  uniqueTraits: {
    yeonChaeYoungFan: {
      name: 'Yeon Chae-young Fan',
      description:
        'Formation Cost -1, Agility -2, Vitality -2, Strength -1, Technic -3, Intelligence -1',
    },
    droneScouting: {
      name: 'Drone Scouting',
      description:
        'Activates the Level 3 passive skill [Drone View]. [Drone View]: Uses the drone to scout the surroundings. At the start of each round, has a 60% chance to detect and cancel stealth on all hidden enemies on the map. Also, from the start of each round until the end of own first turn, all attack ranges increase by 3m.',
    },
    human: {
      name: 'Human',
      description: 'Technic 1, AP Recovery 4%',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the chosen Human.',
    },
  },

  // Skills and Passive
  skills: {
    sniping: {
      name: 'Sniping',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 0,
      damage: {
        type: 'Ranged ATK',
        value: '190%',
      },
      description:
        'Snipes an enemy with a rifle. Deals Pierce DMG equal to 190% of Ranged ATK and makes the target Unable to Counterattack for 1 round. During this attack, own ACC temporarily decreases by 15%.',
    },
    supportFire: {
      name: 'Support Fire',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Once per round, gains the [Reactive Support: Snipe] effect. [Reactive Support: Snipe]: When an ally other than yourself is attacked, performs a support counterattack and gains 12 AP. This effect then immediately vanishes.',
    },
    camouflage: {
      name: 'Camouflage',
      level: '10/10',
      type: 'Skill',
      apCost: 33,
      cooldown: 2,
      description:
        "Uses the drone's optical function to camouflage self. Gains [Camouflage: Stealth] for 3 rounds. Cannot perform Support Counterattack while stealth. [Camouflage: Stealth]: Becomes hidden and cannot be targeted by enemy skills. For one attack, CRIT rate increases by 100%, and CRIT DMG increases by 30%.",
    },
    wireManeuverShot: {
      name: 'Wire Maneuver Shot',
      level: '10/10',
      type: 'Skill',
      apCost: 90,
      cooldown: 0,
      damage: {
        type: 'Ranged ATK',
        value: '285%',
      },
      description:
        "Quickly fires at the enemy and uses all drones' ultra-lightweight wires to leap 12m away in a straight line from the enemy. Deals Pierce Dmg equal to 285% of your Ranged ATK to enemies hit by the attack. Gain the [Camouflage: Stealth] effect for 3R after landing. This skill can only be used 2 times during battle. [Camouflage: Stealth]: Becomes hidden and cannot be targeted by enemy skills. For one attack, CRIT rate increases by 100%, and CRIT DMG increases by 30%.",
      note: 'Limited to 2 uses per battle',
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawKimGaYoungData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const kimGaYoungData = sanitizeCharacterData(rawKimGaYoungData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Yeon\s+Chae-young\s+Fan|Drone\s+Scouting|Drone\s+View|Reactive\s+Support:\s+Snipe|Camouflage:\s+Stealth|Wire\s+Maneuver\s+Shot|Unable\s+to\s+Counterattack|Support\s+Counterattack|optical\s+function|ultra-lightweight\s+wires|stealth\s+detection|attack\s+ranges|hidden\s+enemies)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|gains?|vanishes?|detect|cancel)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:ordinary\s+girl|water\s+flows|outstanding|prestigious\s+university|Rift\s+site|commanding|role\s+model|civil\s+service\s+examination|determined|dedicated\s+agent|Human\s+God|scout|supports|drone|sniper|rifle|camouflage|wire\s+maneuver|East\s+Asia\s+Federation|Yeongwol|reconnaissance)\b/gi,
  attributes:
    /\b(?:AP|Ranged\s+ATK|Pierce|ACC|CRIT\s+rate|CRIT\s+DMG|Formation\s+Cost|Agility|Vitality|Strength|Technic|Intelligence|Attack\s+ranges|Support\s+Counterattack|Stealth)\b/gi,
};

// Export sanitized highlighting patterns
export const kimGaYoungHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const kimGaYoungSEO = {
  title: 'Kim Ga-young - Horizon Walker Character Guide',
  description:
    'Complete guide for Kim Ga-young, an S rarity human sniper in Horizon Walker. Government scout with drone reconnaissance, stealth mechanics, and support fire capabilities.',
  keywords: [
    'Kim Ga-young',
    'Horizon Walker',
    'S rarity',
    'archer',
    'sniper',
    'human',
    'government agent',
    'scout',
    'drone user',
    'stealth',
    'wire maneuver',
    'support fire',
    'pierce damage',
    'guide',
    'stats',
    'build',
  ],
};
