/**
 * Lightweight Client-Side Navigation for Horizon Walker
 * Provides instant navigation while maintaining SSG benefits
 */

class ClientNavigation {
  constructor() {
    this.isNavigating = false;
    this.cache = new Map();
    this.maxCacheSize = 10;
    
    this.init();
  }

  init() {
    // Only initialize on client-side
    if (typeof window === 'undefined') return;

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupNavigation());
    } else {
      this.setupNavigation();
    }
  }

  setupNavigation() {
    // Add click listeners to navigation links
    this.attachLinkListeners();
    
    // Handle browser back/forward
    window.addEventListener('popstate', (event) => {
      if (event.state && event.state.navigated) {
        this.loadPage(window.location.pathname, false);
      }
    });

    // Cache current page
    this.cacheCurrentPage();
  }

  attachLinkListeners() {
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a');
      
      if (!link) return;
      if (!this.shouldInterceptLink(link)) return;

      event.preventDefault();
      
      const url = link.getAttribute('href');
      this.navigateTo(url);
    });
  }

  shouldInterceptLink(link) {
    const href = link.getAttribute('href');
    
    // Skip if no href or external link
    if (!href || href.startsWith('http') || href.startsWith('//')) return false;
    
    // Skip if has target attribute
    if (link.hasAttribute('target')) return false;
    
    // Skip if has download attribute
    if (link.hasAttribute('download')) return false;
    
    // Skip if not Horizon Walker page
    if (!href.includes('horizon-walker')) return false;
    
    // Skip if modifier keys pressed
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return false;
    
    return true;
  }

  async navigateTo(url) {
    if (this.isNavigating) return;
    if (url === window.location.pathname) return;

    this.isNavigating = true;
    this.showLoadingState();

    try {
      await this.loadPage(url, true);
    } catch (error) {
      console.warn('Client navigation failed, falling back to normal navigation:', error);
      window.location.href = url;
    } finally {
      this.isNavigating = false;
      this.hideLoadingState();
    }
  }

  async loadPage(url, pushState = true) {
    let html;

    // Check cache first
    if (this.cache.has(url)) {
      html = this.cache.get(url);
    } else {
      // Fetch new page
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      
      html = await response.text();
      
      // Cache the page
      this.cachePageContent(url, html);
    }

    // Extract main content
    const newContent = this.extractMainContent(html);
    if (!newContent) throw new Error('Could not extract main content');

    // Update page
    this.updatePageContent(newContent);
    
    if (pushState) {
      history.pushState({ navigated: true }, '', url);
    }

    // Update page title
    this.updatePageTitle(html);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Re-attach event listeners for new content
    this.reattachContentListeners();
  }

  extractMainContent(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Look for main content wrapper
    const mainContent = doc.querySelector('#main-content') || 
                       doc.querySelector('main') ||
                       doc.querySelector('.horizon-walker-main');
    
    return mainContent ? mainContent.outerHTML : null;
  }

  updatePageContent(newContent) {
    const mainElement = document.querySelector('#main-content') || 
                       document.querySelector('main') ||
                       document.querySelector('.horizon-walker-main');
    
    if (mainElement) {
      // Add fade out
      mainElement.style.opacity = '0';
      mainElement.style.transition = 'opacity 0.15s ease-out';
      
      setTimeout(() => {
        mainElement.outerHTML = newContent;
        
        // Find the new element and fade it in
        const newMainElement = document.querySelector('#main-content') || 
                              document.querySelector('main') ||
                              document.querySelector('.horizon-walker-main');
        
        if (newMainElement) {
          newMainElement.style.opacity = '0';
          newMainElement.style.transition = 'opacity 0.15s ease-in';
          
          // Force reflow then fade in
          newMainElement.offsetHeight;
          newMainElement.style.opacity = '1';
        }
      }, 150);
    }
  }

  updatePageTitle(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const newTitle = doc.querySelector('title');
    
    if (newTitle) {
      document.title = newTitle.textContent;
    }
  }

  cacheCurrentPage() {
    const mainElement = document.querySelector('#main-content') || 
                       document.querySelector('main') ||
                       document.querySelector('.horizon-walker-main');
    
    if (mainElement) {
      this.cachePageContent(window.location.pathname, document.documentElement.outerHTML);
    }
  }

  cachePageContent(url, html) {
    // Implement LRU cache
    if (this.cache.size >= this.maxCacheSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    
    this.cache.set(url, html);
  }

  reattachContentListeners() {
    // Re-initialize any content-specific JavaScript
    
    // Character table click handlers
    const clickableRows = document.querySelectorAll('.clickable-row');
    clickableRows.forEach(row => {
      row.addEventListener('click', (e) => {
        if (e.target.closest('a')) return; // Skip if clicking on a link
        const url = row.dataset.url;
        if (url) this.navigateTo(url);
      });
    });

    // Mobile character cards
    const mobileCards = document.querySelectorAll('.mobile-character-card');
    mobileCards.forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('a')) return; // Skip if clicking on a link
        const url = card.dataset.url;
        if (url) this.navigateTo(url);
      });
    });

    // Simple filters
    const rarityFilter = document.getElementById('rarity-filter');
    if (rarityFilter) {
      rarityFilter.addEventListener('change', () => {
        const filterValue = rarityFilter.value.toLowerCase();
        const allRows = document.querySelectorAll('tbody tr');
        const allCards = document.querySelectorAll('.mobile-character-card');
        
        [allRows, allCards].forEach(elements => {
          elements.forEach(element => {
            const rarity = element.dataset.rarity?.toLowerCase();
            element.style.display = !filterValue || rarity === filterValue ? '' : 'none';
          });
        });
      });
    }
  }

  showLoadingState() {
    // Add subtle loading indicator
    const indicator = document.createElement('div');
    indicator.id = 'nav-loading';
    indicator.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, transparent, #4caf50, transparent);
        animation: slide 1s ease-in-out infinite;
        z-index: 9999;
      "></div>
      <style>
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
      </style>
    `;
    document.body.appendChild(indicator);
  }

  hideLoadingState() {
    const indicator = document.getElementById('nav-loading');
    if (indicator) {
      indicator.remove();
    }
  }

  // Public method to prefetch pages
  prefetchPage(url) {
    if (this.cache.has(url)) return Promise.resolve();
    
    return fetch(url)
      .then(response => response.text())
      .then(html => this.cachePageContent(url, html))
      .catch(error => console.warn('Prefetch failed:', error));
  }
}

// Initialize client navigation
let clientNavigation;

// Auto-initialize on Horizon Walker pages
if (typeof window !== 'undefined' && window.location.pathname.includes('horizon-walker')) {
  clientNavigation = new ClientNavigation();
}

// Export for manual initialization if needed
export { ClientNavigation };
export default clientNavigation;