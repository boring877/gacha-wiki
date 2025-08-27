/**
 * Centralized Scroll Management System
 * Prevents conflicts between multiple components trying to control page scrolling
 */

class ScrollManager {
  constructor() {
    // Track which components are currently locking scroll
    this.locks = new Set();

    // Store original scroll position
    this.savedScrollPosition = 0;

    // Store original body styles to restore later
    this.originalBodyStyles = {};

    // Ensure singleton pattern
    if (ScrollManager.instance) {
      return ScrollManager.instance;
    }
    ScrollManager.instance = this;
  }

  /**
   * Lock scrolling for a specific component
   * @param {string} componentId - Unique identifier for the component
   * @param {Object} options - Lock options
   */
  lockScroll(componentId, options = {}) {
    const { preservePosition = true, touchAction = 'none', preventOverscroll = true } = options;

    // If this is the first lock, save the current state
    if (this.locks.size === 0) {
      this.saveCurrentState();
      this.applyScrollLock(preservePosition, touchAction, preventOverscroll);
    }

    // Add this component to the locks set
    this.locks.add(componentId);

    // Locked scroll for component
  }

  /**
   * Unlock scrolling for a specific component
   * @param {string} componentId - Component identifier to remove
   */
  unlockScroll(componentId) {
    // Remove this component from locks
    this.locks.delete(componentId);

    // Unlocked scroll for component

    // If no more locks, restore scrolling
    if (this.locks.size === 0) {
      this.restoreScrolling();
    }
  }

  /**
   * Force unlock all scrolling (emergency cleanup)
   */
  forceUnlockAll() {
    // Force unlocking all scroll locks
    this.locks.clear();
    this.restoreScrolling();
  }

  /**
   * Check if scrolling is currently locked
   */
  isLocked() {
    return this.locks.size > 0;
  }

  /**
   * Get list of active locks
   */
  getActiveLocks() {
    return Array.from(this.locks);
  }

  /**
   * Save current scroll state before locking
   */
  saveCurrentState() {
    // Save scroll position
    this.savedScrollPosition = window.scrollY || window.pageYOffset || 0;

    // Save original body styles
    const bodyStyle = document.body.style;
    this.originalBodyStyles = {
      overflow: bodyStyle.overflow || '',
      position: bodyStyle.position || '',
      top: bodyStyle.top || '',
      width: bodyStyle.width || '',
      height: bodyStyle.height || '',
      touchAction: bodyStyle.touchAction || '',
    };

    // Save documentElement overflow
    this.originalDocumentOverflow = document.documentElement.style.overflow || '';
  }

  /**
   * Apply scroll lock styles
   */
  applyScrollLock(preservePosition, touchAction, preventOverscroll) {
    const body = document.body;
    const html = document.documentElement;

    // Apply scroll lock styles
    body.style.overflow = 'hidden';
    body.style.touchAction = touchAction;

    if (preservePosition) {
      // Fix body position to prevent scroll jumping
      body.style.position = 'fixed';
      body.style.top = `-${this.savedScrollPosition}px`;
      body.style.width = '100%';
      body.style.height = '100%';
    }

    if (preventOverscroll) {
      // Prevent overscroll on html element too
      html.style.overflow = 'hidden';
    }

    // Add CSS class for additional styling hooks
    body.classList.add('scroll-locked');
  }

  /**
   * Restore original scrolling state
   */
  restoreScrolling() {
    const body = document.body;
    const html = document.documentElement;

    // Restore original body styles
    Object.keys(this.originalBodyStyles).forEach(property => {
      body.style[property] = this.originalBodyStyles[property];
    });

    // Restore documentElement overflow
    html.style.overflow = this.originalDocumentOverflow;

    // Remove CSS class
    body.classList.remove('scroll-locked');

    // Restore scroll position
    if (this.savedScrollPosition > 0) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo(0, this.savedScrollPosition);
        this.savedScrollPosition = 0;
      });
    }

    // Clear saved styles
    this.originalBodyStyles = {};
  }

  /**
   * Update scroll position while locked (for components that need to track changes)
   */
  updateSavedPosition(newPosition) {
    if (this.isLocked()) {
      this.savedScrollPosition = newPosition;
    }
  }
}

// Create singleton instance
const scrollManager = new ScrollManager();

// Export both the class and singleton for different use cases
export { ScrollManager, scrollManager };

// Global error handlers and cleanup
window.addEventListener('beforeunload', () => {
  scrollManager.forceUnlockAll();
});

// Emergency cleanup for broken states
window.addEventListener('error', _event => {
  // Global error detected, checking for broken scroll states

  // Check for common broken states and fix them
  const body = document.body;
  const bodyStyle = body.style;

  // If body has fixed position but no scroll locks, clean it up
  if (bodyStyle.position === 'fixed' && scrollManager.locks.size === 0) {
    // Found orphaned fixed body position, cleaning up
    bodyStyle.position = '';
    bodyStyle.top = '';
    bodyStyle.overflow = '';
    bodyStyle.width = '';
    bodyStyle.height = '';
    body.classList.remove('scroll-locked', 'modal-open');
  }

  // If body has opacity changes, reset them (from navigation loading states)
  if (bodyStyle.opacity && bodyStyle.opacity !== '1' && bodyStyle.opacity !== '') {
    // Resetting body opacity from loading state
    bodyStyle.opacity = '1';
    bodyStyle.transition = '';
  }
});

