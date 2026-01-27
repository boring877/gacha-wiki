// Busty Burst Support Data
// Auto-generated from WIKI_SUPPORT_DATA_v6.txt
// Contains support stats for all 76 characters

// Element mapping (Japanese to English)
export const ELEMENT_MAP = {
  '魔': 'Dark',
  '想': 'Mind',
  '火': 'Fire',
  '風': 'Wind',
  '水': 'Water',
  '聖': 'Holy'
};

// Weapon mapping (Japanese to English)
export const WEAPON_MAP = {
  '射': 'Shot',
  '斬': 'Slash',
  '打': 'Strike',
  '投': 'Throw',
  '突': 'Pierce'
};

// Weapon inspiration effects by weapon type
export const WEAPON_INSPIRATION_EFFECTS = {
  'Shot': { stat: 'Accuracy', values: [3, 6, 10] },
  'Slash': { stat: 'Accuracy', values: [3, 6, 10] },
  'Strike': { stat: 'Block', values: [3, 6, 10] },
  'Throw': { stat: 'P.ATK/M.ATK', values: ['2%', '4%', '6%'] },
  'Pierce': { stat: 'Action Speed', values: ['2%', '4%', '6%'] }
};

// Helper to get character ID - the ID field is now used directly for images
// via the PaladinImage component's characterId prop
export function getCharacterImageId(id) {
  return id;
}

