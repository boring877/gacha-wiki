import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import astroeslint from 'eslint-plugin-astro';

export default [
  // Apply recommended rules to all files
  eslint.configs.recommended,

  // Astro configuration
  ...astroeslint.configs.recommended,

  // Global configuration for all files
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        performance: 'readonly',
        Image: 'readonly',
        IntersectionObserver: 'readonly',
        ResizeObserver: 'readonly',
        MutationObserver: 'readonly',

        // Node globals
        process: 'readonly',
        global: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },

    plugins: {
      '@typescript-eslint': tsPlugin,
    },

    rules: {
      // Existing rules from .eslintrc.json
      'no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'prefer-const': 'error',
      'no-var': 'error',
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-undef': 'error',

      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // Scripts directory - allow console
  {
    files: ['scripts/**/*.ts', 'scripts/**/*.js', 'src/scripts/**/*.ts', 'src/scripts/**/*.js'],
    rules: {
      'no-console': 'off',
    },
  },

  // Utils directory - allow console for debug logging
  {
    files: ['src/utils/**/*.js', 'src/utils/**/*.ts'],
    rules: {
      'no-console': 'warn',
    },
  },

  // Add browser global for scripts that need location
  {
    files: ['scripts/**/*.js'],
    languageOptions: {
      globals: {
        location: 'readonly',
      },
    },
  },

  // Astro files - disable undef rule (handled by Astro)
  {
    files: ['*.astro', '**/*.astro'],
    rules: {
      'no-undef': 'off',
    },
  },

  // JavaScript files - disable TypeScript rules
  {
    files: ['**/*.js', '**/*.mjs'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  // Ignore patterns (equivalent to ignorePatterns in .eslintrc.json)
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.astro/**',
      'public/**',
      'src/templates/**',
      'src/env.d.ts',
      '.vercel/**',
      '.husky/**',
      'bun.lockb',
      '**/*.sample',
    ],
  },
];
