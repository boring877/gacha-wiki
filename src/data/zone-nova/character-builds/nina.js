// Nina Build - Zone Nova Character Build
// SSR Ice Warrior - Frost Ash State DPS

export const ninaBuild = {
  name: 'Nina',
  role: 'DPS',
  buildType: 'Frost Ash Crit DPS',
  description:
    'Nina is an Auto Skill DPS who sacrifices HP for massive damage output. Her ultimate enters [Frost Ash] state which doubles skill damage, increases attack speed by 50%, and grants 60% crit rate. She deals strong AOE damage when in Frost Ash state and scales with crit damage.',
  skillPriority: [
    {
      skill: 'Auto Skill: Blaze Burst',
      priority: 1,
      level: 'Level 10',
      reason:
        'Main AOE damage skill that doubles to 960% in Frost Ash state - primary damage source',
      description:
        'Cooldown: 5.0s\nDeals ice damage equal to 480% of Attack to target enemy unit and units behind it, recovering 12% of max health.\n[Frost Ash] State: Each hit removes 5% of max health. Deals ice damage equal to 960% of Attack to target enemy unit and units behind it.',
    },
    {
      skill: 'Ultimate: Frost Ash Liberation',
      priority: 2,
      level: 'Level 10',
      reason:
        'Enables Frost Ash state with +50% attack speed, +60% crit rate, and doubled skill damage multipliers',
      description:
        'Energy Cost: 1\nEnters the [Frost Ash] state. Basic attack speed increased by 50%. Skill base cooldown reduced to 3 seconds. Critical rate increased by 60%. Automatically exits [Frost Ash] state when health falls below 30%. Can re-cast to exit or refresh state.',
    },
    {
      skill: 'Passive: Indestructible Frost Mark',
      priority: 3,
      level: 'Level 10',
      reason:
        'Survivability and damage scaling - 50% damage reduction in Frost Ash plus attack speed stacking',
      description:
        '[Frost Ash] State: Damage taken reduced by 50%. Each attack increases own attack speed by 12%, lasting 5 seconds, stacking up to 5 times (60% total attack speed bonus).',
    },
    {
      skill: 'Normal Attack: Frost Blood Thorn',
      priority: 4,
      level: 'Level 10',
      reason: 'Basic attack that doubles to 240% in Frost Ash state with self-healing trade-off',
      description:
        'Cooldown: 2.0s\nDeals ice damage equal to 120% of Attack to target enemy unit, recovering 12% of max health.\n[Frost Ash] State: Each hit removes 5% of max health. Deals ice damage equal to 240% of Attack to target enemy unit.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Halloween Candy',
      effect:
        "Nina's exclusive memory card. Provides massive critical damage increase with self-healing synergy that complements her Frost Ash HP drain mechanic.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'Ninacard.jpg',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      slug: 'halloween-candy',
      description:
        'Critical damage increased by 60%. When health is above 30%, equipped character recovers 2% of max health after attacking. All damage increased by 40%.',
    },
  ],
  alternativeMemoryCards: [],
  memoryNote:
    'There is no good alternative memory for Nina. The Warrior class is lacking good memories, so you need to get her exclusive Halloween Candy memory.',
  runes: {
    primary: 'Critical Damage',
    secondary: 'Attack %',
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
    ],
    alternativeSets: [
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
    buildNote:
      'She MUST have Gaia in her team so she can heal up to 100% and spam her skill without worrying about her health. Nina gains +60% crit rate from Frost Ash state, so focus on Critical Damage over Critical Rate. Beth 4-piece works well since her self-healing helps maintain HP above 80%. Prioritize Crit DMG% substats.',
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
      recommendedStat: 'Ice Attribute Damage (%) / Attack (%)',
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
        'If you need more ATK so Naiya can buff Nina, going Attack % is not bad. But Ice Damage provides more damage since it has no diminishing returns.',
    },
    6: {
      name: 'Position 6 — Variable Main Stats',
      recommendedStat: 'Attack (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
    },
  },
  awakenings: {
    keyMilestones: [
      {
        level: 1,
        effect:
          'After killing an enemy, immediately recovers 20% of max health. Enters [Frost Ash] state immediately upon entering battle. While in [Frost Ash] state, all damage is increased by 20%.',
        importance: 1,
        importanceLabel: 'Very Good',
      },
      {
        level: 2,
        effect:
          'When health drops to 35% or below, immediately recovers 50% of max health (can trigger once per battle). While in [Frost Ash] state, critical rate is additionally increased by 15%.',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 3,
        effect: '[Basic Attack], [Skill], [Ultimate Skill], and [Passive] level and level cap +2.',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 4,
        effect: 'Ice damage increased by 30%.',
        importance: 1,
        importanceLabel: 'Very Good',
      },
      {
        level: 5,
        effect: '[Basic Attack], [Skill], [Ultimate Skill], and [Passive] level and level cap +2.',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 6,
        effect: 'While in [Frost Ash] state, all damage penetrates 20% ice resistance.',
        importance: 2,
        importanceLabel: 'Good',
      },
    ],
  },
  teamSkill: {
    name: 'Combination Skill',
    activationCondition: 'When the team contains 2 [Sapphire] characters or 2 [Ice] characters',
    effects: [
      'Own attack power increased by 10%',
      'At the start of battle, every 500 attack power increases own critical damage by 7.5%, stacking up to 6 times (maximum 45% crit damage bonus)',
    ],
  },
  teamSynergy: {
    goodWith: [
      'Naiya - Ice buffer that provides team damage amplification',
      'Gaia - Healer to sustain HP during Frost Ash state HP drain',
      'Thor - Thor provides shield to sustain Nina.',
    ],
    note: 'Nina can work with any team, only if Gaia is there. Gaia will help Nina keep doing damage. Thor is the 2nd option if you do not have Gaia, but no one comes close to Gaia!',
  },
};
