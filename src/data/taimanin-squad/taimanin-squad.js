// Taimanin Squad Landing Page Data
// This file contains all the content and configuration for the Taimanin Squad landing page

export const taimaninSquadConfig = {
  meta: {
    title: 'Taimanin Squad Wiki - Pre-Registration Guide & Game Database | GachaWiki',
    description:
      'Complete Taimanin Squad wiki with pre-registration info, character guides, and game database. Latest Taimanin Squad news, collecting RPG gameplay details for Android, iOS & PC.',
    gameTitle: 'Taimanin Squad',
    heroImage: '/images/games/taimanin-squad/taimanin-squad.jpg',
  },

  gameInfo: {
    description:
      'Taimanin Squad is a turn-based RPG featuring 3D characters from the legendary Taimanin franchise.',
    playUrl: 'https://taimaninsquad.com/',
    lastUpdated: new Date(),
    status: 'pre-registration',
    openBeta: 'Open Beta will be available on the Galaxy Store from January 15th, 2025!',
    developer: 'Gremory Games Inc.',
    platforms: ['Android', 'iOS', 'PC'],
    socialLinks: {
      website: 'https://taimaninsquad.com/',
    },
  },

  // Story content from the game
  story: {
    title: 'Story',
    content: [
      'Tokyo Kingdom City. An artificial island 10km above the Gulf of Tokyo.',
      'Back in the day, the Japanese government invested a fortune to build a second metropolis. However, the project was completely halted over a decade ago, and it has since become a virtually abandoned, illusory city.',
      'It has now degenerated into a "Demon City"—a chaotic mix of criminals, mafia, demons, and foreign corporations—becoming a haven for lawless and illicit individuals.',
      'Those with power rule over the citizens, and the citizens follow those with power. Under that order, the countless criminals and outlaws of Tokyo Kingdom City have been allowed to survive—',
      '—Peace and order are no more. Demons, who once ruled over humans and made them obey, tamed them, suddenly began attacking those very humans.',
      '......However, there were those who opposed them—the Taimanins and UFS troops who infiltrated Tokyo Kingdom City. Prioritizing the protection of citizens, the joint forces of the Taimanins and UFS troops retreated, eventually establishing the final line of defense at the entrance of the Tokyo Kingdom Bridge—the only remaining route connecting the city to the mainland.',
    ],
  },

  sections: [
    {
      id: 'about',
      title: 'About',
      type: 'game-info',
    },
    {
      id: 'resources',
      title: 'Resources',
      type: 'guides-grid',
    },
  ],

  // Main Category Groups - Minimal for pre-registration phase
  categoryGroups: [
    {
      id: 'getting-started',
      title: 'Getting Started',
      emoji: '',
      description: 'Pre-registration info and game overview',
      size: 'large',
      guides: [
        {
          id: 'pre-registration',
          title: 'Pre-Register',
          url: 'https://taimaninsquad.com/',
          external: true,
        },
      ],
    },
    {
      id: 'resources',
      title: 'Resources',
      emoji: '',
      description: 'Tools and useful links',
      size: 'medium',
      guides: [
        {
          id: 'official-site',
          title: 'Official Website',
          url: 'https://taimaninsquad.com/',
          external: true,
        },
      ],
    },
  ],

  // Guides array for backward compatibility
  guides: [
    {
      id: 'pre-registration',
      title: 'Pre-Register',
      emoji: '',
      description:
        'Pre-register for Taimanin Squad to receive exclusive rewards including legendary characters, summon tickets, and in-game currency.',
      url: 'https://taimaninsquad.com/',
      category: 'info',
      size: 'large',
      external: true,
    },
  ],

  // Pre-registration rewards info
  preRegistrationRewards: {
    milestones: [
      { count: 50000, reward: 'Early rewards' },
      { count: 100000, reward: 'Additional rewards' },
      { count: 150000, reward: 'Premium rewards' },
      { count: 200000, reward: 'Exclusive rewards' },
      { count: 300000, reward: 'Maximum rewards' },
    ],
    bonuses: [
      'Igawa Asagi (Legend) - Pre-order exclusive character',
      "Igawa Asagi's Exclusive Weapon",
      'Special Summon Tickets',
      'Premium Summon Tickets',
      'Gold & Taimanin Stones',
      '7-Day Login Bonus',
    ],
  },
};

// Helper functions for data manipulation
export const getGuidesByCategory = category => {
  return taimaninSquadConfig.guides.filter(guide => guide.category === category);
};

export const getGuideById = id => {
  return taimaninSquadConfig.guides.find(guide => guide.id === id);
};

export const getAllCategories = () => {
  const categories = [...new Set(taimaninSquadConfig.guides.map(guide => guide.category))];
  return categories;
};

// Generate structured data for SEO
export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: taimaninSquadConfig.meta.title,
    description: taimaninSquadConfig.meta.description,
    url: 'https://gachawiki.info/guides/taimanin-squad/',
    about: {
      '@type': 'Game',
      name: taimaninSquadConfig.meta.gameTitle,
      description: taimaninSquadConfig.gameInfo.description,
      url: taimaninSquadConfig.gameInfo.playUrl,
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Taimanin Squad Guides',
      itemListElement: taimaninSquadConfig.guides.map((guide, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'WebPage',
          name: guide.title,
          description: guide.description,
          url: guide.external ? guide.url : `https://gachawiki.info${guide.url}`,
        },
      })),
    },
  };
};
