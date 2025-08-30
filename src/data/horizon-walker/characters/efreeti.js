// Efreeti Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawEfreetiData = {
  // Basic Character Information
  name: 'Efreeti',
  image: 'Efreeti', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 6, // Deployment cost
  tags: [
    'Mage',
    'Fire Mage',
    'Magic User',
    'Arcane Elemental',
    'Area Damage',
    'Heat Damage',
    'Immaterial Damage',
    'Support Fire',
    'Team Buffer',
    'High Evasion',
    'High Intelligence',
    'Flame Magic',
    'Elemental Magic',
    'Support Attack',
    'Zone Control',
    'AP Support',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '6',
    technic: '7',
    intelligence: '20',
    vitality: '9',
    agility: '19',

    // Key Stats
    meleeAtk: '76',
    rangedAtk: '89',
    magicAtk: '256',
    maxHp: '518',
    spd: '131',
    startingAp: '106',
    apRecovery: '127',
    accuracy: '102',
    evade: '243',
    critRate: '10',
    critDmg: '150',

    // Attribute Boost
    slashBoost: '0',
    pierceBoost: '0',
    crushBoost: '0',
    heatBoost: '8',
    coldBoost: '0',
    electricBoost: '0',
    immaterialBoost: '0',
    poisonBoost: '0',

    // Attribute Defense
    slashDef: '0',
    pierceDef: '0',
    crushDef: '0',
    heatDef: '1050',
    coldDef: '-40',
    electricDef: '0',
    immaterialDef: '0',
    poisonDef: '0',
    blockRate: '0',
  },

  // Character Description
  description:
    'A young arcane elemental born in the Hardum Dwarven forges, imbued with flame power and extensive technological knowledge.',

  // Character Profile
  profile: {
    age: 'Unknown',
    racial: 'Arcane Elemental',
    homeland: 'Mt. Hardum, The Grand Furnace',
    height: '162cm',
    birthday: 'Unknown',
    bwhRatio: '72(C)-46-87',
  },

  // Character Story
  story:
    'Efreeti is a young elemental who has only recently come into being. Even among the arcane elementals, she stands out as something of an anomaly. Born in the forges of the Hardum Dwarves in the Norn Mountains, she was imbued from birth with extensive knowledge of numerous technologies and the power of flames, and she served as a guardian spirit for the Dwarves. After the Rift Crisis, she led the way to discover paths through the Rift and wished to continue fighting against it even on Earth. She hoped to aid the Human God at the forefront of the struggle with her knowledge. With a natural affinity for mortals, she applied to join as a Vanguard, wanting to support a worthy Human God.',

  // Unique Traits
  uniqueTraits: {
    flameOfLife: {
      name: 'Flame of Life',
      description:
        "Activates the Level 1 passive skill [Flame of Life]. [Flame of Life]: During combat, increases Magic ATK by 21% of Efreeti's base Max HP. If Efreeti's INT exceeds 16, the DEF reduction effect caused by the Blazing Mandate skill increases by 6% for every point above 16.",
    },
    youngFlameElemental: {
      name: 'Young Flame Elemental',
      description:
        'Activates Level 1 passive skill [Warmth Within the Hearth]. [Warmth Within the Hearth]: Converts the Additional Crush DMG of the Arcane Explosion skill into Additional Heat DMG. Intelligence -4, Heat DEF 1000, Cold DEF -40',
    },
    elementalOfMagic: {
      name: 'Elemental of Magic',
      description: 'Magic ATK 20%, Max HP -10%',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the chosen Human.',
    },
  },

  // Skills and Passive
  skills: {
    arcaneExplosion: {
      name: 'Arcane Explosion',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '57%',
      },
      description:
        'Releases arcane energy, causing a massive explosion. Deals Immaterial DMG equal to 57% of Magic ATK to enemies within a 3m Circular Range at the designated location, and Additional Crush DMG equal to 57% of Magic ATK. When attacking with this skill, temporarily increases ACC by 100%.',
    },
    arcanePurge: {
      name: 'Arcane Purge',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'At the start of the round, grants the [Arcane Purge] effect to allies except Arcane Elementals. When the [Arcane Purge] effect expires, the Arcane Elemental on the battlefield gains 1 stack of [Pure Energy].',
    },
    emberVortex: {
      name: 'Ember Vortex',
      level: '10/10',
      type: 'Skill',
      apCost: 75,
      cooldown: 3,
      damage: {
        type: 'Magic ATK',
        value: '143%/57%',
      },
      description:
        'Unleashes surging flames that scorch and scatter nearby foes. Deals 143% of Magic ATK as unblockable Heat DMG to the target and 57% of Magic ATK as Splash Heat DMG to enemies within a 3m radius, pulling them slightly toward the center. This skill cannot trigger Weak Point effects.',
    },
    blazingMandate: {
      name: 'Blazing Mandate',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "Inflicts [Cinderflame] on enemies hit by a combat skill for 2 rounds. When an ally with [Arcane Purge] attacks on their turn, the caster may trigger a support attack with Ember Vortex, with a separate chance per enemy struck: Melee ATK: 30% + 10% per INT above 16, Elemental ATK: 75% + 5% per INT above 16. When a support attack is triggered this way, the acting ally's [Arcane Purge] effect expires at the end of their turn.",
    },
    eternalFlamestorm: {
      name: 'Eternal Flamestorm',
      level: '10/10',
      type: 'Skill',
      apCost: 80,
      cooldown: 1,
      damage: {
        type: 'Magic ATK',
        value: '266%',
      },
      description:
        'Consumes 2 stacks of the [Pure Energy] effect to activate this skill. Deals 266% of Magic ATK as Heat DMG to enemies in a 5m radius around the targeted location and pulls them toward the center. Grants AP equal to 45% of base AP Recovery to allies affected by [Emberbound].',
    },
    pactOfFlame: {
      name: 'Pact of Flame',
      level: '10/10',
      type: 'Skill',
      apCost: 15,
      cooldown: 0,
      description:
        'Forge a pact to share the power of the Eternal Flame. This skill can only be used when HP is 80% or higher. Consumes 30% of base Max HP and 50% of current HP to activate. Generates a 5m radius [Ember Garden] zone that moves with the caster and restores 15 AP. Grants the [Emberbound] effect to a targeted ally. When a [Emberbound] ally successfully lands an attack, the caster restores 10% of Max HP as healing. If the ally is hit, the caster suffers 15% of their current HP as Fixed DMG.',
    },
  },

  // Weapon
  weapon: {
    name: 'EX Arcane Orb - Vulkanus',
    image: '/images/games/horizon-walker/weapons/Efreeti_WP.jpg',
    rarity: 'EX',
    type: 'Arcane Orb',
    stats: {
      weaponMagicAtk: '77.0',
      maxHpBonus: '+49.0%',
    },
    uniqueSkills: {
      endlessHeat: {
        name: 'Endless Heat',
        type: 'Unique',
        description:
          "Increases Crit Rate by 4% of base Max HP during combat. After a successful support attack, grants all allies the [Thermal Saturation] effect at the start of the next turn. [Thermal Saturation]: Increases Elemental Boost by 12% and Additional DMG Boost by 32%. The effect expires at the end of the holder's turn.",
      },
      efreotiSignature: {
        name: 'Efreeti Signature: The Unextinguishable Flame',
        type: 'Signature',
        description:
          "Increases Crit Rate by 30% during combat. Basic ATK grants allies with [Emberbound] a 8% increase in Crit Rate and Additional DMG Boost for 1R. When an ally with [Emberbound] attacks, the caster also performs a support attack with Ember Vortex, even if the ally doesn't have the [Arcane Purge] effect.",
      },
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawEfreetiData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const efretiData = sanitizeCharacterData(rawEfreetiData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Flame\s+of\s+Life|Arcane\s+Purge|Pure\s+Energy|Cinderflame|Emberbound|Ember\s+Garden|Thermal\s+Saturation|Warmth\s+Within\s+the\s+Hearth|Unextinguishable\s+Flame|arcane\s+energy|massive\s+explosion|surging\s+flames|support\s+attack|pact|eternal\s+flame|flame\s+elemental|elemental\s+boost|additional\s+dmg\s+boost)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|grants?|consumes?|restores?|expires?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:elemental|arcane|forges|Hardum|Dwarves|guardian\s+spirit|Rift\s+Crisis|Human\s+God|Vanguard|anomaly|technologies|flames|mortals|unblockable|circular\s+range|splash|radius|weak\s+point|fixed\s+dmg|signature|thermal|saturation|crit\s+rate|additional\s+dmg|Grand\s+Furnace|Norn\s+Mountains)\b/gi,
  attributes:
    /\b(?:AP|Magic\s+ATK|Melee\s+ATK|Elemental\s+ATK|Heat|Cold|Immaterial|Crush|ACC|SPD|Max\s+HP|Current\s+HP|Base\s+Max\s+HP|Base\s+AP\s+Recovery|INT|Intelligence|DEF|Boost|Crit\s+Rate|Additional\s+DMG|Elemental\s+Boost)\b/gi,
};

// Export sanitized highlighting patterns
export const efretiHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const efretiSEO = {
  title: 'Efreeti - Horizon Walker Character Guide',
  description:
    'Complete guide for Efreeti, an EX rarity Arcane Elemental mage in Horizon Walker. Fire magic specialist with support attacks, zone control, and powerful flame abilities.',
  keywords: [
    'Efreeti',
    'Horizon Walker',
    'EX rarity',
    'mage',
    'arcane elemental',
    'fire mage',
    'flame magic',
    'support attack',
    'zone control',
    'heat damage',
    'immaterial damage',
    'guide',
    'stats',
    'build',
  ],
};
