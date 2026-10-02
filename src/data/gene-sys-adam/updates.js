// Gene-Sys: Adam update log. The developer publishes no patch notes outside
// the game client, so every entry is reconstructed from diffs of the decrypted
// Patch tables (D:/GeneSysAdam, pulls of the listed dates). Server-scheduled
// banner dates are approximate; content lists are exact.
export const GSA_UPDATES = [
  {
    slug: '2026-10-02-skill-reworks-and-rui-arina-rotation',
    date: 'October 2, 2026',
    title: 'Skill reworks and the Ogino Rui / Sugimoto Arina rotation',
    tag: 'Update',
    image: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Draw_Bg_19.webp',
    imageCaption: 'Ogino Rui rate-up banner art from this wave.',
    points: [
      'Solo rate-up rotation turned over to Ogino Rui and Sugimoto Arina; the client downloaded both banner art panels (Draw_Bg_19 and Draw_Bg_21) on October 2, confirming the current pair. Each solo banner keeps the 100-pull featured guarantee.',
      'Kit data reworks across three characters: Elena (6 skills), Victoria (7 skills) and Alyna (7 skills) gained status riders and extra effect rows, including Detonate interactions on Elena, Block Penetration and Fire RES Down riders on Victoria, and Alyna\'s Survival of the Fittest expanding to five hit targets.',
      'Rachel\'s Aimed Shot was retargeted from "a target" to "the furthest target", and description fixes landed on Lin Lin\'s and Ishikawa Shouji\'s skills.',
      'A new character-growth training mission set shipped in the activity tables: star-up, signature gear acquisition, class-up and affection milestones per character, plus one new training event entry.',
      'Ruby\'s SNS story chapter 4 content (story animation, SNS art, voice set, story BGM) downloaded with this wave.',
      'Client hot-update modules landed on September 24 (84 KB) and October 2 (137 KB); ten game tables changed in total, with no new characters, items or draw machines.',
    ],
    source: 'Decrypted table diff, Patch pulls of September 22 and October 2, 2026.',
  },
  {
    slug: '2026-09-22-lingering-echoes',
    date: 'September 22, 2026',
    title: 'Lingering Echoes: Qing Yin and Leng Zhen',
    tag: 'Update',
    points: [
      'Two new SSR characters: Qing Yin, a Wind Breaker whose whole kit prioritizes Electrocuted targets and triggers Overload pursuits, and Leng Zhen, a Water Breaker who charges the team 2 EN per hit and lands Freeze M rolls on every loop.',
      'Lingering Echoes dual rate-up banner for both new characters, with a 120-pull featured guarantee, plus training missions for each.',
      'Collect Gagaku Emblems event: emblems drop from event stages and trade in the event exchange shop.',
      'Skill data reworks landed in the tables: Victoria gained a new Petrified or Block Down trigger line on her cursed passive, and Connie\'s kit, which shipped empty at launch, is now complete.',
      '90 new items (1,001 to 1,078), mostly preload for upcoming content: the Source of Chaos event set, date and chat portraits for DJ JOY, Alexandra, Karina, Yoru, Florette, Leonisse, Mia and Rien, and new HCG scene unlocks.',
      'Client hot-update module Assembly-CSharp 1.0.0 (built 2026-09-22 10:56); draw machines grew from 23 to 25.',
    ],
    source: 'Decrypted table diff, Patch pull of September 22, 2026.',
  },
  {
    slug: '2026-09-launch-week-war-and-music',
    date: 'September 2026, launch week',
    title: 'War & Music: Elena and Victoria',
    tag: 'Event wave',
    points: [
      'War & Music dual rate-up banner: SSR Elena and SSR Victoria with a 120-pull featured guarantee.',
      'Collect Phantom Emblems event with its own exchange shop.',
      'Training missions for Elena, Victoria, Alyna and Awana.',
      'Heaven\'s Door ticket recruit for Connie joined Jessica\'s.',
    ],
    source: 'Event series numbering in the decrypted tables; exact dates are server-side.',
  },
  {
    slug: '2026-09-17-launch',
    date: 'September 17, 2026',
    title: 'Global launch',
    tag: 'Launch',
    image: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Draw_Bg_20_1.webp',
    imageCaption: 'Lunar Splendor of the Pleasure District launch banner.',
    points: [
      'Launch roster: 54 profiled characters, 39 of them visible in gacha pools on day one.',
      'Lunar Splendor of the Pleasure District launch banner: SSR Komachi Sayaka and SSR Hijikata Chizuru, alongside the Moonflower Crest collection event, training missions for Sayaka, Chizuru and Fujiwara Arisa, and Moonflower gear components in the exchange shop.',
      'Black Gold Hunter event with Cowgirl Belle ticket recruits.',
      'Heaven\'s Door special missions and the Jessica ticket recruit.',
      '1M Downloads celebration ticket machine.',
      'Solo rate-up rotation began: Ogino Rui, Sugimoto Arina, Milena, Lin Lin, Annabelle.',
    ],
    source: 'Decrypted launch tables (Patch pull of September 17, 2026).',
  },
];
