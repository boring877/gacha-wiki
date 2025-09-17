// Script to extract weapon skills from character files
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const charactersDir = path.join(__dirname, 'src/data/horizon-walker/characters');
const characterFiles = fs.readdirSync(charactersDir).filter(f => f.endsWith('.js'));

const weaponSkills = {};

characterFiles.forEach(file => {
  const content = fs.readFileSync(path.join(charactersDir, file), 'utf8');
  const characterName = file.replace('.js', '');

  // Extract weapon object
  const weaponMatch = content.match(/weapon:\s*{([\s\S]*?)^  [a-z]/m);
  if (!weaponMatch) return;

  // Find uniqueSkills within weapon
  const uniqueSkillsMatch = weaponMatch[0].match(/uniqueSkills:\s*{([\s\S]*?)^\s{4}\}/m);
  if (!uniqueSkillsMatch) return;

  const skills = {};

  // Extract all skills
  const skillsContent = uniqueSkillsMatch[0];

  // Split by skill blocks and process each
  const skillBlocks = skillsContent.split(/(\w+):\s*{/).slice(1);

  for (let i = 0; i < skillBlocks.length; i += 2) {
    const skillKey = skillBlocks[i];
    const skillContent = skillBlocks[i + 1];

    if (skillContent) {
      const nameMatch = skillContent.match(/name:\s*['"\`](.*?)['"\`]/);
      const typeMatch = skillContent.match(/type:\s*['"\`](.*?)['"\`]/);
      const descMatch = skillContent.match(/description:\s*['"\`]([\s\S]*?)['"\`]/);

      if (nameMatch && descMatch) {
        skills[skillKey] = {
          name: nameMatch[1],
          type: typeMatch ? typeMatch[1] : 'Unique',
          description: descMatch[1].replace(/\s+/g, ' ').trim()
        };
      }
    }
  }

  if (Object.keys(skills).length > 0) {
    weaponSkills[`${characterName}-weapon`] = skills;
  }
});

// Output the skills
console.log('// Weapon Skills Data');
console.log('export const WEAPON_SKILLS = ' + JSON.stringify(weaponSkills, null, 2) + ';');