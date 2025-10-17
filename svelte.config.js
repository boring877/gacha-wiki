import { vitePreprocess } from '@astrojs/svelte';

export default {
  preprocess: vitePreprocess(),
  compilerOptions: {
    // Set to false to use Svelte 4 syntax (onMount, stores, etc.)
    // Set to true to require Svelte 5 runes ($state, $effect, etc.)
    runes: undefined, // auto-detect: allows both syntaxes
  },
};
