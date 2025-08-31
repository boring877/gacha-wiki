// Ines Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawInesData = {
  // Basic Character Information
  name: 'Ines',
  image: 'Ines', // Character image filename without extension
  rarity: 'A', // EX, SS, S, A, B
  cost: 6, // Deployment cost
  tags: [
    'Warrior',
    'Melee Damage',
    'Slash Damage',
    'High ATK',
    'Critical Striker',
    'Area Damage',
    'Swordswoman',
    'High Mobility',
    'Physical Damage',
    'Two-handed Sword',
    'Weakness Hunter',
    'Distance Scaling',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '18',
    technic: '11',
    intelligence: '10',
    vitality: '17',
    agility: '14',

    // Key Stats
    meleeAtk: '255',
    rangedAtk: '161',
    magicAtk: '140',
    maxHp: '1088',
    spd: '96',
    startingAp: '120',
    apRecovery: '115',
    accuracy: '97',
    evade: '215',
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
    'A determined swordswoman from the Grand Duchy of Magnal who resembles the great Brave Duchess Olivia, seeking to prove herself as a worthy warrior.',

  // Character Profile
  profile: {
    age: '25',
    racial: 'Human (Noctis Nebula)',
    homeland: 'Grand Duchy of Magnal, Lissi',
    height: '173cm',
    birthday: 'October 12th',
    bwhRatio: '82(F)-51-93',
  },

  // Character Story
  story:
    'Ines grew up constantly being compared to the great Brave Duchess. Because she resembled Olivia, she was burdened with excessive expectations, which led to an obsession with not losing to anyone, just like her aunt. This pressure significantly shaped her personality. During the Rift Crisis, Ines, who had been training in swordsmanship within the Empire, fled to Earth following Maximilia and continued her training even on Earth. Wanting to become even stronger, Ines has applied to join the Vanguards.',

  // Unique Traits
  uniqueTraits: {
    risingStar: {
      name: 'Rising Star',
      description: 'SPD 5%, Evade 20%',
    },
    oceanSteps: {
      name: 'Ocean Steps',
      description:
        'Activates the Level 3 passive skill [Stride of Magnal]. [Stride of Magnal]: Upon performing a Weakness Attack, increases Melee ATK proportionally to the distance moved before the attack up to a maximum of 10m for an increase of 60% until the end of the turn.',
    },
    marlon: {
      name: 'Marlon',
      description: 'Strength 1, Technic 1, Intelligence 1',
    },
    interested: {
      name: 'Interested',
      description: 'Special trait with no listed characteristics.',
    },
  },

  // Skills and Passive
  skills: {
    skyCleaver: {
      name: 'Sky Cleaver',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        'Delivers a powerful slash to enemies in front. Deals 114% Melee ATK as Slash DMG in a 3m × 5m rectangular area.',
    },
    worldCleaver: {
      name: 'World Cleaver',
      level: '10/10',
      type: 'Skill',
      apCost: 90,
      cooldown: 3,
      damage: {
        type: 'Melee ATK',
        value: '190%',
      },
      description:
        'Unleashes a powerful slash across a wide area in front. Deals Slash DMG equal to 190% of Melee ATK to enemies within a 7m, 150° cone.',
    },
    naturalForm: {
      name: 'Natural Form',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "Increases CRIT rate by 19% and CRIT DMG by 38%. If there are enemies that were not defeated by an attack, performs a support attack with the 'Dividing the Earth' skill. If there are enemies that were not defeated by a counterattack, performs a support counterattack with the 'Dividing the Earth' skill.",
    },
    dividingTheEarth: {
      name: 'Dividing the Earth',
      level: 'Auto',
      type: 'Support',
      apCost: 0,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '228%',
      },
      description:
        'Performs a powerful upward slash. Deals Slash DMG equal to 228% of melee ATK to enemies within an 8m straight line in front.',
    },
  },

  // Weapon
  weapon: {
    name: 'EX Two-handed Sword - The Severer of Fate',
    type: 'Two-handed Sword',
    rarity: 'EX',
    image: '/images/games/horizon-walker/weapons/Ines_WP.jpg',
    stats: {
      weaponMeleeAtk: '91.0',
      critDmgBonus: '+70.0%',
    },
    uniqueSkills: {
      destiny: {
        name: 'Destiny',
        type: 'Unique',
        description:
          'CRIT rate is increased by 40%. Applies [Fate] effect to enemies successfully hit for 1R. [Fate]: When attacking an enemy with this effect, reduces their Slash DEF by 1200 until the end of the turn.',
      },
      theWinterDuchess: {
        name: 'Ines Signature: The Winter Duchess',
        type: 'Character Signature',
        description: "Reduces AP consumption for the 'World Cleaver' skill by 50% during combat.",
      },
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawInesData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const inesData = sanitizeCharacterData(rawInesData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Rising\s+Star|Ocean\s+Steps|Stride\s+of\s+Magnal|Natural\s+Form|Dividing\s+the\s+Earth|Fate|Destiny|The\s+Winter\s+Duchess|Sky\s+Cleaver|World\s+Cleaver|Weakness\s+Attack|support\s+attack|support\s+counterattack)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Brave\s+Duchess|Grand\s+Duchy\s+of\s+Magnal|Olivia|Maximilia|Rift\s+Crisis|Vanguards|swordsmanship|Empire|Earth|expectations|obsession|training|rectangular\s+area|cone|straight\s+line|distance\s+moved|proportionally)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|Slash|Pierce|Crush|Physical|Heat|Cold|Electric|Immaterial|Poison|SPD|CRIT\s+rate|CRIT\s+DMG|Accuracy|Evade|HP|Max\s+HP|AP\s+Recovery|Intelligence|Strength|Technic|Vitality|Agility|Slash\s+DEF)\b/gi,
};

// Export sanitized highlighting patterns
export const inesHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const inesSEO = {
  title: 'Ines - Horizon Walker Character Guide',
  description:
    'Complete guide for Ines, an A rarity Warrior character in Horizon Walker. Determined swordswoman with powerful slash attacks, critical damage, and distance-scaling abilities.',
  keywords: [
    'Ines',
    'Horizon Walker',
    'A rarity',
    'warrior',
    'swordswoman',
    'slash damage',
    'critical striker',
    'melee damage',
    'area damage',
    'two-handed sword',
    'weakness hunter',
    'distance scaling',
    'guide',
    'stats',
    'build',
  ],
};
