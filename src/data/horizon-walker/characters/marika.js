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
    strength: '20',
    technic: '4',
    intelligence: '4',
    vitality: '7',
    agility: '16',
    meleeAtk: '290',
    rangedAtk: '79',
    magicAtk: '51',
    maxHp: '896',
    spd: '83',
    startingAp: '164',
    apRecovery: '134',
    accuracy: '102',
    evade: '204',
    critRate: '10',
    critDmg: '150',
    slashBoost: '0',
    pierceBoost: '6',
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
    name: "Lamoran Spiraldrive",
    flavor: "Powered by an unknown relic from ancient Lamora, this massive weapon spins on its own, piercing and crushing everything in its path. It stands as one of the planet's more enigmatic creations. Most striking of all is its form - constructed from bent Lamoran weaponry, reshaped into something far larger and more brutal, built for nothing less than total destruction. Yet this endlessly rotating mass of weight and force is not defined by raw power alone. It also channels that strength back into its wielder, sharpening their speed and perception with a strange, otherworldly energy. Because of this, some claim the Lamoran Spiraldrive was never meant purely as a weapon - that it may even have been created to protect, perhaps born from the heart of a parent seeking to shield their child. But judging by its savage appearance… and the devastation it leaves behind, most agree that such notions are little more than wishful thinking.",
    type: "Two-handed sword",
    rarity: 'EX',
    image: "Weapon_FullIMG_TwoHandSword_ForMarika",
    imageOnR2: true,
    maxLevel: 60,
    stats: {
      "Melee ATK (weapon)": "91",
      "Melee ATK (%)": "+35%",
      "Movement": "+35",
    },
    uniqueSkills: {
      unique: {
        name: "Spiral Blade",
        type: 'Unique',
        description: "During battle, your SPD increases by {10,15,20,25,30}%. Each time you attack, Crit DMG increases by {1,2,3,4,5}% for 1R. Stacks up to 10 times.",
      },
      signature: {
        name: "Marika Signature: Wish of Devoted Love",
        type: 'Signature',
        description: "During battle, your SPD increases by 20. When using [Bloodline Awakening], recover 100% of the AP spent on movement during that turn. Additionally, the AP Cost of [Bloodline Awakening] is reduced by 10, and its Cooldown is reduced by 1R.",
        note: "This signature skill only activates when Marika equips this weapon.",
      },
    },
    levelStats: {
      "Melee ATK (weapon)": [14.3, 91.0],
      "Melee ATK (%)": [5.5, 35.0],
      "Movement": [5.5, 35.0],
    },
    exLevels: {
      effects: [
        { name: "During battle, your SPD increases", valuesByLevel: "10% / 15% / 20% / 25% / 30%" },
        { name: "Each time you attack, Crit DMG increases", valuesByLevel: "1% / 2% / 3% / 4% / 5%" },
      ],
    },
  },
  rarityStages: {
    'EX': {
      strength: 16,
      technic: 4,
      intelligence: 4,
      vitality: 7,
      agility: 12,
      maxHp: 896,
      meleeAtk: 237,
      rangedAtk: 79,
      magicAtk: 51,
      evade: 153,
      apRecovery: 123,
      startingAp: 153
    },
    'EX 1': {
      strength: 16,
      technic: 4,
      intelligence: 4,
      vitality: 7,
      agility: 13,
      maxHp: 896,
      meleeAtk: 237,
      rangedAtk: 79,
      magicAtk: 51,
      evade: 166,
      apRecovery: 126,
      startingAp: 156
    },
    'EX 2': {
      strength: 16,
      technic: 4,
      intelligence: 4,
      vitality: 7,
      agility: 14,
      maxHp: 896,
      meleeAtk: 237,
      rangedAtk: 79,
      magicAtk: 51,
      evade: 179,
      apRecovery: 128,
      startingAp: 158
    },
    'EX 3': {
      strength: 17,
      technic: 4,
      intelligence: 4,
      vitality: 7,
      agility: 14,
      maxHp: 896,
      meleeAtk: 250,
      rangedAtk: 79,
      magicAtk: 51,
      evade: 179,
      apRecovery: 128,
      startingAp: 158
    },
    'EX 4': {
      strength: 18,
      technic: 4,
      intelligence: 4,
      vitality: 7,
      agility: 14,
      maxHp: 896,
      meleeAtk: 263,
      rangedAtk: 79,
      magicAtk: 51,
      evade: 179,
      apRecovery: 128,
      startingAp: 158
    },
    'EX 5': {
      strength: 18,
      technic: 4,
      intelligence: 4,
      vitality: 7,
      agility: 16,
      maxHp: 896,
      meleeAtk: 263,
      rangedAtk: 79,
      magicAtk: 51,
      evade: 204,
      apRecovery: 134,
      startingAp: 164
    },
    'EX 6': {
      strength: 20,
      technic: 4,
      intelligence: 4,
      vitality: 7,
      agility: 16,
      maxHp: 896,
      meleeAtk: 290,
      rangedAtk: 79,
      magicAtk: 51,
      evade: 204,
      apRecovery: 134,
      startingAp: 164
    },
  },
  heroId: 64,

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
