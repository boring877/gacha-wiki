// Horizon Walker Mercenaries API Endpoint
// Generates /data/horizon-walker/mercenaries.json

import {
  HORIZON_WALKER_MERCENARIES,
  mercenaryGameInfo,
} from '../../../data/horizon-walker/mercenaries.js';

export const prerender = true;

export async function GET() {
  const response = {
    game: 'Horizon Walker',
    type: 'mercenaries',
    description: 'Hireable mercenary units with unique traits for trait farming and team support',
    count: HORIZON_WALKER_MERCENARIES.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    gameInfo: mercenaryGameInfo,
    mercenaries: HORIZON_WALKER_MERCENARIES.map(merc => ({
      id: merc.id,
      name: merc.name,
      slug: merc.slug,
      rarity: merc.rarity,
      class: merc.class,
      element: merc.element,
      faction: merc.faction,
      useability: merc.useability,
      tags: merc.tags,
      stats: merc.stats,
      skills: merc.skills,
      traits: merc.traits,
      image: merc.image,
      detailUrl: merc.detailUrl,
    })),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
