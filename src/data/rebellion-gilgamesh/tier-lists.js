// Rebellion Gilgamesh Tier List Data
// Rankings derived from the per-character reviews "兔之卷·角色篇" by 兔子pr
// (same author as the GameKee 节奏榜, updated 2025-08-26). Each character is
// rated 1–6 stars separately for PvE and PvP; those star ratings are grouped
// into tiers here. Character identity is mapped to our DB via each entry's
// `slug` field, so the Chinese names in the source map to our English `name`s.
//
// Star → tier mapping:
//   6★ → S  |  5★ → A  |  4★ → B  |  3★ → C  |  1–2★ → D  |  "-" → omitted
//
// ⚠️ A few source entries use community nicknames that don't map cleanly to a
//    DB character (无头, 坏坏公主, 绿色萝莉, 大只炎魔, 泳装幽灵) — those are
//    omitted rather than guessed. Do NOT fabricate placements.

export const TIER_SOURCE = '兔之卷·角色篇 character reviews (兔子pr)';
export const TIER_LAST_UPDATED = '2025-08-26';

export const TIER_DEFINITIONS = {
  S: {
    label: 'S',
    stars: 6,
    description:
      'Meta-defining. The absolute top pick in their mode — often irreplaceable and dominant across content.',
  },
  A: {
    label: 'A',
    stars: 5,
    description:
      'Excellent. Top-tier performance that anchors a team and is well worth pulling or building.',
  },
  B: {
    label: 'B',
    stars: 4,
    description:
      'Strong and reliable. Solid picks that perform well in the right team comp.',
  },
  C: {
    label: 'C',
    stars: 3,
    description:
      'Average or situational. Usable but generally outclassed by the tiers above.',
  },
  D: {
    label: 'D',
    stars: 2,
    description:
      'Weak or niche (1–2 stars). Limited use; mostly outclassed by the rest of the roster.',
  },
};

export const TIER_ORDER = ['S', 'A', 'B', 'C', 'D'];

// PvE Tier List — story, events, seal battles, raids.
export const PVE_TIER_LIST = {
  key: 'pve',
  tabLabel: 'PvE',
  name: 'PvE Tier List',
  lastUpdated: TIER_LAST_UPDATED,
  source: TIER_SOURCE,
  description:
    'Character performance in PvE content — story, events, seal battles, raids and alliances. Healers/utility skew higher when survival is a concern; once your gear is solid, supports may drop a tier in practice.',
  note:
    'Derived from the 兔之卷·角色篇 review star ratings (★★★★★★ = S … ★★/★ = D). Characters rated "-" in the source are omitted. A few nickname-only entries from the source are not yet mapped to our database.',
  tiers: {
    S: [
      { name: 'Nekomura Hongye', stars: 6 },
    ],
    A: [
      { name: 'Summer Liberation Lui Rin', stars: 5 },
      { name: 'Marriage Instructor Anna', stars: 5 },
      { name: 'Bride Intern Amel', stars: 5 },
      { name: 'Secretary Lui Rin', stars: 5 },
      { name: 'Urdland Blake', stars: 5 },
      { name: 'Mier Don Quixote', stars: 5 },
      { name: 'Amel', stars: 5 },
    ],
    B: [
      { name: 'Yasena Morgan Le Fay', stars: 4 },
      { name: 'Chocolate Beibeko', stars: 4 },
      { name: 'Avril', stars: 4 },
      { name: 'Vivian', stars: 4 },
      { name: 'Lucky Money Oni - Julen', stars: 4 },
      { name: "Bloodfang Fei'er", stars: 4 },
      { name: 'Roland (Alt)', stars: 4 },
      { name: 'Roland', stars: 4 },
      { name: 'Julen', stars: 4 },
      { name: 'Metori', stars: 4 },
    ],
    C: [
      { name: 'Yuri', stars: 3 },
      { name: 'Mafuretto', stars: 3 },
      { name: 'Holy Lance Inlia', stars: 3 },
      { name: 'Christmas Mozarela', stars: 3 },
      { name: 'Didian', stars: 3 },
      { name: 'Berubedo', stars: 3 },
      { name: 'Anna Blacksnow', stars: 3 },
      { name: 'An Megma', stars: 3 },
      { name: 'Inlia', stars: 3 },
      { name: 'Koge', stars: 3 },
      { name: 'Lunchun', stars: 3 },
      { name: 'Quelou', stars: 3 },
      { name: 'Fenghua', stars: 3 },
    ],
    D: [
      { name: 'Gozona', stars: 2 },
      { name: 'Li Wanxiang', stars: 2 },
      { name: 'Eleven', stars: 2 },
      { name: 'Primordial Lilith, the Battledore Demon', stars: 2 },
      { name: 'Jixia', stars: 2 },
      { name: 'Oru Baid', stars: 2 },
      { name: 'Bloodcow Fifi', stars: 2 },
      { name: 'Beibeko', stars: 2 },
      { name: 'Inova', stars: 2 },
      { name: 'Hikari', stars: 2 },
      { name: 'Falei', stars: 2 },
      { name: 'Stalwart Airi', stars: 2 },
      { name: 'Yaya', stars: 2 },
      { name: 'Mu Renier', stars: 2 },
      { name: 'Furaiya', stars: 1 },
      { name: 'Ulrika', stars: 1 },
      { name: 'Ning', stars: 1 },
      { name: 'Lilith', stars: 1 },
      { name: 'Sherry', stars: 1 },
      { name: 'Jieka', stars: 1 },
      { name: 'Noel', stars: 1 },
      { name: 'Chunya', stars: 1 },
    ],
  },
};

