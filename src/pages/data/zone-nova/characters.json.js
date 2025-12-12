// Zone Nova Characters API Endpoint
// Generates /data/zone-nova/characters.json
// Enhanced to include individual character page data (skills, awakenings, memory cards, team skills)

import { ZONE_NOVA_CHARACTERS, CHARACTER_METADATA } from '../../../data/zone-nova/characters.js';

// Import all character builds dynamically
const buildModules = import.meta.glob('../../../data/zone-nova/character-builds/*.js', {
  eager: true,
});

// Import all individual character data files dynamically
const characterModules = import.meta.glob('../../../data/zone-nova/characters/*.js', {
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

  // Create a map of individual character data by slug
  const characterDataBySlug = {};

  for (const [path, module] of Object.entries(characterModules)) {
    // Extract slug from path
    const slug = path.split('/').pop().replace('.js', '');

    // Find the character data export (usually named like "athenaData")
    const charData = Object.values(module).find(
      exp => exp && typeof exp === 'object' && exp.name && (exp.skills || exp.awakenings)
    );

    if (charData) {
      characterDataBySlug[slug] = charData;
    }
  }

  // Combine character data with builds and individual page data
  const charactersWithFullData = ZONE_NOVA_CHARACTERS.map(char => {
    const build = buildsBySlug[char.slug];
    const individualData = characterDataBySlug[char.slug];

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

      // Full skills from individual file
      skills: individualData?.skills
        ? {
            normal: individualData.skills.normal
              ? {
                  name: individualData.skills.normal.name,
                  description: individualData.skills.normal.description,
                }
              : null,
            auto: individualData.skills.auto
              ? {
                  name: individualData.skills.auto.name,
                  cooldown: individualData.skills.auto.cooldown,
                  description: individualData.skills.auto.description,
                }
              : null,
            ultimate: individualData.skills.ultimate
              ? {
                  name: individualData.skills.ultimate.name,
                  energyCost: individualData.skills.ultimate.energyCost,
                  description: individualData.skills.ultimate.description,
                }
              : null,
            passive: individualData.skills.passive
              ? {
                  name: individualData.skills.passive.name,
                  description: individualData.skills.passive.description,
                }
              : null,
          }
        : null,

      // Team skill
      teamSkill: individualData?.teamSkill || null,

      // Awakenings (6 levels)
      awakenings: individualData?.awakenings || null,

      // Memory card info
      memoryCard: individualData?.memoryCard
        ? {
            name: individualData.memoryCard.name,
            stats: individualData.memoryCard.stats,
            effects: individualData.memoryCard.effects,
          }
        : null,

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

      // Flags
      hasDetailedData: !!individualData,
      hasBuildGuide: !!build,
    };
  });

  const response = {
    game: 'Zone Nova',
    type: 'characters',
    description:
      'Complete character database with skills, awakenings, memory cards, team skills, and build guides',
    count: charactersWithFullData.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    metadata: CHARACTER_METADATA,
    characters: charactersWithFullData,
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
