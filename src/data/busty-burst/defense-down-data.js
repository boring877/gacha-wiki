// Busty Burst Defense Down Database
// Extracted from character-skills-full.js - contains all Physical and Magic Defense Down effects
// Types: Skill (regular skills with % + flat), Ultimate (LV1-5 scaling)
// Only includes characters that exist in character-info.js (shown on Character Skills page)

import { BUSTY_BURST_SKILLS_DATA } from './character-skills-full.js';
import { getAllCharacterSlugs } from './character-info.js';

// Get valid character slugs (only characters shown on Character Skills page)
const validCharacterSlugs = new Set(getAllCharacterSlugs());

// Defense down tier definitions based on game data
export const DEFENSE_DOWN_TIERS = {
  physical: {
    S: { percent: 23, flat: 317, label: 'S Tier (-23% -317)' },
    A: { percent: 21, flat: 218, label: 'A Tier (-21% -218)' },
    B: { percent: 18, flat: 208, label: 'B Tier (-18% -208)' },
  },
  magic: {
    S: { percent: 23, flat: 317, label: 'S Tier (-23% -317)' },
    A: { percent: 21, flat: 218, label: 'A Tier (-21% -218)' },
    B: { percent: 18, flat: 208, label: 'B Tier (-18% -208)' },
  },
  ultimate: {
    LV5: { label: 'Ultimate LV5' },
    LV4: { label: 'Ultimate LV4' },
    LV3: { label: 'Ultimate LV3' },
    LV2: { label: 'Ultimate LV2' },
    LV1: { label: 'Ultimate LV1' },
  },
};

// Parse defense down value from description string
function parseDefenseDown(description) {
  const results = [];

  // Pattern 1: "Physical Defense -23%+-317DOWN for 7 seconds"
  // Format: "Defense -XX%+-YYYDOWN for Z seconds" where XX is percent, YYY is flat value
  const skillPattern = /(Physical|Magic) Defense (-?\d+)%\+(-?\d+)DOWN for (\d+) seconds/gi;
  let match;
  while ((match = skillPattern.exec(description)) !== null) {
    results.push({
      type: match[1].toLowerCase(),
      sourceType: 'skill',
      percent: Math.abs(parseInt(match[2])),
      flat: Math.abs(parseInt(match[3])),
      duration: parseInt(match[4]),
    });
  }

  // Pattern 2: "Physical Defense DOWN(LV5) for 10 seconds" (ultimate skills)
  const ultPattern = /(Physical|Magic) Defense DOWN\(LV(\d)\) for (\d+) seconds/gi;
  while ((match = ultPattern.exec(description)) !== null) {
    results.push({
      type: match[1].toLowerCase(),
      sourceType: 'ultimate',
      level: parseInt(match[2]),
      duration: parseInt(match[3]),
    });
  }

  return results;
}

// Extract all defense down skills from character data
function extractDefenseDownSkills() {
  const defenseDownSkills = [];

  for (const char of BUSTY_BURST_SKILLS_DATA) {
    // Skip characters not in character-info.js (not shown on Character Skills page)
    if (!validCharacterSlugs.has(char.slug)) {
      continue;
    }

    // Check regular skills
    if (char.skills) {
      for (const skill of char.skills) {
        const desc = skill.descriptionLv90 || skill.description || '';
        const defDowns = parseDefenseDown(desc);

        for (const defDown of defDowns) {
          // Also parse Lv1 values for comparison
          const descLv1 = skill.descriptionLv1 || '';
          const defDownsLv1 = parseDefenseDown(descLv1);
          const lv1Match = defDownsLv1.find(d => d.type === defDown.type);

          defenseDownSkills.push({
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
            castTime: skill.castTime,
            description: desc,
            descriptionLv1: descLv1,
            ...defDown,
            flatLv1: lv1Match?.flat || defDown.flat,
            // Calculate tier
            tier: getTier(defDown),
            // Extra effects parsing
            extraEffects: parseExtraEffects(desc),
          });
        }
      }
    }

    // Check ultimate skills (only check rank 5 for max values)
    if (char.ultimate) {
      const maxUlt = char.ultimate.find(u => u.rank === 5) || char.ultimate[char.ultimate.length - 1];
      if (maxUlt) {
        const desc = maxUlt.description || '';
        const defDowns = parseDefenseDown(desc);

        for (const defDown of defDowns) {
          defenseDownSkills.push({
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
            ...defDown,
            tier: defDown.sourceType === 'ultimate' ? `ULT_LV${defDown.level}` : getTier(defDown),
            extraEffects: parseExtraEffects(desc),
          });
        }
      }
    }
  }

  return defenseDownSkills;
}

// Get tier based on percent and flat values
function getTier(defDown) {
  if (defDown.sourceType === 'ultimate') {
    return `ULT_LV${defDown.level}`;
  }

  const { percent, flat } = defDown;
  if (percent >= 23 && flat >= 300) return 'S';
  if (percent >= 21 && flat >= 200) return 'A';
  if (percent >= 18 && flat >= 200) return 'B';
  return 'C';
}

// Parse extra effects from description
function parseExtraEffects(description) {
  const effects = [];

  // Burn
  if (/Burn/i.test(description)) {
    const burnMatch = description.match(/Burn\(HP --?(\d+) per second\) for (\d+) seconds/i);
    if (burnMatch) {
      effects.push({ type: 'Burn', value: parseInt(burnMatch[1]), duration: parseInt(burnMatch[2]) });
    }
  }

  // Accuracy down
  if (/Accuracy.*DOWN/i.test(description)) {
    const accMatch = description.match(/Accuracy -(\d+)DOWN for (\d+) seconds/i);
    if (accMatch) {
      effects.push({ type: 'Accuracy Down', value: parseInt(accMatch[1]), duration: parseInt(accMatch[2]) });
    }
  }

  // Lifesteal
  if (/absorbs.*damage dealt to restore/i.test(description)) {
    effects.push({ type: 'Lifesteal' });
  }

  // Dual defense down (both phys and magic)
  if (/Physical Defense.*Magic Defense/i.test(description) || /Magic Defense.*Physical Defense/i.test(description)) {
    effects.push({ type: 'Dual Defense Down' });
  }

  return effects;
}

// Export extracted data
export const DEFENSE_DOWN_SKILLS = extractDefenseDownSkills();

// Get only physical defense down skills
export function getPhysicalDefenseDownSkills() {
  return DEFENSE_DOWN_SKILLS.filter(skill => skill.type === 'physical');
}

// Get only magic defense down skills
export function getMagicDefenseDownSkills() {
  return DEFENSE_DOWN_SKILLS.filter(skill => skill.type === 'magic');
}

// Get skills by tier
export function getSkillsByTier(tier, type = 'physical') {
  return DEFENSE_DOWN_SKILLS.filter(skill => skill.tier === tier && skill.type === type);
}

// Get unique characters with defense down
export function getUniqueCharactersWithDefenseDown(type = 'physical') {
  const skills = type === 'all' ? DEFENSE_DOWN_SKILLS : DEFENSE_DOWN_SKILLS.filter(s => s.type === type);
  const charMap = new Map();

  for (const skill of skills) {
    if (!charMap.has(skill.characterId)) {
      charMap.set(skill.characterId, {
        id: skill.characterId,
        name: skill.characterName,
        slug: skill.characterSlug,
        rarity: skill.rarity,
        element: skill.element,
        role: skill.role,
        skills: [],
      });
    }
    charMap.get(skill.characterId).skills.push(skill);
  }

  return Array.from(charMap.values());
}
