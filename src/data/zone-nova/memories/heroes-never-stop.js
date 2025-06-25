// Heroes Never Stop Memory Card Data - Zone Nova
// Shanna's memory card

export const heroesNeverStopData = {
  // Basic Memory Information
  name: 'Heroes, Never Stop',
  image: '/images/characters/Shannacard.jpg',
  rarity: 'SR',
  character: 'Shanna',
  
  // Memory Card Stats
  stats: {
    hp: 4200,
    attack: 650,
    defense: 395
  },
  
  // Memory Effects
  effects: [
    'When the number of enemies on field is less than 2: Increase critical hit damage by 72%'
  ],
  
  // Character Synergy Information
  characterSynergy: {
    description: 'This memory card transforms Shanna into an ultimate boss killer and single-target eliminator. It synergizes perfectly with her [Focus] stacking mechanism and critical hit damage bonuses from awakenings.',
    synergies: [
      'Amplifies critical damage when combined with her [Focus] stacks (up to 10 stacks)',
      'Works with Awakening 6 which adds 50% critical hit damage at max [Focus]',
      'Perfect for boss fights and situations with few remaining enemies'
    ]
  }
};

// SEO data for Heroes Never Stop
export const heroesNeverStopSEO = {
  title: `${heroesNeverStopData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${heroesNeverStopData.name}, ${heroesNeverStopData.character}'s ${heroesNeverStopData.rarity} memory card in Zone Nova. Includes effects, stats, and synergies.`
};

// Export default for easy importing
export default heroesNeverStopData; 

