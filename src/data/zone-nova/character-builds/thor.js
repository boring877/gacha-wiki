// Thor Build - Zone Nova Character Build
// SSR Holy character - Defense Scaling Tank Tank

export const thorBuild = {
  name: 'Thor',
  role: 'Tank',
  buildType: 'Holy Tank Tank',
  description:
    'Thor is a defense-scaling Tank tank who provides team protection through shields and damage reduction. Her very efficient 2-energy ultimate enables frequent enhanced casting with AOE damage, interrupts, and debuffs. She also applies DOT with [Divine Judgment].',
  skillPriority: [
    {
      skill: 'Passive: Lightning Extreme Orbit',
      priority: 1,
      level: 'Level 14',
      reason:
        'Core defense scaling and enhanced ultimate mechanic - provides immediate shields and connects to weakest allies',
      description:
        'Immediately gain a shield equal to 30% of maximum health, and establish connections with the two allies with the lowest defense. When Thor or connected allies take damage, Thor gains 1 stack of [Lightning Extreme]. Each character can trigger this at most once per second. When [Lightning Extreme] reaches 10 stacks, can cast [Enhanced Ultimate]. [Divine Judgment]: Every 3 seconds, deal Holy damage equal to 19.2% of Defense, maximum 5 stacks.',
    },
    {
      skill: 'Auto Skill: Divine Judgment Resonance',
      priority: 2,
      level: 'Level 14',
      reason:
        'Main team protection ability - provides AOE shields and significant damage reduction',
      description:
        'Cooldown: 10.0s\nRaise the hammer to absorb lightning power, granting all allied characters a shield equal to 60% of own Defense, and reducing damage taken by 12%. Connected allies receive an additional 12% damage reduction. After Thor casts this skill, her next 3 basic attacks are enhanced with [Divine Judgment].',
    },
    {
      skill: 'Ultimate: Divine Punishment Hammer',
      priority: 3,
      level: 'Level 14',
      reason:
        'Very efficient 2-cost ultimate with excellent damage and team protection - cast frequently',
      description:
        "Energy Cost: 2\nNormal Ultimate: Jump onto the target's head, after charging for 1 second, deal Holy damage equal to 120% of own Defense to the current target and [Interrupt] the skill being cast. Enhanced Ultimate: Jump onto the target's head, after charging for 1 second, deal Holy damage equal to 240% of own Defense to the target and surrounding enemies within 5 meters, [Interrupt] skills being cast, and increase damage taken by 24% for 10 seconds. After Thor casts the ultimate skill, all allied characters take 24% less damage for 10 seconds.",
    },
    {
      skill: 'Normal Attack: Justice Crush',
      priority: 4,
      level: 'Level 14',
      reason: 'Basic damage filler that scales with defense and provides interrupt',
      description: 'Deal Holy damage equal to 120% of own Defense to designated enemy unit.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Suspect in the Night',
      effect:
        "Thor's exclusive memory card. Provides massive defense increase and shield synergy, enhancing Thor's tank capabilities and damage output.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'Thorcard',
      memoryStats: { hp: '6,600', attack: '480', defense: '690' },
      slug: 'night-assault-suspect',
      description:
        'Defense increased by 64%, When allied characters with shields take damage, Defense increased by 64%, When the equipper deals continuous damage to enemy targets, increase damage taken by the target by 15% for 5 seconds',
    }
  ],
  alternativeMemoryCards: [
    {
      name: 'Sea Deity\'s Soft Ritual',
      effect: 'SSS-tier Tank memory in the memory tier list.',
      characterSpecific: false,
      memoryImage: 'sea-gods-soft-ritual.png',
      memoryStats: { hp: '6,600', attack: '480', defense: '690' },
      description: 'Max HP increases by 40%.\nWhen the wearer casts an ultimate skill all allies gain [Tideguard] for 8 seconds. If [Tideguard] is gained again remove the existing [Tideguard] and its accumulated Critical Resistance bonus first.\n[Tideguard]:\nDEF increases by 28%.\nBlock Rate increases by 5%.\nEach time an allied unit with [Tideguard] is hit its Critical Resistance increases by 15% up to 5 stacks until [Tideguard] ends.\n[Block]: Has a chance to reduce that instance of damage by 30%. Damage over time ignores Block.',
    },
    {
      name: 'Under the Holy Armor',
      effect: 'SSS-tier Tank memory in the memory tier list.',
      characterSpecific: false,
      memoryImage: 'under-the-holy-armor.png',
      memoryStats: { hp: '6,600', attack: '480', defense: '690' },
      description: 'Our HP increases by 25%, and self defense increases by 70%. After each skill use, all allies gain [Radiant Protection], reducing damage taken by 6% and increasing critical hit resistance by 5%, stacking up to 5 times, lasting 10 seconds.',
    },
    {
      name: 'Eating secretly in a cafe',
      effect: 'SS-tier Tank memory in the memory tier list.',
      characterSpecific: false,
      memoryImage: 'InTheCafeSneakingABite.png',
      memoryStats: { hp: '6,600', attack: '480', defense: '690' },
      description: 'Increases defense by 64%. After successfully neutralizing the attack, damage taken is reduced by 10% for 5 seconds. When the wearer holds a shield, damage taken is reduced by 18%.',
    },
  ],
  runes: {
    primary: 'Defense',
    secondary: 'HP',
    stats: ['DEF%', 'HP%'],
    additionalStats: ['DEF', 'HP'],
    buildNote:
      "Make sure you get as much HP as possible in sub stats because that will help you to be super tank, it's as important as defense.",
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
        name: 'Zahn 4-piece + Tide 2-piece',
        englishName: 'Zahn (札恩) 4-piece + Tide [Energy] 2-piece',
        mainRune: 'Zahn',
        secondaryRune: 'Tide',
        mainRune2Piece: '2-piece: HP +8%',
        mainRune4Piece: '4-piece: After Ultimate: Take 5% less damage (10s)',
        secondaryRuneEffect: '2-piece: Defense increased by 12%',
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
      description:
        'Defense % for maximum tankiness and shield scaling - all damage scales with DEF',
    },
    5: {
      name: 'Position 5: Variable Main Stats',
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
      description:
        'Defense % for maximum tankiness and shield strength - all damage scales with DEF',
    },
    6: {
      name: 'Position 6: Variable Main Stats',
      recommendedStat: 'Defense (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description:
        'Focus on core percentage stat increases only - Defense % provides both survivability and damage',
    },
  },
  awakenings: {
    keyMilestones: [
      {
        level: 1,
        effect:
          'Immediately gain 10 stacks of [Lightning Extreme] at the start of battle. Connect to the two allies with the lowest defense.',
        importance: 1,
        importanceLabel: 'Very Good',
      },
      {
        level: 2,
        effect:
          'Connected allies gain 30% increased attack. After casting enhanced ultimate, grant all allied characters a shield equal to 10% of Defense every 2 seconds for 10 seconds.',
        importance: 1,
        importanceLabel: 'Very Good',
      },
      {
        level: 3,
        effect: '[Basic Attack], [Skill], [Ultimate], and [Passive] level and level cap +2.',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 4,
        effect: 'Defense increased by 45%.',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 5,
        effect: '[Basic Attack], [Skill], [Ultimate], and [Passive] level and level cap +2.',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 6,
        effect:
          "All resistance increased by 15%, Holy resistance additionally increased by 15%. Targets hit by Thor's ultimate gain 1 additional stack of [Divine Judgment] per second for 5 seconds.",
        importance: 2,
        importanceLabel: 'Good',
      },
    ],
  },
  teamSkill: {
    name: 'Team Synergy',
    activationCondition: 'When the team contains 2 [Asa] characters or 2 [Holy] characters',
    effects: [
      'Own Defense increased by 15%',
      'At the start of battle, every 500 Defense reduces team damage taken by 1.5%, maximum 6 stacks',
    ],
  },
  teamSynergy: {
    goodWith: [
      'Gaia',
      'Jill',
      'Freya',
      'Keller',
      'Lust - Asmodeus',
      'Medusa',
    ],
    note: "The problem with Thor is she doesn't provide a lot of protection that makes a lot of difference. Her damage reduction is really good but not broken enough. She can be used anywhere!",
  },
};
