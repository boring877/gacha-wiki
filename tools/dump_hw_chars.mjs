// Dump every Horizon Walker character data file to JSON for the staleness audit.
// Usage: bun tools/dump_hw_chars.mjs > /tmp/hw_wiki_chars.json
import { readdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const dir = new URL('../src/data/horizon-walker/characters/', import.meta.url).pathname
  .replace(/^\/([A-Za-z]):/, '$1:');

const out = [];
for (const f of readdirSync(dir).filter((f) => f.endsWith('.js'))) {
  const mod = await import(pathToFileURL(dir + f).href);
  const data = Object.values(mod).find((v) => v && typeof v === 'object' && v.name && v.skills);
  if (!data) {
    console.error(`SKIP ${f}: no character export found`);
    continue;
  }
  const slug = f.replace(/\.js$/, '');
  out.push({
    slug,
    heroId: data.heroId ?? null,
    name: data.name,
    skills: Object.entries(data.skills || {}).map(([key, s]) => ({
      key,
      gameKey: s.gameKey ?? null,
      name: s.name ?? null,
      level: s.level ?? null,
      description: s.description ?? null,
      damage: s.damage ?? null,
    })),
    traits: Object.entries(data.uniqueTraits || {}).map(([key, t]) => ({
      key,
      name: t?.name ?? null,
      description: t?.description ?? null,
    })),
    weaponUniques: Object.entries(data.weapon?.uniqueSkills || {}).map(([key, w]) => ({
      key,
      name: w?.name ?? null,
      type: w?.type ?? null,
      description: w?.description ?? null,
    })),
  });
}
console.log(JSON.stringify(out, null, 1));
