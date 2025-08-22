// Zone Nova Rift Teams Data & Utilities
// Specialized rift team composition management system for Space-Time Rifts

// Rift team type constants - specialized categories for rift content
export const RIFT_TEAM_TYPES = {
  RIFT_VII: 'rift-vii',
  RIFT_VIII: 'rift-viii',
  RIFT_IX: 'rift-ix',
  RIFT_X: 'rift-x',
  RIFT_GENERAL: 'rift-general',
  RIFT_SPEEDRUN: 'rift-speedrun',
};

// Rift team tier constants - same as main tier system
export const RIFT_TEAM_TIERS = {
  SSS: 'sss',
  SS: 'ss',
  S: 's',
  A: 'a',
  SITUATIONAL: 'situational',
};

// Main rift teams data array
export const ZONE_NOVA_RIFT_TEAMS = [
  {
    id: 1,
    name: 'Thor Rift Team VII',
    type: RIFT_TEAM_TYPES.RIFT_VII,
    tier: RIFT_TEAM_TIERS.SS,
    characters: [
      { name: 'Thor', image: '/images/games/zone-nova/characters/Thor.jpg' },
      { name: 'Kela', image: '/images/games/zone-nova/characters/kela.jpg' },
      { name: 'Naiya', image: '/images/games/zone-nova/characters/Naiya.jpg' },
      { name: 'Odin', image: '/images/games/zone-nova/characters/Odin.jpg' },
    ],
    notes:
      'This team is alright, low cost with quite bit of interrupt. it fit with VII, only problem is there is only 1 fire member, and the map is Wind/Fire.',
    elementWeakness: ['Fire', 'Wind'],
  },
  {
    id: 2,
    name: 'Fire/Wind Rift Team VII',
    type: RIFT_TEAM_TYPES.RIFT_VII,
    tier: RIFT_TEAM_TIERS.SS,
    characters: [
      { name: 'Guinevere', image: '/images/games/zone-nova/characters/Guinevere.jpg' },
      { name: 'Apollo', image: '/images/games/zone-nova/characters/Apollo.jpg' },
      { name: 'Leviathan', image: '/images/games/zone-nova/characters/Leviathan.jpg' },
      { name: "Jeanne d'Arc", image: '/images/games/zone-nova/characters/JoanofArc.jpg' },
    ],
    notes:
      'This Team Fit with Map Element weakness and do alot of damage. only problem that leviathan is melee character which sometimes can be a problem.',
    elementWeakness: ['Fire', 'Wind'],
  },
  {
    id: 3,
    name: 'Athena Team VII',
    type: RIFT_TEAM_TYPES.RIFT_VII,
    tier: RIFT_TEAM_TIERS.SS,
    characters: [
      { name: 'Penny', image: '/images/games/zone-nova/characters/penny.jpg' },
      { name: 'Athena', image: '/images/games/zone-nova/characters/Athena.jpg' },
      { name: 'Naiya', image: '/images/games/zone-nova/characters/Naiya.jpg' },
      { name: "Jeanne d'Arc", image: '/images/games/zone-nova/characters/JoanofArc.jpg' },
    ],
    notes:
      'This team focuses on buffing. The map has a buff multiplier, so you will benefit more from the buff effects. Athena will be the main damage dealer.',
    elementWeakness: ['Fire', 'Wind'],
  },
  {
    id: 4,
    name: 'Cheap SR Team VII',
    type: RIFT_TEAM_TYPES.RIFT_VII,
    tier: RIFT_TEAM_TIERS.S,
    characters: [
      { name: 'Penny', image: '/images/games/zone-nova/characters/penny.jpg' },
      { name: 'Kela', image: '/images/games/zone-nova/characters/kela.jpg' },
      { name: 'Shu', image: '/images/games/zone-nova/characters/Shu.jpg' },
      { name: 'Shanna', image: '/images/games/zone-nova/characters/Shanna.jpg' },
    ],
    notes: 'This team is cheap and do good amount of damage ! Alot of SR .',
    elementWeakness: ['Fire', 'Wind'],
  },
  {
    id: 5,
    name: 'DOT Team VII',
    type: RIFT_TEAM_TYPES.RIFT_VII,
    tier: RIFT_TEAM_TIERS.SSS,
    characters: [
      { name: 'Thor', image: '/images/games/zone-nova/characters/Thor.jpg' },
      { name: 'Shu', image: '/images/games/zone-nova/characters/Shu.jpg' },
      { name: 'Odin', image: '/images/games/zone-nova/characters/Odin.jpg' },
      { name: "Jeanne d'Arc", image: '/images/games/zone-nova/characters/JoanofArc.jpg' },
    ],
    notes: 'quite bit of DOT damage and fit well with map. also damage taken inc and  healing',
    elementWeakness: ['Fire', 'Wind'],
  },
  {
    id: 6,
    name: 'F2P Team VII',
    type: RIFT_TEAM_TYPES.RIFT_VII,
    tier: RIFT_TEAM_TIERS.S,
    characters: [
      { name: 'Penny', image: '/images/games/zone-nova/characters/penny.jpg' },
      { name: 'Leviathan', image: '/images/games/zone-nova/characters/Leviathan.jpg' },
      { name: 'Naiya', image: '/images/games/zone-nova/characters/Naiya.jpg' },
      { name: 'Kela', image: '/images/games/zone-nova/characters/kela.jpg' },
    ],
    notes: 'Leviathan need to carry this team !.',
    elementWeakness: ['Fire', 'Wind'],
  },
  {
    id: 7,
    name: 'Mordred Team VII',
    type: RIFT_TEAM_TYPES.RIFT_VII,
    tier: RIFT_TEAM_TIERS.SS,
    characters: [
      { name: 'Guinevere', image: '/images/games/zone-nova/characters/Guinevere.jpg' },
      { name: 'Mordred', image: '/images/games/zone-nova/characters/Mordred.jpg' },
      { name: 'Zashiki-warashi', image: '/images/games/zone-nova/characters/Zashiki-warashi.jpg' },
      { name: 'Snow Girl', image: '/images/games/zone-nova/characters/Snow.jpg' },
    ],
    notes:
      'Mordred hard to kill and the team going to do well, just bit slow. also its quite cheap !!.',
    elementWeakness: ['Fire', 'Wind'],
  },
  {
    id: 8,
    name: 'DOT V2 Team VII',
    type: RIFT_TEAM_TYPES.RIFT_VII,
    tier: RIFT_TEAM_TIERS.SSS,
    characters: [
      { name: 'Thor', image: '/images/games/zone-nova/characters/Thor.jpg' },
      { name: 'Anubis', image: '/images/games/zone-nova/characters/Anubis.jpg' },
      { name: 'Horus', image: '/images/games/zone-nova/characters/Horus.jpg' },
      { name: 'Odin', image: '/images/games/zone-nova/characters/Odin.jpg' },
    ],
    notes: 'Alot of DOT DMG and AOE. really strong over all.',
    elementWeakness: ['Fire', 'Wind'],
  },
  {
    id: 9,
    name: 'AOE DOT Team VII',
    type: RIFT_TEAM_TYPES.RIFT_VII,
    tier: RIFT_TEAM_TIERS.SS,
    characters: [
      { name: 'Penny', image: '/images/games/zone-nova/characters/penny.jpg' },
      { name: 'Shu', image: '/images/games/zone-nova/characters/Shu.jpg' },
      { name: 'Horus', image: '/images/games/zone-nova/characters/Horus.jpg' },
      { name: 'Gaia', image: '/images/games/zone-nova/characters/Gaia.jpg' },
    ],
    notes: 'Alot OF AOE and DOT.',
    elementWeakness: ['Fire', 'Wind'],
  },
  {
    id: 10,
    name: 'Yuis crit dmg Team VIII',
    type: RIFT_TEAM_TYPES.RIFT_VIII,
    tier: RIFT_TEAM_TIERS.SS,
    characters: [
      { name: 'Guinevere', image: '/images/games/zone-nova/characters/Guinevere.jpg' },
      { name: 'Zashiki-warashi', image: '/images/games/zone-nova/characters/Zashiki-warashi.jpg' },
      { name: 'Gaia', image: '/images/games/zone-nova/characters/Gaia.jpg' },
      { name: 'Yuis', image: '/images/games/zone-nova/characters/Yuis.jpg' },
    ],
    notes: 'This team good at lv 10, also Yuis doing good DMG.',
    elementWeakness: ['Holy', 'Ice'],
  },
  {
    id: 11,
    name: 'DOT/Shield Team VIII',
    type: RIFT_TEAM_TYPES.RIFT_VIII,
    tier: RIFT_TEAM_TIERS.SS,
    characters: [
      { name: 'Thor', image: '/images/games/zone-nova/characters/Thor.jpg' },
      { name: 'Odin', image: '/images/games/zone-nova/characters/Odin.jpg' },
      { name: 'Naiya', image: '/images/games/zone-nova/characters/Naiya.jpg' },
      { name: 'Snow Girl', image: '/images/games/zone-nova/characters/Snow.jpg' },
    ],
    notes: ' DOT/Shield team quite strong but not broken.',
    elementWeakness: ['Holy', 'Ice'],
  },
  {
    id: 12,
    name: 'Guinevere Apollo Team VIII',
    type: RIFT_TEAM_TYPES.RIFT_VIII,
    tier: RIFT_TEAM_TIERS.SS,
    characters: [
      { name: 'Guinevere', image: '/images/games/zone-nova/characters/Guinevere.jpg' },
      { name: 'Apollo', image: '/images/games/zone-nova/characters/Apollo.jpg' },
      { name: 'Yuis', image: '/images/games/zone-nova/characters/Yuis.jpg' },
      { name: 'Gaia', image: '/images/games/zone-nova/characters/Gaia.jpg' },
    ],
    notes: 'Yuis and Apollo synergy for extra dmg type. better version for zashiki.',
    elementWeakness: ['Holy', 'Ice'],
  },
  {
    id: 13,
    name: 'Horus DOT Team VIII',
    type: RIFT_TEAM_TYPES.RIFT_VIII,
    tier: RIFT_TEAM_TIERS.SS,
    characters: [
      { name: 'Thor', image: '/images/games/zone-nova/characters/Thor.jpg' },
      { name: 'Odin', image: '/images/games/zone-nova/characters/Odin.jpg' },
      { name: 'Horus', image: '/images/games/zone-nova/characters/Horus.jpg' },
      { name: 'Gaia', image: '/images/games/zone-nova/characters/Gaia.jpg' },
    ],
    notes: 'DOT-focused team with Thor, Odin and Horus.',
    elementWeakness: ['Holy', 'Ice'],
  },
  {
    id: 14,
    name: 'Thor Horus DOT Team IX',
    type: RIFT_TEAM_TYPES.RIFT_IX,
    tier: RIFT_TEAM_TIERS.SSS,
    characters: [
      { name: 'Thor', image: '/images/games/zone-nova/characters/Thor.jpg' },
      { name: 'Horus', image: '/images/games/zone-nova/characters/Horus.jpg' },
      { name: 'Afrodite', image: '/images/games/zone-nova/characters/Afrodite.jpg' },
      { name: 'Gaia', image: '/images/games/zone-nova/characters/Gaia.jpg' },
    ],
    notes: 'Afrodite can deal alot of single dmg, good against last boss lv 10',
    elementWeakness: ['Holy', 'Chaos'],
  },
  {
    id: 15,
    name: 'Full Holy team',
    type: RIFT_TEAM_TYPES.RIFT_IX,
    tier: RIFT_TEAM_TIERS.SSS,
    characters: [
      { name: 'Thor', image: '/images/games/zone-nova/characters/Thor.jpg' },
      { name: 'Horus', image: '/images/games/zone-nova/characters/Horus.jpg' },
      { name: 'Yuis', image: '/images/games/zone-nova/characters/Yuis.jpg' },
      { name: 'Gaia', image: '/images/games/zone-nova/characters/Gaia.jpg' },
    ],
    notes: 'Very good team overall, alot of break and holy dmg. should melt things up !',
    elementWeakness: ['Holy', 'Chaos'],
  },
  {
    id: 16,
    name: 'Freye and Hera',
    type: RIFT_TEAM_TYPES.RIFT_IX,
    tier: RIFT_TEAM_TIERS.SS,
    characters: [
      { name: 'Guinevere', image: '/images/games/zone-nova/characters/Guinevere.jpg' },
      { name: "Jeanne d'Arc", image: '/images/games/zone-nova/characters/JoanofArc.jpg' },
      { name: 'Hera', image: '/images/games/zone-nova/characters/Hera.jpg' },
      { name: 'Freye', image: '/images/games/zone-nova/characters/Freye.jpg' },
    ],
    notes: 'Freye and hera they work really good, alot of dmg and DOT dmg !!.',
    elementWeakness: ['Holy', 'Chaos'],
  },
  {
    id: 17,
    name: 'no element weakness',
    type: RIFT_TEAM_TYPES.RIFT_IX,
    tier: RIFT_TEAM_TIERS.S,
    characters: [
      { name: 'Penny', image: '/images/games/zone-nova/characters/penny.jpg' },
      { name: "Jeanne d'Arc", image: '/images/games/zone-nova/characters/JoanofArc.jpg' },
      { name: 'Shu', image: '/images/games/zone-nova/characters/Shu.jpg' },
      { name: 'Odin', image: '/images/games/zone-nova/characters/Odin.jpg' },
    ],
    notes: 'This is werid team can get you to lv 10, just no break which going be painful',
    elementWeakness: ['Holy', 'Chaos'],
  },
  {
    id: 18,
    name: 'Guinevere Yuis Team IX',
    type: RIFT_TEAM_TYPES.RIFT_IX,
    tier: RIFT_TEAM_TIERS.SS,
    characters: [
      { name: 'Guinevere', image: '/images/games/zone-nova/characters/Guinevere.jpg' },
      { name: 'Yuis', image: '/images/games/zone-nova/characters/Yuis.jpg' },
      { name: 'Shu', image: '/images/games/zone-nova/characters/Shu.jpg' },
      { name: 'Gaia', image: '/images/games/zone-nova/characters/Gaia.jpg' },
    ],
    notes: 'I used this team to pass lv 10, it works fine. I just go 2 star T_T',
    elementWeakness: ['Holy', 'Chaos'],
  },
  {
    id: 19,
    name: 'Thor Loki Team ',
    type: RIFT_TEAM_TYPES.RIFT_IX,
    tier: RIFT_TEAM_TIERS.SS,
    characters: [
      { name: 'Thor', image: '/images/games/zone-nova/characters/Thor.jpg' },
      { name: 'Hera', image: '/images/games/zone-nova/characters/Hera.jpg' },
      { name: 'Loki', image: '/images/games/zone-nova/characters/Loki.jpg' },
      { name: 'Kela', image: '/images/games/zone-nova/characters/kela.jpg' },
    ],
    notes:
      'Thor very Strong in this rfit, she will help you deal dmg and tank your teammates, loki help break and hera dealing good dmg.',
    elementWeakness: ['Holy', 'Chaos'],
  },
  {
    id: 20,
    name: 'Nini Team',
    type: RIFT_TEAM_TYPES.RIFT_IX,
    tier: RIFT_TEAM_TIERS.S,
    characters: [
      { name: 'Guinevere', image: '/images/games/zone-nova/characters/Guinevere.jpg' },
      { name: 'Nini', image: '/images/games/zone-nova/characters/Nini.jpg' },
      { name: 'Kela', image: '/images/games/zone-nova/characters/kela.jpg' },
      { name: 'Hera', image: '/images/games/zone-nova/characters/Hera.jpg' },
    ],
    notes:
      'Nini can be strong and hit all target with hear ultimate, tho this build still weak but can pass to lv 10',
    elementWeakness: ['Holy', 'Chaos'],
  },
  {
    id: 21,
    name: 'Stander team',
    type: RIFT_TEAM_TYPES.RIFT_IX,
    tier: RIFT_TEAM_TIERS.S,
    characters: [
      { name: 'Guinevere', image: '/images/games/zone-nova/characters/Guinevere.jpg' },
      { name: 'Kela', image: '/images/games/zone-nova/characters/kela.jpg' },
      { name: 'Shu', image: '/images/games/zone-nova/characters/Shu.jpg' },
      { name: 'Hera', image: '/images/games/zone-nova/characters/Hera.jpg' },
    ],
    notes:
      'Kela only good dor single healer, you need to keep spamming Guinevere ultimate to get the map buff, shu do nice dmg too .',
    elementWeakness: ['Holy', 'Chaos'],
  },
];

