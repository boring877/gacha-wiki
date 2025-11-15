/**
 * Stella Sora Events Data
 * Contains information about game events, updates, and special occasions
 */

export const stellaSoraEvents = [
  {
    id: 'version-1-2-new-trekker-fuyuka',
    title: 'Version 1.2 and new ★5 Trekker: Fuyuka',
    date: '2025-11-17',
    startDate: '2025-11-17',
    endDate: '2025-12-08',
    summary:
      'Celebrate the Version 1.2 update with the introduction of new ★5 Trekker: Fuyuka! Special login bonuses, limited-time events, and exclusive rewards await all players.',
    description:
      'The Version 1.2 update brings exciting new content to Stella Sora, featuring the introduction of Fuyuka, a powerful ★5 Trekker with unique abilities and story. This major update includes enhanced gameplay mechanics, new story chapters, quality of life improvements, and special celebration events. Join us for this milestone update and discover the new adventures that await!',
    url: '/guides/stella-sora/events/version-1-2-new-trekker-fuyuka/',
    image: '/images/games/stella-sora/events/4/1.jpg',
    rewards: [
      'New ★5 Trekker: Fuyuka',
      'Version 1.2 Celebration Rewards',
      'Limited-Time Login Bonuses',
      'Special Anniversary Currency',
      'Exclusive Title and Profile Frame',
      'Enhancement Materials',
      'Story Unlocks',
    ],
    featuredImage: '/images/games/stella-sora/events/4/1.jpg',
    eventPeriod: {
      eventPeriod: 'Nov. 17, 2025 after maintenance – Dec. 8, 2025 06:59 (UTC-7)',
      celebrationPeriod: 'Nov. 17, 2025 – Dec. 15, 2025 23:59 (UTC-7)',
      bonusPeriod:
        'Special login bonuses and celebration events run throughout the version celebration period.',
    },
    participation: {
      requirement:
        'All players with Authorization Level ≥ 5 can participate in the celebration events and claim Fuyuka rewards.',
      specialEvents:
        'Complete daily missions, story chapters, and special challenges to unlock exclusive Fuyuka content.',
    },
    awards: {
      loginBonus:
        'Log in daily during the celebration period to receive special rewards including Fuyuka summoning tickets and enhancement materials.',
      missionRewards:
        'Complete version celebration missions to earn Fuyuka fragments, exclusive cosmetics, and premium currency.',
      storylineContent:
        'Unlock new story chapters featuring Fuyuka and discover her background, abilities, and connections to the main story.',
      qualityUpdates:
        'Experience new gameplay improvements including enhanced UI, performance optimizations, and quality of life features.',
    },
    requirements: {
      authorizationLevel: 'Authorization Level ≥ 5',
      team: 'Stella Sora Team',
      version: 'Game Version 1.2 or higher',
    },
  },
  {
    id: 'a-finale-echoing',
    title: 'A Finale Echoing (Beta)',
    date: '2025-11-10',
    startDate: '2025-11-10',
    endDate: '2025-11-16',
    summary:
      'Face Opera Ghost: Rovina in the Monolith! Collect Whispers of Decay and exchange for exclusive rewards including Exclusive ★5 Runic Disc, Sprout Ticket, Proving Grounds Gift Box, and Cartridge Box.',
    description:
      'Opera Ghost: Rovina is a formidable presence entrenched within the Monolith. She is like a persistent nightmare, appearing silently in the shadows. No one knows her past, and no one has witnessed her end. Only that lingering fear descends upon the heart of every person who utters her name. She wears fear as her etiquette and feeds despair with paranoia. In her repertoire, she performs the most ancient of nightmare.',
    url: '/guides/stella-sora/events/a-finale-echoing/',
    image: '/images/games/stella-sora/events/3/1.jpg',
    rewards: [
      'Exclusive ★5 Runic Disc',
      'Whispers of Decay (Event Currency)',
      'Artifact Wishing Eggs',
      'Proving Grounds Gift Box',
      'Sprout Ticket',
      'Cartridge Box',
      'Event Score Rewards',
      'Ranking Tier Rewards',
    ],
    featuredImage: '/images/games/stella-sora/events/3/1.jpg',
    enemyInfo: {
      name: 'Opera Ghost: Rovina',
      element: 'None',
      difficulty: ['Normal', 'Hard', 'Extra Hard', 'Ultimate'],
    },
    eventPeriod: {
      eventPeriod: 'Nov. 10, 2025 after maintenance – Nov. 16, 2025 06:59 (UTC-7)',
      rankingRewardSettlement: 'Nov. 17, 2025 08:00 – 12:59:59 (UTC-7)',
      rankingRewardClaimPeriod: 'Nov. 17, 2025 13:00 – Dec. 17, 2025 12:59:59 (UTC-7)',
      challengesEndNote:
        'You will not be able to select difficulty and start new challenges after Nov. 17, 2025 06:59:59 (UTC-7). All challenges that are in progress at that time will not be affected. You may continue to complete unfinished stages until Nov. 17, 2025 07:59:59 (UTC-7).',
    },
    participation: {
      requirement:
        'Challenging a stage requires Final Showdown. This item will be restored to maximum quantity daily (at 04:00, with a max limit of 3) during the event.',
      quickBattle: 'Clear a stage once to unlock Quick Battle for this stage.',
    },
    awards: {
      stageClear:
        'After clearing a stage, you will earn a corresponding amount of Whispers of Decay based on the stage difficulty.',
      eventScore:
        'Clearing a stage also earns you event score. Accumulate event score to complete missions and obtain Whispers of Decay and Artifact Wishing Eggs.',
      shopAccess:
        'From the main screen, you can go to Purchase > A Finale Echoing, and use Whispers of Decay to purchase items including Exclusive ★5 Runic Disc, Sprout Ticket, Proving Grounds Gift Box, Cartridge Box and more!',
      rankingRewards:
        'After the event concludes, rewards will be distributed based on your final ranking tier. For more information, please check the reward details in game.',
    },
    requirements: {
      authorizationLevel: 'Authorization Level ≥ 10',
      team: 'Stella Sora Team',
    },
  },
  {
    id: 'ghost-ship-event-shop',
    title: 'The Ghost Ship Haunts the Deep - Event Shop',
    date: '2025-10-27',
    startDate: '2025-10-27',
    endDate: '2025-11-27',
    summary:
      'Visit the Ghost Ship Event Shop to exchange spectral currency for exclusive rewards, limited-time Trekkers, and haunting cosmetics.',
    description:
      'The Ghost Ship Event Shop offers a variety of exclusive rewards that can be purchased using Spectral Doubloons earned during the event. Browse through special Trekkers, cosmetic sets, energy refills, and other valuable items available only during this haunting event.',
    url: '/guides/stella-sora/events/ghost-ship-event-shop/',
    image: '/images/games/stella-sora/events/1/1.jpg',
    rewards: [
      'Exclusive Ghost Ship Trekker: Phantom Captain',
      'Spectral Doubloons (Event Currency)',
      'Haunted Ship Cosmetic Set',
      'Ethereal Energy Refills',
      'Phantom Map Fragments',
    ],
    featuredImage: '/images/games/stella-sora/events/1/1.jpg',
  },
  {
    id: 'ghost-ship-event-details',
    title: 'The Ghost Ship Haunts the Deep - Event Details',
    date: '2025-10-27',
    startDate: '2025-10-27',
    endDate: '2025-11-27',
    summary:
      'Explore the mysterious ghost ship, face supernatural challenges, and discover the haunting story behind this spectral vessel.',
    description:
      'The Ghost Ship Haunts the Deep event challenges players to explore a mysterious phantom vessel that has emerged from the depths. Face supernatural challenges, battle spectral enemies, and collect ethereal rewards. Uncover the dark secrets of the ghost ship and its cursed crew through engaging story missions and special gameplay modes.',
    url: '/guides/stella-sora/events/ghost-ship-event-details/',
    image: '/images/games/stella-sora/events/2/1.jpg',
    rewards: [
      'Enhanced Ghost Ship Trekker: Soul Reaper',
      'Ancient Spectral Coins',
      'Cursed Ship Cosmetic Set',
      'Void Energy Refills',
      'Ethereal Map Fragments',
    ],
    featuredImage: '/images/games/stella-sora/events/2/1.jpg',
  },
];

/**
 * Get event by slug or ID
 * @param {string} slug - Event slug from URL or event ID
 * @returns {Object|null} Event object or null if not found
 */
export const getEventBySlug = slug => {
  return stellaSoraEvents.find(event => event.url?.includes(slug) || event.id === slug) || null;
};
