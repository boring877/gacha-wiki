#!/usr/bin/env node

import { execSync } from 'child_process';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';

/**
 * Comprehensive SEO Audit and Scoring System
 * Provides automated SEO analysis with scoring and recommendations
 */

class SEOAuditor {
  constructor() {
    this.baseUrl = process.env.SITE_URL || 'https://gacha-wiki.vercel.app';
    this.results = {
      lighthouse: {},
      pagespeed: {},
      seoScore: 0,
      recommendations: [],
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Run Lighthouse audit using Chrome
   */
  async runLighthouseAudit(url) {
    try {
      console.log(`🔍 Running Lighthouse audit for: ${url}`);

      // Install lighthouse if not present
      try {
        execSync('lighthouse --version', { stdio: 'pipe' });
      } catch {
        console.log('📦 Installing Lighthouse...');
        execSync('npm install -g lighthouse', { stdio: 'inherit' });
      }

      // Run Lighthouse audit
      const outputFile = join(process.cwd(), 'lighthouse-results.json');
      const command = `lighthouse ${url} --output=json --output-path=${outputFile} --chrome-flags="--headless --no-sandbox"`;

      execSync(command, { stdio: 'pipe' });

      if (existsSync(outputFile)) {
        const results = JSON.parse(readFileSync(outputFile, 'utf8'));
        return this.parseLighthouseResults(results);
      }
    } catch (_error) {
      console.error('❌ Lighthouse audit failed:', _error.message);
      return { error: _error.message };
    }
  }

  /**
   * Parse Lighthouse results and extract SEO metrics
   */
  parseLighthouseResults(results) {
    const categories = results.categories || {};
    const audits = results.audits || {};

    return {
      seo: {
        score: Math.round((categories.seo?.score || 0) * 100),
        details: {
          'meta-description': audits['meta-description']?.score === 1,
          'document-title': audits['document-title']?.score === 1,
          'crawlable-anchors': audits['crawlable-anchors']?.score === 1,
          'is-crawlable': audits['is-crawlable']?.score === 1,
          'robots-txt': audits['robots-txt']?.score === 1,
          'image-alt': audits['image-alt']?.score === 1,
          'structured-data': audits['structured-data']?.score === 1,
          canonical: audits['canonical']?.score === 1,
        },
      },
      performance: {
        score: Math.round((categories.performance?.score || 0) * 100),
        metrics: {
          'first-contentful-paint': audits['first-contentful-paint']?.numericValue,
          'largest-contentful-paint': audits['largest-contentful-paint']?.numericValue,
          'cumulative-layout-shift': audits['cumulative-layout-shift']?.numericValue,
          'speed-index': audits['speed-index']?.numericValue,
        },
      },
      accessibility: {
        score: Math.round((categories.accessibility?.score || 0) * 100),
      },
      bestPractices: {
        score: Math.round((categories['best-practices']?.score || 0) * 100),
      },
    };
  }

  /**
   * Get PageSpeed Insights data
   */
  async getPageSpeedInsights(url) {
    try {
      console.log(`📊 Fetching PageSpeed Insights for: ${url}`);

      const apiKey = process.env.PAGESPEED_API_KEY;
      if (!apiKey) {
        console.warn('⚠️  PageSpeed API key not found. Set PAGESPEED_API_KEY environment variable');
        return { error: 'API key required' };
      }

      const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}&strategy=desktop&category=SEO&category=PERFORMANCE`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      return {
        seo: Math.round((data.lighthouseResult.categories.seo?.score || 0) * 100),
        performance: Math.round((data.lighthouseResult.categories.performance?.score || 0) * 100),
        loadingExperience: data.loadingExperience,
        originLoadingExperience: data.originLoadingExperience,
      };
    } catch (_error) {
      console.error('❌ PageSpeed Insights failed:', _error.message);
      return { error: _error.message };
    }
  }

  /**
   * Check for broken links
   */
  async checkBrokenLinks(url) {
    try {
      console.log(`🔗 Checking for broken links on: ${url}`);

      const response = await fetch(url);
      const html = await response.text();

      // Extract all links
      const linkRegex = /href=["']([^"']+)["']/g;
      const links = [...html.matchAll(linkRegex)].map(match => match[1]);

      const brokenLinks = [];
      const checkedUrls = new Set();

      for (const link of links) {
        if (checkedUrls.has(link)) continue;
        checkedUrls.add(link);

        // Skip non-HTTP links
        if (!link.startsWith('http') && !link.startsWith('/')) continue;

        try {
          const fullUrl = link.startsWith('/') ? new URL(link, url).href : link;
          const linkResponse = await fetch(fullUrl, { method: 'HEAD' });

          if (!linkResponse.ok) {
            brokenLinks.push({
              url: link,
              status: linkResponse.status,
              statusText: linkResponse.statusText,
            });
          }
        } catch (_error) {
          brokenLinks.push({
            url: link,
            error: _error.message,
          });
        }
      }

      return {
        totalLinks: links.length,
        brokenLinks: brokenLinks.length,
        brokenLinksList: brokenLinks,
      };
    } catch (_error) {
      console.error('❌ Broken link check failed:', _error.message);
      return { error: _error.message };
    }
  }

  /**
   * Calculate overall SEO score
   */
  calculateSEOScore(results) {
    const weights = {
      lighthouse: 0.4,
      pagespeed: 0.3,
      brokenLinks: 0.2,
      structured: 0.1,
    };

    let score = 0;
    let totalWeight = 0;

    if (results.lighthouse?.seo?.score) {
      score += results.lighthouse.seo.score * weights.lighthouse;
      totalWeight += weights.lighthouse;
    }

    if (results.pagespeed?.seo) {
      score += results.pagespeed.seo * weights.pagespeed;
      totalWeight += weights.pagespeed;
    }

    if (results.brokenLinks) {
      const linkScore = Math.max(0, 100 - results.brokenLinks.brokenLinks * 5);
      score += linkScore * weights.brokenLinks;
      totalWeight += weights.brokenLinks;
    }

    return totalWeight > 0 ? Math.round(score / totalWeight) : 0;
  }

  /**
   * Generate recommendations based on audit results
   */
  generateRecommendations(results) {
    const recommendations = [];

    // Lighthouse SEO recommendations
    if (results.lighthouse?.seo?.details) {
      const details = results.lighthouse.seo.details;

      if (!details['meta-description']) {
        recommendations.push({
          type: 'seo',
          priority: 'high',
          issue: 'Missing meta descriptions',
          solution: 'Add unique meta descriptions to all pages',
        });
      }

      if (!details['document-title']) {
        recommendations.push({
          type: 'seo',
          priority: 'high',
          issue: 'Missing or duplicate page titles',
          solution: 'Ensure all pages have unique, descriptive titles',
        });
      }

      if (!details['image-alt']) {
        recommendations.push({
          type: 'accessibility',
          priority: 'medium',
          issue: 'Missing image alt attributes',
          solution: 'Add descriptive alt text to all images',
        });
      }
    }

    // Performance recommendations
    if (results.lighthouse?.performance?.score < 90) {
      recommendations.push({
        type: 'performance',
        priority: 'medium',
        issue: 'Performance score below 90',
        solution: 'Optimize images, reduce JavaScript, and improve loading times',
      });
    }

    // Broken links recommendations
    if (results.brokenLinks?.brokenLinks > 0) {
      recommendations.push({
        type: 'technical',
        priority: 'high',
        issue: `${results.brokenLinks.brokenLinks} broken links found`,
        solution: 'Fix or remove broken links to improve user experience',
      });
    }

    return recommendations;
  }

  /**
   * Generate HTML report
   */
  generateHtmlReport(results) {
    const score = results.seoScore;
    const scoreColor = score >= 80 ? '#00d26a' : score >= 60 ? '#ffa500' : '#ff4444';

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEO Audit Report - ${new Date().toLocaleDateString()}</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 1200px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; margin-bottom: 40px; }
        .score-circle { width: 120px; height: 120px; border-radius: 50%; background: conic-gradient(${scoreColor} ${score * 3.6}deg, #e0e0e0 0deg); display: inline-flex; align-items: center; justify-content: center; margin: 20px; }
        .score-text { font-size: 24px; font-weight: bold; color: ${scoreColor}; }
        .metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 40px; }
        .metric-card { background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #007bff; }
        .metric-title { font-size: 18px; font-weight: bold; margin-bottom: 10px; }
        .metric-value { font-size: 24px; font-weight: bold; color: #007bff; }
        .recommendations { margin-top: 40px; }
        .recommendation { background: #fff3cd; padding: 15px; border-radius: 8px; margin-bottom: 10px; border-left: 4px solid #ffc107; }
        .recommendation.high { background: #f8d7da; border-left-color: #dc3545; }
        .recommendation.medium { background: #fff3cd; border-left-color: #ffc107; }
        .recommendation.low { background: #d4edda; border-left-color: #28a745; }
        .timestamp { text-align: center; color: #666; margin-top: 40px; }
        .broken-links { margin-top: 20px; }
        .broken-link { background: #f8d7da; padding: 10px; border-radius: 4px; margin-bottom: 5px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>SEO Audit Report</h1>
        <div class="score-circle">
            <span class="score-text">${score}</span>
        </div>
        <p>Overall SEO Score: ${score}/100</p>
    </div>

    <div class="metrics">
        ${
          results.lighthouse?.seo
            ? `
        <div class="metric-card">
            <div class="metric-title">Lighthouse SEO</div>
            <div class="metric-value">${results.lighthouse.seo.score}/100</div>
            <p>Google Lighthouse SEO audit score</p>
        </div>
        `
            : ''
        }
        
        ${
          results.lighthouse?.performance
            ? `
        <div class="metric-card">
            <div class="metric-title">Performance</div>
            <div class="metric-value">${results.lighthouse.performance.score}/100</div>
            <p>Page loading and performance metrics</p>
        </div>
        `
            : ''
        }
        
        ${
          results.pagespeed?.seo
            ? `
        <div class="metric-card">
            <div class="metric-title">PageSpeed SEO</div>
            <div class="metric-value">${results.pagespeed.seo}/100</div>
            <p>Google PageSpeed Insights SEO score</p>
        </div>
        `
            : ''
        }
        
        ${
          results.brokenLinks
            ? `
        <div class="metric-card">
            <div class="metric-title">Link Health</div>
            <div class="metric-value">${results.brokenLinks.totalLinks - results.brokenLinks.brokenLinks}/${results.brokenLinks.totalLinks}</div>
            <p>Working links found</p>
        </div>
        `
            : ''
        }
    </div>

    <div class="recommendations">
        <h2>Recommendations</h2>
        ${results.recommendations
          .map(
            rec => `
        <div class="recommendation ${rec.priority}">
            <strong>${rec.issue}</strong><br>
            ${rec.solution}
        </div>
        `
          )
          .join('')}
    </div>

    ${
      results.brokenLinks?.brokenLinksList?.length > 0
        ? `
    <div class="broken-links">
        <h2>Broken Links</h2>
        ${results.brokenLinks.brokenLinksList
          .map(
            link => `
        <div class="broken-link">
            <strong>${link.url}</strong> - ${link.status || 'Error'}: ${link.statusText || link.error}
        </div>
        `
          )
          .join('')}
    </div>
    `
        : ''
    }

    <div class="timestamp">
        Generated on ${new Date(results.timestamp).toLocaleString()}
    </div>
</body>
</html>
    `.trim();
  }

  /**
   * Run complete SEO audit
   */
  async runAudit(urls = []) {
    const testUrls =
      urls.length > 0
        ? urls
        : [this.baseUrl, `${this.baseUrl}/guides`, `${this.baseUrl}/guides/silver-and-blood`];

    console.log('🚀 Starting comprehensive SEO audit...');
    console.log(`📋 Testing ${testUrls.length} URLs`);

    const allResults = [];

    for (const url of testUrls) {
      console.log(`\n🔍 Auditing: ${url}`);

      const urlResults = {
        url,
        lighthouse: await this.runLighthouseAudit(url),
        pagespeed: await this.getPageSpeedInsights(url),
        brokenLinks: await this.checkBrokenLinks(url),
      };

      urlResults.seoScore = this.calculateSEOScore(urlResults);
      urlResults.recommendations = this.generateRecommendations(urlResults);
      urlResults.timestamp = new Date().toISOString();

      allResults.push(urlResults);
    }

    // Calculate overall score
    const overallScore = Math.round(
      allResults.reduce((sum, result) => sum + result.seoScore, 0) / allResults.length
    );

    const finalResults = {
      overallScore,
      results: allResults,
      summary: {
        totalUrls: testUrls.length,
        averageScore: overallScore,
        timestamp: new Date().toISOString(),
      },
    };

    // Save results
    writeFileSync('seo-audit-results.json', JSON.stringify(finalResults, null, 2));

    // Generate HTML report
    const htmlReport = this.generateHtmlReport({
      seoScore: overallScore,
      ...allResults[0], // Use first URL as primary
      recommendations: allResults.flatMap(r => r.recommendations),
    });

    writeFileSync('seo-audit-report.html', htmlReport);

    // Console summary
    console.log('\n📊 SEO Audit Results:');
    console.log('═══════════════════════');
    console.log(`Overall SEO Score: ${overallScore}/100`);
    console.log(`URLs tested: ${testUrls.length}`);
    console.log('');

    allResults.forEach((result, index) => {
      console.log(`${index + 1}. ${result.url}`);
      console.log(`   SEO Score: ${result.seoScore}/100`);
      if (result.lighthouse?.seo) {
        console.log(`   Lighthouse SEO: ${result.lighthouse.seo.score}/100`);
      }
      if (result.brokenLinks) {
        console.log(`   Broken Links: ${result.brokenLinks.brokenLinks}`);
      }
      console.log('');
    });

    console.log('📄 Detailed reports saved:');
    console.log('   - seo-audit-results.json');
    console.log('   - seo-audit-report.html');

    return finalResults;
  }
}

// CLI usage
if (import.meta.url === new URL(import.meta.resolve('./seo-audit.js')).href) {
  const auditor = new SEOAuditor();
  const urls = process.argv.slice(2);

  auditor.runAudit(urls).catch(console.error);
}

export default SEOAuditor;
