// Rebellion Gilgamesh Landing Page Data
// This file contains all the content and configuration for the Rebellion Gilgamesh landing page

export const rebellionGilgameshConfig = {
  meta: {
    title: 'Rebellion Gilgamesh (ルーレット契約) - Download & Character Guide 2024 | GachaWiki',
    description:
      'Download Rebellion Gilgamesh adult RPG on Erolabs. Character database, club management tips, demon world story. Play the ultimate harem creation game.',
    gameTitle: 'Rebellion Gilgamesh ルーレット契約',
    heroImage: 'BG1.jpg',
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
      description: 'Character database with stats, skills, and lore',
      size: 'large',
      guides: [
        {
          id: 'characters',
          title: 'Character Database',
          url: '/guides/rebellion-gilgamesh/characters/',
        },
      ],
    },
    {
      id: 'equipment',
      title: 'Equipment',
      emoji: '',
      description: 'Equipment database with stats and scaling',
      size: 'medium',
      guides: [
        {
          id: 'equipment',
          title: 'Equipment Database',
          url: '/guides/rebellion-gilgamesh/equipment/',
        },
      ],
    },
  ],
};
