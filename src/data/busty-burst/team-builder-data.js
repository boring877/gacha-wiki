/**
 * Busty Burst Fantasy - Team Builder Data
 * Imports skill data from character files and adds category assignments for conflict detection
 *
 * BUFF CATEGORIES:
 * A - Single Target Ultimate buffs
 * B - Multiple Target Ultimate buffs (2+ allies)
 * C - Single Target Skill buffs
 * D - Multiple Target Skill buffs (2+ allies)
 *
 * DEBUFF CATEGORIES:
 * A - ALL Ultimate debuffs (regardless of target count)
 * B - Single Target Skill debuffs
 * C - Multiple Target Skill debuffs (2+ enemies)
 */

import { BUSTY_BURST_CHARACTER_INFO, BUSTY_BURST_CHARACTER_STATS, BUSTY_BURST_SKILLS_MAP } from './characters/index.js';
import { BUSTY_BURST_PALADINS } from './paladins.js';

const PALADINS_BY_ID = {};
BUSTY_BURST_PALADINS.forEach(p => { PALADINS_BY_ID[p.characterId] = p; });

const TEAM_BUILDER_SLUG_MAP = {
  // SSR Characters
  'festive_attire_estiriel': 'festival-attire-estiriel',
  'elegant_shamshel': 'elegant-portrait-shamshel',
  'luceria': 'magical-princess--luceria',
  'nerys': 'golem-summoner-nerys',
  'soltina': 'soltina',
  'estiriel': 'estiriel',
  'hildis': 'hildis',
  'marina': 'marina',
  'stenlina': 'stenlina',
  'hisara': 'hisara',
  'bianca': 'bianca',
  'natasha': 'natasha',
  'queen_of_pies_and_cookies_aphrodia': 'queen-of-pies-and-cookies-aphrodia',
  'ishtovia': 'pious-cleric-ishtovia',
  'nora': 'nora',
  'sobrina': 'mage-of-bastinton-sobrina',
  'meinias': 'meinias',
  'yu_lima_elka': 'yu-lima-elka',
  'festival_empress_shamshel': 'festival-empress-shamshel',
  'kaguya': 'kaguya',
  'shaty': 'shaty',
  'gemini': 'gemini',
  'luca': 'luca',
  'teresia': 'theresia',
  'dark_knight': 'the-dark-knight',
  'artia': 'artia',
  'frey': 'frey',
  'festive_natasha': 'festival-dress-up-natasha',
  'holy_night_succubus_yu_rima_elca': 'holy-night-succubus-yu-rima-elca',
  'magical_holy_night_festival_kaguya': 'magical-holy-night-festival-kaguya',
  'dragon_crusher_medusa': 'dragon-crusher-medusa',
  'new_years_calligraphy_pastel': 'new-years-calligraphy-pastel',
  'overflowing_jubako_lynette': 'overflowing-jubako-lynette',
  'seductive_high_cut_swimsuit_nerys': 'seductive-high-cut-swimsuit-nerys',
  'killer_bikini_theresia': 'killerbikini-theresia',
  'epic_fishing_meinias': 'epic-fishing-meinias',
  'giselle': 'giselle',
  'inrine': 'inrine',
  'pastel': 'pastel',
  'estiriel_base': 'estiriel',
  'hildis_base': 'hildis',
  'marina_base': 'marina',

  // 2026 Q2 New Characters
  'henrietti': 'henrietti',
  'vanessa': 'vanessa',
  'viatrice': 'viatrice',
  'trish': 'trish',
  'lycorys': 'lycorys',
  'katisha': 'katisha',

  // SR Characters
  'gladys': 'gladys',
  'emelaria': 'emelaria',
  'nerys_sr': 'nerys',
  'irina': 'irina',
  'sobrina_sr': 'sobrina',
  'messeria_sr': 'messeria',
  'paia': 'paia',
  'azura': 'azura',
  'zoe': 'zoe',
  'constantia': 'constantia',
  'farneria': 'farneria',
  'artemis': 'artemis',
  'athena_sr': 'athena',
  'medusa': 'medusa',
  'venus': 'venus',
  'liesel': 'liesel',
  'ishtovia_sr': 'ishtovia',
  'veronica': 'veronica',
  'celestia': 'celestia',
  'guinevia': 'guinevia',
  'lucrezia': 'lucrezia',

  // R Characters
  'shamshel_r': 'shamshel',
  'aysis': 'aysis',
  'roxanne': 'roxanne',
  'luceria_r': 'luceria',
  'aphrodia_r': 'aphrodia',
  'drowatt': 'drowatt',
  'aristera': 'aristera',
  'rosalyn': 'rosalyn',
  'estria': 'estria',
  'celebria': 'celebria',
  'xevia': 'xevia',
  'shahar': 'shahar',
  'elythia': 'elythia',
  'nadine': 'nadine',
  'lorelia': 'lorelia',
  'destra': 'destra',
  'eskelda': 'eskelda',

  // 26 missing characters from tier list
  'top_dancer_messeria': 'top-dancer-messeria',
  'ophelio': 'ophelio',
  'lapis': 'lapis',
  'rosa': 'rosa',
  'chocolate_hildis': 'chocolate-dragon-warrior-hildis',
  'lust': 'lust',
  'setsuka': 'setsuka',
  'lucie': 'lucie',
  'underboob_cheerleader_vanessa': 'underboob-cheerleader-vanessa',
  'seductive_vampire_soltina': 'seductive-vampire-soltina',
  'noble_succubus_empress_shamshel': 'noble-succubus-empress-shamshel',
  'chocolate_frey': 'purehearted-pâtissière-frey',
  'fruit_basket_bianca': 'fruit-basket-bianca',
  'ruru': 'ruru',
  'elegant_portrait_aysis': 'elegant-portrait-aysis',
  'golem_summoner_nerys': 'golem-summoner-nerys',
  'the_strongest_witch_shaharl': 'the-strongest-witch-shaharl',
  'mischievous_mermaid_princess_lorelia': 'mischievous-mermaid-princess-lorelia',
  'samurai_cow_girl_setsuka': 'samurai-cow-girl-setsuka',
  'raguen': 'raguen',
  'warrior_of_love_and_chocolate_shaty': 'warrior-of-love-and-chocolate-shaty',
  'gracie': 'gracie',
  'slightly_mischievous_devil_luca': 'slightly-mischievous-devil-luca',
  'nue': 'nue',
  'want_some_beer_stenrina': 'want-some-beer-stenrina',
  'messeria': 'hypnotic-dancer-messeria',
  'magdalena': 'magdalena',
};

