# Claude Code Instructions

## Environment

- OS: Windows 11
- Package manager: Bun (use `bun` instead of `npm`)

## Build Rules

- Do NOT run `bun run build` after every small change
- Only run builds when explicitly asked or when all changes are complete
- Batch multiple changes together before building

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

