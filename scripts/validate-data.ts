#!/usr/bin/env bun

// Simplified data validation script - basic checks only
import { ZONE_NOVA_CHARACTERS } from '../src/data/zone-nova/characters.js';

interface ValidationReport {
  game: string;
  dataType: string;
  totalItems: number;
  errors: string[];
  warnings: string[];
}

// Basic validation functions
function validateBasicStructure(item: any, type: string): string[] {
  const errors: string[] = [];

  if (!item.id) {
    errors.push(`${type}: Missing required 'id' field`);
  }

  if (!item.name) {
    errors.push(`${type}: Missing required 'name' field`);
  }

  return errors;
}

function checkForDuplicateIds(items: any[]): string[] {
  const ids = items.map(item => item.id).filter(Boolean);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);

  return duplicates.length > 0
    ? [`Duplicate IDs found: ${[...new Set(duplicates)].join(', ')}`]
    : [];
}

function validateZoneNovaData(): ValidationReport {
  console.log('🔍 Validating Zone Nova character data...');

  const errors: string[] = [];
  const warnings: string[] = [];

  // Basic structure validation
  ZONE_NOVA_CHARACTERS.forEach((character, index) => {
    const itemErrors = validateBasicStructure(character, `Character ${index + 1}`);
    errors.push(...itemErrors);
  });

  // Check for duplicate IDs
  const duplicateErrors = checkForDuplicateIds(ZONE_NOVA_CHARACTERS);
  errors.push(...duplicateErrors);

  return {
    game: 'Zone Nova',
    dataType: 'Characters',
    totalItems: ZONE_NOVA_CHARACTERS.length,
    errors,
    warnings,
  };
}

function printReport(report: ValidationReport) {
  const status = report.errors.length === 0 ? '✅' : '❌';

  console.log(`\n${status} ${report.game} - ${report.dataType}:`);
  console.log(`   Total items: ${report.totalItems}`);
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
  console.log('🎮 Gacha Wiki Data Validation (Basic)\n');
  console.log('========================================');

  try {
    // Validate Zone Nova data
    const report = validateZoneNovaData();
    printReport(report);

    // Summary
    console.log('\n========================================');
    console.log('📊 Validation Summary:');
    console.log(`Total items validated: ${report.totalItems}`);
    console.log(`Total errors: ${report.errors.length}`);
    console.log(`Total warnings: ${report.warnings.length}`);

    if (report.errors.length === 0) {
      console.log('\n✅ Basic data validation passed!');
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
