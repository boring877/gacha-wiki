import { defineConfig, presetUno, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
  ],
  theme: {
    colors: {
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