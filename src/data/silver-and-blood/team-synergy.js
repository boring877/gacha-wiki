// Silver and Blood Team Synergy Data & Utilities
// Centralized team composition management system for Silver and Blood

// Team type constants - adapted for SAB mechanics
export const TEAM_TYPES = {
  CLAN_HUNT: 'clan-hunt',
  BOSS: 'boss',
  MOON_PHASE: 'moon-phase',
  FACTION: 'faction',
  MAP_CLEAR: 'map-clear',
  VOID_SHADOW: 'void-shadow',
  PVP: 'pvp',
};

// Team tier constants
export const TEAM_TIERS = {
  SSS: 'sss',
  SS: 'ss',
  S: 's',
  A: 'a',
  SITUATIONAL: 'situational',
};

// Main teams data array - ready for your actual team data
export const SILVER_AND_BLOOD_TEAMS = [
  {
    id: '1',
    name: 'Windchaser Boss Team',
    type: 'boss',
    tier: 'sss',
    characters: [
      { name: 'Letitia', position: 1 },
      { name: 'Seraphina', position: 2 },
      { name: 'Ressa', position: 3 },
      { name: 'Fleeting Bella', position: 4 },
      { name: 'Acappella', position: 5 },
    ],
    notes: `Make sure you use F.Bella to buff Seraphina and make sure her ultimate is at Lv 10!

Acappella is there to help with Blood Moon recovery!

Ressa helps scale through your teammate's ultimates so you can get Seraphina again, and she increases CRIT DMG taken! She also deals quite a bit of damage.

This build is mostly for Boss content.

Rotation: Start with Acappella and make sure she's always in the first card slot. Wait until Blood Moon 7, then use F.Bella and Seraphina to deal the most damage. Then use Letitia and Ressa - you should be able to get one more Seraphina ultimate before the Blood Moon ends!`,
  },
  {
    id: '2',
    name: 'Windchaser PvE Team',
    type: 'map-clear',
    tier: 'sss',
    characters: [
      { name: 'Letitia', position: 1 },
      { name: 'Van Helsing', position: 2 },
      { name: 'Seraphina', position: 3 },
      { name: 'Fleeting Bella', position: 4, substitute: 'Seth' },
      { name: 'Acappella', position: 5 },
    ],
    notes: `Van Helsing's ultimate clears really well in maps and grind content. He is easy to get and works well with Letitia. You should pair him with F.Bella, but she is limited - if you don't have her, replace her with Seth.

Acappella is a must! Make sure her ultimate is Rank 10 so it's easier to get Blood Moon. Van Helsing needs Blood Moon 6 which is quite high, but once it's active you don't need to do it again!

Rotation: Start with Acappella, wait until Blood Moon 7, then activate F.Bella - you should have enough for Van Helsing!`,
  },
  {
    id: '3',
    name: "Dusk's Devotion Boss Team",
    type: 'boss',
    tier: 'sss',
    characters: [
      { name: 'Alexi', position: 1 },
      { name: 'Livian', position: 2 },
      { name: 'Dalcarlo', position: 3, substitute: 'Alene' },
      { name: 'Fleeting Bella', position: 4 },
      { name: 'Acappella', position: 5 },
    ],
    notes: `You need to put Livian as the first card to show up when you start the map. Using Livian's ultimate will activate your Blood Moon, then use Acappella and wait until Blood Moon 7.

Use F.Bella and match with Alexi, use Dalcarlo, then use Alexi's ultimate for massive damage!

If you don't have Dalcarlo, Alene works as an alternative.`,
  },
  {
    id: '4',
    name: 'Timeless Aiona Void Shadow Team',
    type: 'map-clear',
    tier: 'sss',
    characters: [
      { name: 'Timeless Aiona', position: 1 },
      { name: 'Acappella', position: 2 },
      { name: 'Fleeting Bella', position: 3 },
      { name: 'Sirene', position: 4 },
      { name: 'Albrecht', position: 5 },
    ],
    notes: `This team works well with Timeless Aiona for map clear content. Not very good for boss fights, but great for clearing maps!

Rotation: Start with Acappella, wait until Blood Moon 9, then use F.Bella on Timeless Aiona. Activate Timeless Aiona's ultimate, then use Sirene and Albrecht for their buffs and debuffs.`,
  },
  {
    id: '5',
    name: 'Timeless Aiona + Dusk Team',
    type: 'void-shadow',
    tier: 'sss',
    characters: [
      { name: 'Timeless Aiona', position: 1 },
      { name: 'Acappella', position: 2 },
      { name: 'Fleeting Bella', position: 3, substitute: 'Dalcarlo' },
      { name: 'Livian', position: 4 },
      { name: 'Alexi', position: 5 },
    ],
    notes: `This team is great for Silver Doctrines in Void Shadow! Combines Timeless Aiona with Dusk's Devotion units. Not ideal for boss fights, but excellent for Void Shadow content.

Rotation: Use Livian to activate Blood Moon, then use Acappella. Use F.Bella with Timeless Aiona, then activate Timeless Aiona's ultimate.

If you don't have F.Bella, Dalcarlo works as an alternative.`,
  },
];

