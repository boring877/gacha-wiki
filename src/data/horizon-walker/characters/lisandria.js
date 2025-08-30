// Lisandria Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawLisandriaData = {
  // Basic Character Information
  name: 'Lisandria',
  image: 'Lisandria', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 4, // Deployment cost
  tags: [
    'Knight Nun',
    'Swordswoman',
    'Melee Damage',
    'Magic User',
    'Slash Damage',
    'Immaterial Damage',
    'Healing',
    'Shield Provider',
    'Area Damage',
    'Counterattack',
    'Vengeance',
    'Human',
    'High Evasion',
    'Stacking Buffs',
    'Zone Control',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '11',
    technic: '7',
    intelligence: '11',
    vitality: '12',
    agility: '14',

    // Key Stats
    meleeAtk: '153',
    rangedAtk: '102',
    magicAtk: '153',
    maxHp: '768',
    spd: '133',
    startingAp: '121',
    apRecovery: '115',
    accuracy: '102',
    evade: '179',
    critRate: '10',
    critDmg: '158',

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
    immaterialDef: '40',
    poisonDef: '40',
    blockRate: '0',
  },

  // Character Description
  description:
    'A renowned swordswoman who lost her sight to the abominations of the Rift, but gained extraordinary senses through a pact. Now serves as a knight nun dedicated to protecting others and seeking vengeance.',

  // Character Profile
  profile: {
    age: '29',
    racial: 'Human (Noctis Nebula)',
    homeland: 'The Empire, Bethelburg',
    height: '168cm',
    birthday: 'January 7th',
    bwhRatio: '91(J)-50-98',
  },

  // Character Story
  story:
    'Once a renowned swordswoman alongside her friend, Lisandria lost her lifelong companion to the abominations of the Rift during the Rift Crisis, and she herself suffered a grievous injury that took her sight. Taken in by the nuns of Hirinna and her sword, Lisandria spent her days drowning in despair at the convent until she heard a voice promising her power in exchange for her soul upon death. Overwhelmed by her hopelessness, she agreed to the offer, gaining extraordinary senses to replace her lost vision. Afterwards, Lisandria became a knight nun, dedicating herself to protecting the convent and fighting the abominations. Following her battles against the horrors of the Rift, she arrived on Earth, where her thirst for vengeance remains unquenched. She believes that becoming a Vanguard of the Human Sovereign will provide her the greatest opportunity to slaughter more of these abominations, and she has applied to join as a Vanguard.',

  // Unique Traits
  uniqueTraits: {
    judgmentOfVengeance: {
      name: 'Judgment of Vengeance',
      description:
        'Activates the Level 1 passive skill [Judgment of Vengeance]. [Judgment of Vengeance]: Evasion decreases by 15%. On Counterattack, Melee ATK increases by 100%.',
    },
    enthusiast: {
      name: 'Enthusiast',
      description:
        'Activates the Level 3 passive skill [Faith of Salvation]. [Faith of Salvation]: On successful attack, has a 48% chance to gain an additional [Salvation] stack.',
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
    name: 'EX One-handed sword - Vengeful Thornblade',
    type: 'EX One-handed Sword',
    rarity: 'EX',
    image: '/images/games/horizon-walker/weapons/Lisandria_WP.jpg',
    stats: {
      weaponMeleeAtk: '70.0',
      weaponMagicAtk: '70.0',
      magicAtkBonus: '+49.0%',
    },
    uniqueSkills: {
      bloomedByRevelation: {
        name: 'Bloomed by Revelation',
        type: 'Unique',
        description:
          "During combat, increases Magic ATK by 40% and Aggro Adjustment by 24. During your turn, increases allies' Support ATK DMG (excluding yourself) by 80%.",
      },
      vowBeneathThornedBloom: {
        name: 'Lisandria Signature: Vow Beneath the Thorned Bloom',
        type: 'Signature',
        description:
          'During combat, reduces Healing Output by 40% and decreases AP cost of Basic ATK by 16%. Grants the [Shatterbloom] effect. When using the skill "Sword of the Unknown", gain 60 AP and reduce its cooldown by 1R. [Shatterbloom]: Within the [Blood Judgment] zone, Additional Immaterial DMG increases by 1.5% for every 1 AP consumed during your turn, stacking gradually. Additional Immaterial DMG can increase up to a maximum of 640%. The effect resets upon becoming incapacitated.',
      },
    },
  },

  // Skills and Passive
  skills: {
    spinningSlash: {
      name: 'Spinning Slash',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        'Swings the sabre to attack the enemy. Deals Slash DMG equal to 114% of melee ATK.',
    },
    lightInTheDarkness: {
      name: 'Light in the Darkness',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'On each attack, recovers HP of self and allies within a 5m radius by 95% of magic ATK.',
    },
    swordOfTheUnknown: {
      name: 'Sword of the Unknown',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 3,
      description:
        'Channels divine power into the sword through prayer. Grants self a shield effect equal to 380% of magic ATK for 3R and the [Sword of the Unknown] effect. [Sword of the Unknown]: Basic attacks additionally deal Immaterial DMG equal to 95% of melee ATK.',
    },
    exorcistsCrusade: {
      name: "Exorcist's Crusade",
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'On a successful attack, gains [Salvation] and [Judgment] effects. [Salvation]: Increases own magic ATK by 19%. Stacks up to 9 times. [Judgment]: Increases own melee ATK by 19%. Stacks up to 9 times.',
    },
    bloodJudgment: {
      name: 'Blood Judgment',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 2,
      description:
        'Creates a [Blood Judgment] area on the battlefield. At the end of any turn, deals additional Immaterial DMG equal to 76% of melee ATK to all enemies within the area and loses 1 stack of [Salvation] effect. As long as the user possesses the [Salvation] effect, this continues to activate repeatedly. If the [Salvation] effect is no longer possessed, the [Blood Judgment] area dissipates.',
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawLisandriaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const lisandriaData = sanitizeCharacterData(rawLisandriaData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Judgment\s+of\s+Vengeance|Faith\s+of\s+Salvation|Salvation|Judgment|Sword\s+of\s+the\s+Unknown|Blood\s+Judgment|Shatterbloom|Bloomed\s+by\s+Revelation|Vow\s+Beneath\s+the\s+Thorned\s+Bloom|shield\s+effect|divine\s+power|extraordinary\s+senses|grievous\s+injury|lifelong\s+companion|knight\s+nun)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|gains?|grants?|recovers?|channels?|creates?|deals?|loses?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:abominations\s+of\s+the\s+Rift|Rift\s+Crisis|nuns\s+of\s+Hirinna|knight\s+nun|convent|Vanguard\s+of\s+the\s+Human\s+God|thirst\s+for\s+vengeance|lost\s+vision|soul\s+upon\s+death|extraordinary\s+senses|5m\s+radius|Basic\s+ATK|Support\s+ATK\s+DMG|Healing\s+Output|Additional\s+Immaterial\s+DMG|Vengeful\s+Thornblade|Bethelburg|Noctis\s+Nebula)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Magic\s+ATK|Slash|Immaterial|Physical|Pierce|Crush|Heat|Cold|Electric|Poison|ACC|SPD|CRIT\s+rate|CRIT\s+DMG|HP|Evasion|Aggro\s+Adjustment|Weapon\s+Melee\s+ATK|Weapon\s+Magic\s+ATK|Healing\s+Output|counterattack)\b/gi,
};

// Export sanitized highlighting patterns
export const lisandriaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const lisandriaSEO = {
  title: 'Lisandria - Horizon Walker Character Guide',
  description:
    'Complete guide for Lisandria, an EX rarity Human Knight Nun character in Horizon Walker. Blind swordswoman seeking vengeance, specializing in healing, zone control, and stacking damage buffs.',
  keywords: [
    'Lisandria',
    'Horizon Walker',
    'EX rarity',
    'knight nun',
    'swordswoman',
    'human',
    'melee damage',
    'slash damage',
    'immaterial damage',
    'healing',
    'vengeance',
    'zone control',
    'EX sword',
    'Vengeful Thornblade',
    'signature weapon',
    'guide',
    'stats',
    'build',
  ],
};