// All support data - filtered to only include characters in character-stats-full.js
export const BUSTY_BURST_SUPPORT_DATA = [
  // ============ SSR Characters ============
  {
    id: 2040,
    name: '【Elegant Portrait】Shamshel',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'MATK': 80 },
      lb1: { 'MATK': 120, 'Accuracy': 7 },
      lb2: { 'MATK': 160, 'Accuracy': 8 },
      lb3: { 'MATK': 200, 'Accuracy': 9 },
      lb4: { 'MATK': 200, 'Accuracy': 10 },
      lb5: { 'MATK': 200, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2041,
    name: '【Magical Princess】Luceria',
    rarity: 'SSR',
    element: 'Holy',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'MDEF': 30 },
      lb1: { 'MDEF': 60, 'DEF': 30 },
      lb2: { 'MDEF': 90, 'DEF': 60 },
      lb3: { 'MDEF': 120, 'DEF': 90 },
      lb4: { 'MDEF': 120, 'DEF': 120 },
      lb5: { 'MDEF': 120, 'DEF': 120 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2042,
    name: '【Messenger of Stone Soldiers】Nerys',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'MDEF': 30 },
      lb1: { 'MDEF': 60, 'DEF': 30 },
      lb2: { 'MDEF': 90, 'DEF': 60 },
      lb3: { 'MDEF': 120, 'DEF': 90 },
      lb4: { 'MDEF': 120, 'DEF': 120 },
      lb5: { 'MDEF': 120, 'DEF': 120 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2043,
    name: '【Swift-Chant Sorceress】Sobrina',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'MATK': 80 },
      lb1: { 'MATK': 120, 'M.Crit Rate': 45 },
      lb2: { 'MATK': 160, 'M.Crit Rate': 60 },
      lb3: { 'MATK': 200, 'M.Crit Rate': 75 },
      lb4: { 'MATK': 200, 'M.Crit Rate': 90 },
      lb5: { 'MATK': 200, 'M.Crit Rate': 90 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2044,
    name: '【Trance Dancer】Messeria',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'Block': 5 },
      lb1: { 'Block': 6, 'Accuracy': 7 },
      lb2: { 'Block': 7, 'Accuracy': 8 },
      lb3: { 'Block': 8, 'Accuracy': 9 },
      lb4: { 'Block': 8, 'Accuracy': 10 },
      lb5: { 'Block': 8, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2045,
    name: '【Pious Healer】Ishtovia',
    rarity: 'SSR',
    element: 'Holy',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'MATK': 80 },
      lb2: { 'HP': 1500, 'MATK': 120 },
      lb3: { 'HP': 2000, 'MATK': 160 },
      lb4: { 'HP': 2000, 'MATK': 200 },
      lb5: { 'HP': 2000, 'MATK': 200 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2046,
    name: 'Teresia',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'MATK': 80 },
      lb1: { 'MATK': 120, 'M.Crit Rate': 45 },
      lb2: { 'MATK': 160, 'M.Crit Rate': 60 },
      lb3: { 'MATK': 200, 'M.Crit Rate': 75 },
      lb4: { 'MATK': 200, 'M.Crit Rate': 90 },
      lb5: { 'MATK': 200, 'M.Crit Rate': 90 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2047,
    name: 'Soltina',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'Block': 5 },
      lb1: { 'Block': 6, 'Crit Rate': 45 },
      lb2: { 'Block': 7, 'Crit Rate': 60 },
      lb3: { 'Block': 8, 'Crit Rate': 75 },
      lb4: { 'Block': 8, 'Crit Rate': 90 },
      lb5: { 'Block': 8, 'Crit Rate': 90 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2048,
    name: 'Artia',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'DEF': 30 },
      lb2: { 'HP': 1500, 'DEF': 60 },
      lb3: { 'HP': 2000, 'DEF': 90 },
      lb4: { 'HP': 2000, 'DEF': 120 },
      lb5: { 'HP': 2000, 'DEF': 120 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2049,
    name: 'The Dark Knight',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'MATK': 80 },
      lb1: { 'MATK': 120, 'Accuracy': 7 },
      lb2: { 'MATK': 160, 'Accuracy': 8 },
      lb3: { 'MATK': 200, 'Accuracy': 9 },
      lb4: { 'MATK': 200, 'Accuracy': 10 },
      lb5: { 'MATK': 200, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2051,
    name: 'Frey',
    rarity: 'SSR',
    element: 'Holy',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'Block': 5 },
      lb2: { 'HP': 1500, 'Block': 6 },
      lb3: { 'HP': 2000, 'Block': 7 },
      lb4: { 'HP': 2000, 'Block': 8 },
      lb5: { 'HP': 2000, 'Block': 8 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2052,
    name: 'Gemini',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'Crit Rate': 45 },
      lb1: { 'Crit Rate': 60, 'Accuracy': 7 },
      lb2: { 'Crit Rate': 75, 'Accuracy': 8 },
      lb3: { 'Crit Rate': 90, 'Accuracy': 9 },
      lb4: { 'Crit Rate': 90, 'Accuracy': 10 },
      lb5: { 'Crit Rate': 90, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2053,
    name: 'Estiriel',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'MDEF': 30 },
      lb1: { 'MDEF': 60, 'DEF': 30 },
      lb2: { 'MDEF': 90, 'DEF': 60 },
      lb3: { 'MDEF': 120, 'DEF': 90 },
      lb4: { 'MDEF': 120, 'DEF': 120 },
      lb5: { 'MDEF': 120, 'DEF': 120 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2054,
    name: 'Hildis',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'Crit Rate': 45 },
      lb1: { 'Crit Rate': 60, 'Accuracy': 7 },
      lb2: { 'Crit Rate': 75, 'Accuracy': 8 },
      lb3: { 'Crit Rate': 90, 'Accuracy': 9 },
      lb4: { 'Crit Rate': 90, 'Accuracy': 10 },
      lb5: { 'Crit Rate': 90, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2055,
    name: 'Luca',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'Crit Rate': 45 },
      lb1: { 'Crit Rate': 60, 'Block': 5 },
      lb2: { 'Crit Rate': 75, 'Block': 6 },
      lb3: { 'Crit Rate': 90, 'Block': 7 },
      lb4: { 'Crit Rate': 90, 'Block': 8 },
      lb5: { 'Crit Rate': 90, 'Block': 8 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2056,
    name: 'Marina',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'MATK': 80 },
      lb1: { 'MATK': 120, 'MDEF': 30 },
      lb2: { 'MATK': 160, 'MDEF': 60 },
      lb3: { 'MATK': 200, 'MDEF': 90 },
      lb4: { 'MATK': 200, 'MDEF': 120 },
      lb5: { 'MATK': 200, 'MDEF': 120 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2057,
    name: 'Nora',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'Block': 5 },
      lb1: { 'Block': 6, 'DEF': 30 },
      lb2: { 'Block': 7, 'DEF': 60 },
      lb3: { 'Block': 8, 'DEF': 90 },
      lb4: { 'Block': 8, 'DEF': 120 },
      lb5: { 'Block': 8, 'DEF': 120 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2058,
    name: 'Meinias',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'Block': 5 },
      lb2: { 'ATK': 160, 'Block': 6 },
      lb3: { 'ATK': 200, 'Block': 7 },
      lb4: { 'ATK': 200, 'Block': 8 },
      lb5: { 'ATK': 200, 'Block': 8 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2060,
    name: 'Yu Lima Elka',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'Accuracy': 7 },
      lb2: { 'HP': 1500, 'Accuracy': 8 },
      lb3: { 'HP': 2000, 'Accuracy': 9 },
      lb4: { 'HP': 2000, 'Accuracy': 10 },
      lb5: { 'HP': 2000, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2061,
    name: 'Stenlina',
    rarity: 'SSR',
    element: 'Holy',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'MATK': 80 },
      lb1: { 'MATK': 120, 'M.Crit Rate': 45 },
      lb2: { 'MATK': 160, 'M.Crit Rate': 60 },
      lb3: { 'MATK': 200, 'M.Crit Rate': 75 },
      lb4: { 'MATK': 200, 'M.Crit Rate': 90 },
      lb5: { 'MATK': 200, 'M.Crit Rate': 90 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2062,
    name: 'Hisara',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'Accuracy': 7 },
      lb2: { 'ATK': 160, 'Accuracy': 8 },
      lb3: { 'ATK': 200, 'Accuracy': 9 },
      lb4: { 'ATK': 200, 'Accuracy': 10 },
      lb5: { 'ATK': 200, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2063,
    name: 'Bianca',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'Block': 5 },
      lb2: { 'ATK': 160, 'Block': 6 },
      lb3: { 'ATK': 200, 'Block': 7 },
      lb4: { 'ATK': 200, 'Block': 8 },
      lb5: { 'ATK': 200, 'Block': 8 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2064,
    name: 'Natasha',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'DEF': 30 },
      lb1: { 'DEF': 60, 'Block': 5 },
      lb2: { 'DEF': 90, 'Block': 6 },
      lb3: { 'DEF': 120, 'Block': 7 },
      lb4: { 'DEF': 120, 'Block': 8 },
      lb5: { 'DEF': 120, 'Block': 8 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2065,
    name: '【Graceful Portrait】Shamshel',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'MATK': 80 },
      lb1: { 'MATK': 120, 'M.Crit Rate': 45 },
      lb2: { 'MATK': 160, 'M.Crit Rate': 60 },
      lb3: { 'MATK': 200, 'M.Crit Rate': 75 },
      lb4: { 'MATK': 200, 'M.Crit Rate': 90 },
      lb5: { 'MATK': 200, 'M.Crit Rate': 90 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2066,
    name: '【Graceful Portrait】Aysis',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'Block': 5 },
      lb2: { 'HP': 1500, 'Block': 6 },
      lb3: { 'HP': 2000, 'Block': 7 },
      lb4: { 'HP': 2000, 'Block': 8 },
      lb5: { 'HP': 2000, 'Block': 8 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2067,
    name: '【Playful Mermaid Princess】Lorelia',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'Crit Rate': 45 },
      lb2: { 'ATK': 160, 'Crit Rate': 60 },
      lb3: { 'ATK': 200, 'Crit Rate': 75 },
      lb4: { 'ATK': 200, 'Crit Rate': 90 },
      lb5: { 'ATK': 200, 'Crit Rate': 90 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2068,
    name: '【Festival Empress】Shamshel',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'M.Crit Rate': 45 },
      lb1: { 'M.Crit Rate': 60, 'Accuracy': 7 },
      lb2: { 'M.Crit Rate': 75, 'Accuracy': 8 },
      lb3: { 'M.Crit Rate': 90, 'Accuracy': 9 },
      lb4: { 'M.Crit Rate': 90, 'Accuracy': 10 },
      lb5: { 'M.Crit Rate': 90, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2069,
    name: '【Festive Attire】Estiriel',
    rarity: 'SSR',
    element: 'Holy',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'Block': 5 },
      lb1: { 'Block': 5 },
      lb2: { 'Block': 6 },
      lb3: { 'Block': 7 },
      lb4: { 'Block': 8 },
      lb5: { 'Block': 8 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2071,
    name: 'Kaguya',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'MATK': 80 },
      lb1: { 'MATK': 120, 'Accuracy': 7 },
      lb2: { 'MATK': 160, 'Accuracy': 8 },
      lb3: { 'MATK': 200, 'Accuracy': 9 },
      lb4: { 'MATK': 200, 'Accuracy': 10 },
      lb5: { 'MATK': 200, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2072,
    name: 'Shaty',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'Accuracy': 7 },
      lb1: { 'Accuracy': 8, 'ATK': 80 },
      lb2: { 'Accuracy': 9, 'ATK': 120 },
      lb3: { 'Accuracy': 10, 'ATK': 160 },
      lb4: { 'Accuracy': 10, 'ATK': 200 },
      lb5: { 'Accuracy': 10, 'ATK': 200 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2095,
    name: '【Queen of Pies and Cookies】Aphrodia',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'Crit Rate': 45 },
      lb2: { 'ATK': 160, 'Crit Rate': 60 },
      lb3: { 'ATK': 200, 'Crit Rate': 75 },
      lb4: { 'ATK': 200, 'Crit Rate': 90 },
      lb5: { 'ATK': 200, 'Crit Rate': 90 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2096,
    name: '【Magical Holy Night Festival】Kaguya',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'Block': 5 },
      lb2: { 'HP': 1500, 'Block': 6 },
      lb3: { 'HP': 2000, 'Block': 7 },
      lb4: { 'HP': 2000, 'Block': 8 },
      lb5: { 'HP': 2000, 'Block': 8 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2099,
    name: '【Dragon Crusher】Medusa',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'MATK': 80 },
      lb1: { 'MATK': 120, 'M.Crit Rate': 45 },
      lb2: { 'MATK': 160, 'M.Crit Rate': 60 },
      lb3: { 'MATK': 200, 'M.Crit Rate': 75 },
      lb4: { 'MATK': 200, 'M.Crit Rate': 90 },
      lb5: { 'MATK': 200, 'M.Crit Rate': 90 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2080,
    name: 'Pastel',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'Accuracy': 7 },
      lb2: { 'ATK': 160, 'Accuracy': 8 },
      lb3: { 'ATK': 200, 'Accuracy': 9 },
      lb4: { 'ATK': 200, 'Accuracy': 10 },
      lb5: { 'ATK': 200, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2100,
    name: "【New Year's Calligraphy】Pastel",
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'Block': 5 },
      lb2: { 'HP': 1500, 'Block': 6 },
      lb3: { 'HP': 2000, 'Block': 7 },
      lb4: { 'HP': 2000, 'Block': 8 },
      lb5: { 'HP': 2000, 'Block': 8 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2076,
    name: 'Ophelio',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'MATK': 80 },
      lb1: { 'MATK': 120, 'M.Crit Rate': 45 },
      lb2: { 'MATK': 160, 'M.Crit Rate': 60 },
      lb3: { 'MATK': 200, 'M.Crit Rate': 75 },
      lb4: { 'MATK': 200, 'M.Crit Rate': 90 },
      lb5: { 'MATK': 200, 'M.Crit Rate': 90 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  // ============ SR Characters ============
  {
    id: 2005,
    name: 'Gladys',
    rarity: 'SR',
    element: 'Fire',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'ATK': 50 },
      lb1: { 'ATK': 80, 'Block': 3 },
      lb2: { 'ATK': 110, 'Block': 4 },
      lb3: { 'ATK': 140, 'Block': 5 },
      lb4: { 'ATK': 140, 'Block': 5 },
      lb5: { 'ATK': 140, 'Block': 5 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2006,
    name: 'Emelaria',
    rarity: 'SR',
    element: 'Dark',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'HP': 300 },
      lb1: { 'HP': 700, 'Accuracy': 5 },
      lb2: { 'HP': 1100, 'Accuracy': 6 },
      lb3: { 'HP': 1500, 'Accuracy': 7 },
      lb4: { 'HP': 1500, 'Accuracy': 7 },
      lb5: { 'HP': 1500, 'Accuracy': 7 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2008,
    name: 'Nerys',
    rarity: 'SR',
    element: 'Wind',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'M.Crit Rate': 30 },
      lb1: { 'M.Crit Rate': 40, 'HP': 300 },
      lb2: { 'M.Crit Rate': 50, 'HP': 700 },
      lb3: { 'M.Crit Rate': 60, 'HP': 1100 },
      lb4: { 'M.Crit Rate': 60, 'HP': 1100 },
      lb5: { 'M.Crit Rate': 60, 'HP': 1100 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2014,
    name: 'Irina',
    rarity: 'SR',
    element: 'Holy',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'MDEF': 20 },
      lb1: { 'MDEF': 40, 'Accuracy': 5 },
      lb2: { 'MDEF': 60, 'Accuracy': 6 },
      lb3: { 'MDEF': 80, 'Accuracy': 7 },
      lb4: { 'MDEF': 80, 'Accuracy': 7 },
      lb5: { 'MDEF': 80, 'Accuracy': 7 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2020,
    name: 'Sobrina',
    rarity: 'SR',
    element: 'Mind',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'HP': 300 },
      lb1: { 'HP': 700, 'MATK': 50 },
      lb2: { 'HP': 1100, 'MATK': 80 },
      lb3: { 'HP': 1500, 'MATK': 110 },
      lb4: { 'HP': 1500, 'MATK': 110 },
      lb5: { 'HP': 1500, 'MATK': 110 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2021,
    name: 'Messeria',
    rarity: 'SR',
    element: 'Wind',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'Block': 3 },
      lb1: { 'Block': 4, 'M.Crit Rate': 30 },
      lb2: { 'Block': 5, 'M.Crit Rate': 40 },
      lb3: { 'Block': 6, 'M.Crit Rate': 50 },
      lb4: { 'Block': 6, 'M.Crit Rate': 50 },
      lb5: { 'Block': 6, 'M.Crit Rate': 50 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2022,
    name: 'Paia',
    rarity: 'SR',
    element: 'Fire',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'HP': 300 },
      lb1: { 'HP': 700, 'ATK': 50 },
      lb2: { 'HP': 1100, 'ATK': 80 },
      lb3: { 'HP': 1500, 'ATK': 110 },
      lb4: { 'HP': 1500, 'ATK': 110 },
      lb5: { 'HP': 1500, 'ATK': 110 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2023,
    name: 'Azura',
    rarity: 'SR',
    element: 'Fire',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'Block': 3 },
      lb1: { 'Block': 4, 'Crit Rate': 30 },
      lb2: { 'Block': 5, 'Crit Rate': 40 },
      lb3: { 'Block': 6, 'Crit Rate': 50 },
      lb4: { 'Block': 6, 'Crit Rate': 50 },
      lb5: { 'Block': 6, 'Crit Rate': 50 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2024,
    name: 'Zoe',
    rarity: 'SR',
    element: 'Dark',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'HP': 300 },
      lb1: { 'HP': 700, 'MATK': 50 },
      lb2: { 'HP': 1100, 'MATK': 80 },
      lb3: { 'HP': 1500, 'MATK': 110 },
      lb4: { 'HP': 1500, 'MATK': 110 },
      lb5: { 'HP': 1500, 'MATK': 110 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2025,
    name: 'Constantia',
    rarity: 'SR',
    element: 'Water',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'DEF': 20 },
      lb1: { 'DEF': 40, 'Crit Rate': 30 },
      lb2: { 'DEF': 60, 'Crit Rate': 40 },
      lb3: { 'DEF': 80, 'Crit Rate': 50 },
      lb4: { 'DEF': 80, 'Crit Rate': 50 },
      lb5: { 'DEF': 80, 'Crit Rate': 50 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2026,
    name: 'Farneria',
    rarity: 'SR',
    element: 'Water',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'MATK': 50 },
      lb1: { 'MATK': 80, 'MDEF': 20 },
      lb2: { 'MATK': 110, 'MDEF': 40 },
      lb3: { 'MATK': 140, 'MDEF': 60 },
      lb4: { 'MATK': 140, 'MDEF': 60 },
      lb5: { 'MATK': 140, 'MDEF': 60 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2029,
    name: 'Artemis',
    rarity: 'SR',
    element: 'Wind',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'Crit Rate': 30 },
      lb1: { 'Crit Rate': 40, 'Block': 3 },
      lb2: { 'Crit Rate': 50, 'Block': 4 },
      lb3: { 'Crit Rate': 60, 'Block': 5 },
      lb4: { 'Crit Rate': 60, 'Block': 5 },
      lb5: { 'Crit Rate': 60, 'Block': 5 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2030,
    name: 'Athena',
    rarity: 'SR',
    element: 'Holy',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'DEF': 20 },
      lb1: { 'DEF': 40, 'ATK': 50 },
      lb2: { 'DEF': 60, 'ATK': 80 },
      lb3: { 'DEF': 80, 'ATK': 110 },
      lb4: { 'DEF': 80, 'ATK': 110 },
      lb5: { 'DEF': 80, 'ATK': 110 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2031,
    name: 'Medusa',
    rarity: 'SR',
    element: 'Dark',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'M.Crit Rate': 30 },
      lb1: { 'M.Crit Rate': 40, 'Block': 3 },
      lb2: { 'M.Crit Rate': 50, 'Block': 4 },
      lb3: { 'M.Crit Rate': 60, 'Block': 5 },
      lb4: { 'M.Crit Rate': 60, 'Block': 5 },
      lb5: { 'M.Crit Rate': 60, 'Block': 5 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2033,
    name: 'Venus',
    rarity: 'SR',
    element: 'Holy',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'HP': 300 },
      lb1: { 'HP': 700, 'Accuracy': 5 },
      lb2: { 'HP': 1100, 'Accuracy': 6 },
      lb3: { 'HP': 1500, 'Accuracy': 7 },
      lb4: { 'HP': 1500, 'Accuracy': 7 },
      lb5: { 'HP': 1500, 'Accuracy': 7 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2035,
    name: 'Liesel',
    rarity: 'SR',
    element: 'Mind',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'MATK': 50 },
      lb1: { 'MATK': 80, 'HP': 300 },
      lb2: { 'MATK': 110, 'HP': 700 },
      lb3: { 'MATK': 140, 'HP': 1100 },
      lb4: { 'MATK': 140, 'HP': 1100 },
      lb5: { 'MATK': 140, 'HP': 1100 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2036,
    name: 'Ishtovia',
    rarity: 'SR',
    element: 'Holy',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'Block': 3 },
      lb1: { 'Block': 4, 'Crit Rate': 30 },
      lb2: { 'Block': 5, 'Crit Rate': 40 },
      lb3: { 'Block': 6, 'Crit Rate': 50 },
      lb4: { 'Block': 6, 'Crit Rate': 50 },
      lb5: { 'Block': 6, 'Crit Rate': 50 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2037,
    name: 'Veronica',
    rarity: 'SR',
    element: 'Water',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'HP': 300 },
      lb1: { 'HP': 700, 'M.Crit Rate': 30 },
      lb2: { 'HP': 1100, 'M.Crit Rate': 40 },
      lb3: { 'HP': 1500, 'M.Crit Rate': 50 },
      lb4: { 'HP': 1500, 'M.Crit Rate': 50 },
      lb5: { 'HP': 1500, 'M.Crit Rate': 50 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2038,
    name: 'Celestia',
    rarity: 'SR',
    element: 'Wind',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'ATK': 50 },
      lb1: { 'ATK': 80, 'Block': 3 },
      lb2: { 'ATK': 110, 'Block': 4 },
      lb3: { 'ATK': 140, 'Block': 5 },
      lb4: { 'ATK': 140, 'Block': 5 },
      lb5: { 'ATK': 140, 'Block': 5 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2039,
    name: 'Guinevia',
    rarity: 'SR',
    element: 'Dark',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'ATK': 50 },
      lb1: { 'ATK': 80, 'Block': 3 },
      lb2: { 'ATK': 110, 'Block': 4 },
      lb3: { 'ATK': 140, 'Block': 5 },
      lb4: { 'ATK': 140, 'Block': 5 },
      lb5: { 'ATK': 140, 'Block': 5 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2070,
    name: '【Festive Costume】Natasha',
    rarity: 'SR',
    element: 'Holy',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'DEF': 20 },
      lb1: { 'DEF': 40, 'Block': 3 },
      lb2: { 'DEF': 60, 'Block': 4 },
      lb3: { 'DEF': 80, 'Block': 5 },
      lb4: { 'DEF': 80, 'Block': 6 },
      lb5: { 'DEF': 80, 'Block': 6 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2097,
    name: '【Holy Night Succubus】Yu Rima Elca',
    rarity: 'SR',
    element: 'Dark',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'MATK': 50 },
      lb1: { 'MATK': 80, 'HP': 300 },
      lb2: { 'MATK': 110, 'HP': 700 },
      lb3: { 'MATK': 140, 'HP': 1100 },
      lb4: { 'MATK': 140, 'HP': 1100 },
      lb5: { 'MATK': 140, 'HP': 1100 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2101,
    name: '【Overflowing Jubako】Lynette',
    rarity: 'SR',
    element: 'Mind',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'HP': 300 },
      lb1: { 'HP': 700, 'Block': 3 },
      lb2: { 'HP': 1100, 'Block': 4 },
      lb3: { 'HP': 1500, 'Block': 5 },
      lb4: { 'HP': 1500, 'Block': 5 },
      lb5: { 'HP': 1500, 'Block': 5 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  // ============ R Characters ============
  {
    id: 2001,
    name: 'Shamshel',
    rarity: 'R',
    element: 'Dark',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'Accuracy': 3 },
      lb1: { 'Accuracy': 4, 'Block': 1 },
      lb2: { 'Accuracy': 5, 'Block': 2 },
      lb3: { 'Accuracy': 6, 'Block': 3 },
      lb4: { 'Accuracy': 6, 'Block': 3 },
      lb5: { 'Accuracy': 6, 'Block': 3 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2002,
    name: 'Aysis',
    rarity: 'R',
    element: 'Mind',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'Block': 1 },
      lb1: { 'Block': 2, 'Crit Rate': 15 },
      lb2: { 'Block': 3, 'Crit Rate': 20 },
      lb3: { 'Block': 4, 'Crit Rate': 25 },
      lb4: { 'Block': 4, 'Crit Rate': 25 },
      lb5: { 'Block': 4, 'Crit Rate': 25 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2003,
    name: 'Roxanne',
    rarity: 'R',
    element: 'Mind',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'HP': 200 },
      lb1: { 'HP': 400, 'Crit Rate': 15 },
      lb2: { 'HP': 600, 'Crit Rate': 20 },
      lb3: { 'HP': 800, 'Crit Rate': 25 },
      lb4: { 'HP': 800, 'Crit Rate': 25 },
      lb5: { 'HP': 800, 'Crit Rate': 25 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2004,
    name: 'Luceria',
    rarity: 'R',
    element: 'Mind',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'Block': 1 },
      lb1: { 'Block': 2, 'ATK': 20 },
      lb2: { 'Block': 3, 'ATK': 40 },
      lb3: { 'Block': 4, 'ATK': 55 },
      lb4: { 'Block': 4, 'ATK': 55 },
      lb5: { 'Block': 4, 'ATK': 55 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2007,
    name: 'Aphrodia',
    rarity: 'R',
    element: 'Mind',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'Block': 1 },
      lb1: { 'Block': 2, 'Accuracy': 3 },
      lb2: { 'Block': 3, 'Accuracy': 4 },
      lb3: { 'Block': 4, 'Accuracy': 5 },
      lb4: { 'Block': 4, 'Accuracy': 5 },
      lb5: { 'Block': 4, 'Accuracy': 5 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2009,
    name: 'Drowatt',
    rarity: 'R',
    element: 'Wind',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'ATK': 20 },
      lb1: { 'ATK': 40, 'Block': 1 },
      lb2: { 'ATK': 55, 'Block': 2 },
      lb3: { 'ATK': 70, 'Block': 3 },
      lb4: { 'ATK': 70, 'Block': 3 },
      lb5: { 'ATK': 70, 'Block': 3 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2010,
    name: 'Aristera',
    rarity: 'R',
    element: 'Mind',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'M.Crit Rate': 15 },
      lb1: { 'M.Crit Rate': 20, 'MDEF': 10 },
      lb2: { 'M.Crit Rate': 25, 'MDEF': 20 },
      lb3: { 'M.Crit Rate': 30, 'MDEF': 30 },
      lb4: { 'M.Crit Rate': 30, 'MDEF': 30 },
      lb5: { 'M.Crit Rate': 30, 'MDEF': 30 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2011,
    name: 'Rosalyn',
    rarity: 'R',
    element: 'Water',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'DEF': 10 },
      lb1: { 'DEF': 20, 'Crit Rate': 15 },
      lb2: { 'DEF': 30, 'Crit Rate': 20 },
      lb3: { 'DEF': 40, 'Crit Rate': 25 },
      lb4: { 'DEF': 40, 'Crit Rate': 25 },
      lb5: { 'DEF': 40, 'Crit Rate': 25 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2012,
    name: 'Estria',
    rarity: 'R',
    element: 'Mind',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'DEF': 10 },
      lb1: { 'DEF': 20, 'ATK': 20 },
      lb2: { 'DEF': 30, 'ATK': 40 },
      lb3: { 'DEF': 40, 'ATK': 55 },
      lb4: { 'DEF': 40, 'ATK': 55 },
      lb5: { 'DEF': 40, 'ATK': 55 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2013,
    name: 'Celebria',
    rarity: 'R',
    element: 'Water',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'HP': 200 },
      lb1: { 'HP': 400, 'Accuracy': 3 },
      lb2: { 'HP': 600, 'Accuracy': 4 },
      lb3: { 'HP': 800, 'Accuracy': 5 },
      lb4: { 'HP': 800, 'Accuracy': 5 },
      lb5: { 'HP': 800, 'Accuracy': 5 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2015,
    name: 'Xevia',
    rarity: 'R',
    element: 'Wind',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'Block': 1 },
      lb1: { 'Block': 2, 'Crit Rate': 15 },
      lb2: { 'Block': 3, 'Crit Rate': 20 },
      lb3: { 'Block': 4, 'Crit Rate': 25 },
      lb4: { 'Block': 4, 'Crit Rate': 25 },
      lb5: { 'Block': 4, 'Crit Rate': 25 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2016,
    name: 'Shahar',
    rarity: 'R',
    element: 'Dark',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'Crit Rate': 15 },
      lb1: { 'Crit Rate': 20, 'Block': 1 },
      lb2: { 'Crit Rate': 25, 'Block': 2 },
      lb3: { 'Crit Rate': 30, 'Block': 3 },
      lb4: { 'Crit Rate': 30, 'Block': 3 },
      lb5: { 'Crit Rate': 30, 'Block': 3 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2017,
    name: 'Elythia',
    rarity: 'R',
    element: 'Wind',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'Crit Rate': 15 },
      lb1: { 'Crit Rate': 20, 'Block': 1 },
      lb2: { 'Crit Rate': 25, 'Block': 2 },
      lb3: { 'Crit Rate': 30, 'Block': 3 },
      lb4: { 'Crit Rate': 30, 'Block': 3 },
      lb5: { 'Crit Rate': 30, 'Block': 3 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2018,
    name: 'Nadine',
    rarity: 'R',
    element: 'Fire',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'MATK': 20 },
      lb1: { 'MATK': 40, 'HP': 200 },
      lb2: { 'MATK': 55, 'HP': 400 },
      lb3: { 'MATK': 70, 'HP': 600 },
      lb4: { 'MATK': 70, 'HP': 600 },
      lb5: { 'MATK': 70, 'HP': 600 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2019,
    name: 'Lorelia',
    rarity: 'R',
    element: 'Water',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'ATK': 20 },
      lb1: { 'ATK': 40, 'Block': 1 },
      lb2: { 'ATK': 55, 'Block': 2 },
      lb3: { 'ATK': 70, 'Block': 3 },
      lb4: { 'ATK': 70, 'Block': 3 },
      lb5: { 'ATK': 70, 'Block': 3 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2027,
    name: 'Destra',
    rarity: 'R',
    element: 'Dark',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'HP': 200 },
      lb1: { 'HP': 400, 'ATK': 20 },
      lb2: { 'HP': 600, 'ATK': 40 },
      lb3: { 'HP': 800, 'ATK': 55 },
      lb4: { 'HP': 800, 'ATK': 55 },
      lb5: { 'HP': 800, 'ATK': 55 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2028,
    name: 'Eskelda',
    rarity: 'R',
    element: 'Water',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'MDEF': 10 },
      lb1: { 'MDEF': 20, 'M.Crit Rate': 15 },
      lb2: { 'MDEF': 30, 'M.Crit Rate': 20 },
      lb3: { 'MDEF': 40, 'M.Crit Rate': 25 },
      lb4: { 'MDEF': 40, 'M.Crit Rate': 25 },
      lb5: { 'MDEF': 40, 'M.Crit Rate': 25 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2032,
    name: 'Lucrezia',
    rarity: 'R',
    element: 'Water',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'ATK': 20 },
      lb1: { 'ATK': 40, 'HP': 200 },
      lb2: { 'ATK': 55, 'HP': 400 },
      lb3: { 'ATK': 70, 'HP': 600 },
      lb4: { 'ATK': 70, 'HP': 600 },
      lb5: { 'ATK': 70, 'HP': 600 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  // 2025 Summer Swimsuit Characters
  {
    id: 2077,
    name: '【Seductive High-Cut Swimsuit】Nerys',
    rarity: 'SSR',
    element: 'Holy',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'MATK': 80 },
      lb1: { 'MATK': 120, 'Accuracy': 7 },
      lb2: { 'MATK': 160, 'Accuracy': 8 },
      lb3: { 'MATK': 200, 'Accuracy': 9 },
      lb4: { 'MATK': 200, 'Accuracy': 10 },
      lb5: { 'MATK': 200, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2078,
    name: '【Killer☆Bikini】Theresia',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'MATK': 80 },
      lb2: { 'HP': 1500, 'MATK': 120 },
      lb3: { 'HP': 2000, 'MATK': 160 },
      lb4: { 'HP': 2000, 'MATK': 200 },
      lb5: { 'HP': 2000, 'MATK': 200 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2079,
    name: '【Epic Fishing】Meinias',
    rarity: 'SR',
    element: 'Water',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'ATK': 50 },
      lb1: { 'ATK': 80, 'HP': 300 },
      lb2: { 'ATK': 110, 'HP': 700 },
      lb3: { 'ATK': 140, 'HP': 1100 },
      lb4: { 'ATK': 140, 'HP': 1500 },
      lb5: { 'ATK': 140, 'HP': 1500 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },

  // Blade of Judgment Banner Characters (Jan 2026)
  {
    id: 2073,
    name: 'Lucie',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'Crit Rate': 45 },
      lb2: { 'ATK': 160, 'Crit Rate': 60 },
      lb3: { 'ATK': 200, 'Crit Rate': 75 },
      lb4: { 'ATK': 200, 'Crit Rate': 90 },
      lb5: { 'ATK': 200, 'Crit Rate': 90 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2074,
    name: 'Rui',
    rarity: 'SR',
    element: 'Fire',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'Crit Rate': 30 },
      lb1: { 'Crit Rate': 40, 'Block': 3 },
      lb2: { 'Crit Rate': 50, 'Block': 4 },
      lb3: { 'Crit Rate': 60, 'Block': 5 },
      lb4: { 'Crit Rate': 60, 'Block': 6 },
      lb5: { 'Crit Rate': 60, 'Block': 6 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2075,
    name: 'Nue',
    rarity: 'SR',
    element: 'Water',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'ATK': 50 },
      lb1: { 'ATK': 80, 'Accuracy': 5 },
      lb2: { 'ATK': 110, 'Accuracy': 6 },
      lb3: { 'ATK': 140, 'Accuracy': 7 },
      lb4: { 'ATK': 140, 'Accuracy': 8 },
      lb5: { 'ATK': 140, 'Accuracy': 8 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
];

// Helper functions
export function getAllSupportData() {
  return BUSTY_BURST_SUPPORT_DATA;
}

export function getSupportDataById(id) {
  return BUSTY_BURST_SUPPORT_DATA.find(c => c.id === id);
}

export function getSupportDataByName(name) {
  return BUSTY_BURST_SUPPORT_DATA.find(c => c.name.toLowerCase() === name.toLowerCase());
}

// Get unique elements for filter dropdown
export function getUniqueElements() {
  const elements = new Set();
  BUSTY_BURST_SUPPORT_DATA.forEach(c => elements.add(c.element));
  return Array.from(elements).sort();
}

// Get unique weapons for filter dropdown
export function getUniqueWeapons() {
  const weapons = new Set();
  BUSTY_BURST_SUPPORT_DATA.forEach(c => weapons.add(c.weapon));
  return Array.from(weapons).sort();
}

// Get unique rarities for filter dropdown
export function getUniqueRarities() {
  const rarities = new Set();
  BUSTY_BURST_SUPPORT_DATA.forEach(c => rarities.add(c.rarity));
  return ['SSR', 'SR', 'R'].filter(r => rarities.has(r));
}

// Format stat display name
export function formatStatName(stat) {
  const statNames = {
    'HP': 'HP',
    'ATK': 'ATK',
    'MATK': 'MATK',
    'DEF': 'DEF',
    'MDEF': 'MDEF',
    'Accuracy': 'Accuracy',
    'Block': 'Block',
    'Crit Rate': 'Crit Rate',
    'M.Crit Rate': 'M.Crit Rate'
  };
  return statNames[stat] || stat;
}
