// Switch to static mode for production deployment
import { readFileSync, writeFileSync } from 'fs';

const configPath = './astro.config.mjs';
let config = readFileSync(configPath, 'utf8');

config = config.replace(
  /output: 'server',/,
  "output: 'static',"
);

writeFileSync(configPath, config);
console.log('✅ Switched to static mode for production deployment');
console.log('🚀 Ready for "vercel --prod" deployment');