// Gridelda Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawGrideldaData = {
  // Basic Character Information
  name: 'Gridelda',
  image: 'Gridelda', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 8, // Deployment cost
  tags: [
    'Mage',
    'Magic User',
    'Area Damage',
    'Support',
    'Team Buffer',
    'Arcane Magic',
    'Immaterial Damage',
    'Space Manipulation',
    'High Evasion',
    'AP Support',
    'Healing',
    'Elemental',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '6',
    technic: '7',
    intelligence: '27',
    vitality: '9',
    agility: '24',

    // Key Stats
    meleeAtk: '76',
    rangedAtk: '89',
    magicAtk: '464',
    maxHp: '576',
    spd: '83',
    startingAp: '134',
    apRecovery: '142',
    accuracy: '102',
    evade: '320',
    critRate: '10',
    critDmg: '150',

    // Attribute Boost
    slashBoost: '0',
    pierceBoost: '0',
    crushBoost: '0',
    heatBoost: '0',
    coldBoost: '0',
    electricBoost: '0',
    immaterialBoost: '4',
    poisonBoost: '4',

    // Attribute Defense
    slashDef: '0',
    pierceDef: '0',
    crushDef: '0',
    heatDef: '20',
    coldDef: '20',
    electricDef: '20',
    immaterialDef: '20',
    poisonDef: '20',
    blockRate: '0',
  },

  // Character Description
  description:
    'The first and most exalted Arcane Elemental, born from the refined power of the Rift and embodying the wishes of all mortals from worlds destroyed.',

  // Weapon Information
  weapon: {
    name: 'The Eye of Cosmos',
    type: 'EX Arcane Orb',
    rarity: 'EX',
    image: '/images/games/horizon-walker/weapons/Gridelda_WP.jpg',
    stats: {
      weaponMagicAtk: '91.0',
      maxHpBonus: '+35.0%',
    },
    uniqueSkills: {
      theRiverOfStars: {
        name: 'The River of Stars',
        type: 'Unique',
        description:
          "During battle, Magic ATK increases by 80% and Crush Boost increases by 40%. Each ally's combat skill damage increases by 32% during the first turn after the start of the round, and when an ally other than self uses a skill, recovers HP equal to 24% of own Magic ATK. Using a skill targeting an ally grants the [Purification] effect.",
      },
      theRendezvous: {
        name: 'The Rendezvous',
        type: 'Griselda Signature',
        description:
          'Once per Round, when using the "Quantum Singularity" Skill, grants the [Arcane Purge] effect to allies excluding Arcane Elementals.',
        note: 'This signature skill only activates when Gridelda equips this weapon.',
      },
    },
  },

  // Character Profile
  profile: {
    age: 'Unknown',
    racial: 'Arcane Elemental',
    homeland: 'Unknown',
    height: '184cm',
    birthday: 'Unknown',
    bwhRatio: '111(K)-70-120',
  },

  // Character Story
  story:
    'On some planets, the refined power of the Rift is referred to as "Arcane." And from this arcane power, embodying the wishes of all mortals from worlds destroyed by the Rift, a spiritual being called an "Arcane Elemental" sometimes comes into existence. Among them, Griselda was the first arcane elemental and remains the most exalted of all grand elementals. Nothing is known about where or when Griselda was born on any planet. One moment she was in Noctis Nebula, and the next, she was on Earth.\\n\\nEven on Earth, she used her immense mental power to help mortals. Earthlings cheered her on, and she responded to their hopes, diligently tearing Abominations to shreds. At some point, however, she began to think. Perhaps it was all the media created by culturally advanced humans that had led her to an epiphany. She wondered what the meaning of her existence was, and if the disappearance of the Rift would strip her of her purpose. She became deeply introspective, contemplating her own existence.',

  // Unique Traits
  uniqueTraits: {
    limitlessWillpower: {
      name: 'Limitless Willpower',
      description: 'Formation Cost +2, Intelligence 2, Agility 1, Vitality 1',
    },
    entangledThreads: {
      name: 'Entangled Threads',
      description:
        'Activate the level 1 passive skill [Dual Entanglement]. [Dual Entanglement]: The combat skill DMG of allies, excluding yourself, increases by 24%, and the basic attack DMG increases by 4%. When allies excluding self use a combat skill, they will gain 5 AP at the start of the next round.',
    },
    elementalOfMagic: {
      name: 'Elemental of Magic',
      description: 'Magic ATK 20%, Max HP -10%',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the Chosen Human.',
    },
  },

  // Skills and Passive
  skills: {
    arcaneExplosion: {
      name: 'Arcane Explosion',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '57%',
      },
      description:
        'Releases arcane energy, causing a massive explosion. Deals Immaterial DMG equal to 57% of Magic ATK to enemies within a 3m Circular Range at the designated location, and Additional Crush DMG equal to 57% of Magic ATK. When attacking with this skill, temporarily increases ACC by 100%.',
    },
    arcanePurge: {
      name: 'Arcane Purge',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'At the start of the round, grants the [Arcane Purge] effect to allies except Arcane Elementals. When the [Arcane Purge] effect expires, the Arcane Elemental on the battlefield gains 1 stack of [Pure Energy].',
    },
    undefinedSpace: {
      name: 'Undefined Space',
      level: '10/10',
      type: 'Skill',
      apCost: 47,
      cooldown: 2,
      description:
        "Bends space with overwhelming arcane power. Increases the SPD of all allies (excluding self) by 190% of the Arcane Elemental's base AP recovery until the end of their turn, and creates an [Undefined Space] zone at the target location for 3 rounds. Allies within the [Uncertain Space] zone recover a portion of AP spent on movement. Enemies within the zone are periodically pulled toward its center.",
    },
    certainFortune: {
      name: 'Certain Fortune',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "On hit, grants all allies a [Banish Misfortune] shield for 1 round (does not stack), and restores HP to allies within [Undefined Space] equal to 38% of the Arcane Elemental's Max HP. The lower the target's current HP, the more HP is restored—up to an additional 40%.",
    },
    quantumSingularity: {
      name: 'Quantum Singularity',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '190%',
      },
      description:
        "Can be activated by consuming 3 stacks of [Pure Energy]. Unleashes overwhelming arcane force to collapse space. After use, reduces the caster's AP Recovery by 20 for 1R. Deals Immaterial DMG equal to Magic ATK × 190% and Additional Crush DMG equal to 190% of Magic ATK to enemies within a 6m radius at the target location. This Additional Crush DMG increases based on the target's missing HP, up to 10×. While using this skill, ACC is temporarily increased by 300%.",
    },
    reversalOfCausality: {
      name: 'Reversal of Causality',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "If an ally with the [Arcane Purge] effect attacks and at least one target is struck with a Weak Point hit, their Melee and Ranged ATK increase by 190% of the Queen of Arcane Elemental's Magic ATK for the rest of that turn. At the end of that turn, the [Arcane Purge] effect is removed.",
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawGrideldaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const grideldaData = sanitizeCharacterData(rawGrideldaData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Limitless\s+Willpower|Entangled\s+Threads|Dual\s+Entanglement|Elemental\s+of\s+Magic|Arcane\s+Purge|Pure\s+Energy|Undefined\s+Space|Uncertain\s+Space|Banish\s+Misfortune|Purification|The\s+River\s+of\s+Stars|The\s+Rendezvous|shield|massive\s+explosion|space\s+manipulation|periodically\s+pulled)\b/gi,
  percentages: /\b(\d{1,3}%)(?:\s*×\s*\d+)?/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|grants?|recovers?|restores?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?|\d+×?)\b/gi,
  keywords:
    /\b(?:temporarily|overwhelming|arcane\s+power|elemental|spiritual\s+being|grand\s+elementals|Noctis\s+Nebula|Abominations|introspective|contemplating|chosen\s+human|weak\s+point\s+hit|missing\s+HP|combat\s+skill|basic\s+attack|formation\s+cost)\b/gi,
  attributes:
    /\b(?:AP|Magic\s+ATK|Melee\s+ATK|Ranged\s+ATK|Immaterial|Crush|Physical|Slash|Pierce|Heat|Cold|Electric|Poison|SPD|ACC|Max\s+HP|HP|Intelligence|Agility|Vitality|AP\s+Recovery|Crush\s+Boost)\b/gi,
};

// Export sanitized highlighting patterns
export const grideldaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const grideldaSEO = {
  title: 'Gridelda - Horizon Walker Character Guide',
  description:
    'Complete guide for Gridelda, an EX rarity Mage character in Horizon Walker. The first and most exalted Arcane Elemental with space manipulation and powerful support abilities.',
  keywords: [
    'Gridelda',
    'Horizon Walker',
    'EX rarity',
    'mage',
    'arcane elemental',
    'magic user',
    'area damage',
    'support',
    'space manipulation',
    'team buffer',
    'immaterial damage',
    'the eye of cosmos',
    'guide',
    'stats',
    'build',
  ],
};