// Handle page visibility changes (mobile browser switching, etc.)
document.addEventListener('visibilitychange', () => {
  if (document.hidden && scrollManager.isLocked()) {
    // Page hidden with active scroll locks, preserving locks
    // Don't auto-cleanup on visibility change, but log for debugging
  }
});

// Handle orientation changes on mobile
window.addEventListener('orientationchange', () => {
  if (scrollManager.isLocked()) {
    // Orientation changed with scroll locked, reapplying lock
    // Re-apply the lock to handle any layout changes
    setTimeout(() => {
      if (scrollManager.isLocked()) {
        const body = document.body;
        body.style.width = '100%';
        body.style.height = '100%';
      }
    }, 100);
  }
});

// Cleanup on page freeze/unfreeze (mobile browser memory management)
document.addEventListener('freeze', () => {
  if (scrollManager.isLocked()) {
    // Page freezing with active locks
  }
});

document.addEventListener('resume', () => {
  if (scrollManager.isLocked()) {
    // Page resumed with active locks, checking state
    // Verify scroll lock is still applied correctly
    const body = document.body;
    if (body.style.overflow !== 'hidden') {
      // Scroll lock lost during freeze, reapplying
      body.style.overflow = 'hidden';
    }
  }
});

// Add protective CSS to prevent body style conflicts
const protectiveCSS = document.createElement('style');
protectiveCSS.id = 'scroll-manager-protective-css';
protectiveCSS.textContent = `
  /* Protective CSS for ScrollManager */
  body.scroll-locked {
    overflow: hidden !important;
    position: fixed !important;
    width: 100% !important;
    height: 100% !important;
  }
  
  /* Prevent other components from overriding scroll locks */
  body.scroll-locked:not(.allow-scroll-override) {
    overflow: hidden !important;
  }
  
  /* Reset any conflicting opacity changes */
  body.scroll-locked.has-opacity-conflict {
    opacity: 1 !important;
    transition: none !important;
  }
  
  /* Emergency recovery styles */
  body.scroll-manager-emergency-reset {
    position: static !important;
    top: auto !important;
    overflow: auto !important;
    width: auto !important;
    height: auto !important;
    opacity: 1 !important;
    transition: none !important;
  }
`;

// Inject protective CSS
document.head.appendChild(protectiveCSS);

// Monitor for conflicting body style changes
const bodyStyleObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
      const body = document.body;
      const bodyStyle = body.style;

      // If we have active scroll locks but someone changed critical styles
      if (scrollManager.isLocked()) {
        let needsProtection = false;

        // Check for conflicting styles
        if (bodyStyle.position !== 'fixed') {
          // Detected position override while locked, protecting
          needsProtection = true;
        }
        if (bodyStyle.overflow !== 'hidden') {
          // Detected overflow override while locked, protecting
          needsProtection = true;
        }

        if (needsProtection) {
          body.classList.add('scroll-locked');
        }
      }

      // Check for problematic opacity changes
      if (bodyStyle.opacity && bodyStyle.opacity !== '1' && bodyStyle.opacity !== '') {
        // If opacity has been manipulated, flag it for potential cleanup
        if (!body.classList.contains('has-opacity-conflict')) {
          // Detected body opacity change
          body.classList.add('has-opacity-conflict');

          // Auto-cleanup after navigation delay
          setTimeout(() => {
            if (body.style.opacity && body.style.opacity !== '1') {
              // Auto-cleaning orphaned opacity
              body.style.opacity = '1';
              body.style.transition = '';
            }
            body.classList.remove('has-opacity-conflict');
          }, 2000);
        }
      }
    }
  });
});

// Start observing body style changes
bodyStyleObserver.observe(document.body, {
  attributes: true,
  attributeFilter: ['style', 'class'],
});

// Development helper - expose to window in dev mode
if (typeof window !== 'undefined' && window.location?.hostname === 'localhost') {
  window.scrollManager = scrollManager;

  // Add debugging helpers
  window.debugScrollManager = {
    showLocks: () => Array.from(scrollManager.locks),
    forceClearAll: () => scrollManager.forceUnlockAll(),
    checkForOrphanedStates: () => {
      const body = document.body;
      const issues = [];

      if (body.style.position === 'fixed' && scrollManager.locks.size === 0) {
        issues.push('Orphaned fixed position');
      }
      if (body.style.overflow === 'hidden' && scrollManager.locks.size === 0) {
        issues.push('Orphaned overflow hidden');
      }
      if (body.classList.contains('modal-open') && scrollManager.locks.size === 0) {
        issues.push('Orphaned modal-open class');
      }

      return issues.length ? issues : 'None';
    },
  };
}
