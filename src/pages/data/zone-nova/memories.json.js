// Zone Nova Memories API Endpoint
// Generates /data/zone-nova/memories.json

import { ZONE_NOVA_MEMORIES, MEMORY_METADATA } from '../../../data/zone-nova/memories.js';

export const prerender = true;

export async function GET() {
  const response = {
    game: 'Zone Nova',
    type: 'memories',
    description: 'Memory cards (equipment) that provide stats and special effects for characters',
    count: ZONE_NOVA_MEMORIES.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    metadata: MEMORY_METADATA,
    memories: ZONE_NOVA_MEMORIES.map(memory => ({
      id: memory.id,
      slug: memory.slug,
      name: memory.name,
      rarity: memory.rarity,
      element: memory.element,
      character: memory.character, // Character-specific memory (null if generic)
      class: memory.class, // Class restriction (null if none)
      stats: memory.stats,
      effects: memory.effects,
      image: memory.image,
      detailUrl: memory.detailUrl,
    })),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
