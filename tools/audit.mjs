// One-shot structural audit: broken links, missing imports, game registration drift,
// dead CSS files, leak greps, repo weight. Run with: bun tools/audit.mjs
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = 'C:/Users/Borin/ZCodeProject/gacha-wiki';
const SRC = path.join(ROOT, 'src');
const out = [];
const sec = (t) => out.push('\n=== ' + t + ' ===');

function walk(dir, exts, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (['node_modules', 'dist', '.wrangler', '.astro', 'assets'].includes(e.name) && dir === SRC) continue;
      if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.wrangler') continue;
      walk(p, exts, acc);
    } else if (exts.some((x) => e.name.endsWith(x))) acc.push(p);
  }
  return acc;
}

const codeFiles = walk(SRC, ['.astro', '.ts', '.js', '.mjs', '.svelte']);
const navFile = path.join(SRC, 'data/game-navigation.ts');
const dataCode = codeFiles.filter((f) => f.includes(`${SRC}/data`));
const pagesCode = codeFiles.filter((f) => !f.includes(`${SRC}/data`));

// ---------- 1. internal links ----------
sec('1. BROKEN INTERNAL LINKS (href/src from pages+nav to missing routes/files)');
const linkFiles = [...pagesCode, navFile, path.join(SRC, 'data/games.ts'), path.join(SRC, 'data/about.js')];
const hrefRe = /(?:href|src)=["'`](\/[^"'`\s#]*)["'`]/g;
const brokenLinks = new Map();
for (const f of linkFiles) {
  const t = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = hrefRe.exec(t))) {
    const link = m[1].split('?')[0].split('#')[0];
    if (link === '/' || link.startsWith('//')) continue;
    if (/\.(png|jpe?g|webp|svg|ico|mp3|mp4|json|xml|txt|webmanifest|css|js)$/.test(link)) {
      const pub = path.join(ROOT, 'public', link);
      if (!fs.existsSync(pub)) brokenLinks.set(link + '  (asset)', f.replace(ROOT + '/', ''));
      continue;
    }
    const clean = link.replace(/\/+$/, '');
    const page = path.join(SRC, 'pages', clean + '.astro');
    const idx = path.join(SRC, 'pages', clean, 'index.astro');
    const pubf = path.join(ROOT, 'public', clean);
    if (fs.existsSync(page) || fs.existsSync(idx) || fs.existsSync(pubf)) continue;
    // param route? any [x].astro / [...x].astro in that dir (or ancestor dirs)
    let ok = false;
    let dirp = path.join(SRC, 'pages', clean);
    for (let i = 0; i < 4; i++) {
      if (fs.existsSync(dirp) && fs.statSync(dirp).isDirectory()) {
        if (fs.readdirSync(dirp).some((n) => /^\[.*\]\.astro$/.test(n) || /^\[\.\.\..*\]\.astro$/.test(n))) { ok = true; break; }
      }
      const parent = path.dirname(dirp);
      if (parent === dirp) break;
      dirp = parent;
    }
    if (!ok) brokenLinks.set(link, (brokenLinks.get(link) ? brokenLinks.get(link) + ' | ' : '') + f.replace(ROOT + '/', ''));
  }
}
for (const [k, v] of [...brokenLinks].sort()) out.push('  ' + k + '   <- ' + v);
out.push('  total broken: ' + brokenLinks.size);

// ---------- 2. relative imports that do not resolve ----------
sec('2. UNRESOLVED RELATIVE IMPORTS (missing files)');
let badImports = 0;
const impRe = /import\s+(?:[\s\S]*?from\s+)?["'](\.\.?\/[^"']+)["']/g;
for (const f of codeFiles) {
  const t = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = impRe.exec(t))) {
    const spec = m[1];
    const base = path.resolve(path.dirname(f), spec);
    const cands = [base, base + '.ts', base + '.js', base + '.mjs', base + '.astro', base + '.svelte', base + '.json', base + '.css',
      path.join(base, 'index.ts'), path.join(base, 'index.js')];
    if (!cands.some((c) => { try { return fs.existsSync(c) && fs.statSync(c).isFile(); } catch { return false; } })) {
      out.push('  ' + f.replace(ROOT + '/', '') + '  ->  ' + spec);
      badImports++;
      if (badImports > 40) { out.push('  ... (capped)'); break; }
    }
  }
}
out.push('  total unresolved: ' + badImports);

// ---------- 3. game registration drift ----------
sec('3. GAME REGISTRATION DRIFT');
const gamesTs = fs.readFileSync(path.join(SRC, 'data/games.ts'), 'utf8');
const navTs = fs.readFileSync(navFile, 'utf8');
const seoTs = fs.readFileSync(path.join(SRC, 'utils/seo.ts'), 'utf8');
const bcrumb = fs.readFileSync(path.join(SRC, 'utils/breadcrumb-generator.js'), 'utf8');
const dataDirs = fs.readdirSync(path.join(SRC, 'data')).filter((n) => fs.statSync(path.join(SRC, 'data', n)).isDirectory() && n !== 'clock');
const idInGames = [...gamesTs.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
const gameKeyUnion = [...navTs.matchAll(/['"]([a-z0-9-]+)['"](?=\s*[|;}])/g)].map((m) => m[1]);
const navDataKeys = [...navTs.matchAll(/['"]([a-z0-9-]+)['"]:\s*\{/g)].map((m) => m[1]);
const seoLookups = [...seoTs.matchAll(/g\(['"]([^'"]+)['"]\)/g)].map((m) => m[1]);
const bcrumbKeys = [...bcrumb.matchAll(/['"]([a-z0-9-]+)['"]:\s*\{/g)].map((m) => m[1]);
const fmt = (a) => [...new Set(a)].sort().join(', ');
out.push('  data dirs:      ' + dataDirs.sort().join(', '));
out.push('  games.ts ids:   ' + fmt(idInGames));
out.push('  nav GameKey:    ' + fmt(gameKeyUnion));
out.push('  NAV_DATA keys:  ' + fmt(navDataKeys));
out.push('  seo g() ids:    ' + fmt(seoLookups));
out.push('  breadcrumb ids: ' + fmt(bcrumbKeys));
const base = new Set(dataDirs.filter((d) => d !== 'stella-sora' || true));
for (const d of dataDirs.sort()) {
  const miss = [];
  if (!idInGames.includes(d)) miss.push('games.ts');
  if (!gameKeyUnion.includes(d)) miss.push('GameKey');
  if (!navDataKeys.includes(d)) miss.push('NAV_DATA');
  if (!seoLookups.includes(d)) miss.push('seo');
  if (!bcrumbKeys.includes(d)) miss.push('breadcrumb');
  if (miss.length) out.push('  DRIFT ' + d + ': missing in ' + miss.join(', '));
}

// ---------- 4. css files never imported ----------
sec('4. CSS FILES NEVER REFERENCED (dead stylesheets)');
const cssFiles = walk(SRC, ['.css']);
const allText = new Map();
for (const f of [...codeFiles, ...cssFiles]) allText.set(f, fs.readFileSync(f, 'utf8'));
let deadCss = 0;
for (const c of cssFiles) {
  const base = path.basename(c, '.css');
  let refs = 0;
  for (const [f, t] of allText) {
    if (f === c) continue;
    if (t.includes(base) && (t.includes(path.basename(c)) || t.includes(base + '.css'))) { refs++; break; }
  }
  if (refs === 0) { out.push('  ' + c.replace(ROOT + '/', '') + '  (' + Math.round(fs.statSync(c).size / 1024) + ' KB)'); deadCss++; }
}
out.push('  total dead css files: ' + deadCss);

// ---------- 5. leak greps ----------
sec('5. PRIVATE PATHS / DEBUG LEFTOVERS IN SHIPPED SRC');
const leakRe = /(C:\\\\Users|C:\/Users|D:\\\\|D:\/(?!Sukebei)|Borin)/;
const conLog = [];
let leakHits = 0;
for (const f of pagesCode) {
  const t = fs.readFileSync(f, 'utf8');
  const lines = t.split('\n');
  lines.forEach((l, i) => {
    if (leakRe.test(l)) { out.push('  PATH ' + f.replace(ROOT + '/', '') + ':' + (i + 1) + '  ' + l.trim().slice(0, 110)); leakHits++; }
  });
  const cl = (t.match(/console\.(log|debug|info)\(/g) || []).length;
  if (cl) conLog.push([cl, f.replace(ROOT + '/', '')]);
}
out.push('  path-leak hits: ' + leakHits);
conLog.sort((a, b) => b[0] - a[0]);
out.push('  console.log top: ' + conLog.slice(0, 8).map(([n, f]) => n + 'x ' + f).join(' | '));
out.push('  console.log total files: ' + conLog.length + ', total calls: ' + conLog.reduce((s, [n]) => s + n, 0));

// ---------- 6. repo weight ----------
sec('6. REPO WEIGHT (git)');
try {
  const tracked = execSync('git ls-files', { cwd: ROOT, encoding: 'utf8' }).trim().split('\n');
  out.push('  tracked files: ' + tracked.length);
  const byTop = {};
  for (const f of tracked) { const top = f.split('/')[0]; byTop[top] = (byTop[top] || 0) + 1; }
  out.push('  tracked by top dir: ' + Object.entries(byTop).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([k, v]) => k + '=' + v).join(', '));
  const pngs = tracked.filter((f) => /\.(png|jpe?g|webp|gif|mp3|mp4|wav)$/i.test(f));
  out.push('  tracked binaries: ' + pngs.length);
  const assetByGame = {};
  for (const f of pngs) { const m = f.match(/src\/assets\/images\/games\/([^/]+)/); if (m) assetByGame[m[1]] = (assetByGame[m[1]] || 0) + 1; }
  out.push('  in-repo images per game: ' + JSON.stringify(assetByGame));
  const big = execSync('git ls-files -z | xargs -0 ls -l 2>/dev/null | sort -k5 -rn | head -12 | awk \'{print $5, $9}\'', { cwd: ROOT, encoding: 'utf8', shell: 'C:/Program Files/Git/bin/bash.exe' });
  out.push('  largest tracked:\n' + big.trim().split('\n').map((l) => '    ' + l).join('\n'));
  const distTracked = tracked.filter((f) => f.startsWith('dist/')).length;
  out.push('  dist/ tracked files: ' + distTracked);
} catch (e) { out.push('  git check failed: ' + e.message); }

fs.writeFileSync(path.join(ROOT, 'tools/audit-report.txt'), out.join('\n'));
console.log(out.join('\n'));
