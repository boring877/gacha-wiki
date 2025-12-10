// Zone Nova Tier List Data
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
  lastUpdated: '2025-12-10',
  description: 'Character rankings for PvE (story, events).',
  tiers: {
    SSS: [
      { name: 'Guinevere' },
      { name: 'Athena' },
      { name: 'Freya' },
      { name: 'Hela' },
      { name: 'Gaia' },
      { name: 'Nina' },
      { name: 'Morgan Le Fay' },
    ],
    SS: [
      { name: 'Yuis' },
      { name: 'Thor' },
      { name: 'Odin' },
      { name: 'Freye' },
      { name: 'Chiya' },
      { name: 'Apollo' },
      { name: 'Leviathan' },
      { name: 'Naiya' },
      { name: 'Penny' },
      { name: 'Mordred' },
      { name: 'Hera' },
      { name: 'Afrodite' },
      { name: 'Jeanne D Arc' },
      { name: 'Lily' },
      { name: 'Apep' },
    ],
    S: [
      { name: 'Shu' },
      { name: 'Zashiki-warashi' },
      { name: 'Kela' },
      { name: 'Lancelot' },
      { name: 'Merlin' },
      { name: 'Cleopatra' },
      { name: 'Shanna' },
      { name: 'Arthur' },
      { name: 'Lyra' },
      { name: 'Horus' },
      { name: 'Lavinia' },
    ],
    A: [
      { name: 'Tefnut' },
      { name: 'Greed Mammon' },
      { name: 'Anubis' },
      { name: 'Artemis' },
      { name: 'Snow Girl' },
      { name: 'Bastet' },
      { name: 'Rose' },
    ],
    Situational: [
      { name: 'Nini' },
      { name: 'Loki' },
      { name: 'Belphegar' },
      { name: 'Ibaraki-doji' },
    ],
  },
};

// PvP Arena Tier List
export const PVP_TIER_LIST = {
  name: 'PvP Arena Tier List',
  lastUpdated: '2025-12-10',
  description: 'PvP character rankings.',
  tiers: {
    SSS: [{ name: 'Guinevere' }, { name: 'Lily' }, { name: 'Nina' }, { name: 'Morgan Le Fay' }],
    SS: [
      { name: 'Odin' },
      { name: 'Freye' },
      { name: 'Freya' },
      { name: 'Gaia' },
      { name: 'Athena' },
      { name: 'Jeanne D Arc' },
      { name: 'Artemis' },
      { name: 'Apollo' },
      { name: 'Yuis' },
      { name: 'Penny' },
      { name: 'Horus' },
      { name: 'Cleopatra' },
      { name: 'Naiya' },
      { name: 'Thor' },
      { name: 'Chiya' },
      { name: 'Lyra' },
      { name: 'Hela' },
    ],
    S: [
      { name: 'Arthur' },
      { name: 'Merlin' },
      { name: 'Lancelot' },
      { name: 'Snow Girl' },
      { name: 'Bastet' },
      { name: 'Anubis' },
      { name: 'Greed Mammon' },
      { name: 'Afrodite' },
      { name: 'Shu' },
      { name: 'Hera' },
      { name: 'Kela' },
      { name: 'Shanna' },
      { name: 'Zashiki-warashi' },
      { name: 'Lavinia' },
      { name: 'Apep' },
    ],
    A: [{ name: 'Tefnut' }, { name: 'Rose' }, { name: 'Mordred' }, { name: 'Leviathan' }],
    Situational: [
      { name: 'Loki' },
      { name: 'Belphegar' },
      { name: 'Nini' },
      { name: 'Ibaraki-doji' },
    ],
  },
};

// Rift Content Tier List
export const RIFT_TIER_LIST = {
  name: 'Space-Time Rift Tier List',
  lastUpdated: '2025-12-10',
  description:
    'Character tiers for Rift content. Make sure to use "Map Buff" when building your team.',
  tiers: {
    SSS: [
      { name: 'Guinevere' },
      { name: 'Athena' },
      { name: 'Apollo' },
      { name: 'Yuis' },
      { name: 'Odin' },
      { name: 'Thor' },
      { name: 'Freya' },
      { name: 'Hela' },
      { name: 'Gaia' },
      { name: 'Nina' },
      { name: 'Morgan Le Fay' },
    ],
    SS: [
      { name: 'Freye' },
      { name: 'Jeanne D Arc' },
      { name: 'Penny' },
      { name: 'Chiya' },
      { name: 'Horus' },
      { name: 'Afrodite' },
      { name: 'Hera' },
      { name: 'Merlin' },
      { name: 'Leviathan' },
      { name: 'Mordred' },
      { name: 'Kela' },
      { name: 'Naiya' },
      { name: 'Anubis' },
      { name: 'Lily' },
      { name: 'Apep' },
    ],
    S: [
      { name: 'Shu' },
      { name: 'Shanna' },
      { name: 'Zashiki-warashi' },
      { name: 'Lancelot' },
      { name: 'Lyra' },
      { name: 'Arthur' },
      { name: 'Cleopatra' },
      { name: 'Lavinia' },
    ],
    A: [
      { name: 'Tefnut' },
      { name: 'Rose' },
      { name: 'Greed Mammon' },
      { name: 'Bastet' },
      { name: 'Artemis' },
      { name: 'Snow Girl' },
    ],
    Situational: [
      { name: 'Loki' },
      { name: 'Belphegar' },
      { name: 'Nini' },
      { name: 'Ibaraki-doji' },
    ],
  },
};

