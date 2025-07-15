// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://gachawiki.info',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [sitemap()],
  // Static site with Vercel API routes
  output: 'static',
  // Build optimizations
  build: {
    // Inline stylesheets smaller than 4kb
    inlineStylesheets: 'auto',
    // Assets folder for better organization
    assets: 'assets/',
  },
  // Compression and performance
  compressHTML: true,
  // Prefetch links for better navigation
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  vite: {
    build: {
      // Enable CSS code splitting
      cssCodeSplit: true,
      // Minify for smaller bundles
      minify: 'esbuild',
      // Tree shaking
      rollupOptions: {
        output: {
          // Better chunk naming for caching
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
          // Advanced manual chunks for better caching
          manualChunks: {
            // Vendor libraries
            vendor: ['gsap'],
            charts: ['chart.js'],

            // Game-specific data chunks
            'zone-nova-data': [
              '../src/data/zone-nova/characters.js',
              '../src/data/zone-nova/memories.js',
              '../src/data/zone-nova/updates.js',
              '../src/data/zone-nova/rifts.js',
            ],
            'silver-blood-data': [
              '../src/data/silver-and-blood/characters.js',
              '../src/data/silver-and-blood/events.js',
              '../src/data/silver-and-blood/damage-mechanics.js',
            ],

            // Utility chunks
            utils: [
              '../src/utils/character-utils.ts',
              '../src/utils/data-validation.ts',
              '../src/utils/seo.js',
            ],

            // Component chunks for lazy loading
            'character-components': [
              '../src/components/zone-nova/CharacterComparison.astro',
              '../src/components/silver-and-blood/CharacterComparison.astro',
            ],
          },
        },
      },
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ['gsap', 'chart.js'],
    },
    // Enable esbuild for faster builds with Bun
    esbuild: {
      target: 'es2022',
      legalComments: 'none',
    },
    // Performance optimizations
    server: {
      fs: {
        // Allow serving files from one level up
        allow: ['..'],
      },
    },
  },
});
