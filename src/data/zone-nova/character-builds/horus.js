// Horus Build - Zone Nova Character Build
// SSR Holy character - Attack Scaling DOT Debuffer

export const horusBuild = {
  name: 'Horus',
  role: 'Debuffer',
  buildType: 'Holy DOT Controller',
  description:
    'Horus is a debuffer and DOT Damage Character, she scales with attack power. Her Ultimate can interrupt skill casting. She mainly focus on ATK and Penetration.',
  skillPriority: [
    {
      skill: 'Passive: Solar Divine Judgment',
      priority: 1,
      level: 'Level 10',
      reason:
        'Core mechanic enabling [Seal] consumption for powerful AOE explosions and additional [Piercing] stack application - essential for maximizing DOT output',
      description:
        'When using skills (Ultimate & Auto skill) on targets with [Seal], consumes 1 layer and triggers area explosion (4m radius) that causes 120% attack power holy damage to targets. Hit targets gain 1 layer [Piercing]. [Piercing] Effect: Each layer deals 19.2% attack power holy damage every 3 seconds. Maximum Stacks: 10 layers for continuous damage for 10 seconds',
    },
    {
      skill: 'Auto Skill: Arrow of Atum',
      priority: 2,
      level: 'Level 10',
      reason:
        'Primary [Piercing] stack application with AOE damage - main source of DOT maintenance and burst potential through [Seal] consumption',
      description:
        'Cooldown: 5.0s\nShoots arrows at target. Deals 120% attack power holy damage to target and 2m radius. Adds 1 layer [Piercing] to all hit enemies. [Piercing] Effect: Each layer deals 19.2% attack power holy damage every 3 seconds. Maximum Stacks: 10 layers for continuous damage for 10 seconds',
    },
    {
      skill: 'Ultimate: Eye of Wadjet',
      priority: 3,
      level: 'Level 10',
      reason:
        'High burst damage with [Seal] application and valuable interrupt utility - essential for PVE boss encounters and enabling passive explosions',
      description:
        'Energy Cost: 3\nDeals 480% attack power holy damage to target. Adds 1 layer [Seal] and 1 layer [Piercing]. Skill Interrupt: This Ultimate can interrupt Skill casting (Good in PVE for Boss)',
    },
    {
      skill: 'Normal Attack: Holy Radiance Arrow',
      priority: 4,
      level: 'Level 7',
      reason:
        'Basic filler damage that contributes to overall DPS and provides consistent damage output',
      description: 'Deals holy damage equal to 120% of Attack to enemy',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Cute Little Thing',
      effect:
        "Horus's exclusive memory card. Provides massive attack increase and DOT damage amplification, perfectly synergizing with [Piercing] mechanics and attack scaling.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'Horuscard',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      slug: 'cute-little-thing',
      description:
        'Attack power increases by 40%. When you have (DOT) continuous damage, Target take 24% increased damage, lasts 3 seconds',
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'Battlefield Flower',
      effect:
        'SR memory card that increases damage by 20% for each negative effect on the target (max 3 stacks)',
      characterSpecific: false,
      memoryImage: 'ninicard.jpg',
      memoryStats: { hp: '5,000', attack: '500', defense: '500' },
      description:
        'For each negative effect on the target, damage dealt increases by 20%, maximum 3 stacks.',
    },
    {
      name: 'Deceptive Ultimate Temptation',
      effect:
        'SR memory card designed for Debuffer class that provides attack boost and increased damage against enemies with negative status',
      characterSpecific: false,
      memoryImage: 'Deceptive-Ultimate-Temptation.jpg',
      memoryStats: { hp: '5,000', attack: '500', defense: '500' },
      description:
        'Attack increased by 20%. When attacking enemies with negative status, damage increased by 20%.',
    },
    {
      name: 'True Order (真正的秩序)',
      effect:
        'SSR memory card that provides massive 32% damage increase when attacking enemies with negative status effects',
      characterSpecific: false,
      memoryImage: 'Lokicard.jpg',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description: 'When attacking enemies with negative status effects, damage increases by 32%.',
    },
  ],
  runes: {
    primary: 'Attack',
    secondary: 'Penetration',
    stats: ['ATK%', 'Penetration'],
    additionalStats: ['ATK', 'HP', 'DEF'],
    buildNote:
      'Atk% and Penetration are good, but the damage still weak. Her DOT stacking and Damage taken is not bad too. Taking HP and DEF is not bad too, its better then crit rate and crit damage beucase you do not really benift much since you deal DOT damage.',
    recommendedSets: [
      {
        name: 'Giants 4-piece + Gimel 2-piece',
        englishName: 'Giants [Vulnerability] 4-piece + Gimel [Continuous Damage] 2-piece',
        mainRune: 'Giants',
        secondaryRune: 'Gimel-Continuous-Damage',
        mainRune2Piece: '2-piece: Attack power increased by 8%',
        mainRune4Piece:
          '4-piece: When equipped character is "Debuff" class, casting ultimate skill damage causes targets to take 10% increased damage for 5 seconds',
        secondaryRuneEffect: '2-piece: Continuous damage increased by 20%',
      },
    ],
    alternativeSets: [
      {
        name: 'Gimel 4-piece + Giants 2-piece',
        englishName: 'Gimel [Continuous Damage] 4-piece + Giants [Vulnerability] 2-piece',
        mainRune: 'Gimel-Continuous-Damage',
        secondaryRune: 'Giants',
        mainRune2Piece: '2-piece: Continuous damage increased by 20%',
        mainRune4Piece:
          '4-piece: After dealing continuous damage, own attack power increases by 2%, can stack up to 10 layers, lasts 5 seconds',
        secondaryRuneEffect: '2-piece: Attack power increased by 8%',
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
    },
    5: {
      name: 'Position 5 — Variable Main Stats',
      recommendedStat: 'Holy Attribute Damage (%)',
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
      recommendedStat: 'Attack (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
    },
  },
  awakenings: {
    priority: 'DOT damage amplification first, then penetration and stat scaling',
    keyMilestones: [
      {
        level: 1,
        effect: 'Attack power increased by 20%',
        importance: 'Essential',
      },
      {
        level: 2,
        effect:
          'When dealing continuous damage, make the targets received continuous damage increase by 20%, lasts 3 seconds, repeated triggers can refresh the duration',
        importance: 'Critical',
      },
      {
        level: 3,
        effect: '[Skill] and [Normal Attack] level and level cap +4',
        importance: 'High',
      },
      {
        level: 4,
        effect: '[Continuous Damage] effects deal +35% increased damage',
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
          'When dealing damage to targets that have [Continuous damage] status, gain 20% holy resistance penetration',
        importance: 'Essential',
      },
    ],
  },
  teamSkill: {
    name: 'Combination Skill',
    activationCondition: 'When the team contains 2 [Chemic] characters or 2 [Holy] characters',
    effects: [
      'Self attack power increases by 10%',
      'At battle start, every 500 attack power adds 3% penetration, maximum 6 times (18% max)',
    ],
  },
  teamSynergy: {
    goodWith: ['Odin', 'DOT characters'],
    note: 'The Main Problem with horus is she does not provide any strong Debuff, her main thing is DOT damage and its not enough. the good thing about her, the base atk is really high !!',
  },
};
