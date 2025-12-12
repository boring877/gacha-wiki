// Stella Sora Potentials (Ascension/Character Progression) API Endpoint
// Generates /data/stella-sora/potentials.json

import {
  ALL_POTENTIALS,
  shiaPotentials,
  tiliaPotentials,
  minovaPotentials,
} from '../../../data/stella-sora/potentials.js';

export const prerender = true;

export async function GET() {
  // Process potentials by character
  const characterPotentials = Object.entries(ALL_POTENTIALS).map(([characterName, potentials]) => ({
    character: characterName,
    potentialCount: Object.keys(potentials).length,
    potentials: Object.entries(potentials).map(([key, potential]) => ({
      id: key,
      name: potential.name,
      level: potential.level || null,
      description: potential.description?.replace(/<br\s*\/?>/gi, '\n').replace(/<\/?em>/gi, ''),
      hasLevelRequirement: !!potential.level,
    })),
  }));

  // Group potentials by type/build for Shia (the most detailed character)
  const shiaBuildGuide = {
    snowRabbitBuild: [
      'Phantom Step Radiance',
      'Rimecrystal Edge',
      'Subzero Dominion',
      'Glacial Dash',
      'Rimeheart Pulse',
    ],
    nightRabbitBuild: [
      'Moonlight Overflow',
      'Astral Pirouette',
      'Lunar Detonation',
      'Final Crescent',
      'Lunar Combo',
    ],
    genericMainRole: [
      'Leporine Gale',
      "Hare's Pursuit",
      "Rabbit's Beam",
      'Howl to the Moon',
      'Silent Tide',
      'Wave to Oblivion',
    ],
  };

  const response = {
    game: 'Stella Sora',
    type: 'potentials',
    description:
      'Character potentials (ascension abilities) that enhance Trekker skills and abilities. Potentials are unlocked and leveled through character progression.',
    lastUpdated: new Date().toISOString().split('T')[0],

    // Summary
    summary: {
      totalCharacters: characterPotentials.length,
      totalPotentials: characterPotentials.reduce((acc, char) => acc + char.potentialCount, 0),
      characters: characterPotentials.map(c => c.character),
    },

    // All character potentials
    characters: characterPotentials,

    // Build guides (for characters with documented builds)
    buildGuides: {
      Shia: {
        description: 'Shia has two main build paths based on summoned rabbit type',
        builds: shiaBuildGuide,
      },
    },

    // System notes
    notes: [
      'Potentials are character-specific abilities that enhance skills',
      'Some potentials require Level 6 to unlock full effects',
      'Build choice depends on content type (single target vs AoE)',
      'Potentials synergize with disc sets and team compositions',
    ],
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
