// Silver and Blood Tier List Data
// Last Updated: August 2025
// Based on current meta and character performance

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
  lastUpdated: '2025-08-18',
  description:
    'Things can changes fast, with new character. but as today I feel this what stand out.',
  tiers: {
    SSS: [{ name: 'Timeless Aiona' }],
    SS: [
      { name: 'Acappella' },
      { name: 'Van Helsing' },
      { name: 'Sirene' },
      { name: 'Fleeting Bella' },
    ],
    S: [
      { name: 'Lamia' },
      { name: 'Starry-Eyed Aiona' },
      { name: 'Friedrich' },
      { name: 'Bella' },
      { name: 'Theophane' },
      { name: 'Ami' },
      { name: 'Dalcarlo' },
      { name: 'Transcendent Hati' },
      { name: 'Transcendent Ami' },
      { name: 'Limine' },
      { name: 'Incendiary Agares' },
      { name: 'Transcendent Noah' },
      { name: 'Seth' },
      { name: 'Quinn' },
    ],
    A: [
      { name: 'Tris' },
      { name: 'Selena' },
      { name: 'Joan' },
      { name: 'Nicole' },
      { name: 'Augustine' },
      { name: 'Darcias' },
      { name: 'Agares' },
      { name: 'Edina' },
      { name: 'Spectral Gilrain' },
      { name: 'Gilrain' },
      { name: 'Thibault' },
      { name: 'Hati' },
      { name: 'Ressa' },
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
  lastUpdated: '2025-08-18',
  description:
    'it was quite hard to pick between S & A. choosing PVP unit quite hard because things change fast !.',
  tiers: {
    SSS: [{ name: 'Timeless Aiona' }],
    SS: [
      { name: 'Lorelei' },
      { name: 'Bella' },
      { name: 'Transcendent Ami' },
      { name: 'Fleeting Bella' },
      { name: 'Starry-Eyed Aiona' },
      { name: 'Augustine' },
      { name: 'Acappella' },
      { name: 'Quinn' },
    ],
    S: [
      { name: 'Hati' },
      { name: 'Lamia' },
      { name: 'Nicole' },
      { name: 'Sirene' },
      { name: 'Seth' },
      { name: 'Theophane' },
      { name: 'Limine' },
      { name: 'Friedrich' },
      { name: 'Spectral Gilrain' },
      { name: 'Incendiary Agares' },
      { name: 'Van Helsing' },
      { name: 'Dalcarlo' },
      { name: 'Transcendent Noah' },
      { name: 'Yggdrasill' },
      { name: 'Ami' },
      { name: 'Gilrain' },
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
      { name: 'Transcendent Hati' },
      { name: 'Joan' },
      { name: 'Darcias' },
      { name: 'Cecia' },
    ],
    Situational: [
      { name: 'Jinxed Selena' },
      { name: 'Mass' },
      { name: 'Ottavia' },
      { name: 'Pavana' },
    ],
  },
};

// Clan Hunt Tier List
export const CLAN_HUNT_TIER_LIST = {
  name: 'Clan Hunt Tier List',
  lastUpdated: '2025-08-18',
  description:
    'Its really hard to build this tier list, the clan hunt only we had 1 time and there is quite bit of opinions. I did my best !!!.',
  tiers: {
    SSS: [{ name: 'Timeless Aiona' }],
    SS: [
      { name: 'Acappella' },
      { name: 'Transcendent Ami' },
      { name: 'Joan' },
      { name: 'Lorelei' },
      { name: 'Pavana' },
      { name: 'Theophane' },
      { name: 'Darcias' },
      { name: 'Transcendent Hati' },
      { name: 'Agares' },
      { name: 'Seth' },
      { name: 'Starry-Eyed Aiona' },
      { name: 'Dalcarlo' },
      { name: 'Fleeting Bella' },
      { name: 'Van Helsing' },
      { name: 'Sirene' },
      { name: 'Quinn' },
    ],
    S: [
      { name: 'Lamia' },
      { name: 'Cecia' },
      { name: 'Edina' },
      { name: 'Augustine' },
      { name: 'Transcendent Noah' },
      { name: 'Limine' },
      { name: 'Hati' },
      { name: 'Gilrain' },
      { name: 'Yggdrasill' },
      { name: 'Tris' },
      { name: 'Selena' },
      { name: 'Nicole' },
    ],
    A: [
      { name: 'Bella' },
      { name: 'Thibault' },
      { name: 'Cain' },
      { name: 'Spectral Gilrain' },
      { name: 'Piera' },
      { name: 'Ami' },
      { name: 'Incendiary Agares' },
      { name: 'Friedrich' },
      { name: 'Ressa' },
    ],
    Situational: [{ name: 'Jinxed Selena' }, { name: 'Ottavia' }, { name: 'Mass' }],
  },
};

// Boss Raids Tier List
export const BOSS_RAIDS_TIER_LIST = {
  name: 'Boss Raids Tier List',
  lastUpdated: '2025-08-18',
  description:
    'Some Boss has different machines, but overall this tier list should cover the majority of them.',
  tiers: {
    SSS: [{ name: 'Timeless Aiona' }],
    SS: [
      { name: 'Starry-Eyed Aiona' },
      { name: 'Acappella' },
      { name: 'Fleeting Bella' },
      { name: 'Sirene' },
      { name: 'Van Helsing' },
      { name: 'Transcendent Hati' },
    ],
    S: [
      { name: 'Lamia' },
      { name: 'Agares' },
      { name: 'Bella' },
      { name: 'Thibault' },
      { name: 'Theophane' },
      { name: 'Ami' },
      { name: 'Seth' },
      { name: 'Transcendent Ami' },
      { name: 'Transcendent Noah' },
      { name: 'Darcias' },
      { name: 'Yggdrasill' },
      { name: 'Ressa' },
      { name: 'Incendiary Agares' },
      { name: 'Dalcarlo' },
      { name: 'Spectral Gilrain' },
      { name: 'Friedrich' },
      { name: 'Gilrain' },
      { name: 'Quinn' },
    ],
    A: [
      { name: 'Cain' },
      { name: 'Selena' },
      { name: 'Piera' },
      { name: 'Tris' },
      { name: 'Limine' },
      { name: 'Hati' },
      { name: 'Augustine' },
      { name: 'Nicole' },
      { name: 'Edina' },
      { name: 'Cecia' },
      { name: 'Joan' },
    ],
    Situational: [
      { name: 'Jinxed Selena' },
      { name: 'Lorelei' },
      { name: 'Ottavia' },
      { name: 'Mass' },
      { name: 'Pavana' },
    ],
  },
};

// New Player Tier List (F2P Friendly)
export const NEW_PLAYER_TIER_LIST = {
  name: 'New Player / F2P Tier List',
  lastUpdated: '2025-08-18',
  description:
    'try to get Timeless Aiona and pair her with fleeting bella!, These what you should aim at .',
  tiers: {
    SSS: [
      { name: 'Timeless Aiona' },
      { name: 'Acappella' },
      { name: 'Starry-Eyed Aiona' },
      { name: 'Bella' },
      { name: 'Ami' },
      { name: 'Fleeting Bella' },
    ],
    SS: [
      { name: 'Van Helsing' },
      { name: 'Sirene' },
      { name: 'Seth' },
      { name: 'Transcendent Hati' },
      { name: 'Transcendent Ami' },
    ],
    S: [
      { name: 'Dalcarlo' },
      { name: 'Agares' },
      { name: 'Darcias' },
      { name: 'Lamia' },
      { name: 'Yggdrasill' },
      { name: 'Quinn' },
    ],
    A: [
      { name: 'Ressa' },
      { name: 'Theophane' },
      { name: 'Thibault' },
      { name: 'Friedrich' },
      { name: 'Spectral Gilrain' },
      { name: 'Gilrain' },
      { name: 'Augustine' },
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

// Export all tier lists
export const ALL_TIER_LISTS = {
  pve: PVE_TIER_LIST,
  pvp: PVP_TIER_LIST,
  'clan-hunt': CLAN_HUNT_TIER_LIST,
  'boss-raids': BOSS_RAIDS_TIER_LIST,
  'new-player': NEW_PLAYER_TIER_LIST,
};
