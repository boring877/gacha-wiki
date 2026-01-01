// Zone Nova Redeem Codes Data
// This file contains all redeem codes data for Zone Nova

/**
 * @typedef {Object} RedeemCode
 * @property {string} id
 * @property {string} code
 * @property {string} status
 * @property {string} lastChecked
 * @property {string} dateAdded
 * @property {string} [expiryDate]
 */

/** @type {{ meta: { title: string, description: string, lastUpdated: Date }, availableCodes: RedeemCode[], expiredCodes: RedeemCode[], redeemInstructions: any, communitySection: any, warnings: any }} */
export const zoneNovaRedeemCodes = {
  meta: {
    title: 'Zone Nova Redeem Codes - Free Rewards & Gift Codes 2025 | GachaWiki',
    description:
      'Complete list of Zone Nova redeem codes for free rewards, gems, and items. Updated regularly with working promo codes for the mobile RPG game.',
    lastUpdated: new Date(),
  },

  availableCodes: [
    {
      id: 'h365register111',
      code: 'H365REGISTER111',
      status: 'unknown',
      lastChecked: 'July 2025',
      dateAdded: '2025-07-01',
    },
    {
      id: 'h365register222',
      code: 'H365REGISTER222',
      status: 'unknown',
      lastChecked: 'July 2025',
      dateAdded: '2025-07-01',
    },
    {
      id: 'h365register333',
      code: 'H365REGISTER333',
      status: 'unknown',
      lastChecked: 'July 2025',
      dateAdded: '2025-07-01',
    },
    {
      id: 'erolab111',
      code: 'EROLAB111',
      status: 'unknown',
      lastChecked: 'July 2025',
      dateAdded: '2025-07-01',
    },
    {
      id: 'erolab222',
      code: 'EROLAB222',
      status: 'unknown',
      lastChecked: 'July 2025',
      dateAdded: '2025-07-01',
    },
    {
      id: 'jsvip111',
      code: 'JSVIP111',
      status: 'unknown',
      lastChecked: 'July 2025',
      dateAdded: '2025-07-01',
    },
    {
      id: 'jsvipvip',
      code: 'JSVIPVIP',
      status: 'unknown',
      lastChecked: 'July 2025',
      dateAdded: '2025-07-01',
    },
  ],

  expiredCodes: [
    // Template for expired codes
    // {
    //   id: "example-expired",
    //   code: "EXPIREDCODE123",
    //   status: "expired",
    //   expiryDate: "June 15, 2025",
    //   lastChecked: "June 20, 2025",
    //   dateAdded: "2025-06-01"
    // }
  ],

  redeemInstructions: {
    title: 'How to Redeem Codes',
    description: 'Follow these steps to redeem your Zone Nova codes:',
    steps: [
      {
        id: 'step-1',
        title: 'Go to Settings',
        description: 'Open Zone Nova and tap the Settings (gear icon) as shown below:',
        image: '/images/games/zone-nova/redeemcodes/1.jpg',
        imageAlt: 'Zone Nova Settings Location',
      },
      {
        id: 'step-2',
        title: 'Navigate to Account & Redeem Code',
        description: 'Follow these sub-steps:',
        substeps: [
          'Go to Account (last option in the settings bar)',
          'Choose the 2nd option: "Redeem Code"',
          'A popup will appear - enter your code exactly as shown',
          'Submit the code and check your in-game mail for rewards instantly',
        ],
        image: '/images/games/zone-nova/redeemcodes/2.jpg',
        imageAlt: 'Zone Nova Account and Redeem Code Location',
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
        url: 'https://discord.com/invite/JKCNtkSGNE',
        type: 'discord',
      },
      {
        id: 'contribute',
        text: 'Contribute',
        url: '/guides/zone-nova/contributing',
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
        'There is no much visibility on the game team or they have social media presence. These codes were found through community research. They might not work when you try them - sorry!',
    },
  },
};

// Helper functions for data manipulation
export const getCodeById = id => {
  const allCodes = [...zoneNovaRedeemCodes.availableCodes, ...zoneNovaRedeemCodes.expiredCodes];
  return allCodes.find(code => code.id === id);
};

export const getCodesByStatus = status => {
  return zoneNovaRedeemCodes.availableCodes.filter(code => code.status === status);
};

export const getTotalActiveCodes = () => {
  return zoneNovaRedeemCodes.availableCodes.length;
};

// Generate structured data for SEO
export const generateRedeemCodesStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: zoneNovaRedeemCodes.meta.title,
    description: zoneNovaRedeemCodes.meta.description,
    url: 'https://gachawiki.info/guides/zone-nova/redeem-codes/',
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'GachaWiki',
      url: 'https://gachawiki.info',
    },
    about: {
      '@type': 'VideoGame',
      name: 'Zone Nova',
      genre: ['RPG', 'Mobile Game', 'Gacha Game'],
      platform: ['Android', 'iOS'],
      applicationCategory: 'GameApplication',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Zone Nova Redeem Codes List',
      description: 'Active and working redeem codes for Zone Nova mobile game',
      numberOfItems: zoneNovaRedeemCodes.availableCodes.length,
      itemListElement: zoneNovaRedeemCodes.availableCodes.map((code, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'DigitalDocument',
          name: code.code,
          description: `Zone Nova redeem code for free rewards and items`,
          identifier: code.id,
          dateCreated: code.dateAdded,
          keywords: 'Zone Nova, redeem code, free rewards, mobile game',
        },
      })),
    },
    keywords:
      'Zone Nova redeem codes, free rewards, gift codes, promo codes, mobile RPG, gacha game codes, Zone Nova cheats',
    lastReviewed: zoneNovaRedeemCodes.meta.lastUpdated.toISOString(),
    dateModified: zoneNovaRedeemCodes.meta.lastUpdated.toISOString(),
    datePublished: '2025-07-01T00:00:00.000Z',
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
          name: 'Zone Nova Guides',
          item: 'https://gachawiki.info/guides/zone-nova/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Redeem Codes',
          item: 'https://gachawiki.info/guides/zone-nova/redeem-codes/',
        },
      ],
    },
  };
};
