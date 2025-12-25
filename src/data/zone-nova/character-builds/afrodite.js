// Afrodite Build - Zone Nova Character Build
// SSR Holy character - Crit Scaling Warrior DPS

export const afroditeBuild = {
  name: 'Afrodite',
  role: 'DPS',
  buildType: 'Holy Warrior DPS',
  description:
    'Afrodite is a crit Single Target DPS, she scales with crit damage and her ultimate is her main damage source. Any character that increases energy regen will help her a lot.',
  skillPriority: [
    {
      skill: 'Passive: Beautiful Kill',
      priority: 1,
      level: 'Level 10',
      reason:
        'Core damage mechanic - provides massive Crit Rate when above 50% HP and extra Defense when below 50% HP. This is her main source of damage amplification and survivability.',
      description:
        'When HP is higher than 50%: +48% Crit Rate on all outgoing damage. When HP is lower than 50%: +96% Defense when taking damage.',
    },
    {
      skill: 'Ultimate: Love and Beauty Waltz',
      priority: 2,
      level: 'Level 10',
      reason:
        'Main damage skill - Enhanced Ultimate deals devastating damage and counts as basic attack for effects. Essential for maximizing burst damage output.',
      description:
        'Energy Cost: 8\nNormal Ultimate: Deals 1800% attack power as holy damage to designated enemy.\n\nEnhanced Ultimate (after 10 normal attacks): Deals 2160% attack power as holy damage to designated enemy, recovers 2 energy at the end, Counts as a basic-attack hit for any on-hit or combo effects.',
    },
    {
      skill: 'Auto Skill: Charm Impact',
      priority: 3,
      level: 'Level 10',
      reason:
        'Multi-hit damage skill that provides attack speed buff and counts toward Enhanced Ultimate counter. Good for proccing effects and faster ultimate charge.',
      description:
        'Cooldown: 8.0s\nAutomatically deals 816% attack power as holy damage to designated enemy. Increases self attack speed by 58%.',
    },
    {
      skill: 'Normal Attack: Love Fist',
      priority: 4,
      level: 'Level 7',
      reason:
        'Basic damage filler for maintaining Enhanced Ultimate counter and applying passive Crit Rate. Not as important as her other skills.',
      description:
        'Cooldown: 1.0s\nDeals 120% attack power as holy damage to designated enemy unit.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Halloween Candy',
      effect:
        "Nina's memory card. Best choice for Afrodite with crit damage boost and sustain that synergizes perfectly with her crit-scaling passive.",
      priority: 'Highly Recommended',
      characterSpecific: false,
      memoryImage: 'Ninacard',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description:
        'Critical damage increased by 60%. When health is above 30%, equipped character recovers 2% of max health after attacking. All damage increased by 40%.',
    },
    {
      name: 'Secret Garden',
      effect:
        "Afrodite's exclusive memory card. Provides attack power increase and ultimate damage buff - good synergy with her ultimate-focused playstyle.",
      priority: 'Recommended',
      characterSpecific: true,
      memoryImage: 'Afroditecard',
      memoryStats: { hp: '6,400', attack: '784', defense: '318' },
      slug: 'secret-garden',
      description:
        "Attack power increased by 40%. If equipped unit's Ultimate costs higher than 8 Energy and used ultimate: Damage increased by 40% for 10 seconds.",
    },
    {
      name: 'The World Seems to Have Stopped',
      effect:
        "Artemis's memory card. Provides attack power and conditional damage increase - good for Afrodite's burst playstyle.",
      priority: 'Recommended',
      characterSpecific: false,
      memoryImage: 'Artemiscard',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      description:
        'Attack power increased by 40%. When HP is below 50%: All damage increased by 40%.',
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'Swimsuit Sovereign Who Makes Hearts Flutter',
      effect: 'SR memory card with balanced attack and defense boost for sustain builds.',
      priority: 'Alternative',
      characterSpecific: false,
      memoryImage: 'Swimsuit-Goddess-Who-Makes-Hearts-Flutter',
      memoryStats: { hp: '5,000', attack: '500', defense: '500' },
      description: 'Attack increased by 20%. Defense increased by 20%.',
    },
  ],
  runes: {
    primary: 'Crit Damage',
    secondary: 'Attack %',
    stats: ['ATK', 'Crit Damage'],
    additionalStats: ['Attack', 'Holy Damage %'],
    buildNote: 'I would stack Crit damage as much I can. it only what matter tbh',
    recommendedSets: [
      {
        name: 'Beth 4-piece + Alpha 2-piece',
        englishName: 'Beth (贝丝) 4-piece + Alpha (阿尔法符) 2-piece',
        mainRune: 'Beth',
        secondaryRune: 'Alpha',
        mainRune2Piece: '2-piece: Critical Hit Rate +6%',
        mainRune4Piece: '4-piece: When HP >80%: Critical Hit Damage +24%',
        secondaryRuneEffect: '2-piece: Attack Power +8%',
      },
    ],
    alternativeSets: [],
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
      description: 'I would stack Crit damage as much you can. it only what matter tbh',
    },
    5: {
      name: 'Position 5 — Variable Main Stats',
      recommendedStat: 'Holy Attribute Damage (%)',
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
      description: ' ',
    },
    6: {
      name: 'Position 6 — Variable Main Stats',
      recommendedStat: 'Attack (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description: '',
    },
  },
  awakenings: {
    keyMilestones: [
      {
        level: 1,
        effect:
          'When using auto skill (Self) it counts as 4 extra basic-attack hits toward the Enhanced Ultimate counter.',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 2,
        effect: 'When using ultimate or auto skill: Damage taken reduced by 10%',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 3,
        effect: '[Skills] and [Normal Attack] level and level cap +4',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 4,
        effect: 'Normal attack damage increased by 35%',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 5,
        effect: '[Ultimate] and [Passive] level and level cap +4',
        importance: 1,
        importanceLabel: 'Very Good',
      },
      {
        level: 6,
        effect: '[Enhanced Ultimate] ignores 20% Holy resistance',
        importance: 1,
        importanceLabel: 'Very Good',
      },
    ],
  },
  teamSkill: {
    name: 'Combination Skill',
    activationCondition: 'If party has 2 Odius faction members or 2 Holy characters',
    effects: [
      'Battle start: Self attack power increased by 10%',
      'For every 500 attack power, increase self holy damage by 5% (maximum 6 times). Maximum scaling: 30% holy damage boost at 3,000+ attack power.',
    ],
  },
  teamSynergy: {
    goodWith: ['She needs a good buffer like Morgan or Naiya.'],
    note: 'Her problem is that she needs a team around her, and she needs a high amount of energy points to use her ultimate. Otherwise her damage is really good!',
  },
};
