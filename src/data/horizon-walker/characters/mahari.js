// Mahari Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawMahariData = {
  // Basic Character Information
  name: 'Mahari',
  image: 'Mahari', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 3, // Deployment cost
  tags: [
    'Tank',
    'Warrior',
    'Shield User',
    'Melee Damage',
    'Pierce Damage',
    'Taunt',
    'High Defense',
    'Shield Wall',
    'Aggro Control',
    'Weak Point Hunter',
    'Team Buffer',
    'Lamora',
    'Human',
    'High Vitality',
    'Military',
    'Legion Soldier',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '9',
    technic: '6',
    intelligence: '7',
    vitality: '19',
    agility: '10',

    // Key Stats
    meleeAtk: '115',
    rangedAtk: '76',
    magicAtk: '89',
    maxHp: '1066',
    spd: '113',
    startingAp: '127',
    apRecovery: '121',
    accuracy: '102',
    evade: '128',
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
    'A 4th Legion soldier from Lamora seeking vengeance after surviving the Rift disaster and Kesak ambush that destroyed her unit.',

  // Character Profile
  profile: {
    age: '24',
    racial: 'Human (Lamora)',
    homeland: 'City of Bel-lamori',
    height: '163cm',
    birthday: '21st-Month 893rd',
    bwhRatio: '72(C)-47-88',
  },

  // Character Story
  story:
    "Mahari is a new recruit of the 4th Legion, famous for capturing and executing the gladiator-skyrogue Kalakul. Born into a deeply traditional military family, she completed her training with excellent marks, earning her placement in the 4th Legion. Mahari herself dreamed of capturing a notorious pirate and thereby contributing to the Republic's honor and glory. However, when the Rift opened and the 4th Legion attempted to escape to avoid destruction, they were suddenly ambushed by Kesak skyrogues. At the time, there was an unspoken agreement that Lamora and Kesak would no longer engage in conflict, leaving the 4th Legion unprepared to deal with both the Rift and the skyrogues. The legion was overwhelmed, most of its members perished, and the survivors scattered in disarray. Mahari survived only thanks to the sacrifices and care of her senior comrades, but was ultimately left alone. After arriving on Earth, she officially applied for refugee status, harboring a desire to avenge herself against Kesak and resume the honorable path of a soldier.",

  // Unique Traits
  uniqueTraits: {
    lamorasRevenant: {
      name: "Lamora's Revenant",
      description: 'Formation Cost -1, Vitality -2, Block Rate 25%',
    },
    wallOfAnnihilation: {
      name: 'Wall of Annihilation',
      description:
        "[Shield Wall] is enhanced into [Annihilation Wall]. [Wall of Annihilation]: Consumes 55 AP. Draws the enemy's attention and protects allies by creating a massive shield wall. While generating the shield wall, attacks the weaknesses of enemies in the front fan-shaped area and makes them face self.",
    },
    lamora: {
      name: 'Lamora',
      description: 'AP Recovery 12%',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the chosen Human.',
    },
  },

  // Skills and Passive
  skills: {
    gapStab: {
      name: 'Gap Stab',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description: 'Stabs with a sword to attack. Deals Pierce DMG equal to 114% of melee ATK.',
    },
    threatAttack: {
      name: 'Threat Attack',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 3,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        'Deals a threatening sword strike to the enemy. Deals 114% of Melee ATK as Pierce DMG and inflicts [Taunt] effect to the target for 2R.',
    },
    wallOfAnnihilationSkill: {
      name: 'Wall of Annihilation',
      level: '10/10',
      type: 'Skill',
      apCost: 55,
      cooldown: 1,
      damage: {
        type: 'Melee ATK',
        value: '57%',
      },
      description:
        "Raises a massive shield wall to draw enemy attention and protect allies. Deals Strike Damage equal to 57% of your melee attack power to enemies within a 7m, 150° cone and summons a [Shield Wall] in front of you. Enemies hit by the attack receive the [Impending Threat] effect for 2 rounds and will face you at the end of their turn. This skill applies as a Weak Point Attack if the enemy has a Weak Point. [Impending Threat]: Affected targets cannot turn toward their attacker upon being hit. [Shield Wall]: Increases the skill user's Aggro Adjustment by 57. While [Shield Wall] is active, all defenses increase by 550, and you cannot be pushed, pulled, or countered. The Shield Wall inherits 50% of the skill user's max HP and defense, and it disappears at the start of the skill user's turn.",
    },
    resolveOfReversal: {
      name: 'Resolve of Reversal',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 1,
      description:
        'Activates once per round. After landing a Weak Point Attack, gain a [Resolve of Reversal] shield that lasts for 2 rounds. [Resolve of Reversal]: Grants a shield equal to 40% of max HP + 114% of Melee ATK.',
    },
    willOfResistance: {
      name: 'Will of Resistance',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'During battle, all defenses increase by 60/66/.../114. On successful weakness attack, all DEF additionally increase by 171 for 2R, and while having the [Resolve of Reversal] shield, Aggro Adjustment increases by 60.',
    },
  },

  // Weapon
  weapon: {
    name: 'EX One-handed Sword & Shield - The Arms of Laphnesis',
    image: 'Mahari_WP.jpg',
    rarity: 'EX',
    type: 'One-handed Sword & Shield',
    stats: {
      weaponMeleeAtk: '77.0',
      critDmgBonus: '+98.0%',
    },
    uniqueSkills: {
      hammerAndAnvil: {
        name: 'Hammer and Anvil',
        type: 'Unique',
        description:
          "During battle, Melee ATK increases by 24%, and all DEF increases by 360. At the end of own turn, if the character has a shield effect, all allies are granted the [Origin of Resolve] effect for 1R. [Origin of Resolve]: CRIT DMG increases by 14%, and additionally increases by 32% of the caster's base CRIT DMG.",
      },
      maharSignature: {
        name: 'Mahari Signature: Rank Formation',
        type: 'Signature',
        description:
          "Once per round, at the end of an ally's turn (excluding the caster), they gain 45 AP.",
      },
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawMahariData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const mahariData = sanitizeCharacterData(rawMahariData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Lamora's\s+Revenant|Wall\s+of\s+Annihilation|Annihilation\s+Wall|Shield\s+Wall|Impending\s+Threat|Resolve\s+of\s+Reversal|Will\s+of\s+Resistance|Origin\s+of\s+Resolve|Rank\s+Formation|Hammer\s+and\s+Anvil|Taunt|threatening\s+sword\s+strike|massive\s+shield\s+wall|weakness\s+attack|aggro\s+adjustment|shield\s+effect)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|grants?|inflicts?|inherits?|disappears?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:4th\s+Legion|gladiator-skyrogue|Kalakul|traditional\s+military\s+family|notorious\s+pirate|Republic's\s+honor|Rift|Kesak\s+skyrogues|unspoken\s+agreement|ambushed|overwhelmed|scattered\s+in\s+disarray|senior\s+comrades|refugee\s+status|avenge|honorable\s+path|soldier|Bel-lamori|Lamora|pierced|pushed|pulled|countered|fan-shaped|cone)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Pierce|DEF|All\s+DEF|All\s+defenses|CRIT\s+DMG|Formation\s+Cost|Vitality|Block\s+Rate|AP\s+Recovery|Aggro\s+Adjustment|Max\s+HP|Strike\s+Damage|Weak\s+Point\s+Attack|Shield\s+effect)\b/gi,
};

// Export sanitized highlighting patterns
export const mahariHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const mahariSEO = {
  title: 'Mahari - Horizon Walker Character Guide',
  description:
    'Complete guide for Mahari, an EX rarity Lamoran tank in Horizon Walker. 4th Legion soldier with shield wall mechanics, taunt abilities, and team support capabilities.',
  keywords: [
    'Mahari',
    'Horizon Walker',
    'EX rarity',
    'tank',
    'warrior',
    'human',
    'lamora',
    '4th legion',
    'shield user',
    'taunt',
    'aggro control',
    'shield wall',
    'team buffer',
    'weak point hunter',
    'guide',
    'stats',
    'build',
  ],
};
