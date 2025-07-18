#!/usr/bin/env node

import { writeFileSync, readFileSync, existsSync } from 'fs';

/**
 * SEO Monitoring and Tracking System
 * Tracks SEO scores over time and provides trend analysis
 */

class SEOMonitor {
  constructor() {
    this.historyFile = 'seo-history.json';
    this.history = this.loadHistory();
  }

  /**
   * Load SEO history from file
   */
  loadHistory() {
    try {
      if (existsSync(this.historyFile)) {
        return JSON.parse(readFileSync(this.historyFile, 'utf8'));
      }
    } catch (error) {
      console.warn('Could not load SEO history:', error.message);
    }
    return { entries: [] };
  }

  /**
   * Save SEO history to file
   */
  saveHistory() {
    try {
      writeFileSync(this.historyFile, JSON.stringify(this.history, null, 2));
    } catch (error) {
      console.error('Could not save SEO history:', error.message);
    }
  }

  /**
   * Add new SEO score entry
   */
  addEntry(score, details = {}) {
    const entry = {
      timestamp: new Date().toISOString(),
      score,
      details,
      date: new Date().toLocaleDateString(),
    };

    this.history.entries.push(entry);

    // Keep only last 30 entries
    if (this.history.entries.length > 30) {
      this.history.entries = this.history.entries.slice(-30);
    }

    this.saveHistory();
    return entry;
  }

  /**
   * Get score trend analysis
   */
  getTrend() {
    const entries = this.history.entries;
    if (entries.length < 2) {
      return { trend: 'insufficient_data', message: 'Need at least 2 entries for trend analysis' };
    }

    const recent = entries.slice(-5); // Last 5 entries
    const older = entries.slice(-10, -5); // 5 entries before that

    if (older.length === 0) {
      return { trend: 'insufficient_data', message: 'Need more historical data' };
    }

    const recentAvg = recent.reduce((sum, entry) => sum + entry.score, 0) / recent.length;
    const olderAvg = older.reduce((sum, entry) => sum + entry.score, 0) / older.length;

    const change = recentAvg - olderAvg;
    const changePercent = ((change / olderAvg) * 100).toFixed(1);

    if (change > 5) {
      return {
        trend: 'improving',
        change: change.toFixed(1),
        changePercent,
        message: `📈 SEO improving! Up ${change.toFixed(1)} points (${changePercent}%)`,
      };
    } else if (change < -5) {
      return {
        trend: 'declining',
        change: change.toFixed(1),
        changePercent,
        message: `📉 SEO declining. Down ${Math.abs(change).toFixed(1)} points (${Math.abs(changePercent)}%)`,
      };
    } else {
      return {
        trend: 'stable',
        change: change.toFixed(1),
        changePercent,
        message: `📊 SEO stable. Change: ${change.toFixed(1)} points (${changePercent}%)`,
      };
    }
  }

  /**
   * Get current SEO score using the scoring system
   */
  async getCurrentScore() {
    try {
      const { default: QuickSEOScore } = await import('./seo-score.js');
      const scorer = new QuickSEOScore();
      return scorer.calculateScore();
    } catch (error) {
      console.error('Could not get current SEO score:', error.message);
      return null;
    }
  }

  /**
   * Run monitoring check
   */
  async runMonitoring() {
    console.log('📊 SEO Monitoring Check');
    console.log('═══════════════════════');

    // Get current score
    const currentResult = await this.getCurrentScore();
    if (!currentResult) {
      console.error('❌ Could not get current SEO score');
      return;
    }

    // Add to history
    const entry = this.addEntry(currentResult.score, {
      issues: currentResult.issues.length,
      recommendations: currentResult.recommendations.length,
      pageAnalysis: currentResult.details.pageAnalysis,
    });

    console.log(`Current Score: ${currentResult.score}/100`);
    console.log(`Recorded at: ${entry.date}`);

    // Show trend
    const trend = this.getTrend();
    console.log(`Trend: ${trend.message}`);
    console.log('');

    // Show history summary
    this.showHistory();

    // Show alerts
    this.checkAlerts(currentResult);

    return {
      current: currentResult,
      trend,
      history: this.history,
    };
  }

  /**
   * Show monitoring history
   */
  showHistory() {
    const entries = this.history.entries;

    if (entries.length === 0) {
      console.log('No historical data available');
      return;
    }

    console.log('📈 Recent History:');

    const recent = entries.slice(-10); // Last 10 entries
    recent.forEach(entry => {
      const date = new Date(entry.timestamp).toLocaleDateString();
      const time = new Date(entry.timestamp).toLocaleTimeString();
      console.log(`   ${date} ${time}: ${entry.score}/100`);
    });

    console.log('');

    // Show statistics
    const scores = entries.map(e => e.score);
    const avgScore = (scores.reduce((sum, score) => sum + score, 0) / scores.length).toFixed(1);
    const maxScore = Math.max(...scores);
    const minScore = Math.min(...scores);

    console.log('📊 Statistics:');
    console.log(`   Average Score: ${avgScore}/100`);
    console.log(`   Best Score: ${maxScore}/100`);
    console.log(`   Worst Score: ${minScore}/100`);
    console.log(`   Total Checks: ${entries.length}`);
    console.log('');
  }

  /**
   * Check for SEO alerts
   */
  checkAlerts(result) {
    const alerts = [];

    // Score-based alerts
    if (result.score < 50) {
      alerts.push('🚨 CRITICAL: SEO score below 50');
    } else if (result.score < 70) {
      alerts.push('⚠️  WARNING: SEO score below 70');
    }

    // Issue-based alerts
    if (result.issues.length > 5) {
      alerts.push(`⚠️  ${result.issues.length} SEO issues detected`);
    }

    // Trend-based alerts
    const trend = this.getTrend();
    if (trend.trend === 'declining' && Math.abs(parseFloat(trend.change)) > 10) {
      alerts.push('📉 ALERT: Significant SEO decline detected');
    }

    if (alerts.length > 0) {
      console.log('🚨 Alerts:');
      alerts.forEach(alert => console.log(`   ${alert}`));
      console.log('');
    } else {
      console.log('✅ No alerts - SEO looking good!');
      console.log('');
    }
  }

  /**
   * Generate monitoring report
   */
  generateReport() {
    const entries = this.history.entries;
    if (entries.length === 0) {
      return 'No monitoring data available';
    }

    const latest = entries[entries.length - 1];
    const trend = this.getTrend();

    return `
SEO Monitoring Report
Generated: ${new Date().toLocaleString()}

Current Status:
- Score: ${latest.score}/100
- Trend: ${trend.trend}
- Last Check: ${latest.date}

Historical Data:
- Total Checks: ${entries.length}
- Average Score: ${(entries.reduce((sum, e) => sum + e.score, 0) / entries.length).toFixed(1)}
- Best Score: ${Math.max(...entries.map(e => e.score))}
- Worst Score: ${Math.min(...entries.map(e => e.score))}

Recommendations:
1. Run 'npm run seo:score' for detailed analysis
2. Run 'npm run seo:audit' for comprehensive audit
3. Monitor trends weekly with 'npm run seo:monitor'
    `.trim();
  }
}

// CLI usage
if (import.meta.url === new URL(import.meta.resolve('./seo-monitor.js')).href) {
  const monitor = new SEOMonitor();

  const command = process.argv[2];

  switch (command) {
    case 'report':
      console.log(monitor.generateReport());
      break;
    case 'history':
      monitor.showHistory();
      break;
    case 'trend': {
      const trend = monitor.getTrend();
      console.log(trend.message);
      break;
    }
    default:
      monitor.runMonitoring();
  }
}

export default SEOMonitor;
