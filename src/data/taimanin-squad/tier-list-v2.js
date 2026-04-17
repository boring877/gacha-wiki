// Taimanin Squad Tier List v2
// Unified tier list organized by element (Power/Technique/Agility/Balance)
// Only includes released SR, SR+, and SSR characters with actual art assets
// Tiers merged from previous mob-clear + boss rankings into a single overall rating

import { getAllCharacters } from './characters.js';

export const TIER_BG = '#4A3B6B';

export const TIER_DEFINITIONS = {
  SSS: { label: 'SSS', description: 'Best in class, must-have units', color: '#FFD700' },
  SS: { label: 'SS', description: 'Excellent units, highly recommended', color: '#C084FC' },
  S: { label: 'S', description: 'Great units, very useful', color: '#60A5FA' },
  A: { label: 'A', description: 'Good units, solid choices', color: '#34D399' },
  B: { label: 'B', description: 'Average units, situational use', color: '#9CA3AF' },
};

export const TIER_ORDER = ['SSS', 'SS', 'S', 'A', 'B'];

export const ELEMENTS = {
  Power: { id: 'power', name: 'Power', color: '#EF4444' },
  Technique: { id: 'technique', name: 'Technique', color: '#3B82F6' },
  Agility: { id: 'agility', name: 'Agility', color: '#10B981' },
  Balance: { id: 'balance', name: 'Balance', color: '#F59E0B' },
};

// IDs of characters with released art assets
export const RELEASED_IDS = new Set([171,153,46,49,11,12,124,20,42,77,84,33,27,218,149,208,191,192,302,79,224,86,173,185,129,155,157,162,160,156,158,161,159,183,182,195,211,217,211,202,174,227,195,228,196,197,229,76,179,178,177,180,181,212,190,189,122,66,48,100,15,165,163,164,30,220,232,191,233,192,147,201,68,69,65,45,6,111,54,108,47,28,106,189,190,146,200,127,176,119,220,221,222,223,39,64,113,151,152,37,150,296,285,271,1,5,2,91,62,167,166,232,233,231,230,25,118,115,154,112,82,123,300,31,175,10,114,43,107,40,14,117,22,16,29,120,70,95,75,72,50,67,63,83,78,104,90,85,103,13,7,52,53,217,218,197,198,199,198,199,36,121,105,210,209,128,55,26,23,139,140,143,141,142,94,24,57,137,134,133,132,131,135,138,136,130,102,102,196,229,170,301,125,203,219,207,101,209,210,35,148,59,227,9,21,273,51,17,3,110,44,214,215,216,215,214,216,71,18,169,168,81,230,231,74,73,228,226,87,60,193,193,126,187,188,186,32,80,221,222,998,999,172,116,186,187,188,225,225,98,99,145,144,213,184,61,97,4,19,58,41,8,206,204,205,206,204,205]);

