export const samarika = {
  id: 'samarika',
  name: 'Samarika',
  slug: 'samarika',
  rarity: 'S',
  cost: 4,
  image: '/images/games/horizon-walker/characters/Samarika.jpg',
  detailUrl: '/guides/horizon-walker/characters/samarika',

  // Profile Information
  profile: {
    age: 241,
    racial: 'Swamp Elf',
    homeland: 'Azuremarsh Kingdom, Miora Forest',
    height: '176cm',
    birthday: 'March 28th',
    bwh: '88(J)-51-105',
  },

  // Story
  story: `For Samarika, her older sister Kalina was a figure of both love and hatred. This sentiment had taken root when she was very young, as Kalina, under the pretext of training her, used all of the renowned swamp elf hero Elkalin's combat techniques on her. Naturally, she was nothing more than a sparring target for Kalina, and her resentment only grew. The tipping point came when Kalina applied for and secured the position of Swamp Ranger officer that Samarika had set her eyes on. To Samarika, who dreamed of living independently from Kalina, this was a bolt from the blue. Having experienced multiple conflicts over time, Samarika no longer wanted to be subordinate to her sister after moving to Earth. Inspired by her insights from the East Asian Federation, she left her sister's vigilante group and established her own, gaining quite a reputation under the name "Hanseong Owls."`,

  // Basic Stats
  stats: {
    strength: 14,
    technic: 8,
    intelligence: 5,
    vitality: 10,
    agility: 17,
  },

  // Key Stats
  keyStats: {
    meleeATK: 192,
    rangedATK: 115,
    magicATK: 64,
    maxHP: 576,
    spd: 157,
    startingAP: 120,
    apRecovery: 122,
    accuracy: 102,
    evade: 217,
    critRate: 10,
    critDMG: 150,
  },

  // Attribute Stats
  attributeStats: {
    slashBoost: 4,
    slashDEF: 0,
    pierceBoost: 4,
    pierceDEF: 0,
    crushBoost: 4,
    crushDEF: 0,
    heatBoost: 6,
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
      name: 'Harpe Art',
      level: '10/10',
      type: 'Active',
      range: '0 R',
      ap: 30,
      damage: 'Melee ATK 114%',
      description:
        'The swamp elf extends their long arms and swiftly swings the harpe. Deals Slash DMG equal to 114% of melee ATK.',
    },
    {
      name: 'Hunter on the Vine',
      level: '10/10',
      type: 'Passive',
      range: '0 R',
      ap: 0,
      description:
        'Increases Mobility by 10. After attacking, Evasion increases by 570% until the end of the turn. Additionally, during a basic attack, Melee ATK increases proportionally to the straight distance moved. Up to 10m movement grants a maximum of 114% increase.',
    },
    {
      name: "Swamp's Arrest",
      level: '10/10',
      type: 'Active',
      range: '2 R',
      ap: 60,
      damage: 'Melee ATK 190%',
      description:
        'Leaps over the target while throwing a swamp trap. Deals Slash DMG equal to 190% of melee ATK and has a 100% chance to apply [Slow] effect for 2R. Weakness attacks cannot be performed with this skill.',
      effects: ['[Slow]: Reduces SPD by 40%.'],
    },
    {
      name: 'Fang of the Swamp',
      level: '10/10',
      type: 'Active',
      range: '3 R',
      ap: 90,
      damage: 'Melee ATK 257%',
      description:
        'Leaps low towards the enemy, delivering a deadly strike while passing by with two Harpe blades. Deals Slash DMG equal to 257% of melee ATK while leaping over the enemy. If the target has the [Slow] effect, deals additional Slash DMG equal to 190% of melee ATK.',
    },
  ],

  // Unique Traits
  uniqueTraits: [
    {
      name: 'Vigilante of Justice',
      type: 'Unique',
      characteristics: ['Strength +1', 'Vitality -1'],
    },
    {
      name: 'Swamp Hunting',
      type: 'Unique',
      characteristics: ["Activates the Level 3 passive skill [Hunter's Intuition]."],
      effects: [
        "[Hunter's Intuition]: After an attack, has a 90% chance to follow up with [Throw Swamp Trap].",
        "[Throw Swamp Trap]: Throws a swamp trap at the enemy, dealing Poison DMG equal to 36% of Melee ATK to the target and nearby enemies, and apply [Slow] effect for 2R with a probability proportional to the enemy's size.",
        '[Slow]: Reduces SPD by 40%.',
      ],
    },
    {
      name: 'Swamp Elf',
      type: 'Unique',
      characteristics: ['Starting AP +10', 'SPD +10%'],
    },
    {
      name: 'Interested',
      type: 'Unique',
      characteristics: [],
    },
  ],

  // Signature Weapon
  signatureWeapon: {
    name: 'EX Twin Swords - Nocturnal Watcher',
    basicStats: {
      weaponMeleeATK: 91.0,
      meleeATKBonus: 35.0,
    },
    uniqueSkills: [
      {
        name: 'Silent Wings',
        type: 'Unique',
        description:
          'During combat, Crit Rate increases by 40%. While it is your turn, enemies afflicted with [Slow] are visible. If you attack and at least one enemy has the [Slow] effect, your Slash Boost and Poison Boost each increase by 80% until the end of the turn.',
      },
      {
        name: 'Samarika Signature: Owl Huntress',
        type: 'Signature',
        description:
          'During combat, Poison Boost increases by 85% of base Slash Boost, and Slash Boost increases by 85% of base Poison Boost. When successfully attacking an enemy with the [Slow] effect during your turn, deals Additional Poison DMG equal to 9% of base Melee ATK × the amount of AP spent on skills that turn. This Additional Poison DMG can crit. After using Fang of the Swamp, its cooldown is reduced by 2R. On a successful hit, restores 30 AP.',
      },
    ],
  },

  // Tags for gameplay categorization
  tags: [
    'Melee DPS',
    'Mobility',
    'Debuffer',
    'Poison',
    'Slash',
    'Evasion',
    'Single Target',
    'Gap Closer',
  ],
};
