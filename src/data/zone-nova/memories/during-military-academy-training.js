// During Military Academy Training Memory Data - Zone Nova
// Rose's Memory Card

export const duringMilitaryAcademyTrainingData = {
  // Basic Memory Information
  id: 'during-military-academy-training',
  slug: 'during-military-academy-training',
  name: 'During Military Academy Training',
  image: '/images/games/zone-nova/memories/Rosecard.jpg',
  rarity: 'SR',
  character: 'Rose',
  detailUrl: '/guides/zone-nova/characters/rose/',
  
  // Memory Stats
  stats: {
    hp: 4200,
    attack: 650,
    defense: 395
  },
  
  // Memory Effects
  effects: [
    'After using ultimate skill, normal attack and skill damage increased by 60% for 10 seconds'
  ]
};

// SEO data for the memory page
export const duringMilitaryAcademyTrainingSEO = {
  title: `${duringMilitaryAcademyTrainingData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${duringMilitaryAcademyTrainingData.name}, a ${duringMilitaryAcademyTrainingData.rarity} memory card for ${duringMilitaryAcademyTrainingData.character} in Zone Nova. Includes stats, effects, and character synergy.`
};

// Export default for easy importing
export default duringMilitaryAcademyTrainingData; 
