#!/usr/bin/env bun

// Clock Images Optimization Script
// Generates WebP and AVIF versions in multiple sizes for responsive images

import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

interface ImageConfig {
  input: string;
  outputDir: string;
  baseName: string;
  sizes: number[];
  quality: {
    webp: number;
    avif: number;
    jpg: number;
  };
}

const IMAGES_TO_OPTIMIZE: ImageConfig[] = [
  {
    input: 'public/images/games/zone-nova/zonenova1.jpg',
    outputDir: 'public/images/games/zone-nova/optimized',
    baseName: 'zonenova1',
    sizes: [400, 800, 1200], // Responsive sizes
    quality: { webp: 85, avif: 80, jpg: 85 },
  },
  {
    input: 'public/images/games/silver-and-blood/main-images/silver-and-blood-main3.jpg',
    outputDir: 'public/images/games/silver-and-blood/main-images/optimized',
    baseName: 'silver-and-blood-main3',
    sizes: [400, 800], // Responsive sizes
    quality: { webp: 85, avif: 80, jpg: 85 },
  },
  {
    input: 'public/images/games/horizon-walker/gameimg/gameicon.jpg',
    outputDir: 'public/images/games/horizon-walker/gameimg/optimized',
    baseName: 'gameicon',
    sizes: [160, 320], // Small image, just 1x and 2x
    quality: { webp: 90, avif: 85, jpg: 90 },
  },
];

async function ensureDirectory(dir: string) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
    console.log(`📁 Created directory: ${dir}`);
  }
}

async function optimizeImage(config: ImageConfig) {
  console.log(`\n🖼️  Optimizing: ${config.input}`);

  if (!existsSync(config.input)) {
    console.error(`❌ Input file not found: ${config.input}`);
    return;
  }

  await ensureDirectory(config.outputDir);

  const image = sharp(config.input);
  const metadata = await image.metadata();

  console.log(
    `📏 Original: ${metadata.width}x${metadata.height}, ${Math.round((metadata.size || 0) / 1024)}KB`
  );

  for (const width of config.sizes) {
    // Calculate height maintaining aspect ratio
    const aspectRatio = (metadata.height || 1) / (metadata.width || 1);
    const height = Math.round(width * aspectRatio);

    console.log(`\n🔄 Generating ${width}x${height} versions...`);

    // WebP version
    try {
      const webpPath = join(config.outputDir, `${config.baseName}-${width}w.webp`);
      await image
        .clone()
        .resize(width, height, { fit: 'cover', position: 'center' })
        .webp({ quality: config.quality.webp, effort: 6 })
        .toFile(webpPath);

      const webpStats = await sharp(webpPath).metadata();
      console.log(`✅ WebP: ${webpPath} (${Math.round((webpStats.size || 0) / 1024)}KB)`);
    } catch (error) {
      console.error(`❌ WebP generation failed:`, error);
    }

    // AVIF version (most modern and efficient)
    try {
      const avifPath = join(config.outputDir, `${config.baseName}-${width}w.avif`);
      await image
        .clone()
        .resize(width, height, { fit: 'cover', position: 'center' })
        .avif({ quality: config.quality.avif, effort: 9 })
        .toFile(avifPath);

      const avifStats = await sharp(avifPath).metadata();
      console.log(`✅ AVIF: ${avifPath} (${Math.round((avifStats.size || 0) / 1024)}KB)`);
    } catch (error) {
      console.error(`❌ AVIF generation failed:`, error);
    }

    // Optimized JPG fallback
    try {
      const jpgPath = join(config.outputDir, `${config.baseName}-${width}w.jpg`);
      await image
        .clone()
        .resize(width, height, { fit: 'cover', position: 'center' })
        .jpeg({ quality: config.quality.jpg, progressive: true, mozjpeg: true })
        .toFile(jpgPath);

      const jpgStats = await sharp(jpgPath).metadata();
      console.log(`✅ JPG: ${jpgPath} (${Math.round((jpgStats.size || 0) / 1024)}KB)`);
    } catch (error) {
      console.error(`❌ JPG generation failed:`, error);
    }
  }
}

async function generateOptimizedImages() {
  console.log('🚀 Starting clock images optimization...');
  console.log('📦 Generating WebP, AVIF, and optimized JPG versions in multiple sizes\n');

  for (const config of IMAGES_TO_OPTIMIZE) {
    try {
      await optimizeImage(config);
    } catch (error) {
      console.error(`❌ Failed to optimize ${config.input}:`, error);
    }
  }

  console.log('\n✨ Image optimization complete!');
  console.log('\n📋 Next steps:');
  console.log('1. Update clock landing data to use optimized images');
  console.log('2. Implement <picture> elements for responsive images');
  console.log('3. Test performance improvements');
}

// Add package.json script integration
if (import.meta.main) {
  generateOptimizedImages().catch(console.error);
}

export { generateOptimizedImages, IMAGES_TO_OPTIMIZE };
