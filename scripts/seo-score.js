#!/usr/bin/env node

import { readFileSync, existsSync } from 'fs';
import { glob } from 'glob';

/**
 * Quick SEO Score Calculator
 * Provides instant SEO scoring without external dependencies
 */

class QuickSEOScore {
  constructor() {
    this.score = 0;
    this.maxScore = 100;
    this.issues = [];
    this.recommendations = [];
  }

  /**
   * Analyze Astro page files for SEO elements
   */
  analyzeAstroPages() {
    try {
      const pageFiles = this.findAstroPages();
      let totalPages = 0;
      let pagesWithTitle = 0;
      let pagesWithMeta = 0;
      let pagesWithH1 = 0;
      let pagesWithStructuredData = 0;

      for (const file of pageFiles) {
        try {
          const content = readFileSync(file, 'utf8');
          totalPages++;

          // Check for title (improved detection for Astro components)
          if (
            content.includes('<title>') ||
            content.includes('title:') ||
            content.includes('title={') ||
            content.includes('title="') ||
            content.includes("title='")
          ) {
            pagesWithTitle++;
          }

          // Check for meta description (improved detection)
          if (
            content.includes('meta name="description"') ||
            content.includes('description:') ||
            content.includes('description={') ||
            content.includes('description="') ||
            content.includes("description='")
          ) {
            pagesWithMeta++;
          }

          // Check for H1 tags (improved detection)
          if (
            content.includes('<h1>') ||
            content.includes('<h1 ') ||
            content.includes('# ') ||
            content.match(/<h1[^>]*>/)
          ) {
            pagesWithH1++;
          }

          // Check for structured data
          if (content.includes('application/ld+json') || content.includes('schema.org')) {
            pagesWithStructuredData++;
          }
        } catch (error) {
          console.warn(`Could not analyze ${file}: ${error.message}`);
        }
      }

      return {
        totalPages,
        pagesWithTitle,
        pagesWithMeta,
        pagesWithH1,
        pagesWithStructuredData,
        titleCoverage: totalPages > 0 ? (pagesWithTitle / totalPages) * 100 : 0,
        metaCoverage: totalPages > 0 ? (pagesWithMeta / totalPages) * 100 : 0,
        h1Coverage: totalPages > 0 ? (pagesWithH1 / totalPages) * 100 : 0,
        structuredDataCoverage: totalPages > 0 ? (pagesWithStructuredData / totalPages) * 100 : 0,
      };
    } catch (error) {
      console.error('Error analyzing Astro pages:', error.message);
      return null;
    }
  }

  /**
   * Find all Astro page files
   */
  findAstroPages() {
    const patterns = ['src/pages/**/*.astro', 'src/pages/**/*.md', 'src/pages/**/*.mdx'];

    let files = [];
    for (const pattern of patterns) {
      try {
        const matches = glob.sync(pattern);
        files = files.concat(matches);
      } catch (error) {
        console.warn(`Pattern ${pattern} failed:`, error.message);
      }
    }

    return files;
  }

  /**
   * Check technical SEO elements
   */
  checkTechnicalSEO() {
    const checks = {
      sitemap:
        existsSync('public/sitemap.xml') ||
        existsSync('dist/sitemap.xml') ||
        existsSync('dist/sitemap-index.xml'),
      robots: existsSync('public/robots.txt') || existsSync('dist/robots.txt'),
      astroConfig: existsSync('astro.config.mjs') || existsSync('astro.config.js'),
      seoPackage: this.checkSEOPackages(),
    };

    return checks;
  }

