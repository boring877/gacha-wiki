// Nymset Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawNymsetData = {
  // Basic Character Information
  name: 'Nymset',
  image: 'Nymset', // Character image filename without extension
  rarity: 'S', // EX, SS, S, A, B
  cost: 4, // Deployment cost
  tags: [
    'Warrior Priest',
    'Support',
    'Healer',
    'Tank',
    'Crush Damage',
    'Immaterial Damage',
    'Aggro Control',
    'Area Control',
    'Buff Support',
    'Debuff',
    'Pathkeeper',
    'Divine Magic',
    'Goddess of the Split Twigs',
    'Consecrated Domain',
    'Human (Noctis Nebula)',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '12',
    technic: '6',
    intelligence: '12',
    vitality: '13',
    agility: '10',

    // Key Stats
    meleeAtk: '166',
    rangedAtk: '89',
    magicAtk: '166',
    maxHp: '832',
    spd: '123',
    startingAp: '117',
    apRecovery: '105',
    accuracy: '102',
    evade: '134',
    critRate: '10',
    critDmg: '150',

    // Attribute Boost
    slashBoost: '0',
    pierceBoost: '0',
    crushBoost: '30',
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
    immaterialDef: '40',
    poisonDef: '0',
    blockRate: '0',
  },

  // Character Description
  description:
    'A warrior priest known as "Pathkeeper" who protected refugees during the Rift Crisis. Now on Earth, she seeks marriage while acting overly haughty due to cultural misunderstandings.',

  // Character Profile
  profile: {
    age: '22',
    racial: 'Human (Noctis Nebula)',
    homeland: 'The Empire, Bethelburg',
    height: '160cm',
    birthday: 'March 8th',
    bwhRatio: '84(I)-52-91',
  },

  // Character Story
  story:
    'Nymset chose the path of a warrior priest to protect her friend, Bella. She gained considerable renown for safeguarding the Pilgrimage of the Martyrs, even earning the nickname "Pathkeeper." Later, during the Rift Crisis, she successfully protected refugees all the way to Earth, where they managed to resettle. The real issue began afterward. Having spent her time in Noctis Nebula in extreme isolation, Nymset came to Earth with a desire to find a husband and marry. She asked a senior priestess who had already married on Earth about how marriages worked here. The senior priestess, who had married on Earth, spoke to her about the concept of haughtiness. Taking this advice to heart, and perhaps believing in it a bit too much, Nymset began to act overly haughty, causing a minor stir. (Earthlings simply thought Nymset was not haughty, but rather just a rude priestess.)',

  // Unique Traits
  uniqueTraits: {
    pathkeeper: {
      name: 'Pathkeeper',
      description:
        'Activates the Level 1 passive skill [Pathkeeper]. [Pathkeeper]: Increases All DEF of all allies within a 5m circular range by 100 and SPD by 10.',
    },
    churchsSelfDefense: {
      name: "Church's Self-defense",
      description: 'Block Rate 18%, Crush Boost 30%, SPD 20%',
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
    guardiansStrike: {
      name: "Guardian's Strike",
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        "Swings a mace to attack the enemy. Deals Crush DMG equal to 114% of melee ATK and reduces the target's AP by 5.",
    },
    graceOfHealing: {
      name: 'Grace of Healing',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      description:
        'Prays to the Goddess of the Split Twigs with a devout heart for the healing of an ally. Recovers the HP of a designated ally by 190% of magic ATK.',
    },
    consecratedDomain: {
      name: 'Consecrated Domain',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 1,
      description:
        'Invokes the name of the Goddess of the Split Twigs to declare [Consecrated Domain]. [Consecrated Domain] lasts for 3 rounds and can maintain up to 1 at a time. If the caster is within the [Consecrated Domain], they gain the [Divine Strength] effect. [Divine Strength]: Increases own Aggro Adjustment and boosts melee and magic ATK by 24% of their base max HP.',
    },
    divineTongue: {
      name: 'Divine Tongue',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 3,
      damage: {
        type: 'Magic ATK',
        value: '114%',
      },
      description:
        "Pronounces an unavoidable judgment upon nearby enemies with a passage from the sacred scripture. Ignores counterattacks and deals Immaterial DMG equal to 114% of magic ATK to all enemies within a 4.5m circular radius, pulling them forcefully towards the caster's position. During this attack, ACC temporarily increases by 300%, but weakness attacks are not possible.",
    },
    remorse: {
      name: 'Remorse',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'At the start of the battle, applies the [Remorse] effect to all enemies. [Remorse]: Reduces all ATK by 19%.',
    },
  },

  // Weapon
  weapon: {
    name: 'EX Club & Shield - The Silver Bough',
    type: 'Club & Shield',
    rarity: 'EX',
    image: '/images/games/horizon-walker/weapons/Nymset_WP.jpg',
    stats: {
      weaponMeleeAtk: '70.0',
      weaponMagicAtk: '70.0',
      maxHpBonus: '+49.0%',
    },
    uniqueSkills: {
      mighty: {
        name: 'Mighty',
        type: 'Unique',
        description:
          'During battle, increases SPD by 32% and Aggro Adjustment by 40. If an enemy within 5m attacks you, temporarily decreases their All ATK by 58%.',
      },
      seraph: {
        name: 'Nymset Signature: Seraph',
        type: 'Character Signature',
        description:
          "During battle, increases the attack radius of the 'Divine Tongue' skill by 1m and reduces its cooldown by 1 Round.",
      },
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawNymsetData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const nymsetData = sanitizeCharacterData(rawNymsetData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Pathkeeper|Church's\s+Self-defense|Divine\s+Strength|Consecrated\s+Domain|Remorse|Mighty|Seraph|haughty|warrior\s+priest|pilgrimage\s+martyrs|rift\s+crisis|refugees|goddess\s+split\s+twigs|sacred\s+scripture|unavoidable\s+judgment)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Bella|Pilgrimage\s+of\s+the\s+Martyrs|Pathkeeper|Rift\s+Crisis|Noctis\s+Nebula|The\s+Empire|Bethelburg|Goddess\s+of\s+the\s+Split\s+Twigs|warrior\s+priest|haughty|priestess|marriage|husband|isolation|refugees|Earth|mace|healing|prayer|consecrated|domain|divine\s+strength|judgment|scripture|circular\s+radius|counterattacks)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|All\s+ATK|All\s+DEF|Crush|Pierce|Slash|Heat|Cold|Electric|Immaterial|Poison|SPD|CRIT\s+rate|CRIT\s+DMG|Accuracy|ACC|Evade|HP|Max\s+HP|AP\s+Recovery|Intelligence|Strength|Technic|Vitality|Agility|Block\s+Rate|Aggro\s+Adjustment|Crush\s+Boost)\b/gi,
};

// Export sanitized highlighting patterns
export const nymsetHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const nymsetSEO = {
  title: 'Nymset - Horizon Walker Character Guide',
  description:
    'Complete guide for Nymset, an S rarity Warrior Priest character in Horizon Walker. Known as "Pathkeeper" with healing, support, and divine magic abilities.',
  keywords: [
    'Nymset',
    'Horizon Walker',
    'S rarity',
    'warrior priest',
    'support',
    'healer',
    'pathkeeper',
    'divine magic',
    'crush damage',
    'immaterial damage',
    'consecrated domain',
    'goddess of the split twigs',
    'guide',
    'stats',
    'build',
  ],
};
