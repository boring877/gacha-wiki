import type { CharacterGift, GiftBoxInfo } from '../../types/horizon-walker/character.js';
import { GIFT_BOXES } from '../../data/horizon-walker/gifts.js';

// Cache for gift box mappings to avoid repeated iterations
let giftToBoxMap: Map<string, GiftBoxInfo[]> | null = null;

/**
 * Convert character name to URL-friendly slug
 */
export function characterNameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Build gift-to-boxes mapping cache
 */
export function buildGiftToBoxMap(): Map<string, GiftBoxInfo[]> {
  if (giftToBoxMap) {
    return giftToBoxMap;
  }

  giftToBoxMap = new Map();

  for (const box of GIFT_BOXES) {
    for (const gift of box.gifts) {
      if (!giftToBoxMap.has(gift.id)) {
        giftToBoxMap.set(gift.id, []);
      }
      giftToBoxMap.get(gift.id)!.push({
        box: {
          id: box.id,
          name: box.name,
          image: box.image,
          gifts: box.gifts,
        },
        cost: box.cost,
        pulls: box.pulls,
      });
    }
  }

  return giftToBoxMap;
}

/**
 * Find all gift boxes that contain a specific gift
 */
export function findAllGiftBoxes(giftId: string): GiftBoxInfo[] {
  const map = buildGiftToBoxMap();
  return map.get(giftId) || [];
}

/**
 * Generate truncated story text with proper word boundary handling
 */
export function truncateStory(story: string, maxLength: number = 150): string {
  if (story.length <= maxLength) {
    return story;
  }

  const truncated = story.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');

  return truncated.substring(0, lastSpace > 0 ? lastSpace : maxLength) + '...';
}

/**
 * Extract first sentence from story
 */
export function getFirstSentence(story: string): string {
  const firstSentence = story.split('.')[0];
  return firstSentence + (story.includes('.') ? '.' : '');
}

/**
 * Calculate gift points needed for target affection
 */
export function calculateGiftPointsNeeded(targetPoints: number = 2000): number {
  return Math.ceil(targetPoints / 100);
}

/**
 * Check if character has Queen's Tiara in preferences
 */
export function hasQueensTiara(character: {
  favorites?: CharacterGift[];
  likes?: CharacterGift[];
}): boolean {
  const hasInFavorites = character.favorites?.some(gift => gift.id === 'queens-tiara') || false;
  const hasInLikes = character.likes?.some(gift => gift.id === 'queens-tiara') || false;
  return hasInFavorites || hasInLikes;
}

/**
 * Queen's Tiara gift object for alternative high-value recommendation
 */
export const queensTiaraGift = {
  id: 'queens-tiara',
  name: "Queen's Tiara",
  image: 'Queen_tiara.jpg',
  totalPoints: 100,
  affection: 100,
};

/**
 * Default highlight patterns for Horizon Walker characters
 */
export const defaultHWHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})\]/g,
  buffsDebuffs:
    /\b(?:Obedience|Double\s+Down|Full\s+Extent|Hunter\s+on\s+the\s+Vine|Survival\s+Expert|Edge\s+Runner|Persistence|Swamp\s+Elf|Slash\s+Boost|lifesteal|counterattack|evasion)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:survives?|ignores?\s+counterattacks?|Chosen\s+Human|Swamp\s+Rangers|Bureau\s+of\s+Rift\s+Management|Webwoods|Maximilia|lifesteal|stacking)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Slash|Physical|Pierce|Crush|Heat|Cold|Electric|Immaterial|Poison|Evasion|All\s+ATK|DEF|SPD|Mobility|CRIT\s+DMG|HP|Accuracy)\b/gi,
};

/**
 * Stat explanations configuration
 */
export const statExplanations = {
  strength: 'Increases Melee ATK',
  technic: 'Increases Ranged ATK & Skill Effects',
  intelligence: 'Increases Magic ATK & Skill Effects',
  vitality: 'Increases Max HP',
  agility: 'Increases SPD & Evasion',
  meleeAtk: 'Base Melee Attack Power',
  rangedAtk: 'Base Ranged Attack Power',
  magicAtk: 'Base Magic Attack Power',
  maxHp: 'Maximum Health Points',
  spd: 'Action Speed & Turn Order',
  startingAp: 'Starting Action Points',
  apRecovery: 'AP Recovery per Turn',
  accuracy: 'Hit Chance',
  evade: 'Dodge Chance',
  critRate: 'Critical Hit Chance',
  critDmg: 'Critical Hit Damage',
};

/**
 * Profile field labels configuration
 */
export const profileFieldLabels = {
  age: 'Age',
  racial: 'Race',
  homeland: 'Homeland',
  height: 'Height',
  birthday: 'Birthday',
  bwhRatio: 'BWH Ratio',
};

/**
 * Generate character summary from story or description
 */
export function getCharacterSummary(story?: string): string {
  if (!story) return 'No character summary available.';

  // Get first sentence as summary
  const firstSentence = story.split('.')[0];
  return firstSentence + (story.includes('.') ? '.' : '');
}

/**
 * Calculate number of gifts needed to reach target affection
 */
export function calculateGiftsNeeded(gift: CharacterGift): number {
  const targetPoints = 2000;
  const giftsNeeded = Math.ceil(targetPoints / gift.totalPoints);
  return giftsNeeded;
}
