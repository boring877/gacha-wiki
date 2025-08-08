// About Page Data
// Simple about page with just title and hero content

export const aboutData = {
  // Page metadata
  title: 'About GachaWiki',
  description: 'Learn about GachaWiki',

  // Hero content - you can add your content here
  hero: {
    // Content will be added by user
  },
};

// Helper functions for about data
export const getAboutSection = sectionId => {
  return aboutData.sections.find(section => section.id === sectionId);
};

export const getAllSections = () => {
  return aboutData.sections;
};

export const getPageMetadata = () => {
  return {
    title: aboutData.title,
    subtitle: aboutData.subtitle,
    description: aboutData.description,
  };
};

export default aboutData;
