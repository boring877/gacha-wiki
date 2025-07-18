#!/usr/bin/env node

import { writeFileSync, readFileSync } from 'fs';

/**
 * Core Web Vitals Tracking and Analysis
 * Measures and tracks Core Web Vitals metrics
 */

class CoreWebVitalsTracker {
  constructor() {
    this.baseUrl = process.env.SITE_URL || 'https://gacha-wiki.vercel.app';
    this.vitalsFile = 'core-web-vitals.json';
  }

  /**
   * Generate Core Web Vitals tracking script for client-side
   */
  generateTrackingScript() {
    return `
// Core Web Vitals Tracking Script
// Add this to your site to track performance metrics

import { onCLS, onFCP, onFID, onLCP, onTTFB, onINP } from 'web-vitals';

class WebVitalsTracker {
  constructor() {
    this.metrics = {};
    this.startTime = performance.now();
    this.init();
  }

  init() {
    // Track Core Web Vitals
    onCLS(this.handleMetric.bind(this, 'CLS'));
    onFCP(this.handleMetric.bind(this, 'FCP'));
    onFID(this.handleMetric.bind(this, 'FID'));
    onLCP(this.handleMetric.bind(this, 'LCP'));
    onTTFB(this.handleMetric.bind(this, 'TTFB'));
    onINP(this.handleMetric.bind(this, 'INP'));

    // Send data when page is about to unload
    window.addEventListener('beforeunload', () => {
      this.sendMetrics();
    });

    // Also send after 10 seconds
    setTimeout(() => {
      this.sendMetrics();
    }, 10000);
  }

  handleMetric(name, metric) {
    this.metrics[name] = {
      name: metric.name,
      value: metric.value,
      delta: metric.delta,
      id: metric.id,
      rating: metric.rating
    };

    console.log(\`\${name}: \${metric.value} (\${metric.rating})\`);
  }

  sendMetrics() {
    if (Object.keys(this.metrics).length === 0) return;

    const data = {
      url: window.location.href,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      connection: navigator.connection ? {
        effectiveType: navigator.connection.effectiveType,
        downlink: navigator.connection.downlink,
        rtt: navigator.connection.rtt
      } : null,
      metrics: this.metrics,
      pageLoadTime: performance.now() - this.startTime
    };

    // Send to analytics endpoint
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/vitals', JSON.stringify(data));
    } else {
      fetch('/api/vitals', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch(console.error);
    }
  }

  getScore() {
    const scores = {
      CLS: this.getMetricScore('CLS', this.metrics.CLS?.value, [0.1, 0.25]),
      FCP: this.getMetricScore('FCP', this.metrics.FCP?.value, [1800, 3000]),
      FID: this.getMetricScore('FID', this.metrics.FID?.value, [100, 300]),
      LCP: this.getMetricScore('LCP', this.metrics.LCP?.value, [2500, 4000]),
      TTFB: this.getMetricScore('TTFB', this.metrics.TTFB?.value, [800, 1800]),
      INP: this.getMetricScore('INP', this.metrics.INP?.value, [200, 500])
    };

    const validScores = Object.values(scores).filter(s => s !== null);
    const averageScore = validScores.length > 0 
      ? validScores.reduce((sum, score) => sum + score, 0) / validScores.length
      : 0;

    return {
      overall: Math.round(averageScore),
      individual: scores,
      metrics: this.metrics
    };
  }

  getMetricScore(name, value, thresholds) {
    if (value === undefined || value === null) return null;

    const [good, needsImprovement] = thresholds;
    
    if (name === 'CLS') {
      // Lower is better for CLS
      if (value <= good) return 100;
      if (value <= needsImprovement) return 50;
      return 0;
    } else {
      // Lower is better for all other metrics
      if (value <= good) return 100;
      if (value <= needsImprovement) return 50;
      return 0;
    }
  }
}

// Initialize tracker
const vitalsTracker = new WebVitalsTracker();

// Export for manual access
window.webVitals = vitalsTracker;
    `.trim();
  }

