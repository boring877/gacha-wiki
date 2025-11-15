// Zone Nova Landing Page Data
// This file contains all the content and configuration for the Zone Nova landing page

export const zoneNovaConfig = {
  meta: {
    title: 'Zone Nova Wiki - Complete Character Guide, Tier Lists & Game Database | GachaWiki',
    description:
      'Complete Zone Nova wiki with character tier lists, SSR rankings, memory cards, damage mechanics, and team building guides. Latest Zone Nova character database, rifts, runes, and meta strategies for 2025.',
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

  // Main Category Groups
  categoryGroups: [
    {
      id: 'characters',
      title: 'Characters',
      emoji: '',
      description: 'Character database, rankings, comparisons, and tier lists',
      size: 'large',
      guides: [
        {
          id: 'characters',
          title: 'Database',
          url: '/guides/zone-nova/characters/',
        },
        {
          id: 'tier-list',
          title: 'Tier List',
          url: '/guides/zone-nova/tier-list/',
        },
        {
          id: 'character-rankings',
          title: 'Rankings',
          url: '/guides/zone-nova/character-rankings/',
        },
        {
          id: 'character-comparison',
          title: 'Comparison',
          url: '/guides/zone-nova/character-comparison/',
        },
        {
          id: 'character-comparison-v2',
          title: 'Comparison V2',
          url: '/guides/zone-nova/character-comparison-v2/',
        },
        {
          id: 'character-builds',
          title: 'Character Builds',
          url: '/guides/zone-nova/character-builds/',
        },
        {
          id: 'character-tags',
          title: 'Tags',
          url: '/guides/zone-nova/character-tags/',
        },
      ],
    },
    {
      id: 'combat',
      title: 'Combat',
      emoji: '',
      description: 'Damage mechanics, rifts, memories, and team strategies',
      size: 'large',
      guides: [
        {
          id: 'damage-mechanics',
          title: 'Damage Hub',
          url: '/guides/zone-nova/damage-mechanics/',
        },
        {
          id: 'rifts',
          title: 'Rifts',
          url: '/guides/zone-nova/rifts/',
        },
        {
          id: 'rift-teams',
          title: 'Rift Teams',
          url: '/guides/zone-nova/rift-teams/',
        },
        {
          id: 'memories',
          title: 'Memories',
          url: '/guides/zone-nova/memories/',
        },
        {
          id: 'team-synergy',
          title: 'Team Synergy',
          url: '/guides/zone-nova/team-synergy/',
        },
      ],
    },
    {
      id: 'progression',
      title: 'Progression',
      emoji: '',
      description: 'Runes, crafting, and character progression systems',
      size: 'medium',
      guides: [
        {
          id: 'exp-requirements',
          title: 'EXP Requirements',
          url: '/guides/zone-nova/exp-requirements/',
        },
        {
          id: 'runes',
          title: 'Runes',
          url: '/guides/zone-nova/runes/',
        },
        {
          id: 'crafting',
          title: 'Crafting',
          url: '/guides/zone-nova/crafting/',
        },
        {
          id: 'crafting-items',
          title: 'Crafting Items',
          url: '/guides/zone-nova/crafting-items/',
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
          id: 'clock',
          title: 'Clock',
          url: '/clock/zone-nova/',
        },
        {
          id: 'redeem-codes',
          title: 'Redeem Codes',
          url: '/guides/zone-nova/redeem-codes/',
        },
        {
          id: 'summon-faq',
          title: 'Summon FAQ',
          url: '/guides/zone-nova/summon-faq/',
        },
      ],
    },
    {
      id: 'community',
      title: 'Community',
      emoji: '',
      description: 'Updates, surveys, and community contributions',
      size: 'medium',
      guides: [
        {
          id: 'updates',
          title: 'Updates',
          url: '/guides/zone-nova/updates/',
        },
        {
          id: 'surveys',
          title: 'Surveys',
          url: '/guides/zone-nova/surveys/',
        },
        {
          id: 'contributing',
          title: 'Contributing',
          url: '/guides/zone-nova/contributing/',
        },
      ],
    },
  ],

  // Original guides array (kept for backward compatibility)
  guides: [
    {
      id: 'clock',
      title: 'Clock',
      emoji: '',
      description:
        'Track Zone Nova daily reset times and server events. Never miss dailies, energy refills, or farming sessions with our real-time Zone Nova clock.',
      url: '/clock/zone-nova/',
      category: 'tools',
      size: 'small',
    },
    {
      id: 'updates',
      title: 'Updates',
      emoji: '',
      description: 'Patch notes, maintenance, and announcements.',
      url: '/guides/zone-nova/updates/',
      category: 'info',
      size: 'small',
    },

    {
      id: 'characters',
      title: 'Characters',
      emoji: '',
      description: 'Character guides, skills Information, and more !.',
      url: '/guides/zone-nova/characters/',
      category: 'guides',
      size: 'large',
    },
    {
      id: 'tier-list',
      title: 'Tier List',
      emoji: '',
      description:
        'Comprehensive tier lists for PvE, PvP, Rifts, and Guild Raids with meta analysis.',
      url: '/guides/zone-nova/tier-list/',
      category: 'guides',
      size: 'large',
    },
    {
      id: 'character-comparison',
      title: 'Character Comparison',
      emoji: '',
      description:
        'Compare up to 4 characters side by side to analyze their stats and roles for optimal team building.',
      url: '/guides/zone-nova/character-comparison/',
      category: 'guides',
      size: 'medium',
    },
    {
      id: 'character-comparison-v2',
      title: 'Character Comparison V2',
      emoji: '',
      description:
        'Enhanced card-based comparison tool! Compare 2 characters with detailed stats, skills, team abilities, and streamlined design.',
      url: '/guides/zone-nova/character-comparison-v2/',
      category: 'guides',
      size: 'medium',
    },
    {
      id: 'character-rankings',
      title: 'Character Rankings',
      emoji: '',
      description:
        'View character stat rankings and overall performance analysis across HP, ATK, and DEF.',
      url: '/guides/zone-nova/character-rankings/',
      category: 'guides',
      size: 'medium',
    },
    {
      id: 'character-builds',
      title: 'Character Builds',
      emoji: '',
      description:
        'Complete build guides for all Zone Nova characters. Find optimal equipment, skill priorities, and team compositions.',
      url: '/guides/zone-nova/character-builds/',
      category: 'guides',
      size: 'large',
    },
    {
      id: 'character-tags',
      title: 'Character Tag Selection',
      emoji: '',
      description:
        'Filter and discover characters by gameplay tags, class, rarity, element, faction, and role.',
      url: '/guides/zone-nova/character-tags/',
      category: 'guides',
      size: 'small',
    },
    {
      id: 'memories',
      title: 'Memory Database',
      emoji: '',
      description: 'Sortable memory cards database with stats, effects, and characters.',
      url: '/guides/zone-nova/memories/',
      category: 'guides',
      size: 'large',
    },
    {
      id: 'rifts',
      title: 'Space-Time Rifts',
      emoji: '',
      description: 'Rift Laws, mechanics, events, and rewards guide.',
      url: '/guides/zone-nova/rifts/',
      category: 'guides',
      size: 'medium',
    },
    {
      id: 'rift-teams',
      title: 'Rift Teams',
      emoji: '',
      description:
        'Specialized team compositions optimized for different Space-Time Rift levels and challenges.',
      url: '/guides/zone-nova/rift-teams/',
      category: 'guides',
      size: 'medium',
    },
    {
      id: 'team-synergy',
      title: 'Team Synergy',
      emoji: '',
      description:
        'General team compositions for Guild Raids, PvE content, and character-specific synergies.',
      url: '/guides/zone-nova/team-synergy/',
      category: 'guides',
      size: 'medium',
    },
    {
      id: 'runes',
      title: 'Runes',
      emoji: '',
      description: 'All runes stats and sub stats, and items set stats.',
      url: '/guides/zone-nova/runes/',
      category: 'guides',
      size: 'small',
    },
    {
      id: 'exp-requirements',
      title: 'EXP Requirements',
      emoji: '',
      description:
        'Complete guide to character and memory leveling requirements, breakthrough materials, and EXP costs.',
      url: '/guides/zone-nova/exp-requirements/',
      category: 'guides',
      size: 'medium',
    },
    {
      id: 'crafting',
      title: 'Crafting',
      emoji: '',
      description: 'Where to craft items and how to craft them.',
      url: '/guides/zone-nova/crafting/',
      category: 'guides',
      size: 'small',
    },
    {
      id: 'crafting-items',
      title: 'Crafting Items',
      emoji: '',
      description: 'Complete database of crafting materials, tools, and resources.',
      url: '/guides/zone-nova/crafting-items/',
      category: 'guides',
      size: 'small',
    },
    {
      id: 'damage-mechanics',
      title: 'Damage Mechanics',
      emoji: '',
      description: "Complete guide to Zone Nova's damage calculation system and defense mechanics.",
      url: '/guides/zone-nova/damage-mechanics/',
      category: 'guides',
      size: 'medium',
    },
    {
      id: 'summon-faq',
      title: 'Summon FAQ',
      emoji: '',
      description: 'Complete guide to summoning, rates, pity system, and strategies.',
      url: '/guides/zone-nova/summon-faq/',
      category: 'guides',
      size: 'small',
    },
    {
      id: 'redeem-codes',
      title: 'Redeem Codes',
      emoji: '',
      description: 'Active redeem codes for free gems, energy, characters and rewards.',
      url: '/guides/zone-nova/redeem-codes/',
      category: 'rewards',
      size: 'small',
    },
    {
      id: 'surveys',
      title: 'Player Surveys',
      emoji: '',
      description: 'Official Zone Nova player surveys and translations.',
      url: '/guides/zone-nova/surveys/',
      category: 'community',
      size: 'small',
    },
    {
      id: 'contributing',
      title: 'Contributing',
      emoji: '',
      description: 'Learn how to contribute to the Zone Nova guides.',
      url: '/guides/zone-nova/contributing/',
      category: 'community',
      size: 'small',
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
