// Ahram Character Data - Horizon Walker
// Extracted from the game's decrypted data tables (build 2026-09-01, Steam 24963123)
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawAhramData = {
  name: "Ahram",
  image: "Ahram",
  rarity: "EX",
  cost: 4,
  tags: ["Pierce Damage", "Orke", "Orke Republic, Morrim Island", "EX Rarity"],

  description: "Ahram is an EX rarity hero with a deployment cost of 4, dealing Pierce damage. A Orke from Orke Republic, Morrim Island.",

  stats: {
    // Primaries at max rarity raise (base + class rating increments), from game tables
    strength: '7',
    technic: '18',
    intelligence: '9',
    vitality: '8',
    agility: '13',

    maxHp: '460',
    spd: '89',
    meleeAtk: '89',
    rangedAtk: '230',
    magicAtk: '122',
    startingAp: '129',
    apRecovery: '114',
    accuracy: '102',
    evade: '166',
    critRate: '8',
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
    immaterialDef: '-100',
    poisonDef: '0',
    blockRate: '0',
  },

  profile: {
  "age": "27",
  "racial": "Orke",
  "homeland": "Orke Republic, Morrim Island",
  "height": "189cm",
  "birthday": "July 4th",
  "bwhRatio": "94(H)-55-100"
},

  uniqueTraits: {
    orkeanCombatSupport: { name: 'Orkean Combat Support', description: 'Activates the Level 1 passive skill [Orkean Combat Support]. When [Issue Orders] is triggered, Orkean allies activate special effects. Nari: Performs a Support Attack with [Piercing Aether Bullet]. Juha: Performs a Support Attack with [Military Shooting], then follows up with an additional Reaction using [Military Shooting].' },
    orke: { name: 'Orke', description: 'Technic +1, Ranged ATK +5%, Accuracy +5%' },
    combatReadiness: { name: 'Combat Readiness', description: 'Ranged ATK +20%, Max HP -10%' },
    interested: { name: 'Interested', description: 'Unlocks at Gift Affection Level 5: becomes active after reaching 2,000 affection points through gift-giving. Special trait with no listed characteristics.' },
  },

  skills: {
    standardPistolShot: {
      gameKey: "StandardPistolShot",
      icon: "UI_SkillIcon_StandardPistolShot",
      name: "Sidearm Draw & Fire",
      type: 'Skill',
      description: "Fires a pistol at the enemy. Deals Pierce DMG equal to N% of Ranged ATK.",
    },
    commandIssued: {
      gameKey: "CommandIssued",
      icon: "UI_SkillIcon_CommandIssued",
      name: "Issue Orders",
      type: 'Skill',
      description: "When Ahram attacks an enemy, allies perform Support Attacks against that target.",
    },
    wideAreaSuppressiveFire: {
      gameKey: "WideAreaSuppressiveFire",
      icon: "UI_SkillIcon_WideAreaSuppressiveFire",
      name: "Wide-Area Suppression",
      type: 'Skill',
      description: "Unleashes a barrage of pistol fire to suppress multiple enemies. Deals N% of Ranged ATK as Pierce DMG and applies [Suppression] to targets hit for 1R. [Suppression]: Reduces the target's Pierce DEF and Evasion by {165,180,195,210,225,240,255,270,285,300}% of Ahram's Ranged ATK, and prevents them from Blocking or Counterattacking.",
    },
    battleMoraleBoost: {
      gameKey: "BattleMoraleBoost",
      icon: "UI_SkillIcon_BattleMoraleBoost",
      name: "Rallying Cry",
      type: 'Skill',
      description: "At the start of battle, allies' Ranged ATK increases by {33,36,39,42,45,48,51,54,57,60}%.",
    },
    massFrontlineControl: {
      gameKey: "MassFrontlineControl",
      icon: "UI_SkillIcon_MassFrontlineControl",
      name: "Theater Control",
      type: 'Skill',
      description: "Using this skill grants 1 [Extra Action], allowing you to choose one of the following skills: [Fight On], [Assault Formation], or [Defense Formation]. Only one command can be active at a time. [Theater Control] is treated as a Standby skill. [Fight On]: Allies other than yourself gain 100 AP and 100% SPD. At the end of the turn this effect is activated, they recover {55,60,65,70,75,80,85,90,95,100}% of the AP spent on movement, then [Fight On] is removed. When [Fight On] expires, 100 AP and 100% SPD are lost. The effects of [Fight On] can only be applied once per round. [Assault Formation]: For 1R, allies other than yourself gain Ranged ATK equal to {165,180,195,210,225,240,255,270,285,300}% of Ahram's Ranged ATK, and Pierce Boost increases by {55,60,65,70,75,80,85,90,95,100}%. [Defense Formation]: For 1R, allies other than yourself gain All DEF equal to {110,120,130,140,150,160,170,180,190,200}% of Ahram's Ranged ATK and have their Weak Point removed. In addition, at the start of each turn, they recover HP equal to 10% of Ahram's Ranged ATK.",
    },
    overwhelmingCommand: {
      gameKey: "OverwhelmingCommand",
      icon: "UI_SkillIcon_OverwhelmingCommand",
      name: "Overwhelming Command",
      type: 'Skill',
      description: "At the start of battle, increases the Support Attack DMG of allies other than yourself by {55,60,65,70,75,80,85,90,95,100}%.",
    },
  },
  rarityStages: {
    'EX': {
      strength: 7,
      technic: 14,
      intelligence: 9,
      vitality: 8,
      agility: 11,
      maxHp: 460,
      meleeAtk: 89,
      rangedAtk: 179,
      magicAtk: 122,
      evade: 140,
      apRecovery: 109,
      startingAp: 124
    },
    'EX 1': {
      strength: 7,
      technic: 15,
      intelligence: 9,
      vitality: 8,
      agility: 11,
      maxHp: 460,
      meleeAtk: 89,
      rangedAtk: 192,
      magicAtk: 122,
      evade: 140,
      apRecovery: 109,
      startingAp: 124
    },
    'EX 2': {
      strength: 7,
      technic: 16,
      intelligence: 9,
      vitality: 8,
      agility: 11,
      maxHp: 460,
      meleeAtk: 89,
      rangedAtk: 204,
      magicAtk: 122,
      evade: 140,
      apRecovery: 109,
      startingAp: 124
    },
    'EX 3': {
      strength: 7,
      technic: 16,
      intelligence: 9,
      vitality: 8,
      agility: 12,
      maxHp: 460,
      meleeAtk: 89,
      rangedAtk: 204,
      magicAtk: 122,
      evade: 153,
      apRecovery: 112,
      startingAp: 127
    },
    'EX 4': {
      strength: 7,
      technic: 17,
      intelligence: 9,
      vitality: 8,
      agility: 12,
      maxHp: 460,
      meleeAtk: 89,
      rangedAtk: 217,
      magicAtk: 122,
      evade: 153,
      apRecovery: 112,
      startingAp: 127
    },
    'EX 5': {
      strength: 7,
      technic: 17,
      intelligence: 9,
      vitality: 8,
      agility: 13,
      maxHp: 460,
      meleeAtk: 89,
      rangedAtk: 217,
      magicAtk: 122,
      evade: 166,
      apRecovery: 114,
      startingAp: 129
    },
    'EX 6': {
      strength: 7,
      technic: 18,
      intelligence: 9,
      vitality: 8,
      agility: 13,
      maxHp: 460,
      meleeAtk: 89,
      rangedAtk: 230,
      magicAtk: 122,
      evade: 166,
      apRecovery: 114,
      startingAp: 129
    },
  },
  story: 'Born an albino in a society that shunned those of her kind, Ahram grew up alone in an orphanage. To survive, she had only one path before her: enlist in the military and distinguish herself in battle. In the militaristic society of Orke, it was the only future available to a small, defenseless child. Fortunately, Ahram possessed extraordinary talent. She displayed an undeniable aptitude for every form of combat the Orke military valued and revered. Recognizing her potential, the military raised her as an elite officer, and Ahram quickly proved herself on the battlefield. It was hardly surprising. The gift for war inherited from parents she never knew had found its perfect match in her desperate will to survive. Yet exceptional ability often comes at a price. Whether it was her relentless drive or the envy that greatness inevitably invites, Ahram\'s meteoric rise through the ranks, combined with her status as an outcast albino and her complete lack of personal ties, gradually made her an uncomfortable presence within the military. In the end, those who rise above the rest inevitably draw unwanted attention. Before long, Ahram found herself dispatched to Earth. The Orke military sent her away, removing her from the battlefields that had defined her life - the very places that had given her a reason to live and the future she believed awaited her. Now assigned as one of the Human God\'s Vanguards, Ahram finds herself standing at a crossroads. Unsure of what kind of life lies ahead, she quietly hopes that, somewhere at the end of this unfamiliar path, she will discover a new purpose worth devoting herself to.',

  heroId: 67,

  weapon: {
    name: "Ruthless Judgment",
    flavor: "Struggle is cruel, yet therein lies its beauty. A firearm was born as nothing more than a tool for killing, created solely to secure strategic and tactical superiority. Yet somewhere along the way, it became inseparable from the cold elegance of death, acquiring a beauty all its own. Such a sentiment is only natural in Orke, a militaristic society that reveres strength above all else. For those who celebrate the beauty of war, it is only fitting that the weapons they wield should be beautiful as well. To Orke's master gunsmiths, a firearm is more than a weapon - it is a work of art, the culmination of a lifetime devoted to their craft. That artistry lies in employing every technique and resource imaginable to pursue perfection. Among their finest creations, a select few transcend mere craftsmanship. Through the fusion of arcane power and engineering, they become masterpieces that defy the ordinary laws of physics. They possess not only devastating performance, but also a lethal elegance capable of captivating the eye at a single glance - gleaming with a beauty as dangerous as the death they were created to deliver.",
    type: "Dual Pistols",
    rarity: 'EX',
    image: "Weapon_FullIMG_DualPistol_ForAhram",
    imageOnR2: false,
    maxLevel: 60,
    stats: {
      "Ranged ATK (weapon)": "91",
    },
    uniqueSkills: {
      unique: {
        name: "Focused Target",
        type: 'Unique',
        description: "During battle Ranged ATK increases by 30%. During battle Pierce Boost increases by 40%. During battle Crit DMG increases by 50%. At the start of battle gain 25 AP. Whenever an ally other than yourself attacks Crit Rate increases by 10% for 2R. Stacks up to 10 times. On a successful attack deals Additional Pierce DMG equal to 100% of Ranged ATK.",
      },
      signature: {
        name: "Ahram Signature: Tactical Encouragement",
        type: 'Signature',
        description: "At the start of battle, grants allies [Tactical Offensive Formation]. [Tactical Offensive Formation]: When it is not the target's turn, Crit DMG and Pierce Boost increase by 50%.",
      },
    },
    levelStats: {
      "Ranged ATK (weapon)": [14.3, 91.0],
    },
    exLevels: {
      descByLevel: ["During battle Ranged ATK increases by 10%. At the start of battle gain 5 AP.", "During battle Ranged ATK increases by 15%. During battle Pierce Boost increases by 10%. At the start of battle gain 10 AP.", "During battle Ranged ATK increases by 20%. During battle Pierce Boost increases by 20%. During battle Crit DMG increases by 30%. At the start of battle gain 15 AP.", "During battle Ranged ATK increases by 25%. During battle Pierce Boost increases by 30%. During battle Crit DMG increases by 40%. At the start of battle gain 20 AP. Whenever an ally other than yourself attacks Crit Rate increases by 5% for 2R. Stacks up to 10 times.", "During battle Ranged ATK increases by 30%. During battle Pierce Boost increases by 40%. During battle Crit DMG increases by 50%. At the start of battle gain 25 AP. Whenever an ally other than yourself attacks Crit Rate increases by 10% for 2R. Stacks up to 10 times. On a successful attack deals Additional Pierce DMG equal to 100% of Ranged ATK."],
    },
  },
};

