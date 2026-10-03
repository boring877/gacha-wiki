// Gene-Sys: Adam banner history, built from the decrypted DrawMachineData /
// DrawMachineGroupData / DrawMachineRoleBannerData / InGameBannerData /
// ActivityMissionTimeData tables (Patch pull 2026-10-02, D:/GeneSysAdam),
// cross-checked against the official site notices and the X account
// (@GeneSysAdamEN). Banner schedules run server-side: entries carry the data
// wave they appeared in, not exact hours. Banner art (Draw_Bg_*) is the game's
// own drawcard bundle art on R2; banners whose art has not shipped to the
// client render the featured strip instead.
import { gsaCharacters } from './characters.js';

const bySlug = Object.fromEntries(gsaCharacters.map(c => [c.slug, c]));

const R2 = 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam';

export const GSA_BANNERS_UPDATED = 'October 2, 2026';

// status: live (running now) | beta (ran in the Sep 17 beta window) | scheduled
// (machines configured in the client tables but not observed running yet)
export const GSA_BANNERS = [
  {
    slug: 'ogino-rui-rate-up',
    name: 'Ogino Rui Rate-Up',
    nameZh: '指定召募 - 荻野瑠衣',
    kind: 'Solo Rate-Up',
    status: 'live',
    since: 'Since the September 29 maintenance',
    featured: ['ogino-rui'],
    pity: 100,
    eventToken: null,
    training: [],
    image: null,
    note: 'Live solo banner, confirmed by the client pulling its art panels on October 2 (the panels are plain backdrop art, so the card shows the featured strip instead). SSR rate x2, a Designated Seal per pull and a 100-pull featured guarantee.',
  },
  {
    slug: 'sugimoto-arina-rate-up',
    name: 'Sugimoto Arina Rate-Up',
    nameZh: '指定召募 - 杉本有菜',
    kind: 'Solo Rate-Up',
    status: 'live',
    since: 'Since the September 29 maintenance',
    featured: ['sugimoto-arina'],
    pity: 100,
    eventToken: null,
    training: [],
    image: null,
    note: 'Live solo banner alongside the Rui rate-up. Same deal as every solo: SSR rate x2, Designated Seal per pull, 100-pull featured guarantee.',
  },
  {
    slug: 'lunar-splendor',
    name: 'Lunar Splendor of the Pleasure District',
    nameZh: '繁華遊廓的月之華',
    kind: 'Dual Rate-Up',
    status: 'live',
    since: 'Official launch, September 22 to November 3, 2026',
    featured: ['komachi-sayaka', 'hijikata-chizuru'],
    pity: 120,
    eventToken: 'Moonflower Crest',
    training: ['Komachi Sayaka', 'Hijikata Chizuru'],
    image: `${R2}/Draw_Bg_20_1.webp`,
    image2: `${R2}/Draw_Bg_20_2.webp`,
    note: 'The official-launch limited banner: one art panel per featured SSR, a 120-pull featured guarantee, an ECoin ticket lane, and an exchange shop stocking Moonflower Naginata and Footwear components for Hijikata Chizuru. Dates from the official notice on genesys-adam.com.',
  },
  {
    slug: 'black-gold-hunter',
    name: 'Black Gold Hunter: Cowgirl Belle',
    nameZh: '黑金獵人 - 乳牛貝兒',
    kind: 'Event Ticket Recruit',
    status: 'beta',
    since: 'Non-wipe beta window, from September 17, 2026',
    featured: ['belle-clumsy-cowgirl'],
    pity: null,
    eventToken: 'Onyx (event vault currency)',
    training: ['Belle'],
    image: null,
    note: 'Ran during the beta window per the official September 17 notice: play the Black Gold Hunter event, collect Onyx to open the event vault for summon cards, and spend them on the Cowgirl Belle ticket recruit (its machines, art Draw_Bg_23 included, are configured again in the current client tables for a re-run).',
  },
  {
    slug: 'heavens-door-jessica',
    name: "Heaven's Door: Jessica",
    nameZh: '天堂之門 - 潔西卡',
    kind: 'Ticket Recruit',
    status: 'beta',
    since: 'Non-wipe beta window, from September 17, 2026',
    featured: ['jessica'],
    pity: null,
    eventToken: "Heaven's Door summon letters",
    training: ['Jessica'],
    image: null,
    note: "The September 17 official notice lists the Heaven's Door special missions with the Jessica ticket recruit in the beta build. Her limited machine (art Draw_Bg_36) is configured again in the current client tables.",
  },
  {
    slug: 'heavens-door-connie',
    name: "Heaven's Door: Connie",
    nameZh: '天堂之門 - 昆妮',
    kind: 'Ticket Recruit',
    status: 'scheduled',
    since: 'Configured in the client tables, not yet observed live',
    featured: ['connie'],
    pity: null,
    eventToken: "Heaven's Door summon letters",
    training: ['Connie'],
    image: null,
    note: "Second Heaven's Door recruit (art Draw_Bg_46), sitting behind Jessica in the activity pipeline. Connie's skill data only completed in the September 22 tables; her rating on the wiki was rescored then.",
  },
  {
    slug: 'war-and-music',
    name: 'War & Music',
    nameZh: '戰爭與音樂',
    kind: 'Dual Rate-Up',
    status: 'scheduled',
    since: 'Configured in the client tables, not yet observed live',
    featured: ['elena', 'victoria'],
    pity: 120,
    eventToken: 'Phantom Emblem',
    training: ['Elena', 'Victoria'],
    image: null,
    note: 'Dual limited banner for Elena and Victoria (art panels Draw_Bg_34_1 and _34_2) with the Collect Phantom Emblems event. Its machines sit after the Heaven\u2019s Door wave in the activity pipeline; both featured kits were reworked in the October 2 tables while waiting in the wings.',
  },
  {
    slug: 'lingering-echoes',
    name: 'Lingering Echoes',
    nameZh: '音行自鳴',
    kind: 'Dual Rate-Up',
    status: 'scheduled',
    since: 'Configured in the client tables, not yet observed live',
    featured: ['qing-yin', 'leng-zhen'],
    pity: 120,
    eventToken: 'Gagaku Emblem',
    training: ['Qing Yin', 'Leng Zhen'],
    image: null,
    note: 'The next new-character wave: dual limited banner for Qing Yin and Leng Zhen (art panels Draw_Bg_40_1 and _40_2) with the Collect Gagaku Emblems event. Last in the current activity pipeline; both kits already ship complete in the tables.',
  },
  {
    slug: 'solo-rotation-queue',
    name: 'Solo Rate-Up Queue',
    nameZh: '指定召募 - 後續',
    kind: 'Solo Rate-Up',
    status: 'scheduled',
    since: 'Configured in the client tables, not yet observed live',
    featured: ['milena', 'lin-lin', 'annabelle'],
    pity: 100,
    eventToken: null,
    training: [],
    image: null,
    note: 'Three more solo machines (Milena, Lin Lin, Annabelle) are configured in the current tables behind the live Rui and Arina pair, on the same 100-pull featured guarantee. A 1,000,000 Downloads celebration summon is also preloaded.',
  },
];

export function gsaBannerChar(slug) {
  return bySlug[slug] || null;
}
