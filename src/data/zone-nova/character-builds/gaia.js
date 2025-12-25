// Gaia Build - Zone Nova Character Build
// SSR Holy character - HP Scaling Healer with Revive Mechanics

export const gaiaBuild = {
  name: 'Gaia',
  role: 'Healer',
  buildType: 'HP Scaling Healer',
  description:
    'Gaia is a healer that scales with HP. She has AOE healing and can revive allies. She can also increase the max HP of her allies. Using Snow Girl memory can provide 24% total damage increase which is better than her memory!',

  skillPriority: [
    {
      skill: 'Passive: Primordial Regression',
      priority: 1,
      level: 'Level 10',
      reason:
        "Core mechanic providing Motherly Love buff with 60% HP increase and unique revive through Life Extension - essential for team survivability and Gaia's primary support function",
      description:
        "Upon entering battle, the ally with the lowest DEF gains [Motherly Love]. While [Motherly Love] is active: The target's max HP increases by 60% (increased max HP cannot exceed 15% of Gaia's max HP at battle start). When the [Motherly Love] holder would receive lethal damage: Triggers [Life Extension] effect - immediately restores HP to 100%, then gradually loses HP over time. HP loss accelerates each second. HP loss stops if the holder defeats an enemy during this state. Each ally can trigger this once per battle. [Motherly Love] disappears if Gaia is defeated.",
    },
    {
      skill: 'Ultimate: Dominion: Primordial Order',
      priority: 2,
      level: 'Level 10',
      reason:
        'Provides massive 60% max HP boost for entire team plus Emergency Treatment burst healing - primary team-wide enhancement and burst healing tool',
      description:
        "Energy Cost: 3\nIncreases max HP of all allied characters by 60%. The increased max HP cannot exceed 15% of Gaia's max HP at the start of the battle. Lasts 20 seconds. During the buff duration, Gaia can use [Emergency Treatment]. [Emergency Treatment]: Heals the allied unit with the lowest current HP percentage, restoring HP equal to 12% of Gaia's max HP.",
    },
    {
      skill: 'Auto Skill: Gene Collapse',
      priority: 3,
      level: 'Level 10',
      reason:
        'Deploys healing devices that provide sustained AOE healing - main source of continuous healing and works synergistically with ultimate for device replenishment',
      description:
        "Cooldown: 10.0s\nDeploys floating devices to other allied units. When the target takes damage, the floating device heals all allied characters every second for 5 seconds, restoring HP equal to 1% of Gaia's max HP + 120 HP. When Gaia uses her Ultimate Skill, she can replenish floating devices to other allied units.",
    },
    {
      skill: 'Normal Attack: Gene Split',
      priority: 4,
      level: 'Level 7',
      reason:
        'Basic attack that scales with max HP - provides minimal damage contribution while maintaining consistent pressure',
      description: "Deals Holy Damage to a target enemy, equal to 12% of the caster's max HP.",
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'The Beauty of Heijing Castle',
      effect:
        "Snow Girl's SR memory card that provides substantial healing amplification and damage buffs to fully healed allies. Excellent for healers with sustained recovery effects.",
      priority: 'Highly Recommended',
      characterSpecific: false,
      memoryImage: 'Snowcard',
      memoryStats: { hp: '5,000', attack: '500', defense: '500' },
      slug: 'the-beauty-of-heijing-castle',
      description:
        "Healing amount +30%; when recovering targets' life value is full, target damage +24% for 10 seconds.",
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'A Smile That Topples Cities',
      effect:
        "Gaia's exclusive SSR memory card that provides maximum HP scaling and healing amplification with a conditional bonus. ",
      characterSpecific: true,
      memoryImage: 'Gaiacard',
      memoryStats: { hp: '6,300', attack: '580', defense: '585' },
      slug: 'a-smile-that-topples-cities',
      description:
        'Max HP +40%; Healing output +40%; If wearer healed within last 1 second, additional +40% healing output.',
    },
    {
      name: 'Solitary Realm',
      effect:
        "Kela's SR memory card that boosts healing output and provides damage reduction to low-health allies. Excellent for emergency healing scenarios and survivability.",
      characterSpecific: false,
      memoryImage: 'kelacard',
      memoryStats: { hp: '5,000', attack: '500', defense: '500' },
      slug: 'solitary-realm',
      description:
        'Healing amount increased by 30%; Protection Effect: When healing a target below 50% max HP, the target receives 8% damage reduction for 10 seconds.',
    },
  ],
  runes: {
    primary: 'HP%',
    secondary: 'HP',
    stats: ['HP%', 'HP', 'DEF%'],
    additionalStats: ['DEF'],
    buildNote:
      "Focus on maximizing HP first since all of Gaia's abilities scale with her max HP. DEF provides survivability to keep Gaia alive longer.",
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
      recommendedStat: 'Healing Effectiveness (%) / HP (%)',
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
        'Healing Effectiveness% is ideal for maximizing all healing output. HP% is also excellent for increasing the scaling of all abilities. prioritize Healing Effectiveness% if you have enough HP from other sources.',
    },
    5: {
      name: 'Position 5 — Variable Main Stats',
      recommendedStat: 'HP (%)',
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
        "HP% is the best choice for position 5 as it directly scales all of Gaia's healing abilities, Motherly Love HP boosts, and Emergency Treatment healing. This provides the most benefit for her support role.",
    },
    6: {
      name: 'Position 6 — Variable Main Stats',
      recommendedStat: 'HP (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description:
        "HP% is the best choice for maximizing all of Gaia's healing and support abilities. This directly increases her healing output, Motherly Love HP boosts, and Emergency Treatment healing.",
    },
  },
  awakenings: {
    keyMilestones: [
      {
        level: 1,
        effect:
          "Characters with [Motherly Love] gain +45% DEF. [Life Extension]'s HP loss duration capped at 10 seconds.",
        importance: 2,
        importanceLabel: 'Good',
      },
      {
        level: 2,
        effect:
          "Upon entering battle: Instantly cast Ultimate Skill with no energy cost. Using [Emergency Treatment] refreshes the duration of Ultimate Skill's buff.",
        importance: 1,
        importanceLabel: 'Very Good',
      },
      {
        level: 3,
        effect: 'Normal / Skill / Ultimate / Passive level cap +2',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 4,
        effect: "Gaia's healing output +37.5%.",
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 5,
        effect: 'Normal / Skill / Ultimate / Passive level cap +2',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 6,
        effect:
          'Upon entering battle: Two lowest-DEF allies gain [Motherly Love]. [Motherly Love] holders gain +50% additional Max HP.',
        importance: 1,
        importanceLabel: 'Very Good',
      },
    ],
  },
  teamSkill: {
    name: 'Maternal Guardian',
    activationCondition: 'Odius faction + Holy element requirement',
    effects: [
      'Gaia gains +10% Max HP',
      'At battle start: For every 5,000 Max HP Gaia has, her healing output increases by 5% (up to 6 stacks, max +30%)',
    ],
  },
  teamSynergy: {
    goodWith: ['Any team - she is good at everything. She is the best healer right now!'],
    note: 'Gaia is a really strong healer. If you put her in any team she is going to make sure they will not die. However, her max HP increase does not scale with other characters that use HP as damage like Mordred.',
  },
};
