# Zone Nova Character Template with Layout

This Markdown file documents the `ZoneNovaTemplate.astro` template, which integrates with the `ZoneNovaLayout1.astro` layout to render optimized, mobile-first character pages for Gacha Wiki.

---

## File Location

```
src/templates/ZoneNovaTemplate.astro
```


## Overview

- **Purpose:** Provides a full-page character guide using your custom `ZoneNovaLayout1.astro`.
- **Prerender:** The template sets `export const prerender = true;` for static generation.
- **Layout Props:** The page uses `<ZoneNovaLayout>` with these props:
  - `title` (string): SEO title.
  - `description` (string): SEO description.
  - `gameTitle` (string): Displayed as the page heading.
  - `showBreadcrumb` (boolean): Toggle breadcrumb visibility.
  - `breadcrumbText` (string): Text for the parent breadcrumb link.


## Character Data

Replace all placeholder strings (`[PLACEHOLDER]`) inside the `characterData` object:

```ts
const characterData = {
  name: '[CHARACTER_NAME]',
  image: '[CHARACTER_IMAGE]',      // filename without extension
  rarity: '[RARITY]',             // e.g. "SSR"
  element: '[ELEMENT]',           // e.g. "Fire"
  class: '[CLASS]',               // e.g. "Warrior"
  faction: '[FACTION]',           // e.g. "Abyss"

  // Base stats (Level 80)
  stats: {
    hp: '[BASE_HP]',
    attack: '[BASE_ATTACK]',
    defense: '[BASE_DEFENSE]'
  },

  // Skills
  skills: {
    normal: { name: '[NORMAL_ATTACK_NAME]', description: '[NORMAL_ATTACK_DESCRIPTION]' },
    auto:   { name: '[AUTO_SKILL_NAME]',   cooldown: '[COOLDOWN]', description: '[AUTO_SKILL_DESCRIPTION]' },
    ultimate: { name: '[ULTIMATE_NAME]', energyCost: '[ENERGY_COST]', description: '[ULTIMATE_DESCRIPTION]' },
    passive:  { name: '[PASSIVE_NAME]', description: '[PASSIVE_DESCRIPTION]' }
  },

  // Team Skill
  teamSkill: {
    name: '[TEAM_SKILL_NAME]',
    description: '[TEAM_SKILL_DESCRIPTION]',
    synergy: '[TEAM_SYNERGY_EXPLANATION]'
  },

  // Awakening Effects
  awakenings: [ /* array of 6 awakening objects */ ],

  // Memory Card
  memoryCard: {
    name: '[MEMORY_CARD_NAME]',
    image: '[MEMORY_CARD_IMAGE]',
    stats: { hp: '[MEMORY_HP]', attack: '[MEMORY_ATTACK]', defense: '[MEMORY_DEFENSE]' },
    effects: ['[MEMORY_EFFECT_1]', '[MEMORY_EFFECT_2]', '[MEMORY_EFFECT_3]']
  }
};
```


## Preloading Critical Images

The `criticalImages` array preloads the character and memory card images in both WebP and JPEG:

```ts
const criticalImages = [
  { webp: `/images/characters/${characterData.image}.webp`, fallback: `/images/characters/${characterData.image}.jpg` },
  { webp: `/images/characters/${characterData.memoryCard.image}.webp`, fallback: `/images/characters/${characterData.memoryCard.image}.jpg` }
];
```


## Styles & Progressive Enhancement

- **Inline Styles:** A scoped `<style>` block defines color variables and minimal responsive rules.
- **Touch Interactions:** A small `<script>` adds tap/click feedback on cards.


## Usage Example

1. **Copy the template** to `src/pages/characters/[slug].astro` or import and clone its logic.
2. **Replace** all `[PLACEHOLDER]` values in `characterData`.
3. **Build** your site with Astro; the character page will be prerendered.

```bash
# Example build command
npm run build
```


---

Feel free to tweak styles or extract the inline CSS into a shared stylesheet if you need more reuse or customization.
