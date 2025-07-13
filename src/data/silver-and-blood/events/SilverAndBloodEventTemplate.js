// Template for Silver and Blood Events
// Copy this file and rename it for each new event

export const eventData = {
  title: 'Event Title Here',
  date: 'December 1, 2024', // Format: Month Day, Year
  tldr: [
    'First key point',
    'Second key point',
    'Third key point'
  ],
  officialUpdate: {
    imageUrl: '', // Optional: URL to event banner image
    content: [
      'Full event description paragraph 1',
      'Full event description paragraph 2',
      // Add more paragraphs as needed
    ],
    rewards: [ // Optional: for events with rewards
      'Reward 1',
      'Reward 2'
    ],
    duration: { // Optional: for time-limited events
      start: 'December 1, 2024 00:00',
      end: 'December 14, 2024 23:59',
      timezone: 'Server Time'
    },
    requirements: [ // Optional: for events with requirements
      'Requirement 1',
      'Requirement 2'
    ]
  },
  gameplayChanges: [ // Optional: for updates that affect gameplay
    'Change 1',
    'Change 2'
  ],
  bugFixes: [ // Optional: for maintenance updates
    'Bug fix 1',
    'Bug fix 2'
  ],
  sourceInfo: {
    source: 'Official Silver and Blood Announcement',
    sourceUrl: '', // Optional: link to official announcement
    verified: true,
    gameUrl: 'silver-and-blood' // Game identifier
  }
};

// SEO data for the event page
export const eventSeoData = {
  title: eventData.title + ' - Silver and Blood Event',
  description: `Details about ${eventData.title} event in Silver and Blood. ${eventData.tldr[0]}`,
  keywords: ['Silver and Blood', 'event', eventData.title, 'vampire', 'gacha']
};