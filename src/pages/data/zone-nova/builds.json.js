// Zone Nova Character Builds API Endpoint
// Generates /data/zone-nova/builds.json

import { CHARACTER_BUILDS } from '../../../data/zone-nova/character-builds.js';
import { ZONE_NOVA_CHARACTERS } from '../../../data/zone-nova/characters.js';

export const prerender = true;

export async function GET() {
  // Build array with character info attached
  const builds = Object.entries(CHARACTER_BUILDS).map(([slug, build]) => {
    const character = ZONE_NOVA_CHARACTERS.find(c => c.slug === slug);

    return {
      slug,
      characterName: character?.name || slug,
      rarity: character?.rarity,
      element: character?.element,
      role: character?.role,
      class: character?.class,

      // Build details
      buildType: build.buildType,
      description: build.description,

      // Skills
      skillPriority: build.skillPriority,
      awakenings: build.awakenings,

      // Equipment
      recommendedMemoryCards: build.recommendedMemoryCards,
      alternativeMemoryCards: build.alternativeMemoryCards,
      runes: build.runes,

      // Team
      teamSynergy: build.teamSynergy,
      teamSkill: build.teamSkill,

      // Page link
      detailUrl: `/guides/zone-nova/characters/${slug}`,
    };
  });

  const response = {
    game: 'Zone Nova',
    type: 'builds',
    description:
      'Detailed character build guides with skill priorities, memory card recommendations, rune setups, and team synergies',
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
