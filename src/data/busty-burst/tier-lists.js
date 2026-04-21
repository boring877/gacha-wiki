import { BUSTY_BURST_PALADINS } from './paladins.js';
import { getCharacterDataBySlug } from './character-database.js';

export const BUSTY_BURST_TIER_LISTS = {
  beginner: {
    name: 'All Content Tier List',
    description:
      'Tier list for all content. Covers general performance across all game modes.',
    lastUpdated: '2026-03-31',
    tiers: [
      {
        tier: 'SSS',
        definition: {
          label: 'SSS',
          description: 'Must-have for beginners',
          color: '#ff6b6b',
        },
        characters: ['festive_attire_estiriel', 'liesel', 'frey', 'dragon_crusher_medusa', 'messeria', 'top_dancer_messeria'],
      },
      {
        tier: 'SS',
        definition: {
          label: 'SS',
          description: 'Excellent choices for early progression',
          color: '#feca57',
        },
        characters: ['teresia', 'dark_knight', 'ophelio', 'luca', 'lapis', 'rosa', 'chocolate-hildis', 'giselle', 'meinias', 'shaty', 'gemini', 'lust', 'setsuka'],
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
          'elegant_portrait_shamshel',
          'nerys',
          'artia',
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
          'viatrice',
          'rui',
          'sr_slightly_mischievous_devil_luca',
          'sr_farneria',
          'underboob_cheerleader_vanessa',
          'sr_gracie',
          'ishtovia',
          'seductive_vampire_soltina',
          'noble_succubus_empress_shamshel',
          'warrior_of_love_and_chocolate_shaty',
          'chocolate-frey',
          'fruit_basket_bianca',
          'lycorys',
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
          'magical_princess_luceria',
          'sobrina',
          'nora',
          'yu_lima_elka',
          'festive_natasha',
          'holy_night_succubus_yu_rima_elca',
          'magical_holy_night_festival_kaguya',
          'new_years_calligraphy_pastel',
          'pastel',
          'overflowing_jubako_lynette',
          'seductive_high_cut_swimsuit_nerys',
          'epic_fishing_meinias',
          'sr_azura',
          'sr_gladys',
          'nue',
          'sr_constantia',
          'sr_veronica',
          'sr_celestia',
          'sr_athena',
          'sr_irina',
          'raguen',
          'soltina',
          'sr_medusa',
          'elegant_portrait_aysis',
          'golem_summoner_nerys',
          'want_some_beer_stenrina',
          'the_strongest_witch_shaharl',
          'inrine',
          'ruru',
          'kaguya',
          'mischievous_mermaid_princess_lorelia',
          'samurai_cow_girl_setsuka',
          'trish',
          'katisha',
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
        characters: ['venus', 'artemis', 'chocolate-shaty', 'rui'],
      },
      {
        tier: 'S',
        definition: {
          label: 'S',
          description: 'Strong SR characters',
          color: '#48dbfb',
        },
        characters: ['nue', 'sr_slightly_mischievous_devil_luca'],
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
      {
        tier: 'B',
        definition: {
          label: 'B',
          description: 'Decent SR characters',
          color: '#8b8b8b',
        },
        characters: [
          'sr_henrietti',
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

export const ELEMENT_ORDER = ['Fire', 'Water', 'Wind', 'Earth', 'Light', 'Dark', 'Mind'];

const ELEMENT_MERGE = { Holy: 'Light' };

export const TIER_ORDER = ['SSS', 'SS', 'S', 'A', 'B'];

export function getElementTierList(listName = 'beginner') {
  const tierList = BUSTY_BURST_TIER_LISTS[listName];
  if (!tierList) return null;

  const elementData = {};
  ELEMENT_ORDER.forEach(el => { elementData[el] = {}; });
  TIER_ORDER.forEach(tier => {
    ELEMENT_ORDER.forEach(el => {
      elementData[el][tier] = [];
    });
  });

  tierList.tiers.forEach(tierEntry => {
    tierEntry.characters.forEach(slug => {
      const char = BUSTY_BURST_PALADINS.find(p => p.id === slug);
      if (!char) return;

      const dbSlug = slug.replace(/_/g, '-');
      const dbChar = getCharacterDataBySlug(dbSlug);
      const rawElement = dbChar?.element || char.element || 'Unknown';
      const el = ELEMENT_MERGE[rawElement] || rawElement;

      if (!elementData[el]) {
        elementData[el] = {};
        TIER_ORDER.forEach(t => { elementData[el][t] = []; });
      }
      elementData[el][tierEntry.tier].push({ ...char, element: rawElement });
    });
  });

  const sections = ELEMENT_ORDER
    .map(element => {
      const tiers = TIER_ORDER
        .map(tier => ({
          tier,
          definition: BUSTY_BURST_TIER_LISTS[listName].tiers.find(t => t.tier === tier)?.definition || { label: tier, color: '#888' },
          characters: elementData[element]?.[tier] || [],
        }))
        .filter(t => t.characters.length > 0);
      return { element, tiers, total: tiers.reduce((s, t) => s + t.characters.length, 0) };
    })
    .filter(s => s.total > 0);

  return {
    name: tierList.name,
    description: tierList.description,
    lastUpdated: tierList.lastUpdated,
    sections,
  };
}
