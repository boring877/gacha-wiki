// Stella Sora Characters API Endpoint
// Generates /data/stella-sora/characters.json

import { STELLA_SORA_CHARACTERS, gameInfo } from '../../../data/stella-sora/characters.js';

export const prerender = true;

export async function GET() {
  // Build metadata from actual data
  const metadata = {
    rarities: gameInfo.rarities,
    elements: gameInfo.elements,
    roles: gameInfo.roles,
    weapons: gameInfo.weapons,
    tableStats: gameInfo.tableStats,
  };

  const response = {
    game: 'Stella Sora',
    type: 'characters',
    description:
      'Complete character database with stats, skills, talents, potentials (main/support builds), disc info, and story',
    count: STELLA_SORA_CHARACTERS.length,
    lastUpdated: new Date().toISOString().split('T')[0],
    metadata,
    characters: STELLA_SORA_CHARACTERS.map(char => ({
      id: char.id,
      name: char.name,
      slug: char.slug,
      rarity: char.rarity,
      element: char.element,
      role: char.role,
      weapon: char.weapon,
      faction: char.faction,
      trekkerStyle: char.trekkerStyle,
      level: char.level,
      tags: char.tags,
      description: char.description,
      story: char.story,

      // Basic stats
      stats: char.stats,

      // Extended stats
      combatStats: char.combatStats,
      energyStats: char.energyStats,
      elementalStats: char.elementalStats,
      fullStats: char.fullStats,

      // Skills (Attack, Main Skill, Support Skill, Ultimate)
      skills: char.skills?.map(skill => ({
        name: skill.name,
        type: skill.type,
        level: skill.level,
        cooldown: skill.cooldown,
        energyCost: skill.energyCost,
        description: skill.description,
      })),

      // Talents (Dupes/Constellation equivalent)
      talents: char.talents?.map(talent => ({
        id: talent.id,
        name: talent.name,
        description: talent.description,
      })),

      // Main role potentials (build guides)
      mainPotentials: char.mainPotentials?.map(potential => {
        if (potential.isBuildHeader) {
          return {
            isBuildHeader: true,
            buildTitle: potential.buildTitle,
            buildDescription: potential.buildDescription,
          };
        }
        return {
          name: potential.name,
          level: potential.level || null,
          description: potential.description,
        };
      }),

      // Support role potentials
      supportPotentials: char.supportPotentials?.map(potential => {
        if (potential.isBuildHeader) {
          return {
            isBuildHeader: true,
            buildTitle: potential.buildTitle,
            buildDescription: potential.buildDescription,
          };
        }
        return {
          name: potential.name,
          level: potential.level || null,
          description: potential.description,
        };
      }),

      // Generic cards
      genericCards: char.genericCards?.map(card => ({
        name: card.name,
        level: card.level || null,
        description: card.description,
      })),

      // Signature disc
      disc: char.disc
        ? {
            name: char.disc.name,
            rarity: char.disc.rarity,
            element: char.disc.element,
            tags: char.disc.tags,
            stats: char.disc.stats,
            skills: char.disc.skills,
            support: char.disc.support,
          }
        : null,

      // Status effects
      statusEffects: char.statusEffects,

      // Links
      image: char.image,
      detailUrl: char.detailUrl || `/guides/stella-sora/characters/${char.slug}`,
    })),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