// PvP Tier List — arena (solo & guild).
export const PVP_TIER_LIST = {
  key: 'pvp',
  tabLabel: 'PvP',
  name: 'PvP Tier List',
  lastUpdated: TIER_LAST_UPDATED,
  source: TIER_SOURCE,
  description:
    'Character performance in PvP arena content (solo and guild). Opening-move value, AoE, control and ST generation matter most here — the meta favours fast, aggressive openers.',
  note:
    'Derived from the 兔之卷·角色篇 review star ratings. Several PvE-focused supports drop here, while control/AoE specialists rise.',
  tiers: {
    S: [],
    A: [
      { name: 'Summer Liberation Lui Rin', stars: 5 },
      { name: 'Chocolate Beibeko', stars: 5 },
      { name: 'Vivian', stars: 5 },
      { name: 'Primordial Lilith, the Battledore Demon', stars: 5 },
    ],
    B: [
      { name: 'Marriage Instructor Anna', stars: 4 },
      { name: 'Bride Intern Amel', stars: 4 },
      { name: 'Secretary Lui Rin', stars: 4 },
      { name: 'Li Wanxiang', stars: 4 },
      { name: 'Didian', stars: 4 },
      { name: 'Urdland Blake', stars: 4 },
      { name: 'Mier Don Quixote', stars: 4 },
      { name: 'Lucky Money Oni - Julen', stars: 4 },
      { name: "Bloodfang Fei'er", stars: 4 },
      { name: 'Amel', stars: 4 },
      { name: 'Lilith', stars: 4 },
      { name: 'Eleven', stars: 4 },
    ],
    C: [
      { name: 'Yasena Morgan Le Fay', stars: 3 },
      { name: 'Mafuretto', stars: 3 },
      { name: 'Mu Renier', stars: 3 },
      { name: 'Holy Lance Inlia', stars: 3 },
      { name: 'Avril', stars: 3 },
      { name: 'Christmas Mozarela', stars: 3 },
      { name: 'Berubedo', stars: 3 },
      { name: 'Anna Blacksnow', stars: 3 },
      { name: 'An Megma', stars: 3 },
      { name: 'Inlia', stars: 3 },
      { name: 'Metori', stars: 3 },
      { name: 'Roland', stars: 3 },
      { name: 'Beibeko', stars: 3 },
    ],
    D: [
      { name: 'Nekomura Hongye', stars: 2 },
      { name: 'Yuri', stars: 2 },
      { name: 'Furaiya', stars: 2 },
      { name: 'Roland (Alt)', stars: 2 },
      { name: 'Julen', stars: 2 },
      { name: 'Oru Baid', stars: 2 },
      { name: 'Bloodcow Fifi', stars: 2 },
      { name: 'Fenghua', stars: 2 },
      { name: 'Sherry', stars: 1 },
      { name: 'Ulrika', stars: 1 },
      { name: 'Makusu', stars: 1 },
      { name: 'Koge', stars: 1 },
      { name: 'Hikari', stars: 1 },
      { name: 'Lunchun', stars: 1 },
      { name: 'Quelou', stars: 1 },
    ],
  },
};

export const ALL_TIER_LISTS = {
  pve: PVE_TIER_LIST,
  pvp: PVP_TIER_LIST,
};
