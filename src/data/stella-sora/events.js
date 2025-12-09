/**
 * Stella Sora Events Data
 * Contains information about game events, updates, and special occasions
 */

export const stellaSoraEvents = [
  {
    id: 'beyond-the-dream-limited-event',
    title: 'Beyond the Dream Limited Event Overview',
    date: '2025-12-08',
    startDate: '2025-12-08',
    endDate: '2025-12-29',
    summary: 'Beyond the Dream limited event with exclusive rewards and activities.',
    description: 'Join the Beyond the Dream limited event for special activities and rewards.',
    url: '/guides/stella-sora/events/beyond-the-dream-limited-event/',
    image: '/images/games/stella-sora/events/7/1.jpg',
    rewards: ['Beyond the Dream Event Rewards'],
    featuredImage: '/images/games/stella-sora/events/7/1.jpg',
    images: ['7/1', '7/2', '7/3', '7/4'],
  },
  {
    id: 'version-1-3-a-breezy-romance',
    title: 'Version 1.3: A Breezy Romance',
    date: '2025-12-08',
    startDate: '2025-12-08',
    endDate: '2025-12-29',
    summary:
      "Version 1.3 brings new ★5 Ventus Trekker Nazuka, new ★5 Ventus Disc Deer's Song, Main Story Chapter Four: Beyond the Dream, and multiple exciting events!",
    description:
      "The Version 1.3 update introduces Nazuka, a powerful ★5 Ventus Trekker available from the A Breezy Romance limited banner, along with the new ★5 Ventus Disc: Deer's Song from the Afternoon Glimmer into the Green banner. Experience the climax of the hunt for the Big Three in Main Story Chapter Four: Beyond the Dream, and participate in multiple events including Beyond the Dream, Lucky Treasure Shovel, and Cataclysm Survivor!",
    url: '/guides/stella-sora/events/version-1-3-a-breezy-romance/',
    image: '/images/games/stella-sora/events/6/1.png',
    rewards: [
      'New ★5 Ventus Trekker: Nazuka',
      "New ★5 Ventus Disc: Deer's Song",
      '★5 Runic Disc: One, Two, Three, Jump!',
      'Honor Title: Beyond the Dream',
      'Stellanite Dust',
      'Sprout Ticket',
      'Cerulean Ticket',
      'Trekker and Disc tier-up materials',
      'Healthy Rice Ball',
      "Defender's Medal",
    ],
    featuredImage: '/images/games/stella-sora/events/6/1.png',
    newContent: {
      trekker: {
        name: 'Nazuka',
        rarity: '★5',
        element: 'Ventus',
        banner: 'A Breezy Romance',
      },
      disc: {
        name: "Deer's Song",
        rarity: '★5',
        element: 'Ventus',
        banner: 'Afternoon Glimmer into the Green',
      },
      story: {
        title: 'Main Story Chapter Four: Beyond the Dream',
        description:
          'The hunt for the Big Three has reached its climax. The truth behind the parting of friends, the secrets hidden within the monsters, the shadowy figure stirring behind the scenes... Can you wield the power as the Tyrant, overcome all obstacles, and reach that happy ending, filled with laughter and joy for all?',
        availability: 'Permanent after Dec. 08, 2025 after Maintenance',
      },
    },
    events: [
      {
        name: 'Main Story Update Event: Beyond the Dream',
        period: 'Dec. 08, 2025 after Maintenance – Dec. 22, 2025 12:59:59 (UTC-7)',
        shopPeriod: 'Dec. 08, 2025 after Maintenance – Dec 29, 2025, 12:59:59 (UTC-7)',
        details:
          'Eliminate monsters and protect the forest! Complete missions to get ★5 Runic Disc: One, Two, Three, Jump!, Honor Title: Beyond the Dream, Stellanite Dust, Sprout Ticket, Cerulean Ticket, Trekker and Disc tier-up materials, and more!',
      },
      {
        name: 'Lucky Treasure Shovel',
        period: 'Dec. 08, 2025 after Maintenance – Dec. 22, 2025 12:59:59 (UTC-7)',
        details:
          'Areas hiding precious treasures await exploration! During the event, you can use Treasure Shovels to uncover the treasures with your Trekkers, and accumulate points to complete quests, which will reward you with Stellanite Dust, Healthy Rice Ball, and more.',
        requirements: 'Authorization Level ≥ 5',
      },
      {
        name: 'Cataclysm Survivor Event Details',
        period: 'Dec. 08, 2025 after Maintenance – Dec. 22, 2025 19:59:59 (UTC-7)',
        details:
          "Join the defense battle and complete the missions to obtain Stellanite Dust and Defender's Medal. Catastrophe zones will change with version updates. Clearing Catastrophe zones and reaching the designated score will grant additional Defender's Medal rewards.",
        enemyInfo: {
          zone1: 'Enemy Vulnerability: Ventus, Ignis',
          zone2: 'Enemy Vulnerability: Ventus, Lux',
        },
        requirements: 'Authorization Level ≥ 5',
      },
    ],
    merchandise: {
      name: "Trekker's Picks: Stellar Special",
      period: 'Dec. 08, 2025 after Maintenance – Dec. 29, 2025 12:59:59 (UTC-7)',
      items: [
        'A Breezy Romance: Cerulean Ticket Set',
        'A Breezy Romance: Gold Disc Set',
        'A Breezy Romance: Heartfelt Bundle',
        'A Breezy Romance: Trekker Boost Bundle',
      ],
    },
    requirements: {
      authorizationLevel: 'Authorization Level ≥ 5',
      team: 'Stella Sora Team',
    },
  },
  {
    id: 'guild-sweet-guild',
    title: 'Guild Sweet Guild',
    date: '2025-11-20',
    startDate: '2025-11-20',
    endDate: '2025-12-01',
    summary: 'Guild Sweet Guild event with exclusive rewards and activities',
    description: 'Join the Guild Sweet Guild event for special activities and rewards',
    url: '/guides/stella-sora/events/guild-sweet-guild/',
    image: '/images/games/stella-sora/events/5/1.jpg',
    rewards: ['Guild Sweet Guild Exclusive Rewards', 'Event Currency', 'Special Cosmetics'],
    featuredImage: '/images/games/stella-sora/events/5/1.jpg',
  },
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
