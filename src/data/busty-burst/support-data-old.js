// Busty Burst Support Data
// Filtered to only include characters from character-info.js

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
  'Throw': { stat: 'Accuracy', values: [3, 6, 10] },
  'Pierce': { stat: 'Action Speed', values: ['2%', '4%', '6%'] }
};

// Helper to get character ID - the ID field is now used directly for images
// via the PaladinImage component's characterId prop
export function getCharacterImageId(id) {
  return id;
}

// All support data - filtered to only include characters in character-info.js
export const BUSTY_BURST_SUPPORT_DATA = [
  // ============ SSR Characters ============
  {
    id: 2040,
    name: 'Elegant Portrait Shamshel',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Shot',
    supportStats: {
      lb0: { MATK: 80 },
      lb1: { MATK: 120, Accuracy: 7 },
      lb2: { MATK: 160, Accuracy: 8 },
      lb3: { MATK: 200, Accuracy: 9 },
      lb4: { MATK: 200, Accuracy: 10 },
      lb5: { MATK: 200, Accuracy: 10 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2066,
    name: 'Elegant Portrait Aysis',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Slash',
    supportStats: {
      lb0: { HP: 500 },
      lb1: { HP: 1000, Block: 5 },
      lb2: { HP: 1500, Block: 6 },
      lb3: { HP: 2000, Block: 7 },
      lb4: { HP: 2000, Block: 8 },
      lb5: { HP: 2000, Block: 8 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2068,
    name: 'Festival Empress Shamshel',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'M.Crit': 45 },
      lb1: { 'M.Crit': 60, Accuracy: 7 },
      lb2: { 'M.Crit': 75, Accuracy: 8 },
      lb3: { 'M.Crit': 90, Accuracy: 9 },
      lb4: { 'M.Crit': 90, Accuracy: 10 },
      lb5: { 'M.Crit': 90, Accuracy: 10 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2069,
    name: 'Festive Attire Estiriel',
    rarity: 'SSR',
    element: 'Holy',
    weapon: 'Throw',
    supportStats: {
      lb0: { Block: 5 },
      lb1: { Block: 6, Accuracy: 5 },
      lb2: { Block: 7, Accuracy: 6 },
      lb3: { Block: 8, Accuracy: 7 },
      lb4: { Block: 8, Accuracy: 8 },
      lb5: { Block: 8, Accuracy: 8 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2062,
    name: 'Hisara',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Slash',
    supportStats: {
      lb0: { ATK: 80 },
      lb1: { ATK: 120, Accuracy: 7 },
      lb2: { ATK: 160, Accuracy: 8 },
      lb3: { ATK: 200, Accuracy: 9 },
      lb4: { ATK: 200, Accuracy: 10 },
      lb5: { ATK: 200, Accuracy: 10 }
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
      lb0: { ATK: 80 },
      lb1: { ATK: 120, Block: 5 },
      lb2: { ATK: 160, Block: 6 },
      lb3: { ATK: 200, Block: 7 },
      lb4: { ATK: 200, Block: 8 },
      lb5: { ATK: 200, Block: 8 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2045,
    name: 'Pious Cleric Ishtovia',
    rarity: 'SSR',
    element: 'Holy',
    weapon: 'Throw',
    supportStats: {
      lb0: { HP: 500 },
      lb1: { HP: 1000, MATK: 80 },
      lb2: { HP: 1500, MATK: 120 },
      lb3: { HP: 2000, MATK: 160 },
      lb4: { HP: 2000, MATK: 200 },
      lb5: { HP: 2000, MATK: 200 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2061,
    name: 'Stenlina',
    rarity: 'SSR',
    element: 'Holy',
    weapon: 'Pierce',
    supportStats: {
      lb0: { MATK: 80 },
      lb1: { MATK: 120, 'M.Crit': 45 },
      lb2: { MATK: 160, 'M.Crit': 60 },
      lb3: { MATK: 200, 'M.Crit': 75 },
      lb4: { MATK: 200, 'M.Crit': 90 },
      lb5: { MATK: 200, 'M.Crit': 90 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2042,
    name: 'Golem Summoner Nerys',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Throw',
    supportStats: {
      lb0: { MDEF: 30 },
      lb1: { MDEF: 60, DEF: 30 },
      lb2: { MDEF: 90, DEF: 60 },
      lb3: { MDEF: 120, DEF: 90 },
      lb4: { MDEF: 120, DEF: 120 },
      lb5: { MDEF: 120, DEF: 120 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2043,
    name: 'Swift-Chant Sorceress Sobrina',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Throw',
    supportStats: {
      lb0: { MATK: 80 },
      lb1: { MATK: 120, 'M.Crit': 45 },
      lb2: { MATK: 160, 'M.Crit': 60 },
      lb3: { MATK: 200, 'M.Crit': 75 },
      lb4: { MATK: 200, 'M.Crit': 90 },
      lb5: { MATK: 200, 'M.Crit': 90 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2072,
    name: 'Shaty',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Shot',
    supportStats: {
      lb0: { Accuracy: 7 },
      lb1: { Accuracy: 8, ATK: 80 },
      lb2: { Accuracy: 9, ATK: 120 },
      lb3: { Accuracy: 10, ATK: 160 },
      lb4: { Accuracy: 10, ATK: 200 },
      lb5: { Accuracy: 10, ATK: 200 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2051,
    name: 'Frey',
    rarity: 'SSR',
    element: 'Holy',
    weapon: 'Strike',
    supportStats: {
      lb0: { HP: 500 },
      lb1: { HP: 1000, Block: 5 },
      lb2: { HP: 1500, Block: 6 },
      lb3: { HP: 2000, Block: 7 },
      lb4: { HP: 2000, Block: 8 },
      lb5: { HP: 2000, Block: 8 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2067,
    name: 'Mischievous Mermaid Princess Lorelia',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Strike',
    supportStats: {
      lb0: { ATK: 80 },
      lb1: { ATK: 120, 'P.Crit': 45 },
      lb2: { ATK: 160, 'P.Crit': 60 },
      lb3: { ATK: 200, 'P.Crit': 75 },
      lb4: { ATK: 200, 'P.Crit': 90 },
      lb5: { ATK: 200, 'P.Crit': 90 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
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
      lb0: { 'P.Crit': 45 },
      lb1: { 'P.Crit': 60, Block: 5 },
      lb2: { 'P.Crit': 75, Block: 6 },
      lb3: { 'P.Crit': 90, Block: 7 },
      lb4: { 'P.Crit': 90, Block: 8 },
      lb5: { 'P.Crit': 90, Block: 8 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2046,
    name: 'Teresia',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Pierce',
    supportStats: {
      lb0: { MATK: 80 },
      lb1: { MATK: 120, 'M.Crit': 45 },
      lb2: { MATK: 160, 'M.Crit': 60 },
      lb3: { MATK: 200, 'M.Crit': 75 },
      lb4: { MATK: 200, 'M.Crit': 90 },
      lb5: { MATK: 200, 'M.Crit': 90 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2049,
    name: 'The Dark Knight',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Slash',
    supportStats: {
      lb0: { MATK: 80 },
      lb1: { MATK: 120, Accuracy: 7 },
      lb2: { MATK: 160, Accuracy: 8 },
      lb3: { MATK: 200, Accuracy: 9 },
      lb4: { MATK: 200, Accuracy: 10 },
      lb5: { MATK: 200, Accuracy: 10 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2044,
    name: 'Hypnotic Dancer Messeria',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Throw',
    supportStats: {
      lb0: { Block: 5 },
      lb1: { Block: 6, Accuracy: 7 },
      lb2: { Block: 7, Accuracy: 8 },
      lb3: { Block: 8, Accuracy: 9 },
      lb4: { Block: 8, Accuracy: 10 },
      lb5: { Block: 8, Accuracy: 10 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2060,
    name: 'Yu Lima Elka',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Slash',
    supportStats: {
      lb0: { HP: 500 },
      lb1: { HP: 1000, Accuracy: 7 },
      lb2: { HP: 1500, Accuracy: 8 },
      lb3: { HP: 2000, Accuracy: 9 },
      lb4: { HP: 2000, Accuracy: 10 },
      lb5: { HP: 2000, Accuracy: 10 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
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
      lb0: { DEF: 30 },
      lb1: { DEF: 60, Block: 5 },
      lb2: { DEF: 90, Block: 6 },
      lb3: { DEF: 120, Block: 7 },
      lb4: { DEF: 120, Block: 8 },
      lb5: { DEF: 120, Block: 8 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
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
      lb0: { Block: 5 },
      lb1: { Block: 6, 'P.Crit': 45 },
      lb2: { Block: 7, 'P.Crit': 60 },
      lb3: { Block: 8, 'P.Crit': 75 },
      lb4: { Block: 8, 'P.Crit': 90 },
      lb5: { Block: 8, 'P.Crit': 90 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2052,
    name: 'Gemini',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Pierce',
    supportStats: {
      lb0: { 'P.Crit': 45 },
      lb1: { 'P.Crit': 60, Accuracy: 7 },
      lb2: { 'P.Crit': 75, Accuracy: 8 },
      lb3: { 'P.Crit': 90, Accuracy: 9 },
      lb4: { 'P.Crit': 90, Accuracy: 10 },
      lb5: { 'P.Crit': 90, Accuracy: 10 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2058,
    name: 'Meinias',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Shot',
    supportStats: {
      lb0: { ATK: 80 },
      lb1: { ATK: 120, Block: 5 },
      lb2: { ATK: 160, Block: 6 },
      lb3: { ATK: 200, Block: 7 },
      lb4: { ATK: 200, Block: 8 },
      lb5: { ATK: 200, Block: 8 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2048,
    name: 'Artia',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Slash',
    supportStats: {
      lb0: { HP: 500 },
      lb1: { HP: 1000, DEF: 30 },
      lb2: { HP: 1500, DEF: 60 },
      lb3: { HP: 2000, DEF: 90 },
      lb4: { HP: 2000, DEF: 120 },
      lb5: { HP: 2000, DEF: 120 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2057,
    name: 'Nora',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Strike',
    supportStats: {
      lb0: { Block: 5 },
      lb1: { Block: 6, DEF: 30 },
      lb2: { Block: 7, DEF: 60 },
      lb3: { Block: 8, DEF: 90 },
      lb4: { Block: 8, DEF: 120 },
      lb5: { Block: 8, DEF: 120 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2056,
    name: 'Marina',
    rarity: 'SSR',
    element: 'Water',
    weapon: 'Throw',
    supportStats: {
      lb0: { MATK: 80 },
      lb1: { MATK: 120, MDEF: 30 },
      lb2: { MATK: 160, MDEF: 60 },
      lb3: { MATK: 200, MDEF: 90 },
      lb4: { MATK: 200, MDEF: 120 },
      lb5: { MATK: 200, MDEF: 120 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Water', effect: 'Water Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2054,
    name: 'Hildis',
    rarity: 'SSR',
    element: 'Fire',
    weapon: 'Strike',
    supportStats: {
      lb0: { 'P.Crit': 45 },
      lb1: { 'P.Crit': 60, Accuracy: 7 },
      lb2: { 'P.Crit': 75, Accuracy: 8 },
      lb3: { 'P.Crit': 90, Accuracy: 9 },
      lb4: { 'P.Crit': 90, Accuracy: 10 },
      lb5: { 'P.Crit': 90, Accuracy: 10 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Fire', effect: 'Fire Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2053,
    name: 'Estiriel',
    rarity: 'SSR',
    element: 'Wind',
    weapon: 'Slash',
    supportStats: {
      lb0: { MDEF: 30 },
      lb1: { MDEF: 60, DEF: 30 },
      lb2: { MDEF: 90, DEF: 60 },
      lb3: { MDEF: 120, DEF: 90 },
      lb4: { MDEF: 120, DEF: 120 },
      lb5: { MDEF: 120, DEF: 120 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Slash Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2041,
    name: 'Magical Princess Luceria',
    rarity: 'SSR',
    element: 'Holy',
    weapon: 'Throw',
    supportStats: {
      lb0: { MDEF: 30 },
      lb1: { MDEF: 60, DEF: 30 },
      lb2: { MDEF: 90, DEF: 60 },
      lb3: { MDEF: 120, DEF: 90 },
      lb4: { MDEF: 120, DEF: 120 },
      lb5: { MDEF: 120, DEF: 120 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2071,
    name: 'Kaguya',
    rarity: 'SSR',
    element: 'Dark',
    weapon: 'Shot',
    supportStats: {
      lb0: { MATK: 80 },
      lb1: { MATK: 120, Accuracy: 7 },
      lb2: { MATK: 160, Accuracy: 8 },
      lb3: { MATK: 200, Accuracy: 9 },
      lb4: { MATK: 200, Accuracy: 10 },
      lb5: { MATK: 200, Accuracy: 10 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2095,
    name: 'Queen of Pies and Cookies Aphrodia',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Strike',
    supportStats: {
      lb0: { ATK: 80 },
      lb1: { ATK: 120, 'P.Crit': 45 },
      lb2: { ATK: 160, 'P.Crit': 60 },
      lb3: { ATK: 200, 'P.Crit': 75 },
      lb4: { ATK: 200, 'P.Crit': 90 },
      lb5: { ATK: 200, 'P.Crit': 90 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2096,
    name: 'Magical Holy Night Festival Kaguya',
    rarity: 'SSR',
    element: 'Mind',
    weapon: 'Pierce',
    supportStats: {
      lb0: { HP: 500 },
      lb1: { HP: 1000, Block: 5 },
      lb2: { HP: 1500, Block: 6 },
      lb3: { HP: 2000, Block: 7 },
      lb4: { HP: 2000, Block: 8 },
      lb5: { HP: 2000, Block: 8 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  // ============ SR Characters ============
  {
    id: 2029,
    name: 'Artemis',
    rarity: 'SR',
    element: 'Wind',
    weapon: 'Shot',
    supportStats: {
      lb0: { 'P.Crit': 30 },
      lb1: { 'P.Crit': 40, Block: 3 },
      lb2: { 'P.Crit': 50, Block: 4 },
      lb3: { 'P.Crit': 60, Block: 5 },
      lb4: { 'P.Crit': 60, Block: 5 },
      lb5: { 'P.Crit': 60, Block: 5 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Wind', effect: 'Wind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Shot Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2033,
    name: 'Venus',
    rarity: 'SR',
    element: 'Holy',
    weapon: 'Throw',
    supportStats: {
      lb0: { HP: 300 },
      lb1: { HP: 700, Accuracy: 5 },
      lb2: { HP: 1100, Accuracy: 6 },
      lb3: { HP: 1500, Accuracy: 7 },
      lb4: { HP: 1500, Accuracy: 7 },
      lb5: { HP: 1500, Accuracy: 7 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2035,
    name: 'Liesel',
    rarity: 'SR',
    element: 'Mind',
    weapon: 'Strike',
    supportStats: {
      lb0: { MATK: 50 },
      lb1: { MATK: 80, HP: 300 },
      lb2: { MATK: 110, HP: 700 },
      lb3: { MATK: 140, HP: 1100 },
      lb4: { MATK: 140, HP: 1100 },
      lb5: { MATK: 140, HP: 1100 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Mind', effect: 'Mind Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Strike Inspiration', effect: 'Block', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  },
  {
    id: 2070,
    name: 'Festive Costume Natasha',
    rarity: 'SR',
    element: 'Holy',
    weapon: 'Pierce',
    supportStats: {
      lb0: { DEF: 20 },
      lb1: { DEF: 40, Block: 3 },
      lb2: { DEF: 60, Block: 4 },
      lb3: { DEF: 80, Block: 5 },
      lb4: { DEF: 80, Block: 6 },
      lb5: { DEF: 80, Block: 6 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Holy', effect: 'Holy Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Pierce Inspiration', effect: 'Action Speed', values: { members2: '+2%', members4: '+4%', members6: '+6%' } }
    }
  },
  {
    id: 2097,
    name: 'Holy Night Succubus Yu Rima Elca',
    rarity: 'SR',
    element: 'Dark',
    weapon: 'Throw',
    supportStats: {
      lb0: { MATK: 50 },
      lb1: { MATK: 80, HP: 300 },
      lb2: { MATK: 110, HP: 700 },
      lb3: { MATK: 140, HP: 1100 },
      lb4: { MATK: 140, HP: 1100 },
      lb5: { MATK: 140, HP: 1100 }
    },
    supportBonus: {
      blessing: { name: 'Blessing of Dark', effect: 'Dark Type ATK', values: { members2: '+5%', members4: '+10%', members6: '+15%' } },
      inspiration: { name: 'Throw Inspiration', effect: 'Accuracy', values: { members2: '+3', members4: '+6', members6: '+10' } }
    }
  }
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
    'P.Crit': 'P.Crit',
    'M.Crit': 'M.Crit'
  };
  return statNames[stat] || stat;
}
