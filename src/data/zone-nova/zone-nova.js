// Zone Nova Landing Page Data
// This file contains all the content and configuration for the Zone Nova landing page

export const zoneNovaConfig = {
  meta: {
    title: 'Zone Nova - GachaWiki',
    description: 'Explore Zone Nova gacha game guides and content',
    gameTitle: 'Zone Nova',
    heroImage: '/images/games/zone-nova/zonenova1.jpg',
  },

  gameInfo: {
    description:
      'In the year 20XX, mysterious black spheres suddenly appeared hovering above cities worldwide, drawing the attention of all nations. However, these spheres instantly expanded into massive black holes, crashing down and destroying everything in their path.',
    playUrl: 'https://game.erolabsshare.net/app/f302f717/Zone_Nova',
    lastUpdated: new Date(), // This will be dynamically generated
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

  guides: [
    {
      id: 'clock',
      title: 'Clock',
      emoji: '⏰',
      description:
        'Track Zone Nova daily reset times and server events. Never miss dailies, energy refills, or farming sessions with our real-time Zone Nova clock.',
      url: '/clock/zone-nova/',
      category: 'tools',
    },
    {
      id: 'updates',
      title: 'Updates',
      emoji: '🔧',
      description: 'Patch notes, maintenance, and announcements.',
      url: '/guides/zone-nova/updates/',
      category: 'info',
    },

    {
      id: 'characters',
      title: 'Characters',
      emoji: '⚔️',
      description: 'Character guides, skills Information, and more !.',
      url: '/guides/zone-nova/characters/',
      category: 'guides',
    },
    {
      id: 'tier-list',
      title: 'Tier List',
      emoji: '⚡',
      description:
        'Comprehensive tier lists for PvE, PvP, Rifts, and Guild Raids with meta analysis.',
      url: '/guides/zone-nova/tier-list/',
      category: 'guides',
    },
    {
      id: 'character-comparison',
      title: 'Character Comparison',
      emoji: '📊',
      description:
        'Compare up to 4 characters side by side to analyze their stats and roles for optimal team building.',
      url: '/guides/zone-nova/character-comparison/',
      category: 'guides',
    },
    {
      id: 'character-rankings',
      title: 'Character Rankings',
      emoji: '📈',
      description:
        'View character stat rankings and overall performance analysis across HP, ATK, and DEF.',
      url: '/guides/zone-nova/character-rankings/',
      category: 'guides',
    },
    {
      id: 'character-tags',
      title: 'Character Tag Selection',
      emoji: '🏷️',
      description:
        'Filter and discover characters by gameplay tags, class, rarity, element, faction, and role.',
      url: '/guides/zone-nova/character-tags/',
      category: 'guides',
    },
    {
      id: 'memories',
      title: 'Memory Database',
      emoji: '🃏',
      description: 'Sortable memory cards database with stats, effects, and characters.',
      url: '/guides/zone-nova/memories/',
      category: 'guides',
    },
    {
      id: 'rifts',
      title: 'Space-Time Rifts',
      emoji: '🌀',
      description: 'Rift Laws, mechanics, events, and rewards guide.',
      url: '/guides/zone-nova/rifts/',
      category: 'guides',
    },
    {
      id: 'team-synergy',
      title: 'Team Synergy',
      emoji: '🤝',
      description:
        'Effective team compositions for Rifts, Guild Raids, and character-specific synergies.',
      url: '/guides/zone-nova/team-synergy/',
      category: 'guides',
    },
    {
      id: 'runes',
      title: 'Runes',
      emoji: '🔮',
      description: 'All runes stats and sub stats, and items set stats.',
      url: '/guides/zone-nova/runes/',
      category: 'guides',
    },
    {
      id: 'crafting',
      title: 'Crafting',
      emoji: '🔨',
      description: 'Where to craft items and how to craft them.',
      url: '/guides/zone-nova/crafting/',
      category: 'guides',
    },
    {
      id: 'damage-mechanics',
      title: 'Damage Mechanics',
      emoji: '⚔️',
      description: "Complete guide to Zone Nova's damage calculation system and defense mechanics.",
      url: '/guides/zone-nova/damage-mechanics/',
      category: 'guides',
    },
    {
      id: 'summon-faq',
      title: 'Summon FAQ',
      emoji: '💎',
      description: 'Complete guide to summoning, rates, pity system, and strategies.',
      url: '/guides/zone-nova/summon-faq/',
      category: 'guides',
    },
    {
      id: 'redeem-codes',
      title: 'Redeem Codes',
      emoji: '🎁',
      description: 'Active redeem codes for free gems, energy, characters and rewards.',
      url: '/guides/zone-nova/redeem-codes/',
      category: 'rewards',
    },
    {
      id: 'surveys',
      title: 'Player Surveys',
      emoji: '📋',
      description: 'Official Zone Nova player surveys and translations.',
      url: '/guides/zone-nova/surveys/',
      category: 'community',
    },
    {
      id: 'contributing',
      title: 'Contributing',
      emoji: '📝',
      description: 'Learn how to contribute to the Zone Nova guides.',
      url: '/guides/zone-nova/contributing/',
      category: 'community',
    },
  ],
};

// Helper functions for data manipulation
export const getGuidesByCategory = category => {
  return zoneNovaConfig.guides.filter(guide => guide.category === category);
};

export const getGuideById = id => {
  return zoneNovaConfig.guides.find(guide => guide.id === id);
};

export const getAllCategories = () => {
  const categories = [...new Set(zoneNovaConfig.guides.map(guide => guide.category))];
  return categories;
};

// Generate structured data for SEO
export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: zoneNovaConfig.meta.title,
    description: zoneNovaConfig.meta.description,
    url: 'https://gacha-wiki.vercel.app/guides/zone-nova/',
    about: {
      '@type': 'Game',
      name: zoneNovaConfig.meta.gameTitle,
      description: zoneNovaConfig.gameInfo.description,
      url: zoneNovaConfig.gameInfo.playUrl,
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Zone Nova Guides',
      itemListElement: zoneNovaConfig.guides.map((guide, index) => ({
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
