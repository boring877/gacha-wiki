/**
 * Lightweight Memory Cleanup Utility
 * Simple approach to prevent memory leaks without holding references
 */

// WeakMap to track cleanup functions without preventing GC
const elementCleanupMap = new WeakMap();
const observerSet = new WeakSet();

/**
 * Create IntersectionObserver - manual cleanup only
 */
export function createManagedObserver(callback, options) {
  const observer = new IntersectionObserver(callback, options);
  observerSet.add(observer);

  // Store cleanup function on the observer itself
  observer._cleanup = () => {
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
 * Create interval - returns standard interval ID
 */
export function createManagedInterval(callback, delay) {
  return setInterval(callback, delay);
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

// Manual cleanup only - no automatic intervals to prevent file descriptor leaks
