#!/usr/bin/env bun

// Image optimization script using Sharp
import sharp from 'sharp';
import { readdirSync, statSync, mkdirSync, existsSync } from 'fs';
import { join, parse, relative } from 'path';

const INPUT_DIR = './public/images';
const OUTPUT_DIR = './public/images/optimized';
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];

// Quality settings for different formats
const QUALITY_SETTINGS = {
  webp: 85,
  avif: 75,
  jpeg: 80,
};

// Size breakpoints for responsive images
const BREAKPOINTS = [
  { suffix: '-small', width: 400 },
  { suffix: '-medium', width: 800 },
  { suffix: '-large', width: 1200 },
  // No suffix = largest size removed to avoid duplicates
];

// Card images only need one size (they're fixed dimensions)
const CARD_BREAKPOINTS = [
  { suffix: '', width: 400 }, // Single size for cards
];

interface OptimizationResult {
  original: string;
  optimized: Array<{
    format: string;
    size: string;
    path: string;
    savings: number;
  }>;
}

async function ensureDirectoryExists(dir: string) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

async function optimizeImage(inputPath: string, outputDir: string): Promise<OptimizationResult> {
  const { name, dir } = parse(inputPath);
  const relativeDir = relative(INPUT_DIR, dir);
  const outputSubDir = join(outputDir, relativeDir);

  await ensureDirectoryExists(outputSubDir);

  const originalStat = statSync(inputPath);
  const originalSize = originalStat.size;

  const result: OptimizationResult = {
    original: inputPath,
    optimized: [],
  };

  console.log(`\n🖼️  Processing: ${name}`);
  console.log(`   Original: ${formatBytes(originalSize)}`);
  // Get image metadata
  const metadata = await sharp(inputPath).metadata();
  const originalWidth = metadata.width || 1600;

  // Determine if this is a card image
  const isCardImage = name.toLowerCase().includes('card');
  const breakpoints = isCardImage ? CARD_BREAKPOINTS : BREAKPOINTS;

  console.log(`   Type: ${isCardImage ? 'Card' : 'Character'} image`);

  for (const breakpoint of breakpoints) {
    // Skip if breakpoint is larger than original
    if (breakpoint.width > originalWidth) continue;

    const baseOutputName = `${name}${breakpoint.suffix}`;

    // Generate WebP
    const webpPath = join(outputSubDir, `${baseOutputName}.webp`);
    await sharp(inputPath)
      .resize(breakpoint.width, null, {
        withoutEnlargement: true,
        fit: 'inside',
      })
      .webp({ quality: QUALITY_SETTINGS.webp })
      .toFile(webpPath);

    const webpSize = statSync(webpPath).size;
    const webpSavings = ((originalSize - webpSize) / originalSize) * 100;

    result.optimized.push({
      format: 'WebP',
      size: breakpoint.suffix || 'original',
      path: webpPath,
      savings: webpSavings,
    });

    // Generate AVIF (better compression)
    const avifPath = join(outputSubDir, `${baseOutputName}.avif`);
    await sharp(inputPath)
      .resize(breakpoint.width, null, {
        withoutEnlargement: true,
        fit: 'inside',
      })
      .avif({ quality: QUALITY_SETTINGS.avif })
      .toFile(avifPath);

    const avifSize = statSync(avifPath).size;
    const avifSavings = ((originalSize - avifSize) / originalSize) * 100;

    result.optimized.push({
      format: 'AVIF',
      size: breakpoint.suffix || 'original',
      path: avifPath,
      savings: avifSavings,
    });

    // Generate optimized JPEG as fallback
    const jpegPath = join(outputSubDir, `${baseOutputName}.jpg`);
    await sharp(inputPath)
      .resize(breakpoint.width, null, {
        withoutEnlargement: true,
        fit: 'inside',
      })
      .jpeg({ quality: QUALITY_SETTINGS.jpeg, progressive: true })
      .toFile(jpegPath);

    const jpegSize = statSync(jpegPath).size;
    const jpegSavings = ((originalSize - jpegSize) / originalSize) * 100;

    result.optimized.push({
      format: 'JPEG',
      size: breakpoint.suffix || 'original',
      path: jpegPath,
      savings: jpegSavings,
    });

    console.log(
      `   ${breakpoint.width}px - WebP: ${formatBytes(webpSize)} (${webpSavings.toFixed(1)}% smaller)`
    );
    console.log(
      `   ${breakpoint.width}px - AVIF: ${formatBytes(avifSize)} (${avifSavings.toFixed(1)}% smaller)`
    );
    console.log(
      `   ${breakpoint.width}px - JPEG: ${formatBytes(jpegSize)} (${jpegSavings.toFixed(1)}% smaller)`
    );
  }

  return result;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function walkDirectory(dir: string, files: string[] = []): Promise<string[]> {
  const items = readdirSync(dir);

  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);

    if (stat.isDirectory() && item !== 'optimized') {
      await walkDirectory(fullPath, files);
    } else if (stat.isFile() && SUPPORTED_FORMATS.some(ext => item.toLowerCase().endsWith(ext))) {
      files.push(fullPath);
    }
  }

  return files;
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  try {
    const imageFiles = await walkDirectory(INPUT_DIR);
    console.log(`Found ${imageFiles.length} images to optimize\n`);

    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;
    const results: OptimizationResult[] = [];

    for (const imagePath of imageFiles) {
      const result = await optimizeImage(imagePath, OUTPUT_DIR);
      results.push(result);

      const originalSize = statSync(result.original).size;
      totalOriginalSize += originalSize;

      // Calculate best compression (AVIF)
      const bestAvif = result.optimized.find(opt => opt.format === 'AVIF' && opt.size === '');
      if (bestAvif) {
        const optimizedSize = statSync(bestAvif.path).size;
        totalOptimizedSize += optimizedSize;
      }
    }

    console.log('\n📊 Optimization Summary:');
    console.log(`Total images processed: ${imageFiles.length}`);
    console.log(`Original total size: ${formatBytes(totalOriginalSize)}`);
    console.log(`Optimized total size: ${formatBytes(totalOptimizedSize)}`);
    console.log(
      `Total savings: ${formatBytes(totalOriginalSize - totalOptimizedSize)} (${(((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100).toFixed(1)}%)`
    );

    console.log('\n💡 Next Steps:');
    console.log('1. Update your components to use the OptimizedImage component');
    console.log('2. Replace image paths to use optimized versions');
    console.log('3. Set up automatic optimization in your build process');
    console.log('4. Consider implementing lazy loading for below-the-fold images');

    console.log('\n✨ Image optimization complete!');
  } catch (error) {
    console.error('❌ Image optimization failed:', error);
    process.exit(1);
  }
}

main();
