// Stella Sora Potentials API Endpoint
// Generates /data/stella-sora/potentials.json

import { allPotentials } from '../../../data/stella-sora/all-potentials.js';

export const prerender = true;

export async function GET() {
  // Process potentials by character
  const characterPotentials = Object.entries(allPotentials).map(([charKey, charData]) => {
    const { id, name, element, potentials } = charData;

    // Count total potentials across all categories
    const totalPotentials =
      (potentials.mainCore?.length || 0) +
      (potentials.mainNormal?.length || 0) +
      (potentials.common?.length || 0) +
      (potentials.supportCore?.length || 0) +
      (potentials.supportNormal?.length || 0);

    return {
      id,
      character: name,
      element,
      potentialCount: totalPotentials,
      potentials: {
        mainCore: potentials.mainCore?.map(p => ({
          name: p.name,
          icon: p.icon,
          description: p.description?.replace(/<color=[^>]+>([^<]+)<\/color>/g, '$1'),
          shortDescription: p.shortDescription?.replace(/<color=[^>]+>([^<]+)<\/color>/g, '$1'),
          rarity: p.rarity,
          stype: p.stype,
        })) || [],
        mainNormal: potentials.mainNormal?.map(p => ({
          name: p.name,
          icon: p.icon,
          description: p.description?.replace(/<color=[^>]+>([^<]+)<\/color>/g, '$1'),
          shortDescription: p.shortDescription?.replace(/<color=[^>]+>([^<]+)<\/color>/g, '$1'),
          rarity: p.rarity,
          stype: p.stype,
          corner: p.corner,
        })) || [],
        common: potentials.common?.map(p => ({
          name: p.name,
          icon: p.icon,
          description: p.description?.replace(/<color=[^>]+>([^<]+)<\/color>/g, '$1'),
          shortDescription: p.shortDescription?.replace(/<color=[^>]+>([^<]+)<\/color>/g, '$1'),
          rarity: p.rarity,
          stype: p.stype,
          corner: p.corner,
        })) || [],
        supportCore: potentials.supportCore?.map(p => ({
          name: p.name,
          icon: p.icon,
          description: p.description?.replace(/<color=[^>]+>([^<]+)<\/color>/g, '$1'),
          shortDescription: p.shortDescription?.replace(/<color=[^>]+>([^<]+)<\/color>/g, '$1'),
          rarity: p.rarity,
          stype: p.stype,
        })) || [],
        supportNormal: potentials.supportNormal?.map(p => ({
          name: p.name,
          icon: p.icon,
          description: p.description?.replace(/<color=[^>]+>([^<]+)<\/color>/g, '$1'),
          shortDescription: p.shortDescription?.replace(/<color=[^>]+>([^<]+)<\/color>/g, '$1'),
          rarity: p.rarity,
          stype: p.stype,
          corner: p.corner,
        })) || [],
      },
    };
  });

  const response = {
    game: 'Stella Sora',
    type: 'potentials',
    description:
      'Character potentials that enhance Trekker skills and abilities. Organized into mainCore, mainNormal, common, supportCore, and supportNormal categories.',
    lastUpdated: new Date().toISOString().split('T')[0],

    // Summary
    summary: {
      totalCharacters: characterPotentials.length,
      totalPotentials: characterPotentials.reduce((acc, char) => acc + char.potentialCount, 0),
      characters: characterPotentials.map(c => ({ name: c.character, element: c.element })),
    },

    // All character potentials
    characters: characterPotentials,

    // Category descriptions
    categories: {
      mainCore: 'Core potentials for main skill (4 per character, rarity 1)',
      mainNormal: 'Normal potentials for main skill (6-9 per character, mixed rarity)',
      common: 'Common potentials for ultimate (3 per character, rarity 2)',
      supportCore: 'Core potentials for support skill (4 per character, rarity 1)',
      supportNormal: 'Normal potentials for support skill (7-10 per character, mixed rarity)',
    },

    // System notes
    notes: [
      'Potentials are character-specific abilities that enhance skills',
      'Core potentials (stype 42) are fundamental upgrades with corner: null',
      'Normal potentials (stype 41) are positioned with corner values 1, 2, or 3',
      'Rarity 1 = common, Rarity 2 = rare',
    ],
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
