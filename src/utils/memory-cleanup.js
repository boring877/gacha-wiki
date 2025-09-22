/**
 * Memory Cleanup Utility - Prevents memory leaks on page navigation
 * Centralizes cleanup of observers, listeners, and DOM references
 */

class MemoryManager {
  constructor() {
    this.observers = new Set();
    this.eventListeners = new Map();
    this.timeouts = new Set();
    this.intervals = new Set();
    this.prefetchLinks = new Set();
    this.cleanup = this.cleanup.bind(this);

    // Auto-cleanup on page unload
    window.addEventListener('beforeunload', this.cleanup);
    window.addEventListener('pagehide', this.cleanup);
  }

  // Register IntersectionObserver for cleanup
  registerObserver(observer) {
    this.observers.add(observer);
    return observer;
  }

  // Register event listener for cleanup
  registerEventListener(element, event, handler, options) {
    const key = `${element.constructor.name}-${event}`;
    if (!this.eventListeners.has(key)) {
      this.eventListeners.set(key, new Set());
    }
    this.eventListeners.get(key).add({ element, event, handler });
    element.addEventListener(event, handler, options);
  }

  // Register timeout for cleanup
  registerTimeout(timeoutId) {
    this.timeouts.add(timeoutId);
    return timeoutId;
  }

  // Register interval for cleanup
  registerInterval(intervalId) {
    this.intervals.add(intervalId);
    return intervalId;
  }

  // Register prefetch link for cleanup
  registerPrefetchLink(url, element) {
    this.prefetchLinks.add({ url, element });
  }

  // Clean up all registered resources
  cleanup() {
    // Disconnect observers
    this.observers.forEach(observer => {
      try {
        observer.disconnect();
      } catch (_e) {
        // Observer cleanup failed silently
      }
    });
    this.observers.clear();

    // Remove event listeners
    this.eventListeners.forEach(listeners => {
      listeners.forEach(({ element, event, handler }) => {
        try {
          element.removeEventListener(event, handler);
        } catch (_e) {
          // Event listener cleanup failed silently
        }
      });
    });
    this.eventListeners.clear();

    // Clear timeouts
    this.timeouts.forEach(timeoutId => {
      try {
        clearTimeout(timeoutId);
      } catch (_e) {
        // Timeout cleanup failed silently
      }
    });
    this.timeouts.clear();

    // Clear intervals
    this.intervals.forEach(intervalId => {
      try {
        clearInterval(intervalId);
      } catch (_e) {
        // Interval cleanup failed silently
      }
    });
    this.intervals.clear();

    // Remove prefetch links
    this.prefetchLinks.forEach(({ element }) => {
      try {
        if (element && element.parentNode) {
          element.parentNode.removeChild(element);
        }
      } catch (_e) {
        // Prefetch link cleanup failed silently
      }
    });
    this.prefetchLinks.clear();
  }

  // Force cleanup and recreate instance
  reset() {
    this.cleanup();
    window.removeEventListener('beforeunload', this.cleanup);
    window.removeEventListener('pagehide', this.cleanup);
  }
}

// Global memory manager instance
export const memoryManager = new MemoryManager();

// Utility functions for common patterns
export function createManagedObserver(callback, options) {
  const observer = new IntersectionObserver(callback, options);
  return memoryManager.registerObserver(observer);
}

export function addManagedEventListener(element, event, handler, options) {
  memoryManager.registerEventListener(element, event, handler, options);
}

export function createManagedTimeout(callback, delay) {
  const timeoutId = setTimeout(callback, delay);
  return memoryManager.registerTimeout(timeoutId);
}

export function createManagedInterval(callback, delay) {
  const intervalId = setInterval(callback, delay);
  return memoryManager.registerInterval(intervalId);
}

export function createManagedPrefetchLink(url) {
  const existing = document.querySelector(`link[href="${url}"]`);
  if (existing) return existing;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  link.dataset.timestamp = Date.now().toString();
  document.head.appendChild(link);

  memoryManager.registerPrefetchLink(url, link);

  // Auto-cleanup after 30 seconds
  createManagedTimeout(() => {
    if (document.head.contains(link)) {
      document.head.removeChild(link);
    }
  }, 30000);

  return link;
}
