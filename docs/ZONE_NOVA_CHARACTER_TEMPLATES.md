# ZoneNova Character Template System

## Overview

The ZoneNova character database now uses a centralized template system that
makes it easy to add new features and maintain consistency across all character
pages.

## Template Structure

### CharacterPageTemplate.astro

**Location:** `src/templates/zone-nova/CharacterPageTemplate.astro`

This is the main template component that contains all the HTML structure for
character pages. All 33+ character pages now use this single template.

### Benefits

1. **Easy Updates:** Add new sections or modify existing ones by editing only
   the template file
2. **Consistency:** All character pages automatically get the same layout and
   styling
3. **Maintainability:** No need to update 33+ individual files when making
   changes
4. **Cleaner Code:** Individual character pages are now just 23 lines instead of
   300+

## File Structure

```
src/
├── templates/zone-nova/
│   └── CharacterPageTemplate.astro    # Main template (NEW)
├── pages/guides/zone-nova/characters/
│   ├── anubis.astro                   # Simplified (UPDATED)
│   ├── penny.astro                    # Simplified (UPDATED)
│   └── [all other characters].astro   # All simplified (UPDATED)
└── data/zone-nova/characters/
    ├── anubis.js                      # Data files (unchanged)
    └── [all character data].js        # Data files (unchanged)
```

## Individual Character Page Structure

Each character page is now simplified to:

```astro
---
import ZoneNovaLayout1 from '../../../../layouts/zone-nova/CharacterLayout.astro';
import CharacterNavigation from '../../../../components/zone-nova/CharacterNavigation.astro';
import CharacterPageTemplate from '../../../../templates/zone-nova/CharacterPageTemplate.astro';
import {
  characterData,
  characterSEO,
} from '../../../../data/zone-nova/characters/character-name.js';

export const prerender = true;

const characterData = characterData;
const title = characterSEO.title;
const description = characterSEO.description;
---

<ZoneNovaLayout1
  title={title}
  description={description}
  gameTitle={characterData.name}
>
  <CharacterNavigation currentCharacter={characterData} />
  <CharacterPageTemplate characterData={characterData} />
</ZoneNovaLayout1>
```

## How to Add New Features

### Example: Adding a New Section

To add a new section (e.g., "Equipment Recommendations") to ALL character pages:

1. Open `src/templates/zone-nova/CharacterPageTemplate.astro`
2. Add the new section anywhere in the template:

```astro
<!-- Equipment Recommendations -->
<section class="content-section">
  <h2 class="section-title">Equipment Recommendations</h2>
  <div class="equipment-grid">
    {
      characterData.equipment?.map(item => (
        <div class="equipment-item">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))
    }
  </div>
</section>
```

3. Save the file
4. The new section automatically appears on ALL 33+ character pages!

### Example: Modifying Existing Sections

To change how skills are displayed across all character pages:

1. Open `src/templates/zone-nova/CharacterPageTemplate.astro`
2. Find the "Skills & Team Composition" section
3. Modify the HTML structure as needed
4. All character pages update automatically

## Template Sections

The template currently includes:

1. **Character Overview**
   - Character portrait and name
   - Rarity, element, and class badges
   - Base stats display

2. **Skills & Team Composition**
   - Normal Attack
   - Auto Skill
   - Ultimate
   - Passive
   - Team Skill

3. **Awakening Effects**
   - All 6 awakening levels with effects

4. **Memory Card**
   - Memory card image
   - Base stats
   - Memory card effects

5. **Progressive Enhancement JavaScript**
   - Lazy loading for images
   - Performance optimizations

## Data Requirements

The template expects character data to follow this structure:

```javascript
{
  name: string,
  image: string,
  rarity: string,
  element: string,
  class: string,
  faction: string,
  stats: { hp, attack, defense },
  skills: { normal, auto, ultimate, passive },
  teamSkill: { name, description, requirements },
  awakenings: [{ level, effect }],
  memoryCard: { name, image, stats, effects }
}
```

## Migration

All character pages have been automatically converted using the migration script
at `scripts/convert-character-pages.js`.

**Before:** 33 files × ~300 lines = ~9,900 lines of duplicated code **After:**
33 files × ~23 lines + 1 template = ~1,059 lines total

This represents a **90%+ reduction in code duplication** while maintaining full
functionality.

## Future Enhancements

With this template system, you can easily add:

- Character build guides
- Team synergy recommendations
- Meta tier rankings
- Equipment suggestions
- Skill priority guides
- And any other features you want across all character pages

Simply modify the template once, and all character pages get the new features
automatically!
