// Kotoha Character Data - Horizon Walker
// Extracted from the game's decrypted data tables (build 2026-09-01, Steam 24963123)
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawKotohaData = {
  name: "Kotoha",
  image: "Kotoha",
  rarity: "EX",
  cost: 6,
  tags: ["Immaterial Damage", "Human (Earth)", "East Asian Federation, Tokyo", "EX Rarity"],

  description: "Kotoha is an EX rarity hero with a deployment cost of 6, dealing Immaterial damage. A Human (Earth) from East Asian Federation, Tokyo.",

  stats: {
    // Primaries at max rarity raise (base + class rating increments), from game tables
    strength: '4',
    technic: '8',
    intelligence: '31',
    vitality: '17',
    agility: '17',

    maxHp: '1305',
    spd: '83',
    meleeAtk: '51',
    rangedAtk: '102',
    magicAtk: '476',
    startingAp: '139',
    apRecovery: '127',
    accuracy: '102',
    evade: '228',
    critRate: '10',
    critDmg: '150',

    // Attribute boosts/DEF (Lv 60, full raises, inborn + default kit trait passives included)
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

  profile: {
  "age": "20",
  "racial": "Human (Earth)",
  "homeland": "East Asian Federation, Tokyo",
  "height": "162cm",
  "birthday": "March 5th",
  "bwhRatio": "92(K)-51-91"
},

  uniqueTraits: {
    foxSpiritsBlessing: { name: 'Fox Spirit\'s Blessing', description: 'Max HP +20%, Magic ATK +20%' },
    human: { name: 'Human', description: 'Technic +1, AP Recovery +4%' },
    kindredSpirit: { name: 'Kindred Spirit', description: 'Activates the Level 1 passive skill [Kindred Spirit]. [Kindred Spirit]: Designates the ally affected by [Perfect Unity] as a [Kindred Spirit]. While protected by [Boundary Ward], that ally gains a Barrier equal to 20% of Max HP at the start of the target\'s turn. The Barrier lasts for 1 Round and cannot stack or be refreshed.' },
    interested: { name: 'Interested', description: 'Unlocks at Gift Affection Level 5: becomes active after reaching 2,000 affection points through gift-giving. Special trait with no listed characteristics.' },
  },

  skills: {
    spiritStrike: {
      gameKey: "SpiritStrike",
      icon: "UI_SkillIcon_SpiritStrike",
      name: "Soulstrike",
      type: 'Skill',
      description: "Hurls an ofuda at the target, dealing Immaterial DMG equal to N% of Magic ATK.",
    },
    foresight: {
      gameKey: "Foresight",
      icon: "UI_SkillIcon_Foresight",
      name: "Kitsune's Footsteps",
      type: 'Skill',
      description: "At the start of battle, gains {30,32,34,36,38,40,42,44,46,48} AP, and SPD increases by {55,60,65,70,75,80,85,90,95,100}% until the end of the first turn.",
    },
    artOfLifeIncineration: {
      gameKey: "ArtOfLifeIncineration",
      icon: "UI_SkillIcon_ArtOfLifeIncineration",
      name: "Offering of Life",
      type: 'Skill',
      description: "Earns a stat boost for the rest of the battle by sacrificing current HP. Consumes {63,66,69,72,75,78,81,84,87,90}% of current HP to increase Magic ATK by {40,44,48,52,56,60,64,68,72,76}% for the rest of the battle. Can only be used once per battle.",
    },
    artOfSoulSeparation: {
      gameKey: "ArtOfSoulSeparation",
      icon: "UI_SkillIcon_ArtOfSoulSeparation",
      name: "Art of Perfect Unity",
      type: 'Skill',
      description: "Attaches her soul to an ally, becoming their guide in battle. Activates upon using [Offering of Life]. Grants [Perfect Unity] to the designated ally. [Perfect Unity]: Increases the target's Melee ATK and Magic ATK by {110,120,130,140,150,160,170,180,190,200}% of their base Melee ATK and base Magic ATK, respectively. The final increase is boosted by 2.5% for every 50 Magic ATK the caster has, up to a maximum bonus of 100%. While this effect is active, the caster cannot act or perform Responses, and becomes immune to status effects such as [Taunt] and [Stun]. [Perfect Unity] is removed if the affected ally is defeated or if the Barrier granted by [Boundary Ward] is destroyed.",
    },
    foxDeitysBlessing: {
      gameKey: "FoxDeitysBlessing",
      icon: "UI_SkillIcon_FoxDeitysBlessing",
      name: "Boundary Ward",
      type: 'Skill',
      description: "Upon using [Art of Perfect Unity], gains a Barrier equal to {40,48,56,64,72,80,88,96,104,112}% of the HP lost. When this Barrier is removed, or if the ally affected by [Perfect Unity] is defeated, gains 120 AP. While protected by the Barrier granted by [Boundary Ward], cannot be defeated. Additionally, the first time incoming damage exceeds the Barrier's remaining strength, the excess damage will not reduce HP. However, all incoming attacks are guaranteed to hit.",
    },
  },
  rarityStages: {
    'EX': {
      strength: 4,
      technic: 8,
      intelligence: 20,
      vitality: 10,
      agility: 14,
      maxHp: 768,
      meleeAtk: 51,
      rangedAtk: 102,
      magicAtk: 307,
      evade: 188,
      apRecovery: 119,
      startingAp: 131
    },
    'EX 1': {
      strength: 4,
      technic: 8,
      intelligence: 22,
      vitality: 10,
      agility: 14,
      maxHp: 768,
      meleeAtk: 51,
      rangedAtk: 102,
      magicAtk: 337,
      evade: 188,
      apRecovery: 119,
      startingAp: 131
    },
    'EX 2': {
      strength: 4,
      technic: 8,
      intelligence: 23,
      vitality: 11,
      agility: 14,
      maxHp: 844,
      meleeAtk: 51,
      rangedAtk: 102,
      magicAtk: 353,
      evade: 188,
      apRecovery: 119,
      startingAp: 131
    },
    'EX 3': {
      strength: 4,
      technic: 8,
      intelligence: 25,
      vitality: 12,
      agility: 14,
      maxHp: 921,
      meleeAtk: 51,
      rangedAtk: 102,
      magicAtk: 384,
      evade: 188,
      apRecovery: 119,
      startingAp: 131
    },
    'EX 4': {
      strength: 4,
      technic: 8,
      intelligence: 27,
      vitality: 12,
      agility: 16,
      maxHp: 921,
      meleeAtk: 51,
      rangedAtk: 102,
      magicAtk: 414,
      evade: 215,
      apRecovery: 124,
      startingAp: 136
    },
    'EX 5': {
      strength: 4,
      technic: 8,
      intelligence: 27,
      vitality: 15,
      agility: 17,
      maxHp: 1152,
      meleeAtk: 51,
      rangedAtk: 102,
      magicAtk: 414,
      evade: 228,
      apRecovery: 127,
      startingAp: 139
    },
    'EX 6': {
      strength: 4,
      technic: 8,
      intelligence: 31,
      vitality: 17,
      agility: 17,
      maxHp: 1305,
      meleeAtk: 51,
      rangedAtk: 102,
      magicAtk: 476,
      evade: 228,
      apRecovery: 127,
      startingAp: 139
    },
  },
  story: 'Shiraishi Kotoha was abandoned as an infant outside a shrine in Tokyo dedicated to a fox spirit. When she was found, several white foxes had gathered around her, shielding her from the cold. From that day on, she became known as "the child brought by the foxes," and was taken in as one of the shrine\'s mikos. Raised in a shrine devoted to the fox spirit, Kotoha grew up surrounded by warmth and kindness. Gifted with both a sharp mind and a compassionate heart, she devoted herself to her training from an early age, determined to repay the shrine and the mikos who had given her a home. In time, her extraordinary spiritual power and graceful beauty earned her recognition as the shrine\'s foremost miko. The fox spirit she served guided the souls of the departed to the afterlife, and Kotoha often accompanied it in carrying out that sacred duty. One day, however, while escorting the dead, she sensed an unfamiliar fear among the spirits. Countless Abominations were descending upon Tokyo. Realizing the catastrophe before it unfolded, Kotoha acted without hesitation. She led her fellow mikos and countless civilians to safety in Nagoya, narrowly escaping the disaster that would soon engulf the city. The miracle came at a terrible cost. The shrine was reduced to ruins, and the fox spirit sacrificed its life to protect the people. Having lost both their home and the deity they had faithfully served, the displaced mikos were left without a shrine - or a god. Not long afterward, news reached them that a new Human God had appeared in Neo Seoul. When Kotoha and the other mikos witnessed the Human God\'s divine power from afar, their souls resonated with it. The feeling was so familiar that it was as though they had finally found their way home. After much deliberation, the mikos resolved to serve the Human God as their new deity. Chosen as their representative, Kotoha volunteered to become one of his Vanguards. The moment she arrived at the Bureau of Rift Management, she boldly announced, "The Human God\'s miko has arrived." From that day forward, she became a constant source of headaches for everyone around her.',

  heroId: 69,

  weapon: {
    name: "Ofuda: Fox Spirit's Guidance",
    flavor: "Crafted by a miko for her new god using an ancient talisman-making technique passed down through generations at the Fox Shrine. Originally, these talismans were created to guide wandering souls and ward off the evil spirits that preyed upon them. This one, however, has been transformed into an all-purpose sacred implement, made with this miko's personal feelings poured into it without the slightest restraint. Alongside its original purpose, it has been imbued with countless blessings: Great Fortune · Prosperity · Happy Marriage · Academic Success · Protection from Misfortune · Wishes Fulfilled! Even in the hands of an ordinary person, it is capable of repelling minor evil spirits and warding off everyday misfortune. Lovingly crafted with a miko's unwavering devotion to her god, its power as a sacred implement is anything but ordinary. The stronger one's faith in the god it was created for, the greater its blessings become. Though born from this miko's shamelessly selfish desires, her absolute faith in her god has produced an unexpected miracle. That unwavering devotion has elevated the talisman into something truly extraordinary.",
    type: "Mana Shard",
    rarity: 'EX',
    image: "Weapon_FullIMG_ShardOfSpell_ForShiraishiKotoha",
    imageOnR2: false,
    maxLevel: 60,
    stats: {
      "Magic ATK (weapon)": "77",
      "Magic ATK (%)": "+49%",
    },
    uniqueSkills: {
      unique: {
        name: "Miko's Guidance",
        type: 'Unique',
        description: "At the start of battle, gains {40,45,50,55,60} AP and reduces damage taken by {10,15,20,25,30}% throughout the battle. Whenever a Support skill is used, increases allies' All ATK by {20,28,36,44,52}% for the rest of the battle. ATK increases applied to allies by [Unique: Miko's Guidance] do not stack.",
      },
      signature: {
        name: "Kotoha Signature: Light in the Darkness",
        type: 'Signature',
        description: "Reduces the AP cost of [Offering of Life] to 0 during battle. While [Perfect Unity] is active, Elemental Boost increases by {40}%, plus an additional {4}% for each skill level of [Art of Perfect Unity].",
      },
    },
    levelStats: {
      "Magic ATK (weapon)": [12.1, 77.0],
      "Magic ATK (%)": [7.7, 49.0],
    },
    exLevels: {
      effects: [
        { name: "At the start of battle, gains", valuesByLevel: "40 / 45 / 50 / 55 / 60" },
        { name: "AP and reduces damage taken", valuesByLevel: "10% / 15% / 20% / 25% / 30%" },
        { name: "Whenever a Support skill is used, increases allies' All ATK", valuesByLevel: "20% / 28% / 36% / 44% / 52%" },
      ],
    },
  },
};

// Sanitize and validate the character data
export const kotohaData = sanitizeCharacterData(rawKotohaData);
export const kotohaSEO = {
  title: `Kotoha - Horizon Walker Character Guide`,
  description: `Complete guide for Kotoha, EX rarity 6 cost hero in Horizon Walker. Skills, traits, profile and team tips.`,
};

const rawHighlighting = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^\[\]]{1,150})\]/g,
  buffsDebuffs: /\b(?:shield|critical\s+hit|unavoidable|unblockable|counterattack|taunt|weakness\s+attack|buff|debuff|heal|recover|purification|extra\s+action)\b/gi,
  percentages: /\b(\d{1,3}%)\b/gi,
  keywords: /\b(?:reduces?|deals?|inflicts?|additional|equal\s+to|applies?|gains?|grants?|lasting|successful|activates?|increases?|decreases?|deployed|battle|allies|recovers?|defeated|duration|turn|start|end|rounds?|for\s+\d{1,3}\s+rounds?)\b/gi,
  attributes: /\b(?:AP|Magic\s+ATK|Immaterial|Physical|Slash|Pierce|Crush|Heat|Cold|Electric|Poison|Evasion|ATK|AP\s+recovery|all\s+ATK|DEF|max\s+HP|HP|Speed|Accuracy|Crit\s+Rate|Crit\s+DMG)\b/gi,
  searchableTerms: [
    "Kotoha",
    "EX",
    6,
    ...rawKotohaData.tags,
  ],
  skillNames: Object.keys(rawKotohaData.skills || {})
    .map(key => rawKotohaData.skills[key]?.name)
    .filter(Boolean),
  traitNames: Object.keys(rawKotohaData.uniqueTraits || {})
    .map(key => rawKotohaData.uniqueTraits[key]?.name)
    .filter(Boolean),
};

export const kotohaHighlighting = sanitizeHighlightPatterns(rawHighlighting);

export { rawKotohaData };
