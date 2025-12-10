// Zone Nova Rune Sets Data
// Centralized rune data to avoid hardcoding in builds

export const RUNE_SETS = {
  Alpha: {
    name: 'Alpha',
    chineseName: '阿尔法符',
    image: 'Alpha.jpg',
    twoPiece: 'Attack Power +8%',
    fourPiece: 'Basic Attack Damage +30%',
  },
  'Shattered-Foundation': {
    name: 'Shattered Foundation',
    chineseName: '碎基',
    image: 'Shattered-Foundation.jpg',
    twoPiece: 'Defense +12%',
    fourPiece: 'Shield Effectiveness +20%',
  },
  Beth: {
    name: 'Beth',
    chineseName: '贝丝',
    image: 'Beth.jpg',
    twoPiece: 'Critical Hit Rate +6%',
    fourPiece: 'When HP >80%: Critical Hit Damage +24%',
  },
  Zahn: {
    name: 'Zahn',
    chineseName: '札恩',
    image: 'Zahn.jpg',
    twoPiece: 'HP +8%',
    fourPiece: 'After Ultimate: Take 5% less damage (10s)',
  },
  Daleth: {
    name: 'Daleth',
    chineseName: '达莱特',
    image: 'Daleth.jpg',
    twoPiece: 'Healing Effectiveness +10%',
    fourPiece: 'Battle Start: Gain 1 Energy immediately',
  },
  Epsilon: {
    name: 'Epsilon',
    chineseName: '埃普西隆',
    image: 'Epsilon.jpg',
    twoPiece: 'Attack Power +8%',
    fourPiece:
      'After activating ultimate skill, entire team damage increased by 10%, lasts 10 seconds',
    note: 'Same passive effect cannot stack',
  },
  Hert: {
    name: 'Hert Extra Attack Damage',
    chineseName: '赫特追击伤害',
    image: 'Hert-Pursuit-Damage.jpg',
    twoPiece: 'Extra Attack damage increased by 20%',
    fourPiece:
      'After dealing Extra Attack damage, critical hit rate increases by 15%, lasts 10 seconds',
    note: 'This can only be obtained in guild raids',
  },
  'Gimel-Continuous-Damage': {
    name: 'Gimel Continuous Damage',
    chineseName: '吉梅尔持续伤害',
    image: 'Gimel-Continuous-Damage.jpg',
    twoPiece: 'Continuous damage increased by 20%',
    fourPiece:
      'After dealing continuous damage, own attack power increases by 2%, can stack up to 10 layers, lasts 5 seconds',
    note: 'This can only be obtained in guild raids',
  },
  Giants: {
    name: 'Giants [Vulnerability]',
    chineseName: '巨人 [脆弱]',
    image: 'Giants.jpg',
    twoPiece: 'Attack power increased by 8%',
    fourPiece:
      'When equipped character is "Debuff" class, casting ultimate skill damage causes targets to take 10% increased damage for 5 seconds',
    classRestriction: 'Debuffer',
    note: 'Same passive effects cannot stack. This can only be obtained in guild raids',
  },
  Tide: {
    name: 'Tide [Energy]',
    chineseName: '潮汐 [能量]',
    image: 'Tide.jpg',
    twoPiece: 'Defense increased by 12%',
    fourPiece:
      "Within 10 seconds after combat starts, your team's energy gain efficiency is increased by 30%",
    note: 'This effect cannot stack. Daleth 4-piece set effects in the team will be disabled. This can only be obtained in guild raids',
  },
  HP: {
    name: 'HP',
    chineseName: '生命',
    image: 'HP.jpg',
    twoPiece: 'HP increased by 10%',
    fourPiece: 'HP increased by an additional 15%',
  },
  DEF: {
    name: 'Defense',
    chineseName: '防御',
    image: 'DEF.jpg',
    twoPiece: 'Defense increased by 10%',
    fourPiece: 'Defense increased by an additional 15%',
  },
};

// Main stats by rune position (fixed for all characters)
export const MAIN_STATS_BY_POSITION = {
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
    availableStats: [
      'Healing Effectiveness (%)',
      'Critical Rate (%)',
      'Critical Damage (%)',
      'Attack Penetration (%)',
      'Attack (%)',
      'HP (%)',
      'Defense (%)',
    ],
    isFixed: false,
  },
  5: {
    name: 'Position 5 — Variable Main Stats',
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
    isFixed: false,
  },
  6: {
    name: 'Position 6 — Variable Main Stats',
    availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
    isFixed: false,
  },
};

// Helper to get rune set info
export function getRuneSet(runeKey) {
  return RUNE_SETS[runeKey] || null;
}

// Helper to build rune set recommendation with correct effects
export function buildRuneRecommendation(mainRuneKey, secondaryRuneKey, options = {}) {
  const mainRune = RUNE_SETS[mainRuneKey];
  const secondaryRune = RUNE_SETS[secondaryRuneKey];

  if (!mainRune || !secondaryRune) {
    console.warn(`Rune not found: ${!mainRune ? mainRuneKey : secondaryRuneKey}`);
    return null;
  }

  return {
    name: `${mainRune.name} 4-piece + ${secondaryRune.name} 2-piece`,
    englishName: `${mainRune.name} 4-piece + ${secondaryRune.name} 2-piece`,
    mainRune: mainRuneKey,
    secondaryRune: secondaryRuneKey,
    mainRune2Piece: `2-piece: ${mainRune.twoPiece}`,
    mainRune4Piece: `4-piece: ${mainRune.fourPiece}`,
    secondaryRuneEffect: `2-piece: ${secondaryRune.twoPiece}`,
    ...options,
  };
}

export default RUNE_SETS;
