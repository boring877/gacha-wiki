// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import fs from 'fs';
import path from 'path';

// Check if we're in development mode
const isDev = process.env.NODE_ENV !== 'production' && !process.argv.includes('build');

// https://astro.build/config
export default defineConfig({
  site: 'https://gachawiki.info',
  output: 'static',
  // Fix trailing slash to prevent 300 redirect issues in Google Search Console
  // 'always' ensures all URLs end with / and prevents duplicate crawling
  // Use 'ignore' in dev mode so both /path and /path/ work locally
  trailingSlash: isDev ? 'ignore' : 'always',
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
    // Auto-inline small stylesheets, keep larger ones as cacheable external files
    // 'auto' inlines stylesheets <4kb for performance, externalizes larger ones
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
      // Warn about large chunks (>500KB)
      chunkSizeWarningLimit: 500,
      // Tree shaking
      rollupOptions: {
        output: {
          // Better chunk naming for caching
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
          // Advanced manual chunks for better caching using function for proper module resolution
          manualChunks(id) {
            // Game-specific data chunks - split by game for better caching
            if (id.includes('/data/zone-nova/')) {
              return 'zn-data';
            }
            if (id.includes('/data/silver-and-blood/')) {
              return 'sab-data';
            }
            if (id.includes('/data/stella-sora/')) {
              return 'ss-data';
            }
            if (id.includes('/data/horizon-walker/')) {
              return 'hw-data';
            }
            if (id.includes('/data/busty-burst/')) {
              return 'bb-data';
            }
            if (id.includes('/data/taimanin-squad/')) {
              return 'ts-data';
            }
            // Vendor chunks for third-party libraries
            if (id.includes('node_modules')) {
              if (id.includes('chart.js') || id.includes('chartjs')) {
                return 'vendor-chart';
              }
              // Split other node_modules
              return 'vendor';
            }
            // Utility chunks
            if (id.includes('/utils/')) {
              return 'utils';
            }
          },
        },
      },
    },
    // Custom plugin to copy JavaScript files from src/scripts to public/scripts
    plugins: [
      // Dev server middleware to auto-redirect URLs without trailing slash
      {
        name: 'trailing-slash-redirect',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            // Skip assets, API routes, and already-slashed URLs
            if (req.url &&
                !req.url.endsWith('/') &&
                !req.url.includes('.') &&
                !req.url.startsWith('/@') &&
                !req.url.startsWith('/__')) {
              res.writeHead(301, { Location: req.url + '/' });
              res.end();
              return;
            }
            next();
          });
        }
      },
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
      include: ['chart.js'],
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
