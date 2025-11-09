// Leah Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawLeahData = {
  // Basic Character Information
  name: 'Leah',
  image: 'Leah', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 7, // Deployment cost
  tags: [
    'Support',
    'Mage',
    'Catsidhe',
    'Beastlands',
    'Valolana',
    'Magic User',
    'Team Buffer',
    'AP Support',
    'Healing',
    'Summoner',
    'Immaterial Damage',
    'Area Support',
    'High Evasion',
    'Buff Stacking',
    'Cat Spirit',
    'Priestess',
    'Extra Action',
    'Status Cleansing',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '4',
    technic: '5',
    intelligence: '19',
    vitality: '12',
    agility: '13',

    // Key Stats
    meleeAtk: '51',
    rangedAtk: '64',
    magicAtk: '255',
    maxHp: '768',
    spd: '117',
    startingAp: '135',
    apRecovery: '117',
    accuracy: '102',
    evade: '207',
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
    slashDef: '10',
    pierceDef: '10',
    crushDef: '10',
    heatDef: '0',
    coldDef: '0',
    electricDef: '0',
    immaterialDef: '0',
    poisonDef: '0',
    blockRate: '10',
  },

  // Character Description
  description:
    'The proud and graceful priestess of Valolana who guides spirits and wields their power in battle, leading both allies and kin with poise.',

  // Character Profile
  profile: {
    age: '26',
    racial: 'Catsidhe',
    homeland: 'Beastlands',
    height: '167cm',
    birthday: 'October 15th',
    bwhRatio: '95(L)-51-97',
  },

  // Character Story
  story:
    'Leah, the proud and graceful priestess of Valolana, stands as the representative of her people. She guides their spirits and wields their power in battle, leading both allies and kin with poise. Yet behind her lofty, elegant exterior lies an unexpectedly endearing side. One need only see how much she adores children to notice it. Her fondness for young Delia, who works hard toward independence, reveals a tenderness far removed from her usual prideful demeanor—an innocence that shines through. Leah is also surprisingly impressionable. In her efforts to adjust to life on Earth, she often seeks advice from a local beauty salon, of all places. Even so, she continues striving earnestly for the revival of Valolana. And little by little, almost without realizing it herself, she has begun to show glimpses of the feelings she holds for the Human.',

  // Gift Preferences
  gifts: {
    hamburgSteak: {
      name: 'Hamburg Steak',
      type: 'Likes',
      bonus: 'None',
    },
    catnipPouch: {
      name: 'Catnip Pouch',
      type: 'Favorite',
      bonus: 'None',
    },
    mangroveLeaf: {
      name: 'Mangrove Leaf',
      type: 'Favorite',
      bonus: 'None',
    },
    terrarium: {
      name: 'Terrarium',
      type: 'Favorite',
      bonus: '+10% Evade',
    },
  },

  // Unique Traits
  uniqueTraits: {
    theDarlingPriestess: {
      name: 'The Darling Priestess',
      rarity: 'Unique',
      description: 'Formation Cost +1, Weakpoint Angle reduced by 70°',
    },
    valolanasDuty: {
      name: "Valolana's Duty",
      rarity: 'Unique',
      description:
        "Activates the Level 1 passive skill [Echoes of Blessing]. [Echoes of Blessing]: Allies under [Swiftpaw's Blessing] gain +25% Melee ATK and +15% Combat Skill DMG during another ally's turn. Allies under [Proudclaw's Blessing] gain +6% Additional DMG Boost. If the ally is from Valolana, these effects are enhanced, up to 85% Melee ATK, 77% Combat Skill DMG, and 43% Additional DMG Boost. These cat spirits offer greater aid to those with ties to Valolana...",
    },
    catsidhe: {
      name: 'Catsidhe',
      rarity: 'Unique',
      description: 'Agility 2',
    },
    interested: {
      name: 'Interested',
      rarity: 'Unique',
      description: 'Special trait with no listed characteristics.',
    },
  },

  // Skills and Passive
  skills: {
    soulflameStrike: {
      name: 'Soulflame Strike',
      level: '10/10',
      type: 'Skill',
      apCost: 40,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        target: '114%',
        splash: '48%',
        damageType: 'Immaterial',
      },
      description:
        "Rings the bell to summon the soul's flame. Deals 114% of Magic ATK as Immaterial DMG to the targeted enemy and 48% of Magic ATK as Splash Immaterial DMG to enemies within a 6m, 40° cone around the target.",
    },
    sereneEye: {
      name: 'Serene Eye',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "At the start of battle, if the user's base Evasion is 260 or higher, the user's Crit Rate increases by 24% and all enemies take 9% more damage. If the user's base Evasion is 470 or higher, the user's Crit Rate increases by 56% and all enemies take 18% more damage.",
    },
    swiftpawsBlessing: {
      name: "Swiftpaw's Blessing",
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 2,
      description:
        "A swift Cat Spirit playfully visits an ally. If another spirit is already present, a bit of 'mischief' may occur... Grants the chosen ally (excluding the user) [Purification] and the [Swiftpaw's Blessing] effect for 2R, and grants one instance of [Extra Action]. During this [Extra Action], only Proudclaw's Blessing and Standby may be used.\n\nProudclaw's Blessing (Available during Extra Action): A proud Cat Spirit approaches the chosen ally. Cannot be applied where a Swiftpaw is already present. Grants the ally [Purification] and the [Proudclaw's Blessing] effect for 2R while also increasing the user's Magic ATK by 80% for 2R.",
      effects: {
        purification: {
          name: 'Purification',
          description:
            'Removes [Taunt], [Fear], [Sleep], [Madness], [Stun], and [Focus Disruption].',
        },
        extraAction: {
          name: 'Extra Action',
          description:
            "After acting during the user's turn, gains 1 extra action. During this extra action, only Proudclaw's Blessing and Standby can be used. However, if no Active skills can be used with the Remaining AP, the Extra Action is not granted.",
        },
        swiftpawsBlessing: {
          name: "Swiftpaw's Blessing",
          description:
            "Grants 15 AP when applied. Reduces Aggro Adjustment by 12 and increases SPD by 120%. Increases Pierce Boost by 10.0% + 8.0% of the user's Base Evasion.",
        },
        proudclawsBlessing: {
          name: "Proudclaw's Blessing",
          description:
            "Grants 15 AP when applied. (This AP is not granted if cast on the user.) Reduces Aggro Adjustment by 12, increases SPD by 120%, and Accuracy by 180%. Increases Poison Boost by 10.0% + 8.0% of the user's Base Evasion.",
        },
      },
    },
    spiritclawRite: {
      name: 'Spiritclaw Rite',
      level: '1/1',
      type: 'Skill',
      apCost: 15,
      cooldown: 2,
      description:
        'Offer a rite to the Cat Spirit and summon the spirit of a Summon: Wisp Cat at the designated location. Summons an uncontrollable Summon: Wisp Cat and grants the user the [Shadowfall] effect for 2 rounds. When summoned, any previously existing Summon: Wisp Cat will return. At the start of each wave, the cooldown is reduced by 1 round.',
      effects: {
        summonWispCat: {
          name: 'Summon: Wisp Cat',
          description:
            "Base Max HP: 150% of the user's stat, Base Evasion: 150% of the user's stat, Base AP upon Summon: Fixed at 0, Has a very high Aggro Adjustment by default. When attacked, the Aggro Adjustment gradually decreases over 4 hits until it reaches a normal level.",
        },
        shadowfall: {
          name: 'Shadowfall',
          description: 'Increases Magic ATK by 169% of Base Evasion.',
        },
      },
    },
    soulflameFury: {
      name: 'Soulflame Fury',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '418%',
        damageType: 'Immaterial',
      },
      description:
        'When [Spiritclaw Rite] is used, this skill becomes available for 2R. Countless cat spirits claw through the air. Deal 418% of Magic ATK as Immaterial DMG to enemies in a 3.6m × 7.5m rectangle ahead. For each point of INT above 15 or AGI above 13, Combat Skill DMG increases by 15%. For each point of VIT above 10, Crit DMG increases by 16%.',
    },
  },

  // EX Weapon Information
  weapon: {
    name: 'EX Mana Shard - Blessed Cat Bell',
    type: 'Mana Shard',
    rarity: 'EX',
    image: 'Leah_WP.jpg',
    stats: {
      weaponMagicAtk: '63.0',
      evade: '+126.0%',
    },
    uniqueSkills: {
      linkToSpiritRealm: {
        name: 'Link to the Spirit Realm',
        type: 'Unique',
        description:
          "Increases AP Recovery by 40% during combat. During the user's turn, reduces all enemies' Immaterial DEF by 320. If the user's Base Evasion is 440 or higher, increases all enemies' DMG Taken by 24% during the user's turn.",
      },
      leahSignature: {
        name: 'Leah Signature: Wish You All the Best',
        type: 'Signature',
        description:
          "Increases Crit Rate by 18% and Immaterial Boost by 22% during combat. Reduces the AP cost of 'Spiritclaw Rite' by 100%. The Pierce Boost granted by [Swiftpaw's Blessing] also increases the target's Slash Boost and Crush Boost by 85% of that value. The Poison Boost granted by [Proudclaw's Blessing] also increases the target's Fire, Cold, Electric, and Immaterial Boost by 85% of that value. When attacking with 'Soulflame Fury' grants allies with 70% HP or less a [Shadow Veil] shield for 2R.",
      },
    },
    effects: {
      shadowVeil: {
        name: 'Shadow Veil',
        description:
          "Grants a shield equal to 12% of the user's Base Evasion and increases Evasion by 15%.",
      },
    },
  },
  // Character-level effects for the Effect Descriptions section
  effects: {
    purification: {
      name: 'Purification',
      description: 'Removes [Taunt], [Fear], [Sleep], [Madness], [Stun], and [Focus Disruption].',
    },
    extraAction: {
      name: 'Extra Action',
      description:
        "After acting during the user's turn, gains 1 extra action. During this extra action, only Proudclaw's Blessing and Standby can be used. However, if no Active skills can be used with the Remaining AP, the Extra Action is not granted.",
    },
    swiftpawsBlessing: {
      name: "Swiftpaw's Blessing",
      description:
        "Grants 15 AP when applied. Reduces Aggro Adjustment by 12 and increases SPD by 120%. Increases Pierce Boost by 10.0% + 8.0% of the user's Base Evasion.",
    },
    proudclawsBlessing: {
      name: "Proudclaw's Blessing",
      description:
        "Grants 15 AP when applied. (This AP is not granted if cast on the user.) Reduces Aggro Adjustment by 12, increases SPD by 120%, and Accuracy by 180%. Increases Poison Boost by 10.0% + 8.0% of the user's Base Evasion.",
    },
    summonWispCat: {
      name: 'Summon: Wisp Cat',
      description:
        "Base Max HP: 150% of the user's stat. Base Evasion: 150% of the user's stat. Base AP upon Summon: Fixed at 0. Has a very high Aggro Adjustment by default. When attacked, the Aggro Adjustment gradually decreases over 4 hits until it reaches a normal level.",
    },
    shadowfall: {
      name: 'Shadowfall',
      description: 'Increases Magic ATK by 169% of Base Evasion.',
    },
    shadowVeil: {
      name: 'Shadow Veil',
      description:
        "Grants a shield equal to 12% of the user's Base Evasion and increases Evasion by 15%.",
    },
  },
};

