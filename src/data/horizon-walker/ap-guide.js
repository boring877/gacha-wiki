// Horizon Walker AP Guide Data
export const apGuideData = {
  title: 'AP (Action Points) System Guide',
  subtitle: 'Understanding how AP determines turn order in Horizon Walker',

  sections: [
    {
      id: 'introduction',
      title: 'How AP Works',
      content: [
        'This game uses AP as a way to calculate turns. They use AP as a measurement system for who is going to act first. I will explain how AP works and the mechanics.',
      ],
    },
    {
      id: 'ap-stats',
      title: 'AP Stats Overview',
      content: ['First, we have two stats that affect AP:'],
      list: ['AP Recovery', 'Starting AP'],
      divider: true,
    },
    {
      id: 'ap-recovery-explanation',
      title: 'Understanding AP Recovery',
      content: [
        'AP Recovery: How much AP points you get each turn, starting from Turn 1.',
        'Starting AP: Only affects the FIRST turn of the game ONLY, which helps you act first to activate your combos or buffs.',
      ],
      warningBox: {
        content:
          'Note: The Agility stat increases the Base AP Recovery. Characters that have high agility benefit more from AP Recovery increases, because the % of increase will be much higher!',
      },
      image: {
        path: '/images/games/horizon-walker/AP_recovery/img1.jpg',
        caption: 'AP Stats Display - Agility affects AP Recovery',
      },
    },
    {
      id: 'gameplay-mechanics',
      title: 'How the Game Works with AP',
      content: [
        "Second, we're going to look into how the game works with these stats in the gameplay!",
        "Let's take Yeonwoo as an example:",
      ],
      image: {
        path: '/images/games/horizon-walker/AP_recovery/img2.jpg',
        caption: "Yeonwoo's AP Stats - 56 Starting AP, 109 AP Recovery",
      },
      example: {
        title: 'Yeonwoo AP Calculation',
        content:
          "She has 56 Starting AP and 109 AP Recovery. In total for the first turn, she should have 165 AP (56 + 109). Then each turn we should get 109 on top of what's left!",
      },
    },
    {
      id: 'turn-threshold',
      title: 'The 100 AP Threshold Rule',
      content: ['Turn one she has 165 AP, and her basic skill costs 30 AP.'],
      image: {
        path: '/images/games/horizon-walker/AP_recovery/img3.JPG',
        caption: 'Turn 1 - Yeonwoo has 165 AP, basic skill costs 30 AP',
      },
      warningBox: {
        content:
          "VERY IMPORTANT: If you have below 100 AP, you're going to wait for the next turn until you get above 100 AP. The threshold is 100 AP and above to act!",
      },
      infoBox: {
        title: 'AP Accumulation Example',
        content:
          "If you have 99 AP, you're going to act next turn and get 99 AP + 109 AP (your recovery) = 208 AP total.",
      },
    },
    {
      id: 'special-effects',
      title: 'Special Effects',
      content: ['Effects:'],
      example: {
        title: 'Extra Turn Effect',
        content:
          "Extra turn effects for some skills (like Kalma's) do not have to wait for 100 AP to get a turn. They can act this turn due to the Extra Turn effect, basically overruling the 100 AP requirement to act!",
      },
    },
    {
      id: 'tldr',
      title: 'TL;DR',
      content: [],
      infoBox: {
        title: 'Summary',
        content:
          '• AP determines turn order\n• Starting AP only affects Turn 1\n• AP Recovery adds to your AP every turn\n• 100 AP minimum to act (unless special effects)\n• Agility increases base AP Recovery\n• Extra Turn effects bypass the 100 AP rule',
      },
    },
  ],

  images: {
    apStats: '/images/games/horizon-walker/guides/ap-stats-example.png',
    yeonwooStats: '/images/games/horizon-walker/guides/yeonwoo-ap-stats.png',
    turnExample: '/images/games/horizon-walker/guides/ap-turn-example.png',
  },

  seoData: {
    title: 'Horizon Walker AP System Guide - Turn Order Mechanics Explained | GachaWiki',
    description:
      'Complete guide to understanding the AP (Action Points) system in Horizon Walker. Learn how AP determines turn order, the 100 AP threshold, and special effects.',
    keywords: [
      'horizon walker ap',
      'hw action points',
      'ap turn order',
      'starting ap',
      'ap recovery',
      'horizon walker mechanics',
      'turn calculation',
      'agility ap bonus',
    ],
  },
};
