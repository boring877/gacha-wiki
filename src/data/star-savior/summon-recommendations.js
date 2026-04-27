// Star Savior Summon Recommendations
// Skip/Summon advice for active banners with reasoning

export const summonRecommendations = [
  {
    bannerId: 'little-tyrant',
    character: 'Scarlet',
    characterSlug: 'scarlet',
    image: 'TN_NEWS_SAVIOR_S_BUNNY_SCISSORS.png',
    bannerType: 'Featured Observation',
    startDate: '2026-04-23',
    endDate: '2026-05-06',
    verdict: 'skip',
    verdictLabel: 'Skip',
    summary: 'Already in the permanent pool. Save for half anniversary.',
    reasons: [
      {
        title: 'Permanent Banner',
        text: 'Scarlet is already available in the normal banner pool. You can obtain her naturally over time without spending premium currency.',
      },
      {
        title: 'Half Anniversary Coming Soon',
        text: 'The half anniversary is expected in roughly two months, and anniversary units are typically among the strongest in the game. Saving your currency now gives you a better shot at limited-time meta-defining characters.',
      },
    ],
    arcana: {
      slug: 'scarlet-the-great-and-amazing-bunny-girl',
      name: 'The Great and Amazing Bunny Girl',
      image: 'ARCANA_BUNNY_SCISSORS_SSR_01.png',
      verdict: 'skip',
      verdictLabel: 'Skip',
      summary: 'Already in the normal banner pool. Save up for half anniversary.',
      reasons: [
        {
          title: 'Normal Banner',
          text: 'The arcana is already available in the normal banner pool.',
        },
        {
          title: 'Save for Half Anniversary',
          text: 'Save your resources for the half anniversary, which is expected to bring limited-time meta-defining characters.',
        },
      ],
    },
  },
  {
    bannerId: 'eastern-swordmaster',
    character: 'Lyn',
    characterSlug: 'lyn',
    image: 'TN_NEWS_SAVIOR_S_EASTERN_SWORDMASTER.png',
    bannerType: 'Featured Observation',
    startDate: '2026-04-16',
    endDate: '2026-04-30',
    verdict: 'skip',
    verdictLabel: 'Skip',
    summary: 'Save your resources for what\'s coming next.',
    reasons: [
      {
        title: 'Permanent Banner',
        text: 'Lyn will be added to the permanent banner pool after her featured observation ends. You will be able to obtain her naturally over time without spending premium currency.',
      },
      {
        title: 'Half Anniversary Coming Soon',
        text: 'The half anniversary is expected in roughly two months, and anniversary units are typically among the strongest in the game. Saving your currency now gives you a better shot at limited-time meta-defining characters.',
      },
      {
        title: 'Similar Alternatives Exist',
        text: 'Bell and Rosaria offer comparable damage output in the Striker role. If you already have either of them built, the incremental upgrade from Lyn does not justify heavy investment.',
      },
    ],
    arcana: {
      slug: 'lyn-a-white-moon-shines-with-the-sun-s-warmth',
      name: 'A White Moon Shines With the Sun\'s Warmth',
      image: 'ARCANA_EASTERN_SWORDMASTER_SSR_02_S.png',
      verdict: 'consider',
      verdictLabel: 'Consider',
      summary: 'Worth considering for the stat value alone, but not groundbreaking enough to heavily invest. If choosing between the character banner and the arcana banner, the arcana may be the better pick for one copy.',
      keyStats: [
        { label: 'SPD', value: '+8' },
        { label: 'ATK', value: '+3%' },
        { label: 'HP', value: '+3%' },
      ],
      reasons: [
        {
          title: 'Strong Stat Value',
          text: 'The journey rewards include +8 Turn Speed, +3% ATK, and +3% Max HP -- stats that benefit any team composition and are universally useful regardless of which characters you run.',
        },
        {
          title: 'Goes to Normal Banner',
          text: 'Like all arcana, it will eventually enter the normal banner pool. You do not need to rush for it, but getting one copy early can accelerate your progress.',
        },
        {
          title: 'Better Pick Than the Character',
          text: 'If you had to choose between pulling for Lyn or her arcana, the arcana offers more lasting value. One copy gives you the full stat bonuses, whereas Lyn herself has strong alternatives in the Striker role.',
        },
      ],
    },
  },
];

export const VERDICT_STYLES = {
  skip: { color: '#e74c3c', label: 'Skip' },
  summon: { color: '#2ecc71', label: 'Summon' },
  consider: { color: '#f39c12', label: 'Consider' },
};
