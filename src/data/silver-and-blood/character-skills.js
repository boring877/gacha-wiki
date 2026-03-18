// Character Skills Data for Silver and Blood
// Skills are sourced from per-character files in characters/ directory

import { allSkills } from './characters/index.js';

export const skillTypes = {
  basicAttack: { name: 'Basic Attack', color: 'blue' },
  skill: { name: 'Skill', color: 'green' },
  ultimate: { name: 'Ultimate', color: 'gold' },
  passive: { name: 'Talent', color: 'purple' }
};

function lvObjectToArray(obj) {
  if (!obj) return [];
  if (Array.isArray(obj)) return obj;

  const result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(obj[`lv${i}`] || '0%');
  }
  return result;
}

export const characterSkills = Object.values(allSkills)
  .filter(char => char.skills && char.skills.length > 0)
  .map(char => ({
    ...char,
    skills: char.skills.map(skill => ({
      ...skill,
      damageScaling: lvObjectToArray(skill.damageScaling),
      potencyBonus: lvObjectToArray(skill.potencyBonus),
      description: typeof skill.description === 'object' ? skill.description.lv10 : skill.description,
      descriptionByLevel: typeof skill.description === 'object' ? lvObjectToArray(skill.description) : null,
      hint: skill.hint ? {
        name: skill.hint.name,
        desc: skill.hint.description || skill.hint.desc
      } : null,
      tips: skill.tips ? skill.tips.map(tip => ({
        name: tip.name,
        desc: tip.description || tip.desc
      })) : null,
      iconExists: !!skill.icon,
      cost: skill.cost || null,
      buffs: skill.buffs || []
    }))
  }))
  .sort((a, b) => a.characterName.localeCompare(b.characterName));

export const uniqueCharacters = [...new Set(characterSkills.map(c => c.characterName))].sort();

export function getSkillTypeInfo(type) {
  return skillTypes[type] || { name: type, color: 'gray' };
}

export default allSkills;
