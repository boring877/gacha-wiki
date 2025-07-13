// A Smile That Topples Cities - Gaia Memory Data
export const gaiamemoryData = {
  id: 'gaiacard',
  slug: 'gaiacard',
  name: 'A Smile That Topples Cities',
  character: 'Gaia',
  rarity: 'SSR',
  element: null,
  image: '/images/games/zone-nova/memories/Gaiacard.jpg',
  
  // Level 80 Stats
  stats: {
    hp: 6300,
    attack: 580,
    defense: 585
  },
  
  // Memory Effects
  effects: {
    primary: 'A Smile That Topples Cities',
    details: [
      {
        type: 'Stat Boost',
        effect: 'Max HP +40%',
        description: 'Significantly increases the character\'s maximum HP pool'
      },
      {
        type: 'Healing Enhancement',
        effect: 'Healing output +40%',
        description: 'Base healing effectiveness is increased by 40%'
      },
      {
        type: 'Conditional Healing Boost',
        effect: 'If wearer healed within last 1 second: additional +40% healing output',
        description: 'When the wearer has performed healing recently, their next healing is even more powerful'
      }
    ],
    summary: 'Up to 80% total healing output increase (40% base + 40% conditional)'
  },
  
  // Detailed Analysis
  analysis: {
    strengths: [
      'Massive HP boost makes Gaia much more survivable',
      'Excellent for sustained healing builds',
      'Conditional effect rewards active healing playstyle',
      'Perfect synergy with Gaia\'s healing-focused kit'
    ],
    weaknesses: [
      'Conditional effect requires precise timing',
      'No offensive stats boost',
      'Effectiveness depends on team taking damage'
    ],
    bestFor: [
      'Healing-focused Gaia builds',
      'Teams that need sustained support',
      'Long boss fights where healing is crucial',
      'Compositions lacking other healers'
    ]
  },
  
  // Usage Tips
  usage: {
    optimal: 'Best used on Gaia in healer role where she can consistently trigger the conditional healing boost',
    synergy: 'Combines excellently with team HP boost abilities and defensive compositions',
    timing: 'The 1-second window for conditional healing requires active management but provides significant payoff'
  }
};

export default gaiamemoryData;