// Stella Sora Disc Database
// Imports individual disc data files for centralized disc browsing
// Data structure matches character organization pattern for consistency

// Import all individual disc data files
import { disc as swordAgainstStreamData } from './discs/sword-against-stream.js';
import { disc as mysticBrushstrokesData } from './discs/mystic-brushstrokes.js';
import { disc as sunlitBlossomData } from './discs/sunlit-blossom.js';
import { disc as witchsSwingData } from './discs/witch-s-swing.js';
import { disc as clawTheClawData } from './discs/claw-the-claw.js';
import { disc as ripplesOfNostalgiaData } from './discs/ripples-of-nostalgia.js';
import { disc as daylightGardenData } from './discs/daylight-garden.js';
import { disc as theLostPilgrimData } from './discs/the-lost-pilgrim.js';
import { disc as goodNightData } from './discs/good-night.js';
import { disc as bamBamGirlData } from './discs/bam-bam-girl.js';
import { disc as midnightMayhemData } from './discs/midnight-mayhem.js';

// Centralized disc database array
export const DISCS_DATA = [
  swordAgainstStreamData,
  mysticBrushstrokesData,
  sunlitBlossomData,
  witchsSwingData,
  clawTheClawData,
  ripplesOfNostalgiaData,
  daylightGardenData,
  theLostPilgrimData,
  goodNightData,
  bamBamGirlData,
  midnightMayhemData,
];

// Utility functions for disc data management
export const getAllDiscs = () => {
  return DISCS_DATA.sort((a, b) => a.id - b.id);
};

export const getDiscBySlug = slug => {
  return DISCS_DATA.find(disc => disc.slug === slug);
};

export const getDiscById = id => {
  return DISCS_DATA.find(disc => disc.id === id);
};

export const getDiscsByElement = element => {
  return DISCS_DATA.filter(disc => disc.element === element);
};

export const getDiscsByRarity = rarity => {
  return DISCS_DATA.filter(disc => disc.rarity === rarity);
};

export const getElementsByDisc = () => {
  const elements = [...new Set(DISCS_DATA.map(disc => disc.element))];
  return elements.sort();
};

export const getRaritiesByDisc = () => {
  const rarities = [...new Set(DISCS_DATA.map(disc => disc.rarity))];
  return rarities.sort();
};

// Helper function for tag-based filtering
export const getDiscsByTag = tag => {
  return DISCS_DATA.filter(disc => disc.tags.includes(tag));
};

// Get all unique tags used by discs
export const getAllTags = () => {
  const tags = [...new Set(DISCS_DATA.flatMap(disc => disc.tags))];
  return tags.sort();
};
