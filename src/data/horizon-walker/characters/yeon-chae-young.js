// Yeon Chae-Young Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawYeonChaeYoungData = {
  // Basic Character Information
  name: 'Yeon Chae-Young',
  image: 'Yeon_Chae-Young', // Character image filename without extension
  rarity: 'S', // EX, SS, S, A, B
  cost: 4, // Deployment cost
  tags: [
    'Assassin',
    'Ranged Damage',
    'Pierce Damage',
    'Stealth',
    'Accuracy Support',
    'Critical Damage',
    'Weakness Hunter',
    'Team Buffer',
    'Elite Agent',
    'Dual Pistols',
    'Unblockable Attack',
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
    magicAtk: '115',
    maxHp: '790',
    spd: '88',
    startingAp: '123',
    apRecovery: '110',
    accuracy: '105',
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
    'A fifth-grade Bureau of Rift Management field agent who specializes in stealth operations and precision shooting with dual pistols.',

  // Character Profile
  profile: {
    age: '27',
    racial: 'Human (Earth)',
    homeland: 'East Asia Federation, Fukuoka',
    height: '170cm',
    birthday: 'March 8th',
    bwhRatio: '103(L)-56-105',
  },

  // Character Story
  story:
    'During her adolescence, Yeon Chae-young lost her parents to an Abomination. That experience led her to deeply question the role of the state, which ultimately had a profound influence on her decision to apply to the Bureau of Rift Management. Passing the administrative examination for Rift management—widely considered one of the highest elite paths in the Federation—Yeon Chae-young qualified as a fifth-grade officer and chose to volunteer for field duty, becoming an active field agent. And then she met him. Within the Rift\'s barrier, sacrificing himself for countless people only to rise again and obliterate the Blood Maker in an instant—she met the chosen human. In that moment, she knew it was destiny.',

  // Unique Traits
  uniqueTraits: {
    efficientTactics: {
      name: 'Efficient Tactics',
      description:
        'Activates the Level 1 passive skill [Efficient Operation]. [Efficient Operation]: At the start of battle, grants all allies AP by 5.',
    },
    firstBlood: {
      name: 'First Blood',
      description:
        'Activates the Level 3 passive skill [Bold Move]. [Bold Move]: Once per round, the first attack gains 100% CRIT rate and CRIT DMG increases by 40%.',
    },
    human: {
      name: 'Human',
      description: 'Technic 1, AP Recovery 4%',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the Chosen Human.',
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
      description:
        'Calmly shoots at the target. Deals Pierce DMG equal to 114% of Ranged ATK. The ability to wield dual pistols with ease is a skill that Discover agents must master quickly. Agents who can produce submachine gun-level firepower with their two pistols always reign as a fearsome presence on the battlefield.',
    },
    conceal: {
      name: 'Conceal',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'When attacking an enemy\'s weak point, uses optical camouflage to hide. Once per round, has a 38% chance to gain [Conceal: Stealth] upon a weakness attack. The activation chance increases by 1% for every 1% of current lost HP. [Conceal: Stealth]: Becomes hidden and cannot be targeted by enemy skills. SPD decreases by 10%, and ACC increases by 50% for the first attack while hidden.',
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
        'Identifies the enemy\'s weak point and guides allies. Increases ACC of all allies by 57%.',
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawYeonChaeYoungData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const yeonChaeYoungData = sanitizeCharacterData(rawYeonChaeYoungData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Efficient\s+Operation|Bold\s+Move|Conceal:\s+Stealth|First\s+Blood|Efficient\s+Tactics|optical\s+camouflage|weakness\s+attack|point-blank\s+shot|distributed\s+attack|counterattack|unblockable|stealth|hidden)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?|gains?|grants?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords: /\b(?:weak\s+point|behind\s+the\s+enemy|proximity|temporarily|chosen\s+human|Bureau\s+of\s+Rift\s+Management|Abomination|Blood\s+Maker|fifth-grade\s+officer|field\s+agent|dual\s+pistols|submachine\s+gun|Discover\s+agents|optical\s+camouflage|destiny)\b/gi,
  attributes:
    /\b(?:AP|Ranged\s+ATK|Pierce|Physical|Slash|Crush|Heat|Cold|Electric|Immaterial|Poison|ACC|SPD|CRIT\s+rate|CRIT\s+DMG|HP|Technic|lost\s+HP|current\s+lost\s+HP)\b/gi,
};

// Export sanitized highlighting patterns
export const yeonChaeYoungHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const yeonChaeYoungSEO = {
  title: 'Yeon Chae-Young - Horizon Walker Character Guide',
  description:
    'Complete guide for Yeon Chae-Young, an S rarity Assassin character in Horizon Walker. Bureau of Rift Management elite agent specializing in stealth operations and dual pistol combat.',
  keywords: [
    'Yeon Chae-Young',
    'Horizon Walker',
    'S rarity',
    'assassin',
    'human',
    'ranged damage',
    'pierce damage',
    'stealth',
    'dual pistols',
    'accuracy support',
    'bureau of rift management',
    'field agent',
    'guide',
    'stats',
    'build',
  ],
};