// Horizon Walker Character Data & Utilities
// Enhanced structure matching Zone Nova/Silver & Blood systems

// Game Mechanics Reference
export const gameInfo = {
  rarities: ['EX', 'SS', 'S', 'A', 'B'],
  classes: [
    { name: 'Assassin', description: 'High damage, low defense' },
    { name: 'Mage', description: 'Magic damage dealer' },
    { name: 'Support', description: 'Team utility and healing' },
    { name: 'Tank', description: 'High defense, damage absorption' },
    { name: 'Warrior', description: 'Balanced melee fighter' },
    { name: 'Archer', description: 'Ranged physical damage' },
  ],
  elements: [
    { name: 'Physical', color: '#8B4513' },
    { name: 'Magic', color: '#6B46C1' },
    { name: 'Fire', color: '#DC2626' },
    { name: 'Ice', color: '#0891B2' },
    { name: 'Lightning', color: '#FACC15' },
    { name: 'Dark', color: '#374151' },
    { name: 'Light', color: '#F9FAFB' },
  ],
  factions: [
    { name: 'Horizon Academy', description: 'Academy students and staff' },
    { name: 'Independent', description: 'Freelance walkers' },
    { name: 'Government', description: 'Official agents' },
    { name: 'Mysterious', description: 'Unknown origins' },
  ],
  get tags() {
    const allTags = HORIZON_WALKER_CHARACTERS.flatMap(char => char.tags || []);
    return [...new Set(allTags)].sort();
  },
  statNames: [
    { key: 'meleeAtk', name: 'Melee ATK', description: 'Close combat attack power' },
    { key: 'rangedAtk', name: 'Ranged ATK', description: 'Projectile attack power' },
    { key: 'magicAtk', name: 'Magic ATK', description: 'Spell casting power' },
    { key: 'maxHp', name: 'Max HP', description: 'Maximum health points' },
    { key: 'spd', name: 'SPD', description: 'Movement and action speed' },
    { key: 'startingAp', name: 'Starting AP', description: 'Initial action points' },
    { key: 'apRecovery', name: 'AP Recovery', description: 'Action point regeneration rate' },
    { key: 'accuracy', name: 'Accuracy', description: 'Hit chance percentage' },
    { key: 'evade', name: 'Evade', description: 'Dodge chance percentage' },
    { key: 'critRate', name: 'Crit Rate', description: 'Critical hit chance percentage' },
    { key: 'critDmg', name: 'Crit DMG', description: 'Critical damage multiplier' },
    { key: 'technic', name: 'Technic', description: 'Technical skill proficiency' },
    { key: 'strength', name: 'Strength', description: 'Physical power and melee damage' },
    { key: 'intelligence', name: 'Intelligence', description: 'Mental capacity and magic power' },
    { key: 'vitality', name: 'Vitality', description: 'Health and endurance' },
    { key: 'agility', name: 'Agility', description: 'Speed and dexterity' },
  ],
  maxLevel: 60,
};

