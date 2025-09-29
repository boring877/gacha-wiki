const fs = require('fs');
const path = require('path');

// Source and destination paths
const srcPath = path.join(
  __dirname,
  '../src/assets/images/games/horizon-walker/gameimg/gameicon.jpg'
);
const destDir = path.join(__dirname, '../public/images/games/horizon-walker/gameimg');
const destPath = path.join(destDir, 'gameicon.jpg');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log(`Created directory: ${destDir}`);
}

// Copy the image file
fs.copyFileSync(srcPath, destPath);
console.log(`Copied image from ${srcPath} to ${destPath}`);
