/**
 * Busty Burst Fantasy - Accessory Guide Data
 */

// Main stats by accessory slot - only showing the important ones
export const mainStats = [
  { slot: 'Tiara', imageFile: 'Gold_Tiara.png', best: 'HP' },
  { slot: 'Earrings', imageFile: 'Gold_Earrings.png', best: 'Phys/Mag Crit' },
  { slot: 'Necklace', imageFile: 'Gold_Necklace.png', best: 'Ultimate DMG' },
  { slot: 'Bracelet', imageFile: 'Gold_Bracelet.png', best: 'Phys/Mag Atk' },
  { slot: 'Ring', imageFile: 'Gold_Ring.png', best: 'Skill DMG or Healing' },
];

// Substats priority
export const subStats = {
  priority: ['Phys Atk', 'Mag Atk'],
  secondary: ['Phys Crit', 'Mag Crit'],
  other: ['HP', 'Phys Def', 'Mag Def', 'MP Recovery', 'HP Recovery', 'Block'],
};

// Substat tips
export const subStatTips = [
  'Try to get 3-4 rolls into Phys Atk or Mag Atk.',
  'Bracelet already has Atk main stat, so prioritize Crit substats instead.',
  'Earrings already has Crit main stat, so prioritize Atk substats instead.',
  'You can feed enhanced accessories into another accessory if you get bad rolls.',
];

// Set ratings
export const setRatings = [
  {
    tier: 'Best',
    sets: [
      { name: 'Gold', imageFile: 'Gold_Tiara.png', note: 'Physical DPS' },
      { name: 'Amethyst', imageFile: 'Amethyst_Tiara.png', note: 'Magic DPS' },
    ],
  },
  {
    tier: 'Good',
    sets: [
      { name: 'Emerald', imageFile: 'Emerald_Tiara.png', note: 'Supports' },
      { name: 'Sapphire', imageFile: 'Sapphire_Tiara.png', note: 'Magic Crit' },
    ],
  },
  {
    tier: 'Situational',
    sets: [
      { name: 'Diamond', imageFile: 'Diamond_Tiara.png', note: 'Tanks only' },
      { name: 'Ruby', imageFile: 'Ruby_Tiara.png', note: 'Early game' },
    ],
  },
  {
    tier: 'Skip',
    sets: [
      { name: 'Pearl', imageFile: 'Pearl_Tiara.png', note: '5th piece only' },
      { name: 'Amber', imageFile: 'Amber_Tiara.png', note: 'Not worth' },
    ],
  },
];

// Recommended builds by role
export const recommendedBuilds = [
  {
    role: 'Physical DPS',
    sets: [{ name: 'Gold', imageFile: 'Gold_Tiara.png', pieces: '4pc' }],
  },
  {
    role: 'Magic DPS',
    sets: [{ name: 'Amethyst', imageFile: 'Amethyst_Tiara.png', pieces: '4pc' }],
  },
  {
    role: 'Skill Attacker',
    sets: [
      { name: 'Gold', imageFile: 'Gold_Tiara.png', pieces: '2pc' },
      { name: 'Amethyst', imageFile: 'Amethyst_Tiara.png', pieces: '2pc' },
    ],
  },
  {
    role: 'Ultimate DPS',
    sets: [
      { name: 'Gold', imageFile: 'Gold_Tiara.png', pieces: '2pc' },
      { name: 'Sapphire', imageFile: 'Sapphire_Tiara.png', pieces: '2pc' },
    ],
  },
  {
    role: 'Support',
    sets: [{ name: 'Emerald', imageFile: 'Emerald_Tiara.png', pieces: '4pc' }],
  },
  {
    role: 'Tank',
    sets: [{ name: 'Diamond', imageFile: 'Diamond_Tiara.png', pieces: '4pc' }],
  },
];

// Quick tips
export const quickTips = [
  '2pc and 4pc set bonuses only - 5th slot can be any piece with good substats.',
  'SSR gear has better base stats than SR.',
  'JP server has newer sets that outclass these - save resources if planning ahead.',
];
