// Zone Nova Memory Data Template
// Copy this template and replace placeholders with actual memory data

export const memoryNameData = {
  // Basic Memory Information
  id: 'MEMORY_ID', // e.g., 'embarrassing-pattern'
  slug: 'MEMORY_SLUG', // e.g., 'embarrassing-pattern'
  name: 'MEMORY_NAME', // e.g., 'Embarrassing Pattern'
  image: '/images/games/zone-nova/memories/MEMORY_IMAGE.jpg', // e.g., '/images/games/zone-nova/memories/Athenacard.jpg'
  rarity: 'RARITY', // SSR, SR, R
  character: 'CHARACTER_NAME', // e.g., 'Athena'
  detailUrl: '/guides/zone-nova/characters/CHARACTER_SLUG/', // Link to character page
  
  // Memory Stats
  stats: {
    hp: HP_VALUE, // e.g., 6000
    attack: ATTACK_VALUE, // e.g., 600
    defense: DEFENSE_VALUE // e.g., 600
  },
  
  // Memory Effects (Array of effect descriptions)
  effects: [
    'EFFECT_1_DESCRIPTION',
    'EFFECT_2_DESCRIPTION',
    'EFFECT_3_DESCRIPTION' // Add more as needed
  ]
};

// SEO data for the memory page
export const memoryNameSEO = {
  title: `${memoryNameData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${memoryNameData.name}, a ${memoryNameData.rarity} memory card for ${memoryNameData.character} in Zone Nova. Includes stats, effects, and character synergy.`
};

// Export default for easy importing
export default memoryNameData;

// Usage instructions:
// 1. Copy this file to src/data/zone-nova/memories/[memory-name].js
// 2. Replace all placeholder values with actual memory data
// 3. Update the file name and exports to match the memory name
// 4. Import in the corresponding .astro page file 