  /**
   * Check for SEO-related packages
   */
  checkSEOPackages() {
    try {
      const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
      const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };

      return {
        astroSEO: '@astrojs/sitemap' in deps,
        astroSitemap: '@astrojs/sitemap' in deps,
        vercelAnalytics: '@vercel/speed-insights' in deps,
        astroRSS: '@astrojs/rss' in deps,
      };
    } catch (error) {
      return {};
    }
  }

  /**
   * Calculate SEO score based on various factors
   */
  calculateScore() {
    let score = 0;
    const issues = [];
    const recommendations = [];

    // Analyze pages
    const pageAnalysis = this.analyzeAstroPages();
    if (pageAnalysis) {
      // Title coverage (25 points)
      const titleScore = Math.round(pageAnalysis.titleCoverage * 0.25);
      score += titleScore;
      if (pageAnalysis.titleCoverage < 100) {
        issues.push(`${100 - Math.round(pageAnalysis.titleCoverage)}% of pages missing titles`);
        recommendations.push('Add unique titles to all pages');
      }

      // Meta description coverage (20 points)
      const metaScore = Math.round(pageAnalysis.metaCoverage * 0.2);
      score += metaScore;
      if (pageAnalysis.metaCoverage < 100) {
        issues.push(
          `${100 - Math.round(pageAnalysis.metaCoverage)}% of pages missing meta descriptions`
        );
        recommendations.push('Add meta descriptions to all pages');
      }

      // H1 coverage (15 points)
      const h1Score = Math.round(pageAnalysis.h1Coverage * 0.15);
      score += h1Score;
      if (pageAnalysis.h1Coverage < 100) {
        issues.push(`${100 - Math.round(pageAnalysis.h1Coverage)}% of pages missing H1 tags`);
        recommendations.push('Add H1 tags to all pages');
      }

      // Structured data coverage (10 points)
      const structuredScore = Math.round(pageAnalysis.structuredDataCoverage * 0.1);
      score += structuredScore;
      if (pageAnalysis.structuredDataCoverage < 50) {
        issues.push('Low structured data coverage');
        recommendations.push('Add schema.org structured data to key pages');
      }
    }

    // Technical SEO checks (30 points)
    const technical = this.checkTechnicalSEO();

    if (technical.sitemap) {
      score += 10;
    } else {
      issues.push('No sitemap found');
      recommendations.push('Generate XML sitemap');
    }

    if (technical.robots) {
      score += 5;
    } else {
      issues.push('No robots.txt found');
      recommendations.push('Create robots.txt file');
    }

    if (technical.seoPackage.astroSitemap) {
      score += 5;
    } else {
      issues.push('Astro sitemap package not installed');
      recommendations.push('Install @astrojs/sitemap');
    }

    if (technical.seoPackage.vercelAnalytics) {
      score += 5;
    } else {
      issues.push('No analytics package found');
      recommendations.push('Add analytics tracking');
    }

    if (technical.seoPackage.astroRSS) {
      score += 5;
    } else {
      issues.push('No RSS feed generation');
      recommendations.push('Consider adding RSS feed');
    }

    return {
      score: Math.min(100, Math.round(score)),
      issues,
      recommendations,
      details: {
        pageAnalysis,
        technical,
      },
    };
  }

  /**
   * Generate score report
   */
  generateReport() {
    const result = this.calculateScore();

    console.log('\n🎯 SEO Score Report');
    console.log('═══════════════════════');
    console.log(`📊 Overall Score: ${result.score}/100`);

    // Score interpretation
    let interpretation = '';
    if (result.score >= 90) {
      interpretation = '🟢 Excellent SEO setup!';
    } else if (result.score >= 70) {
      interpretation = '🟡 Good SEO, room for improvement';
    } else if (result.score >= 50) {
      interpretation = '🟠 Average SEO, needs attention';
    } else {
      interpretation = '🔴 Poor SEO, immediate action required';
    }

    console.log(`${interpretation}\n`);

    // Page analysis details
    if (result.details.pageAnalysis) {
      const pa = result.details.pageAnalysis;
      console.log('📄 Page Analysis:');
      console.log(`   Total pages: ${pa.totalPages}`);
      console.log(`   Pages with titles: ${pa.pagesWithTitle} (${Math.round(pa.titleCoverage)}%)`);
      console.log(
        `   Pages with meta descriptions: ${pa.pagesWithMeta} (${Math.round(pa.metaCoverage)}%)`
      );
      console.log(`   Pages with H1 tags: ${pa.pagesWithH1} (${Math.round(pa.h1Coverage)}%)`);
      console.log(
        `   Pages with structured data: ${pa.pagesWithStructuredData} (${Math.round(pa.structuredDataCoverage)}%)`
      );
      console.log('');
    }

    // Technical SEO
    console.log('🔧 Technical SEO:');
    const tech = result.details.technical;
    console.log(`   Sitemap: ${tech.sitemap ? '✅' : '❌'}`);
    console.log(`   Robots.txt: ${tech.robots ? '✅' : '❌'}`);
    console.log(`   Astro sitemap: ${tech.seoPackage.astroSitemap ? '✅' : '❌'}`);
    console.log(`   Analytics: ${tech.seoPackage.vercelAnalytics ? '✅' : '❌'}`);
    console.log('');

    // Issues
    if (result.issues.length > 0) {
      console.log('⚠️  Issues Found:');
      result.issues.forEach((issue, index) => {
        console.log(`   ${index + 1}. ${issue}`);
      });
      console.log('');
    }

    // Recommendations
    if (result.recommendations.length > 0) {
      console.log('💡 Recommendations:');
      result.recommendations.forEach((rec, index) => {
        console.log(`   ${index + 1}. ${rec}`);
      });
      console.log('');
    }

    // Quick wins
    console.log('🚀 Quick Wins:');
    if (result.score < 90) {
      console.log('   1. Run full audit: npm run seo:audit');
      console.log('   2. Check live site: npm run seo:live');
      console.log('   3. Monitor performance: npm run seo:monitor');
    } else {
      console.log('   🎉 Your SEO is already excellent!');
      console.log('   Consider running periodic audits to maintain quality.');
    }

    return result;
  }
}

// CLI usage
if (import.meta.url === new URL(import.meta.resolve('./seo-score.js')).href) {
  const scorer = new QuickSEOScore();
  scorer.generateReport();
}

export default QuickSEOScore;
