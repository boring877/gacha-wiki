// Busty Burst Burn & DoT Damage Database
// Self-contained extraction of damage-over-time sources (Burn, Poison incl.
// Deadly Poison, Bleed, Freeze, Fear/MP drain) from character skill data.
// Buff-name matching on buffEffects is primary; a few effects only exist in
// skill text (Ange's Burn Marks, Giselle's on-attack Burn passive) and are
// caught by description fallbacks. Self-inflicted DoTs are excluded.

import { BUSTY_BURST_SKILLS_DATA, BUSTY_BURST_CHARACTER_INFO, getAllCharacterSlugs } from './characters/index.js';
import { SPRITE_IDS } from './image-manifest.js';

const validCharacterSlugs = new Set(getAllCharacterSlugs());
const hasArt = (id) => SPRITE_IDS.has(id);

// Some skill objects carry their Japanese name as slug (JP-server units);
// character-info keyed by characterId is the canonical slug/name source.
const infoById = new Map(
  Object.values(BUSTY_BURST_CHARACTER_INFO)
    .filter(i => i && i.characterId)
    .map(i => [i.characterId, i])
);

export const DOT_TYPES = {
  burn: {
    label: 'Burn',
    mechanic: 'HP loss every second. Many Burn skills also raise Fire damage taken.',
    tickUnit: 'HP/s',
  },
  poison: {
    label: 'Poison',
    mechanic: 'HP loss every second. Deadly Poison variants stack with themselves.',
    tickUnit: 'HP/s',
  },
  bleed: {
    label: 'Bleed',
    mechanic: 'HP loss every time the victim acts. Most Bleeds cannot be cleansed.',
    tickUnit: 'HP/action',
  },
  freeze: {
    label: 'Freeze',
    mechanic: 'Freezes the target (unable to act) and drains HP every second while frozen.',
    tickUnit: 'HP/s',
  },
  fear: {
    label: 'Fear (MP Drain)',
    mechanic: 'Drains MP every second, delaying enemy ultimates.',
    tickUnit: 'MP/s',
  },
};

// Classify a buffEffects entry name into a DoT type (or null).
// Resistance passives ("Poison Resistance LvMax") are defensive, not DoTs.
function classifyDotBuff(buffName) {
  const n = (buffName || '').toLowerCase();
  if (!n || /resistance/.test(n)) return null;
  if (n.startsWith('burn')) return 'burn';
  if (n.startsWith('deadly poison') || n.startsWith('poison')) return 'poison';
  if (n.startsWith('bleed')) return 'bleed';
  if (n.startsWith('freeze')) return 'freeze';
  if (n.startsWith('fear')) return 'fear';
  return null;
}

// A skill that only applies its debuff to the caster (e.g. School Bloomers
// Black Knight's self-Fear, Yaksha's self HP drain) is a cost, not a DoT.
const SELF_RE = /\bto self\b|self\s*inflict/i;
const INFLICTS_DOT_RE =
  /inflicts?\s+(?:\w+\s+)*(?:burn|poison|bleed|deadly poison|freeze|fear)/i;
function isSelfOnly(description) {
  return SELF_RE.test(description || '') && !INFLICTS_DOT_RE.test(description || '');
}

function getTargetType(description) {
  const d = (description || '').toLowerCase();
  if (
    /(\d+|all) (nearest|closest) enem|\ball enemies\b|\bmultiple enemies\b|enemies within|enemies in range/.test(d)
  ) {
    return 'multi';
  }
  return 'single';
}

// Fear buffs carry value 0 in the data; the per-second MP drain only appears
// in the skill text ("Fear(MP --100 per second)").
function extractFearMp(description) {
  const m = (description || '').match(/MP\s*-+\s*(\d+)\s*per second/i);
  return m ? parseInt(m[1], 10) : null;
}

