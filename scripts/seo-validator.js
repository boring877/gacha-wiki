#!/usr/bin/env node

import { readFileSync } from 'fs';
import { glob } from 'glob';

/**
 * SEO Validator - Meta Tags, Structured Data, and Content Analysis
 * Validates SEO elements across all pages
 */

class SEOValidator {
  constructor() {
    this.issues = [];
    this.warnings = [];
    this.validPages = 0;
    this.totalPages = 0;
  }

  /**
   * Validate all pages in the project
   */
  async validateAll() {
    console.log('🔍 SEO Validation Starting...');
    console.log('═══════════════════════════');

    const pages = this.findPages();
    this.totalPages = pages.length;

    console.log(`📄 Found ${pages.length} pages to validate`);
    console.log('');

    for (const page of pages) {
      await this.validatePage(page);
    }

    this.generateReport();
    return this.getResults();
  }

  /**
   * Find all page files
   */
  findPages() {
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
   * Validate individual page
   */
  async validatePage(filePath) {
    try {
      const content = readFileSync(filePath, 'utf8');
      const relativePath = filePath.replace(process.cwd() + '/', '');

      console.log(`🔍 Validating: ${relativePath}`);

      const validation = {
        file: relativePath,
        title: this.validateTitle(content),
        metaDescription: this.validateMetaDescription(content),
        headings: this.validateHeadings(content),
        images: this.validateImages(content),
        links: this.validateLinks(content),
        structuredData: this.validateStructuredData(content),
        socialMeta: this.validateSocialMeta(content),
        canonical: this.validateCanonical(content),
        contentLength: this.validateContentLength(content),
      };

      const pageIssues = this.collectPageIssues(validation);

      if (pageIssues.length === 0) {
        this.validPages++;
        console.log(`   ✅ No issues found`);
      } else {
        console.log(`   ⚠️  ${pageIssues.length} issues found`);
        pageIssues.forEach(issue => {
          console.log(`      - ${issue}`);
        });
      }

      console.log('');
    } catch (error) {
      this.issues.push(`Error validating ${filePath}: ${error.message}`);
      console.error(`❌ Error validating ${filePath}:`, error.message);
    }
  }

  /**
   * Validate page title
   */
  validateTitle(content) {
    const issues = [];

    // Check for title in frontmatter
    const frontmatterTitle = content.match(/^---[\s\S]*?title:\s*["']([^"']+)["'][\s\S]*?---/);

    // Check for HTML title tag
    const htmlTitle = content.match(/<title[^>]*>([^<]+)<\/title>/);

    if (!frontmatterTitle && !htmlTitle) {
      issues.push('Missing page title');
    } else {
      const title = frontmatterTitle ? frontmatterTitle[1] : htmlTitle[1];

      if (title.length < 10) {
        issues.push('Title too short (< 10 characters)');
      }

      if (title.length > 60) {
        issues.push('Title too long (> 60 characters)');
      }

      if (title.toLowerCase() === title) {
        issues.push('Title should use proper capitalization');
      }
    }

    return issues;
  }

  /**
   * Validate meta description
   */
  validateMetaDescription(content) {
    const issues = [];

    // Check for meta description in frontmatter
    const frontmatterDesc = content.match(/^---[\s\S]*?description:\s*["']([^"']+)["'][\s\S]*?---/);

    // Check for HTML meta description
    const htmlMeta = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/);

    if (!frontmatterDesc && !htmlMeta) {
      issues.push('Missing meta description');
    } else {
      const description = frontmatterDesc ? frontmatterDesc[1] : htmlMeta[1];

      if (description.length < 120) {
        issues.push('Meta description too short (< 120 characters)');
      }

      if (description.length > 160) {
        issues.push('Meta description too long (> 160 characters)');
      }

      if (!description.includes(' ')) {
        issues.push('Meta description should contain multiple words');
      }
    }

    return issues;
  }

