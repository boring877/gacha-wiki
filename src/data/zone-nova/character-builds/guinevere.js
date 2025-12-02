// Guinevere Build - Zone Nova Character Build
// SSR Fire character - Defense Scaling Guardian Tank

export const guinevereBuild = {
  name: 'Guinevere',
  role: 'Tank',
  buildType: 'Fire Tank (Defense Scaling & Block)',
  description:
    'Guinevere is a defense scaling Fire tank with block mechanics. She also have passive life recovery, and critical resistance 100% for 10 seconds, and ultimate that provides extra damage type.',
  skillPriority: [
    {
      skill: 'Passive: Evil Star Explosion',
      priority: 1,
      level: 'Level 10',
      reason:
        'Core tank mechanics enabling defense scaling damage, Domination Authority stacking, and life recovery - essential for tanking and damage output',
      description:
        'Effect 1: After successful [Block], increases own defense by 60% for 10 seconds. Effect 2: After successful [Block], gains 1 layer of [Domination Authority], maximum 1 layer per second. When [Domination Authority] reaches 10 layers, can cast [Enhanced Ultimate]. Effect 3: When HP drops to 40% or below, triggers life recovery: Restores 58% max HP within 0.5 seconds, increases block rate to 100% for 10 seconds, increases critical resistance by 100% for 10 seconds. This effect has one initial trigger, can accumulate maximum once',
    },
    {
      skill: 'Auto Skill: Supreme Power',
      priority: 2,
      level: 'Level 10',
      reason:
        'Essential block rate boost that enables passive defense stacking and Domination Authority generation - core to her tanking and damage cycle',
      description:
        'Cooldown: 5.0s\nGain 58% block rate for 10 seconds. [Block]: Has a chance to reduce incoming damage by 30%. Continuous damage ignores block',
    },
    {
      skill: 'Ultimate: Devastating Heavenly Fire',
      priority: 3,
      level: 'Level 10',
      reason:
        'Enhanced ultimate provides extra damage and team-wide damage reduction - key for both offense and utility when Domination Authority is stacked',
      description:
        'Energy Cost: 3\nLaunches [Extra Attack] against enemy unit. Deals fire damage equal to 240% of Defense. Gains 1 layer of [Domination Authority]. Reduces damage taken by 24% for 10 seconds. [Enhanced Ultimate] (Requires 10 Domination Authority stacks): Clears all [Domination Authority] to gain one passive life recovery count. Launches [Extra Attack] against enemy target. Deals fire damage equal to 240% of Defense. Reduces damage taken by 24% for 10 seconds',
    },
    {
      skill: 'Normal Attack: Inferno',
      priority: 4,
      level: 'Level 7',
      reason:
        'Basic filler damage that scales with Defense - provides consistent damage output and contributes to overall DPS',
      description: 'Deals fire damage equal to 120% of Defense to enemy unit',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Simple Birdcage',
      effect:
        "Guinevere's exclusive memory card. Provides massive defense increase and block damage reduction, perfectly synergizing with her defense-scaling mechanics and block-based tanking.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'Guinevere-card',
      memoryStats: { hp: '6,600', attack: '480', defense: '690' },
      slug: 'simple-birdcage',
      description:
        'Defense increased by 64%. After successful block, damage taken decreases by 10%, lasting 5 seconds. Immediately gains 30% maximum HP shield after battle starts.',
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'Sister Penny Trying on New Clothes',
      effect:
        "SR Guardian-class memory card that provides substantial HP increase and post-ultimate damage reduction - perfect synergy for Guinevere's tanking role and frequent ultimate usage",
      characterSpecific: false,
      memoryImage: 'Sister-Penny-Trying-on-New Clothes',
      memoryStats: { hp: '5,500', attack: '400', defense: '575' },
      slug: 'sister-penny-trying-on-new-clothes',
      description:
        'HP increased by 24%. After using ultimate skill, equipped character receives 10% less damage for 5 seconds. (Guardian class only)',
    },
    {
      name: 'Lancelot-HerTrainer',
      effect:
        "SR memory card that provides defense increase and team-wide damage reduction - excellent defensive utility that enhances both Guinevere's personal tanking and team support capabilities",
      characterSpecific: false,
      memoryImage: 'Lancelotcard',
      memoryStats: { hp: '5,500', attack: '400', defense: '575' },
      slug: 'lancelot-hertrainer',
      description:
        'Defense increased by 36%. After entering battle, all our characters take 8% less damage, same skill effects cannot stack.',
    },
  ],
  runes: {
    primary: 'Defense%',
    secondary: 'HP%',
    stats: ['Defense%', 'HP%'],
    additionalStats: ['Defense', 'HP'],
    buildNote:
      'Defense is the most important thing you should focus, but due to Defense have diminishing returns, you should also try to get as much as possible HP% in sub stats.',
    recommendedSets: [
      {
        name: 'Zahn 4-set + Shattered Foundation 2-set',
        englishName: 'Zahn [Might] 4-piece + Shattered Foundation [Protection] 2-piece',
        mainRune: 'Zahn',
        secondaryRune: 'Shattered-Foundation',
        mainRune2Piece: '2-piece: HP +8%',
        mainRune4Piece: '4-piece: After Ultimate: Take 5% less damage (10s)',
        secondaryRuneEffect: '2-piece: Defense +12%',
      },
      {
        name: 'Tide 2-set + Shattered Foundation 2-set + Zahn 2-set + Epsilon 2-set',
        englishName:
          '2-set Tide [Energy] + 2-set Shattered Foundation + 2-set Zahn + 2-set Epsilon',
        tide: {
          effect: 'Defense increased by 12%',
        },
        shatteredFoundation: {
          effect: 'Defense +12%',
        },
        zahn: {
          effect: 'HP +8%',
        },
        epsilon: {
          effect: 'Defense +8%',
        },
      },
    ],
    alternativeSets: [
      {
        name: 'Tide 4-set + Zahn 2-set',
        englishName: 'Tide [Energy] 4-piece + Zahn [Might] 2-piece',
        mainRune: 'Tide',
        secondaryRune: 'Zahn',
        mainRune2Piece: '2-piece: Defense increased by 12%',
        mainRune4Piece:
          "4-piece: Within 10 seconds after combat starts, your team's energy gain efficiency is increased by 30%",
        secondaryRuneEffect: '2-piece: HP +8%',
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
      recommendedStat: 'Defense (%)',
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
      recommendedStat: 'Defense (%)',
      availableStats: [
        'Wind Attribute Damage (%)',
        'Fire Attribute Damage (%)',
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
      recommendedStat: 'Defense (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
    },
  },
  awakenings: {
    priority: 'Enhanced ultimate mechanics and stat scaling first, then resistance improvements',
    keyMilestones: [
      {
        level: 1,
        effect:
          'After [Block] is successful, additionally increase own defense by 30% for 5 seconds. Passive life recovery count can be accumulated up to 2 times (allows Enhanced Ultimate to restore a second charge)',
        importance: 'Essential',
      },
      {
        level: 2,
        effect:
          'Launching normal ultimate skill can additionally gain 1 layer of [Domination Authority]. After launching enhanced ultimate skill, immediately gains 2 layers of [Domination Authority]',
        importance: 'Critical',
      },
      {
        level: 3,
        effect: '[Skill] and [Normal Attack] level and level cap +4',
        importance: 'High',
      },
      {
        level: 4,
        effect: 'Defense increased by 45%',
        importance: 'Critical',
      },
      {
        level: 5,
        effect: '[Ultimate] and [Passive] level and level cap +4',
        importance: 'High',
      },
      {
        level: 6,
        effect:
          'All resistance +15%, Fire resistance additional +15%. Starting passive life recovery count changes to 2 times',
        importance: 'Essential',
      },
    ],
  },
  teamSkill: {
    name: 'Combination Skill',
    activationCondition: 'When the team contains [Avalon] characters and [Fire] characters',
    effects: [
      'Self defense increases by 15%',
      'For every 500 defense in battle, reduces damage taken by the whole team by 1.5%. Maximum 6 stacks (3,000 defense). Maximum team damage reduction: 9%',
    ],
  },
  teamSynergy: {
    goodWith: ['Fire characters', 'Extra Damage Type characters', 'she good anywhere tbh'],
    note: 'She need alot of HP in the sub stats to be broken, if you just stack def only you wont get the most out of her ! ',
  },
};
