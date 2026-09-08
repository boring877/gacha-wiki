// So Joo-hee Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawSoJooHeeData = {
  // Basic Character Information
  name: 'So Joo-hee',
  image: 'So_Joo_hee', // Character image filename without extension
  rarity: 'SS', // EX, SS, S, A, B
  cost: 3, // Deployment cost
  tags: [
    'Assassin',
    'Ranged DPS',
    'Pierce Damage',
    'Stealth',
    'Weakness Hunter',
    'Dual Pistols',
    'Government Agent',
    'Accuracy Support',
    'Critical Damage',
    'Team Buffer',
    'Unblockable Attack',
    'Mass Execution',
    'Human',
    'Intelligence Officer',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '11',
    technic: '12',
    intelligence: '13',
    vitality: '11',
    agility: '6',

    // Key Stats
    meleeAtk: '128',
    rangedAtk: '140',
    magicAtk: '153',
    maxHp: '448',
    spd: '88',
    startingAp: '109',
    apRecovery: '96',
    accuracy: '97',
    evade: '60',
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
    'A government intelligence officer and daughter of the Vice Minister of the Interior, seeking to prove herself beyond her family connections.',

  // Character Profile
  profile: {
    age: '30',
    racial: 'Human (Earth)',
    homeland: 'East Asia Federation, Seongnam',
    height: '169cm',
    birthday: 'December 1st',
    bwhRatio: '100(J)-60-103',
  },

  // Character Story
  story:
    "So Joo-hee is the daughter of the Vice Minister of the Interior, which oversees the Bureau of Rift Management, and her family has long been celebrated as a prestigious line of bureaucrats. However, Joo-hee herself didn't quite live up to the family's standards. Unable to join one of the older, more established departments, she was instead hired as a special recruit for the Dimension Immigration Department of the Bureau of Rift Management, which was severely understaffed. Later, she managed to transfer to the Intelligence Department, a core division, which allowed her to maintain the title of an elite bureaucrat. This series of events, however, significantly hurt her self-esteem and contributed to her impulsive and attention-seeking personality. To make matters worse, her father, concerned about the family's reputation, severely restricted her romantic relationships, which only heightened her yearning for freedom. Given these circumstances, it was almost inevitable that she would clash with Yeon Chae-young, who was regarded as the top elite of the Bureau of Rift Management, and soon enough, the two developed a notorious rivalry. Though she is often dismissed as an incompetent nepotism hire, some believe that she has untapped potential.",

  // Unique Traits
  uniqueTraits: {
    upstartsPride: {
      name: "Upstart's Pride",
      description:
        'Formation Cost -1, Agility -1, Vitality -3, Strength -1, Technic -3, Intelligence -1',
    },
    unearnedConfidence: {
      name: 'Unearned Confidence',
      description:
        'Activates the Level 1 passive skill [Concentration]. [Concentration]: At the start of battle, increases CRIT rate by 12% and Ranged ATK by 30%. Upon being hit, this effect vanishes.',
    },
    human: {
      name: 'Human',
      description: 'Technic 1, AP Recovery 4%',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the chosen Human. Unlocks at Gift Affection Level 5: becomes active after reaching 2,000 affection points through gift-giving.',
    },
  },

  // Skills and Passive
  skills: {
    pistolFire: {
      gameKey: 'AkimboShot',
      icon: 'UI_SkillIcon_DoublePistol_BA',
      name: 'Pistol Fire',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      damage: {
        type: 'Ranged ATK',
        value: '114%',
      },
      description: 'Calmly shoots at the target. Deals Pierce DMG equal to 114% of Ranged ATK.',
    },
    conceal: {
      gameKey: 'Ambush',
      icon: 'UI_SkillIcon_Ambush',
      name: 'Conceal',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "When attacking an enemy's weak point, uses optical camouflage to hide. Once per Round, at the end of a turn where you performed a Weak Point Attack, there is a 38% chance to gain [Conceal: Stealth]. Activation chance increases by 1% for every 1% of your missing HP. [Conceal: Stealth]: Becomes hidden and cannot be targeted by enemy skills. SPD decreases by 10%, and ACC increases by 50% for the first attack while hidden.",
    },
    assassination: {
      gameKey: 'Assassination',
      icon: 'UI_SkillIcon_Assassination',
      name: 'Assassination',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 2,
      damage: {
        type: 'Ranged ATK',
        value: '190%',
      },
      description:
        'Approaches the enemy and delivers an Unblockable point-blank shot. Deals Pierce DMG equal to 190% of Ranged ATK. This attack is always considered to be from behind the enemy and ignores counterattack effects. During this attack, ACC temporarily increases by 300%.',
    },
    massExecution: {
      gameKey: 'AllOutExecution',
      icon: 'UI_SkillIcon_AllOutExecution',
      name: 'Mass Execution',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 3,
      damage: {
        type: 'Ranged ATK',
        value: '342%',
      },
      description:
        'Performs a quick and precise rapid shot on up to 3 enemies. Executes a distributed attack in order of proximity, dealing Pierce DMG equal to 342% of Ranged ATK divided by the number of targets.',
    },
    unavoidableEyes: {
      gameKey: 'InevitableSight',
      icon: 'UI_SkillIcon_InevitableSight',
      name: 'Unavoidable Eyes',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "Identifies the enemy's weak point and guides allies. Increases ACC of all allies by 57%.",
    },
  },

  // Weapon
  weapon: {
    name: "Fleure de Vanite 92",
    flavor: "Within its lavish exterior lies an unidentified curse, embodied in the dual firearm known as 'Fleure de Vanite'. This special weapon features a base made of precious metals and a slide engraved with intricate symbols that seal the curse. These symbols are part of the Bureau of Rift Management's attempts to interpret magic through the lens of science, with various devices added in the laboratory to contain the curse. As a result, the original form of the firearm has become unrecognizable, yet its cursed properties remain exceptional. Originally intended to depart from the evidence storage and pass through the Bureau's laboratory to be displayed in a museum, it is said that the exquisite design captivated the attention of a section chief from the Intelligence Division, leading to the weapon being taken into his possession.",
    type: "Dual Pistols",
    rarity: 'EX',
    image: "Weapon_FullIMG_Fleur_De_Vanite92",
    imageOnR2: true,
    maxLevel: 60,
    stats: {
      "Ranged ATK (weapon)": "77",
      "Movement (%)": "+49%",
    },
    uniqueSkills: {
      unique: {
        name: "Trace of Vanity",
        type: 'Unique',
        description: "On Weakness Attack, grants one stack of [Mark of Vanity] that lasts for 2 Rounds. Additionally, on successful attack, grants the target an additional stack of [Mark of Vanity] and increases ally ACC by {20,25,30,35,40}%. [Mark of Vanity]: Reduces all DEF of the target by {160,200,240,280,320} and further reduces Pierce DEF by an additional {140,175,210,245,280}. Can stack up to 2 times.",
      },
      signature: {
        name: "So Joo-hee Signature: Magnifique",
        type: 'Signature',
        description: "[Mark of Vanity] effect's DEF reduction is applied at 2 times the usual value. At the start of the next turn after ending your own turn, if there is an ally within a 3m range who is not in a Stealth or Banish state, gain the [Conceal: Stealth] effect.",
      },
    },
    levelStats: {
      "Ranged ATK (weapon)": [12.1, 77.0],
      "Movement (%)": [7.7, 49.0],
    },
    exLevels: {
      effects: [
        { name: "...onally, on successful attack, grants the target an additional stack of [Mark of Vanity] and increases ally ACC", valuesByLevel: "20% / 25% / 30% / 35% / 40%" },
        { name: "[Mark of Vanity]: Reduces all DEF of the target", valuesByLevel: "160 / 200 / 240 / 280 / 320" },
        { name: "And further reduces Pierce DEF by an additional", valuesByLevel: "140 / 175 / 210 / 245 / 280" },
      ],
    },
  },
  rarityStages: {
    'EX': {
      strength: 9,
      technic: 12,
      intelligence: 11,
      vitality: 9,
      agility: 6,
      maxHp: 320,
      meleeAtk: 102,
      rangedAtk: 140,
      magicAtk: 128,
      evade: 60,
      apRecovery: 96,
      startingAp: 109
    },
    'EX 1': {
      strength: 9,
      technic: 12,
      intelligence: 11,
      vitality: 10,
      agility: 6,
      maxHp: 384,
      meleeAtk: 102,
      rangedAtk: 140,
      magicAtk: 128,
      evade: 60,
      apRecovery: 96,
      startingAp: 109
    },
    'EX 2': {
      strength: 9,
      technic: 12,
      intelligence: 12,
      vitality: 10,
      agility: 6,
      maxHp: 384,
      meleeAtk: 102,
      rangedAtk: 140,
      magicAtk: 140,
      evade: 60,
      apRecovery: 96,
      startingAp: 109
    },
    'EX 3': {
      strength: 10,
      technic: 12,
      intelligence: 12,
      vitality: 10,
      agility: 6,
      maxHp: 384,
      meleeAtk: 115,
      rangedAtk: 140,
      magicAtk: 140,
      evade: 60,
      apRecovery: 96,
      startingAp: 109
    },
    'EX 4': {
      strength: 10,
      technic: 12,
      intelligence: 13,
      vitality: 10,
      agility: 6,
      maxHp: 384,
      meleeAtk: 115,
      rangedAtk: 140,
      magicAtk: 153,
      evade: 60,
      apRecovery: 96,
      startingAp: 109
    },
    'EX 5': {
      strength: 11,
      technic: 12,
      intelligence: 13,
      vitality: 10,
      agility: 6,
      maxHp: 384,
      meleeAtk: 128,
      rangedAtk: 140,
      magicAtk: 153,
      evade: 60,
      apRecovery: 96,
      startingAp: 109
    },
    'EX 6': {
      strength: 11,
      technic: 12,
      intelligence: 13,
      vitality: 11,
      agility: 6,
      maxHp: 448,
      meleeAtk: 128,
      rangedAtk: 140,
      magicAtk: 153,
      evade: 60,
      apRecovery: 96,
      startingAp: 109
    },
  },
  heroId: 29,

};

