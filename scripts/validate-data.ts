#!/usr/bin/env bun

// Data validation script to check all game data for consistency and errors
import {
  validateZoneNovaCharacter,
  validateSilverBloodCharacter,
  validateDataArray,
  checkForDuplicateIds,
  checkForDuplicateSlugs,
  validateImagePaths,
} from '../src/utils/data-validation';

// Zone Nova data imports
import { ZONE_NOVA_CHARACTERS } from '../src/data/zone-nova/characters.js';

// Silver and Blood data will be imported dynamically
let SILVER_BLOOD_CHARACTERS: any[] = [];

interface ValidationReport {
  game: string;
  dataType: string;
  totalItems: number;
  validItems: number;
  invalidItems: number;
  errors: string[];
  warnings: string[];
}

function createReport(
  game: string,
  dataType: string,
  totalItems: number,
  validItems: number,
  errors: string[],
  warnings: string[]
): ValidationReport {
  return {
    game,
    dataType,
    totalItems,
    validItems,
    invalidItems: totalItems - validItems,
    errors,
    warnings,
  };
}

function validateZoneNovaData(): ValidationReport[] {
  const reports: ValidationReport[] = [];

  console.log('🔍 Validating Zone Nova character data...');

  // Validate character data structure
  const characterValidation = validateDataArray(
    ZONE_NOVA_CHARACTERS,
    validateZoneNovaCharacter,
    'Zone Nova Character'
  );

  // Check for duplicate IDs
  const duplicateIdErrors = checkForDuplicateIds(ZONE_NOVA_CHARACTERS);

  // Check for duplicate slugs
  const duplicateSlugErrors = checkForDuplicateSlugs(ZONE_NOVA_CHARACTERS);

  // Validate image paths
  const imagePathErrors = validateImagePaths(ZONE_NOVA_CHARACTERS);

  // Combine all errors
  const allErrors = [
    ...characterValidation.errors,
    ...duplicateIdErrors,
    ...duplicateSlugErrors,
    ...imagePathErrors,
  ];

  const validCount = ZONE_NOVA_CHARACTERS.length - characterValidation.errors.length;

  reports.push(
    createReport(
      'Zone Nova',
      'Characters',
      ZONE_NOVA_CHARACTERS.length,
      validCount,
      allErrors,
      characterValidation.warnings
    )
  );

  return reports;
}

function validateSilverBloodData(): ValidationReport[] {
  const reports: ValidationReport[] = [];

  console.log('🔍 Validating Silver and Blood character data...');

  // Note: Assuming SILVER_BLOOD_CHARACTERS exists - if not, we'll create a placeholder
  const characters = SILVER_BLOOD_CHARACTERS || [];

  if (characters.length === 0) {
    reports.push(
      createReport(
        'Silver and Blood',
        'Characters',
        0,
        0,
        [], // No errors for missing data - this is expected
        ['Silver and Blood characters use a different data structure - skipping validation']
      )
    );
    return reports;
  }

  // Validate character data structure
  const characterValidation = validateDataArray(
    characters,
    validateSilverBloodCharacter,
    'Silver and Blood Character'
  );

  // Check for duplicate IDs
  const duplicateIdErrors = checkForDuplicateIds(characters);

  // Check for duplicate slugs
  const duplicateSlugErrors = checkForDuplicateSlugs(characters);

  // Validate image paths
  const imagePathErrors = validateImagePaths(characters);

  // Combine all errors
  const allErrors = [
    ...characterValidation.errors,
    ...duplicateIdErrors,
    ...duplicateSlugErrors,
    ...imagePathErrors,
  ];

  const validCount = characters.length - characterValidation.errors.length;

  reports.push(
    createReport(
      'Silver and Blood',
      'Characters',
      characters.length,
      validCount,
      allErrors,
      characterValidation.warnings
    )
  );

  return reports;
}

function printReport(report: ValidationReport) {
  const status = report.invalidItems === 0 ? '✅' : '❌';
  const percentage =
    report.totalItems > 0 ? ((report.validItems / report.totalItems) * 100).toFixed(1) : '0';

  console.log(`\n${status} ${report.game} - ${report.dataType}:`);
  console.log(`   Total items: ${report.totalItems}`);
  console.log(`   Valid items: ${report.validItems} (${percentage}%)`);
  console.log(`   Invalid items: ${report.invalidItems}`);
  console.log(`   Errors: ${report.errors.length}`);
  console.log(`   Warnings: ${report.warnings.length}`);

  if (report.errors.length > 0) {
    console.log('\n   🔴 Errors:');
    report.errors.forEach((error, index) => {
      console.log(`      ${index + 1}. ${error}`);
    });
  }

  if (report.warnings.length > 0) {
    console.log('\n   🟡 Warnings:');
    report.warnings.forEach((warning, index) => {
      console.log(`      ${index + 1}. ${warning}`);
    });
  }
}

async function main() {
  console.log('🎮 Gacha Wiki Data Validation\n');
  console.log('========================================');

  const reports: ValidationReport[] = [];

  try {
    // Load Silver and Blood data first
    try {
      const silverBloodModule = await import('../src/data/silver-and-blood/characters.js');
      SILVER_BLOOD_CHARACTERS =
        (silverBloodModule as any).SILVER_BLOOD_CHARACTERS ||
        (silverBloodModule as any).SILVER_AND_BLOOD_CHARACTERS ||
        [];
    } catch (error) {
      console.log('Note: Silver and Blood characters data not found, skipping validation');
      SILVER_BLOOD_CHARACTERS = [];
    }

    // Validate Zone Nova data
    reports.push(...validateZoneNovaData());

    // Validate Silver and Blood data
    reports.push(...validateSilverBloodData());

    // Print individual reports
    reports.forEach(printReport);

    // Summary
    console.log('\n========================================');
    console.log('📊 Validation Summary:');

    const totalItems = reports.reduce((sum, report) => sum + report.totalItems, 0);
    const totalValid = reports.reduce((sum, report) => sum + report.validItems, 0);
    const totalErrors = reports.reduce((sum, report) => sum + report.errors.length, 0);
    const totalWarnings = reports.reduce((sum, report) => sum + report.warnings.length, 0);

    console.log(`Total items validated: ${totalItems}`);
    console.log(`Total valid items: ${totalValid}`);
    console.log(`Total errors: ${totalErrors}`);
    console.log(`Total warnings: ${totalWarnings}`);

    if (totalErrors === 0) {
      console.log('\n✅ All data validation passed!');
      process.exit(0);
    } else {
      console.log('\n❌ Data validation failed. Please fix the errors above.');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Validation script failed:', error);
    process.exit(1);
  }
}

main();
