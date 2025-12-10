// A Perfect Makeup Look? Memory Card Data - Zone Nova
// Ibaraki-doji's memory card

export const aPerfectMakeupLookData = {
  // Basic Memory Information
  name: 'A Perfect Makeup Look?',
  image: '/images/games/zone-nova/memories/Ibaraki-dojicard.jpg',
  rarity: 'SSR',
  character: 'Ibaraki-doji',

  // Memory Card Stats
  stats: {
    hp: 6000,
    attack: 600,
    defense: 600,
  },

  // Memory Effects
  effects: [
    'Class Restriction: Only effective for Debuffer class',
    '5th Stage Awakening Required',
    'Effect 1: Attack power increases by 40%',
    'Effect 2: When a Ultimate Skill deals damage, the target takes 36% more damage and receives 40% less healing for 5 seconds',
  ],

  // Character Synergy Information
  characterSynergy: {
    description:
      "This memory card perfectly complements Ibaraki-doji's role as an ultimate damage amplification debuffer. The 36% damage taken increase stacks with her other debuffs (Skill +38.6%, Ultimate +87.9%, Passive +36%), bringing her total ultimate damage amplification to +198.5%. The anti-healing effect is also valuable against enemies with self-healing abilities.",
    synergies: [
      'Stacks additively with her Skill (+38.6% all damage taken) and Ultimate (+87.9% ultimate damage taken) debuffs',
      'Combined with her passive at max stacks (+36% ultimate damage taken), nearly triples damage from teammate ultimates',
      '40% healing reduction provides utility against bosses with healing phases',
      'The 40% attack boost increases her skill damage multipliers',
    ],
  },
};

// SEO data for A Perfect Makeup Look?
export const aPerfectMakeupLookSEO = {
  title: `${aPerfectMakeupLookData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${aPerfectMakeupLookData.name}, ${aPerfectMakeupLookData.character}'s ${aPerfectMakeupLookData.rarity} memory card in Zone Nova. Includes effects, stats, and synergies.`,
};

// Export default for easy importing
export default aPerfectMakeupLookData;
