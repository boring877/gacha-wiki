// Stella Sora Updates API Endpoint
// Generates /data/stella-sora/updates.json (official news archive metadata)

import { updates } from '../../../data/stella-sora/updates.js';

export const prerender = true;

export async function GET() {
  const response = {
    game: 'Stella Sora',
    type: 'updates',
    description:
      'Official updates archive: version patch notes, maintenance notices, event announcements and news from stellasora.global',
    lastUpdated: new Date().toISOString().split('T')[0],
    count: updates.length,
    items: updates.map(u => ({
      id: u.id,
      slug: u.slug,
      title: u.title,
      type: u.type,
      typeLabel: u.typeLabel,
      date: u.dateText,
      publishedAt: new Date(u.iso).toISOString(),
      summary: u.summary,
      detailUrl: u.url,
      officialUrl: `https://stellasora.global/news/${u.id}`,
    })),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=1800',
    },
  });
}
