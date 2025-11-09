// Everette Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawEveretteData = {
  // Basic Character Information
  name: 'Everette',
  image: 'Everette', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 8, // Deployment cost
  tags: [
    'Mage',
    'Magic User',
    'Area Damage',
    'Support',
    'Teleportation',
    'Crowd Control',
    'Team Buffer',
    'Heat Damage',
    'Immaterial Damage',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '5',
    technic: '7',
    intelligence: '30',
    vitality: '13',
    agility: '13',

    // Key Stats
    meleeAtk: '64',
    rangedAtk: '89',
    magicAtk: '496',
    maxHp: '832',
    spd: '83',
    startingAp: '117',
    apRecovery: '112',
    accuracy: '102',
    evade: '171',
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
    slashDef: '10',
    pierceDef: '10',
    crushDef: '10',
    heatDef: '50',
    coldDef: '50',
    electricDef: '50',
    immaterialDef: '50',
    poisonDef: '0',
    blockRate: '10',
  },

  // Character Description
  description:
    'The awakened Sorceress Queen of the Highland Elves, wielding immense magical power and ancient arcane knowledge to protect her people.',

  // Weapon Information
  weapon: {
    name: "The Queen's Platinum Staff",
    type: 'EX Staff',
    rarity: 'EX',
    image: 'Everette_WP.jpg',
    stats: {
      weaponMagicAtk: '77.0',
      startingApBonus: '+49.0',
    },
    uniqueSkills: {
      epilogue: {
        name: 'Epilogue',
        type: 'Unique',
        description:
          'Once per round, at the start of your turn, your magic ATK increases by 0.8% for each unit of AP you hold above 100. (For example, holding 300 AP results in a magic ATK increase of 160%)',
      },
      eternalQueen: {
        name: 'The Eternal Queen',
        type: 'Signature',
        description: 'AP Recovery increases by 12%.',
        note: 'This signature skill only activates when Everette equips this weapon.',
      },
    },
  },

  // Character Profile
  profile: {
    age: '997',
    racial: 'Highland Elf',
    homeland: 'Kingdom of Platinum Bough, Skyplateau Palace',
    height: '188cm',
    birthday: '??',
    bwhRatio: '112(N)-62-115',
  },

  // Character Story
  story:
    'At the highest point of the Noctis Nebula world lies the heart of the ancient, exalted Kingdom of Platinum Bough, where the slumbering Sorceress Queen resides. This Elven Queen, whose transcendent power once caused even the spirits to tremble, made a pact: the spirits would watch over all Highland Elves, and in return, she would refrain from interfering in worldly matters, pledging herself to an eternal slumber. All humans and elves alike have long revered this powerful being, calling her the "Eternal Queen."\n\nHowever, when the Rift brought about an age of destruction, the spirits fled from the threat, breaking their golden pact. This caused the queen to awaken. She was horrified to find the Kingdom of Platinum Bough in ruins, and enraged at the spirits for breaking their vow. Determined to protect her people herself, she tore through space with her immense power, opening a passage to Earth—a relatively nearby and intact world—and led her people there. Though the effort took a heavy toll on her strength, the queen felt satisfaction in having guided her people to safety.\n\nNow, as she rests to regain her power, her fury against the Rift remains strong. It won\'t be long before she returns to the battlefield, ready to fight once again.',

  // Unique Traits
  uniqueTraits: {
    ancientArchmage: {
      name: 'Ancient Archmage',
      description:
        'Activates the unique trait [Ancient Archmage]. [Ancient Archmage]: Magic ATK 20%',
    },
    worldContract: {
      name: 'The World Contract',
      description:
        'Activates the Level 3 passive skill [Temporal Manipulation]. [Temporal Manipulation]: During battle, grants all allies the [Time Acceleration] effect and all enemies the [Time Deceleration] effect. [Time Acceleration]: Increases SPD by 12, AP Recovery by 12, and Immaterial DEF by 120. [Time Deceleration]: Reduces ACC by 12%, Evasion by 12%, and Immaterial DEF by 120.',
    },
    highlandElf: {
      name: 'Highland Elf',
      description: 'Intelligence 1, Heat DEF 50, Cold DEF 50, Electric DEF 50, Immaterial DEF 50',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the chosen Human.',
    },
  },

  // Skills and Passive
  skills: {
    summonEnergy: {
      name: 'Summon Energy',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '152%',
      },
      description:
        'Releases pure energy in the form of a heat ray to attack. Deals Heat DMG equal to 152% of magic ATK to enemies within a 1m by 7m rectangular area. This skill cannot be used for a Weakness Attack.',
    },
    spatialShift: {
      name: 'Spatial Shift',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 1,
      description:
        'Crosses through space-time to reach the desired location. Teleports to a specified location within a radius of 18m.',
    },
    starlightGaze: {
      name: 'Starlight Gaze',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 2,
      description:
        'Starlight shines upon the enemy. Applies the [Starlight Gaze] effect to the enemy and grants the [Aurora] effect to the user 3 times. [Starlight Gaze]: Reduces All ATK by 38% and generates a 7m circular [Starlight] area that tracks the target. [Aurora]: While possessing this effect, allies attacking enemies with the [Starlight Gaze] effect inside the [Starlight] area will be supported by [Delayed Aurora].',
    },
    delayedAurora: {
      name: 'Delayed Aurora',
      level: '10/10',
      type: 'Skill',
      apCost: 0,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '152%',
      },
      description:
        'Deals Heat DMG equal to 152% of magic ATK to enemies with the [Starlight Gaze] effect within a 1m by 7m rectangular area. Recovers the HP of all allies within the [Starlight] area by 38% of magic ATK. Consumes one [Aurora] effect. This skill cannot be used for a Weakness Attack.',
    },
    warpedStarlight: {
      name: 'Warped Starlight',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Twisting possibilities to forcibly turn the tide in favor. At the start of each round, increases the CRIT rate of all allies by 19% for 1R. At the start of each round, decreases the CRIT rate of all enemies by 19% for 1R.',
    },
    castStarlightShower: {
      name: 'Cast: Starlight Shower',
      level: '10/10',
      type: 'Skill',
      apCost: 80,
      cooldown: 0,
      description:
        'Prepares a grand spell. During casting, movement, evasion, and response are not possible, and own Aggro Adjustment increases. On the next turn, gains 100 AP to activate the "Starlight Shower" skill. Alternatively, can prepare the spell once more in the same manner. In this case, on the following turn, gains 200 AP to activate the "Starlight Shower - Ultimate" skill.',
    },
    starlightShower: {
      name: 'Starlight Shower',
      level: '10/10',
      type: 'Skill',
      apCost: 100,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '247%',
      },
      description:
        'Calls forth starlight to attack enemies. Deals Immaterial DMG equal to 247% of magic ATK to all enemies within a 5m radius.',
    },
    starlightShowerUltimate: {
      name: 'Starlight Shower - Ultimate',
      level: '10/10',
      type: 'Skill',
      apCost: 200,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '722%',
      },
      description:
        'Calls forth even more starlight to attack enemies. Deals Immaterial DMG equal to 722% of magic ATK to all enemies within a 7m radius.',
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawEveretteData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const everetteData = sanitizeCharacterData(rawEveretteData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})\]/g,
  buffsDebuffs:
    /\b(?:Starlight\s+Gaze|Aurora|Delayed\s+Aurora|Time\s+Acceleration|Time\s+Deceleration|Temporal\s+Manipulation|Starlight|Ancient\s+Archmage|World\s+Contract|Highland\s+Elf|Weakness\s+Attack|Aggro\s+Adjustment)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:teleports?|casting|grand\s+spell|chosen\s+Human|Eternal\s+Queen|Highland\s+Elves|Sorceress\s+Queen|Kingdom\s+of\s+Platinum\s+Bough)\b/gi,
  attributes:
    /\b(?:AP|Magic\s+ATK|Heat|Immaterial|Physical|Slash|Pierce|Crush|Cold|Electric|Poison|Evasion|All\s+ATK|DEF|SPD|Intelligence|CRIT\s+rate|ACC|HP)\b/gi,
};

// Export sanitized highlighting patterns
export const everetteHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const everetteSEO = {
  title: 'Everette - Horizon Walker Character Guide',
  description:
    'Complete guide for Everette, an EX rarity Mage character in Horizon Walker. The awakened Sorceress Queen with powerful area magic and support abilities.',
  keywords: [
    'Everette',
    'Horizon Walker',
    'EX rarity',
    'mage',
    'magic user',
    'Highland Elf',
    'Sorceress Queen',
    'area damage',
    'support',
    'guide',
    'stats',
    'build',
  ],
};
