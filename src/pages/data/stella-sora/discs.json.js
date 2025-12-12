// Stella Sora Discs API Endpoint
// Generates /data/stella-sora/discs.json

import {
  DISCS_DATA,
  getElementsByDisc,
  getRaritiesByDisc,
  getAllTags,
} from '../../../data/stella-sora/discs.js';

export const prerender = true;

export async function GET() {
  const metadata = {
    elements: getElementsByDisc(),
    rarities: getRaritiesByDisc(),
    tags: getAllTags(),
  };

  const response = {
    game: 'Stella Sora',
    type: 'discs',
    description:
      'Complete disc equipment database with stats, skills (Melody, Harmony, Skill effects), support info, and character recommendations',
    count: DISCS_DATA.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    metadata,
    discs: DISCS_DATA.map(disc => ({
      id: disc.id,
      name: disc.name,
      slug: disc.slug,
      rarity: disc.rarity,
      element: disc.element,
      character: disc.character,
      tags: disc.tags,
      description: disc.description,

      // Stats
      stats: disc.stats,

      // Full skill data
      skills: disc.skills
        ? {
            melody: disc.skills.melody
              ? {
                  name: disc.skills.melody.name,
                  effect: disc.skills.melody.effect,
                }
              : null,
            harmony: disc.skills.harmony
              ? {
                  name: disc.skills.harmony.name,
                  level: disc.skills.harmony.level,
                  effect: disc.skills.harmony.effect,
                  requirements: disc.skills.harmony.requirements,
                }
              : null,
            skill: disc.skills.skill
              ? {
                  name: disc.skills.skill.name,
                  level: disc.skills.skill.level,
                  effect: disc.skills.skill.effect,
                  requirements: disc.skills.skill.requirements,
                }
              : null,
          }
        : null,

      // Support info
      support: disc.support,

      // Legacy fields
      setBonus: disc.setBonus,
      recommendedFor: disc.recommendedFor,
      image: disc.image,
      detailUrl: `/guides/stella-sora/disc/${disc.slug}`,
    })),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
