// Battlefield Flower Memory Card Data - Zone Nova
// Nini's memory card

export const battlefieldFlowerData = {
  // Basic Memory Information
  name: 'Battlefield Flower',
  image: '/images/characters/ninicard.jpg',
  rarity: 'SR',
  character: 'Nini',
  
  // Memory Card Stats
  stats: {
    hp: 5000,
    attack: 500,
    defense: 500
  },
  
  // Memory Effects
  effects: [
    'Battlefield Flower: For each negative effect on the target, damage dealt increases by 20%, maximum 3 stacks'
  ],
  
  // Character Synergy Information
  characterSynergy: {
    description: 'This memory card transforms Nini into a devastating damage dealer against debuffed enemies. It synergizes perfectly with her debuff application abilities and her passive that increases damage against enemies with negative effects.',
    synergies: [
      'Amplifies damage based on her [Weakness] debuff stacks (up to 5 with awakening)',
      'Works with her passive "Battle Fanatic" for compounding damage bonuses',
      'Enhances effectiveness when fighting alongside other debuffers'
    ]
  }
};

// SEO data for Battlefield Flower
export const battlefieldFlowerSEO = {
  title: `${battlefieldFlowerData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${battlefieldFlowerData.name}, ${battlefieldFlowerData.character}'s ${battlefieldFlowerData.rarity} memory card in Zone Nova. Includes effects, stats, and synergies.`
};

// Export default for easy importing
export default battlefieldFlowerData; 
