// Perverted Little Nurse Memory Card Data - Zone Nova
// Leviathan's memory card

export const pervertedLittleNurseData = {
  // Basic Memory Information
  name: 'Perverted Little Nurse (变态小护士)',
  image: '/images/games/zone-nova/memories/Leviathancard.jpg',
  rarity: 'SR',
  character: 'Leviathan',
  
  // Memory Card Stats
  stats: {
    hp: 4200,
    attack: 650,
    defense: 395
  },
  
  // Memory Effects
  effects: [
    'Critical Rate Boost: After causing pursuit damage, critical rate increased by 36% for 10 seconds'
  ],
  
  // Character Synergy Information
  characterSynergy: {
    description: 'This memory card transforms Leviathan into a critical hit powerhouse by providing massive critical rate boosts after her frequent pursuit attacks. The 36% critical rate increase synergizes perfectly with her mark-based pursuit system.',
    synergies: [
      'Enhances the effectiveness of her passive pursuit attacks triggered by ally skills',
      'Works with Awakening 2\'s 20% pursuit critical rate for compounding critical hit chance',
      'Synergizes with Awakening 6 which doubles ultimate pursuit attacks'
    ]
  }
};

// SEO data for Perverted Little Nurse
export const pervertedLittleNurseSEO = {
  title: `${pervertedLittleNurseData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${pervertedLittleNurseData.name}, ${pervertedLittleNurseData.character}'s ${pervertedLittleNurseData.rarity} memory card in Zone Nova. Includes effects, stats, and synergies.`
};

// Export default for easy importing
export default pervertedLittleNurseData; 

