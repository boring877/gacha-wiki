import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory containing character pages
const charactersDir = path.join(__dirname, '../src/pages/guides/zone-nova/characters');

// Get all .astro files in the characters directory
const characterFiles = fs.readdirSync(charactersDir).filter(file => file.endsWith('.astro'));

console.log('🔄 Updating template import paths...\n');

characterFiles.forEach(filename => {
  const filePath = path.join(charactersDir, filename);

  try {
    // Read the current content
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace the import path
    const oldImport =
      "import CharacterPageTemplate from '../../../../components/zone-nova/CharacterPageTemplate.astro';";
    const newImport =
      "import CharacterPageTemplate from '../../../../templates/zone-nova/CharacterPageTemplate.astro';";

    if (content.includes(oldImport)) {
      content = content.replace(oldImport, newImport);

      // Write the updated content back
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated: ${filename}`);
    } else {
      console.log(`⏭️  Skipped: ${filename} (import not found or already updated)`);
    }
  } catch (_error) {
    console.log(`❌ Error updating ${filename}:`, _error.message);
  }
});

console.log('\n✨ Template import paths updated!');
