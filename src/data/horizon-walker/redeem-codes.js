// Horizon Walker Redeem Codes Data
// This file contains all redeem codes data for Horizon Walker

export const horizonWalkerRedeemCodes = {
  meta: {
    title: 'Horizon Walker Redeem Codes - Free Rewards & Gift Codes | GachaWiki',
    description:
      'Working Horizon Walker redeem codes for free rewards, EX character selectors, and items. Updated codes with step-by-step redemption guide.',
    lastUpdated: new Date('2026-01-01'),
  },

  availableCodes: [
    {
      id: '25merrychri',
      code: '25merrychri',
      rewards: 'EX Character Selector ×1',
      status: 'working',
      lastChecked: 'January 2026',
      dateAdded: '2026-01-01',
      expiryDate: 'January 31, 2026',
    },
    {
      id: 'qnaspecou',
      code: 'qnaspecou',
      rewards: 'Special Search Ticket ×1 + Skill Upgrade Selection Box ×2',
      status: 'working',
      lastChecked: 'January 2026',
      dateAdded: '2026-01-01',
      expiryDate: 'January 31, 2026',
    },
  ],

  expiredCodes: [
    {
      id: '25merrychrie',
      code: '25merrychrie',
      rewards: 'EX Character Selector ×1',
      status: 'expired',
      lastChecked: 'January 2026',
      dateAdded: '2026-01-01',
      expiryDate: 'January 4, 2026',
    },
    {
      id: 'qnaspecouer',
      code: 'qnaspecouer',
      rewards: 'Special Search Ticket ×1 + Skill Upgrade Selection Box ×2',
      status: 'expired',
      lastChecked: 'January 2026',
      dateAdded: '2026-01-01',
      expiryDate: 'January 4, 2026',
    },
  ],

  redeemInstructions: {
    title: 'How to Redeem Codes',
    description: 'Follow these steps to redeem your Horizon Walker codes:',
    steps: [
      {
        id: 'step-1',
        title: 'Open the Settings Menu',
        description:
          'On the main game screen, tap the Settings/Menu icon to access the game settings.',
      },
      {
        id: 'step-2',
        title: 'Find the Redeem Code Option',
        description:
          'Look for the "Redeem Code" or "Gift Code" option in the settings menu and tap on it.',
      },
      {
        id: 'step-3',
        title: 'Enter the Code',
        description:
          'Type or paste the redeem code into the input field.',
      },
      {
        id: 'step-4',
        title: 'Confirm and Claim',
        description:
          'Tap the "Confirm" or "Redeem" button to submit your code. If successful, rewards will be sent to your in-game mailbox.',
      },
    ],
  },

  communitySection: {
    title: 'Help Us Stay Updated',
    description:
      'Found expired codes or discovered new ones? Help the community by letting us know!',
    buttons: [
      {
        id: 'discord',
        text: 'Report on Discord',
        url: 'https://discord.gg/horizon-walker',
        type: 'discord',
      },
      {
        id: 'github',
        text: 'Star on GitHub',
        url: 'https://github.com/boring877/gacha-wiki',
        type: 'github',
        external: true,
      },
    ],
  },

  warnings: {
    important:
      "Important: These codes may or may not work! Games can disable codes anytime without notice.",
    noGuarantees: {
      title: 'No Guarantees',
      message:
        'These codes are community-sourced and may have expired or have limited uses.',
    },
  },
};

// Helper functions for data manipulation
export const getCodeById = id => {
  const allCodes = [...horizonWalkerRedeemCodes.availableCodes, ...horizonWalkerRedeemCodes.expiredCodes];
  return allCodes.find(code => code.id === id);
};

export const getCodesByStatus = status => {
  return horizonWalkerRedeemCodes.availableCodes.filter(code => code.status === status);
};

export const getTotalActiveCodes = () => {
  return horizonWalkerRedeemCodes.availableCodes.length;
};

// Generate structured data for SEO
export const generateRedeemCodesStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: horizonWalkerRedeemCodes.meta.title,
    description: horizonWalkerRedeemCodes.meta.description,
    url: 'https://gachawiki.info/guides/horizon-walker/redeem-codes/',
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'GachaWiki',
      url: 'https://gachawiki.info',
    },
    about: {
      '@type': 'VideoGame',
      name: 'Horizon Walker',
      genre: ['RPG', 'Mobile Game', 'Gacha Game'],
      platform: ['Android', 'iOS'],
      applicationCategory: 'GameApplication',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Horizon Walker Redeem Codes List',
      description: 'Active and working redeem codes for Horizon Walker mobile game',
      numberOfItems: horizonWalkerRedeemCodes.availableCodes.length,
      itemListElement: horizonWalkerRedeemCodes.availableCodes.map((code, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'DigitalDocument',
          name: code.code,
          description: `Horizon Walker redeem code for ${code.rewards}`,
          identifier: code.id,
          dateCreated: code.dateAdded,
        },
      })),
    },
    keywords:
      'Horizon Walker redeem codes, free rewards, gift codes, EX character selector, mobile RPG, gacha game codes',
    lastReviewed: horizonWalkerRedeemCodes.meta.lastUpdated.toISOString(),
    dateModified: horizonWalkerRedeemCodes.meta.lastUpdated.toISOString(),
    datePublished: '2026-01-01T00:00:00.000Z',
    publisher: {
      '@type': 'Organization',
      name: 'GachaWiki',
      url: 'https://gachawiki.info',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://gachawiki.info',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Horizon Walker Guides',
          item: 'https://gachawiki.info/guides/horizon-walker/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Redeem Codes',
          item: 'https://gachawiki.info/guides/horizon-walker/redeem-codes/',
        },
      ],
    },
  };
};
