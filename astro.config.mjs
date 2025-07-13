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
	}),	integrations: [
		sitemap(),
	],
	// Server mode for API endpoints
	output: 'server',
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
					assetFileNames: 'assets/[name]-[hash][extname]',					// Manual chunks for better caching
					manualChunks: {
						'vendor': ['gsap'],
					},
				},
			},
		},		// Optimize dependencies
		optimizeDeps: {
			include: ['gsap'],
		},
		// Enable esbuild for faster builds with Bun
		esbuild: {
			target: 'es2022',
			legalComments: 'none',
		},
	},
});
