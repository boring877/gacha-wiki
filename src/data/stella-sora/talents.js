// Stella Sora Talents Database
// Centralized talent data extracted from all character files

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
import { Firenze } from './characters/characters/firenze.js';
import { SpringseekCoronis } from './characters/characters/springseek-coronis.js';

// All characters data
const allCharacters = [
  Amber,
  Tilia,
  Kasimira,
  Iris,
  Noya,
  Shimiao,
  Ridge,
  Jinglin,
  Coronis,
  Nanoha,
  Canace,
  Ann,
  Freesia,
  Flora,
  Teresa,
  Minova,
  Nazuka,
  Fuyuka,
  Mistique,
  Chixia,
  Cosette,
  Chitose,
  Caramel,
  Gerie,
  Laru,
  Shia,
  Nazuna,
  SnowishLaru,
  Firenze,
  SpringseekCoronis,
];

// Helper function to parse description with params and convert to HTML
function parseDescription(description, params) {
  if (!description) return description;

  let parsed = description;

  // Replace &Param1&, &Param2&, etc. with actual values
  if (params) {
    params.forEach((param, index) => {
      const regex = new RegExp(`&Param${index + 1}&`, 'g');
      parsed = parsed.replace(regex, param);
    });
  }

  // Convert <color=#hexcode>text</color> to styled span
  parsed = parsed.replace(
    /<color=(#[a-fA-F0-9]+)>([^<]+)<\/color>/g,
    '<span class="talent-highlight" style="color: $1">$2</span>'
  );

  // Convert ##text#id# to styled span with marker icon placeholder
  // Pattern: ##Ignis Mark: Sacred Flame#2013# or ##Ventus Mark#1017#
  parsed = parsed.replace(
    /##(Ignis|Aqua|Terra|Ventus|Lux|Umbra)\s*Mark[^#]*#(\d+)#/gi,
    (match, element) => {
      const elementLower = element.toLowerCase();
      return `<span class="talent-skill-ref" data-element="${elementLower}"><img src="/images/games/stella-sora/markers/${elementLower}_mark.png" alt="${element} Mark" class="inline-marker-icon" width="18" height="18" />${match.replace(/##([^#]+)#\d+#/, '$1')}</span>`;
    }
  );

  // Convert remaining ##text#id# patterns without element marks
  parsed = parsed.replace(/##([^#]+)#(\d+)#/g, '<span class="talent-skill-ref">$1</span>');

  // Convert line breaks \u000b to <br>
  parsed = parsed.replace(/\u000b/g, '<br>');

  return parsed;
}

// Extract talents from a character
function extractCharacterTalents(character) {
  if (!character || !character.talents) return [];

  return character.talents.map((talentGroup, index) => {
    // First item in talents array is the main talent effect
    const mainTalent = talentGroup.talents[0];

    // Remaining items are stat bonuses (10 total)
    const statBonuses = talentGroup.talents.slice(1);

    return {
      characterId: character.id,
      characterName: character.name,
      characterElement: character.element,
      characterPosition: character.position,
      characterGrade: character.grade,
      talentIndex: index + 1,
      name: talentGroup.name,
      mainEffect: {
        name: mainTalent.name,
        description: parseDescription(mainTalent.description, mainTalent.params),
        rawDescription: mainTalent.description,
        params: mainTalent.params,
      },
      statBonuses: statBonuses.map(bonus => ({
        name: bonus.name,
        description: parseDescription(bonus.description, bonus.params),
        rawDescription: bonus.description,
        params: bonus.params,
      })),
    };
  });
}

// Generate all talents database
export const talents = allCharacters.flatMap(character => extractCharacterTalents(character));

// Get unique talent names across all characters
export function getUniqueTalentNames() {
  const names = new Set(talents.map(t => t.name));
  return Array.from(names).sort();
}

// Get talents by character name
export function getTalentsByCharacter(characterName) {
  return talents.filter(t => t.characterName.toLowerCase() === characterName.toLowerCase());
}

// Get talents by element
export function getTalentsByElement(element) {
  return talents.filter(t => t.characterElement.toLowerCase() === element.toLowerCase());
}

// Get talents by position (Vanguard, Support)
export function getTalentsByPosition(position) {
  return talents.filter(t => t.characterPosition.toLowerCase() === position.toLowerCase());
}

// Group talents by character
export function getTalentsGroupedByCharacter() {
  const grouped = {};
  allCharacters.forEach(character => {
    if (character && character.talents) {
      grouped[character.name] = {
        id: character.id,
        name: character.name,
        element: character.element,
        position: character.position,
        grade: character.grade,
        icon: character.icon,
        talents: extractCharacterTalents(character),
      };
    }
  });
  return grouped;
}

// Get all stat bonus types
export function getStatBonusTypes() {
  const types = new Set();
  talents.forEach(t => {
    t.statBonuses.forEach(bonus => {
      types.add(bonus.name);
    });
  });
  return Array.from(types).sort();
}

// Get characters list with basic info
export function getCharactersList() {
  return allCharacters
    .filter(c => c && c.talents)
    .map(c => ({
      id: c.id,
      name: c.name,
      element: c.element,
      position: c.position,
      grade: c.grade,
      icon: c.icon,
      talentCount: c.talents.length,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

// Get elements list
export function getElements() {
  const elements = new Set(allCharacters.filter(c => c).map(c => c.element));
  return Array.from(elements).sort();
}

// Get positions list
export function getPositions() {
  const positions = new Set(allCharacters.filter(c => c).map(c => c.position));
  return Array.from(positions).sort();
}

export default {
  talents,
  getUniqueTalentNames,
  getTalentsByCharacter,
  getTalentsByElement,
  getTalentsByPosition,
  getTalentsGroupedByCharacter,
  getStatBonusTypes,
  getCharactersList,
  getElements,
  getPositions,
};
