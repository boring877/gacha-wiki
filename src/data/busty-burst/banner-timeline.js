/**
 * Busty Burst Banner Timeline Data
 * Chronological record of all summon banners
 * Server: UTC timezone, reset at 03:00 UTC
 */

export const bannerTimelineData = [
  // #6 - Octo-Octo Beach Panic Event Summon (Jan 13 - Jan 27) - CURRENT
  {
    id: 'octo-octo-beach-panic-2026',
    title: '"Octo-Octo Beach Panic!!" Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: '[Seductive High-Cut Swimsuit] Nerys',
        rarity: 'SSR',
        type: 'Attack',
      },
      {
        name: '[Killer☆Bikini] Theresia',
        rarity: 'SSR',
        type: 'Support',
      },
      {
        name: '[Epic Fishing] Meinias',
        rarity: 'SR',
        type: 'Attack',
      },
    ],
    startDate: '2026-01-13T03:00:00Z',
    endDate: '2026-01-27T03:00:00Z',
    description: 'Octo-Octo Beach Panic!! Event Summon! Limited-Time Paladin Rate Up! Get 50 extra memories for the corresponding Paladin when you summon a featured Paladin.',
    note: 'Summer beach banner featuring swimsuit characters.',
    status: 'current',
    image: 'octo-octo-beach-panic',
  },
  // #5 - Beauty Witch Party People Event Summon (Jan 6 - Jan 13) - CURRENT
  {
    id: 'beauty-witch-party-people-2026',
    title: '"Beauty Witch Party People" Event Summon',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: 'Ophelio',
        rarity: 'SSR',
        type: 'Attack',
      },
    ],
    startDate: '2026-01-06T02:00:00Z',
    endDate: '2026-01-13T02:00:00Z',
    description: '"Beauty Witch Party People" Event Summon! Limited-Time Paladin Rate Up!',
    note: 'Features Ophelio, a Fire Magic Attacker.',
    status: 'current',
    image: 'beauty-witch-party-people',
  },
  // #4 - New Year's Evil Dragons Event Summon (Dec 30 - Jan 13) - CURRENT
  {
    id: 'new-year-evil-dragons-2025',
    title: "New Year's Evil Dragons Event Summon",
    bannerType: 'event',
    featuredPaladins: [
      {
        name: '[Dragon Crusher] Medusa',
        rarity: 'SSR',
        type: 'Attack',
      },
      {
        name: "[New Year's Calligraphy] Pastel",
        rarity: 'SSR',
        type: 'Support',
      },
      {
        name: '[Overflowing Jubako] Lynette',
        rarity: 'SR',
        type: 'Support',
      },
    ],
    startDate: '2025-12-30T03:00:00Z',
    endDate: '2026-01-13T03:00:00Z',
    description: "New Year's Evil Dragons Event Summon! Limited-Time New Year Paladin Rate Up!",
    note: 'New Year limited banner featuring Dragon Crusher Medusa and New Year themed characters.',
    status: 'current',
    image: 'new-year-2025-3',
  },
  // #3 - Offering Cookies for the Holy Night (Dec 16 - Dec 30) - ENDED
  {
    id: 'offering-cookies-holy-night',
    title: 'Offering Cookies for the Holy Night',
    bannerType: 'event',
    featuredPaladins: [
      {
        name: '[Queen of Pies and Cookies] Aphrodia',
        rarity: 'SSR',
        type: 'Attack',
      },
      {
        name: '[Magical Holy Night Festival] Kaguya',
        rarity: 'SSR',
        type: 'Support',
      },
      {
        name: '[Holy Night Succubus] Yu Rima Elca',
        rarity: 'SR',
        type: 'Support',
      },
    ],
    startDate: '2025-12-16T03:00:00Z',
    endDate: '2025-12-30T03:00:00Z',
    description:
      'Offering Cookies for the Holy Night Event Summon! Limited-Time Christmas Paladin Rate Up!',
    note: 'Christmas event banner with limited-time holiday characters.',
    status: 'ended',
    image: 'holy-night-cookies',
  },
  // #2 - Shaty (Dec 9 - Dec 16) - ENDED
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
    status: 'ended',
    image: 'shaty-chapter-6',
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
    image: 'vern-founding-festival',
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
        image: 'season-1-lorelia',
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
