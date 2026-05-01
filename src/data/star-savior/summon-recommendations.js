// Star Savior Summon Recommendations
// Skip/Summon advice for active banners with reasoning

export const summonRecommendations = [
  {
    bannerId: 'independent-vagabond',
    character: 'Fei',
    characterSlug: 'fei',
    image: 'TN_NEWS_SAVIOR_S_INDEPENDENT_VAGABOND.png',
    bannerType: 'Featured Observation',
    verdict: 'skip',
    verdictLabel: 'Skip',
    summary: 'She\'s mid in PvE and evasion teams aren\'t really a thing yet. Save for half anni.',
    reasons: [
      {
        title: 'She\'s Okay, Not Great',
        text: 'Fei\'s evasion gimmick is fun but her damage is inconsistent. She needs to actually evade to get anything done, and without the right setup she just... doesn\'t.',
      },
      {
        title: 'Evasion Teams Aren\'t Ready',
        text: 'Nobody has the gear or supports built for a proper evasion comp right now. Fei wants her passive maxed, evasion gear, and specific teammates to work. That\'s a lot of resources for a character that\'s just okay.',
      },
      {
        title: 'Going to Normal Banner',
        text: 'Once her banner ends she goes straight to the permanent pool. You\'ll pull her eventually anyway.',
      },
      {
        title: 'Half Anniversary Is Right There',
        text: 'Half anni is coming and those units are going to be way stronger. Save your gems.',
      },
      {
        title: 'Needs Her Arcana Too',
        text: 'To really make Fei work you need her SSR arcana on top of pulling her. That\'s two banners worth of currency for a mid PvE unit. Hard pass.',
      },
    ],
    arcana: {
      slug: 'fei-today-s-step-forward',
      name: "Today's Step Forward",
      image: 'ARCANA_INDEPENDENT_VAGABOND_SSR_01.png',
      verdict: 'skip',
      verdictLabel: 'Skip',
      summary: 'Going to normal banner. Lone Seeker is cool but not worth chasing right now.',
      reasons: [
        {
          title: 'Normal Banner Later',
          text: 'This arcana hits the permanent pool after the featured period. No rush.',
        },
        {
          title: 'Save for Half Anni',
          text: 'Half anniversary arcana will likely be much stronger. Don\'t blow your stash here.',
        },
        {
          title: 'Cool but Skippable',
          text: 'The potentials are decent but not worth chasing right now. Check the arcana page for full details.',
        },
      ],
    },
  },
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
