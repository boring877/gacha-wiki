// Emilia Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawEmiliaData = {
  // Basic Character Information
  name: 'Emilia',
  image: 'Emilia', // Character image filename
  rarity: 'EX', // EX, SS, S, A, B
  cost: 5, // Deployment cost
  tags: [
    'Healer',
    'Support',
    'Magic User',
    'HP Recovery',
    'Team Buffer',
    'AP Support',
    'Status Cleansing',
    'Field Medbay',
    'Medical Protocol',
    'Bureau of Rift Management',
    'Human (Noctis Nebula)',
    'Researcher',
    'Diagnosis Method',
    'Case Collection',
    'Modern Medicine',
    'Triage System',
    'Stimulus Response',
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
    meleeAtk: '64',
    rangedAtk: '-12',
    magicAtk: '223',
    maxHp: '448',
    spd: '84',
    startingAp: '111',
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
    heatDef: '0',
    coldDef: '0',
    electricDef: '0',
    immaterialDef: '0',
    poisonDef: '0',
    blockRate: '0',
  },

  // Character Description
  description:
    'A brilliant medical researcher from the Bureau of Rift Management who combines cutting-edge medical technology with healing magic to support allies on the battlefield.',

  // Weapon Information
  weapon: {
    name: 'EX Dual Pistols - Phantom Stiletto',
    type: 'EX Dual Pistols',
    rarity: 'EX',
    image: 'Emilia_WP',
    stats: {
      weaponRangedAtk: '77.0',
      critRate: '+49.0%',
    },
    uniqueSkills: {
      lockOnFromBeyond: {
        name: 'Lock-on from Beyond',
        type: 'Unique',
        description:
          'Increases Pierce Boost by 40% during combat. On attack, gain the [Keen Lock-on] effect applied only to that attack. [Keen Lock-on]: Increases your Crit DMG and Ranged ATK by 10% for each ally on the field (excluding yourself), up to a maximum of 8 allies.',
      },
      soulResonance: {
        name: 'Yui Signature: Soul Resonance',
        type: 'Signature',
        description:
          'During battle, increases Basic ATK DMG of both the user and their summons by 16%. The Weak Point Hit chance triggered by the Anarchic Barrage skill is doubled. When Anarchic Barrage targets 2 or fewer enemies: Against 2 enemies: temporarily increases Combat Skill DMG by 18% and restores 12 AP. Against 1 enemy: temporarily increases Combat Skill DMG by 36% and restores 24 AP.',
        note: 'This signature skill only activates when Emilia equips this weapon.',
      },
    },
  },

  // Character Profile
  profile: {
    age: '21',
    racial: 'Human (Noctis Nebula)',
    homeland: 'Tranel Republic, Reina',
    height: '156cm',
    birthday: 'June 10th',
    bwhRatio: '73(E)-44-81',
  },

  // Character Story
  story:
    "Emilia was once an orphan entrusted to a branch of the Split Twigs Church in Tranel. Frail from birth yet blessed with a boundless thirst for knowledge, she immersed herself in books and acquired a wide range of expertise on her own. Even after the Church withdrew from Tranel, she remained behind with her older brother, continuing their relief work together. But when illness took her brother's life, Emilia's faith in the Church shattered. After crossing the Rift to Earth, she quickly adapted to this new world. Armed with her intellect, she completed advanced training programs in record time and was officially appointed as a researcher by the Bureau of Rift Management. Yet even with such credentials, her desire to save lives on the front lines never faded. Through tireless research, she pursued ways to enhance physical abilities by combining science and sacred power. Her efforts paid off—granting her stamina rivaling that of a battle priest. Now, Emilia stands ready to fight beside the Human God, determined to bring hope and healing to even more people.",

  // Unique Traits
  uniqueTraits: {
    emiliasDiagnosisMethod: {
      name: "Emilia's Diagnosis Method",
      description:
        "Unique. Formation Cost +1, Strength -8, Vitality -6, Intelligence 3. Activates the Level 1 passive skill [This Might Sting A Little]. [This Might Sting A Little]: Allows Basic ATK to be used on allies during battle. When using Basic ATK on an ally, the Stimulus Response Test skill is activated instead. [Stimulus Response Test]: Performs a \"medical-grade\" physical contact test using a diagnostic tool on an ally. Deals a small amount of Fixed DMG and grants AP equal to 14% of base Melee ATK. Can grant up to 14 AP this way. After use, there's a chance equal to the user's Crit Rate to trigger [Was that too hard?]. If triggered, the target gains 1 additional AP for every 20% of the user's Crit Rate. This effect caps at 7 AP when Crit Rate reaches 140%.",
    },
    caseCollection: {
      name: 'Case Collection',
      description:
        "Unique. Activates the Level 1 passive skill [Initial Consultation]. [Initial Consultation]: At the start of battle, grants all allies the [Examination Target] effect. When the user restores HP to an ally with [Examination Target] using an Active Skill, the ally's [Examination Target] is consumed, and the user gains 1 stack of [Diagnostic Record]. [Diagnostic Record]: Reduces the AP cost of the Miraculous Injection skill by 7. Stacks up to 3 times.",
    },
    marlon: {
      name: 'Marlon',
      description: 'Unique. Strength 1, Technic 1, Intelligence 1.',
    },
    interested: {
      name: 'Interested',
      description: 'Unique. Characteristics: (No characteristics listed)',
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
        "Swings a mace to attack the enemy. Deals Crush DMG equal to 114% of Melee ATK and reduces the target's AP by 5.",
    },
    graceOfHealing: {
      name: 'Grace of Healing',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      healing: {
        type: 'Magic ATK',
        value: '190%',
      },
      description:
        'Prays to the Goddess of the Split Twigs with a devout heart for the healing of an ally. Recovers the HP of a designated ally by 190% of magic ATK.',
    },
    sacredPrescriptionProtocol: {
      name: 'Sacred Prescription Protocol',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 2,
      healing: {
        type: 'Magic ATK',
        value: '20%',
      },
      description:
        "Performs a preventative checkup on allies. Only allies compatible with modern medicine can be targeted. Restores HP to all allies within a 2m radius around the designated point (excluding self), equal to 20% of Magic ATK, and grants one of the following random effects to allies compatible with Modern Medicine for 2 Rounds: [IV Prescription]: The recipient's AP Recovery and SPD increases. [Potion Prescription]: The recipient's Crit DMG increases during their own turn and during an ally's turn. [Pill Prescription]: The recipient's Elemental Boost increases during their own turn and during an ally's turn. Effect: IV Prescription - Increases AP Recovery and SPD by 21%. Effect: Potion Prescription - The recipient's Crit DMG increases by 42% during their own turn or an ally's turn. Effect: Pill Prescription - The recipient's Elemental Boost increases by 21% during their own turn or an ally's turn.",
    },
    fieldMedbay: {
      name: 'Field Medbay',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "At the start of battle, grants [Triage Queue Number] 1/2/3/4 to the nearest allies in order. Allies who are incompatible with modern medicine do not gain this effect. Allies with earlier [Triage Queue Numbers] receive higher stat-increase effects when this unit grants buffs to other allies, increasing the original values from 120% up to 180%. For every point by which this unit's Strength, Intelligence, and Vitality exceed 3/14/5 respectively, the upper limit of these stat-increase effects is further increased by 9% per point.",
    },
    miraculousInjection: {
      name: 'Miraculous Injection',
      level: '10/10',
      type: 'Skill',
      apCost: 81,
      cooldown: 2,
      description:
        "Only allies compatible with modern medicine can be targeted. If the designated ally (excluding the user) has any Triage Queue Number, they gain the [Priority Treatment] effect for 2 rounds and are treated the same as an ally with Triage Queue Number 1. Then grants the designated ally the [Miracle Prescription] effect for 2 rounds. The ally consumes a portion of their current HP, but their All ATK increases. Effect: Miracle Prescription - Consumes 20% of current HP when activated. Increases the target's All ATK by 100% of the caster's Base Magic ATK. At the end of the caster's skill use, for every 1% of the target's missing HP, the All ATK gained from this effect increases by an additional 0.625%. This increase reaches its maximum value of 25% when the target has lost 40% of their HP.",
    },
    overflowingGrace: {
      name: 'Overflowing Grace',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "When using the Miraculous Injection skill, the targeted ally also gains the [Sacred Overdose] effect for 2 rounds, based on the user's Crit Rate as the activation chance. The ally consumes a portion of their current HP, and their Combat Skill DMG is slightly reduced, but their Basic ATK DMG increases. Effect: Sacred Overdose - Consumes 25% of current HP when activated. Reduces Combat Skill DMG by 8%, but increases Basic ATK DMG by 16%.",
    },
  },
};

