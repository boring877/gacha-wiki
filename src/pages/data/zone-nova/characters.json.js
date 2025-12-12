// Zone Nova Characters API Endpoint
// Generates /data/zone-nova/characters.json
// Combines character base data with build guides

import { ZONE_NOVA_CHARACTERS, CHARACTER_METADATA } from '../../../data/zone-nova/characters.js';

// Import all character builds dynamically
const buildModules = import.meta.glob('../../../data/zone-nova/character-builds/*.js', {
  eager: true,
});

export const prerender = true;

export async function GET() {
  // Create a map of builds by character slug
  const buildsBySlug = {};

  for (const [path, module] of Object.entries(buildModules)) {
    // Extract slug from path: ../../../data/zone-nova/character-builds/ibaraki-doji.js -> ibaraki-doji
    const slug = path.split('/').pop().replace('.js', '');

    // Find the export that contains build data (usually named like "ibarakiDojiBuild" or similar)
    const buildData = Object.values(module).find(
      exp =>
        exp &&
        typeof exp === 'object' &&
        (exp.skillPriority || exp.recommendedMemoryCards || exp.runes)
    );

    if (buildData) {
      buildsBySlug[slug] = buildData;
    }
  }

  // Combine character data with builds
  const charactersWithBuilds = ZONE_NOVA_CHARACTERS.map(char => {
    const build = buildsBySlug[char.slug];

    return {
      // Base character info
      id: char.id,
      name: char.name,
      slug: char.slug,
      rarity: char.rarity,
      element: char.element,
      role: char.role,
      class: char.class,
      faction: char.faction,
      tags: char.tags,
      stats: char.stats,
      image: char.image,
      detailUrl: char.detailUrl,

      // Build guide (if available)
      build: build
        ? {
            description: build.description,
            skillPriority: build.skillPriority,
            recommendedMemoryCards: build.recommendedMemoryCards,
            alternativeMemoryCards: build.alternativeMemoryCards,
            runes: build.runes,
            awakenings: build.awakenings,
            teamSynergy: build.teamSynergy,
            teamSkill: build.teamSkill,
          }
        : null,
    };
  });

  const response = {
    game: 'Zone Nova',
    type: 'characters',
    count: charactersWithBuilds.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    metadata: CHARACTER_METADATA,
    characters: charactersWithBuilds,
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
