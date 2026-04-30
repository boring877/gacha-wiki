// Busty Burst Summon Recommendations
// Skip/Summon advice for active banners with reasoning

export const summonRecommendations = [
  {
    bannerId: 'magdalena-2108',
    character: 'Magdalena',
    characterSlug: 'magdalena',
    bannerType: 'Seasonal Banner',
    startDate: '2026-04-28',
    endDate: '2026-05-05',
    verdict: 'skip',
    summary: 'A unique Magic Wind Tank with a solid kit, but wind teams are physical-dominated and the half- anniversary is right around the corner. Save your gems.',
    reasons: [
      {
        title: 'Wind Teams Are Physical',
        text: 'Magdalena is a Magic Wind unit, but the Wind element is dominated by Physical teams. Her Magic ATK buffs and Magic DEF debuffs don\'t synergize well with the existing Wind roster.',
      },
      {
        title: 'Half Anniversary in ~1 Month',
        text: 'The half-anniversary event is coming soon and will likely feature powerful limited units and generous rewards. You\'ll want every gem you can save.',
      },
      {
        title: 'Limited Impact on Current Meta',
        text: 'Her kit (Hit-Based Healing Shield, dual ATK debuff, Dispel ultimate) is decent but not game-changing. She won\'t shift the meta or solve any problem you can\'t already handle.',
      },
    ],
  },
  {
    bannerId: 'banner-paladin-introduction-trish',
    character: 'Trish',
    characterSlug: 'trish',
    bannerType: 'Paladin Introduction',
    startDate: '2026-04-21',
    endDate: '2026-05-05',
    verdict: 'summon',
    summary: 'Pull for Trish. Best Hit-Based Damage buff in the game and her ultimate gives +35% Physical and Magic ATK for 12 seconds, works in any team.',
    reasons: [
      {
        title: 'Best Hit-Based Damage Buff',
        text: 'Her Hit-Based Physical Damage UP (35%+400, scaling to 940 at Lv90) is the strongest in the game. It makes any physical carry hit way harder.',
      },
      {
        title: 'Ultimate Buffs Both ATK Types',
        text: 'Her ultimate gives +35% Physical ATK and +35% Magic ATK for 12 seconds. She works in any team, physical or magic.',
      },
      {
        title: 'Lycorys and Katisha Are Not Worth It',
        text: 'Lycorys\' poison is underwhelming and Katisha is free from the event. Only Trish makes this banner worth pulling on.',
      },
    ],
  },
];

export const VERDICT_STYLES = {
  skip: { color: '#e74c3c', label: 'Skip' },
  summon: { color: '#2ecc71', label: 'Summon' },
  consider: { color: '#f39c12', label: 'Consider' },
};
