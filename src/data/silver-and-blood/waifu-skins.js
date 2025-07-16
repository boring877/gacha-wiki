// Silver and Blood Waifu Skins Database
// This file contains skin data for Silver and Blood characters

// Game-specific skin types
export const skinInfo = {
  types: ['gif', 'mp4', 'image'],
};

// Import individual character skin files
import { dalcarloSkins } from './skins/dalcarlo.js';
import { hatiSkins } from './skins/hati.js';
import { aionaSkins } from './skins/aiona.js';

// Character skins array - Add new character skins here
export const waifuSkins = [
  dalcarloSkins,
  hatiSkins,
  aionaSkins,
  // Add more character skins as they are created
];

// Utility functions for skin management
export function getCharacterSkins(characterId) {
  return waifuSkins.find(character => character.id === characterId);
}

export function getAllSkins() {
  return waifuSkins.flatMap(character =>
    character.skins.map(skin => ({
      ...skin,
      characterName: character.characterName,
      characterId: character.id,
      characterImage: character.image,
    }))
  );
}

export function getCharacterNames() {
  return waifuSkins.map(character => ({
    id: character.id,
    name: character.characterName,
    image: character.image,
    skinCount: character.skins.length,
  }));
}
