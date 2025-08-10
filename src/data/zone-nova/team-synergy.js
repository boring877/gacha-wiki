// Zone Nova Team Synergy Data & Utilities
// Centralized team composition management system

// Team type constants
export const TEAM_TYPES = {
  RIFT: 'rift',
  GUILD_RAID: 'guild-raid',
  CHARACTER: 'character',
  GENERAL: 'general',
  EXTRA_ATTACK: 'extra-attack',
  DOT: 'dot',
};

// Team tier constants
export const TEAM_TIERS = {
  SSS: 'sss',
  SS: 'ss',
  S: 's',
  A: 'a',
  SITUATIONAL: 'situational',
};

// Main teams data array - currently empty, ready for population
export const ZONE_NOVA_TEAMS = [
  {
    id: 1,
    name: 'Levi/Single target',
    type: TEAM_TYPES.EXTRA_ATTACK,
    tier: TEAM_TIERS.S,
    characters: [
      { name: 'Guinevere', image: '/images/games/zone-nova/characters/Guinevere.jpg' },
      { name: 'Apollo', image: '/images/games/zone-nova/characters/Apollo.jpg' },
      { name: "Jeanne d'Arc", image: '/images/games/zone-nova/characters/JoanofArc.jpg' },
      { name: 'Leviathan', image: '/images/games/zone-nova/characters/Leviathan.jpg' },
    ],
    notes:
      'Good Single Target damage Fire/wind Element weakness, main Dmg Dealer is Leviathan  She can hit 100k dmge with right gear so keep her alive ! ',
  },
  {
    id: 2,
    name: 'Yuis Best Holy Team',
    type: TEAM_TYPES.EXTRA_ATTACK,
    tier: TEAM_TIERS.SS,
    characters: [
      { name: 'Guinevere', image: '/images/games/zone-nova/characters/Guinevere.jpg' },
      { name: 'Apollo', image: '/images/games/zone-nova/characters/Apollo.jpg' },
      { name: 'Yuis', image: '/images/games/zone-nova/characters/Yuis.jpg' },
      { name: 'Gaia', image: '/images/games/zone-nova/characters/Gaia.jpg' },
    ],
    notes:
      'One of the strongest team for  Holy/Fire weakness, stack Crit damage on yuis and she going to melt the boss.',
  },
  {
    id: 3,
    name: 'DOT Interrupt',
    type: TEAM_TYPES.DOT,
    tier: TEAM_TIERS.SS,
    characters: [
      { name: 'Guinevere', image: '/images/games/zone-nova/characters/Guinevere.jpg' },
      { name: 'Horus', image: '/images/games/zone-nova/characters/Horus.jpg' },
      { name: 'Odin', image: '/images/games/zone-nova/characters/Odin.jpg' },
      { name: 'Gaia', image: '/images/games/zone-nova/characters/Gaia.jpg' },
    ],
    notes:
      'Horus has Interrupt with her ultimate 3 cost and do DOT which scale Odin damage, she also inc dmg taken.',
  },
  {
    id: 4,
    name: 'Ice/Mobs Slayer',
    type: TEAM_TYPES.GENERAL,
    tier: TEAM_TIERS.S,
    characters: [
      { name: 'Penny', image: '/images/games/zone-nova/characters/penny.jpg' },
      { name: 'Snow Girl', image: '/images/games/zone-nova/characters/Snow.jpg' },
      { name: 'Naiya', image: '/images/games/zone-nova/characters/Naiya.jpg' },
      { name: 'Chiya', image: '/images/games/zone-nova/characters/Chiya.jpg' },
    ],
    notes:
      'Ice-focused team. You can switch Snow Girl with kela, but Snow Girl has AOE Healing. Naiya and Chiya have very good combo together.',
  },
  {
    id: 5,
    name: 'Hera Nuker',
    type: TEAM_TYPES.GENERAL,
    tier: TEAM_TIERS.S,
    characters: [
      { name: 'Penny', image: '/images/games/zone-nova/characters/penny.jpg' },
      { name: 'Naiya', image: '/images/games/zone-nova/characters/Naiya.jpg' },
      { name: 'Hera', image: '/images/games/zone-nova/characters/Hera.jpg' },
      { name: 'Gaia', image: '/images/games/zone-nova/characters/Gaia.jpg' },
    ],
    notes:
      'Build Hera for Crit and Crit DMG, Ignore her DOT. The Crit DMG Do more Damage and has better Team, She can reach 250K DMG.',
  },
  {
    id: 6,
    name: 'Hera Nuker V2',
    type: TEAM_TYPES.GENERAL,
    tier: TEAM_TIERS.S,
    characters: [
      { name: 'Guinevere', image: '/images/games/zone-nova/characters/Guinevere.jpg' },
      { name: 'Zashiki-warashi', image: '/images/games/zone-nova/characters/Zashiki-warashi.jpg' },
      { name: 'Hera', image: '/images/games/zone-nova/characters/Hera.jpg' },
      { name: 'Gaia', image: '/images/games/zone-nova/characters/Gaia.jpg' },
    ],
    notes:
      'Zashiki-warashi has crit rate inc Which help Hear to crit more, this team aslo good agasint Fire/Chaos, Hera Can Deal up to 200k dmg with crit.',
  },
  {
    id: 7,
    name: 'Beginner Support',
    type: TEAM_TYPES.GENERAL,
    tier: TEAM_TIERS.S,
    characters: [
      { name: 'Lancelot', image: '/images/games/zone-nova/characters/Lancelot.jpg' },
      { name: 'Kela', image: '/images/games/zone-nova/characters/kela.jpg' },
      { name: 'Naiya', image: '/images/games/zone-nova/characters/Naiya.jpg' },
      { name: 'Shanna', image: '/images/games/zone-nova/characters/Shanna.jpg' },
    ],
    notes:
      'Beginner-friendly team. Lancelot tanks, Kela heals, Naiya buffs, and Shanna DPS (Build more crit rate). Good starting team composition.',
  },
  {
    id: 8,
    name: 'Full SR',
    type: TEAM_TYPES.GENERAL,
    tier: TEAM_TIERS.S,
    characters: [
      { name: 'Lancelot', image: '/images/games/zone-nova/characters/Lancelot.jpg' },
      { name: 'Kela', image: '/images/games/zone-nova/characters/kela.jpg' },
      { name: 'Zashiki-warashi', image: '/images/games/zone-nova/characters/Zashiki-warashi.jpg' },
      { name: 'Mordred', image: '/images/games/zone-nova/characters/Mordred.jpg' },
    ],
    notes:
      'Fire/Holy team for beginners. Lancelot tanks, Kela heals, Zashiki buffs DMG & crit rate, Mordred HP scaling DPS, Build Crit on her she can do 80k DMG.',
  },
];

