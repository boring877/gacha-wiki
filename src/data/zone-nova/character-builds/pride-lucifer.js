// Pride-Lucifer Build - Zone Nova Character Build
// SSR Chaos character - Defense Scaling Warrior Tank/Shield

export const prideLuciferBuild = {
  name: 'Pride-Lucifer',
  role: 'Tank / DPS',
  buildType: 'Chaos Defense Tank (Shield & Pride Stacks)',
  description:
    'Pride-Lucifer is a defense-scaling Chaos Warrior That Counter PVP Meta AUTO ATTACK, And provides massive team shields, damage reduction. Her enhanced ultimate deals Quite Strong AOE damage..',
  skillPriority: [
    {
      skill: 'Ultimate: The End of Pain',
      priority: 1,
      level: 'Level 10',
      reason: 'Powerful team shielding, damage reduction buff, and enhanced ultimate with massive AOE damage',
      description:
        'Energy Cost: 3\nAll allied characters gain [Armour of Pride]: Grants a shield equal to Lucifer\'s defense 388.6% and reduces damage taken by 48.6% for 10 seconds. Enhanced Ultimate (Cost: 2): Grants all allied characters a shield equal to 510.1% of their defense and reduces damage taken by 58.6% for 5 seconds. Unleashes a dimensional slash at the target location, dealing chaos damage equal to the user\'s defense 832.9% to all enemy units.',
    },
    {
      skill: 'Passive: No need to say more',
      priority: 2,
      level: 'Level 10',
      reason: 'Core defense stacking ability - gains Pride stacks on skill use, increasing defense by 11.5% per stack, max 8 stacks',
      description:
        'Each time Lucifer uses a skill, she gains 1 stack of [Pride], increasing her defense by 11.5%, up to a maximum of 8 stacks, lasting until the end of battle.',
    },
    {
      skill: 'Auto Skill: Perfect Suppression',
      priority: 3,
      level: 'Level 10',
      reason: 'Main damage dealer, shield generator, and Pride stack builder',
      description:
        'Cooldown: 5.0s\nDeals chaos damage equal to 632.9% of the target\'s defense, gains 1 stack of [Pride], and gains a shield equal to 97.2% of the target\'s defense.',
    },
    {
      skill: 'Normal Attack: Dawn Slash',
      priority: 4,
      level: 'Level 7',
      reason: 'Basic filler damage that scales with defense',
      description: 'Cooldown: 1.5s\nDeals chaos damage equal to 120% of the user\'s own defense to the designated enemy unit.',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Pride or Tsundere?',
      effect:
        "Pride-Lucifer's exclusive memory card. Provides massive HP and Defense increase with additional normal attack damage reduction - perfect for her defense-scaling tank playstyle.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'lucifercard.jpg',
      memoryStats: { hp: '6,600', attack: '480', defense: '690' },
      slug: 'pride-or-tsundere',
      description:
        'HP increased by 32%, Defense increased by 60%, When attacked by a normal attack, damage taken is reduced by 30%',
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'Wrong Appearance Timing',
      effect:
        "SSR memory card that provides massive Defense increase, HP recovery, and damage boost when HP is above 50% - perfect synergy for Pride-Lucifer's defense-scaling tank playstyle.",
      characterSpecific: false,
      memoryImage: 'Apepcard.jpg',
      memoryStats: { hp: '8,800', attack: '480', defense: '690' },
      slug: 'wrong-appearance-timing',
      description:
        'Defense increased by 64%, When HP is above 50%, after the wearer attacks, recover 2% max HP, When HP is above 50%, damage taken reduced by 10%, damage dealt increased by 40%',
    },
  ],
  runes: {
    primary: 'Defense%',
    secondary: 'HP%',
    stats: ['Defense%', 'HP%'],
    additionalStats: ['Defense', 'HP'],
    buildNote:
      'Defense is the most important stat for Pride-Lucifer as all her skills scale with defense. Stack as much Defense% as possible, then supplement with HP% for survivability.',
    recommendedSets: [
      {
        name: 'Shattered Foundation 4-set + Tide 2-set',
        englishName: 'Shattered Foundation [Protection] 4-piece + Tide [Energy] 2-piece',
        mainRune: 'Shattered-Foundation',
        secondaryRune: 'Tide',
        mainRune2Piece: '2-piece: Defense +12%',
        mainRune4Piece: '4-piece: When attacked, deal damage back to attacker equal to 20% of own defense',
        secondaryRuneEffect: '2-piece: Defense increased by 12%',
      },
    ],
    alternativeSets: [
      {
        name: 'Zahn 4-set + Shattered Foundation 2-set',
        englishName: 'Zahn [Might] 4-piece + Shattered Foundation [Protection] 2-piece',
        mainRune: 'Zahn',
        secondaryRune: 'Shattered-Foundation',
        mainRune2Piece: '2-piece: HP +8%',
        mainRune4Piece: '4-piece: After Ultimate: Take 5% less damage (10s)',
        secondaryRuneEffect: '2-piece: Defense +12%',
      },
      {
        name: 'Tide 2-set + Shattered Foundation 2-set + Zahn 2-set + Epsilon 2-set',
        englishName:
          '2-set Tide [Energy] + 2-set Shattered Foundation + 2-set Zahn + 2-set Epsilon',
        tide: {
          effect: 'Defense increased by 12%',
        },
        shatteredFoundation: {
          effect: 'Defense +12%',
        },
        zahn: {
          effect: 'HP +8%',
        },
        epsilon: {
          effect: 'Defense +8%',
        },
      },
      {
        name: 'Tide 4-set + Zahn 2-set',
        englishName: 'Tide [Energy] 4-piece + Zahn [Might] 2-piece',
        mainRune: 'Tide',
        secondaryRune: 'Zahn',
        mainRune2Piece: '2-piece: Defense increased by 12%',
        mainRune4Piece:
          "4-piece: Within 10 seconds after combat starts, your team's energy gain efficiency is increased by 30%",
        secondaryRuneEffect: '2-piece: HP +8%',
        description: 'Focus on faster ultimate cycling for more frequent shields and enhanced ultimate',
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
      description: 'Defense % for maximum shield scaling and damage output',
    },
    5: {
      name: 'Position 5 — Variable Main Stats',
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
      description: 'Chaos % for more damage, or Defense % for more tankiness - both work well',
    },
    6: {
      name: 'Position 6 — Variable Main Stats',
      recommendedStat: 'Defense (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description: 'Defense % for maximum survivability and shield strength',
    },
  },
  awakenings: {
    keyMilestones: [
      {
        level: 1,
        effect:
          'At the start of battle, all allies gain the [Arrogance of Pride] effect',
        importance: 1,
        importanceLabel: 'Very Good',
      },
      {
        level: 2,
        effect:
          'After Pride-Lucifer uses her ultimate skill, all allies gain the Blessing of Pride, which restores all allies\' maximum HP equal to 1% of their maximum HP + 150 HP per second for 5 seconds after they take damage',
        importance: 1,
        importanceLabel: 'Very Good',
      },
      {
        level: 3,
        effect: '[Normal Attack], [Skill], [Ultimate] and [Passive] level and level cap +2',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 4,
        effect: 'Defense increased by 50%',
        importance: 2,
        importanceLabel: 'Good',
      },
      {
        level: 5,
        effect: '[Normal Attack], [Skill], [Ultimate] and [Passive] level and level cap +2',
        importance: 3,
        importanceLabel: 'Mid',
      },
      {
        level: 6,
        effect:
          'Increases all resistances by 20%, chaos resistance by an additional 20%, and grants 4 stacks of Pride upon entering the arena',
        importance: 1,
        importanceLabel: 'Very Good',
      },
    ],
  },
  teamSkill: {
    name: 'Combination Skill',
    activationCondition: 'When the team contains [Bicta Tower] characters or [Chaos] characters',
    effects: [
      'Defense increased by 10%',
      'HP increased by 10%',
      'At the start of battle, every 500 defense reduces damage taken by the entire team by 1.5%, up to 8 times',
    ],
  },
  teamSynergy: {
    goodWith: [
      'She is strong single unit can pair with mostly everyone but need to have atleast 1 chaos unit',
    ],
    note: 'She there to counter the PVP Meta tbh',
  },
};