// Guild Raid Tier List
export const GUILD_RAID_TIER_LIST = {
  name: 'Guild Raid Tier List',
  lastUpdated: '2025-12-10',
  description:
    'Characters for Guild Raid bosses and scoring. You do not need healers or tanks early on.',
  tiers: {
    SSS: [
      { name: 'Guinevere' },
      { name: 'Athena' },
      { name: 'Apollo' },
      { name: 'Yuis' },
      { name: 'Odin' },
      { name: 'Afrodite' },
      { name: 'Freya' },
      { name: 'Hela' },
      { name: 'Nina' },
      { name: 'Morgan Le Fay' },
    ],
    SS: [
      { name: 'Freye' },
      { name: 'Hera' },
      { name: 'Gaia' },
      { name: 'Jeanne D Arc' },
      { name: 'Horus' },
      { name: 'Leviathan' },
      { name: 'Naiya' },
      { name: 'Thor' },
      { name: 'Penny' },
      { name: 'Shu' },
      { name: 'Zashiki-warashi' },
      { name: 'Mordred' },
      { name: 'Cleopatra' },
      { name: 'Merlin' },
      { name: 'Shanna' },
      { name: 'Lavinia' },
    ],
    S: [
      { name: 'Tefnut' },
      { name: 'Chiya' },
      { name: 'Lyra' },
      { name: 'Lancelot' },
      { name: 'Arthur' },
      { name: 'Kela' },
      { name: 'Anubis' },
      { name: 'Lily' },
      { name: 'Apep' },
    ],
    A: [
      { name: 'Rose' },
      { name: 'Greed Mammon' },
      { name: 'Bastet' },
      { name: 'Artemis' },
      { name: 'Snow Girl' },
    ],
    Situational: [
      { name: 'Loki' },
      { name: 'Belphegar' },
      { name: 'Nini' },
      { name: 'Ibaraki-doji' },
    ],
  },
};

// New Player Tier List (F2P Friendly)
export const NEW_PLAYER_TIER_LIST = {
  name: 'New Player / F2P Tier List',
  lastUpdated: '2025-10-18',
  description:
    'You can get any character from this list from day 1. This tier list focuses on accessibility for new players. The main problem early on is finding good damage dealers.',
  tiers: {
    SSS: [
      { name: 'Naiya' },
      { name: 'Apollo' },
      { name: 'Afrodite' },
      { name: 'Leviathan' },
      { name: 'Mordred' },
      { name: 'Penny' },
    ],
    SS: [
      { name: 'Jeanne D Arc' },
      { name: 'Kela' },
      { name: 'Shu' },
      { name: 'Shanna' },
      { name: 'Lancelot' },
      { name: 'Zashiki-warashi' },
      { name: 'Horus' },
      { name: 'Hera' },
    ],
    S: [{ name: 'Snow Girl' }, { name: 'Merlin' }, { name: 'Arthur' }, { name: 'Greed Mammon' }],
    A: [
      { name: 'Tefnut' },
      { name: 'Bastet' },
      { name: 'Artemis' },
      { name: 'Lyra' },
      { name: 'Anubis' },
      { name: 'Rose' },
    ],
    Situational: [{ name: 'Loki' }, { name: 'Belphegar' }, { name: 'Nini' }],
  },
};

// Export all tier lists
export const ALL_TIER_LISTS = {
  pve: PVE_TIER_LIST,
  pvp: PVP_TIER_LIST,
  rift: RIFT_TIER_LIST,
  'guild-raid': GUILD_RAID_TIER_LIST,
  'new-player': NEW_PLAYER_TIER_LIST,
};

// Get character tier across all lists
export function getCharacterTiers(characterName) {
  const tiers = {};

  Object.entries(ALL_TIER_LISTS).forEach(([listType, tierList]) => {
    Object.entries(tierList.tiers).forEach(([tier, characters]) => {
      const found = characters.find(c => c.name === characterName);
      if (found) {
        tiers[listType] = {
          tier,
          listName: tierList.name,
        };
      }
    });
  });

  return tiers;
}

// Get all characters in a specific tier
export function getCharactersByTier(tierLevel, listType = 'pve') {
  const tierList = ALL_TIER_LISTS[listType];
  if (!tierList || !tierList.tiers[tierLevel]) return [];

  return tierList.tiers[tierLevel];
}

// Tier list changelog
export const TIER_LIST_CHANGELOG = [
  {
    date: '2025-11-25',
    changes: [
      'Morgan Le Fay added to SSS tier across all game modes',
      'New Holy buffer provides massive ATK/DEF buffs and damage reduction',
      'Ultimate cost of only 3 energy enables frequent buff cycles',
      'Stat transfer mechanic makes her versatile for all team compositions',
      'APEP added: SS in PvE, S in PvP, SS in Rifts, S in Guild Raid',
    ],
  },
  {
    date: '2025-08-05',
    changes: [
      'Initial tier list creation',
      'Thor moved to S+ tier across all lists after buff',
      'Athena promoted to S+ in PvE for versatility',
      'Gaia remains top tier healer',
      'Cleopatra dominates AOE content',
    ],
  },
];
