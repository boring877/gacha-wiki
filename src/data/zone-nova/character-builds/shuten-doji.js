// Shuten-doji Build - Zone Nova Character Build
// SSR Wind character - Wind Evil DOT DPS

export const shutenDojiBuild = {
  name: 'Shuten-doji',
  role: 'DPS',
  buildType: 'Wind DOT DPS',
  description:
    'Shuten-doji is a Wind Mage DPS focused on damage over time [Wind Evil and Evil Bone] . Her passive provides massive damage increase (+62.9%) against Wind Evil/Bone enemies while also reducing damage taken (-48.6%).',
  skillPriority: [
    {
      skill: 'Passive: Those who obey me live',
      priority: 1,
      level: 'Level 10',
      reason:
        'Massive damage amplification (+62.9% damage dealt) and survivability (+48.6% damage reduction) against targets with Wind Evil or Evil Bone. Always active when your DOTs are applied.',
      description:
        "When dealing damage: If the opponent has the [Wind Evil] or [Evil Bone] effect, Shuten-doji's damage dealt to them increases by 62.9%. When taking damage: If the opponent has the [Wind Evil] or [Evil Bone] effect, damage dealt to Shuten-doji decreases by 48.6%.",
    },
    {
      skill: 'Ultimate: Scattered Flower Gun',
      priority: 2,
      level: 'Level 10',
      reason:
        'Core damage skill that applies [Evil Bone] when target has full [Wind Evil] stacks. Evil Bone deals massive 221.5% ATK wind damage per second for 5 seconds.',
      description:
        'Energy Cost: 2\nCooldown: 1.0s\nDeals 244.3% attack power as wind damage to the designated enemy unit and nearby enemies. When the target has full stacks of [Wind Evil], additionally inflicts [Evil Bone]. If the target has less than 4 stacks of [Wind Evil], then 1 stack of [Wind Evil] will be applied. Evil Bone: Deals 221.5% attack power as wind damage per second, up to 1 stack, lasting 5 seconds.',
    },
    {
      skill: 'Auto Skill: Piercing Gun',
      priority: 3,
      level: 'Level 10',
      reason:
        'Primary [Wind Evil] stack application with AOE damage. Essential for building up to 4 stacks to enable [Evil Bone] from Ultimate.',
      description:
        'Cooldown: 5.0s\nTargeting a designated enemy unit, deals 121.5% attack power as wind damage to a rectangular area in front of the target and inflicts 1 stack of [Wind Evil], lasting 10 seconds. Wind Evil: Deals 24.3% attack power as wind damage per second, stacking up to 4 times, lasting 10 seconds.',
    },
    {
      skill: 'Normal Attack: Storm Cannon',
      priority: 4,
      level: 'Level 7',
      reason:
        'Basic filler damage with AOE. Lower priority but helps maintain DPS between skill cooldowns.',
      description:
        'Cooldown: 2.0s\nDeals 72.9% attack power as wind damage to the designated enemy unit and nearby enemy units.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Unreserved Love',
      effect:
        "Shuten-doji's exclusive memory card. Provides 40% ATK, 40% DOT damage increase, 24% damage taken debuff on DOT, and 35% bonus damage to shielded enemies.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'Shuten-dojicard',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      slug: 'unreserved-love',
      description:
        'Attack power increased by 40%. Damage over time increased by 40%. When dealing damage over time, the enemy takes 24% more damage for 3 seconds. Damage dealt to enemies with shields is increased by 35%.',
      spendingNote:
        'Best one for maximizing her DOT potential. The 40% DOT damage boost and 24% damage taken debuff works well with her kit.',
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'Revolutionary Restructuring',
      effect:
        "Cleopatra's memory card. Provides 40% ATK and adds [Erosion] DOT effect when skills hit - stacks up to 5 layers of chaos damage over time.",
      characterSpecific: false,
      memoryImage: 'Cleopatracard',
      memoryStats: { hp: '5,040', attack: '780', defense: '474' },
      slug: 'revolutionary-restructuring',
      description:
        'Attack increases by 40%. Infiltration Effect: When skill hits target, additionally adds one layer [Erosion]. [Erosion]: Every 1 second deals 15% Chaos damage, maximum 5 layers, lasts 10 seconds.',
      note: 'More DOT DAMAGE ?.',
    },
  ],
  runes: {
    primary: 'Attack%',
    secondary: 'Penetration',
    stats: ['ATK%', 'Penetration'],
    additionalStats: ['ATK', 'HP', 'DEF'],
    buildNote:
      'As a DOT DPS, prioritize ATK% and Penetration. The Gimel [Continuous Damage] set is essential for maximizing her Wind Evil damage. Crit stats are less valuable since DOT damage does not crit.',
    recommendedSets: [
      {
        name: 'Gimel 4-piece + Alpha 2-piece',
        englishName: 'Gimel [Continuous Damage] 4-piece + Alpha 2-piece',
        mainRune: 'Gimel-Continuous-Damage',
        secondaryRune: 'Alpha',
        mainRune2Piece: '2-piece: Continuous damage increased by 20%',
        mainRune4Piece:
          '4-piece: After dealing continuous damage, own attack power increases by 2%, can stack up to 10 layers, lasts 5 seconds (up to 20% ATK)',
        secondaryRuneEffect: '2-piece: Attack Power +8%',
        note: 'Best set for maximizing DOT damage. The 4-piece stacking ATK bonus synergizes perfectly with her constant Wind Evil damage.',
      },
    ],
  },
  mainStatsByPosition: {
    1: {
      name: 'Position 1 - Fixed Main Stat',
      stat: 'HP (Flat Value)',
      description: 'Always HP - no other options',
      isFixed: true,
    },
    2: {
      name: 'Position 2 - Fixed Main Stat',
      stat: 'Attack (Flat Value)',
      description: 'Always Attack - no other options',
      isFixed: true,
    },
    3: {
      name: 'Position 3 - Fixed Main Stat',
      stat: 'Defense (Flat Value)',
      description: 'Always Defense - no other options',
      isFixed: true,
    },
    4: {
      name: 'Position 4 - Variable Main Stats',
      recommendedStat: 'Attack (%)',
      availableStats: [
        'Healing Effectiveness (%)',
        'Critical Rate (%)',
        'Critical Damage (%)',
        'Attack Penetration (%)',
        'Attack (%)',
        'HP (%)',
        'Defense (%)',
      ],
      description: 'ATK% is best for maximizing DOT damage. Penetration is also good.',
    },
    5: {
      name: 'Position 5 - Variable Main Stats',
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
      description: 'Wind Damage% provides a flat increase which is good.',
    },
    6: {
      name: 'Position 6 - Variable Main Stats',
      recommendedStat: 'Attack (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description: 'ATK% to maximize DOT scaling.',
    },
  },
  awakenings: {
    keyMilestones: [
      {
        level: 1,
        effect:
          'At the start of battle, the first use of an Ultimate skill does not consume energy. Each time a character skill is used, it can apply 2 stacks of [Wind Evil]. After each use of a character skill, damage taken is reduced by 30% for 3 seconds.',
        importance: 2,
        importanceLabel: 'Good',
      },
      {
        level: 2,
        effect:
          'Upon entering the battlefield, immediately deal 160% attack power as wind damage to all enemies and apply 2 stacks of [Wind Evil]. At the same time, all allies gain 50% [Block] for 10 seconds.',
        importance: 2,
        importanceLabel: 'Good',
      },
      {
        level: 3,
        effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 4,
        effect: 'Wind damage increased by 30%.',
        importance: 2,
        importanceLabel: 'Good',
      },
      {
        level: 5,
        effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 6,
        effect: "All damage dealt by Shuten-doji ignores 25% of the target's elemental resistance.",
        importance: 2,
        importanceLabel: 'Very Good',
      },
    ],
  },
  teamSkill: {
    name: 'Combination Skill',
    activationCondition:
      'When the team contains 2 [Pingjing City] characters or 2 [Wind] characters',
    effects: [
      'Attack power increased by 15%',
      'At the start of battle, every 500 attack power increases damage over time by 7%, up to a maximum of 10 times (70% max)',
    ],
  },
  teamSynergy: {
    goodWith: [ "Horus", "Shu", "Morgan", "Guinevere", "Hera", "Odin"
    ],
    note: "Shuten seems a bit weak compared to Odin, Odin is a better version of her. She needs a full DOT team to work around increasing the DOT. So far we do not have a buffer or debuffer that synergizes well with DOT characters.",
  },
};
