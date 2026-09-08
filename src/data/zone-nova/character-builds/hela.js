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
      skill: 'Ultimate: Domination Authority - Chaotic Death',
      priority: 1,
      level: 'Level 14',
      reason: 'Massive 2160% ATK damage that can one-shot bosses, core to her nuker role',
      description:
        'Cooldown: 1.0s | Energy Cost: 1\nEnters [Termination] mode at start of battle. Ultimate can switch between [Termination] or [Death Silence] modes.\n\n[Passive Mechanic]: When allies cast ultimates, gains layers of [Domination Authority: Chaotic Death] equal to energy consumed (max 5 per cast). At 10 layers, can consume all to cast [Enhanced Ultimate].\n\n[Enhanced Ultimate]:\n[Termination] Mode: 2160% ATK Chaos damage to target\n[Death Silence] Mode: Moves to highest ATK enemy and deals total 2160% ATK Chaos damage',
    },
    {
      skill: 'Passive: Termination Echo',
      priority: 2,
      level: 'Level 14',
      reason: 'Essential for crit damage scaling and resistance penetration',
      description:
        "[Termination] Mode: All damage penetrates 24% of target's resistance\n[Death Silence] Mode: All damage reduces target's total damage output by 36%\n\n[Battle Start Bonus]: With 1+ other Chaos character, Hela's Crit Damage increases by 60%",
    },
    {
      skill: 'Auto Skill: Death Silence Prelude',
      priority: 3,
      level: 'Level 14',
      reason: 'Primary damage source with high scaling and mode switching utility',
      description:
        'Cooldown: 5.0s\n[Termination] Mode: Deals 360% attack power Chaos damage to designated enemy unit\n[Death Silence] Mode: Moves 5 meters toward the enemy unit with the highest ATK and deals 360% attack power Chaos damage to them',
    },
    {
      skill: 'Normal Attack: Nether Touch',
      priority: 4,
      level: 'Level 14',
      reason: 'Basic damage filler, scales well with crit builds',
      description:
        'Cooldown: 2.0s\n[Termination] Mode: Deals 120% attack power Chaos damage to designated enemy unit\n[Death Silence] Mode: Moves in front of enemy with highest ATK and deals 120% attack power Chaos damage to them',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Weird eyes full of desire',
      effect:
        "Hela's own memory card. 34% Crit Rate plus 24% damage for 5 seconds every time an ally casts their ultimate, stacking up to 3 times for 72% total damage. Allies casting ults is also what builds her [Domination Authority] layers, so the card and her kit feed each other. The recommended pick once awakened.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'Helacard',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      description:
        "Increases critical hit rate by 34%. When other friendly units cast a Ultimate Skill, the wearer's damage increases by 24% for 5 seconds. It can be stacked up to 3 times.",
    },
    {
      name: 'Hero Never Resting',
      effect:
        'Budget boss-fight option. Fully awakening Hela\'s SSR card is expensive, and this cheap SR grants a massive 72% Crit Damage whenever fewer than 2 enemies are on the field, which is exactly the single-boss scenario. Until her own card is maxed, this punches far above its cost.',
      priority: 'Budget Option',
      characterSpecific: false,
      memoryImage: 'Shannacard.jpg',
      memoryStats: { hp: '4,200', attack: '650', defense: '395' },
      description:
        'When there are fewer than 2 enemies on the field, Critical Damage increases by 72%',
    }
  ],
  alternativeMemoryCards: [
    {
      name: 'Sunlit sweetness awaits',
      effect:
        "Set's card and SS-tier Attacker memory in the memory tier list. At Awaken 5 it gives 65% Crit Damage plus up to 86% Crit Rate from its on-hit stacks, and Hela lands hits constantly with her auto and ultimate, so the stacks stay up. Fits her crit build directly.",
      characterSpecific: false,
      memoryImage: 'sunlit-sweetness-awaits.png',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      description:
        'Critical Damage increased by 65%.\nWhen the wearer lands a hit with any skill/ULT, Critical Rate increases by 4.3% for 6 seconds (up to 20 stacks).',
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
    primary: 'Critical Damage',
    secondary: 'Critical Rate',
    stats: ['Crit DMG%', 'Crit Rate%'],
    additionalStats: ['ATK%', 'ATK', 'Penetration'],
    buildNote:
      'Skota 4-piece is her best set, but the element rune sets cannot be crafted yet, so it is a goal for later. The damage difference is small in practice anyway: we switched to the crit rate set for more damage and it barely changed. Just use whatever pieces have the best substats and run the set they complete.',
    recommendedSets: [
      {
        name: 'Skota 4-piece + Beth 2-piece',
        englishName: 'Skota 4-piece + Beth 2-piece',
        mainRune: 'Skota',
        secondaryRune: 'Beth',
        mainRune2Piece: '2-piece: Critical Rate increases by 6%',
        mainRune4Piece:
          '4-piece: Attack Power increased by 12%. Chaos resistance penetration increased by 12% during the release of the Ultimate Skill (triggers at most once every 5 seconds)',
        secondaryRuneEffect: '2-piece: Critical Rate increases by 6%',
        description:
          'Her best set: all of her damage is Chaos attribute and her nuke is an ultimate, so the attack boost and ultimate Chaos penetration line up perfectly with her kit. The element sets cannot be crafted yet though, so this is the goal for later, not something to farm right now.',
      },
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
      name: 'Position 5: Variable Main Stats',
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
      name: 'Position 6: Variable Main Stats',
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
    goodWith: [
      'Frigga',
      'Pride-Lucifer',
      'Bors',
      'Morgan Le Fay',
      'Medusa',
      'Thor',
    ],
    note: 'She is really good single target! Her 2160% ATK enhanced ultimate can one-shot bosses and priority targets. Hela also benefits greatly from another Chaos character in the team due to her passive bonus of +60% Crit Damage when there is at least 1 other Chaos attribute character. Team skill requires 2 Chaos + ASA characters for 10% ATK and up to 30% Chaos damage bonus.',
  },
};
