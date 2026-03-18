import { readFileSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const SV_PATH = 'D:/Silverandblood/silver-and-blood-next/output/captured/CData_SkillValue_20260317_013607.json';
const SK_PATH = 'D:/Silverandblood/silver-and-blood-next/output/captured/CData_Skill_20260316_221221.json';
const CHARS_DIR = resolve(__dirname, '../src/data/silver-and-blood/characters');

const svData = JSON.parse(readFileSync(SV_PATH, 'utf-8')).data;
const skData = JSON.parse(readFileSync(SK_PATH, 'utf-8')).data;

const skillLookup = {};
for (const [id, entry] of Object.entries(skData)) {
  if (/^\d{7,8}$/.test(id)) skillLookup[id] = entry;
}

function resolveVal(svId, lvlIdx = 0) {
  const sv = svData[svId];
  if (!sv) return `[?${svId}]`;
  const raw = sv.m_Num[lvlIdx] ?? sv.m_Num[0];
  return sv.m_ValueType === 2 ? `${(raw / 100).toFixed(1)}%` : String(Math.round(raw));
}

function resolveTemplate(template, svIds, lvlIdx = 0) {
  let t = template;
  t = t.replace(/<style=Highlight>/g, '').replace(/<\/style>/g, '');
  t = t.replace(/<link=Tips_ID;\d+><#[0-9A-Fa-f]+><u>([^<]+)<\/u><\/color><\/link>/g, '$1');
  t = t.replace(/\n/g, ' ').replace(/<[^>]+>/g, '');
  for (let i = 0; i < svIds.length; i++) {
    t = t.replaceAll(`{${i}}`, resolveVal(svIds[i], lvlIdx));
  }
  return t.replace(/\s+/g, ' ').trim();
}

function normalize(s) {
  return s.replace(/\s+/g, ' ').trim().toLowerCase().replace(/[.,;:]+$/, '').replace(/\s+\./g, '.').replace(/\.\s+/g, '. ');
}

function extractSkills(content) {
  const blocks = content.split(/"skillId":\s*"/).slice(1);
  const results = [];
  for (const block of blocks) {
    const idMatch = block.match(/^(\d+)"/);
    if (!idMatch) continue;
    const skillId = idMatch[1];
    const nameMatch = block.match(/"name":\s*"([^"]+)"/);
    const name = nameMatch ? nameMatch[1] : 'Unknown';
    let wikiLv1 = '';
    const lv1Match = block.match(/"lv1":\s*"((?:[^"\\]|\\.)*)"/);
    if (lv1Match) {
      wikiLv1 = lv1Match[1].replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim();
    } else {
      const descMatch = block.match(/"description":\s*"((?:[^"\\]|\\.)*)"/);
      if (descMatch) {
        wikiLv1 = descMatch[1].replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim();
      }
    }
    results.push({ skillId, name, wikiLv1 });
  }
  return results;
}

const charFiles = readdirSync(CHARS_DIR).filter(f => f.endsWith('.js') && f !== 'index.js');
const mismatches = [];
const missing = [];
const noDesc = [];
let checked = 0, matched = 0;

for (const file of charFiles) {
  const content = readFileSync(resolve(CHARS_DIR, file), 'utf-8');
  const charSkills = extractSkills(content);
  for (const sk of charSkills) {
    const cdata = skillLookup[sk.skillId];
    if (!cdata) {
      if (sk.wikiLv1) missing.push({ file, skillId: sk.skillId, name: sk.name });
      continue;
    }
    if (!cdata.m_mSkillDescription || cdata.m_mSkillDescription === '') {
      noDesc.push({ file, skillId: sk.skillId, name: sk.name });
      continue;
    }
    const resolved = resolveTemplate(cdata.m_mSkillDescription, cdata.m_SkillValue || [], 0);
    checked++;
    if (normalize(resolved) === normalize(sk.wikiLv1)) {
      matched++;
    } else {
      mismatches.push({ file, name: sk.name, skillId: sk.skillId, wiki: sk.wikiLv1, cdata: resolved });
    }
  }
}

console.log(`\n=== Skill Value Verification Report ===\n`);
console.log(`Skills checked: ${checked}`);
console.log(`Matches:       ${matched}`);
console.log(`Mismatches:    ${mismatches.length}`);
console.log(`Missing CDATA: ${missing.length}`);
console.log(`No description:${noDesc.length}`);

if (mismatches.length > 0) {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`MISMATCHES (${mismatches.length})`);
  console.log(`${'='.repeat(70)}\n`);
  for (const m of mismatches) {
    console.log(`[${m.file.replace('.js', '')}] ${m.name} (${m.skillId})`);
    console.log(`  WIKI:  ${m.wiki.substring(0, 200)}`);
    console.log(`  CDATA: ${m.cdata.substring(0, 200)}`);
    console.log();
  }
}

if (missing.length > 0) {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`MISSING IN CDATA (${missing.length})`);
  console.log(`${'='.repeat(70)}\n`);
  for (const m of missing) {
    console.log(`[${m.file.replace('.js', '')}] ${m.name} (${m.skillId})`);
  }
}

if (noDesc.length > 0) {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`NO DESCRIPTION IN CDATA (${noDesc.length})`);
  console.log(`${'='.repeat(70)}\n`);
  for (const m of noDesc) {
    console.log(`[${m.file.replace('.js', '')}] ${m.name} (${m.skillId})`);
  }
}
