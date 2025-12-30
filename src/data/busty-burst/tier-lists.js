import { BUSTY_BURST_PALADINS } from './paladins.js';

export const BUSTY_BURST_TIER_LISTS = {
  beginner: {
    name: 'Beginner Tier List',
    description:
      'This tier list gives a general idea of what to pick early on. It is not the final tier list.',
    lastUpdated: '2025-12-30',
    tiers: [
      {
        tier: 'SSS',
        definition: {
          label: 'SSS',
          description: 'Must-have for beginners',
          color: '#ff6b6b',
        },
        characters: ['festive_attire_estiriel', 'liesel', 'frey', 'dragon_crusher_medusa'],
      },
      {
        tier: 'SS',
        definition: {
          label: 'SS',
          description: 'Excellent choices for early progression',
          color: '#feca57',
        },
        characters: ['messeria', 'teresia', 'dark_knight', 'shaty', 'kaguya'],
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
          'queen_of_pies_and_cookies_aphrodia',
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
          'holy_night_succubus_yu_rima_elca',
          'magical_holy_night_festival_kaguya',
          'new_years_calligraphy_pastel',
          'overflowing_jubako_lynette',
        ],
      },
    ],
  },
  aethersteel: {
    name: "Aethersteel's Tier List",
    description: 'Tier list created by Aethersteel with different rankings',
    lastUpdated: '2025-12-30',
    tiers: [
      {
        tier: 'SSS',
        definition: {
          label: 'SSS',
          description: 'Top tier characters by Aethersteel',
          color: '#ff6b6b',
        },
        characters: ['festive_attire_estiriel', 'liesel', 'messeria', 'dragon_crusher_medusa'],
      },
      {
        tier: 'SS',
        definition: {
          label: 'SS',
          description: 'Excellent choices by Aethersteel',
          color: '#feca57',
        },
        characters: ['frey', 'teresia', 'dark_knight', 'artia', 'gemini', 'luca'],
      },
      {
        tier: 'S',
        definition: {
          label: 'S',
          description: 'Strong characters according to Aethersteel',
          color: '#48dbfb',
        },
        characters: [
          'festival_empress_shamshel',
          'elegant_shamshel',
          'nerys',
          'soltina',
          'estiriel',
          'hildis',
          'stenlina',
          'bianca',
          'venus',
          'luceria',
          'ishtovia',
          'nora',
          'queen_of_pies_and_cookies_aphrodia',
        ],
      },
      {
        tier: 'A',
        definition: {
          label: 'A',
          description: 'Good options by Aethersteel',
          color: '#1dd1a1',
        },
        characters: [
          'natasha',
          'meinias',
          'yu_lima_elka',
          'festive_natasha',
          'sobrina',
          'marina',
          'artemis',
          'holy_night_succubus_yu_rima_elca',
          'magical_holy_night_festival_kaguya',
          'new_years_calligraphy_pastel',
          'overflowing_jubako_lynette',
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
