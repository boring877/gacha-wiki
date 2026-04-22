// Busty Burst Support Data
// Auto-generated from limit_over.xml + buff_1.xml + hero_1.xml
// Contains support stats for 235 characters

// Element mapping (Japanese to English)
export const ELEMENT_MAP = {
  '魔': 'Dark',
  '想': 'Mind',
  '火': 'Fire',
  '風': 'Wind',
  '水': 'Water',
  '聖': 'Light',
};

// Weapon mapping (Japanese to English)
export const WEAPON_MAP = {
  '射': 'Shot',
  '斬': 'Slash',
  '打': 'Strike',
  '投': 'Throw',
  '突': 'Pierce',
};

// Weapon inspiration effects by weapon type
export const WEAPON_INSPIRATION_EFFECTS = {
  'Shot': { stat: 'Accuracy', values: ['+3', '+6', '+10'] },
  'Slash': { stat: 'DEF/M.DEF', values: ['+3', '+6', '+10'] },
  'Strike': { stat: 'Block', values: ['+3', '+6', '+10'] },
  'Throw': { stat: 'P.ATK/M.ATK', values: ['+2%', '+4%', '+6%'] },
  'Pierce': { stat: 'Action Speed', values: ['+2%', '+4%', '+6%'] },
};

// Helper to get character ID - the ID field is now used directly for images
// via the PaladinImage component's characterId prop
export function getCharacterImageId(id) {
  return id;
}

