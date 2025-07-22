// Shared Bath Time Memory Data - Zone Nova
// Odin's exclusive memory card

export const sharedBathTimeData = {
  // Basic Memory Information
  id: 'shared-bath-time',
  slug: 'shared-bath-time',
  name: 'Shared Bath Time',
  image: '/images/games/zone-nova/memories/Odincard.jpg',
  rarity: 'SSR',
  character: 'Odin',
  detailUrl: '/guides/zone-nova/characters/odin/',

  // Memory Stats
  stats: {
    hp: 5040,
    attack: 780,
    defense: 474,
  },

  // Memory Effects
  effects: [
    'ATK +40%; ultimate damage +40% for the caster.',
    'After each ultimate, gain 1 [Charge]. When dealing damage, consume [Charge] to apply 1 stack of [Final Flame]: deals 15% ATK Fire damage every 2s, stacks up to 5, lasts 10s.',
  ],

  // Additional memory details
  element: null,
  characterElement: 'Fire',
  characterRole: 'DPS',

  // Usage recommendations
  recommended: {
    playstyle: 'Ultimate-focused DPS builds',
    synergy: 'Works best with characters that can frequently use ultimates',
    combos: 'Pairs well with damage amplification effects',
  },
};

// SEO data for the memory page
export const sharedBathTimeSEO = {
  title: `${sharedBathTimeData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${sharedBathTimeData.name}, Odin's exclusive SSR memory card in Zone Nova. Includes stats, effects, and optimal builds for maximum damage output.`,
};

// Export default for easy importing
export default sharedBathTimeData;
