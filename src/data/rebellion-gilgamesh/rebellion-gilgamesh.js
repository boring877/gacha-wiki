// Rebellion Gilgamesh Landing Page Data
// This file contains all the content and configuration for the Rebellion Gilgamesh landing page

export const rebellionGilgameshConfig = {
  meta: {
    title: 'Rebellion Gilgamesh Wiki - Character Guide, Club Management & Strategy | GachaWiki',
    description:
      'Complete guide for Rebellion Gilgamesh adult RPG. Character database, club management tips, special moves, and story walkthrough. Download and play the ultimate harem creation game.',
    gameTitle: 'Rebellion Gilgamesh ルーレット契約',
    heroImage: '/images/games/rebellion-gilgamesh/main-images/BG1.jpg',
  },

  gameInfo: {
    description:
      "All the charming slaves are in my hands, let's create the ultimate harem together! The magic of books will take you into a fantasy experience of delusion! Unreserved, fun-filled gaming experience! Open the door to new adventures! Perform super gorgeous special moves with cute friends!",
    playUrl: 'https://game.erolabsshare.net/app/f302f717/Rebellion_Gilgamesh',
    socialLinks: {
      twitter: 'https://x.com/rebgilgame',
      erolabs: 'https://game.erolabsshare.net/app/f302f717/Rebellion_Gilgamesh',
      dmm: 'https://rebgil.funyoursjapan.pink/res/rebgil.html',
    },
    lastUpdated: new Date(),
  },

  sections: [
    {
      id: 'about',
      title: 'Game Introduction',
      type: 'game-info',
    },
    {
      id: 'story',
      title: 'Story',
      type: 'story-content',
    },
    {
      id: 'features',
      title: 'Game Features',
      type: 'features-grid',
    },
    {
      id: 'resources',
      title: 'Game Resources',
      type: 'coming-soon',
    },
  ],

  // Story content
  story: {
    content: [
      'The world is ruled by demons. Most humans have become their labor and toys, while only a few humans and demi-humans survive in the ancient castle at the edge of the world.',
      '',
      'Under demon rule, all creatures are treated like livestock and suffer cruel domination. The population of humans and demi-humans has decreased by over 80%.',
      '',
      "To secure their workforce, demons designated select humans and demi-humans as 'honorary demons,' granting them authority to manage their own kind and ensure a constant labor supply for all demons.",
      '',
      'As the son of one of only 72 privileged individuals, you decide to establish an estate with the help of a free-spirited yet remarkable woman.',
      '',
      'Using your attendants to become the savior of humanity, while being loved by women across the land—this is your path to glory.',
    ],
  },

  // Game features
  features: [
    {
      id: 'characters',
      emoji: '🎭',
      title: 'Character Collection',
      description: 'Collect and manage various charming characters in your quest to save humanity.',
    },
    {
      id: 'club-management',
      emoji: '🏛️',
      title: 'Club Management',
      description: 'Build and manage your own club as one of the 72 sons of a slave owner.',
    },
    {
      id: 'special-moves',
      emoji: '⚔️',
      title: 'Special Moves',
      description: 'Perform super gorgeous special moves with your cute friends in combat.',
    },
    {
      id: 'story',
      emoji: '📖',
      title: 'Rich Story',
      description: 'Experience a deep fantasy narrative in a demon-ruled world.',
    },
  ],

  // Future category groups (when content is ready)
  categoryGroups: [
    {
      id: 'characters',
      title: 'Characters',
      emoji: '',
      description: 'Character database, guides, and rankings',
      size: 'large',
      guides: [
        {
          id: 'characters',
          title: 'Database',
          url: '/guides/rebellion-gilgamesh/characters/',
        },
        {
          id: 'tier-list',
          title: 'Tier List',
          url: '/guides/rebellion-gilgamesh/tier-list/',
        },
        {
          id: 'character-rankings',
          title: 'Rankings',
          url: '/guides/rebellion-gilgamesh/character-rankings/',
        },
      ],
    },
    {
      id: 'club-management',
      title: 'Club Management',
      emoji: '',
      description: 'Club building, slave management, and business strategies',
      size: 'medium',
      guides: [
        {
          id: 'club-guide',
          title: 'Club Guide',
          url: '/guides/rebellion-gilgamesh/club-guide/',
        },
        {
          id: 'slave-management',
          title: 'Slave Management',
          url: '/guides/rebellion-gilgamesh/slave-management/',
        },
      ],
    },
    {
      id: 'special-moves',
      title: 'Special Moves',
      emoji: '',
      description: 'Combat abilities and special move mechanics',
      size: 'medium',
      guides: [
        {
          id: 'moves-database',
          title: 'Moves Database',
          url: '/guides/rebellion-gilgamesh/moves-database/',
        },
        {
          id: 'combat-guide',
          title: 'Combat Guide',
          url: '/guides/rebellion-gilgamesh/combat-guide/',
        },
      ],
    },
  ],
};
