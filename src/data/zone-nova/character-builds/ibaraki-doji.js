// Ibaraki-doji Build - Zone Nova Character Build
// SSR Fire character - Ultimate Damage Amplification Debuffer

export const ibarakiDojiBuild = {
  name: 'Ibaraki-doji',
  role: 'Debuffer',
  buildType: 'Debuffer, Increase Ultimate Damage Taken',
  description:
    'Ibaraki-doji is a Fire debuffer that increases damage taken from ultimate skills. She requires significant investment (full dupes and memory card) to reach her full potential. At max investment, she can nearly triple the damage enemies take from teammate ultimates (+198.5%).',
  skillPriority: [
    {
      skill: 'Ultimate: Fire Phoenix Curse',
      priority: 1,
      level: 'Level 10+4',
      reason:
        'Core debuff application - applies +87.9% ultimate damage taken debuff and can interrupt enemy skills. This is her strongest single debuff and should be maxed first.',
      description:
        'Energy Cost: 3\nUnleashes a Fire Phoenix in the direction of the enemy target, dealing 360% fire damage to all enemies in its path. Enemies hit by the damage will be inflicted with 1 stack of [Flame Curse], increasing their damage taken from ultimate skills by 87.9% for 10 seconds. This damage can [Interrupt] any skill being cast by the target.',
    },
    {
      skill: 'Auto Skill: Arrow of the Curse',
      priority: 2,
      level: 'Level 10+4',
      reason:
        'Secondary debuff with +38.6% all damage taken and energy drain effect. AOE application makes it valuable for multi-target fights.',
      description:
        'Cooldown: 5.0s\nDeals fire damage equal to 244.3% of attack power to the target and a 4-meter radius, and applies 1 stack of [Curse Covenant], reducing energy gain efficiency by 35.8% and increasing damage taken by 38.6% for 10 seconds.',
    },
    {
      skill: 'Passive: Deboning',
      priority: 3,
      level: 'Level 10+4',
      reason:
        'Stacking ultimate damage amplification (+36% at max 10 stacks). Requires consistent attacking to maintain stacks but provides significant damage boost.',
      description:
        'All attacks inflict [Eviscerate] upon damaging enemies, increasing damage taken from ultimate skills by 3.6%, up to 10 stacks, lasting 5 seconds.',
    },
    {
      skill: 'Normal Attack: Flame Arrow',
      priority: 4,
      level: 'Level 7-10',
      reason:
        'Basic filler damage and helps maintain passive stacks. Lower priority but still contributes to overall kit.',
      description:
        'Cooldown: 2.0s\nDeals 120% of attack power as fiery damage to the designated enemy unit.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'A Perfect Makeup Look?',
      effect:
        "Ibaraki-doji's exclusive memory card. Provides 40% attack increase and an additional 36% damage taken debuff on ultimate hit, plus anti-healing.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'Ibaraki-dojicard',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      slug: 'a-perfect-makeup-look',
      description:
        'Attack power increased by 40%. When a Ultimate Skill deals damage, the target takes 36% more damage and receives 40% less healing for 5 seconds',
      spendingNote:
        'Essential for maximizing her debuff potential. The 36% damage taken debuff stacks with her other debuffs.',
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'Sleepy Guardian',
      effect:
        'SR memory card that reduces target energy regen, synergizing with her energy drain from Arrow of the Curse',
      characterSpecific: false,
      memoryImage: 'Belphegarcard.jpg',
      memoryStats: { hp: '5,200', attack: '420', defense: '380' },
      description: 'Ultimate skill can reduce targets energy regen by 18%.',
      note: 'Stacks with her Skill energy drain (-35.8%) for strong energy denial.',
    },
  ],
  runes: {
    primary: 'HP%',
    secondary: 'HP / Defense',
    stats: ['HP%', 'DEF%'],
    additionalStats: ['HP', 'DEF'],
    buildNote:
      'Ibaraki-doji is primarily a debuffer, so her personal damage is not the main focus. But the main problem even going full Tank she wont survive in PVP that much.',
    recommendedSets: [
      {
        name: 'Giants 4-piece + Zahn 2-piece',
        englishName: 'Giants [Vulnerability] 4-piece + Zahn 2-piece',
        mainRune: 'Giants',
        secondaryRune: 'Zahn',
        mainRune2Piece: '2-piece: Attack power increased by 8%',
        mainRune4Piece:
          '4-piece: When equipped character is "Debuff" class, casting ultimate skill damage causes targets to take 10% increased damage for 5 seconds',
        secondaryRuneEffect: '2-piece: HP +8%',
      },
      {
        name: 'Tide 4-piece + Zahn 2-piece',
        englishName: 'Tide [Energy] 4-piece + Zahn 2-piece',
        mainRune: 'Tide',
        secondaryRune: 'Zahn',
        mainRune2Piece: '2-piece: Defense increased by 12%',
        mainRune4Piece:
          "4-piece: Within 10 seconds after combat starts, your team's energy gain efficiency is increased by 30%",
        secondaryRuneEffect: '2-piece: HP +8%',
        note: 'Team energy support build - helps the team get ultimates faster at the start of battle.',
      },
    ],
    alternativeSets: [
      {
        name: 'Zahn 2-piece + Shattered Foundation 2-piece + Tide 2-piece',
        englishName: 'Zahn 2-piece + Shattered Foundation 2-piece + Tide [Energy] 2-piece',
        zahn: { effect: '2-piece: HP +8%' },
        shatteredFoundation: { effect: '2-piece: Defense +12%' },
        tide: { effect: '2-piece: Defense +12%' },
        note: 'Pure survivability build - no 4-piece bonus but maximizes tankiness with HP +8% and DEF +24%.',
      },
      {
        name: 'Daleth 4-piece + Zahn 2-piece',
        englishName: 'Daleth 4-piece + Zahn 2-piece',
        mainRune: 'Daleth',
        secondaryRune: 'Zahn',
        mainRune2Piece: '2-piece: Healing Effectiveness +10%',
        mainRune4Piece: '4-piece: Battle Start: Gain 1 Energy immediately',
        secondaryRuneEffect: '2-piece: HP +8%',
        note: 'Energy start build - get ultimate out faster at the start of battle.',
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
      name: 'Position 5 — Variable Main Stats',
      recommendedStat: 'HP (%)',
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
      recommendedStat: 'HP (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
    },
  },
  awakenings: {
    priority: 'Ultimate damage amplification and resistance reduction are key',
    keyMilestones: [
      {
        level: 1,
        effect:
          'At the start of battle, the first use of a Ultimate Skill does not consume energy.',
        importance: 'High',
      },
      {
        level: 2,
        effect:
          "When your ultimate skill hits an enemy, it inflicts [Flame Pressure], reducing the enemy's attack power by 35% for 3 seconds.",
        importance: 'High',
      },
      {
        level: 3,
        effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
        importance: 'High',
      },
      {
        level: 4,
        effect: 'Attack power increased by 30%.',
        importance: 'Medium',
      },
      {
        level: 5,
        effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
        importance: 'High',
      },
      {
        level: 6,
        effect:
          'Targets affected by ultimate skills have their all resistances reduced by an additional 20% for 5 sec.',
        importance: 'Critical',
      },
    ],
  },
  teamSkill: {
    name: 'Combo Skill',
    activationCondition:
      'When the team contains 2 [Pingjing City] characters or 2 [Fire] characters',
    effects: [
      'After battle starts, reduces total damage dealt by all enemy units by 2.5%',
      'For every 1000 Attack Power, the effect increases by 100%, up to a maximum of 300%',
    ],
  },
  teamSynergy: {
    goodWith: [
      'Odin',
      'Afrodite',
      'Hera',
      'Leviathan',
      'Mordred',
      'Shanna',
      'Yuis',
      'Any character with high ultimate damage',
    ],
    note: 'Ibaraki-doji works best with characters that deal high ultimate damage. Her +198.5% ultimate damage taken debuff (at full investment) makes her very strong for PVE Single Target. Pair her with strong ultimate DPS characters to maximize her debuff value.',
  },
};
