// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from '@unocss/astro';

// https://astro.build/config
export default defineConfig({
	site: 'https://gachawiki.info',	integrations: [
		sitemap(),
		// UnoCSS({
		// 	// Enable UnoCSS inspector only in dev mode
		// 	inspector: process.env.NODE_ENV === 'development',
		// }),
	],
	// Keep it simple for now - static generation
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
					// Manual chunks for better caching
					manualChunks: {
						'vendor': ['gsap'],
						'analytics': ['@vercel/analytics', '@vercel/speed-insights'],
					},
				},
			},
		},
		// Optimize dependencies
		optimizeDeps: {
			include: ['gsap', '@vercel/analytics', '@vercel/speed-insights'],
		},
		// Enable esbuild for faster builds with Bun
		esbuild: {
			target: 'es2022',
			legalComments: 'none',
		},
	},
});
