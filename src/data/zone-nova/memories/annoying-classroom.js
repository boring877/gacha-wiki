// Annoying Classroom Memory Data - Zone Nova
// Bastet's Memory Card

export const annoyingClassroomData = {
  // Basic Memory Information
  id: 'annoying-classroom',
  slug: 'annoying-classroom',
  name: 'Annoying Classroom',
  image: '/images/characters/Bastetcard.jpg',
  rarity: 'SR',
  character: 'Bastet',
  detailUrl: '/guides/zone-nova/characters/bastet/',
  
  // Memory Stats
  stats: {
    hp: 4200,
    attack: 650,
    defense: 395
  },
  
  // Memory Effects
  effects: [
    'When releasing ultimate skill: For each enemy on the field, ultimate skill damage increases by 12%, up to 5 stacks, lasting 5 seconds'
  ]
};

// SEO data for the memory page
export const annoyingClassroomSEO = {
  title: `${annoyingClassroomData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${annoyingClassroomData.name}, a ${annoyingClassroomData.rarity} memory card for ${annoyingClassroomData.character} in Zone Nova. Includes stats, effects, and character synergy.`
};

// Export default for easy importing
export default annoyingClassroomData; 