// Validate and sanitize the character data
const validation = validateCharacterData(rawSoJooHeeData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const soJooHeeData = sanitizeCharacterData(rawSoJooHeeData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Upstart's\s+Pride|Unearned\s+Confidence|Concentration|Conceal:\s+Stealth|Mark\s+of\s+Weakness|Trace\s+of\s+Weakness|Magnifique|optical\s+camouflage|weak\s+point|weakness\s+attack|point-blank\s+shot|rapid\s+shot|distributed\s+attack|counterattack\s+effects|stealth\s+or\s+banish\s+state)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|grants?|vanishes?|ignores?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:bureaucrats|prestigious|Vice\s+Minister|Interior|Bureau\s+of\s+Rift\s+Management|Dimension\s+Immigration\s+Department|Intelligence\s+Department|elite\s+bureaucrat|self-esteem|impulsive|attention-seeking|romantic\s+relationships|family\s+reputation|Yeon\s+Chae-young|rivalry|nepotism\s+hire|untapped\s+potential|East\s+Asia\s+Federation|Seongnam|dual\s+pistols|unblockable|proximity|formation\s+cost)\b/gi,
  attributes:
    /\b(?:AP|Ranged\s+ATK|Pierce|ACC|SPD|CRIT\s+rate|Formation\s+Cost|Agility|Vitality|Strength|Technic|Intelligence|DEF|Pierce\s+DEF|All\s+DEF|Missing\s+HP|Weak\s+Point\s+Attack|Activation\s+chance)\b/gi,
};

// Export sanitized highlighting patterns
export const soJooHeeHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const soJooHeeSEO = {
  title: 'So Joo-hee - Horizon Walker Character Guide',
  description:
    'Complete guide for So Joo-hee, an SS rarity human assassin in Horizon Walker. Government intelligence officer with stealth mechanics, accuracy support, and dual pistol expertise.',
  keywords: [
    'So Joo-hee',
    'Horizon Walker',
    'SS rarity',
    'assassin',
    'human',
    'government agent',
    'intelligence officer',
    'stealth',
    'dual pistols',
    'pierce damage',
    'weakness hunter',
    'accuracy support',
    'guide',
    'stats',
    'build',
  ],
};
