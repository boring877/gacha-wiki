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
        characters: ['messeria', 'teresia', 'dark_knight', 'shaty', 'kaguya', 'ophelio', 'luca', 'rosa'],
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
          'marina',
          'stenlina',
          'hisara',
          'bianca',
          'natasha',
          'venus',
          'artemis',
          'queen_of_pies_and_cookies_aphrodia',
          'killer_bikini_theresia',
          'lucie',
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
          'pastel',
          'overflowing_jubako_lynette',
          'seductive_high_cut_swimsuit_nerys',
          'epic_fishing_meinias',
        ],
      },
    ],
  },
  sr: {
    name: 'SR Only Tier List',
    description:
      'Tier list for SR Raid mode, which limits you to only use SR units.',
    lastUpdated: '2025-12-30',
    tiers: [
      {
        tier: 'SSS',
        definition: {
          label: 'SSS',
          description: 'Best SR characters',
          color: '#ff6b6b',
        },
        characters: ['liesel'],
      },
      {
        tier: 'SS',
        definition: {
          label: 'SS',
          description: 'Excellent SR choices',
          color: '#feca57',
        },
        characters: ['venus', 'artemis', 'rui'],
      },
      {
        tier: 'S',
        definition: {
          label: 'S',
          description: 'Strong SR characters',
          color: '#48dbfb',
        },
        characters: ['nue'],
      },
      {
        tier: 'A',
        definition: {
          label: 'A',
          description: 'Good SR options',
          color: '#1dd1a1',
        },
        characters: [
          'festive_natasha',
          'holy_night_succubus_yu_rima_elca',
          'overflowing_jubako_lynette',
          'epic_fishing_meinias',
          'sr_gladys',
          'sr_emelaria',
          'sr_nerys',
          'sr_irina',
          'sr_sobrina',
          'sr_messeria',
          'sr_paia',
          'sr_azura',
          'sr_zoe',
          'sr_constantia',
          'sr_farneria',
          'sr_athena',
          'sr_medusa',
          'sr_lucrezia',
          'sr_ishtovia',
          'sr_veronica',
          'sr_celestia',
          'sr_guinevia',
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
