// Silver and Blood Rerolling Guide Data
// This file contains comprehensive rerolling guide data focused on obtaining Timeless Aiona

import { silverAndBloodRedeemCodes } from './redeem-codes.js';
import { timelessAiona } from './characters/timeless-aiona.js';

// Get the specific codes for rerolling
const getRerollingCodes = () => {
  const targetCodes = [
    'SAB0626',
    'SAB30DAYS',
    'SILVERGIFT',
    'B9ZV7F2222T',
    'BLOODMOON',
    'MOONGIFT',
  ];
  return silverAndBloodRedeemCodes.availableCodes.filter(code => targetCodes.includes(code.code));
};

export const rerollingGuideData = {
  meta: {
    title:
      'Silver and Blood Rerolling Guide 2025 - How to Get Timeless Aiona Fast | Best SSR Strategy',
    description:
      'Complete Silver and Blood rerolling guide to get Timeless Aiona SSR character. Step-by-step tutorial with working redeem codes, normal banner strategy, and fastest reroll methods for beginners.',
    gameTitle: 'Rerolling Guide - Get Timeless Aiona',
    keywords:
      'Silver and Blood rerolling guide 2025, how to get Timeless Aiona, Silver and Blood reroll tutorial, best SSR character reroll, Silver and Blood redeem codes, normal banner reroll, fastest reroll method, Silver and Blood beginner guide, Timeless Aiona reroll strategy, Silver and Blood SSR guide, mobile RPG rerolling, gacha reroll guide',
    ogTitle: 'Silver and Blood Rerolling Guide 2025 - Get Timeless Aiona SSR Fast',
    ogDescription:
      'Learn how to reroll for Timeless Aiona in Silver and Blood with our complete 2025 guide. Includes working redeem codes, normal banner tips, and fastest reroll methods for the best SSR character.',
    lastUpdated: new Date(),
  },

  intro: {
    goal: 'We are looking to get Timeless Aiona. She is really powerful and really going to make the game very simple! She needs Acappella and Fleeting Bella but that can be easily obtained later on!',
    videoCredit: {
      text: 'This video should be enough to give you general idea how to reroll. You can also read the key points below!',
      creator: 'Credit to Tim',
      channel: 'https://www.youtube.com/@T1mo777',
      videoUrl: 'https://www.youtube.com/watch?v=4Izpk3wYjEo',
    },
  },

  steps: [
    {
      main: '1- Disable animation for faster rerolling from the settings',
      detail:
        'This should be opened early on, like in the first few minutes of the game during the early tutorial. Once you open the settings option, go to menu and disable animation so you do not see the skill/ultimate animations.',
    },
    {
      main: '2- Story 1-4 maps',
      detail:
        'You are going to need to push to 1-4 story maps then stop. This should take you 3 to 5 minutes.',
    },
    {
      main: '3- Upgrade character',
      detail:
        'You are going to need to upgrade 1 character as a requirement! The game forces you to do that.',
    },
    {
      main: '4- Add redeem codes (listed below)',
      detail:
        'Codes change from time to time. I will try to keep them updated as best as possible or make a script to auto-update with the redeem page. These codes are important because some give quite a bit of scrolls.',
    },
    {
      main: '5- Claim rewards from mails, including pre-registration rewards',
      detail: 'Must claim the rewards from the mail! xD',
    },
    {
      main: '6- Claim rewards from Resource Center',
      detail: 'There is a Resource Center on your right - make sure you get the gems!',
    },
    {
      main: '7- Claim gems from Boutique',
      detail:
        'The boutique has a few gems, but with these gems you should be at 3000 gems total, which can do 20 summons.',
    },
  ],

  expectedResources:
    'You should have 50 or higher scrolls (depends on codes) and at least 3000 gems - at least 60 pulls (6 x 10 pulls).',

  // Import actual character data instead of making things up
  timelessAiona: timelessAiona,

  // Get codes dynamically from redeem codes page
  redeemCodes: getRerollingCodes(),
};

export default rerollingGuideData;
