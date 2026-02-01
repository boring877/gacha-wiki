// Echidna Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawEchidnaData = {
  // Basic Character Information
  name: 'Echidna',
  image: 'Echidna', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 7, // Deployment cost
  tags: [
    'Mage',
    'Arcane Elemental',
    'Magic User',
    'Poison Damage',
    'Immaterial Damage',
    'Crush Damage',
    'Teleportation',
    'Area Damage',
    'High Evasion',
    'High Intelligence',
    'Support Attack',
    'DoT',
    'Debuffer',
    'Team Buffer',
    'Venombound',
    'Toxic',
    'Acid Poison',
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
    magicAtk: '317',
    maxHp: '591',
    spd: '83',
    startingAp: '142',
    apRecovery: '147',
    accuracy: '102',
    evade: '345',
    critRate: '10',
    critDmg: '162',

    // Attribute Boost
    slashBoost: '0',
    pierceBoost: '0',
    crushBoost: '0',
    heatBoost: '0',
    coldBoost: '0',
    electricBoost: '0',
    immaterialBoost: '0',
    poisonBoost: '8',

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
    'A Venombound Elemental born from polluted waters and painful wishes, seeking completeness through the Human God.',

  // Character Profile
  profile: {
    age: 'Unknown',
    racial: 'Arcane Elemental',
    homeland: 'Unknown',
    height: '158cm',
    birthday: 'Unknown',
    bwhRatio: '79(G)-52-91',
  },

  // Character Story
  story:
    "To fight the Abominations, the Federation's weapon factories ran without pause. Caught in a relentless wartime system, there was no room to care about the environment. Acidic wastewater, the pain of those suffering from the Oblivia phenomenon, and their blood—all flowed into the rivers. And when the desperate wish to be freed from that pain finally took root… Echidna was born. But her birth was a misunderstanding. She took that wish as a plea for release through death—and began slaughtering indiscriminately. Even as the screams rang out, a part of her sensed something was wrong. But she had no way to fix it. She continued killing as always—until one day, among the dying minds and tangled regrets, she became aware of the Human God. And with that faint hope, Echidna set off through the desert, in search of the one who might finally make her whole.",

  // Unique Traits
  uniqueTraits: {
    distortedWish: {
      name: 'A Distorted Wish',
      description:
        'Formation Cost +1, Intelligence -7, Vitality +2, Agility +3, Aggro Adjustment -30',
    },
    doNotTouch: {
      name: 'Do Not Touch',
      description:
        "Activates the Level 1 passive skill [Do Not Touch]. [Do Not Touch]: When attacked, inflicts Poison DMG equal to 100% of the accumulated [Acid Venom] stacks on the attacker.",
    },
    elementalOfMagic: {
      name: 'Elemental of Magic',
      description: 'Magic ATK 20%, Max HP -10%',
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
        'At the start of the round, grants the [Arcane Purge] effect to allies except Arcane Elementals. When the [Arcane Purge] effect expires, the Arcane Elemental on the battlefield gains 1 stack of [Pure Energy]. [Arcane Purge]: Becomes a valid target for other abilities of the Arcane Elemental. [Pure Energy]: Increases Magic ATK by 13%, up to 3 stacks.',
    },
    toxicCarrier: {
      name: 'Toxic Carrier',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '114%',
      },
      description:
        'Liquefies her body and seeps into the ground, then erupts from another location, scattering corrosive venom. Teleports to a designated location and deals Magic ATK × 114% as Poison DMG to all enemies within a 4m radius, inflicting 1 stack of [Acid Venom]. This attack cannot trigger Weak Point Attacks and ignores enemy Counterattacks.',
    },
    fleshEatingFroth: {
      name: 'Flesh-Eating Froth',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'When an ally with the [Arcane Purge] effect successfully attacks on their turn, triggers a Support Attack with [Flesh-Eating Froth]. At the end of the turn, the acting ally\'s [Arcane Purge] effect is removed if this Support Attack was triggered. [Flesh-Eating Froth]: Unleashes Poison DMG equal to 114% of the caster\'s Magic ATK to all enemies in a 30° cone within 7m, and applies 1 stack of [Acid Venom].',
    },
    comfortingVenom: {
      name: 'Comforting Venom',
      level: '10/10',
      type: 'Skill',
      apCost: 90,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '380%',
      },
      description:
        'Consumes 3 stacks of [Pure Energy] to activate. Select a target afflicted with [Acid Venom] to overload their body with toxins, causing all accumulated poisons to erupt violently. Deals Poison DMG equal to 380% of Magic ATK to all enemies within 6m, and applies [Venom Reflux]. [Venom Reflux]: Accumulates an additional 285% of all poison stacks the target currently holds, plus an amount equal to 570% of the caster\'s Accuracy.',
    },
    lingeringMiasma: {
      name: 'Lingering Miasma',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Reduces the Poison DEF of all enemies within a 9m radius by 760.',
    },
  },

  // Weapon
  weapon: {
    name: 'Scales of Blight (Arcane Orb)',
    image: 'Echidna_WP.jpg',
    rarity: 'EX',
    type: 'Arcane Orb',
    stats: {
      weaponMagicAtk: '77.0',
      accuracy: '+98.0%',
    },
    uniqueSkills: {
      echoOfAstrea: {
        name: 'Echo of Astrea',
        type: 'Unique',
        description:
          "During battle, your Accuracy increases by 40%. When using a skill, gain +56% to both Poison Boost and Additional DMG Boost until the end of the turn.",
      },
      echidnaSignature: {
        name: 'Echidna Signature: Talon of the Forgotten Sting',
        type: 'Signature',
        description:
          'During battle, increases own Accuracy and Poison Boost by 20%. At the end of a turn in which skill (other than Standby) is used, enemies affected by Lingering Miasma take Additional Poison DMG equal to 85% of their total accumulated poison stacks.',
      },
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawEchidnaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const echidnaData = sanitizeCharacterData(rawEchidnaData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Arcane\s+Purge|Pure\s+Energy|Acid\s+Venom|Venom\s+Reflux|Flesh-Eating\s+Froth|Lingering\s+Miasma|Distorted\s+Wish|Do\s+Not\s+Touch|Elemental\s+of\s+Magic|Echo\s+of\s+Astrea|Talon\s+of\s+the\s+Forgotten\s+Sting|poison\s+dmg|immaterial\s+dmg|crush\s+dmg|support\s+attack|teleport|corrosive\s+venom|massive\s+explosion|arcane\s+energy|poison\s+def|accuracy|poison\s+boost|additional\s+dmg\s+boost)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|grants?|consumes?|restores?|expires?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:elemental|arcane|Venombound|polluted|waters|wishes|Human\s+God|Federation|weapon\s+factories|wastewater|Oblivia|phenomenon|acidic|misunderstanding|slaughter|desert|completeness|toxic|corrosive|teleport|unblockable|circular\s+range|cone|radius|weak\s+point|counterattack|fixed\s+dmg|signature|accuracy|poison|stacks|accumulated)\b/gi,
  attributes:
    /\b(?:AP|Magic\s+ATK|Melee\s+ATK|Ranged\s+ATK|Poison|Immaterial|Crush|ACC|SPD|Max\s+HP|INT|Intelligence|DEF|Boost|Poison\s+DEF|Poison\s+Boost|Additional\s+DMG|Aggro|Formation\s+Cost)\b/gi,
};

// Export sanitized highlighting patterns
export const echidnaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const echidnaSEO = {
  title: 'Echidna - Horizon Walker Character Guide',
  description:
    'Complete guide for Echidna, an EX rarity Venombound Elemental mage in Horizon Walker. Master of poison damage with high evasion, teleportation, and devastating area attacks.',
  keywords: [
    'Echidna',
    'Horizon Walker',
    'EX rarity',
    'mage',
    'arcane elemental',
    'venombound',
    'poison damage',
    'acid venom',
    'high evasion',
    'teleportation',
    'support attack',
    'area damage',
    'immaterial damage',
    'guide',
    'stats',
    'build',
  ],
};
