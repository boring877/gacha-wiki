// Morgan Le Fay Build - Zone Nova Character Build
// SSR Holy character - Holy Supporter Support

export const morganLeFayBuild = {
  name: 'Morgan Le Fay',
  role: 'Supporter',
  buildType: 'Holy Supporter',
  description:
    'This buffer really unique, she can provide both offensive and defensive buffs through her Holy Sword abilities. She can boost team ATK, DEF, and damage reduction while providing consistent energy generation. Some characters scale with DEF and HP when dealing DMG so she has potential to be a very strong buffer.',
  skillPriority: [
    {
      skill: 'Ultimate',
      priority: 1,
      level: 'Level 14',
      reason:
        'Core buffing ability - drops two Holy Swords that provide massive ATK/DEF buffs and damage reduction',
      description:
        "Energy Cost: 3\nDrops a [Destruction Holy Sword] at the position of the ally with the highest ATK, dealing 240% ATK as Holy DMG to all enemies within a 5m radius, and increases all allies within range's ATK by 60% and DMG dealt by 48% for 10s.\n\nDrops a [Tank Holy Sword] at the position of the ally with the highest DEF, dealing 240% ATK as Holy DMG to all enemies within a 5m radius, and increases all allies within range's DEF by 60% and reduces DMG taken by 19% for 10s.",
    },
    {
      skill: 'Auto Skill',
      priority: 2,
      level: 'Level 14',
      reason: 'Consistent team buffing with damage increase and damage reduction',
      description:
        "Cooldown: 5.0s\nGrants all allies [Blessing]. While [Blessing] is active, the character's DMG dealt is increased by 36% and DMG taken is reduced by 12%. [Blessing] disappears after taking 5 instances of DMG or after 10s.",
    },
    {
      skill: 'Passive',
      priority: 3,
      level: 'Level 14',
      reason: 'Battle start energy gain, stat sharing, and energy generation on skill use',
      description:
        "Upon entering battle, immediately gains 3 Energy and Energy gain efficiency is reduced by 30% for 10s.\n\nUpon entering battle, 29% of Morgan Le Fay's ATK/DEF/HP is converted and transferred to the ally with the highest ATK/DEF/HP respectively.\n\nEach time Morgan Le Fay uses a skill, immediately gain 1 Energy.",
    },
    {
      skill: 'Normal Attack',
      priority: 4,
      level: 'Level 14',
      reason: 'Basic damage filler that can trigger memory card effects',
      description: 'Cooldown: 2.0s\nDeals 120% ATK as Holy DMG to the target enemy.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Absolutely perfect buttocks',
      effect:
        "Morgan Le Fay's exclusive memory card. Provides massive stat increases and energy gain efficiency for Holy teams.",
      priority: 'Exclusive - Highly Recommended',
      characterSpecific: true,
      memoryImage: 'AbsolutelyPerfectArms.png',
      memoryStats: { hp: '7,800', attack: '780', defense: '780' },
      description:
        "ATK increased by 30%, DEF increased by 30%, HP increased by 30%. When the equipper is of Holy attribute, after dealing Normal Attack DMG, all allies' Energy gain efficiency is increased by 18%, stacking up to 4 times, lasting 5s",
    },
    {
      name: 'Unholy Alliance',
      effect: 'UR tier team card: +32% ATK/DEF/HP for the whole party just for equipping it, and every skill the wearer casts stacks +14% team max HP and -5% team skill cooldowns (up to 5). Strong on literally anyone.',
      priority: 'Highly Recommended',
      characterSpecific: false,
      memoryImage: 'unholy-alliance.png',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description: 'Our entire party\'s attack power, defense power, and HP are increased by 32%. Each time the wearer uses a skill, our entire party\'s maximum HP increases by 14% and all skill cooldowns decrease by 5%, stacking up to 5 times.',
    },
    {
      name: 'Bath Time',
      effect: 'SSR team card: +32% ATK and DEF for all allies on equip, and every skill the wearer casts stacks +6% team max HP (up to 10 stacks, +60% total).',
      priority: 'Highly Recommended',
      characterSpecific: false,
      memoryImage: 'Sharincard.png',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description: 'Increases the attack and defense of all allies by 32%. Each time the wearer uses a skill, the maximum HP of all allies increases by 6% (up to 10 stacks).',
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
    primary: 'ATK%,DEF%,HP%',
    secondary: 'ATK%,DEF%,HP%',
    stats: ['ATK%', 'DEF%', 'HP%'],
    additionalStats: ['ATK', 'DEF', 'HP'],
    buildNote:
      'Her Passive Turn 29% of her ATK/DEF/HP is converted and transferred to the ally with the highest ATK/DEF/HP, if you go full HP you going to buff HP unit that scale with hp, same with def and ATK. so we should choose one of these !.',
    recommendedSets: [
      {
        name: 'Tide [Energy] 4-piece + Shattered Foundation 2-piece',
        englishName: 'Tide [Energy] 4-piece + Shattered Foundation 2-piece',
        mainRune: 'Tide',
        secondaryRune: 'Shattered-Foundation',
        mainRune4Piece:
          "Within 10 seconds after combat starts, your team's energy gain efficiency is increased by 30%",
        mainRune2Piece: 'Defense increased by 12%',
        secondaryRuneEffect: 'Defense +12%',
      },
      {
        name: 'Giants 2-piece + Epsilon 2-piece + Alpha 2-piece',
        englishName: 'Giants [Vulnerability] 2-piece + Epsilon 2-piece + Alpha 2-piece',
        giants: {
          effect: 'Attack power increased by 8%',
        },
        epsilon: {
          effect: 'Attack Power +8%',
        },
        alpha: {
          effect: 'Attack Power +8%',
        },
      },
      {
        name: 'Epsilon 4-piece + Alpha 2-piece',
        englishName: 'Epsilon 4-piece + Alpha 2-piece',
        mainRune: 'Epsilon',
        secondaryRune: 'Alpha',
        mainRune4Piece:
          'After activating ultimate skill, entire team damage increased by 10%, lasts 10 seconds',
        mainRune2Piece: 'Attack Power +8%',
        secondaryRuneEffect: 'Attack Power +8%',
      },
      {
        name: 'Shattered Foundation 2-set + Tide 2-set + Zahn 2-set',
        englishName: '2-set Shattered Foundation + 2-set Tide [Energy] + 2-set Zahn',
        shatteredFoundation: {
          effect: 'Defense +12%',
        },
        tide: {
          effect: 'Defense increased by 12%',
        },
        zahn: {
          effect: 'HP +8%',
        },
      },
    ],
    alternativeSets: [],
  },
  mainStatsByPosition: {
    1: {
      name: 'Position 1: Fixed Main Stat',
      stat: 'HP (Flat Value)',
      description: 'Always HP - no other options',
      isFixed: true,
    },
    2: {
      name: 'Position 2: Fixed Main Stat',
      stat: 'Attack (Flat Value)',
      description: 'Always Attack - no other options',
      isFixed: true,
    },
    3: {
      name: 'Position 3: Fixed Main Stat',
      stat: 'Defense (Flat Value)',
      description: 'Always Defense - no other options',
      isFixed: true,
    },
    4: {
      name: 'Position 4: Variable Main Stats (3 Build Options)',
      recommendedStat: 'HP (%) / ATK (%) / DEF (%)',
      availableStats: [
        'Healing Effectiveness (%)',
        'Critical Rate (%)',
        'Critical Damage (%)',
        'Attack Penetration (%)',
        'Attack (%)',
        'HP (%)',
        'Defense (%)',
      ],
      description:
        'Choose based on build target: HP% for HP scaling allies, ATK% for ATK scaling allies, DEF% for DEF scaling allies',
    },
    5: {
      name: 'Position 5: Variable Main Stats (3 Build Options)',
      recommendedStat: 'HP (%) / ATK (%) / DEF (%)',
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
      description:
        'Choose based on build target: Holy Attribute Damage % for general DPS, or main stat (HP%/ATK%/DEF%) based on team composition',
    },
    6: {
      name: 'Position 6: Variable Main Stats (3 Build Options)',
      recommendedStat: 'HP (%) / ATK (%) / DEF (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description: 'Final stat should match your primary build focus for maximum stat transfer',
    },
  },
  awakenings: {
    priority: "A2 is the biggest early jump, then A4. A3/A5 raise skill level caps (+2 each) and are dupe-gated: take A6 last for the team-wide bonus.",
    keyMilestones: [
      {
        level: 1,
        effect: "The passive effect [Upon entering combat, immediately gain 3 energy points and reduce energy gain efficiency by 30% for 10 seconds] has been changed to Upon entering combat, immediately gain 5 energy points.",
        importance: 2,
        importanceLabel: "Good",
      },
      {
        level: 2,
        effect: "Upon entering battle, all our units immediately receive the [Blessing].",
        importance: 1,
        importanceLabel: "Very Good",
      },
      {
        level: 3,
        effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
        importance: 3,
        importanceLabel: "Mid",
      },
      {
        level: 4,
        effect: "All allied units gain the passive effect of conversion ability.",
        importance: 2,
        importanceLabel: "Good",
      },
      {
        level: 5,
        effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
        importance: 3,
        importanceLabel: "Mid",
      },
      {
        level: 6,
        effect: "[Destruction Holy Sword] Grants all allied units within range an additional 10% all-resistance penetration.\n[Tank Holy Sword] Grants all allied units within range an additional 10% all-resistance.",
        importance: 2,
        importanceLabel: "Good",
      },
    ],
  },
  teamSynergy: {
    goodWith: [
      'Gaia',
      'Jill',
      'Freya',
      'Keller',
      'Lust - Asmodeus',
      'Nephthys',
    ],
    note: 'This unit works everywhere tbh, she fit in every team and quite good',
  },
};
