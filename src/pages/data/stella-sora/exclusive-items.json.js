// Stella Sora Exclusive Items API Endpoint
// Generates /data/stella-sora/exclusive-items.json

import { stellaSoraExclusiveItems } from '../../../data/stella-sora/exclusive-items.js';

export const prerender = true;

export async function GET() {
  const response = {
    game: 'Stella Sora',
    type: 'exclusive-items',
    description:
      'Event-exclusive items including discs and skins available through limited events and passes',
    count: stellaSoraExclusiveItems.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    items: stellaSoraExclusiveItems.map(item => ({
      id: item.id,
      name: item.name,
      type: item.type,
      image: item.image,
      description: item.description,
      source: item.source,
    })),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
