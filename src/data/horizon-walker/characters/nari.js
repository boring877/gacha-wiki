// Nari Character Data - Horizon Walker
const nariData = {
  // Basic Character Information
  name: 'Nari',
  image: 'Nari', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 6, // Deployment cost
  tags: [
    'Ranged DPS',
    'Sniper',
    'Pierce Damage',
    'Stance Fighter',
    'Critical Damage',
    'Positioning',
    'Area Attack',
    'Precision',
    'Mobility',
    'AP Management',
    'Rifle User',
    'Orke',
    'Sharpshooter',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '11',
    technic: '12',
    intelligence: '9',
    vitality: '12',
    agility: '11',

    // Key Stats
    meleeAtk: '140',
    rangedAtk: '153',
    magicAtk: '115',
    maxHp: '832',
    spd: '84',
    startingAp: '121',
    apRecovery: '122',
    accuracy: '107',
    evade: '204',
    critRate: '10',
    critDmg: '158',

    // Attribute Boosts
    slashBoost: '0',
    pierceBoost: '8',
    crushBoost: '0',
    heatBoost: '0',
    coldBoost: '0',
    electricBoost: '0',
    immaterialBoost: '0',
    poisonBoost: '0',

    // Attribute Defenses
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

  // Character Profile
  profile: {
    age: '31',
    racial: 'Orke',
    homeland: 'Orke Republic, Morrim Island',
    height: '182cm',
    birthday: 'February 43th',
    bwhRatio: '113(O)-60-120',
  },

  // Character Story
  story: `Nari's family, the Taeha family, had long served as vassals to the Daeyeon family. Nari herself always believed that she would serve the Daeyeon family as well, and it was decided that she would specifically serve Juha, a member of the Daeyeon family. Nari accompanied Juha as part of the delegation sent to Earth, ensuring Juha's safe arrival. Fortunately, Nari was a true soldier—skilled in maintaining a poker face and rarely showing her emotions. She thought of Juha, whose words often contradicted her actions, as an adorable mistress and resolved to assist her as much as possible. Especially after discovering Juha's interest in the Human Sovereign, she decided to help her mistress pursue her feelings, believing that love would greatly contribute to Juha's emotional growth. Nari began studying Earthlings' ways of love, and, in order to put that knowledge to use, she decided to become a Vanguard of the Human Sovereign.`,

  // Character Skills
  skills: {
    skill1: {
      gameKey: 'StandardizedShooting',
      icon: 'UI_SkillIcon_Rifle',
      name: 'Military Shooting',
      level: '10/10',
      type: 'Active',
      apCost: 45,
      cooldown: 0,
      damage: {
        type: 'Ranged ATK',
        value: 'Ranged ATK 114%',
      },
      description:
        'Fires an accurate shot at the enemy with a rifle. On hit, deals 114% of Ranged ATK as Pierce DMG.',
    },
    skill2: {
      gameKey: 'RollingMove',
      icon: 'UI_SkillIcon_RollingMove',
      name: 'Combat Roll',
      level: '10/10',
      type: 'Active',
      apCost: 30,
      cooldown: 0,
      description: 'Jump low to the designated location and gain AP of 38.',
    },
    skill3: {
      gameKey: 'PrecisionFiringPosition',
      icon: 'UI_SkillIcon_PrecisionFiringPosition',
      name: 'Precision Shooting Stance',
      level: '10/10',
      type: 'Active',
      apCost: 42,
      cooldown: 0,
      description:
        "Assumes the optimal stance for shooting. Gains the [Precision Shooting Stance] effect, enabling the use of the 'Combat Roll' skill while the effect is active. After using the skill, it changes to 'Cancel Precision Shooting Stance'. [Precision Shooting Stance]: Increases Ranged ATK by 133%. Increases Piercing Enhancement by 8%. Increases the range of the 'Military Shooting' skill by 2.8 m. Increases AP consumption by 15. During the effect, movement is disabled, and incoming attacks cannot be evaded.",
    },
    skill4: {
      gameKey: 'FocusFiring',
      icon: 'UI_SkillIcon_FocusFiring',
      name: 'Pinpoint Shooting',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Using the [Combat Roll] skill or striking an enemy with [Marked Target] grants [Shooting Focus], lasting until the end of your next turn. [Shooting Focus]: Increases Ranged ATK by 133%.',
    },
    skill5: {
      gameKey: 'DeathBulletOfPenetration',
      icon: 'UI_SkillIcon_DeathBulletOfPenetration',
      name: 'Piercing Aether Bullet',
      level: '10/10',
      type: 'Active',
      apCost: 60,
      cooldown: 0,
      description:
        'Fires a bullet that pierces everything in its path. After using this skill, you are pushed slightly backward, and your AP Recovery decreases by 15% until the start of the next round. Deals Piercing Damage equal to 342% of your Ranged ATK to all enemies in a 0.5m x 40m rectangular area. If only one enemy is hit, it is treated as a Weak Spot Attack.',
    },
    skill6: {
      gameKey: 'SilentInside',
      icon: 'UI_SkillIcon_SilentInside',
      name: 'Inner Tranquility',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "During battle, Critical Damage increases by 80%. Using the 'Combat Roll' skill increases its AP cost by 10 but reduces its cooldown by 1 round immediately after use.",
    },
  },

  // Character Unique Traits
  uniqueTraits: {
    trait1: {
      name: "Juha's Aide",
      description:
        "Unlocks the Level 1 Passive Skill [Executioner's Rifle]. [Executioner's Rifle]: If the user has [The Executioner], the cooldown of 'Piercing Aether Bullet' is reduced by 2 rounds.",
    },
    trait2: {
      name: 'Born Sharpshooter',
      description: 'Formation Cost +2, Technic +2, Agility +5, Vitality +1',
    },
    trait3: {
      name: 'Orke',
      description: 'Technic +1, Ranged ATK +5%, Accuracy +5%',
    },
    trait4: {
      name: 'Interested',
      description: 'Interested in the chosen Human. Unlocks at Gift Affection Level 5: becomes active after reaching 2,000 affection points through gift-giving.',
    },
  },

  // Character Weapon
  weapon: {
    name: "Zamiel",
    flavor: "Zamiel amplifies its weapon's firepower using magical energy, imbued with the blessing of the Orkean Saints. This blessing grants significant boosts to an Orkean Marksman's abilities, making them far deadlier in battle. Zamiel's destructive power is so immense that its shots are often mistaken for magic.",
    type: "Rifle",
    rarity: 'EX',
    image: "Weapon_FullIMG_Rifle_ForNari",
    imageOnR2: true,
    maxLevel: 60,
    stats: {
      "Ranged ATK (weapon)": "77",
      "Ranged ATK (%)": "+49%",
    },
    uniqueSkills: {
      unique: {
        name: "Star Shooter",
        type: 'Unique',
        description: "During battle, Pierce Boost increases by {20,25,30,35,40}%. At the start of your turn, Critical Rate increases by {20,25,30,35,40}%. This effect is removed at the end of the turn or upon moving.",
      },
      signature: {
        name: "Nari Exclusive: Aether Bullet Sharpshooter",
        type: 'Signature',
        description: "During combat, the AP consumption of the 'Precision Shooting Stance' skill is reduced by 40. When using this skill, the 'Piercing Aether Bullet' skill changes to a directional attack with an increased attack width of 1 meter. After using the 'Combat Roll' skill from the basic stance, the user can follow up with 'Precision Shooting Stance' for additional responses.",
      },
    },
    levelStats: {
      "Ranged ATK (weapon)": [12.1, 77.0],
      "Ranged ATK (%)": [7.7, 49.0],
    },
    exLevels: {
      effects: [
        { name: "During battle, Pierce Boost increases", valuesByLevel: "20% / 25% / 30% / 35% / 40%" },
        { name: "At the start of your turn, Critical Rate increases", valuesByLevel: "20% / 25% / 30% / 35% / 40%" },
      ],
    },
  },
  rarityStages: {
    'EX': {
      strength: 9,
      technic: 12,
      intelligence: 9,
      vitality: 9,
      agility: 10,
      maxHp: 640,
      meleeAtk: 115,
      rangedAtk: 153,
      magicAtk: 115,
      evade: 192,
      apRecovery: 119,
      startingAp: 118
    },
    'EX 1': {
      strength: 9,
      technic: 12,
      intelligence: 9,
      vitality: 10,
      agility: 10,
      maxHp: 704,
      meleeAtk: 115,
      rangedAtk: 153,
      magicAtk: 115,
      evade: 192,
      apRecovery: 119,
      startingAp: 118
    },
    'EX 2': {
      strength: 9,
      technic: 12,
      intelligence: 9,
      vitality: 11,
      agility: 10,
      maxHp: 768,
      meleeAtk: 115,
      rangedAtk: 153,
      magicAtk: 115,
      evade: 192,
      apRecovery: 119,
      startingAp: 118
    },
    'EX 3': {
      strength: 9,
      technic: 12,
      intelligence: 9,
      vitality: 11,
      agility: 11,
      maxHp: 768,
      meleeAtk: 115,
      rangedAtk: 153,
      magicAtk: 115,
      evade: 204,
      apRecovery: 122,
      startingAp: 121
    },
    'EX 4': {
      strength: 10,
      technic: 12,
      intelligence: 9,
      vitality: 11,
      agility: 11,
      maxHp: 768,
      meleeAtk: 128,
      rangedAtk: 153,
      magicAtk: 115,
      evade: 204,
      apRecovery: 122,
      startingAp: 121
    },
    'EX 5': {
      strength: 11,
      technic: 12,
      intelligence: 9,
      vitality: 11,
      agility: 11,
      maxHp: 768,
      meleeAtk: 140,
      rangedAtk: 153,
      magicAtk: 115,
      evade: 204,
      apRecovery: 122,
      startingAp: 121
    },
    'EX 6': {
      strength: 11,
      technic: 12,
      intelligence: 9,
      vitality: 12,
      agility: 11,
      maxHp: 832,
      meleeAtk: 140,
      rangedAtk: 153,
      magicAtk: 115,
      evade: 204,
      apRecovery: 122,
      startingAp: 121
    },
  },
  heroId: 25,

};

export const nari = nariData;

// SEO Data
export const nariSEO = {
  title: `${nari.name} - Horizon Walker Character Guide | GachaWiki`,
  description: `Complete guide for ${nari.name}, an ${nari.rarity}-rarity ${nari.profile?.racial || 'character'} from Horizon Walker. Includes stats, skills, traits, and signature weapon details.`,
};

// Character-specific highlighting patterns
export const nariHighlighting = {
  // Character-specific skill highlighting
  skills: [
    'Military Shooting',
    'Combat Roll',
    'Precision Shooting Stance',
    'Pinpoint Shooting',
    'Piercing Aether Bullet',
    'Inner Tranquility',
    'Shooting Focus',
    'Marked Target',
    "Executioner's Rifle",
  ],
  // Character-specific trait highlighting
  traits: ["Juha's Aide", 'Born Sharpshooter', 'Orke', 'Interested'],
  // Status effects and keywords
  keywords: [
    'Pierce DMG',
    'Piercing Damage',
    'Ranged ATK',
    'Critical Damage',
    'Pierce Boost',
    'Critical Rate',
    'AP Recovery',
    'Weak Spot Attack',
    'Technic',
    'Accuracy',
    'Formation Cost',
    'The Executioner',
  ],
};
