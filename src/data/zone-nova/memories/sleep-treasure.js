// Sleep Treasure Memory Card Data - Zone Nova
// Zashiki-warashi's memory card

export const sleepTreasureData = {
  // Basic Memory Information
  name: 'Sleep Treasure',
  image: '/images/games/zone-nova/memories/Zashiki-warashicard.jpg',
  rarity: 'SR',
  character: 'Zashiki-warashi',

  // Memory Card Stats
  stats: {
    hp: 5000,
    attack: 500,
    defense: 500,
  },

  // Memory Effects
  effects: [
    'After releasing ultimate: Team damage increases by 24% for 10 seconds',
    'Additionally: Has 50% chance to make team critical damage additionally increase by 20% for 10 seconds',
  ],

  // Character Synergy Information
  characterSynergy: {
    description:
      'This memory card transforms Zashiki-warashi into the ultimate team buffer by amplifying her already powerful ultimate ability. The guaranteed team damage boost combined with the chance for critical damage enhancement creates devastating team-wide damage spikes.',
    synergies: [
      'Enhances her ultimate "Share Fortune! Share Hardship!" with additional team damage',
      'Works with her passive [Blessing] effects for compounding damage bonuses',
      'Synergizes with Awakening 6 which doubles ultimate effects for blessed characters',
    ],
  },
};

// SEO data for Sleep Treasure
export const sleepTreasureSEO = {
  title: `${sleepTreasureData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${sleepTreasureData.name}, ${sleepTreasureData.character}'s ${sleepTreasureData.rarity} memory card in Zone Nova. Includes effects, stats, and synergies.`,
};

// Export default for easy importing
export default sleepTreasureData;
