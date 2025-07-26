# Claude Code Instructions

## Protected Files - DO NOT MODIFY

### Critical Layout Files
- `src/styles/games/silver-and-blood/sab-layout.css` - PROTECTED: Core SAB layout used across entire section
  - Any changes affect ALL SAB pages
  - For specific styling needs, create separate CSS files
  - Last protected: 2025-07-26

## Development Guidelines

### CSS Organization
- Keep game-specific layouts separate and protected
- Use specific CSS files for individual pages/components
- Avoid modifying core layout files unless absolutely critical

### Footer Issues
- When fixing footer problems, identify the root cause first
- Ask for clarification on specific issues before making changes
- Consider page-specific solutions over layout modifications

## SAB Landing Page Structure

### Data Sources
- `src/data/silver-and-blood/silver-and-blood.js` - Central data file for SAB section
  - Contains: meta info, gameInfo (description, playUrl, lastUpdated), guides array
  - All content should come from this file, not hardcoded in Astro

### Template Comments Guide
- **Game Overview Section**: Uses `gameInfo.description` for story content
- **Play Button**: Uses `gameInfo.playUrl` 
- **Last Updated**: Uses `gameInfo.lastUpdated`
- **Resources Section**: Maps through `guides` array from data file
- **Guide Cards**: Each uses `guide.emoji`, `guide.title`, `guide.description`, `guide.url`

### Maintenance Notes
- Keep content in data files, not hardcoded in templates
- Comments should explain data source and purpose
- Avoid redundant conditional checks if data is always valid