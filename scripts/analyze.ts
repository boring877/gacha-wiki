#!/usr/bin/env bun

// Bundle analyzer for checking asset sizes and performance
import { readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const DIST_DIR = './dist';

interface AssetInfo {
  path: string;
  size: number;
  type: string;
  gzipSize?: number;
  brotliSize?: number;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function getAssetType(filePath: string): string {
  const ext = extname(filePath).toLowerCase();
  switch (ext) {
    case '.js': return 'JavaScript';
    case '.css': return 'CSS';
    case '.html': return 'HTML';
    case '.json': return 'JSON';
    case '.svg': return 'SVG';
    case '.png': case '.jpg': case '.jpeg': case '.webp': case '.avif': return 'Image';
    case '.woff': case '.woff2': return 'Font';
    default: return 'Other';
  }
}

function walkDirectory(dir: string, assets: AssetInfo[] = []): AssetInfo[] {
  const items = readdirSync(dir);
  
  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      walkDirectory(fullPath, assets);
    } else if (stat.isFile() && !item.endsWith('.gz') && !item.endsWith('.br')) {
      const relativePath = fullPath.replace(DIST_DIR + '/', '');
      const asset: AssetInfo = {
        path: relativePath,
        size: stat.size,
        type: getAssetType(fullPath)
      };
      
      // Check for compressed versions
      try {
        const gzipStat = statSync(fullPath + '.gz');
        asset.gzipSize = gzipStat.size;
      } catch {}
      
      try {
        const brotliStat = statSync(fullPath + '.br');
        asset.brotliSize = brotliStat.size;
      } catch {}
      
      assets.push(asset);
    }
  }
  
  return assets;
}

function analyzeBundle() {
  console.log('📊 Analyzing bundle...\n');
  
  const assets = walkDirectory(DIST_DIR);
  
  // Sort by size (largest first)
  assets.sort((a, b) => b.size - a.size);
  
  // Group by type
  const byType: Record<string, AssetInfo[]> = {};
  assets.forEach(asset => {
    if (!byType[asset.type]) byType[asset.type] = [];
    byType[asset.type].push(asset);
  });
  
  // Summary
  const totalSize = assets.reduce((sum, asset) => sum + asset.size, 0);
  const totalGzipSize = assets.reduce((sum, asset) => sum + (asset.gzipSize || 0), 0);
  const totalBrotliSize = assets.reduce((sum, asset) => sum + (asset.brotliSize || 0), 0);
  
  console.log('📈 Bundle Summary:');
  console.log(`Total files: ${assets.length}`);
  console.log(`Total size: ${formatBytes(totalSize)}`);
  console.log(`Gzipped: ${formatBytes(totalGzipSize)} (${((totalGzipSize / totalSize) * 100).toFixed(1)}% compression)`);
  console.log(`Brotli: ${formatBytes(totalBrotliSize)} (${((totalBrotliSize / totalSize) * 100).toFixed(1)}% compression)\n`);
  
  // By type
  console.log('📁 Assets by Type:');
  Object.entries(byType).forEach(([type, typeAssets]) => {
    const typeSize = typeAssets.reduce((sum, asset) => sum + asset.size, 0);
    const percentage = ((typeSize / totalSize) * 100).toFixed(1);
    console.log(`${type}: ${formatBytes(typeSize)} (${percentage}%) - ${typeAssets.length} files`);
  });
  
  console.log('\n🔍 Largest Assets:');
  assets.slice(0, 10).forEach(asset => {
    const compressionInfo = asset.gzipSize 
      ? ` | Gzipped: ${formatBytes(asset.gzipSize)}`
      : '';
    console.log(`${asset.path}: ${formatBytes(asset.size)}${compressionInfo}`);
  });
  
  // Performance recommendations
  console.log('\n💡 Performance Recommendations:');
  
  const largeAssets = assets.filter(asset => asset.size > 100 * 1024); // > 100KB
  if (largeAssets.length > 0) {
    console.log(`⚠️  Found ${largeAssets.length} large assets (>100KB). Consider code splitting or lazy loading.`);
  }
  
  const uncompressedAssets = assets.filter(asset => 
    asset.size > 1024 && !asset.gzipSize && 
    ['JavaScript', 'CSS', 'HTML', 'JSON', 'SVG'].includes(asset.type)
  );
  if (uncompressedAssets.length > 0) {
    console.log(`⚠️  Found ${uncompressedAssets.length} uncompressed text assets. Run compression.`);
  }
  
  const totalJSSize = byType['JavaScript']?.reduce((sum, asset) => sum + asset.size, 0) || 0;
  if (totalJSSize > 250 * 1024) { // > 250KB
    console.log(`⚠️  JavaScript bundle is ${formatBytes(totalJSSize)}. Consider code splitting.`);
  }
  
  const totalCSSSize = byType['CSS']?.reduce((sum, asset) => sum + asset.size, 0) || 0;
  if (totalCSSSize > 100 * 1024) { // > 100KB
    console.log(`⚠️  CSS bundle is ${formatBytes(totalCSSSize)}. Consider purging unused styles.`);
  }
  
  console.log('\n✨ Analysis complete!');
}

analyzeBundle();
