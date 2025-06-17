// Performance monitoring script for development
// Add this script to monitor Core Web Vitals

if (typeof window !== 'undefined' && 'performance' in window) {
  // Measure First Contentful Paint (FCP)
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      if (entry.name === 'first-contentful-paint') {
        console.log(`🎨 First Contentful Paint: ${entry.startTime.toFixed(2)}ms`);
      }
    });
  }).observe({ entryTypes: ['paint'] });

  // Measure Largest Contentful Paint (LCP)
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log(`🖼️ Largest Contentful Paint: ${lastEntry.startTime.toFixed(2)}ms`);
  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // Measure Cumulative Layout Shift (CLS)
  let clsValue = 0;
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const layoutShiftEntry = entry as any;
      if (!layoutShiftEntry.hadRecentInput) {
        clsValue += layoutShiftEntry.value;
      }
    }
    console.log(`📐 Cumulative Layout Shift: ${clsValue.toFixed(4)}`);
  }).observe({ entryTypes: ['layout-shift'] });

  // Measure First Input Delay (FID)
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      const fidEntry = entry as any;
      console.log(`⚡ First Input Delay: ${fidEntry.processingStart - fidEntry.startTime}ms`);
    });
  }).observe({ entryTypes: ['first-input'] });

  // Measure Time to Interactive (TTI) approximation
  window.addEventListener('load', () => {
    setTimeout(() => {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as any;
      if (navigationEntry) {
        console.log(`🚀 DOM Content Loaded: ${navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart}ms`);
        console.log(`📄 Page Load Complete: ${navigationEntry.loadEventEnd - navigationEntry.loadEventStart}ms`);
      }
    }, 0);
  });

  // Monitor resource loading
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      const resourceEntry = entry as any;
      if (resourceEntry.transferSize && resourceEntry.transferSize > 100000) { // Log resources larger than 100KB
        console.warn(`🐌 Large resource loaded: ${entry.name} (${(resourceEntry.transferSize / 1024).toFixed(2)}KB)`);
      }
    });
  }).observe({ entryTypes: ['resource'] });

  // Detect long tasks (>50ms)
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      console.warn(`⏱️ Long task detected: ${entry.duration.toFixed(2)}ms`);
    });
  }).observe({ entryTypes: ['longtask'] });
}

export {};
