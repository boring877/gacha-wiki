// Artemis Build - Zone Nova Character Build
// SSR Wind character - Berserker-style DPS with HP management

export const artemisBuild = {
  name: 'Artemis',
  role: 'DPS',
  buildType: 'Wind Berserker DPS',
  description:
    'Artemis is a PVP unit, she is really weak at PVE to the point she is useless. her use case is PVP one shoting Targets with her ultimate.',
  skillPriority: [
    {
      skill: 'Ultimate: Silver Moon Judgment',
      priority: 1,
      level: 'Level 10',
      reason:
        'High damage ultimate that enables low-HP passive activation - primary PVP burst tool',
      description:
        'Energy Cost: 3\nConsumes 50% current HP. Teleports in front of target and deals 264% attack power as wind damage to target and nearby enemies.',
    },
    {
      skill: 'Auto Skill: Moon Ancient Boxing',
      priority: 2,
      level: 'Level 10',
      reason: 'Primary damage source and self-sustain - provides consistent AOE damage and healing',
      description:
        'Cooldown: 5.0s\nAutomatically deals 240% attack power as wind damage to designated enemy and nearby enemies. Each hit restores 10% max HP.',
    },
    {
      skill: 'Passive: Moon Shadow Hunt',
      priority: 3,
      level: 'Level 10',
      reason: 'Core damage amplification mechanic - essential for her berserker playstyle',
      description:
        'When HP is below 50%: All attacks deal additional 60% attack power as wind damage.',
    },
    {
      skill: 'Normal Attack: Moon Rising Fist',
      priority: 4,
      level: 'Level 7',
      reason: 'Basic damage filler that benefits greatly from low-HP damage amplification',
      description: 'Deals 120% attack power as wind damage to designated enemy unit.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Halloween Candy',
      effect:
        "Nina's signature memory card that provides excellent critical damage and sustain. Perfect for Artemis's PVP burst playstyle with critical damage amplification.",
      priority: 'Highly Recommended',
      characterSpecific: false,
      memoryImage: 'Ninacard.jpg',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description:
        'Critical damage increased by 60%, When health is above 30%: Recover 2% max health after attacking, All damage increased by 40%',
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'The World Seems to Have Stopped',
      effect:
        "Artemis's exclusive memory card with perfect synergy for her berserker playstyle. Provides attack boost and massive damage amplification when below 50% HP.",
      characterSpecific: true,
      memoryImage: 'Artemiscard.jpg',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      description:
        'Attack power increased by 40%, When HP is below 50%: All damage increased by 40%',
    },
  ],
  runes: {
    primary: 'Attack %',
    secondary: 'Critical Rate',
    stats: ['ATK%', 'Crit Rate%', 'Crit DMG%'],
    additionalStats: ['ATK', 'Penetration'],
    buildNote:
      'You need to kill them as fast as possible in PVP, so no point trying to run DEF or HP. Critical rate will help you one shot things ! a bit of RNG.',
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
        name: 'Epsilon 2-piece + Alpha 2-piece + Giants 2-piece',
        englishName: 'Epsilon 2-piece + Alpha 2-piece + Giants 2-piece',
        epsilon: {
          effect: '2-piece: Attack Power +8%',
        },
        alpha: {
          effect: '2-piece: Attack Power +8%',
        },
        giants: {
          effect: '2-piece: Attack power increased by 8%',
        },
      },
    ],
  },
  mainStatsByPosition: {
    1: {
      name: 'Position 1 — Fixed Main Stat',
      stat: 'HP (Flat Value)',
      description: 'Always HP - no other options. Important for HP management calculations.',
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
      recommendedStat: 'Critical Rate (%)',
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
        'you can go Critical Rate or Critical Damage both are good, the RNG sometimes is annoying in PVP so adding more critical rate is better. also remember you do not need alot of damage to kill their carry or their healers !',
    },
    5: {
      name: 'Position 5 — Variable Main Stats',
      recommendedStat: 'Wind Attribute Damage (%)',
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
      'Level 6 is essential for elemental resistance penetration - core to her damage output',
    keyMilestones: [
      {
        level: 1,
        effect: 'Attack power increased by 20%',
        importance: 'High',
      },
      {
        level: 2,
        effect: 'When HP is below 50%: Damage taken reduced by 10%',
        importance: 'Critical',
      },
      {
        level: 3,
        effect: '[Skills] and [Normal Attack] level and level cap +4',
        importance: 'High',
      },
      {
        level: 4,
        effect: 'Wind damage increased by 35%',
        importance: 'Essential',
      },
      {
        level: 5,
        effect: '[Ultimate] and [Passive] level and level cap +4',
        importance: 'Critical',
      },
      {
        level: 6,
        effect: 'When HP is below 50%: All damage ignores 20% elemental resistance',
        importance: 'Essential',
      },
    ],
  },
  teamSkill: {
    name: 'Combination Skill',
    activationCondition:
      'Team contains 2 [Wind] attribute characters and 2 [Odius] faction characters',
    effects: [
      'Self max HP increased by 10%',
      'At battle start: For every 4,000 max HP, increase self attack power by 5% (maximum 6 times, up to 30% attack power boost)',
    ],
  },
  teamSynergy: {
    goodWith: ['PVP unit', 'Works with Buffers likes "Morgan, Naiya and Zashiki-warashi"'],
    note: 'You need to have the energy gain to be high in order to use her ultimate before they kill you !.',
  },
};
