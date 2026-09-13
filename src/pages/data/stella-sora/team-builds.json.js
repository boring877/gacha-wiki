// Stella Sora System Presets API Endpoint
// Generates /data/stella-sora/team-builds.json (URL kept for backwards compatibility)

import { SYSTEM_PRESETS } from '../../../data/stella-sora/system-presets.js';

export const prerender = true;

export async function GET() {
  const response = {
    game: 'Stella Sora',
    type: 'system-presets',
    description:
      "The game's built-in System Presets: recommended Main + 2 Support teams per Trekker, decoded from the SystemPreset table",
    count: SYSTEM_PRESETS.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    presets: SYSTEM_PRESETS.map(char => ({
      slug: char.slug,
      name: char.name,
      element: char.element,
      grade: char.grade,
      presets: char.presets.map(preset => ({
        label: preset.label,
        skin: preset.skin,
        skinType: preset.skinType,
        members: preset.members.map(member => ({
          slug: member.slug,
          name: member.name,
          element: member.element,
          role: member.role,
        })),
      })),
    })),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
