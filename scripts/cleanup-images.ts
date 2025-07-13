#!/usr/bin/env bun

// Clean up and reorganize optimized images folder
import { readdirSync, statSync, unlinkSync, existsSync } from 'fs';
import { join } from 'path';

const OPTIMIZED_DIR = './public/images/optimized';

interface CleanupStats {
  duplicatesRemoved: number;
  orphanedFiles: number;
  totalFilesProcessed: number;
  spaceFreed: number;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function cleanDirectory(dirPath: string): CleanupStats {
  const stats: CleanupStats = {
    duplicatesRemoved: 0,
    orphanedFiles: 0,
    totalFilesProcessed: 0,
    spaceFreed: 0
  };

  if (!existsSync(dirPath)) {
    return stats;
  }

  const files = readdirSync(dirPath);
  const imageGroups = new Map<string, string[]>();

  // Group files by base name
  for (const file of files) {
    const fullPath = join(dirPath, file);
    
    if (statSync(fullPath).isDirectory()) {
      // Recursively clean subdirectories
      const subStats = cleanDirectory(fullPath);
      stats.duplicatesRemoved += subStats.duplicatesRemoved;
      stats.orphanedFiles += subStats.orphanedFiles;
      stats.totalFilesProcessed += subStats.totalFilesProcessed;
      stats.spaceFreed += subStats.spaceFreed;
      continue;
    }

    stats.totalFilesProcessed++;

    // Extract base name (remove size suffix and extension)
    const baseName = file
      .replace(/\.(avif|webp|jpg)$/, '')
      .replace(/-(small|medium|large)$/, '');

    if (!imageGroups.has(baseName)) {
      imageGroups.set(baseName, []);
    }
    imageGroups.get(baseName)!.push(file);
  }

  // Process each group
  for (const [baseName, groupFiles] of imageGroups) {
    console.log(`\n📁 Processing: ${baseName}`);
      // Separate by type
    const cardImages = groupFiles.filter(f => f.includes('card'));
    
    // Check for duplicates (files with and without size suffix)
    const duplicates: string[] = [];
    
    for (const format of ['avif', 'webp', 'jpg']) {
      const baseFile = `${baseName}.${format}`;
      const largeFile = `${baseName}-large.${format}`;
      
      if (groupFiles.includes(baseFile) && groupFiles.includes(largeFile)) {
        // Keep the -large version, remove the base version
        duplicates.push(baseFile);
        console.log(`   🗑️  Removing duplicate: ${baseFile} (keeping ${largeFile})`);
      }
    }

    // Remove duplicates
    for (const duplicate of duplicates) {
      const filePath = join(dirPath, duplicate);
      const fileSize = statSync(filePath).size;
      unlinkSync(filePath);
      stats.duplicatesRemoved++;
      stats.spaceFreed += fileSize;
    }

    // Log what we have
    const remainingFiles = groupFiles.filter(f => !duplicates.includes(f));
    console.log(`   ✅ Files kept: ${remainingFiles.length}`);
    
    if (cardImages.length > 0) {
      console.log(`   🃏 Card images: ${cardImages.length}`);
    }
  }

  return stats;
}

async function main() {
  console.log('🧹 Starting optimized images cleanup...\n');
  
  try {
    const stats = cleanDirectory(OPTIMIZED_DIR);
    
    console.log('\n📊 Cleanup Summary:');
    console.log(`Files processed: ${stats.totalFilesProcessed}`);
    console.log(`Duplicates removed: ${stats.duplicatesRemoved}`);
    console.log(`Orphaned files: ${stats.orphanedFiles}`);
    console.log(`Space freed: ${formatBytes(stats.spaceFreed)}`);
    
    console.log('\n✨ Cleanup complete!');
    console.log('\n💡 Next Steps:');
    console.log('1. Test image loading on character pages');
    console.log('2. Verify memory cards display correctly');
    console.log('3. Re-run optimization if needed');
    
  } catch (error) {
    console.error('❌ Cleanup failed:', error);
    process.exit(1);
  }
}

main();
