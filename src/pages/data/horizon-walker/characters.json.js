// Horizon Walker Characters API Endpoint
// Generates /data/horizon-walker/characters.json

import { HORIZON_WALKER_CHARACTERS, gameInfo } from '../../../data/horizon-walker/characters.js';

export const prerender = true;

export async function GET() {
  // Build metadata from actual data
  const metadata = {
    rarities: gameInfo.rarities,
    classes: gameInfo.classes.map(c => c.name),
    elements: gameInfo.elements.map(e => e.name),
    factions: gameInfo.factions.map(f => f.name),
    statNames: gameInfo.statNames,
    maxLevel: gameInfo.maxLevel,
  };

  const response = {
    game: 'Horizon Walker',
    type: 'characters',
    description: 'Tactical RPG characters with detailed stats and abilities',
    count: HORIZON_WALKER_CHARACTERS.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    metadata,
    characters: HORIZON_WALKER_CHARACTERS.map(char => ({
      id: char.id,
      name: char.name,
      slug: char.slug,
      rarity: char.rarity,
      cost: char.cost,
      class: char.class,
      element: char.element,
      faction: char.faction,
      role: char.role,
      tags: char.tags,
      stats: char.stats,
      image: char.image,
      detailUrl: char.detailUrl,
      skills: char.skills,
      exWeapon: char.exWeapon,
    })),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
