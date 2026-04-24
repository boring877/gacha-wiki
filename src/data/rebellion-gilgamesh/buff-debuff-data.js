// Rebellion Gilgamesh Buff/Debuff Index
// Extracts and categorizes all buff/debuff effects from character data at build time

import characterData from './characters.js';

const CHAR_DIR = './characters/';

const ALL_EFFECTS = [
  'ATK Up', 'ATK Down', 'ATK Down Resist Up',
  'DEF Up', 'DEF Down', 'DEF Down Resist Up',
  'CRIT Rate Up', 'CRIT Rate Down',
  'CRIT DMG Up', 'CRIT DMG Down',
  'Element DEF Up', 'Element DEF Down',
  'Element DMG Up',
  'HP Auto Recovery',
  'ST Auto Recovery', 'ST Recovery Up', 'ST Recovery Down', 'ST Block', 'ST Down',
  'Ult DMG Up', 'Ult DMG Down',
  'Trait DMG Up', 'Trait DEF Up',
  'DMG Reduction', 'DMG Taken Down',
  'MAX HP Up',
  'Status Immunity', 'Status Resist', 'Status Resist Up', 'Status Hit Up', 'Status DMG Up',
  'Heal Block',
  'Evasion', 'Sure Hit', 'Pierce',
  'Cover', 'Invincible', 'Taunt',
  'Blind', 'Burn', 'Freeze', 'Paralyze', 'Petrify', 'Poison', 'Sleep', 'Fear', 'Seal',
  'Paralyze Resist Down',
  'Weak Point Expose', 'Provoke',
  'Revive',
  'Remove Buffs',
  'Special Status',
];

const BUFF_CATEGORIES = {
  'Offensive': [
    'ATK Up', 'CRIT Rate Up', 'CRIT DMG Up', 'Element DMG Up',
    'Pierce', 'Ult DMG Up', 'Trait DMG Up', 'Status DMG Up', 'Status Hit Up',
  ],
  'Defensive': [
    'DEF Up', 'Element DEF Up', 'DMG Reduction', 'DMG Taken Down',
    'Cover', 'Invincible', 'Evasion', 'Sure Hit', 'MAX HP Up',
    'ATK Down Resist Up', 'DEF Down Resist Up',
  ],
  'Recovery': [
    'HP Auto Recovery', 'ST Auto Recovery', 'ST Recovery Up',
    'Heal Block', 'Revive',
  ],
  'Utility': [
    'Status Immunity', 'Status Resist', 'Status Resist Up',
    'Trait DEF Up', 'Taunt', 'Special Status', 'Remove Buffs',
    'ST Block', 'ST Recovery Down', 'ST Down',
  ],
  'Offensive Debuffs': [
    'ATK Down', 'DEF Down', 'Element DEF Down',
    'CRIT Rate Down', 'CRIT DMG Down', 'Ult DMG Down',
    'Weak Point Expose', 'Provoke',
  ],
  'Status Effects': [
    'Blind', 'Burn', 'Freeze', 'Paralyze', 'Petrify', 'Poison',
    'Sleep', 'Fear', 'Seal', 'Paralyze Resist Down',
  ],
};

const ALL_CHAR_FILES = import.meta.glob('./characters/*.json', { eager: true });

function normalizeBuffName(name) {
  if (!name) return null;
  return name
    .replace(/\s*\(S\)\s*/i, '')
    .replace(/\s*\(M\)\s*/i, '')
    .replace(/\s*\(L\)\s*/i, '')
    .trim();
}

function resolveBuffName(buffName, effect, skillTargetName, effectLines) {
  if (buffName && buffName !== 'Unknown') return buffName;
  if (!effectLines || !effectLines.length) return 'Remove Buffs';
  const lineText = effectLines.join(' ').toLowerCase();
  if (lineText.includes('remove buff')) return 'Remove Buffs';
  if (lineText.includes('dispel')) return 'Remove Buffs';
  return 'Remove Buffs';
}

