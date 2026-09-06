// Athena Build - Zone Nova Character Build
// SSR Wind character - Normal Attack Speed Supporter

export const athenaBuild = {
  name: 'Athena',
  role: 'Supporter',
  buildType: 'Normal Attack Speed Supporter',
  description:
    'Athena is a buffer focused on attack speed, cooldown reduction. All her damage is considered normal attack damage, and she provides Attack Power, attack speed, CDR, and crit rate bonuses to all allies and generates team energy while maintaining good damage output.',
  skillPriority: [
    {
      skill: "Ultimate: Athena's Aegis",
      priority: 1,
      level: 'Level 14',
      reason:
        'Core mechanic - grants Aegis stacks for enhanced bullets and enables full auto mode with team buffing potential',
      description:
        'Energy Cost: 3\nImmediately gains 3 layers [Aegis] (6 layers at Awakening 2). When having [Aegis], normal attacks become full auto mode, continuously firing Enhanced bullets. Each layer [Aegis] provides 12 Enhanced bullets. Each Enhanced bullet deals 60% attack power wind damage (120% at Awakening 6). Every 5 Enhanced bullet hits, all allies gain +2.4% crit rate and +4.6% normal attack damage (max 10 stacks, 10s duration)',
    },
    {
      skill: 'Auto Skill: Military Command',
      priority: 2,
      level: 'Level 14',
      reason:
        'Consistent damage output and contributes to normal attack damage count for team buffs',
      description:
        'Cooldown: 5.0s\nAttacks designated enemy unit 3 times, dealing 3×120% attack power wind damage. Total 360% attack power damage output. Contributes to normal attack damage triggers for team buffs',
    },
    {
      skill: 'Passive: Divine Combat Mastery',
      priority: 3,
      level: 'Level 14',
      reason:
        'Essential team support - provides attack speed, CDR, and energy generation through normal attack mechanics',
      description:
        'All damage from Athena is considered normal attack damage. Every 5 normal attack damage dealt: all allies gain +4.8% attack speed and -2.4% cooldown reduction (max 10 stacks, 10s duration). Every 10 normal attack damage dealt: gains 1 [Typical] layer. When allies deal normal attack damage: Athena gains 1 [Typical] (1 per character per second max). Every 10 [Typical] layers: team gains +1 energy',
    },
    {
      skill: 'Normal Attack: Shadowless Snipe',
      priority: 4,
      level: 'Level 14',
      reason:
        'Basic damage that contributes to normal attack count and triggers team buffing mechanics',
      description:
        'Cooldown: 1.0s\nDeals 120% attack power wind damage to designated enemy unit. All damage counted as normal attack damage for passive triggering',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Awkward Appearance',
      effect:
        "Athena's exclusive memory card. Perfect synergy with her normal attack-focused mechanics. Provides +40% team damage and +40% normal attack damage at battle start, plus additional +40% attack power after 5 normal attack damage triggers.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'Athenacard',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description:
        'After battle start: All allies damage +40%, normal attack damage +40%. When equipped character deals 5 normal attack damage: All team attack power +40% for 5 seconds',
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
      name: 'The Loneliest Moment',
      effect: 'SS-tier Supporter memory in the memory tier list.',
      characterSpecific: false,
      memoryImage: 'Apollocard.jpg',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description: 'After entering battle, all team members\' damage increases by 40%, Pursue Damage increases by an additional 40%, when the wearer\'s ULT consumes 8 or more energy, all team members\' Energy Gain Efficiency increases by 100% for 10 seconds',
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
    primary: 'Attack',
    secondary: 'Crit Damage',
    stats: ['ATK%', 'Crit DMG%', 'Crit Rate%'],
    additionalStats: ['ATK', 'HP%', 'Defense%'],
    recommendedSets: [
      {
        name: 'Beth 4-piece + Epsilon 2-piece',
        englishName: 'Beth 4-piece + Epsilon 2-piece',
        mainRune: 'Beth',
        secondaryRune: 'Epsilon',
        mainRune2Piece: '2-piece: Crit Rate +6%',
        mainRune4Piece: '4-piece: When HP >80%: Critical Hit Damage +24%',
        secondaryRuneEffect: '2-piece: Attack Power +8%',
      },
      {
        name: 'Epsilon 4-piece + Beth 2-piece',
        englishName: 'Epsilon 4-piece + Beth 2-piece',
        mainRune: 'Epsilon',
        secondaryRune: 'Beth',
        mainRune2Piece: '2-piece: Attack Power +8%',
        mainRune4Piece:
          '4-piece: After activating ultimate skill, entire team damage increased by 10%, lasts 10 seconds',
        secondaryRuneEffect: '2-piece: Crit Rate +6%',
      },
      {
        name: 'Alpha 4-piece + Beth 2-piece',
        englishName: 'Alpha 4-piece + Beth 2-piece',
        mainRune: 'Alpha',
        secondaryRune: 'Beth',
        mainRune2Piece: '2-piece: Attack Power +8%',
        mainRune4Piece: '4-piece: Basic Attack Damage +30%',
        secondaryRuneEffect: '2-piece: Crit Rate +6%',
      },
    ],
    alternativeSets: [
      {
        name: 'Tide [Energy] 4-piece + Beth 2-piece',
        englishName: 'Tide [Energy] 4-piece + Beth 2-piece',
        mainRune: 'Tide',
        secondaryRune: 'Beth',
        mainRune2Piece: '2-piece: Defense increased by 12%',
        mainRune4Piece:
          '4-piece: Within 10 seconds after combat starts, team energy gain efficiency increased by 30%',
        secondaryRuneEffect: '2-piece: Crit Rate +6%',
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
      recommendedStat: 'Critical Damage (%)',
      availableStats: [
        'Healing Effectiveness (%)',
        'Critical Rate (%)',
        'Critical Damage (%)',
        'Attack Penetration (%)',
        'Attack (%)',
        'HP (%)',
        'Defense (%)',
      ],
      description: 'Crit Damage % for enhanced bullet damage, or Attack % for overall scaling',
    },
    5: {
      name: 'Position 5: Variable Main Stats',
      recommendedStat: 'Wind Attribute Damage (%)',
      availableStats: [
        'Chaos Attribute Damage (%)',
        'Fire Attribute Damage (%)',
        'Ice Attribute Damage (%)',
        'Holy Attribute Damage (%)',
        'Wind Attribute Damage (%)',
        'Attack (%)',
        'HP (%)',
        'Defense (%)',
      ],
      description:
        'Wind Attribute Damage % recommended for Wind characters, or Attack % for overall scaling',
    },
    6: {
      name: 'Position 6: Variable Main Stats',
      recommendedStat: 'Attack (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description: 'Attack % for enhanced bullet damage scaling.',
    },
  },
  awakenings: {
    keyMilestones: [
      {
        level: 1,
        effect:
          'After any allies deal basic attack damage, Athena deals 50% ATK wind damage to that target (cannot crit, 1 trigger per character per second)',
        importance: 1,
        importanceLabel: 'Very good for PVP and PVE',
      },
      {
        level: 2,
        effect:
          'Using ultimate gains 6 layers [Aegis] instead of 3 (doubles enhanced bullet capacity)',
        importance: 2,
        importanceLabel: 'Good',
      },
      {
        level: 3,
        effect: 'All skill level caps +4',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 4,
        effect:
          'While [Aegis] active: all allies take 10% reduced damage, Warriors/Attackers gain additional 10% damage reduction (total 20%)',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 5,
        effect: 'All skill level caps +4',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 6,
        effect: 'Enhanced bullets deal double damage (120% attack power per bullet instead of 60%)',
        importance: 2,
        importanceLabel: 'Good',
      },
    ],
  },
  teamSkill: {
    name: 'Combination Skill',
    activationCondition: 'Team contains Wind attribute characters and Otis faction characters',
    effects: [
      'Battle start: All team Damage increases by 10%',
      'For every 500 attack power, all team Damage additionally +5% (max 6 stacks, total +40% Damage)',
    ],
  },
  teamSynergy: {
    goodWith: [
      'Freya',
      'Medusa',
      'Lust - Asmodeus',
      'Keller',
      'Nephthys',
      'Nina',
    ],
    note: "She's a really strong DPS character, she can be the main DPS. The problem is it takes time before she can show her damage and needs a little bit of investment in runes.",
  },
};
