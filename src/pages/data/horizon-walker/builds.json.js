// Horizon Walker Character Builds API Endpoint
// Generates /data/horizon-walker/builds.json

import {
  juhaBuildConfig,
  vlissingBuildConfig,
  oliviaBuildConfig,
  emiliaBuildConfig,
  availableCharacterBuilds,
} from '../../../data/horizon-walker/builds/characters/index.js';
import { HORIZON_WALKER_CHARACTERS } from '../../../data/horizon-walker/characters.js';

export const prerender = true;

// Map slug to build config
const buildConfigs = {
  juha: juhaBuildConfig,
  vlissing: vlissingBuildConfig,
  olivia: oliviaBuildConfig,
  emilia: emiliaBuildConfig,
};

export async function GET() {
  const builds = availableCharacterBuilds.map(slug => {
    const config = buildConfigs[slug];
    const character = HORIZON_WALKER_CHARACTERS.find(
      c => c.slug === slug || c.name.toLowerCase() === slug.toLowerCase()
    );

    return {
      slug,
      characterName: character?.name || slug,
      rarity: character?.rarity,
      class: character?.class,
      element: character?.element,

      // Build details
      damageScaling: config?.damageScaling,
      buildStrategyTitle: config?.buildStrategyTitle,
      recommendedStigma: config?.recommendedStigma,
      buildStrategy: config?.buildStrategy,

      // Stats
      recommendedSubstats: config?.recommendedSubstats,
      substatsPriority: config?.substatsPriority,

      // Traits
      traitsType: config?.traitsType,
      recommendedTraits: config?.recommendedTraits,
      traitRecommendation: config?.traitRecommendation,

      // Page link
      detailUrl: `/guides/horizon-walker/builds/${slug}`,
    };
  });

  const response = {
    game: 'Horizon Walker',
    type: 'builds',
    description:
      'Character build guides with stigma recommendations, substat priorities, and trait setups',
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
