#!/usr/bin/env bun

// Post-build compression script for better performance
import { readdirSync, statSync, createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { createGzip, createBrotliCompress } from 'zlib';
import { pipeline } from 'stream/promises';

const DIST_DIR = './dist';
const COMPRESSIBLE_EXTENSIONS = ['.html', '.css', '.js', '.json', '.xml', '.svg', '.txt'];

async function compressFile(filePath: string, type: 'gzip' | 'brotli') {
  const outputPath = `${filePath}.${type === 'gzip' ? 'gz' : 'br'}`;
  const compressor = type === 'gzip' ? createGzip({ level: 9 }) : createBrotliCompress();

  try {
    await pipeline(createReadStream(filePath), compressor, createWriteStream(outputPath));
    console.log(`✅ Compressed: ${filePath} -> ${outputPath}`);
  } catch (error) {
    console.error(`❌ Failed to compress ${filePath}:`, error);
  }
}

async function walkDirectory(dir: string) {
  const items = readdirSync(dir);

  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      await walkDirectory(fullPath);
    } else if (stat.isFile()) {
      const shouldCompress = COMPRESSIBLE_EXTENSIONS.some(ext =>
        fullPath.toLowerCase().endsWith(ext)
      );

      if (shouldCompress && stat.size > 1024) {
        // Only compress files > 1KB
        await Promise.all([compressFile(fullPath, 'gzip'), compressFile(fullPath, 'brotli')]);
      }
    }
  }
}

async function main() {
  console.log('🗜️  Starting post-build compression...');

  try {
    await walkDirectory(DIST_DIR);
    console.log('✨ Compression complete!');
  } catch (error) {
    console.error('❌ Compression failed:', error);
    process.exit(1);
  }
}

main();
