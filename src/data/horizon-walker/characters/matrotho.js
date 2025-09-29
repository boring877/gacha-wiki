// Matrotho Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawMatrothoData = {
  // Basic Character Information
  name: 'Matrotho',
  image: 'Matrotho', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 4, // Deployment cost
  tags: [
    'Warrior',
    'Swordswoman',
    'Melee DPS',
    'Slash Damage',
    'High Mobility',
    'High Evasion',
    'Critical Striker',
    'Counterattack',
    'Target Marking',
    'Windblade',
    'Lamoran',
    'Outlaw',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '12',
    technic: '7',
    intelligence: '6',
    vitality: '9',
    agility: '21',

    // Key Stats
    meleeAtk: '153',
    rangedAtk: '89',
    magicAtk: '76',
    maxHp: '576',
    spd: '128',
    startingAp: '141',
    apRecovery: '148',
    accuracy: '102',
    evade: '282',
    critRate: '10',
    critDmg: '150',

    // Attribute Boost
    slashBoost: '4',
    pierceBoost: '4',
    crushBoost: '4',
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
    'A renowned Lamoran swordswoman known as the Windblade, falsely accused of assassinating the President and now seeking to clear her name as a Vanguard.',

  // Character Profile
  profile: {
    age: '28',
    racial: 'Human (Lamora)',
    homeland: 'City of Bel-lamori',
    height: '160cm',
    birthday: 'May 72nd',
    bwhRatio: '75(D)-49-91',
  },

  // Character Story
  story:
    'Even among the strict Lamorans, there are still those who live outside the law. Most Lamorans who become outlaws do so to reclaim their honor, often choosing to live in the wilderness rather than in the safe cities. Matrotho, a renowned swordswoman of the Republic Guard, was famous for her free spirit and her unique, bold style of swordsmanship. She was known as the Windblade and had served as the closest bodyguard to the President of Lamora. However, after the "Night of Blades," when the President was assassinated, Matrotho was arrested as the prime suspect. Falsely accused, she broke out of prison in order to clear her name, and most people around her, believing in her innocence, turned a blind eye to her escape. In the wilderness, she searched tirelessly for the real culprit but found no leads. Then the Rift opened, and determined not to die with her name sullied, she went through the Rift to Earth. Even on Earth, Matrotho continues to pursue her goal of clearing her name, gathering information from her fellow escapees. To secure a solid position for herself, she plans to become a Vanguard.',

  // Unique Traits
  uniqueTraits: {
    theBladeOfWind: {
      name: 'The Blade of Wind',
      description: 'SPD 10%',
    },
    resonanceOfVitality: {
      name: 'Resonance of Vitality',
      description:
        'Activates the Level 3 passive skill [Fighting Spirit]. [Fighting Spirit]: On a successful attack against an enemy with the [Nomination] effect, recovers HP equal to 30% of base Melee ATK and gains the [Fighting Spirit] effect for 1R. [Fighting Spirit]: Increases own CRIT rate by 12%. Stacks up to 3 times.',
    },
    lamora: {
      name: 'Lamora',
      description: 'AP Recovery 12%',
    },
    interested: {
      name: 'Interested',
      description: 'Special trait with no listed characteristics.',
    },
  },

  // Skills and Passive
  skills: {
    sabreStrike: {
      name: 'Sabre Strike',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        'Delivers a powerful and elegant slash to a nearby enemy. Deals Slash DMG equal to 114% of melee ATK.',
    },
    determination: {
      name: 'Determination',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'When attacked, instead of the basic counterattack (once per round), use the "Sensory Concentration" skill during the counterattack phase. After activation, follow up with a support counterattack. Sensory Concentration: Steadies the mind and focuses the senses. Increases Evasion by 380% for 1R.',
    },
    nomination: {
      name: 'Nomination',
      level: '10/10',
      type: 'Skill',
      apCost: 5,
      cooldown: 1,
      description:
        "Designates an enemy as the user's target, applying the [Nomination] effect. Removes any existing [Nomination] effect from other targets on the battlefield. [Nomination]: Reduces Slash DEF by 285.",
    },
    swordOfTheFlowingRiver: {
      name: 'Sword of the Flowing River',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "On a successful attack against an enemy with the [Nomination] effect, gains 6 AP and the [Sword of the Flowing River] effect for 1R. Stacks up to 5 times. [Sword of the Flowing River]: Increases Melee ATK by 57% while using the 'Sabre Strike' skill.",
    },
    bladeOfWar: {
      name: 'Blade of War',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 2,
      damage: {
        type: 'Melee ATK',
        value: '190%',
      },
      description:
        'Quickly dashes forward while attacking. Dashes 6m, dealing Slash DMG equal to 190% of melee ATK to all enemies within a 1.5m radius along the path. Upon a successful attack on an enemy with [nomination], gains 30 AP.',
    },
  },

  // Weapon
  weapon: {
    name: 'EX One-handed sword - The Lamoran Wind',
    type: 'One-handed Sword',
    rarity: 'EX',
    image: 'Matrotho_WP.jpg',
    stats: {
      weaponMeleeAtk: '77.0',
      critDmgBonus: '+98.0%',
    },
    uniqueSkills: {
      gleamblade: {
        name: 'Gleamblade',
        type: 'Unique',
        description:
          'At the start of each round, increases CRIT rate by 0.8% for each amount of AP Recovery exceeding 100. If current HP is 100% at the start of the round, CRIT rate increases by an additional 16%.',
      },
      theWindblade: {
        name: 'Matrotho Signature: The Windblade',
        type: 'Character Signature',
        description: 'Once per round, performs a support attack on successful attack.',
      },
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawMatrothoData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const matrothoData = sanitizeCharacterData(rawMatrothoData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:The\s+Blade\s+of\s+Wind|Resonance\s+of\s+Vitality|Fighting\s+Spirit|Nomination|Sword\s+of\s+the\s+Flowing\s+River|Sensory\s+Concentration|Gleamblade|The\s+Windblade|counterattack|support\s+attack)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Lamorans|Republic\s+Guard|Windblade|President\s+of\s+Lamora|Night\s+of\s+Blades|City\s+of\s+Bel-lamori|outlaws|wilderness|safe\s+cities|falsely\s+accused|broke\s+out\s+of\s+prison|real\s+culprit|Rift\s+opened|Earth|fellow\s+escapees|Vanguard|free\s+spirit|bold\s+style|swordsmanship|closest\s+bodyguard|assassination)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|Slash|Pierce|Crush|Physical|Heat|Cold|Electric|Immaterial|Poison|SPD|CRIT\s+rate|CRIT\s+DMG|Accuracy|Evade|Evasion|HP|Max\s+HP|AP\s+Recovery|Intelligence|Strength|Technic|Vitality|Agility|Slash\s+DEF)\b/gi,
};

// Export sanitized highlighting patterns
export const matrothoHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const matrothoSEO = {
  title: 'Matrotho - Horizon Walker Character Guide',
  description:
    'Complete guide for Matrotho, an EX rarity Warrior character in Horizon Walker. Renowned Lamoran swordswoman known as the Windblade with high mobility and critical strikes.',
  keywords: [
    'Matrotho',
    'Horizon Walker',
    'EX rarity',
    'warrior',
    'swordswoman',
    'Windblade',
    'Lamoran',
    'slash damage',
    'high mobility',
    'critical striker',
    'counterattack',
    'target marking',
    'guide',
    'stats',
    'build',
  ],
};