function classifyEffect(buffName, targetName) {
  const norm = normalizeBuffName(buffName);
  if (!norm) return null;

  const allyTargets = ['Self', 'Single Ally', 'All Allies', 'Ally'];
  const enemyTargets = ['Single Enemy', 'All Enemies', 'Enemy Row', 'Enemy Line',
    'Enemy X', 'Enemy Cross', 'Enemy Diagonal', 'Enemy Diagonal BL-TR',
    'Enemy Diagonal BR-TL', 'Single Enemy'];

  const isAllyTarget = allyTargets.some(t => (targetName || '').includes(t));

  const debuffOnlyNames = [
    'ATK Down', 'DEF Down', 'Element DEF Down', 'CRIT Rate Down', 'CRIT DMG Down',
    'Ult DMG Down', 'ST Recovery Down', 'ST Down', 'ST Block',
    'Blind', 'Burn', 'Freeze', 'Paralyze', 'Petrify', 'Poison', 'Sleep', 'Fear', 'Seal',
    'Paralyze Resist Down', 'Weak Point Expose', 'Provoke', 'Heal Block',
    'Status Resist',
  ];
  const buffOnlyNames = [
    'ATK Up', 'DEF Up', 'Element DEF Up', 'Element DMG Up',
    'CRIT Rate Up', 'CRIT DMG Up', 'Ult DMG Up', 'Trait DMG Up', 'Trait DEF Up',
    'HP Auto Recovery', 'ST Auto Recovery', 'ST Recovery Up', 'MAX HP Up',
    'DMG Reduction', 'DMG Taken Down', 'Evasion', 'Sure Hit', 'Pierce',
    'Cover', 'Invincible', 'Taunt', 'Status Immunity', 'Status Resist Up',
    'Status Hit Up', 'Status DMG Up', 'ATK Down Resist Up', 'DEF Down Resist Up',
    'Revive', 'Special Status',
  ];

  if (debuffOnlyNames.includes(norm)) return 'debuff';
  if (buffOnlyNames.includes(norm)) {
    if (norm === 'Remove Buffs') {
      return isAllyTarget ? 'buff' : 'debuff';
    }
    return 'buff';
  }
  if (norm === 'Remove Buffs') {
    return isAllyTarget ? 'buff' : 'debuff';
  }
  return 'buff';
}

function getEffectCategory(buffName) {
  const norm = normalizeBuffName(buffName);
  if (!norm) return null;
  for (const [cat, effects] of Object.entries(BUFF_CATEGORIES)) {
    if (effects.includes(norm)) return cat;
  }
  return 'Other';
}

export function extractAllEffects() {
  const effectsMap = {};

  for (const [path, data] of Object.entries(ALL_CHAR_FILES)) {
    const char = data.default || data;
    if (!char || !char.name) continue;

    const charInfo = {
      id: char.id,
      name: char.name,
      slug: char.slug,
      image: char.image,
      rarity: char.rarity,
      element: char.element,
      elementName: char.elementName,
    };

    const allSkills = [];
    if (char.activeSkills) allSkills.push(...char.activeSkills.map(s => ({ ...s, skillCategory: 'Active' })));
    if (char.aceSkill) allSkills.push({ ...char.aceSkill, skillCategory: 'Ace' });
    if (char.triggerSkills) allSkills.push(...char.triggerSkills.map(s => ({ ...s, skillCategory: 'Trigger' })));
    if (char.passiveSkills) allSkills.push(...char.passiveSkills.map(s => ({ ...s, skillCategory: 'Passive' })));

    for (const skill of allSkills) {
      if (!skill.effects) continue;

      for (const eff of skill.effects) {
        if (eff.type !== 'buff' && eff.type !== 'passive_buff' && eff.type !== 'passive_buff_timed') continue;
        if (!eff.buffName) continue;

        const resolvedName = resolveBuffName(eff.buffName, eff, skill.targetName, skill.effectLines);
        const norm = normalizeBuffName(resolvedName);
        if (!norm) continue;

        const classification = classifyEffect(resolvedName, skill.targetName);
        const category = getEffectCategory(resolvedName);

        const entry = {
          character: charInfo,
          skillName: skill.name,
          skillCategory: skill.skillCategory,
          target: skill.targetName || 'Unknown',
          probability: eff.probability ?? null,
          duration: eff.duration ?? null,
          value: eff.buffValue || null,
          originalName: resolvedName,
        };

        if (!effectsMap[norm]) {
          effectsMap[norm] = {
            name: norm,
            classification,
            category,
            entries: [],
          };
        }
        effectsMap[norm].entries.push(entry);
      }
    }
  }

  const sorted = Object.values(effectsMap).sort((a, b) => {
    const catOrder = Object.keys(BUFF_CATEGORIES);
    const catA = catOrder.indexOf(a.category);
    const catB = catOrder.indexOf(b.category);
    if (catA !== catB) return catA - catB;
    return a.name.localeCompare(b.name);
  });

  return sorted;
}

export { BUFF_CATEGORIES };
