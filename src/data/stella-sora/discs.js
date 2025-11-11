// Stella Sora Disc Database
// Imports individual disc data files for centralized disc browsing
// Data structure matches character organization pattern for consistency

// Import all individual disc data files
import { swordAgainstStreamData } from './discs/sword-against-stream.js';
import { mysticBrushstrokesData } from './discs/mystic-brushstrokes.js';
import { sunlitBlossomData } from './discs/sunlit-blossom.js';
import { witchsSwingData } from './discs/witchs-swing.js';
import { clawTheClawData } from './discs/claw-the-claw.js';
import { ripplesOfNostalgiaData } from './discs/ripples-of-nostalgia.js';
import { daylightGardenData } from './discs/daylight-garden.js';
import { theLostPilgrimData } from './discs/the-lost-pilgrim.js';
import { goodNightData } from './discs/good-night.js';
import { bamBamGirlData } from './discs/bam-bam-girl.js';
import { midnightMayhemData } from './discs/midnight-mayhem.js';

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
