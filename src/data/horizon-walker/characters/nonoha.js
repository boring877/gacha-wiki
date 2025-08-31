// Nonoha Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawNonohaData = {
  // Basic Character Information
  name: 'Nonoha',
  image: 'Nonoha', // Character image filename without extension
  rarity: 'A', // EX, SS, S, A, B
  cost: 4, // Deployment cost
  tags: [
    'Mage',
    'Support',
    'Wind Magic',
    'Aeromancer',
    'Magic User',
    'Team Buffer',
    'Shield Provider',
    'AP Support',
    'Speed Enhancement',
    'Human (Earth)',
    'Student',
    'Wind Guide',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '4',
    technic: '5',
    intelligence: '15',
    vitality: '11',
    agility: '15',

    // Key Stats
    meleeAtk: '51',
    rangedAtk: '64',
    magicAtk: '197',
    maxHp: '704',
    spd: '79',
    startingAp: '137',
    apRecovery: '128',
    accuracy: '102',
    evade: '192',
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
    heatDef: '20',
    coldDef: '20',
    electricDef: '20',
    immaterialDef: '20',
    poisonDef: '20',
    blockRate: '0',
  },

  // Character Description
  description:
    "A kind-hearted Earth human from Kyoto studying wind magic at Seoul's Talent Development Institute, dreaming of becoming a powerful Aeromancer to protect her hometown.",

  // Character Profile
  profile: {
    age: '19',
    racial: 'Human (Earth)',
    homeland: 'East Asia Federation, Kyoto',
    height: '162cm',
    birthday: 'April 12th',
    bwhRatio: '80(G)-48-86',
  },

  // Character Story
  story:
    "The Tranel people, known for their pragmatic mindset among the Noctis Nebula, were willing to teach their magic to Earthlings, allowing them to learn the ways of magic from various Tranel groups. Nonoha, a girl from Kyoto, was drawn to the power of the Aeromancers and entered Seoul's Talent Development Institute. Naturally kind-hearted, she learned simple wind magic from an Aeromancer who had taken refuge in Kyoto, using that power to fight monsters. Recognizing her extraordinary talent, the Aeromancer promised to protect her hometown and encouraged Nonoha to go to Neo Seoul to study magic under skilled Aeromancers. Now studying in Seoul, Nonoha works part-time to cover her living expenses, eager to gain practical experience as a Vanguard. She dreams of one day becoming a powerful Aeromancer capable of protecting her hometown.",

  // Unique Traits
  uniqueTraits: {
    illDoMyBest: {
      name: "I'll Do My Best@!",
      description: 'AP Recovery 5%',
    },
    tailwind: {
      name: 'Tailwind',
      description:
        'Activates the Level 3 passive skill [Tailwind]. [Tailwind]: At the start of own turn, if possessing the [Whirling Wind] effect, permanently gains the [Tailwind] effect. [Tailwind]: Increases own AP Recovery by 12%.',
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
    bladewind: {
      name: 'Bladewind',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '114%',
      },
      description:
        'Conjures blades of wind to attack. Deals Slash DMG equal to 114% of magic ATK and knocks the target back by 1.5m.',
    },
    windsGathering: {
      name: "Wind's Gathering",
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "Gains the [Whirling Wind] effect whenever performing an action other than Standby. At the end of own turn, grants the [Wind's Gathering] effect to all allies. [Whirling Wind]: Increases SPD by 3%. Stacks up to 6 times. [Wind's Gathering]: Increases SPD by 9.5% per stack of [Whirling Wind] the caster possesses. This effect disappears at the end of own turn.",
    },
    windShield: {
      name: 'Wind Shield',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 1,
      description:
        "Proportionally grants the [Wind Shield] effect to one ally and self for 2R, based on own magic ATK. [Wind Shield]: Provides a shield that blocks damage equal to 190% of the caster's magic ATK.",
    },
    monsoon: {
      name: 'Monsoon',
      level: '10/10',
      type: 'Skill',
      apCost: 90,
      cooldown: 1,
      description:
        'Bestows the blessing of the Great Wind. Can only be activated when possessing 3 or more stacks of the [Whirling Wind] effect. Consumes 3 stacks of [Whirling Wind] to grant all allies AP equal to 39% of own AP Recovery, and increases AP Recovery by the same amount granted until the start of the next round.',
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawNonohaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const nonohaData = sanitizeCharacterData(rawNonohaData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:I'll\s+Do\s+My\s+Best|Tailwind|Whirling\s+Wind|Wind's\s+Gathering|Wind\s+Shield|aeromancer|wind\s+magic|bladewind|monsoon)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Tranel\s+people|Noctis\s+Nebula|Earthlings|Aeromancers|Kyoto|Seoul's\s+Talent\s+Development\s+Institute|Neo\s+Seoul|East\s+Asia\s+Federation|pragmatic\s+mindset|kind-hearted|extraordinary\s+talent|practical\s+experience|Vanguard|hometown|monsters|refuge|skilled\s+Aeromancers)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Magic\s+ATK|Ranged\s+ATK|Slash|Pierce|Crush|Physical|Heat|Cold|Electric|Immaterial|Poison|SPD|CRIT\s+rate|CRIT\s+DMG|Accuracy|Evade|HP|Max\s+HP|AP\s+Recovery|Intelligence|Strength|Technic|Vitality|Agility)\b/gi,
};

// Export sanitized highlighting patterns
export const nonohaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const nonohaSEO = {
  title: 'Nonoha - Horizon Walker Character Guide',
  description:
    'Complete guide for Nonoha, an A rarity Wind Mage character in Horizon Walker. Earth human student learning Aeromancer magic with wind support abilities.',
  keywords: [
    'Nonoha',
    'Horizon Walker',
    'A rarity',
    'mage',
    'wind magic',
    'aeromancer',
    'support',
    'earth human',
    'student',
    'team buffer',
    'wind shield',
    'AP support',
    'guide',
    'stats',
    'build',
  ],
};
