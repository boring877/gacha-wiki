// Horizon Walker Landing Page Data
// This file contains all the content and configuration for the Horizon Walker landing page

export const horizonWalkerConfig = {
  meta: {
    title: 'Horizon Walker Wiki - Complete Character Guide, Tier Lists & Game Database | GachaWiki',
    description:
      'Complete Horizon Walker wiki with Chosen Human character guides, Forsaken Entity combat strategies, rift exploration, and transcendence mechanics. Master supernatural abilities, dimensional barriers, and otherworldly power systems in this post-apocalyptic survival RPG.',
    gameTitle: 'Horizon Walker',
    heroImage: '/images/games/horizon-walker/gameimg/1.png',
  },

  gameInfo: {
    description:
      'Humanity reached an unprecedented golden age of peace and prosperity, until strange rifts appeared across Earth. From these dimensional gates emerged the Forsaken Entities with their monstrous hordes, bringing civilization to its knees. In the darkest depths, hope emerged when the first warrior transcended mortality, becoming a Chosen Human with supernatural authority to fight back.',
    platforms: [
      {
        name: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.GentleManiac.HorizonWalkerGoogle&hl=en_US',
        type: 'censored',
        description: 'Censored version',
      },
      {
        name: 'One Store',
        url: 'https://m.onestore.net/en-sg/apps/appsDetail?prodId=0000776102',
        type: 'uncensored',
        description: 'Uncensored version (will migrate to Steam)',
      },
      {
        name: 'Ero-Labs',
        url: 'https://game.erolabsshare.net/app/f302f717/Horizon_Walker',
        type: 'uncensored',
        description: 'Uncensored version (will not migrate to Steam)',
      },
      {
        name: 'Steam',
        url: 'https://store.steampowered.com/app/3279780/Horizon_Walker/',
        type: 'uncensored',
        description: 'Uncensored version',
      },
    ],
    playUrl: 'https://store.steampowered.com/app/3279780/Horizon_Walker/',
    socialLinks: {
      twitter: 'https://x.com/_horizonwalker',
      discord: 'https://discord.com/invite/k3x8K8ZUdp',
      youtube: 'https://www.youtube.com/@official.horizonwalker',
    },
    lastUpdated: new Date(),
  },

  // Game Lore Section
  lore: {
    title: 'The Lore of Horizon Walker',
    chapters: [
      {
        title: "The Golden Age's End",
        content:
          'Humanity had reached an unprecedented golden age of peace and prosperity. Then, strange rifts began appearing across Earth, surrounded by impenetrable barriers. The eerie presence of these rifts struck terror into all living beings.',
      },
      {
        title: 'The Forsaken Invasion',
        content:
          "From these dimensional gates emerged the Forsaken Entities, leading monstrous creatures—twisted remnants of humans warped by the rift's influence. They descended in an unrelenting assault, and civilizations crumbled to ashes. The end of mankind loomed near.",
      },
      {
        title: "Humanity's Desperation",
        content:
          'No weapon forged by man could breach the barriers. Only the monsters and Forsaken Entities could pass through freely, slaughtering humanity at will. Mankind was left powerless, drowning in despair.',
      },
      {
        title: 'The First Transcendence',
        content:
          'In the darkest depths, hope emerged. A lone warrior defied fate, entered the rift, slew a Forsaken Entity, and seized its otherworldly power. In doing so, they transcended mortal existence, becoming the first Chosen Human.',
      },
      {
        title: 'The Awakened Warriors',
        content:
          'These Chosen Humans, no longer bound by mortal limitations, wielded supernatural authority and moved through barriers without restraint. With their newfound power, they exacted retribution upon the Forsaken Entities and their monstrous hordes.',
      },
      {
        title: 'The Story Begins',
        content:
          'This is the tale of one such extraordinary Chosen Human, whose story begins in the East Asian Federation.',
      },
    ],
  },

  sections: [
    {
      id: 'about',
      title: 'About',
      type: 'game-info',
    },
    {
      id: 'lore',
      title: 'Lore',
      type: 'lore-section',
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
      description: 'Character database and supernatural abilities',
      size: 'large',
      guides: [
        {
          id: 'tier-list',
          title: 'Tier List',
          url: '/guides/horizon-walker/tier-list/',
        },
        {
          id: 'builds',
          title: 'Builds',
          url: '/guides/horizon-walker/builds/',
        },
        {
          id: 'characters',
          title: 'Database',
          url: '/guides/horizon-walker/characters/',
        },
        {
          id: 'mercenaries',
          title: 'Mercenaries',
          url: '/guides/horizon-walker/mercenaries/',
        },
        {
          id: 'weapons',
          title: 'Weapons',
          url: '/guides/horizon-walker/weapons/',
        },
        {
          id: 'stigmas',
          title: 'Stigmas',
          url: '/guides/horizon-walker/stigmas/',
        },
      ],
    },
    {
      id: 'mechanics',
      title: 'Game Mechanics',
      emoji: '',
      description: 'Learn how game systems work',
      size: 'large',
      guides: [
        {
          id: 'ap-guide',
          title: 'AP Guide',
          url: '/guides/horizon-walker/ap-guide',
        },
        {
          id: 'traits',
          title: 'Traits',
          url: '/guides/horizon-walker/traits/',
        },
      ],
    },
    {
      id: 'resources',
      title: 'Resources',
      emoji: '',
      description: 'Tools and utilities for the game',
      size: 'large',
      guides: [
        {
          id: 'gifts',
          title: 'Gifts',
          url: '/guides/horizon-walker/gifts/',
        },
        {
          id: 'character-gifts',
          title: 'Character Gifts',
          url: '/guides/horizon-walker/character-gifts/',
        },
        {
          id: 'clock',
          title: 'Clock',
          url: '/clock/horizon-walker/',
        },
      ],
    },
  ],
};

// Helper functions for data manipulation
export const getGuidesByCategory = category => {
  const categoryGroup = horizonWalkerConfig.categoryGroups.find(group => group.id === category);
  return categoryGroup ? categoryGroup.guides : [];
};

export const getGuideById = id => {
  for (const category of horizonWalkerConfig.categoryGroups) {
    const guide = category.guides.find(guide => guide.id === id);
    if (guide) return guide;
  }
  return null;
};

export const getAllCategories = () => {
  return horizonWalkerConfig.categoryGroups.map(group => group.id);
};

// Generate structured data for SEO
export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: horizonWalkerConfig.meta.title,
    description: horizonWalkerConfig.meta.description,
    url: 'https://gachawiki.info/guides/horizon-walker/',
    about: {
      '@type': 'Game',
      name: horizonWalkerConfig.meta.gameTitle,
      description: horizonWalkerConfig.gameInfo.description,
      url: horizonWalkerConfig.gameInfo.playUrl,
    },
  };
};
