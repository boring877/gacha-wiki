// Silver and Blood Tier List Data
// Last Updated: September 2025
// Based on current meta and character performance
//
// ⚠️  REMINDER: When adding/moving characters in tier lists below,
//     remember to update ALL "lastUpdated" fields to today's date (YYYY-MM-DD)
//     Search for "lastUpdated:" and update each one manually

export const TIER_DEFINITIONS = {
  SSS: {
    label: 'SSS',
    description:
      'They are a team by themselves. They work everywhere and do not need any help. Just broken!',
  },
  SS: {
    label: 'SS',
    description: 'They do well alone but need a team to help them become broken.',
  },
  S: {
    label: 'S',
    description: 'Good enough alone, even better with a team.',
  },
  A: {
    label: 'A',
    description: 'Useless alone but good enough with a team.',
  },
  Situational: {
    label: 'Situational',
    description:
      'Some characters can have insane debuffs or potential, but everything else about them is bad.',
  },
};

// Overall PvE Tier List - General content performance
export const PVE_TIER_LIST = {
  name: 'Overall PvE Tier List',
  lastUpdated: '2026-01-22',
  description:
    'Things can changes fast, with new character. but as today I feel this what stand out.',
  tiers: {
    SSS: [{ name: 'Timeless Aiona' }, { name: 'Ethereal Joan' }, { name: 'Letitia' }, { name: 'Livian' }, { name: 'Alexi' }, { name: 'Seraphina' }, { name: 'Resurgent Setti' }, { name: 'Transcendent Jestel' }, { name: 'Blooming Empousa' }],
    SS: [
      { name: 'Acappella' },
      { name: 'Van Helsing' },
      { name: 'Sirene' },
      { name: 'Fleeting Bella' },
      { name: 'Valora' },
      { name: 'Fanny' },
      { name: 'Albrecht' },
      { name: 'Alene' },
      { name: 'Dalcarlo' },
      { name: 'Seth' },
      { name: 'Lucille' },
      { name: 'Transcendent Hati' },
      { name: 'Agares' },
      { name: 'Ressa' },
      { name: 'Quinn' },
    ],
    S: [
      { name: 'Lamia' },
      { name: 'Starry-Eyed Aiona' },
      { name: 'Friedrich' },
      { name: 'Bella' },
      { name: 'Theophane' },
      { name: 'Ami' },
      { name: 'Transcendent Ami' },
      { name: 'Limine' },
      { name: 'Incendiary Agares' },
      { name: 'Transcendent Noah' },
      { name: 'Regina' },
      { name: 'Genevieve' },
      { name: 'Agnes' },
      { name: 'Ressa' },
      { name: 'Julius' },
      { name: 'Stella' },
      { name: 'Darcias' },
    ],
    A: [
      { name: 'Tris' },
      { name: 'Selena' },
      { name: 'Joan' },
      { name: 'Nicole' },
      { name: 'Augustine' },
      { name: 'Edina' },
      { name: 'Spectral Gilrain' },
      { name: 'Gilrain' },
      { name: 'Thibault' },
      { name: 'Hati' },
      { name: 'Piera' },
      { name: 'Cecia' },
      { name: 'Cain' },
      { name: 'Yggdrasill' },
    ],
    Situational: [
      { name: 'Jinxed Selena' },
      { name: 'Lorelei' },
      { name: 'Mass' },
      { name: 'Pavana' },
      { name: 'Ottavia' },
    ],
  },
};

// PvP Arena Tier List
export const PVP_TIER_LIST = {
  name: 'PvP Arena Tier List',
  lastUpdated: '2026-01-22',
  description:
    'it was quite hard to pick between S & A. choosing PVP unit quite hard because things change fast !.',
  tiers: {
    SSS: [{ name: 'Timeless Aiona' }, { name: 'Ethereal Joan' }, { name: 'Letitia' }, { name: 'Livian' }, { name: 'Alexi' }, { name: 'Seraphina' }, { name: 'Lucille' }, { name: 'Resurgent Setti' }, { name: 'Transcendent Jestel' }, { name: 'Blooming Empousa' }],
    SS: [
      { name: 'Albrecht' },
      { name: 'Lorelei' },
      { name: 'Bella' },
      { name: 'Transcendent Ami' },
      { name: 'Fleeting Bella' },
      { name: 'Starry-Eyed Aiona' },
      { name: 'Augustine' },
      { name: 'Acappella' },
      { name: 'Quinn' },
      { name: 'Agnes' },
      { name: 'Valora' },
      { name: 'Stella' },
      { name: 'Fanny' },
      { name: 'Alene' },
      { name: 'Dalcarlo' },
      { name: 'Seth' },
      { name: 'Van Helsing' },
      { name: 'Transcendent Hati' },
    ],
    S: [
      { name: 'Hati' },
      { name: 'Lamia' },
      { name: 'Nicole' },
      { name: 'Sirene' },
      { name: 'Theophane' },
      { name: 'Limine' },
      { name: 'Friedrich' },
      { name: 'Spectral Gilrain' },
      { name: 'Incendiary Agares' },
      { name: 'Transcendent Noah' },
      { name: 'Yggdrasill' },
      { name: 'Ami' },
      { name: 'Gilrain' },
      { name: 'Julius' },
      { name: 'Genevieve' },
    ],
    A: [
      { name: 'Thibault' },
      { name: 'Cain' },
      { name: 'Selena' },
      { name: 'Piera' },
      { name: 'Tris' },
      { name: 'Agares' },
      { name: 'Edina' },
      { name: 'Ressa' },
      { name: 'Joan' },
      { name: 'Darcias' },
      { name: 'Cecia' },
      { name: 'Regina' },
    ],
    Situational: [
      { name: 'Jinxed Selena' },
      { name: 'Mass' },
      { name: 'Ottavia' },
      { name: 'Pavana' },
    ],
  },
};


// Export all tier lists
export const ALL_TIER_LISTS = {
  pve: PVE_TIER_LIST,
  pvp: PVP_TIER_LIST,
};
