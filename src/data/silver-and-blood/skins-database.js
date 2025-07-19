// Skins Database Management System
// Scalable structure for character skins - mirrors gallery-database.js

import { dalcarloSkinsData } from './characterskins/dalcarlo/dalcarlo-skins.js';
import { aionaSkinsData } from './characterskins/aiona/aiona-skins.js';
import { hatiSkinsData } from './characterskins/hati/hati-skins.js';

// Central character skins registry
export const skinsCharacters = [
  dalcarloSkinsData,
  aionaSkinsData,
  hatiSkinsData,
  // Add more characters here as they are created
];

/**
 * Get all characters for skins database
 */
export function getAllSkinsCharacters() {
  return skinsCharacters;
}

/**
 * Get character skins by ID
 */
export function getCharacterSkins(characterId) {
  return skinsCharacters.find(character => character.id === characterId);
}

/**
 * Get character for skins database display
 * Calculates skin count and formats data for grid display
 */
export function getSkinsCharacterForDisplay(character) {
  return {
    id: character.id,
    name: character.character,
    image: character.image,
    skinCount: character.skins.length,
    hasSkins: character.skins.length > 0,
  };
}

/**
 * Get all characters formatted for skins database display
 */
export function getAllSkinsCharactersForDisplay() {
  return skinsCharacters.map(character => getSkinsCharacterForDisplay(character));
}

/**
 * Get all skins across all characters
 */
export function getAllSkins() {
  return skinsCharacters.flatMap(character =>
    character.skins.map(skin => ({
      ...skin,
      characterName: character.character,
      characterId: character.id,
      characterImage: character.image,
    }))
  );
}

/**
 * Get skins by type (image, mp4, gif)
 */
export function getSkinsByType(skinType) {
  return getAllSkins().filter(skin => skin.type === skinType);
}

/**
 * Search skins by name or tags
 */
export function searchSkins(query) {
  if (!query) return getAllSkins();

  const searchTerm = query.toLowerCase();
  return getAllSkins().filter(
    skin =>
      skin.name.toLowerCase().includes(searchTerm) ||
      skin.description.toLowerCase().includes(searchTerm) ||
      skin.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      skin.characterName.toLowerCase().includes(searchTerm)
  );
}

/**
 * Get skins database statistics
 */
export function getSkinsStatistics() {
  const characters = getAllSkinsCharacters();
  const totalCharacters = characters.length;
  const allSkins = getAllSkins();
  const totalSkins = allSkins.length;

  const skinsByType = {
    image: getSkinsByType('image').length,
    mp4: getSkinsByType('mp4').length,
    gif: getSkinsByType('gif').length,
  };

  return {
    totalCharacters,
    totalSkins,
    averageSkinsPerCharacter: totalCharacters > 0 ? Math.round(totalSkins / totalCharacters) : 0,
    skinsByType,
  };
}

/**
 * Validate character skins data structure
 */
export function validateCharacterSkinsData(character) {
  const required = ['id', 'character', 'image', 'skins'];
  const missing = required.filter(field => !character[field]);

  if (missing.length > 0) {
    // console.warn(`Character ${character.id || 'unknown'} missing required fields:`, missing);
    return false;
  }

  // Validate each skin
  for (const skin of character.skins) {
    const skinRequired = ['id', 'name', 'type', 'mediaUrl', 'thumbnailUrl'];
    const skinMissing = skinRequired.filter(field => !skin[field]);

    if (skinMissing.length > 0) {
      // console.warn(`Skin ${skin.id || 'unknown'} missing required fields:`, skinMissing);
      return false;
    }
  }

  return true;
}

/**
 * Add character to skins database (for future use)
 */
export function addCharacterToSkinsDatabase(characterData) {
  if (!validateCharacterSkinsData(characterData)) {
    throw new Error('Invalid character skins data');
  }

  // Check if character already exists
  const existingCharacter = getCharacterSkins(characterData.id);
  if (existingCharacter) {
    throw new Error(`Character with ID ${characterData.id} already exists`);
  }

  skinsCharacters.push(characterData);
  return characterData;
}

export default {
  getAllSkinsCharacters,
  getCharacterSkins,
  getSkinsCharacterForDisplay,
  getAllSkinsCharactersForDisplay,
  getAllSkins,
  getSkinsByType,
  searchSkins,
  getSkinsStatistics,
  validateCharacterSkinsData,
  addCharacterToSkinsDatabase,
};
