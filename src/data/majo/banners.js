// MAJO gacha banners: banner types, pity rules, featured timeline and pull
// economics. Pity rules are quoted from the game's own Gachas localization
// texts; dates are community-sourced (Bahamut, Bilibili, Gamerch, Arca.live,
// DC Inside, September 2026), not official. Banner art is extracted from the
// gacha UI bundles (activity_button_images / gacha_cover_animations) and lives
// on R2 under majo/banners/.

const R2 = 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/majo/banners';

export const bannerTypes = [
  {
    id: 'origin',
    name: 'Origin Contact',
    kind: 'Standard banner',
    pity: '100th Contact guarantees an SSR Witch',
    details: [
      'Permanent pool. Rotating rate-ups have included Jenny, Yuhong, Lumi and Patra.',
      'Wishlist: pick one witch and her weight among SSR results increases 100x (does not change the overall SSR rate).',
      'Pity count resets on any SSR and does NOT carry over between Origin pools.',
    ],
  },
  {
    id: 'limited',
    name: 'Limited Contact',
    kind: 'Limited event banner (SSR)',
    pity: '100th Contact guarantees the featured SSR Witch',
    details: [
      'Each SSR pulled cuts the pity threshold by 20, up to twice (100 down to 80, then to a minimum of 60).',
      'Pity count is RETAINED and carries over between Limited Contact pools.',
      'Featured so far: Yun + Alice (dual), Jenny, Yuhong, Lumi, Patra, Emily, Luoqin + Lucia (dual).',
    ],
  },
  {
    id: 'eternal',
    name: 'Eternal Contact',
    kind: 'UR banner (limited pool, permanent pity)',
    pity: '80th Contact guarantees a UR Witch',
    details: [
      'Each UR pulled cuts the pity threshold by 10, up to twice (80 down to 70, then to a minimum of 60).',
      'Pity count is RETAINED and carries over between Eternal Contact pools.',
      'Eternal series features: Isabelle (first pool, opened Aug 26), then Dayu, Macak and Daphine in rotation, plus Bazhuli (Sep 16 to Oct 7).',
    ],
  },
  {
    id: 'first',
    name: 'First Contact',
    kind: 'Beginner banner',
    pity: '40th Contact guarantees an SSR Witch',
    details: [
      'Garana rate-up. The cheapest guaranteed SSR in the game.',
      'Pity count resets on any SSR.',
    ],
  },
  {
    id: 'novice',
    name: 'Novice Contact',
    kind: 'Starter duo banner',
    pity: '200th Contact guarantees a featured SSR (Xuanji or Xinzi)',
    details: [
      'Xuanji and Xinzi rate-up: the two dupe-farmable starter carries.',
      'This is the intended long-term source of their dupes (6-star needs many copies).',
    ],
  },
  {
    id: 'stash',
    name: 'Gacha Stash (Thousand Contact)',
    kind: '100-pull selector',
    pity: 'Save Contact records, claim a grand prize after the threshold',
    details: [
      'Around 100 pulls you can claim a chosen SSR Witch from the stash.',
      'The grand prize unlocks after a stated day count; records must be saved after each Contact session.',
    ],
  },
];

