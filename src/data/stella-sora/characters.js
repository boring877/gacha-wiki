// Stella Sora Characters Database
// This file builds character data from separated data files
// All character stats are based on maximum level

import { characterInfo } from './character-info.js';
import { characterStats } from './character-stats.js';
import { characterBaseStats } from './character-base-stats.js';
import { characterSkills } from './skills.js';
import { allPotentials } from './all-potentials.js';

// Import disc data for 5-star characters
import { disc as daylightGarden } from './discs/daylight-garden.js';
import { disc as sunlitBlossom } from './discs/sunlit-blossom.js';
import { disc as midnightMayhem } from './discs/midnight-mayhem.js';
import { disc as deersSong } from './discs/deer-s-song.js';
import { disc as fireworksDisc } from './discs/fireworks.js';
import { disc as witchsSwing } from './discs/witch-s-swing.js';
import { disc as mysticBrushstrokes } from './discs/mystic-brushstrokes.js';
import { disc as swordAgainstStream } from './discs/sword-against-stream.js';
import { disc as theLostPilgrim } from './discs/the-lost-pilgrim.js';
import { disc as ripplesOfNostalgia } from './discs/ripples-of-nostalgia.js';
import { disc as clawTheClaw } from './discs/claw-the-claw.js';
import { disc as snowyNightSurprise } from './discs/snowy-night-surprise.js';

// Import full character data from new character files
import { Amber } from './characters/characters/amber.js';
import { Tilia } from './characters/characters/tilia.js';
import { Kasimira } from './characters/characters/kasimira.js';
import { Iris } from './characters/characters/iris.js';
import { Noya } from './characters/characters/noya.js';
import { Shimiao } from './characters/characters/shimiao.js';
import { Ridge } from './characters/characters/ridge.js';
import { Jinglin } from './characters/characters/jinglin.js';
import { Coronis } from './characters/characters/coronis.js';
import { Nanoha } from './characters/characters/nanoha.js';
import { Canace } from './characters/characters/canace.js';
import { Ann } from './characters/characters/ann.js';
import { Freesia } from './characters/characters/freesia.js';
import { Flora } from './characters/characters/flora.js';
import { Teresa } from './characters/characters/teresa.js';
import { Minova } from './characters/characters/minova.js';
import { Nazuka } from './characters/characters/nazuka.js';
import { Fuyuka } from './characters/characters/fuyuka.js';
import { Mistique } from './characters/characters/mistique.js';
import { Chixia } from './characters/characters/chixia.js';
import { Cosette } from './characters/characters/cosette.js';
import { Chitose } from './characters/characters/chitose.js';
import { Caramel } from './characters/characters/caramel.js';
import { Gerie } from './characters/characters/gerie.js';
import { Laru } from './characters/characters/laru.js';
import { Shia } from './characters/characters/shia.js';
import { Nazuna } from './characters/characters/nazuna.js';
import { SnowishLaru } from './characters/characters/snowish-laru.js';

// Map character data by slug for easy lookup
const characterDataMap = {
  amber: Amber,
  tilia: Tilia,
  kasimira: Kasimira,
  iris: Iris,
  noya: Noya,
  shimiao: Shimiao,
  ridge: Ridge,
  jinglin: Jinglin,
  coronis: Coronis,
  nanoha: Nanoha,
  canace: Canace,
  ann: Ann,
  freesia: Freesia,
  flora: Flora,
  teresa: Teresa,
  minova: Minova,
  nazuka: Nazuka,
  fuyuka: Fuyuka,
  mistique: Mistique,
  chixia: Chixia,
  cosette: Cosette,
  chitose: Chitose,
  caramel: Caramel,
  gerie: Gerie,
  laru: Laru,
  shia: Shia,
  nazuna: Nazuna,
  snowishLaru: SnowishLaru,
};

