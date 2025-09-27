# Gacha Wiki Project Memory

## Project Overview

- **Type**: Astro static site with Vercel deployment
- **Package Manager**: Bun (v1.2.21)
- **Languages**: TypeScript, Astro, CSS
- **Site**: https://gachawiki.info
- **Focus**: Game guides and information for gacha games
- **Version**: 2.9.9

## Technology Stack

- **Framework**: Astro 5.13.2 (SSG - Static Site Generation)
- **Build Tool**: Bun
- **Deployment**: Vercel with static output
- **Rendering**: SSG (Static Site Generation) - All pages pre-built at build
  time
- **Styling**: CSS (organized by game/component)
- **Linting**: ESLint v9 (flat config), Prettier

## Development Commands

- `bun run dev` - Start development server
- `bun run dev:setup` - Setup and start dev server
- `bun run build` - Build with type checking
- `bun run build:prod` - Production build with optimization
- `bun run build:analyze` - Build with bundle analysis
- `bun run check` - Run Astro type checking
- `bun run compress` - Compress assets
- `bun run optimize-images` - Optimize images
- `bun run lint` - Run ESLint on JS/TS files
- `bun run lint:fix` - Run ESLint with auto-fix
- `bun run format` - Format code with Prettier
- `bun run format:check` - Check code formatting
- `bun run validate` - Validate data files
- `bun run version:patch` - Bump patch version
- `bun run version:minor` - Bump minor version
- `bun run version:major` - Bump major version

## Project Structure

```
src/
├── components/           # Reusable Astro components
├── data/                # Game data and content
│   ├── horizon-walker/   # Horizon Walker game data
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
3. **Horizon Walker** - Character guides and database system

## Coding Standards

- Use TypeScript for all logic
- Astro components for UI
- CSS organized by game (zn-_, sab-_, hw-\_ prefixes)
- 2-space indentation
- Component-based architecture
- Optimize images and assets
- Static site generation (SSG) only - no SSR
- ESLint v9 flat config for linting
- Prettier for code formatting
- Lint-staged for pre-commit hooks
- Client-side state managed via sessionStorage for filters/sorting

## Common File Patterns

- Character data: `src/data/{game}/characters/{character-name}.js`
- Character pages: `src/pages/guides/{game}/characters/{character-name}.astro`
- Styles: `src/styles/games/{game}/{feature}.css`
- Layouts: `src/layouts/{game}/{purpose}Layout.astro`

## Development Workflow

1. Use Bun for all package management
2. Lint code with `bun run lint` and format with `bun run format`
3. Type check with `bun run check` before building
4. Test locally with `bun run dev`
5. Build with `bun run build:prod` for production
6. Compress assets when needed

## Performance Optimizations

- CSS code splitting enabled
- Manual chunks for vendor libraries
- Asset compression scripts
- Image optimization pipeline
- Prefetch links for better navigation
- SSG pre-builds all pages at build time
- Client-side navigation with prefetching
- Lazy loading for images and heavy components

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
