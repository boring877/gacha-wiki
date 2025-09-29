// Headless Knight Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawHeadlessKnightData = {
  // Basic Character Information
  name: 'Headless Knight',
  image: 'Headless_Knight', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 6, // Deployment cost
  tags: [
    'Warrior',
    'Tank',
    'Melee DPS',
    'Slash Damage',
    'Area Damage',
    'High Defense',
    'Front Guard',
    'Reaper',
    'Machine',
    'Greatsword User',
    'Wide Sweeping',
    'Cooldown Reduction',
    'Speed Buffer',
    'Unknown Origin',
    'Mystery',
    'Undead',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '20',
    technic: '11',
    intelligence: '9',
    vitality: '20',
    agility: '8',

    // Key Stats
    meleeAtk: '266',
    rangedAtk: '146',
    magicAtk: '115',
    maxHp: '1280',
    spd: '83',
    startingAp: '113',
    apRecovery: '100',
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
    slashDef: '170',
    pierceDef: '170',
    crushDef: '170',
    heatDef: '0',
    coldDef: '0',
    electricDef: '0',
    immaterialDef: '0',
    poisonDef: '0',
    blockRate: '170',
  },

  // Character Description
  description:
    'A mysterious towering knight of unknown origin who wields multiple blades and possesses immense defensive capabilities. Everything about this entity remains shrouded in mystery.',

  // Character Profile
  profile: {
    age: 'Unknown',
    racial: 'Unknown',
    homeland: 'Unknown',
    height: '300cm',
    birthday: 'Unknown',
    bwhRatio: '-',
  },

  // Character Story
  story: 'Unknown',

  // Unique Traits
  uniqueTraits: {
    rake: {
      name: 'Rake',
      description:
        'Activates the level 1 active skill [Rake]. [Rake]: Consumes 15 AP. If possesses the [Reaper] effect, can consume it to activate this skill. Extends an auxiliary blade to attack. Deals Slash DMG equal to 60% of Melee ATK to enemies in a 5m, 120° fan-shaped area and slightly pulls them in.',
    },
    headlessKnight: {
      name: 'Headless Knight',
      description:
        'Activates the Level 1 passive skill [Headless Knight]. [Headless Knight]: At the start of the round, increases Melee ATK by 50% of base Magic ATK for 1 Round.',
    },
    machine: {
      name: 'Machine',
      description: 'Slash DEF 150, Pierce DEF 150, Crush DEF 150',
    },
    interested: {
      name: 'Interested',
      description: 'Special trait with no listed characteristics.',
    },
  },

  // Skills and Passive
  skills: {
    sicle: {
      name: 'Sicle',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        'Deals a powerful sword strike to the enemy. Deals Slash DMG equal to 114% of melee ATK to attacked enemies.',
    },
    noDefiance: {
      name: 'No Defiance',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description: 'Increases melee ATK by 57% and guards the front during own turn.',
    },
    harvest: {
      name: 'Harvest',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 2,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        'Performs a wide sweeping slash. Deals Slash DMG equal to 114% of melee ATK to enemies within a 6m 150° fan range.',
    },
    shieldSplitting: {
      name: 'Shield Splitting',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "Deals Additional Slash DMG equal to 16.5% of the target's current HP on attack. This damage does not exceed 180% of melee ATK.",
    },
    decapitation: {
      name: 'Decapitation',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 4,
      damage: {
        type: 'Melee ATK',
        value: '456%',
      },
      description:
        'Combines all auxiliary blades into a greatsword and strikes down powerfully. Deals Slash DMG equal to 456% of melee ATK to enemies within an 8m 20° fan range.',
    },
    theReaper: {
      name: 'The Reaper',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "Each time an enemy is defeated, the following effects activate: Has a 100% chance to reduce the cooldown of 'Harvest' and 'Decapitate' skills by 1 Round. [Reaper]: Increases SPD by 67.5%.",
    },
    rake: {
      name: 'Rake',
      level: '1/1',
      type: 'Unique Skill',
      apCost: 15,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '60%',
      },
      description:
        'Consumes 15 AP. If possesses the [Reaper] effect, can consume it to activate this skill. Extends an auxiliary blade to attack. Deals Slash DMG equal to 60% of Melee ATK to enemies in a 5m, 120° fan-shaped area and slightly pulls them in.',
    },
  },

  // Weapon
  weapon: {
    name: 'EX Arcane Orb - The Cranium of the Defeated',
    type: 'Arcane Orb',
    rarity: 'EX',
    image: 'Headless_Knight_WP.jpg',
    stats: {
      weaponMeleeAtk: '70.0',
      weaponMagicAtk: '70.0',
      meleeAtkBonus: '+49.0%',
    },
    uniqueSkills: {
      theEye: {
        name: 'The Eye',
        type: 'Unique',
        description:
          "On successful attack, reduces the enemy's AP by 8. When attacking two or more enemies, increases Slash Boost by 40% until the end of the turn.",
      },
      madGeneral: {
        name: 'Headless Knight Signature: The Mad General',
        type: 'Headless Knight Signature',
        description:
          'On successful attack, increases CRIT rate by 2% and CRIT DMG by 4%. Can stack up to 20 times.',
      },
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawHeadlessKnightData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const headlessKnightData = sanitizeCharacterData(rawHeadlessKnightData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Rake|Headless\s+Knight|Machine|Reaper|No\s+Defiance|Shield\s+Splitting|The\s+Eye|The\s+Mad\s+General|sicle|harvest|decapitation|auxiliary\s+blades|greatsword|wide\s+sweeping|cooldown\s+reduction|front\s+guard|unknown\s+origin|mystery|undead|powerful\s+sword\s+strike|fan\s+range|slightly\s+pulls)\b/gi,
  percentages: /\b(\d{1,3}(?:\.\d{1,2})?%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}(?:\.\d{1,2})?%?)\b/gi,
  keywords:
    /\b(?:headless\s+knight|mysterious|towering\s+knight|unknown\s+origin|multiple\s+blades|immense\s+defensive|shrouded\s+mystery|powerful\s+sword\s+strike|wide\s+sweeping\s+slash|auxiliary\s+blades|greatsword|strikes\s+down\s+powerfully|enemy\s+defeated|cooldown\s+reduction|extends\s+auxiliary\s+blade|fan-shaped\s+area|slightly\s+pulls|cranium\s+defeated|arcane\s+orb|mad\s+general)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|Slash|Pierce|Crush|Heat|Cold|Electric|Immaterial|Poison|SPD|CRIT\s+rate|CRIT\s+DMG|Accuracy|Evade|HP|Max\s+HP|AP\s+Recovery|Intelligence|Strength|Technic|Vitality|Agility|Block\s+Rate|Slash\s+DEF|Pierce\s+DEF|Crush\s+DEF|Slash\s+Boost|Additional\s+Slash\s+DMG|Current\s+HP)\b/gi,
};

// Export sanitized highlighting patterns
export const headlessKnightHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const headlessKnightSEO = {
  title: 'Headless Knight - Horizon Walker Character Guide',
  description:
    'Complete guide for Headless Knight, an EX rarity mysterious warrior in Horizon Walker. Towering knight of unknown origin with high defense, slash damage, and reaper abilities.',
  keywords: [
    'Headless Knight',
    'Horizon Walker',
    'EX rarity',
    'warrior',
    'tank',
    'mystery',
    'unknown origin',
    'slash damage',
    'high defense',
    'reaper',
    'machine',
    'greatsword',
    'area damage',
    'front guard',
    'undead',
    'guide',
    'stats',
    'build',
  ],
};