  /**
   * Validate heading structure
   */
  validateHeadings(content) {
    const issues = [];

    // Find all headings
    const headings = content.match(/^#{1,6}\s+.+$/gm) || [];
    const htmlHeadings = content.match(/<h[1-6][^>]*>([^<]+)<\/h[1-6]>/gi) || [];

    const allHeadings = [...headings, ...htmlHeadings];

    if (allHeadings.length === 0) {
      issues.push('No headings found');
      return issues;
    }

    // Check for H1
    const h1Count = allHeadings.filter(h => h.startsWith('# ') || h.startsWith('<h1')).length;

    if (h1Count === 0) {
      issues.push('Missing H1 heading');
    } else if (h1Count > 1) {
      issues.push('Multiple H1 headings found');
    }

    // Check heading hierarchy
    const headingLevels = allHeadings.map(h => {
      if (h.startsWith('#')) {
        return h.match(/^#{1,6}/)[0].length;
      } else {
        const match = h.match(/<h([1-6])/);
        return match ? parseInt(match[1]) : 1;
      }
    });

    for (let i = 1; i < headingLevels.length; i++) {
      if (headingLevels[i] - headingLevels[i - 1] > 1) {
        issues.push('Heading hierarchy skip detected');
        break;
      }
    }

    return issues;
  }

  /**
   * Validate images
   */
  validateImages(content) {
    const issues = [];

    // Find all image tags
    const images = content.match(/<img[^>]*>/gi) || [];
    const markdownImages = content.match(/!\[[^\]]*\]\([^)]+\)/g) || [];

    const allImages = [...images, ...markdownImages];

    for (const img of allImages) {
      // Check for alt text
      if (img.startsWith('<img')) {
        if (!img.includes('alt=')) {
          issues.push('Image missing alt attribute');
        } else {
          const altMatch = img.match(/alt=["']([^"']*)["']/);
          if (altMatch && altMatch[1].length === 0) {
            issues.push('Image has empty alt attribute');
          }
        }
      } else {
        // Markdown image
        const altMatch = img.match(/!\[([^\]]*)\]/);
        if (altMatch && altMatch[1].length === 0) {
          issues.push('Markdown image missing alt text');
        }
      }
    }

