// Sigurd Build - Zone Nova Character Build
// SSR Fire Rogue - Crit-based Enhanced Ultimate DPS

export const sigurdBuild = {
  name: 'Sigurd',
  role: 'DPS',
  buildType: 'Fire Crit DPS',
  description:
    'Sigurd is a crit-focused Fire DPS who builds Dragon Blood stacks to use Enhanced Ultimate attacks. Her passive grants bonus Fire damage on critical hits, making crit rate essential. Focus on building Dragon Blood stacks quickly and timing Enhanced Ultimate for maximum damage.',
  skillPriority: [
    {
      skill: 'Passive: Flame Shadow Pursuit',
      priority: 1,
      level: 'Level 10',
      reason:
        'Core damage amplification - triggers additional Fire damage on every crit, essential for maximizing DPS output with her crit-focused kit',
      description:
        'When an Ultimate Skill or skill crits, it deals an additional instance of Fire damage equal to 121.5% attack power. This can only be triggered once every 0.5 seconds.',
    },
    {
      skill: 'Ultimate: Burning Dragon Blade',
      priority: 2,
      level: 'Level 10',
      reason:
        'Primary burst damage source - Enhanced Ultimate at 2+ Dragon Blood stacks deals massive 1200% ATK Fire damage, her main damage window',
      description:
        'Energy Cost: 3\nDeals 840% attack power as Fire damage to a designated enemy unit. Upon defeating the enemy, triggers [Explosion], dealing 610.1% damage in a circular area. [Enhanced Ultimate Skill] can be used when [Dragon Blood] has 2+ stacks, consuming 2 stacks: Deals 1200% attack power as Fire damage.',
    },
    {
      skill: 'Auto Skill: Flame Blade Thrust',
      priority: 3,
      level: 'Level 10',
      reason:
        'Dragon Blood stack generator - essential for building stacks to enable Enhanced Ultimate, also provides solid sustained damage',
      description:
        "Cooldown: 5.0s\nDeals 629.6% attack damage as Fire damage to a designated enemy unit and grants the caster 1 stack of Dragon's Blood, up to a maximum of 4 stacks.",
    },
    {
      skill: 'Normal Attack: Flame Slash',
      priority: 4,
      level: 'Level 7',
      reason: 'Basic filler damage between skill rotations, lower priority than core abilities',
      description: 'Deals 120% attack damage as Fire damage to the designated enemy unit.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'I am your Christmas present.',
      effect:
        "Sigurd's exclusive memory card. Provides massive crit rate and ultimate damage boost, perfectly synergizing with her Enhanced Ultimate burst playstyle. The solo attacker bonus makes her excel as a main DPS.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'Sigurdcard',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      slug: 'sigurd-memory',
      description:
        'Critical hit rate increased by 34%, ultimate skill damage increased by 40%. When there is only one enemy on the field, ultimate skill damage is increased by an additional 40%.',
    },
    {
      name: 'Heroes, Never Stop',
      effect:
        "SR memory card that provides massive Crit Damage boost when facing few enemies - excellent for boss fights and synergizes with Sigurd's crit-focused kit.",
      priority: 'Recommended',
      characterSpecific: false,
      memoryImage: 'Shannacard.jpg',
      memoryStats: { hp: '4,200', attack: '650', defense: '395' },
      slug: 'heroes-never-stop',
      description:
        'When the number of enemies on field is less than 2: Increase critical hit damage by 72%.',
      note: 'Due to cost and benefit, this memory is better for most players since it has lower cost and the benefits are comparable. However, if you can get 5 dupes of "I am your Christmas present" that would be the better choice.',
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'Lonely Dark Deep Night',
      effect:
        "Chiya's exclusive SSR memory card - provides massive crit damage and stacking attack power on kills. Great for clearing content.",
      characterSpecific: false,
      memoryImage: 'Chiyacard.jpg',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      slug: 'lonely-dark-deep-night',
      description:
        'Critical Damage increased by 60%. After equipped character kills an enemy, increase attack power by 10% for this battle (max 4 stacks, up to 40% attack power increase).',
    },
  ],
  runes: {
    primary: 'Critical Damage',
    secondary: 'Critical Rate',
    stats: ['Crit DMG%', 'Crit Rate%'],
    additionalStats: ['ATK%', 'ATK', 'Penetration'],
    buildNote:
      'Sigurd benefits heavily from crit stats due to her passive triggering on crits. Prioritize Crit Rate until you reach 60-70%, then focus on Crit Damage and Attack%. Fire Damage is excellent on Position 5.',
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
        name: 'Beth 4-piece + Epsilon 2-piece',
        englishName: 'Beth 4-piece + Epsilon 2-piece',
        mainRune: 'Beth',
        secondaryRune: 'Epsilon',
        mainRune2Piece: '2-piece: Critical Hit Rate +6%',
        mainRune4Piece: '4-piece: When HP >80%: Critical Hit Damage +24%',
        secondaryRuneEffect: '2-piece: Attack Power +8%',
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
      recommendedStat: 'Critical Rate (%) / Attack (%)',
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
        'Crit Rate is preferred to maximize passive procs. Switch to ATK% if you have sufficient crit from substats and memory cards.',
    },
    5: {
      name: 'Position 5 — Variable Main Stats',
      recommendedStat: 'Fire Attribute Damage (%)',
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
        "Fire Damage is optimal as all of Sigurd's damage is Fire element. This directly boosts all damage including her passive procs.",
    },
    6: {
      name: 'Position 6 — Variable Main Stats',
      recommendedStat: 'Attack (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description: 'Attack % for maximum damage output as a DPS character.',
    },
  },
  awakenings: {
    keyMilestones: [
      {
        level: 1,
        effect:
          'Gain one [Enhanced Ultimate Skill] at the start of battle. Increase critical hit rate by 10%.',
        importance: 2,
        importanceLabel: 'Good',
      },
      {
        level: 2,
        effect:
          'Gain 2 stacks of [Dragon Blood] each time a skill is used. Gain 1 stack of [Dragon Blood] after using an ultimate skill.',
        importance: 2,
        importanceLabel: 'Good',
      },
      {
        level: 3,
        effect: '[Basic Attack], [Skill], [Ultimate Skill], and [Passive] level and level cap +2.',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 4,
        effect: 'Fire damage increased by 30%.',
        importance: 2,
        importanceLabel: 'Good',
      },
      {
        level: 5,
        effect: '[Basic Attack], [Skill], [Ultimate Skill], and [Passive] level and level cap +2.',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 6,
        effect: "Ultimate skill damage ignores 20% of the target's elemental resistance.",
        importance: 2,
        importanceLabel: 'Good',
      },
    ],
  },
  teamSkill: {
    name: 'Combination Skill',
    activationCondition: 'If the party has 2 A.S.A or 2 Fire characters',
    effects: [
      'Self Critical Rate increases by 7.5%',
      'At battle start, every 15% Critical Rate increases self Critical Damage by 7.5%, up to 6 times',
    ],
  },
  teamSynergy: {
    goodWith: [
      'Naiya',
      'Zashiki-warashi',
      'Apollo',
      'Ibaraki-doji',
      'She needs buffers that increase crit rate and crit damage',
    ],
    note: 'She would be SSS tier if she had 2000%+ ultimate damage. Compared to other ultimate DPS characters, her multiplier is way lower.',
  },
};
