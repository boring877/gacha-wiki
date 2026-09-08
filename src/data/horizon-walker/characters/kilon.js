// Kilon Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawKilonData = {
  // Basic Character Information
  name: 'Kilon',
  image: 'Kilon', // Character image filename without extension
  rarity: 'SS', // EX, SS, S, A, B
  cost: 5, // Deployment cost
  tags: [
    'Warrior',
    'Tank',
    'Melee Damage',
    'Slash Damage',
    'Physical Damage',
    'Counterattack',
    'Team Buffer',
    'Self-Healing',
    'High Defense',
    'Lifesteal',
    'Taunt',
    'HP Scaling',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '11',
    technic: '13',
    intelligence: '6',
    vitality: '14',
    agility: '9',

    // Key Stats
    meleeAtk: '146',
    rangedAtk: '173',
    magicAtk: '76',
    maxHp: '896',
    spd: '92',
    startingAp: '132',
    apRecovery: '106',
    accuracy: '102',
    evade: '115',
    critRate: '10',
    critDmg: '150',

    // Attribute Boost
    slashBoost: '15',
    pierceBoost: '15',
    crushBoost: '15',
    heatBoost: '0',
    coldBoost: '0',
    electricBoost: '0',
    immaterialBoost: '0',
    poisonBoost: '0',

    // Attribute Defense
    slashDef: '50',
    pierceDef: '50',
    crushDef: '50',
    heatDef: '0',
    coldDef: '0',
    electricDef: '0',
    immaterialDef: '0',
    poisonDef: '0',
    blockRate: '0',
  },

  // Character Description
  description:
    'Exiled ruler of Karr Menka who continues to protect marginalized humans and Grrik alike, driven by unwavering loyalty and a sense of responsibility as both ruler and warrior.',

  // Weapon Information
  weapon: {
    name: "Aronbite",
    flavor: "A legendary blade of the Grrik, Aronbite is renowned for never breaking and never dulling. It stands as a symbol of their unyielding conviction, granted only to the most honorable of packlords. According to ancient legends lost to time, the sword was forged when a great Grrik knight burned his own soul to temper it. Said to grant eternal victory to its wielder, Aronbite's masters have lived up to its promise - earning lasting fame through unmatched strength and noble spirit.",
    type: "Two-handed sword",
    rarity: 'EX',
    image: "Weapon_FullIMG_TwoHandSword_ForKilon",
    imageOnR2: true,
    maxLevel: 60,
    stats: {
      "Melee ATK (weapon)": "91",
      "Melee ATK (%)": "+35%",
    },
    uniqueSkills: {
      unique: {
        name: "Unbreakable Wrath",
        type: 'Unique',
        description: "Increases Melee ATK by {12,27,42,57,72}% during combat. When hit or healed, gain a stack that increases Max HP by {8,9,10,11,12}% and Aggro Adjustment by {8,9,10,11,12}. Stacks up to 9 times. On Basic ATK, gain 1 stack of [Composure]. [Composure]: Stacks up to 6 times. At max stacks, at the start of your turn, gain 55 AP and the [Fortitude] effect, then Composure resets. [Fortitude]: Consumes 50% of your HP and increases Melee ATK by {100,115,130,145,160}% of the HP consumed. Lasts until the end of the turn. If you Standby, recover HP equal to the amount consumed.",
      },
      signature: {
        name: "Kilon Signature: Wastelands' Enforcer",
        type: 'Signature',
        description: "Increases Lifesteal by 4% during combat. While holding the [Fortitude] effect, using the 'Thousand Arms Stance' skill also restores HP equal to the amount consumed. On Basic ATK, has a 29% chance to reduce the cooldown of 'Split the Crown' by 1 round. Using the 'Taunting Roar' skill grants 3 stacks of [Unyielding Bulwark] and triggers a follow-up attack with 'Thousand Arms Stance'. [Unyielding Bulwark]: Increases All DEF by 120. Stacks up to 3 times. Loses 1 stack at the start of each round.",
        note: "This signature skill only activates when Kilon equips this weapon.",
      },
    },
    levelStats: {
      "Melee ATK (weapon)": [14.3, 91.0],
      "Melee ATK (%)": [5.5, 35.0],
    },
    exLevels: {
      effects: [
        { name: "Increases Melee ATK", valuesByLevel: "12% / 27% / 42% / 57% / 72%" },
        { name: "When hit or healed, gain a stack that increases Max HP", valuesByLevel: "8% / 9% / 10% / 11% / 12%" },
        { name: "% and Aggro Adjustment", valuesByLevel: "8 / 9 / 10 / 11 / 12" },
        { name: "[Fortitude]: Consumes 50% of your HP and increases Melee ATK", valuesByLevel: "100% / 115% / 130% / 145% / 160%" },
      ],
    },
  },

  // Character Profile
  profile: {
    age: '45',
    racial: 'Grrik',
    homeland: 'Grrik Alliance, Karr Menka',
    height: '219cm',
    birthday: "Whale's Month, the Seventeenth Day",
    bwhRatio: '-',
  },

  // Character Story
  story:
    'The fracture between the Grrik Federation and humanity resulted from the rogue actions of certain human magicians following the Rift Crisis. Outraged by the atrocities these magicians committed during that devastating period, the Grrik king severed a friendship with humans that had persisted for thousands of years, declaring that the Grrik would pursue their own path toward salvation. However, this decision was not unanimous. Kilon, the ruler of Karr Menka, argued against severing ties entirely due to the actions of a few, insisting that such a decision betrayed genuine loyalty. Consequently, Kilon was exiled by the Grrik king—who had himself lost a prince—to the Great Wilderness, a dangerous borderland adjacent to human territories. In exile, Kilon quietly continued their fight, protecting marginalized humans and Grrik alike within the wilderness. It remains unclear exactly how Kilon escaped safely to Earth, but upon arrival, they immediately resumed their commitment to safeguarding all individuals, driven by their sense of responsibility as both a ruler and a warrior.',

  // Unique Traits
  uniqueTraits: {
    alphaDog: {
      name: 'Alpha Dog',
      description:
        'Activates the Level 1 passive skill [Alpha Dog]. [Alpha Dog]: Increases Slash DEF and Pierce DEF of all allies by 50.',
    },
    grrikChivalry: {
      name: 'Grrik Chivalry',
      description:
        'Activates the Level 3 passive skill [Iron Wall]. [Iron Wall]: Each time damage is taken, all DEF increases by 150, lasting until the end of battle. Stacks up to 3 times.',
    },
    grrik: {
      name: 'Grrik',
      description:
        'Slash Boost 15%, Pierce Boost 15%, Crush Boost 15%, Slash DEF 50, Pierce DEF 50, Crush DEF 50',
    },
  },

  // Skills and Passive
  skills: {
    brotherhoodsStrike: {
      gameKey: 'StrikeOfBrotherhood',
      icon: 'UI_SkillIcon_TwoHandSword',
      name: "Brotherhood's Strike",
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        'Swings the greatsword horizontally, slashing enemies within a fan-shaped range. Deals Slash DMG equal to 114% of melee ATK.',
    },
    thousandArmsStance: {
      gameKey: 'ThousandArmed',
      icon: 'UI_SkillIcon_ThousandArmed',
      name: 'Thousand Arms Stance',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 0,
      description:
        'Raises the greatsword and assumes a counterattack stance. Enters [Counterattack Posture] until the start of the next round, increasing CRIT rate by 57% and performing counterattacks regardless of the base number of counterattacks.',
    },
    tauntingRoar: {
      gameKey: 'CryOfProvoke',
      icon: 'UI_SkillIcon_CryOfProvoke',
      name: 'Taunting Roar',
      level: '10/10',
      type: 'Skill',
      apCost: 15,
      cooldown: 3,
      damage: {
        type: 'Magic ATK',
        value: '57%',
      },
      description:
        'Plant your sword into the ground and unleash a roar. Deals Crush DMG equal to 57% of Magic ATK in a 5m circular AoE. Enemies hit are inflicted with [Taunt] for 2 rounds and have all ATK reduced by 38% for 2 rounds. Your Aggro Adjustment increases for the duration. This attack temporarily increases Accuracy by 300%.',
    },
    splitTheCrown: {
      gameKey: 'CrownSplitting',
      icon: 'UI_SkillIcon_CrownSplitting',
      name: 'Split the Crown',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 2,
      damage: {
        type: 'Melee ATK',
        value: '190%',
      },
      description:
        "Strikes downward with a greatsword to deliver a powerful blow. Deals Slash DMG equal to 190% of Melee ATK. This skill's Slash Boost increases proportionally to missing HP up to 200% for the turn it's used. If this skill defeats an enemy, restores 76% of Max HP as HP Recovery.",
    },
  },
  rarityStages: {
    'EX': {
      strength: 11,
      technic: 9,
      intelligence: 6,
      vitality: 13,
      agility: 8,
      maxHp: 832,
      meleeAtk: 146,
      rangedAtk: 119,
      magicAtk: 76,
      evade: 102,
      apRecovery: 104,
      startingAp: 130
    },
    'EX 1': {
      strength: 11,
      technic: 10,
      intelligence: 6,
      vitality: 13,
      agility: 8,
      maxHp: 832,
      meleeAtk: 146,
      rangedAtk: 133,
      magicAtk: 76,
      evade: 102,
      apRecovery: 104,
      startingAp: 130
    },
    'EX 2': {
      strength: 11,
      technic: 10,
      intelligence: 6,
      vitality: 13,
      agility: 9,
      maxHp: 832,
      meleeAtk: 146,
      rangedAtk: 133,
      magicAtk: 76,
      evade: 115,
      apRecovery: 106,
      startingAp: 132
    },
    'EX 3': {
      strength: 11,
      technic: 11,
      intelligence: 6,
      vitality: 13,
      agility: 9,
      maxHp: 832,
      meleeAtk: 146,
      rangedAtk: 146,
      magicAtk: 76,
      evade: 115,
      apRecovery: 106,
      startingAp: 132
    },
    'EX 4': {
      strength: 11,
      technic: 11,
      intelligence: 6,
      vitality: 14,
      agility: 9,
      maxHp: 896,
      meleeAtk: 146,
      rangedAtk: 146,
      magicAtk: 76,
      evade: 115,
      apRecovery: 106,
      startingAp: 132
    },
    'EX 5': {
      strength: 11,
      technic: 12,
      intelligence: 6,
      vitality: 14,
      agility: 9,
      maxHp: 896,
      meleeAtk: 146,
      rangedAtk: 159,
      magicAtk: 76,
      evade: 115,
      apRecovery: 106,
      startingAp: 132
    },
    'EX 6': {
      strength: 11,
      technic: 13,
      intelligence: 6,
      vitality: 14,
      agility: 9,
      maxHp: 896,
      meleeAtk: 146,
      rangedAtk: 173,
      magicAtk: 76,
      evade: 115,
      apRecovery: 106,
      startingAp: 132
    },
  },
  heroId: 9,

};

