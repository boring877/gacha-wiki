// Make Drama Landing Page Data

export const makeDramaConfig = {
  meta: {
    title: 'Make Drama Wiki - Characters & Guides | GachaWiki',
    description:
      'Make Drama: M.A.D wiki with character database, faction info, element guide and more. Mobile Action Defense RPG by Wemade Connect.',
    gameTitle: 'Make Drama',
  },

  gameInfo: {
    description:
      'Make Drama: M.A.D is a Mobile Action Defense RPG by Wemade Connect. Collect unique characters across 4 factions - Humanitas, Vermont, Sagunjwa, and Unclassifiable - each with distinct elements and roles. Currently in pre-registration for Korea.',
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
      description: '10 revealed characters with faction, element, and role info.',
      url: '/guides/make-drama/characters/',
      category: 'characters',
      size: 'large',
    },
  ],

  categoryGroups: [
    {
      id: 'characters',
      title: 'Characters',
      emoji: '',
      description: 'Character database and profiles',
      size: 'small',
      guides: [
        { id: 'md-characters', title: 'Database', url: '/guides/make-drama/characters/' },
      ],
    },
  ],
};
