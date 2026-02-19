// Wrath-Samael Build - Zone Nova Character Build
// SSR Chaos Guardian - Defense Scaling Tank with Neutralize mechanics

export const wrathSamaelBuild = {
  name: 'Wrath-Samael',
  role: 'Tank',
  buildType: 'Defense Scaling Tank with Neutralize Buffs',
  description:
    "Wrath-Samael is a tank that's good at PVP. The main problem with her is her ultimate cost is too high to benefit from it in PVE. She works against characters that are strong in normal attack or auto skill.",
  skillPriority: [
    {
      skill: 'Auto Skill: Trial of Original Sin',
      priority: 1,
      level: 'Level 10',
      reason: 'Best skill - Team Neutralize buff and [Sin] Unleashed mechanic for defense stacking and damage',
      description:
        'Cooldown: 5.0s\nAllies gain +57.3% Neutralize Rate for 5 seconds.\n[Neutralize] has a chance to reduce damage taken by 30% (Critical Damage ignores this effect).\n\n[Sin] Unleashed: When [Wrath] stacks reach 20, consumes 20 stacks of [Wrath] to activate:\n• Pulls in the 1 enemy with the highest ATK.\n• Deals Chaos DMG equal to 294.3% of DEF in a 3-radius fan area in front, causing minor Knockback.\n• Self DEF +13.2% for 7s (max 10 stacks).',
    },
    {
      skill: 'Ultimate: Divine Punishment: Absolute Territory',
      priority: 2,
      level: 'Level 10',
      reason: 'Powerful team buff providing Neutralize Rate, damage reduction, and enemy Crit Rate debuff',
      description:
        'Energy Cost: 5 | Cooldown: 7.0s\nAfter a short delay:\n• Allies: Neutralize Rate +68.6%, "Neutralize DMG Reduction" multiplier +43.8%, Damage Taken -17.8%.\n• Enemies: Crit Rate reduced by 60.6%. All enemies enter [Frenzy].\n\n[Frenzy]: Reduces normal attack and skill cooldown by 31.3% for 5 seconds.',
    },
    {
      skill: 'Passive: Guardian of Paradox',
      priority: 3,
      level: 'Level 10',
      reason: 'Core tanking ability - generates shields on ally Neutralize and provides opening burst protection',
      description:
        "Opening Burst: At the start of battle, self Neutralize Rate +36% and Neutralize DMG Reduction +38.2% for 7 seconds.\n\nNeutralize Feedback: When a teammate successfully Neutralizes, gain a Shield equal to 50.4% of Samael's Defense. Samael gains 1 stack of Wrath.\n\nLimit Break: When Wrath reaches 200 stacks, Samael cannot use Ultimate. [Sin] Unleashed consumes 10 times the Wrath (triggering effect 10 times) and self DMG Reduction +22.4%.",
    },
    {
      skill: 'Normal Attack: Wrath Strike',
      priority: 4,
      level: 'Level 7',
      reason: 'Basic defense-scaling damage filler',
      description: 'Cooldown: 2.0s\nDeals damage equal to 120% of Defense as Chaos damage.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Suffocating Grace',
      effect:
        "Samael's exclusive memory card. Provides massive defense scaling, parry damage reduction, and Stigma stack system for All Resistances.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'Wrath_Samaelcard.jpg',
      memoryStats: { hp: '6,800', attack: '480', defense: '890' },
      description:
        'Defense +64%, After successful parry: Damage Taken -10% for 5 seconds, [Stigma] stacks (max 400), Every 40 Stigma: All Resistances +5%',
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'Her Trainer',
      effect:
        "Penny's memory card - excellent for any Guardian tank with defense scaling, damage reduction, and shield enhancement",
      characterSpecific: false,
      memoryImage: 'pennycard.jpg',
      memoryStats: { hp: '8,600', attack: '480', defense: '690' },
      description:
        'Defense increased by 60%, After using ultimate skill: take 10% less damage for 5 seconds, Shield amount from ultimates +20%',
    },
    {
      name: 'In the Cafe, Sneaking a Bite',
      effect:
        "Lily's memory card - strong defense scaling with mitigation bonuses, great for pure tank builds",
      characterSpecific: false,
      memoryImage: 'Lilycard.jpg',
      memoryStats: { hp: '6,600', attack: '480', defense: '690' },
      description:
        'Defense +64%, After successful mitigation: Damage Taken -10% for 5 seconds, When has shield: Damage Taken -18%',
    },
  ],
  runes: {
    primary: 'Defense',
    secondary: 'HP',
    stats: ['DEF%', 'HP%'],
    additionalStats: ['DEF', 'HP', 'Effect RES'],
    recommendedSets: [
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
        name: 'Tide 4-piece + Zahn 2-piece',
        englishName: 'Tide [Energy] (潮汐 [能量]) 4-piece + Zahn (札恩) 2-piece',
        mainRune: 'Tide',
        secondaryRune: 'Zahn',
        mainRune2Piece: '2-piece: Defense increased by 12%',
        mainRune4Piece:
          "4-piece: Within 10 seconds after combat starts, your team's energy gain efficiency is increased by 30%",
        secondaryRuneEffect: '2-piece: HP +8%',
        description: 'Faster ultimate cycling for more frequent team buffs and Neutralize support',
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
      description: 'Defense % for maximum tankiness, shield scaling, and damage output',
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
      description: 'Defense % for maximum survivability and skill scaling',
    },
    6: {
      name: 'Position 6 — Variable Main Stats',
      recommendedStat: 'Defense (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description: 'Focus on core percentage stat increases for tank builds',
    },
  },
  awakenings: {
    keyMilestones: [
      {
        level: 1,
        effect: 'Lowers the integration threshold and stack consumption of [Sin] to 16. Lowers the trigger threshold for [Limit Break] to 160 stacks.',
        importance: 1,
        importanceLabel: 'Very Good',
      },
      {
        level: 2,
        effect: "During Ultimate, if an ally successfully Neutralizes, restores HP equal to 12% of Wrath-Samael's Defense to them.",
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
        effect: 'Defense increased by 58%.',
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
        effect: 'All Resistances +16%, Chaos Resistance additionally +27%. Enemies hit by [Sin] have -40% Crit Rate for 5s.',
        importance: 1,
        importanceLabel: 'Very Good',
      },
    ],
  },
  teamSynergy: {
    goodWith: ['PVP teams', 'Chaos team compositions', 'Bicta Tower faction members'],
    note: 'She is mainly a PVP unit - not recommended for PVE due to high ultimate cost. Team skill provides 15% Defense and Neutralize DMG Reduction based on Defense.',
  },
};
