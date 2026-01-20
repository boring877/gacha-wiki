// Tamamo-no-Mae Build - Zone Nova Character Build
// SSR Fire character - Ultimate Support Buffer

export const tamamoNoMaeBuild = {
  name: 'Tamamo-no-Mae',
  role: 'Buffer',
  buildType: 'Ultimate Support Buffer',
  description:
    'Tamamo-no-Mae is a buffer focused on Ultimate damage, Ignoring Fire Resistance/DEF penetration, and Energy recovery. Her Fox Flame provides damage reduction and Ultimate DMG buffs when consumed. All of her buff increase the total amount, not using DEF or ATK which really massive.',
  skillPriority: [
    {
      skill: 'Ultimate',
      priority: 1,
      level: 'Level 10',
      reason: 'Core buffing ability - consumes Fox Flame for massive Ultimate DMG buffs and DEF penetration',
      description:
        "Energy Cost: 4\nAfter a short delay, recover 3 Energy. Increases all allies' Ultimate DMG by 29.3% and ignores 40.5% Fire Resistance for 5s. Consumes all [Fox Flame]. Each consumed stack further increases Ultimate DMG bonus by 5.6% and Ignore Resistance by 5.6%, and extends duration by 1s. Each consumed stack deals 58.6% ATK as Fire DMG to a random enemy and applies [Jade Fox Mark] for 5s. If 9 stacks consumed, deploys [Hyakki Kitan] for 10s - allies recover 1 Energy after using Ultimate.",
    },
    {
      skill: 'Auto Skill',
      priority: 2,
      level: 'Level 10',
      reason: 'Primary Fox Flame generation and energy sustain',
      description:
        'Cooldown: 5.0s\nDeals 141.5% ATK as Fire DMG to a target enemy and gains 1 stack of [Fox Flame] (max 9 stacks). Restores 1 Energy for every 2 Skills used. [Fox Flame]: Each stack increases self Energy Recovery Rate by 3% and reduces damage taken by all allies by 3.8%.',
    },
    {
      skill: 'Passive',
      priority: 3,
      level: 'Level 10',
      reason: 'Fox Flame generation from ally Ultimates and Ten Ghost Marks during Hyakki Kitan',
      description:
        'When other allies use Ultimate, gain 1 stack of [Fox Flame] (max 9 stacks). Each stack of [Fox Flame] increases self Energy Recovery Rate by 3% and reduces damage taken by all allies by 3.8%. During [Hyakki Kitan], apply 2 stacks of [Ten Ghost Marks] to enemies hit by Ultimate. [Ten Ghost Marks]: At 10 stacks, consume 10 stacks to deal 214.4% ATK Blaze DMG in a fan-shaped area behind the target and apply [Jade Fox Mark] (5s). All [Ten Ghost Marks] vanish when [Hyakki Kitan] ends. [Jade Fox Mark]: When allies\' Ultimate hits the holder, DEF Penetration +103.8%. Consumed after triggering.',
    },
    {
      skill: 'Normal Attack',
      priority: 4,
      level: 'Level 7',
      reason: 'Basic damage filler',
      description: 'Deals 120% ATK as Fire DMG to a target enemy.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Hot Spring & Her',
      effect:
        "Tamamo-no-Mae's exclusive memory card. ATK +40%, Energy Recovery boost on ally Ultimate, Brilliance stacks for team DMG.",
      priority: 'Must Have',
      note: 'This memory card is absolutely broken - one of the strongest memories in the game. The 90% team DMG buff at max stacks combined with her already massive Ultimate buffs makes this a must-pull.',
      characterSpecific: true,
      memoryImage: 'Tamamo-no-maecard',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description:
        "Base Stats Boost: ATK +40%. After allies' Ultimate deals DMG, increases self Energy Recovery Rate by 200% (4s) and gains 1 stack of [Brilliance] (5s, max 50 stacks). Every 5 stacks of [Brilliance] increases all allies' DMG by 9%.",
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'Sleep Treasure',
      effect:
        'SR memory card that provides team damage increase (24%) and additional crit damage chance, good for general support.',
      characterSpecific: false,
      memoryImage: 'Zashiki-warashicard.jpg',
      memoryStats: { hp: '5,000', attack: '500', defense: '500' },
      description:
        'After releasing ultimate: Team damage increases by 24% for 10 seconds. Additionally: Has 50% chance to make team critical damage additionally increase by 20% for 10 seconds',
    },
  ],
  runes: {
    primary: 'ATK%',
    secondary: 'HP%',
    stats: ['ATK%', 'HP%'],
    additionalStats: ['ATK', 'HP'],
    buildNote:
      'Prioritize ATK% to reach 3,000 ATK for her Combination Skill (+7.5% Ultimate DMG per 500 ATK, max 6 stacks = 45% Ultimate DMG). HP% for survivability. She provides buffs not damage, but the Combination Skill bonus is too valuable to skip.',
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
        name: 'Alpha 2-piece + Epsilon 2-piece + Giants 2-piece',
        englishName: 'Triple ATK Build (24% ATK total)',
        note: 'Use this build to maximize her Combination Skill by reaching 3,000 ATK.',
        alpha: { effect: '2-piece: Attack Power +8%' },
        epsilon: { effect: '2-piece: Attack Power +8%' },
        giants: { effect: '2-piece: Attack Power +8%' },
      },
    ],
  },
  mainStatsByPosition: {
    1: {
      name: 'Position 1 — Fixed Main Stat',
      stat: 'HP (Flat Value)',
      description: 'Always HP - no other options',
      isFixed: true,
    },
    2: {
      name: 'Position 2 — Fixed Main Stat',
      stat: 'Attack (Flat Value)',
      description: 'Always Attack - no other options',
      isFixed: true,
    },
    3: {
      name: 'Position 3 — Fixed Main Stat',
      stat: 'Defense (Flat Value)',
      description: 'Always Defense - no other options',
      isFixed: true,
    },
    4: {
      name: 'Position 4 — Variable Main Stats',
      recommendedStat: 'Attack (%) / HP (%)',
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
      name: 'Position 5 — Variable Main Stats',
      recommendedStat: 'Attack (%) / HP (%)',
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
      name: 'Position 6 — Variable Main Stats',
      recommendedStat: 'Attack (%) / HP (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
    },
  },
  teamSynergy: {
    goodWith: [
      'Odin','Sigurd',
    ],
    note: 'Tamamo, going to make Odin really broken due to low cost of Ultimate and DOT damage !!.',
  },
  awakenings: {
    keyMilestones: [
      {
        level: 1,
        effect: 'Immediately gain 9 stacks of [Fox Flame] at the start of battle.',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 2,
        effect:
          'When [Hyakki Kitan] ends, recover [Fox Flame] based on [Ten Ghost Marks] accumulated: recover 2 stacks of [Fox Flame] for every 10 stacks accumulated (max 6 stacks).',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 3,
        effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 4,
        effect: "During [Hyakki Kitan], allies' Resistance to non-Fire DMG increases by 56.5%.",
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
          "During [Hyakki Kitan], when allies' Ultimate hits an enemy, apply an additional 1 stack of [Ten Ghost Marks]. Each stack of [Fox Flame] additionally increases all allies' DEF by 5%.",
        importance: 2,
        importanceLabel: 'Good',
      },
    ],
  },
};