// Sanitize and validate the character data
export const ahramData = sanitizeCharacterData(rawAhramData);
export const ahramSEO = {
  title: `Ahram - Horizon Walker Character Guide`,
  description: `Complete guide for Ahram, EX rarity 4 cost hero in Horizon Walker. Skills, traits, profile and team tips.`,
};

const rawHighlighting = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^\[\]]{1,150})\]/g,
  buffsDebuffs: /\b(?:shield|critical\s+hit|unavoidable|unblockable|counterattack|taunt|weakness\s+attack|buff|debuff|heal|recover|purification|extra\s+action)\b/gi,
  percentages: /\b(\d{1,3}%)\b/gi,
  keywords: /\b(?:reduces?|deals?|inflicts?|additional|equal\s+to|applies?|gains?|grants?|lasting|successful|activates?|increases?|decreases?|deployed|battle|allies|recovers?|defeated|duration|turn|start|end|rounds?|for\s+\d{1,3}\s+rounds?)\b/gi,
  attributes: /\b(?:AP|Magic\s+ATK|Immaterial|Physical|Slash|Pierce|Crush|Heat|Cold|Electric|Poison|Evasion|ATK|AP\s+recovery|all\s+ATK|DEF|max\s+HP|HP|Speed|Accuracy|Crit\s+Rate|Crit\s+DMG)\b/gi,
  searchableTerms: [
    "Ahram",
    "EX",
    4,
    ...rawAhramData.tags,
  ],
  skillNames: Object.keys(rawAhramData.skills || {})
    .map(key => rawAhramData.skills[key]?.name)
    .filter(Boolean),
  traitNames: Object.keys(rawAhramData.uniqueTraits || {})
    .map(key => rawAhramData.uniqueTraits[key]?.name)
    .filter(Boolean),
};

export const ahramHighlighting = sanitizeHighlightPatterns(rawHighlighting);

export { rawAhramData };
