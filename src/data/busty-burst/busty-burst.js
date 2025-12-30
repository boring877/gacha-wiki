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
    ],
  },

  // Main Category Groups
  categoryGroups: [
    {
      id: 'characters',
      title: 'Characters',
      emoji: '',
      description: 'Character guides and information',
      size: 'large',
      guides: [
        {
          id: 'character-info',
          title: 'Profiles & VAs',
          url: '/guides/busty-burst/character-info/',
        },
        {
          id: 'paladin-tier-list',
          title: 'Tier List',
          url: '/guides/busty-burst/tier-list#tier-list',
        },
        {
          id: 'build',
          title: 'Build',
          url: '/guides/busty-burst/build',
        },
        {
          id: 'support-stats',
          title: 'Support Stats',
          url: '/guides/busty-burst/support-stats/',
        },
        {
          id: 'support-bonus',
          title: 'Support Bonus',
          url: '/guides/busty-burst/support-bonus/',
        },
      ],
    },
    {
      id: 'equipment',
      title: 'Equipment',
      emoji: '',
      description: 'Weapons and accessories',
      size: 'large',
      guides: [
        {
          id: 'weapons',
          title: 'Weapons',
          url: '/guides/busty-burst/weapons',
        },
        {
          id: 'best-weapons',
          title: 'Best Weapons',
          url: '/guides/busty-burst/best-weapons',
        },
        {
          id: 'character-weapons',
          title: 'Char Weapons',
          url: '/guides/busty-burst/character-weapons',
        },
        {
          id: 'accessory-stats',
          title: 'Accessory Stats',
          url: '/guides/busty-burst/accessory-stats',
        },
        {
          id: 'accessory-items',
          title: 'Accessory Items',
          url: '/guides/busty-burst/accessory-items',
        },
        {
          id: 'accessory-guide',
          title: 'Accessory Guide',
          url: '/guides/busty-burst/accessory-guide',
        },
        {
          id: 'raid-drops',
          title: 'Raid Drops',
          url: '/guides/busty-burst/raid-drops',
        },
      ],
    },
    {
      id: 'events',
      title: 'Events',
      emoji: '',
      description: 'Event information and banners',
      size: 'large',
      guides: [
        {
          id: 'banner-timeline',
          title: 'Banner Timeline',
          url: '/guides/busty-burst/banner-timeline',
        },
      ],
    },
    {
      id: 'resources',
      title: 'Resources',
      emoji: '',
      description: 'Helpful resources and tools',
      size: 'large',
      guides: [
        {
          id: 'blog',
          title: 'Blog',
          url: '/guides/busty-burst/blog/',
        },
        {
          id: 'clock',
          title: 'Clock',
          url: '/clock/busty-burst/',
        },
        {
          id: 'redeem-codes',
          title: 'Redeem Codes',
          url: '/guides/busty-burst/redeem-codes',
        },
      ],
    },
  ],

  // Original guides array (kept for backward compatibility)
  guides: [
    // Characters
    {
      id: 'character-info',
      title: 'Profiles & VAs',
      emoji: '',
      description: 'Character profiles and voice actor information.',
      url: '/guides/busty-burst/character-info/',
      category: 'characters',
      size: 'regular',
    },
    {
      id: 'paladin-tier-list',
      title: 'Tier List',
      emoji: '',
      description:
        'Beginner tier list for BBB Busty game. Find the best paladins to pick early on in your journey.',
      url: '/guides/busty-burst/tier-list#tier-list',
      category: 'characters',
      size: 'regular',
    },
    {
      id: 'build',
      title: 'Build',
      emoji: '',
      description: 'Character build guides and recommendations.',
      url: '/guides/busty-burst/build',
      category: 'characters',
      size: 'regular',
    },
    {
      id: 'support-stats',
      title: 'Support Stats',
      emoji: '',
      description: 'Support stats per limit break level for all characters.',
      url: '/guides/busty-burst/support-stats/',
      category: 'characters',
      size: 'regular',
    },
    {
      id: 'support-bonus',
      title: 'Support Bonus',
      emoji: '',
      description: 'Element blessings and weapon inspirations for team composition.',
      url: '/guides/busty-burst/support-bonus/',
      category: 'characters',
      size: 'regular',
    },
    // Equipment
    {
      id: 'weapons',
      title: 'Weapons',
      emoji: '',
      description: 'Complete weapon database and stats.',
      url: '/guides/busty-burst/weapons',
      category: 'equipment',
      size: 'regular',
    },
    {
      id: 'best-weapons',
      title: 'Best Weapons',
      emoji: '',
      description: 'Best weapon recommendations for each character with tier list.',
      url: '/guides/busty-burst/best-weapons',
      category: 'equipment',
      size: 'regular',
    },
    {
      id: 'character-weapons',
      title: 'Char Weapons',
      emoji: '',
      description: 'Character-specific weapon recommendations.',
      url: '/guides/busty-burst/character-weapons',
      category: 'equipment',
      size: 'regular',
    },
    {
      id: 'accessory-stats',
      title: 'Accessory Stats',
      emoji: '',
      description: 'Accessory stats and bonuses.',
      url: '/guides/busty-burst/accessory-stats',
      category: 'equipment',
      size: 'regular',
    },
    {
      id: 'accessory-items',
      title: 'Accessory Items',
      emoji: '',
      description: 'Complete list of accessory items.',
      url: '/guides/busty-burst/accessory-items',
      category: 'equipment',
      size: 'regular',
    },
    {
      id: 'accessory-guide',
      title: 'Accessory Guide',
      emoji: '',
      description: 'Guide to accessories and best setups.',
      url: '/guides/busty-burst/accessory-guide',
      category: 'equipment',
      size: 'regular',
    },
    {
      id: 'raid-drops',
      title: 'Raid Drops',
      emoji: '',
      description: 'Raid drop locations and rates.',
      url: '/guides/busty-burst/raid-drops',
      category: 'equipment',
      size: 'regular',
    },
    // Events
    {
      id: 'banner-timeline',
      title: 'Banner Timeline',
      emoji: '',
      description: 'Complete history of all summon banners in Busty Burst Fantasy.',
      url: '/guides/busty-burst/banner-timeline',
      category: 'events',
      size: 'regular',
    },
    // Resources
    {
      id: 'blog',
      title: 'Blog',
      emoji: '',
      description: 'Tips, thoughts, and strategy insights for Busty Burst Fantasy players.',
      url: '/guides/busty-burst/blog/',
      category: 'resources',
      size: 'regular',
    },
    {
      id: 'clock',
      title: 'Clock',
      emoji: '',
      description: 'Server time and reset timers.',
      url: '/clock/busty-burst/',
      category: 'resources',
      size: 'regular',
    },
    {
      id: 'redeem-codes',
      title: 'Redeem Codes',
      emoji: '',
      description: 'Active redeem codes for free rewards.',
      url: '/guides/busty-burst/redeem-codes',
      category: 'resources',
      size: 'regular',
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
