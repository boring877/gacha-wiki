// Silver and Blood Bug Fixes Data
// This file contains all bug fixes data for Silver and Blood

export const silverAndBloodBugFixes = {
  meta: {
    title: 'Silver and Blood Launcher Fix - Stuck at 99% Solution | GachaWiki',
    description:
      'Fix Silver and Blood launcher stuck at 99% with our step-by-step guide. Resolve startup crashes and installation errors permanently.',
    keywords: [
      'silver and blood launcher stuck 99%',
      "silver and blood won't start",
      'silver and blood launcher crash',
      'silver and blood installation fix',
      'silver and blood startup error',
      'sab launcher problems',
      'silver and blood troubleshooting guide',
      'silver and blood not launching',
      'mobile rpg launcher fix',
      'gacha game launcher issues',
      'silver and blood technical support',
      'silver and blood error solution',
    ],
    lastUpdated: new Date(),
    version: '1.0.0',
  },
};

export function generateBugFixesStructuredData() {
  return [
    // HowTo Schema for step-by-step launcher fix
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Fix Silver and Blood Launcher Stuck at 99%',
      description:
        'Step-by-step guide to fix Silver and Blood launcher problems and startup issues',
      image: 'https://gachawiki.info/images/games/silver-and-blood/bugs/Bug1.png',
      totalTime: 'PT10M',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'USD',
        value: '0',
      },
      supply: [
        {
          '@type': 'HowToSupply',
          name: 'Computer with Silver and Blood installed',
        },
        {
          '@type': 'HowToSupply',
          name: 'Internet connection',
        },
      ],
      tool: [
        {
          '@type': 'HowToTool',
          name: 'Web browser',
        },
      ],
      step: [
        {
          '@type': 'HowToStep',
          name: 'Access Game Folder',
          text: 'Right-click on the game icon, then select "Open folder location"',
          image: 'https://gachawiki.info/images/games/silver-and-blood/bugs/Bug1.png',
        },
        {
          '@type': 'HowToStep',
          name: 'Clean Up Game Directory',
          text: 'Remove all files except the SilverAndBlood folder. The SilverAndBlood folder size should be around 2.88GB',
          image: 'https://gachawiki.info/images/games/silver-and-blood/bugs/Bug2.png',
        },
        {
          '@type': 'HowToStep',
          name: 'Confirm File Deletion',
          text: 'Click "Continue" and check the box "Do this for all current items" when prompted',
          image: 'https://gachawiki.info/images/games/silver-and-blood/bugs/Bug3.png',
        },
        {
          '@type': 'HowToStep',
          name: 'Download Fresh Launcher',
          text: 'Go to https://silverandblood.moonton.com/ and download the launcher again',
          image: 'https://gachawiki.info/images/games/silver-and-blood/bugs/Bug5.png',
        },
        {
          '@type': 'HowToStep',
          name: 'Install the Launcher',
          text: 'Open the downloaded file and click "Install Now"',
          image: 'https://gachawiki.info/images/games/silver-and-blood/bugs/Bug6.png',
        },
        {
          '@type': 'HowToStep',
          name: 'Launch the Game',
          text: 'Click "Start" - you may need to try 2-3 times if it closes unexpectedly',
          image: 'https://gachawiki.info/images/games/silver-and-blood/bugs/Bug7.png',
        },
      ],
    },
    // TechArticle Schema
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: silverAndBloodBugFixes.meta.title,
      description: silverAndBloodBugFixes.meta.description,
      author: {
        '@type': 'Organization',
        name: 'GachaWiki',
        url: 'https://gachawiki.info',
      },
      publisher: {
        '@type': 'Organization',
        name: 'GachaWiki',
        url: 'https://gachawiki.info',
      },
      datePublished: silverAndBloodBugFixes.meta.lastUpdated.toISOString(),
      dateModified: silverAndBloodBugFixes.meta.lastUpdated.toISOString(),
      about: {
        '@type': 'VideoGame',
        name: 'Silver and Blood',
        genre: 'Mobile RPG',
        platform: 'Mobile',
      },
      keywords: silverAndBloodBugFixes.meta.keywords?.join(', '),
    },
    // FAQ Schema
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why is my Silver and Blood launcher stuck at 99%?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This is typically caused by corrupted launcher files or outdated components. The solution is to clean your game directory and reinstall the launcher from the official website.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to fix the launcher issue?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The entire process takes approximately 10 minutes, including downloading the new launcher and reinstalling it.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will I lose my game data when fixing the launcher?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, your game data is safe. We only remove launcher files, not the main game folder (SilverAndBlood folder) which contains your game data.',
          },
        },
      ],
    },
  ];
}
