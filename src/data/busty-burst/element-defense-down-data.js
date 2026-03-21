// Busty Burst Element Defense Down Database
// Contains characters with element-specific defense down skills and ultimates
// These are different from Physical/Magic Defense - they reduce defense against specific element types
// Updated: Element types are Fire, Water, Wind, Light, Dark, Mind (no Magic, no Earth)

import { BUSTY_BURST_SKILLS_DATA, getAllCharacterSlugs } from './characters/index.js';

// Get valid character slugs (only released characters in character-info.js)
const validCharacterSlugs = new Set(getAllCharacterSlugs());

// Element types that have defense down skills (game elements only)
export const ELEMENT_TYPES = ['Fire', 'Water', 'Wind', 'Light', 'Dark', 'Mind'];

// Parse element defense down from description
// Returns array of {element, percent, duration, level, isUltimate}
function parseElementDefenseDown(description) {
  if (!description) return [];

  const results = [];
  const elements = ['Fire', 'Water', 'Wind', 'Light', 'Dark', 'Mind'];

  // Extract duration from description
  const durationMatch = description.match(/for\s+(\d+(?:\.\d+)?)\s*seconds?/i);
  const duration = durationMatch ? parseFloat(durationMatch[1]) : 0;

  for (const element of elements) {
    // Pattern 1: Ultimate format "Element Type Defense DOWN(LVX)"
    // Match: "Water Type Defense DOWN(LV1)", "Fire Type Defense DOWN(LV5)"
    const ultRegex = new RegExp(`${element}\\s*Type\\s*Defense\\s*DOWN\\s*\\(LV(\\d+)\\)`, 'gi');
    let ultMatch;
    while ((ultMatch = ultRegex.exec(description)) !== null) {
      results.push({
        element,
        percent: 0, // Get from buffEffects
        duration,
        level: parseInt(ultMatch[1]),
        isUltimate: true,
      });
    }

    // Pattern 2: Skill format with percentage
    // Match: "Wind Type Defense -18%DOWN", "Fire Type Defense-20%DOWN"
    const skillRegex = new RegExp(`${element}\\s*Type\\s*Defense\\s*-\\s*(\\d+)%\\s*DOWN`, 'gi');
    let skillMatch;
    while ((skillMatch = skillRegex.exec(description)) !== null) {
      results.push({
        element,
        percent: parseInt(skillMatch[1]),
        duration,
        level: null,
        isUltimate: false,
      });
    }

    // Pattern 3: Short format "Element DEF -X%"
    // Match: "Water DEF -25%", "Fire DEF -40%"
    const shortRegex = new RegExp(`${element}\\s*DEF\\s*-\\s*(\\d+)%`, 'gi');
    let shortMatch;
    while ((shortMatch = shortRegex.exec(description)) !== null) {
      results.push({
        element,
        percent: parseInt(shortMatch[1]),
        duration,
        level: null,
        isUltimate: false,
      });
    }
  }

  return results;
}

