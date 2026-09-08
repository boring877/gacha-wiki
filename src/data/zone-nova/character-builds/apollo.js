// Apollo Build - Zone Nova Character Build
// SSR Fire character - Energy Support Supporter

export const apolloBuild = {
  name: 'Apollo',
  role: 'Supporter',
  buildType: 'Extra Attacks Supporter',
  description:
    'Apollo is a buffer that works with units that perform Extra Attacks, such as Yuis and Leviathan. She really turns them into monsters and is a core buffer for this kind of team!',
  skillPriority: [
    {
      skill: 'Ultimate',
      priority: 1,
      level: 'Level 14',
      reason: 'Core buffing ability - provides massive Attack increase and enables Extra Attacks',
      description:
        'Energy Cost: 8\nEnters [Day Brilliance] state for 10 seconds. During transformation (State): Allied attack power increases by 120%, and Apollo launches an extra strike dealing 360 % ATK as fire damage when teammate use an ultimate, it will have 100% crit rate and going be counted as Extra damage type. (Rate limit: 1 Extra damage per ally every 5 s.)',
    },
    {
      skill: 'Auto Skill',
      priority: 2,
      level: 'Level 14',
      reason: 'Consistent damage buff and synergy with Extra Attacks',
      description:
        'Auto-trigger: 5.0s\nAllied units gain 24% damage increase. [Type of Attack Called: Extra attacks] damage additionally increases by 36%.',
    },
    {
      skill: 'Passive',
      priority: 3,
      level: 'Level 14',
      reason: 'Stacking Crit Rate and Crit Damage buffs for the whole team',
      description:
        'Each auto skill use (Self): All allies gain 1 layer [Brilliant]. [Brilliant] Effect: +2.4% critical rate and +4.8% critical damage per layer. Maximum 10 layers (24% crit rate + 48% crit damage at full stacks). Extra Damage Synergy: Allied Extra Damage attacks grant additional [Brilliant] layers and Apollo gains 1 stack of Radiance System: gains [Radiance] Every 4 stacks +1 Energy .',
    },
    {
      skill: 'Normal Attack',
      priority: 4,
      level: 'Level 14',
      reason: 'Basic damage filler',
      description: 'Deals fire damage equal to 120% of Attack to designated enemy.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'The Loneliest Moment',
      effect:
        "Apollo's exclusive memory card. Battle start: All allied characters' damage increases by 40%, Extra Attack damage additionally increases by 40%.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'Apollocard',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description:
        "Battle start: All allied characters' damage increases by 40%, Extra Attack damage additionally increases by 40%. When equipped character releases ultimate That cost higher then 8: All allied characters' energy efficiency increases by 100% for 10 seconds",
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
      name: 'And Also Chocolate',
      effect: 'S-tier Supporter memory in the memory tier list.',
      characterSpecific: false,
      memoryImage: 'naiyacard.jpg',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description: 'Attack increases by 40%, after the wearer casts an ULT, team ULT damage increases by 40% for 5 seconds',
    },
  ],
  runes: {
    primary: 'HP%',
    secondary: 'DEF%',
    stats: ['HP%', 'DEF%'],
    additionalStats: ['HP', 'DEF'],
    buildNote:
      'There are no points going damage because she does no damage. Going tanky makes the most sense. As of now we have limited options, so we go full HP and a little defense!',
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
        name: 'Shattered Foundation 2-set + Tide 2-set + Zahn 2-set',
        englishName: '2-set Shattered Foundation + 2-set Tide [Energy] + 2-set Zahn',
        shatteredFoundation: {
          effect: '2-piece: Defense +12%',
        },
        tide: {
          effect: '2-piece: Defense increased by 12%',
        },
        zahn: {
          effect: '2-piece: HP +8%',
        },
      },
    ],
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
      name: 'Position 4: Variable Main Stats',
      recommendedStat: 'HP (%)',
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
      name: 'Position 5: Variable Main Stats',
      recommendedStat: 'HP (%)',
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
      name: 'Position 6: Variable Main Stats',
      recommendedStat: 'HP (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
    },
  },
  awakenings: {
    priority: "A2 is the biggest early jump, then A4. A3/A5 raise skill level caps (+2 each) and are dupe-gated: take A6 last for the team-wide bonus.",
    keyMilestones: [
      {
        level: 1,
        effect: "After allies deal [Pursue] damage, gain one stack of [Scorching Light], triggering up to once per second per character",
        importance: 2,
        importanceLabel: "Good",
      },
      {
        level: 2,
        effect: "In [Corona] state, damage taken decreases by 50%",
        importance: 1,
        importanceLabel: "Very Good",
      },
      {
        level: 3,
        effect: "[Skill] and [Normal Attack] level and level cap +4",
        importance: 3,
        importanceLabel: "Mid",
      },
      {
        level: 4,
        effect: "In [Corona] state, all allies gain 10% elemental resistance penetration",
        importance: 2,
        importanceLabel: "Good",
      },
      {
        level: 5,
        effect: "[ULT] and [Passive] level and level cap +4",
        importance: 3,
        importanceLabel: "Mid",
      },
      {
        level: 6,
        effect: "In [Corona] state, Apollo's [Pursue] gains an additional 50% critical damage",
        importance: 2,
        importanceLabel: "Good",
      },
    ],
  },
  teamSynergy: {
    goodWith: [
      'Yuis',
      'Leviathan',
      'Bors',
      'Nephthys',
      'Freya',
      'Keller',
    ],
    note: 'Her problem the ultimate cost so much, other wise she is really good.',
  },
};
