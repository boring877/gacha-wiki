// Muv-Luv Girls Garden official card portrait manifest: the game's 360x640
// student select portraits from the Steam demo, on R2 under portraits/.
// Keyed by demo card id (the MLGG_CARDS map key, e.g. 100301). All 34 demo
// cards have a portrait: 29 shipped as official 360x640 art; 5 (111301,
// 114301, 115301, 117301, 119301) were recovered or rebuilt from the full
// remote bundle dump (114301 is an official sprite found in a Common bundle,
// the rest are cropped/built from their best demo art).

export const MLGG_PORTRAITS_MISSING = new Set([
]);

// Returns 'portraits/<id>.webp' when the portrait exists, else null.
export function mlggPortrait(id) {
  if (!id || MLGG_PORTRAITS_MISSING.has(String(id))) return null;
  return `portraits/${id}.webp`;
}
