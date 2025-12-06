// Busty Burst Fantasy Landing Page Data
// This file contains all the content and configuration for the Busty Burst Fantasy landing page

export const bustyBurstConfig = {
  meta: {
    title: 'Busty Burst Fantasy Wiki - Download, Global Version & Paladin Guide | GachaWiki',
    description:
      'Download Busty Burst Fantasy global version - Best adult fantasy RPG with paladin tier lists, summoning guides. Compare vs similar gacha games like R18 RPGs. Free download link, latest updates, team building strategies and duel tips for 2025.',
    gameTitle: 'Busty Burst Fantasy',
    heroImage: 'gameLogo.webp',
  },

  gameInfo: {
    description:
      'Rufus, a lord from the frontier region residing in the Kingdom of Vern, faces a crisis where lordship is determined by duels among subordinate paladins. Currently second-to-last in rank, he must summon powerful otherworldly paladins from the abandoned Goddess Ruin to avoid losing his lordship.',
    playUrl: 'https://game.erolabsshare.live/app/f302f717/Busty_Fantasy_Burst', // Main game link
    discordUrl: 'https://discord.gg/invite/MD4p8wgxdU', // Discord community link
    lastUpdated: new Date(), // This will be dynamically generated
  },

  sections: [
    {
      id: 'about',
      title: 'About',
      type: 'game-info',
    },
    {
      id: 'game-notes',
      title: 'Game Notes',
      type: 'game-notes',
    },
    {
      id: 'resources',
      title: 'Resources',
      type: 'guides-grid',
    },
  ],

  gameNotes: {
    title: 'Important Game Information',
    notes: [
      {
        id: 'separate-server',
        title: 'Separate English Server',
        content:
          '"Busty Fantasy Burst" (English Edition) will run on a separate server. Game content and event schedules will be different from the Chinese version, and progress from the Chinese version cannot be transferred. If you\'d like to start fresh and experience the story and events in English, we warmly invite you to pre-register and stay tuned for the latest updates on "Busty Fantasy Burst" (English Edition)!',
      },
      {
        id: 'content-changes',
        title: 'Content Subject to Change',
        content:
          'Game-related content is subject to change based on actual development progress. Please refer to official in-game announcements and the final released content for the most accurate information.',
      },
    ],
  },

  // Main Category Groups
  categoryGroups: [
    {
      id: 'guides',
      title: 'Guides',
      emoji: '',
      description: 'Game guides and character information',
      size: 'large',
      guides: [
        {
          id: 'paladin-tier-list',
          title: 'Tier List',
          url: '/guides/busty-burst/tier-list#tier-list',
        },
      ],
    },
  ],

  // Original guides array (kept for backward compatibility)
  guides: [
    {
      id: 'paladin-tier-list',
      title: 'Beginner Tier List',
      emoji: '',
      description:
        'Beginner tier list for BBB Busty game. Find the best paladins to pick early on in your journey.',
      url: '/guides/busty-burst/tier-list#tier-list',
      category: 'guides',
      size: 'large',
    },
  ],
};

// Helper functions for data manipulation
export const getGuidesByCategory = category => {
  return bustyBurstConfig.guides.filter(guide => guide.category === category);
};

export const getGuideById = id => {
  return bustyBurstConfig.guides.find(guide => guide.id === id);
};

export const getAllCategories = () => {
  const categories = [...new Set(bustyBurstConfig.guides.map(guide => guide.category))];
  return categories;
};

// Generate structured data for SEO
export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: bustyBurstConfig.meta.title,
    description: bustyBurstConfig.meta.description,
    url: 'https://gacha-wiki.vercel.app/guides/busty-burst/',
    about: {
      '@type': 'Game',
      name: bustyBurstConfig.meta.gameTitle,
      description: bustyBurstConfig.gameInfo.description,
      url: bustyBurstConfig.gameInfo.playUrl,
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Busty Burst Fantasy Guides',
      itemListElement: bustyBurstConfig.guides.map((guide, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'WebPage',
          name: guide.title,
          description: guide.description,
          url: `https://gacha-wiki.vercel.app${guide.url}`,
        },
      })),
    },
  };
};
