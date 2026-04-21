// Busty Burst Summon Recommendations
// Skip/Summon advice for active banners with reasoning

export const summonRecommendations = [
  {
    bannerId: 'banner-paladin-introduction-trish',
    character: 'Trish & Lycorys',
    characterSlug: 'trish',
    bannerType: 'Paladin Introduction',
    startDate: '2026-04-21',
    endDate: '2026-05-05',
    verdict: 'skip',
    summary: 'Save your currency for the half-anniversary in roughly 40 days. Neither Trish nor Lycorys are meta-defining units, and Katisha is free from the event.',
    reasons: [
      {
        title: 'Katisha Is Free',
        text: 'Katisha is obtained for free from the event and is not in the summoning pool.',
      },
      {
        title: 'Lycorys Poison Is Underwhelming',
        text: 'Lycorys deals Deadly Poison damage but her poison output is not strong enough to justify investing currency. She may find a niche in later game stages with specific compositions, but as of now she is not a priority pull.',
      },
      {
        title: 'Half Anniversary in ~40 Days',
        text: 'The half anniversary is expected in roughly 40 days and anniversary units are typically the strongest in the game. Saving your currency now gives you a much better shot at limited-time meta-defining characters.',
      },
      {
        title: 'The 50-Summon Strategy',
        text: 'If you do want to try for Trish or Lycorys, the smart play is to do 50 summons (the game gives 20 free tickets, so you only invest 30 of your own) and then buy the 10-summon ticket from the shop. Stop there. There is no need to go all the way to 200 summons for pity.',
      },
    ],
  },
];

export const VERDICT_STYLES = {
  skip: { color: '#e74c3c', label: 'Skip' },
  summon: { color: '#2ecc71', label: 'Summon' },
  consider: { color: '#f39c12', label: 'Consider' },
};
