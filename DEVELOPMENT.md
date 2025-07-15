# Gacha Wiki Development Guide

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ (configured in `.nvmrc`)
- Bun package manager (faster than npm/yarn)
- Git

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/boring877/gacha-wiki.git
cd gacha-wiki

# Install dependencies
bun install

# Start development server
bun run dev
```

## 📁 Project Structure

```
gacha-wiki/
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── zone-nova/     # Zone Nova specific components
│   │   └── silver-and-blood/ # Silver and Blood specific components
│   ├── data/              # Game data and content
│   │   ├── zone-nova/     # Zone Nova game data
│   │   └── silver-and-blood/ # Silver and Blood game data
│   ├── layouts/           # Page layouts
│   ├── pages/             # Routes and pages
│   ├── styles/            # CSS organized by game/component
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Shared utility functions
│   └── templates/         # Templates for new content
├── scripts/               # Build and utility scripts
├── public/                # Static assets
└── .github/               # GitHub Actions and templates
```

## 🛠️ Development Scripts

### Core Commands

```bash
# Development
bun run dev              # Start dev server
bun run dev:setup        # Setup and start dev server

# Building
bun run build            # Build for production
bun run build:prod       # Full production build with optimization
bun run build:analyze    # Build with bundle analysis
bun run build:vercel     # Build for Vercel deployment

# Quality Assurance
bun run lint             # Run ESLint
bun run lint:fix         # Fix ESLint issues
bun run format           # Format code with Prettier
bun run format:check     # Check code formatting
bun run validate         # Validate game data
bun run check            # TypeScript type checking

# Optimization
bun run compress         # Compress assets
bun run optimize-images  # Optimize images
bun run analyze          # Analyze bundle size
bun run perf             # Run performance tests
```

## 🎮 Adding New Content

### Adding a New Character (Zone Nova)

1. **Create character data file:**

```javascript
// src/data/zone-nova/characters/new-character.js
export const newCharacter = {
  id: 999,
  name: 'New Character',
  rarity: 'SSR',
  element: 'Fire',
  role: 'DPS',
  stats: {
    hp: 8000,
    attack: 1400,
    defense: 500,
    energyRecovery: 0.25,
    critRate: 0,
    critDmg: 50,
  },
  image: '/images/games/zone-nova/characters/New-Character.jpg',
  slug: 'new-character',
  detailUrl: '/guides/zone-nova/characters/new-character',
};
```

2. **Add to character index:**

```javascript
// src/data/zone-nova/characters.js
import { newCharacter } from './characters/new-character.js';

export const ZONE_NOVA_CHARACTERS = [
  // ... existing characters
  newCharacter,
];
```

3. **Create character page:**

```astro
---
// src/pages/guides/zone-nova/characters/new-character.astro
import CharacterLayout from '../../../../layouts/zone-nova/CharacterLayout.astro';
import { newCharacter } from '../../../../data/zone-nova/characters/new-character.js';
---

<CharacterLayout character={newCharacter}>
  <!-- Character content -->
