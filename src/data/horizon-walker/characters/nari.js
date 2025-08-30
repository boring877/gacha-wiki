export const nari = {
  id: 'nari',
  name: 'Nari',
  slug: 'nari',
  rarity: 'EX',
  cost: 6,
  image: '/images/games/horizon-walker/characters/Nari.jpg',
  detailUrl: '/guides/horizon-walker/characters/nari',

  // Profile Information
  profile: {
    age: 31,
    racial: 'Orke',
    homeland: 'Orke Republic, Morrim Island',
    height: '182cm',
    birthday: 'February 43th',
    bwh: '113(O)-60-120',
  },

  // Story
  story: `Nari's family, the Taeha family, had long served as vassals to the Daeyeon family. Nari herself always believed that she would serve the Daeyeon family as well, and it was decided that she would specifically serve Juha, a member of the Daeyeon family. Nari accompanied Juha as part of the delegation sent to Earth, ensuring Juha's safe arrival. Fortunately, Nari was a true soldier—skilled in maintaining a poker face and rarely showing her emotions. She thought of Juha, whose words often contradicted her actions, as an adorable mistress and resolved to assist her as much as possible. Especially after discovering Juha's interest in the Human Sovereign, she decided to help her mistress pursue her feelings, believing that love would greatly contribute to Juha's emotional growth. Nari began studying Earthlings' ways of love, and, in order to put that knowledge to use, she decided to become a Vanguard of the Human Sovereign.`,

  // Basic Stats
  stats: {
    strength: 7,
    technic: 18,
    intelligence: 9,
    vitality: 8,
    agility: 13,
  },

  // Key Stats
  keyStats: {
    meleeATK: 89,
    rangedATK: 230,
    magicATK: 115,
    maxHP: 576,
    spd: 84,
    startingAP: 126,
    apRecovery: 127,
    accuracy: 107,
    evade: 230,
    critRate: 10,
    critDMG: 158,
  },

  // Attribute Stats
  attributeStats: {
    slashBoost: 0,
    slashDEF: 0,
    pierceBoost: 8,
    pierceDEF: 0,
    crushBoost: 0,
    crushDEF: 0,
    heatBoost: 0,
    heatDEF: 0,
    coldBoost: 0,
    coldDEF: 0,
    electricBoost: 0,
    electricDEF: 0,
    immaterialBoost: 0,
    immaterialDEF: 0,
    poisonBoost: 0,
    poisonDEF: 0,
    blockRate: 0,
  },

  // Skills
  skills: [
    {
      name: 'Military Shooting',
      level: '10/10',
      type: 'Active',
      range: '0 R',
      ap: 45,
      damage: 'Ranged ATK 114%',
      description:
        'Fires an accurate shot at the enemy with a rifle. On hit, deals 114% of Ranged ATK as Pierce DMG.',
    },
    {
      name: 'Combat Roll',
      level: '10/10',
      type: 'Active',
      range: '2 R',
      ap: 30,
      description: 'Jump low to the designated location and gain AP of 38.',
    },
    {
      name: 'Precision Shooting Stance',
      level: '10/10',
      type: 'Active',
      range: '0 R',
      ap: 42,
      description:
        "Assumes the optimal stance for shooting. Gains the [Precision Shooting Stance] effect, enabling the use of the 'Combat Roll' skill while the effect is active. After using the skill, it changes to 'Cancel Precision Shooting Stance'.",
      effects: [
        "[Precision Shooting Stance]: Increases Ranged ATK by 133%. Increases Piercing Enhancement by 8%. Increases the range of the 'Military Shooting' skill by 2.8 m. Increases AP consumption by 15. During the effect, movement is disabled, and incoming attacks cannot be evaded.",
      ],
    },
    {
      name: 'Pinpoint Shooting',
      level: '10/10',
      type: 'Passive',
      range: '0 R',
      ap: 0,
      description:
        'Using the [Combat Roll] skill or striking an enemy with [Marked Target] grants [Shooting Focus], lasting until the end of your next turn.',
      effects: ['[Shooting Focus]: Increases Ranged ATK by 133%.'],
    },
    {
      name: 'Piercing Aether Bullet',
      level: '10/10',
      type: 'Active',
      range: '2 R',
      ap: 60,
      description:
        'Fires a bullet that pierces everything in its path. After using this skill, you are pushed slightly backward, and your AP Recovery decreases by 15% until the start of the next round. Deals Piercing Damage equal to 342% of your Ranged ATK to all enemies in a 0.5m x 40m rectangular area. If only one enemy is hit, it is treated as a Weak Spot Attack.',
    },
    {
      name: 'Inner Tranquility',
      level: '10/10',
      type: 'Passive',
      range: '0 R',
      ap: 0,
      description:
        "During battle, Critical Damage increases by 80%. Using the 'Combat Roll' skill increases its AP cost by 10 but reduces its cooldown by 1 round immediately after use.",
    },
  ],

  // Unique Traits
  uniqueTraits: [
    {
      name: "Juha's Aide",
      type: 'Unique',
      characteristics: ["Unlocks the Level 1 Passive Skill [Executioner's Rifle]."],
      effects: [
        "[Executioner's Rifle]: If the user has [The Executioner], the cooldown of 'Piercing Aether Bullet' is reduced by 2 rounds.",
      ],
    },
    {
      name: 'Born Sharpshooter',
      type: 'Unique',
      characteristics: ['Formation Cost +2', 'Technic +2', 'Agility +5', 'Vitality +1'],
    },
    {
      name: 'Orke',
      type: 'Unique',
      characteristics: ['Technic +1', 'Ranged ATK +5%', 'Accuracy +5%'],
    },
    {
      name: 'Interested',
      type: 'Unique',
      characteristics: ['Interested in the chosen Human.'],
    },
  ],

  // Signature Weapon
  signatureWeapon: {
    name: 'EX Rifle - Zamiel',
    basicStats: {
      weaponRangedATK: 77.0,
      rangedATKBonus: 49.0,
    },
    uniqueSkills: [
      {
        name: 'Star Shooter',
        type: 'Unique',
        description:
          'During battle, Pierce Boost increases by 40%. At the start of your turn, Critical Rate increases by 40%. This effect is removed at the end of the turn or upon moving.',
      },
      {
        name: 'Nari Exclusive: Aether Bullet Sharpshooter',
        type: 'Signature',
        description:
          "During combat, the AP consumption of the 'Precision Shooting Stance' skill is reduced by 40. When using this skill, the 'Piercing Aether Bullet' skill changes to a directional attack with an increased attack width of 1 meter. After using the 'Combat Roll' skill from the basic stance, the user can follow up with 'Precision Shooting Stance' for additional responses.",
      },
    ],
  },

  // Tags for gameplay categorization
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
  ],
};
