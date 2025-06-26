// Cute Little Thing Memory Card Data - Zone Nova
// Horus's memory card

export const cuteLittleThingData = {
  // Basic Memory Information
  name: 'Cute Little Thing',
  image: '/images/games/zone-nova/memories/Horuscard.jpg',
  rarity: 'SSR',
  character: 'Horus',
  
  // Memory Card Stats
  stats: {
    hp: 5040,
    attack: 780,
    defense: 474
  },
  
  // Memory Effects
  effects: [
    'Class Restriction: Only effective for Debuffer class',
    '5th Stage Awakening Required',
    'Effect 1: Attack power increases by 40%',
    'Effect 2: When dealing continuous damage, targets take 24% increased damage for 3 seconds'
  ],
  
  // Character Synergy Information
  characterSynergy: {
    description: 'This memory card enhances Horus\'s debuffer role by significantly boosting his attack power and amplifying the damage from his continuous damage effects. The 24% damage amplification synergizes perfectly with his [Piercing] debuff stacks, making enemies take massive sustained damage.',
    synergies: [
      'Amplifies the damage from [Piercing] stacks applied by his auto and ultimate skills',
      'Works with his passive\'s area explosion damage and continuous damage',
      'Enhances the effectiveness of his debuff consumption mechanics'
    ]
  }
};

// SEO data for Cute Little Thing
export const cuteLittleThingSEO = {
  title: `${cuteLittleThingData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${cuteLittleThingData.name}, ${cuteLittleThingData.character}'s ${cuteLittleThingData.rarity} memory card in Zone Nova. Includes effects, stats, and synergies.`
};

// Export default for easy importing
export default cuteLittleThingData;

