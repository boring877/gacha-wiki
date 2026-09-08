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
    strength: '7',
    technic: '13',
    intelligence: '7',
    vitality: '12',
    agility: '16',

    // Key Stats
    meleeAtk: '102',
    rangedAtk: '179',
    magicAtk: '102',
    maxHp: '768',
    spd: '133',
    startingAp: '126',
    apRecovery: '120',
    accuracy: '102',
    evade: '204',
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
      description: 'Interested in the Chosen Human. Unlocks at Gift Affection Level 5: becomes active after reaching 2,000 affection points through gift-giving.',
    },
  },

  // Weapon Information
  weapon: {
    name: "Vengeful Thornblade",
    flavor: "The countless thorns lining this razor-sharp blade are a testament to pain - the inescapable truth of battle. For the knight-nuns who walk the battlefield, pain is not a metaphor but a lived reality, a crucible through which they grow. Yet from pain, something is always gained. The greater the suffering endured on the frontlines, the more this cruel yet beautiful sword grants its wielder strength… and sanctuary.",
    type: "One-handed sword",
    rarity: 'EX',
    image: "Weapon_FullIMG_OneHandSword_ForLisandria",
    imageOnR2: true,
    maxLevel: 60,
    stats: {
      "Melee ATK (weapon)": "70",
      "Magic ATK (weapon)": "70",
      "Melee ATK (%)": "+49%",
    },
    uniqueSkills: {
      unique: {
        name: "Bloomed by Revelation",
        type: 'Unique',
        description: "During battle, Melee ATK increases by {20,25,30,35,40}% and Aggro Adjustment increases by {12,15,18,21,24}. During the weapon holder's turn, Support Attack DMG of allies other than self increases by {40,50,60,70,80}%.",
      },
      signature: {
        name: "Lisandria Signature: Vow Beneath the Thorned Bloom",
        type: 'Signature',
        description: "During battle, AP cost of Basic Attacks decreases by 16%. Using \"Sword of the Unknown\" grants 60 AP and reduces its cooldown by 1R. Using Blood Judgment grants [Penance]. [Penance]: If current HP is 50% or higher, gains 1 [Salvation] at the end of any turn and Additional DMG Boost increases by 10%. At the end of the effect holder's turn, these effects are doubled. This Additional DMG Boost can stack up to 20 times. If [Salvation] is not possessed, [Penance] and all Additional DMG Boost gained from this effect are removed.",
      },
    },
    levelStats: {
      "Melee ATK (weapon)": [11.0, 70.0],
      "Magic ATK (weapon)": [11.0, 70.0],
      "Melee ATK (%)": [7.7, 49.0],
    },
    exLevels: {
      effects: [
        { name: "During battle, Melee ATK increases", valuesByLevel: "20% / 25% / 30% / 35% / 40%" },
        { name: "% and Aggro Adjustment increases", valuesByLevel: "12 / 15 / 18 / 21 / 24" },
        { name: "During the weapon holder's turn, Support Attack DMG of allies other than self increases", valuesByLevel: "40% / 50% / 60% / 70% / 80%" },
      ],
    },
  },

  // Skills and Passive
  skills: {
    spinningSlash: {
      gameKey: 'MoulinetAndCut',
      icon: 'UI_SkillIcon_OneHandedSword_BA',
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
      gameKey: 'LightInTheDarkness',
      icon: 'UI_SkillIcon_LightInTheDarkness',
      name: 'Light in the Darkness',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'On each attack, recovers HP of self and allies within a 5m radius by 95% of magic ATK.',
    },
    swordOfTheUnknown: {
      gameKey: 'SwordOfUnknown',
      icon: 'UI_SkillIcon_SwordOfUnknown',
      name: 'Sword of the Unknown',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 3,
      description:
        'Channels divine power into the sword through prayer. Grants self a shield effect equal to 380% of magic ATK for 3R and the [Sword of the Unknown] effect. [Sword of the Unknown]: Basic attacks additionally deal Immaterial DMG equal to 95% of melee ATK.',
    },
    exorcistsCrusade: {
      gameKey: 'HolyWarOfExorcism',
      icon: 'UI_SkillIcon_HolyWarOfExorcism',
      name: "Exorcist's Crusade",
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'On a successful attack, gains [Salvation] and [Judgment] effects. [Salvation]: Increases own magic ATK by 19%. Stacks up to 9 times. [Judgment]: Increases own melee ATK by 19%. Stacks up to 9 times.',
    },
    bloodJudgment: {
      gameKey: 'BloodJudgment',
      icon: 'UI_SkillIcon_BloodJudgment',
      name: 'Blood Judgment',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 2,
      description:
        'Creates a [Blood Judgment] area on the battlefield. At the end of any turn, deals additional Immaterial DMG equal to 76% of melee ATK to all enemies within the area and loses 1 stack of [Salvation] effect. As long as the user possesses the [Salvation] effect, this continues to activate repeatedly. If the [Salvation] effect is no longer possessed, the [Blood Judgment] area dissipates.',
    },
  },
  rarityStages: {
    'EX': {
      strength: 7,
      technic: 9,
      intelligence: 7,
      vitality: 12,
      agility: 14,
      maxHp: 768,
      meleeAtk: 102,
      rangedAtk: 128,
      magicAtk: 102,
      evade: 179,
      apRecovery: 115,
      startingAp: 121
    },
    'EX 1': {
      strength: 7,
      technic: 10,
      intelligence: 7,
      vitality: 12,
      agility: 14,
      maxHp: 768,
      meleeAtk: 102,
      rangedAtk: 140,
      magicAtk: 102,
      evade: 179,
      apRecovery: 115,
      startingAp: 121
    },
    'EX 2': {
      strength: 7,
      technic: 11,
      intelligence: 7,
      vitality: 12,
      agility: 14,
      maxHp: 768,
      meleeAtk: 102,
      rangedAtk: 153,
      magicAtk: 102,
      evade: 179,
      apRecovery: 115,
      startingAp: 121
    },
    'EX 3': {
      strength: 7,
      technic: 11,
      intelligence: 7,
      vitality: 12,
      agility: 15,
      maxHp: 768,
      meleeAtk: 102,
      rangedAtk: 153,
      magicAtk: 102,
      evade: 192,
      apRecovery: 117,
      startingAp: 123
    },
    'EX 4': {
      strength: 7,
      technic: 12,
      intelligence: 7,
      vitality: 12,
      agility: 15,
      maxHp: 768,
      meleeAtk: 102,
      rangedAtk: 166,
      magicAtk: 102,
      evade: 192,
      apRecovery: 117,
      startingAp: 123
    },
    'EX 5': {
      strength: 7,
      technic: 12,
      intelligence: 7,
      vitality: 12,
      agility: 16,
      maxHp: 768,
      meleeAtk: 102,
      rangedAtk: 166,
      magicAtk: 102,
      evade: 204,
      apRecovery: 120,
      startingAp: 126
    },
    'EX 6': {
      strength: 7,
      technic: 13,
      intelligence: 7,
      vitality: 12,
      agility: 16,
      maxHp: 768,
      meleeAtk: 102,
      rangedAtk: 179,
      magicAtk: 102,
      evade: 204,
      apRecovery: 120,
      startingAp: 126
    },
  },
  heroId: 20,

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
