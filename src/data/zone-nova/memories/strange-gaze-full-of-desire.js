// Hela Memory Card Data - Zone Nova
// Strange Gaze Full of Desire

export const helaMemoryData = {
  // Basic Memory Information
  name: 'Strange Gaze Full of Desire',
  chineseName: '充满欲望的奇怪凝视',
  image: '/images/games/zone-nova/memories/Helacard.jpg',
  rarity: 'SSR',
  element: 'Chaos',
  character: 'Hela',
  characterChineseName: '海拉',
  class: 'Rogue',
  level: '80/80',
  stars: 6,

  // Base Stats
  stats: {
    hp: '5,040',
    attack: '780',
    defense: '474',
  },

  // Memory Effects
  effects: [
    'Only effective for Rogue class, 5-price awakening',
    'Crit Rate increases by 34%',
    "When other allies cast their ultimates, the wearer's damage dealt increases by 24% for 5 seconds (max 3 stacks, up to 72% bonus damage)",
  ],

  // Flavor Text/Description
  description:
    'A mysterious gaze filled with desire that enhances critical striking capabilities and synergizes with ultimate abilities.',

  // Acquisition Information
  acquisition: {
    source: 'Gacha/Event',
    recommendedCharacter: 'Hela',
    classCompatibility: 'Rogue only',
  },

  // Upgrade Information
  upgrade: {
    maxLevel: 80,
    awakeningRequired: '5-price awakening',
  },
};

// SEO data for Hela's Memory
export const helaMemorySEO = {
  title: `${helaMemoryData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${helaMemoryData.name}, a ${helaMemoryData.rarity} ${helaMemoryData.class} memory card in Zone Nova. Perfect for ${helaMemoryData.character}. Includes stats, effects, and usage tips.`,
  keywords: [
    'Zone Nova',
    'Memory Card',
    'Hela',
    'Strange Gaze Full of Desire',
    'Rogue',
    'SSR',
    'Crit Rate',
  ],
};

// Export default for easy importing
export default helaMemoryData;
