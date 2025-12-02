// Freye Build - Zone Nova Character Build
// SSR Chaos character - Chaos Debuffer with DOT and Damage Amplification

export const freyeChaosBuild = {
  name: 'Freye',
  role: 'Debuffer',
  buildType: 'Chaos Debuffer',
  description:
    'Freye is Chaos debuffer that can reduce enemy resistance, and increase damage taken. She also can reduce enemy energy gain and defense. ',
  skillPriority: [
    {
      skill: 'Ultimate: Dark Fate',
      priority: 1,
      level: 'Level 10',
      reason:
        'Massive damage amplification - 60% increased damage taken with enhanced ultimate, core to her debuff role',
      description:
        'Energy Cost: 3\nSummons a small black hole that deals damage to designated enemy units and surrounding enemies within a 3-meter range, hitting up to 12 times. Total damage is 60% chaos damage. If the enemy takes damage within 10 seconds, damage taken is increased by 36%. Next ultimate skill is enhanced. Enhanced Ultimate: Summons a large black hole that deals damage to designated enemy units and surrounding enemies within a 5-meter range, hitting up to 12 times. Total damage is 180% chaos damage. Additionally, within 10 seconds, enemy damage taken is increased by 60%.',
    },
    {
      skill: 'Passive: Meteor Storm',
      priority: 2,
      level: 'Level 10',
      reason:
        'Core DOT mechanic - Divine Meteor stacks provide consistent damage and enhance ultimate capabilities',
      description:
        'When using basic attacks or skills to deal damage, applies one stack of 【Divine Meteor】. When using ultimate skill to deal damage to the same target 4 times, applies one stack of 【Divine Meteor】. 【Divine Meteor】: Every 3 seconds deals 19.2% attack power as chaos damage, can stack up to 10 times, lasts 10 seconds. Passive Effect: When a large black hole exists (Enhanced Ultimate), all enemy units have their energy gain reduced by 50% and total defense reduced by 10%. Enhanced: Energy gain reduced by 100% and total defense reduced by 20%.',
    },
    {
      skill: 'Auto Skill: Attribute Break',
      priority: 3,
      level: 'Level 10',
      reason:
        'Critical resistance reduction - 15% resistance debuff that enables higher damage output for entire team',
      description:
        'Cooldown: 5.0s\nApplies a weakness attribute to the designated enemy unit, prioritizing the attribute of the 4th character in your team, and reduces the corresponding attribute resistance by 15% for 10 seconds. Deals 360% attack power damage of the corresponding attribute to that target.',
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
      name: 'Sleepy Guardian',
      effect:
        "This memory is good for PVP to help reduce the target's energy recovery, preventing enemies from using their ultimate skills frequently.",
      characterSpecific: false,
      memoryImage: 'Belphegarcard.jpg',
      memoryStats: { hp: '5,200', attack: '420', defense: '380' },
      description: 'Ultimate skill can reduce targets energy regen by 18%.',
      note: 'Excellent PVP memory to control enemy ultimate skill timing.',
    },
  ],
  runes: {
    primary: 'Attack % ',
    secondary: 'Penetration',
    stats: ['ATK%', 'Penetration'],
    additionalStats: ['ATK', 'HP', 'DEF'],
    buildNote:
      'Her AOE damage is not bad but not strong enough, Some people go tank with her and little of ATK. She is a Debuffer mainly deal DOT damage and  increase damage taken and lower resistance.',
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
        name: 'Giants 4-piece + Alpha 2-piece',
        englishName: 'Giants [Vulnerability] 4-piece + Alpha 2-piece',
        mainRune: 'Giants',
        secondaryRune: 'Alpha',
        mainRune2Piece: '2-piece: Attack power increased by 8%',
        mainRune4Piece:
          '4-piece: When equipped character is "Debuff" class, casting ultimate skill damage causes targets to take 10% increased damage for 5 seconds',
        secondaryRuneEffect: '2-piece: Attack Power increased by 8%',
      },
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
      description: 'Attack Penetration for DOT damage if you want !. ',
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
    activationCondition: 'Team contains 2 [A.S.A] characters or 2 [Chaos] characters',
    effects: [
      'After combat starts, reduces total damage dealt by all enemy units by 2.5%',
      'For every 1000 attack power Freye has, this effect increases by 100% (doubles), maximum increase of 300%',
      'At 3000+ attack: 10% damage reduction (maximum)',
    ],
  },
  teamSynergy: {
    goodWith: ['DOT characters', 'High damage DPS characters', 'Chaos characters'],
    note: 'She is strong PVE, she can help clear things up and increase damage taken. also she is strong in PVP to stop the enemy from using their ultimate skill. However she is not busted !.',
  },
};
