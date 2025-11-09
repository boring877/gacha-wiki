// Kaul Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawKaulData = {
  // Basic Character Information
  name: 'Kaul',
  image: 'Kaul', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 4, // Deployment cost
  tags: [
    'Warrior',
    'Melee Damage',
    'Slash Damage',
    'Pierce Damage',
    'Area Damage',
    'High HP',
    'High Vitality',
    'Self-Healing',
    'Taunt',
    'Berserker',
    'Kesak',
    'Human',
    'Vanguard',
    'Sky Pirate',
    'Bel-Lamori',
    'Aggressive Stance',
    'HP Scaling',
    'Counterattack',
    'Critical Striker',
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
    meleeAtk: '127',
    rangedAtk: '85',
    magicAtk: '39',
    maxHp: '1664',
    spd: '117',
    startingAp: '131',
    apRecovery: '105',
    accuracy: '97',
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
    heatDef: '0',
    coldDef: '0',
    electricDef: '0',
    immaterialDef: '0',
    poisonDef: '0',
    blockRate: '0',
  },

  // Character Description
  description:
    "Once a feared Kesak Sky Pirate known across the stars, Kaul now serves as one of the Human God's Vanguards. A warrior driven by battle lust and the simple dream of saving her world while returning to her raiding glory days.",

  // Character Profile
  profile: {
    age: '28',
    racial: 'Human (Kesak)',
    homeland: 'Bel-Lamori',
    height: '178cm',
    birthday: 'September 25th',
    bwhRatio: '94(J)-53-106',
  },

  // Character Story
  story:
    "Once a warband warrior feared across the stars, Kaul of the Bel-Lamori was a name spoken in dread—a Kesak Sky Pirate with a trail of legendary pillages behind her. When the Rift Crisis struck, her fate was shrouded in rumor. Some claimed she slaughtered her own allies and vanished. Others said she died in the chaos of a world swallowed by rupture.\n\nBut the truth was stranger still. Kaul survived. And against all odds, she made it to Earth.\n\nHer arrival, of course, wasn't without incident. She clashed violently with the Bureau of Rift Management— but somehow, through fire, force, and sheer stubborn will, she was brought into the fold.\n\nNow serving as one of the Human God's Vanguards, Kaul holds onto a simple, almost innocent dream: to save what's left of her world... and one day, return to the glory days of raiding—this time, maybe with the Human God at her side.",

  // Unique Traits
  uniqueTraits: {
    unquenchedThirst: {
      name: 'Unquenched Thirst',
      description:
        "Activates the Level 1 passive skill [Unquenched Thirst]. [Unquenched Thirst]: Increases the user's Block Rate by 15%, and raises all DEF by 50 for each enemy within 6m (up to 4 enemies). When the shield is stowed the [Time to Feast] skill increases Melee ATK instead of all DEF by the same amount.",
    },
    insatiableDesire: {
      name: 'Insatiable Desire',
      description:
        'During battle, increases Melee ATK by 20% of base Melee ATK for every point of base Vitality exceeding 13.',
    },
    kesak: {
      name: 'Kesak',
      description: 'Intelligence -4, Vitality 7',
    },
    interested: {
      name: 'Interested',
      description: 'Bound by a deep and genuine bond that transcends all emotions.',
    },
  },

  // Weapon Information
  weapon: {
    name: 'EX Massively Vibrating Pole',
    type: 'One-handed Sword & Shield',
    rarity: 'EX',
    image: 'Kaul_WP.jpg',
    stats: {
      weaponMeleeAtk: '77.0',
      meleeAtkBonus: '+49.0%',
    },
    uniqueSkills: {
      resonanceOfBlood: {
        name: 'Resonance of Blood',
        type: 'Unique',
        description:
          'During battle, increases Melee ATK by 36% and all DEF by 180. When using a skill other than Standby, increases SPD by 32% for 2 rounds. Can stack up to 3 times.',
      },
      surgingDesire: {
        name: 'Kaul Signature: Surging Desire',
        type: 'Signature',
        description:
          "Increases Basic ATK DMG by 20% during battle. Reduces the AP cost of [Masochistic Frenzy] by 45. When activating [Slaughter the Weak] with HP at 99% or below, gains one instance of [Extra Action]. This effect cannot trigger during an Extra Action. When using [Reckless Leap], reduces DMG taken by 50% until the start of the user's next turn.",
      },
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
      description: 'Stabs with a sword to attack. Deals Pierce DMG equal to 114% of Melee ATK.',
      replacedBy: 'slaughterTheWeak',
    },
    recklessLeap: {
      name: 'Reckless Leap',
      level: '10/10',
      type: 'Skill',
      apCost: 75,
      cooldown: 2,
      damage: {
        type: 'Melee ATK',
        value: '238%',
      },
      description:
        "Leaps high into the air and strikes down at the designated location, dealing 238% of Melee ATK as Slash DMG to enemies within a 3m radius.\n\nReduces the user's Weak Point Angle by 120° until the start of their next turn. Enemies hit have a 76% chance to be inflicted with [Taunt] for 1 round.\n\n[Effect: Taunt] Inflicts Taunt on the target.",
    },
    timeToFeast: {
      name: 'Time to Feast',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "After using a skill other than Standby, increases All DEF by 100% of current SPD.\n\nThis effect lasts until the start of the user's next turn.",
    },
    masochisticFrenzy: {
      name: 'Masochistic Frenzy',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 2,
      description:
        'Lowers the shield and shifts into an aggressive stance.\n\nRestores HP equal to 100% of max HP and gains the [Seeker of Pleasure] effect, becoming driven solely by lust and destruction.\n\n[Effect: Seeker of Pleasure] Healing Intake and Block Rates are reduced by 100%, but Melee ATK increases by 100%.',
      replacedBy: 'irresistibleUrge',
    },
    slaughterTheWeak: {
      name: 'Slaughter the Weak',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '100%',
      },
      description:
        "Can only be used when HP is above 1%.\n\nSwings the blade in a wide, sweeping arc to strike nearby enemies.\n\nUpon use, takes Fixed DMG equal to the user's Shield value + 20% of Max HP, but HP cannot drop below 1 during this turn.\n\nDeals Slash DMG equal to 100% of the user's Melee ATK to enemies within a 3m, 75° cone in front.",
      replaces: 'gapStab',
      isReplacement: true,
    },
    irresistibleUrge: {
      name: 'Irresistible Urge',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 2,
      damage: {
        type: 'Melee ATK',
        value: '150%',
      },
      description:
        "Counts as a Basic Skill and can only be used when HP is 60% or below.\n\nTemporarily increases Critical Rate by 100% and boosts Crit DMG by 1.75% for every 1% HP lost.\n\nDeals Slash DMG equal to 150% of the user's Melee ATK to the target and Splash Slash DMG equal to 80% of the user's Melee ATK to nearby enemies.\n\nThis attack ignores counterattacks.\n\nAfter use, removes the [Seeker of Pleasure] effect and restores HP equal to 100% of Max HP.",
      replaces: 'masochisticFrenzy',
      isReplacement: true,
    },
    thrillOfAgony: {
      name: 'Thrill of Agony',
      level: '1/1',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "When 'Masochistic Frenzy' is used, and the [Seeker of Pleasure] effect is active, the skills 'Gap Stab' and 'Masochistic Frenzy' are replaced with 'Slaughter the Weak' and 'Irresistible Urge', respectively.\n\n[{Trigger Skill}: Masochistic Frenzy] Restoring HP becomes almost impossible and reduces Block Rate, but greatly boosts Melee ATK.",
      isReplacementTrigger: true,
      triggersReplacements: ['gapStab', 'masochisticFrenzy'],
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawKaulData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const kaulData = sanitizeCharacterData(rawKaulData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Unquenched\s+Thirst|Time\s+to\s+Feast|Seeker\s+of\s+Pleasure|Taunt|Extra\s+Action|Thrill\s+of\s+Agony|Resonance\s+of\s+Blood|Surging\s+Desire|aggressive\s+stance|shield\s+stowed|stealth|hidden|counterattack|unable\s+to\s+counterattack|berserker|healing\s+intake|block\s+rate|weak\s+point\s+angle|splash\s+damage)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|gains?|grants?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Kesak|Sky\s+Pirate|Bel-Lamori|Vanguard|Human\s+God|Bureau\s+of\s+Rift\s+Management|Rift\s+Crisis|warband|warrior|pirate|pillages|3m\s+radius|75°\s+cone|Massively\s+Vibrating\s+Pole|One-handed\s+Sword\s+&\s+Shield|Basic\s+ATK|Basic\s+Skill|Extra\s+Action|Fixed\s+DMG|Splash\s+Slash\s+DMG)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|Pierce|Slash|Physical|All\s+DEF|Shield|Max\s+HP|SPD|ACC|Evade|CRIT\s+rate|CRIT\s+DMG|Healing\s+Intake|Block\s+Rate|Weak\s+Point\s+Angle|Weapon\s+Melee\s+ATK|critical\s+damage)\b/gi,
};

// Export sanitized highlighting patterns
export const kaulHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const kaulSEO = {
  title: 'Kaul - Horizon Walker Character Guide',
  description:
    'Complete guide for Kaul, an EX rarity Human Warrior character in Horizon Walker. Former Kesak Sky Pirate turned Vanguard, specializing in aggressive melee combat and berserker tactics.',
  keywords: [
    'Kaul',
    'Horizon Walker',
    'EX rarity',
    'warrior',
    'human',
    'kesak',
    'sky pirate',
    'melee damage',
    'slash damage',
    'pierce damage',
    'area damage',
    'berserker',
    'high HP',
    'high vitality',
    'self-healing',
    'taunt',
    'aggressive stance',
    'HP scaling',
    'counterattack',
    'critical striker',
    'EX Massively Vibrating Pole',
    'signature weapon',
    'guide',
    'stats',
    'build',
  ],
};
