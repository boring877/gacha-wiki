// Yeonwoo Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawYeonwooData = {
  // Basic Character Information
  name: 'Yeonwoo',
  image: 'Yeonwoo', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 6, // Deployment cost
  tags: [
    'Tank',
    'Bruiser',
    'Human (Earth)',
    'Crush Damage',
    'Self-Sustain',
    'HP Recovery',
    'Gluttony',
    'Apostle of Gluttony',
    'Area Damage',
    'Transform',
    'High HP',
    'Mukbang Streamer',
    'Neo Seoul',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '4',
    technic: '9',
    intelligence: '9',
    vitality: '19',
    agility: '8',

    // Key Stats
    meleeAtk: '51',
    rangedAtk: '115',
    magicAtk: '64',
    maxHp: '1582',
    spd: '92',
    startingAp: '162',
    apRecovery: '104',
    accuracy: '102',
    evade: '102',
    critRate: '10',
    critDmg: '165',

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
    'A mukbang streamer from Neo Seoul who lost her family during the Rift crisis and awakens as an Apostle of Gluttony with immense appetite-based powers.',

  // Character Profile
  profile: {
    age: '20',
    racial: 'Human (Earth)',
    homeland: 'East Asian Federation, Seoul',
    height: '151cm',
    birthday: 'October 22nd',
    bwhRatio: '90(J)-49-90 / 103(K)-61-105',
  },

  // Character Story
  story:
    "Born in an ordinary family in Neo Seoul, Yeonwoo lost her family during the Rift crisis that struck downtown Seoul in her childhood. Afterwards, she was raised by her grandmother. Though her noticeable appetite led to bullying at school, her grandmother's warm care allowed her to safely finish her school years. Following her grandmother's passing, Yeonwoo returned to Neo Seoul, as per her final wish, but ended up spending most of the inheritance she received. To cover her tuition, Yeonwoo began livestreaming mukbangs, drawing from the praise she had once received from adults for her hearty appetite. However, after accepting a suspicious invitation and falling asleep, Yeonwoo's life enters a new phase—when she awakens to meet the Human God.",

  // Unique Traits
  uniqueTraits: {
    theUnrestrained: {
      name: 'The Unrestrained',
      description:
        'Activates Level 1 Passive Skill: [Stretchy Stomach]. [Stretchy Stomach]: At the start of combat, Max HP increases by 15%. When affected by a healing effect, the cooldown of Leaping Chomp is reduced by 1 round.',
    },
    gluttonyAndTheDemons: {
      name: "Gluttony and the Demon's",
      description:
        'Weak Spot Hit Multiplier: -25%, Intelligence -4, Vitality 5. Activates Level 1 Passive Skill: [Rapid-Fire Food Fight]. [Rapid-Fire Food Fight]: If HP is 85% or higher at the end of any turn while [True Gourmand] is active, gain AP equal to 51% of base AP recovery.',
    },
    human: {
      name: 'Human',
      description: 'Technic 1, AP Recovery 4%',
    },
    interested: {
      name: 'Interested',
      description: 'Special trait with no listed characteristics.',
    },
  },

  // Skills and Passive
  skills: {
    gluttonsMight: {
      name: "Glutton's Might",
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '63%',
      },
      description:
        "Attacks with the Glutton's Might. Deals Crush DMG equal to 63% of Magic ATK and restores HP as HP Recovery equal to 10% of Max HP.",
    },
    snackTime: {
      name: 'Snack Time',
      level: '1/1',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "When receiving HP Recovery, if [Gluttony] is not at max stacks, gain [Room for Snacks]. Munch O'Clock: Takes something out and digs in. Gain 1~2 stacks of [Gluttony]. This skill counts as a basic skill.",
    },
    leapingChomp: {
      name: 'Leaping Chomp',
      level: '10/10',
      type: 'Skill',
      apCost: 75,
      cooldown: 2,
      damage: {
        type: 'Magic ATK',
        value: '209%',
      },
      description:
        'Leaps up and lands at target location, dealing Crush DMG equal to 209% of Magic ATK to enemies within a 3m circular radius.',
    },
    allFueledUp: {
      name: 'All Fueled Up!',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Boosts strength through great digestion. Increases Healing Intake by 20% during battle. Gains 1 stack of [Potential Calories] at turn end after receiving HP Recovery or using a combat skill.',
    },
    oneForTheRoad: {
      name: 'One for the Road?',
      level: '10/10',
      type: 'Skill',
      apCost: 15,
      cooldown: 1,
      description:
        'Devours a hearty meal to restore the power of Gluttony. Recovers HP equal to 60% of missing HP and gains 4 stacks of [Gluttony]. While under the [True Gourmand] effect from Avatar of Gluttony, this skill transforms into Boom Boom Slam!! and its cooldown is reset. Shares a cooldown with Boom Boom Slam!!',
    },
    boomBoomSlam: {
      name: 'Boom Boom Slam!!',
      level: 'Transform',
      type: 'Transform Skill',
      apCost: 15,
      cooldown: 1,
      damage: {
        type: 'Magic ATK',
        value: '293%',
      },
      description:
        "Slams the ground wildly with your fist. Deals Crush DMG equal to 293% of Magic ATK to a designated target, and Splash Crush DMG equal to 230% of Magic ATK to enemies within a 4m radius. On a successful hit, the skill's cooldown is reset. Shares a cooldown with One for the Road?",
    },
    avatarOfGluttony: {
      name: 'Avatar of Gluttony',
      level: '10/10',
      type: 'Skill',
      apCost: 15,
      cooldown: 0,
      description:
        'Can only be used when holding 8 or more stacks of [Gluttony]. Draws upon the full power of Gluttony to assume a "form befitting an Apostle of Gluttony." Grants the [True Gourmand] effect and restores 15 AP. While this effect is active, the skill is replaced with Yum-Yummy Beam!! While [True Gourmand] is active, using any skill causes you to take Fixed DMG from the [Pact • Nutrition – Gluttony Conversion] effect. After 2 rounds (including the turn this skill is used), all skills except Yum-Yummy Beam!! become unavailable on your turn.',
    },
    yumYummyBeam: {
      name: 'Yum-Yummy Beam!!',
      level: 'Ultimate',
      type: 'Transform Skill',
      apCost: 0,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '230%',
      },
      description:
        "While affected by [True Gourmand • Skill Lock], only this skill can be used. Channels the power of Gluttony into a devastating burst. Deals Crush DMG equal to 230% of Magic ATK to all enemies in a 90° cone within 6m. This skill does not trigger [Pact • Nutrition – Gluttony Conversion]'s Fixed DMG effect. If used without [True Gourmand • Skill Lock], the transformed Avatar of Gluttony skill will incur a 1-round cooldown after use. Upon attack, Combat Skill DMG is increased by 140%, and for each point of Vitality over 18, Crit DMG increases by 24%. These effects last until the end of the turn. After the attack [True Gourmand] ends, HP is fully restored, and all stacks of [Gluttony] and [Potential Calories] are reset.",
    },
  },

  // Effects descriptions
  effects: {
    gluttony: {
      name: 'Gluttony',
      description: "Stacks up to 8 times as a base effect of the Glutton's skills.",
    },
    roomForSnacks: {
      name: 'Room for Snacks',
      description:
        "Triggers an additional response using the Munch O'Clock skill. This effect ends at the end of the turn.",
    },
    trueGourmand: {
      name: 'True Gourmand',
      description:
        'At the start of your turn, Magic ATK increases by 40% of Max HP and lasts until the end of the turn.',
    },
    pactNutritionGluttonyConversion: {
      name: 'Pact • Nutrition – Gluttony Conversion',
      description:
        "Burns through nutrition to sustain Gluttony's hunger. Takes Fixed DMG equal to current shield value plus 32% of current HP.",
    },
    trueGourmandSkillLock: {
      name: 'True Gourmand • Skill Lock',
      description: "All skills except the 'Yum-Yummy Beam!! skill become unavailable.",
    },
    potentialCalories: {
      name: 'Potential Calories',
      description: 'Magic ATK increases in proportion to base Max HP. Stacks up to 3 times.',
    },
  },

  // Weapon
  weapon: {
    name: 'EX Mana Shard - Endless Burger',
    type: 'Mana Shard',
    rarity: 'EX',
    image: '/images/games/horizon-walker/weapons/Yeonwoo_WP.jpg',
    stats: {
      weaponMagicAtk: '77.0',
      critRateBonus: '+49.0%',
    },
    uniqueSkills: {
      munchMunchAgain: {
        name: 'Munch Munch Again',
        type: 'Unique',
        description:
          'Increases Critical Rate by 24% and Critical DMG by 32% during battle. When receiving an HP Recovery effect, gains the [Gained Weight] effect for 1 round. [Gained Weight]: Increases Crush Boost by 80%.',
      },
      everythingsTastyAndHappy: {
        name: "Yeonwoo Signature: Everything's Tasty And Happy",
        type: 'Yeonwoo Signature',
        description:
          "If Munch O'Clock grants only 1 stack of [Gluttony], gain 1 additional stack. When gaining AP at the end of any turn via the Rapid-Fire Food Fight effect, gain an additional 50% of that AP.",
      },
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawYeonwooData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const yeonwooData = sanitizeCharacterData(rawYeonwooData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:The\s+Unrestrained|Stretchy\s+Stomach|Gluttony\s+and\s+the\s+Demon's|Rapid-Fire\s+Food\s+Fight|Human|Gluttony|Room\s+for\s+Snacks|True\s+Gourmand|Pact\s+•\s+Nutrition\s+–\s+Gluttony\s+Conversion|True\s+Gourmand\s+•\s+Skill\s+Lock|Potential\s+Calories|Gained\s+Weight|Avatar\s+of\s+Gluttony|Apostle\s+of\s+Gluttony|mukbang|healing\s+intake)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Yeonwoo|Neo\s+Seoul|East\s+Asian\s+Federation|Seoul|Rift\s+crisis|grandmother|mukbang|livestreaming|Human\s+God|appetite|gluttony|crush\s+damage|HP\s+recovery|transform|boom\s+boom\s+slam|yum-yummy\s+beam|munch|chomp|snack|calories|gourmand)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|Crush|Slash|Pierce|Heat|Cold|Electric|Immaterial|Poison|SPD|CRIT\s+rate|CRIT\s+DMG|Accuracy|ACC|Evade|HP|Max\s+HP|AP\s+Recovery|Intelligence|Strength|Technic|Vitality|Agility|Crush\s+Boost|HP\s+Recovery|Healing\s+Intake|Combat\s+Skill\s+DMG|Fixed\s+DMG)\b/gi,
};

// Export sanitized highlighting patterns
export const yeonwooHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const yeonwooSEO = {
  title: 'Yeonwoo - Horizon Walker Character Guide',
  description:
    'Complete guide for Yeonwoo, an EX rarity Apostle of Gluttony character in Horizon Walker. Mukbang streamer with transformation abilities, high HP, and self-sustain mechanics.',
  keywords: [
    'Yeonwoo',
    'Horizon Walker',
    'EX rarity',
    'tank',
    'bruiser',
    'gluttony',
    'apostle of gluttony',
    'crush damage',
    'self-sustain',
    'HP recovery',
    'transform',
    'mukbang',
    'Neo Seoul',
    'Avatar of Gluttony',
    'Yum-Yummy Beam',
    'guide',
    'stats',
    'build',
  ],
};