// SEO Metadata
const emiliaSEO = {
  title: 'Emilia - Horizon Walker Character Guide',
  description:
    'Complete guide for Emilia, EX rarity Support character in Horizon Walker. Includes stats, skills, equipment, builds, and gameplay tips.',
  keywords: [
    'Emilia',
    'Horizon Walker',
    'EX character',
    'Support',
    'Healer',
    'character guide',
    'gameplay',
    'stats',
    'skills',
    'equipment',
  ],
};

// Highlight patterns for search functionality
const emiliaHighlighting = {
  characterName: ['Emilia'],
  skillNames: [
    "Guardian's Strike",
    'Grace of Healing',
    'Sacred Prescription Protocol',
    'Field Medbay',
    'Miraculous Injection',
    'Overflowing Grace',
  ],
  uniqueTraits: ["Emilia's Diagnosis Method", 'Case Collection', 'Marlon', 'Interested'],
  effects: [
    'This Might Sting A Little',
    'Stimulus Response Test',
    'Was that too hard?',
    'Initial Consultation',
    'Examination Target',
    'Diagnostic Record',
    'Triage Queue Number',
    'Priority Treatment',
    'Miracle Prescription',
    'Sacred Overdose',
    'IV Prescription',
    'Potion Prescription',
    'Pill Prescription',
    'Keen Lock-on',
  ],
  weaponNames: ['EX Dual Pistols - Phantom Stiletto', 'EX Club & Shield - Seryel: Medical Hammer'],
  tags: rawEmiliaData.tags,
};

// Data validation
const validation = validateCharacterData(rawEmiliaData);
if (!validation.isValid) {
  console.error('Emilia character data validation failed:', validation.errors);
}

// Sanitize data for production
const emiliaData = sanitizeCharacterData(rawEmiliaData);

// Sanitize highlighting patterns
const emiliaHighlightingSanitized = sanitizeHighlightPatterns(emiliaHighlighting);

// Export the sanitized data and metadata
export { emiliaData, emiliaSEO };
export { emiliaHighlightingSanitized as emiliaHighlighting };

// Export raw data for development/debugging
// Note: rawEmiliaData is exported conditionally in the default export below

// Export validation result
export { validation };

// Default export for convenience
export default {
  characterData: emiliaData,
  seo: emiliaSEO,
  highlighting: emiliaHighlightingSanitized,
  validation,
  raw: import.meta.env.DEV ? rawEmiliaData : undefined,
};
