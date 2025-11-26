// Freya Build - Zone Nova Character Build
// SSR Ice character - Normal Attack Focused Speed DPS

export const freyaBuild = {
  name: 'Freya',
  role: 'DPS',
  buildType: 'Ice Attack Speed Carry',
  description:
    'Freya is a normal attack-focused speed DPS who enters [Golden Desire] state to deal massive rapid-fire damage with AOE capabilities. Her ultimate enhances normal attacks with +50% attack speed and multi-hit mechanics, making her Strong at both single-target and AOE damage.',
  skillPriority: [
    {
      skill: "Ultimate: Golden Wind's Bind",
      priority: 1,
      level: 'Level 10',
      reason:
        'Core DPS mechanic - enters [Golden Desire] state for 8 seconds with massive attack speed boost and AOE normal attacks',
      description:
        'Energy Cost: 3\nEnters [Golden Desire] State for 8 seconds: Normal attacks additionally hit targets within 5m range for 60% original attack damage, base attack speed increases by 50%, attack speed boost increases by 60%. Can use [Ice Star]: Deals 480% attack power as ice damage (counts as normal attack damage).',
    },
    {
      skill: 'Passive: Goddess War Dance',
      priority: 2,
      level: 'Level 10',
      reason:
        'Essential multi-hit combo and ice enhancement mechanics - core to her damage scaling',
      description:
        'Ice Enhancement: All normal attacks additionally deal 24% attack power as ice frost damage. Multi-Hit Combo: After casting 10 normal attacks or skills, normal attacks become 5-stage attacks. Each stage deals 20% of original normal attack damage. Duration: 5 seconds.',
    },
    {
      skill: "Auto Skill: Golden Wind's Wild Poetry",
      priority: 3,
      level: 'Level 10',
      reason: 'Main AOE normal attack damage that builds combo stacks',
      description:
        'Cooldown: 5.0s\nDeals 120% attack power as ice frost damage to designated enemy and other targets within 3m range around the target. This damage counts as normal attack damage.',
    },
    {
      skill: 'Normal Attack: Golden Wind Assault',
      priority: 4,
      level: 'Level 10',
      reason: 'Basic damage filler that scales with attack power and builds combo stacks',
      description: 'Deals 72% attack power as ice frost damage to designated enemy.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: "Slave's Original Wish",
      effect:
        "Freya's exclusive memory card. Provides massive critical damage increase and normal attack damage scaling that synergizes perfectly with her Golden Desire state.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'Freyacard',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      slug: 'slaves-original-wish',
      description:
        'Critical Damage increased by 72%. For each enemy on the battlefield: Normal attack damage increases by 12% (Maximum 4 stacks, up to 48% bonus damage)',
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'During Military Academy Training',
      effect:
        "SR memory card that provides post-ultimate damage amplification, good for Freya's burst damage during Golden Desire state",
      characterSpecific: false,
      memoryImage: 'Rosecard.jpg',
      memoryStats: { hp: '4,200', attack: '650', defense: '395' },
      description:
        'After using ultimate skill, normal attack and skill damage increased by 60% for 10 seconds',
      slug: 'during-military-academy-training',
    },
  ],
  runes: {
    primary: 'Critical Damage',
    secondary: 'Critical Rate',
    stats: ['CRIT DMG%', 'CRIT Rate%', 'ATK%'],
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
      },
      {
        name: 'Alpha 4-piece + Beth 2-piece',
        englishName: 'Alpha 4-piece + Beth 2-piece',
        mainRune: 'Alpha',
        secondaryRune: 'Beth',
        mainRune2Piece: '2-piece: Attack Power +8%',
        mainRune4Piece: '4-piece: Basic Attack Damage +30%',
        secondaryRuneEffect: '2-piece: Critical Hit Rate +6%',
      },
    ],
    alternativeSets: [
      {
        name: 'Alpha 4-piece + Epsilon 2-piece',
        englishName: 'Alpha 4-piece + Epsilon 2-piece',
        mainRune: 'Alpha',
        secondaryRune: 'Epsilon',
        mainRune2Piece: '2-piece: Attack Power +8%',
        mainRune4Piece: '4-piece: Basic Attack Damage +30%',
        secondaryRuneEffect: '2-piece: Attack Power +8%',
      },
    ],
    buildNote:
      'You can get up to 20%+ Critical Damage in the sub stats. In total 100% Critical Damage. Make sure you focus on Critical Damage - it will boost your damage so much. You do not need 100% Critical Rate nor 70%. Around 40% to 50% Critical Rate is good enough!',
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
      recommendedStat: 'Critical Damage (%)',
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
      recommendedStat: 'Ice Attribute Damage (%)',
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
    priority: 'Focus on Golden Desire state first, then damage amplification',
    keyMilestones: [
      {
        level: 1,
        effect: 'During [Golden Desire] state: Attack Power +30% and Damage Taken -30%',
        importance: 'Essential',
      },
      {
        level: 2,
        effect:
          'Immediately enters [Golden Desire] state upon entering battle. Using [Ice Star] can refresh [Golden Desire] duration. [Golden Desire] AoE damage increases from 60% → 80%',
        importance: 'Critical',
      },
      {
        level: 3,
        effect:
          '[Basic Attack], [Auto Skill], [Ultimate Skill], and [Passive] levels & max levels +2',
        importance: 'Essential',
      },
      {
        level: 4,
        effect: 'All ice damage +30%',
        importance: 'Critical',
      },
      {
        level: 5,
        effect:
          '[Basic Attack], [Auto Skill], [Ultimate Skill], and [Passive] levels & max levels +2',
        importance: 'Essential',
      },
      {
        level: 6,
        effect:
          'Normal attacks penetrate 20% ice resistance. After 10 normal attacks/skills, automatically deal 100% attack power as ice damage to target and enemies within 3m range',
        importance: 'Essential',
      },
    ],
  },
  teamSkill: {
    name: 'Combination Skill',
    activationCondition: 'When the team contains 2 [A.S.A] characters or 2 [Ice] characters',
    effects: [
      'Critical Rate increases by 7.5%',
      'At combat start: For every 15% Critical Rate, gain 7.5% Critical Damage (maximum 6 stacks, up to 45% bonus)',
    ],
  },
  teamSynergy: {
    goodWith: [
      'Apollo, Athena, Zashiki-warashi, Morgan Le Fay,  Or any buffer that increase critical rate',
      'She need some protaction so Gaia can be really good with Thor',
    ],
    note: 'This unit deal insana amount of damage, its quite recommended to have buffer that increase critical rate.',
  },
};
