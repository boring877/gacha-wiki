// Zone Nova Rune Sets Data
// Regenerated 2026-09-04 from live master data (equipment_info + equipment_passive_info
// set ids 101-114). Names/bonuses are the game's own localization (color tags stripped).
// The 4 element-damage sets (Kryos/Anemos/Hepha/Skota) are the newest wave.

const SETS = {
  Alpha: {
    name: 'Alpha',
    tag: 'Attack',
    chineseName: '阿爾法',
    image: 'Alpha.webp',
    twoPiece: 'Attack increases by 8%',
    fourPiece: 'Normal Attack damage increases by 30%',
  },
  Beth: {
    name: 'Beth',
    tag: 'Crit',
    chineseName: '貝絲',
    image: 'Beth.webp',
    twoPiece: 'Critical Rate increases by 6%',
    fourPiece: 'When HP is above 80%, Critical Damage increases by 24%',
  },
  Gimel: {
    name: 'Gimel',
    tag: 'DOT',
    chineseName: '吉梅爾',
    image: 'Gimel.webp',
    twoPiece: 'Damage Over Time increased by 20%',
    fourPiece:
      'After dealing Damage Over Time, own Attack Power increases by 2%, stacking up to 10 times, lasting 5 seconds',
  },
  Daleth: {
    name: 'Daleth',
    tag: 'Healing',
    chineseName: '達萊特',
    image: 'Daleth.webp',
    twoPiece: 'Healing effect increases by 10%',
    fourPiece: 'At battle start, instantly gain 1 energy',
  },
  Epsilon: {
    name: 'Epsilon',
    tag: 'Attack',
    chineseName: '埃普西隆',
    image: 'Epsilon.webp',
    twoPiece: 'Attack increases by 8%',
    fourPiece:
      'After casting an ULT, team damage increases by 10% for 10 seconds (identical passive effects do not stack)',
  },
  Poki: {
    name: 'Poki',
    tag: 'Def',
    chineseName: '魄基',
    image: 'Poki.webp',
    twoPiece: 'Defense increases by 12%',
    fourPiece: 'Shield effect increases by 20%',
  },
  Zane: {
    name: 'Zane',
    tag: 'HP',
    chineseName: '札恩',
    image: 'Zane.webp',
    twoPiece: 'HP increases by 8%',
    fourPiece: 'After casting an ULT, self damage taken decreases by 5% for 10 seconds',
  },
  Het: {
    name: 'Het',
    tag: 'Pursue',
    chineseName: '赫特',
    image: 'Het.webp',
    twoPiece: 'Pursue Damage increased by 20%',
    fourPiece: 'After dealing Pursue Damage, Critical Rate increases by 15%, lasting 10 seconds',
  },
  Iota: {
    name: 'Iota',
    tag: 'Vulnerability',
    chineseName: '約塔',
    image: 'Iota.webp',
    twoPiece: 'Attack Power increased by 8%',
    fourPiece:
      'When the wearer is a Disruptor, dealing damage with an Ultimate Skill increases the target’s damage taken by 10% for 5 seconds (does not stack)',
    classRestriction: 'Disruptor',
  },
  Kappa: {
    name: 'Kappa',
    tag: 'Energy',
    chineseName: '卡帕',
    image: 'Kappa.webp',
    twoPiece: 'Defense increased by 12%',
    fourPiece:
      'Within 10 seconds of battle start, the team’s Energy gain efficiency increases by 30% (does not stack; other 4-piece Daleth set effects in the team are disabled)',
  },
  Kryos: {
    name: 'Kryos',
    tag: 'Frost Damage',
    chineseName: '克里奧斯',
    image: 'Kryos.webp',
    isNew: true,
    twoPiece: 'Frost damage increased by 10%',
    fourPiece:
      'For every 10% reduction in Normal Attack cooldown, Frost damage is increased by 4% and Critical Damage is increased by 3.6%, up to a maximum of 5 stacks',
  },
  Anemos: {
    name: 'Anemos',
    tag: 'Storm Damage',
    chineseName: '阿涅莫斯',
    image: 'Anemos.webp',
    isNew: true,
    twoPiece: 'Storm damage increased by 10%',
    fourPiece:
      'After dealing Storm attribute skill damage, the user’s Storm damage is increased by 4% and the target’s Defense is reduced by 6% for 5 seconds, stacking up to 5 times',
  },
  Hepha: {
    name: 'Hepha',
    tag: 'Blaze Damage',
    chineseName: '赫法',
    image: 'Hepha.webp',
    isNew: true,
    twoPiece: 'Blaze damage increased by 10%',
    fourPiece:
      'When dealing Blaze attribute Ultimate Skill damage, Critical Rate is increased by 12% and Attack Power is increased by 16%',
  },
  Skota: {
    name: 'Skota',
    tag: 'Chaos Damage',
    chineseName: '斯科塔',
    image: 'Skota.webp',
    isNew: true,
    twoPiece: 'Chaos damage increased by 10%',
    fourPiece:
      'Attack Power increased by 12%. Chaos resistance penetration increased by 12% during the release of the Ultimate Skill (triggers at most once every 5 seconds)',
  },
};

// Legacy fan-name keys kept so old references still resolve
const ALIASES = {
  'Shattered-Foundation': 'Poki',
  Zahn: 'Zane',
  Hert: 'Het',
  'Hert-Pursuit-Damage': 'Het',
  'Gimel-Continuous-Damage': 'Gimel',
  Giants: 'Iota',
  Tide: 'Kappa',
};

export const RUNE_SETS = { ...SETS };
for (const [alias, key] of Object.entries(ALIASES)) {
  RUNE_SETS[alias] = RUNE_SETS[key];
}

export const RUNE_SET_LIST = Object.values(SETS);

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
