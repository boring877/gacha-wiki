// Variant page routing for Muv-Luv Girls Garden. Style Card pages are the
// main pages: /characters/<student-slug>/<variant-name-slug>/ (EN titles
// only, matching the global focus). Student-level pages do not exist.
import { MLGG_CARDS } from './game-data.js';
import { girlsGardenCharacters } from './characters.js';

export function variantSlug(titleEn) {
  return String(titleEn).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

// URL for a specific card; null when the card is Japan-only (no EN title).
export function mlggCardHref(slug, card) {
  if (!card.titleEn) return null;
  return `/guides/muv-luv-girls-garden/characters/${slug}/${variantSlug(card.titleEn)}/`;
}

// URL for the student's main card: the demo default when known, else their
// first global card; Japan-only students fall back to their student page.
export function mlggVariantHref(slug) {
  const ch = girlsGardenCharacters.find(c => c.slug === slug);
  const global = ch ? ch.cards.filter(c => c.titleEn) : [];
  if (!global.length) return `/guides/muv-luv-girls-garden/characters/${slug}/`;
  const def = Object.values(MLGG_CARDS).find(g => g.slug === slug && g.def);
  const pick = (def && global.find(c => c.n === def.n)) || global[0];
  return mlggCardHref(slug, pick);
}
