// Lust - Asmodeus Build - Zone Nova Character Build
// SSR Wind character - Crit-focused single-target Attacker

export const lustAsmodeusBuild = {
  name: 'Lust - Asmodeus',
  role: 'DPS',
  buildType: 'Wind Crit Attacker',
  description:
    'Lust - Asmodeus is a Wind attacker built around crit scaling, repeated single-target pressure, and fast rotation loops. Her kit combines a high-damage ultimate, multi-hit Armor Shatter stacking, and a team skill that turns crit rate into even more crit damage, so she performs best as a burst-focused boss killer.',
  skillPriority: [
    {
      skill: 'Ultimate: Wind Devour',
      priority: 1,
      level: 'Level 10',
      reason:
        'Main burst button. It carries her highest immediate single-target damage and starts the [Desire] loop that speeds up the rest of her rotation.',
      description:
        "Energy Cost: 3\nDeals 1077.2% of ATK as Wind Damage to the target enemy and inflicts the [Wind Damage] debuff, reducing the enemy's incoming healing by 30% and incoming shield value by 50% for 8 seconds. After using her ultimate skill, Asmodeus gains 1 stack of [Desire], reducing Normal Attack cooldown by 25% and Skill cooldown by 10%, up to a maximum of 2 stacks.",
    },
    {
      skill: 'Auto Skill: Wind attack',
      priority: 2,
      level: 'Level 10',
      reason:
        'Reliable multi-hit damage source that also stacks [Armor Shatter], giving her the defense break she needs to keep scaling into longer single-target fights.',
      description:
        'Cooldown: 5.0s\nDeals 5 instances of damage to the target enemy unit, each dealing 155.8% attack power as wind damage and inflicting [Armor Shatter], reducing their defense by 6.9% for 10 seconds, stacking up to 10 times.',
    },
    {
      skill: 'Passive: Wind attack',
      priority: 3,
      level: 'Level 10',
      reason:
        'The current local character data lists her passive as the same multi-hit Armor Shatter effect, so it stays valuable after her main damage buttons.',
      description:
        'Deals 5 instances of damage to the target enemy unit, each dealing 155.8% attack power as wind damage and inflicting [Armor Shatter], reducing their defense by 6.9% for 10 seconds, stacking up to 10 times.',
    },
    {
      skill: 'Normal Attack: Wind cutter',
      priority: 4,
      level: 'Level 7',
      reason:
        'Basic filler damage between her stronger cooldowns. It benefits from the same crit-focused stat line but has the lowest overall impact.',
      description:
        'Cooldown: 2.0s\nDeals 120% attack power as wind damage to the designated enemy unit.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'King of Lust',
      effect:
        "Asmodeus's exclusive memory card. It gives her everything she wants at once: crit rate, attack, and a burst crit damage payoff after repeated hits.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'KingOfLust.png',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      description:
        'Critical hit rate increased by 40%. Attack power increased by 40%. Each time the wearer attacks and hits an enemy, they gain 1 stack of [Battle Spirit]. When [Battle Spirit] reaches 10 stacks, all stacks are consumed and [Penetrating] is gained, increasing critical hit damage by 50% for 5 seconds. [Battle Spirit] cannot be gained while [Penetrating] is active.',
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'I am your Christmas present.',
      effect:
        'Strong alternative for bossing. The extra crit rate and ultimate damage both line up well with Asmodeus when you want bigger burst windows.',
      characterSpecific: false,
      memoryImage: 'IAmYourChristmasPresent.png',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      description:
        'Critical hit rate increased by 34%, ultimate skill damage increased by 40%. When there is only one enemy on the field, ultimate skill damage is increased by an additional 40%.',
    },
    {
      name: 'Heroes, Never Stop',
      effect:
        'Lower-cost crit damage option that works especially well in single-target fights where enemy count stays low.',
      characterSpecific: false,
      memoryImage: 'Shannacard.jpg',
      memoryStats: { hp: '4,200', attack: '650', defense: '395' },
      description:
        'When the number of enemies on field is less than 2: Increase critical hit damage by 72%.',
    },
  ],
  runes: {
    primary: 'Critical Rate / Attack',
    secondary: 'Critical Damage',
    stats: ['Crit Rate%', 'Crit DMG%', 'ATK%'],
    additionalStats: ['ATK', 'Penetration'],
    buildNote:
      'Asmodeus already carries strong crit damage scaling through her base stats, awakenings, team skill, and memory options. Prioritize enough crit rate to make that scaling consistent, then push attack and crit damage for stronger burst windows.',
    recommendedSets: [
      {
        name: 'Beth 4-piece + Alpha 2-piece',
        englishName: 'Beth 4-piece + Alpha 2-piece',
        mainRune: 'Beth',
        secondaryRune: 'Alpha',
        mainRune2Piece: '2-piece: Critical Hit Rate +6%',
        mainRune4Piece: '4-piece: When HP >80%: Critical Hit Damage +24%',
        secondaryRuneEffect: '2-piece: Attack Power +8%',
      },
    ],
    alternativeSets: [
      {
        name: 'Alpha 4-piece + Beth 2-piece',
        englishName: 'Alpha 4-piece + Beth 2-piece',
        mainRune: 'Alpha',
        secondaryRune: 'Beth',
        mainRune2Piece: '2-piece: Attack Power +8%',
        mainRune4Piece: '4-piece: Basic Attack Damage +30%',
        secondaryRuneEffect: '2-piece: Critical Hit Rate +6%',
      },
      {
        name: 'Epsilon 2-piece + Alpha 2-piece + Giants 2-piece',
        englishName: 'Epsilon 2-piece + Alpha 2-piece + Giants 2-piece',
        epsilon: { effect: '2-piece: Attack Power +8%' },
        alpha: { effect: '2-piece: Attack Power +8%' },
        giants: { effect: '2-piece: Attack power increased by 8%' },
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
      recommendedStat: 'Critical Rate (%) / Critical Damage (%)',
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
        'Crit Rate is the safer option until her hits feel consistent. After that, Crit Damage becomes the greedier damage upgrade.',
    },
    5: {
      name: 'Position 5 - Variable Main Stats',
      recommendedStat: 'Wind Attribute Damage (%) / Attack (%)',
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
        'Wind Damage is the cleanest damage option for her direct hits. Attack % is still fine if you want one more general-purpose stat.',
    },
    6: {
      name: 'Position 6 - Variable Main Stats',
      recommendedStat: 'Attack (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description: 'Attack % gives the most consistent value for her entire damage loop.',
    },
  },
  awakenings: {
    priority:
      'A1 and A2 are the biggest early spikes. A4 keeps her burst scaling moving, and A6 is the cleanest late-game damage upgrade.',
    keyMilestones: [
      {
        level: 1,
        effect:
          'Critical hit rate increased by 10%, first ultimate skill used after entering the arena does not consume energy. Asmodeus gains 1 stack of [Pleasure] after using a skill, increasing critical hit damage by 12.5%, up to 4 stacks.',
        importance: 1,
        importanceLabel: 'Very Good',
      },
      {
        level: 2,
        effect:
          'Critical hit damage increased by 30%. When [Desire] stacks are at 2, skill damage is increased by 30%. When [Pleasure] stacks are at 4, damage is increased by 30%.',
        importance: 1,
        importanceLabel: 'Very Good',
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
          'Attack power increased by 20%. When the [Pleasure] stacks reach 4, Asmodeus enters the [Climax] state, increasing skill damage by 30%.',
        importance: 2,
        importanceLabel: 'Good',
      },
      {
        level: 5,
        effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 6,
        effect: "The damage dealt ignores 15% of the target's elemental resistance.",
        importance: 2,
        importanceLabel: 'Good',
      },
    ],
  },
  teamSkill: {
    name: 'Combo',
    activationCondition: 'When the team includes 2 [Bicta Tower] characters or 2 [Wind] characters',
    effects: [
      'Attack power increased by 20%',
      'At the start of battle, every 15% critical hit rate increases critical hit damage by 8%, up to a maximum of 6 times',
    ],
  },
  teamSynergy: {
    goodWith: ['Bicta Tower teammates', 'Wind teams', 'Crit buffers', 'Single-target boss teams'],
    note:
      'Asmodeus gains the most value in teams that help her stay on target, stack crit stats, and convert her Armor Shatter uptime into faster kills. She is strongest when a team can support repeated burst windows instead of long uncontrolled fights.',
  },
};
