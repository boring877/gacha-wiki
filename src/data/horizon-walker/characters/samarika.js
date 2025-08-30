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
    strength: '14',
    technic: '8',
    intelligence: '5',
    vitality: '10',
    agility: '17',

    // Key Stats
    meleeAtk: '192',
    rangedAtk: '115',
    magicAtk: '64',
    maxHp: '576',
    spd: '157',
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
      name: 'Hunter on the Vine',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Increases Mobility by 10. After attacking, Evasion increases by 570% until the end of the turn. Additionally, during a basic attack, Melee ATK increases proportionally to the straight distance moved. Up to 10m movement grants a maximum of 114% increase.',
    },
    skill3: {
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
      description: 'Interested in the chosen Human.',
    },
  },

  // Character Weapon
  weapon: {
    name: 'EX Twin Swords - Nocturnal Watcher',
    image: '/images/games/horizon-walker/weapons/Samarika_WP.jpg',
    rarity: 'EX',
    type: 'Twin Swords',
    stats: {
      weaponMeleeAtk: '91',
      meleeAtkBonus: '35',
    },
    uniqueSkills: {
      skill1: {
        name: 'Silent Wings',
        type: 'Unique',
        description:
          'During combat, Crit Rate increases by 40%. While it is your turn, enemies afflicted with [Slow] are visible. If you attack and at least one enemy has the [Slow] effect, your Slash Boost and Poison Boost each increase by 80% until the end of the turn.',
      },
      skill2: {
        name: 'Samarika Signature: Owl Huntress',
        type: 'Signature',
        description:
          'During combat, Poison Boost increases by 85% of base Slash Boost, and Slash Boost increases by 85% of base Poison Boost. When successfully attacking an enemy with the [Slow] effect during your turn, deals Additional Poison DMG equal to 9% of base Melee ATK × the amount of AP spent on skills that turn. This Additional Poison DMG can crit. After using Fang of the Swamp, its cooldown is reduced by 2R. On a successful hit, restores 30 AP.',
      },
    },
  },
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
