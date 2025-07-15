# Gacha Wiki Project Memory

## Project Overview

- **Type**: Astro static site with Vercel deployment
- **Package Manager**: Bun (v1.2.14)
- **Languages**: TypeScript, Astro, CSS
- **Site**: https://gachawiki.info
- **Focus**: Game guides and information for gacha games

## Technology Stack

- **Framework**: Astro 5.10.0
- **Build Tool**: Bun
- **Deployment**: Vercel with static output
- **Styling**: CSS (organized by game/component)
- **Libraries**: GSAP (animations), Chart.js (charts)

## Development Commands

- `bun run dev` - Start development server
- `bun run dev:setup` - Setup and start dev server
- `bun run build` - Build with type checking
- `bun run build:prod` - Production build with optimization
- `bun run build:analyze` - Build with bundle analysis
- `bun run check` - Run Astro type checking
- `bun run compress` - Compress assets
- `bun run optimize-images` - Optimize images

## Project Structure

```
src/
├── components/           # Reusable Astro components
├── data/                # Game data and content
│   ├── silver-and-blood/ # Silver and Blood game data
│   └── zone-nova/       # Zone Nova game data
├── layouts/             # Page layouts
├── pages/               # Routes and pages
├── styles/              # CSS organized by game/component
├── scripts/             # Build and utility scripts
└── templates/           # Templates for new content
```

## Games Covered

1. **Zone Nova** - Main focus, extensive character/memory guides
2. **Silver and Blood** - Character guides, damage mechanics, events

## Coding Standards

- Use TypeScript for all logic
- Astro components for UI
- CSS organized by game (zn-_, sab-_ prefixes)
- 2-space indentation
- Component-based architecture
- Optimize images and assets
- Static site generation preferred

## Common File Patterns

- Character data: `src/data/{game}/characters/{character-name}.js`
- Character pages: `src/pages/guides/{game}/characters/{character-name}.astro`
- Styles: `src/styles/games/{game}/{feature}.css`
- Layouts: `src/layouts/{game}/{purpose}Layout.astro`

## Development Workflow

1. Use Bun for all package management
2. Type check with `bun run check` before building
3. Test locally with `bun run dev`
4. Build with `bun run build:prod` for production
5. Compress assets when needed

## Performance Optimizations

- CSS code splitting enabled
- Manual chunks for vendor libraries
- Asset compression scripts
- Image optimization pipeline
- Prefetch links for better navigation

## Content Management

- Game data stored in structured JS files
- Templates available for new content
- Consistent naming conventions
- SEO optimization built-in

## Common Tasks

- Adding new characters: Use templates in `src/templates/`
- Updating game data: Edit files in `src/data/`
- Styling changes: Use game-specific CSS files
- Performance: Run analyze script to check bundle size
