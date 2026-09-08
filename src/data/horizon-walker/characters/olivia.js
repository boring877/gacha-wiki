// Olivia Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawOliviaData = {
  // Basic Character Information
  name: 'Olivia',
  image: 'Olivia', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 8, // Deployment cost
  tags: [
    'Warrior',
    'Melee Damage',
    'Slash Damage',
    'High ATK',
    'Counterattack',
    'Physical Damage',
    'Front-line Fighter',
    'Block',
    'No Crit',
    'AP Generation',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '18',
    technic: '11',
    intelligence: '10',
    vitality: '17',
    agility: '14',

    // Key Stats
    meleeAtk: '312',
    rangedAtk: '217',
    magicAtk: '143',
    maxHp: '1240',
    spd: '115',
    startingAp: '123',
    apRecovery: '120',
    accuracy: '102',
    evade: '204',
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
    'Former joint ruler of the Grand Duchy of Magnal, a legendary warrior whose sword mastery transcends normal limits and reaches the level of natural phenomenon.',

  // Weapon Information
  weapon: {
    name: "Star Splicer",
    flavor: "The legendary blade that cleaves the sky, Star Splicer, is said to live up to its name - capable of slicing through the very stars themselves. Its edge knows no equal, slicing through anything in a single stroke and making its wielder an undeniable force on the battlefield. A single swing leaves no trace, and some say even time and space are torn asunder in its wake. Yet, for all its might, only a Sword Saint of Magnal can truly awaken the blade's full potential.",
    type: "Two-handed sword",
    rarity: 'EX',
    image: "Weapon_FullIMG_TwoHandSword_ForOlivia",
    imageOnR2: true,
    maxLevel: 60,
    stats: {
      "Melee ATK (weapon)": "105",
      "AP Recovery (%)": "+7%",
    },
    uniqueSkills: {
      unique: {
        name: "Phenomenon",
        type: 'Unique',
        description: "Reduces CRIT Damage dealt by 40%, but increases Melee ATK by {20,25,30,35,40}% while in combat. At the start of your turn, gain 1 stack of [Blade Resonance].(This effect does not trigger if you used Standby in your previous turn.) Upon reaching 3 stacks of [Blade Resonance], gain [Grand Echo] for 2 turns. - [Blade Resonance]: Increases Basic ATK DMG and Combat Skill DMG by {8,9,10,11,12}%, stacking up to 3 times. - [Grand Echo]: Increases Slash Boost by {12,14,16,18,20}%. (All [Blade Resonance] stacks reset when [Grand Echo] ends.)",
      },
      signature: {
        name: "Olivia Signature: Nova Strike",
        type: 'Signature',
        description: "After using 'Thousandfold Execution', gain 1 stack of [Transcendence]. Upon reaching 2 stacks of [Transcendence], perform an additional counterattack with 'Nova Strike' instead of 'Thousandfold Exection'. (All [Transcendence] stacks are reset afterward.) [#sepline] Nova Strike Swings the blade in a wide arc, slashing all nearby enemies. Deals 150% Slash DMG based on 'Thousandfold Execution' to enemies within an 8m radius and sets AP to 159.",
        note: "This signature skill only activates when Olivia equips this weapon.",
      },
    },
    levelStats: {
      "Melee ATK (weapon)": [16.5, 105.0],
      "AP Recovery (%)": [1.1, 7.0],
    },
    exLevels: {
      effects: [
        { name: "Reduces CRIT Damage dealt by 40%, but increases Melee ATK", valuesByLevel: "20% / 25% / 30% / 35% / 40%" },
        { name: "- [Blade Resonance]: Increases Basic ATK DMG and Combat Skill DMG", valuesByLevel: "8% / 9% / 10% / 11% / 12%" },
        { name: "- [Grand Echo]: Increases Slash Boost", valuesByLevel: "12% / 14% / 16% / 18% / 20%" },
      ],
    },
  },

  // Character Profile
  profile: {
    age: 'XX',
    racial: 'Human (Noctis Nebula)',
    homeland: 'Grand Duchy of Magnal, Lisil',
    height: '178cm',
    birthday: 'January 3rd',
    bwhRatio: '88(F)-53-99',
  },

  // Character Story
  story:
    'Olivia, former joint ruler of the Grand Duchy of Magnal and known as the Valiant Duke, was famous alongside her brother Roland for her prodigious talent with the sword since childhood. Even among the illustrious sword-wielding Magnal family, her talent stood out. She defeated opponents effortlessly, whether they were strong or weak. Her strength had reached the level of a phenomenon, and her people never thought of her as merely strong—she was a force of nature.\n\nWhen the Rift Crisis occurred in Noctis Nebula, Olivia chose to stand against it. She fought against countless Rift aberrations for days on end, and when the battle finally ended, no one remained near her—not enemy nor ally. She set out again in search of enemies, not out of vengeance, but because she saw it as the duty of a ruler to bring an end to the war. After a fight that took her into the Rift, she found herself on Earth. Realizing the battle was over, she began to live in seclusion on the outskirts of the city, seeking to figure out what her purpose should be now that her duty as a ruler had ended.',

  // Unique Traits
  uniqueTraits: {
    braveDuchess: {
      name: 'The Brave Duchess',
      description:
        'Activates the unique trait [The Brave Duchess]. Formation Cost +2, Weak Spot Hit Multiplier -80%, Strength 4, Vitality 2, Agility 2.',
    },
    bladebreaker: {
      name: 'Bladebreaker',
      description:
        'Activates Level 1 Passive Skill [Bladebreaker]. [Bladebreaker]: Blocks attacks from the front during your turn. Block Rate 28%.',
    },
    marlon: {
      name: 'Marlon',
      description: 'Strength 1, Technic 1, Intelligence 1.',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the Chosen Human. Unlocks at Gift Affection Level 5: becomes active after reaching 2,000 affection points through gift-giving.',
    },
  },

  // Skills and Passive
  skills: {
    skyCleaver: {
      gameKey: 'CuttingSky',
      icon: 'UI_SkillIcon_TwoHandSword',
      name: 'Sky Cleaver',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        'Delivers a powerful slash to enemies in front. Deals 114% Melee ATK as Slash DMG in a 3m × 5m rectangular area.',
    },
    worldCleaver: {
      gameKey: 'DividingWorld',
      icon: 'UI_SkillIcon_DividingWorld',
      name: 'World Cleaver',
      level: '10/10',
      type: 'Skill',
      apCost: 90,
      cooldown: 3,
      damage: {
        type: 'Melee ATK',
        value: '190%',
      },
      description:
        'Unleashes a powerful slash across a wide area in front. Deals Slash DMG equal to 190% of Melee ATK to enemies within a 7m, 150° cone.',
    },
    limitlessForm: {
      gameKey: 'InfiniteBody',
      icon: 'UI_SkillIcon_InfiniteBody',
      name: 'Limitless Form',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Removes Critical Chance entirely but increases Melee ATK by 220% while in combat. Ignores 1500 Slash DEF when attacking.',
    },
    ascendantThousandfoldExecution: {
      gameKey: 'StandingLikeSky',
      icon: 'UI_SkillIcon_StandingLikeSky',
      name: 'Ascendant - Thousandfold Execution',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'At the start of each round, gain 3 stacks of [Ascendant]. [Ascendant]: When it is the enemy\'s turn, perform an additional counterattack with "Thousand Execution" against the closest enemy.',
    },
    thousandExecution: {
      gameKey: 'StandingLikeSky',
      icon: 'UI_SkillIcon_StandingLikeSky',
      name: 'Thousand Execution',
      level: '10/10',
      type: 'Skill',
      apCost: 0,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '190%',
      },
      description:
        'Consumes 1 stack of [Ascendant] to activate. Performs a powerful upward slash against the nearest enemy. Deals 190% Slash DMG in a 90°, 8m cone and sets AP to 159.',
    },
  },
  rarityStages: {
    'EX': {
      strength: 13,
      technic: 11,
      intelligence: 10,
      vitality: 14,
      agility: 13,
      maxHp: 1044,
      meleeAtk: 244,
      rangedAtk: 217,
      magicAtk: 143,
      evade: 192,
      apRecovery: 117,
      startingAp: 120
    },
    'EX 1': {
      strength: 15,
      technic: 11,
      intelligence: 10,
      vitality: 14,
      agility: 13,
      maxHp: 1044,
      meleeAtk: 271,
      rangedAtk: 217,
      magicAtk: 143,
      evade: 192,
      apRecovery: 117,
      startingAp: 120
    },
    'EX 2': {
      strength: 15,
      technic: 11,
      intelligence: 10,
      vitality: 15,
      agility: 13,
      maxHp: 1109,
      meleeAtk: 271,
      rangedAtk: 217,
      magicAtk: 143,
      evade: 192,
      apRecovery: 117,
      startingAp: 120
    },
    'EX 3': {
      strength: 16,
      technic: 11,
      intelligence: 10,
      vitality: 15,
      agility: 13,
      maxHp: 1109,
      meleeAtk: 284,
      rangedAtk: 217,
      magicAtk: 143,
      evade: 192,
      apRecovery: 117,
      startingAp: 120
    },
    'EX 4': {
      strength: 16,
      technic: 11,
      intelligence: 10,
      vitality: 15,
      agility: 14,
      maxHp: 1109,
      meleeAtk: 284,
      rangedAtk: 217,
      magicAtk: 143,
      evade: 204,
      apRecovery: 120,
      startingAp: 123
    },
    'EX 5': {
      strength: 16,
      technic: 11,
      intelligence: 10,
      vitality: 17,
      agility: 14,
      maxHp: 1240,
      meleeAtk: 284,
      rangedAtk: 217,
      magicAtk: 143,
      evade: 204,
      apRecovery: 120,
      startingAp: 123
    },
    'EX 6': {
      strength: 18,
      technic: 11,
      intelligence: 10,
      vitality: 17,
      agility: 14,
      maxHp: 1240,
      meleeAtk: 312,
      rangedAtk: 217,
      magicAtk: 143,
      evade: 204,
      apRecovery: 120,
      startingAp: 123
    },
  },
  heroId: 5,

};

