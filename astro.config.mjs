// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import fs from 'fs';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  site: 'https://gachawiki.info',
  output: 'static',
  integrations: [
    sitemap(), 
    svelte()
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: 268402689, // Allow large images (16384x16384)
      },
    },
    domains: ['gachawiki.info'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gachawiki.info',
      },
    ],
  },
  // Build optimizations
  build: {
    // Inline stylesheets smaller than 4kb
    inlineStylesheets: 'auto',
    // Assets folder for better organization
    assets: 'assets/',
  },
  // Compression and performance
  compressHTML: true,
  // Smart prefetch with 'load' strategy - prefetches after page loads
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'load',
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
              '../src/utils/seo.ts',
              '../src/utils/timing-constants.ts',
              '../src/utils/ancestral-vault-calculator.js',
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
    // Custom plugin to copy JavaScript files from src/scripts to public/scripts
    plugins: [
      {
        name: 'copy-scripts',
        writeBundle() {
          // This plugin runs after the build is complete
          console.log('🔄 Copying JavaScript files from src/scripts to public/scripts...');

          // Define script mappings from src to public
          const scriptMappings = [
            {
              src: 'src/scripts/horizon-walker/character-database.js',
              dest: 'public/scripts/horizon-walker/character-database.js'
            },
            {
              src: 'src/scripts/horizon-walker/mercenary-database.js',
              dest: 'public/scripts/horizon-walker/mercenary-database.js'
            },
            {
              src: 'src/scripts/horizon-walker/gifts.js',
              dest: 'public/scripts/horizon-walker/character-gifts.js'
            }
          ];

          // Copy each script file
          scriptMappings.forEach(mapping => {
            try {
              if (fs.existsSync(mapping.src)) {
                // Ensure destination directory exists
                const destDir = path.dirname(mapping.dest);
                if (!fs.existsSync(destDir)) {
                  fs.mkdirSync(destDir, { recursive: true });
                }

                // Copy the file
                fs.copyFileSync(mapping.src, mapping.dest);
                console.log(`✅ Copied ${mapping.src} → ${mapping.dest}`);
              } else {
                console.log(`⚠️ Source file not found: ${mapping.src}`);
              }
            } catch (error) {
              console.error(`❌ Error copying ${mapping.src}:`, error.message);
            }
          });

          console.log('✅ Script copying complete');
        }
      }
    ],
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
      // Disable caching in development
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    },
  },
});
