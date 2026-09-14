// Stella Sora Banner Timeline API Endpoint
// Generates /data/stella-sora/banners.json
// Rewritten 2026-09-14 for the regenerated banner-timeline.js data
// (bannerRuns + getRunStatus); the previous version imported the old
// bannerTimelineData API which no longer exists and broke the site build.

import {
  bannerRuns,
  getRunStatus,
} from '../../../data/stella-sora/banner-timeline.js';

export const prerender = true;

export async function GET() {
  const runs = bannerRuns.map(r => ({
    gachaId: r.gachaId,
    side: r.side,
    title: r.title,
    kind: r.kind,
    typeName: r.typeName,
    featured: r.featured,
    featuredId: r.featuredId ?? null,
    charSlug: r.charSlug ?? null,
    boosted: r.boosted ?? [],
    start: r.start,
    end: r.end ?? null,
    rerun: !!r.rerun,
    guaranteeQty: r.guaranteeQty ?? null,
    image: r.image ?? null,
    status: getRunStatus(r),
  }));

  const by = s => runs.filter(r => r.status === s);

  const response = {
    game: 'Stella Sora',
    type: 'banners',
    description:
      'Banner timeline with trekker and disc recruitment runs, exact start and end times',
    lastUpdated: new Date().toISOString().split('T')[0],

    summary: {
      totalBanners: runs.length,
      currentCount: by('current').length,
      upcomingCount: by('upcoming').length,
      endedCount: by('ended').length,
    },

    current: by('current'),
    upcoming: by('upcoming'),
    ended: by('ended'),

    timeline: [...runs].sort(
      (a, b) => new Date(b.start) - new Date(a.start)
    ),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=1800',
    },
  });
}
