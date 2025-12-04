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
      id: 'beginner-essentials',
      title: 'Beginner Essentials',
      emoji: '',
      description: 'Getting started guides, Lord system basics, and fundamental game mechanics',
      size: 'large',
      guides: [
        {
          id: 'getting-started',
          title: 'Getting Started',
          url: '/guides/busty-burst/beginner-guide#getting-started',
        },
        {
          id: 'lord-system',
          title: 'Lord System',
          url: '/guides/busty-burst/beginner-guide#lord-system',
        },
        {
          id: 'basic-mechanics',
          title: 'Basic Mechanics',
          url: '/guides/busty-burst/beginner-guide#mechanics',
        },
      ],
    },
    {
      id: 'paladin-collection',
      title: 'Paladin Collection',
      emoji: '',
      description: 'Paladin database, summoning guide, team building, and character strategies',
      size: 'large',
      guides: [
        {
          id: 'paladins',
          title: 'Paladin Database',
          url: '/guides/busty-burst/paladins',
        },
        {
          id: 'summoning-guide',
          title: 'Summoning Guide',
          url: '/guides/busty-burst/paladins#summoning',
        },
        {
          id: 'team-building',
          title: 'Team Building',
          url: '/guides/busty-burst/paladins#teams',
        },
        {
          id: 'paladin-tier-list',
          title: 'Paladin Tier List',
          url: '/guides/busty-burst/paladins#tier-list',
        },
      ],
    },
    {
      id: 'game-mechanics',
      title: 'Game Mechanics',
      emoji: '',
      description: 'Duel system, progression mechanics, and Goddess Ruin exploration',
      size: 'medium',
      guides: [
        {
          id: 'duel-system',
          title: 'Duel System',
          url: '/guides/busty-burst/game-systems#duels',
        },
        {
          id: 'progression',
          title: 'Progression',
          url: '/guides/busty-burst/game-systems#progression',
        },
        {
          id: 'goddess-ruin',
          title: 'Goddess Ruin',
          url: '/guides/busty-burst/game-systems#goddess-ruin',
        },
      ],
    },
    {
      id: 'resources',
      title: 'Resources',
      emoji: '',
      description: 'Utility tools, codes, and game information',
      size: 'medium',
      guides: [
        {
          id: 'redeem-codes',
          title: 'Redeem Codes',
          url: '/guides/busty-burst/redeem-codes',
        },
        {
          id: 'clock',
          title: 'Clock',
          url: '/clock/busty-burst/',
        },
      ],
    },
    {
      id: 'community',
      title: 'Community',
      emoji: '',
      description: 'Events, updates, and community content',
      size: 'medium',
      guides: [
        {
          id: 'events',
          title: 'Current Events',
          url: '/guides/busty-burst/events',
        },
        {
          id: 'event-history',
          title: 'Event History',
          url: '/guides/busty-burst/events#history',
        },
      ],
    },
  ],

  // Original guides array (kept for backward compatibility)
  guides: [
    {
      id: 'getting-started',
      title: 'Getting Started',
      emoji: '',
      description:
        'Complete beginner guide for Busty Burst Fantasy. Learn the basics of the Lord system, paladin summoning, and how to climb the ranks.',
      url: '/guides/busty-burst/beginner-guide#getting-started',
      category: 'guides',
      size: 'large',
    },
    {
      id: 'paladins',
      title: 'Paladin Database',
      emoji: '',
      description:
        'Complete database of all summonable paladins from other worlds. Find detailed stats, abilities, and team composition strategies.',
      url: '/guides/busty-burst/paladins',
      category: 'guides',
      size: 'large',
    },
    {
      id: 'summoning-guide',
      title: 'Summoning Guide',
      emoji: '',
      description:
        'Learn the mechanics of summoning otherworldly paladins from the Goddess Ruin. Rates, strategies, and optimal summoning methods.',
      url: '/guides/busty-burst/paladins#summoning',
      category: 'guides',
      size: 'medium',
    },
    {
      id: 'lord-system',
      title: 'Lord System',
      emoji: '',
      description:
        'Complete guide to the Lord ranking system in the Kingdom of Vern. Understand how paladin duels affect your standing.',
      url: '/guides/busty-burst/beginner-guide#lord-system',
      category: 'guides',
      size: 'medium',
    },
    {
      id: 'duel-system',
      title: 'Duel System',
      emoji: '',
      description:
        'Master the combat mechanics of paladin duels. Strategy guide for winning battles and climbing the lord rankings.',
      url: '/guides/busty-burst/game-systems#duels',
      category: 'guides',
      size: 'medium',
    },
    {
      id: 'team-building',
      title: 'Team Building',
      emoji: '',
      description:
        'Optimal team compositions and synergy strategies for your paladin roster. Build teams that dominate duels.',
      url: '/guides/busty-burst/paladins#teams',
      category: 'guides',
      size: 'medium',
    },
    {
      id: 'goddess-ruin',
      title: 'Goddess Ruin',
      emoji: '',
      description:
        'Explore the abandoned Goddess Ruin where powerful otherworldly paladins await discovery. Location guide and unlock requirements.',
      url: '/guides/busty-burst/game-systems#goddess-ruin',
      category: 'guides',
      size: 'small',
    },
    {
      id: 'redeem-codes',
      title: 'Redeem Codes',
      emoji: '',
      description:
        'Active redeem codes for free summons, resources, and exclusive rewards. Updated regularly with new codes.',
      url: '/guides/busty-burst/redeem-codes',
      category: 'rewards',
      size: 'small',
    },
    {
      id: 'events',
      title: 'Current Events',
      emoji: '',
      description:
        "Limited-time events, special summoning banners, and exclusive rewards. Don't miss out on time-limited content.",
      url: '/guides/busty-burst/events',
      category: 'info',
      size: 'small',
    },
    {
      id: 'clock',
      title: 'Game Clock',
      emoji: '',
      description:
        'Track Busty Burst Fantasy daily reset times, energy refills, and event schedules. Never miss important game timings.',
      url: '/clock/busty-burst/',
      category: 'tools',
      size: 'small',
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
