// Stella Sora Team Build Data
// Full team compositions for optimal performance

import { STELLA_SORA_CHARACTERS } from './characters.js';
import { getPotentialByName } from './all-potentials.js';

// Helper function to find character by name (case-insensitive)
// Prioritizes exact matches, then longer name matches to avoid "Laru" matching before "Snowish Laru"
const findCharacter = name => {
  const searchName = name.toLowerCase().trim();

  // First try exact match
  const exactMatch = STELLA_SORA_CHARACTERS.find(char => char.name.toLowerCase() === searchName);
  if (exactMatch) return exactMatch;

  // Then try partial matches, preferring longer character names first
  const sortedByNameLength = [...STELLA_SORA_CHARACTERS].sort(
    (a, b) => b.name.length - a.name.length
  );

  return sortedByNameLength.find(
    char =>
      char.name.toLowerCase().includes(searchName) || searchName.includes(char.name.toLowerCase())
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
// potentialNames can be either strings or objects { name: string, level: number }
const buildPotentialList = (characterName, potentialNames) => {
  return potentialNames
    .map(item => {
      const name = typeof item === 'string' ? item : item.name;
      const level = typeof item === 'string' ? 1 : item.level || 1;
      const potential = getPotentialByName(characterName, name);
      return potential ? { ...potential, recommendedLevel: level } : null;
    })
    .filter(potential => potential !== null && potential !== undefined);
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
  {
    id: 2,
    slug: 'xmas-raid-fuyuka-ultimate',
    name: 'Xmas Raid: Fuyuka Ultimate Build',
    description:
      'Team build for clearing the Maid for You Christmas raid with 100 points. Uses Fuyuka Ultimate build with Flora and Snowish Laru support.',
    tags: ['raid', 'event', 'christmas', 'ignis'],
    content: ['Raid Event', 'Maid for You', '100 Points Clear'],
    characters: processCharacterList(['Fuyuka', 'Flora', 'Snowish Laru']),
    mainDps: 'Fuyuka',
    support: 'Flora',
    flex: 'Snowish Laru',

    buildNotes: '',

    characterBuilds: {
      fuyuka: {
        buildName: 'Ultimate Build',
        potentialCategories: {
          core: {
            title: 'Core Potentials',
            potentials: buildPotentialList('Fuyuka', [
              { name: 'Kitty Punch', level: 1 },
              { name: 'Multi-Shot Blast', level: 1 },
              { name: 'Combo Punch', level: 1 },
              { name: 'Pyro Mark', level: 1 },
            ]),
          },
          generic: {
            title: 'Generic Potentials',
            potentials: buildPotentialList('Fuyuka', [
              { name: 'Finishing Blow', level: 6 },
              { name: 'Blazing Heart', level: 6 },
              { name: 'Ironfist Blow', level: 6 },
              { name: 'Peak Performance', level: 6 },
              { name: 'Swirling Counterattack', level: 6 },
              { name: 'Bold Challenge', level: 6 },
            ]),
          },
        },
      },
      flora: {
        buildName: 'Crit Build',
        potentialCategories: {
          core: {
            title: 'Core Potentials',
            potentials: buildPotentialList('Flora', [
              { name: 'Ashes of the Past', level: 1 },
              { name: 'Ember of Tomorrow', level: 1 },
            ]),
          },
          generic: {
            title: 'Generic Potentials',
            potentials: buildPotentialList('Flora', [
              { name: 'Reinforced Impression', level: 6 },
              { name: 'Visual Impact', level: 6 },
              { name: 'Perfect Acting', level: 6 },
              { name: 'Foreshadowing Verification', level: 6 },
              { name: 'Guest Performer', level: 6 },
              { name: 'Everlasting Show', level: 6 },
            ]),
          },
        },
      },
      'snowish laru': {
        buildName: 'Support Build',
        potentialCategories: {
          core: {
            title: 'Core Potentials',
            potentials: buildPotentialList('Snowish Laru', [
              { name: 'Fire Downpour', level: 1 },
              { name: 'Special Ammo', level: 1 },
            ]),
          },
          generic: {
            title: 'Generic Potentials',
            potentials: buildPotentialList('Snowish Laru', [
              { name: 'Two-Gun Salute', level: 6 },
              { name: 'Uplifting Shot', level: 6 },
              { name: 'Fairy Tale Rule', level: 6 },
              { name: 'Celebration Resumed', level: 6 },
            ]),
          },
        },
      },
    },

    createdAt: '2025-12-24',
    updatedAt: '2025-12-24',
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