// Map 5-star characters to their signature discs
const characterDiscMap = {
  nanoha: daylightGarden,
  freesia: sunlitBlossom,
  minova: midnightMayhem,
  nazuka: deersSong,
  fuyuka: fireworksDisc,
  mistique: witchsSwing,
  chixia: mysticBrushstrokes,
  chitose: swordAgainstStream,
  gerie: theLostPilgrim,
  shia: ripplesOfNostalgia,
  nazuna: clawTheClaw,
  snowishLaru: snowyNightSurprise,
};

// Game Mechanics Reference
export const gameInfo = {
  rarities: ['5-Star', '4-Star', '3-Star'],
  elements: [
    {
      name: 'Aqua',
      color: '#0EA5E9',
      description: 'Aqua element characters command water and flow',
    },
    {
      name: 'Lux',
      color: '#FFD700',
      description: 'Lux element characters harness radiant light energy',
    },
    {
      name: 'Umbra',
      color: '#6B46C1',
      description: 'Umbra element characters wield shadow and dark magic',
    },
    {
      name: 'Ignis',
      color: '#DC2626',
      description: 'Ignis element characters command fire and flame',
    },
    {
      name: 'Terra',
      color: '#8B4513',
      description: 'Terra element characters command earth and stone',
    },
    {
      name: 'Ventus',
      color: '#10B981',
      description: 'Ventus element characters wield wind and flower ninjutsu',
    },
  ],
  roles: [
    { name: 'Vanguard', description: 'Front-line warriors who lead the charge' },
    {
      name: 'Versatile',
      description: 'Flexible characters who can adapt to various combat situations',
    },
    {
      name: 'Support',
      description:
        'Characters who enhance team performance through buffs, healing, and tactical abilities',
    },
  ],
  weapons: [
    { name: 'Sword', description: 'Balanced melee weapon' },
    { name: 'Staff', description: 'Magic-focused weapon' },
    { name: 'Bow', description: 'Ranged physical weapon' },
    { name: 'Dagger', description: 'Fast melee weapon' },
    { name: 'Shield', description: 'Defensive weapon' },
  ],
  tableStats: ['HP', 'ATK', 'DEF', 'Crit Rate', 'Crit DMG'],
  get tags() {
    const allTags = STELLA_SORA_CHARACTERS.flatMap(char => char.tags || []);
    return [...new Set(allTags)].sort();
  },
};

