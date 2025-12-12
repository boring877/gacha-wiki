// Stella Sora Characters API Endpoint
// Generates /data/stella-sora/characters.json

import { STELLA_SORA_CHARACTERS, gameInfo } from '../../../data/stella-sora/characters.js';

export const prerender = true;

export async function GET() {
  // Build metadata from actual data
  const metadata = {
    rarities: gameInfo.rarities,
    elements: gameInfo.elements,
    roles: gameInfo.roles,
    weapons: gameInfo.weapons,
    tableStats: gameInfo.tableStats,
  };

  const response = {
    game: 'Stella Sora',
    type: 'characters',
    description: 'Character database with stats, skills, talents, and potentials',
    count: STELLA_SORA_CHARACTERS.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    metadata,
    characters: STELLA_SORA_CHARACTERS.map(char => ({
      id: char.id,
      name: char.name,
      slug: char.slug,
      rarity: char.rarity,
      element: char.element,
      role: char.role,
      weapon: char.weapon,
      tags: char.tags,
      description: char.description,
      stats: char.stats,
      skills: char.skills,
      talents: char.talents,
      potentials: char.potentials,
      image: char.image,
      detailUrl: char.detailUrl,
    })),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
