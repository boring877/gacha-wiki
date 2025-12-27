// Character Skills Data for Silver and Blood
import skillsData from './character-skills.json';

// Skill type display names and colors
export const skillTypes = {
  basicAttack: { name: 'Basic Attack', color: 'blue' },
  skill: { name: 'Skill', color: 'green' },
  ultimate: { name: 'Ultimate', color: 'gold' },
  passive: { name: 'Talent', color: 'purple' }
};

// Helper to convert lv object to array
function lvObjectToArray(obj) {
  if (!obj) return [];
  if (Array.isArray(obj)) return obj;

  const result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(obj[`lv${i}`] || '0%');
  }
  return result;
}

// Convert object to array and sort by character name
export const characterSkills = Object.values(skillsData)
  .filter(char => char.skills && char.skills.length > 0)
  .map(char => ({
    ...char,
    skills: char.skills.map(skill => ({
      ...skill,
      // Convert damageScaling from object to array
      damageScaling: lvObjectToArray(skill.damageScaling),
      // Convert potencyBonus from object to array
      potencyBonus: lvObjectToArray(skill.potencyBonus),
      // Get description for level 10 as default display, store all levels
      description: typeof skill.description === 'object' ? skill.description.lv10 : skill.description,
      descriptionByLevel: typeof skill.description === 'object' ? lvObjectToArray(skill.description) : null,
      // Normalize hint structure
      hint: skill.hint ? {
        name: skill.hint.name,
        desc: skill.hint.description || skill.hint.desc
      } : null,
      // Check if icon exists
      iconExists: !!skill.icon,
      // Energy cost for ultimates
      cost: skill.cost || null,
      // Buffs array
      buffs: skill.buffs || []
    }))
  }))
  .sort((a, b) => a.characterName.localeCompare(b.characterName));

// Get unique character names (some characters have multiple skill sets)
export const uniqueCharacters = [...new Set(characterSkills.map(c => c.characterName))].sort();

// Get skill type info
export function getSkillTypeInfo(type) {
  return skillTypes[type] || { name: type, color: 'gray' };
}

export default skillsData;
