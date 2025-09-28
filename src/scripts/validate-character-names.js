#!/usr/bin/env node

/**
 * Character Name Validation Script
 * Validates that character names are consistent across data files, images, and pages
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load the character name map
const nameMapPath = path.join(__dirname, '../data/horizon-walker/character-name-map.json');
const nameMap = JSON.parse(fs.readFileSync(nameMapPath, 'utf8'));

// Base paths
const baseDir = path.join(__dirname, '..');
const charDataDir = path.join(baseDir, 'data/horizon-walker/characters');
const charPagesDir = path.join(baseDir, 'pages/guides/horizon-walker/characters');
const imagesDir = path.join(baseDir, 'public/images/games/horizon-walker/characters');
const weaponsDir = path.join(baseDir, 'public/images/games/horizon-walker/weapons');

// Validation results
const results = {
  passed: [],
  failed: [],
  warnings: [],
};

// Check if file exists
function fileExists(filePath) {
  try {
    fs.accessSync(filePath);
    return true;
  } catch {
    return false;
  }
}

// Validate a single character
function validateCharacter(charKey, charInfo) {
  const errors = [];
  const warnings = [];

  // Check data file
  const dataFile = path.join(charDataDir, `${charKey}.js`);
  if (!fileExists(dataFile)) {
    errors.push(`Missing data file: ${charKey}.js`);
  } else {
    // Check if data export exists
    try {
      const dataContent = fs.readFileSync(dataFile, 'utf8');
      if (!dataContent.includes(`export const ${charInfo.dataExport}`)) {
        errors.push(`Missing data export: ${charInfo.dataExport}`);
      }
    } catch (_) {
      errors.push(`Cannot read data file: ${charKey}.js`);
    }
  }

  // Check page file
  const pageFile = path.join(charPagesDir, `${charKey}.astro`);
  if (!fileExists(pageFile)) {
    errors.push(`Missing page file: ${charKey}.astro`);
  }

  // Check image file
  const imageFile = path.join(imagesDir, `${charInfo.imageName}.jpg`);
  if (!fileExists(imageFile)) {
    errors.push(`Missing image file: ${charInfo.imageName}.jpg`);
  }

  // Check weapon file
  const weaponFile = path.join(weaponsDir, `${charInfo.imageName}_WP.jpg`);
  if (!fileExists(weaponFile)) {
    warnings.push(`Missing weapon file: ${charInfo.imageName}_WP.jpg`);
  }

  return { errors, warnings };
}

// Main validation function
function validateAllCharacters() {
  console.log('🔍 Validating Horizon Walker character names...\n');

  let totalChars = 0;
  let passedChars = 0;

  for (const [charKey, charInfo] of Object.entries(nameMap.characterNames)) {
    totalChars++;
    console.log(`📝 Validating: ${charInfo.displayName} (${charKey})`);

    const { errors, warnings } = validateCharacter(charKey, charInfo);

    if (errors.length === 0) {
      results.passed.push(charKey);
      passedChars++;
      console.log(`  ✅ Passed`);
    } else {
      results.failed.push({ char: charKey, errors });
      console.log(`  ❌ Failed:`);
      errors.forEach(error => console.log(`     - ${error}`));
    }

    if (warnings.length > 0) {
      results.warnings.push({ char: charKey, warnings });
      console.log(`  ⚠️  Warnings:`);
      warnings.forEach(warning => console.log(`     - ${warning}`));
    }

    console.log('');
  }

  // Summary
  console.log('📊 Validation Summary:');
  console.log(`   Total Characters: ${totalChars}`);
  console.log(`   Passed: ${passedChars}`);
  console.log(`   Failed: ${results.failed.length}`);
  console.log(`   Warnings: ${results.warnings.length}`);

  if (results.failed.length > 0) {
    console.log('\n❌ Failed Characters:');
    results.failed.forEach(({ char, errors }) => {
      console.log(`   ${char}: ${errors.join(', ')}`);
    });
  }

  if (results.warnings.length > 0) {
    console.log('\n⚠️  Characters with Warnings:');
    results.warnings.forEach(({ char, warnings }) => {
      console.log(`   ${char}: ${warnings.join(', ')}`);
    });
  }

  if (results.failed.length === 0) {
    console.log('\n🎉 All character names are valid!');
    return true;
  } else {
    console.log('\n🚨 Some character names have issues. Please fix them.');
    return false;
  }
}

// Add new character to the name map
function addCharacter(charKey, charInfo) {
  nameMap.characterNames[charKey] = {
    displayName: charInfo.displayName,
    imageName: charInfo.imageName,
    dataExport: charInfo.dataExport,
    pageSlug: charInfo.pageSlug,
    notes: charInfo.notes || '',
  };

  // Save updated name map
  fs.writeFileSync(nameMapPath, JSON.stringify(nameMap, null, 2));
  console.log(`✅ Added ${charInfo.displayName} to name map`);
}

// CLI commands
if (import.meta.url === `file://${process.argv[1]}`) {
  const command = process.argv[2];

  if (command === 'validate') {
    validateAllCharacters();
  } else if (command === 'add') {
    const charKey = process.argv[3];
    const displayName = process.argv[4];
    const imageName = process.argv[5];
    const dataExport = process.argv[6];
    const pageSlug = process.argv[7];

    if (!charKey || !displayName || !imageName || !dataExport || !pageSlug) {
      console.log(
        'Usage: node validate-character-names.js add <key> <displayName> <imageName> <dataExport> <pageSlug>'
      );
      process.exit(1);
    }

    addCharacter(charKey, {
      displayName,
      imageName,
      dataExport,
      pageSlug,
    });
  } else {
    console.log('Usage: node validate-character-names.js <command>');
    console.log('Commands:');
    console.log('  validate - Validate all character names');
    console.log(
      '  add <key> <displayName> <imageName> <dataExport> <pageSlug> - Add new character'
    );
    process.exit(1);
  }
}

export { validateAllCharacters, addCharacter, nameMap };
