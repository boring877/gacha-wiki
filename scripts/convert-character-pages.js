import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory containing character pages
const charactersDir = path.join(__dirname, '../src/pages/guides/zone-nova/characters');

// List of all character files (you can get this by running ls in the characters directory)
const characterFiles = [
  'afrodite.astro',
  'anubis.astro',
  'apollo.astro',
  'artemis.astro',
  'arthur.astro',
  'athena.astro',
  'bastet.astro',
  'belphegar.astro',
  'chiya.astro',
  'cleopatra.astro',
  'gaia.astro',
  'greed-mammon.astro',
  'guinevere.astro',
  'hera.astro',
  'horus.astro',
  'jeanne-darc.astro',
  'kela.astro',
  'lancelot.astro',
  'leviathan.astro',
  'loki.astro',
  'lyra.astro',
  'merlin.astro',
  'mordred.astro',
  'naiya.astro',
  'nini.astro',
  'penny.astro',
  'rose.astro',
  'shanna.astro',
  'shu.astro',
  'snow-girl.astro',
  'tefnut.astro',
  'yuis.astro',
  'zashiki-warashi.astro',
];

// Template for the new character page structure
const generateCharacterPageContent = characterName => {
  // Convert filename to data import name (e.g., 'anubis' -> 'anubisData')
  const dataName = characterName.replace(/-/g, '').toLowerCase();

  return `---
import ZoneNovaLayout1 from '../../../../layouts/zone-nova/CharacterLayout.astro';
import CharacterNavigation from '../../../../components/zone-nova/CharacterNavigation.astro';
import CharacterPageTemplate from '../../../../components/zone-nova/CharacterPageTemplate.astro';
import { ${dataName}Data, ${dataName}SEO } from '../../../../data/zone-nova/characters/${characterName}.js';

export const prerender = true;

// Import character data from ${characterName}.js
const characterData = ${dataName}Data;

// SEO optimization using imported data
const title = ${dataName}SEO.title;
const description = ${dataName}SEO.description;
---

<ZoneNovaLayout1 title={title} description={description} gameTitle={characterData.name}>
  <!-- Character Navigation -->
  <CharacterNavigation currentCharacter={characterData} />

  <!-- Character Page Content -->
  <CharacterPageTemplate characterData={characterData} />
</ZoneNovaLayout1>`;
};

// Function to convert a single character file
const convertCharacterFile = filename => {
  const characterName = filename.replace('.astro', '');
  const filePath = path.join(charactersDir, filename);

  // Skip anubis.astro since we already converted it
  if (characterName === 'anubis') {
    console.log(`⏭️  Skipping ${filename} (already converted)`);
    return;
  }

  try {
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.log(`❌ File not found: ${filename}`);
      return;
    }

    // Generate new content
    const newContent = generateCharacterPageContent(characterName);

    // Write the new content
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ Converted: ${filename}`);
  } catch (error) {
    console.log(`❌ Error converting ${filename}:`, error.message);
  }
};

// Main execution
console.log('🚀 Starting character page conversion...\n');

characterFiles.forEach(convertCharacterFile);

console.log('\n✨ Character page conversion completed!');
console.log('\n📝 Next steps:');
console.log('1. Test a few character pages to ensure they work correctly');
console.log('2. If there are any data import naming issues, adjust the conversion script');
console.log(
  '3. Now you can modify CharacterPageTemplate.astro to add new features to ALL character pages at once!'
);