// Get all element defense down skills
export function getElementDefenseDownSkills() {
  const skills = [];

  for (const char of BUSTY_BURST_SKILLS_DATA) {
    // Skip unreleased characters (not in character-info.js)
    if (!validCharacterSlugs.has(char.slug)) continue;

    // Check regular skills (slots 1, 2, 3)
    if (char.skills) {
      for (const skill of char.skills) {
        const desc = skill.descriptionLv90 || skill.description || '';
        const elementDefDowns = parseElementDefenseDown(desc);

        for (const defDown of elementDefDowns) {
          // Get values from buffEffects
          const buffEffects = skill.buffEffects || [];
          const elementBuff = buffEffects.find(b =>
            b.name && b.name.toLowerCase().includes(defDown.element.toLowerCase()) &&
            (b.name.toLowerCase().includes('type defense') || b.name.toLowerCase().includes('def down'))
          );

          let percent = defDown.percent;
          let duration = defDown.duration;

          // buffEffects has accurate values
          if (elementBuff && elementBuff.value) {
            // Handle both number values and string values like "-25%"
            if (typeof elementBuff.value === 'number') {
              percent = Math.abs(elementBuff.value);
            } else if (typeof elementBuff.value === 'string') {
              const numMatch = elementBuff.value.match(/-?(\d+)/);
              if (numMatch) percent = parseInt(numMatch[1]);
            }
            if (elementBuff.duration) duration = elementBuff.duration;
          }

          // Only add if we have a valid percentage
          if (percent > 0) {
            skills.push({
              characterId: char.id,
              characterName: char.name,
              characterSlug: char.slug,
              rarity: char.rarity,
              element: char.element,
              role: char.role,
              skillName: skill.name,
              skillSlot: skill.slot,
              skillIcon: skill.icon,
              target: skill.target || 'Unknown',
              description: desc,
              elementType: defDown.element,
              sourceType: 'skill',
              percent,
              duration,
              tier: getSkillTier(percent),
            });
          }
        }
      }
    }

    // Check ultimate (only rank 5 for highest values)
    if (char.ultimate) {
      const maxUlt = char.ultimate.find(u => u.rank === 5) || char.ultimate[char.ultimate.length - 1];
      if (maxUlt) {
        const desc = maxUlt.description || '';
        const elementDefDowns = parseElementDefenseDown(desc);
        const buffEffects = maxUlt.buffEffects || [];

        for (const defDown of elementDefDowns) {
          // Find matching buffEffect
          const elementBuff = buffEffects.find(b =>
            b.name && b.name.toLowerCase().includes(defDown.element.toLowerCase()) &&
            (b.name.toLowerCase().includes('type defense') || b.name.toLowerCase().includes('def down'))
          );

          let percent = 0;
          let duration = defDown.duration;

          // For ultimates, buffEffects has the values
          if (elementBuff && elementBuff.value) {
            // Handle both number values and string values like "-40%"
            if (typeof elementBuff.value === 'number') {
              percent = Math.abs(elementBuff.value);
            } else if (typeof elementBuff.value === 'string') {
              const numMatch = elementBuff.value.match(/-?(\d+)/);
              if (numMatch) percent = parseInt(numMatch[1]);
            }
            if (elementBuff.duration) duration = elementBuff.duration;
          }

          // Only add if we have a valid percentage
          if (percent > 0) {
            skills.push({
              characterId: char.id,
              characterName: char.name,
              characterSlug: char.slug,
              rarity: char.rarity,
              element: char.element,
              role: char.role,
              skillName: maxUlt.name,
              skillSlot: 'Ultimate',
              skillIcon: maxUlt.icon,
              target: 'Varies',
              description: desc,
              elementType: defDown.element,
              sourceType: 'ultimate',
              percent,
              duration,
              level: 5,
              tier: getUltimateTier(percent),
            });
          }
        }
      }
    }
  }

  return skills;
}

// Get tier for skill based on percent value
function getSkillTier(percent) {
  if (percent >= 20) return 'S';
  if (percent >= 18) return 'A';
  if (percent >= 15) return 'B';
  return 'C';
}

// Get tier for ultimate based on percent value
function getUltimateTier(percent) {
  if (percent >= 35) return 'S';
  if (percent >= 28) return 'A';
  if (percent >= 20) return 'B';
  return 'C';
}

// Group skills by element type
export function groupByElementType(skills) {
  const groups = {};

  for (const skill of skills) {
    const elementType = skill.elementType;
    if (!groups[elementType]) {
      groups[elementType] = [];
    }
    groups[elementType].push(skill);
  }

  // Sort each group by percent (highest first)
  for (const element of Object.keys(groups)) {
    groups[element].sort((a, b) => {
      if (b.percent !== a.percent) return b.percent - a.percent;
      return b.duration - a.duration;
    });
  }

  return groups;
}

// Get stats summary
export function getElementDefenseDownStats() {
  const allSkills = getElementDefenseDownSkills();
  const skillBased = allSkills.filter(s => s.sourceType === 'skill');
  const ultimates = allSkills.filter(s => s.sourceType === 'ultimate');
  const byElement = groupByElementType(allSkills);

  return {
    totalSkills: skillBased.length,
    totalUltimates: ultimates.length,
    uniqueChars: new Set(allSkills.map(s => s.characterId)).size,
    byElementCount: Object.fromEntries(
      Object.entries(byElement).map(([k, v]) => [k, v.length])
    ),
  };
}
