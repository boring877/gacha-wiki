// Silver and Blood Team Synergy Data & Utilities
// Centralized team composition management system for Silver and Blood

// Team type constants - adapted for SAB mechanics
export const TEAM_TYPES = {
  CLAN_HUNT: 'clan-hunt',
  BOSS: 'boss',
  MOON_PHASE: 'moon-phase',
  FACTION: 'faction',
  GENERAL: 'general',
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
    name: 'Full DPS Marksman',
    type: 'general',
    tier: 'ss',
    characters: [
      { name: 'Timeless Aiona', position: 1 },
      { name: 'Acappella', position: 2 },
      { name: 'Sirene', position: 3 },
      { name: 'Fleeting Bella', position: 4 },
      { name: 'Ami', position: 5 },
    ],
    notes:
      'Buffing T.Aiona to Do most DMG. Rotation: Use ultimate - Acap at blood 6 - F.Bella at Blood 10 - Sirene at Blood 9 - then Ami  - T.Aiona - Acap again.',
  },
  {
    id: '2',
    name: 'T.Ami & T.Aiona',
    type: 'general',
    tier: 'ss',
    characters: [
      { name: 'Timeless Aiona', position: 1 },
      { name: 'Acappella', position: 2 },
      { name: 'Sirene', position: 3 },
      { name: 'Fleeting Bella', position: 4 },
      { name: 'Transcendent Ami', position: 5 },
    ],
    notes:
      'FYI, Tank T.AMI have Higher MAG DEF then PHY. Rotation: Acapp at Blood 6 - F.Bella at blood 6 - Siren at blood 6 then T.Aiona and acappella again.  ',
  },
  {
    id: '3',
    name: 'Theophane T.Aiona',
    type: 'general',
    tier: 'ss',
    characters: [
      { name: 'Timeless Aiona', position: 1 },
      { name: 'Acappella', position: 2 },
      { name: 'Sirene', position: 3 },
      { name: 'Fleeting Bella', position: 4 },
      { name: 'Theophane', position: 5 },
    ],
    notes:
      'Theophane has one of Highest phy DEF, and Have Taunt, there is not many unit that that have taunt and insane amount of PHY DEF.',
  },
  {
    id: '4',
    name: 'Friedrich T.Aiona',
    type: 'general',
    tier: 'ss',
    characters: [
      { name: 'Timeless Aiona', position: 1 },
      { name: 'Acappella', position: 2 },
      { name: 'Ami', position: 3 },
      { name: 'Fleeting Bella', position: 4 },
      { name: 'Friedrich', position: 5 },
    ],
    notes:
      ' Fried - Eye for an Eye can be scaled by abusing basic atk speed to be super tanky. Rotation: Acapp - Ami - F.bella - T.Aiona - acapp - Fried - Ami.',
  },
  {
    id: '5',
    name: 'Tanky T.AMi',
    type: 'general',
    tier: 'sss',
    characters: [
      { name: 'Timeless Aiona', position: 1 },
      { name: 'Acappella', position: 2 },
      { name: 'Starry-eyed Aiona', position: 3 },
      { name: 'Fleeting Bella', position: 4 },
      { name: 'Transcendent Ami', position: 5 },
    ],
    notes:
      'very balanced team. R: Acapp - wait blood 6 , F.bella - T.Aiona - T.ami - acapp - wait blood end - S.Aiona -F.Bella - acapp - T.aiona - T.ami.  ',
  },
  {
    id: '6',
    name: 'Tanky T.Aiona',
    type: 'general',
    tier: 'ss',
    characters: [
      { name: 'Timeless Aiona', position: 1 },
      { name: 'Acappella', position: 2 },
      { name: 'Starry-eyed Aiona', position: 3 },
      { name: 'Fleeting Bella', position: 4 },
      { name: 'Sirene', position: 5 },
    ],
    notes:
      'T.Aiona going be your DPS and Tank. R: asap Acapp - S.Aiona - T.Aiona - F.Bella & Sirene - wait blood end - Acapp - T.Aiona - F.bella.  ',
  },
  {
    id: '7',
    name: 'Healing for Days !',
    type: 'general',
    tier: 'ss',
    characters: [
      { name: 'Timeless Aiona', position: 1 },
      { name: 'Acappella', position: 2 },
      { name: 'Starry-eyed Aiona', position: 3 },
      { name: 'Transcendent Ami', position: 4 },
      { name: 'Seth', position: 5 },
    ],
    notes:
      'Seth can help and remove debuff and insane healing. R: Acapp - Seth - T.Aiona - T.ami. Wait blood end - Acapp - S.aiona -T.Aiona - Seth.',
  },
  {
    id: '8',
    name: ' T.Aiona Ottavia',
    type: 'general',
    tier: 'ss',
    characters: [
      { name: 'Timeless Aiona', position: 1 },
      { name: 'Acappella', position: 2 },
      { name: 'Fleeting Bella', position: 3 },
      { name: 'Jinxed Selena', position: 4 },
      { name: 'Ottavia', position: 5 },
    ],
    notes:
      'Otta & J-Sel has DMG Taken Inc. R: Acapp - Wait blood 10 - F.Bella - Ottavia - J-sel & T.aiona - acapp.',
  },
  {
    id: '9',
    name: 'Thibault T.Aiona',
    type: 'general',
    tier: 'ss',
    characters: [
      { name: 'Timeless Aiona', position: 1 },
      { name: 'Acappella', position: 2 },
      { name: 'Thibault', position: 3 },
      { name: 'Fleeting Bella', position: 4 },
      { name: 'Ami', position: 5 },
    ],
    notes:
      ' Thibault crit down can help T-Aiona to deal most dmg. R: Acapp, Wait blood 10 - Thubault - F.Bella - Ami - T. Aiona - acapp .',
  },
  {
    id: '10',
    name: 'Double Bella',
    type: 'general',
    tier: 'ss',
    characters: [
      { name: 'Timeless Aiona', position: 1 },
      { name: 'Acappella', position: 2 },
      { name: 'Sirene', position: 3 },
      { name: 'Fleeting Bella', position: 4 },
      { name: 'Bella', position: 5 },
    ],
    notes:
      'People like Balla the tank, me personally think she is too high of cost and not doing much for T.Aiona .',
  },
  {
    id: '11',
    name: 'Van Helsing T.Aiona',
    type: 'general',
    tier: 'ss',
    characters: [
      { name: 'Timeless Aiona', position: 1 },
      { name: 'Van Helsing', position: 2 },
      { name: 'Sirene', position: 3 },
      { name: 'Fleeting Bella', position: 4 },
      { name: 'Ami', position: 5 },
    ],
    notes:
      'T.Aiona and Van, going be the main dmg with sirene marksman buff and ami atk speed inc. R: wait Blood 10, F.Bella - ami & Sirene , Then T.aiona.  .',
  },
  {
    id: '12',
    name: 'Van Helsing DPS',
    type: 'general',
    tier: 'ss',
    characters: [
      { name: 'Van Helsing', position: 1 },
      { name: 'Acappella', position: 2 },
      { name: 'Fleeting Bella', position: 3 },
      { name: 'Sirene', position: 4 },
      { name: 'Ami', position: 5 },
    ],
    notes:
      'Most dmg as possible with Van. R: acapp - wait blood 10 - F.bella & Sirene - Ami then Van H - Acapp. ',
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
    [TEAM_TYPES.GENERAL]: 'General',
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
