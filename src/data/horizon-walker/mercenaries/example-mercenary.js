// Example Mercenary Data - Horizon Walker
// Based on the character data structure but adapted for mercenaries
import {
  validateMercenaryData,
  sanitizeMercenaryData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/mercenary-validation.js';

const rawExampleMercenaryData = {
  // Basic Mercenary Information
  name: 'Example Mercenary',
  image: 'Example_Mercenary', // Image filename without extension
  rarity: 'A', // EX, SS, S, A, B
  cost: 2, // Deployment cost
  class: 'Support', // Mercenary class
  element: 'Physical', // Element type
  faction: 'Independent', // Faction
  role: 'General Trait Provider', // Primary role
  useability: 'Limited', // Useability type
  tags: [
    'Mercenary',
    'General Trait',
    'Support',
    'Limited Use',
    'Collection',
    'Independent',
    'Physical',
    'Trait Provider',
  ], // Mercenary tags

  // Mercenary Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '4',
    technic: '5',
    intelligence: '3',
    vitality: '6',
    agility: '8',

    // Key Stats
    meleeAtk: '45',
    rangedAtk: '50',
    magicAtk: '30',
    maxHp: '300',
    spd: '60',
    startingAp: '100',
    apRecovery: '80',
    accuracy: '85',
    evade: '70',
    critRate: '5',
    critDmg: '120',

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

  // Mercenary Description
  description:
    'A basic mercenary unit that provides general support traits and utility. Primarily used for collection or specific situational advantages rather than direct combat.',

  // Mercenary Profile (optional)
  profile: {
    age: 'Unknown',
    racial: 'Human',
    homeland: 'Various',
    height: '170cm',
    birthday: 'Unknown',
  },

  // Mercenary Story
  story:
    'Independent mercenaries who offer their services to various factions. While not as powerful as main characters, they provide valuable support through general traits and specialized utility functions. These units are often collected for their unique abilities or used in specific tactical situations.',

  // Traits (instead of skills for mercenaries)
  traits: {
    generalSupport: {
      name: 'General Support',
      description:
        'Provides a minor boost to team coordination and resource management. This trait offers utility benefits that enhance overall team performance in various situations.',
    },
    independentSpirit: {
      name: 'Independent Spirit',
      description:
        'Mercenary units operate independently and can adapt to various battlefield conditions. Grants minor resistance to status effects and improved recovery rates.',
    },
  },

  // Weapon Information (if applicable)
  weapon: {
    name: 'Standard Equipment',
    type: 'Basic Gear',
    rarity: 'A',
    image: '/images/games/horizon-walker/weapons/Standard_Equipment.jpg',
    stats: {
      weaponMagicAtk: '15.0',
    },
    uniqueSkills: {
      basicProficiency: {
        name: 'Basic Proficiency',
        type: 'Passive',
        description:
          'Standard mercenary equipment provides basic combat effectiveness. Increases accuracy by 10% and reduces AP consumption for basic attacks by 5%.',
      },
    },
  },
};

// Validate and sanitize the mercenary data
const validation = validateMercenaryData(rawExampleMercenaryData);
if (!validation.isValid) {
  throw new Error(`Mercenary data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized mercenary data
export const exampleMercenaryData = sanitizeMercenaryData(rawExampleMercenaryData);

// Highlighting terms for this mercenary - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})\]/g,
  buffsDebuffs:
    /\b(?:General\s+Support|Independent\s+Spirit|Basic\s+Proficiency|trait|mercenary|support|coordination|resistance|recovery|accuracy|proficiency)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|boosts?|enhances?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:mercenary|independent|support|trait|utility|collection|situational|tactical|coordination|resource\s+management|battlefield|conditions|status\s+effects|recovery|accuracy|proficiency|equipment|combat\s+effectiveness)\b/gi,
  attributes:
    /\b(?:AP|Magic\s+ATK|Melee\s+ATK|Ranged\s+ATK|Physical|Heat|Cold|Electric|Immaterial|Poison|SPD|DEF|HP|Max\s+HP|Crit\s+Rate|Crit\s+DMG|Accuracy|Recovery|Formation\s+Cost|Intelligence|Vitality|Strength|Technic|Agility)\b/gi,
  traits:
    /\b(?:General\s+Support|Independent\s+Spirit|trait\s+provider|limited\s+use|collection\s+value)\b/gi,
  useability: /\b(?:limited|situational|general\s+trait|collection|utility|support)\b/gi,
};

// Export sanitized highlighting patterns
export const exampleMercenaryHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const exampleMercenarySEO = {
  title: 'Example Mercenary - Horizon Walker Mercenary Guide',
  description:
    'Complete guide for Example Mercenary, an A rarity Support mercenary in Horizon Walker. General trait provider with limited useability and collection value.',
  keywords: [
    'Example Mercenary',
    'Horizon Walker',
    'A rarity',
    'support',
    'mercenary',
    'general trait',
    'limited use',
    'collection',
    'independent',
    'physical',
    'trait provider',
    'guide',
    'stats',
    'utility',
  ],
};
