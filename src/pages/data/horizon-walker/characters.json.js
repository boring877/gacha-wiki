// Horizon Walker Characters API Endpoint
// Generates /data/horizon-walker/characters.json
// Enhanced to include individual character page data (skills, weapons, profiles, stories)

import { HORIZON_WALKER_CHARACTERS, gameInfo } from '../../../data/horizon-walker/characters.js';

// Import all individual character data files dynamically
const characterModules = import.meta.glob('../../../data/horizon-walker/characters/*.js', {
  eager: true,
});

export const prerender = true;

export async function GET() {
  // Build a map of individual character data by slug
  const characterDataBySlug = {};

  for (const [path, module] of Object.entries(characterModules)) {
    // Find the character data export (usually named like "platinaData")
    const charData = Object.values(module).find(
      exp => exp && typeof exp === 'object' && exp.name && (exp.skills || exp.stats)
    );

    if (charData) {
      // Extract slug from character name
      const slug = charData.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      characterDataBySlug[slug] = charData;
    }
  }

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
    description:
      'Complete character database with detailed stats, skills, EX weapons, profiles, stories, and unique traits',
    count: HORIZON_WALKER_CHARACTERS.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    metadata,
    characters: HORIZON_WALKER_CHARACTERS.map(char => {
      // Get individual character data if available
      const individualData = characterDataBySlug[char.slug];

      return {
        // Basic info from centralized data
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

        // Stats - prefer individual file if more detailed
        stats: individualData?.stats || char.stats,

        // Description and story from individual file
        description: individualData?.description || null,
        story: individualData?.story || null,

        // Character profile (age, homeland, etc.)
        profile: individualData?.profile || null,

        // Full skills from individual file
        skills: individualData?.skills
          ? Object.values(individualData.skills).map(skill => ({
              name: skill.name,
              type: skill.type,
              level: skill.level,
              apCost: skill.apCost,
              cooldown: skill.cooldown,
              damage: skill.damage,
              description: skill.description,
            }))
          : null,

        // Unique traits
        uniqueTraits: individualData?.uniqueTraits
          ? Object.values(individualData.uniqueTraits).map(trait => ({
              name: trait.name,
              description: trait.description,
            }))
          : null,

        // EX Weapon data
        weapon: individualData?.weapon
          ? {
              name: individualData.weapon.name,
              type: individualData.weapon.type,
              rarity: individualData.weapon.rarity,
              stats: individualData.weapon.stats,
              uniqueSkills: individualData.weapon.uniqueSkills
                ? Object.values(individualData.weapon.uniqueSkills).map(skill => ({
                    name: skill.name,
                    type: skill.type,
                    description: skill.description,
                    note: skill.note,
                  }))
                : null,
            }
          : null,

        // Flags
        hasEXWeapon: char.hasEXWeapon || false,
        hasDetailedData: !!individualData,

        // URLs
        image: char.image,
        detailUrl: char.detailUrl,
      };
    }),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
