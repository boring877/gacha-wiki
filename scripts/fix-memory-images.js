// Script to revert memory image paths back to original format
// The OptimizedImage component expects original paths and handles optimization automatically
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const memoriesDir = './src/data/zone-nova/memories';

// Get all memory files
const memoryFiles = readdirSync(memoriesDir).filter(file => file.endsWith('.js'));

console.log(`📁 Found ${memoryFiles.length} memory data files to fix`);

// Fix each memory file
memoryFiles.forEach(filename => {
  const filePath = join(memoriesDir, filename);
  let content = readFileSync(filePath, 'utf8');
  
  // Revert optimized paths back to original paths
  const updatedContent = content.replace(
    /image: '\/images\/optimized\/memories\/([^']+)-small\.webp'/g,
    "image: '/images/memories/$1.jpg'"
  );
  
  if (content !== updatedContent) {
    writeFileSync(filePath, updatedContent);
    console.log(`✅ Fixed ${filename}`);
  } else {
    console.log(`⏭️  Skipped ${filename} (no changes needed)`);
  }
});

console.log('\n🎉 All memory data files have been reverted to original image paths!');
console.log('📊 OptimizedImage component will now handle optimization automatically'); 