// Sanitize and validate the character data
export const leahData = sanitizeCharacterData(rawLeahData);
export const leahSEO = {
  title: `${leahData.name} - Horizon Walker Character Guide`,
  description: `Complete guide for ${leahData.name}, ${leahData.rarity} rarity ${leahData.cost} cost ${leahData.tags.slice(0, 3).join(', ')} in Horizon Walker. Detailed stats, skills, EX weapon, and team composition tips.`,
};

// Highlighting patterns for search functionality
const rawHighlighting = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:shield|critical\s+hit|unavoidable|unblockable|counterattack|taunt|weakness\s+attack|buff|debuff|heal|recover|purification|extra\s+action|shadow\s+veil|swiftpaw's\s+blessing|proudclaw's\s+blessing|echoes\s+of\s+blessing)\b/gi,
  percentages: /\b(\d{1,3}%)\b/gi,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|gains?|grants?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:reduces?|deals?|inflicts?|additional|equal\s+to|applies?|gains?|lasting|impossible|successful|activates?|increases?|decreases?|deployed|battle|allies|recovers?|defeated|duration|turn|start|end|rounds?|for\s+\d{1,3}\s+rounds?|for\s+\d{1,3}R)\b/gi,
  attributes:
    /\b(?:AP|Magic\s+ATK|Immaterial|Physical|Slash|Pierce|Crush|Heat|Cold|Electric|Poison|Evasion|ATK|AP\s+recovery|all\s+ATK|DEF|max\s+HP|HP|Speed|Accuracy|Crit\s+Rate|Crit\s+DMG|Pierce\s+Boost|Crush\s+Boost|Slash\s+Boost|Immaterial\s+Boost)\b/gi,
  searchableTerms: [
    leahData.name,
    leahData.rarity,
    leahData.cost.toString(),
    ...leahData.tags,
    'Catsidhe',
    'Valolana',
    'Cat Spirit',
    'Immaterial Damage',
    'Support',
    'Magic User',
  ],
  // Add skill names for searching
  skillNames: Object.keys(rawLeahData.skills || {})
    .map(key => rawLeahData.skills[key]?.name)
    .filter(Boolean),
  // Add trait names for searching
  traitNames: Object.keys(rawLeahData.uniqueTraits || {})
    .map(key => rawLeahData.uniqueTraits[key]?.name)
    .filter(Boolean),
};

export const leahHighlighting = sanitizeHighlightPatterns(rawHighlighting);

export { rawLeahData };