// Buff category definitions (colors handled by CSS)
export const BUFF_CATEGORIES = {
  A: { name: 'Single Target Ultimate', cssClass: 'buff-cat-a' },
  B: { name: 'Multiple Target Ultimate', cssClass: 'buff-cat-b' },
  C: { name: 'Single Target Skill', cssClass: 'buff-cat-c' },
  D: { name: 'Multiple Target Skill', cssClass: 'buff-cat-d' },
};

// Debuff category definitions (colors handled by CSS)
export const DEBUFF_CATEGORIES = {
  A: { name: 'All Ultimate Debuffs', cssClass: 'debuff-cat-a' },
  B: { name: 'Single Target Skill Debuff', cssClass: 'debuff-cat-b' },
  C: { name: 'Multiple Target Skill Debuff', cssClass: 'debuff-cat-c' },
};

// Direct mapping from character-skills.js IDs to numeric characterIds
// Based on character-stats-full.js data
const CHARACTER_ID_MAP = {
  // SSR Characters
  'festive_attire_estiriel': 2069,
  'elegant_shamshel': 2040,
  'luceria': 2041,
  'nerys': 2042,
  'sobrina': 2043,
  'messeria': 2044,
  'ishtovia': 2045,
  'teresia': 2046,
  'soltina': 2047,
  'artia': 2048,
  'dark_knight': 2049,
  'frey': 2051,
  'gemini': 2052,
  'estiriel': 2053,
  'hildis': 2054,
  'luca': 2055,
  'marina': 2056,
  'nora': 2057,
  'meinias': 2058,
  'yu_lima_elka': 2060,
  'stenlina': 2061,
  'hisara': 2062,
  'bianca': 2063,
  'natasha': 2064,
  'festival_empress_shamshel': 2068,
  'kaguya': 2071,
  'shaty': 2072,
  'queen_of_pies_and_cookies_aphrodia': 2095,
  'magical_holy_night_festival_kaguya': 2096,
  'festive_natasha': 2070,
  'holy_night_succubus_yu_rima_elca': 2097,
  'dragon_crusher_medusa': 2099,
  'new_years_calligraphy_pastel': 2100,
  'overflowing_jubako_lynette': 2101,

  // 2026 Q2 New Characters
  'giselle': 2088,
  'inrine': 2050,
  'henrietti': 2102,
  'vanessa': 2103,
  'viatrice': 2104,
  'trish': 2105,
  'lycorys': 2106,
  'katisha': 2107,

  // SR Characters
  'gladys': 2005,
  'emelaria': 2006,
  'nerys_sr': 2008,
  'irina': 2014,
  'sobrina_sr': 2020,
  'messeria_sr': 2021,
  'paia': 2022,
  'azura': 2023,
  'zoe': 2024,
  'constantia': 2025,
  'farneria': 2026,
  'artemis': 2029,
  'athena_sr': 2030,
  'medusa': 2031,
  'venus': 2033,
  'liesel': 2035,
  'ishtovia_sr': 2036,
  'veronica': 2037,
  'celestia': 2038,
  'guinevia': 2039,
  'lucrezia': 2032,

  // R Characters
  'shamshel_r': 2001,
  'aysis': 2002,
  'roxanne': 2003,
  'luceria_r': 2004,
  'aphrodia_r': 2007,
  'drowatt': 2009,
  'aristera': 2010,
  'rosalyn': 2011,
  'estria': 2012,
  'celebria': 2013,
  'xevia': 2015,
  'shahar': 2016,
  'elythia': 2017,
  'nadine': 2018,
  'lorelia': 2019,
  'destra': 2027,
  'eskelda': 2028,

  // Base versions (if different from special versions)
  'estiriel_base': 2053,
  'hildis_base': 2054,
  'marina_base': 2056,

  // Missing characters from tier list
  'top_dancer_messeria': 2089,
  'ophelio': 2076,
  'lapis': 2084,
  'rosa': 2085,
  'chocolate_hildis': 2110,
  'lust': 2092,
  'setsuka': 2059,
  'lucie': 2073,
  'underboob_cheerleader_vanessa': 2128,
  'seductive_vampire_soltina': 2082,
  'noble_succubus_empress_shamshel': 2065,
  'chocolate_frey': 2109,
  'fruit_basket_bianca': 2090,
  'ruru': 2098,
  'elegant_portrait_aysis': 2066,
  'golem_summoner_nerys': 2042,
  'the_strongest_witch_shaharl': 2081,
  'mischievous_mermaid_princess_lorelia': 2067,
  'samurai_cow_girl_setsuka': 2094,
  'raguen': 2093,
  'warrior_of_love_and_chocolate_shaty': 2111,
  'gracie': 2086,
  'slightly_mischievous_devil_luca': 2083,
  'nue': 2075,
  'want_some_beer_stenrina': 2091,
  'messeria': 2044,
  'magdalena': 2108,
};

