/**
 * Lightweight Memory Cleanup Utility
 * Simple approach to prevent memory leaks without holding references
 */

// WeakMap to track cleanup functions without preventing GC
const elementCleanupMap = new WeakMap();
const observerSet = new WeakSet();

/**
 * Create IntersectionObserver with automatic cleanup
 */
export function createManagedObserver(callback, options) {
  const observer = new IntersectionObserver(callback, options);
  observerSet.add(observer);

  // Auto-disconnect after 5 minutes of inactivity
  const timeoutId = setTimeout(() => {
    if (observerSet.has(observer)) {
      observer.disconnect();
    }
  }, 300000);

  // Store cleanup function on the observer itself
  observer._cleanup = () => {
    clearTimeout(timeoutId);
    observer.disconnect();
  };

  return observer;
}

/**
 * Add event listener with cleanup stored on element
 */
export function addManagedEventListener(element, event, handler, options) {
  element.addEventListener(event, handler, options);

  // Store cleanup function on the element itself
  if (!elementCleanupMap.has(element)) {
    elementCleanupMap.set(element, new Set());
  }

  const cleanupFn = () => element.removeEventListener(event, handler);
  elementCleanupMap.get(element).add(cleanupFn);
}

/**
 * Create timeout that auto-cleans after execution
 */
export function createManagedTimeout(callback, delay) {
  return setTimeout(() => {
    callback();
    // Timeout automatically cleans itself after execution
  }, delay);
}

/**
 * Create interval with auto-cleanup after max executions
 */
export function createManagedInterval(callback, delay, maxExecutions = 1000) {
  let executions = 0;

  const intervalId = setInterval(() => {
    callback();
    executions++;

    // Auto-cleanup after max executions to prevent infinite accumulation
    if (executions >= maxExecutions) {
      clearInterval(intervalId);
    }
  }, delay);

  return intervalId;
}

/**
 * Create prefetch link with automatic cleanup
 */
export function createManagedPrefetchLink(url) {
  const existing = document.querySelector(`link[href="${url}"]`);
  if (existing) return existing;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  link.dataset.timestamp = Date.now().toString();
  document.head.appendChild(link);

  // Auto-cleanup after 30 seconds - using regular setTimeout
  setTimeout(() => {
    if (document.head.contains(link)) {
      document.head.removeChild(link);
    }
  }, 30000);

  return link;
}

/**
 * Manual cleanup for when elements are removed
 */
export function cleanupElement(element) {
  if (elementCleanupMap.has(element)) {
    const cleanupFunctions = elementCleanupMap.get(element);
    cleanupFunctions.forEach(fn => {
      try {
        fn();
      } catch (_e) {
        // Cleanup failed silently
      }
    });
    elementCleanupMap.delete(element);
  }
}

/**
 * Cleanup old prefetch links
 */
export function cleanupOldPrefetchLinks() {
  const links = document.querySelectorAll('link[rel="prefetch"][data-timestamp]');
  const now = Date.now();
  const maxAge = 60000; // 1 minute

  links.forEach(link => {
    const timestamp = parseInt(link.dataset.timestamp || '0');
    if (now - timestamp > maxAge) {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    }
  });
}

// Cleanup old prefetch links every 30 seconds
setInterval(cleanupOldPrefetchLinks, 30000);
