// Shared Chinese (zh-Hans) UI text for the Horizon Walker /zh/ wiki.
// System terms (圣痕/特性/行动力/晋升/礼物/佣兵) are the game's own official
// Chinese from ChineseSimplified localization; page chrome labels are written
// for this wiki. EVERY /zh/ page imports from here so wording stays consistent.

export const HW_ZH = {
  gameName: '地平线行者',
  gameNameEn: 'Horizon Walker',
  langLabel: '中文',
  switchToEn: 'English',
  selectorUrl: '/guides/horizon-walker/select/',
  baseUrl: '/zh/guides/horizon-walker/',

  // nav sections (mirrors the EN game-navigation structure with /zh/ hrefs)
  nav: [
    {
      title: '角色',
      links: [
        { name: '角色资料库', href: '/zh/guides/horizon-walker/characters/' },
        { name: '排行榜', href: '/zh/guides/horizon-walker/tier-list/' },
        { name: '配装推荐', href: '/zh/guides/horizon-walker/builds/' },
        { name: '社区配装', href: '/zh/guides/horizon-walker/builds/community/' },
        { name: '佣兵', href: '/zh/guides/horizon-walker/mercenaries/' },
        { name: '武器', href: '/zh/guides/horizon-walker/weapons/' },
        { name: '圣痕', href: '/zh/guides/horizon-walker/stigmas/' },
      ],
    },
    {
      title: '游戏机制',
      links: [
        { name: '行动力指南', href: '/zh/guides/horizon-walker/ap-guide/' },
        { name: '伤害公式', href: '/zh/guides/horizon-walker/damage-formula/' },
        { name: '等级差', href: '/zh/guides/horizon-walker/level-difference/' },
        { name: '特性', href: '/zh/guides/horizon-walker/traits/' },
        { name: '半神晋升', href: '/zh/guides/horizon-walker/demi/' },
        { name: '圣痕副属性', href: '/zh/guides/horizon-walker/stigma-sub-stats/' },
      ],
    },
    {
      title: '资源',
      links: [
        { name: '礼物', href: '/zh/guides/horizon-walker/gifts/' },
        { name: '角色礼物偏好', href: '/zh/guides/horizon-walker/character-gifts/' },
        { name: '剧情画廊', href: '/zh/guides/horizon-walker/story-gallery/' },
        { name: '时钟', href: '/clock/horizon-walker/' },
        { name: '兑换码', href: '/zh/guides/horizon-walker/redeem-codes/' },
      ],
    },
    {
      title: '社区',
      links: [
        { name: '卡池时间线', href: '/zh/guides/horizon-walker/banners/' },
        { name: '更新公告', href: '/zh/guides/horizon-walker/updates/' },
      ],
    },
  ],

  // common page labels
  labels: {
    home: '首页',
    wikiHome: '地平线行者中文维基',
    characters: '角色',
    skills: '技能',
    passive: '被动',
    skill: '技能',
    traits: '特性',
    uniqueTraits: '固有特性',
    profile: '档案',
    stats: '属性',
    story: '角色故事',
    officialStory: '官方角色故事',
    weapon: '武器',
    exWeapon: 'EX 武器',
    gifts: '礼物',
    rarity: '稀有度',
    deployCost: '编成费用',
    level: '等级',
    cooldown: '冷却',
    apCost: '行动力消耗',
    damage: '伤害',
    type: '类型',
    name: '名称',
    description: '说明',
    tierList: '排行榜',
    updateNotes: '更新公告',
    viewAll: '查看全部',
    backToList: '返回列表',
    dataFromGame: '本页游戏文本（角色名、技能、特性、属性等）均取自游戏官方简体中文。',
    enVersion: 'English version',
    zhVersion: '中文版本',
    statNote: '属性为等级 60 数值。技能说明中的 N% 与花括号数值为游戏内随技能等级变化的官方数值。',
  },
};

// stat-group labels for character stat sections (official game stat names are
// in game-text.js HW_ZH_STAT_LABELS; these are the group headings)
export const HW_ZH_STAT_GROUPS = {
  basic: '基础属性',
  key: '主要属性',
  boost: '属性强化',
  defense: '属性防御',
};
