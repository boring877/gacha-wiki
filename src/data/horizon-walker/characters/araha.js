// Araha Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawArahaData = {
  // Basic Character Information
  name: 'Araha',
  image: 'Araha', // Character image filename without extension
  rarity: 'SS', // EX, SS, S, A, B
  cost: 4, // Deployment cost
  tags: [
    'Sniper',
    'Ranged Damage',
    'Pierce Damage',
    'Stealth',
    'Support Fire',
    'Critical Damage',
    'Counter Attack',
    'Wood Elf',
    'Accuracy Support',
    'Drone User',
    'Wire Maneuver',
    'Mobility',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '7',
    technic: '19',
    intelligence: '9',
    vitality: '9',
    agility: '10',

    // Key Stats
    meleeAtk: '89',
    rangedAtk: '243',
    magicAtk: '115',
    maxHp: '576',
    spd: '83',
    startingAp: '145',
    apRecovery: '111',
    accuracy: '105',
    evade: '140',
    critRate: '10',
    critDmg: '150',

    // Attribute Boost
    slashBoost: '0',
    pierceBoost: '6',
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
    'A Wood Elf sniper and one of the rare survivors who refused to abandon their forest. Now serves as a Vanguard for Discover, seeking to end the Rift Crisis and rebuild what was lost.',

  // Character Profile
  profile: {
    age: '210',
    racial: 'Wood Elf',
    homeland: 'The Empire, Kaisersberg',
    height: '160cm',
    birthday: 'February 9th',
    bwhRatio: '80(G)-47-88',
  },

  // Character Story
  story:
    "Among the Wood Elves who refused to abandon their forest, few lived to tell the tale. Araha, an archer with flawless aim, was one of the rare survivors. Unlike her kin, her parents had served the Empire, and she had grown up among humans. This background made the decision to flee through a Rift an easy one, but the escape took its toll. The real tragedy wasn't leaving her homeland behind. It was losing her family to the Rift's Oblivia. Grief consumed Araha, but just as she was about to be lost to it, Yeon Chae-young, an agent of the Bureau of Rift Management, pulled her back. \"You can't bring them back... but you can at least make those responsible pay.\" That simple suggestion turned her sorrow into purpose. Araha was a natural with a bow, and adapting to a sniper rifle came easily. Before long, she became one of the few non-humans to be recruited as a Vanguard for Discover. She now has only one goal—to end the Rift Crisis and rebuild what was lost. It's a distant dream, but if there's even the slightest chance of finding her family again—she'll do whatever it takes.",

  // Unique Traits
  uniqueTraits: {
    bullsEye: {
      name: 'Bulls-eye',
      description:
        'Activates the Level 1 passive skill [Bulls-eye]. [Bulls-eye]: At the start of battle, ACC increases by 100% for 1 round.',
    },
    guaranteedHit: {
      name: 'Guaranteed Hit',
      description:
        'Activates the Level 3 passive skill [Sharp Eyes]. [Sharp Eyes]: On successful attack against an enemy, ACC increases by 18%, and all attack skill ranges increase by 24m. Can stack up to 5 times. Lose all stacks when changing position.',
    },
    woodElf: {
      name: 'Wood Elf',
      description: 'Agility 1, AP Recovery 4%',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the Chosen Human.',
    },
  },

  // Weapon Information
  weapon: {
    name: 'EX Rifle - JK220 Artemis',
    type: 'EX Rifle',
    rarity: 'EX',
    image: '/images/games/horizon-walker/weapons/Araha_WP.jpg',
    stats: {
      weaponRangedAtk: '91.0',
      critDmgBonus: '+70.0%',
    },
    uniqueSkills: {
      phantomMenace: {
        name: 'The Phantom Menace',
        type: 'Unique',
        description:
          'During battle, Ranged ATK increases by 30%, and Counterattack DMG and Support Counterattack DMG increase by 32% respectively. At the start of own turn, gains a shield equal to 10% of Max HP. When an ally, excluding self, is attacked, the [Support Ready] effect is granted. Enemies hit by a Support Counterattack will have the [Intimidated] effect applied in a 3m radius around the target for 1 turn. [Intimidated]: All ATK decreases by 25%. [Support Ready]: Ranged ATK increases by 5%, and the effect ends at the end of own turn. Can stack up to 5 times.',
      },
      ghost: {
        name: 'Araha Signature: Ghost',
        type: 'Signature',
        description:
          "The existing [Camouflage: Stealth] effect now allows support counterattacks even while in stealth. Upon defeating an enemy or successfully performing a support counterattack while in stealth, this skill will reactivate and grant the [Camouflage: Stealth] effect again for 3R. When using the 'Wire Maneuver Shot' skill, gain the [ARTEMIS: Scan Battlefield] effect for 2R. The active skill 'Rapid Covert Maneuver' becomes available for used during battle. [ARTEMIS: Scan Battlefield]: Enables support counterattacks. [Camouflage: Stealth]: Enters stealth, preventing enemy skills from targeting. The first attack made while in stealth has a 100% critical hit rate and increases critical damage by 30%. Rapid Covert Maneuver: The AI ARTEMIS stably controls the mobility drone without causing overload. Leaps to a designated location. Upon using this skill, gain the [ARTEMIS: Scan Battlefield] effect for 2R and reacquire the [Camouflage: Stealth] effect for 3R.",
      },
    },
  },

  // Skills and Passive
  skills: {
    sniping: {
      name: 'Sniping',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 0,
      damage: {
        type: 'Ranged ATK',
        value: '190%',
      },
      description:
        'Snipes an enemy with a rifle. Deals Pierce DMG equal to 190% of Ranged ATK and makes the target Unable to Counterattack for 1 round. During this attack, own ACC temporarily decreases by 15%.',
    },
    supportFire: {
      name: 'Support Fire',
      level: '10/1',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Once per round, gains the [Reactive Support Snipe] effect. [Reactive Support: Snipe]: When an ally other than yourself is attacked, performs a support counterattack and gains 12 AP. This effect then immediately vanishes.',
    },
    camouflage: {
      name: 'Camouflage',
      level: '10/10',
      type: 'Skill',
      apCost: 33,
      cooldown: 2,
      description:
        "Uses the drone's optical function to camouflage self. Gains [Camouflage: Stealth] for 3 rounds. Cannot perform Support Counterattack while stealth. [Camouflage: Stealth]: Becomes hidden and cannot be targeted by enemy skills. For one attack, CRIT rate increases by 100%, and CRIT DMG increases by 30%.",
    },
    wireManeuverShot: {
      name: 'Wire Maneuver Shot',
      level: '10/10',
      type: 'Skill',
      apCost: 90,
      cooldown: 0,
      damage: {
        type: 'Ranged ATK',
        value: '285%',
      },
      description:
        "Quickly fires at the enemy and uses all drones' ultra-lightweight wires to leap 12m away in a straight line from the enemy. Deals Pierce Dmg equal to 285% of your Ranged ATK to enemies hit by the attack. Gain the [Camouflage: Stealth] effect for 3R after landing. This skill can only be used 2 times during battle. [Camouflage: Stealth]: Becomes hidden and cannot be targeted by enemy skills. For one attack, CRIT rate increases by 100%, and CRIT DMG increases by 30%.",
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawArahaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const arahaData = sanitizeCharacterData(rawArahaData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Bulls-eye|Sharp\s+Eyes|Reactive\s+Support\s+Snipe|Camouflage:\s+Stealth|Support\s+Ready|Intimidated|ARTEMIS:\s+Scan\s+Battlefield|Rapid\s+Covert\s+Maneuver|stealth|hidden|counterattack|support\s+counterattack|unable\s+to\s+counterattack|phantom\s+menace|ghost)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|gains?|grants?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Wood\s+Elf|sniper\s+rifle|drone|optical\s+function|ultra-lightweight\s+wires|Bureau\s+of\s+Rift\s+Management|Vanguard|Discover|Rift\s+Crisis|Oblivia|flawless\s+aim|12m\s+away|straight\s+line|3m\s+radius|designated\s+location|AI\s+ARTEMIS|mobility\s+drone|overload|JK220\s+Artemis)\b/gi,
  attributes:
    /\b(?:AP|Ranged\s+ATK|Pierce|Physical|Slash|Crush|Heat|Cold|Electric|Immaterial|Poison|ACC|SPD|CRIT\s+rate|CRIT\s+DMG|HP|Max\s+HP|Counterattack\s+DMG|Support\s+Counterattack\s+DMG|shield|ATK|Weapon\s+Ranged\s+ATK|critical\s+damage)\b/gi,
};

// Export sanitized highlighting patterns
export const arahaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const arahaSEO = {
  title: 'Araha - Horizon Walker Character Guide',
  description:
    'Complete guide for Araha, an SS rarity Wood Elf Sniper character in Horizon Walker. Expert marksman and drone user specializing in stealth operations and support fire.',
  keywords: [
    'Araha',
    'Horizon Walker',
    'SS rarity',
    'sniper',
    'wood elf',
    'ranged damage',
    'pierce damage',
    'stealth',
    'support fire',
    'drone user',
    'counter attack',
    'wire maneuver',
    'EX rifle',
    'JK220 Artemis',
    'signature weapon',
    'guide',
    'stats',
    'build',
  ],
};
