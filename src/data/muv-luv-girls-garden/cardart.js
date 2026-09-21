// Muv-Luv Girls Garden official card illustration manifest: which Style
// Cards have a wide card illustration on R2 under cardart/ (from the wikiru
// card pages' official art). lucie-moorcroft-2 and dorothea-kirkland-2 have
// none published yet; those fall back to icons.

export const MLGG_CARDART_MISSING = new Set(['lucie-moorcroft-2', 'dorothea-kirkland-2']);

// Returns 'cardart/<slug>-<n>.webp' when the illustration exists, else null.
export function mlggCardArt(slug, n) {
  const key = `${slug}-${n}`;
  if (MLGG_CARDART_MISSING.has(key)) return null;
  return `cardart/${key}.webp`;
}
