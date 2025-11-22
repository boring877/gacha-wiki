// So Joo-hee Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawSoJooHeeData = {
  // Basic Character Information
  name: 'So Joo-hee',
  image: 'So_Joo_hee', // Character image filename without extension
  rarity: 'SS', // EX, SS, S, A, B
  cost: 3, // Deployment cost
  tags: [
    'Assassin',
    'Ranged DPS',
    'Pierce Damage',
    'Stealth',
    'Weakness Hunter',
    'Dual Pistols',
    'Government Agent',
    'Accuracy Support',
    'Critical Damage',
    'Team Buffer',
    'Unblockable Attack',
    'Mass Execution',
    'Human',
    'Intelligence Officer',
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
    meleeAtk: '76',
    rangedAtk: '192',
    magicAtk: '102',
    maxHp: '576',
    spd: '88',
    startingAp: '114',
    apRecovery: '101',
    accuracy: '97',
    evade: '85',
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
    'A government intelligence officer and daughter of the Vice Minister of the Interior, seeking to prove herself beyond her family connections.',

  // Character Profile
  profile: {
    age: '30',
    racial: 'Human (Earth)',
    homeland: 'East Asia Federation, Seongnam',
    height: '169cm',
    birthday: 'December 1st',
    bwhRatio: '100(J)-60-103',
  },

  // Character Story
  story:
    "So Joo-hee is the daughter of the Vice Minister of the Interior, which oversees the Bureau of Rift Management, and her family has long been celebrated as a prestigious line of bureaucrats. However, Joo-hee herself didn't quite live up to the family's standards. Unable to join one of the older, more established departments, she was instead hired as a special recruit for the Dimension Immigration Department of the Bureau of Rift Management, which was severely understaffed. Later, she managed to transfer to the Intelligence Department, a core division, which allowed her to maintain the title of an elite bureaucrat. This series of events, however, significantly hurt her self-esteem and contributed to her impulsive and attention-seeking personality. To make matters worse, her father, concerned about the family's reputation, severely restricted her romantic relationships, which only heightened her yearning for freedom. Given these circumstances, it was almost inevitable that she would clash with Yeon Chae-young, who was regarded as the top elite of the Bureau of Rift Management, and soon enough, the two developed a notorious rivalry. Though she is often dismissed as an incompetent nepotism hire, some believe that she has untapped potential.",

  // Unique Traits
  uniqueTraits: {
    upstartsPride: {
      name: "Upstart's Pride",
      description:
        'Formation Cost -1, Agility -1, Vitality -3, Strength -1, Technic -3, Intelligence -1',
    },
    unearnedConfidence: {
      name: 'Unearned Confidence',
      description:
        'Activates the Level 1 passive skill [Concentration]. [Concentration]: At the start of battle, increases CRIT rate by 12% and Ranged ATK by 30%. Upon being hit, this effect vanishes.',
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
    assassination: {
      name: 'Assassination',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 2,
      damage: {
        type: 'Ranged ATK',
        value: '190%',
      },
      description:
        'Approaches the enemy and delivers an Unblockable point-blank shot. Deals Pierce DMG equal to 190% of Ranged ATK. This attack is always considered to be from behind the enemy and ignores counterattack effects. During this attack, ACC temporarily increases by 300%.',
    },
    massExecution: {
      name: 'Mass Execution',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 3,
      damage: {
        type: 'Ranged ATK',
        value: '342%',
      },
      description:
        'Performs a quick and precise rapid shot on up to 3 enemies. Executes a distributed attack in order of proximity, dealing Pierce DMG equal to 342% of Ranged ATK divided by the number of targets.',
    },
    unavoidableEyes: {
      name: 'Unavoidable Eyes',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "Identifies the enemy's weak point and guides allies. Increases ACC of all allies by 57%.",
    },
  },

  // Weapon
  weapon: {
    name: 'EX Dual Pistols - Fleure de Vanite 92',
    image: 'So_Joo_hee_WP.jpg',
    rarity: 'EX',
    type: 'Dual Pistols',
    stats: {
      weaponRangedAtk: '77.0',
      spdBonus: '+49.0%',
    },
    uniqueSkills: {
      traceOfWeakness: {
        name: 'Trace of Weakness',
        type: 'Unique',
        description:
          'On Weakness Attack, grants one stack of [Mark of Weakness] that lasts for 2 Rounds. Additionally, on successful attack, grants the target an additional stack of [Mark of Weakness] and increases ally ACC by 40%. [Mark of Weakness]: Reduces all DEF of the target by 320 and further reduces Pierce DEF by an additional 280. Can stack up to 2 times.',
      },
      magnifique: {
        name: 'Character Signature: Magnifique',
        type: 'Signature',
        description:
          "[Mark of Weakness] effect's DEF reduction is applied at 2 times the usual value. At the start of the next turn after ending your own turn, if there is an ally within a 3m range who is not in a Stealth or Banish state, gain the [Conceal: Stealth] effect.",
      },
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawSoJooHeeData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const soJooHeeData = sanitizeCharacterData(rawSoJooHeeData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Upstart's\s+Pride|Unearned\s+Confidence|Concentration|Conceal:\s+Stealth|Mark\s+of\s+Weakness|Trace\s+of\s+Weakness|Magnifique|optical\s+camouflage|weak\s+point|weakness\s+attack|point-blank\s+shot|rapid\s+shot|distributed\s+attack|counterattack\s+effects|stealth\s+or\s+banish\s+state)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|grants?|vanishes?|ignores?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:bureaucrats|prestigious|Vice\s+Minister|Interior|Bureau\s+of\s+Rift\s+Management|Dimension\s+Immigration\s+Department|Intelligence\s+Department|elite\s+bureaucrat|self-esteem|impulsive|attention-seeking|romantic\s+relationships|family\s+reputation|Yeon\s+Chae-young|rivalry|nepotism\s+hire|untapped\s+potential|East\s+Asia\s+Federation|Seongnam|dual\s+pistols|unblockable|proximity|formation\s+cost)\b/gi,
  attributes:
    /\b(?:AP|Ranged\s+ATK|Pierce|ACC|SPD|CRIT\s+rate|Formation\s+Cost|Agility|Vitality|Strength|Technic|Intelligence|DEF|Pierce\s+DEF|All\s+DEF|Missing\s+HP|Weak\s+Point\s+Attack|Activation\s+chance)\b/gi,
};

// Export sanitized highlighting patterns
export const soJooHeeHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const soJooHeeSEO = {
  title: 'So Joo-hee - Horizon Walker Character Guide',
  description:
    'Complete guide for So Joo-hee, an SS rarity human assassin in Horizon Walker. Government intelligence officer with stealth mechanics, accuracy support, and dual pistol expertise.',
  keywords: [
    'So Joo-hee',
    'Horizon Walker',
    'SS rarity',
    'assassin',
    'human',
    'government agent',
    'intelligence officer',
    'stealth',
    'dual pistols',
    'pierce damage',
    'weakness hunter',
    'accuracy support',
    'guide',
    'stats',
    'build',
  ],
};
