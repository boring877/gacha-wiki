// Marika Character Data - Horizon Walker
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawMarikaData = {
  name: 'Marika',
  image: 'Marika',
  rarity: 'EX',
  cost: 5,
  tags: [
    'Warrior',
    'Greatsword',
    'Melee Damage',
    'Slash Damage',
    'Pierce Damage',
    'Support Attack',
    'Reaction Attack',
    'Pierce Boost',
    'Pierce DEF Down',
    'High Mobility',
    'Critical Damage',
    'GreatSwordmaster',
    'Lamora',
  ],

  stats: {
    strength: '14',
    technic: '4',
    intelligence: '4',
    vitality: '7',
    agility: '10',
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
    'A Lamora-Kessak half-blood Vanguard of the Human God who wields her parents\' greatsword, fighting with overwhelming strength and swift support attacks that pierce through enemy defenses.',

  profile: {
    age: '23',
    racial: 'Human (Lamora)',
    homeland: 'Bel-Lamori Planet',
    height: '151cm',
    birthday: 'August 25th',
    bvhRatio: '93(J)-52-104',
  },

  story:
    'Marika is a Lamora-Kessak half-blood who didn\'t experience the typical identity crisis because her parents genuinely loved each other. She grew up innocent in the Rift but had no friends. To fill the emptiness in her heart, she crossed the Rift and became a Vanguard of the Human God. Now she wields her parents\' greatsword with a premonition that the void in her heart will be filled with warmth.',

  uniqueTraits: {
    halfBlood: {
      name: 'Lamora-Kessak Half-Blood',
      description:
        'Born between Lamora and Kessak bloodlines, inheriting the raw strength of both races without the identity conflict that plagues most half-bloods.',
    },
    focusedVigil: {
      name: 'Focused Vigil',
      description:
        'A targeting mark that enables devastating follow-up attacks, driving the blade through with piercing precision.',
    },
    swiftBlade: {
      name: 'Swift Blade',
      description:
        'Mastery of rapid support and reaction attacks, allowing Marika to chain devastating pierce strikes from multiple angles.',
    },
  },

  skills: {
    bladeOfMight: {
      gameKey: 'BladeOfColossalStrength',
      icon: 'UI_SkillIcon_BladeOfColossalStrength',
      name: 'Blade of Might',
      level: '10/10',
      type: 'Skill',
      apCost: 20,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '138%',
      },
      description:
        'Deals Slash DMG equal to 73-138% of Melee ATK to enemies within range. Inflicts [Focused Vigil] for 2R on hit. When Marika attacks a target with [Focused Vigil], performs a Support Attack with [Sky-Piercing Thrust]. Each Sky-Piercing Thrust grants +20-38% Pierce Boost for 2R (max 10 stacks). [Sky-Piercing Thrust]: Deals Pierce DMG equal to 120-228% of Melee ATK, moves behind target. Counts as Weakness Attack.',
    },
    swiftSupport: {
      gameKey: 'SwiftSupport',
      icon: 'UI_SkillIcon_SwiftSupport',
      name: 'Swift Support',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Using [Sky-Piercing Thrust] grants 20 Action Power. Using [World-Piercing Strike] grants 40 Action Power. Requires Blade of Might Lv3 to unlock.',
    },
    bloodlineAwakening: {
      gameKey: 'BloodlineAwakening',
      icon: 'UI_SkillIcon_BloodlineAwakening',
      name: 'Bloodline Awakening',
      level: '10/10',
      type: 'Skill',
      apCost: 10,
      cooldown: 2,
      description:
        'Awakens Kessak blood within. For 1R: Crit Rate increases by 50-95% of SPD, ignores counterattacks. Excess Crit Rate over 100% adds to Crit DMG. Requires Blade of Might Lv3 to unlock.',
    },
    swiftDestruction: {
      gameKey: 'SwiftDestruction',
      icon: 'UI_SkillIcon_SwiftDestruction',
      name: 'Swift Destruction',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Targets hit by [Sky-Piercing Thrust] are inflicted with [Status Tracking] for 2R. When Marika performs a Support Attack against a target with [Status Tracking], triggers a Reaction Attack with [World-Piercing Strike]. Each World-Piercing Strike reduces all enemies\' Pierce DEF by 150-240 for 2R (max 10 stacks). [World-Piercing Strike]: Deals Pierce DMG equal to 200-380% of Melee ATK, moves behind target. Requires Swift Support Lv3 to unlock.',
    },
  },

  weapon: {
    name: 'Two-Handed Sword (Marika)',
    type: 'EX Spirit Weapon',
    rarity: 'EX',
    image: 'Marika_WP.jpg',
    stats: {
      weaponMeleeAtk: '77.0',
      pierceBoost: '15.0',
    },
    uniqueSkills: {
      marikaUnique: {
        name: 'Spiral Blade',
        type: 'Unique',
        description:
          'During battle, SPD increases by 10-30%. On each attack, Crit DMG increases by 1-5% for 1R. Max 10 stacks.',
      },
      marikaSignature: {
        name: 'Wish of Devoted Love',
        type: 'Signature',
        description:
          'During battle, SPD +20. Using [Bloodline Awakening] recovers 100% of AP spent on movement that turn. Also reduces Bloodline Awakening AP cost by 10 and cooldown by 1R.',
        note: 'This signature skill only activates when Marika equips this weapon.',
      },
    },
  },
};

const validation = validateCharacterData(rawMarikaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

export const marikaData = sanitizeCharacterData(rawMarikaData);

const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Blade\s+of\s+Might|Swift\s+Support|Bloodline\s+Awakening|Swift\s+Destruction|GreatSwordmaster|VanguardGreatSwordmaster|GrandGeneralOfLamora)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|grants?|consumes?|restores?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:GreatSwordmaster|VanguardGreatSwordmaster|GrandGeneralOfLamora|Sky-Piercing\s+Thrust|World-Piercing\s+Strike|Focused\s+Vigil|Status\s+Tracking|Pierce\s+Boost)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|Slash|Pierce|Crush|Heat|Cold|Electric|Immaterial|Poison|SPD|ACC|Max\s+HP|HP|DEF|Intelligence|Agility|Vitality|AP\s+Recovery|Crit\s+Rate|Crit\s+DMG|Pierce\s+DEF|Pierce\s+Boost)\b/gi,
};

export const marikaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

export const marikaSEO = {
  title: 'Marika - Horizon Walker Character Guide',
  description:
    'Complete guide for Marika, an EX rarity Warrior character in Horizon Walker. A GreatSwordmaster wielding a massive blade with swift support attacks and pierce damage.',
  keywords: [
    'Marika',
    'Horizon Walker',
    'EX rarity',
    'warrior',
    'greatsword',
    'GreatSwordmaster',
    'pierce damage',
    'support attack',
    'melee damage',
    'guide',
    'stats',
    'build',
  ],
};