export const bannerTimeline = [
  {
    name: 'Luoqin + Lucia dual Pickup',
    image: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/majo/banners/ssr-pu-3-luoqin-lucia.webp',
    imageWidth: 1200,
    imageHeight: 480,
    type: 'Limited Contact',
    date: 'Sep 30, 2026',
    dateNote: 'start date',
    featured: ['Luoqin', 'Lucia'],
    slugs: ['luoqin', 'lucia'],
    note: 'Dual SSR Pickup with the September pair. Banners confirmed by JP wiki calendar and the official EROLABS announcement.',
  },
  {
    name: 'Bazhuli UR Pickup',
    image: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/majo/banners/bazhuli-gacha.webp',
    imageWidth: 1440,
    imageHeight: 1920,
    type: 'Eternal Contact',
    date: 'Sep 16 to Oct 7, 2026',
    dateNote: 'run window',
    featured: ['Bazhuli'],
    slugs: ['bazhuli'],
    note: 'First Bazhuli run. JP wiki lists it as "Eternal Contact", KR Arca confirms the Oct 7 end.',
  },
  {
    name: 'Emily Pickup',
    image: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/majo/banners/ssr-pu-2-emily.webp',
    imageWidth: 1200,
    imageHeight: 480,
    type: 'Limited Contact',
    date: 'Sep 9, 2026',
    dateNote: 'start date',
    featured: ['Emily'],
    slugs: ['emily'],
    note: 'Shipped with the September update: wishlist system, PVP, Chapter 7 and the Emily event all landed the same day.',
  },
  {
    name: 'Daphine, Dayu and Macak UR rotation',
    image: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/majo/banners/ur-pu-4-dayu.webp',
    imageWidth: 1200,
    imageHeight: 480,
    type: 'Eternal Contact',
    date: 'Current pool text',
    dateNote: 'rotation',
    featured: ['Daphine', 'Dayu', 'Macak'],
    slugs: ['dayu', 'macak'],
    note: 'The live Eternal Contact text lists this trio as rate-ups. Dayu is also obtainable from the event exchange shop (about 3,250 event tokens per copy). Daphine is a UR not yet covered by the wiki roster.',
  },
  {
    name: 'Isabelle UR Pickup',
    image: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/majo/banners/ur-pu-1-isabelle.webp',
    imageWidth: 512,
    imageHeight: 205,
    type: 'Eternal Contact',
    date: 'Opened Aug 26, 2026',
    dateNote: 'pool opened',
    featured: ['Isabelle'],
    slugs: ['isabelle'],
    note: 'The first Eternal Contact pool (150-pull talk in CN posts refers to total cost; the in-game guarantee is the 80th Contact, cut to 70 then 60 by UR pulls).',
  },
  {
    name: 'Yun + Alice dual Pickup',
    image: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/majo/banners/ssr-pu-1-yun-alice.webp',
    imageWidth: 512,
    imageHeight: 205,
    type: 'Limited Contact',
    date: 'Launch window (Aug 2026)',
    dateNote: 'launch',
    featured: ['Yun', 'Alice'],
    slugs: ['yun', 'alice'],
    note: 'Launch-window dual SSR Pickup.',
  },
  {
    name: 'Origin Contact rotating Pickups',
    type: 'Origin Contact',
    date: 'Permanent',
    dateNote: 'rotation',
    featured: ['Jenny', 'Yuhong', 'Lumi', 'Patra'],
    slugs: ['jenny', 'yuhong', 'lumi', 'patra'],
    note: 'Standard-banner rate-up rotation, one at a time, with the Wishlist weight on top.',
  },
  {
    name: 'First Contact (Garana) + Novice Contact (Xuanji, Xinzi)',
    type: 'Beginner banners',
    date: 'Permanent',
    dateNote: 'newbie pools',
    featured: ['Garana', 'Xuanji', 'Xinzi'],
    slugs: ['garana', 'xuanji', 'xinzi'],
    note: 'The 40-pull guaranteed SSR for new accounts and the long-term source of starter-duo dupes.',
  },
];

export const pityRules = [
  { label: 'Limited Contact', value: '100 pity, then 80, then 60', note: 'Each SSR pulled cuts the threshold by 20 (max twice). Pity carries over between Limited pools.' },
  { label: 'Eternal Contact (UR)', value: '80 pity, then 70, then 60', note: 'Each UR pulled cuts the threshold by 10 (max twice). Pity carries over between Eternal pools.' },
  { label: 'Origin Contact', value: '100 pity, no reduction', note: 'Wishlist witch gets 100x SSR weight. Pity does not carry over.' },
  { label: 'First Contact', value: '40 pity', note: 'Beginner banner, Garana rate-up.' },
  { label: 'Novice Contact', value: '200 pity', note: 'Starter duo (Xuanji, Xinzi) rate-up, the farmable dupe source.' },
];

export const pullEconomics = [
  { label: 'SSR 6-star', value: 'about 282 pulls on average', note: 'Worst case around 420 pulls. Community math from KR players, based on shard-per-dupe needs.' },
  { label: 'UR 6-star', value: 'about 228 pulls on average', note: 'Worst case around 330 pulls. URs need fewer copies for 6-star but cost more per pull.' },
  { label: 'Duplicate witches', value: 'Witch Crystals', note: 'UR and SSR duplicates yield 60 crystals, SR yields 5. Crystals are the star-up material.' },
  { label: 'Medals', value: 'Random pull drop', note: 'Medals from Contacts pay for Star Upgrades of witches from different classes.' },
  { label: 'Rerolling', value: 'Not worth it', note: 'JP and KR communities agree: 15 to 30 minute loops, the first pull guarantees Xuanji, and the dupe economy makes a fresh account weaker than an old one.' },
];