// Skill buff/debuff category assignments
// Format: { characterId: { skillKey: { type: 'buff'|'debuff', category: 'A'|'B'|'C'|'D', effects: [...] } } }
const SKILL_CATEGORIES = {
  festive_attire_estiriel: {
    skill2: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Physical DEF', value: '+15%+200' },
        { stat: 'Magic DEF', value: '+15%+200' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Action Speed', value: '+14%' },
        { stat: 'Accuracy', value: '+19' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'Debuff Resistance', value: '+60%' },
        { stat: 'Block', value: '+20' },
      ],
    },
  },
  liesel: {
    skill2: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Physical ATK', value: '+10%+120' },
        { stat: 'Magic ATK', value: '+10%+120' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Physical DEF', value: '+15%+200' },
        { stat: 'Magic DEF', value: '+15%+200' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'MP Regen', value: '+50' },
        { stat: 'Action Speed', value: '+15%+15' },
      ],
    },
  },
  frey: {
    skill2: { type: 'buff', category: 'D', effects: [{ stat: 'HP Regen', value: '+5%+150' }] },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'Physical Shield', value: '-50% (5 hits)' },
        { stat: 'Magic Shield', value: '-50% (5 hits)' },
      ],
    },
  },
  messeria: {
    skill2: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Physical DEF', value: '-21%-240' },
        { stat: 'Accuracy', value: '-24' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Physical ATK', value: '+15%+530' },
        { stat: 'Phys Crit DMG', value: '+540' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'Action Speed', value: '+20%+20' },
        { stat: 'Block', value: '+20' },
      ],
    },
  },
  teresia: {
    skill2: { type: 'debuff', category: 'B', effects: [{ stat: 'Magic DEF', value: '-18%-230' }] },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Magic ATK', value: '+18%+735' },
        { stat: 'Magic Crit', value: '+750' },
      ],
    },
    ultimate: { type: 'buff', category: 'A', effects: [{ stat: 'Mind Type ATK', value: '+20%' }] },
  },
  dark_knight: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Magic DEF', value: '-21%-240' },
        { stat: 'Magic Type DEF', value: '-10%' },
      ],
    },
    skill3: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Physical ATK', value: '-12%-230' },
        { stat: 'Magic ATK', value: '-12%-230' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Curse', value: 'no HP/MP regen' },
        { stat: 'Fear', value: 'MP -100/s, Block 0' },
      ],
    },
  },
  shaty: {
    skill2: {
      type: 'buff',
      category: 'C',
      effects: [{ stat: 'Wind Type ATK', value: '+20%+940' }],
    },
    skill3: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Wind Type DEF', value: '-21%-240' },
        { stat: 'Block', value: '-24' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'A',
      effects: [
        { stat: 'Wind Type ATK', value: '+50%' },
        { stat: 'Hit Damage', value: '+140% (6 hits)' },
      ],
    },
  },
  artia: {
    skill2: { type: 'buff', category: 'C', effects: [{ stat: 'Block', value: '+33' }] },
    skill3: { type: 'debuff', category: 'B', effects: [{ stat: 'Accuracy', value: '-33' }] },
    ultimate: {
      type: 'buff',
      category: 'A',
      effects: [
        { stat: 'Shield', value: '-60% (unlimited hits)' },
        { stat: 'Taunt', value: 'active' },
      ],
    },
  },
  gemini: {
    skill3: {
      type: 'debuff',
      category: 'B',
      effects: [{ stat: 'Physical DEF', value: '-18%-230' }],
    },
  },
  luca: {
    skill2: { type: 'buff', category: 'C', effects: [{ stat: 'Physical ATK', value: '+18%+735' }] },
    skill3: {
      type: 'debuff',
      category: 'B',
      effects: [{ stat: 'Physical Crit Rate', value: '-960' }],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Physical ATK', value: '-30%' },
        { stat: 'Accuracy', value: '-30' },
      ],
    },
  },
  festival_empress_shamshel: {
    skill2: { type: 'buff', category: 'C', effects: [{ stat: 'Magic ATK', value: '+18%+735' }] },
    skill3: { type: 'buff', category: 'C', effects: [{ stat: 'Action Speed', value: '+20%' }] },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Charm', value: '3 seconds' },
        { stat: 'Magic DEF', value: '-25%' },
      ],
    },
  },
  elegant_shamshel: {
    skill3: { type: 'debuff', category: 'B', effects: [{ stat: 'Charm', value: '3 seconds' }] },
  },
  nerys: {
    skill3: { type: 'debuff', category: 'B', effects: [{ stat: 'Magic DEF', value: '-21%-240' }] },
    ultimate: { type: 'debuff', category: 'A', effects: [{ stat: 'Stun', value: '3 seconds' }] },
  },
  soltina: {
    skill2: { type: 'debuff', category: 'B', effects: [{ stat: 'Paralysis', value: '6 seconds' }] },
    skill3: { type: 'buff', category: 'C', effects: [{ stat: 'Physical DEF', value: '+30%+490' }] },
  },
  estiriel: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Physical DEF', value: '-18%-230' },
        { stat: 'Magic DEF', value: '-18%-230' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'HP Regen', value: '+3%+50' },
        { stat: 'Block', value: '+19' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Block', value: '-20' },
        { stat: 'Action Speed', value: '-20%-20' },
      ],
    },
  },
  hildis: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Physical DEF', value: '-30%-110' },
        { stat: 'Burn', value: '12 seconds' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Physical ATK', value: '+15%+530' },
        { stat: 'Action Speed', value: '+14%' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Physical DEF', value: '-25%' },
        { stat: 'Block', value: '-25' },
      ],
    },
  },
  marina: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Action Speed', value: '-20%' },
        { stat: 'Block', value: '-28' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Physical Crit Rate', value: '+540' },
        { stat: 'Magic Crit', value: '+540' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'Action Speed', value: '+20%+20' },
        { stat: 'Shield', value: '-40% (unlimited, 6s)' },
      ],
    },
  },
  stenlina: {
    skill3: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Physical ATK', value: '-9%-220' },
        { stat: 'Magic ATK', value: '-9%-220' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Physical Crit', value: '-20%' },
        { stat: 'Magic Crit', value: '-20%' },
      ],
    },
  },
  hisara: {
    skill2: { type: 'debuff', category: 'C', effects: [{ stat: 'Action Speed', value: '-20%' }] },
    ultimate: {
      type: 'buff',
      category: 'A',
      effects: [{ stat: 'Action Speed', value: '+30%+30' }],
    },
  },
  bianca: {
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Physical ATK', value: '+20%+940' },
        { stat: 'Mind Type ATK', value: '+10%' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Silence', value: '6 seconds' },
        { stat: 'Curse', value: '3 seconds' },
      ],
    },
  },
  natasha: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Stun', value: '2.5 seconds' },
        { stat: 'Action Speed', value: '-17%' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Physical DEF', value: '+40%+600' },
        { stat: 'Taunt', value: 'active' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'A',
      effects: [{ stat: 'Physical Reflect Shield', value: '500%+5000/lv (unlimited hits)' }],
    },
  },
  venus: {
    skill2: {
      type: 'buff',
      category: 'C',
      effects: [{ stat: 'Physical Crit Rate', value: '+540' }],
    },
    skill3: { type: 'buff', category: 'C', effects: [{ stat: 'Physical DEF', value: '+20%+340' }] },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'Physical ATK', value: '+35%' },
        { stat: 'Magic ATK', value: '+35%' },
      ],
    },
  },
  artemis: {
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Physical ATK', value: '+18%+735' },
        { stat: 'Action Speed', value: '+14%+14' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [{ stat: 'Wind Type DEF', value: '-30%' }],
    },
  },
  queen_of_pies_and_cookies_aphrodia: {
    skill2: { type: 'debuff', category: 'B', effects: [{ stat: 'Poison', value: '8 seconds' }] },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [{ stat: 'Hit-Based Damage', value: '+18%+735' }],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Action Speed', value: '-30%-30' },
        { stat: 'Block', value: '-30' },
      ],
    },
  },
  luceria: {
    skill2: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Physical ATK', value: '+12%+325' },
        { stat: 'Physical DEF', value: '+15%+200' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'Physical ATK', value: 'UP' },
        { stat: 'Block', value: 'UP' },
      ],
    },
  },
  ishtovia: {
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Magic DEF', value: 'DOWN' },
        { stat: 'Silence', value: '10 seconds' },
      ],
    },
  },
  nora: {
    skill2: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Physical Crit', value: '-750' },
        { stat: 'Magic Crit', value: '-750' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Physical Crit Rate', value: '+750' },
        { stat: 'Shield', value: 'active' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Stun', value: '2 seconds' },
        { stat: 'Action Speed', value: '-20%-20' },
      ],
    },
  },
  sobrina: {
    skill2: { type: 'buff', category: 'C', effects: [{ stat: 'Block', value: '+19' }] },
    skill3: { type: 'buff', category: 'C', effects: [{ stat: 'Physical DEF', value: '+20%+340' }] },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [{ stat: 'Debuff Resistance', value: '+30%' }],
    },
  },
  meinias: {
    skill2: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Accuracy', value: '-24' },
        { stat: 'Block', value: '-24' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Physical ATK', value: '+18%+735' },
        { stat: 'Block', value: '+24' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'A',
      effects: [{ stat: 'Hit-Based Damage', value: '+200% (5 hits)' }],
    },
  },
  yu_lima_elka: {
    skill2: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Physical ATK', value: '-9%-220' },
        { stat: 'Magic ATK', value: '-9%-220' },
      ],
    },
    skill3: { type: 'debuff', category: 'B', effects: [{ stat: 'Charm', value: '3 seconds' }] },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Paralysis', value: '8 seconds' },
        { stat: 'Curse', value: '8 seconds (no HP/MP regen, Speed -50%)' },
      ],
    },
  },
  festive_natasha: {
    skill2: { type: 'debuff', category: 'B', effects: [{ stat: 'Poison', value: '8 seconds' }] },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Block', value: '+28' },
        { stat: 'Taunt', value: 'active' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Confusion', value: 'active' },
        { stat: 'Fear', value: '10 seconds' },
      ],
    },
  },
  holy_night_succubus_yu_rima_elca: {
    skill2: { type: 'debuff', category: 'C', effects: [{ stat: 'Burn', value: '12 seconds' }] },
    skill3: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Charm', value: '1 second' },
        { stat: 'Magic DEF', value: '-18%-230' },
      ],
    },
    ultimate: { type: 'debuff', category: 'A', effects: [{ stat: 'Dispel', value: '3 seconds' }] },
  },
  magical_holy_night_festival_kaguya: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Poison', value: 'active' },
        { stat: 'Block', value: 'DOWN' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Healing Shield', value: '-30%+90 (heals 40% absorbed, 9 hits)' },
        { stat: 'Block', value: '+28' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'Physical DEF', value: '+40%+500' },
        { stat: 'Magic DEF', value: '+40%+500' },
      ],
    },
  },
  dragon_crusher_medusa: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Petrify', value: '2 seconds' },
        { stat: 'Block', value: 'DOWN' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Hit-Based Magic Damage', value: '+60' },
        { stat: 'Magic ATK', value: 'UP' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Magic Damage Taken', value: '+20%' },
        { stat: 'Action Speed', value: '+20%+20 (self)' },
      ],
    },
  },
  new_years_calligraphy_pastel: {
    skill2: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Debuff Resistance', value: '+30%' },
        { stat: 'Accuracy', value: 'UP' },
      ],
    },
    skill3: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Physical ATK', value: 'DOWN' },
        { stat: 'Magic ATK', value: 'DOWN' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Dispel', value: '5 seconds' },
        { stat: 'Action Speed', value: '-20%' },
      ],
    },
  },
  overflowing_jubako_lynette: {
    skill2: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Physical ATK', value: 'DOWN' },
        { stat: 'Magic ATK', value: 'DOWN' },
      ],
    },
    skill3: {
      type: 'debuff',
      category: 'B',
      effects: [{ stat: 'Accuracy', value: 'DOWN' }],
    },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [{ stat: 'Block', value: '+20' }],
    },
  },
  // 2025 Summer Swimsuit Characters
  seductive_high_cut_swimsuit_nerys: {
    skill2: {
      type: 'debuff',
      category: 'C',
      effects: [{ stat: 'Stun', value: '1.2 seconds' }],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Action Speed', value: '+14%' },
        { stat: 'Magic Crit Rate', value: 'UP' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [{ stat: 'Magic ATK', value: 'UP' }],
    },
  },
  killer_bikini_theresia: {
    skill3: {
      type: 'debuff',
      category: 'B',
      effects: [{ stat: 'Physical DEF', value: 'DOWN' }],
    },
  },
  epic_fishing_meinias: {
    // No significant buffs/debuffs - primarily damage dealer
  },
  giselle: {
    skill2: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Physical DEF', value: '-21%-40' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Physical Crit Damage', value: '+50 (self)' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Block', value: '-25' },
        { stat: 'Physical ATK', value: '+30% (self)' },
      ],
    },
  },
  inrine: {
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Hit-Based Physical Damage', value: '+150%+500 (1 hit)' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Physical DEF', value: '-25%' },
        { stat: 'Block', value: '-25' },
      ],
    },
  },
  henrietti: {
    skill2: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Physical Healing Shield', value: '300 (restores 20%)' },
        { stat: 'Magic Healing Shield', value: '300 (restores 20%)' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'HP Regen', value: '+5%+150' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Stun', value: '2 seconds' },
        { stat: 'Blind', value: '6 seconds' },
      ],
    },
  },
  vanessa: {
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Accuracy', value: '+11' },
        { stat: 'Physical Crit Damage', value: '+40%' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Block', value: '-25' },
      ],
    },
  },
  viatrice: {
    skill2: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Burn', value: '-200/s (15s)' },
        { stat: 'Block', value: '-11 (8s)' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Hit-Based Shield', value: '100% (1 hit)' },
        { stat: 'Magic ATK', value: '+20%+40' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Burn', value: '-4000/s (15s)' },
        { stat: 'Fire Type Damage Taken', value: '+20%' },
      ],
    },
  },
  trish: {
    skill2: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Hit-Based Damage', value: '+35%+400 (3 hits)' },
        { stat: 'Accuracy', value: '+11' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'HP Regen', value: '+6%+200' },
        { stat: 'Healing Shield', value: '300' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'Physical ATK', value: '+35%' },
        { stat: 'Magic ATK', value: '+35%' },
      ],
    },
  },
  lycorys: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Action Speed', value: '-20%' },
        { stat: 'Accuracy', value: '-11' },
      ],
    },
    skill3: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Dispel', value: '1 second' },
        { stat: 'Deadly Poison', value: '-600/s (stackable)' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Paralysis', value: '6 seconds' },
        { stat: 'Deadly Poison', value: '-10000/s (8s)' },
      ],
    },
  },
  katisha: {
    skill3: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Block', value: '-9' },
        { stat: 'Accuracy', value: '-9' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Action Speed', value: '-30' },
        { stat: 'Silence', value: '5 seconds' },
      ],
    },
  },
  top_dancer_messeria: {
    skill2: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Block', value: '-13' },
        { stat: 'Accuracy', value: '-11' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Magic ATK', value: '+18%+35' },
        { stat: 'Block', value: '+9' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'Magic Crit Damage', value: 'UP' },
        { stat: 'Accuracy', value: 'UP' },
      ],
    },
  },
  ophelio: {
    skill2: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Freeze', value: '1.5 seconds' },
        { stat: 'Accuracy', value: '-11' },
      ],
    },
    skill3: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Stun', value: '1 second' },
        { stat: 'Magic DEF', value: '-23%-50' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Action Speed', value: 'DOWN' },
        { stat: 'Block', value: 'DOWN' },
      ],
    },
  },
  lapis: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Burn', value: '-150/s (10s)' },
        { stat: 'Freeze', value: '1.5 seconds' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Magic ATK', value: '+20%+40 (self)' },
        { stat: 'Action Speed', value: '+17% (self)' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Water Type DEF', value: 'DOWN' },
        { stat: 'Fire Type DEF', value: 'DOWN' },
      ],
    },
  },
  rosa: {
    skill2: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Physical ATK', value: '+20%+40 (self)' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Physical Crit Damage', value: '+40' },
        { stat: 'Accuracy', value: '+9' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Block', value: 'DOWN' },
      ],
    },
  },
  chocolate_hildis: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Magic DEF', value: '-23%-50' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Magic Crit Damage', value: '+50 (self)' },
        { stat: 'MP Regen', value: '+40' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Block', value: 'DOWN' },
        { stat: 'Magic DEF', value: 'DOWN' },
        { stat: 'Charm', value: '2 seconds' },
      ],
    },
  },
  lust: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Curse', value: '3 seconds' },
        { stat: 'Magic DEF', value: '-25%-60' },
      ],
    },
    skill3: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Action Speed', value: '-14%' },
        { stat: 'Block', value: '-9' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Confusion', value: '2 seconds' },
        { stat: 'Fear', value: '4 seconds' },
      ],
    },
  },
  setsuka: {
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Physical ATK', value: '+20%+40 (self)' },
        { stat: 'Physical Crit Damage', value: '+50 (self)' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'A',
      effects: [
        { stat: 'Fire Type ATK', value: 'UP (self)' },
      ],
    },
  },
  lucie: {
    skill2: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Physical DEF', value: '-23%-50' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Action Speed', value: '+17% (self)' },
        { stat: 'Block', value: '+11 (self)' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Action Speed', value: 'DOWN' },
        { stat: 'Dispel', value: '3 seconds' },
      ],
    },
  },
  underboob_cheerleader_vanessa: {
    skill2: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Magic ATK', value: '+25%+50' },
        { stat: 'Magic Crit Damage', value: '+80' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Hit-Based Shield', value: '30%+9 hits' },
        { stat: 'Block', value: '+13' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'Action Speed', value: 'UP' },
        { stat: 'Accuracy', value: 'UP' },
      ],
    },
  },
  seductive_vampire_soltina: {
    skill2: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'HP Absorb', value: '+19% (self)' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Accuracy', value: '+11 (self)' },
        { stat: 'Physical ATK', value: '+20%+40 (self)' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Cleanse', value: '3 seconds' },
        { stat: 'Action Speed', value: 'DOWN' },
      ],
    },
  },
  noble_succubus_empress_shamshel: {
    skill3: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Charm', value: '3 seconds' },
      ],
    },
  },
  chocolate_frey: {
    skill2: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Action Speed', value: '-17%' },
        { stat: 'Accuracy', value: '-11' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Magic Crit Damage', value: '+40' },
        { stat: 'Accuracy', value: '+9' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'Recovery Shield', value: 'Count-Based' },
        { stat: 'Block', value: 'UP' },
      ],
    },
  },
  fruit_basket_bianca: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Physical DEF', value: '-23%-50' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Debuff Resistance', value: '+50%' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Blind', value: '4 seconds' },
        { stat: 'Action Speed', value: 'DOWN' },
      ],
    },
  },
  ruru: {
    skill2: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Physical DEF', value: '-23%-50' },
        { stat: 'Action Speed', value: '-14%' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Physical Crit Damage', value: '+40' },
        { stat: 'Action Speed', value: '+14%' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Block', value: 'DOWN' },
        { stat: 'Physical ATK', value: 'UP (self)' },
      ],
    },
  },
  elegant_portrait_aysis: {
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Physical DEF', value: '+20%+140 (self)' },
        { stat: 'Magic DEF', value: '+20%+140 (self)' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Physical ATK', value: 'DOWN' },
      ],
    },
  },
  golem_summoner_nerys: {
    skill2: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Action Speed', value: '-20%' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Physical Healing Shield', value: '350 (restores 25%)' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Physical ATK', value: 'DOWN' },
        { stat: 'Magic ATK', value: 'DOWN' },
      ],
    },
  },
  the_strongest_witch_shaharl: {
    skill2: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Curse', value: '3 seconds' },
        { stat: 'Magic DEF', value: '-23%-50' },
      ],
    },
    skill3: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Fire Type ATK', value: '-20%' },
        { stat: 'Fire Type DEF', value: '-20%' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Physical Crit Damage', value: 'DOWN' },
        { stat: 'Magic Crit Damage', value: 'DOWN' },
      ],
    },
  },
  mischievous_mermaid_princess_lorelia: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Stun', value: '2.5 seconds' },
        { stat: 'Block', value: '-13' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Stun', value: '3 seconds' },
        { stat: 'Action Speed', value: 'DOWN' },
      ],
    },
  },
  samurai_cow_girl_setsuka: {
    skill2: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Hit-Based Physical Damage', value: '+50%+550 (4 hits, self)' },
      ],
    },
    skill3: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Stun', value: '2 seconds' },
        { stat: 'Block', value: '-13' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Physical DEF', value: 'DOWN' },
      ],
    },
  },
  raguen: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Cleanse', value: '3 seconds' },
        { stat: 'Block', value: '-13' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'HP Regen', value: '+5%+150 (self)' },
        { stat: 'Hit-Based Shield', value: '35%+10 hits (self)' },
        { stat: 'Debuff Resistance', value: '+70% (self)' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Physical ATK', value: 'DOWN' },
        { stat: 'Magic ATK', value: 'DOWN' },
      ],
    },
  },
  warrior_of_love_and_chocolate_shaty: {
    skill2: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Mind Type ATK', value: '+15% (self)' },
      ],
    },
    skill3: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Block', value: '-9' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'A',
      effects: [
        { stat: 'Hit-Based Damage', value: 'UP (self)' },
        { stat: 'Mind Type ATK', value: 'UP (self)' },
      ],
    },
  },
  gracie: {
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Debuff Resistance', value: '+1% (self)' },
        { stat: 'Hit-Based Physical Damage', value: '+100%+300 (1 hit, self)' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Physical DEF', value: 'DOWN' },
      ],
    },
  },
  slightly_mischievous_devil_luca: {
    skill3: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Charm', value: '1 second' },
        { stat: 'Physical Crit Damage', value: '-11%-30' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Cleanse', value: '2 seconds' },
      ],
    },
  },
  nue: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Paralysis', value: '4 seconds' },
        { stat: 'Physical DEF', value: '-18%-30' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Block', value: '+9 (self)' },
        { stat: 'MP Regen', value: '+40 (self)' },
      ],
    },
  },
  want_some_beer_stenrina: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Stun', value: '1 second' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Block', value: '+9' },
        { stat: 'Accuracy', value: '+9' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'Physical ATK', value: 'UP' },
        { stat: 'Magic ATK', value: 'UP' },
      ],
    },
  },
  magdalena: {
    skill2: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Physical ATK', value: '-11%-25' },
        { stat: 'Magic ATK', value: '-11%-25' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Hit-Based Healing Shield', value: '480%+40 (restores 40%, 4 hits)' },
        { stat: 'Block', value: '+18' },
        { stat: 'Magic ATK', value: '+15%+480' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Dispel', value: '3 seconds' },
        { stat: 'Magic DEF', value: 'DOWN' },
        { stat: 'HP Regen', value: 'UP (self)' },
      ],
    },
  },
};

