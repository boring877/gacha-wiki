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
    // Characters
    {
      id: 'characters',
      title: 'Characters',
      description: 'Full character database with stats, skills and profiles.',
      url: '/guides/star-savior/characters/',
      category: 'characters',
      size: 'large',
    },
    {
      id: 'character-tier-list',
      title: 'Tier List',
      description: 'Character tier rankings for all content.',
      url: '/guides/star-savior/characters/tier-list/',
      category: 'characters',
      size: 'regular',
    },
    {
      id: 'banners',
      title: 'Banners',
      description: 'Complete gacha banner history.',
      url: '/guides/star-savior/banners/',
      category: 'characters',
      size: 'regular',
    },
    {
      id: 'summon-or-skip',
      title: 'Summon or Skip?',
      description: 'Our pull recommendations for current gacha banners.',
      url: '/guides/star-savior/banners/summon-or-skip/',
      category: 'characters',
      size: 'regular',
    },
    {
      id: 'buffs',
      title: 'Buffs & Debuffs',
      description: 'Complete buff and debuff reference.',
      url: '/guides/star-savior/buffs/',
      category: 'characters',
      size: 'regular',
    },
    // Arcana
    {
      id: 'arcana',
      title: 'Arcana Database',
      description: '67 arcana with stats, effects and journey details.',
      url: '/guides/star-savior/arcana/',
      category: 'arcana',
      size: 'large',
    },
    {
      id: 'arcana-tier-list',
      title: 'Arcana Tier List',
      description: 'Arcana ranked by value and utility.',
      url: '/guides/star-savior/arcana/tier-list/',
      category: 'arcana',
      size: 'regular',
    },
    // Equipment
    {
      id: 'gear',
      title: 'Equipment Database',
      description: '108 equipment items with stats and set bonuses.',
      url: '/guides/star-savior/gear/',
      category: 'equipment',
      size: 'large',
    },
    {
      id: 'builds',
      title: 'Builds',
      description: 'Character build guides and recommendations.',
      url: '/guides/star-savior/builds/',
      category: 'equipment',
      size: 'regular',
    },
    // Journey
    {
      id: 'journey-items',
      title: 'Journey Items',
      description: 'Complete journey items database.',
      url: '/guides/star-savior/journey-items/',
      category: 'journey',
      size: 'regular',
    },
    {
      id: 'journey-events',
      title: 'Journey Events',
      description: 'Event choices and optimal selections.',
      url: '/guides/star-savior/journey/events/',
      category: 'journey',
      size: 'regular',
    },
    {
      id: 'journey-trajectory',
      title: 'Trajectory Guide',
      description: 'Journey trajectory and path recommendations.',
      url: '/guides/star-savior/journey/trajectory/',
      category: 'journey',
      size: 'regular',
    },
    // Resources
    {
      id: 'blog',
      title: 'Blog',
      description: 'Guides and strategy posts.',
      url: '/guides/star-savior/blog/',
      category: 'resources',
      size: 'regular',
    },
    {
      id: 'redeem-codes',
      title: 'Redeem Codes',
      description: 'Active redeem codes for free rewards.',
      url: '/guides/star-savior/redeem-codes/',
      category: 'resources',
      size: 'regular',
    },
    {
      id: 'clock',
      title: 'Clock',
      description: 'Server time and reset timers.',
      url: '/clock/star-savior/',
      category: 'resources',
      size: 'regular',
    },
  ],

  categoryGroups: [
    {
      id: 'characters',
      title: 'Characters',
      emoji: '',
      description: 'Character database, tier list, banners, and buffs',
      size: 'large',
      guides: [
        { id: 'ss-characters', title: 'Database', url: '/guides/star-savior/characters/' },
        { id: 'ss-tier-list', title: 'Tier List', url: '/guides/star-savior/characters/tier-list/' },
        { id: 'ss-banners', title: 'Banners', url: '/guides/star-savior/banners/' },
        { id: 'ss-summon-or-skip', title: 'Summon or Skip?', url: '/guides/star-savior/banners/summon-or-skip/' },
        { id: 'ss-buffs', title: 'Buffs & Debuffs', url: '/guides/star-savior/buffs/' },
      ],
    },
    {
      id: 'arcana',
      title: 'Arcana',
      emoji: '',
      description: 'Arcana cards database and rankings',
      size: 'small',
      guides: [
        { id: 'ss-arcana', title: 'Database', url: '/guides/star-savior/arcana/' },
        { id: 'ss-arcana-tier', title: 'Tier List', url: '/guides/star-savior/arcana/tier-list/' },
      ],
    },
    {
      id: 'equipment',
      title: 'Equipment',
      emoji: '',
      description: 'Equipment database and builds',
      size: 'small',
      guides: [
        { id: 'ss-gear', title: 'Database', url: '/guides/star-savior/gear/' },
        { id: 'ss-builds', title: 'Builds', url: '/guides/star-savior/builds/' },
      ],
    },
    {
      id: 'journey',
      title: 'Journey',
      emoji: '',
      description: 'Journey items, event choices, and trajectory',
      size: 'medium',
      guides: [
        { id: 'ss-journey-items', title: 'Items Database', url: '/guides/star-savior/journey-items/' },
        { id: 'ss-journey-events', title: 'Event Choices', url: '/guides/star-savior/journey/events/' },
        { id: 'ss-journey-trajectory', title: 'Trajectory Guide', url: '/guides/star-savior/journey/trajectory/' },
      ],
    },
    {
      id: 'resources',
      title: 'Resources',
      emoji: '',
      description: 'Blog, codes, and utility tools',
      size: 'medium',
      guides: [
        { id: 'ss-blog', title: 'Blog', url: '/guides/star-savior/blog/' },
        { id: 'ss-codes', title: 'Redeem Codes', url: '/guides/star-savior/redeem-codes/' },
        { id: 'ss-clock', title: 'Clock', url: '/clock/star-savior/' },
      ],
    },
  ],
};