// Metadata for filters (will be populated as teams are added)
export const TEAM_METADATA = {
  types: Object.values(TEAM_TYPES),
  tiers: Object.values(TEAM_TIERS),
  totalTeams: ZONE_NOVA_TEAMS.length,
};

// Utility functions for team data management

// Get teams by type
export function getTeamsByType(type) {
  return ZONE_NOVA_TEAMS.filter(team => team.type === type);
}

// Get teams by tier
export function getTeamsByTier(tier) {
  return ZONE_NOVA_TEAMS.filter(team => team.tier === tier);
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
  return ZONE_NOVA_TEAMS.find(team => team.id === id);
}

// Get teams containing a specific character
export function getTeamsWithCharacter(characterName) {
  return ZONE_NOVA_TEAMS.filter(team =>
    team.characters.some(char => char.name.toLowerCase() === characterName.toLowerCase())
  );
}

// Get team type display text
export function getTeamTypeText(type) {
  const typeTexts = {
    [TEAM_TYPES.RIFT]: 'Rift Team',
    [TEAM_TYPES.GUILD_RAID]: 'Guild Raid',
    [TEAM_TYPES.CHARACTER]: 'Character Team',
    [TEAM_TYPES.GENERAL]: 'General PvE',
    [TEAM_TYPES.EXTRA_ATTACK]: 'Extra Attack',
    [TEAM_TYPES.DOT]: 'DOT',
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
    total: ZONE_NOVA_TEAMS.length,
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
