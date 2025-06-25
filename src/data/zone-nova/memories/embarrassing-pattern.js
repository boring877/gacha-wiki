// Embarrassing Pattern Memory Data - Zone Nova
// Athena's Memory Card

export const embarrassingPatternData = {
  // Basic Memory Information
  id: 'embarrassing-pattern',
  slug: 'embarrassing-pattern',
  name: 'Embarrassing Pattern',
  image: '/images/characters/Athenacard.jpg',
  rarity: 'SSR',
  character: 'Athena',
  detailUrl: '/guides/zone-nova/characters/athena/',
  
  // Memory Stats
  stats: {
    hp: 6000,
    attack: 600,
    defense: 600
  },
  
  // Memory Effects
  effects: [
    'After battle start: All allies defense +40%, normal attack damage +40%',
    'When equipped character deals 5 normal attack damage: All team attack power +40% for 5 seconds'
  ]
};

// SEO data for the memory page
export const embarrassingPatternSEO = {
  title: `${embarrassingPatternData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${embarrassingPatternData.name}, a ${embarrassingPatternData.rarity} memory card for ${embarrassingPatternData.character} in Zone Nova. Includes stats, effects, and character synergy.`
};

// Export default for easy importing
export default embarrassingPatternData; 
