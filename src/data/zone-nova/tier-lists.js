import { ZONE_NOVA_CHARACTERS } from './characters.js';

// Zone Nova Tier List Data
// Last Updated: March 2026
// Based on current meta and character performance
//
// ⚠️  REMINDER: When adding/moving characters in tier lists below,
//     remember to update ALL "lastUpdated" fields to today's date (YYYY-MM-DD)
//     Search for "lastUpdated:" and update each one manually

export const TIER_DEFINITIONS = {
  UR: {
    label: 'UR',
    description:
      'Beyond broken. They define the meta entirely and make everything else irrelevant.',
  },
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

export const TIER_ORDER = Object.keys(TIER_DEFINITIONS);
export const ROLE_ORDER = ['Healer', 'Buffer', 'Debuffer', 'Tank', 'DPS'];
export const CLASS_ORDER = [
  'Healer',
  'Buffer',
  'Debuffer',
  'Disruptor',
  'Guardian',
  'Warrior',
  'Attacker',
  'Rogue',
  'Mage',
];

// Overall PvE Tier List - General content performance
export const PVE_TIER_LIST = {
  name: 'PvE Rankings by Class & Role',
  lastUpdated: '2026-04-15',
  description:
    'Class-based PvE rankings with role highlights for story, events, and general progression.',
  tiers: {
    UR: [{ name: 'Sharin' }],
    SSS: [
      { name: 'Gluttony - Beelzebub' },
      { name: 'Freya' },
      { name: 'Hela' },
      { name: 'Gaia' },
      { name: 'Lust - Asmodeus' },
      { name: 'Nina' },
      { name: 'Morgan Le Fay' },
      { name: 'Odin' },
      { name: 'Tamamo-no-Mae' },
      { name: 'Yuis' },
      { name: 'Pride-Lucifer' },
      { name: 'Thor' },
      { name: 'Wrath-Samael' },
      { name: 'Frigga' },
    ],
    SS: [
      { name: 'Guinevere' },
      { name: 'Athena' },
      { name: 'Chiya' },
      { name: 'Apollo' },
      { name: 'Leviathan' },
      { name: 'Naiya' },
      { name: 'Penny' },
      { name: 'Hera' },
      { name: 'Jeanne D Arc' },
      { name: 'Lily' },
      { name: 'Apep' },
      { name: 'Sigurd' },
      { name: 'Jorogumo' },
      { name: 'Shuten-doji' },
      { name: 'Ibaraki-doji' },
      { name: 'Hiyori' },
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
      { name: 'Mordred' },
      { name: 'Afrodite' },
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
    ],
  },
};

// PvP Arena Tier List
export const PVP_TIER_LIST = {
  name: 'Arena PvP Rankings by Class & Role',
  lastUpdated: '2026-04-15',
  description: 'Class-based Arena PvP rankings with role highlights for competitive play.',
  tiers: {
    UR: [{ name: 'Sharin' }, { name: 'Pride-Lucifer' }],
    SSS: [{ name: 'Gluttony - Beelzebub' }, { name: 'Lily' }, { name: 'Nina' }, { name: 'Morgan Le Fay' }, { name: 'Odin' }, { name: 'Tamamo-no-Mae' }, { name: 'Wrath-Samael' }, { name: 'Gaia' }, { name: 'Jorogumo' }, { name: 'Thor' }, { name: 'Apep' }, { name: 'Artemis' }, { name: 'Freya' }, { name: 'Hiyori' }],
    SS: [
      { name: 'Guinevere' },
      { name: 'Frigga' },
      { name: 'Athena' },
      { name: 'Lust - Asmodeus' },
      { name: 'Jeanne D Arc' },
      { name: 'Apollo' },
      { name: 'Yuis' },
      { name: 'Penny' },
      { name: 'Cleopatra' },
      { name: 'Naiya' },
      { name: 'Chiya' },
      { name: 'Lyra' },
      { name: 'Hela' },
      { name: 'Sigurd' },
    ],
    S: [
      { name: 'Arthur' },
      { name: 'Merlin' },
      { name: 'Lancelot' },
      { name: 'Snow Girl' },
      { name: 'Bastet' },
      { name: 'Anubis' },
      { name: 'Greed Mammon' },
      { name: 'Horus' },
      { name: 'Afrodite' },
      { name: 'Shu' },
      { name: 'Hera' },
      { name: 'Kela' },
      { name: 'Shanna' },
      { name: 'Zashiki-warashi' },
      { name: 'Lavinia' },
      { name: 'Mordred' },
      { name: 'Shuten-doji' },
    ],
    A: [{ name: 'Tefnut' }, { name: 'Rose' }, { name: 'Leviathan' }],
    Situational: [
      { name: 'Loki' },
      { name: 'Belphegar' },
      { name: 'Nini' },
    ],
  },
};

// New Player Tier List (F2P Friendly)
export const NEW_PLAYER_TIER_LIST = {
  name: 'New Player / F2P Tier List',
  lastUpdated: '2026-04-15',
  description:
    'You can get any character from this list from day 1. This tier list focuses on accessibility for new players. The main problem early on is finding good damage dealers.',
  tiers: {
    UR: [{ name: 'Sharin' }],
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
  'new-player': NEW_PLAYER_TIER_LIST,
};

const CHARACTER_BY_NAME = Object.fromEntries(
  ZONE_NOVA_CHARACTERS.map(character => [character.name, character])
);

function getTierLookup(listType) {
  const tierList = ALL_TIER_LISTS[listType];
  if (!tierList) return new Map();

  const lookup = new Map();
  Object.entries(tierList.tiers).forEach(([tier, characters]) => {
    characters.forEach(character => {
      lookup.set(character.name, tier);
    });
  });

  return lookup;
}

function getGroupOrder(groupBy) {
  return groupBy === 'role' ? ROLE_ORDER : CLASS_ORDER;
}

function createEmptyTierBuckets() {
  return Object.fromEntries(TIER_ORDER.map(tier => [tier, []]));
}

export function getGroupedTierSections(listType, groupBy = 'class') {
  const tierList = ALL_TIER_LISTS[listType];
  if (!tierList) return [];

  const sections = new Map();

  TIER_ORDER.forEach(tier => {
    const tierCharacters = tierList.tiers[tier] || [];

    tierCharacters.forEach(charInfo => {
      const character = CHARACTER_BY_NAME[charInfo.name];
      if (!character) return;

      const groupName = character[groupBy];
      if (!groupName) return;

      if (!sections.has(groupName)) {
        sections.set(groupName, {
          key: groupName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          label: groupName,
          groupBy,
          tiers: createEmptyTierBuckets(),
        });
      }

      sections.get(groupName).tiers[tier].push({ name: character.name });
    });
  });

  const orderedGroups = getGroupOrder(groupBy);

  return [...sections.values()]
    .sort((left, right) => {
      const leftIndex = orderedGroups.indexOf(left.label);
      const rightIndex = orderedGroups.indexOf(right.label);

      if (leftIndex === -1 && rightIndex === -1) return left.label.localeCompare(right.label);
      if (leftIndex === -1) return 1;
      if (rightIndex === -1) return -1;
      return leftIndex - rightIndex;
    })
    .map(section => {
      const topTier = TIER_ORDER.find(tier => section.tiers[tier].length > 0) || 'Situational';
      const totalCharacters = TIER_ORDER.reduce(
        (count, tier) => count + section.tiers[tier].length,
        0
      );

      return {
        ...section,
        topTier,
        topCharacters: section.tiers[topTier],
        totalCharacters,
      };
    });
}

export function getRoleHighlights(listType) {
  return getGroupedTierSections(listType, 'role').map(section => ({
    key: section.key,
    label: section.label,
    topTier: section.topTier,
    topCharacters: section.topCharacters,
    totalCharacters: section.totalCharacters,
  }));
}

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
    date: '2026-04-15',
    changes: [
      'Sharin added: UR in PvE, PvP, and New Player tier lists',
      'New Fire Buffer from Monochrome Nation with Qi stacking mechanic',
      'Ultimate provides massive ATK/DEF/Crit DMG buffs to top ATK and top DEF allies',
      'A1 doubles ultimate targets and first ULT is free, A6 grants permanent [Hold the Line]',
      'Passive grants team-wide stacking buffs: +11.5% healing/shield/damage and +3.3% energy recovery per Qi stack (max 10)',
    ],
  },
  {
    date: '2026-04-02',
    changes: [
      'Hiyori added: SS in PvE, SSS in PvP',
      'New Chaos Mage DPS and premier Pride-Lucifer counter with highest base ATK (1,683) and Crit Rate (57%)',
      'Ultimate destroys all target shields and deals 1060% ATK Chaos DMG with 114% bonus Crit Rate',
      'Passive provides 26.5% bonus DMG to shielded enemies with area explosion on shield break',
      'A1 ignores 74% DEF, A4 grants 50% ATK, A6 enhances Shield Burst and ignores 40% Chaos Resistance',
    ],
  },
  {
    date: '2026-03-25',
    changes: [
      'Guinevere moved to SS in PvE',
      'PvE tier list adjusted: Yuis promoted to SSS and Athena moved to SS',
      'Gluttony - Beelzebub added to SSS in both PvE and PvP',
      'Freya remains in SSS for PvE',
      'PvE and Arena PvP now use role highlights with class-based ranking sections',
      'Space-Time Rift and Guild Raid tier lists removed from the Zone Nova tier list page',
      'Update reflects current general PvE priority for story and event content',
    ],
  },
  {
    date: '2026-02-19',
    changes: [
      'Wrath-Samael added: SS in PvE, SSS in PvP, SS in Rift',
      'New Chaos Guardian Tank with Neutralize mechanics and Wrath stack system',
      'Mainly a PVP unit - excels at controlling enemy aggression with taunt mechanic',
      'Team skill provides 15% Defense and Neutralize DMG Reduction based on Defense',
      'High ultimate cost limits PVE effectiveness but dominates PVP meta',
    ],
  },
  {
    date: '2026-02-04',
    changes: [
      'Pride-Lucifer added: SS in PvE, SSS in PvP, Rift, and Guild Raid',
      'New Chaos Warrior with Defense-scaling shields and Pride stack mechanic',
      'Enhanced Ultimate provides massive AOE damage (832.9% DEF) and team buffs',
      'A2 grants team HP regeneration after taking damage',
      'A6 provides 4 Pride stacks at battle start and 20% resistance bonus',
    ],
  },
  {
    date: '2026-01-20',
    changes: [
      'Tamamo-no-Mae added: SSS in PvE, PvP, Rift, and Guild Raid',
      'New Fire Buffer with Fox Flame stacking mechanic and massive Ultimate DMG buffs',
      'A1 grants 9 Fox Flame stacks at battle start for instant burst potential',
      'A6 provides DEF boost and extra Ten Ghost Marks on ally Ultimates',
      'Odin promoted to SSS in PvE and PvP (already SSS in Rift and Guild Raid)',
    ],
  },
  {
    date: '2026-01-07',
    changes: [
      'Shuten-doji added: SS in PvE, S in PvP, S in Rift, S in Guild Raid',
      'New Wind Mage DPS with Wind Evil DoT stacking mechanic',
      'Strong damage amplification passive (+62.9% damage to debuffed enemies)',
      'A6 grants 25% elemental resistance penetration',
    ],
  },
  {
    date: '2025-12-23',
    changes: [
      'Jorogumo added: SS in PvE, SS in PvP, SS in Rift, SS in Guild Raid',
      'New Chaos Healer with low-cost Ultimate (2 energy) and emergency healing mechanics',
      'A2 provides damage reduction and resistance buffs, A6 grants shields',
    ],
  },
  {
    date: '2025-12-16',
    changes: [
      'Sigurd added: SS in PvE, SS in PvP, SSS in Rift, SS in Guild Raid',
      'New Fire Rogue DPS with Dragon Blood mechanic and Enhanced Ultimate',
      'Excels in Rift content with high crit scaling and burst damage',
    ],
  },
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
