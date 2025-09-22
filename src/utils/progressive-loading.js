/**
 * Progressive Loading Utilities
 * Improves perceived performance by loading content in chunks
 */

import { createManagedObserver } from './memory-cleanup.js';

/**
 * Progressive table loader - loads table rows in batches
 */
export class ProgressiveTableLoader {
  constructor(data, tableBody, renderFunction, options = {}) {
    this.data = data || [];
    this.tableBody = tableBody;
    this.renderFunction = renderFunction;
    this.batchSize = options.batchSize || 25;
    this.delay = options.delay || 50; // ms between batches
    this.currentIndex = 0;
    this.isLoading = false;
    this.loadingIndicator = null;
  }

  async loadBatch() {
    if (this.isLoading || this.currentIndex >= this.data.length) return false;

    this.isLoading = true;
    const endIndex = Math.min(this.currentIndex + this.batchSize, this.data.length);
    const batch = this.data.slice(this.currentIndex, endIndex);

    // Create document fragment for performance
    const fragment = document.createDocumentFragment();

    batch.forEach((item, index) => {
      const element = this.renderFunction(item, this.currentIndex + index);
      if (element) {
        fragment.appendChild(element);
      }
    });

    // Append batch to DOM
    this.tableBody.appendChild(fragment);

    this.currentIndex = endIndex;
    this.isLoading = false;

    // Update progress indicator
    this.updateProgress();

    return this.currentIndex < this.data.length; // Return true if more to load
  }

  async loadAll() {
    // Show progress indicator
    this.showProgress();

    while (this.currentIndex < this.data.length) {
      await this.loadBatch();

      // Small delay to keep UI responsive
      if (this.currentIndex < this.data.length) {
        await new Promise(resolve => setTimeout(resolve, this.delay));
      }
    }

    // Hide progress indicator
    this.hideProgress();
  }

  reset() {
    this.currentIndex = 0;
    this.isLoading = false;
    if (this.tableBody) {
      this.tableBody.innerHTML = '';
    }
    this.hideProgress();
  }

  showProgress() {
    if (!this.loadingIndicator && this.tableBody) {
      this.loadingIndicator = document.createElement('tr');
      this.loadingIndicator.className = 'progressive-loading-indicator';
      this.loadingIndicator.innerHTML = `
        <td colspan="100%" style="text-align: center; padding: 2rem;">
          <div style="display: flex; align-items: center; justify-content: center; gap: 1rem;">
            <div class="loading-spinner">
              <div class="spinner-circle"></div>
            </div>
            <span class="loading-text">Loading memories...</span>
            <span class="loading-progress">0%</span>
          </div>
        </td>
      `;
      this.tableBody.appendChild(this.loadingIndicator);
    }
  }

  updateProgress() {
    if (this.loadingIndicator) {
      const progressSpan = this.loadingIndicator.querySelector('.loading-progress');
      const progressText = this.loadingIndicator.querySelector('.loading-text');

      if (progressSpan && progressText) {
        const percentage = Math.round((this.currentIndex / this.data.length) * 100);
        progressSpan.textContent = `${percentage}%`;
        progressText.textContent = `Loading memories... (${this.currentIndex}/${this.data.length})`;
      }
    }
  }

  hideProgress() {
    if (this.loadingIndicator && this.loadingIndicator.parentNode) {
      this.loadingIndicator.parentNode.removeChild(this.loadingIndicator);
      this.loadingIndicator = null;
    }
  }
}

/**
 * Progressive grid loader - loads cards/items in batches
 */
export class ProgressiveGridLoader {
  constructor(data, container, renderFunction, options = {}) {
    this.data = data || [];
    this.container = container;
    this.renderFunction = renderFunction;
    this.batchSize = options.batchSize || 20;
    this.delay = options.delay || 30;
    this.currentIndex = 0;
    this.isLoading = false;
    this.observer = null;
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    // Create loading trigger element
    this.loadingTrigger = document.createElement('div');
    this.loadingTrigger.className = 'loading-trigger';
    this.loadingTrigger.style.height = '1px';

    // Setup intersection observer for infinite scroll
    this.observer = createManagedObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.isLoading) {
            this.loadBatch();
          }
        });
      },
      { threshold: 0.1 }
    );
  }

  async loadBatch() {
    if (this.isLoading || this.currentIndex >= this.data.length) return false;

    this.isLoading = true;
    const endIndex = Math.min(this.currentIndex + this.batchSize, this.data.length);
    const batch = this.data.slice(this.currentIndex, endIndex);

    // Create document fragment for performance
    const fragment = document.createDocumentFragment();

    batch.forEach((item, index) => {
      const element = this.renderFunction(item, this.currentIndex + index);
      if (element) {
        // Add fade-in animation
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        fragment.appendChild(element);

        // Trigger animation after a short delay
        setTimeout(() => {
          element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * 50); // Stagger animations
      }
    });

    // Remove loading trigger temporarily
    if (this.loadingTrigger.parentNode) {
      this.loadingTrigger.parentNode.removeChild(this.loadingTrigger);
    }

    // Append batch to DOM
    this.container.appendChild(fragment);

    this.currentIndex = endIndex;

    // Re-add loading trigger if more content to load
    if (this.currentIndex < this.data.length) {
      this.container.appendChild(this.loadingTrigger);
      this.observer.observe(this.loadingTrigger);
    }

    this.isLoading = false;
    return this.currentIndex < this.data.length;
  }

  async loadInitial() {
    // Load first batch immediately
    await this.loadBatch();
  }

  reset() {
    this.currentIndex = 0;
    this.isLoading = false;
    if (this.container) {
      this.container.innerHTML = '';
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  destroy() {
    this.reset();
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}

/**
 * Lazy image loading with intersection observer
 */
export function setupLazyImages(selector = 'img[loading="lazy"]') {
  const images = document.querySelectorAll(selector);

  const imageObserver = createManagedObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;

        // Add loading class
        img.classList.add('lazy-loading');

        // Handle load completion
        img.addEventListener(
          'load',
          () => {
            img.classList.remove('lazy-loading');
            img.classList.add('lazy-loaded');
          },
          { once: true }
        );

        // Handle load error
        img.addEventListener(
          'error',
          () => {
            img.classList.remove('lazy-loading');
            img.classList.add('lazy-error');
          },
          { once: true }
        );

        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));

  return imageObserver;
}

/**
 * Performance monitoring for progressive loading
 */
export function measureLoadingPerformance(startTime, itemsLoaded) {
  const endTime = performance.now();
  const duration = endTime - startTime;
  const itemsPerSecond = (itemsLoaded / duration) * 1000;

  return {
    duration: Math.round(duration),
    itemsPerSecond: Math.round(itemsPerSecond),
    averageTimePerItem: Math.round(duration / itemsLoaded),
  };
}
