# Claude Code Instructions

## Environment

- OS: Windows 11
- Package manager: Bun (use `bun` instead of `npm`)

## Build Rules

- Do NOT run `bun run build` - the dev server is already running locally
- Never run build tests unless explicitly asked by the user
- The user will test changes themselves in the browser

## Astro Config (CRITICAL)

- **NEVER change `inlineStylesheets` from `'always'`** — setting it to `'auto'` or `'never'` breaks CSS on production (external CSS files fail to load, causing broken styling on all pages). This happened on 2026-04-03 and took down the entire site.
- The `manualChunks` function in `astro.config.mjs` must keep `node_modules` check BEFORE the `/utils/` check to avoid circular dependency errors (`Cannot access 'SITE' before initialization`)
- Always verify `astro.config.mjs` changes by running `bun run build` locally before pushing

## Data Entry Rules

- **NEVER make up or copy data** from one character to another without verification
- If data is missing (profile, credits, stats, etc.), ASK the user for the correct info instead of guessing or copying from similar entries
- Profile data (height, bust, waist, hips, illustrator, voice actor) is manually entered - there are no raw data files for this info
- Always verify data exists in raw files before adding new character entries
- When adding new characters, clearly list what data is missing and ask the user to provide it

## File Creation Guidelines

When creating new files, always include a comment block at the top explaining concisely what the file does. This helps Claude navigate the codebase more autonomously in fresh sessions.

Example formats:
- JavaScript/TypeScript: `// Description of what this file does`
- Python: `# Description of what this file does`
- CSS: `/* Description of what this file does */`
- HTML/Astro: `<!-- Description of what this file does -->`