function buildTeamBuilderCharacters() {
  const characters = {};

  for (const [charId, slug] of Object.entries(TEAM_BUILDER_SLUG_MAP)) {
    const charInfo = BUSTY_BURST_CHARACTER_INFO[slug];
    const charSkills = BUSTY_BURST_SKILLS_MAP[slug];

    if (!charInfo || !charInfo.name || !charInfo.rarity || !charInfo.element || !charInfo.role) continue;

    const skillCategories = SKILL_CATEGORIES[charId] || {};
    const buffs = [];
    const debuffs = [];

    ['skill2', 'skill3', 'ultimate'].forEach(skillKey => {
      const categoryInfo = skillCategories[skillKey];
      if (categoryInfo) {
        let skillName = '';
        let skillDesc = '';
        let skillTarget = '';

        if (charSkills) {
          if (skillKey === 'skill2' || skillKey === 'skill3') {
            const slot = skillKey === 'skill2' ? 2 : 3;
            const s = charSkills.skills?.find(sk => sk.slot === slot);
            if (s) {
              skillName = s.name;
              skillDesc = s.description;
              skillTarget = s.target;
            }
          } else if (skillKey === 'ultimate' && charSkills.ultimate?.[0]) {
            skillName = charSkills.ultimate[0].name;
            skillDesc = charSkills.ultimate[0].description;
            skillTarget = 'see ranks';
          }
        }

        const skillEntry = {
          skillType: skillKey === 'skill2' ? 'Skill 2' : skillKey === 'skill3' ? 'Skill 3' : 'Ultimate',
          skillName,
          description: skillDesc,
          category: categoryInfo.category,
          effects: categoryInfo.effects,
          target: skillTarget,
          duration: skillDesc?.match(/for (\d+ seconds)/)?.[1] || 'varies',
        };

        if (categoryInfo.type === 'buff') {
          buffs.push(skillEntry);
        } else {
          debuffs.push(skillEntry);
        }
      }
    });

    let passive1 = 'None';
    let passive2 = 'None';
    if (charSkills?.passives) {
      passive1 = charSkills.passives[0]?.effect || 'None';
      passive2 = charSkills.passives[1]?.effect || 'None';
    }

    const cid = CHARACTER_ID_MAP[charId] || charInfo.characterId;
    const paladin = PALADINS_BY_ID[cid];

    characters[charId] = {
      id: charId,
      characterId: cid,
      name: charInfo.name || charId,
      image: `${cid}.png`,
      rarity: paladin?.rarity || charInfo.rarity,
      element: paladin?.element || charInfo.element,
      role: paladin?.role || charInfo.role,
      buffs,
      debuffs,
      passives: [
        { name: 'Passive 1', effects: passive1 },
        { name: 'Passive 2', effects: passive2 },
      ],
    };
  }

  return characters;
}

// Export the built characters
export const TEAM_BUILDER_CHARACTERS = buildTeamBuilderCharacters();

// Helper functions
export const getCharacterById = id => TEAM_BUILDER_CHARACTERS[id] || null;
export const getAllCharacters = () => Object.values(TEAM_BUILDER_CHARACTERS);
export const getCharactersByRole = role => getAllCharacters().filter(c => c.role === role);
export const getCharactersByElement = element =>
  getAllCharacters().filter(c => c.element === element);
export const getCharactersByRarity = rarity => getAllCharacters().filter(c => c.rarity === rarity);
export const getAllCharacterIds = () => Object.keys(TEAM_BUILDER_CHARACTERS);
