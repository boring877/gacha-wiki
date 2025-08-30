// Bella Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawBellaData = {
  // Basic Character Information
  name: 'Bella',
  image: 'Bella', // Character image filename without extension
  rarity: 'SS', // EX, SS, S, A, B
  cost: 4, // Deployment cost
  tags: [
    'Healer',
    'Support',
    'Magic User',
    'Melee Damage',
    'Crush Damage',
    'HP Recovery',
    'Team Buffer',
    'Revival',
    'AP Manipulation',
    'Church of Life Branch',
    'Human',
    'Defensive Support',
    'Max HP Boost',
    'Auto Healing',
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
    maxHp: '807',
    spd: '87',
    startingAp: '121',
    apRecovery: '105',
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
    heatDef: '30',
    coldDef: '30',
    electricDef: '30',
    immaterialDef: '70',
    poisonDef: '70',
    blockRate: '0',
  },

  // Character Description
  description:
    "An outstanding healer of the Church of the Life Branch who played a crucial role in Princess Maximilia's journey to Earth. Now serves as a Vanguard while spreading the influence of her divine patron.",

  // Character Profile
  profile: {
    age: '22',
    racial: 'Human (Noctis Nebula)',
    homeland: 'The Empire, Kaisersberg',
    height: '157cm',
    birthday: 'April 20th',
    bwhRatio: '84(F)-52-90',
  },

  // Character Story
  story:
    "Bella, who was an outstanding healer of the Church of the Life Branch, played a crucial role in paving the way for Princess Maximilia's journey to Earth. Even after arriving on Earth, Bella did not stop healing people. She obtained a nursing assistant license and used the power of the Life Branch to heal people at the hospital, earning respect far beyond her formal rank. Currently, she has enlisted as a Vanguard at the recommendation of Yeon Chae-young. Although her abilities are still needed in the hospital, she aims to spread the influence of the divine being she serves to more people, and to connect her divine patron, who has lost her foundation, with the Human Sovereign of this new world.",

  // Unique Traits
  uniqueTraits: {
    divinesBeloved: {
      name: "Divine's Beloved",
      description:
        "Activates the Level 1 passive skill [Divine's Beloved]. [Divine's Beloved]: Each time an ally recovers HP, self has a 30% chance to gain 20 AP.",
    },
    revivingBough: {
      name: 'Reviving Bough',
      description:
        'Activates the Level 3 passive skill [Sacred Healing]. [Sacred Healing]: At the start of the round, allies with a lower HP percentage than self recover HP equal to 12% of their Max HP.',
    },
    marlon: {
      name: 'Marlon',
      description: 'Strength 1, Technic 1, Intelligence 1',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the Chosen Human.',
    },
  },

  // Weapon Information
  weapon: {
    name: 'EX Club & Shield - Sacrament of Mercy',
    type: 'EX Club & Shield',
    rarity: 'EX',
    image: '/images/games/horizon-walker/weapons/Bella_WP.jpg',
    stats: {
      weaponMeleeAtk: '84.0',
      weaponMagicAtk: '84.0',
      magicAtkBonus: '+35.0%',
    },
    uniqueSkills: {
      prayerForGrace: {
        name: 'Prayer for Grace',
        type: 'Unique',
        description:
          'During combat increases Magic ATK by 40%, All DEF by 220, and reduces Aggro Adjustment by 24. At the start of battle, grants all allies the [Merciful Touch] effect. [Merciful Touch]: Increases Max HP by 55%. Does not restore current HP. This effect does not stack.',
      },
      devotionOfTheDivine: {
        name: 'Bella Signature: Devotion of the Divine',
        type: 'Signature',
        description:
          "During combat, increases SPD by 43% and Crush Boost by 86%. At the start of each round, gain 3 stacks of [Devoted Servant]. Gain 1 stack of [Guidance of the Divine] when using an active healing skill. [Devoted Servant]: When an ally takes damage and their HP falls below 68.7%, consumes 1 stack to follow up with 'Grace of Healing' on the in-range ally with the lowest HP%. [Guidance of the Divine]: Increases Melee ATK by 100% of base Magic ATK, and boosts Crit Rate by 25% and Crit DMG by 50%. Stacks up to 5 times. All stacks are removed upon a successful Basic ATK.",
      },
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
        'Prays to the Divine of the Split Twigs with a devout heart for the healing of an ally. Recovers the HP of a designated ally by 190% of magic ATK.',
    },
    lifeRegeneration: {
      name: 'Life Regeneration',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 2,
      description:
        'Offers a solemn prayer for the mercy of the Divine of Split Twigs. Recovers the HP of allies within a 2.5m circular range by 285% of magic ATK.',
    },
    revivingBoughSkill: {
      name: 'Reviving Bough',
      level: '10/10',
      type: 'Skill',
      apCost: 90,
      cooldown: 0,
      description:
        "Opens the path of the branches to invoke the divine's miracle. Restores consciousness to one incapacitated ally and recovers HP by 380% of magic ATK. The target resumes battle with AP set to 95.",
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawBellaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const bellaData = sanitizeCharacterData(rawBellaData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Divine's\s+Beloved|Sacred\s+Healing|Merciful\s+Touch|Devoted\s+Servant|Guidance\s+of\s+the\s+Divine|Prayer\s+for\s+Grace|Devotion\s+of\s+the\s+Divine|incapacitated|consciousness|solemn\s+prayer|devout\s+heart|miracle|divine's\s+miracle)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|gains?|grants?|recovers?|restores?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Church\s+of\s+the\s+Life\s+Branch|Divine\s+of\s+the\s+Split\s+Twigs|Princess\s+Maximilia|nursing\s+assistant\s+license|Vanguard|Human\s+Sovereign|Life\s+Branch|2\.5m\s+circular\s+range|in-range\s+ally|lowest\s+HP%|base\s+Magic\s+ATK|successful\s+Basic\s+ATK|Sacrament\s+of\s+Mercy|Noctis\s+Nebula|Kaisersberg)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Magic\s+ATK|Crush|Physical|Slash|Pierce|Heat|Cold|Electric|Immaterial|Poison|ACC|SPD|CRIT\s+rate|CRIT\s+Rate|CRIT\s+DMG|HP|Max\s+HP|All\s+DEF|Aggro\s+Adjustment|Weapon\s+Melee\s+ATK|Weapon\s+Magic\s+ATK|Crush\s+Boost)\b/gi,
};

// Export sanitized highlighting patterns
export const bellaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const bellaSEO = {
  title: 'Bella - Horizon Walker Character Guide',
  description:
    'Complete guide for Bella, an SS rarity Human Healer character in Horizon Walker. Outstanding healer from the Church of the Life Branch specializing in HP recovery, revival, and team support.',
  keywords: [
    'Bella',
    'Horizon Walker',
    'SS rarity',
    'healer',
    'human',
    'support',
    'magic user',
    'HP recovery',
    'revival',
    'team buffer',
    'Church of Life Branch',
    'EX club shield',
    'Sacrament of Mercy',
    'signature weapon',
    'guide',
    'stats',
    'build',
  ],
};
