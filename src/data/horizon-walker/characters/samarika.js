// Samarika Character Data - Horizon Walker
const samarikaData = {
  // Basic Character Information
  name: 'Samarika',
  image: 'Samarika', // Character image filename without extension
  rarity: 'S', // EX, SS, S, A, B
  cost: 4, // Deployment cost
  tags: [
    'Melee DPS',
    'Mobility',
    'Debuffer',
    'Poison',
    'Slash',
    'Evasion',
    'Single Target',
    'Gap Closer',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '11',
    technic: '11',
    intelligence: '5',
    vitality: '10',
    agility: '17',

    // Key Stats
    meleeAtk: '153',
    rangedAtk: '153',
    magicAtk: '64',
    maxHp: '576',
    spd: '143',
    startingAp: '120',
    apRecovery: '122',
    accuracy: '102',
    evade: '217',
    critRate: '10',
    critDmg: '150',

    // Attribute Boosts
    slashBoost: '4',
    pierceBoost: '4',
    crushBoost: '4',
    heatBoost: '6',
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
    age: '241',
    racial: 'Swamp Elf',
    homeland: 'Azuremarsh Kingdom, Miora Forest',
    height: '176cm',
    birthday: 'March 28th',
    bwhRatio: '88(J)-51-105',
  },

  // Character Story
  story: `For Samarika, her older sister Kalina was a figure of both love and hatred. This sentiment had taken root when she was very young, as Kalina, under the pretext of training her, used all of the renowned swamp elf hero Elkalin's combat techniques on her. Naturally, she was nothing more than a sparring target for Kalina, and her resentment only grew. The tipping point came when Kalina applied for and secured the position of Swamp Ranger officer that Samarika had set her eyes on. To Samarika, who dreamed of living independently from Kalina, this was a bolt from the blue. Having experienced multiple conflicts over time, Samarika no longer wanted to be subordinate to her sister after moving to Earth. Inspired by her insights from the East Asian Federation, she left her sister's vigilante group and established her own, gaining quite a reputation under the name "Hanseong Owls."`,

  // Character Skills
  skills: {
    skill1: {
      gameKey: 'HarpeSlash',
      icon: 'UI_SkillIcon_DualSword',
      name: 'Harpe Art',
      level: '10/10',
      type: 'Active',
      apCost: 30,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: 'Melee ATK 114%',
      },
      description:
        'The swamp elf extends their long arms and swiftly swings the harpe. Deals Slash DMG equal to 114% of melee ATK.',
    },
    skill2: {
      gameKey: 'RangerOnTheVine',
      icon: 'UI_SkillIcon_RangerOnTheVine',
      name: 'Hunter on the Vine',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Increases Mobility by 10. After attacking, Evasion increases by 570% until the end of the turn. Additionally, during a basic attack, Melee ATK increases proportionally to the straight distance moved. Up to 10m movement grants a maximum of 114% increase.',
    },
    skill3: {
      gameKey: 'BogDownPrey',
      icon: 'UI_SkillIcon_BogDownPrey',
      name: "Swamp's Arrest",
      level: '10/10',
      type: 'Active',
      apCost: 60,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: 'Melee ATK 190%',
      },
      description:
        'Leaps over the target while throwing a swamp trap. Deals Slash DMG equal to 190% of melee ATK and has a 100% chance to apply [Slow] effect for 2R. Weakness attacks cannot be performed with this skill. [Slow]: Reduces SPD by 40%.',
    },
    skill4: {
      gameKey: 'TheFangsOfABog',
      icon: 'UI_SkillIcon_TheFangsOfABog',
      name: 'Fang of the Swamp',
      level: '10/10',
      type: 'Active',
      apCost: 90,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: 'Melee ATK 257%',
      },
      description:
        'Leaps low towards the enemy, delivering a deadly strike while passing by with two Harpe blades. Deals Slash DMG equal to 257% of melee ATK while leaping over the enemy. If the target has the [Slow] effect, deals additional Slash DMG equal to 190% of melee ATK.',
    },
  },

  // Character Unique Traits
  uniqueTraits: {
    trait1: {
      name: 'Vigilante of Justice',
      description: 'Strength +1, Vitality -1',
    },
    trait2: {
      name: 'Swamp Hunting',
      description:
        "Activates the Level 3 passive skill [Hunter's Intuition]. [Hunter's Intuition]: After an attack, has a 90% chance to follow up with [Throw Swamp Trap]. [Throw Swamp Trap]: Throws a swamp trap at the enemy, dealing Poison DMG equal to 36% of Melee ATK to the target and nearby enemies, and apply [Slow] effect for 2R with a probability proportional to the enemy's size. [Slow]: Reduces SPD by 40%.",
    },
    trait3: {
      name: 'Swamp Elf',
      description: 'Starting AP +10, SPD +10%',
    },
    trait4: {
      name: 'Interested',
      description: 'Interested in the chosen Human. Unlocks at Gift Affection Level 5: becomes active after reaching 2,000 affection points through gift-giving.',
    },
  },

  // Character Weapon
  weapon: {
    name: "Nocturnal Watcher",
    flavor: "Lurking in the shadows, the Nocturnal Watcher strikes fear into the hearts of Neo Seoul's villains. Infused with venomous intent, this weapon shows no mercy to those who threaten innocent lives. To the criminals of the slums, it is a blade of silent death - unseen, unrelenting. On dark nights, those with evil in their hearts would be wise to wonder… has the Nocturnal Watcher already drawn near?",
    type: "Twin Swords",
    rarity: 'EX',
    image: "Weapon_FullIMG_DualSword_ForSamarika",
    imageOnR2: true,
    maxLevel: 60,
    stats: {
      "Melee ATK (weapon)": "91",
      "Melee ATK (%)": "+35%",
    },
    uniqueSkills: {
      unique: {
        name: "Silent Wings",
        type: 'Unique',
        description: "During combat, Crit Rate increases by {20,25,30,35,40}%. While it is your turn, enemies afflicted with [Slow] are visible. If you attack and at least one enemy has the [Slow] effect, your Slash Boost and Poison Boost each increase by {40,50,60,70,80}% until the end of the turn.",
      },
      signature: {
        name: "Samarika Signature: Owl Huntress",
        type: 'Signature',
        description: "At the start of battle, gains 30 AP and increases Slash Boost and Poison Boost by 12% of base Evasion. This bonus can reach up to 30%. When successfully hitting an enemy afflicted with [Slow] during your turn, deal additional Poison DMG equal to 9% of base Melee ATK × the total AP spent on skills that turn. This Additional DMG can Crit. The additional Slash DMG dealt by Fang of the Swamp can also Crit. After using this skill, its cooldown is reduced by 2 rounds and you recover 55 AP. Cooldown reduction and AP recovery effect can trigger once every 2 rounds.",
      },
    },
    levelStats: {
      "Melee ATK (weapon)": [14.3, 91.0],
      "Melee ATK (%)": [5.5, 35.0],
    },
    exLevels: {
      effects: [
        { name: "During combat, Crit Rate increases", valuesByLevel: "20% / 25% / 30% / 35% / 40%" },
        { name: "If you attack and at least one enemy has the [Slow] effect, your Slash Boost and Poison Boost each increase", valuesByLevel: "40% / 50% / 60% / 70% / 80%" },
      ],
    },
  },
  rarityStages: {
    'EX': {
      strength: 11,
      technic: 9,
      intelligence: 5,
      vitality: 9,
      agility: 14,
      maxHp: 512,
      meleeAtk: 153,
      rangedAtk: 128,
      magicAtk: 64,
      evade: 179,
      apRecovery: 115,
      startingAp: 113
    },
    'EX 1': {
      strength: 11,
      technic: 9,
      intelligence: 5,
      vitality: 9,
      agility: 15,
      maxHp: 512,
      meleeAtk: 153,
      rangedAtk: 128,
      magicAtk: 64,
      evade: 192,
      apRecovery: 117,
      startingAp: 115
    },
    'EX 2': {
      strength: 11,
      technic: 9,
      intelligence: 5,
      vitality: 9,
      agility: 16,
      maxHp: 512,
      meleeAtk: 153,
      rangedAtk: 128,
      magicAtk: 64,
      evade: 204,
      apRecovery: 120,
      startingAp: 118
    },
    'EX 3': {
      strength: 11,
      technic: 10,
      intelligence: 5,
      vitality: 9,
      agility: 16,
      maxHp: 512,
      meleeAtk: 153,
      rangedAtk: 140,
      magicAtk: 64,
      evade: 204,
      apRecovery: 120,
      startingAp: 118
    },
    'EX 4': {
      strength: 11,
      technic: 10,
      intelligence: 5,
      vitality: 9,
      agility: 17,
      maxHp: 512,
      meleeAtk: 153,
      rangedAtk: 140,
      magicAtk: 64,
      evade: 217,
      apRecovery: 122,
      startingAp: 120
    },
    'EX 5': {
      strength: 11,
      technic: 10,
      intelligence: 5,
      vitality: 10,
      agility: 17,
      maxHp: 576,
      meleeAtk: 153,
      rangedAtk: 140,
      magicAtk: 64,
      evade: 217,
      apRecovery: 122,
      startingAp: 120
    },
    'EX 6': {
      strength: 11,
      technic: 11,
      intelligence: 5,
      vitality: 10,
      agility: 17,
      maxHp: 576,
      meleeAtk: 153,
      rangedAtk: 153,
      magicAtk: 64,
      evade: 217,
      apRecovery: 122,
      startingAp: 120
    },
  },
  heroId: 21,

};

export const samarika = samarikaData;

// SEO Data
export const samarikaSEO = {
  title: `${samarika.name} - Horizon Walker Character Guide | GachaWiki`,
  description: `Complete guide for ${samarika.name}, a ${samarika.rarity}-rarity ${samarika.profile?.racial || 'character'} from Horizon Walker. Includes stats, skills, traits, and signature weapon details.`,
};

// Character-specific highlighting patterns
export const samarikaHighlighting = {
  // Character-specific skill highlighting
  skills: [
    'Harpe Art',
    'Hunter on the Vine',
    "Swamp's Arrest",
    'Fang of the Swamp',
    'Throw Swamp Trap',
    "Hunter's Intuition",
  ],
  // Character-specific trait highlighting
  traits: ['Vigilante of Justice', 'Swamp Hunting', 'Swamp Elf', 'Interested'],
  // Status effects and keywords
  keywords: [
    'Slow',
    'Slash DMG',
    'Poison DMG',
    'Melee ATK',
    'Mobility',
    'Evasion',
    'SPD',
    'Starting AP',
    'Crit Rate',
    'Slash Boost',
    'Poison Boost',
  ],
};
