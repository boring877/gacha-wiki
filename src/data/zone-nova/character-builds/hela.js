// Hela Build - Zone Nova Character Build
// SSR Chaos character - Single Target Chaos Nuker

export const helaBuild = {
  name: 'Hela',
  role: 'DPS',
  buildType: 'Single Target Chaos Nuker',
  description:
    'Hela is a single-target nuker who deals massive damage through her ultimate scaling and critical damage. She can one-shot bosses with her 2160% ATK ultimate and has a unique mode-switching mechanic between [Termination] and [Death Silence] modes.',
  skillPriority: [
    {
      skill: 'Auto Skill: Death Silence Prelude',
      priority: 1,
      level: 'Level 10',
      reason: 'Primary damage source with high scaling and mode switching utility',
      description:
        'Cooldown: 5.0s\n[Termination] Mode: Deals 360% attack power Chaos damage to designated enemy unit\n[Death Silence] Mode: Moves 5 meters toward the enemy unit with the highest ATK and deals 360% attack power Chaos damage to them',
    },
    {
      skill: 'Ultimate: Domination Authority - Chaotic Death',
      priority: 2,
      level: 'Level 10',
      reason: 'Massive 2160% ATK damage that can one-shot bosses, core to her nuker role',
      description:
        'Cooldown: 1.0s | Energy Cost: 1\nEnters [Termination] mode at start of battle. Ultimate can switch between [Termination] or [Death Silence] modes.\n\n[Passive Mechanic]: When allies cast ultimates, gains layers of [Domination Authority: Chaotic Death] equal to energy consumed (max 5 per cast). At 10 layers, can consume all to cast [Enhanced Ultimate].\n\n[Enhanced Ultimate]:\n[Termination] Mode: 2160% ATK Chaos damage to target\n[Death Silence] Mode: Moves to highest ATK enemy and deals total 2160% ATK Chaos damage',
    },
    {
      skill: 'Passive: Termination Echo',
      priority: 3,
      level: 'Level 10',
      reason: 'Essential for crit damage scaling and resistance penetration',
      description:
        "[Termination] Mode: All damage penetrates 24% of target's resistance\n[Death Silence] Mode: All damage reduces target's total damage output by 36%\n\n[Battle Start Bonus]: With 1+ other Chaos character, Hela's Crit Damage increases by 60%",
    },
    {
      skill: 'Normal Attack: Nether Touch',
      priority: 4,
      level: 'Level 7',
      reason: 'Basic damage filler, scales well with crit builds',
      description:
        'Cooldown: 2.0s\n[Termination] Mode: Deals 120% attack power Chaos damage to designated enemy unit\n[Death Silence] Mode: Moves in front of enemy with highest ATK and deals 120% attack power Chaos damage to them',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Heroes, Never Stop',
      effect:
        "SR memory card that provides Crit Damage increase, excellent for boosting Hela's already high damage output. Works best with 2 or fewer enemies.",
      priority: 'Highly Recommended',
      characterSpecific: false,
      memoryImage: 'Shannacard.jpg',
      memoryStats: { hp: '4,200', attack: '650', defense: '395' },
      description:
        'When the number of enemies on field is less than 2: Increase critical hit damage by 72%',
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'Strange Gaze Full of Desire',
      effect:
        "Hela's exclusive memory card. Crit Rate +34%, and when allies cast ultimates, damage dealt increases by 24% for 5 seconds (max 3 stacks, up to 72% bonus damage).",
      characterSpecific: true,
      memoryImage: 'Helacard.jpg',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      description:
        'Crit Rate +34%, and when allies cast ultimates, damage dealt increases by 24% for 5 seconds (max 3 stacks, up to 72% bonus damage)',
      spendingNote:
        "If you're a heavy spender, this memory is better, but due to cost and benefit, Heroes Never Stop is better for most players.",
    },
  ],
  runes: {
    primary: 'Critical Damage',
    secondary: 'Critical Rate',
    stats: ['Crit DMG%', 'Crit Rate%'],
    additionalStats: ['ATK%', 'ATK', 'Penetration'],
    recommendedSets: [
      {
        name: 'Beth 4-piece + Alpha 2-piece',
        englishName: 'Beth 4-piece + Alpha 2-piece',
        mainRune: 'Beth',
        secondaryRune: 'Alpha',
        mainRune2Piece: '2-piece: Crit Rate +6%',
        mainRune4Piece: '4-piece: When HP >80%: Critical Hit Damage +24%',
        secondaryRuneEffect: '2-piece: Attack Power +8%',
      },
      {
        name: 'Beth 4-piece + Epsilon 2-piece',
        englishName: 'Beth 4-piece + Epsilon 2-piece',
        mainRune: 'Beth',
        secondaryRune: 'Epsilon',
        mainRune2Piece: '2-piece: Crit Rate +6%',
        mainRune4Piece: '4-piece: When HP >80%: Critical Hit Damage +24%',
        secondaryRuneEffect: '2-piece: Attack Power +8%',
      },
      {
        name: 'Beth 4-piece + Giants 2-piece',
        englishName: 'Beth 4-piece + Giants 2-piece',
        mainRune: 'Beth',
        secondaryRune: 'Giants',
        mainRune2Piece: '2-piece: Crit Rate +6%',
        mainRune4Piece: '4-piece: When HP >80%: Critical Hit Damage +24%',
        secondaryRuneEffect: '2-piece: Attack power increased by 8%',
      },
    ],
    alternativeSets: [
      {
        name: 'Beth 4-piece + Zahn 2-piece',
        englishName: 'Beth 4-piece + Zahn 2-piece',
        mainRune: 'Beth',
        secondaryRune: 'Zahn',
        mainRune2Piece: '2-piece: Crit Rate +6%',
        mainRune4Piece: '4-piece: When HP >80%: Critical Hit Damage +24%',
        secondaryRuneEffect: '2-piece: HP +8%',
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
      description: 'Choose Crit Damage % for maximum damage output',
    },
    5: {
      name: 'Position 5 — Variable Main Stats',
      recommendedStat: 'Chaos Attribute Damage (%)',
      availableStats: [
        'Chaos Attribute Damage (%)',
        'Fire Attribute Damage (%)',
        'Ice Attribute Damage (%)',
        'Holy Attribute Damage (%)',
        'Attack (%)',
        'HP (%)',
        'Defense (%)',
      ],
      description:
        'Chaos Attribute Damage % recommended for Chaos characters, or choose other elements for different team compositions',
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
        effect:
          'After battle starts, ATK increases by 30%. When switching modes, damage taken is reduced by 50%',
        importance: 2,
        importanceLabel: 'Good',
      },
      {
        level: 2,
        effect:
          '[Termination] Mode: Crit Damage increases by 30%. [Death Silence] Mode: Damage taken is reduced by 20%',
        importance: 1,
        importanceLabel: 'Very Good',
      },
      {
        level: 3,
        effect: '[Basic Attack], [Skill], [Ultimate], and [Passive] level and level cap +2',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 4,
        effect: 'Chaos damage increases by 30%',
        importance: 2,
        importanceLabel: 'Good',
      },
      {
        level: 5,
        effect: '[Basic Attack], [Skill], [Ultimate], and [Passive] level and level cap +2',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 6,
        effect: 'All damage dealt by Hela penetrates 20% of all resistances',
        importance: 1,
        importanceLabel: 'Very Good',
      },
    ],
  },
  teamSkill: {
    name: 'Combination Skill',
    activationCondition: 'Team contains 2 [Chaos] attribute characters and [ASA] characters',
    effects: [
      'ATK increases by 10%',
      'At the start of battle, for every 500 ATK, increases own Chaos damage by 5% (max 6 stacks, up to 30% Chaos damage bonus)',
    ],
  },
  teamSynergy: {
    goodWith: ['Other Chaos characters', 'ASA characters'],
    note: 'Hela benefits greatly from another Chaos character in the team due to her passive bonus of +60% Crit Damage when there is at least 1 other Chaos attribute character. Team skill requires 2 Chaos + ASA characters for 10% ATK and up to 30% Chaos damage bonus.',
  },
};
