// Busty Burst Defense Down Database
// Self-contained system for Physical and Magic Defense Down data
// Uses buffEffects from character skill data + buff level scaling table from buff_1.xml
// Only includes characters that exist in character-info.js

import { BUSTY_BURST_SKILLS_DATA, getAllCharacterSlugs } from './characters/index.js';

const validCharacterSlugs = new Set(getAllCharacterSlugs());

// Buff level -> percent mapping from buff_1.xml (effect_val1)
// Both Physical Defense - and Magic Defense- share the same scaling
const BUFF_LEVEL_PERCENT = {
  1: 10,
  2: 14,
  3: 18,
  4: 21,
  5: 23,
  'Max': 25,
};

function parseBuffLevel(buffName) {
  const match = buffName.match(/Lv(\d+|Max)/i);
  return match ? match[1] : null;
}

function getPercentFromBuffLevel(buffName) {
  const level = parseBuffLevel(buffName);
  if (level && BUFF_LEVEL_PERCENT[level] != null) return BUFF_LEVEL_PERCENT[level];
  return 0;
}

function isDefenseDownBuff(buff) {
  if (!buff || !buff.name) return false;
  const name = buff.name.toLowerCase();
  return name.includes('defense') && name.includes('-') && !name.includes('+');
}

function isPhysicalDefenseDownBuff(buff) {
  if (!isDefenseDownBuff(buff)) return false;
  const name = buff.name.toLowerCase();
  return name.includes('physical defense') && !name.includes('type defense');
}

function isMagicDefenseDownBuff(buff) {
  if (!isDefenseDownBuff(buff)) return false;
  const name = buff.name.toLowerCase();
  return name.includes('magic defense') && !name.includes('type defense');
}

function isUltimateBuff(buff) {
  return buff.name && buff.name.toLowerCase().includes('ultimate');
}

function getSkillTier(percent, flat) {
  if (percent >= 23 && flat >= 300) return 'S';
  if (percent >= 21 && flat >= 200) return 'A';
  if (percent >= 18 && flat >= 200) return 'B';
  if (flat >= 200) return 'B';
  return 'C';
}

function getTargetType(description) {
  if (!description) return 'single';
  const d = description.toLowerCase();
  if (
    d.includes('3 nearest') || d.includes('3 closest') ||
    d.includes('all enemies') || d.includes('all enemy') ||
    d.includes('multiple enemies') ||
    d.includes('2 nearest') || d.includes('2 closest') ||
    d.includes('enemies within') || d.includes('enemies in range')
  ) {
    return 'multi';
  }
  return 'single';
}

function extractAllDefenseDownSkills() {
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
          const physDown = isPhysicalDefenseDownBuff(buff);
          const magDown = isMagicDefenseDownBuff(buff);

          if (!physDown && !magDown) continue;

          const defType = physDown ? 'physical' : 'magic';

          // Percent comes from buff level scaling table, not from buff.value
          const percent = getPercentFromBuffLevel(buff.name);

          // Flat comes from buff.value (base) + levelGrowth (per level)
          const flatBase = Math.abs(buff.value || 0);
          const flatGrowth = Math.abs(buff.levelGrowth || 0);
          const flatLv90 = Math.round(flatBase + 90 * flatGrowth);
          const flatLv1 = Math.round(flatBase);

          const duration = buff.duration || null;
          const desc = skill.descriptionLv90 || skill.description || '';
          const buffLevel = parseBuffLevel(buff.name);

          const tier = getSkillTier(percent, flatLv90);

          results.push({
            ...charBase,
            skillName: skill.name,
            skillSlot: skill.slot,
            skillIcon: skill.icon,
            target: skill.target || 'Unknown',
            castTime: skill.castTime,
            description: desc,
            type: defType,
            sourceType: 'skill',
            percent,
            flat: flatLv90,
            flatLv1,
            duration,
            tier,
            targetType: getTargetType(desc),
            buffLevel,
          });
        }
      }
    }

    if (char.ultimate) {
      const maxUlt = char.ultimate.find(u => u.rank === 5) || char.ultimate[char.ultimate.length - 1];
      if (maxUlt) {
        const buffs = maxUlt.buffEffects || [];

        for (const buff of buffs) {
          if (!isUltimateBuff(buff)) continue;

          const physDown = isPhysicalDefenseDownBuff(buff);
          const magDown = isMagicDefenseDownBuff(buff);

          if (!physDown && !magDown) continue;

          const defType = physDown ? 'physical' : 'magic';

          // Ultimate percent comes directly from buff.value (effect_val1 in buff_1.xml)
          const percent = Math.abs(buff.value || 0);
          const flat = buff.type === 'flat' ? Math.abs(buff.value || 0) : 0;
          const duration = buff.duration || null;
          const desc = maxUlt.description || '';

          results.push({
            ...charBase,
            skillName: maxUlt.name,
            skillSlot: 'Ultimate',
            skillIcon: maxUlt.icon,
            target: 'Varies',
            description: desc,
            type: defType,
            sourceType: 'ultimate',
            percent,
            flat,
            duration,
            level: maxUlt.rank,
            tier: `ULT_LV${maxUlt.rank}`,
            targetType: 'single',
          });
        }
      }
    }
  }

  return results;
}

export const DEFENSE_DOWN_SKILLS = extractAllDefenseDownSkills();

export function getPhysicalDefenseDownSkills() {
  return DEFENSE_DOWN_SKILLS.filter(s => s.type === 'physical');
}

export function getMagicDefenseDownSkills() {
  return DEFENSE_DOWN_SKILLS.filter(s => s.type === 'magic');
}

export function getSkillsByTier(tier, type = 'physical') {
  return DEFENSE_DOWN_SKILLS.filter(s => s.tier === tier && s.type === type);
}
