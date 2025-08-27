#!/usr/bin/env node

/**
 * Simple Version Management System
 * Handles version bumping and git tagging
 *
 * Usage:
 *   node scripts/version-manager.js patch   # 2.7.8 -> 2.7.9
 *   node scripts/version-manager.js minor   # 2.7.8 -> 2.8.0
 *   node scripts/version-manager.js major   # 2.7.8 -> 3.0.0
 *   node scripts/version-manager.js --tag-only  # Just create tag for current version
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Configuration
const FILES_TO_UPDATE = {
  packageJson: path.join(projectRoot, 'package.json'),
};

/**
 * Get current version from package.json
 */
function getCurrentVersion() {
  const packagePath = FILES_TO_UPDATE.packageJson;
  const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  return packageData.version;
}

/**
 * Update version in package.json
 */
function updatePackageVersion(newVersion) {
  const packagePath = FILES_TO_UPDATE.packageJson;
  const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  packageData.version = newVersion;
  fs.writeFileSync(packagePath, JSON.stringify(packageData, null, 2) + '\n');
  console.log(`✅ Updated package.json to version ${newVersion}`);
}

/**
 * Calculate next version based on bump type
 */
function calculateNextVersion(currentVersion, bumpType) {
  const [major, minor, patch] = currentVersion.split('.').map(Number);

  switch (bumpType) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'patch':
      return `${major}.${minor}.${patch + 1}`;
    default:
      throw new Error(`Unknown bump type: ${bumpType}`);
  }
}

/**
 * Create git tag for version
 */
function createGitTag(version) {
  try {
    const tagName = `v${version}`;
    execSync(`git tag "${tagName}" -m "Version ${version}"`, { stdio: 'inherit' });
    console.log(`🏷️  Created git tag: ${tagName}`);
    return true;
  } catch (_error) {
    console.error(`❌ Failed to create git tag: ${_error.message}`);
    return false;
  }
}

/**
 * Check if working directory is clean
 */
function checkWorkingDirectory() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    return status.trim() === '';
  } catch (_error) {
    console.error('❌ Failed to check git status');
    return false;
  }
}

/**
 * Main version bumping function
 */
function bumpVersion(bumpType) {
  console.log(`🔄 Starting ${bumpType} version bump...`);

  // Check git status
  if (!checkWorkingDirectory()) {
    console.error('❌ Working directory is not clean. Commit or stash changes first.');
    process.exit(1);
  }

  // Get current version
  const currentVersion = getCurrentVersion();
  console.log(`📦 Current version: ${currentVersion}`);

  // Calculate new version
  const newVersion = calculateNextVersion(currentVersion, bumpType);
  console.log(`🔢 New version: ${newVersion}`);

  // Update package.json
  updatePackageVersion(newVersion);

  // Stage and commit changes
  try {
    execSync('git add package.json', { stdio: 'inherit' });
    const commitMessage = `chore: bump version to ${newVersion}

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>`;

    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
    console.log(`✅ Committed version bump to ${newVersion}`);
  } catch (_error) {
    console.error('❌ Failed to commit version changes');
    process.exit(1);
  }

  // Create git tag
  createGitTag(newVersion);

  console.log(`🎉 Successfully bumped version to ${newVersion}`);
  console.log(`📝 Next steps:`);
  console.log(`   1. Review the changes`);
  console.log(`   2. Push to repository: git push && git push --tags`);
}

/**
 * Create tag for current version
 */
function tagCurrentVersion() {
  const currentVersion = getCurrentVersion();
  console.log(`🏷️  Creating tag for current version: ${currentVersion}`);

  if (createGitTag(currentVersion)) {
    console.log(`✅ Successfully tagged version ${currentVersion}`);
  } else {
    process.exit(1);
  }
}

/**
 * Main entry point
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Usage: node scripts/version-manager.js [patch|minor|major|--tag-only]');
    process.exit(1);
  }

  const command = args[0];

  switch (command) {
    case 'patch':
    case 'minor':
    case 'major':
      bumpVersion(command);
      break;
    case '--tag-only':
      tagCurrentVersion();
      break;
    default:
      console.error(`Unknown command: ${command}`);
      console.log('Usage: node scripts/version-manager.js [patch|minor|major|--tag-only]');
      process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
