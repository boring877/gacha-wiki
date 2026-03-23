// Star Savior Landing Page Data

export const starSaviorConfig = {
  meta: {
    title: 'Star Savior Wiki - Characters, Stats & Guides | GachaWiki',
    description:
      'Star Savior wiki with character database, stats, skills, Nova Burst guides, limit break info and more.',
    gameTitle: 'Star Savior',
    heroImage: 'gameLogo.webp',
  },

  gameInfo: {
    description:
      'Star Savior is a turn-based RPG by StudioBside where players take on the role of a Savior, embarking on a journey through diverse regions while commanding a team of unique characters with distinct roles and abilities.',
    lastUpdated: new Date(),
  },

  sections: [
    { id: 'about', title: 'About', type: 'game-info' },
    { id: 'resources', title: 'Resources', type: 'guides-grid' },
  ],

  guides: [
    {
      id: 'characters',
      title: 'Characters',
      description: 'Full character database with stats, skills and profiles.',
      url: '/guides/star-savior/characters/',
      category: 'characters',
      size: 'large',
    },
  ],
};
