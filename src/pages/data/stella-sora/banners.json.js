// Stella Sora Banner Timeline API Endpoint
// Generates /data/stella-sora/banners.json

import {
  bannerTimelineData,
  getCurrentBanners,
  getUpcomingBanners,
  getEndedBanners,
} from '../../../data/stella-sora/banner-timeline.js';

export const prerender = true;

export async function GET() {
  // Process all banners
  const allBanners = bannerTimelineData.map(banner => ({
    id: banner.id,
    status: banner.status,
    image: banner.image,

    // Character banner
    characterBanner: {
      title: banner.characterBanner.title,
      featuredCharacter: banner.characterBanner.featuredCharacter,
      boostedCharacters: banner.characterBanner.boostedCharacters,
      startDate: banner.characterBanner.startDate,
      endDate: banner.characterBanner.endDate,
      description: banner.characterBanner.description,
      bonusPity: banner.characterBanner.bonusPity || null,
      note: banner.characterBanner.note,
    },

    // Disc banner
    discBanner: {
      title: banner.discBanner.title,
      featuredDisc: banner.discBanner.featuredDisc,
      boostedDiscs: banner.discBanner.boostedDiscs,
      startDate: banner.discBanner.startDate,
      endDate: banner.discBanner.endDate,
      description: banner.discBanner.description,
      note: banner.discBanner.note,
    },
  }));

  // Group by status
  const currentBanners = allBanners.filter(b => b.status === 'current');
  const upcomingBanners = allBanners.filter(b => b.status === 'upcoming');
  const endedBanners = allBanners.filter(b => b.status === 'ended');

  const response = {
    game: 'Stella Sora',
    type: 'banners',
    description:
      'Banner timeline with character and disc recruitment events, featuring 5-star characters, rate-up 4-stars, and limited-time discs',
    lastUpdated: new Date().toISOString().split('T')[0],

    summary: {
      totalBanners: allBanners.length,
      currentCount: currentBanners.length,
      upcomingCount: upcomingBanners.length,
      endedCount: endedBanners.length,
    },

    // Current active banners
    current: currentBanners,

    // Upcoming banners
    upcoming: upcomingBanners,

    // Past banners (for history)
    ended: endedBanners,

    // All banners sorted by start date
    timeline: allBanners.sort(
      (a, b) => new Date(b.characterBanner.startDate) - new Date(a.characterBanner.startDate)
    ),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=1800',
    },
  });
}
