// Silver and Blood Bugs Index Data
// This file contains the main bugs index page data

export const silverAndBloodBugsIndex = {
  meta: {
    title: 'Silver and Blood Bug Fixes - Launcher & Game Issues | GachaWiki',
    description:
      'Fix Silver and Blood launcher problems, startup issues, and game crashes. Step-by-step solutions for common bugs and technical problems.',
    keywords: [
      'silver and blood bugs',
      'silver and blood launcher fix',
      "silver and blood won't start",
      'silver and blood crashes',
      'silver and blood stuck 99%',
      'silver and blood installation problems',
      'silver and blood troubleshooting',
      'sab launcher issues',
      'silver and blood error fixes',
      'silver and blood technical problems',
      'mobile game launcher fix',
      'gacha game troubleshooting',
      'silver and blood not working',
      'silver and blood startup error',
    ],
    lastUpdated: new Date(),
    version: '1.0.0',
  },

  bugs: [
    {
      id: 'launcher-not-starting',
      title: 'Launcher Problem Stuck at 99% or Problem with Launcher in General',
      description:
        'This should help in most cases. The game developers should really fix these issues, and this is a community effort to help!',
      url: '/guides/silver-and-blood/bugs/launcher-bugs/',
    },
  ],

  generalInfo: {
    title: 'Bugs and Solutions',
    subtitle: 'Find solutions to common Silver and Blood problems',
    description:
      "These are not official bug fixes - just the community trying its best to help. The game developers should fix these issues officially, but I don't want people to waste their time trying to figure it out, so I made this page to help.",
  },
};

export function generateBugsIndexStructuredData() {
  return [
    // Main Collection Page Schema
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: silverAndBloodBugsIndex.meta.title,
      description: silverAndBloodBugsIndex.meta.description,
      about: {
        '@type': 'VideoGame',
        name: 'Silver and Blood',
        genre: 'Mobile RPG',
        platform: 'Mobile',
      },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: silverAndBloodBugsIndex.bugs.map((bug, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: bug.title,
          description: bug.description,
          url: `https://gachawiki.info${bug.url}`,
        })),
      },
      dateModified: silverAndBloodBugsIndex.meta.lastUpdated.toISOString(),
    },
    // FAQ Schema for common questions
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why is Silver and Blood launcher stuck at 99%?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The launcher gets stuck due to corrupted files or outdated installer components. The fix involves cleaning the game directory and reinstalling the launcher from the official website.',
          },
        },
        {
          '@type': 'Question',
          name: 'How to fix Silver and Blood not starting?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Remove all files except the SilverAndBlood folder from the game directory, download the launcher again from the official website, and reinstall. This resolves most startup issues.',
          },
        },
        {
          '@type': 'Question',
          name: 'What to do if Silver and Blood crashes on startup?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After reinstalling the launcher, you may need to attempt starting the game 2-3 times. The game sometimes closes unexpectedly on first launch but works normally after repeated attempts.',
          },
        },
      ],
    },
    // TechArticle Schema for troubleshooting content
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Silver and Blood Bug Fixes and Solutions',
      description: silverAndBloodBugsIndex.meta.description,
      author: {
        '@type': 'Organization',
        name: 'GachaWiki',
      },
      publisher: {
        '@type': 'Organization',
        name: 'GachaWiki',
      },
      datePublished: silverAndBloodBugsIndex.meta.lastUpdated.toISOString(),
      dateModified: silverAndBloodBugsIndex.meta.lastUpdated.toISOString(),
      about: {
        '@type': 'VideoGame',
        name: 'Silver and Blood',
      },
    },
  ];
}
