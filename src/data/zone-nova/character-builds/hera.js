// Hera Build - Zone Nova Character Build
// SSR Chaos Attacker DPS - DOT (Damage Over Time) specialist with [Void] debuff mechanic

export const heraBuild = {
  name: 'Hera',
  role: 'DPS',
  buildType: 'DOT Chaos Nuker',
  description:
    "Hera is a DOT damage dealer and nuker with massive ultimate multipliers. Her Enhanced Ultimate at 1920% ATK is extremely powerful once activated. There are two viable build paths: full DOT damage focus or crit rate/crit damage focus - both perform similarly well. Keep in mind that reaching 20 DOT layers for Enhanced Ultimate is quite difficult and requires teammates who can apply significant DOT debuffs to help stack layers faster.",
  skillPriority: [
    {
      skill: 'Ultimate: Despair Strangulation',
      priority: 1,
      level: 'Level 14',
      reason:
        'Main burst damage source, Enhanced version at 20+ DOT layers deals massive 1920% ATK damage',
      description:
        'Cooldown: 1.0s | Energy Cost: 6\nSummons giant flying sword dealing 1440% attack power chaos damage. When enemy has 20+ layers of continuous damage, can cast [Enhanced Ultimate] within 5 seconds dealing 1920% attack power chaos damage',
    },
    {
      skill: 'Auto Skill: Judgment Execution',
      priority: 2,
      level: 'Level 14',
      reason:
        '8 flying swords count as 8 sword attacks towards [Void] application - extremely efficient for DOT stacking',
      description:
        'Cooldown: 8.0s\n8 flying swords simultaneously launch, dealing 720% attack power chaos damage to designated enemy unit',
    },
    {
      skill: 'Passive: Strong Pressure',
      priority: 3,
      level: 'Level 14',
      reason: 'Core DOT application mechanic - essential for her entire kit',
      description:
        'Every 4 sword attacks (Basic Attack also count as 1 sword attack, Auto Skill counts as 8 sword attacks), next attack adds [Void] effect. [Void]: Deals 36% attack power chaos damage per second per layer, max 10 layers, lasts 10 seconds',
    },
    {
      skill: "Normal Attack: Queen's Torture",
      priority: 4,
      level: 'Level 7',
      reason: 'Basic damage filler, counts towards [Void] sword attack counter',
      description:
        'Cooldown: 2.0s\nDeals 120% attack power chaos damage to designated enemy unit',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Black-Faced Fool',
      effect:
        "Hera's signature memory card that perfectly synergizes with her DOT playstyle. Attack power +40% amplifies all damage, while the +40% damage against DOT targets maximizes her sustained damage output.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'Heracard.jpg',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      description:
        'Attack power +40%, when attacking targets affected by continuous damage effects, damage increases by 40%',
    },
    {
      name: 'Hero Never Resting',
      effect:
        'High crit damage boost for single-target scenarios. Effective in boss fights where enemy count is low.',
      priority: 'Recommended',
      characterSpecific: false,
      memoryImage: 'Shannacard.jpg',
      memoryStats: { hp: '4,200', attack: '650', defense: '395' },
      description:
        'When the number of enemies on field is less than 2: Increase critical hit damage by 72%',
    }
  ],
  alternativeMemoryCards: [
    {
      name: 'Frozen Heart',
      effect: 'SSS-tier Attacker memory in the memory tier list.',
      characterSpecific: false,
      memoryImage: 'Yuiscard.jpg',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      description: 'Critical Rate increased by 34%\nPursue Damage dealt by the wearer increases Critical Damage by 68%',
    },
    {
      name: 'King of Lust',
      effect: 'SSS-tier Attacker memory in the memory tier list.',
      characterSpecific: false,
      memoryImage: 'KingOfLust.png',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      description: 'Critical hit rate increased by 40%, attack power increased by 40%. Each time the wearer\'s attack hits an enemy, they accumulate 1 stack of [Battle Spirit]. Once [Battle Spirit] reaches 10 stacks, all [Battle Spirit] will be consumed, and the [Penetrating] effect will be gained, increasing critical hit damage dealt by 50% for 5 seconds. [Battle Spirit] will not accumulate while the [Penetrating] effect is active.',
    },
    {
      name: 'Shared Bath Time',
      effect: 'SSS-tier Attacker memory in the memory tier list.',
      characterSpecific: false,
      memoryImage: 'Odincard.jpg',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      description: 'Attack power increases by 40%, and all damage increases by 40% when casting an ultimate skill.\nAfter the equipped character casts an ultimate skill, gain 1 stack of [Charge]. After dealing damage to any target, consume [Charge] to apply 1 stack of [Final Flame].\n[Final Flame]: Deals 15% <color=#c90d0d>Blaze</color> damage every 2 seconds, up to 5 stacks, lasting 10 seconds.',
    },
  ],
  runes: {
    primary: 'Attack %, Crit Rate %',
    secondary: 'Crit DMG%',
    stats: ['ATK%', 'Crit Rate%', 'Crit DMG%'],
    additionalStats: ['Penetration'],
    recommendedSets: [
      {
        name: 'Gimel Continuous Damage 4-piece + Alpha 2-piece',
        englishName: 'Gimel Continuous Damage 4-piece + Alpha 2-piece',
        mainRune: 'Gimel-Continuous-Damage',
        secondaryRune: 'Alpha',
        mainRune2Piece: '2-piece: Continuous damage increased by 20%',
        mainRune4Piece:
          '4-piece: After dealing continuous damage, own attack power increases by 2%, can stack up to 10 layers, lasts 5 seconds',
        secondaryRuneEffect: '2-piece: Attack Power +8%',
        note: 'DOT-focused build. Gimel can only be obtained in guild raids.',
      },
      {
        name: 'Beth 4-piece + Alpha 2-piece',
        englishName: 'Beth 4-piece + Alpha 2-piece',
        mainRune: 'Beth',
        secondaryRune: 'Alpha',
        mainRune2Piece: '2-piece: Critical Hit Rate +6%',
        mainRune4Piece: '4-piece: When HP >80%: Critical Hit Damage +24%',
        secondaryRuneEffect: '2-piece: Attack Power +8%',
        note: 'Crit-focused build for burst damage with Enhanced Ultimate.',
      },
    ],
    alternativeSets: [
      {
        name: 'Beth 4-piece + Gimel 2-piece',
        englishName: 'Beth 4-piece + Gimel 2-piece',
        mainRune: 'Beth',
        secondaryRune: 'Gimel-Continuous-Damage',
        mainRune2Piece: '2-piece: Critical Hit Rate +6%',
        mainRune4Piece: '4-piece: When HP >80%: Critical Hit Damage +24%',
        secondaryRuneEffect: '2-piece: Continuous damage increased by 20%',
      },
      {
        name: 'Gimel Continuous Damage 4-piece + Beth 2-piece',
        englishName: 'Gimel Continuous Damage 4-piece + Beth 2-piece',
        mainRune: 'Gimel-Continuous-Damage',
        secondaryRune: 'Beth',
        mainRune2Piece: '2-piece: Continuous damage increased by 20%',
        mainRune4Piece:
          '4-piece: After dealing continuous damage, own attack power increases by 2%, can stack up to 10 layers, lasts 5 seconds',
        secondaryRuneEffect: '2-piece: Critical Hit Rate +6%',
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
      recommendedStat: 'Critical Rate (%) / Critical Damage (%) / Attack (%)',
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
        'Attack % for DOT build. Crit Rate % if you are lacking crit rate, otherwise get Crit Damage %.',
    },
    5: {
      name: 'Position 5: Variable Main Stats',
      recommendedStat: 'Chaos Attribute Damage (%)',
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
      description: 'Chaos Attribute Damage % is essential for Hera as all her damage is Chaos',
    },
    6: {
      name: 'Position 6: Variable Main Stats',
      recommendedStat: 'Attack (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description: 'Attack % for maximum damage scaling on both direct hits and DOT',
    },
  },
  awakenings: {
    keyMilestones: [
      {
        level: 1,
        effect: 'Attack power +20%',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 2,
        effect: 'Add [Void] required attack count -1 (from 4 to 3)',
        importance: 1,
        importanceLabel: 'Very Good',
      },
      {
        level: 3,
        effect: '[Skills] and [Normal Attack] level cap +4',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 4,
        effect: 'Chaos damage +30%',
        importance: 2,
        importanceLabel: 'Good',
      },
      {
        level: 5,
        effect: '[Required Skills] and [Passive] level cap +4',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 6,
        effect: "Ultimate skill ignores target's 20% chaos resistance",
        importance: 1,
        importanceLabel: 'Very Good',
      },
    ],
  },
  teamSkill: {
    name: 'Combination Skill',
    activationCondition: 'Team contains 2 [Otis] faction or 2 [Chaos] attribute characters',
    effects: [
      'Self attack power +10%',
      'Battle Start: Every 500 attack power increases self penetration by 3%, max 6 stacks (up to 18% penetration)',
    ],
  },
  teamSynergy: {
    goodWith: [
      'Freya - best pick for Chaos DoT synergy',
      'Hela - Chaos DPS',
      'Morgan Le Fay - Supporter',
      'Jorogumo - Healer',
      'Thor or Guinevere - Tank',
      'Frigga',
    ],
    note: "Hera is quite hard to use since she needs specific team compositions. The main problem is finding good DOT damage dealers to help stack layers. Freye is the best pick to pair with her for Chaos and DOT synergy. Recommended team: Hera + Freye + Jorogumo (healer) + Thor or Guinevere (tank). Morgan Le Fay works well as a buffer if needed.",
  },
};