// Validate and sanitize the character data
const validation = validateCharacterData(rawKilonData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const kilonData = sanitizeCharacterData(rawKilonData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Alpha\s+Dog|Grrik\s+Chivalry|Iron\s+Wall|Unbreakable\s+Wrath|Wastelands'\s+Enforcer|Composure|Fortitude|Unyielding\s+Bulwark|Counterattack\s+Posture|Taunt|brotherhood|counterattack|lifesteal|HP\s+Recovery|Aggro\s+Adjustment|follow-up\s+attack)\b/gi,
  percentages: /\b(\d{1,3}%)(?:\s*of\s+(?:Max\s+)?HP)?/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|gains?|grants?|restores?|consumes?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?|\d+)\b/gi,
  keywords:
    /\b(?:exile|ruler|Grrik\s+Federation|Rift\s+Crisis|Great\s+Wilderness|Karr\s+Menka|proportionally|missing\s+HP|stacking|marginalized|brotherhood|genuine\s+loyalty|borderland|commitment|safeguarding|Whale's\s+Month)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Magic\s+ATK|Slash|Pierce|Crush|Physical|Heat|Cold|Electric|Immaterial|Poison|Max\s+HP|HP|All\s+DEF|DEF|CRIT\s+rate|Accuracy|Lifesteal|cooldown)\b/gi,
};

// Export sanitized highlighting patterns
export const kilonHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const kilonSEO = {
  title: 'Kilon - Horizon Walker Character Guide',
  description:
    'Complete guide for Kilon, an SS rarity Warrior character in Horizon Walker. Exiled Grrik ruler with powerful tanking abilities, lifesteal mechanics, and team defensive buffs.',
  keywords: [
    'Kilon',
    'Horizon Walker',
    'SS rarity',
    'warrior',
    'grrik',
    'tank',
    'melee damage',
    'slash damage',
    'team buffer',
    'self-healing',
    'lifesteal',
    'aronbite',
    'two-handed sword',
    'guide',
    'stats',
    'build',
  ],
};
