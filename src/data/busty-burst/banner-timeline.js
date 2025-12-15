/**
 * Busty Burst Banner Timeline Data
 * Chronological record of all summon banners
 * Server: UTC timezone, reset at 03:00 UTC
 */

export const bannerTimelineData = [
  // #2 - Shaty (Dec 9 - Dec 16) - CURRENT
  {
    id: 'main-story-chapter-6-shaty',
    title: 'Main Story Chapter 6 Open Pick Up Summon',
    bannerType: 'new', // 'event' | 'new' | 'rerun'
    featuredPaladins: [
      {
        name: 'Shaty',
        rarity: 'SSR',
        type: 'Attack',
      },
    ],
    startDate: '2025-12-09T03:00:00Z',
    endDate: '2025-12-16T03:00:00Z',
    description: 'Main Story Chapter 6 Open Pick Up Summon! New Paladin Rate Up!',
    note: 'The featured Paladin will be added to the normal banner after the event in a later maintenance.',
    status: 'current',
    image: '2',
  },
  // #1 - Vern Founding Festival (Dec 4 - Dec 18) - CURRENT
  {
    id: 'vern-founding-festival',
    title: 'Vern Founding Festival Event Summon',
    bannerType: 'event', // 'event' | 'new' | 'rerun'
    featuredPaladins: [
      {
        name: '[Festival Empress] Shamshel',
        rarity: 'SSR',
        type: 'Attack',
      },
      {
        name: '[Festival Attire] Estiriel',
        rarity: 'SSR',
        type: 'Support',
      },
    ],
    startDate: '2025-12-04T00:00:00Z',
    endDate: '2025-12-18T03:00:00Z',
    description: 'Vern Founding Festival Event Summon! Limited-Time Paladin Rate Up!',
    note: 'First banner when the game released in Ero Lab!',
    status: 'current',
    image: '1',
  },
];

/**
 * Seasonal Characters Data
 * Characters available for a 3-month season period
 */
export const seasonalCharactersData = [
  {
    id: 'season-1',
    name: 'Season 1',
    startDate: '2025-12-04T00:00:00Z',
    endDate: '2026-03-03T03:00:00Z',
    characters: [
      {
        name: '[Mischievous Mermaid Princess] Lorelia',
        rarity: 'SSR',
        type: 'Attack',
        image: 'Season_Character_1',
      },
    ],
    status: 'current',
  },
];

/**
 * Get all banners sorted by start date (newest first)
 */
export function getAllBanners() {
  return bannerTimelineData.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
}

/**
 * Get banner by ID
 */
export function getBannerById(id) {
  return bannerTimelineData.find(banner => banner.id === id);
}

/**
 * Get current banners
 */
export function getCurrentBanners() {
  return bannerTimelineData.filter(banner => banner.status === 'current');
}

/**
 * Get upcoming banners
 */
export function getUpcomingBanners() {
  return bannerTimelineData.filter(banner => banner.status === 'upcoming');
}

/**
 * Get ended banners
 */
export function getEndedBanners() {
  return bannerTimelineData.filter(banner => banner.status === 'ended');
}
