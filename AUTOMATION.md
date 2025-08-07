# 🤖 GachaWiki Automated Changelog System

## Overview

This project uses an automated changelog generation system that tracks all commits and automatically updates the version and changelog when you push code.

## How It Works

### 1. **Local Git Hooks** (Immediate)
- **Post-commit hook** runs after every local commit
- Analyzes commit messages to determine version bump type
- Automatically generates changelog entries
- Creates git tags for new versions

### 2. **GitHub Actions** (On Push)
- Triggers when you push to `main` branch
- Runs changelog generation on GitHub servers
- Commits and pushes changelog updates back to repo
- Creates release tags automatically

## Commit Message Patterns

The system analyzes your commit messages to determine:

### Version Bump Types:
- **Major** (x.0.0): `BREAKING CHANGE:`, `feat!:`, `fix!:`
- **Minor** (x.y.0): `feat:`, `add:`, `new feature`, `implement`
- **Patch** (x.y.z): `fix:`, `bugfix:`, `hotfix:`, `resolve`

### Change Categories:
- **added**: `feat:`, `add:`, `new`, `implement`, `create`
- **changed**: `refactor:`, `update:`, `improve:`, `enhance`
- **fixed**: `fix:`, `bugfix:`, `resolve`, `correct`
- **removed**: `remove:`, `delete:`, `rm:`

### Content Categories:
- **Zone Nova**: `zone nova`, `zn`, mentions of characters
- **Silver and Blood**: `silver and blood`, `sab`
- **Mobile**: `mobile`, `responsive`, `tablet`
- **SEO**: `seo`, `search`, `meta`
- **UI/UX**: `ui`, `ux`, `design`, `layout`

## Usage Examples

### Good Commit Messages:
```bash
feat: add Zone Nova tier list system with 5 specialized lists
fix: resolve character card alignment issues on mobile
improve: enhance SEO with targeted keywords for better visibility
refactor: optimize CSS structure and remove unused properties
```

### Skip Automation:
```bash
docs: update README [skip-changelog]
```

## Available Commands

```bash
# Manual changelog generation
bun run changelog:generate

# Automatic mode (used by hooks)
bun run changelog:auto

# Manual mode with prompts
bun run changelog:manual

# Quick version commands
bun run version:patch
bun run version:minor
bun run version:major
```

## File Structure

```
scripts/
├── generate-changelog.js    # Main changelog generator
├── version-manager.js       # Version management utilities
└── setup-automation.js     # Setup script

.git/hooks/
└── post-commit             # Local automation hook

.github/workflows/
└── auto-changelog.yml      # GitHub Actions workflow

src/data/
└── changelog.js            # Generated changelog data
```

## Benefits

✅ **Never forget to update changelog**
✅ **Consistent version numbering**
✅ **Automatic git tagging**
✅ **Proper semantic versioning**
✅ **Clean commit history**
✅ **Easy rollbacks with tags**

## Configuration

The system is pre-configured and will work automatically. To customize:

1. **Edit patterns** in `scripts/generate-changelog.js`
2. **Modify version logic** in the `ChangelogGenerator` class
3. **Update GitHub Actions** in `.github/workflows/auto-changelog.yml`

## Troubleshooting

### Changelog not generating?
- Check commit message follows patterns above
- Ensure Git hooks are executable: `chmod +x .git/hooks/post-commit`
- Run manually: `bun run changelog:generate`

### Version not updating?
- Verify `package.json` permissions
- Check for merge conflicts in changelog files
- Use `[skip-changelog]` flag to prevent automation

### GitHub Actions failing?
- Check repository secrets and permissions
- Ensure `GITHUB_TOKEN` has write access
- Review workflow logs in Actions tab

## Examples in Action

When you commit:
```bash
git add .
git commit -m "feat: add comprehensive Zone Nova tier list with mobile support"
git push origin main
```

The system automatically:
1. 🔍 Analyzes: "feat" = minor version bump
2. 📝 Generates: changelog entry with proper categorization  
3. 🔢 Bumps: version from 2.7.9 → 2.8.0
4. 🏷️ Tags: creates `v2.8.0` git tag
5. 📤 Pushes: changelog commit to repository

You can see the results at `/about` on your website!