// Metadata for filters (will be populated as teams are added)
export const TEAM_METADATA = {
  types: Object.values(TEAM_TYPES),
  tiers: Object.values(TEAM_TIERS),
  totalTeams: SILVER_AND_BLOOD_TEAMS.length,
};

// Utility functions for team data management

// Get teams by type
export function getTeamsByType(type) {
  return SILVER_AND_BLOOD_TEAMS.filter(team => team.type === type);
}

// Get teams by tier
export function getTeamsByTier(tier) {
  return SILVER_AND_BLOOD_TEAMS.filter(team => team.tier === tier);
}

// Filter teams based on multiple criteria
export function filterTeams(teams, { type, tier, searchTerm }) {
  return teams.filter(team => {
    const matchesType = !type || team.type === type;
    const matchesTier = !tier || team.tier === tier;

    const matchesSearch =
      !searchTerm ||
      team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.characters.some(char => char.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      team.notes.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesType && matchesTier && matchesSearch;
  });
}

// Sort teams based on different criteria
export function sortTeams(teams, sortKey, direction = 'asc') {
  return [...teams].sort((a, b) => {
    let valA = a[sortKey];
    let valB = b[sortKey];

    // Handle different data types
    if (typeof valA === 'string') valA = valA.toLowerCase();
    if (typeof valB === 'string') valB = valB.toLowerCase();

    // Special handling for tier (SSS > SS > S > A > Situational)
    if (sortKey === 'tier') {
      const tierOrder = { sss: 5, ss: 4, s: 3, a: 2, situational: 1 };
      valA = tierOrder[valA] || 0;
      valB = tierOrder[valB] || 0;
    }

    if (valA < valB) return direction === 'asc' ? -1 : 1;
    if (valA > valB) return direction === 'asc' ? 1 : -1;
    return 0;
  });
}

// Get team by ID
export function getTeamById(id) {
  return SILVER_AND_BLOOD_TEAMS.find(team => team.id === id);
}

// Get teams containing a specific character
export function getTeamsWithCharacter(characterName) {
  return SILVER_AND_BLOOD_TEAMS.filter(team =>
    team.characters.some(char => char.name.toLowerCase() === characterName.toLowerCase())
  );
}

// Get team type display text
export function getTeamTypeText(type) {
  const typeTexts = {
    [TEAM_TYPES.CLAN_HUNT]: 'Clan Hunt',
    [TEAM_TYPES.BOSS]: 'Boss Fight',
    [TEAM_TYPES.MOON_PHASE]: 'Moon Phase',
    [TEAM_TYPES.FACTION]: 'Faction Synergy',
    [TEAM_TYPES.MAP_CLEAR]: 'Map Clear',
    [TEAM_TYPES.VOID_SHADOW]: 'Void Shadow',
    [TEAM_TYPES.PVP]: 'PvP',
  };
  return typeTexts[type] || 'Unknown';
}

// Get team tier display text
export function getTeamTierText(tier) {
  const tierTexts = {
    [TEAM_TIERS.SSS]: 'SSS',
    [TEAM_TIERS.SS]: 'SS',
    [TEAM_TIERS.S]: 'S',
    [TEAM_TIERS.A]: 'A',
    [TEAM_TIERS.SITUATIONAL]: 'Situational',
  };
  return tierTexts[tier] || 'Unknown';
}

// Truncate text helper for notes display
export function truncateText(text, maxLength = 150, mobileMaxLength = 100) {
  if (!text) return '-';

  // For mobile, use shorter limit
  const limit = window.innerWidth <= 768 ? mobileMaxLength : maxLength;

  if (text.length <= limit) return text;
  return text.substring(0, limit).trim() + '...';
}

// Get teams statistics
export function getTeamStatistics() {
  const stats = {
    total: SILVER_AND_BLOOD_TEAMS.length,
    byType: {},
    byTier: {},
  };

  // Count by type
  Object.values(TEAM_TYPES).forEach(type => {
    stats.byType[type] = getTeamsByType(type).length;
  });

  // Count by tier
  Object.values(TEAM_TIERS).forEach(tier => {
    stats.byTier[tier] = getTeamsByTier(tier).length;
  });

  return stats;
}
