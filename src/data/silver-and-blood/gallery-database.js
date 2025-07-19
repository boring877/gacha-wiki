// Gallery Database Management System
// Scalable structure for character video galleries

import { dalcarloData } from './charactergailrydatabse/dalcarlo/dalcarlo.js';
import { lamiaData } from './charactergailrydatabse/lamia/lamia.js';

// Central character registry
export const galleryCharacters = [
  dalcarloData,
  lamiaData,
  // Add more characters here as they are created
  // hatiData,
  // aionaData,
];

/**
 * Get all characters for gallery database
 */
export function getAllGalleryCharacters() {
  return galleryCharacters;
}

/**
 * Get character by ID
 */
export function getGalleryCharacter(characterId) {
  return galleryCharacters.find(character => character.id === characterId);
}

/**
 * Get character for gallery database display
 * Calculates video count and formats data for grid display
 */
export function getGalleryCharacterForDisplay(character) {
  // Count available videos
  let videoCount = 0;
  if (character.pvVideo) videoCount++;
  if (character.characterVideo) videoCount++;
  if (character.skillCutsceneVideo) videoCount++;
  if (character.skills && character.skills.length > 0) videoCount += character.skills.length;

  return {
    id: character.id,
    name: character.character,
    image: character.image,
    videoCount: videoCount,
    hasVideos: videoCount > 0,
  };
}

/**
 * Get all characters formatted for gallery database display
 */
export function getAllGalleryCharactersForDisplay() {
  return galleryCharacters.map(character => getGalleryCharacterForDisplay(character));
}

/**
 * Get character statistics
 */
export function getGalleryStatistics() {
  const characters = getAllGalleryCharacters();
  const totalCharacters = characters.length;
  const totalVideos = characters.reduce((total, character) => {
    return total + getGalleryCharacterForDisplay(character).videoCount;
  }, 0);

  return {
    totalCharacters,
    totalVideos,
    averageVideosPerCharacter: totalCharacters > 0 ? Math.round(totalVideos / totalCharacters) : 0,
  };
}

/**
 * Search characters by name
 */
export function searchGalleryCharacters(query) {
  if (!query) return getAllGalleryCharacters();

  const searchTerm = query.toLowerCase();
  return galleryCharacters.filter(
    character =>
      character.character.toLowerCase().includes(searchTerm) ||
      character.id.toLowerCase().includes(searchTerm)
  );
}

/**
 * Get characters with specific video types
 */
export function getCharactersWithVideoType(videoType) {
  return galleryCharacters.filter(character => {
    switch (videoType) {
      case 'pv':
        return character.pvVideo;
      case 'character':
        return character.characterVideo;
      case 'skillCutscene':
        return character.skillCutsceneVideo;
      case 'skills':
        return character.skills && character.skills.length > 0;
      default:
        return false;
    }
  });
}

/**
 * Validate character data structure
 */
export function validateCharacterData(character) {
  const required = ['id', 'character', 'image'];
  const missing = required.filter(field => !character[field]);

  if (missing.length > 0) {
    // console.warn(`Character ${character.id || 'unknown'} missing required fields:`, missing);
    return false;
  }

  return true;
}

/**
 * Add character to gallery (for future use)
 */
export function addCharacterToGallery(characterData) {
  if (!validateCharacterData(characterData)) {
    throw new Error('Invalid character data');
  }

  // Check if character already exists
  const existingCharacter = getGalleryCharacter(characterData.id);
  if (existingCharacter) {
    throw new Error(`Character with ID ${characterData.id} already exists`);
  }

  galleryCharacters.push(characterData);
  return characterData;
}

export default {
  getAllGalleryCharacters,
  getGalleryCharacter,
  getGalleryCharacterForDisplay,
  getAllGalleryCharactersForDisplay,
  getGalleryStatistics,
  searchGalleryCharacters,
  getCharactersWithVideoType,
  validateCharacterData,
  addCharacterToGallery,
};