// Validate and sanitize the character data
const validation = validateCharacterData(rawOliviaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const oliviaData = sanitizeCharacterData(rawOliviaData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})\]/g,
  buffsDebuffs:
    /\b(?:Ascendant|Blade\s+Resonance|Grand\s+Echo|Transcendence|Bladebreaker|Limitless\s+Form|The\s+Brave\s+Duchess|Thousand\s+Execution|Nova\s+Strike|Phenomenon|counterattack|block)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|removes?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:ignores?|stacking|entirely|phenomenon|force\s+of\s+nature|Valiant\s+Duke|Grand\s+Duchy\s+of\s+Magnal|Roland|Rift\s+Crisis|Chosen\s+Human|seclusion)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Slash|Physical|Pierce|Crush|Heat|Cold|Electric|Immaterial|Poison|Block\s+Rate|CRIT|Critical\s+Chance|DEF|Formation\s+Cost|Weak\s+Spot\s+Hit\s+Multiplier)\b/gi,
};

// Export sanitized highlighting patterns
export const oliviaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const oliviaSEO = {
  title: 'Olivia - Horizon Walker Character Guide',
  description:
    'Complete guide for Olivia, an EX rarity Warrior character in Horizon Walker. Former Valiant Duke with legendary sword mastery and unique non-crit combat mechanics.',
  keywords: [
    'Olivia',
    'Horizon Walker',
    'EX rarity',
    'warrior',
    'valiant duke',
    'melee damage',
    'slash damage',
    'two-handed sword',
    'limitless form',
    'counterattack',
    'guide',
    'stats',
    'build',
  ],
};
