// 500,000 Downloads Milestone Announcement - Zone Nova
// Announcement Data Structure

export const announcement500kData = {
  // Basic Information
  title: '500,000 Downloads Milestone Celebration',
  date: 'May 28, 2025',
  type: 'milestone', // milestone, event, maintenance, etc.
  
  // TL;DR Summary
  tldr: [
    'ZONE NOVA officially reached 500,000 cross-platform downloads on May 28, 2025, thanks to captains\' enthusiastic support and dedication. Celebration rewards (Fantasy Color Cube ×5, Energy Supplement ×30, Energy Cube ×5) will be distributed via in-game mail to eligible captains who logged in before June 7, 2025.'
  ],
  
  // Official Update
  officialUpdate: {
    greeting: 'Dear Captains:',
    content: [
      'Thank you to all captains for your enthusiastic support and love for ZONE NOVA! We are very pleased to announce that as of May 28, 2025, the cross-platform download count for ZONE NOVA has officially broken through 500,000!',
      'This achievement is inseparable from the companionship and support of every captain - your enthusiasm is the driving force for our progress!',
      'To celebrate this milestone, the development team has prepared the following rewards to thank all captains for their participation:',
      '',
      'Celebration Rewards:',
      '• Fantasy Color Cube ×5',
      '• Energy Supplement ×30', 
      '• Energy Cube ×5',
      '',
      'Eligibility: Captains who have logged into the game before June 7, 2025 03:59:59',
      '',
      'Distribution Method: Rewards will be distributed through in-game mail',
      '',
      'Once again, thank you to all captains for your support! Let us continue in the world of ZONE NOVA, working together to create even more exciting adventures!'
    ]
  },
  
  // Source Information
  sourceInfo: {
    source: 'Official ZONE NOVA announcement',
    verified: true,
    gameUrl: 'https://game.erolabsshare.net/app/f302f717/Zone_Nova'
  }
};

// SEO data for 500k Downloads announcement
export const announcement500kSEO = {
  title: `${announcement500kData.title} - Zone Nova - GachaWiki`,
  description: `ZONE NOVA celebrates ${announcement500kData.title.toLowerCase()} with special rewards`
};

// Export default for easy importing
export default announcement500kData; 