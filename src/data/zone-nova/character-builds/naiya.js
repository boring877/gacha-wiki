// Naiya Build - Zone Nova Character Build
// SSR Ice character - ATK Scaling Hyper-Carry Buffer

export const naiyaBuild = {
  name: 'Naiya',
  role: 'Buffer',
  buildType: 'ATK Scaling Buffer',
  description:
    'Naiya is a buffer who focuses on buffing the highest ATK character on the team. Her buffs scale with her ATK power - the higher her ATK, the stronger the ATK she provides. She offers ATK increase, Crit Damage buffs, energy recovery when Enemy die, and massive total damage boosts. Her Dupe 4 awakening is strong. You need to keep in mind that if she have the highest atk power she going to buff her self, so you need to manage that !!',
  skillPriority: [
    {
      skill: 'Auto Skill: War Intent Detection',
      priority: 1,
      level: 'Level 10',
      reason:
        "Core buff ability - grants 168% ATK buff to highest ATK character, scales directly with Naiya's ATK",
      description:
        "Auto-trigger: 5.0s\nThe friendly character with the highest attack power gains [Battle Intent]. Increases attack power by 168%, but the increased attack power cannot exceed 84% of Naiya's attack power. Lasts 15 seconds",
    },
    {
      skill: 'Ultimate: Hyper-Carry Awakening',
      priority: 2,
      level: 'Level 10',
      reason: 'Massive team buff - 36% ATK + 53.6% Crit Damage to all allies, plus good damage',
      description:
        "Energy Cost: 3\nDeals 480% attack power Ice damage to enemy unit. [Interrupts] their casting skill. Increases all friendly units' attack power by 36% and crit damage by 53.6% for 10 seconds",
    },
    {
      skill: 'Passive: Tactical Analysis',
      priority: 3,
      level: 'Level 10',
      reason:
        'Energy recovery and damage amp when Battle Intent character kills enemies - crucial for team cycling',
      description:
        'When a character with [Battle Intent] kills an enemy, damage increases by 17% for 10 seconds, max 3 stacks. Immediately recovers 1 energy point for the entire team, can trigger once per second maximum',
    },
    {
      skill: 'Normal Attack: Frost Strike',
      priority: 4,
      level: 'Level 7',
      reason: 'Basic damage filler, benefits from ATK scaling',
      description: 'Deals 120% attack power as ice damage to enemy unit',
    },
  ],
  recommendedMemoryCards: [
    {
      name: 'Frost Dominion',
      effect:
        "Naiya's exclusive memory card. +40% Attack Power and after she uses ultimate, entire team gains +40% ultimate damage for 30 seconds. Perfectly complements her buffer role.",
      priority: 'Highly Recommended',
      characterSpecific: true,
      memoryImage: 'naiyacard.jpg',
      memoryStats: { hp: '6,000', attack: '600', defense: '600' },
      description:
        'Attack power increased by 40%. After the equipped character releases ultimate skill, the entire team gains ultimate skill damage increased by 40%, lasting 30 seconds',
    },
  ],
  alternativeMemoryCards: [
    {
      name: 'Sleep Treasure',
      effect:
        "SR memory card that provides team damage increase (24%) and additional crit damage chance (50% chance for +20% crit damage), excellent for boosting Naiya's team-oriented buffing role.",
      characterSpecific: false,
      memoryImage: 'Zashiki-warashicard.jpg',
      memoryStats: { hp: '5,000', attack: '500', defense: '500' },
      description:
        'After releasing ultimate: Team damage increases by 24% for 10 seconds. Additionally: Has 50% chance to make team critical damage additionally increase by 20% for 10 seconds',
    },
  ],
  runes: {
    primary: 'Attack',
    secondary: 'Critical Rate',
    stats: ['ATK%', 'ATK'],
    additionalStats: ['Crit Rate%', 'Crit DMG%'],
    recommendedSets: [
      {
        name: 'Epsilon 4-piece + Alpha 2-piece',
        englishName: 'Epsilon 4-piece + Alpha 2-piece',
        mainRune: 'Epsilon',
        secondaryRune: 'Alpha',
        mainRune2Piece: '2-piece: Attack Power +8%',
        mainRune4Piece:
          '4-piece: After activating ultimate skill, entire team damage increased by 10%, lasts 10 seconds',
        secondaryRuneEffect: '2-piece: Attack Power +8%',
      },
      {
        name: 'Epsilon 4-piece + Giants [Vulnerability] 2-piece',
        englishName: 'Epsilon 4-piece + Giants [Vulnerability] (巨人 [脆弱]) 2-piece',
        mainRune: 'Epsilon',
        secondaryRune: 'Giants',
        mainRune2Piece: '2-piece: Attack Power +8%',
        mainRune4Piece:
          '4-piece: After activating ultimate skill, entire team damage increased by 10%, lasts 10 seconds',
        secondaryRuneEffect: '2-piece: Attack power increased by 8%',
      },
    ],
    alternativeSets: [
      {
        name: 'Epsilon 4-piece + Beth 2-piece',
        englishName: 'Epsilon 4-piece + Beth 2-piece',
        mainRune: 'Epsilon',
        secondaryRune: 'Beth',
        mainRune2Piece: '2-piece: Attack Power +8%',
        mainRune4Piece:
          '4-piece: After activating ultimate skill, entire team damage increased by 10%, lasts 10 seconds',
        secondaryRuneEffect: '2-piece: Crit Rate +6%',
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
      description: 'Attack % for maximum scaling on her buffs and damage',
    },
    5: {
      name: 'Position 5 — Variable Main Stats',
      recommendedStat: 'Attack (%)',
      availableStats: [
        'Chaos Attribute Damage (%)',
        'Fire Attribute Damage (%)',
        'Ice Attribute Damage (%)',
        'Holy Attribute Damage (%)',
        'Attack (%)',
        'HP (%)',
        'Defense (%)',
      ],
      description: 'Attack % for maximum scaling on her buffs and damage',
    },
    6: {
      name: 'Position 6 — Variable Main Stats',
      recommendedStat: 'Attack (%)',
      availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
      description: 'Attack % for maximum buff scaling and damage output',
    },
  },
  teamSynergy: {
    goodWith: ['Chiya', 'Nina', 'Shanna', 'Freya', 'Hela', 'she also alright with anyone tbh'],
    note: 'Naiya need to be 2nd highest ATK character in the team, so she can give the carry the buff. If she is the highest she would give her self the buff, its quite hard to manage that but its possible.',
  },
};
