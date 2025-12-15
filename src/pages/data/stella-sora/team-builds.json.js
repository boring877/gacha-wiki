// Stella Sora Team Builds API Endpoint
// Generates /data/stella-sora/team-builds.json

import { TEAM_BUILDS } from '../../../data/stella-sora/team-builds.js';

export const prerender = true;

export async function GET() {
  const response = {
    game: 'Stella Sora',
    type: 'team-builds',
    description: 'Team compositions with character builds and potential recommendations',
    count: TEAM_BUILDS.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    builds: TEAM_BUILDS.map(build => ({
      id: build.id,
      slug: build.slug,
      name: build.name,
      description: build.description,
      tags: build.tags,
      content: build.content,
      mainDps: build.mainDps,
      support: build.support,
      flex: build.flex,
      characters: build.characters?.map(char => ({
        id: char.id,
        name: char.name,
        slug: char.slug,
        rarity: char.rarity,
        element: char.element,
        role: char.role,
      })),
      buildNotes: build.buildNotes,
      characterBuilds: build.characterBuilds,
      createdAt: build.createdAt,
      updatedAt: build.updatedAt,
    })),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
