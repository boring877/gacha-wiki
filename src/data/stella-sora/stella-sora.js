export const stellaSoraConfig = {
  meta: {
    title: 'Stella Sora Wiki & Download - Trekker Guide, Nova Continent & Strategy',
    description:
      "Download Stella Sora - Fantasy RPG set in Nova Continent. Complete character guides, Trekker collection tips & strategy for Yostar's latest adventure.",
    gameTitle: 'Stella Sora ステラソラ',
    heroImage: '/images/games/stella-sora/gameimg/BG1.jpg',
  },

  version: {
    current: '1.4',
    name: 'Radiant Messenger, Holy Night Spirit',
    releaseDate: '2025-12-22',
    eventPageUrl: '/guides/stella-sora/events/version-1-4-radiant-messenger-holy-night-spirit/',
  },

  gameInfo: {
    playUrl: 'https://play.google.com/store/apps/details?id=com.YoStarEN.StellaSora',
    iosUrl: 'https://apps.apple.com/app/stella-sora/id6737498123',
    winUrl: 'https://stellasora.global/',
    lastUpdated: new Date('2026-04-04'),
    socialLinks: {
      twitter: 'https://x.com/StellaSoraEN',
      twitterJP: 'https://x.com/StellaSoraJP',
      youtube: 'https://www.youtube.com/@StellaSoraJP',
      website: 'https://stellasora.global/',
      facebook: 'https://www.facebook.com/StellaSoraEN/',
      discord: 'https://discord.gg/stellasoraofficial',
    },
  },

  story: {
    content: [
      'In this top-down, light-action adventure game developed by Yostar, play as the Tyrant in a captivating fantasy world. Create memorable bonds with charming girls known as Trekkers, assemble perfect teams for diverse adventures, and conquer the mysterious Monoliths. Packed with exhilarating battles, randomized perks each run, and a variety of in-game features, Stella Sora will keep you coming back for more. Tyrant, your legacy awaits!',
    ],
  },

  features: [
    {
      title: 'Trekker Collection',
      description:
        'Collect and interact with diverse characters, each with unique personalities, skills, and storylines.',
    },
    {
      title: 'Dynamic Combat',
      description:
        'Engage in top-down 3D action battles with intuitive controls and auto mode support.',
    },
    {
      title: 'Bond Building',
      description:
        'Deepen relationships through the Cococha system, unlock special animations and story content.',
    },
    {
      title: 'Nova Continent',
      description:
        'Explore a vast fantasy world filled with mysterious Star Towers and hidden secrets.',
    },
  ],

  categoryGroups: [
    {
      id: 'characters',
      title: 'Characters',
      emoji: '',
      description: 'Character database, builds, skills, and tier lists',
      size: 'large',
      guides: [
        { id: 'st-characters', title: 'Database', url: '/guides/stella-sora/characters/' },
        { id: 'st-tier-list', title: 'Tier List', url: '/guides/stella-sora/tier-list/' },
        { id: 'st-char-skills', title: 'Skills', url: '/guides/stella-sora/character-skills/' },
        { id: 'st-char-info', title: 'Profiles & VAs', url: '/guides/stella-sora/character-info/' },
        { id: 'st-talents', title: 'Talents', url: '/guides/stella-sora/talents/' },
        { id: 'st-potentials', title: 'All Potentials', url: '/guides/stella-sora/all-potentials/' },
        { id: 'st-upgrades', title: 'Upgrades', url: '/guides/stella-sora/character-upgrades/' },
        { id: 'st-stats', title: 'Stats', url: '/guides/stella-sora/character-stats/' },
        { id: 'st-team-builds', title: 'Team Builds', url: '/guides/stella-sora/team-builds/' },
      ],
    },
    {
      id: 'equipment',
      title: 'Equipment',
      emoji: '',
      description: 'Discs, support notes, emblem stats, and materials',
      size: 'large',
      guides: [
        { id: 'st-discs', title: 'Discs', url: '/guides/stella-sora/discs/' },
        { id: 'st-disc-skills', title: 'Disc Skills', url: '/guides/stella-sora/disc-skills/' },
        { id: 'st-disc-stats', title: 'Disc Stats', url: '/guides/stella-sora/disc-stats/' },
        { id: 'st-disc-upgrades', title: 'Disc Upgrades', url: '/guides/stella-sora/disc-upgrades/' },
        { id: 'st-support-notes', title: 'Support Notes', url: '/guides/stella-sora/support-notes/' },
        { id: 'st-emblem-stats', title: 'Emblem Stats', url: '/guides/stella-sora/emblem-stats/' },
        { id: 'st-materials', title: 'Materials', url: '/guides/stella-sora/materials-database/' },
      ],
    },
    {
      id: 'dating',
      title: 'Dating',
      emoji: '',
      description: 'Dating events and gift guides',
      size: 'medium',
      guides: [
        { id: 'st-dating', title: 'Dating Events', url: '/guides/stella-sora/dating/' },
        { id: 'st-gifts', title: 'Gifts', url: '/guides/stella-sora/gifts/' },
        { id: 'st-char-gifts', title: 'Character Gifts', url: '/guides/stella-sora/character-gifts/' },
      ],
    },
    {
      id: 'events',
      title: 'Events',
      emoji: '',
      description: 'Events, shop events, and banner history',
      size: 'medium',
      guides: [
        { id: 'st-events', title: 'Events', url: '/guides/stella-sora/events/' },
        { id: 'st-shop-events', title: 'Shop Events', url: '/guides/stella-sora/shop-events/' },
        { id: 'st-banner-timeline', title: 'Banner Timeline', url: '/guides/stella-sora/banner-timeline/' },
      ],
    },
    {
      id: 'resources',
      title: 'Resources',
      emoji: '',
      description: 'Blog, guides, codes, and utility tools',
      size: 'large',
      guides: [
        { id: 'st-blog', title: 'Blog', url: '/guides/stella-sora/blog/' },
        { id: 'st-ascension', title: 'Ascension Q&A', url: '/guides/stella-sora/ascension-qa/' },
        { id: 'st-exclusive', title: 'Exclusive Items', url: '/guides/stella-sora/exclusive-items/' },
        { id: 'st-clock', title: 'Clock', url: '/clock/stella-sora/' },
        { id: 'st-codes', title: 'Redeem Codes', url: '/guides/stella-sora/redeem-codes/' },
      ],
    },
  ],
};
