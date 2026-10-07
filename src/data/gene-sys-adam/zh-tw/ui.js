// Shared Traditional-Chinese (zh-Hant) UI text for the Gene-Sys: Adam
// /zh-tw/ wiki. The game's BASE language is Traditional Chinese (official
// title 黑色基因), so system terms are the game's own wording; page chrome
// labels are written for this wiki. Export names match the Horizon Walker
// language ui modules on purpose (shared page conventions).

export const GSA_ZH = {
  gameName: '黑色基因',
  gameNameEn: 'Gene-Sys: Adam',
  langLabel: '繁體中文',
  selectorUrl: '/guides/gene-sys-adam/select/',
  baseUrl: '/zh-tw/guides/gene-sys-adam/',

  nav: [
    {
      title: '角色',
      links: [
        { name: '角色資料庫', href: '/zh-tw/guides/gene-sys-adam/characters/' },
        { name: '排行榜', href: '/zh-tw/guides/gene-sys-adam/tier-list/' },
        { name: '武裝', href: '/zh-tw/guides/gene-sys-adam/armament/' },
      ],
    },
    {
      title: '活動',
      links: [
        { name: '卡池', href: '/zh-tw/guides/gene-sys-adam/banners/' },
        { name: '更新公告', href: '/zh-tw/guides/gene-sys-adam/updates/' },
      ],
    },
  ],

  labels: {
    home: '首頁',
    characters: '角色',
    skills: '技能',
    profile: '檔案',
    stats: '素質',
    story: '角色介紹',
    tierList: '排行榜',
    element: '屬性',
    job: '職業戰鬥風格',
    attackType: '攻擊屬性',
    rarity: '稀有度',
    birthday: '生日',
    age: '年齡',
    height: '身高',
    weight: '體重',
    interest: '興趣',
    personality: '性格',
    awaken: '覺醒',
    cooldown: '冷卻',
    cost: '消耗',
    slot: '類別',
    type: '型態',
    statuses: '狀態',
    dataFromGame: '本頁遊戲文字（角色名、技能、素質、職業等）均取自遊戲官方繁體中文。',
    enVersion: 'English version',
  },
};

// skill slot EN -> ZH (official: 天賦技/自動技/奧義技/被動技 from the in-game help)
export const GSA_SLOT_ZH = {
  'Basic Attack': '普攻',
  Talent: '天賦技',
  Auto: '自動技',
  Ultimate: '奧義技',
  'Passive 1': '被動技 1',
  'Passive 2': '被動技 2',
  'Passive 3': '被動技 3',
  Active: '主動技',
};
