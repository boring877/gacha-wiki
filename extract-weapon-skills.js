/* eslint-disable no-console */
// Script to extract weapon skills from character files - console output is intentional
const fs = require('fs');
const path = require('path');

const charactersDir = 'src/data/horizon-walker/characters';
const characterFiles = fs.readdirSync(charactersDir).filter(f => f.endsWith('.js'));

console.log('export const WEAPON_SKILLS = {');

characterFiles.forEach(file => {
  const content = fs.readFileSync(path.join(charactersDir, file), 'utf8');
  const characterName = file.replace('.js', '');

  // Extract weapon object
  const weaponMatch = content.match(/weapon:\s*{([\s\S]*?)^ {2}\w+:/m);
  if (!weaponMatch) return;

  // Find uniqueSkills within weapon
  const uniqueSkillsMatch = weaponMatch[0].match(/uniqueSkills:\s*{([\s\S]*?)^\s{4}}/m);
  if (!uniqueSkillsMatch) return;

  // Extract skill names and descriptions
  const skillsContent = uniqueSkillsMatch[0];
  const skills = [];

  // Match individual skills
  const skillMatches = skillsContent.matchAll(
    /(\w+):\s*{\s*name:\s*['"`](.*?)['"`],\s*type:\s*['"`](.*?)['"`],\s*description:\s*['"`]([\s\S]*?)['"`],?\s*}/g
  );

  for (const match of skillMatches) {
    skills.push({
      id: match[1],
      name: match[2],
      type: match[3],
      description: match[4].replace(/\s+/g, ' ').trim(),
    });
  }

  if (skills.length > 0) {
    console.log(`  '${characterName}-weapon': {`);
    skills.forEach((skill, index) => {
      console.log(`    ${skill.id}: {`);
      console.log(`      name: '${skill.name.replace(/'/g, "\\'")}',`);
      console.log(`      type: '${skill.type}',`);
      console.log(`      description: '${skill.description.replace(/'/g, "\\'")}'`);
      console.log(`    }${index < skills.length - 1 ? ',' : ''}`);
    });
    console.log('  },');
  }
});

console.log('};');
