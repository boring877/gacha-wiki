#!/usr/bin/env bun

// Performance testing script for local development
import { spawn } from 'child_process';

interface PerformanceMetrics {
  buildTime: number;
  bundleSize: number;
  pageLoadTime?: number;
}

async function measureBuildTime(): Promise<number> {
  console.log('🏗️  Measuring build time...');

  const startTime = Date.now();

  return new Promise((resolve, reject) => {
    const buildProcess = spawn('bun', ['run', 'build'], {
      stdio: 'inherit',
    });

    buildProcess.on('close', code => {
      if (code === 0) {
        const buildTime = Date.now() - startTime;
        console.log(`✅ Build completed in ${buildTime}ms`);
        resolve(buildTime);
      } else {
        reject(new Error(`Build failed with code ${code}`));
      }
    });
  });
}

async function measureBundleSize(): Promise<number> {
  console.log('📦 Measuring bundle size...');

  // This would typically use fs to measure the dist folder size
  // For now, return a placeholder
  return 1024 * 1024; // 1MB placeholder
}

async function runPerformanceTest() {
  console.log('🚀 Starting performance test...\n');

  try {
    const metrics: PerformanceMetrics = {
      buildTime: await measureBuildTime(),
      bundleSize: await measureBundleSize(),
    };

    console.log('\n📊 Performance Results:');
    console.log(`Build Time: ${metrics.buildTime}ms`);
    console.log(`Bundle Size: ${(metrics.bundleSize / 1024 / 1024).toFixed(2)}MB`);

    // Performance recommendations
    console.log('\n💡 Recommendations:');

    if (metrics.buildTime > 30000) {
      // > 30 seconds
      console.log('⚠️  Build time is slow. Consider optimizing build configuration.');
    } else if (metrics.buildTime < 5000) {
      // < 5 seconds
      console.log('✅ Excellent build time!');
    }

    if (metrics.bundleSize > 5 * 1024 * 1024) {
      // > 5MB
      console.log('⚠️  Bundle size is large. Consider code splitting.');
    } else if (metrics.bundleSize < 1024 * 1024) {
      // < 1MB
      console.log('✅ Excellent bundle size!');
    }

    console.log('\n✨ Performance test complete!');
  } catch (error) {
    console.error('❌ Performance test failed:', error);
    process.exit(1);
  }
}

runPerformanceTest();
