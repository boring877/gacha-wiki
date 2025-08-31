// Nika Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawNikaData = {
  // Basic Character Information
  name: 'Nika',
  image: 'Nika', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 4, // Deployment cost
  tags: [
    'Assassin',
    'Melee DPS',
    'Pierce Damage',
    'Poison Damage',
    'DoT',
    'Stealth',
    'High Mobility',
    'Debuffer',
    'Shadow Steps',
    'Catsidhe',
    "Petal's Shadow",
    'Valo Lana',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '14',
    technic: '10',
    intelligence: '6',
    vitality: '9',
    agility: '19',

    // Key Stats
    meleeAtk: '179',
    rangedAtk: '128',
    magicAtk: '76',
    maxHp: '576',
    spd: '123',
    startingAp: '140',
    apRecovery: '132',
    accuracy: '109',
    evade: '268',
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
    immaterialDef: '-100',
    poisonDef: '0',
    blockRate: '0',
  },

  // Character Description
  description:
    'A skilled Catsidhe assassin known as "Petal\'s Shadow" from Valo Lana, specializing in poison-based attacks and stealth operations.',

  // Character Profile
  profile: {
    age: '23',
    racial: 'Catsidhe',
    homeland: 'Ere, Square Path',
    height: '158cm',
    birthday: 'April 2nd',
    bwhRatio: '81(G)-49-90',
  },

  // Character Story
  story:
    'Like many Catsidhe, Nika chose the path of a professional assassin under "Valo Lana." As an honorable member of Valo Lana, she assassinated quite a few villains, earning herself the nickname "Petal\'s Shadow" for her distinctive petal-shaped blade. After the Rift Crisis, Valo Lana fortunately discovered an underground Rift and, despite heavy sacrifices, managed to migrate to Earth through it. However, with assassination being illegal on Earth, Nika quickly found herself without purpose and fell into despair. Introverted and timid, she spent much of her time confined to the house assigned to Valo Lana, with her self-esteem inevitably plummeting. The news of the Bureau of Rift Management recruiting Vanguards offered her a new sense of purpose. As an expert in assassination, the chance to continue her work meant that she could regain her confidence.',

  // Unique Traits
  uniqueTraits: {
    dirtyPairMarhim: {
      name: 'Dirty Pair • Marhim',
      description:
        "Activates the Level 1 passive skill [Dirty Pair • Marhim]. [Dirty Pair • Marhim]: When Marhim attacks, supports with the 'Dirty Pair • Dagger Throw' skill. Gains [Shadow Step] effect for 1 round afterwards. Dirty Pair • Dagger Throw: Throws a dagger at an enemy within 7m, dealing Pierce DMG equal to 70% of Melee ATK.",
    },
    lackOfPresence: {
      name: 'Lack of Presence',
      description:
        'Activates the Level 1 passive skill [Lack of Presence]. [Lack of Presence]: If there are no enemies within 3m, gains the [Shadow Step] effect for 2 rounds.',
    },
    catsidhe: {
      name: 'Catsidhe',
      description: 'Agility 2',
    },
    interested: {
      name: 'Interested',
      description: 'Special trait with no listed characteristics.',
    },
  },

  // Skills and Passive
  skills: {
    catAttack: {
      name: 'Cat Attack',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        'After attacking the designated enemy, leaps low backward to move 4m away from the target. Deals Pierce DMG equal to 114% of melee ATK.',
    },
    shadowStep: {
      name: 'Shadow Step',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "If not under the Stealth effect at the end of the turn and there are no enemies within a 5m radius, gains the [Shadow Steps] effect for 1R. At the start of own turn, if under the Stealth effect, gains the [Shining Steps from the Shadows] effect. While in Stealth, can perform a support attack using the 'Dirty Pair • Dagger Throw' skill. [Shadow Steps]: Enters Stealth, preventing the user from becoming a target of enemy skills. [Shining Steps from the Shadows]: Increases SPD by 57. This effect is removed at the end of the turn.",
    },
    poisonArrow: {
      name: 'Poison Arrow',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 2,
      damage: {
        type: 'Melee ATK',
        value: '57%',
      },
      description:
        "Throws a poison-soaked special arrow. Deals Pierce DMG equal to 57% of melee ATK and applies the [Necrotoxin] effect, accumulating stacks equal to 133% of ACC. [Necrotoxin]: Increases accumulation based on the caster's Poison Boost when applied. At the start of the caster's round, inflicts Poison DMG equal to the accumulated [Necrotoxin] stacks. [Necrotoxin] can stack up to 6 times.",
    },
    lethalPoison: {
      name: 'Lethal Poison',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 3,
      damage: {
        type: 'Melee ATK',
        value: '57%',
      },
      description:
        "Targets an enemy affected by the [Necrotoxin] effect and attacks with a dagger infused with potent reactive poison. Deals Pierce DMG equal to 57% of melee ATK and inflicts additional Poison DMG equal to 3.9 times the target's [Necrotoxin] stacks. If the enemy is defeated, applies 2 stacks of [Necrotoxin] to all enemies affected by [Poison Accumulation], accumulating 266% of ACC in total. [Necrotoxin]: Accumulation increases based on the caster's Poison Boost when applied. At the start of the caster's round, inflicts additional Poison DMG equal to the accumulated [Necrotoxin] stacks. [Necrotoxin] can stack up to 6 times.",
    },
    poisonAccumulation: {
      name: 'Poison Accumulation',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'At the start of any turn and upon activation of any of own skills, reduces Poison DEF of all enemies within a 5m radius by 200 until the end of the turn.',
    },
  },

  // Weapon
  weapon: {
    name: 'EX Twin Swords - The Ninth Bite',
    type: 'Twin Swords',
    rarity: 'EX',
    image: '/images/games/horizon-walker/weapons/Nika_WP.jpg',
    stats: {
      weaponMeleeAtk: '77.0',
      accuracyBonus: '+98.0%',
    },
    uniqueSkills: {
      deathSentence: {
        name: 'Death Sentence',
        type: 'Unique',
        description:
          'Increases Poison Boost by 80%. On successful attack, deals additional Poison DMG equal to 120% of ACC.',
      },
      venomousFragrance: {
        name: 'Nika Signature: Venomous Fragrance',
        type: 'Character Signature',
        description:
          'At the start of any turn and when casting own skill, intoxicates enemies within 5m range. If a target under the [Necrotoxin] effect ends their turn, deals additional Poison DMG equal to 20% of the accumulated [Necrotoxin].',
      },
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawNikaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const nikaData = sanitizeCharacterData(rawNikaData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Dirty\s+Pair|Lack\s+of\s+Presence|Shadow\s+Steps|Shining\s+Steps\s+from\s+the\s+Shadows|Necrotoxin|Poison\s+Accumulation|Death\s+Sentence|Venomous\s+Fragrance|stealth|poison-soaked|potent\s+reactive\s+poison)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Valo\s+Lana|Petal's\s+Shadow|Catsidhe|Rift\s+Crisis|Bureau\s+of\s+Rift\s+Management|Vanguards|Ere|Square\s+Path|professional\s+assassin|petal-shaped\s+blade|underground\s+Rift|introverted|timid|self-esteem|villains|heavy\s+sacrifices|intoxicates|accumulating\s+stacks)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|Pierce|Slash|Crush|Physical|Heat|Cold|Electric|Immaterial|Poison|SPD|CRIT\s+rate|CRIT\s+DMG|Accuracy|Evade|HP|Max\s+HP|AP\s+Recovery|Intelligence|Strength|Technic|Vitality|Agility|Poison\s+DEF|Poison\s+Boost|ACC)\b/gi,
};

// Export sanitized highlighting patterns
export const nikaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const nikaSEO = {
  title: 'Nika - Horizon Walker Character Guide',
  description:
    'Complete guide for Nika, an EX rarity Assassin character in Horizon Walker. Skilled Catsidhe assassin specializing in poison damage, stealth, and DoT effects.',
  keywords: [
    'Nika',
    'Horizon Walker',
    'EX rarity',
    'assassin',
    'catsidhe',
    'poison damage',
    'DoT',
    'stealth',
    'pierce damage',
    "Petal's Shadow",
    'Valo Lana',
    'necrotoxin',
    'guide',
    'stats',
    'build',
  ],
};