// Metadata for filters
export const RIFT_TEAM_METADATA = {
  types: Object.values(RIFT_TEAM_TYPES),
  tiers: Object.values(RIFT_TEAM_TIERS),
  totalTeams: ZONE_NOVA_RIFT_TEAMS.length,
};

// Utility functions for rift team data management

// Get teams by rift type
export function getRiftTeamsByType(type) {
  return ZONE_NOVA_RIFT_TEAMS.filter(team => team.type === type);
}

// Get teams by tier
export function getRiftTeamsByTier(tier) {
  return ZONE_NOVA_RIFT_TEAMS.filter(team => team.tier === tier);
}

// Filter rift teams based on multiple criteria
export function filterRiftTeams(teams, { type, tier, searchTerm }) {
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

// Sort rift teams based on different criteria
export function sortRiftTeams(teams, sortKey, direction = 'asc') {
  return [...teams].sort((a, b) => {
    // Default sort: by type (newest rift first), then by tier, then by name
    if (!sortKey || sortKey === '') {
      // First sort by rift type (IX > VIII > VII > VI, etc.)
      const typeOrder = {
        'rift-ix': 9,
        'rift-viii': 8,
        'rift-vii': 7,
        'rift-vi': 6,
        'rift-general': 0,
        'rift-speedrun': 0,
      };
      const typeA = typeOrder[a.type] || 0;
      const typeB = typeOrder[b.type] || 0;

      if (typeA !== typeB) return typeB - typeA; // Descending (newest first)

      // Then by tier (SSS > SS > S > A > Situational)
      const tierOrder = { sss: 5, ss: 4, s: 3, a: 2, situational: 1 };
      const tierA = tierOrder[a.tier] || 0;
      const tierB = tierOrder[b.tier] || 0;

      if (tierA !== tierB) return tierB - tierA; // Descending (best tier first)

      // Finally by name alphabetically
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    }

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

// Get rift team by ID
export function getRiftTeamById(id) {
  return ZONE_NOVA_RIFT_TEAMS.find(team => team.id === id);
}

// Get rift teams containing a specific character
export function getRiftTeamsWithCharacter(characterName) {
  return ZONE_NOVA_RIFT_TEAMS.filter(team =>
    team.characters.some(char => char.name.toLowerCase() === characterName.toLowerCase())
  );
}

// Get rift team type display text
export function getRiftTeamTypeText(type) {
  const typeTexts = {
    [RIFT_TEAM_TYPES.RIFT_VII]: 'Rift VII',
    [RIFT_TEAM_TYPES.RIFT_VIII]: 'Rift VIII',
    [RIFT_TEAM_TYPES.RIFT_IX]: 'Rift IX',
    [RIFT_TEAM_TYPES.RIFT_X]: 'Rift X',
    [RIFT_TEAM_TYPES.RIFT_GENERAL]: 'General Rift',
    [RIFT_TEAM_TYPES.RIFT_SPEEDRUN]: 'Speedrun',
  };
  return typeTexts[type] || 'Unknown';
}

// Get rift team tier display text
export function getRiftTeamTierText(tier) {
  const tierTexts = {
    [RIFT_TEAM_TIERS.SSS]: 'SSS',
    [RIFT_TEAM_TIERS.SS]: 'SS',
    [RIFT_TEAM_TIERS.S]: 'S',
    [RIFT_TEAM_TIERS.A]: 'A',
    [RIFT_TEAM_TIERS.SITUATIONAL]: 'Situational',
  };
  return tierTexts[tier] || 'Unknown';
}

// Truncate text helper for notes display
export function truncateRiftText(text, maxLength = 150, mobileMaxLength = 100) {
  if (!text) return '-';

  // For mobile, use shorter limit - safely check if window exists
  const limit =
    typeof window !== 'undefined' && window.innerWidth <= 768 ? mobileMaxLength : maxLength;

  if (text.length <= limit) return text;
  return text.substring(0, limit).trim() + '...';
}

// Format element weakness display
export function formatElementWeakness(elementWeakness) {
  if (!elementWeakness || !Array.isArray(elementWeakness) || elementWeakness.length === 0) {
    return '-';
  }
  return elementWeakness.join(' / ');
}

// Get rift teams statistics
export function getRiftTeamStatistics() {
  const stats = {
    total: ZONE_NOVA_RIFT_TEAMS.length,
    byType: {},
    byTier: {},
  };

  // Count by type
  Object.values(RIFT_TEAM_TYPES).forEach(type => {
    stats.byType[type] = getRiftTeamsByType(type).length;
  });

  // Count by tier
  Object.values(RIFT_TEAM_TIERS).forEach(tier => {
    stats.byTier[tier] = getRiftTeamsByTier(tier).length;
  });

  return stats;
}
