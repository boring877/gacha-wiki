# GachaWiki Automated Version Management

This system automatically handles version bumping, changelog updates, and git
tagging for the GachaWiki project.

## Features

✅ **Automated Version Bumping**: Updates package.json version ✅ **Changelog
Integration**: Adds entries to src/data/changelog.js ✅ **Git Tagging**: Creates
git tags automatically ✅ **Missing Tag Detection**: Finds and creates missing
tags for past versions ✅ **Git Hooks**: Automatic processing via post-commit
hooks

## Usage

### Version Bumping

```bash
# Patch version (2.7.8 -> 2.7.9)
bun run version:patch

# Minor version (2.7.8 -> 2.8.0)
bun run version:minor

# Major version (2.7.8 -> 3.0.0)
bun run version:major
```

### Manual Operations

```bash
# Create tag for current version
bun run version:tag

# Check and create missing tags
bun run version:check-tags

# Direct script usage
node scripts/version-manager.js patch
node scripts/version-manager.js --help
```

## Workflow

1. **Automatic Process**:

   ```bash
   bun run version:patch
   ```

   - Updates package.json version
   - Adds changelog entry (needs manual editing)
   - Commits changes
   - Creates git tag
   - Shows next steps

2. **Manual Steps**:
   - Edit the changelog entry in `src/data/changelog.js` with actual changes
   - Push changes: `git push origin main`
   - Push tags: `git push origin --tags`

## Git Hooks

The system includes a `post-commit` hook that:

- Detects version bump commits
- Automatically creates corresponding git tags
- Checks for and creates any missing tags from previous commits

## Files Updated

- `package.json` - Version number
- `src/data/changelog.js` - Changelog entries
- Git tags - Created automatically

## About Page Integration

The about page automatically displays version history from the changelog.js
file, so no manual updates are needed there.

## Troubleshooting

### Git Working Directory Not Clean

```bash
git status
# Commit or stash changes first
git add . && git commit -m "your changes"
```

### Missing Tags

```bash
bun run version:check-tags
```

### Hook Not Working

```bash
chmod +x .git/hooks/post-commit
```

## Benefits

- ✅ **No More Manual Tag Creation**: Tags are created automatically
- ✅ **Consistent Versioning**: Follows semver automatically
- ✅ **About Page Always Updated**: Changelog system keeps it current
- ✅ **Error Prevention**: Checks for clean git state before changes
- ✅ **Comprehensive**: Handles past versions and missing tags
