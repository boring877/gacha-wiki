// Zone Nova Character Builds Data
import { ZONE_NOVA_CHARACTERS } from './characters.js';
import { helaBuild } from './character-builds/hela.js';
import { apepBuild } from './character-builds/apep.js';
import { naiyaBuild } from './character-builds/naiya.js';
import { pennyBuild } from './character-builds/penny.js';
import { apolloBuild } from './character-builds/apollo.js';
import { morganLeFayBuild } from './character-builds/morgan-le-fay.js';
import { thorBuild } from './character-builds/thor.js';
import { gaiaBuild } from './character-builds/gaia.js';
import { horusBuild } from './character-builds/horus.js';
import { odinBuild } from './character-builds/odin.js';
import { guinevereBuild } from './character-builds/guinevere.js';
import { artemisBuild } from './character-builds/artemis.js';
import { freyeChaosBuild } from './character-builds/freye.js';
import { freyaBuild } from './character-builds/freya.js';
import { athenaBuild } from './character-builds/athena.js';
import { ibarakiDojiBuild } from './character-builds/ibaraki-doji.js';
import { sigurdBuild } from './character-builds/sigurd.js';

// Character builds data structure - imports from individual character build files
export const CHARACTER_BUILDS = {
  // Hela Build - SSR Chaos DPS
  hela: helaBuild,

  // Naiya Build - SSR Ice Buffer
  naiya: naiyaBuild,

  // Apep Build - SSR Wind Tank
  apep: apepBuild,

  // Penny Build - SSR Wind Tank
  penny: pennyBuild,

  // Apollo Build - SSR Fire Buffer
  apollo: apolloBuild,

  // Morgan Le Fay Build - SSR Holy Buffer
  'morgan-le-fay': morganLeFayBuild,

  // Thor Build - SSR Holy Guardian Tank
  thor: thorBuild,

  // Gaia Build - SSR Holy HP Scaling Healer
  gaia: gaiaBuild,

  // Horus Build - SSR Holy DOT Debuffer
  horus: horusBuild,

  // Odin Build - SSR Fire DOT Controller
  odin: odinBuild,

  // Guinevere Build - SSR Fire Defense Scaling Tank
  guinevere: guinevereBuild,

  // Artemis Build - SSR Wind Berserker DPS
  artemis: artemisBuild,

  // Freye Build - SSR Chaos DOT Debuffer
  freye: freyeChaosBuild,

  // Freya Build - SSR Ice Normal Attack Speed Carry
  freya: freyaBuild,

  // Athena Build - SSR Wind Normal Attack Speed Buffer
  athena: athenaBuild,

  // Ibaraki-doji Build - SSR Fire Ultimate Damage Amplification Debuffer
  'ibaraki-doji': ibarakiDojiBuild,

  // Sigurd Build - SSR Fire Crit-based Enhanced Ultimate DPS
  sigurd: sigurdBuild,
};

// Generate builds for available characters only
export function getAllCharacterBuilds() {
  const builds = {};

  // Only include characters that have explicit builds defined
  Object.keys(CHARACTER_BUILDS).forEach(characterSlug => {
    const character = ZONE_NOVA_CHARACTERS.find(c => c.slug === characterSlug);
    if (character) {
      builds[characterSlug] = {
        ...CHARACTER_BUILDS[characterSlug],
        character: character,
      };
    }
  });

  return builds;
}

// Helper functions for generating default builds
function getDefaultBuildType(role, characterClass) {
  const buildTypes = {
    DPS: {
      Warrior: 'Frontline Fighter',
      Mage: 'Magic Damage Dealer',
      Rogue: 'Critical Striker',
    },
    Tank: {
      Guardian: 'Defensive Guardian',
    },
    Healer: {
      Healer: 'Support Healer',
    },
    Buffer: {
      Buffer: 'Team Support',
    },
    Debuffer: {
      Debuffer: 'Control Specialist',
    },
  };

  return buildTypes[role]?.[characterClass] || 'Balanced Build';
}

function getDefaultDescription(role, characterClass) {
  const descriptions = {
    DPS: 'Focus on maximizing damage output through appropriate stat building and skill prioritization.',
    Tank: 'Prioritize defense and HP to protect allies and control the battlefield.',
    Healer: 'Maximize healing output and support capabilities to keep the team alive.',
    Buffer: 'Enhance team performance through strategic buff application and support.',
    Debuffer: 'Control enemies through debuffs and crowd management techniques.',
  };

  return descriptions[role] || "A balanced build optimized for the character's abilities and role.";
}

// Get specific character build
export function getCharacterBuild(slug) {
  const allBuilds = getAllCharacterBuilds();
  return allBuilds[slug];
}

// Get builds by role
export function getBuildsByRole(role) {
  const allBuilds = getAllCharacterBuilds();
  return Object.values(allBuilds).filter(build => build.role === role);
}

// Get builds by class
export function getBuildsByClass(characterClass) {
  const allBuilds = getAllCharacterBuilds();
  return Object.values(allBuilds).filter(build => build.character?.class === characterClass);
}

// Export all character builds for easy access
export const ALL_CHARACTER_BUILDS = getAllCharacterBuilds();
