/**
 * Migration Script for Zone Nova Data Structure
 *
 * This script helps transition from the current data structure
 * to a more optimized approach for Astro SSG.
 *
 * Run with: node src/scripts/migrate-zone-nova-data.js
 */

import fs from 'fs';
import path from 'path';

// Configuration
const DATA_DIR = path.join(process.cwd(), 'src/data/zone-nova');
const CHARACTERS_DIR = path.join(DATA_DIR, 'characters');
const OUTPUT_FILE = path.join(DATA_DIR, 'characters-optimized.js');

// Function to read all character files
function readCharacterFiles() {
  const characterFiles = fs
    .readdirSync(CHARACTERS_DIR)
    .filter(file => file.endsWith('.js') && !file.includes('template'))
    .map(file => path.join(CHARACTERS_DIR, file));

  const characters = [];

  characterFiles.forEach(filePath => {
    try {
      // Read file content
      const content = fs.readFileSync(filePath, 'utf8');

      // Extract character name from filename
      const fileName = path.basename(filePath, '.js');

      // Simple regex to extract the data object (this is a basic approach)
      // In a real scenario, you might want to use a more sophisticated parser
      const dataMatch = content.match(/export const \w+Data\s*=\s*({[\s\S]*?});/);

      if (dataMatch) {
        console.log(`Processing: ${fileName}`);
        characters.push({
          slug: fileName,
          filePath: filePath,
          content: dataMatch[1],
        });
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  });

  return characters;
}

// Function to generate optimized character data file
function generateOptimizedFile(characters) {
  const imports = characters
    .map(char => `import ${char.slug}Data from './characters/${char.slug}.js';`)
    .join('\n');

  const characterMap = characters.map(char => `  '${char.slug}': ${char.slug}Data`).join(',\n');

  const template = `// Zone Nova Optimized Character Data
// This file provides centralized access to all character data
// Generated on: ${new Date().toISOString()}

${imports}

// Character data lookup map
export const CHARACTER_DATA_MAP = {
${characterMap}
};

// Get character data by slug
export function getCharacterData(slug) {
  return CHARACTER_DATA_MAP[slug];
}

// Get all character slugs
export function getAllCharacterSlugs() {
  return Object.keys(CHARACTER_DATA_MAP);
}

// Export all character data for backward compatibility
export { CHARACTER_DATA_MAP as default };
`;

  return template;
}

// Main migration function
function migrate() {
  console.log('Starting Zone Nova data migration...');

  // Check if directories exist
  if (!fs.existsSync(DATA_DIR)) {
    console.error(`Data directory not found: ${DATA_DIR}`);
    process.exit(1);
  }

  if (!fs.existsSync(CHARACTERS_DIR)) {
    console.error(`Characters directory not found: ${CHARACTERS_DIR}`);
    process.exit(1);
  }

  // Read all character files
  const characters = readCharacterFiles();
  console.log(`Found ${characters.length} character files`);

  // Generate optimized file
  const optimizedContent = generateOptimizedFile(characters);

  // Write optimized file
  fs.writeFileSync(OUTPUT_FILE, optimizedContent);
  console.log(`Optimized file created: ${OUTPUT_FILE}`);

  console.log('\nMigration completed successfully!');
  console.log('\nNext steps:');
  console.log('1. Update your ZNCharacterData.astro to use the new optimized structure');
  console.log('2. Test your application to ensure everything works correctly');
  console.log('3. Consider removing the old individual imports from ZNCharacterData.astro');
}

// Run migration if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  migrate();
}

export { readCharacterFiles, generateOptimizedFile, migrate };
