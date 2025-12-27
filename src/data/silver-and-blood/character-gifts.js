// Silver and Blood - Character Gifts Helper
// This file provides character-to-camp mappings and gift recommendations
// Uses affinity_data.js templates which define Lv40 and Lv30 character groups

import AFFINITY_DATA from './affinity_data.js';
import charactersInfoData from './characters_info.json';
import { CAMP_INFO, getCampClass, getGiftIconKey } from './gifts.js';

// Build a set of valid character names from characters_info.json
const validCharacterNames = new Set(charactersInfoData.characters.map(c => c.name));

// Map character camp names to camp numbers
export const CAMP_NAME_TO_NUMBER = {
  'Universal': 0,
  'Ancestral': 1,
  'Tempus Church': 2,
  'Bloodborn': 3,
  'Kingdom': 4,
  'Otherworldly': 5,
};

// Camp display order (for page sections)
export const CAMP_ORDER = ['Ancestral', 'Tempus Church', 'Bloodborn', 'Kingdom', 'Otherworldly'];

// Calculate how many gifts needed to reach max rank
export function calculateGiftQuantities(totalExpRequired, gifts) {
  return gifts.map(gift => {
    const expPerGift = gift.matchingCampExp;
    const quantityNeeded = Math.ceil(totalExpRequired / expPerGift);
    return {
      ...gift,
      quantityNeeded,
    };
  });
}

// Get recommended gifts for a specific camp (camp-specific + universal) with quantities
export function getGiftsForCamp(campName, totalExpRequired = 0) {
  const campNumber = CAMP_NAME_TO_NUMBER[campName];
  if (campNumber === undefined) return [];

  const gifts = AFFINITY_DATA.gifts;

  const filteredGifts = gifts
    .filter(g => g.camp === campNumber || g.camp === 0)
    .sort((a, b) => {
      // Sort by camp first (camp-specific before universal), then by rarity (highest first)
      if (a.camp !== b.camp) return b.camp - a.camp;
      return b.rarity - a.rarity;
    });

  // Add quantity calculations if totalExpRequired is provided
  if (totalExpRequired > 0) {
    return calculateGiftQuantities(totalExpRequired, filteredGifts);
  }

  return filteredGifts;
}

// Group characters by faction/camp within a template
// Only includes characters that exist in characters_info.json
function groupCharactersByFaction(characters, totalExpRequired) {
  const factionMap = {};

  characters.forEach(char => {
    // Only include characters that exist in characters_info.json
    if (!validCharacterNames.has(char.name)) return;

    const campName = char.campName;
    if (!factionMap[campName]) {
      factionMap[campName] = {
        campName,
        campNumber: char.camp,
        campClass: getCampClass(char.camp),
        characters: [],
      };
    }
    factionMap[campName].characters.push({
      name: char.name,
      camp: char.camp,
      campName: char.campName,
    });
  });

  // Sort characters alphabetically within each faction
  Object.values(factionMap).forEach(faction => {
    faction.characters.sort((a, b) => a.name.localeCompare(b.name));
  });

  // Convert to array and sort by camp order
  return CAMP_ORDER
    .filter(campName => factionMap[campName])
    .map(campName => {
      const faction = factionMap[campName];
      return {
        ...faction,
        characterCount: faction.characters.length,
        gifts: getGiftsForCamp(campName, totalExpRequired),
      };
    });
}

// Get total EXP required to reach max rank for a template
function getTotalExpRequired(ranks) {
  // Get the last rank's expRequired value (total EXP needed)
  const lastRank = ranks[ranks.length - 1];
  return lastRank ? lastRank.expRequired : 0;
}

// Process ranks to add expToNext calculation
function processRanks(ranks) {
  return ranks.map((rank, i, arr) => ({
    ...rank,
    expToNext: arr[i + 1] ? arr[i + 1].expRequired - rank.expRequired : 0,
  }));
}

// Get character gifts data organized by template (Lv40/Lv30 groups)
export function getCharacterGiftsDataByTemplate() {
  const templates = AFFINITY_DATA.templates;

  // Calculate total EXP required for each template
  const lv40TotalExp = getTotalExpRequired(templates.template1.ranks);
  const lv30TotalExp = getTotalExpRequired(templates.template2.ranks);

  // Get factions with filtered characters
  const lv40Factions = groupCharactersByFaction(templates.template1.characters, lv40TotalExp);
  const lv30Factions = groupCharactersByFaction(templates.template2.characters, lv30TotalExp);

  // Calculate actual character count (only valid characters)
  const lv40CharCount = lv40Factions.reduce((sum, f) => sum + f.characterCount, 0);
  const lv30CharCount = lv30Factions.reduce((sum, f) => sum + f.characterCount, 0);

  return [
    {
      templateId: 'lv40',
      templateName: 'Lv40 Group',
      maxRank: templates.template1.maxRank,
      totalExpRequired: lv40TotalExp,
      description: 'Characters with higher affinity stat bonuses',
      characterCount: lv40CharCount,
      ranks: processRanks(templates.template1.ranks),
      factions: lv40Factions,
    },
    {
      templateId: 'lv30',
      templateName: 'Lv30 Group',
      maxRank: templates.template2.maxRank,
      totalExpRequired: lv30TotalExp,
      description: 'Characters with standard affinity stat bonuses',
      characterCount: lv30CharCount,
      ranks: processRanks(templates.template2.ranks),
      factions: lv30Factions,
    },
  ];
}

// Get affinity data for a specific character by name
export function getCharacterAffinityData(characterName) {
  const templates = AFFINITY_DATA.templates;

  // Check template1 (Lv40 group)
  const template1Char = templates.template1.characters.find(c => c.name === characterName);
  if (template1Char) {
    const totalExpRequired = templates.template1.ranks[templates.template1.ranks.length - 1]?.expRequired || 0;
    return {
      levelGroup: 'lv40',
      levelGroupName: 'Lv40 Group',
      maxRank: templates.template1.maxRank,
      totalExpRequired,
      camp: template1Char.camp,
      campName: template1Char.campName,
      campClass: getCampClass(template1Char.camp),
      ranks: processRanks(templates.template1.ranks),
      gifts: getGiftsForCamp(template1Char.campName, totalExpRequired),
    };
  }

  // Check template2 (Lv30 group)
  const template2Char = templates.template2.characters.find(c => c.name === characterName);
  if (template2Char) {
    const totalExpRequired = templates.template2.ranks[templates.template2.ranks.length - 1]?.expRequired || 0;
    return {
      levelGroup: 'lv30',
      levelGroupName: 'Lv30 Group',
      maxRank: templates.template2.maxRank,
      totalExpRequired,
      camp: template2Char.camp,
      campName: template2Char.campName,
      campClass: getCampClass(template2Char.camp),
      ranks: processRanks(templates.template2.ranks),
      gifts: getGiftsForCamp(template2Char.campName, totalExpRequired),
    };
  }

  // Character not found in affinity data
  return null;
}

// Export utilities from gifts.js for convenience
export { CAMP_INFO, getCampClass, getGiftIconKey };

// Export default for convenience
export default {
  CAMP_NAME_TO_NUMBER,
  CAMP_ORDER,
  getGiftsForCamp,
  getCharacterGiftsDataByTemplate,
  getCharacterAffinityData,
  CAMP_INFO,
  getCampClass,
  getGiftIconKey,
};
