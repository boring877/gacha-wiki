// Jorogumo Build - Zone Nova Character Build
// SSR Chaos character - AOE Healer with Umbrella Stacks and Shield Mechanics

export const jorogumoBuild = {
  name: 'Jorogumo',
  role: 'Healer',
  buildType: 'AOE Healer with Emergency Healing',
  description:
    "Jorogumo is a Chaos element healer, her ultimate cost only 2 energy. She provide Buff Umbrella Blossom to allies, once they drop below 30% HP, she will trigger the passive emergency healing. Also her awakening 6 provides a shield equal to 50% of Jorogumo's maximum HP and awakening 2 provides a 12.5% enemy damage reduction and resistance. Her energy recovery is also increased by 10% when you have team skill.",

  skillPriority: [
    {
      skill: 'Ultimate: Umbrella Blossom',
      priority: 1,
      level: 'Level 10',
      reason:
        'Core healing ability that creates a healing zone and builds Umbrella Blossom stacks on allies. These stacks are essential for triggering the passive emergency healing.',
      description:
        "Energy Cost: 2\nAfter a short casting time, a healing area with a range of 5 is created, restoring the caster's attack power by 46% + 243 HP per second for 5 seconds. Allied characters within the area gain 1 stack of [Umbrella Blossom], up to a maximum of 5 stacks.",
    },
    {
      skill: 'Passive: Umbrella Heal',
      priority: 2,
      level: 'Level 10',
      reason:
        'Emergency healing that triggers automatically when allies drop below 30% HP. Consumes Umbrella stacks to provide rapid burst healing, with enhanced healing on the first two activations.',
      description:
        'After an ally is attacked, if HP is below 30%, consume 1 stack of [Umbrella Flower] to gain 3 rapid heals of 15.1% Max HP within 1 second. The first 2 times gain 6 rapid heals.',
    },
    {
      skill: 'Auto Skill: Blooming Sweet Rain',
      priority: 3,
      level: 'Level 10',
      reason:
        'Targeted healing for the lowest HP ally with continuous regeneration and resistance buff. Great for keeping tanks or focused targets alive.',
      description:
        'Cooldown: 3.0s\nThe friendly unit with the lowest current health percentage gains a continuous health regeneration of 20.4% + 440 of its own attack power for 3 seconds; during the continuous regeneration, gain 10% all resistance.',
    },
    {
      skill: 'Normal Attack: Eclipse Silk',
      priority: 4,
      level: 'Level 7',
      reason:
        'Basic Chaos damage attack. Lower priority as Jorogumo focuses on healing rather than damage output.',
      description: 'Cooldown: 2.0s\nDeals 120% ATK Chaos Damage to a target enemy.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Beautiful Moon',
      effect:
        "Jorogumo's exclusive SSR memory card that provides strong healing amplification with bonus healing for targets with Continuous Damage debuffs and emergency healing for low HP allies.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'Jorogumocard',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      slug: 'beautiful-moon',
      description:
        "Healing increased by 35%. When healing a target with 'Continuous Damage' status, healing is increased by an additional 25%. If target HP is below 50%, grant continuous healing effect, restoring 9% of caster's ATK as HP per second for 3 seconds, max 1 stack.",
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'The Most Real Her',
      effect:
        "Jeanne D'Arc's SSR memory card that provides massive healing amplification with stacking bonuses for rapid skill usage.",
      characterSpecific: false,
      memoryImage: 'JoanofArccard',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      slug: 'the-most-real-her',
      description:
        'Healing amount +50%, when casting skills or required skills within 1/2/3 seconds, healing amount additionally +25/50/75%.',
    },
    {
      name: 'The Beauty of Heijing Castle',
      effect:
        "Snow Girl's SR memory card that provides healing amplification and damage buffs to fully healed allies. Good synergy with Jorogumo's sustained healing.",
      characterSpecific: false,
      memoryImage: 'Snowcard',
      memoryStats: { hp: '5,000', attack: '500', defense: '500' },
      slug: 'the-beauty-of-heijing-castle',
      description:
        "Healing amount +30%; when recovering targets' life value is full, target damage +24% for 10 seconds.",
    },
    {
      name: 'Midnight Work',
      effect:
        "Anubis's SSR memory card that provides excellent healing boost with attack power buff to healed targets. Good for buffing DPS allies.",
      characterSpecific: false,
      memoryImage: 'Anubiscard',
      memoryStats: { hp: '6,000', attack: '800', defense: '600' },
      slug: 'midnight-work',
      description:
        'Healing amount +50%, each healing within 3 seconds gives target +40% attack power for 3 seconds.',
    },
  ],
  runes: {
    primary: 'ATK%',
    secondary: 'ATK',
    stats: ['ATK%', 'ATK', 'Healing Effectiveness%'],
    additionalStats: ['HP%', 'DEF%'],
    buildNote:
      "Focus on ATK% first since Jorogumo's healing scales with her attack power. Healing Effectiveness% provides additional healing amplification. HP% and DEF% improve survivability.",
    recommendedSets: [
      {
        name: 'Daleth 4-piece + Zahn 2-piece',
        englishName: 'Daleth [Energy/Healing] 4-piece + Zahn 2-piece',
        mainRune: 'Daleth',
        secondaryRune: 'Zahn',
        mainRune2Piece: '2-piece: Healing Effectiveness +10%',
        mainRune4Piece: '4-piece: Battle Start: Gain 1 Energy immediately',
        secondaryRuneEffect: '2-piece: HP +8%',
      },
    ],
    alternativeSets: [
      {
        name: 'Zahn 4-piece + Daleth 2-piece',
        englishName: 'Zahn [HP/Defense] 4-piece + Daleth 2-piece',
        mainRune: 'Zahn',
        secondaryRune: 'Daleth',
        mainRune2Piece: '2-piece: HP +8%',
        mainRune4Piece: '4-piece: After Ultimate: Take 5% less damage (10s)',
        secondaryRuneEffect: '2-piece: Healing Effectiveness +10%',
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
      recommendedStat: 'Healing Effectiveness (%) / Attack (%)',
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
        "Healing Effectiveness% is ideal for maximizing all healing output. Attack% is also excellent since Jorogumo's healing scales with ATK.",
    },
    5: {
      name: 'Position 5 — Variable Main Stats',
      recommendedStat: 'Attack (%)',
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
      description:
        "Attack% is the best choice for maximizing Jorogumo's healing output. HP% or DEF% can be used if more survivability is needed.",
    },
  },
  awakenings: {
    priority: 'Good option: A2 and A6.',
    keyMilestones: [
      {
        level: 2,
        effect:
          "Immediately activates Ultimate without cost upon entering battle. After using Ultimate, gain [Umbrella Protection]: Allies' non-Dark resistance increased by 40%, enemy damage reduced by 12.5% (lasts 5 seconds).",
        importance: 'Good',
      },
      {
        level: 6,
        effect:
          "[Umbrella Healing+] The passive effect is added once for the first two activations, and also grants a shield equal to 50% of Jorogumo's maximum HP.",
        importance: 'Good',
      },
    ],
  },
  teamSkill: {
    name: 'Combination Skill',
    activationCondition: '2 [Pingjing City (平京城)] or 2 [Chaos] characters',
    effects: [
      'At the start of combat, healing is increased by 5% for every 500 attack power, up to 6 times (max +30%)',
      'Self-generated energy gain efficiency is increased by 10%',
    ],
  },
  teamSynergy: {
    goodWith: [
      'Hela, they works will beucase hela has passive that increase crit damage when paried with chaos characters',
      'she is 2nd best healer after gaia so any team with her is fine',
    ],
    note: 'Jorogumo need quite of investment to be SSS, she is quite good healer but if you have her at awaken 6 then she will be worken ! I wonder if going full hp on her on awaken 6 might better then ATK.',
  },
};
