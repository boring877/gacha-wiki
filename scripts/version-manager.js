#!/usr/bin/env node

/**
 * Automated Version Management System
 * Handles version bumping, git tagging, and changelog updates
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
  changelog: path.join(projectRoot, 'src/data/changelog.js'),
};

/**
 * Get current version from package.json
 */
function getCurrentVersion() {
  const packageJson = JSON.parse(fs.readFileSync(FILES_TO_UPDATE.packageJson, 'utf8'));
  return packageJson.version;
}

/**
 * Increment version based on type
 */
function incrementVersion(currentVersion, type) {
  const [major, minor, patch] = currentVersion.split('.').map(Number);

  switch (type) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'patch':
    default:
      return `${major}.${minor}.${patch + 1}`;
  }
}

/**
 * Update package.json version
 */
function updatePackageJson(newVersion) {
  const packagePath = FILES_TO_UPDATE.packageJson;
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  packageJson.version = newVersion;
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log(`✅ Updated package.json to version ${newVersion}`);
}

/**
 * Get current date in YYYY-MM-DD format
 */
function getCurrentDate() {
  return new Date().toISOString().split('T')[0];
}

/**
 * Add new changelog entry
 */
function updateChangelog(newVersion, type) {
  const changelogPath = FILES_TO_UPDATE.changelog;
  const content = fs.readFileSync(changelogPath, 'utf8');

  // Find the export const changelog = [ line
  const exportLine = 'export const changelog = [';
  const exportIndex = content.indexOf(exportLine);

  if (exportIndex === -1) {
    throw new Error('Could not find changelog export in changelog.js');
  }

  const beforeExport = content.substring(0, exportIndex + exportLine.length);
  const afterExport = content.substring(exportIndex + exportLine.length);

  // Create new changelog entry
  const newEntry = `
  {
    version: '${newVersion}',
    date: '${getCurrentDate()}',
    type: '${type}',
    title: 'Version ${newVersion}',
    description: 'Automated version bump - please update with actual changes',
    changes: [
      {
        type: 'improved',
        category: 'version',
        description: 'Version bump via automated system - please update with actual changes',
      },
    ],
  },`;

  const updatedContent = beforeExport + newEntry + afterExport;
  fs.writeFileSync(changelogPath, updatedContent);
  console.log(`✅ Added changelog entry for version ${newVersion}`);
}

/**
 * Check if git working directory is clean
 */
function checkGitStatus() {
  try {
    const output = execSync('git status --porcelain', { encoding: 'utf8' });
    return output.trim() === '';
  } catch (error) {
    console.error('❌ Error checking git status:', error.message);
    return false;
  }
}

/**
 * Create git tag for version
 */
function createGitTag(version) {
  try {
    const tagName = `v${version}`;

    // Check if tag already exists
    try {
      execSync(`git rev-parse --verify ${tagName}`, { stdio: 'ignore' });
      console.log(`⚠️  Tag ${tagName} already exists, skipping tag creation`);
      return;
    } catch {
      // Tag doesn't exist, proceed to create it
    }

    execSync(`git tag ${tagName}`, { stdio: 'inherit' });
    console.log(`✅ Created git tag: ${tagName}`);
  } catch (error) {
    console.error('❌ Error creating git tag:', error.message);
    throw error;
  }
}

/**
 * Commit version changes
 */
function commitVersionChanges(newVersion) {
  try {
    execSync('git add package.json src/data/changelog.js', { stdio: 'inherit' });

    const commitMessage = `chore: bump version to ${newVersion}

Automated version bump with changelog entry.

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>`;

    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
    console.log(`✅ Committed version bump to ${newVersion}`);
  } catch (error) {
    console.error('❌ Error committing changes:', error.message);
    throw error;
  }
}

/**
 * Check for missing tags and create them
 */
function createMissingTags() {
  try {
    // Get all version commits
    const commits = execSync(
      'git log --oneline --grep="chore: bump version to" --grep="chore: version"',
      { encoding: 'utf8' }
    )
      .trim()
      .split('\n')
      .filter(line => line.trim());

    const existingTags = execSync('git tag --list', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(tag => tag.trim());

    console.log('🔍 Checking for missing tags...');

    commits.forEach(commit => {
      const match = commit.match(/chore: (?:bump )?version to (\d+\.\d+\.\d+)/);
      if (match) {
        const version = match[1];
        const tagName = `v${version}`;
        const commitHash = commit.split(' ')[0];

        if (!existingTags.includes(tagName)) {
          try {
            execSync(`git tag ${tagName} ${commitHash}`, { stdio: 'inherit' });
            console.log(`✅ Created missing tag: ${tagName} for commit ${commitHash}`);
          } catch (error) {
            console.log(`⚠️  Could not create tag ${tagName}: ${error.message}`);
          }
        }
      }
    });
  } catch (error) {
    console.error('❌ Error creating missing tags:', error.message);
  }
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  console.log('🚀 GachaWiki Version Manager\n');

  if (command === '--help' || command === '-h') {
    console.log(`Usage:
  node scripts/version-manager.js patch    # Bump patch version (2.7.8 -> 2.7.9)
  node scripts/version-manager.js minor    # Bump minor version (2.7.8 -> 2.8.0)
  node scripts/version-manager.js major    # Bump major version (2.7.8 -> 3.0.0)
  node scripts/version-manager.js --tag-only        # Create tag for current version
  node scripts/version-manager.js --check-missing   # Check and create missing tags
`);
    return;
  }

  const currentVersion = getCurrentVersion();
  console.log(`📦 Current version: ${currentVersion}`);

  if (command === '--tag-only') {
    createGitTag(currentVersion);
    return;
  }

  if (command === '--check-missing') {
    createMissingTags();
    return;
  }

  if (!['patch', 'minor', 'major'].includes(command)) {
    console.error('❌ Invalid command. Use: patch, minor, major, --tag-only, or --check-missing');
    process.exit(1);
  }

  // Check if git working directory is clean
  if (!checkGitStatus()) {
    console.error('❌ Git working directory is not clean. Please commit or stash changes first.');
    process.exit(1);
  }

  const newVersion = incrementVersion(currentVersion, command);
  console.log(`📈 New version: ${newVersion}\n`);

  try {
    // Update files
    updatePackageJson(newVersion);
    updateChangelog(newVersion, command);

    // Commit changes
    commitVersionChanges(newVersion);

    // Create git tag
    createGitTag(newVersion);

    console.log(`\n🎉 Version ${newVersion} ready!`);
    console.log(`\n📝 Next steps:`);
    console.log(`   1. Update the changelog entry in src/data/changelog.js with actual changes`);
    console.log(`   2. Run: git push origin main`);
    console.log(`   3. Run: git push origin --tags`);
  } catch (error) {
    console.error('❌ Version bump failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { getCurrentVersion, incrementVersion, createGitTag, createMissingTags };
