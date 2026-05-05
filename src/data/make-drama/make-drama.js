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

  story: {
    content: [
      'Falling right on top of three gorgeous troublemakers on the run, our MC ends up rolling around in a tangled heap with them —only to get busted by the cops and thrown straight into the slammer...',
      '"Life\'s no fun without a little spice and a new challenge."',
      '"Let\'s pull off something so completely unhinged that it\'ll shock the whole world."',
      '"We are breaking out."',
      'Driven solely by the desire to live his best life, our MC isn\'t afraid to pull off all sorts of bizarre antics. What kind of fate awaits \'MAke Drama\', the ragtag crew formed by him and the three bread thieves?',
      'The MC\'s utterly chaotic isekai life begins right here!',
    ],
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
