// Penny Build - Zone Nova Character Build
// SSR Wind character - Defense Scaling Tank

export const pennyBuild = {
  name: 'Penny',
  role: 'Tank',
  buildType: 'Tank with massive Defensive',
  description:
    'Penny is a defensive scaling tank who provides shields and damage reduction. Her passive make her one of highest defensive unit in the game.',
  skillPriority: [
    {
      skill: "Passive: Aethyss's Call for Help",
      priority: 1,
      level: 'Level 10',
      reason: 'Core defense stacking ability - makes Penny one of the highest defensive units',
      description:
        'After taking damage, gain 1 stack of [Fortitude], increasing own defense by 4.8%, max 30 stacks',
    },
    {
      skill: 'Auto Skill: Divine Shield Wind',
      priority: 2,
      level: 'Level 10',
      reason: 'Main damage dealer and self-protection ability',
      description:
        'Auto-trigger: 5.0s\nDeals Wind damage equal to 120% of own defense to target enemy, and reduces damage taken by self for 10 seconds by 24%',
    },
    {
      skill: 'Ultimate: Shield of Aethyss',
      priority: 3,
      level: 'Level 10',
      reason: 'Powerful team shielding and damage reduction buff',
      description:
        'Energy Cost: 5\nAll allied characters gain a shield equal to 60% of your defense(Penny), and take 24% less damage for 10 seconds',
    },
    {
      skill: 'Normal Attack: Shield Impact',
      priority: 4,
      level: 'Level 7',
      reason: 'Basic damage filler that scales with defense',
      description: 'Deals Wind damage equal to 120% of own defense to target enemy',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Her Trainer',
      effect:
        "Penny's exclusive memory card. Provides massive defense increase, damage reduction after ultimate, and enhanced shield generation.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'pennycard.jpg',
      memoryStats: { hp: '8,600', attack: '480', defense: '690' },
      description:
        'Defense increased by 60%, After using ultimate skill, equipped character takes 10% less damage for 5 seconds, Shield amount applied by ultimate skills increased by 20%',
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'Lancelot-HerTrainer',
      effect:
        "SR memory card that provides Guardian class exclusive effects, defense increase, and team damage reduction - excellent for Penny's tank capabilities",
      characterSpecific: false,
      memoryImage: 'Lancelotcard.jpg',
      memoryStats: { hp: '5,500', attack: '400', defense: '575' },
      description:
        'Defense increased by 36%, Team Buff: After entering battle, all allied characters take 8% less damage, Note: Same skill effects cannot stack',
    },
  ],
  runes: {
    primary: 'Defense',
    secondary: 'HP',
    stats: ['DEF%', 'HP%'],
    additionalStats: ['DEF', 'HP'],
    recommendedSets: [
      {
        name: 'Zahn 4-piece + Tide 2-piece',
        englishName: 'Zahn (札恩) 4-piece + Tide [Energy] 2-piece',
        mainRune: 'Zahn',
        secondaryRune: 'Tide',
        mainRune2Piece: '2-piece: HP +8%',
        mainRune4Piece: '4-piece: After Ultimate: Take 5% less damage (10s)',
        secondaryRuneEffect: '2-piece: Defense increased by 12%',
      },
      {
        name: 'Zahn 4-piece + Shattered Foundation 2-piece',
        englishName: 'Zahn (札恩) 4-piece + Shattered Foundation (碎基) 2-piece',
        mainRune: 'Zahn',
        secondaryRune: 'Shattered-Foundation',
        mainRune2Piece: '2-piece: HP +8%',
        mainRune4Piece: '4-piece: After Ultimate: Take 5% less damage (10s)',
        secondaryRuneEffect: '2-piece: Defense +12%',
      },
      {
        name: 'Shattered Foundation 2-set + Tide 2-set + Zahn 2-set',
        englishName:
          '2-set Shattered Foundation (碎基) + 2-set Tide [Energy] (潮汐 [能量]) + 2-set Zahn (札恩)',
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
    alternativeSets: [
      {
        name: 'Tide 4-piece + Shattered Foundation 2-piece',
        englishName: 'Tide [Energy] (潮汐 [能量]) 4-piece + Shattered Foundation (碎基) 2-piece',
        mainRune: 'Tide',
        secondaryRune: 'Shattered-Foundation',
        mainRune2Piece: '2-piece: Defense increased by 12%',
        mainRune4Piece:
          "4-piece: Within 10 seconds after combat starts, your team's energy gain efficiency is increased by 30%",
        secondaryRuneEffect: '2-piece: Defense +12%',
      },
      {
        name: 'Tide 4-piece + Zahn 2-piece',
        englishName: 'Tide [Energy] (潮汐 [能量]) 4-piece + Zahn (札恩) 2-piece',
        mainRune: 'Tide',
        secondaryRune: 'Zahn',
        mainRune2Piece: '2-piece: Defense increased by 12%',
        mainRune4Piece:
          "4-piece: Within 10 seconds after combat starts, your team's energy gain efficiency is increased by 30%",
        secondaryRuneEffect: '2-piece: HP +8%',
        description: 'Focus on faster ultimate cycling for more frequent shields and buffs',
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
      description: 'Defense % for maximum tankiness and shield scaling',
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
      description: 'Defense % for maximum survivability and shield strength',
    },
    6: {
      name: 'Position 6 — Variable Main Stats',
      recommendedStat: 'Defense (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description: 'Focus on core percentage stat increases only',
    },
  },
  teamSynergy: {
    goodWith: [
      'She works well with wind Team',
      'Any AOE maps that need team shields and dmg reduction',
    ],
    note: 'The problem with Penny is that the defensive has diminishing returns which makes stacking Def not really useful. Going little HP does not improve your tankiness much, only option to become tanky is going with damage reduction since it decreases total damage taken.',
  },
};
