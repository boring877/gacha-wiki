// Guild Raid Adjustments and Guild War Related Content - Zone Nova
// Game Announcement Data Structure

export const legionWarLaunchData = {
  // Basic Information
  title: 'Guild Raid Adjustments and Guild War Related Content',
  date: 'August 20, 2025',
  type: 'announcement',

  // TL;DR Summary
  tldr: [
    'Guild Raid will undergo boss adjustments on August 25, 2025, with increased rewards and reduced difficulty. New Guild War mode launches September 8, 2025 - a strategic battle system where 2 legions compete across 12 battles per season with alternating phases.',
  ],

  // Official Update
  officialUpdate: {
    greeting: 'Dear Captains:',
    content: [
      'Thank you for your continued support of "ZONE NOVA"! [Guild Raid] will undergo boss adjustments, and [Guild War] will launch a new legion mode on September 8, 2025. [Guild War] is a large-scale strategic battle exercise where 2 legions will be matched as opposing forces, with both sides needing to defend their territory and attack enemy territory. Detailed information about [Guild Raid] and [Guild War] will be explained in the announcements.',
      '',
      '⚔️ [Guild Raid] Adjustments:',
      '',
      'Adjustment Date: 2025/08/25 04:00:00',
      '• Boss replacement',
      '• Increased [Guild Raid] mission rewards, reduced difficulty for obtaining Guild Raid Certificates and Photon Stones',
      '',
      '🏛️ [Guild War] Introduction:',
      '',
      '• Guild Wars occur once every two weeks, with 2 battles per Guild War, totaling 12 battles per season',
      '• During Guild War periods, the [Guild Raid] page will be inaccessible; [Guild War] and [Guild Raid] will alternate',
      "• Guild War group assignments are determined by the previous week's [Guild Raid] rankings; once groups are decided, 2 consecutive Guild Wars will use the same groupings",
      '• Guild War has three main phases: "Preparation Phase," "Battle Phase," and "Settlement Phase"',
      '',
      '📅 Phase Schedule:',
      '',
      '"Preparation Phase": Monday and Friday (05:00:00 - next day 03:59:59) (UTC +8)',
      '"Battle Phase": Tuesday and Saturday (04:00:00 - next day 23:59:59) (UTC +8)',
      '"Settlement Phase": Thursday and Monday (00:00:00 - 03:59:59) (UTC +8)',
      '',
      '🚀 First [Guild War] Process:',
      '',
      'Start Date: 2025/09/08 05:00:00',
      'The first [Guild War] group assignments will be determined by [Guild Raid] ranking results starting from 2025/09/01 04:00. Captains are encouraged to work hard to achieve higher rankings for their legions, as higher groups in [Guild War] will receive more generous rewards.',
    ],
  },

  // Source Information
  sourceInfo: {
    source: 'Official ZONE NOVA announcement',
    verified: true,
    gameUrl: 'https://game.erolabsshare.net/app/f302f717/Zone_Nova',
  },
};

// SEO data for Guild War Launch announcement
export const legionWarLaunchSEO = {
  title: `${legionWarLaunchData.title} - Zone Nova - GachaWiki`,
  description: `Guild Raid adjustments and new Guild War mode launching September 8, 2025. Strategic battle system with 2-week cycles and 12 battles per season.`,
};

// Export default for easy importing
export default legionWarLaunchData;
