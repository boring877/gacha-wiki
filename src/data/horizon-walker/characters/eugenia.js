// Eugenia Character Data - Horizon Walker
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawEugeniaData = {
  name: 'Eugenia',
  image: 'Eugenia',
  rarity: 'EX',
  cost: 5,
  tags: [
    'Warrior',
    'Melee Damage',
    'Energy Blade',
    'Transmuter Blade',
    'Arcane Blade',
    'Suprema',
    'High Mobility',
    'Counterattack',
    'Slash Damage',
  ],

  stats: {
    strength: '6',
    technic: '5',
    intelligence: '8',
    vitality: '15',
    agility: '8',
    meleeAtk: '',
    rangedAtk: '',
    magicAtk: '',
    maxHp: '',
    spd: '',
    startingAp: '',
    apRecovery: '',
    accuracy: '',
    evade: '',
    critRate: '',
    critDmg: '',
    slashBoost: '0',
    pierceBoost: '0',
    crushBoost: '0',
    heatBoost: '0',
    coldBoost: '0',
    electricBoost: '0',
    immaterialBoost: '0',
    poisonBoost: '0',
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

  description:
    'A Half-Elf Suprema of the Crownseekers who mastered transmutation to forge arcane energy into a blade, rising to lead her order through discipline and restraint.',

  profile: {
    age: '111',
    racial: 'Half-Elf',
    homeland: 'Northern Highlands, Citadel of Change',
    height: '172cm',
    birthday: 'February 22nd',
    bvhRatio: '79(E)-47-98',
  },

  story:
    'Like many Half-Elves, Eugenia was born into the transmutation school known as the Crownseekers, a faction deeply devoted to the study and refinement of the body. Yet she was unlike her kin. Where others surrendered themselves to instinct and indulgence, Eugenia chose control. Rather than be ruled by desire, she sought to master it. Instead of yielding to the tides of her own blood, she forged that very force into power. From instinct and longing, she shaped a blade of arcane energy\u2014and trained relentlessly in the art of the sword. Her discipline was so absolute that, despite her youth, she rose to the rank of Suprema, the effective leader among the Crownseekers. Through mastery of radiant blade techniques and enchantment, Eugenia advanced by pure merit. More than that, she spread her creed of restraint and endurance among her order. Under her influence, a culture once obsessed with life\'s most primal urges began to cultivate patience, refinement, and control. Now, with the Crownseekers\' stronghold\u2014the Citadel of Change\u2014reduced to ruin by the Rift Crisis, Eugenia offers both sword and sorcery to its restoration. On that path, she carries two unwavering vows: Devotion to the Human God. And the rebirth of the Crownseekers.',

  uniqueTraits: {
    innerDesire: {
      name: 'Inner Desire',
      description:
        'When hidden desires are no longer restrained, a surge of vitality erupts forth.',
    },
    halfElf: {
      name: 'Half-Elf',
      description:
        'Born between human and elf, a race that lives bearing passion and power that border on chaos.',
    },
    energyAlignment: {
      name: 'Energy Alignment',
      description:
        'Understanding energy\u2014both the foundation and the pinnacle of transmutation\u2014enhances recovery and endurance.',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the Human God.',
    },
  },

  skills: {
    energySword: {
      name: 'Energy Sword',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '138%',
      },
      description:
        'Deals Immaterial DMG equal to 138% of Magic ATK to all enemies within range. Coefficient scales from 73% at Lv1 to 138% at Lv10.',
    },
    efficientReconstruction: {
      name: 'Efficient Reconstruction',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'During battle, increases Max HP by 11-20%. For each point of Vitality above 13, increases Immaterial Boost by 16%.',
    },
    energyFormConversion: {
      name: 'Energy Form Conversion',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 0,
      description:
        'Grants [Soul Resonance] to 1 selected ally for 2R and increases their Aggro Adjustment by 50. [Soul Resonance]: Increases Melee ATK and Ranged ATK by 11-20% of the target\'s Max HP. Additionally, for every 200 Max HP of the caster, the final ATK increase is further increased by 10%, up to a maximum additional 100%. When the target successfully attacks, they deal additional Immaterial DMG equal to 100-145% of their Max HP. This damage increases by 1% for every 10 HP lost, up to a maximum of 75%. When the target with the effect is hit, the attacker also takes this Additional Immaterial DMG. Requires Energy Sword Lv3 to unlock.',
    },
    markModulation: {
      name: 'Mark Modulation',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Using [Soul Resonance] increases your Magic ATK by 20-38% of your Max HP. This effect can increase Magic ATK by up to 150-600. When an ally with [Soul Resonance] attacks, they apply [Trace of Light] to the target. When you attack an enemy with [Trace of Light], you deal additional Immaterial DMG equal to 85-166% of the combined value of your Magic ATK and Max HP.',
    },
    rampageOfTheFlow: {
      name: 'Rampage of the Flow',
      level: '10/10',
      type: 'Skill',
      apCost: 75,
      cooldown: 0,
      description:
        'Can only be used while an ally has [Soul Resonance]. Increases the target\'s AP by 40-76, and increases the additional Immaterial DMG triggered by [Soul Resonance] by 60-114%. This effect is removed when [Soul Resonance] ends. Requires Energy Form Conversion Lv3 to unlock.',
    },
  },

  weapon: {
    name: 'Arcane Ball (Eugenia)',
    type: 'EX Spirit Weapon',
    rarity: 'EX',
    image: 'Eugenia_WP.jpg',
    stats: {
      weaponMagicAtk: '77.0',
      accuracy: '',
    },
    uniqueSkills: {
      eugeniaUnique: {
        name: 'Eugenia Unique',
        type: 'Unique',
        description: 'Details pending localized text extraction.',
      },
      eugeniaSignature: {
        name: 'Eugenia Signature',
        type: 'Signature',
        description: 'Signature skill. Details pending localized text extraction.',
        note: 'This signature skill only activates when Eugenia equips this weapon.',
      },
    },
  },
};

const validation = validateCharacterData(rawEugeniaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

export const eugeniaData = sanitizeCharacterData(rawEugeniaData);

const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Energy\s+Sword|Efficient\s+Reconstruction|Energy\s+Form\s+Conversion|Mark\s+Modulation|Rampage\s+of\s+the\s+Flow|Transmuter\s+Blade|Arcane\s+Blade|Suprema)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|grants?|consumes?|restores?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Transmuter\s+Blade|Arcane\s+Blade|Suprema|energy\s+blade|energy\s+form)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|Slash|Pierce|Crush|Heat|Cold|Electric|Immaterial|Poison|SPD|ACC|Max\s+HP|HP|DEF|Intelligence|Agility|Vitality|AP\s+Recovery)\b/gi,
};

export const eugeniaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

export const eugeniaSEO = {
  title: 'Eugenia - Horizon Walker Character Guide',
  description:
    'Complete guide for Eugenia, an EX rarity Warrior character in Horizon Walker. A Transmuter Blade wielding warrior with energy-based melee combat.',
  keywords: [
    'Eugenia',
    'Horizon Walker',
    'EX rarity',
    'warrior',
    'transmuter blade',
    'energy blade',
    'melee damage',
    'guide',
    'stats',
    'build',
  ],
};
