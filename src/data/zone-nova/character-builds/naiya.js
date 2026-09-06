// Naiya Build - Zone Nova Character Build
// SSR Ice character - ATK Scaling Hyper-Carry Supporter

export const naiyaBuild = {
  name: 'Naiya',
  role: 'Supporter',
  buildType: 'ATK Scaling Supporter',
  description:
    'Naiya is a buffer who focuses on buffing the highest ATK character on the team. Her buffs scale with her ATK power - the higher her ATK, the stronger the ATK she provides. She offers ATK increase, Crit Damage buffs, energy recovery when Enemy die, and massive total damage boosts. Her Dupe 4 awakening is strong. You need to keep in mind that if she have the highest atk power she going to buff her self, so you need to manage that !!',
  skillPriority: [
    {
      skill: 'Auto Skill: War Intent Detection',
      priority: 1,
      level: 'Level 14',
      reason:
        "Core buff ability - grants 168% ATK buff to highest ATK character, scales directly with Naiya's ATK",
      description:
        "Auto-trigger: 5.0s\nThe friendly character with the highest attack power gains [Battle Intent]. Increases attack power by 168%, but the increased attack power cannot exceed 84% of Naiya's attack power. Lasts 15 seconds",
    },
    {
      skill: 'Ultimate: Hyper-Carry Awakening',
      priority: 2,
      level: 'Level 14',
      reason: 'Massive team buff - 36% ATK + 53.6% Crit Damage to all allies, plus good damage',
      description:
        "Energy Cost: 3\nDeals 480% attack power Ice damage to enemy unit. [Interrupts] their casting skill. Increases all friendly units' attack power by 36% and crit damage by 53.6% for 10 seconds",
    },
    {
      skill: 'Passive: Tactical Analysis',
      priority: 3,
      level: 'Level 14',
      reason:
        'Energy recovery and damage amp when Battle Intent character kills enemies - crucial for team cycling',
      description:
        'When a character with [Battle Intent] kills an enemy, damage increases by 17% for 10 seconds, max 3 stacks. Immediately recovers 1 energy point for the entire team, can trigger once per second maximum',
    },
    {
      skill: 'Normal Attack: Frost Strike',
      priority: 4,
      level: 'Level 7',
      reason: 'Basic damage filler, benefits from ATK scaling',
      description: 'Deals 120% attack power as ice damage to enemy unit',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'And Also Chocolate',
      effect:
        "Naiya's exclusive memory card. +40% Attack Power and after she uses ultimate, entire team gains +40% ultimate damage for 30 seconds. Perfectly complements her buffer role.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'naiyacard.jpg',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description:
        'Attack power increased by 40%. After the equipped character releases ultimate skill, the entire team gains ultimate skill damage increased by 40%, lasting 5 seconds',
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
    primary: 'Attack',
    secondary: 'Critical Rate',
    stats: ['ATK%', 'ATK'],
    additionalStats: ['Crit Rate%', 'Crit DMG%'],
    recommendedSets: [
      {
        name: 'Epsilon 4-piece + Alpha 2-piece',
        englishName: 'Epsilon 4-piece + Alpha 2-piece',
        mainRune: 'Epsilon',
        secondaryRune: 'Alpha',
        mainRune2Piece: '2-piece: Attack Power +8%',
        mainRune4Piece:
          '4-piece: After activating ultimate skill, entire team damage increased by 10%, lasts 10 seconds',
        secondaryRuneEffect: '2-piece: Attack Power +8%',
      },
      {
        name: 'Epsilon 4-piece + Giants [Vulnerability] 2-piece',
        englishName: 'Epsilon 4-piece + Giants [Vulnerability] (巨人 [脆弱]) 2-piece',
        mainRune: 'Epsilon',
        secondaryRune: 'Giants',
        mainRune2Piece: '2-piece: Attack Power +8%',
        mainRune4Piece:
          '4-piece: After activating ultimate skill, entire team damage increased by 10%, lasts 10 seconds',
        secondaryRuneEffect: '2-piece: Attack power increased by 8%',
      },
    ],
    alternativeSets: [
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
      recommendedStat: 'Attack (%)',
      availableStats: [
        'Healing Effectiveness (%)',
        'Critical Rate (%)',
        'Critical Damage (%)',
        'Attack Penetration (%)',
        'Attack (%)',
        'HP (%)',
        'Defense (%)',
      ],
      description: 'Attack % for maximum scaling on her buffs and damage',
    },
    5: {
      name: 'Position 5: Variable Main Stats',
      recommendedStat: 'Attack (%)',
      availableStats: [
        'Chaos Attribute Damage (%)',
        'Fire Attribute Damage (%)',
        'Ice Attribute Damage (%)',
        'Holy Attribute Damage (%)',
        'Attack (%)',
        'HP (%)',
        'Defense (%)',
      ],
      description: 'Attack % for maximum scaling on her buffs and damage',
    },
    6: {
      name: 'Position 6: Variable Main Stats',
      recommendedStat: 'Attack (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description: 'Attack % for maximum buff scaling and damage output',
    },
  },
  awakenings: {
    priority: "A2 is the biggest early jump, then A4. A3/A5 raise skill level caps (+2 each) and are dupe-gated: take A6 last for the team-wide bonus.",
    keyMilestones: [
      {
        level: 1,
        effect: "After casting an ULT, all allies gain an additional 20% Attack for 20 seconds",
        importance: 2,
        importanceLabel: "Good",
      },
      {
        level: 2,
        effect: "When a character with [Battle Intent] kills an enemy, restore 1 energy to the team, triggering up to once per second",
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
        effect: "Characters with [Battle Intent] deal additional Frost</color> damage equal to 500% of Nia's Attack, triggering up to once every 10 seconds",
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
        effect: "ULT duration extends to 20 seconds And damage multiplier increases by 100%",
        importance: 2,
        importanceLabel: "Good",
      },
    ],
  },
  teamSynergy: {
    goodWith: [
      'Chiya',
      'Nina',
      'Shanna',
      'Freya',
      'Hela',
      'Gluttony - Beelzebub',
    ],
    note: 'Naiya need to be 2nd highest ATK character in the team, so she can give the carry the buff. If she is the highest she would give her self the buff, its quite hard to manage that but its possible.',
  },
};
