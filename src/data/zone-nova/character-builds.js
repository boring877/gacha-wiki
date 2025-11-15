// Zone Nova Character Builds Data
import { ZONE_NOVA_CHARACTERS } from './characters.js';

// Character builds data structure - Only Apep currently available
export const CHARACTER_BUILDS = {
  // Apep Build
  apep: {
    name: 'Apep',
    role: 'Tank',
    buildType: 'Tank Sub-DPS Wind',
    description:
      'Apep is a sub-DPS tank unit; she scales with DEF and can generate her self-shield and also heal herself. Her ultimate is only 2 cost!',
    skillPriority: [
      {
        skill: 'Passive',
        priority: 1,
        level: 'Level 10',
        reason: 'Enhances defense scaling and survivability - max level for F2P efficiency',
        description: 'Scales DEF to ATK and provides self-shield generation',
      },
      {
        skill: 'Auto Skill',
        priority: 2,
        level: 'Level 8',
        reason: 'Core tank ability - provides defense scaling and shield generation',
        description: 'Generates shields based on DEF and provides team protection',
      },
      {
        skill: 'Ultimate',
        priority: 3,
        level: 'Level 8',
        reason: 'Very efficient 2-cost ultimate for damage and defense',
        description: '2-cost ability that deals wind damage and provides shields',
      },
      {
        skill: 'Normal Attack',
        priority: 4,
        level: 'Level 7',
        reason: 'Sub-DPS damage that scales with defense and provides self-healing',
        description: 'Basic attack that scales with DEF and provides healing',
      },
    ],
    recommendedMemoryCards: [
      {
        name: 'Wrong Appearance Timing',
        effect:
          "Apep's exclusive memory card. Defense increased by 64%, HP recovery when above 50% HP, and damage reduction/damage increase buffs.",
        priority: 'Highly Recommended',
        characterSpecific: true,
      },
    ],
    alternativeMemoryCards: [
      {
        name: 'Behind the Regret',
        effect:
          "SR memory card that provides HP increase and healing boost, enhancing Apep's survivability and sustain",
        characterSpecific: false,
        memoryImage: 'mordredcard',
        memoryStats: { hp: '5,000', attack: '500', defense: '500' },
        description: 'HP increased by 24%, Self healing amount increased by 30%',
      },
    ],
    runes: {
      primary: 'Defense',
      secondary: 'HP',
      stats: ['DEF%', 'HP%', 'DEF', 'HP', 'Crit Rate', 'Crit Damage', 'Penetration'],
      recommendedSets: [
        {
          name: 'Zahn 4-piece + Tide 2-piece',
          englishName: 'Zahn (札恩) 4-piece + Tide [Energy] 2-piece',
          mainRune: 'Zahn',
          secondaryRune: 'Tide',
          mainRune2Piece: '2-piece: HP +8%',
          mainRune4Piece: '4-piece: After Ultimate: Take 5% less damage (10s)',
          secondaryRuneEffect: '2-piece: Defense increased by 12%',
        },
        {
          name: 'Zahn 4-piece + Shattered Foundation 2-piece',
          englishName: 'Zahn (札恩) 4-piece + Shattered Foundation (碎基) 2-piece',
          mainRune: 'Zahn',
          secondaryRune: 'Shattered-Foundation',
          mainRune2Piece: '2-piece: HP +8%',
          mainRune4Piece: '4-piece: After Ultimate: Take 5% less damage (10s)',
          secondaryRuneEffect: '2-piece: Defense +12%',
        },
      ],
      alternativeSets: [
        {
          name: 'Tide 4-piece + Zahn 2-piece',
          englishName: 'Tide [Energy] (潮汐 [能量]) 4-piece + Zahn (札恩) 2-piece',
          mainRune: 'Tide',
          secondaryRune: 'Zahn',
          mainRune2Piece: '2-piece: Defense increased by 12%',
          mainRune4Piece:
            "4-piece: Within 10 seconds after combat starts, your team's energy gain efficiency is increased by 30%",
          secondaryRuneEffect: '2-piece: HP +8%',
        },
        {
          name: 'Tide 4-piece + Shattered Foundation 2-piece',
          englishName: 'Tide [Energy] (潮汐 [能量]) 4-piece + Shattered Foundation (碎基) 2-piece',
          mainRune: 'Tide',
          secondaryRune: 'Shattered-Foundation',
          mainRune2Piece: '2-piece: Defense increased by 12%',
          mainRune4Piece:
            "4-piece: Within 10 seconds after combat starts, your team's energy gain efficiency is increased by 30%",
          secondaryRuneEffect: '2-piece: Defense +12%',
        },
      ],
    },
    mainStatsByPosition: {
      1: {
        name: 'Position 1 — Fixed Main Stat',
        stat: 'HP (Flat Value)',
        description: 'Always HP - no other options',
        isFixed: true,
      },
      2: {
        name: 'Position 2 — Fixed Main Stat',
        stat: 'Attack (Flat Value)',
        description: 'Always Attack - no other options',
        isFixed: true,
      },
      3: {
        name: 'Position 3 — Fixed Main Stat',
        stat: 'Defense (Flat Value)',
        description: 'Always Defense - no other options',
        isFixed: true,
      },
      4: {
        name: 'Position 4 — Variable Main Stats',
        recommendedStat: 'Defense (%)',
        availableStats: [
          'Healing Effectiveness (%)',
          'Critical Rate (%)',
          'Critical Damage (%)',
          'Attack Penetration (%)',
          'Attack (%)',
          'HP (%)',
          'Defense (%)',
        ],
        description:
          'Most diverse options including utility stats and exclusive Attack Penetration (%)',
      },
      5: {
        name: 'Position 5 — Variable Main Stats',
        recommendedStat: 'Defense (%)',
        availableStats: [
          'Wind Attribute Damage (%)',
          'Fire Attribute Damage (%)',
          'Ice Attribute Damage (%)',
          'Holy Attribute Damage (%)',
          'Chaos Attribute Damage (%)',
          'Attack (%)',
          'HP (%)',
          'Defense (%)',
        ],
        description: 'Core stats plus elemental damage increases - all percentages',
      },
      6: {
        name: 'Position 6 — Variable Main Stats',
        recommendedStat: 'Defense (%)',
        availableStats: ['Attack (%)', 'HP (%)', 'Defense (%)'],
        description: 'Focus on core percentage stat increases only',
      },
    },
    teamSynergy: {
      goodWith: ['Nina', 'Hare'],
      note: 'This unit has no clear synergy with other characters, but this is the best I could think of right now! She is more PVP focused than PVE.',
    },
  },
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
