// Switch to server mode for local development
import { readFileSync, writeFileSync } from 'fs';

const configPath = './astro.config.mjs';
let config = readFileSync(configPath, 'utf8');

config = config.replace(
  /output: 'static',/,
  "output: 'server',"
);

writeFileSync(configPath, config);
console.log('✅ Switched to server mode for local development');
console.log('💡 Run "bun run dev" to start the dev server');
console.log('🌐 Visit http://localhost:4321 to view the wiki');