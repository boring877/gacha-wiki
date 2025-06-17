// src/data/characterUtils.js

import { ZONE_NOVA_CHARACTERS } from './zoneNovaCharacters';

// Basic getters
export function getCharacterBySlug(slug) {
  return ZONE_NOVA_CHARACTERS.find(char => char.slug === slug);
}

export function getCharacterById(id) {
  return ZONE_NOVA_CHARACTERS.find(char => char.id === id);
}

export function getCharactersByElement(element) {
  return ZONE_NOVA_CHARACTERS.filter(char => char.element === element);
}

export function getCharactersByRarity(rarity) {
  return ZONE_NOVA_CHARACTERS.filter(char => char.rarity === rarity);
}

export function getCharactersByRole(role) {
  return ZONE_NOVA_CHARACTERS.filter(char => char.role === role);
}

// Advanced filtering
export function filterCharacters(filters = {}) {
  return ZONE_NOVA_CHARACTERS.filter(char => {
    if (filters.element && char.element !== filters.element) return false;
    if (filters.rarity && char.rarity !== filters.rarity) return false;
    if (filters.role && char.role !== filters.role) return false;
    
    // Stat filters
    if (filters.minHp && char.stats.hp < filters.minHp) return false;
    if (filters.maxHp && char.stats.hp > filters.maxHp) return false;
    if (filters.minAttack && char.stats.attack < filters.minAttack) return false;
    if (filters.maxAttack && char.stats.attack > filters.maxAttack) return false;
    
    return true;
  });
}

// Sorting
export function sortCharacters(characters, sortKey, direction = 'desc') {
  const sorted = [...characters];
  
  sorted.sort((a, b) => {
    let aVal, bVal;
    
    // Handle nested stats
    if (['hp', 'attack', 'defense', 'energyRecovery', 'critRate', 'critDmg'].includes(sortKey)) {
      aVal = a.stats[sortKey];
      bVal = b.stats[sortKey];
    } else {
      aVal = a[sortKey];
      bVal = b[sortKey];
    }
    
    // Handle string comparison
    if (typeof aVal === 'string') {
      return direction === 'asc' 
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    }
    
    // Handle number comparison
    return direction === 'asc' ? aVal - bVal : bVal - aVal;
  });
  
  return sorted;
}

// Search functionality
export function searchCharacters(query) {
  const searchTerm = query.toLowerCase();
  
  return ZONE_NOVA_CHARACTERS.filter(char => 
    char.name.toLowerCase().includes(searchTerm) ||
    char.element.toLowerCase().includes(searchTerm) ||
    char.role.toLowerCase().includes(searchTerm) ||
    char.rarity.toLowerCase().includes(searchTerm)
  );
}

// Analytics helpers
export function getCharacterStats() {
  const total = ZONE_NOVA_CHARACTERS.length;
  
  const byRarity = ZONE_NOVA_CHARACTERS.reduce((acc, char) => {
    acc[char.rarity] = (acc[char.rarity] || 0) + 1;
    return acc;
  }, {});
  
  const byElement = ZONE_NOVA_CHARACTERS.reduce((acc, char) => {
    acc[char.element] = (acc[char.element] || 0) + 1;
    return acc;
  }, {});
  
  const byRole = ZONE_NOVA_CHARACTERS.reduce((acc, char) => {
    acc[char.role] = (acc[char.role] || 0) + 1;
    return acc;
  }, {});
  
  return {
    total,
    byRarity,
    byElement,
    byRole,
    averageStats: {
      hp: Math.round(ZONE_NOVA_CHARACTERS.reduce((sum, char) => sum + char.stats.hp, 0) / total),
      attack: Math.round(ZONE_NOVA_CHARACTERS.reduce((sum, char) => sum + char.stats.attack, 0) / total),
      defense: Math.round(ZONE_NOVA_CHARACTERS.reduce((sum, char) => sum + char.stats.defense, 0) / total)
    }
  };
}

// Export for tier list or team building features
export function getTopCharactersByStat(stat, limit = 5) {
  return sortCharacters(ZONE_NOVA_CHARACTERS, stat, 'desc').slice(0, limit);
}

// Team composition helpers
export function validateTeamComposition(characterIds, maxTeamSize = 4) {
  const team = characterIds.map(id => getCharacterById(id)).filter(Boolean);
  
  if (team.length > maxTeamSize) {
    return { valid: false, error: `Team size exceeds maximum of ${maxTeamSize}` };
  }
  
  const roles = team.map(char => char.role);
  const elements = team.map(char => char.element);
  
  return {
    valid: true,
    composition: {
      size: team.length,
      roles: roles.reduce((acc, role) => {
        acc[role] = (acc[role] || 0) + 1;
        return acc;
      }, {}),
      elements: elements.reduce((acc, element) => {
        acc[element] = (acc[element] || 0) + 1;
        return acc;
      }, {}),
      hasHealer: roles.includes('Healer'),
      hasTank: roles.includes('Tank'),
      totalPower: team.reduce((sum, char) => sum + char.stats.hp + char.stats.attack + char.stats.defense, 0)
    }
  };
}
