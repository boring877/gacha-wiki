/**
 * Setup script for automated changelog generation
 * Run this once to configure the automation system
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';

console.log('🔧 Setting up automated changelog system...');

try {
  // Configure git hooks path
  console.log('📁 Configuring git hooks...');
  execSync('git config core.hooksPath .githooks', { stdio: 'inherit' });
  
  // Make hooks executable (for Unix systems)
  if (process.platform !== 'win32') {
    console.log('🔒 Making hooks executable...');
    execSync('chmod +x .githooks/pre-commit .githooks/post-commit', { stdio: 'inherit' });
  }
  
  console.log('✅ Git hooks configured successfully');
  
  // Test the changelog generator
  console.log('🧪 Testing changelog generator...');
  
  if (existsSync('.githooks/pre-commit') && existsSync('.githooks/post-commit')) {
    console.log('✅ Git hooks are properly installed');
  } else {
    console.log('❌ Git hooks are missing');
  }
  
  console.log('\n🎉 Automation setup complete!');
  console.log('\n📋 Available commands:');
  console.log('  npm run changelog:generate  - Manually generate changelog');
  console.log('  npm run version:bump        - Bump version and generate changelog');
  console.log('  npm run hooks:install       - Reinstall git hooks');
  
  console.log('\n🔄 How it works:');
  console.log('  1. Make changes and commits as usual');
  console.log('  2. Pre-commit hook automatically generates changelog');
  console.log('  3. Post-commit hook creates version tags');
  console.log('  4. Push to trigger deployment with new version');
  
  console.log('\n💡 Commit message tips for better changelog:');
  console.log('  feat: new feature (minor version bump)');
  console.log('  fix: bug fix (patch version bump)');
  console.log('  BREAKING CHANGE: breaking change (major version bump)');
  console.log('  docs: documentation changes (no version bump)');
  
} catch (error) {
  console.error('❌ Setup failed:', error.message);
  process.exit(1);
}