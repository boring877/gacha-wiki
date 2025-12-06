import { BUSTY_BURST_PALADINS } from './paladins.js';

export const BUSTY_BURST_TIER_LISTS = {
  beginner: {
    name: 'Beginner Tier List',
    description:
      'This tier list gives a general idea of what to pick early on. It is not the final tier list.',
    lastUpdated: '2025-12-06',
    tiers: [
      {
        tier: 'SSS',
        definition: {
          label: 'SSS',
          description: 'Must-have for beginners',
          color: '#ff6b6b',
        },
        characters: ['festive_attire_estiriel', 'liesel', 'frey'],
      },
      {
        tier: 'SS',
        definition: {
          label: 'SS',
          description: 'Excellent choices for early progression',
          color: '#feca57',
        },
        characters: ['messeria', 'teresia', 'dark_knight'],
      },
      {
        tier: 'S',
        definition: {
          label: 'S',
          description: 'Strong characters for early game',
          color: '#48dbfb',
        },
        characters: [
          'festival_empress_shamshel',
          'elegant_shamshel',
          'nerys',
          'soltina',
          'artia',
          'gemini',
          'estiriel',
          'hildis',
          'luca',
          'marina',
          'stenlina',
          'hisara',
          'bianca',
          'natasha',
          'venus',
          'artemis',
        ],
      },
      {
        tier: 'A',
        definition: {
          label: 'A',
          description: 'Good starting options',
          color: '#1dd1a1',
        },
        characters: [
          'luceria',
          'sobrina',
          'ishtovia',
          'nora',
          'meinias',
          'yu_lima_elka',
          'festive_natasha',
        ],
      },
    ],
  },
};

export const getTierList = (listName = 'beginner') => {
  const tierList = BUSTY_BURST_TIER_LISTS[listName];
  if (!tierList) return null;

  // Map character IDs to full character data
  const tiersWithData = tierList.tiers.map(tier => ({
    ...tier,
    characters: tier.characters
      .map(
        charId =>
          BUSTY_BURST_PALADINS.find(p => p.id === charId) || {
            id: charId,
            name: 'Unknown',
            image: '',
          }
      )
      .filter(Boolean), // Remove any unknown characters
  }));

  return {
    ...tierList,
    tiers: tiersWithData,
  };
};

export const getAllTierLists = () => {
  return Object.keys(BUSTY_BURST_TIER_LISTS).map(key => ({
    id: key,
    name: BUSTY_BURST_TIER_LISTS[key].name,
    description: BUSTY_BURST_TIER_LISTS[key].description,
  }));
};
