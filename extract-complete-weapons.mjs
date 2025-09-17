// Script to extract COMPLETE weapon information including skills from character files
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const charactersDir = path.join(__dirname, 'src/data/horizon-walker/characters');
const characterFiles = fs.readdirSync(charactersDir).filter(f => f.endsWith('.js'));

console.log('// Complete Weapon Data extracted from character files');
console.log('// This includes ALL weapon stats and unique skills');
console.log('');

characterFiles.forEach(file => {
  const content = fs.readFileSync(path.join(charactersDir, file), 'utf8');
  const characterName = file.replace('.js', '');

  // Extract entire weapon block
  const weaponMatch = content.match(/weapon:\s*\{([\s\S]*?)^\s*\},$/m);
  if (!weaponMatch) {
    return;
  }

  console.log(`// ${characterName.toUpperCase()} WEAPON DATA`);
  console.log(`export const ${characterName.replace(/-/g, '_')}_weapon = {`);

  // Extract basic info
  const nameMatch = weaponMatch[0].match(/name:\s*['"`]([^'"`]+)['"`]/);
  const typeMatch = weaponMatch[0].match(/type:\s*['"`]([^'"`]+)['"`]/);
  const rarityMatch = weaponMatch[0].match(/rarity:\s*['"`]([^'"`]+)['"`]/);
  const imageMatch = weaponMatch[0].match(/image:\s*['"`]([^'"`]+)['"`]/);

  if (nameMatch) console.log(`  name: '${nameMatch[1]}',`);
  if (typeMatch) console.log(`  type: '${typeMatch[1]}',`);
  if (rarityMatch) console.log(`  rarity: '${rarityMatch[1]}',`);
  if (imageMatch) console.log(`  image: '${imageMatch[1]}',`);

  // Extract stats
  const statsMatch = weaponMatch[0].match(/stats:\s*\{([^\}]*?)\}/s);
  if (statsMatch) {
    console.log(`  stats: {`);
    const statsContent = statsMatch[1];
    const lines = statsContent.split('\n').filter(line => line.trim());
    lines.forEach(line => {
      const statMatch = line.match(/(\w+):\s*['"`]([^'"`]+)['"`]/);
      if (statMatch) {
        console.log(`    ${statMatch[1]}: '${statMatch[2]}',`);
      }
    });
    console.log(`  },`);
  }

  // Extract unique skills
  const uniqueSkillsMatch = weaponMatch[0].match(/uniqueSkills:\s*\{([\s\S]*?)^\s*\},?$/m);
  if (uniqueSkillsMatch) {
    console.log(`  uniqueSkills: {`);

    // Find each skill block
    const skillsContent = uniqueSkillsMatch[1];
    const skillBlocks = skillsContent.split(/(?=\s{4}\w+:\s*\{)/);

    skillBlocks.forEach(block => {
      if (!block.trim()) return;

      const keyMatch = block.match(/^\s*(\w+):\s*\{/);
      const nameMatch = block.match(/name:\s*['"`]([^'"`]+)['"`]/);
      const typeMatch = block.match(/type:\s*['"`]([^'"`]+)['"`]/);
      const descMatch = block.match(/description:\s*['"`]([^'"`]+)['"`]/s);

      if (keyMatch && nameMatch) {
        console.log(`    ${keyMatch[1]}: {`);
        console.log(`      name: '${nameMatch[1]}',`);
        if (typeMatch) console.log(`      type: '${typeMatch[1]}',`);
        if (descMatch) {
          const desc = descMatch[1].replace(/'/g, "\\'").replace(/\n/g, ' ');
          console.log(`      description: '${desc}',`);
        }
        console.log(`    },`);
      }
    });

    console.log(`  },`);
  }

  console.log(`};`);
  console.log('');
});

console.log('// Export all weapon data');
console.log('export const ALL_WEAPON_DATA = {');
characterFiles.forEach(file => {
  const characterName = file.replace('.js', '');
  const content = fs.readFileSync(path.join(charactersDir, file), 'utf8');
  if (content.includes('weapon:')) {
    console.log(`  '${characterName}': ${characterName.replace(/-/g, '_')}_weapon,`);
  }
});
console.log('};');