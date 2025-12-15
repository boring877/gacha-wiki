// Stella Sora Upgrades API Endpoint
// Generates /data/stella-sora/upgrades.json

import { upgradeItems, allCharacterUpgrades } from '../../../data/stella-sora/upgrades.js';

export const prerender = true;

export async function GET() {
  const characterCount = Object.keys(allCharacterUpgrades).length;

  const response = {
    game: 'Stella Sora',
    type: 'upgrades',
    description: 'Character upgrade requirements and upgrade items database',
    characterCount,
    itemCount: Object.keys(upgradeItems).length,
    lastUpdated: new Date().toISOString().split('T')[0],
    upgradeItems: Object.values(upgradeItems),
    characters: Object.entries(allCharacterUpgrades).map(([slug, data]) => ({
      slug,
      name: data.name,
      upgrades: data.upgrades,
      skillUpgrades: data.skillUpgrades,
    })),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
