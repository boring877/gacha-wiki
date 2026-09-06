// Sharin Build - Zone Nova Character Build
// UR Fire character - Ultimate Support Supporter

export const sharinBuild = {
  name: 'Sharin',
  role: 'Supporter',
  buildType: 'Qi Stacking Team Supporter',
  description:
    "Sharin's passive is what makes her broken. Qi stacks give your whole team +11.5% damage, healing, and shielding per stack (max 10): that's 115% to everything at max. But the real insane part is the energy recovery: +3.3% per stack = 33% extra energy recovery at max. That alone makes your whole team ult way faster. It all stacks passively every 5 seconds, no conditions needed. Her ult buffs your highest ATK unit with +170% ATK and +85% crit damage, and your highest DEF unit with +146% DEF and +84% HP. A1 makes the ult hit TWO targets per category and the first ult is free. She basically makes your entire team better just by existing.",
  skillPriority: [
    {
      skill: 'Passive',
      priority: 1,
      level: 'Level 14',
      reason: 'Best skill - team-wide stacking multiplicative buffs to healing, shielding, damage, and energy recovery that scale throughout the fight',
      description:
        'At the start of battle, all allies gain 1 stack of [Qi] every 5 seconds. Each stack of [Qi] provides: Healing received +11.5%, Shield received +11.5%, Damage dealt +11.5%, Energy recovery efficiency +3.3%. Maximum 10 stacks.',
    },
    {
      skill: 'Ultimate',
      priority: 2,
      level: 'Level 14',
      reason: 'Massive ATK/DEF/Crit DMG/HP buffs to two top allies',
      description:
        'Energy Cost: 3\nThe ally with the highest attack power gains [Extreme Battle Spirit], increasing attack power by 170.1% and critical hit damage by 85.1%, lasting 10 seconds.\n\nThe ally with the highest defense power gains [Tank Heart], increasing defense by 145.8% and maximum health by 84.4%, lasting 10 seconds.',
    },
    {
      skill: 'Auto Skill',
      priority: 3,
      level: 'Level 14',
      reason: 'Consistent ATK/DEF buffing with stacking mechanic',
      description:
        'Cooldown: 7.0s\nThe allied unit with the highest attack power gains [Invigorate], increasing attack power by 60.1% for 10 seconds, up to 4 stacks. The allied unit with the highest defense power gains [Fortify], increasing defense by 48.6% for 10 seconds, up to 4 stacks.',
    },
    {
      skill: 'Normal Attack',
      priority: 4,
      level: 'Level 7',
      reason: 'Basic damage filler',
      description: 'Cooldown: 2.0s\nFires a Fire beam at the enemy, dealing Fire damage equal to 120% attack power to the designated enemy unit.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Bath Time',
      effect:
        "Sharin's exclusive memory card. Provides 32% ATK/DEF boost to all allies and stacking HP increase on skill use.",
      priority: 'Must Have',
      note: '32% ATK/DEF to ALL allies on equip: no conditions. Then every skill she casts bumps team HP by 6%, capping at 60% extra HP after 10 skills. Takes a while to fully stack but the 32% ATK/DEF alone is already huge.',
      characterSpecific: true,
      memoryImage: 'Sharincard',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description:
        'Increases the attack and defense of all allies by 32%. Each time the wearer uses a skill, the maximum HP of all allies increases by 6% (up to 10 stacks).',
    },
    {
      name: 'Unholy Alliance',
      effect: 'UR tier team card: +32% ATK/DEF/HP for the whole party just for equipping it, and every skill the wearer casts stacks +14% team max HP and -5% team skill cooldowns (up to 5). Strong on literally anyone.',
      priority: 'Highly Recommended',
      characterSpecific: false,
      memoryImage: 'unholy-alliance.png',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description: 'Our entire party\'s attack power, defense power, and HP are increased by 32%. Each time the wearer uses a skill, our entire party\'s maximum HP increases by 14% and all skill cooldowns decrease by 5%, stacking up to 5 times.',
    }
  ],
  alternativeMemoryCards: [
    {
      name: 'Hot Spring & Her',
      effect: 'SSS-tier Supporter memory in the memory tier list.',
      characterSpecific: false,
      memoryImage: 'Tamamo-no-maecard.jpg',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description: 'Base Stats Boost: ATK +40%.\nPassive: After allies\' Ultimate deals DMG, increases self Energy Recovery Rate by 200% (4s) and gains 1 stack of [Brilliance] (5s, max 50 stacks).\nEvery 5 stacks of [Brilliance] increases all allies\' DMG by 9%.',
    },
    {
      name: 'Awkward Appearance',
      effect: 'SS-tier Supporter memory in the memory tier list.',
      characterSpecific: false,
      memoryImage: 'Athenacard.jpg',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description: 'At the start of battle, all allied characters\' damage increases by 40%, with Normal Attack damage additionally increased by 40%\n\nEvery 5 Normal Attack damages dealt by the wearer increases team Attack Power by 40%, lasting 5 seconds',
    },
    {
      name: 'The Loneliest Moment',
      effect: 'SS-tier Supporter memory in the memory tier list.',
      characterSpecific: false,
      memoryImage: 'Apollocard.jpg',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description: 'After entering battle, all team members\' damage increases by 40%, Pursue Damage increases by an additional 40%, when the wearer\'s ULT consumes 8 or more energy, all team members\' Energy Gain Efficiency increases by 100% for 10 seconds',
    },
  ],
  runes: {
    primary: 'HP% / DEF%',
    secondary: 'HP% / DEF%',
    stats: ['HP%', 'DEF%'],
    additionalStats: ['HP', 'DEF'],
    buildNote:
      "Her buffs are all flat percentages, not based on her own stats. Yes, the Combination Skill gives 5% ATK/DEF per 500 ATK: but she doesn't deal damage and if she dies, her Qi stacks stop. A dead Sharin buffs nothing. Go full tank stats (HP% + DEF%) to keep her alive so she keeps pumping Qi stacks and ult buffs every rotation.",
    recommendedSets: [
      {
        name: 'Tide 4-piece + Zahn 2-piece',
        englishName: 'Tide [Energy] 4-piece + Zahn 2-piece',
        mainRune: 'Tide',
        secondaryRune: 'Zahn',
        mainRune2Piece: '2-piece: Defense increased by 12%',
        mainRune4Piece:
          "4-piece: Within 10 seconds after combat starts, your team's energy gain efficiency is increased by 30%",
        secondaryRuneEffect: '2-piece: HP +8%',
      },
    ],
    alternativeSets: [
      {
        name: 'Epsilon 4-piece + Zahn 2-piece',
        englishName: 'Epsilon 4-piece + Zahn 2-piece',
        mainRune: 'Epsilon',
        secondaryRune: 'Zahn',
        mainRune2Piece: '2-piece: Attack Power +8%',
        mainRune4Piece:
          '4-piece: After activating ultimate skill, entire team damage increased by 10%, lasts 10 seconds',
        secondaryRuneEffect: '2-piece: HP +8%',
      },
    ],
  },
  mainStatsByPosition: {
    1: {
      name: 'Position 1 - Fixed Main Stat',
      stat: 'HP (Flat Value)',
      description: 'Always HP - no other options',
      isFixed: true,
    },
    2: {
      name: 'Position 2 - Fixed Main Stat',
      stat: 'Attack (Flat Value)',
      description: 'Always Attack - no other options',
      isFixed: true,
    },
    3: {
      name: 'Position 3 - Fixed Main Stat',
      stat: 'Defense (Flat Value)',
      description: 'Always Defense - no other options',
      isFixed: true,
    },
    4: {
      name: 'Position 4 - Variable Main Stats',
      recommendedStat: 'HP (%) / Defense (%)',
      description: 'HP% gives more survivability than DEF%. Prioritize HP% over DEF%.',
      availableStats: [
        'Healing Effectiveness (%)',
        'Critical Rate (%)',
        'Critical Damage (%)',
        'Attack Penetration (%)',
        'Attack (%)',
        'HP (%)',
        'Defense (%)',
      ],
    },
    5: {
      name: 'Position 5 - Variable Main Stats',
      recommendedStat: 'HP (%) / Defense (%)',
      description: 'HP% gives more survivability than DEF%. Prioritize HP% over DEF%.',
      availableStats: [
        'Fire Attribute Damage (%)',
        'Wind Attribute Damage (%)',
        'Ice Attribute Damage (%)',
        'Holy Attribute Damage (%)',
        'Chaos Attribute Damage (%)',
        'Attack (%)',
        'HP (%)',
        'Defense (%)',
      ],
    },
    6: {
      name: 'Position 6 - Variable Main Stats',
      recommendedStat: 'HP (%) / Defense (%)',
      description: 'HP% gives more survivability than DEF%. Prioritize HP% over DEF%.',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
    },
  },
  teamSynergy: {
    goodWith: [
      'Bors',
      'Nephthys',
      'Freya',
      'Keller',
      'Lust - Asmodeus',
      'Nina',
    ],
    note: 'Sharin works in virtually any team composition. Her ultimate automatically targets the best ATK and DEF allies, and Qi provides universal team buffs. She excels with both burst DPS teams and tanky sustain teams.',
  },
  awakenings: {
    keyMilestones: [
      {
        level: 1,
        effect:
          '[Extreme Battle Spirit] and [Tank Heart] now target two friendly units instead of one. The first ultimate skill used after entering the battlefield no longer consumes energy.',
        importance: 1,
        importanceLabel: 'Must Have',
      },
      {
        level: 2,
        effect:
          '[Invigorate] and [Fortify] max stack increased to 6. Upon entering the battlefield, all allies immediately gain 5 stacks of [Qi].',
        importance: 1,
        importanceLabel: 'Must Have',
      },
      {
        level: 3,
        effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 4,
        effect:
          'When using the ultimate skill, all allies gain [Hold the Line], increasing defense by 80% and maximum HP by 25% for 10 seconds.',
        importance: 2,
        importanceLabel: 'Good',
      },
      {
        level: 5,
        effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 6,
        effect:
          'Entire party gains 20% increased all resistances. The duration of [Hold the Line] is extended to indefinitely when using the ultimate skill.',
        importance: 1,
        importanceLabel: 'Must Have',
      },
    ],
  },
};