    return issues;
  }

  /**
   * Validate links
   */
  validateLinks(content) {
    const issues = [];

    // Find all links
    const htmlLinks = content.match(/<a[^>]*href=["']([^"']+)["'][^>]*>/gi) || [];
    const markdownLinks = content.match(/\[([^\]]+)\]\(([^)]+)\)/g) || [];

    let externalLinks = 0;
    let internalLinks = 0;

    htmlLinks.forEach(link => {
      const hrefMatch = link.match(/href=["']([^"']+)["']/);
      if (hrefMatch) {
        const href = hrefMatch[1];
        if (href.startsWith('http')) {
          externalLinks++;
          // Check if external links have proper attributes
          if (!link.includes('rel=') && !href.includes(location?.hostname || 'gacha-wiki')) {
            issues.push('External link missing rel attribute');
          }
        } else {
          internalLinks++;
        }
      }
    });

    markdownLinks.forEach(link => {
      const match = link.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (match) {
        const href = match[2];
        if (href.startsWith('http')) {
          externalLinks++;
        } else {
          internalLinks++;
        }
      }
    });

    if (externalLinks + internalLinks === 0) {
      issues.push('No links found - consider adding relevant links');
    }

    return issues;
  }

  /**
   * Validate structured data
   */
  validateStructuredData(content) {
    const issues = [];

    // Check for JSON-LD structured data
    const jsonLd = content.match(
      /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
    );

    if (!jsonLd) {
      issues.push('No structured data found');
      return issues;
    }

    jsonLd.forEach(script => {
      try {
        const jsonContent = script.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
        const data = JSON.parse(jsonContent);

        // Basic validation
        if (!data['@type']) {
          issues.push('Structured data missing @type');
        }

        if (!data['@context']) {
          issues.push('Structured data missing @context');
        }

        // Validate common types
        if (data['@type'] === 'WebPage' || data['@type'] === 'Article') {
          if (!data.name && !data.headline) {
            issues.push('Structured data missing name/headline');
          }

          if (!data.description) {
            issues.push('Structured data missing description');
          }
        }
      } catch (error) {
        issues.push('Invalid JSON-LD structured data');
      }
    });

    return issues;
  }

  /**
   * Validate social media meta tags
   */
  validateSocialMeta(content) {
    const issues = [];

    // Check for Open Graph tags
    const ogTags = content.match(/<meta\s+property=["']og:[^"']+["'][^>]*>/gi) || [];
    const twitterTags = content.match(/<meta\s+name=["']twitter:[^"']+["'][^>]*>/gi) || [];

    const requiredOg = ['og:title', 'og:description', 'og:image', 'og:url'];
    const requiredTwitter = ['twitter:card', 'twitter:title', 'twitter:description'];

    const foundOg = ogTags.map(tag => {
      const match = tag.match(/property=["']([^"']+)["']/);
      return match ? match[1] : '';
    });

    const foundTwitter = twitterTags.map(tag => {
      const match = tag.match(/name=["']([^"']+)["']/);
      return match ? match[1] : '';
    });

    requiredOg.forEach(required => {
      if (!foundOg.includes(required)) {
        issues.push(`Missing ${required} meta tag`);
      }
    });

    requiredTwitter.forEach(required => {
      if (!foundTwitter.includes(required)) {
        issues.push(`Missing ${required} meta tag`);
      }
    });

    return issues;
  }

  /**
   * Validate canonical URL
   */
  validateCanonical(content) {
    const issues = [];

    const canonical = content.match(/<link[^>]*rel=["']canonical["'][^>]*>/i);

    if (!canonical) {
      issues.push('Missing canonical link');
    } else {
      const href = canonical[0].match(/href=["']([^"']+)["']/);
      if (!href) {
        issues.push('Canonical link missing href');
      } else if (!href[1].startsWith('http')) {
        issues.push('Canonical URL should be absolute');
      }
    }

    return issues;
  }

  /**
   * Validate content length
   */
  validateContentLength(content) {
    const issues = [];

    // Remove frontmatter, HTML tags, and markdown syntax
    const cleanContent = content
      .replace(/^---[\s\S]*?---\n/, '') // Remove frontmatter
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/!\[[^\]]*\]\([^)]+\)/g, '') // Remove images
      .replace(/\[[^\]]+\]\([^)]+\)/g, '') // Remove links
      .replace(/#{1,6}\s+/g, '') // Remove heading markers
      .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
      .replace(/\*([^*]+)\*/g, '$1') // Remove italic
      .replace(/`([^`]+)`/g, '$1') // Remove code
      .trim();

    const wordCount = cleanContent.split(/\s+/).filter(word => word.length > 0).length;

    if (wordCount < 50) {
      issues.push('Content too short (< 50 words)');
    }

    if (wordCount > 2000) {
      issues.push('Content very long (> 2000 words) - consider splitting');
    }

    return issues;
  }

  /**
   * Collect all issues for a page
   */
  collectPageIssues(validation) {
    const allIssues = [];

    for (const [category, issues] of Object.entries(validation)) {
      if (category === 'file') continue;

      if (Array.isArray(issues)) {
        issues.forEach(issue => {
          allIssues.push(`${category}: ${issue}`);
          this.issues.push(`${validation.file} - ${category}: ${issue}`);
        });
      }
    }

    return allIssues;
  }

  /**
   * Generate validation report
   */
  generateReport() {
    console.log('\n📊 SEO Validation Report');
    console.log('═════════════════════════');
    console.log(`✅ Valid pages: ${this.validPages}/${this.totalPages}`);
    console.log(`⚠️  Total issues: ${this.issues.length}`);

    if (this.issues.length > 0) {
      console.log('\n🔍 Issues by category:');

      const categories = {};
      this.issues.forEach(issue => {
        const category = issue.split(' - ')[1]?.split(':')[0] || 'other';
        categories[category] = (categories[category] || 0) + 1;
      });

      Object.entries(categories)
        .sort(([, a], [, b]) => b - a)
        .forEach(([category, count]) => {
          console.log(`   ${category}: ${count} issues`);
        });
    }

    console.log('\n💡 Recommendations:');
    if (this.issues.length === 0) {
      console.log('   🎉 All pages pass SEO validation!');
    } else {
      console.log('   1. Fix missing meta descriptions first');
      console.log('   2. Add structured data to key pages');
      console.log('   3. Optimize image alt text');
      console.log('   4. Review heading structure');
      console.log('   5. Add social media meta tags');
    }

    console.log('\n📈 SEO Score Impact:');
    const score = Math.max(0, 100 - this.issues.length * 2);
    console.log(`   Estimated SEO score: ${score}/100`);

    if (score < 70) {
      console.log('   🔴 Critical: Address issues immediately');
    } else if (score < 85) {
      console.log('   🟡 Good: Room for improvement');
    } else {
      console.log('   🟢 Excellent: Well optimized');
    }
  }

  /**
   * Get validation results
   */
  getResults() {
    return {
      totalPages: this.totalPages,
      validPages: this.validPages,
      issues: this.issues,
      warnings: this.warnings,
      score: Math.max(0, 100 - this.issues.length * 2),
    };
  }
}

// CLI usage
if (import.meta.url === new URL(import.meta.resolve('./seo-validator.js')).href) {
  const validator = new SEOValidator();
  validator.validateAll().catch(console.error);
}

export default SEOValidator;
