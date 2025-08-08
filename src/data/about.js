// About Page Data
// Site information, features, and content for the about page

export const aboutData = {
  // Page metadata
  title: 'About GachaWiki',
  subtitle: 'Your comprehensive guide to gacha games',
  description: 'Learn about GachaWiki - your comprehensive guide to gacha games',

  // Main about sections
  sections: [
    {
      id: 'about-gachawiki',
      title: 'About GachaWiki',
      content: [
        'GachaWiki is your comprehensive guide to gacha games, providing in-depth coverage, character guides, tier lists, and strategic resources for popular mobile RPGs.',
        'We cover multiple games including **Zone Nova** and **Silver & Blood**, offering detailed character databases, gameplay mechanics, and optimization guides.'
      ]
    },
    {
      id: 'what-we-offer',
      title: 'What We Offer',
      type: 'list',
      items: [
        '📊 Comprehensive character databases and tier lists',
        '⚔️ In-depth gameplay mechanics and damage calculations',
        '🎯 Strategic guides and team composition recommendations',
        '⏰ Event timers and game clocks',
        '📱 Mobile-optimized experience'
      ]
    },
    {
      id: 'community-driven',
      title: 'Community Driven',
      content: [
        'This is a fan-made, open-source project built with passion for the gacha gaming community. All content is based on community knowledge, testing, and shared experiences.'
      ]
    }
  ],

  // Footer disclaimer and links
  disclaimer: {
    text: 'This is a fan-made, open-source wiki. All content is based on community knowledge and personal experience.'
  },

  // Footer links
  links: [
    {
      href: 'https://github.com/boring877/gacha-wiki',
      target: '_blank',
      rel: 'noopener noreferrer',
      className: 'github-link',
      icon: '📚',
      text: 'View Source Code'
    }
  ]
};

// Helper functions for about data
export const getAboutSection = (sectionId) => {
  return aboutData.sections.find(section => section.id === sectionId);
};

export const getAllSections = () => {
  return aboutData.sections;
};

export const getPageMetadata = () => {
  return {
    title: aboutData.title,
    subtitle: aboutData.subtitle,
    description: aboutData.description
  };
};

export default aboutData;