function extractAllDotEntries() {
  const results = [];

  for (const raw of BUSTY_BURST_SKILLS_DATA) {
    // raw.id is the sprite id (indexes SPRITE_IDS + PaladinImage). Most
    // entries carry their English slug; JP-server units carry their Japanese
    // name instead, so fall back to a characterId join for those.
    let slug = validCharacterSlugs.has(raw.slug) ? raw.slug : infoById.get(raw.id)?.slug;
    if (!slug || !validCharacterSlugs.has(slug) || !hasArt(raw.id)) continue;

    // Metadata (name/slug/rarity) may come from character-info for JP-slug
    // units, but skills/ultimate/passives always live on the raw entry.
    const char = validCharacterSlugs.has(raw.slug) ? raw : infoById.get(raw.id);
    const charBase = {
      characterId: raw.id,
      characterName: char.name,
      characterSlug: slug,
      rarity: char.rarity,
      element: char.element,
      role: char.role,
    };

    const pushEntry = (entry) => results.push(entry);

    // --- Skills (slot 2 / 3) ---
    if (raw.skills) {
      for (const skill of raw.skills) {
        const desc = skill.descriptionLv90 || skill.description || '';
        if (isSelfOnly(desc)) continue;

        // Group this skill's DoT buffs by type; one entry per type
        const byType = {};
        for (const buff of skill.buffEffects || []) {
          const type = classifyDotBuff(buff.name);
          if (!type) continue;
          const prev = byType[type];
          const lv1 = Math.abs(buff.value || 0);
          const lv90 = Math.round(Math.abs(buff.value || 0) + 90 * Math.abs(buff.levelGrowth || 0));
          if (!prev || lv90 > prev.lv90) {
            byType[type] = { buff, lv1, lv90 };
          }
        }

        for (const [type, { buff, lv1, lv90 }] of Object.entries(byType)) {
          const fearMp = type === 'fear' ? extractFearMp(desc) : null;
          pushEntry({
            ...charBase,
            dotType: type,
            sourceType: 'skill',
            skillName: skill.name,
            skillSlot: `Skill ${skill.slot}`,
            skillIcon: skill.icon,
            tickLv90: type === 'fear' ? fearMp : lv90,
            tickLv1: type === 'fear' ? fearMp : lv1,
            tickUnit: DOT_TYPES[type].tickUnit,
            duration: buff.duration || null,
            stackable: /stackable/i.test(desc),
            target: skill.target || 'Varies',
            targetType: getTargetType(desc),
            description: desc,
          });
        }

        // Description-only Burn effects (Ange's Fire/Burn Mark stacks)
        if (!byType.burn && /burn mark|fire mark/i.test(desc)) {
          const perStack = parseInt((desc.match(/HP\s*-+\s*(\d+)/i) || [])[1], 10) || null;
          pushEntry({
            ...charBase,
            dotType: 'burn',
            sourceType: 'skill',
            skillName: skill.name,
            skillSlot: `Skill ${skill.slot}`,
            skillIcon: skill.icon,
            tickLv90: perStack,
            tickLv1: perStack,
            tickUnit: 'HP/stack',
            duration: null,
            stackable: true,
            target: skill.target || 'Varies',
            targetType: getTargetType(desc),
            description: desc,
          });
        }
      }
    }

    // --- Ultimate (rank 5 = max) ---
    if (raw.ultimate) {
      const maxUlt = raw.ultimate.find(u => u.rank === 5) || raw.ultimate[raw.ultimate.length - 1];
      if (maxUlt) {
        const desc = maxUlt.description || '';
        if (!isSelfOnly(desc)) {
          const seen = new Set();
          for (const buff of maxUlt.buffEffects || []) {
            const type = classifyDotBuff(buff.name);
            if (!type || seen.has(type)) continue;
            seen.add(type);
            const tick = Math.abs(buff.value || 0);
            const fearMp = type === 'fear' ? extractFearMp(desc) : null;
            pushEntry({
              ...charBase,
              dotType: type,
              sourceType: 'ultimate',
              skillName: maxUlt.name,
              skillSlot: 'Ultimate',
              skillIcon: maxUlt.icon,
              tickLv90: type === 'fear' ? fearMp : tick || null,
              tickLv1: null,
              tickUnit: DOT_TYPES[type].tickUnit,
              duration: buff.duration || null,
              stackable: /stackable/i.test(desc),
              target: 'Varies',
              targetType: getTargetType(desc),
              description: desc,
            });
          }
        }
      }
    }

    // --- Passives (description-only: e.g. Giselle's Burn on Normal ATK) ---
    if (raw.passives) {
      for (const passive of raw.passives) {
        const desc = passive.description || '';
        if (!/inflict[^.]*\bburn\b/i.test(desc)) continue;
        const chance = parseInt((desc.match(/(\d+)%\s+chance/i) || [])[1], 10) || null;
        pushEntry({
          ...charBase,
          dotType: 'burn',
          sourceType: 'passive',
          skillName: passive.name,
          skillSlot: `Passive ${passive.slot ?? ''}`.trim(),
          skillIcon: passive.icon,
          tickLv90: chance,
          tickLv1: chance,
          tickUnit: '% chance on ATK',
          duration: null,
          stackable: false,
          target: 'Normal ATK target',
          targetType: 'single',
          description: desc,
        });
      }
    }
  }

  // Highest tick first; entries without numbers (marks/passives) last, A-Z
  return results.sort((a, b) => {
    const at = a.tickLv90 ?? -1;
    const bt = b.tickLv90 ?? -1;
    if (bt !== at) return bt - at;
    return a.characterName.localeCompare(b.characterName);
  });
}

export const DOT_ENTRIES = extractAllDotEntries();

export function getDotEntries(type) {
  return type ? DOT_ENTRIES.filter(e => e.dotType === type) : DOT_ENTRIES;
}

export function getDotTypeCounts() {
  const counts = { all: new Set(DOT_ENTRIES.map(e => e.characterSlug)).size };
  for (const type of Object.keys(DOT_TYPES)) {
    counts[type] = new Set(getDotEntries(type).map(e => e.characterSlug)).size;
  }
  return counts;
}
