// Loki Build - Zone Nova Character Build
// SSR Chaos Debuffer - Vulnerability Stacker / Team Amplifier with [Seal] and [Weakness] debuffs

export const lokiBuild = {
  name: 'Loki',
  role: 'Debuffer',
  buildType: 'Vulnerability Stacker / Team Amplifier',
  description:
    "Loki is a debuffer that deals decent damage but has a high ultimate energy cost (5). She requires Awakening 1 to be useful, as her base passive only triggers on auto skills. Her main value is her vulnerability debuff which increases total damage taken by enemies, but at base (1 layer, 36%) it's barely noticeable. She needs Awakening 6 to stack 2 layers (72%) to become truly effective. Her auto skill applies [Seal] to prevent enemy ultimates, and her ultimate applies [Weakness] to reduce enemy damage by 36%. Sadly, this unit is poorly designed and requires heavy investment to function well.",
  skillPriority: [
    {
      skill: 'Passive: Art of Deception',
      priority: 1,
      level: 'Level 10',
      reason:
        'Core mechanic - her only valuable skill. Auto skills apply 36% vulnerability (1 layer base). With A1, all attacks trigger it. With A6, stacks to 2 layers (72%).',
      description:
        'Auto skills apply 36% vulnerability debuff for 5 seconds. Refreshable Duration: New applications refresh the timer. Maximum Stacks: 1 layer base (2 layers with A6 for 72% increased damage).',
    },
    {
      skill: 'Ultimate: Woeful Wrath',
      priority: 2,
      level: 'Level 10',
      reason:
        'Applies 36% [Weakness] debuff for 10 seconds. With A1, also triggers passive vulnerability stacks. Targets highest ATK enemy. High energy cost (5).',
      description:
        'Energy Cost: 5\nRush to behind the enemy unit with the highest base attack power, deal 240% attack power chaos damage to target and apply [Weakness], reducing their damage dealt by 36%, lasting 10 seconds',
    },
    {
      skill: "Auto Skill: Jormungandr's Poison",
      priority: 3,
      level: 'Level 10',
      reason:
        'AoE damage with [Seal] preventing enemy ultimates for 5 seconds. Also triggers passive vulnerability debuff on all enemies.',
      description:
        'Cooldown: 10.0s\nDeal 120% attack power chaos damage to all enemy units and apply [Seal], preventing use of ultimate skills, lasting 5 seconds',
    },
    {
      skill: 'Normal Attack: Netherworld Fire',
      priority: 4,
      level: 'Level 7',
      reason:
        'Basic filler damage. Requires A1 to trigger passive vulnerability stacks (base passive is auto skills only).',
      description: 'Deals chaos damage equal to 120% of Attack to designated enemy',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'True Order (真正的秩序)',
      effect:
        "Loki's signature memory is perfect for her debuffer role. The 40% ATK boost increases her damage contribution, and the 24% vulnerability mark on the last target hit by ultimate stacks with her passive debuffs for team damage amplification.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'Lokicard.jpg',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description:
        'Attack increases by 40%, the last target hit by the wearer\'s ULT takes 24% increased damage',
    },
  ],
  alternativeMemoryCards: [],
  runes: {
    primary: 'Attack %',
    secondary: 'ATK',
    stats: ['ATK%', 'Crit Rate%'],
    additionalStats: ['ATK', 'Crit Rate%'],
    recommendedSets: [
      {
        name: 'Giants 4-piece + Alpha 2-piece',
        englishName: 'Giants 4-piece + Alpha 2-piece',
        mainRune: 'Giants',
        secondaryRune: 'Alpha',
        mainRune2Piece: '2-piece: Attack power increased by 8%',
        mainRune4Piece:
          '4-piece: When equipped character is "Debuff" class, casting ultimate skill damage causes targets to take 10% increased damage for 5 seconds',
        secondaryRuneEffect: '2-piece: Attack Power +8%',
        note: 'Best set for Loki. Giants 4-piece is exclusive to Debuffer class and adds another 10% vulnerability on ultimate. Only obtainable from Guild Raids.',
      },
    ],
    alternativeSets: [
      {
        name: 'Epsilon 4-piece + Alpha 2-piece',
        englishName: 'Epsilon 4-piece + Alpha 2-piece',
        mainRune: 'Epsilon',
        secondaryRune: 'Alpha',
        mainRune2Piece: '2-piece: Attack Power +8%',
        mainRune4Piece:
          '4-piece: After activating ultimate skill, entire team damage increased by 10%, lasts 10 seconds',
        secondaryRuneEffect: '2-piece: Attack Power +8%',
        note: "Good alternative if you don't have Giants set. Provides team-wide damage buff after ultimate.",
      },
      {
        name: 'Alpha 2-piece + Epsilon 2-piece + Giants 2-piece',
        englishName: 'Alpha 2-piece + Epsilon 2-piece + Giants 2-piece',
        alpha: { effect: '2-piece: Attack Power +8%' },
        epsilon: { effect: '2-piece: Attack Power +8%' },
        giants: { effect: '2-piece: Attack power increased by 8%' },
        note: 'Triple ATK% boost (24% total). Simple and effective while farming for Giants 4-piece.',
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
        'Attack % recommended to maximize damage contribution. Crit Rate % is also viable if you want more crit consistency.',
    },
    5: {
      name: 'Position 5 — Variable Main Stats',
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
      description:
        "Chaos Attribute Damage % is essential as all of Loki's damage is Chaos element",
    },
    6: {
      name: 'Position 6 — Variable Main Stats',
      recommendedStat: 'Attack (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description: 'Attack % for maximum damage scaling',
    },
  },
  awakenings: {
    keyMilestones: [
      {
        level: 1,
        effect: 'Normal attacks and Ultimate can additionally trigger passive skill effects.',
        importance: 1,
        importanceLabel: 'Very Good',
      },
      {
        level: 2,
        effect:
          'When taking damage, make the attacker deal 10% less damage for 5 seconds, repeated triggering can refresh the duration',
        importance: 4,
        importanceLabel: 'Bad',
      },
      {
        level: 3,
        effect: '[Skills] and [Normal Attack] level and level cap +4',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 4,
        effect: 'When attacking enemies with debuff status, damage increases by 35%.',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 5,
        effect: '[Ultimate] and [Passive] level and level cap +4',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 6,
        effect: 'The passives vulnerability effect can stack 1 additional layer (2 layers total for 72% increased damage)',
        importance: 1,
        importanceLabel: 'Very Good',
      },
    ],
  },
  teamSkill: {
    name: 'Combination Skill',
    activationCondition: 'Team contains 2 [A.S.A] faction or 2 [Chaos] attribute characters',
    effects: [
      'Self attack power +10%',
      'Battle Start: Every 500 attack power increases self chaos damage by 5%, max 6 stacks (up to 30% chaos damage)',
    ],
  },
  teamSynergy: {
    goodWith: ['Hera', 'Cleopatra', 'Freye', 'Any Chaos DPS'],
    note: "This unit needs a rework or some sort of buff to be usable. She can one-shot some PVP characters but is still not very useful overall. Sadly, this unit is quite bad and we do not recommend investing in her.",
  },
};
