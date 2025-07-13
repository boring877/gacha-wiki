# Adding a New Game - SEO Template

## 1. Add Game Configuration

In `/src/utils/seo.js`, add your game to the `GAME_SEO_CONFIG`:

```javascript
'your-game-key': {
  gameName: 'Your Game Name',
  keywords: ['your game', 'gacha game', 'character guides', 'game wiki', 'RPG', 'specific-keywords'],
  themeColor: '#yourcolor', // Hex color for mobile theme
  description: 'Complete guide and wiki for Your Game Name',
  genres: ['RPG', 'Gacha', 'Strategy'], // Adjust as needed
  platform: 'Mobile' // or 'PC', 'Console', etc.
}
```

## 2. Create Game Layout

Create `/src/layouts/your-game/Layout.astro`:

```astro
---
import BaseHead from '../../components/BaseHead.astro';
import GameSEO from '../../components/GameSEO.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
// ... other imports

export interface Props {
  title: string;
  description?: string;
  gameTitle?: string;
  heroImage?: string;
}

const { title, description, gameTitle, heroImage } = Astro.props;
---

<html lang="en">
  <head>
    <BaseHead title={title} description={description || ""} />
    <GameSEO 
      gameKey="your-game-key"
      title={title}
      description={description}
    />
    <slot name="head" />
  </head>
  <body>
    <!-- Your game layout -->
  </body>
</html>
```

## 3. Create Character Layout (if needed)

Create `/src/layouts/your-game/CharacterLayout.astro`:

```astro
---
import BaseHead from '../../components/BaseHead.astro';
import CharacterSEO from '../../components/CharacterSEO.astro';
// ... other imports

export interface Props {
  title: string;
  description?: string;
  character?: any;
}

const { title, description, character } = Astro.props;
---

<html lang="en">
  <head>
    <BaseHead title={title} description={description || ""} />
    {character ? (
      <CharacterSEO 
        gameKey="your-game-key"
        character={character}
        customTitle={title}
        customDescription={description}
      />
    ) : (
      <meta name="keywords" content="your game, character guide" />
      <meta name="author" content="GachaWiki" />
      <meta name="robots" content="index, follow" />
    )}
  </head>
  <body>
    <!-- Your character layout -->
  </body>
</html>
```

## 4. SEO Benefits

✅ **Centralized Configuration**: All SEO settings in one place
✅ **Automatic Structured Data**: Rich snippets for better search results
✅ **Consistent Keywords**: Game-specific keyword generation
✅ **Mobile Optimization**: Theme colors and viewport settings
✅ **Character SEO**: Optimized meta tags for character pages
✅ **Scalable**: Just add config and use components

## 5. Advanced Features Available

- `generateTitle()` - SEO-optimized titles for different page types
- `generateDescription()` - SEO-optimized descriptions
- Custom structured data for guides, tier lists, updates
- Additional keywords per page
- Custom theme colors per game

## Example Usage

```astro
<!-- Game landing page -->
<GameSEO 
  gameKey="your-game-key"
  additionalKeywords={['tier list', 'builds']}
/>

<!-- Character page -->
<CharacterSEO 
  gameKey="your-game-key"
  character={characterData}
  additionalKeywords={['build guide', 'best build']}
/>
```

This system ensures every new game gets consistent, optimized SEO without duplicating code!