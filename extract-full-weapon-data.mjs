// Script to extract COMPLETE weapon information from character files
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const charactersDir = path.join(__dirname, 'src/data/horizon-walker/characters');
const characterFiles = fs.readdirSync(charactersDir).filter(f => f.endsWith('.js'));

const weaponData = {};

characterFiles.forEach(file => {
  const content = fs.readFileSync(path.join(charactersDir, file), 'utf8');
  const characterName = file.replace('.js', '');

  // Extract entire weapon object
  const weaponMatch = content.match(/weapon:\s*\{([\s\S]*?)^\s*\},\n/m);
  if (!weaponMatch) {
    console.log(`// No weapon found for ${characterName}`);
    return;
  }

  // Parse the weapon data
  const weaponContent = weaponMatch[0];

  // Extract name
  const nameMatch = weaponContent.match(/name:\s*['"`]([^'"`]+)['"`]/);

  // Extract type
  const typeMatch = weaponContent.match(/type:\s*['"`]([^'"`]+)['"`]/);

  // Extract rarity
  const rarityMatch = weaponContent.match(/rarity:\s*['"`]([^'"`]+)['"`]/);

  // Extract image
  const imageMatch = weaponContent.match(/image:\s*['"`]([^'"`]+)['"`]/);

  // Extract all stats
  const statsMatch = weaponContent.match(/stats:\s*\{([^\}]*?)\}/s);
  const stats = {};
  if (statsMatch) {
    const statsContent = statsMatch[1];
    // Extract each stat
    const statPatterns = [
      'weaponMeleeAtk',
      'weaponMagicAtk',
      'weaponRangedAtk',
      'meleeAtkBonus',
      'magicAtkBonus',
      'rangedAtkBonus',
      'critRateBonus',
      'critDmgBonus',
      'maxHpBonus',
      'spdBonus',
      'allDefBonus',
      'evasionBonus',
      'accuracyBonus',
      'apRecoveryBonus',
      'crushBoost',
      'pierceBoost',
      'slashBoost'
    ];

    statPatterns.forEach(stat => {
      const pattern = new RegExp(`${stat}:\\s*['"\`]([^'"\`]+)['"\`]`);
      const match = statsContent.match(pattern);
      if (match) {
        stats[stat] = match[1];
      }
    });
  }

  // Extract unique skills
  const uniqueSkillsMatch = weaponContent.match(/uniqueSkills:\s*\{([\s\S]*?)^\s*\},$/m);
  const skills = {};

  if (uniqueSkillsMatch) {
    const skillsContent = uniqueSkillsMatch[0];

    // Find all skill blocks
    const skillPattern = /(\w+):\s*\{\s*name:\s*['"`]([^'"`]+)['"`],\s*type:\s*['"`]([^'"`]+)['"`],\s*description:\s*['"`]([^'"`]+)['"`]/g;
    let skillMatch;

    while ((skillMatch = skillPattern.exec(skillsContent)) !== null) {
      const [, skillKey, skillName, skillType, skillDescription] = skillMatch;
      skills[skillKey] = {
        name: skillName,
        type: skillType,
        description: skillDescription
      };
    }
  }

  // Store the weapon data
  weaponData[characterName] = {
    name: nameMatch ? nameMatch[1] : '',
    type: typeMatch ? typeMatch[1] : '',
    rarity: rarityMatch ? rarityMatch[1] : '',
    image: imageMatch ? imageMatch[1] : '',
    stats: stats,
    skills: skills
  };
});

// Output the complete weapon data
console.log('// Complete Weapon Data from Character Files');
console.log('export const COMPLETE_WEAPON_DATA = {');

Object.entries(weaponData).forEach(([character, weapon]) => {
  if (!weapon.name) return;

  console.log(`  '${character}': {`);
  console.log(`    name: '${weapon.name}',`);
  console.log(`    type: '${weapon.type}',`);
  console.log(`    rarity: '${weapon.rarity}',`);
  console.log(`    image: '${weapon.image}',`);

  // Output stats
  console.log(`    stats: {`);
  Object.entries(weapon.stats).forEach(([key, value]) => {
    console.log(`      ${key}: '${value}',`);
  });
  console.log(`    },`);

  // Output skills
  if (Object.keys(weapon.skills).length > 0) {
    console.log(`    skills: {`);
    Object.entries(weapon.skills).forEach(([key, skill]) => {
      console.log(`      ${key}: {`);
      console.log(`        name: '${skill.name}',`);
      console.log(`        type: '${skill.type}',`);
      console.log(`        description: \`${skill.description}\`,`);
      console.log(`      },`);
    });
    console.log(`    }`);
  }

  console.log(`  },`);
});

console.log('};');