// Character array - sorted alphabetically by name
export const HORIZON_WALKER_CHARACTERS = [
  {
    id: 1,
    name: 'Canisk',
    rarity: 'S',
    cost: 5,
    class: 'Warrior',
    element: 'Physical',
    faction: 'Independent',
    role: 'Tank',
    tags: ['Warrior', 'Tank', 'Melee Damage', 'Slash Damage', 'Physical Damage', 'Counterattack', 'Taunt', 'Self-Healing', 'Berserker', 'High Defense', 'Area Damage'],
    stats: { 
      meleeAtk: 298, rangedAtk: 122, magicAtk: 76, maxHp: 972,
      spd: 92, startingAp: 128, apRecovery: 102, accuracy: 102,
      evade: 115, critRate: 10, critDmg: 156,
      strength: 17, technic: 7, intelligence: 6, vitality: 16, agility: 9
    },
    image: '/images/games/horizon-walker/characters/Canisk.jpg',
    slug: 'canisk',
    detailUrl: '/guides/horizon-walker/characters/canisk',
  },
  {
    id: 2,
    name: 'Everette',
    rarity: 'EX',
    cost: 8,
    class: 'Mage',
    element: 'Magic',
    faction: 'Independent',
    role: 'Mage',
    tags: ['Mage', 'Magic User', 'Area Damage', 'Support', 'Teleportation', 'Crowd Control', 'Team Buffer', 'Heat Damage', 'Immaterial Damage'],
    stats: { 
      meleeAtk: 64, rangedAtk: 89, magicAtk: 496, maxHp: 832,
      spd: 83, startingAp: 117, apRecovery: 112, accuracy: 102,
      evade: 171, critRate: 10, critDmg: 150,
      strength: 5, technic: 7, intelligence: 30, vitality: 13, agility: 13
    },
    image: '/images/games/horizon-walker/characters/Everette.jpg',
    slug: 'everette',
    detailUrl: '/guides/horizon-walker/characters/everette',
  },
  {
    id: 3,
    name: 'Gridelda',
    rarity: 'EX',
    cost: 8,
    class: 'Mage',
    element: 'Magic',
    faction: 'Independent',
    role: 'Mage',
    tags: ['Mage', 'Magic User', 'Area Damage', 'Support', 'Team Buffer', 'Arcane Magic', 'Immaterial Damage', 'Space Manipulation', 'High Evasion', 'AP Support', 'Healing', 'Elemental'],
    stats: { 
      meleeAtk: 76, rangedAtk: 89, magicAtk: 464, maxHp: 576,
      spd: 83, startingAp: 134, apRecovery: 142, accuracy: 102,
      evade: 320, critRate: 10, critDmg: 150,
      strength: 6, technic: 7, intelligence: 27, vitality: 9, agility: 24
    },
    image: '/images/games/horizon-walker/characters/Gridelda.jpg',
    slug: 'gridelda',
    detailUrl: '/guides/horizon-walker/characters/gridelda',
  },
  {
    id: 4,
    name: 'Kalina',
    rarity: 'SS',
    cost: 4,
    class: 'Assassin',
    element: 'Physical',
    faction: 'Independent',
    role: 'Assassin',
    tags: ['Assassin', 'Melee Damage', 'High Mobility', 'Evasion Tank', 'Slash Damage', 'Counterattack', 'Lifesteal', 'Movement Scaling', 'Self-Sustain'],
    stats: { 
      meleeAtk: 179, rangedAtk: 102, magicAtk: 64, maxHp: 640,
      spd: 157, startingAp: 124, apRecovery: 127, accuracy: 102,
      evade: 228, critRate: 10, critDmg: 150,
      strength: 14, technic: 8, intelligence: 5, vitality: 10, agility: 17
    },
    image: '/images/games/horizon-walker/characters/Kalina.jpg',
    slug: 'kalina',
    detailUrl: '/guides/horizon-walker/characters/kalina',
  },
  {
    id: 5,
    name: 'Min Eun-sol',
    rarity: 'A',
    cost: 6,
    class: 'Support',
    element: 'Magic',
    faction: 'Horizon Academy',
    role: 'Support',
    tags: ['Support', 'Magic User', 'Debuffer', 'Shield Provider', 'AP Manipulation', 'Immaterial Damage'],
    stats: { 
      meleeAtk: 180, rangedAtk: 220, magicAtk: 380, maxHp: 1800,
      spd: 95, startingAp: 2, apRecovery: 12, accuracy: 80,
      evade: 15, critRate: 18, critDmg: 150,
      strength: 5, technic: 6, intelligence: 23, vitality: 15, agility: 7
    },
    image: '/images/games/horizon-walker/characters/Min_Eun_sol.jpg',
    slug: 'min-eun-sol',
    detailUrl: '/guides/horizon-walker/characters/min-eun-sol',
  },
  {
    id: 6,
    name: 'Olivia',
    rarity: 'EX',
    cost: 8,
    class: 'Warrior',
    element: 'Physical',
    faction: 'Independent',
    role: 'Warrior',
    tags: ['Warrior', 'Melee Damage', 'Slash Damage', 'High ATK', 'Counterattack', 'Physical Damage', 'Front-line Fighter', 'Block', 'No Crit', 'AP Generation'],
    stats: { 
      meleeAtk: 312, rangedAtk: 217, magicAtk: 143, maxHp: 1240,
      spd: 115, startingAp: 123, apRecovery: 120, accuracy: 102,
      evade: 204, critRate: 10, critDmg: 150,
      strength: 18, technic: 11, intelligence: 10, vitality: 17, agility: 14
    },
    image: '/images/games/horizon-walker/characters/Olivia.jpg',
    slug: 'olivia',
    detailUrl: '/guides/horizon-walker/characters/olivia',
  },
  {
    id: 7,
    name: 'Yeon Chae-Young',
    rarity: 'S',
    cost: 4,
    class: 'Assassin',
    element: 'Physical',
    faction: 'Government',
    role: 'Assassin',
    tags: ['Assassin', 'Ranged Damage', 'Pierce Damage', 'Stealth', 'Accuracy Support', 'Critical Damage', 'Weakness Hunter', 'Team Buffer', 'Elite Agent', 'Dual Pistols', 'Unblockable Attack'],
    stats: { 
      meleeAtk: 89, rangedAtk: 204, magicAtk: 115, maxHp: 790,
      spd: 88, startingAp: 123, apRecovery: 110, accuracy: 105,
      evade: 102, critRate: 10, critDmg: 150,
      strength: 7, technic: 16, intelligence: 9, vitality: 13, agility: 8
    },
    image: '/images/games/horizon-walker/characters/Yeon_Chae-Young.jpg',
    slug: 'yeon-chae-young',
    detailUrl: '/guides/horizon-walker/characters/yeon-chae-young',
  },
];


