# Claude Code Instructions

## Environment

- OS: Windows 11
- Package manager: Bun (use `bun` instead of `npm`)

## Build Rules

- Do NOT run `bun run build` after every small change
- Only run builds when explicitly asked or when all changes are complete
- Batch multiple changes together before building

## File Creation Guidelines

When creating new files, always include a comment block at the top explaining concisely what the file does. This helps Claude navigate the codebase more autonomously in fresh sessions.

Example formats:
- JavaScript/TypeScript: `// Description of what this file does`
- Python: `# Description of what this file does`
- CSS: `/* Description of what this file does */`
- HTML/Astro: `<!-- Description of what this file does -->`

