// Shared Japanese UI text for the Horizon Walker /ja/ wiki. System terms
// (聖痕/特性/行動力/昇格/プレゼント/傭兵) are the game's own official Japanese;
// page chrome labels are written for this wiki. Export names match ui.js in
// other languages on purpose (shared page code).

export const HW_ZH = {
  gameName: 'ホライゾン・ウォーカー',
  gameNameEn: 'Horizon Walker',
  langLabel: '日本語',
  switchToEn: 'English',
  selectorUrl: '/guides/horizon-walker/select/',
  baseUrl: '/ja/guides/horizon-walker/',

  nav: [
    {
      title: 'キャラクター',
      links: [
        { name: 'キャラデータベース', href: '/ja/guides/horizon-walker/characters/' },
        { name: '評価一覧', href: '/ja/guides/horizon-walker/tier-list/' },
        { name: 'おすすめ編成', href: '/ja/guides/horizon-walker/builds/' },
        { name: 'コミュニティ編成', href: '/ja/guides/horizon-walker/builds/community/' },
        { name: '傭兵', href: '/ja/guides/horizon-walker/mercenaries/' },
        { name: '武器', href: '/ja/guides/horizon-walker/weapons/' },
        { name: '聖痕', href: '/ja/guides/horizon-walker/stigmas/' },
      ],
    },
    {
      title: 'ゲームシステム',
      links: [
        { name: '行動力ガイド', href: '/ja/guides/horizon-walker/ap-guide/' },
        { name: 'ダメージ計算式', href: '/ja/guides/horizon-walker/damage-formula/' },
        { name: 'レベル差', href: '/ja/guides/horizon-walker/level-difference/' },
        { name: '特性', href: '/ja/guides/horizon-walker/traits/' },
        { name: '半神昇格', href: '/ja/guides/horizon-walker/demi/' },
        { name: '聖痕サブ効果', href: '/ja/guides/horizon-walker/stigma-sub-stats/' },
      ],
    },
    {
      title: 'リソース',
      links: [
        { name: 'プレゼント', href: '/ja/guides/horizon-walker/gifts/' },
        { name: 'キャラの好み', href: '/ja/guides/horizon-walker/character-gifts/' },
        { name: 'ストーリーギャラリー', href: '/ja/guides/horizon-walker/story-gallery/' },
        { name: 'クロック', href: '/clock/horizon-walker/' },
        { name: '引換コード', href: '/ja/guides/horizon-walker/redeem-codes/' },
      ],
    },
    {
      title: 'コミュニティ',
      links: [
        { name: 'ガチャ履歴', href: '/ja/guides/horizon-walker/banners/' },
        { name: '更新情報', href: '/ja/guides/horizon-walker/updates/' },
      ],
    },
  ],

  labels: {
    home: 'ホーム',
    wikiHome: 'ホライゾン・ウォーカー 日本語ウィキ',
    characters: 'キャラクター',
    skills: 'スキル',
    passive: 'パッシブ',
    skill: 'スキル',
    traits: '特性',
    uniqueTraits: '固有特性',
    profile: 'プロフィール',
    stats: 'ステータス',
    story: 'キャラクターストーリー',
    officialStory: '公式キャラクターストーリー',
    weapon: '武器',
    exWeapon: 'EX 武器',
    gifts: 'プレゼント',
    rarity: 'レアリティ',
    deployCost: '編成コスト',
    level: 'レベル',
    cooldown: 'クールダウン',
    apCost: '行動力消費',
    damage: 'ダメージ',
    type: 'タイプ',
    name: '名前',
    description: '説明',
    tierList: '評価一覧',
    updateNotes: '更新情報',
    viewAll: 'すべて見る',
    backToList: '一覧に戻る',
    dataFromGame: '本ページのゲームテキスト（キャラ名、スキル、特性、ステータス等）はすべてゲーム公式の日本語ローカライズから引用しています。',
    enVersion: 'English version',
    zhVersion: '日本語バージョン',
    statNote: 'ステータスはレベル 60 の値です。スキル説明中の N% と中括弧の数値は、スキルレベルに応じて変化するゲーム内の公式数値です。',
  },
};

export const HW_ZH_STAT_GROUPS = {
  basic: '基礎ステータス',
  key: '主要ステータス',
  boost: '属性強化',
  defense: '属性防御',
};