// Utility functions
export const getCharacterBySlug = (slug) => {
  return HORIZON_WALKER_CHARACTERS.find(character => character.slug === slug);
};

export const getCharactersByRarity = (rarity) => {
  return HORIZON_WALKER_CHARACTERS.filter(character => character.rarity === rarity);
};

export const getCharactersByTag = (tag) => {
  return HORIZON_WALKER_CHARACTERS.filter(character => 
    character.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
};

// Search function
export const searchCharacters = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return HORIZON_WALKER_CHARACTERS.filter(character =>
    character.name.toLowerCase().includes(lowercaseQuery) ||
    character.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

// Sort functions
export const sortCharacters = (characters, sortBy, order = 'asc') => {
  return [...characters].sort((a, b) => {
    let aValue, bValue;
    
    if (sortBy.startsWith('stats.')) {
      const statKey = sortBy.split('.')[1];
      aValue = a.stats[statKey];
      bValue = b.stats[statKey];
    } else {
      aValue = a[sortBy];
      bValue = b[sortBy];
    }
    
    if (typeof aValue === 'string') {
      return order === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    return order === 'asc' ? aValue - bValue : bValue - aValue;
  });
};

// Get stat display name
export const getStatDisplayName = (statKey) => {
  const stat = gameInfo.statNames.find(s => s.key === statKey);
  return stat ? stat.name : statKey;
};

// Advanced tag categorization for styling (similar to Zone Nova system)
export const getTagCategory = (tag) => {
  const lowerTag = tag.toLowerCase();
  
  // Damage/Scaling tags - Orange
  if (
    lowerTag.includes('damage') ||
    lowerTag.includes('attack') ||
    lowerTag.includes('crit') ||
    lowerTag.includes('immaterial damage') ||
    lowerTag.includes('scale') ||
    lowerTag.includes('penetration') ||
    lowerTag.includes('magic user') ||
    lowerTag.includes('melee') ||
    lowerTag.includes('ranged')
  ) {
    return 'damage-scaling';
  }

  // Team utility tags - Blue
  if (
    lowerTag.includes('support') ||
    lowerTag.includes('shield') ||
    lowerTag.includes('buff') ||
    lowerTag.includes('healing') ||
    lowerTag.includes('debuff') ||
    lowerTag.includes('shield provider') ||
    lowerTag.includes('team') ||
    lowerTag.includes('aura') ||
    lowerTag.includes('barrier')
  ) {
    return 'team-utility';
  }

  // Self utility tags - Green
  if (
    lowerTag.includes('ap manipulation') ||
    lowerTag.includes('ap recovery') ||
    lowerTag.includes('speed') ||
    lowerTag.includes('mobility') ||
    lowerTag.includes('evasion') ||
    lowerTag.includes('self-buff') ||
    lowerTag.includes('energy') ||
    lowerTag.includes('cooldown')
  ) {
    return 'self-utility';
  }

  // Control/Crowd Control tags - Purple
  if (
    lowerTag.includes('debuffer') ||
    lowerTag.includes('control') ||
    lowerTag.includes('stun') ||
    lowerTag.includes('slow') ||
    lowerTag.includes('disable') ||
    lowerTag.includes('interrupt') ||
    lowerTag.includes('crowd control') ||
    lowerTag.includes('cc')
  ) {
    return 'control';
  }

  // Default fallback - General mechanic
  return 'general-mechanic';
};

export default HORIZON_WALKER_CHARACTERS;