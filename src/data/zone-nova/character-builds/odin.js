// Odin Build - Zone Nova Character Build
// SSR Fire character - Attack Scaling DOT Controller

export const odinBuild = {
  name: 'Odin',
  role: 'DPS',
  buildType: 'Fire DOT Controller',
  description:
    'Odin is a DOT Damage Character, she scales with attack power. All her damage counts as DoT and cannot crit. She converts critical stats into offensive bonuses and applies [Divine Flame] stacks for continuous damage.',
  skillPriority: [
    {
      skill: "Passive: Raven's Insight",
      priority: 1,
      level: 'Level 10',
      reason:
        'Core mechanic enabling DoT conversion, stat conversion, and [Divine Flame] application - essential for maximizing DOT output and damage scaling',
      description:
        "All Odin's damage counts as DoT and cannot crit. Pre-battle: every 1% crit rate -> +1% Fire dmg; every 2% crit dmg -> +1% ATK. Skills / ultimates apply [Divine Flame]: every 3 s deals 36% ATK Fire damage, stacks up to 10, lasts 10 s.",
    },
    {
      skill: 'Ultimate: Judgment Strike',
      priority: 2,
      level: 'Level 10',
      reason:
        'Three-segment chain ultimate with massive damage scaling based on DOT stacks - primary burst damage and DOT application tool with unique chaining mechanic',
      description:
        'Energy Cost: 2\nAfter casting, you may chain three segments within 4 s:\n1. Dash to target, deal 480% ATK Fire damage + apply [Divine Flame].\n2. Leap backward, deal 480% ATK Fire damage + apply [Divine Flame].\n3. Jump & charge, deal 480% ATK Fire damage; each DoT stack on the target adds another 48% ATK Fire damage (max 20 extra hits).',
    },
    {
      skill: 'Auto Skill: Falling Flame',
      priority: 3,
      level: 'Level 7',
      reason:
        'Multi-hit damage with [Divine Flame] stack application - main source of sustained damage and stack maintenance with good cooldown efficiency',
      description:
        'Cooldown: 5.0s\nDeals 3 hits of 120% ATK as Fire damage and applies 1 stack of [Divine Flame].',
    },
    {
      skill: 'Normal Attack: Soul Reap',
      priority: 4,
      level: 'Level 7',
      reason:
        'Basic filler damage that contributes to overall DPS and maintains consistent damage output',
      description: 'Deals 120% ATK as Fire damage to a single target.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Shared Bath Time',
      effect:
        "Odin's exclusive memory card. Provides massive attack increase and ultimate damage amplification, perfectly synergizing with her ultimate-focused kit and additional [Final Flame] DOT application.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'Odincard',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      slug: 'shared-bath-time',
      description:
        'ATK +40%; ultimate damage +40% for the caster. After each ultimate, gain 1 [Charge]. When dealing damage, consume [Charge] to apply 1 stack of [Final Flame]: deals 15% ATK Fire damage every 2s, stacks up to 5, lasts 10s.',
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'Strange Gaze Full of Desire',
      effect:
        "SSR memory card that provides substantial crit rate and damage bonuses from ally ultimates - excellent choice for boosting Odin's overall damage output in team compositions.",
      characterSpecific: false,
      memoryImage: 'Helacard.jpg',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      slug: 'strange-gaze-full-of-desire',
      description:
        "Crit Rate increases by 34%. When other allies cast their ultimates, the wearer's damage dealt increases by 24% for 5 seconds (max 3 stacks, up to 72% bonus damage).",
    },
    {
      name: 'Hera Memory',
      effect:
        "SSR memory card designed to enhance damage output against targets with sustained damage - synergizes perfectly with Odin's DOT-focused kit.",
      characterSpecific: false,
      memoryImage: 'Heracard.jpg',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      slug: 'black-face-ugly-person',
      description:
        'Attack power +40%, when attack receives sustained damage effect impact targets, damage +40%.',
    },
    {
      name: 'Secret Room Reality',
      effect:
        "SR memory card that significantly enhances DOT penetration - perfect for Odin's [Divine Flame] mechanics and fire damage output.",
      characterSpecific: false,
      memoryImage: 'Tefnutcard.jpg',
      memoryStats: { hp: '4,200', attack: '650', defense: '395' },
      slug: 'secret-room-reality',
      description: 'Continuous Damage Penetration Rate +36%.',
    },
  ],
  runes: {
    primary: 'Attack%',
    secondary: 'Crit Rate',
    stats: ['ATK%', 'Crit Rate%'],
    additionalStats: ['ATK', 'Crit DMG%', 'Penetration'],
    buildNote:
      'I am more leaning into going full crit rate to get the maximum out of fire damage, I believe fire damage increase means total damage unlike ATK which has diminishing returns.',
    recommendedSets: [
      {
        name: 'Gimel 4-piece + Beth 2-piece',
        englishName: 'Gimel [Continuous Damage] 4-piece + Beth 2-piece',
        mainRune: 'Gimel-Continuous-Damage',
        secondaryRune: 'Beth',
        mainRune2Piece: '2-piece: Continuous damage increased by 20%',
        mainRune4Piece:
          '4-piece: After dealing continuous damage, own attack power increases by 2%, can stack up to 10 layers, lasts 5 seconds',
        secondaryRuneEffect: '2-piece: Critical Hit Rate +6%',
      },
    ],
    alternativeSets: [
      {
        name: 'Gimel 4-piece + Alpha 2-piece',
        englishName: 'Gimel [Continuous Damage] 4-piece + Alpha 2-piece',
        mainRune: 'Gimel-Continuous-Damage',
        secondaryRune: 'Alpha',
        mainRune2Piece: '2-piece: Continuous damage increased by 20%',
        mainRune4Piece:
          '4-piece: After dealing continuous damage, own attack power increases by 2%, can stack up to 10 layers, lasts 5 seconds',
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
      recommendedStat: 'Attack (%) / Critical Rate (%)',
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
        'Both of crit rate and atk are good, but for me I like crit rate because I believe that fire damage increase means total damage unlike atk which has diminishing returns.',
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
    },
    6: {
      name: 'Position 6 — Variable Main Stats',
      recommendedStat: 'Attack (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
    },
  },
  awakenings: {
    priority:
      'DOT damage amplification and ultimate enhancement first, then fire damage and skill levels',
    keyMilestones: [
      {
        level: 1,
        effect:
          'Targets without [Divine Flame] instantly receive 5 stacks; +20% DoT for 5s after ultimate; 50% damage reduction during ultimate',
        importance: 'Essential',
      },
      {
        level: 2,
        effect:
          'Ultimate third-segment extra hits cap raised to 30; enemies with [Divine Flame] take +20% DoT from Odin',
        importance: 'Critical',
      },
      {
        level: 3,
        effect: 'Normal / Skill / Ultimate / Passive level cap +2',
        importance: 'High',
      },
      {
        level: 4,
        effect: 'Fire damage +30%',
        importance: 'Critical',
      },
      {
        level: 5,
        effect: 'Normal / Skill / Ultimate / Passive level cap +2',
        importance: 'High',
      },
      {
        level: 6,
        effect:
          "Every 3 ultimates, next normal attack becomes a skill; Odin's DoT ignores 20% Fire resistance",
        importance: 'Essential',
      },
    ],
  },
  teamSkill: {
    name: 'Combination Skill',
    activationCondition: 'If the party has 2 A.S.A or 2 Fire characters',
    effects: ['ATK +10%', 'At battle start, every 500 ATK grants +3% Penetration (max 6 times)'],
  },
  teamSynergy: {
    goodWith: ['Shu', 'Thor', 'Horus', 'Anubis', 'Cleopatra', 'Tefnut'],
    note: 'Odin needs 1 more teammates that deal DOT damage for her to have full 20 or 30 stacks of Divine Flame. The damage different is quit significant.',
  },
};