// Helper function to parse description and replace params
function parseDescription(description, params) {
  if (!description || !params) return description;

  let parsed = description;
  params.forEach((param, index) => {
    const regex = new RegExp(`&Param${index + 1}&`, 'g');
    parsed = parsed.replace(regex, param);
  });

  // Convert color tags to bold markdown
  parsed = parsed.replace(/<color=(#[a-fA-F0-9]+)>([^<]+)<\/color>/g, '**$2**');

  return parsed;
}

// Transform talents from new format to expected format
function transformTalents(charData) {
  if (!charData || !charData.talents) return [];

  return charData.talents.map((talentGroup, index) => {
    const mainTalent = talentGroup.talents[0];
    return {
      id: index + 1,
      name: talentGroup.name,
      description: parseDescription(mainTalent.description, mainTalent.params),
      // Preserve the full nested talents array for detailed view
      talents: talentGroup.talents,
    };
  });
}

// Extract status effects from skill hints (e.g., Chill, Freeze, Marks)
function extractStatusEffects(charData) {
  if (!charData) return [];

  const effects = new Map(); // Use Map to dedupe by id
  const skills = [charData.normalAttack, charData.skill, charData.supportSkill, charData.ultimate];

  skills.forEach(skill => {
    if (skill?.hints) {
      Object.values(skill.hints).forEach(hint => {
        if (hint && hint.id && hint.name && hint.description) {
          // Parse the description with params
          const parsedDesc = parseDescription(hint.description, hint.params);
          effects.set(hint.id, {
            id: hint.id,
            name: hint.name,
            description: parsedDesc,
          });
        }
      });
    }
  });

  return Array.from(effects.values());
}

// Transform gift preferences from string array to object array
function transformGiftPreferences(giftPreferences) {
  if (!giftPreferences) return { loves: [], hates: [] };

  const transformGiftArray = gifts => {
    if (!Array.isArray(gifts)) return [];
    return gifts.map(gift => {
      // If already an object, return as-is
      if (typeof gift === 'object' && gift !== null) {
        return gift;
      }
      // If string, convert to object
      return { name: gift };
    });
  };

  return {
    loves: transformGiftArray(giftPreferences.loves),
    hates: transformGiftArray(giftPreferences.hates),
  };
}

// Transform potentials from new format to expected format
function transformPotentials(potentialsData, buildOrder, type) {
  if (!potentialsData) return [];

  const result = [];
  const coreKey = type === 'main' ? 'mainCore' : 'supportCore';
  const basicKey = type === 'main' ? 'mainBasic' : 'supportBasic';
  const genericKey = type === 'main' ? 'mainGeneric' : 'supportGeneric';

  // Add build 1 header and potentials
  if (buildOrder && buildOrder.build1) {
    result.push({
      isBuildHeader: true,
      buildTitle: 'Build 1',
      buildSubtitle: buildOrder.build1.potentials?.join(', ') || '',
      buildDescription: buildOrder.build1.description || '',
    });
  }

  // Add core potentials
  if (potentialsData[coreKey]) {
    potentialsData[coreKey].forEach(potential => {
      result.push({
        name: potential.name,
        description: potential.description,
        params: potential.params || [],
        image: potential.icon,
        level: potential.rarity === 1 ? 'Core' : 'Basic',
        rarity: potential.rarity,
        stype: potential.stype,
        corner: potential.corner,
      });
    });
  }

  // Add build 2 header if exists
  if (buildOrder && buildOrder.build2) {
    result.push({
      isBuildHeader: true,
      buildTitle: 'Build 2',
      buildSubtitle: buildOrder.build2.potentials?.join(', ') || '',
      buildDescription: buildOrder.build2.description || '',
    });
  }

  // Add basic potentials
  if (potentialsData[basicKey]) {
    potentialsData[basicKey].forEach(potential => {
      result.push({
        name: potential.name,
        description: potential.description,
        params: potential.params || [],
        image: potential.icon,
        level: 'Basic',
        rarity: potential.rarity,
        stype: potential.stype,
        corner: potential.corner,
      });
    });
  }

  // Add generic potentials
  if (potentialsData.generic) {
    potentialsData.generic.forEach(potential => {
      result.push({
        name: potential.name,
        description: potential.description,
        params: potential.params || [],
        image: potential.icon,
        level: 'Generic',
        rarity: potential.rarity,
        stype: potential.stype,
        corner: potential.corner,
      });
    });
  }

  return result;
}

// Helper function to format disc description with parameters
function formatDiscDescription(desc, params) {
  if (!desc || !params) return desc || '';

  let result = desc;
  params.forEach((param, idx) => {
    result = result.replace(`{${idx + 1}}`, `**${param}**`);
  });
  // Remove color tags and convert to bold
  result = result.replace(/<color=[^>]+>([^<]+)<\/color>/g, '**$1**');
  // Remove ## markers (e.g., ##Ventus Mark#1017#)
  result = result.replace(/##[^#]+#\d+#/g, '');
  // Replace line break character
  result = result.replace(/\u000b/g, ' ');
  return result;
}

// Helper function to format disc requirements
function formatDiscRequirements(reqs) {
  if (!reqs || !Array.isArray(reqs)) return {};

  const result = {};
  reqs.forEach(req => {
    result[req.name] = `≥ Lv.${req.quantity}`;
  });
  return result;
}

// Map disc names to actual image filenames (handles inconsistent naming)
const discImageFilenames = {
  'Daylight Garden': 'daylight_garden.jpg',
  'Sunlit Blossom': 'Sunlit_blossom.jpg',
  'Midnight Mayhem': 'Midnight_mayhem.jpg',
  "Deer's Song": "Deer's_Song.jpg",
  Fireworks: 'Fireworks.jpg',
  "Witch's Swing": "Witch's_swing.jpg",
  'Mystic Brushstrokes': 'Mystic_brushstrokes.jpg',
  'Sword Against Stream': 'sword_against_stream.jpg',
  'The Lost Pilgrim': 'The_lost_pilgrim.jpg',
  'Ripples of Nostalgia': 'ripples_of_nostalgia.jpg',
  'Claw the Claw': 'Claw_the_claw.jpg',
};

// Generate disc image filename from disc name
function generateDiscImageName(discName) {
  // Use explicit mapping if available
  if (discImageFilenames[discName]) {
    return discImageFilenames[discName];
  }
  // Fallback: convert to underscore format
  return (
    discName
      .split(' ')
      .map((word, index) => (index === 0 ? word : word.toLowerCase()))
      .join('_') + '.jpg'
  );
}

// Transform disc data from new format to expected template format
function transformDiscData(disc) {
  if (!disc) return null;

  // Get max level stats (last entry in stats array)
  const maxStats = disc.stats[disc.stats.length - 1];
  const atkStat = maxStats.find(s => s.id === 'atk');
  const dmgStat = maxStats.find(s => s.id !== 'atk');

  // Get max level skill params (last entry in params array)
  const maxMainParams = disc.mainSkill.params[disc.mainSkill.params.length - 1];

  // Build element damage key (e.g., 'ventusDmg')
  const elementDmgKey = disc.element.toLowerCase() + 'Dmg';

  // Build support melodies from supportNote
  // supportNote is an array of levels (1-9), each containing melody notes the disc provides
  const supportMelodies = {};
  if (disc.supportNote && disc.supportNote.length > 0) {
    // Get base level (first entry) and max level (last entry) support notes
    const baseSupportNotes = disc.supportNote[0];
    const maxSupportNotes = disc.supportNote[disc.supportNote.length - 1];

    if (maxSupportNotes && Array.isArray(maxSupportNotes)) {
      maxSupportNotes.forEach((note, index) => {
        const melodyKey = note.name.replace('Melody of ', '').toLowerCase();
        const baseNote = baseSupportNotes?.[index];
        const baseQuantity = baseNote?.quantity || note.quantity;

        supportMelodies[melodyKey] = {
          baseEffect: `+${baseQuantity}`,
          maxEffect: `+${note.quantity}`,
        };
      });
    }
  }

  return {
    name: disc.name,
    image: generateDiscImageName(disc.name),
    slug: disc.name
      .toLowerCase()
      .replace(/['']/g, '-')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-'),
    rarity: `${disc.star}-Star`,
    element: disc.element,
    tags: disc.tag,
    stats: {
      basicAtk: atkStat?.value || 0,
      [elementDmgKey]: dmgStat ? `${dmgStat.value}%` : '0%',
    },
    skills: {
      melody: {
        name: disc.mainSkill.name,
        effect: formatDiscDescription(disc.mainSkill.description, maxMainParams),
      },
      harmony: disc.secondarySkills.map(skill => {
        const maxParams = skill.params[skill.params.length - 1];
        const maxReqs = skill.requirements[skill.requirements.length - 1];
        return {
          name: skill.name,
          level: 5,
          effect: formatDiscDescription(skill.description, maxParams),
          requirements: formatDiscRequirements(maxReqs),
        };
      }),
    },
    support: {
      musicalNotesSource: 'Monolith Ascension',
      melodies: supportMelodies,
    },
  };
}

// Normalize character data from new format to expected format
function normalizeCharacter(info) {
  const slug = info.slug;
  const stats = characterStats[slug];
  const baseStats = characterBaseStats[slug];
  const skills = characterSkills[slug];
  const potentials = allPotentials[slug];
  const charData = characterDataMap[slug];

  // Get max level stats (last entry in stats array)
  const maxStats = stats ? stats[stats.length - 1] : { hp: 0, atk: 0 };

  return {
    // Basic info
    id: info.id,
    name: info.name,
    slug: slug,
    detailUrl: `/guides/stella-sora/characters/${slug}`,
    image: `${info.name}.jpg`,
    icon: `${info.name}.jpg`,

    // Mapped fields
    grade: info.grade || info.rarity,
    rarity: `${info.grade || info.rarity}-Star`,
    role: info.position,
    element: info.element,
    attackType: info.attackType,
    faction: info.faction,
    style: info.style,
    trekkerStyle: info.style,
    tags: info.tags,

    // Personal info
    story: info.description,
    voiceActor: info.voiceActor,
    birthday: info.birthday,

    // Date events and gift preferences from character data
    dateEvents: charData?.dateEvents || [],
    giftPreferences: transformGiftPreferences(charData?.giftPreferences),

    // Level-based stats (HP/ATK per level)
    levelStats: stats || [],

    // Base stats (max level)
    stats: {
      hp: maxStats.hp,
      attack: maxStats.atk,
      defense: baseStats?.def || 190,
      critRate: baseStats?.critRate || 5.0,
      critDmg: baseStats?.critDmg || 150.0,
    },

    // Combat stats
    combatStats: {
      vulExploit: baseStats?.vulExploit || 0.0,
      defPen: baseStats?.defPen || 0,
      ignoreDef: baseStats?.ignoreDef || 0.0,
    },

    // Energy stats
    energyStats: {
      maxEnergy: baseStats?.maxEnergy || 285,
      chargeEfficiencyMain: baseStats?.chargeEfficiencyMain || 100.0,
      chargeEfficiencySupport: baseStats?.chargeEfficiencySupport || 75.0,
    },

    // Elemental stats
    elementalStats: {
      [info.element]: {
        dmg: baseStats?.elementalDmg || 100.0,
        pen: baseStats?.elementalPen || 0,
        ignoreRes: baseStats?.elementalIgnoreRes || 0.0,
      },
    },

    // Skills
    skillsDetailed: skills
      ? {
          normalAttack: skills.normalAttack,
          skill: skills.skill,
          supportSkill: skills.supportSkill,
          ultimate: skills.ultimate,
        }
      : null,

    // Legacy skills array for fallback
    skills: [],

    // Status effects (extracted from skill hints with params parsed)
    statusEffects: extractStatusEffects(charData),

    // Talents
    talents: transformTalents(charData),

    // Potentials
    mainPotentials: potentials
      ? transformPotentials(potentials.potentials, potentials.buildOrder?.main, 'main')
      : [],
    supportPotentials: potentials
      ? transformPotentials(potentials.potentials, potentials.buildOrder?.support, 'support')
      : [],

    // Disc (5-star characters only)
    disc: characterDiscMap[slug] ? transformDiscData(characterDiscMap[slug]) : null,
  };
}

// Character array - built from characterInfo
export const STELLA_SORA_CHARACTERS = characterInfo.map(normalizeCharacter);

// Utility functions
export function getCharacterById(id) {
  return STELLA_SORA_CHARACTERS.find(char => char.id === id);
}

export function getCharacterBySlug(slug) {
  return STELLA_SORA_CHARACTERS.find(char => char.slug === slug);
}

export function getCharactersByRarity(rarity) {
  return STELLA_SORA_CHARACTERS.filter(char => char.rarity === rarity);
}

export function getCharactersByElement(element) {
  return STELLA_SORA_CHARACTERS.filter(char => char.element === element);
}

export function getCharactersByRole(role) {
  return STELLA_SORA_CHARACTERS.filter(char => char.role === role);
}

// Export all characters as default for easy importing
export default STELLA_SORA_CHARACTERS;
