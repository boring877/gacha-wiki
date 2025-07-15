// The Beauty of Heijing Castle Memory Card Data - Zone Nova
// Snow Girl's memory card

export const theBeautyOfHeijingCastleData = {
  // Basic Memory Information
  name: 'The Beauty of Heijing Castle',
  chineseName: '平京城的绝美',
  image: '/images/games/zone-nova/memories/Snowcard.jpg',
  rarity: 'SR',
  character: 'Snow Girl',

  // Memory Card Stats
  stats: {
    hp: 5000,
    attack: 500,
    defense: 500,
  },

  // Memory Effects
  effects: [
    'Only effective for healers, 5-price awakening',
    "The Beauty of Heijing Castle: Healing amount +30%, when recovering targets' life value is full, target damage +24% for 10 seconds",
  ],

  // Character Synergy Information
  characterSynergy: {
    description:
      'This memory card transforms Snow Girl into both a healer and damage buffer, providing massive healing boosts and granting damage bonuses to fully healed allies. It synergizes perfectly with her sustained recovery effects.',
    synergies: [
      'Enhances her auto skill "Ice Snow Healing" and ultimate "Ice Seal Protection"',
      'Works with her passive "Frost Blessing" sustained recovery effects',
      "Pairs with Awakening 4's 20% healing increase and damage reduction effects",
    ],
  },
};

// SEO data for The Beauty of Heijing Castle
export const theBeautyOfHeijingCastleSEO = {
  title: `${theBeautyOfHeijingCastleData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${theBeautyOfHeijingCastleData.name}, ${theBeautyOfHeijingCastleData.character}'s ${theBeautyOfHeijingCastleData.rarity} memory card in Zone Nova. Includes effects, stats, and synergies.`,
};

// Export default for easy importing
export default theBeautyOfHeijingCastleData;
