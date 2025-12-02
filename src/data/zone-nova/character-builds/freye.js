// Freye Build - Zone Nova Character Build
// SSR Chaos character - Chaos Debuffer with DOT and Damage Amplification

export const freyeBuild = {
  name: 'Freye',
  role: 'Debuffer',
  buildType: 'Chaos DOT Debuffer',
  description:
    'Freye is a powerful Chaos debuffer who excels at damage amplification and DOT damage. She applies resistance reduction, Divine Meteor stacks for continuous damage, and significantly increases enemy damage taken through her ultimate skills. Her kit is designed around making enemies more vulnerable while dealing substantial chaos damage over time.',
  skillPriority: [
    {
      skill: 'Ultimate: Dark Fate',
      priority: 1,
      level: 'Level 10',
      reason:
        'Massive damage amplification - 60% increased damage taken with enhanced ultimate, core to her debuff role',
      description:
        "Energy Cost: 3\nSummons black holes dealing damage to enemies within range. Enhanced version (available after awakening) increases enemy damage taken by 60% for 10 seconds and deals 180% total chaos damage. This is Freye's primary damage amplification tool.",
    },
    {
      skill: 'Passive: Meteor Storm',
      priority: 2,
      level: 'Level 10',
      reason:
        'Core DOT mechanic - Divine Meteor stacks provide consistent damage and enhance ultimate capabilities',
      description:
        'When using attacks or skills, applies 【Divine Meteor】 stacks. Each stack deals 19.2% attack power chaos damage every 3 seconds (max 10 stacks). With enhanced ultimate, also reduces enemy energy gain by 100% and defense by 20%.',
    },
    {
      skill: 'Auto Skill: Attribute Break',
      priority: 3,
      level: 'Level 10',
      reason:
        'Critical resistance reduction - 15% resistance debuff that enables higher damage output for entire team',
      description:
        'Cooldown: 5.0s\nApplies weakness attribute and reduces corresponding enemy resistance by 15% for 10 seconds. Deals 360% attack power damage of matching attribute. Essential for increasing team damage output.',
    },
    {
      skill: 'Normal Attack: Chaos Strike',
      priority: 4,
      level: 'Level 7',
      reason: 'Primary Divine Meteor stack applicator and basic damage source',
      description:
        'Deals 120% attack power chaos damage to designated enemy. Main source for applying Divine Meteor stacks consistently.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Lamplight Study',
      effect:
        "Freye's exclusive memory card that provides attack boost and unique Fate Bind mechanic, perfectly synergizing with her damage amplification role.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'Freyecard.jpg',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description:
        'Attack power increased by 40%, Ultimate skill damage can apply 【Fate Bind】. Each stack increases damage taken by 3.6% (max 10 stacks = 36% total)',
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'True Order (真正的秩序)',
      effect:
        "SSR memory card that provides significant damage boost against enemies with negative status effects, perfect for Freye's debuff playstyle.",
      characterSpecific: false,
      memoryImage: 'Lokicard.jpg',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description: 'When attacking enemies with negative status effects, damage increases by 32%',
    },
    {
      name: 'Battlefield Flower',
      effect:
        "SR memory card that provides scaling damage based on negative effects, excellent for amplifying Freye's debuff damage output.",
      characterSpecific: false,
      memoryImage: 'ninicard.jpg',
      memoryStats: { hp: '5,000', attack: '500', defense: '500' },
      description:
        'For each negative effect on the target, damage dealt increases by 20%, maximum 3 stacks (60% total)',
    },
    {
      name: 'Deceptive Ultimate Temptation',
      effect:
        'SR memory card designed specifically for Debuffer class characters with attack boost and debuff synergy.',
      characterSpecific: false,
      memoryImage: 'Deceptive-Ultimate-Temptation.jpg',
      memoryStats: { hp: '5,000', attack: '500', defense: '500' },
      description:
        'Attack increased by 20%. When attacking enemies with negative status, damage increased by 20%',
    },
  ],
  runes: {
    primary: 'Attack',
    secondary: 'Penetration',
    stats: ['ATK%', 'Penetration'],
    additionalStats: ['ATK', 'HP', 'DEF'],
    buildNote:
      'Attack and Penetration are primary for maximizing debuff potency and DOT damage. While Freya deals substantial DOT, her damage amplification role benefits greatly from raw attack power to make enemies more vulnerable to team damage.',
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
      description:
        "Attack % for maximum debuff potency and DOT damage scaling. Freye's abilities scale directly with attack power.",
    },
    5: {
      name: 'Position 5 — Variable Main Stats',
      recommendedStat: 'Chaos Attribute Damage (%)',
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
      description:
        'Chaos Attribute Damage % for maximizing all chaos damage output including DOT and ultimate damage.',
    },
    6: {
      name: 'Position 6 — Variable Main Stats',
      recommendedStat: 'Attack (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description:
        'Attack % for maximum scaling of all damage and debuff effects. Alternative HP/DEF for survivability if needed.',
    },
  },
  awakenings: {
    priority: 'Enhanced Ultimate access first, then damage amplification, finally stat scaling',
    keyMilestones: [
      {
        level: 1,
        effect: 'After combat starts, can immediately cast 【Enhanced Ultimate】',
        importance: 'Critical',
      },
      {
        level: 2,
        effect:
          'Ultimate skill damage increased by 20%. 【Enhanced Ultimate】 energy cost reduced to 1. Enhanced Passive: When large black hole exists, all enemy units have energy gain reduced by 100% and total defense reduced by 20%',
        importance: 'Essential',
      },
      {
        level: 3,
        effect: '[Basic Attack], [Skill], [Ultimate], and [Passive] level and level cap +2',
        importance: 'High',
      },
      {
        level: 4,
        effect: 'Attack power increased by 30%',
        importance: 'High',
      },
      {
        level: 5,
        effect: '[Basic Attack], [Skill], [Ultimate], and [Passive] level and level cap +2',
        importance: 'High',
      },
      {
        level: 6,
        effect:
          'Targets affected by ultimate skills additionally have all resistance reduced by 20%',
        importance: 'Essential',
      },
    ],
  },
  teamSkill: {
    name: 'Divine Protection',
    activationCondition: 'Team contains 2 [Chemic] characters or 2 [Chaos] characters',
    effects: [
      'Self attack power increases by 10%',
      'At battle start, every 500 attack power adds 3% penetration, maximum 6 times (18% max)',
    ],
  },
  teamSynergy: {
    goodWith: ['Chaos characters', 'DOT characters', 'High damage DPS characters'],
    note: 'Freye excels in teams that can capitalize on enemy vulnerability. Her resistance reduction and damage amplification make her an excellent support for high-damage DPS characters. Works particularly well with other Chaos characters for team skill benefits and DOT stacking teams.',
  },
};