// Merged tier rankings from mob-clear + boss (best tier across both)
// Unranked characters default to 'A'
const CHARACTER_TIERS = {
  // Power
  'Mizuki Yukikaze': 'SSS',
  'Anemone': 'SSS',
  'Minasaki': 'SSS',
  'Kichi Azusa': 'SS',
  'Yatsu Murasaki': 'SS',
  'Igawa Asagi': 'SS',
  'Oboro': 'SS',
  'Kamimura Maika': 'SS',
  'Kousaka Shizuru': 'S',
  'Sanada Homura': 'S',
  'Nisha Gaiza': 'S',
  'Oomiya Mizuki': 'S',
  'Igawa Senshu': 'S',
  'Renee': 'S',
  'Iska': 'S',
  'Tina Worrell': 'S',
  'Fuuma Amane': 'A',
  'Noah Brown': 'A',
  'Hiiragi Fuyumi': 'A',
  'Fuuma Aki': 'A',
  'Furfur': 'A',
  'Kiryu Mikoto': 'A',
  'Yamata-no-Orochi': 'A',
  'Kuonji R. Spica': 'A',
  'Tekkain Koharu': 'A',
  'Donna Burroughs': 'A',
  'Fuuma Mawari': 'A',
  'Narita Akina': 'A',
  'Alectra': 'A',
  'Orc Warlord': 'A',
  'Cult Armed Priest': 'A',
  'Hasuma Reiko': 'A',
  'XPS-12C Marrow': 'B',
  'Onigumo Saburo': 'B',
  'Watarase Tsumugi': 'B',
  // Technique
  'Nanase Mai': 'SSS',
  'Ingrid': 'SS',
  'Felicia': 'SS',
  'Fuuma Saika': 'SS',
  'Rakshasa': 'SS',
  'Aina Winchester': 'S',
  'Masked Taimanin': 'S',
  'Yuri Hisui': 'S',
  'Shinohara Mari': 'S',
  'Hiyama Kirin': 'S',
  'Echizen Saya': 'S',
  'Mirabell Bell': 'A',
  'Homare Nao': 'A',
  'Hasegawa Fuuki': 'A',
  'Fuuma Kotaro': 'A',
  'Uehara Shikanosuke': 'A',
  'Kuroki Shizuku': 'A',
  'Yao Bikuni': 'A',
  'Fuuma Yukina': 'A',
  'Shishimura Denji': 'A',
  'Crackle': 'A',
  'Merriam': 'B',
  'Yuri': 'B',
  'Shirase Yuzuriha': 'B',
  'Shishimura Koro': 'B',
  'Major': 'B',
  'Anje': 'B',
  'Fuuma Hoensai': 'B',
  'Kannagi Kaede': 'B',
  'Inokura Suzuka': 'B',
  'Kugasa Hikage': 'B',
  'Kagero': 'B',
  'Orc Bodyguard': 'B',
  'Aello': 'B',
  // Balance
  'Edwin Black': 'SS',
  'Eleonor': 'SS',
  'Su Jinglei': 'SS',
  'Momochi Toyo': 'SS',
  'Pamela Jäger': 'S',
  'Onisaki Kirara': 'S',
  'Emily Simmons': 'S',
  'Momochi Nagi': 'S',
  'Hayami Uzuki': 'S',
  'Shido Rinka': 'A',
  'Cecilia Cello': 'A',
  // Agility
  'Igawa Sakura': 'SSS',
  'Mizuki Shiranui': 'SSS',
  'Koukawa Asuka': 'SSS',
  'Shinganji Kurenai': 'SSS',
  'Fuuma Tokiko': 'SSS',
  'Touge Kinki': 'SSS',
  'Snake Lady': 'SS',
  'Akiyama Rinko': 'SS',
  'Amamiya Shisui': 'SS',
  'Hoshino Mitsuki': 'S',
  'Yuphie & Sophie': 'S',
  'Saya NEO': 'S',
  'Tsubaki Onkyouki': 'S',
  'Aishu Hebiko': 'S',
  'Makishima Ayame': 'S',
  'Commodus': 'A',
  'Kanezaki Jubei': 'A',
  'Igawa Sakuya': 'A',
  'Shirayuki': 'A',
  'Yatsu Kuro': 'A',
  'Akiyama Tatsuro': 'A',
  'Amadare Natsume': 'A',
  'Kannazuki Sora': 'A',
  'Lydia Baretta': 'A',
  'Fujibayashi Yuno': 'A',
  'Lilim': 'A',
  'Tekkain Kaworu': 'A',
  'Laetitia Bellmer': 'A',
  'Clear Lovell': 'A',
  'Torajiro': 'A',
  'Ise Nodoka': 'A',
  'Kikuchi Aoi': 'A',
  'Izumo Tsuru': 'B',
  'Kasahara Tatsumi': 'B',
  'Kanaloa': 'B',
};

function getCharacterTier(charName) {
  return CHARACTER_TIERS[charName] || 'A';
}

function isReleased(charId) {
  return RELEASED_IDS.has(charId);
}

export function buildTierList() {
  const result = {};

  for (const [elementName, elementDef] of Object.entries(ELEMENTS)) {
    const chars = getAllCharacters().filter(c =>
      c.element === elementName &&
      ['SSR', 'SR+', 'SR'].includes(c.rarity) &&
      isReleased(c.id)
    );

    const tiers = {};
    for (const tier of TIER_ORDER) {
      tiers[tier] = [];
    }

    for (const char of chars) {
      const charName = char.names?.english || char.name;
      const tier = getCharacterTier(charName);
      if (tier === 'A' && !(CHARACTER_TIERS.hasOwnProperty(charName))) continue;
      tiers[tier].push(char);
    }

    result[elementName] = {
      ...elementDef,
      tiers,
      total: chars.length,
    };
  }

  return result;
}

export function getTotalReleasedCount() {
  return getAllCharacters().filter(c =>
    ['SSR', 'SR+', 'SR'].includes(c.rarity) && isReleased(c.id)
  ).length;
}
