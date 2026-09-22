// Gene-Sys: Adam banner timeline + summon reference, built from the decrypted
// DrawMachineData / DrawMachineGroupData / DrawSingleData / ActivityMissionTimeData
// tables (Patch pull 2026-09-22, D:/GeneSysAdam). Banner schedules are
// server-controlled: "since" marks the data wave a banner appeared in, not an
// exact start time. Featured units resolve against characters.js by slug.
import { gsaCharacters } from './characters.js';

const bySlug = Object.fromEntries(gsaCharacters.map(c => [c.slug, c]));

export const GSA_BANNERS_UPDATED = 'September 22, 2026';

// status: live | recent | launch | rotation
export const GSA_BANNERS = [
  {
    slug: 'lingering-echoes',
    name: 'Lingering Echoes',
    nameZh: '音行自鳴',
    kind: 'Dual Rate-Up',
    status: 'live',
    since: 'September 22, 2026',
    featured: ['qing-yin', 'leng-zhen'],
    pity: 120,
    eventToken: 'Gagaku Emblem',
    training: ['Qing Yin', 'Leng Zhen'],
    image: null,
    note: 'Running as of the September 22 data pull. Rate rows for a live banner are injected server-side; sibling dual banners run a shared featured bucket with a 120-pull featured guarantee.',
  },
  {
    slug: 'war-and-music',
    name: 'War & Music',
    nameZh: '戰爭與音樂',
    kind: 'Dual Rate-Up',
    status: 'recent',
    since: 'Launch week, September 2026',
    featured: ['elena', 'victoria'],
    pity: 120,
    eventToken: 'Phantom Emblem',
    training: ['Elena', 'Victoria', 'Alyna', 'Awana'],
    image: null,
    note: 'First entry of the post-launch event series. Its machines shipped preloaded in the launch tables, so the exact start date is server-side.',
  },
  {
    slug: 'lunar-splendor',
    name: 'Lunar Splendor of the Pleasure District',
    nameZh: '繁華遊廓的月之華',
    kind: 'Dual Rate-Up',
    status: 'launch',
    since: 'Launch, September 17, 2026',
    featured: ['komachi-sayaka', 'hijikata-chizuru'],
    pity: 120,
    eventToken: 'Moonflower Crest',
    training: ['Komachi Sayaka', 'Hijikata Chizuru', 'Fujiwara Arisa'],
    image: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Draw_Bg_20_1.webp',
    note: 'Launch banner. The exchange shop also stocks Moonflower Naginata and Footwear components for Hijikata Chizuru.',
  },
  {
    slug: 'black-gold-hunter',
    name: 'Black Gold Hunter: Cowgirl Belle',
    nameZh: '黑金獵人 - 乳牛貝兒',
    kind: 'Event Ticket Recruit',
    status: 'launch',
    since: 'Launch, September 17, 2026',
    featured: ['belle-clumsy-cowgirl'],
    pity: null,
    eventToken: null,
    training: ['Belle'],
    image: null,
    note: 'Ticket recruits from the Black Gold Hunter event; the ticket variant doubles the featured bucket shown in the client tables.',
  },
  {
    slug: 'heavens-door-connie',
    name: "Heaven's Door: Connie",
    nameZh: '天堂之門 - 昆妮',
    kind: 'Ticket Recruit',
    status: 'launch',
    since: 'Launch window, September 2026',
    featured: ['connie'],
    pity: null,
    eventToken: null,
    training: ['Connie'],
    image: null,
    note: "Recruits with Heaven's Door summon letters farmed from special missions. Connie's skill data only completed in the September 22 tables; her rating on the wiki was rescored then.",
  },
  {
    slug: 'heavens-door-jessica',
    name: "Heaven's Door: Jessica",
    nameZh: '天堂之門 - 潔西卡',
    kind: 'Ticket Recruit',
    status: 'launch',
    since: 'Launch, September 17, 2026',
    featured: ['jessica'],
    pity: null,
    eventToken: null,
    training: ['Jessica'],
    image: null,
    note: "Heaven's Door special missions award the summon letters.",
  },
  {
    slug: 'rate-up-rotation',
    name: 'Solo Rate-Up Rotation',
    nameZh: '限定召募',
    kind: 'Solo Rate-Up',
    status: 'rotation',
    since: 'Since launch',
    featured: ['ogino-rui', 'sugimoto-arina', 'milena', 'lin-lin', 'annabelle'],
    pity: 100,
    eventToken: null,
    training: [],
    image: null,
    note: 'Rotating solo rate-ups with a 100-pull featured guarantee: Ogino Rui, Sugimoto Arina, Milena, Lin Lin and Annabelle.',
  },
];

// Permanent summons (always available, not part of the timeline above).
export const GSA_PERMANENT = [
  {
    name: 'Standard Summon',
    nameZh: '一般召募',
    featured: [],
    desc: 'The rotating core pool. 100-pull featured guarantee; every 10th summon guarantees an SR or better.',
  },
  {
    name: 'Advanced Summon',
    nameZh: '精英召募',
    featured: ['amber', 'rachel'],
    desc: 'Elite pool focused on Amber and Rachel with a 120-pull featured guarantee and a wishlist pick.',
  },
  {
    name: 'Rookie Summon',
    nameZh: '新人召募',
    featured: ['takajou-ranka'],
    desc: 'One free summon for new accounts; the client tables list SR Takajou Ranka as its guarantee.',
  },
  {
    name: 'Unlimited Summon',
    nameZh: '無限召募',
    featured: [],
    desc: 'Reroll freely before confirming the result. The in-game description guarantees one SSR within the first 10 summons.',
  },
  {
    name: 'Mirror Gacha',
    nameZh: '鏡像抽卡',
    featured: [],
    desc: 'Costume card gacha played with Mirror tickets across six themes: Summer Swimsuit, Ballgown Gala, Dream Academy, Sports Superstars, Rhythmic Harmony and Silken Glow.',
  },
];

export const GSA_PITY_NOTES = [
  'Dual rate-up banners: both featured SSRs share one featured bucket with a 120-pull featured guarantee.',
  'Solo rate-ups and the Standard pool: 100-pull featured guarantee; the Advanced pool runs 120.',
  'Event ticket and Heaven\'s Door variants cost no gems; the client tables double their featured bucket.',
  'Every 10th summon drops the lowest bucket entirely, guaranteeing an SR or better.',
  'Rate tables in the client are partly injected server-side while a banner runs; anything not shown above is not dataminable.',
];

export function gsaBannerChar(slug) {
  return bySlug[slug] || null;
}
