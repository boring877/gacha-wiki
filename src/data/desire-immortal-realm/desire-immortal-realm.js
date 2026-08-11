// Desire Immortal Realm landing page data

export const desireImmortalRealmConfig = {
  meta: {
    title: 'Desire Immortal Realm Wiki - Characters & Guides | GachaWiki',
    description:
      'Desire Immortal Realm (欲界仙途) wiki with a full character database. A Chinese xianxia cultivation gacha — 40 playable heroines reimagined from Chinese history and mythology. Stats, skills, lore, and art.',
    gameTitle: 'Desire Immortal Realm',
  },

  gameInfo: {
    description:
      'Desire Immortal Realm (欲界仙途, pinyin: Yù Jiè Xiān Tú) is a Chinese xianxia cultivation gacha distributed via the Erolabs platform. It reimagines famous women from Chinese history, mythology, and literature — Sun Shangxiang, Nie Xiaoqian, Hua Mulan, Diaochan, Xi Shi, Chang\'e, and more — as immortals of the Hehuan Sect. Combat is tower-defense style across star-tier progression.',
    lastUpdated: new Date(),
  },

  // Note shown on the landing page: the game ships Chinese-only; the English
  // names on this wiki are fan pinyin romanizations, not official translations.
  translationNote: {
    title: 'Chinese-only game — English names are fan translations',
    body: [
      'Desire Immortal Realm is currently Chinese-only; there is no official English release. The English names on this wiki are pinyin romanizations (e.g. 孙尚香 → Sun Shangxiang), not official localizations.',
      'Character stats and skills are extracted directly from the game data and verified against the game\'s own code. Stat text that appears in English (skill buff labels like 【Life】+25%) is from the game itself.',
    ],
  },

  story: {
    content: [
      'Desire Immortal Realm is set in a xianxia (cultivation / immortal hero) world. The heroines are figures from Chinese history and legend — warriors, poets, spirits, and goddesses — reborn into the Hehuan Sect (合歡宗, "Union Sect"), a cultivation school renowned for dual-cultivation and enchantment arts.',
      'Each character blends her original legend with a reimagined immortal life. Sun Shangxiang, the Three Kingdoms warrior-princess, arrives in the sect and turns its graceful dual-cultivation arts into a fearsome "violent aesthetics" with her bow. Nie Xiaoqian, the tragic ghost from Strange Tales, retains her kindness despite a death-marred past.',
      'Combat plays out as tower-defense: deploy your heroines as defenders along lanes, level them through star tiers, and unlock awakening skills. Characters belong to one of five classes — Shooter, Assassin, Mage, Priest, or Warrior — and progress across 15 star tiers with growing HP and Attack.',
    ],
  },

  sections: [
    { id: 'about', title: 'About', type: 'game-info' },
    { id: 'resources', title: 'Resources', type: 'guides-grid' },
  ],

  guides: [
    {
      id: 'characters',
      title: 'Characters',
      description: '40 playable heroines with verified stats, skills, lore, and art.',
      url: '/guides/desire-immortal-realm/characters/',
      category: 'characters',
      size: 'large',
    },
  ],

  categoryGroups: [
    {
      id: 'characters',
      title: 'Characters',
      emoji: '',
      description: 'Character database, stats, and skills',
      size: 'small',
      guides: [
        { id: 'dir-characters', title: 'Database', url: '/guides/desire-immortal-realm/characters/' },
      ],
    },
  ],
};
