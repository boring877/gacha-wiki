/**
 * Busty Burst Fantasy - Character Weapons Data
 * Maps characters to their compatible weapon types
 */

import { BUSTY_BURST_CHARACTER_INFO, getAllCharacters } from './character-info.js';
import { weapons, weaponTypes } from './weapons.js';

/**
 * Get all characters that use a specific weapon type
 * @param {string} weaponType - The weapon type (Slash, Pierce, Strike/Blunt, Shoot/Ranged, Throw)
 * @returns {Array} Array of character objects
 */
export const getCharactersByWeaponType = weaponType => {
  return getAllCharacters().filter(char => char.weaponType === weaponType);
};

/**
 * Get all weapons for a specific type
 * @param {string} weaponType - The weapon type
 * @returns {Array} Array of weapon objects
 */
export const getWeaponsByType = weaponType => {
  return weapons[weaponType] || [];
};

/**
 * Get character-weapon data organized by weapon type
 * @returns {Object} Object with weaponType keys containing characters and weapons
 */
export const getCharacterWeaponData = () => {
  const data = {};

  weaponTypes.forEach(type => {
    data[type] = {
      characters: getCharactersByWeaponType(type),
      weapons: getWeaponsByType(type),
    };
  });

  return data;
};

/**
 * Get count of characters per weapon type
 * @returns {Object} Object with weaponType keys and character counts
 */
export const getCharacterCountByWeaponType = () => {
  const counts = {};

  weaponTypes.forEach(type => {
    counts[type] = getCharactersByWeaponType(type).length;
  });

  return counts;
};

export { weaponTypes };
