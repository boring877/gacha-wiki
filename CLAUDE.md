# Claude Code Instructions

## Build Commands

**NEVER run build or dev commands automatically:**

- `bun run dev` - Only run when explicitly requested
- `bun run build` - Only run when explicitly requested
- `npm run dev` - Only run when explicitly requested
- `npm run build` - Only run when explicitly requested

## Preferred Commands

Instead use these for testing:

- `bun run lint` - Check code quality
- `bun run lint:fix` - Fix linting issues
- `bun run format` - Format code
- `bun run check` - TypeScript/Astro checks
- `git status` - Check git status
- `git diff` - See changes

## Project Notes

- This is a Gacha Wiki project built with Astro
- Uses Bun as package manager
- Has automated linting with husky pre-commit hooks
