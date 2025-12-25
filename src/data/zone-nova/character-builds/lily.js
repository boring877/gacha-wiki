// Lily Build - Zone Nova Character Build
// SSR Ice character - Defense Scaling Guardian Tank

export const lilyBuild = {
  name: 'Lily',
  role: 'Tank',
  buildType: 'Ice Guardian Tank',
  description:
    'Lily is a defense-scaling tank that is good mostly in PvP. She uses damage mitigation and shields to become super tanky. She is one of the best tanky units in the game. Her unique [Battle Intention] system allows her to cast an enhanced ultimate that nullifies all incoming damage for 10 seconds.',
  skillPriority: [
    {
      skill: 'Passive: Hundred-Battle Ice Bone',
      priority: 1,
      level: 'Level 10',
      reason:
        'Core tank mechanic - provides defense buffs after mitigation, [Battle Intention] stack generation for enhanced ultimate, and automatic shields at 70%/40%/10% HP with 100% mitigation for 10 seconds',
      description:
        'Effect 1: [Mitigation] After success, increase own defense by 60% for 5 seconds; repeated triggers can extend duration.\n\nEffect 2: [Mitigation] After success, gain 1 stack of [Battle Intention]; maximum 1 stack per second. When [Battle Intention] reaches 10 stacks, can cast [Enhanced Ultimate Skill].\n\nEffect 3: After entering battle and when own HP drops to 70%/40%/10% or below, gain a shield; each shield can trigger at most once. Shield amount equals 24% of max HP, and within 10 seconds, mitigation rate rises to 100%, removing all ongoing damage effects.\n\nEffect 4: After gaining a shield each time, instantly recover 10% of max HP.',
    },
    {
      skill: 'Auto Skill: Frost Flow Defense Stance',
      priority: 2,
      level: 'Level 10',
      reason:
        'Main mitigation skill - provides 58% damage mitigation for 5 seconds on a short 5s cooldown, enabling frequent defense buffs and [Battle Intention] stack generation through passive',
      description:
        'Cooldown: 5.0s\nGrants 58% damage mitigation rate to self, lasting 5 seconds. [Mitigation]: Has a chance to reduce this damage by 30%; critical hit damage ignores mitigation.',
    },
    {
      skill: 'Ultimate: Breaking Formation · Final Scene',
      priority: 3,
      level: 'Level 10',
      reason:
        'Enhanced ultimate provides complete damage immunity for 10 seconds and massive damage - the cornerstone of her tank identity. Normal ultimate is also efficient for damage',
      description:
        'Energy Cost: 3\nNormal Ultimate: Deals ice damage equal to 240% of own defense to a designated enemy unit, gains 1 stack of [Battle Intention], and reduces self-damage taken by 24% for 10 seconds.\n\nEnhanced Ultimate: Clear all [Battle Intention] stacks, gain a shield with an amount equal to 24% of max HP, and for 10 seconds, nullify all incoming damage (100%), remove all ongoing damage effects, deal ice damage equal to 480% of own defense to a designated enemy unit, and reduce self-damage taken by 24% for 10 seconds.',
    },
    {
      skill: 'Normal Attack: Frost Armor Thorn',
      priority: 4,
      level: 'Level 7',
      reason:
        'Basic damage filler that scales with defense - useful for chip damage and maintaining offensive pressure',
      description:
        'Cooldown: 2.0s\nDeals ice damage equal to 120% of own defense to a designated enemy unit.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'In the Cafe, Sneaking a Bite',
      effect:
        "Lily's exclusive memory card. Provides massive defense increase and additional damage reduction after mitigation and while shielded - perfect synergy with Lily's kit",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'Lilycard',
      memoryStats: { hp: '6,600', attack: '480', defense: '690' },
      slug: 'in-the-cafe-sneaking-a-bite',
      description:
        'Defense increases by 64%. After successful mitigation, damage taken is reduced by 10% for 5 seconds. When the wearer has a shield, damage taken is reduced by 18%.',
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'Lancelot-HerTrainer',
      effect:
        "SR memory card that provides Guardian class exclusive effects, defense increase, and team damage reduction - excellent choice if Lily's exclusive memory is unavailable",
      characterSpecific: false,
      memoryImage: 'Lancelotcard.jpg',
      memoryStats: { hp: '5,500', attack: '400', defense: '575' },
      description:
        'Defense increased by 36%, Team Buff: After entering battle, all allied characters take 8% less damage, Note: Same skill effects cannot stack',
    },
  ],
  runes: {
    primary: 'Defense',
    secondary: 'HP',
    stats: ['DEF%', 'HP%'],
    additionalStats: ['DEF', 'HP'],
    buildNote:
      "Defense is Lily's primary stat since it scales her damage, shields, and provides team damage reduction through her combination skill. HP is also important since Defense has diminishing returns. Aim for high Defense % substats.",
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
      recommendedStat: 'Defense (%) / HP (%)',
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
        'Defense % or HP % both are fine. The problem with defense is it has diminishing returns, so getting 1 HP % and 2 DEF % is not a bad mix IMO.',
    },
    5: {
      name: 'Position 5 — Variable Main Stats',
      recommendedStat: 'Defense (%) / HP (%)',
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
      description: 'Read note 4; same thought process.',
    },
    6: {
      name: 'Position 6 — Variable Main Stats',
      recommendedStat: 'Defense (%) / HP (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description: 'Read note 4; same thought process.',
    },
  },
  awakenings: {
    priority: 'Awakening 2 is the most important - it helps your team survive PvP.',
    keyMilestones: [
      {
        level: 1,
        effect:
          '[Mitigation] After success, additionally increase own defense by 30% for 5 seconds; casting a normal ultimate skill grants 1 extra stack of [Battle Intention]; after casting an enhanced ultimate skill, immediately obtain 2 stacks of [Battle Intention].',
        importance: 'Good',
      },
      {
        level: 2,
        effect:
          'After entering battle, all units on my side gain 20 layers of [Frost Armor]; each time taking damage, remove 1 layer of [Frost Armor], reducing that damage by 50%; [Frost Armor] expires after 20 seconds.',
        importance: 'Essential',
      },
      {
        level: 3,
        effect: '[Normal Attack], [Skill], [Ultimate Skill], and [Passive] level and level cap +2',
        importance: 'Low',
      },
      { level: 4, effect: 'Defense increases by 45%', importance: 'Good' },
      {
        level: 5,
        effect: '[Normal Attack], [Skill], [Ultimate Skill], and [Passive] level and level cap +2',
        importance: 'Low',
      },
      {
        level: 6,
        effect:
          'All resistances increase by 15%, and ice resistance additionally increases by 15%.',
        importance: 'Good',
      },
    ],
  },
  teamSkill: {
    name: 'Combination Skill',
    activationCondition: 'If the party has 2 Sapphire faction members or 2 Ice characters',
    effects: [
      'Own Defense increased by 15%',
      'At the start of battle, every 500 Defense reduces team-wide damage taken by 1.5%, maximum 6 stacks (9% team damage reduction)',
    ],
  },
  teamSynergy: {
    goodWith: ['Any team', 'PvP teams'],
    note: 'Lily is a PvP unit, she is alright in PvE but I would use her in PvP with Awakening 2, as that will help the team to survive.',
  },
};
