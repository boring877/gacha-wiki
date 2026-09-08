// Apep Build - Zone Nova Character Build
// SSR Wind character - Tank Sub-DPS

export const apepBuild = {
  name: 'Apep',
  role: 'Tank',
  buildType: 'Tank Sub-DPS Wind',
  description:
    'Apep is a sub-DPS tank unit; she scales with DEF and can generate her self-shield and also heal herself. Her ultimate is only 2 cost!',
  skillPriority: [
    {
      skill: 'Passive',
      priority: 1,
      level: 'Level 14',
      reason: 'Enhances defense scaling and survivability - max level for F2P efficiency',
      description: 'Scales DEF to ATK and provides self-shield generation',
    },
    {
      skill: 'Auto Skill',
      priority: 2,
      level: 'Level 14',
      reason: 'Core tank ability - provides defense scaling and shield generation',
      description: 'Generates shields based on DEF and provides team protection',
    },
    {
      skill: 'Ultimate',
      priority: 3,
      level: 'Level 14',
      reason: 'Very efficient 2-cost ultimate for damage and defense',
      description: '2-cost ability that deals wind damage and provides shields',
    },
    {
      skill: 'Normal Attack',
      priority: 4,
      level: 'Level 14',
      reason: 'Sub-DPS damage that scales with defense and provides self-healing',
      description: 'Basic attack that scales with DEF and provides healing',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Wrong time of appearance',
      effect:
        "Apep's exclusive memory card. Defense increased by 64%. Below 50% HP she recovers 2% max HP after attacking, above 50% HP she takes 10% less damage and deals 40% more damage.",
      priority: 'Highly Recommended',
      characterSpecific: true,
    }
  ],
  alternativeMemoryCards: [
    {
      name: 'Afternoon tantrums',
      effect: 'SSS-tier Warrior memory in the memory tier list.',
      characterSpecific: false,
      memoryImage: 'Kellercard.png',
      memoryStats: { hp: '6,600', attack: '480', defense: '690' },
      description: 'Increases own attack power by 70%， critical hit damage by 90%， and normal attack damage by 100%. Every 3rd normal attack will deal an additional 75% of attack power as normal attack damage.',
    },
    {
      name: 'Halloween candy',
      effect: 'SS-tier Warrior memory in the memory tier list.',
      characterSpecific: false,
      memoryImage: 'Ninacard.jpg',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description: 'Increases critical hit damage by 60%. When HP is above 30%, the wearer recovers 2% of their maximum HP after attacking, and all damage is increased by 40%.',
    },
    {
      name: 'Pride or Tsundere?',
      effect: 'SS-tier Warrior memory in the memory tier list.',
      characterSpecific: false,
      memoryImage: 'pride-or-tsundere.png',
      memoryStats: { hp: '6,600', attack: '480', defense: '690' },
      description: 'Increases HP by 32% and defense by 60%. When an ally is attacked by a normal attack, the damage taken is reduced by 30%.',
    },
  ],
  runes: {
    primary: 'Defense',
    secondary: 'HP',
    stats: ['DEF%', 'HP%'],
    additionalStats: ['DEF', 'HP', 'Crit Rate', 'Crit Damage', 'Penetration'],
    recommendedSets: [
      {
        name: 'Zahn 4-piece + Tide 2-piece',
        englishName: 'Zahn (札恩) 4-piece + Tide [Energy] 2-piece',
        mainRune: 'Zahn',
        secondaryRune: 'Tide',
        mainRune2Piece: '2-piece: HP +8%',
        mainRune4Piece: '4-piece: After Ultimate: Take 5% less damage (10s)',
        secondaryRuneEffect: '2-piece: Defense increased by 12%',
      },
      {
        name: 'Zahn 4-piece + Shattered Foundation 2-piece',
        englishName: 'Zahn (札恩) 4-piece + Shattered Foundation (碎基) 2-piece',
        mainRune: 'Zahn',
        secondaryRune: 'Shattered-Foundation',
        mainRune2Piece: '2-piece: HP +8%',
        mainRune4Piece: '4-piece: After Ultimate: Take 5% less damage (10s)',
        secondaryRuneEffect: '2-piece: Defense +12%',
      },
    ],
    alternativeSets: [
      {
        name: 'Tide 4-piece + Zahn 2-piece',
        englishName: 'Tide [Energy] (潮汐 [能量]) 4-piece + Zahn (札恩) 2-piece',
        mainRune: 'Tide',
        secondaryRune: 'Zahn',
        mainRune2Piece: '2-piece: Defense increased by 12%',
        mainRune4Piece:
          "4-piece: Within 10 seconds after combat starts, your team's energy gain efficiency is increased by 30%",
        secondaryRuneEffect: '2-piece: HP +8%',
      },
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
      recommendedStat: 'Defense (%)',
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
        'Most diverse options including utility stats and exclusive Attack Penetration (%)',
    },
    5: {
      name: 'Position 5: Variable Main Stats',
      recommendedStat: 'Defense (%)',
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
      description: 'Core stats plus elemental damage increases - all percentages',
    },
    6: {
      name: 'Position 6: Variable Main Stats',
      recommendedStat: 'Defense (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description: 'Focus on core percentage stat increases only',
    },
  },
  awakenings: {
    priority: "A2 is the biggest early jump, then A4. A3/A5 raise skill level caps (+2 each) and are dupe-gated: take A6 last for the team-wide bonus.",
    keyMilestones: [
      {
        level: 1,
        effect: "Each time you deal normal attack damage, your defense increases by 5% for 10 seconds, stacking up to a maximum of 30%.",
        importance: 2,
        importanceLabel: "Good",
      },
      {
        level: 2,
        effect: "Using enhanced Ultimate Skills also has a healing effect, with the healing amount being equal to that of the Ultimate Skill itself.",
        importance: 1,
        importanceLabel: "Very Good",
      },
      {
        level: 3,
        effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
        importance: 3,
        importanceLabel: "Mid",
      },
      {
        level: 4,
        effect: "Defense increased by 45%",
        importance: 2,
        importanceLabel: "Good",
      },
      {
        level: 5,
        effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
        importance: 3,
        importanceLabel: "Mid",
      },
      {
        level: 6,
        effect: "All resistances increased by 10%, storm resistance increased by an additional 10%\nAll damage dealt penetrates 10% of storm resistance",
        importance: 2,
        importanceLabel: "Good",
      },
    ],
  },
  teamSynergy: {
    goodWith: [
      'Nina',
      'Hela',
      'Shu',
      'Medusa',
      'Lust - Asmodeus',
      'Bors',
    ],
    note: 'This unit has no clear synergy with other characters, but this is the best I could think of right now! She is more PVP focused than PVE.',
  },
};
