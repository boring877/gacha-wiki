// Busty Burst Element Defense Down Database
// Self-contained system for Element-Type Defense Down data (Fire, Water, Wind, Light, Dark, Mind)
// Uses buffEffects from character skill data (not regex on descriptions)
// Only includes characters that exist in character-info.js

import { BUSTY_BURST_SKILLS_DATA, getAllCharacterSlugs } from './characters/index.js';

const validCharacterSlugs = new Set(getAllCharacterSlugs());

const ELEMENT_TYPES = ['Fire', 'Water', 'Wind', 'Light', 'Dark', 'Mind'];

function isElementDefenseDownBuff(buff, element) {
  if (!buff || !buff.name) return false;
  const name = buff.name.toLowerCase();
  const el = element.toLowerCase();
  return name.includes('type defense') && name.includes(el) && name.includes('-');
}

function isUltimateBuff(buff) {
  return buff.name && buff.name.toLowerCase().includes('ultimate');
}

function getTargetType(description) {
  if (!description) return 'single';
  const d = description.toLowerCase();
  if (
    d.includes('3 nearest') || d.includes('3 closest') ||
    d.includes('all enemies') || d.includes('all enemy') ||
    d.includes('multiple enemies') ||
    d.includes('2 nearest') || d.includes('2 closest') ||
    d.includes('enemies within') || d.includes('enemies in range') ||
    d.includes('farthest enemy')
  ) {
    return 'multi';
  }
  return 'single';
}

function getSkillTier(percent) {
  if (percent >= 20) return 'S';
  if (percent >= 18) return 'A';
  if (percent >= 15) return 'B';
  return 'C';
}

function getUltimateTier(percent) {
  if (percent >= 35) return 'S';
  if (percent >= 28) return 'A';
  if (percent >= 20) return 'B';
  return 'C';
}

function extractElementDefenseDownSkills() {
  const results = [];

  for (const char of BUSTY_BURST_SKILLS_DATA) {
    if (!validCharacterSlugs.has(char.slug)) continue;

    const charBase = {
      characterId: char.id,
      characterName: char.name,
      characterSlug: char.slug,
      rarity: char.rarity,
      element: char.element,
      role: char.role,
    };

    if (char.skills) {
      for (const skill of char.skills) {
        const buffs = skill.buffEffects || [];

        for (const buff of buffs) {
          for (const elType of ELEMENT_TYPES) {
            if (!isElementDefenseDownBuff(buff, elType)) continue;

            const percent = buff.type === 'percent' ? Math.abs(buff.value || 0) : 0;
            if (percent <= 0) continue;

            const duration = buff.duration || null;
            const desc = skill.descriptionLv90 || skill.description || '';

            results.push({
              ...charBase,
              skillName: skill.name,
              skillSlot: skill.slot,
              skillIcon: skill.icon,
              target: skill.target || 'Unknown',
              description: desc,
              elementType: elType,
              sourceType: 'skill',
              percent,
              duration,
              tier: getSkillTier(percent),
              targetType: getTargetType(desc),
            });
          }
        }
      }
    }

    if (char.ultimate) {
      const maxUlt = char.ultimate.find(u => u.rank === 5) || char.ultimate[char.ultimate.length - 1];
      if (maxUlt) {
        const buffs = maxUlt.buffEffects || [];

        for (const buff of buffs) {
          if (!isUltimateBuff(buff)) continue;

          for (const elType of ELEMENT_TYPES) {
            if (!isElementDefenseDownBuff(buff, elType)) continue;

            const percent = buff.type === 'percent' ? Math.abs(buff.value || 0) : 0;
            if (percent <= 0) continue;

            const duration = buff.duration || null;
            const desc = maxUlt.description || '';

            results.push({
              ...charBase,
              skillName: maxUlt.name,
              skillSlot: 'Ultimate',
              skillIcon: maxUlt.icon,
              target: 'Varies',
              description: desc,
              elementType: elType,
              sourceType: 'ultimate',
              percent,
              duration,
              level: maxUlt.rank,
              tier: getUltimateTier(percent),
              targetType: 'single',
            });
          }
        }
      }
    }
  }

  return results;
}

export const ELEMENT_DEFENSE_DOWN_SKILLS = extractElementDefenseDownSkills();

export function getElementDefenseDownSkills() {
  return ELEMENT_DEFENSE_DOWN_SKILLS;
}

export function groupByElementType(skills) {
  const groups = {};
  for (const skill of skills) {
    const el = skill.elementType;
    if (!groups[el]) groups[el] = [];
    groups[el].push(skill);
  }
  for (const el of Object.keys(groups)) {
    groups[el].sort((a, b) => b.percent - a.percent || (b.flat || 0) - (a.flat || 0));
  }
  return groups;
}

export function getElementDefenseDownStats() {
  const all = ELEMENT_DEFENSE_DOWN_SKILLS;
  const skillBased = all.filter(s => s.sourceType === 'skill');
  const ultimates = all.filter(s => s.sourceType === 'ultimate');
  const byElement = groupByElementType(all);
  return {
    totalSkills: skillBased.length,
    totalUltimates: ultimates.length,
    uniqueChars: new Set(all.map(s => s.characterId)).size,
    byElementCount: Object.fromEntries(Object.entries(byElement).map(([k, v]) => [k, v.length])),
  };
}
