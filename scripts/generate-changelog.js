/**
 * Automated Changelog Generator
 *
 * This script automatically generates changelog entries from git commits
 * and updates the changelog.js file with new version information.
 *
 * Features:
 * - Parses git commits since last version tag
 * - Categorizes changes based on commit message patterns
 * - Automatically determines version bump type (major/minor/patch)
 * - Updates changelog.js with new entries
 * - Maintains existing changelog format
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Configuration for commit message parsing
const COMMIT_PATTERNS = {
  // Breaking changes (major version bump)
  major: [/^BREAKING\s*CHANGE:/i, /^feat!:/i, /^fix!:/i, /^refactor!:/i],

  // New features (minor version bump)
  minor: [
    /^feat:/i,
    /^feature:/i,
    /^add:/i,
    /^added:/i,
    /new\s+(feature|system|component)/i,
    /implement/i,
  ],

  // Bug fixes and patches (patch version bump)
  patch: [/^fix:/i, /^bugfix:/i, /^hotfix:/i, /fix(ed|es)?\s+(bug|issue|problem)/i, /resolve/i],

  // Changes that don't bump version
  maintenance: [
    /^docs?:/i,
    /^style:/i,
    /^refactor:/i,
    /^test:/i,
    /^chore:/i,
    /clean\s*up/i,
    /format/i,
    /lint/i,
  ],
};

// Change type categorization
const CHANGE_CATEGORIES = {
  added: [
    /^feat:/i,
    /^add:/i,
    /^added:/i,
    /new\s+(feature|system|component|page|section)/i,
    /implement/i,
    /create/i,
  ],

  changed: [
    /^refactor:/i,
    /^update:/i,
    /^improve:/i,
    /enhance/i,
    /reorganize/i,
    /restructure/i,
    /redesign/i,
  ],

  fixed: [
    /^fix:/i,
    /^bugfix:/i,
    /^hotfix:/i,
    /fix(ed|es)?\s+(bug|issue|problem)/i,
    /resolve/i,
    /correct/i,
  ],

  removed: [/^remove:/i, /^delete:/i, /^rm:/i, /remov(e|ed|es)/i, /delet(e|ed|es)/i],

  security: [/^security:/i, /security\s+(fix|update|patch)/i, /vulnerabilit/i],
};

// Content categorization based on commit message
const CONTENT_CATEGORIES = {
  'Zone Nova': [/zone.nova/i, /zn[^a-z]/i, /zonenova/i],
  'Silver and Blood': [/silver.and.blood/i, /sab[^a-z]/i, /silver/i, /blood/i],
  Characters: [/character/i, /char[^a-z]/i, /odin/i, /penny/i, /belle/i, /mamon/i],
  Navigation: [/nav/i, /header/i, /menu/i, /link/i],
  Mobile: [/mobile/i, /responsive/i, /tablet/i],
  CSS: [/css/i, /style/i, /styling/i],
  Clock: [/clock/i, /timer/i, /time/i],
  Performance: [/performance/i, /optimization/i, /optimize/i, /speed/i],
  Database: [/database/i, /data/i, /db[^a-z]/i],
  'UI/UX': [/ui[^a-z]/i, /ux[^a-z]/i, /design/i, /layout/i],
  Build: [/build/i, /deploy/i, /production/i, /bundl/i],
  Dependencies: [/package/i, /dependency/i, /npm/i, /bun/i, /install/i],
};

class ChangelogGenerator {
  constructor() {
    this.packagePath = join(process.cwd(), 'package.json');
    this.changelogPath = join(process.cwd(), 'src', 'data', 'changelog.js');
  }

  /**
   * Get current version from package.json
   */
  getCurrentVersion() {
    try {
      const packageData = JSON.parse(readFileSync(this.packagePath, 'utf8'));
      return packageData.version;
    } catch (error) {
      console.error('Error reading package.json:', error);
      return '1.0.0';
    }
  }

  /**
   * Get last version tag from git
   */
  getLastVersionTag() {
    try {
      const tags = execSync('git tag --sort=-version:refname', { encoding: 'utf8' }).trim();
      if (!tags) return null;
      return tags.split('\n')[0];
    } catch (error) {
      console.log('No previous version tags found');
      return null;
    }
  }

  /**
   * Get commits since last version tag
   */
  getCommitsSinceLastVersion() {
    const lastTag = this.getLastVersionTag();
    let gitCommand;

    if (lastTag) {
      gitCommand = `git log ${lastTag}..HEAD --pretty=format:"%h|%ad|%s|%an" --date=short`;
    } else {
      gitCommand = 'git log --pretty=format:"%h|%ad|%s|%an" --date=short -10';
    }

    try {
      const output = execSync(gitCommand, { encoding: 'utf8' }).trim();
      if (!output) return [];

      return output.split('\n').map(line => {
        const [hash, date, message, author] = line.split('|');
        return { hash, date, message, author };
      });
    } catch (error) {
      console.error('Error getting commits:', error);
      return [];
    }
  }

  /**
   * Determine version bump type based on commits
   */
  determineVersionBump(commits) {
    for (const commit of commits) {
      // Check for major version patterns
      if (COMMIT_PATTERNS.major.some(pattern => pattern.test(commit.message))) {
        return 'major';
      }
    }

    for (const commit of commits) {
      // Check for minor version patterns
      if (COMMIT_PATTERNS.minor.some(pattern => pattern.test(commit.message))) {
        return 'minor';
      }
    }

    for (const commit of commits) {
      // Check for patch version patterns
      if (COMMIT_PATTERNS.patch.some(pattern => pattern.test(commit.message))) {
        return 'patch';
      }
    }

    // Default to patch if no specific patterns found but there are commits
    return commits.length > 0 ? 'patch' : null;
  }

  /**
   * Calculate next version number
   */
  calculateNextVersion(currentVersion, bumpType) {
    const [major, minor, patch] = currentVersion.split('.').map(Number);

    switch (bumpType) {
      case 'major':
        return `${major + 1}.0.0`;
      case 'minor':
        return `${major}.${minor + 1}.0`;
      case 'patch':
        return `${major}.${minor}.${patch + 1}`;
      default:
        return currentVersion;
    }
  }

  /**
   * Categorize a commit message
   */
  categorizeCommit(message) {
    // Determine change type
    let changeType = 'changed'; // default
    for (const [type, patterns] of Object.entries(CHANGE_CATEGORIES)) {
      if (patterns.some(pattern => pattern.test(message))) {
        changeType = type;
        break;
      }
    }

    // Determine content category
    let category = 'General'; // default
    for (const [cat, patterns] of Object.entries(CONTENT_CATEGORIES)) {
      if (patterns.some(pattern => pattern.test(message))) {
        category = cat;
        break;
      }
    }

    return { type: changeType, category };
  }

  /**
   * Generate changelog entry from commits
   */
  generateChangelogEntry(commits, version, bumpType) {
    if (!commits.length) return null;

    const latestCommit = commits[0];
    const changes = commits.map(commit => {
      const { type, category } = this.categorizeCommit(commit.message);

      // Clean up commit message for description
      let description = commit.message
        .replace(/^(feat|fix|add|remove|update|refactor|docs?|style|test|chore):\s*/i, '')
        .replace(/^(added?|fixed?|removed?|updated?)?\s*/i, '')
        .trim();

      // Capitalize first letter
      description = description.charAt(0).toUpperCase() + description.slice(1);

      return {
        type,
        category,
        description,
      };
    });

    // Generate title based on main changes
    const mainCategories = [...new Set(changes.map(c => c.category))];
    const title = this.generateVersionTitle(mainCategories, bumpType);

    return {
      version,
      date: latestCommit.date,
      type: bumpType,
      title,
      description: this.generateVersionDescription(changes),
      changes,
      author: latestCommit.author,
    };
  }

  /**
   * Generate version title
   */
  generateVersionTitle(categories, bumpType) {
    if (categories.length === 1) {
      return `${categories[0]} ${bumpType === 'major' ? 'Major Update' : 'Improvements'}`;
    } else if (categories.length <= 3) {
      return `${categories.join(' & ')} Updates`;
    } else {
      return `Multi-Platform ${bumpType === 'major' ? 'Major Release' : 'Updates'}`;
    }
  }

  /**
   * Generate version description
   */
  generateVersionDescription(changes) {
    const typeGroups = changes.reduce((acc, change) => {
      if (!acc[change.type]) acc[change.type] = [];
      acc[change.type].push(change);
      return acc;
    }, {});

    const descriptions = [];
    if (typeGroups.added) descriptions.push(`Added ${typeGroups.added.length} new features`);
    if (typeGroups.fixed) descriptions.push(`Fixed ${typeGroups.fixed.length} issues`);
    if (typeGroups.changed) descriptions.push(`Improved ${typeGroups.changed.length} components`);
    if (typeGroups.removed) descriptions.push(`Removed ${typeGroups.removed.length} items`);

    return descriptions.join(', ') || 'Various improvements and updates';
  }

  /**
   * Read existing changelog
   */
  readExistingChangelog() {
    try {
      const content = readFileSync(this.changelogPath, 'utf8');

      // Extract the changelog array from the file
      const arrayMatch = content.match(/export const changelog = (\[[\s\S]*?\]);/);
      if (arrayMatch) {
        // Use eval to parse the array (be careful - this assumes trusted content)
        // In production, you might want to use a proper JS parser
        const arrayStr = arrayMatch[1];
        return eval(`(${arrayStr})`);
      }

      return [];
    } catch (error) {
      console.error('Error reading existing changelog:', error);
      return [];
    }
  }

  /**
   * Write updated changelog
   */
  writeChangelog(changelogData) {
    const template = `// Changelog Data Structure
// Version history and update logs for the GachaWiki site
// This file is automatically generated - do not edit manually

export const changelog = ${JSON.stringify(changelogData, null, 2).replace(/"([^"]+)":/g, '$1:')};

// Helper functions for changelog data
export const getLatestVersion = () => changelog[0];

export const getVersionsByType = (type) => {
  return changelog.filter(entry => entry.type === type);
};

export const getChangesByCategory = (category) => {
  const changes = [];
  changelog.forEach(version => {
    version.changes.forEach(change => {
      if (change.category === category) {
        changes.push({
          ...change,
          version: version.version,
          date: version.date
        });
      }
    });
  });
  return changes;
};

export const getChangesByType = (type) => {
  const changes = [];
  changelog.forEach(version => {
    version.changes.forEach(change => {
      if (change.type === type) {
        changes.push({
          ...change,
          version: version.version,
          date: version.date
        });
      }
    });
  });
  return changes;
};

// Get build info
export const getBuildInfo = () => {
  const latest = getLatestVersion();
  return {
    version: latest.version,
    buildDate: latest.date,
    totalVersions: changelog.length,
    lastUpdated: new Date().toISOString().split('T')[0]
  };
};

export default changelog;
`;

    writeFileSync(this.changelogPath, template, 'utf8');
  }

  /**
   * Update package.json version
   */
  updatePackageVersion(newVersion) {
    try {
      const packageData = JSON.parse(readFileSync(this.packagePath, 'utf8'));
      packageData.version = newVersion;
      writeFileSync(this.packagePath, JSON.stringify(packageData, null, 2) + '\n', 'utf8');
      console.log(`✅ Updated package.json version to ${newVersion}`);
    } catch (error) {
      console.error('Error updating package.json:', error);
    }
  }

  /**
   * Main generation process
   */
  async generate() {
    console.log('🔄 Generating automated changelog...');

    // Get commits since last version
    const commits = this.getCommitsSinceLastVersion();

    if (!commits.length) {
      console.log('ℹ️  No new commits found since last version');
      return;
    }

    console.log(`📝 Found ${commits.length} new commits`);

    // Determine version bump
    const currentVersion = this.getCurrentVersion();
    const bumpType = this.determineVersionBump(commits);

    if (!bumpType) {
      console.log('ℹ️  No version bump needed (maintenance commits only)');
      return;
    }

    const newVersion = this.calculateNextVersion(currentVersion, bumpType);
    console.log(`🔢 Version bump: ${currentVersion} → ${newVersion} (${bumpType})`);

    // Generate changelog entry
    const newEntry = this.generateChangelogEntry(commits, newVersion, bumpType);

    if (!newEntry) {
      console.log('❌ Failed to generate changelog entry');
      return;
    }

    // Update changelog
    const existingChangelog = this.readExistingChangelog();
    const updatedChangelog = [newEntry, ...existingChangelog];

    this.writeChangelog(updatedChangelog);
    console.log('✅ Updated changelog.js');

    // Update package.json version
    this.updatePackageVersion(newVersion);

    console.log('🎉 Changelog generation complete!');
    console.log(`📦 New version: ${newVersion}`);
    console.log(`📋 Title: ${newEntry.title}`);
    console.log(`📝 Changes: ${newEntry.changes.length} items`);
  }
}

// Run the generator if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const generator = new ChangelogGenerator();
  generator.generate().catch(console.error);
}

export default ChangelogGenerator;
