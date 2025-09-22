/**
 * Simple Memory Monitoring Utility
 * Helps track memory usage patterns
 */

let lastMemoryCheck = 0;
const memoryHistory = [];

/**
 * Get current memory usage
 */
export function getCurrentMemory() {
  if (!performance.memory) {
    return { supported: false };
  }

  return {
    supported: true,
    used: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024), // MB
    total: Math.round(performance.memory.totalJSHeapSize / 1024 / 1024), // MB
    limit: Math.round(performance.memory.jsHeapSizeLimit / 1024 / 1024), // MB
  };
}

/**
 * Log memory usage to console (development only)
 */
export function logMemoryUsage(context = '') {
  if (typeof window === 'undefined' || !window.location.hostname.includes('localhost')) {
    return; // Only log in development
  }

  const memory = getCurrentMemory();
  if (!memory.supported) {
    console.log(`[Memory] Not supported`);
    return;
  }

  const now = Date.now();
  const timeSinceLastCheck = now - lastMemoryCheck;
  lastMemoryCheck = now;

  console.log(
    `[Memory${context ? ' ' + context : ''}] ${memory.used}MB used / ${memory.total}MB total (${timeSinceLastCheck}ms since last check)`
  );

  // Track memory history
  memoryHistory.push({
    timestamp: now,
    used: memory.used,
    total: memory.total,
    context,
  });

  // Keep only last 10 measurements
  if (memoryHistory.length > 10) {
    memoryHistory.shift();
  }
}

/**
 * Get memory trend (increasing/decreasing)
 */
export function getMemoryTrend() {
  if (memoryHistory.length < 2) {
    return { trend: 'unknown', samples: memoryHistory.length };
  }

  const first = memoryHistory[0];
  const last = memoryHistory[memoryHistory.length - 1];
  const diff = last.used - first.used;

  return {
    trend: diff > 5 ? 'increasing' : diff < -5 ? 'decreasing' : 'stable',
    change: diff,
    samples: memoryHistory.length,
    timeSpan: last.timestamp - first.timestamp,
  };
}

/**
 * Setup automatic memory monitoring
 */
export function startMemoryMonitoring(intervalMs = 10000) {
  if (typeof window === 'undefined' || !window.location.hostname.includes('localhost')) {
    return null;
  }

  logMemoryUsage('startup');

  const intervalId = setInterval(() => {
    logMemoryUsage('periodic');

    const trend = getMemoryTrend();
    if (trend.trend === 'increasing' && trend.change > 20) {
      console.warn(
        `[Memory Warning] Memory increased by ${trend.change}MB over ${Math.round(trend.timeSpan / 1000)}s`
      );
    }
  }, intervalMs);

  // Stop monitoring after 5 minutes to prevent infinite monitoring
  setTimeout(() => {
    clearInterval(intervalId);
    console.log('[Memory] Stopped automatic monitoring');
  }, 300000);

  return intervalId;
}

// Manual start only - no auto-monitoring to prevent resource leaks
// Call startMemoryMonitoring() manually if needed
