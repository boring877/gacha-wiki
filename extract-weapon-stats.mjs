// Script to extract weapon stats from character files
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const charactersDir = path.join(__dirname, 'src/data/horizon-walker/characters');
const characterFiles = fs.readdirSync(charactersDir).filter(f => f.endsWith('.js'));

console.log('// Weapon Stats Data');
console.log('const WEAPON_STATS_UPDATE = {');

characterFiles.forEach(file => {
  const content = fs.readFileSync(path.join(charactersDir, file), 'utf8');
  const characterName = file.replace('.js', '');

  // Extract weapon stats
  const weaponMatch = content.match(/weapon:\s*{([\s\S]*?)^  [a-z]/m);
  if (!weaponMatch) return;

  // Find stats within weapon
  const statsMatch = weaponMatch[0].match(/stats:\s*{([\s\S]*?)}/);
  if (!statsMatch || statsMatch[1].trim() === '') return;

  // Parse stats
  const statsContent = statsMatch[1];
  const stats = {};

  // Extract each stat type
  const statPatterns = {
    weaponMeleeAtk: /weaponMeleeAtk:\s*['"`]([\d.]+)['"`]/,
    weaponMagicAtk: /weaponMagicAtk:\s*['"`]([\d.]+)['"`]/,
    weaponRangedAtk: /weaponRangedAtk:\s*['"`]([\d.]+)['"`]/,
    critDmgBonus: /critDmgBonus:\s*['"`]([^'"`]+)['"`]/,
    magicAtkBonus: /magicAtkBonus:\s*['"`]([^'"`]+)['"`]/,
    maxHpBonus: /maxHpBonus:\s*['"`]([^'"`]+)['"`]/,
    spdBonus: /spdBonus:\s*['"`]([^'"`]+)['"`]/,
    allDefBonus: /allDefBonus:\s*['"`]([^'"`]+)['"`]/,
    evasionBonus: /evasionBonus:\s*['"`]([^'"`]+)['"`]/,
  };

  Object.entries(statPatterns).forEach(([key, pattern]) => {
    const match = statsContent.match(pattern);
    if (match) {
      stats[key] = match[1];
    }
  });

  if (Object.keys(stats).length > 0) {
    console.log(`  '${characterName}': {`);
    Object.entries(stats).forEach(([key, value], index, array) => {
      console.log(`    ${key}: '${value}'${index < array.length - 1 ? ',' : ''}`);
    });
    console.log('  },');
  }
});

console.log('};');