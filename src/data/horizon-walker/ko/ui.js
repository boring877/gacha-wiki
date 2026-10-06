// Shared Korean UI text for the Horizon Walker /ko/ wiki. System terms
// (성흔/특성/행동력/승급/선물/용병) are the game's own official Korean; page
// chrome labels are written for this wiki. Export names match ui.js in other
// languages on purpose (shared page code).

export const HW_ZH = {
  gameName: '호라이즌 워커',
  gameNameEn: 'Horizon Walker',
  langLabel: '한국어',
  switchToEn: 'English',
  selectorUrl: '/guides/horizon-walker/select/',
  baseUrl: '/ko/guides/horizon-walker/',

  nav: [
    {
      title: '캐릭터',
      links: [
        { name: '캐릭터 데이터베이스', href: '/ko/guides/horizon-walker/characters/' },
        { name: '티어 리스트', href: '/ko/guides/horizon-walker/tier-list/' },
        { name: '추천 빌드', href: '/ko/guides/horizon-walker/builds/' },
        { name: '커뮤니티 빌드', href: '/ko/guides/horizon-walker/builds/community/' },
        { name: '용병', href: '/ko/guides/horizon-walker/mercenaries/' },
        { name: '무기', href: '/ko/guides/horizon-walker/weapons/' },
        { name: '성흔', href: '/ko/guides/horizon-walker/stigmas/' },
      ],
    },
    {
      title: '게임 시스템',
      links: [
        { name: '행동력 가이드', href: '/ko/guides/horizon-walker/ap-guide/' },
        { name: '데미지 공식', href: '/ko/guides/horizon-walker/damage-formula/' },
        { name: '레벨 차이', href: '/ko/guides/horizon-walker/level-difference/' },
        { name: '특성', href: '/ko/guides/horizon-walker/traits/' },
        { name: '반신 승급', href: '/ko/guides/horizon-walker/demi/' },
        { name: '성흔 부옵션', href: '/ko/guides/horizon-walker/stigma-sub-stats/' },
      ],
    },
    {
      title: '리소스',
      links: [
        { name: '선물', href: '/ko/guides/horizon-walker/gifts/' },
        { name: '캐릭터 선물 취향', href: '/ko/guides/horizon-walker/character-gifts/' },
        { name: '스토리 갤러리', href: '/ko/guides/horizon-walker/story-gallery/' },
        { name: '시계', href: '/clock/horizon-walker/' },
        { name: '교환 코드', href: '/ko/guides/horizon-walker/redeem-codes/' },
      ],
    },
    {
      title: '커뮤니티',
      links: [
        { name: '가챠 타임라인', href: '/ko/guides/horizon-walker/banners/' },
        { name: '업데이트 공지', href: '/ko/guides/horizon-walker/updates/' },
      ],
    },
  ],

  labels: {
    home: '홈',
    wikiHome: '호라이즌 워커 한국어 위키',
    characters: '캐릭터',
    skills: '스킬',
    passive: '패시브',
    skill: '스킬',
    traits: '특성',
    uniqueTraits: '고유 특성',
    profile: '프로필',
    stats: '스탯',
    story: '캐릭터 스토리',
    officialStory: '공식 캐릭터 스토리',
    weapon: '무기',
    exWeapon: 'EX 무기',
    gifts: '선물',
    rarity: '등급',
    deployCost: '편성 비용',
    level: '레벨',
    cooldown: '쿨타임',
    apCost: '행동력 소모',
    damage: '피해량',
    type: '타입',
    name: '이름',
    description: '설명',
    tierList: '티어 리스트',
    updateNotes: '업데이트 공지',
    viewAll: '모두 보기',
    backToList: '목록으로',
    dataFromGame: '이 페이지의 게임 텍스트(캐릭터명, 스킬, 특성, 스탯 등)는 모두 게임 공식 한국어에서 인용했습니다.',
    enVersion: 'English version',
    zhVersion: '한국어 버전',
    statNote: '스탯은 레벨 60 기준 값입니다. 스킬 설명의 N%와 중괄호 수치는 스킬 레벨에 따라 변하는 게임 내 공식 수치입니다.',
  },
};

export const HW_ZH_STAT_GROUPS = {
  basic: '기본 스탯',
  key: '주요 스탯',
  boost: '속성 강화',
  defense: '속성 방어',
};