  /**
   * Analyze Core Web Vitals using PageSpeed Insights
   */
  async analyzeVitals(url) {
    try {
      console.log(`📊 Analyzing Core Web Vitals for: ${url}`);

      const apiKey = process.env.PAGESPEED_API_KEY;
      if (!apiKey) {
        console.warn('⚠️  PageSpeed API key not found. Using Lighthouse instead...');
        return await this.analyzeLighthouseVitals(url);
      }

      const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}&strategy=mobile&category=PERFORMANCE`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      const audits = data.lighthouseResult.audits;
      const loadingExperience = data.loadingExperience;

      return {
        url,
        timestamp: new Date().toISOString(),
        lab: {
          CLS: audits['cumulative-layout-shift']?.numericValue,
          FCP: audits['first-contentful-paint']?.numericValue,
          FID: audits['max-potential-fid']?.numericValue,
          LCP: audits['largest-contentful-paint']?.numericValue,
          TTFB: audits['server-response-time']?.numericValue,
          TBT: audits['total-blocking-time']?.numericValue,
        },
        field: loadingExperience
          ? {
              CLS: loadingExperience.metrics?.CUMULATIVE_LAYOUT_SHIFT_SCORE,
              FCP: loadingExperience.metrics?.FIRST_CONTENTFUL_PAINT_MS,
              FID: loadingExperience.metrics?.FIRST_INPUT_DELAY_MS,
              LCP: loadingExperience.metrics?.LARGEST_CONTENTFUL_PAINT_MS,
            }
          : null,
        performance: Math.round((data.lighthouseResult.categories.performance?.score || 0) * 100),
      };
    } catch (error) {
      console.error('❌ PageSpeed analysis failed:', error.message);
      return await this.analyzeLighthouseVitals(url);
    }
  }

  /**
   * Fallback: Analyze using Lighthouse
   */
  async analyzeLighthouseVitals(url) {
    try {
      const { execSync } = await import('child_process');

      console.log('🔍 Using Lighthouse for Core Web Vitals analysis...');

      const outputFile = 'lighthouse-cwv.json';
      const command = `lighthouse ${url} --output=json --output-path=${outputFile} --only-categories=performance --chrome-flags="--headless"`;

      execSync(command, { stdio: 'pipe' });

      const results = JSON.parse(readFileSync(outputFile, 'utf8'));
      const audits = results.audits;

      return {
        url,
        timestamp: new Date().toISOString(),
        lab: {
          CLS: audits['cumulative-layout-shift']?.numericValue,
          FCP: audits['first-contentful-paint']?.numericValue,
          FID: audits['max-potential-fid']?.numericValue,
          LCP: audits['largest-contentful-paint']?.numericValue,
          TTFB: audits['server-response-time']?.numericValue,
          TBT: audits['total-blocking-time']?.numericValue,
        },
        field: null,
        performance: Math.round((results.categories.performance?.score || 0) * 100),
      };
    } catch (error) {
      console.error('❌ Lighthouse analysis failed:', error.message);
      return null;
    }
  }

  /**
   * Score Core Web Vitals
   */
  scoreVitals(vitals) {
    const thresholds = {
      CLS: [0.1, 0.25],
      FCP: [1800, 3000],
      FID: [100, 300],
      LCP: [2500, 4000],
      TTFB: [800, 1800],
      TBT: [200, 600],
    };

    const scores = {};
    let totalScore = 0;
    let metricsCount = 0;

    for (const [metric, value] of Object.entries(vitals.lab)) {
      if (value === null || value === undefined) continue;

      const [good, needsImprovement] = thresholds[metric] || [0, 0];
      let score = 0;

      if (metric === 'CLS') {
        // Lower is better for CLS
        if (value <= good) score = 100;
        else if (value <= needsImprovement) score = 50;
        else score = 0;
      } else {
        // Lower is better for all other metrics
        if (value <= good) score = 100;
        else if (value <= needsImprovement) score = 50;
        else score = 0;
      }

      scores[metric] = {
        value,
        score,
        rating: score >= 90 ? 'good' : score >= 50 ? 'needs-improvement' : 'poor',
      };

      totalScore += score;
      metricsCount++;
    }

    return {
      overall: metricsCount > 0 ? Math.round(totalScore / metricsCount) : 0,
      individual: scores,
      performance: vitals.performance,
    };
  }

  /**
   * Generate Core Web Vitals report
   */
  generateReport(vitals, scores) {
    console.log('\n📊 Core Web Vitals Report');
    console.log('═══════════════════════════');
    console.log(`📈 Overall Score: ${scores.overall}/100`);
    console.log(`⚡ Performance Score: ${scores.performance}/100`);
    console.log(`🔗 URL: ${vitals.url}`);
    console.log(`📅 Analyzed: ${new Date(vitals.timestamp).toLocaleString()}`);
    console.log('');

    // Individual metrics
    console.log('📋 Individual Metrics:');
    for (const [metric, data] of Object.entries(scores.individual)) {
      const icon =
        data.rating === 'good' ? '🟢' : data.rating === 'needs-improvement' ? '🟡' : '🔴';
      const unit = this.getMetricUnit(metric);
      console.log(`   ${icon} ${metric}: ${data.value}${unit} (${data.score}/100)`);
    }
    console.log('');

    // Recommendations
    console.log('💡 Recommendations:');
    const recommendations = [];

    for (const [metric, data] of Object.entries(scores.individual)) {
      if (data.rating === 'poor') {
        recommendations.push(this.getRecommendation(metric));
      }
    }

    if (recommendations.length > 0) {
      recommendations.forEach((rec, index) => {
        console.log(`   ${index + 1}. ${rec}`);
      });
    } else {
      console.log('   🎉 All metrics are performing well!');
    }

    console.log('');
    console.log('🔗 Learn more: https://web.dev/vitals/');
  }

  /**
   * Get metric unit
   */
  getMetricUnit(metric) {
    switch (metric) {
      case 'CLS':
        return '';
      case 'FCP':
      case 'FID':
      case 'LCP':
      case 'TTFB':
      case 'TBT':
        return 'ms';
      default:
        return '';
    }
  }

  /**
   * Get recommendation for metric
   */
  getRecommendation(metric) {
    const recommendations = {
      CLS: 'Optimize layout stability - avoid inserting content above existing content',
      FCP: 'Optimize First Contentful Paint - reduce server response time and eliminate render-blocking resources',
      FID: 'Improve First Input Delay - minimize main thread work and reduce JavaScript execution time',
      LCP: 'Optimize Largest Contentful Paint - optimize images and reduce server response time',
      TTFB: 'Improve Time to First Byte - optimize server performance and use CDN',
      TBT: 'Reduce Total Blocking Time - split long tasks and optimize JavaScript',
    };

    return recommendations[metric] || 'Optimize this metric for better performance';
  }

  /**
   * Run Core Web Vitals analysis
   */
  async runAnalysis(urls = []) {
    const testUrls = urls.length > 0 ? urls : [this.baseUrl];

    console.log('🚀 Starting Core Web Vitals analysis...');
    console.log(`📋 Testing ${testUrls.length} URL(s)`);

    const results = [];

    for (const url of testUrls) {
      console.log(`\n🔍 Analyzing: ${url}`);

      const vitals = await this.analyzeVitals(url);
      if (vitals) {
        const scores = this.scoreVitals(vitals);
        results.push({ vitals, scores });

        this.generateReport(vitals, scores);
      }
    }

    // Save results
    const timestamp = new Date().toISOString();
    const reportData = {
      timestamp,
      results,
      summary: {
        totalUrls: testUrls.length,
        averageScore:
          results.length > 0
            ? Math.round(results.reduce((sum, r) => sum + r.scores.overall, 0) / results.length)
            : 0,
      },
    };

    writeFileSync(this.vitalsFile, JSON.stringify(reportData, null, 2));
    console.log(`\n📄 Results saved to: ${this.vitalsFile}`);

    return reportData;
  }
}

// CLI usage
if (import.meta.url === new URL(import.meta.resolve('./core-web-vitals.js')).href) {
  const tracker = new CoreWebVitalsTracker();
  const urls = process.argv.slice(2);

  if (process.argv.includes('--generate-script')) {
    console.log('// Core Web Vitals Tracking Script');
    console.log('// Save as: src/scripts/web-vitals.js');
    console.log('// Import in your pages for client-side tracking');
    console.log('');
    console.log(tracker.generateTrackingScript());
  } else {
    tracker.runAnalysis(urls).catch(console.error);
  }
}

export default CoreWebVitalsTracker;
