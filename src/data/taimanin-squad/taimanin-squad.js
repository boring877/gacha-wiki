// Taimanin Squad Landing Page Data
// This file contains all the content and configuration for the Taimanin Squad landing page

export const taimaninSquadConfig = {
  meta: {
    title: 'Taimanin Squad Wiki - Character Guide & Game Database | GachaWiki',
    description:
      'Complete Taimanin Squad wiki with character guides, tier lists, and game database. Download now on Google Play, App Store & Galaxy Store. Collecting RPG for Android, iOS & PC.',
    gameTitle: 'Taimanin Squad',
    heroImage: '/images/games/taimanin-squad/taimanin-squad.jpg',
  },

  gameInfo: {
    description:
      'Taimanin Squad is a turn-based RPG featuring 3D characters from the legendary Taimanin franchise.',
    playUrl: 'https://play.google.com/store/apps/details?id=com.GREMORYGames.TaimaninSquad',
    apkUrl: 'https://mega.nz/file/tX0mFIhb#aM_xCfLpPuMSp-WlQlBVy9Ds5xxrXHDvsYc43MGGHW8',
    appStoreUrl: 'https://apps.apple.com/us/app/taimanin-squad/id6755016024',
    galaxyStoreUrl: 'https://galaxystore.samsung.com/detail/com.GREMORYGames.TaimaninSquad.Galaxy',
    lastUpdated: new Date(),
    status: 'released',
    openBeta: 'Now available on Google Play, App Store, and Galaxy Store!',
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
          id: 'tier-list',
          title: 'Tier List',
          url: '/guides/taimanin-squad/tier-list/',
          external: false,
        },
        {
          id: 'character-lore',
          title: 'Character Lore',
          url: '/guides/taimanin-squad/character-lore/',
          external: false,
        },
        {
          id: 'character-stats',
          title: 'Character Stats',
          url: '/guides/taimanin-squad/character-stats/',
          external: false,
        },
        {
          id: 'skills',
          title: 'Skills',
          url: '/guides/taimanin-squad/skills/',
          external: false,
        },
        {
          id: 'buff-debuff',
          title: 'Buffs & Debuffs',
          url: '/guides/taimanin-squad/buff-debuff/',
          external: false,
        },
        {
          id: 'mechanics',
          title: 'Game Mechanics',
          url: '/guides/taimanin-squad/mechanics/',
          external: false,
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
          id: 'blog',
          title: 'Blog',
          url: '/guides/taimanin-squad/blog/',
          external: false,
        },
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
      id: 'tier-list',
      title: 'Tier List',
      emoji: '',
      description: 'Character tier rankings for Taimanin Squad PvE and PvP content.',
      url: '/guides/taimanin-squad/tier-list/',
      category: 'info',
      size: 'medium',
      external: false,
    },
    {
      id: 'character-lore',
      title: 'Character Lore',
      emoji: '',
      description: 'Read the lore and backstories of all Taimanin Squad characters.',
      url: '/guides/taimanin-squad/character-lore/',
      category: 'info',
      size: 'medium',
      external: false,
    },
    {
      id: 'character-stats',
      title: 'Character Stats',
      emoji: '',
      description: 'View character stats by level including HP, ATK, DEF, SPD, and more.',
      url: '/guides/taimanin-squad/character-stats/',
      category: 'info',
      size: 'medium',
      external: false,
    },
    {
      id: 'buff-debuff',
      title: 'Buffs & Debuffs',
      emoji: '',
      description: 'Complete reference for all buff and debuff status effects in Taimanin Squad.',
      url: '/guides/taimanin-squad/buff-debuff/',
      category: 'info',
      size: 'medium',
      external: false,
    },
    {
      id: 'skills',
      title: 'Skills',
      emoji: '',
      description: 'Complete database of all character skills and abilities in Taimanin Squad.',
      url: '/guides/taimanin-squad/skills/',
      category: 'info',
      size: 'medium',
      external: false,
    },
    {
      id: 'mechanics',
      title: 'Game Mechanics',
      emoji: '',
      description: 'Complete guide to damage formulas, elements, classes, personalities, and stat systems.',
      url: '/guides/taimanin-squad/mechanics/',
      category: 'info',
      size: 'medium',
      external: false,
    },
    {
      id: 'blog',
      title: 'Blog',
      emoji: '',
      description: 'Tips, strategies, news, and insights for Taimanin Squad players.',
      url: '/guides/taimanin-squad/blog/',
      category: 'resources',
      size: 'medium',
      external: false,
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
