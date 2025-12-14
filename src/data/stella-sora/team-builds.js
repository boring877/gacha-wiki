// Stella Sora Team Build Data
// Full team compositions for optimal performance

import { STELLA_SORA_CHARACTERS } from './characters.js';
import { getPotentialByName } from './all-potentials.js';

// Helper function to find character by name (case-insensitive)
const findCharacter = name => {
  return STELLA_SORA_CHARACTERS.find(
    char =>
      char.name.toLowerCase().includes(name.toLowerCase().trim()) ||
      name.toLowerCase().trim().includes(char.name.toLowerCase())
  );
};

// Helper function to process character list and return valid characters
const processCharacterList = names => {
  return names
    .map(name => findCharacter(name.trim()))
    .filter(char => char !== undefined) // Only include characters that exist
    .map(char => ({ ...char })); // Return character data
};

// Helper function to build potential list from names using centralized data
const buildPotentialList = (characterName, potentialNames) => {
  return potentialNames
    .map(name => {
      const potential = getPotentialByName(characterName, name);
      return potential ? { ...potential } : null;
    })
    .filter(potential => potential !== null && potential !== undefined); // Only include potentials that exist
};

// Team build definitions
export const TEAM_BUILDS = [
  {
    id: 1,
    slug: 'shia-snow-rabbit-auto-atk-cancel',
    name: 'Shia Snow Rabbit Auto Attack Cancel',
    description:
      "High DPS build utilizing Shia's Snow Rabbit mechanic with auto attack canceling for maximum damage output.",
    tags: [],
    content: ['Monolith', 'Boss Fights', 'High-level Content'],
    characters: processCharacterList(['Tilia', 'Shia', 'Minova']),
    mainDps: 'Shia',
    support: 'Tilia',
    flex: 'Minova',

    buildNotes: `This build is all about Shia auto attack. You need to cancel Shia's auto attack strike 2 by doing dash.<br><br>
I personally use a controller because it seems much faster to do it; somehow with keyboard there is slight lag.<br><br>
Minova is not permanent and if a better character comes we can use it. It's going to be hard to change Tilia in my opinion.<br><br>
For emblem, there is little research on which build is good, but what you find here is generally not bad.<br><br>
Have level 10 auto attack (normal attack) going to help, because this is what mostly scales through.<br><br>
If you have any problems, message me in Discord!`,

    // Character-specific potential builds
    characterBuilds: {
      shia: {
        role: 'Main DPS',
        buildName: 'Snow Rabbit Focus',
        potentialCategories: {
          mostCrucial: {
            title: 'Crucial for the Build',
            potentials: buildPotentialList('Shia', [
              "Hare's Pursuit",
              'Phantom Step Radiance',
              'Subzero Dominion',
              'Glacial Dash',
            ]),
          },
          core: {
            title: 'Important',
            potentials: buildPotentialList('Shia', ['Rimecrystal Edge', 'Rimeheart Pulse']),
          },
          additional: {
            title: 'Additional Potentials',
            potentials: buildPotentialList('Shia', [
              'Lunar Combo',
              "Rabbit's Beam",
              'Wave to Oblivion',
            ]),
          },
        },
      },
      tilia: {
        role: 'Support',
        buildName: 'Mark Application Build',
        potentialCategories: {
          mostCrucial: {
            title: 'Crucial for the Build',
            potentials: buildPotentialList('Tilia', [
              'Holy Inscription',
              'Renewed Spectrum',
              'Enemy Counter',
              'Brilliant Relay',
              "Guardian's Resolve",
            ]),
          },
          core: {
            title: 'Important',
            potentials: buildPotentialList('Tilia', ['Trick Boost', 'Knight Oath: Courage']),
          },
          additional: {
            title: 'Additional Potentials',
            potentials: buildPotentialList('Tilia', ["Knight's Seal", 'Knight Oath Chalk Armor']),
          },
        },
      },
      minova: {
        role: 'Flex',
        buildName: 'Star Scatter Build',
        potentialCategories: {
          mostCrucial: {
            title: 'Crucial for the Build',
            potentials: buildPotentialList('Minova', [
              'Radiant Synergy',
              'Fervent Applause',
              'Four-Star Wanted Level',
              'Star Core Crumbled',
            ]),
          },
          core: {
            title: 'Important',
            potentials: [],
          },
          additional: {
            title: 'Additional Potentials',
            potentials: [],
          },
        },
      },
    },

    createdAt: '2024-01-15',
    updatedAt: '2024-01-20',
  },
];

// Get all team builds
export const getAllTeamBuilds = () => {
  return TEAM_BUILDS.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
};

// Get team build by slug
export const getTeamBuildBySlug = slug => {
  return TEAM_BUILDS.find(build => build.slug === slug);
};

export default TEAM_BUILDS;
