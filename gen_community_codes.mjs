// Generate import codes for the curated community builds.
// Packs each build's team + potential picks into the game's own Potential Preselection
// format (verified against PlayerPotentialPreselectionData.UnPackPotentialData):
//   [3x u32 BE charIds] then per member (main first): 4x 1-bit specific-core flags,
//   9x 3-bit normal levels, 3x 3-bit common levels. Main packs the MASTER lists,
//   supports pack their ASSIST lists. Normals are encoded at level 6 (the game's
//   PotentialPreselectionMaxLevel). Writes src/data/stella-sora/community-build-codes.js.
import { COMMUNITY_BUILDS } from './src/data/stella-sora/community-builds.js';
import { POTENTIAL_LISTS } from './src/data/stella-sora/potential-lists.js';

const MAX_LEVEL = 6;

function writeBits(bytes, value, n) {
  for (let i = n - 1; i >= 0; i--) {
    bytes.push((value >> i) & 1);
  }
}

function packBuild(team) {
  const bits = [];
  for (const m of team) writeBits(bits, m.cid, 32);
  for (const m of team) {
    const specIds = m.picks.filter(p => p.kind === 'core').map(p => p.id);
    const levelById = new Map(m.picks.filter(p => p.kind !== 'core').map(p => [p.id, p.level]));
    const specList = m.role === 'main' ? m.lists.masterSpec : m.lists.assistSpec;
    const normList = m.role === 'main' ? m.lists.masterNorm : m.lists.assistNorm;
    for (const e of specList) writeBits(bits, specIds.includes(e.id) ? 1 : 0, 1);
    for (const e of normList) writeBits(bits, levelById.get(e.id) || 0, 3);
    for (const e of m.lists.commons) writeBits(bits, levelById.get(e.id) || 0, 3);
  }
  const out = [];
  for (let i = 0; i < bits.length; i += 8) {
    let byte = 0;
    for (let j = 0; j < 7; j++) byte = (byte | bits[i + j]) << 1;
    byte |= bits[i + 7] || 0;
    out.push(byte);
  }
  return Buffer.from(out).toString('base64');
}

function classify(lists, name) {
  const tables = [
    ['masterSpec', 'core'],
    ['assistSpec', 'core'],
    ['masterNorm', 'normal'],
    ['assistNorm', 'normal'],
    ['commons', 'common'],
  ];
  for (const [list, kind] of tables) {
    const hit = lists[list].find(e => e.name === name);
    if (hit) return { id: hit.id, name, kind };
  }
  return null;
}

const out = {};
let total = 0;
let withCode = 0;
const problems = [];

for (const [slug, entry] of Object.entries(COMMUNITY_BUILDS)) {
  entry.builds.forEach((build, idx) => {
    total++;
    const key = `${slug}:${idx}`;
    const record = { code: null, reason: '', members: {}, dropped: [] };

    if (build.team.length !== 3) {
      record.reason = `team incomplete (${build.team.length}/3 members)`;
      out[key] = record;
      problems.push(`${key}: ${record.reason}`);
      return;
    }

    const team = build.team.map((memberSlug, i) => {
      const lists = POTENTIAL_LISTS[memberSlug];
      if (!lists) throw new Error(`no potential lists for ${memberSlug} (${key})`);
      return {
        slug: memberSlug,
        cid: lists.cid,
        role: i === 0 ? 'main' : 'support',
        lists,
        picks: [],
      };
    });
    const teamSlugs = new Set(team.map(m => m.slug));

    for (const [memberSlug, picks] of Object.entries(build.potentials || {})) {
      const member = team.find(m => m.slug === memberSlug);
      if (!member) {
        problems.push(`${key}: potentials listed for non-team member ${memberSlug}`);
        continue;
      }
      for (const name of picks) {
        const hit = classify(member.lists, name);
        if (!hit) {
          record.dropped.push(`${memberSlug}: ${name} (not in this Trekker's potential lists)`);
          problems.push(`${key}: UNRESOLVED ${memberSlug}: ${name}`);
          continue;
        }
        const isMain = member.role === 'main';
        const onWrongBoard =
          (isMain && (hit.kind === 'core' ? member.lists.masterSpec : member.lists.masterNorm).every(e => e.id !== hit.id)) ||
          (!isMain && (hit.kind === 'core' ? member.lists.assistSpec : member.lists.assistNorm).every(e => e.id !== hit.id));
        if (onWrongBoard) {
          record.dropped.push(`${memberSlug}: ${name} (${member.role} slot uses the other board)`);
          problems.push(`${key}: WRONG BOARD ${memberSlug}: ${name}`);
          continue;
        }
        member.picks.push({
          id: hit.id,
          name: hit.name,
          kind: hit.kind,
          level: hit.kind === 'core' ? null : MAX_LEVEL,
        });
      }
    }

    record.code = packBuild(team);
    for (const m of team) {
      if (m.picks.length) {
        record.members[m.slug] = m.picks.sort((a, b) => a.id - b.id);
      }
    }
    withCode++;
    out[key] = record;
  });
}

const body =
  '// Generated import codes for the curated community builds (by gen_community_codes.mjs;\n' +
  '// do not hand-edit). Key is `<charSlug>:<buildIndex>`. Normals are encoded at level 6.\n' +
  '// `members` holds the picks that fit the game\'s pack format (main = master board,\n' +
  '// supports = assist board); picks that cannot be encoded are listed in `dropped`.\n' +
  'export const COMMUNITY_CODES = ' + JSON.stringify(out, null, 2) + ';\n';

const fs = await import('node:fs');
fs.writeFileSync(
  new URL('./src/data/stella-sora/community-build-codes.js', import.meta.url),
  body,
  'utf8',
);
console.log(`wrote community-build-codes.js: ${withCode}/${total} builds coded`);
for (const p of problems) console.log('  !', p);
