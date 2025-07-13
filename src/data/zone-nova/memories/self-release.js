// Self-Release Memory Card Data - Zone Nova
// Lyra's memory card

export const selfReleaseData = {
  // Basic Memory Information
  name: 'Self-Release (自我放纵)',
  image: '/images/games/zone-nova/memories/Lyracard.jpg',
  rarity: 'SSR',
  character: 'Lyra',
  
  // Memory Card Stats
  stats: {
    hp: 5040,
    attack: 780,
    defense: 474
  },
  
  // Memory Effects
  effects: [
    'Ultimate Damage: Ultimate damage increased by 40%',
    'Single Target Bonus: When there\'s one enemy on the field, ultimate damage additionally increases by 10%, maximum 4 times',
    'Maximum Potential: Up to 80% ultimate damage boost vs single targets (40% + 40%)'
  ],
  
  // Character Synergy Information
  characterSynergy: {
    description: 'This memory card transforms Lyra into the ultimate boss killer by dramatically boosting her ultimate damage. The scaling bonus for fewer enemies perfectly complements her passive that increases attack based on enemy count, creating optimal damage output in all scenarios.',
    synergies: [
      'Enhances her ultimate "Ghost Blade Flow" for massive single-target damage',
      'Balances her passive that gains attack from more enemies vs single-target scenarios',
      'Works with her [Fire Essence] consumption mechanics for enhanced ultimate effects'
    ]
  }
};

// SEO data for Self-Release
export const selfReleaseSEO = {
  title: `${selfReleaseData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${selfReleaseData.name}, ${selfReleaseData.character}'s ${selfReleaseData.rarity} memory card in Zone Nova. Includes effects, stats, and synergies.`
};

// Export default for easy importing
export default selfReleaseData;