// All support data - auto-generated from game XML
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
    element: 'Light',
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
    element: 'Light',
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2050,
    name: 'Inrine',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'Crit Rate': 45 },
      lb1: { 'Crit Rate': 60, 'Accuracy': 7 },
      lb2: { 'Crit Rate': 75, 'Accuracy': 8 },
      lb3: { 'Crit Rate': 90, 'Accuracy': 9 },
      lb4: { 'Crit Rate': 90, 'Accuracy': 10 },
      lb5: { 'Crit Rate': 90, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2051,
    name: 'Frey',
    rarity: 'SSR',
    element: 'Light',
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
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
    id: 2059,
    name: 'Setsuka',
    rarity: 'SSR',
    element: 'Fire',
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
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2061,
    name: 'Stenlina',
    rarity: 'SSR',
    element: 'Light',
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
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
    element: 'Light',
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
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
  {
    id: 2077,
    name: '【Seductive High-Cut Swimsuit】Nerys',
    rarity: 'SSR',
    element: 'Light',
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
    id: 2081,
    name: '【Strongest Witch】Shahar',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'M.Crit Rate': 45 },
      lb2: { 'HP': 1500, 'M.Crit Rate': 60 },
      lb3: { 'HP': 2000, 'M.Crit Rate': 75 },
      lb4: { 'HP': 2000, 'M.Crit Rate': 90 },
      lb5: { 'HP': 2000, 'M.Crit Rate': 90 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2082,
    name: '【Tempting Vampire】Soltina',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'HP': 500 },
      lb2: { 'ATK': 160, 'HP': 1000 },
      lb3: { 'ATK': 200, 'HP': 1500 },
      lb4: { 'ATK': 200, 'HP': 2000 },
      lb5: { 'ATK': 200, 'HP': 2000 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2084,
    name: 'Lapis',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'M.Crit Rate': 45 },
      lb1: { 'M.Crit Rate': 60, 'MATK': 80 },
      lb2: { 'M.Crit Rate': 75, 'MATK': 120 },
      lb3: { 'M.Crit Rate': 90, 'MATK': 160 },
      lb4: { 'M.Crit Rate': 90, 'MATK': 200 },
      lb5: { 'M.Crit Rate': 90, 'MATK': 200 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2085,
    name: 'Rosa',
    rarity: 'SSR',
    element: 'Light',
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
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2088,
    name: 'Giselle',
    rarity: 'SSR',
    element: 'Light',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'HP': 500 },
      lb2: { 'ATK': 160, 'HP': 1000 },
      lb3: { 'ATK': 200, 'HP': 1500 },
      lb4: { 'ATK': 200, 'HP': 2000 },
      lb5: { 'ATK': 200, 'HP': 2000 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2089,
    name: '【Top Dancer】Messeria',
    rarity: 'SSR',
    element: 'Light',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'Accuracy': 7 },
      lb2: { 'HP': 1500, 'Accuracy': 8 },
      lb3: { 'HP': 2000, 'Accuracy': 9 },
      lb4: { 'HP': 2000, 'Accuracy': 10 },
      lb5: { 'HP': 2000, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2090,
    name: '【Fruit Basket】Bianca',
    rarity: 'SSR',
    element: 'Water',
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
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2092,
    name: 'Ruse',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'MATK': 80 },
      lb1: { 'MATK': 120, 'HP': 500 },
      lb2: { 'MATK': 160, 'HP': 1000 },
      lb3: { 'MATK': 200, 'HP': 1500 },
      lb4: { 'MATK': 200, 'HP': 2000 },
      lb5: { 'MATK': 200, 'HP': 2000 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2093,
    name: 'Ran',
    rarity: 'SSR',
    element: 'Light',
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
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2094,
    name: '【Samurai Cow Girl】Setsuka',
    rarity: 'SSR',
    element: 'Fire',
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
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
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
    id: 2098,
    name: 'Ruru',
    rarity: 'SSR',
    element: 'Wind',
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
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
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
    id: 2100,
    name: '【New Year\'s First Sketch】Pastel',
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
    id: 2104,
    name: 'Viatrice',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'MATK': 80 },
      lb1: { 'MATK': 120, 'Accuracy': 7 },
      lb2: { 'MATK': 160, 'Accuracy': 8 },
      lb3: { 'MATK': 200, 'Accuracy': 9 },
      lb4: { 'MATK': 200, 'Accuracy': 10 },
      lb5: { 'MATK': 200, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2105,
    name: 'Trish',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Throw',
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
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2106,
    name: 'Lycorys',
    rarity: 'SSR',
    element: 'Dark',
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
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2108,
    name: 'Magdalena',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'MDEF': 30 },
      lb2: { 'HP': 1500, 'MDEF': 60 },
      lb3: { 'HP': 2000, 'MDEF': 90 },
      lb4: { 'HP': 2000, 'MDEF': 120 },
      lb5: { 'HP': 2000, 'MDEF': 120 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2109,
    name: '【Purehearted Pâtissière】Frey',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'Accuracy': 7 },
      lb2: { 'HP': 1500, 'Accuracy': 8 },
      lb3: { 'HP': 2000, 'Accuracy': 9 },
      lb4: { 'HP': 2000, 'Accuracy': 10 },
      lb5: { 'HP': 2000, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2110,
    name: '【Chocolate Dragon Warrior】Hildis',
    rarity: 'SSR',
    element: 'Water',
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
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2112,
    name: 'Priscilla',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'M.Crit Rate': 45 },
      lb1: { 'M.Crit Rate': 60, 'HP': 500 },
      lb2: { 'M.Crit Rate': 75, 'HP': 1000 },
      lb3: { 'M.Crit Rate': 90, 'HP': 1500 },
      lb4: { 'M.Crit Rate': 90, 'HP': 2000 },
      lb5: { 'M.Crit Rate': 90, 'HP': 2000 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2113,
    name: 'Lilith',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'Crit Rate': 45 },
      lb1: { 'Crit Rate': 60, 'HP': 500 },
      lb2: { 'Crit Rate': 75, 'HP': 1000 },
      lb3: { 'Crit Rate': 90, 'HP': 1500 },
      lb4: { 'Crit Rate': 90, 'HP': 2000 },
      lb5: { 'Crit Rate': 90, 'HP': 2000 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2114,
    name: 'Diana',
    rarity: 'SSR',
    element: 'Light',
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
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2115,
    name: 'Zilka',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'Crit Rate': 45 },
      lb1: { 'Crit Rate': 60, 'Accuracy': 7 },
      lb2: { 'Crit Rate': 75, 'Accuracy': 8 },
      lb3: { 'Crit Rate': 90, 'Accuracy': 9 },
      lb4: { 'Crit Rate': 90, 'Accuracy': 10 },
      lb5: { 'Crit Rate': 90, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2117,
    name: '【American Police】Lapis',
    rarity: 'SSR',
    element: 'Water',
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
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2118,
    name: 'Lilirara',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'ATK': 80 },
      lb2: { 'HP': 1500, 'ATK': 120 },
      lb3: { 'HP': 2000, 'ATK': 160 },
      lb4: { 'HP': 2000, 'ATK': 200 },
      lb5: { 'HP': 2000, 'ATK': 200 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2119,
    name: '【Sweet Bunny】Artia',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Strike',
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
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2120,
    name: 'Raoul',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'M.Crit Rate': 45 },
      lb1: { 'M.Crit Rate': 60, 'Accuracy': 7 },
      lb2: { 'M.Crit Rate': 75, 'Accuracy': 8 },
      lb3: { 'M.Crit Rate': 90, 'Accuracy': 9 },
      lb4: { 'M.Crit Rate': 90, 'Accuracy': 10 },
      lb5: { 'M.Crit Rate': 90, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2121,
    name: 'Cluul',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'MATK': 80 },
      lb1: { 'MATK': 120, 'MDEF': 30 },
      lb2: { 'MATK': 160, 'MDEF': 60 },
      lb3: { 'MATK': 200, 'MDEF': 90 },
      lb4: { 'MATK': 200, 'MDEF': 120 },
      lb5: { 'MATK': 200, 'MDEF': 120 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2123,
    name: 'Fionore',
    rarity: 'SSR',
    element: 'Light',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'ATK': 80 },
      lb2: { 'HP': 1500, 'ATK': 120 },
      lb3: { 'HP': 2000, 'ATK': 160 },
      lb4: { 'HP': 2000, 'ATK': 200 },
      lb5: { 'HP': 2000, 'ATK': 200 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2124,
    name: 'Yaksha',
    rarity: 'SSR',
    element: 'Dark',
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
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2125,
    name: 'Nina',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'MATK': 80 },
      lb1: { 'MATK': 120, 'Accuracy': 7 },
      lb2: { 'MATK': 160, 'Accuracy': 8 },
      lb3: { 'MATK': 200, 'Accuracy': 9 },
      lb4: { 'MATK': 200, 'Accuracy': 10 },
      lb5: { 'MATK': 200, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2126,
    name: 'Abigail',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'Accuracy': 7 },
      lb2: { 'HP': 1500, 'Accuracy': 8 },
      lb3: { 'HP': 2000, 'Accuracy': 9 },
      lb4: { 'HP': 2000, 'Accuracy': 10 },
      lb5: { 'HP': 2000, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2127,
    name: '【Underboob Cheerleader】Gemini',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'Crit Rate': 45 },
      lb2: { 'HP': 1500, 'Crit Rate': 60 },
      lb3: { 'HP': 2000, 'Crit Rate': 75 },
      lb4: { 'HP': 2000, 'Crit Rate': 90 },
      lb5: { 'HP': 2000, 'Crit Rate': 90 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2128,
    name: '【Underboob Cheerleader】Vanessa',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'M.Crit Rate': 45 },
      lb2: { 'HP': 1500, 'M.Crit Rate': 60 },
      lb3: { 'HP': 2000, 'M.Crit Rate': 75 },
      lb4: { 'HP': 2000, 'M.Crit Rate': 90 },
      lb5: { 'HP': 2000, 'M.Crit Rate': 90 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2130,
    name: '【By the Pool】Artia',
    rarity: 'SSR',
    element: 'Water',
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
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2131,
    name: 'Eva',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'ATK': 80 },
      lb2: { 'HP': 1500, 'ATK': 120 },
      lb3: { 'HP': 2000, 'ATK': 160 },
      lb4: { 'HP': 2000, 'ATK': 200 },
      lb5: { 'HP': 2000, 'ATK': 200 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2132,
    name: 'Ines',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'Accuracy': 7 },
      lb2: { 'ATK': 160, 'Accuracy': 8 },
      lb3: { 'ATK': 200, 'Accuracy': 9 },
      lb4: { 'ATK': 200, 'Accuracy': 10 },
      lb5: { 'ATK': 200, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2134,
    name: '【Seductive Naked Apron】Diana',
    rarity: 'SSR',
    element: 'Light',
    weapon: 'Strike',
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
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2135,
    name: 'Gil',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'Crit Rate': 45 },
      lb1: { 'Crit Rate': 60, 'Accuracy': 7 },
      lb2: { 'Crit Rate': 75, 'Accuracy': 8 },
      lb3: { 'Crit Rate': 90, 'Accuracy': 9 },
      lb4: { 'Crit Rate': 90, 'Accuracy': 10 },
      lb5: { 'Crit Rate': 90, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2136,
    name: 'Bonita',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'Block': 5 },
      lb2: { 'HP': 1500, 'Block': 6 },
      lb3: { 'HP': 2000, 'Block': 7 },
      lb4: { 'HP': 2000, 'Block': 8 },
      lb5: { 'HP': 2000, 'Block': 8 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2138,
    name: '【School Sportswear】The Dark Knight',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'M.Crit Rate': 45 },
      lb1: { 'M.Crit Rate': 60, 'MATK': 80 },
      lb2: { 'M.Crit Rate': 75, 'MATK': 120 },
      lb3: { 'M.Crit Rate': 90, 'MATK': 160 },
      lb4: { 'M.Crit Rate': 90, 'MATK': 200 },
      lb5: { 'M.Crit Rate': 90, 'MATK': 200 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2139,
    name: 'Sirius',
    rarity: 'SSR',
    element: 'Light',
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
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2140,
    name: '【Lucky Bride】Theresia',
    rarity: 'SSR',
    element: 'Light',
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
    id: 2141,
    name: '【Innocent Bride】Giselle',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'MATK': 80 },
      lb1: { 'MATK': 120, 'HP': 500 },
      lb2: { 'MATK': 160, 'HP': 1000 },
      lb3: { 'MATK': 200, 'HP': 1500 },
      lb4: { 'MATK': 200, 'HP': 2000 },
      lb5: { 'MATK': 200, 'HP': 2000 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2143,
    name: '【Alluring Naked Apron】Zilka',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'MATK': 80 },
      lb1: { 'MATK': 120, 'Accuracy': 7 },
      lb2: { 'MATK': 160, 'Accuracy': 8 },
      lb3: { 'MATK': 200, 'Accuracy': 9 },
      lb4: { 'MATK': 200, 'Accuracy': 10 },
      lb5: { 'MATK': 200, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2144,
    name: 'Ilugio',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'Crit Rate': 45 },
      lb1: { 'Crit Rate': 60, 'Accuracy': 7 },
      lb2: { 'Crit Rate': 75, 'Accuracy': 8 },
      lb3: { 'Crit Rate': 90, 'Accuracy': 9 },
      lb4: { 'Crit Rate': 90, 'Accuracy': 10 },
      lb5: { 'Crit Rate': 90, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2145,
    name: 'Ange',
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
    id: 2147,
    name: 'Raffine',
    rarity: 'SSR',
    element: 'Light',
    weapon: 'Shot',
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
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2148,
    name: 'Elaine',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'ATK': 80 },
      lb2: { 'HP': 1500, 'ATK': 120 },
      lb3: { 'HP': 2000, 'ATK': 160 },
      lb4: { 'HP': 2000, 'ATK': 200 },
      lb5: { 'HP': 2000, 'ATK': 200 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2149,
    name: '【Aim for Your Heart♪】Shaty',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'Accuracy': 7 },
      lb2: { 'ATK': 160, 'Accuracy': 8 },
      lb3: { 'ATK': 200, 'Accuracy': 9 },
      lb4: { 'ATK': 200, 'Accuracy': 10 },
      lb5: { 'ATK': 200, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2150,
    name: '【Love Surf】Priscilla',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'Crit Rate': 45 },
      lb1: { 'Crit Rate': 60, 'HP': 500 },
      lb2: { 'Crit Rate': 75, 'HP': 1000 },
      lb3: { 'Crit Rate': 90, 'HP': 1500 },
      lb4: { 'Crit Rate': 90, 'HP': 2000 },
      lb5: { 'Crit Rate': 90, 'HP': 2000 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2152,
    name: '【Skateboard Girl】Nue',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'ATK': 80 },
      lb2: { 'HP': 1500, 'ATK': 120 },
      lb3: { 'HP': 2000, 'ATK': 160 },
      lb4: { 'HP': 2000, 'ATK': 200 },
      lb5: { 'HP': 2000, 'ATK': 200 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2153,
    name: 'Bernadette',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'DEF': 30 },
      lb2: { 'HP': 1500, 'DEF': 60 },
      lb3: { 'HP': 2000, 'DEF': 90 },
      lb4: { 'HP': 2000, 'DEF': 120 },
      lb5: { 'HP': 2000, 'DEF': 120 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2154,
    name: 'Adrienne',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'MDEF': 30 },
      lb2: { 'HP': 1500, 'MDEF': 60 },
      lb3: { 'HP': 2000, 'MDEF': 90 },
      lb4: { 'HP': 2000, 'MDEF': 120 },
      lb5: { 'HP': 2000, 'MDEF': 120 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2156,
    name: 'Lin',
    rarity: 'SSR',
    element: 'Wind',
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
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2157,
    name: '【Sky Festival Pyrotechnician】Viatrice',
    rarity: 'SSR',
    element: 'Fire',
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
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2158,
    name: '【Sky Festival Swordswoman】Ran',
    rarity: 'SSR',
    element: 'Light',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'HP': 500 },
      lb2: { 'ATK': 160, 'HP': 1000 },
      lb3: { 'ATK': 200, 'HP': 1500 },
      lb4: { 'ATK': 200, 'HP': 2000 },
      lb5: { 'ATK': 200, 'HP': 2000 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2160,
    name: '【Warm Pastry】Lilirara',
    rarity: 'SSR',
    element: 'Fire',
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
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2161,
    name: '【Sexy Maid Emblem Knight】Ilugio',
    rarity: 'SSR',
    element: 'Light',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'Crit Rate': 45 },
      lb2: { 'ATK': 160, 'Crit Rate': 60 },
      lb3: { 'ATK': 200, 'Crit Rate': 75 },
      lb4: { 'ATK': 200, 'Crit Rate': 90 },
      lb5: { 'ATK': 200, 'Crit Rate': 90 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2162,
    name: '【Consumed by the Power of the High-Slit Swimsuit】The Dark Knight',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Strike',
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
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2163,
    name: '【Invincible Empress】Gladys',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'ATK': 80 },
      lb2: { 'HP': 1500, 'ATK': 120 },
      lb3: { 'HP': 2000, 'ATK': 160 },
      lb4: { 'HP': 2000, 'ATK': 200 },
      lb5: { 'HP': 2000, 'ATK': 200 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2164,
    name: 'Captain of the Vern Holy Knights Order】Frigis',
    rarity: 'SSR',
    element: 'Light',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'Block': 5 },
      lb2: { 'ATK': 160, 'Block': 6 },
      lb3: { 'ATK': 200, 'Block': 7 },
      lb4: { 'ATK': 200, 'Block': 8 },
      lb5: { 'ATK': 200, 'Block': 8 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2166,
    name: 'Juju',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'M.Crit Rate': 45 },
      lb1: { 'M.Crit Rate': 60, 'Accuracy': 7 },
      lb2: { 'M.Crit Rate': 75, 'Accuracy': 8 },
      lb3: { 'M.Crit Rate': 90, 'Accuracy': 9 },
      lb4: { 'M.Crit Rate': 90, 'Accuracy': 10 },
      lb5: { 'M.Crit Rate': 90, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2167,
    name: '【Little Cat】Ruru',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'Crit Rate': 45 },
      lb2: { 'HP': 1500, 'Crit Rate': 60 },
      lb3: { 'HP': 2000, 'Crit Rate': 75 },
      lb4: { 'HP': 2000, 'Crit Rate': 90 },
      lb5: { 'HP': 2000, 'Crit Rate': 90 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2171,
    name: '【Dreamlike Moment】Estiriel',
    rarity: 'SSR',
    element: 'Wind',
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
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2172,
    name: '【Voluptuous Succubus】Katisha',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'ATK': 80 },
      lb2: { 'HP': 1500, 'ATK': 120 },
      lb3: { 'HP': 2000, 'ATK': 160 },
      lb4: { 'HP': 2000, 'ATK': 200 },
      lb5: { 'HP': 2000, 'ATK': 200 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2173,
    name: '【Vampire of the Night】Nue',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'Crit Rate': 45 },
      lb1: { 'Crit Rate': 60, 'ATK': 80 },
      lb2: { 'Crit Rate': 75, 'ATK': 120 },
      lb3: { 'Crit Rate': 90, 'ATK': 160 },
      lb4: { 'Crit Rate': 90, 'ATK': 200 },
      lb5: { 'Crit Rate': 90, 'ATK': 200 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2175,
    name: '【My Sister the Sailor】Bonita',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'M.Crit Rate': 45 },
      lb1: { 'M.Crit Rate': 60, 'MATK': 80 },
      lb2: { 'M.Crit Rate': 75, 'MATK': 120 },
      lb3: { 'M.Crit Rate': 90, 'MATK': 160 },
      lb4: { 'M.Crit Rate': 90, 'MATK': 200 },
      lb5: { 'M.Crit Rate': 90, 'MATK': 200 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2176,
    name: '【Milkmaid】Elaine',
    rarity: 'SSR',
    element: 'Dark',
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
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2177,
    name: '【Blessed Beer Maidens】Destra & Eskelda',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'DEF': 30 },
      lb1: { 'DEF': 60, 'MDEF': 30 },
      lb2: { 'DEF': 90, 'MDEF': 60 },
      lb3: { 'DEF': 120, 'MDEF': 90 },
      lb4: { 'DEF': 120, 'MDEF': 120 },
      lb5: { 'DEF': 120, 'MDEF': 120 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2178,
    name: '【Assassin Beer Maiden】Rui',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'Crit Rate': 45 },
      lb1: { 'Crit Rate': 60, 'Accuracy': 7 },
      lb2: { 'Crit Rate': 75, 'Accuracy': 8 },
      lb3: { 'Crit Rate': 90, 'Accuracy': 9 },
      lb4: { 'Crit Rate': 90, 'Accuracy': 10 },
      lb5: { 'Crit Rate': 90, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2180,
    name: '【Holy Knight of Elron】Luca',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'Crit Rate': 45 },
      lb1: { 'Crit Rate': 60, 'ATK': 80 },
      lb2: { 'Crit Rate': 75, 'ATK': 120 },
      lb3: { 'Crit Rate': 90, 'ATK': 160 },
      lb4: { 'Crit Rate': 90, 'ATK': 200 },
      lb5: { 'Crit Rate': 90, 'ATK': 200 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2181,
    name: '【Lone Knight】Inrine',
    rarity: 'SSR',
    element: 'Fire',
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
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2182,
    name: '【Soul-Stealing Sweater】Hildis',
    rarity: 'SSR',
    element: 'Mind',
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
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2183,
    name: '貝加莉亞',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Throw',
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
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2184,
    name: 'Begalia',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'MATK': 80 },
      lb1: { 'MATK': 120, 'HP': 500 },
      lb2: { 'MATK': 160, 'HP': 1000 },
      lb3: { 'MATK': 200, 'HP': 1500 },
      lb4: { 'MATK': 200, 'HP': 2000 },
      lb5: { 'MATK': 200, 'HP': 2000 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2185,
    name: '【Breast Fiend of the Holy Night】Ruse',
    rarity: 'SSR',
    element: 'Fire',
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
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2187,
    name: '【Blessing Hand of the Gale】Lin',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'MDEF': 30 },
      lb2: { 'ATK': 160, 'MDEF': 60 },
      lb3: { 'ATK': 200, 'MDEF': 90 },
      lb4: { 'ATK': 200, 'MDEF': 120 },
      lb5: { 'ATK': 200, 'MDEF': 120 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2188,
    name: '【Shy Schoolgirl】Raffine',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'MATK': 80 },
      lb1: { 'MATK': 120, 'DEF': 30 },
      lb2: { 'MATK': 160, 'DEF': 60 },
      lb3: { 'MATK': 200, 'DEF': 90 },
      lb4: { 'MATK': 200, 'DEF': 120 },
      lb5: { 'MATK': 200, 'DEF': 120 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2189,
    name: '【Badminton Kimono Girl】Lilith',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Slash',
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2191,
    name: '【Crimson Umbrella Maiden】Lilirara',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'MDEF': 30 },
      lb1: { 'MDEF': 60, 'HP': 500 },
      lb2: { 'MDEF': 90, 'HP': 1000 },
      lb3: { 'MDEF': 120, 'HP': 1500 },
      lb4: { 'MDEF': 120, 'HP': 2000 },
      lb5: { 'MDEF': 120, 'HP': 2000 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2192,
    name: '【Twin Shrine Maiden】Raoul',
    rarity: 'SSR',
    element: 'Fire',
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
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2193,
    name: '【Twin Shrine Maiden】Cluul',
    rarity: 'SSR',
    element: 'Light',
    weapon: 'Strike',
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
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2194,
    name: 'Nova',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'MDEF': 30 },
      lb2: { 'ATK': 160, 'MDEF': 60 },
      lb3: { 'ATK': 200, 'MDEF': 90 },
      lb4: { 'ATK': 200, 'MDEF': 120 },
      lb5: { 'ATK': 200, 'MDEF': 120 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2196,
    name: 'Nerine',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'Crit Rate': 45 },
      lb1: { 'Crit Rate': 60, 'Accuracy': 7 },
      lb2: { 'Crit Rate': 75, 'Accuracy': 8 },
      lb3: { 'Crit Rate': 90, 'Accuracy': 9 },
      lb4: { 'Crit Rate': 90, 'Accuracy': 10 },
      lb5: { 'Crit Rate': 90, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2197,
    name: '【Lustful Nun】Soltina',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'Crit Rate': 45 },
      lb2: { 'ATK': 160, 'Crit Rate': 60 },
      lb3: { 'ATK': 200, 'Crit Rate': 75 },
      lb4: { 'ATK': 200, 'Crit Rate': 90 },
      lb5: { 'ATK': 200, 'Crit Rate': 90 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2198,
    name: '【Adventurer】Henrietti',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'ATK': 80 },
      lb2: { 'HP': 1500, 'ATK': 120 },
      lb3: { 'HP': 2000, 'ATK': 160 },
      lb4: { 'HP': 2000, 'ATK': 200 },
      lb5: { 'HP': 2000, 'ATK': 200 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2199,
    name: '【First Handmade Chocolate】Kaguya',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'M.Crit Rate': 45 },
      lb1: { 'M.Crit Rate': 60, 'MATK': 80 },
      lb2: { 'M.Crit Rate': 75, 'MATK': 120 },
      lb3: { 'M.Crit Rate': 90, 'MATK': 160 },
      lb4: { 'M.Crit Rate': 90, 'MATK': 200 },
      lb5: { 'M.Crit Rate': 90, 'MATK': 200 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2201,
    name: 'Riki',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'DEF': 30 },
      lb1: { 'DEF': 60, 'MDEF': 30 },
      lb2: { 'DEF': 90, 'MDEF': 60 },
      lb3: { 'DEF': 120, 'MDEF': 90 },
      lb4: { 'DEF': 120, 'MDEF': 120 },
      lb5: { 'DEF': 120, 'MDEF': 120 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2202,
    name: '【Handmade Chocolate Maid】Sarka',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'MATK': 80 },
      lb1: { 'MATK': 120, 'DEF': 30 },
      lb2: { 'MATK': 160, 'DEF': 60 },
      lb3: { 'MATK': 200, 'DEF': 90 },
      lb4: { 'MATK': 200, 'DEF': 120 },
      lb5: { 'MATK': 200, 'DEF': 120 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2203,
    name: '【Artist on Ice】Ilugio',
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2204,
    name: '【American Exchange Student】Artia',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Shot',
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
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2205,
    name: '【Little Devil Idol】Nina',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'MDEF': 30 },
      lb2: { 'ATK': 160, 'MDEF': 60 },
      lb3: { 'ATK': 200, 'MDEF': 90 },
      lb4: { 'ATK': 200, 'MDEF': 120 },
      lb5: { 'ATK': 200, 'MDEF': 120 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2206,
    name: '【Elegant Bunny Girl】Bernadette',
    rarity: 'SSR',
    element: 'Water',
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
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2207,
    name: '【Goddess of Wisdom and Courage】Athena',
    rarity: 'SSR',
    element: 'Light',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'MDEF': 30 },
      lb1: { 'MDEF': 60, 'ATK': 80 },
      lb2: { 'MDEF': 90, 'ATK': 120 },
      lb3: { 'MDEF': 120, 'ATK': 160 },
      lb4: { 'MDEF': 120, 'ATK': 200 },
      lb5: { 'MDEF': 120, 'ATK': 200 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2208,
    name: '【Gothic Loli Breast Fiend】Juju',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'HP': 500 },
      lb2: { 'ATK': 160, 'HP': 1000 },
      lb3: { 'ATK': 200, 'HP': 1500 },
      lb4: { 'ATK': 200, 'HP': 2000 },
      lb5: { 'ATK': 200, 'HP': 2000 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2209,
    name: '【Boob-Shaking Cheerleader】Nora',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'Crit Rate': 45 },
      lb2: { 'HP': 1500, 'Crit Rate': 60 },
      lb3: { 'HP': 2000, 'Crit Rate': 75 },
      lb4: { 'HP': 2000, 'Crit Rate': 90 },
      lb5: { 'HP': 2000, 'Crit Rate': 90 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2210,
    name: '【Boob-Shaking Cheerleader】Ashley',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'Accuracy': 7 },
      lb2: { 'HP': 1500, 'Accuracy': 8 },
      lb3: { 'HP': 2000, 'Accuracy': 9 },
      lb4: { 'HP': 2000, 'Accuracy': 10 },
      lb5: { 'HP': 2000, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2212,
    name: '【Valkyrie of the Pegasus】Giselle',
    rarity: 'SSR',
    element: 'Light',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'Crit Rate': 45 },
      lb2: { 'ATK': 160, 'Crit Rate': 60 },
      lb3: { 'ATK': 200, 'Crit Rate': 75 },
      lb4: { 'ATK': 200, 'Crit Rate': 90 },
      lb5: { 'ATK': 200, 'Crit Rate': 90 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2213,
    name: '【Agile Mercenary】Shaty',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'Accuracy': 7 },
      lb2: { 'ATK': 160, 'Accuracy': 8 },
      lb3: { 'ATK': 200, 'Accuracy': 9 },
      lb4: { 'ATK': 200, 'Accuracy': 10 },
      lb5: { 'ATK': 200, 'Accuracy': 10 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2214,
    name: 'BeluBelu',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'HP': 500 },
      lb1: { 'HP': 1000, 'Block': 5 },
      lb2: { 'HP': 1500, 'Block': 6 },
      lb3: { 'HP': 2000, 'Block': 7 },
      lb4: { 'HP': 2000, 'Block': 8 },
      lb5: { 'HP': 2000, 'Block': 8 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2215,
    name: 'Sonia',
    rarity: 'SSR',
    element: 'Light',
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
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2216,
    name: 'Aruxar',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'Crit Rate': 45 },
      lb1: { 'Crit Rate': 60, 'HP': 500 },
      lb2: { 'Crit Rate': 75, 'HP': 1000 },
      lb3: { 'Crit Rate': 90, 'HP': 1500 },
      lb4: { 'Crit Rate': 90, 'HP': 2000 },
      lb5: { 'Crit Rate': 90, 'HP': 2000 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2217,
    name: 'Nephilia',
    rarity: 'SSR',
    element: 'Water',
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
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2218,
    name: 'Lugisis',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'Block': 5 },
      lb1: { 'Block': 6, 'HP': 500 },
      lb2: { 'Block': 7, 'HP': 1000 },
      lb3: { 'Block': 8, 'HP': 1500 },
      lb4: { 'Block': 8, 'HP': 2000 },
      lb5: { 'Block': 8, 'HP': 2000 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2219,
    name: '【Crimson Courtesan】Ange',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Throw',
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
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2220,
    name: 'ゲルディン',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Slash',
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2221,
    name: 'スーラ',
    rarity: 'SSR',
    element: 'Wind',
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
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2223,
    name: '【食欲の女戦士】ラウール＆クルール',
    rarity: 'SSR',
    element: 'Fire',
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
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2224,
    name: 'ユラ',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'M.Crit Rate': 45 },
      lb1: { 'M.Crit Rate': 60, 'MATK': 80 },
      lb2: { 'M.Crit Rate': 75, 'MATK': 120 },
      lb3: { 'M.Crit Rate': 90, 'MATK': 160 },
      lb4: { 'M.Crit Rate': 90, 'MATK': 200 },
      lb5: { 'M.Crit Rate': 90, 'MATK': 200 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2225,
    name: '困惑の花嫁: マグダレーナ',
    rarity: 'SSR',
    element: 'Light',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'MDEF': 30 },
      lb1: { 'MDEF': 60, 'MATK': 80 },
      lb2: { 'MDEF': 90, 'MATK': 120 },
      lb3: { 'MDEF': 120, 'MATK': 160 },
      lb4: { 'MDEF': 120, 'MATK': 200 },
      lb5: { 'MDEF': 120, 'MATK': 200 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2226,
    name: '日傘の花嫁: 麗鬼',
    rarity: 'SSR',
    element: 'Fire',
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
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2228,
    name: '疾風のくノ一: リン',
    rarity: 'SSR',
    element: 'Mind',
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
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2229,
    name: 'ハニス',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'ATK': 80 },
      lb1: { 'ATK': 120, 'MDEF': 30 },
      lb2: { 'ATK': 160, 'MDEF': 60 },
      lb3: { 'ATK': 200, 'MDEF': 90 },
      lb4: { 'ATK': 200, 'MDEF': 120 },
      lb5: { 'ATK': 200, 'MDEF': 120 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2230,
    name: 'モーラン',
    rarity: 'SSR',
    element: 'Light',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'DEF': 30 },
      lb1: { 'DEF': 60, 'MDEF': 30 },
      lb2: { 'DEF': 90, 'MDEF': 60 },
      lb3: { 'DEF': 120, 'MDEF': 90 },
      lb4: { 'DEF': 120, 'MDEF': 120 },
      lb5: { 'DEF': 120, 'MDEF': 120 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2232,
    name: 'エルロンの堅牢なる盾: ナターシャ',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'DEF': 30 },
      lb1: { 'DEF': 60, 'MDEF': 30 },
      lb2: { 'DEF': 90, 'MDEF': 60 },
      lb3: { 'DEF': 120, 'MDEF': 90 },
      lb4: { 'DEF': 120, 'MDEF': 120 },
      lb5: { 'DEF': 120, 'MDEF': 120 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2233,
    name: '伝説の勇者: ジェミニ',
    rarity: 'SSR',
    element: 'Light',
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
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2234,
    name: 'ビキニでタコ殴り: ギル',
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
    id: 2235,
    name: 'ビキニでお祝い: ヴィアトリーチェ',
    rarity: 'SSR',
    element: 'Fire',
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
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2237,
    name: '捕縛杖の聖騎士: カティーシャ',
    rarity: 'SSR',
    element: 'Light',
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
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2238,
    name: '稀代の発明家: パステル',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Pierce',
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
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2239,
    name: '【牛乳娘】累＆鵺',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'Crit Rate': 45 },
      lb1: { 'Crit Rate': 60, 'HP': 500 },
      lb2: { 'Crit Rate': 75, 'HP': 1000 },
      lb3: { 'Crit Rate': 90, 'HP': 1500 },
      lb4: { 'Crit Rate': 90, 'HP': 2000 },
      lb5: { 'Crit Rate': 90, 'HP': 2000 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
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
    element: 'Light',
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
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
    element: 'Light',
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
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
    element: 'Light',
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
    element: 'Light',
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2070,
    name: '【Festive Costume】Natasha',
    rarity: 'SR',
    element: 'Light',
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
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
  {
    id: 2083,
    name: '【Little Devil】Luca',
    rarity: 'SR',
    element: 'Fire',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'ATK': 50 },
      lb1: { 'ATK': 80, 'Accuracy': 5 },
      lb2: { 'ATK': 110, 'Accuracy': 6 },
      lb3: { 'ATK': 140, 'Accuracy': 7 },
      lb4: { 'ATK': 140, 'Accuracy': 7 },
      lb5: { 'ATK': 140, 'Accuracy': 7 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2086,
    name: 'Gracie',
    rarity: 'SR',
    element: 'Light',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'DEF': 20 },
      lb1: { 'DEF': 40, 'MDEF': 20 },
      lb2: { 'DEF': 60, 'MDEF': 40 },
      lb3: { 'DEF': 80, 'MDEF': 60 },
      lb4: { 'DEF': 80, 'MDEF': 60 },
      lb5: { 'DEF': 80, 'MDEF': 60 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2087,
    name: 'Lynette',
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
  {
    id: 2091,
    name: '【How About a Beer?】Stenlina',
    rarity: 'SR',
    element: 'Mind',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'ATK': 50 },
      lb1: { 'ATK': 80, 'MATK': 50 },
      lb2: { 'ATK': 110, 'MATK': 80 },
      lb3: { 'ATK': 140, 'MATK': 110 },
      lb4: { 'ATK': 140, 'MATK': 110 },
      lb5: { 'ATK': 140, 'MATK': 110 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
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
    name: '【New Year’s Feast Box】Lynette',
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
  {
    id: 2102,
    name: 'Henrietti',
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2103,
    name: 'Vanessa',
    rarity: 'SR',
    element: 'Wind',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'ATK': 50 },
      lb1: { 'ATK': 80, 'Accuracy': 5 },
      lb2: { 'ATK': 110, 'Accuracy': 6 },
      lb3: { 'ATK': 140, 'Accuracy': 7 },
      lb4: { 'ATK': 140, 'Accuracy': 7 },
      lb5: { 'ATK': 140, 'Accuracy': 7 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2107,
    name: 'Katisha',
    rarity: 'SR',
    element: 'Light',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'ATK': 50 },
      lb1: { 'ATK': 80, 'Block': 3 },
      lb2: { 'ATK': 110, 'Block': 4 },
      lb3: { 'ATK': 140, 'Block': 5 },
      lb4: { 'ATK': 140, 'Block': 5 },
      lb5: { 'ATK': 140, 'Block': 5 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2111,
    name: '【Warrior of Love and Chocolate】Shaty',
    rarity: 'SR',
    element: 'Mind',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'Accuracy': 5 },
      lb1: { 'Accuracy': 6, 'ATK': 50 },
      lb2: { 'Accuracy': 7, 'ATK': 80 },
      lb3: { 'Accuracy': 8, 'ATK': 110 },
      lb4: { 'Accuracy': 8, 'ATK': 110 },
      lb5: { 'Accuracy': 8, 'ATK': 110 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2116,
    name: 'Sarka',
    rarity: 'SR',
    element: 'Water',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'ATK': 50 },
      lb1: { 'ATK': 80, 'Accuracy': 5 },
      lb2: { 'ATK': 110, 'Accuracy': 6 },
      lb3: { 'ATK': 140, 'Accuracy': 7 },
      lb4: { 'ATK': 140, 'Accuracy': 7 },
      lb5: { 'ATK': 140, 'Accuracy': 7 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2122,
    name: 'Beautia',
    rarity: 'SR',
    element: 'Mind',
    weapon: 'Throw',
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
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2129,
    name: '【Underboob Cheerleader】Henrietti',
    rarity: 'SR',
    element: 'Mind',
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
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2133,
    name: 'Collie',
    rarity: 'SR',
    element: 'Wind',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'HP': 300 },
      lb1: { 'HP': 700, 'Crit Rate': 30 },
      lb2: { 'HP': 1100, 'Crit Rate': 40 },
      lb3: { 'HP': 1500, 'Crit Rate': 50 },
      lb4: { 'HP': 1500, 'Crit Rate': 60 },
      lb5: { 'HP': 1500, 'Crit Rate': 60 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2137,
    name: 'Ashley',
    rarity: 'SR',
    element: 'Fire',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'Accuracy': 5 },
      lb1: { 'Accuracy': 6, 'HP': 300 },
      lb2: { 'Accuracy': 7, 'HP': 700 },
      lb3: { 'Accuracy': 8, 'HP': 1100 },
      lb4: { 'Accuracy': 8, 'HP': 1500 },
      lb5: { 'Accuracy': 8, 'HP': 1500 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2142,
    name: '【Charming Bride】Ophelio',
    rarity: 'SR',
    element: 'Light',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'MATK': 50 },
      lb1: { 'MATK': 80, 'HP': 300 },
      lb2: { 'MATK': 110, 'HP': 700 },
      lb3: { 'MATK': 140, 'HP': 1100 },
      lb4: { 'MATK': 140, 'HP': 1100 },
      lb5: { 'MATK': 140, 'HP': 1100 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2146,
    name: 'Raffi',
    rarity: 'SR',
    element: 'Water',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'DEF': 20 },
      lb1: { 'DEF': 40, 'MDEF': 20 },
      lb2: { 'DEF': 60, 'MDEF': 40 },
      lb3: { 'DEF': 80, 'MDEF': 60 },
      lb4: { 'DEF': 80, 'MDEF': 60 },
      lb5: { 'DEF': 80, 'MDEF': 60 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2151,
    name: '【Elegant and Noble Summer】Gracie',
    rarity: 'SR',
    element: 'Mind',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'ATK': 50 },
      lb1: { 'ATK': 80, 'HP': 300 },
      lb2: { 'ATK': 110, 'HP': 700 },
      lb3: { 'ATK': 140, 'HP': 1100 },
      lb4: { 'ATK': 140, 'HP': 1100 },
      lb5: { 'ATK': 140, 'HP': 1100 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2155,
    name: 'Sharik',
    rarity: 'SR',
    element: 'Mind',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'Crit Rate': 45 },
      lb1: { 'Crit Rate': 60, 'Accuracy': 7 },
      lb2: { 'Crit Rate': 75, 'Accuracy': 8 },
      lb3: { 'Crit Rate': 90, 'Accuracy': 9 },
      lb4: { 'Crit Rate': 90, 'Accuracy': 9 },
      lb5: { 'Crit Rate': 90, 'Accuracy': 9 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2159,
    name: '【Sky Festival Songstress】Bernadette',
    rarity: 'SR',
    element: 'Wind',
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
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2165,
    name: '【Celebratory Cheongsam】Diana',
    rarity: 'SR',
    element: 'Light',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'ATK': 50 },
      lb1: { 'ATK': 80, 'Crit Rate': 30 },
      lb2: { 'ATK': 110, 'Crit Rate': 40 },
      lb3: { 'ATK': 140, 'Crit Rate': 50 },
      lb4: { 'ATK': 140, 'Crit Rate': 50 },
      lb5: { 'ATK': 140, 'Crit Rate': 50 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2174,
    name: '【Demon Pumpkin Witch】Zilka',
    rarity: 'SR',
    element: 'Fire',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'M.Crit Rate': 30 },
      lb1: { 'M.Crit Rate': 40, 'MATK': 50 },
      lb2: { 'M.Crit Rate': 50, 'MATK': 80 },
      lb3: { 'M.Crit Rate': 60, 'MATK': 110 },
      lb4: { 'M.Crit Rate': 60, 'MATK': 110 },
      lb5: { 'M.Crit Rate': 60, 'MATK': 110 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2179,
    name: '【Superbust Dress】Adrienne',
    rarity: 'SR',
    element: 'Wind',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'Crit Rate': 30 },
      lb1: { 'Crit Rate': 40, 'ATK': 50 },
      lb2: { 'Crit Rate': 50, 'ATK': 80 },
      lb3: { 'Crit Rate': 60, 'ATK': 110 },
      lb4: { 'Crit Rate': 60, 'ATK': 140 },
      lb5: { 'Crit Rate': 60, 'ATK': 140 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2186,
    name: '【Blessing Hand of the Breast Fiend】Juju',
    rarity: 'SR',
    element: 'Wind',
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
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2190,
    name: '【Fat-Burning Kimono Girl】Beautia',
    rarity: 'SR',
    element: 'Water',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'Crit Rate': 30 },
      lb1: { 'Crit Rate': 40, 'ATK': 50 },
      lb2: { 'Crit Rate': 50, 'ATK': 80 },
      lb3: { 'Crit Rate': 60, 'ATK': 110 },
      lb4: { 'Crit Rate': 60, 'ATK': 110 },
      lb5: { 'Crit Rate': 60, 'ATK': 110 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2195,
    name: 'Louise',
    rarity: 'SR',
    element: 'Light',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'MATK': 50 },
      lb1: { 'MATK': 80, 'Accuracy': 5 },
      lb2: { 'MATK': 110, 'Accuracy': 6 },
      lb3: { 'MATK': 140, 'Accuracy': 7 },
      lb4: { 'MATK': 140, 'Accuracy': 7 },
      lb5: { 'MATK': 140, 'Accuracy': 7 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2200,
    name: '【I Am Chocolate♪】Ange',
    rarity: 'SR',
    element: 'Dark',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'Crit Rate': 30 },
      lb1: { 'Crit Rate': 40, 'ATK': 50 },
      lb2: { 'Crit Rate': 50, 'ATK': 80 },
      lb3: { 'Crit Rate': 60, 'ATK': 110 },
      lb4: { 'Crit Rate': 60, 'ATK': 110 },
      lb5: { 'Crit Rate': 60, 'ATK': 110 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2211,
    name: '【Boob-Shaking Cheerleader】Bonita',
    rarity: 'SR',
    element: 'Mind',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'HP': 300 },
      lb1: { 'HP': 700, 'ATK': 50 },
      lb2: { 'HP': 1100, 'ATK': 80 },
      lb3: { 'HP': 1500, 'ATK': 110 },
      lb4: { 'HP': 1500, 'ATK': 140 },
      lb5: { 'HP': 1500, 'ATK': 140 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2222,
    name: 'キリエ',
    rarity: 'SR',
    element: 'Fire',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'ATK': 50 },
      lb1: { 'ATK': 80, 'Accuracy': 5 },
      lb2: { 'ATK': 110, 'Accuracy': 6 },
      lb3: { 'ATK': 140, 'Accuracy': 7 },
      lb4: { 'ATK': 140, 'Accuracy': 7 },
      lb5: { 'ATK': 140, 'Accuracy': 7 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2227,
    name: 'ボクっ娘の花嫁: メイニアス',
    rarity: 'SR',
    element: 'Wind',
    weapon: 'Slash',
    supportStats: {
      lb0: { 'ATK': 50 },
      lb1: { 'ATK': 80, 'Accuracy': 5 },
      lb2: { 'ATK': 110, 'Accuracy': 6 },
      lb3: { 'ATK': 140, 'Accuracy': 7 },
      lb4: { 'ATK': 140, 'Accuracy': 7 },
      lb5: { 'ATK': 140, 'Accuracy': 7 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2231,
    name: 'ツキナ',
    rarity: 'SR',
    element: 'Light',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'Block': 3 },
      lb1: { 'Block': 4, 'MDEF': 20 },
      lb2: { 'Block': 5, 'MDEF': 40 },
      lb3: { 'Block': 6, 'MDEF': 60 },
      lb4: { 'Block': 6, 'MDEF': 60 },
      lb5: { 'Block': 6, 'MDEF': 60 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2236,
    name: '【たまにはビキニで】リネット',
    rarity: 'SR',
    element: 'Fire',
    weapon: 'Throw',
    supportStats: {
      lb0: { 'ATK': 50 },
      lb1: { 'ATK': 80, 'Accuracy': 5 },
      lb2: { 'ATK': 110, 'Accuracy': 6 },
      lb3: { 'ATK': 140, 'Accuracy': 7 },
      lb4: { 'ATK': 140, 'Accuracy': 7 },
      lb5: { 'ATK': 140, 'Accuracy': 7 },
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'P.ATK/M.ATK', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
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
      inspiration: { name: 'Slash Inspiration', effect: 'DEF/M.DEF', values: { members2: '+3', members4: '+6', members6: '+10' } }
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
