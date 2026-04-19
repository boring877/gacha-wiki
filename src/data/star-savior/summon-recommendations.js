// Star Savior Summon Recommendations
// Skip/Summon advice for active banners with reasoning

export const summonRecommendations = [
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
        text: 'Trish and Rosaria offer comparable damage output in the Striker role. If you already have either of them built, the incremental upgrade from Lyn does not justify heavy investment.',
      },
    ],
    arcanaVerdict: 'consider',
    arcanaVerdictLabel: 'Consider',
    arcanaSummary: 'The arcana is decent if you want to invest in Lyn long-term, but not essential.',
    arcanaNote: 'If you really like Lyn or plan to use her as a main, her arcana provides solid value. Otherwise, skip and save for future arcana banners.',
  },
];

export const VERDICT_STYLES = {
  skip: { color: '#e74c3c', icon: 'x', label: 'Skip' },
  summon: { color: '#2ecc71', icon: 'check', label: 'Summon' },
  consider: { color: '#f39c12', icon: '?', label: 'Consider' },
};
