// Jill Build - Zone Nova Character Build
// SSR Holy character - ATK Scaling Healer with Tenacity and Mark System

export const jillBuild = {
  name: 'Jill',
  role: 'Healer',
  buildType: 'ATK Scaling Tenacity Healer',
  description:
    "Jill heals based on ATK, not HP like Gaia. Everything in her kit scales off attack, her passive, auto skill, and ultimate all use ATK% for healing numbers. What makes her special is Tenacity (can't die, stay at 1 HP). Her passive hands it out at 4 marks, A1 gives 9 seconds of it at the start of every fight, and A6 slaps it on the first 3 ultimates. Stack her with ATK and she'll keep your team from dying to basically anything.",

  skillPriority: [
    {
      skill: "Passive: Commander's Gaze",
      priority: 1,
      level: 'Level 10',
      reason:
        "This is her entire identity. Allies get marked when hit, and at 4+ marks she triggers Tenacity every second. That's team-wide immortality during heavy damage phases. Max this first.",
      description:
        "After an ally is attacked, marks that ally's position for 1s. Triggers based on mark count: 2+ marks: All allies recover HP = ATK 13.5% + 89 (once per 1s). 3+ marks: All allies recover HP = ATK 36.2% + 142; all allies' Chaos RES +20% for 2s (once per 1s). 4+ marks: All allies recover HP = ATK 99.4% + 405; all allies gain [Tenacity] for 1s (once per 1s). [Tenacity]: While active, the unit cannot die and survives with 1 HP.",
    },
    {
      skill: 'Ultimate: All-Out Assault',
      priority: 2,
      level: 'Level 10',
      reason:
        "Gives the whole team lifesteal + 16.8% ATK buff, and slaps 20 Surrounded stacks on the enemy. When your team eats through all 20 stacks everyone gets a fat burst heal. Costs 6 energy which is a lot, but worth it.",
      description:
        "Energy Cost: 6\nAll allies gain [Bloodthirsty Sanction], and the nearest enemy gains 20 stacks of [Surrounded] for 10s. [Bloodthirsty Sanction]: After attacking, recover HP = ATK 30.3% + 511 (up to 20 times); ATK +16.8%. [Surrounded]: Loses 1 stack each time attacked. When all stacks lost, all allies recover HP = ATK 104% + 243.",
    },
    {
      skill: 'Auto Skill: Bliss Brand',
      priority: 3,
      level: 'Level 10',
      reason:
        "Puts a buff on everyone that heals them when they get hit, up to 10 times. With A2 it lasts 5 seconds instead of 3. Pairs really well with fast-attacking DPS since they get hit and healed constantly.",
      description:
        "Cooldown: 5.0s\nAll allies gain [Bliss Brand] for 3s. After a unit with [Bliss Brand] is attacked, it recovers HP equal to Jill's ATK 17.8% + 293 (up to 10 times).",
    },
    {
      skill: 'Normal Attack: Morning Drill',
      priority: 4,
      level: 'Level 7',
      reason:
        "Just a basic attack. She's a healer, not a damage dealer. Don't waste resources maxing this.",
      description: 'Cooldown: 2.0s\nDeals Holy DMG equal to 120% ATK to the target enemy.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Gentle Morning Command',
      effect:
        "Her own memory card. ATK +33.5% is huge for her since everything scales with ATK. The Military Order stacks build up fast with how often she heals, giving extra healing and damage reduction. Then when she ults, all those stacks convert into an ATK buff for the whole team.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'Jillcard',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      slug: 'gentle-morning-command',
      description:
        "ATK +33.5%. After an ally is healed, wearer gains [Military Order] (up to 50 stacks) for 6s. Every 10 stacks: all allies' healing received +16.5%, damage taken -3.3%. When the wearer casts Ultimate: consumes all [Military Order]. Every 10 stacks increases all allies' ATK by 5% for 6s.",
    },
    {
      name: 'The Beauty of Heijing Castle',
      effect:
        "Snow Girl's SR card. Good budget option if you don't have Jill's memory. The +30% healing and +24% damage buff on full HP allies is solid.",
      priority: 'Recommended',
      characterSpecific: false,
      memoryImage: 'Snowcard',
      memoryStats: { hp: '5,000', attack: '500', defense: '500' },
      slug: 'the-beauty-of-heijing-castle',
      description:
        "Healing amount +30%; when recovering targets' life value is full, target damage +24% for 10 seconds.",
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'The Most Real Her',
      effect:
        "Jeanne D'Arc's SSR card. +50% healing baseline is already strong, and the stacking bonus for casting skills quickly can push it to +125% total. Good if you're spamming skills.",
      characterSpecific: false,
      memoryImage: 'JoanofArccard',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      slug: 'the-most-real-her',
      description:
        'Healing amount +50%, when casting skills or required skills within 1/2/3 seconds, healing amount additionally +25/50/75%.',
    },
    {
      name: 'Midnight Work',
      effect:
        "Anubis's SSR card. +50% healing and gives +40% ATK to whoever gets healed. Since Jill heals so often, your DPS basically gets a permanent ATK buff.",
      characterSpecific: false,
      memoryImage: 'Anubiscard',
      memoryStats: { hp: '6,000', attack: '800', defense: '600' },
      slug: 'midnight-work',
      description:
        'Healing amount +50%, each healing within 3 seconds gives target +40% attack power for 3 seconds.',
    },
  ],
  runes: {
    primary: 'ATK%',
    secondary: 'ATK',
    stats: ['ATK%', 'ATK', 'Healing Effectiveness%'],
    additionalStats: ['HP%', 'DEF%'],
    buildNote:
      "Stack ATK%, everything she does scales off it. Healing Effectiveness% is a nice bonus on top. Throw in some HP% or DEF% so she doesn't die, since a dead healer heals nobody.",
    recommendedSets: [
      {
        name: 'Daleth 4-piece + Zahn 2-piece',
        englishName: 'Daleth [Energy/Healing] 4-piece + Zahn 2-piece',
        mainRune: 'Daleth',
        secondaryRune: 'Zahn',
        mainRune2Piece: '2-piece: Healing Effectiveness +10%',
        mainRune4Piece: '4-piece: Battle Start: Gain 1 Energy immediately',
        secondaryRuneEffect: '2-piece: HP +8%',
      },
    ],
    alternativeSets: [
      {
        name: 'Zahn 4-piece + Daleth 2-piece',
        englishName: 'Zahn [HP/Defense] 4-piece + Daleth 2-piece',
        mainRune: 'Zahn',
        secondaryRune: 'Daleth',
        mainRune2Piece: '2-piece: HP +8%',
        mainRune4Piece: '4-piece: After Ultimate: Take 5% less damage (10s)',
        secondaryRuneEffect: '2-piece: Healing Effectiveness +10%',
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
      recommendedStat: 'Healing Effectiveness (%) / Attack (%)',
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
        "Healing Effectiveness% or ATK%, both work great. Go Healing Effectiveness% if you already have plenty of ATK from substats.",
    },
    5: {
      name: 'Position 5 — Variable Main Stats',
      recommendedStat: 'Attack (%)',
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
        "ATK% for more healing. Don't bother with Holy DMG%, her damage doesn't matter. HP% if she's dying too fast.",
    },
    6: {
      name: 'Position 6 — Variable Main Stats',
      recommendedStat: 'Attack (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description:
        "ATK% again. More ATK = more healing on everything. HP% or DEF% if survivability is an issue.",
    },
  },
  awakenings: {
    keyMilestones: [
      {
        level: 1,
        effect: 'At battle start, all allies gain [Tenacity] for 9s.',
        importance: 1,
        importanceLabel: 'Very Good',
      },
      {
        level: 2,
        effect:
          "Each time [Surrounded] loses 1 stack, all allies recover HP = 5% Jill's ATK. [Bliss Brand] duration extended to 5s.",
        importance: 2,
        importanceLabel: 'Good',
      },
      {
        level: 3,
        effect: '[Basic Attack], [Skill], [Ultimate] and [Passive] level and level cap +2',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 4,
        effect: "ATK +45%. When all allies receive healing, healing amount additionally +20%.",
        importance: 1,
        importanceLabel: 'Very Good',
      },
      {
        level: 5,
        effect: '[Basic Attack], [Skill], [Ultimate] and [Passive] level and level cap +2',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 6,
        effect: 'First 3 Ultimate casts additionally grant all allies [Tenacity] for 6s.',
        importance: 1,
        importanceLabel: 'Very Good',
      },
    ],
  },
  teamSkill: {
    name: 'Combination Skill',
    activationCondition: '2 [Monochrome Realm] or 2 [Holy] characters',
    effects: [
      'ATK +13%',
      'At battle start, for every 500 ATK, healing +9.5% (up to 6x, max +57%)',
    ],
  },
  teamSynergy: {
    goodWith: [
      'Sharin, both Monochrome Nation so team skill activates. Sharin buffs ATK which means Jill heals more.',
      'Wrath-Samael, Monochrome Nation tank who taunts. Enemies hit him a lot which triggers her passive marks faster.',
      'Pride-Lucifer, Monochrome Nation warrior. Loves having Tenacity and lifesteal from Bloodthirsty Sanction.',
      'Any DPS works fine with her honestly. She keeps everyone alive regardless of team comp.',
      'Gaia, double healer with Gaia revive + Jill Tenacity makes teams basically unkillable.',
    ],
    note: "Her Tenacity is really good against bosses that do big burst damage. You want Monochrome Nation or Holy teammates for the team skill, Monochrome is better since Sharin buffs ATK. Her ult costs 6 energy which is steep, so Daleth 4-piece for the starting energy helps a lot. She could be a good answer to Pride-Lucifer in PvP too, 4 marks gives Chaos RES +20% and Tenacity every second, so her damage just doesn't stick.",
  },
};