</CharacterLayout>
```

### Adding a New Game Update

1. **Create update data:**

```javascript
// src/data/zone-nova/updates/new-update.js
export const newUpdate = {
  id: 'new-update-2025',
  title: 'New Update Title',
  slug: 'new-update-2025',
  type: 'maintenance',
  date: '2025-01-15',
  content: 'Update content here...',
  tags: ['maintenance', 'bug-fixes'],
};
```

2. **Add to updates index and create page**

## 🎨 Styling Guidelines

### CSS Organization

- Global styles: `src/styles/global.css`
- Component styles: `src/styles/components/`
- Game-specific styles: `src/styles/games/{game}/`
- Use prefixes: `zn-` for Zone Nova, `sab-` for Silver and Blood

### Naming Conventions

- Files: `kebab-case`
- CSS classes: `kebab-case`
- Components: `PascalCase`
- Variables: `camelCase`

### Color System

```css
/* Use CSS custom properties */
:root {
  --color-primary: #3b82f6;
  --color-secondary: #10b981;
  --color-accent: #f59e0b;

  /* Game-specific colors */
  --zn-primary: #8b5cf6;
  --sab-primary: #ef4444;
}
```

## 🔧 Code Quality

### TypeScript

- Use strict TypeScript configuration
- Import types from `src/types/`
- Validate data with utilities from `src/utils/data-validation.ts`

### ESLint Rules

- Follow the configured ESLint rules
- Use `bun run lint:fix` to auto-fix issues
- Astro-specific rules are configured

### Prettier Configuration

- 2-space indentation
- Single quotes
- Trailing commas
- 100 character line limit

## 🚀 Performance Optimization

### Code Splitting

- Vendor libraries are split into separate chunks
- Game-specific data is lazy-loaded
- Components are chunked for optimal loading

### Image Optimization

- Use `OptimizedImage` component for responsive images
- Generate WebP and AVIF formats
- Implement lazy loading for below-fold images

### Bundle Analysis

```bash
# Analyze bundle size
bun run build:analyze

# Check for unused assets
bun run scripts/cleanup-images.ts
```

## 📊 Data Validation

### Automatic Validation

```bash
# Validate all game data
bun run validate
```

### Manual Validation

```typescript
import { validateZoneNovaCharacter } from '../utils/data-validation';

const result = validateZoneNovaCharacter(characterData);
if (!result.isValid) {
  console.error('Validation errors:', result.errors);
}
```

## 🎯 SEO Best Practices

### Meta Tags

- Use `CharacterSEO` or `GameSEO` components
- Include structured data (JSON-LD)
- Optimize for game-specific keywords

### URL Structure

- Clean, descriptive URLs
- Consistent slug generation
- Proper canonical URLs

## 🔄 Git Workflow

### Branch Naming

- `feature/character-name` for new characters
- `fix/issue-description` for bug fixes
- `enhance/feature-name` for improvements

### Commit Messages

- Use conventional commits
- Include Discord notifications via GitHub Actions
- Reference issues when applicable

## 📱 Mobile Optimization

### Responsive Design

- Mobile-first approach
- Test on various screen sizes
- Use CSS Grid and Flexbox

### Performance

- Lazy load images
- Minimize JavaScript on mobile
- Use service worker for offline functionality

## 🧪 Testing

### Data Validation

- All game data is automatically validated
- Character data structure is type-checked
- Image paths are verified

### Manual Testing

- Test character pages on different devices
- Verify image optimization
- Check loading performance

## 🚀 Deployment

### Vercel Deployment

```bash
# Build for Vercel
bun run build:vercel

# The build is automatically deployed via GitHub Actions
```

### Environment Variables

- `DISCORD_WEBHOOK_URL` for Discord notifications
- Vercel analytics are automatically configured

## 📚 Resources

### Documentation

- [Astro Documentation](https://docs.astro.build/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Bun Documentation](https://bun.sh/docs)

### Game Data Sources

- Zone Nova official resources
- Silver and Blood official resources
- Community contributions

## 🤝 Contributing

### Before Contributing

1. Read this development guide
2. Set up the development environment
3. Run `bun run validate` to ensure data integrity
4. Follow the code style guidelines

### Pull Request Process

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request with clear description

## 🐛 Common Issues

### Build Failures

- Check TypeScript errors: `bun run check`
- Validate data: `bun run validate`
- Clear cache: `rm -rf .astro node_modules && bun install`

### Performance Issues

- Analyze bundle: `bun run build:analyze`
- Optimize images: `bun run optimize-images`
- Check for unused code

### Data Issues

- Use validation utilities
- Check for duplicate IDs/slugs
- Verify image paths exist

---

## 📞 Support

If you encounter issues:

1. Check this documentation
2. Review the validation output
3. Check the GitHub Actions logs
4. Create an issue with detailed information

Happy coding! 🎮✨
