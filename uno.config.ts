import { defineConfig, presetUno, presetTypography, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      // Disable CSS reset to avoid conflicts with our custom styles
      preflight: false,
    }),
    presetTypography(),
    presetIcons({
      // Options
    }),
  ],
  // Only apply UnoCSS to specific classes to avoid conflicts
  safelist: [
    'i-lucide-github',
    'i-lucide-youtube',
    'i-lucide-twitter',
    'i-simple-icons-discord',
    'text-xl',
    'text-2xl',
    'text-amber-glow',
  ],
  // Exclude certain patterns to avoid conflicts
  blocklist: [
    // Don't interfere with our custom styled elements
  ],
  theme: {
    colors: {
      'amber-glow': 'var(--amber-glow)',
      // GachaWiki color scheme
      primary: {
        50: '#f0f9ff',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        900: '#1e3a8a',
      },
      accent: {
        500: '#8b5cf6',
        600: '#7c3aed',
      }
    }
  }
})