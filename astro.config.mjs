// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from '@unocss/astro';

// https://astro.build/config
export default defineConfig({
	site: 'https://gachawiki.info',
	integrations: [sitemap(), UnoCSS()],
	// Keep it simple for now - static generation
	output: 'static',
});
