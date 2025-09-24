export const eventData = {
  title: 'Letter from the Silver and Blood Team #2',
  character: 'Development Team',
  eventType: 'Developer Notes',
  author: 'Silver and Blood Development Team',
  authorNote: 'Official development update and communication from the Silver and Blood team',
  communityDiscord: 'https://discord.gg/m57jHG4pn4',

  introduction: {
    title: 'Development Updates and Future Plans',
    content: [
      'Welcome to the second letter from the Silver and Blood Development Team! This update covers our latest gameplay optimizations, upcoming content, and exciting new features based on your valuable feedback.',
      'We continue to listen to our community and work tirelessly to improve your gaming experience with meaningful updates and enhancements.',
    ],
    images: [
      {
        afterParagraph: 0,
        imageId: 'dev-banner',
      },
    ],
  },

  guideSynopsis: {
    title: 'Update Overview',
    subtitle: '[Click to Navigate]',
    sections: [
      {
        id: 'gameplay-updates',
        title: '[Gameplay Updates and Optimization]',
        subtitle: '(Combat & Quality of Life)',
        description: 'Combat skill casting improvements and gameplay convenience features',
      },
      {
        id: 'system-optimization',
        title: '[Announcement System & Event Calendar]',
        subtitle: '(UI/UX Improvements)',
        description: 'New event tracking and announcement system enhancements',
      },
      {
        id: 'tomb-rewards',
        title: '[Tomb of the Fallen Fragment Rewards]',
        subtitle: '(Reward Adjustments)',
        description: 'Improved fragment rewards for Restless Spirit challenges',
      },
      {
        id: 'new-content',
        title: '[New Content Preview]',
        subtitle: '(Satin Boudoir & New Gameplay)',
        description: 'Upcoming systems and strategic gameplay mechanics',
      },
    ],
  },

  sections: [
    {
      id: 'gameplay-updates',
      title: 'Gameplay Updates and Optimization',
      contentWithImages: [
        {
          type: 'text',
          content: 'Combat Skill Casting Optimization',
        },
        {
          type: 'image',
          imageId: 'gameplay-updates',
        },
        {
          type: 'text',
          content:
            "We've heard feedback that it's inconvenient to cast Vassal skills on selected allies. We will improve this by allowing you to cast skills simply by dragging them to your selected Vassal. This feature will be available by the end of October to help Lords operate more efficiently in combat.",
        },
        {
          type: 'text',
          content: 'Ease of Gameplay and Future Updates',
        },
        {
          type: 'text',
          content:
            "Regarding Lords' concerns about ease of gameplay, we have been adding convenience features to game modes like [Tomb of the Fallen] and [Blood Arena - Crucible] in recent patch updates.",
        },
        {
          type: 'text',
          content:
            'We plan to improve the experience in [Timeworn Mausoleum] and update the [Gauntlet] with a "Quick Battle" feature in patches from October to November. We strive to make them easier and more enjoyable for you all.',
        },
        {
          type: 'text',
          content:
            'After the optimization for [Timeworn Mausoleum], "Today\'s Rewards" can be claimed directly based on the highest reward level achieved from the stages challenged that week, and the level of [Today\'s Rewards] resets every week.',
        },
      ],
    },
    {
      id: 'system-optimization',
      title: 'Announcement System Optimization & Event Calendar Launch',
      contentWithImages: [
        {
          type: 'image',
          imageId: 'system-optimization',
        },
        {
          type: 'text',
          content:
            'To help Lords easily track patch events and quickly access them, we will add an event calendar feature and improve the announcement system in the next patch.',
        },
        {
          type: 'text',
          content:
            'Event Calendar: Lords may use the Event Calendar to view events scheduled for the current patch cycle, as well as previews of upcoming events and rewards.',
        },
        {
          type: 'text',
          content:
            'Announcement Feature: This update includes better visual effects and the ability to jump directly to event pages. Lords will then be able to access events of interest straight from the [Announcement].',
        },
      ],
    },
    {
      id: 'tomb-rewards',
      title: 'Increase the Tomb of the Fallen Fragment Reward',
      contentWithImages: [
        {
          type: 'text',
          content:
            'To improve the Tomb of the Fallen experience, after the next patch update, the Fragment rewards for [Restless Spirit II - Atoll Devourer Ranna] and [Restless Spirit II - Phantom of Aeon] will be adjusted as follows:',
        },
        {
          type: 'text',
          content:
            'Rewards for Fragment 1-9 will be adjusted accordingly: "Damaged Holy Armor" will be increased to 8-20 pieces, and the quantity of "Restless Spirit II Fragment 1-9 Chest" will be increased to 7 each.',
        },
      ],
    },
    {
      id: 'new-content',
      title: 'New Content Preview',
      contentWithImages: [
        {
          type: 'text',
          content: 'New System: Satin Boudoir',
        },
        {
          type: 'image',
          imageId: 'satin-boudoir',
        },
        {
          type: 'text',
          content:
            "Death's embrace grants immortality, as memories pulse through the veins, longing for harmony. Beyond the door to eternity, a burning hunger calls. Surrender to desire, and find solace within the palace of the forbidden.",
        },
        {
          type: 'text',
          content:
            'A new system, Satin Boudoir, will be implemented in the next patch. This system allows you to experience unique and interactive storylines with your Vassals, forge Covenants through intimate rituals, and leave lasting Crimson Brands to deepen your bonds.',
        },
        {
          type: 'text',
          content: 'More details will be shared in upcoming announcements. Please stay tuned.',
        },
        {
          type: 'text',
          content: 'New Event Gameplay',
        },
        {
          type: 'text',
          content:
            "We've heard that you are all very eager to experience fresher and more interesting gameplay, and we've already added new gameplay development to our schedule!",
        },
        {
          type: 'text',
          content:
            'In the new gameplay, you will engage in strategic battles against various "unknown entities" that threaten the truth, finding the "solution" that leads to victory.',
        },
        {
          type: 'text',
          content:
            'This gameplay is expected to launch in November, with roguelike mechanics as its core feature. You can experiment with different construct combinations to unlock additional abilities for allies in battle and achieve challenge objectives.',
        },
        {
          type: 'text',
          content: 'May the quest for knowledge be endless!',
        },
        {
          type: 'text',
          content:
            'Meanwhile, we are planning more gameplay systems. Your suggestions for deeper Vassal combination gameplay, where you can enjoy the fun and satisfaction of strategic team composition, will be incorporated into our new designs. We aim to deliver these enhanced experiences in future updates, creating richer Vassal appearance scenarios and more engaging gameplay.',
        },
      ],
    },
  ],

  images: [
    {
      id: 'dev-banner',
      src: '/images/games/silver-and-blood/dev_notes/dev2/1.jpg',
      alt: 'Letter from the Silver and Blood Team Banner',
    },
    {
      id: 'gameplay-updates',
      src: '/images/games/silver-and-blood/dev_notes/dev2/2.jpg',
      alt: 'Gameplay Updates and Optimization Details',
    },
    {
      id: 'system-optimization',
      src: '/images/games/silver-and-blood/dev_notes/dev2/3.jpg',
      alt: 'System Optimization and New Content Preview',
    },
    {
      id: 'satin-boudoir',
      src: '/images/games/silver-and-blood/dev_notes/dev2/3.jpg',
      alt: 'Satin Boudoir System Preview',
    },
  ],

  closing: {
    title: 'Thank You Message',
    content: [
      'The above covers this issue of Letter from the Silver and Blood Team. Thank you for your time and support!',
      'As a token of gratitude, we have specially prepared this for Lords from all servers: Moon Tear ×3,000',
      "We very much welcome Lords to share any thoughts and suggestions you have during gameplay. We'll continue listening to your feedback and optimizing the game to deliver a more enjoyable gaming experience!",
    ],
  },

  sourceInfo: {
    source: 'Official Silver and Blood Development Team',
    gameUrl: 'silver-and-blood',
    verified: true,
    lastUpdated: 'October 2025',
  },
};

export const eventSeoData = {
  title: 'Dev Notes #2 - Letter from the Silver and Blood Team',
  description:
    'Official development update from the Silver and Blood team covering gameplay optimization, new content preview including Satin Boudoir system, and upcoming features.',
  keywords: [
    'Silver and Blood',
    'Dev Notes',
    'Development Update',
    'Satin Boudoir',
    'Gameplay Updates',
    'Event Calendar',
    'Combat Optimization',
  ],
};
