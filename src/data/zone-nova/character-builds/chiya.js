// Chiya Build - Zone Nova Character Build
// SSR Ice Attacker DPS - Crit-focused Enhanced Ultimate Nuker with [Focus] state mechanic

export const chiyaBuild = {
  name: 'Chiya',
  role: 'DPS',
  buildType: 'Mob Slayer / Wave Clearer',
  description:
    "Chiya is a mob slayer who goes off when she kills enemies. After killing a mob, she enters [Focus] state and gains an Enhanced Ultimate with guaranteed 100% crit rate. This makes her a monster at clearing waves of enemies - each kill fuels the next. However, she struggles against bosses since she can't trigger [Focus] state without kills. Best used in stages with multiple enemies where she can snowball her damage.",
  skillPriority: [
    {
      skill: "Ultimate: Society Master's Fist",
      priority: 1,
      level: 'Level 14',
      reason:
        'Main burst damage source. Enhanced version has guaranteed 100% crit rate and 840% ATK multiplier vs 600% normal',
      description:
        'Energy Cost: 3\nRush towards target, dealing 600% attack power ice damage. [Enhanced Ultimate Skill]: Gain 100% critical rate, rush towards target dealing 840% attack power ice damage',
    },
    {
      skill: 'Auto Skill: Cold Steel Combo',
      priority: 2,
      level: 'Level 14',
      reason:
        'Strong consistent damage on short 5s cooldown. Use between ultimates for sustained DPS',
      description:
        'Cooldown: 5.0s\nDeals ice damage equal to 480% of Attack to enemy unit',
    },
    {
      skill: 'Passive: Beam Assist Framework',
      priority: 3,
      level: 'Level 14',
      reason:
        'Core mechanic that enables Enhanced Ultimate chaining. Killing enemies grants [Focus] state and Enhanced Ultimate',
      description:
        'After killing an enemy, enter [Focus] state for 10 seconds. All attacks additionally deal 36% attack power ice damage, and gain one [Enhanced Ultimate Skill]',
    },
    {
      skill: 'Normal Attack: Heavy Hammer Strike',
      priority: 4,
      level: 'Level 7',
      reason: 'Basic damage filler when skills are on cooldown',
      description:
        'Deals ice damage equal to 120% of Attack to designated enemy unit',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Lonely Dark Midnight',
      effect:
        "Chiya's signature memory is essential for her kit. The 60% crit damage boost amplifies her Enhanced Ultimate's guaranteed crits, and the kill-stacking ATK buff (up to 40%) perfectly synergizes with her mob slayer playstyle. Other memories don't work well with her unique kill-based mechanic.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'LonelyDarkDeepNight.png',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      description:
        'Critical damage increases by 60%. Attack power increases by 10% after the equipped character kills an enemy, stacking up to 4 times (up to 40% attack power increase), stays until the end of battle',
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
    primary: 'Crit DMG%',
    secondary: 'Attack %',
    stats: ['Crit DMG%', 'ATK%'],
    additionalStats: ['ATK'],
    recommendedSets: [
      {
        name: 'Beth 4-piece + Alpha 2-piece',
        englishName: 'Beth 4-piece + Alpha 2-piece',
        mainRune: 'Beth',
        secondaryRune: 'Alpha',
        mainRune2Piece: '2-piece: Critical Hit Rate +6%',
        mainRune4Piece: '4-piece: When HP >80%: Critical Hit Damage +24%',
        secondaryRuneEffect: '2-piece: Attack Power +8%',
        note: 'Best set for maximizing Enhanced Ultimate burst damage. Keep HP high for 4-piece bonus.',
      },
    ],
    alternativeSets: [
      {
        name: 'Alpha 2-piece + Epsilon 2-piece + Giants 2-piece',
        englishName: 'Alpha 2-piece + Epsilon 2-piece + Giants 2-piece',
        giants: { effect: '2-piece: Attack Power +8%' },
        epsilon: { effect: '2-piece: Attack Power +8%' },
        alpha: { effect: '2-piece: Attack Power +8%' },
        note: 'Triple ATK% boost (24% total). Simple and effective for raw damage stacking.',
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
      recommendedStat: 'Attack (%) / Critical Damage (%)',
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
        'Attack % or Crit Damage % recommended. Enhanced Ultimate already has 100% crit rate so you don\'t need to build crit rate - focus on ATK and Crit Damage instead.',
    },
    5: {
      name: 'Position 5: Variable Main Stats',
      recommendedStat: 'Ice Attribute Damage (%)',
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
      description: 'Ice Attribute Damage % is essential as all of Chiya\'s damage is Ice element',
    },
    6: {
      name: 'Position 6: Variable Main Stats',
      recommendedStat: 'Attack (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description: 'Attack % for maximum damage scaling on ultimates and skills',
    },
  },
  awakenings: {
    keyMilestones: [
      {
        level: 1,
        effect: 'At battle start, immediately gains one [Enhanced Ultimate Skill]',
        importance: 1,
        importanceLabel: 'Very Good',
      },
      {
        level: 2,
        effect: 'During [Focus] state, attack speed increased by 50%',
        importance: 2,
        importanceLabel: 'Good',
      },
      {
        level: 3,
        effect: '[Skill] and [Normal Attack] level and level cap +4',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 4,
        effect: 'Ice damage increased by 30%',
        importance: 2,
        importanceLabel: 'Good',
      },
      {
        level: 5,
        effect: '[Ultimate] and [Passive] level and level cap +4',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 6,
        effect:
          'After using normal ultimate skill, gain one Enhanced Ultimate Skill. Ultimate skill damage increases by 30%',
        importance: 1,
        importanceLabel: 'Very Good',
      },
    ],
  },
  teamSkill: {
    name: 'Combination Skill',
    activationCondition: 'Team contains 2 [Safir] faction or 2 [Ice] attribute characters',
    effects: [
      'Self attack power +10%',
      'Battle Start: Every 500 attack power increases self critical damage by 7.5%, max 6 stacks (up to 45% critical damage)',
    ],
  },
  teamSynergy: {
    goodWith: [
      'Naiya - Morgan - both together are nice or either of them.',
      'Freya',
      'Gluttony - Beelzebub',
      'Bors',
      'Morgan Le Fay',
      'Medusa',
    ],
    note: "The problem with Chiya is she needs a team built around her and specific maps with lots of mobs to be effective. Her 100% crit rate only activates when SHE gets the kill or if you have Awakening 1 (which gives one Enhanced Ultimate at battle start). Without kills, she takes time to snowball and become effective. Honestly, there are many other DPS options that are more consistent and easier to use.",
  },
};
