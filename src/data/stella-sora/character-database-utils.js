// Stella Sora Character Database Utilities
// Helper functions for character data processing and validation

import { STELLA_SORA_CHARACTERS, gameInfo } from './characters.js';

// Data validation utilities
export function validateCharacterData(characterData) {
  const requiredFields = ['id', 'name', 'rarity', 'element', 'role', 'stats'];
  const errors = [];

  for (const field of requiredFields) {
    if (!characterData[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  // Validate stats
  if (characterData.stats) {
    const requiredStats = ['hp', 'attack', 'defense', 'critRate', 'critDmg'];
    for (const stat of requiredStats) {
      if (typeof characterData.stats[stat] !== 'number' || characterData.stats[stat] < 0) {
        errors.push(`Invalid or missing stat: ${stat}`);
      }
    }
  }

  // Validate rarity
  if (characterData.rarity && !gameInfo.rarities.includes(characterData.rarity)) {
    errors.push(`Invalid rarity: ${characterData.rarity}`);
  }

  // Validate element
  if (characterData.element && !gameInfo.elements.some(el => el.name === characterData.element)) {
    errors.push(`Invalid element: ${characterData.element}`);
  }

  // Validate role
  if (characterData.role && !gameInfo.roles.some(role => role.name === characterData.role)) {
    errors.push(`Invalid role: ${characterData.role}`);
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

// Data sanitization
export function sanitizeCharacterData(characterData) {
  return {
    id: parseInt(characterData.id) || 0,
    name: String(characterData.name || '').trim(),
    rarity: characterData.rarity || 'R',
    element: characterData.element || 'Light',
    role: characterData.role || 'Support',
    weapon: characterData.weapon || 'Staff',
    cocochaLevel: parseInt(characterData.cocochaLevel) || 1,
    tags: Array.isArray(characterData.tags)
      ? characterData.tags.map(tag => String(tag).trim()).filter(Boolean)
      : [],
    stats: {
      hp: Math.max(0, parseFloat(characterData.stats?.hp) || 0),
      attack: Math.max(0, parseFloat(characterData.stats?.attack) || 0),
      defense: Math.max(0, parseFloat(characterData.stats?.defense) || 0),
      critRate: Math.max(0, Math.min(100, parseFloat(characterData.stats?.critRate) || 0)),
      critDmg: Math.max(0, parseFloat(characterData.stats?.critDmg) || 0),
    },
    image:
      characterData.image ||
      `/images/games/stella-sora/characters/${characterData.name || 'default'}.jpg`,
    slug: characterData.slug || (characterData.name || '').toLowerCase().replace(/\s+/g, '-'),
    detailUrl:
      characterData.detailUrl ||
      `/guides/stella-sora/characters/${characterData.slug || 'default'}`,
  };
}

// Sorting utilities
export function sortCharacters(characters, sortBy, sortOrder = 'asc') {
  const sorted = [...characters];

  switch (sortBy) {
    case 'name':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'rarity':
      const rarityOrder = { SSR: 3, SR: 2, R: 1 };
      sorted.sort((a, b) => (rarityOrder[b.rarity] || 0) - (rarityOrder[a.rarity] || 0));
      break;
    case 'hp':
      sorted.sort((a, b) => b.stats.hp - a.stats.hp);
      break;
    case 'attack':
      sorted.sort((a, b) => b.stats.attack - a.stats.attack);
      break;
    case 'defense':
      sorted.sort((a, b) => b.stats.defense - a.stats.defense);
      break;
    case 'critRate':
      sorted.sort((a, b) => b.stats.critRate - a.stats.critRate);
      break;
    case 'critDmg':
      sorted.sort((a, b) => b.stats.critDmg - a.stats.critDmg);
      break;
    case 'cocochaLevel':
      sorted.sort((a, b) => b.cocochaLevel - a.cocochaLevel);
      break;
    default:
      // Default sort by name
      sorted.sort((a, b) => a.name.localeCompare(b.name));
  }

  return sortOrder === 'desc' ? sorted.reverse() : sorted;
}

// Filtering utilities
export function filterCharacters(characters, filters) {
  let filtered = [...characters];

  if (filters.rarity) {
    filtered = filtered.filter(char => char.rarity === filters.rarity);
  }

  if (filters.element) {
    filtered = filtered.filter(char => char.element === filters.element);
  }

  if (filters.role) {
    filtered = filtered.filter(char => char.role === filters.role);
  }

  if (filters.weapon) {
    filtered = filtered.filter(char => char.weapon === filters.weapon);
  }

  if (filters.tags && filters.tags.length > 0) {
    filtered = filtered.filter(char => filters.tags.some(tag => char.tags.includes(tag)));
  }

  if (filters.minCocochaLevel) {
    filtered = filtered.filter(char => char.cocochaLevel >= filters.minCocochaLevel);
  }

  if (filters.search) {
    const searchTerm = filters.search.toLowerCase();
    filtered = filtered.filter(
      char =>
        char.name.toLowerCase().includes(searchTerm) ||
        char.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }

  return filtered;
}

// Search utility
export function searchCharacters(query) {
  const searchTerm = query.toLowerCase();
  return STELLA_SORA_CHARACTERS.filter(
    char =>
      char.name.toLowerCase().includes(searchTerm) ||
      char.element.toLowerCase().includes(searchTerm) ||
      char.role.toLowerCase().includes(searchTerm) ||
      char.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}

// Statistics utilities
export function getCharacterStatistics() {
  const stats = {
    totalCharacters: STELLA_SORA_CHARACTERS.length,
    byRarity: {},
    byElement: {},
    byRole: {},
    averageStats: {
      hp: 0,
      attack: 0,
      defense: 0,
      critRate: 0,
      critDmg: 0,
    },
  };

  // Count by rarity
  gameInfo.rarities.forEach(rarity => {
    stats.byRarity[rarity] = STELLA_SORA_CHARACTERS.filter(char => char.rarity === rarity).length;
  });

  // Count by element
  gameInfo.elements.forEach(element => {
    stats.byElement[element.name] = STELLA_SORA_CHARACTERS.filter(
      char => char.element === element.name
    ).length;
  });

  // Count by role
  gameInfo.roles.forEach(role => {
    stats.byRole[role.name] = STELLA_SORA_CHARACTERS.filter(char => char.role === role.name).length;
  });

  // Calculate average stats
  const totalStats = STELLA_SORA_CHARACTERS.reduce(
    (acc, char) => ({
      hp: acc.hp + char.stats.hp,
      attack: acc.attack + char.stats.attack,
      defense: acc.defense + char.stats.defense,
      critRate: acc.critRate + char.stats.critRate,
      critDmg: acc.critDmg + char.stats.critDmg,
    }),
    { hp: 0, attack: 0, defense: 0, critRate: 0, critDmg: 0 }
  );

  const count = STELLA_SORA_CHARACTERS.length;
  stats.averageStats = {
    hp: Math.round(totalStats.hp / count),
    attack: Math.round(totalStats.attack / count),
    defense: Math.round(totalStats.defense / count),
    critRate: Math.round((totalStats.critRate / count) * 10) / 10,
    critDmg: Math.round(totalStats.critDmg / count),
  };

  return stats;
}

// Export utility functions for template usage
export function getRarityBadgeClass(rarity) {
  return `rarity-badge ${rarity.toLowerCase()}`;
}

export function getElementClass(element) {
  return `element-${element.toLowerCase()}`;
}

export function getRoleIcon(role) {
  const roleIcons = {
    DPS: '⚔️',
    Tank: '🛡️',
    Healer: '💚',
    Support: '✨',
    Buffer: '🔮',
  };
  return roleIcons[role] || '❓';
}
