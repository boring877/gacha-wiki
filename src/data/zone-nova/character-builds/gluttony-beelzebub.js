// Gluttony - Beelzebub Build - Zone Nova Character Build
// SSR Ice character - Energy Control Debuffer / Team Support

export const gluttonyBeelzebubBuild = {
  name: 'Gluttony - Beelzebub',
  role: 'Debuffer',
  buildType: 'Ice Energy Control Support',
  description:
    "Gluttony - Beelzebub is an Ice debuffer focused on energy control and tempo. Her kit drains enemy energy, accelerates allied energy, and applies a wide teamwide swing through [Gluttony] and [Return], making her strongest when she can cycle ultimates quickly and survive long enough to keep disrupting the enemy team's flow.",
  skillPriority: [
    {
      skill: 'Ultimate: Frozen Feedback',
      priority: 1,
      level: 'Level 10',
      reason:
        'Core support button. Applies her largest enemy debuff while giving the whole team a matching offensive and defensive buff.',
      description:
        'Energy Cost: 3\nDeals 732.9% Frost damage to all enemies and inflicts [Gluttony], reducing enemy attack power by 60.1%, defense by 72.9%, and energy recovery efficiency by 10% for 5 seconds. At the same time, all allies gain [Return], increasing attack power by 60.1%, defense by 72.9%, and energy recovery efficiency by 20% for 5 seconds.',
    },
    {
      skill: 'Passive: Taotie taxation',
      priority: 2,
      level: 'Level 10',
      reason:
        'Immediate tempo swing at battle start. It is one of the main reasons to bring Beelzebub in the first place.',
      description:
        "Upon entering battle, activate [Gluttony Authority] to immediately reduce the enemy's energy by 2 points, while your side gains 2 points of energy, but the energy acquisition efficiency is reduced by 15.7% for 7 seconds.",
    },
    {
      skill: 'Auto Skill: Cold Deprivation',
      priority: 3,
      level: 'Level 10',
      reason:
        'Reliable single-target pressure that continues the energy-denial plan between ultimates.',
      description:
        "Cooldown: 7.0s\nDeals 488.6% attack damage as Frost damage to the designated enemy unit and reduces the enemy's energy by 1.",
    },
    {
      skill: 'Normal Attack: Cold Devour',
      priority: 4,
      level: 'Level 7',
      reason: 'Basic filler damage with lower overall impact than the rest of her control kit.',
      description:
        'Cooldown: 2.0s\nDeals Frost damage equal to 120% attack power to the designated enemy unit.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Nutrition Studies',
      effect:
        "Beelzebub's exclusive memory card. It supports the same energy-control plan as her kit by adding [Drain] after skill use while also giving teamwide attack support.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'NutritionStudies.png',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description:
        'HP increased by 40%. Attack power of the entire team increased by 20%. After the wearer uses a skill, inflicts [Drain] on all enemies for 4 seconds. [Drain] reduces enemy energy regeneration efficiency by 10% and increases allied energy regeneration efficiency by 10%.',
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'Sleepy Guardian',
      effect:
        'SR memory card that adds more energy denial, fitting Beelzebub teams that want to slow enemy ultimates as much as possible.',
      characterSpecific: false,
      memoryImage: 'SleepyGuardian.png',
      memoryStats: { hp: '5,200', attack: '420', defense: '380' },
      description: 'Ultimate skill can reduce targets energy regen by 18%.',
      note:
        'A lower-investment option if you want to lean harder into energy control rather than raw stat value.',
    },
  ],
  runes: {
    primary: 'Attack%',
    secondary: 'HP / Defense',
    stats: ['ATK%', 'HP%', 'DEF%'],
    additionalStats: ['ATK', 'HP', 'DEF'],
    buildNote:
      "Beelzebub's damage and team-skill scaling are attack-based, but her job is still to stay alive long enough to keep disrupting enemy energy. Prioritize Attack% first, then add HP and Defense so she can reliably reach multiple ultimate cycles.",
    recommendedSets: [
      {
        name: 'Tide 4-piece + Alpha 2-piece',
        englishName: 'Tide [Energy] 4-piece + Alpha 2-piece',
        mainRune: 'Tide',
        secondaryRune: 'Alpha',
        mainRune2Piece: '2-piece: Defense increased by 12%',
        mainRune4Piece:
          "4-piece: Within 10 seconds after combat starts, your team's energy gain efficiency is increased by 30%",
        secondaryRuneEffect: '2-piece: Attack Power +8%',
      },
    ],
    alternativeSets: [
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
      {
        name: 'Daleth 4-piece + Alpha 2-piece',
        englishName: 'Daleth 4-piece + Alpha 2-piece',
        mainRune: 'Daleth',
        secondaryRune: 'Alpha',
        mainRune2Piece: '2-piece: Healing Effectiveness +10%',
        mainRune4Piece: '4-piece: Battle Start: Gain 1 Energy immediately',
        secondaryRuneEffect: '2-piece: Attack Power +8%',
        note: 'Useful when you want the fastest possible first ultimate timing.',
      },
    ],
  },
  mainStatsByPosition: {
    1: {
      name: 'Position 1 - Fixed Main Stat',
      stat: 'HP (Flat Value)',
      description: 'Always HP - no other options',
      isFixed: true,
    },
    2: {
      name: 'Position 2 - Fixed Main Stat',
      stat: 'Attack (Flat Value)',
      description: 'Always Attack - no other options',
      isFixed: true,
    },
    3: {
      name: 'Position 3 - Fixed Main Stat',
      stat: 'Defense (Flat Value)',
      description: 'Always Defense - no other options',
      isFixed: true,
    },
    4: {
      name: 'Position 4 - Variable Main Stats',
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
        'Attack % gives the most value to her damage and helps her team-skill threshold scaling.',
    },
    5: {
      name: 'Position 5 - Variable Main Stats',
      recommendedStat: 'Attack (%) / Ice Attribute Damage (%)',
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
        'Attack % is the safer all-purpose option for support value, while Ice Damage helps her personal damage if you want more pressure.',
    },
    6: {
      name: 'Position 6 - Variable Main Stats',
      recommendedStat: 'Attack (%) / HP (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description:
        'Attack % is best for tempo and damage, but HP % is fine if you need more survivability in longer fights.',
    },
  },
  awakenings: {
    priority:
      'A1 and A6 are the biggest quality spikes. A2 is also strong if you want to push her energy-control role harder.',
    keyMilestones: [
      {
        level: 1,
        effect: 'Upon entering battle, the first ultimate skill does not consume energy.',
        importance: 1,
        importanceLabel: 'Very Good',
      },
      {
        level: 2,
        effect:
          "Beelzebub's skill effect is enhanced, reducing the enemy's energy by 2 and increasing our energy by 1.",
        importance: 2,
        importanceLabel: 'Good',
      },
      {
        level: 3,
        effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 4,
        effect:
          "Our entire party's HP is increased by 20%, and the effects of our ultimate skills [Gluttony] and [Repayment] are increased from 5 seconds to 8 seconds.",
        importance: 1,
        importanceLabel: 'Very Good',
      },
      {
        level: 5,
        effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 6,
        effect: 'All allies gain 10% All Resistances, while all enemies lose 10% All Resistances.',
        importance: 1,
        importanceLabel: 'Very Good',
      },
    ],
  },
  teamSkill: {
    name: 'Combo',
    activationCondition: 'When the team contains 2 [Bicta Tower] characters or 2 [Ice] characters',
    effects: [
      'At the start of battle, reduces the total damage dealt by all enemy units by 3%',
      'For every 800 Attack Power, this effect increases by 100%, up to a maximum of 500%',
    ],
  },
  teamSynergy: {
    goodWith: [
      'Bicta Tower teammates',
      'Ice attribute teams',
      'Ultimate-reliant carries',
      'Energy control / tempo teams',
    ],
    note:
      "Beelzebub works best in teams that care about winning the energy race. She gains value whenever her team can convert the extra energy from [Gluttony Authority], [Return], and Nutrition Studies into faster ultimates while the enemy team is delayed.",
  },
};
