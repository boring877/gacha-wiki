import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Character import fixes
const importFixes = {
  'greed-mammon': {
    data: 'greedMammonData',
    seo: 'greedMammonSEO',
  },
  'jeanne-darc': {
    data: 'jeanneDArcData',
    seo: 'jeanneDArcSEO',
  },
  'snow-girl': {
    data: 'snowGirlData',
    seo: 'snowGirlSEO',
  },
  'zashiki-warashi': {
    data: 'zashikiWarashiData',
    seo: 'zashikiWarashiSEO',
  },
};

console.log('🔧 Fixing import names for hyphenated characters...\n');

Object.entries(importFixes).forEach(([fileName, { data, seo }]) => {
  const filePath = path.join(
    __dirname,
    `../src/pages/guides/zone-nova/characters/${fileName}.astro`
  );

  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Generate incorrect names that the script created
    const incorrectDataName = fileName.replace(/-/g, '').toLowerCase() + 'Data';
    const incorrectSeoName = fileName.replace(/-/g, '').toLowerCase() + 'SEO';

    // Fix data import
    content = content.replace(new RegExp(incorrectDataName, 'g'), data);

    // Fix SEO import
    content = content.replace(new RegExp(incorrectSeoName, 'g'), seo);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${fileName}.astro`);
    console.log(`   ${incorrectDataName} → ${data}`);
    console.log(`   ${incorrectSeoName} → ${seo}\n`);
  } catch (error) {
    console.log(`❌ Error fixing ${fileName}.astro:`, error.message);
  }
});

console.log('✨ Import name fixes completed!');
