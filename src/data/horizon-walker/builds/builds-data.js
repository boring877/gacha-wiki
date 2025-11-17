// Horizon Walker Character Builds Data
// Character builds information for the builds index page

import { getCharacterBySlug } from '../characters.js';

// Horizon Walker Character Builds Data
// Character builds information for the builds index page
// Currently featuring only Juha - the Saint of Bullet

const characterBuilds = [
  {
    id: 1,
    characterSlug: 'juha',
    displayName: 'Juha',
    rarity: 'EX',
    available: true,
  },
];

// Helper function to get rarity badge class
export function getRarityBadgeClass(rarity) {
  // Use data attributes for rarity badges
  return `data-rarity='${rarity}'`;
}

// Filter builds based on availability
export function getAvailableBuilds() {
  return characterBuilds.filter(build => build.available);
}

// Filter builds based on rarity
export function getBuildsByRarity(rarity) {
  return characterBuilds.filter(build => build.rarity === rarity && build.available);
}

// Filter builds based on role
export function getBuildsByRole(role) {
  return characterBuilds.filter(build => build.role === role && build.available);
}

// Get total count of available builds
export function getTotalBuilds() {
  return characterBuilds.filter(build => build.available).length;
}

// Get builds by character slug
export function getBuildByCharacter(slug) {
  return characterBuilds.find(build => build.characterSlug === slug && build.available);
}

// Enhanced build data with character information
export function getEnhancedBuilds() {
  return characterBuilds.map(build => {
    const characterData = getCharacterBySlug(build.characterSlug);
    return {
      ...build,
      cost: characterData?.cost || 0, // Use character database cost, fallback to 0 if not found
      tags: characterData?.tags || [], // Use character database tags
      characterData: characterData || null,
    };
  });
}

// Get enhanced build by character slug
export function getEnhancedBuildByCharacter(slug) {
  const build = characterBuilds.find(build => build.characterSlug === slug && build.available);
  if (!build) return null;

  const characterData = getCharacterBySlug(build.characterSlug);
  return {
    ...build,
    characterData: characterData || null,
  };
}

// Export all builds data
export { characterBuilds };

// Export metadata for SEO
export const buildsSEO = {
  title: 'Horizon Walker Character Builds - Juha Build Guide',
  description:
    'Complete build guide for Juha, the Saint of Bullet in Horizon Walker. Featuring optimized ranged DPS build with critical focus and team buff support.',
  keywords: [
    'Horizon Walker',
    'Juha build',
    'Saint of Bullet',
    'character builds',
    'build guides',
    'ranged DPS',
    'archer build',
    'critical damage',
    'team buffer',
    'AP support',
    'optimization',
    'tactical builds',
  ],
};
