// Busty Burst Character Builds API Endpoint
// Generates /data/busty-burst/builds.json

import { characterBuilds } from '../../../data/busty-burst/character-builds.js';

export const prerender = true;

export async function GET() {
  const builds = Object.entries(characterBuilds).map(([slug, build]) => ({
    slug,
    characterName: build.character?.name || slug,
    fileName: build.character?.fileName,

    // Position and attack type
    position: build.position,
    attackType: build.attackType,

    // Weapon
    weapon: build.weapon,

    // Accessory
    accessory: build.accessory
      ? {
          name: build.accessory.name,
          setEffects: build.accessory.setEffects,
          mainStats: build.accessory.mainStats,
          substatPriority: build.accessory.substatPriority,
        }
      : null,

    // Page link
    detailUrl: `/guides/busty-burst/builds/${slug}`,
  }));

  const response = {
    game: 'Busty Burst',
    type: 'builds',
    description:
      'Character build guides with weapon recommendations, accessory sets, and stat priorities',
    count: builds.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    builds,
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
