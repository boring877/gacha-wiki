// Stella Sora Redeem Codes Data
// This file contains all redeem codes data for Stella Sora

export const stellaSoraRedeemCodes = {
  meta: {
    title: 'Stella Sora Redeem Codes (SNOWISHFES) - Free Rewards & Gift Codes | GachaWiki',
    description:
      "Working Stella Sora redeem codes for free rewards, gems, and items. Updated SNOWISHFES code and step-by-step redemption guide for Yostar's fantasy RPG set in Nova Continent.",
    lastUpdated: new Date('2025-12-24'),
  },

  availableCodes: [
    {
      id: 'snowishfes',
      code: 'SNOWISHFES',
      status: 'working',
      lastChecked: 'December 2025',
      dateAdded: '2025-12-24',
    },
    {
      id: 'bossgift',
      code: 'BOSSGIFT',
      status: 'working',
      lastChecked: 'October 2025',
      dateAdded: '2025-10-27',
    },
  ],

  expiredCodes: [
    // Template for expired codes
    // {
    //   id: "example-expired",
    //   code: "EXPIREDCODE123",
    //   status: "expired",
    //   expiryDate: "September 15, 2025",
    //   lastChecked: "September 20, 2025",
    //   dateAdded: "2025-09-01"
    // }
  ],

  redeemInstructions: {
    title: 'How to Redeem Codes',
    description: 'Follow these steps to redeem your Stella Sora codes:',
    steps: [
      {
        id: 'step-1',
        title: 'Open the Menu',
        description:
          'On the main game screen, tap the three-line menu icon in the top-right corner of the screen.',
        image: '1.jpg',
        imageAlt: 'Stella Sora main screen showing three-line menu icon in top-right corner',
      },
      {
        id: 'step-2',
        title: 'Select "Redeem Code"',
        description:
          'In the menu that pops up, tap the "Redeem Code" option to open the code redemption interface.',
        image: '2.jpg',
        imageAlt: 'Stella Sora menu popup with "Redeem Code" option highlighted',
      },
      {
        id: 'step-3',
        title: 'Enter Your UID and Gift Code',
        description:
          'Find your UID in your profile and input this number into the "Enter UID" field. Then type the code you want to redeem into the "Enter Gift Code" field.',
        image: '4.jpg',
        imageAlt: 'Stella Sora code redemption form showing UID and Gift Code fields',
      },
      {
        id: 'step-4',
        title: 'Confirm Redemption',
        description:
          'Tap the "Confirm" button to submit your code. If the code is valid, you\'ll see a success message.',
        image: '3.jpg',
        imageAlt: 'Stella Sora confirmation button for code redemption',
      },
      {
        id: 'step-5',
        title: 'Claim Your Rewards',
        description:
          'After successful redemption, rewards will be delivered to your in-game mailbox. Log in and check your mailbox to collect them.',
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
        url: 'https://discord.gg/stellasoraofficial',
        type: 'discord',
      },
      {
        id: 'contribute',
        text: 'Contribute',
        url: '/guides/stella-sora/contributing',
        type: 'contribute',
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
      "Important: These codes may or may not work! Games can disable codes anytime without notice. Try them but don't expect them to work.",
    noGuarantees: {
      title: 'No Guarantees',
      message:
        'These codes are community-sourced and may have expired or have limited uses. Some codes may be region-specific or account-specific.',
    },
  },
};

// Helper functions for data manipulation
export const getCodeById = id => {
  const allCodes = [...stellaSoraRedeemCodes.availableCodes, ...stellaSoraRedeemCodes.expiredCodes];
  return allCodes.find(code => code.id === id);
};

export const getCodesByStatus = status => {
  return stellaSoraRedeemCodes.availableCodes.filter(code => code.status === status);
};

export const getTotalActiveCodes = () => {
  return stellaSoraRedeemCodes.availableCodes.length;
};

// Generate structured data for SEO
export const generateRedeemCodesStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: stellaSoraRedeemCodes.meta.title,
    description: stellaSoraRedeemCodes.meta.description,
    url: 'https://gacha-wiki.vercel.app/guides/stella-sora/redeem-codes/',
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'GachaWiki',
      url: 'https://gacha-wiki.vercel.app',
    },
    about: {
      '@type': 'VideoGame',
      name: 'Stella Sora',
      genre: ['RPG', 'Mobile Game', 'Gacha Game', 'Fantasy Adventure'],
      platform: ['Android', 'iOS', 'Windows'],
      applicationCategory: 'GameApplication',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Stella Sora Redeem Codes List',
      description: 'Active and working redeem codes for Stella Sora mobile game',
      numberOfItems: stellaSoraRedeemCodes.availableCodes.length,
      itemListElement: stellaSoraRedeemCodes.availableCodes.map((code, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'DigitalDocument',
          name: code.code,
          description: `Stella Sora redeem code for free rewards and items`,
          identifier: code.id,
          dateCreated: code.dateAdded,
          keywords:
            'Stella Sora, BOSSGIFT, redeem code, free rewards, mobile game, fantasy RPG, Yostar, Nova Continent',
        },
      })),
    },
    keywords:
      'Stella Sora redeem codes, BOSSGIFT code, free rewards, gift codes, promo codes, mobile RPG, gacha game codes, Stella Sora cheats, fantasy adventure, Yostar, Nova Continent, Trekker, SS codes',
    lastReviewed: stellaSoraRedeemCodes.meta.lastUpdated.toISOString(),
    dateModified: stellaSoraRedeemCodes.meta.lastUpdated.toISOString(),
    datePublished: '2025-10-27T00:00:00.000Z',
    publisher: {
      '@type': 'Organization',
      name: 'GachaWiki',
      url: 'https://gacha-wiki.vercel.app',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://gacha-wiki.vercel.app',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Stella Sora Guides',
          item: 'https://gacha-wiki.vercel.app/guides/stella-sora/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Redeem Codes',
          item: 'https://gacha-wiki.vercel.app/guides/stella-sora/redeem-codes/',
        },
      ],
    },
  };
};
