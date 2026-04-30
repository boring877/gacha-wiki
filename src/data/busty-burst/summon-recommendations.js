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
    summary: 'She\'s a cool Magic Wind Tank and pretty unique, but Wind is a physical element right now so she doesn\'t really fit anywhere. Plus half-anniv is coming in about a month. Save.',
    reasons: [
      {
        title: 'Wind Doesn\'t Need Magic',
        text: 'Wind teams are all physical. Her Magic ATK buffs and DEF debuffs just don\'t mesh with the rest of the Wind roster. She\'s kind of on her own island.',
      },
      {
        title: 'Half Anniversary Is Coming',
        text: 'We\'re about a month out from half-anniversary. That means limited units, free pulls, and probably something you\'ll actually want. Don\'t blow your stash here.',
      },
      {
        title: 'Decent Kit, No Must-Have',
        text: 'Hit-Based Healing Shield, dual ATK debuff, Dispel on her ult -- it\'s fine. Not bad. Just nothing that makes you go "I need her right now." You can skip this one comfortably.',
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
