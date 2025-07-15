// Character utility functions for common operations
// Reduces code duplication across character pages

import type { ZoneNovaCharacter, SilverBloodCharacter, BaseCharacter } from '../types/characters';

/**
 * Formats character stats for display
 */
export function formatCharacterStats(
  character: ZoneNovaCharacter | SilverBloodCharacter
): Record<string, string> {
  const stats: Record<string, string> = {};

  if ('element' in character) {
    // Zone Nova character
    stats['HP'] = character.stats.hp.toLocaleString();
    stats['Attack'] = character.stats.attack.toLocaleString();
    stats['Defense'] = character.stats.defense.toLocaleString();
    stats['Energy Recovery'] = character.stats.energyRecovery.toString();
    stats['Crit Rate'] = `${character.stats.critRate}%`;
    stats['Crit Damage'] = `${character.stats.critDmg}%`;
  } else {
    // Silver and Blood character
    stats['HP'] = character.stats.hp.toLocaleString();
    stats['Attack'] = character.stats.attack.toLocaleString();
    stats['P.DEF'] = character.stats.physicalDefense.toLocaleString();
    stats['M.DEF'] = character.stats.magicalDefense.toLocaleString();
    stats['Attack Speed'] = character.stats.attackSpeed.toString();
    stats['Bloodsoul Recovery'] = character.stats.bloodsoulRecovery.toString();
    stats['Crit Rate'] = `${character.stats.critRate}%`;
    stats['Crit Damage'] = `${character.stats.critDamage}%`;
  }

  return stats;
}

/**
 * Gets character rarity color class
 */
export function getRarityColor(rarity: string): string {
  switch (rarity) {
    case 'SSR':
      return 'rarity-ssr';
    case 'SR':
      return 'rarity-sr';
    case 'R':
      return 'rarity-r';
    default:
      return 'rarity-default';
  }
}

/**
 * Gets element color class for Zone Nova characters
 */
export function getElementColor(element: string): string {
  switch (element) {
    case 'Fire':
      return 'element-fire';
    case 'Wind':
      return 'element-wind';
    case 'Holy':
      return 'element-holy';
    case 'Chaos':
      return 'element-chaos';
    case 'Ice':
      return 'element-ice';
    default:
      return 'element-default';
  }
}

/**
 * Gets faction color class for Silver and Blood characters
 */
export function getFactionColor(faction: string): string {
  switch (faction) {
    case 'Kingdom':
      return 'faction-kingdom';
    case 'Ancestors':
      return 'faction-ancestors';
    case 'Church':
      return 'faction-church';
    case 'Bloodborn':
      return 'faction-bloodborn';
    default:
      return 'faction-default';
  }
}

/**
 * Filters characters by rarity
 */
export function filterByRarity<T extends BaseCharacter>(characters: T[], rarity: string): T[] {
  return characters.filter(character => character.rarity === rarity);
}

/**
 * Filters Zone Nova characters by element
 */
export function filterByElement(
  characters: ZoneNovaCharacter[],
  element: string
): ZoneNovaCharacter[] {
  return characters.filter(character => character.element === element);
}

/**
 * Filters Zone Nova characters by role
 */
export function filterByRole(characters: ZoneNovaCharacter[], role: string): ZoneNovaCharacter[] {
  return characters.filter(character => character.role === role);
}

/**
 * Filters Silver and Blood characters by faction
 */
export function filterByFaction(
  characters: SilverBloodCharacter[],
  faction: string
): SilverBloodCharacter[] {
  return characters.filter(character => character.faction === faction);
}

/**
 * Filters Silver and Blood characters by class
 */
export function filterByClass(
  characters: SilverBloodCharacter[],
  characterClass: string
): SilverBloodCharacter[] {
  return characters.filter(character => character.class === characterClass);
}

/**
 * Sorts characters by name (alphabetically)
 */
export function sortByName<T extends BaseCharacter>(characters: T[]): T[] {
  return [...characters].sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Sorts characters by rarity (SSR > SR > R)
 */
export function sortByRarity<T extends BaseCharacter>(characters: T[]): T[] {
  const rarityOrder = { SSR: 3, SR: 2, R: 1 };
  return [...characters].sort((a, b) => {
    const aOrder = rarityOrder[a.rarity as keyof typeof rarityOrder] || 0;
    const bOrder = rarityOrder[b.rarity as keyof typeof rarityOrder] || 0;
    return bOrder - aOrder;
  });
}

/**
 * Sorts Zone Nova characters by attack stat
 */
export function sortByAttack(characters: ZoneNovaCharacter[]): ZoneNovaCharacter[] {
  return [...characters].sort((a, b) => b.stats.attack - a.stats.attack);
}

/**
 * Sorts characters by HP stat
 */
export function sortByHP(
  characters: ZoneNovaCharacter[] | SilverBloodCharacter[]
): (ZoneNovaCharacter | SilverBloodCharacter)[] {
  return [...characters].sort((a, b) => b.stats.hp - a.stats.hp);
}

/**
 * Searches characters by name (case-insensitive)
 */
export function searchCharacters<T extends BaseCharacter>(characters: T[], query: string): T[] {
  const lowercaseQuery = query.toLowerCase();
  return characters.filter(character => character.name.toLowerCase().includes(lowercaseQuery));
}

/**
 * Gets character by slug
 */
export function getCharacterBySlug<T extends BaseCharacter>(
  characters: T[],
  slug: string
): T | undefined {
  return characters.find(character => character.slug === slug);
}

/**
 * Generates character image alt text
 */
export function getCharacterImageAlt(character: BaseCharacter): string {
  return `${character.name} - ${character.rarity} character portrait`;
}

/**
 * Generates character page title
 */
export function getCharacterPageTitle(character: BaseCharacter, gameName: string): string {
  return `${character.name} Guide - ${gameName} | Gacha Wiki`;
}

/**
 * Generates character meta description
 */
export function getCharacterMetaDescription(character: BaseCharacter, gameName: string): string {
  return `Complete ${character.name} character guide for ${gameName}. Stats, skills, build recommendations, and more on Gacha Wiki.`;
}

/**
 * Formats number with commas
 */
export function formatNumber(num: number): string {
  return num.toLocaleString();
}

/**
 * Capitalizes first letter of each word
 */
export function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Creates a slug from a string
 */
export function createSlug(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Validates character data structure
 */
export function validateCharacter(character: any): character is BaseCharacter {
  return (
    typeof character.id === 'number' &&
    typeof character.name === 'string' &&
    typeof character.slug === 'string' &&
    typeof character.detailUrl === 'string' &&
    typeof character.image === 'string' &&
    ['SSR', 'SR', 'R'].includes(character.rarity)
  );
}
