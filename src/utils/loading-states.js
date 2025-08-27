/**
 * Loading States and Indicators Utility
 * Provides consistent loading feedback across the site
 */

// Loading spinner HTML template
const spinnerHTML = `
  <div class="loading-spinner" role="status" aria-label="Loading">
    <div class="spinner-circle"></div>
  </div>
`;

// Skeleton loader templates
const skeletonTemplates = {
  characterCard: `
    <div class="skeleton-character-card" role="presentation" aria-hidden="true">
      <div class="skeleton-image"></div>
      <div class="skeleton-text"></div>
      <div class="skeleton-text short"></div>
    </div>
  `,
  memoryRow: `
    <tr class="skeleton-memory-row" role="presentation" aria-hidden="true">
      <td><div class="skeleton-text short"></div></td>
      <td><div class="skeleton-image small"></div></td>
      <td><div class="skeleton-text"></div></td>
      <td><div class="skeleton-text short"></div></td>
    </tr>
  `,
};

// CSS for loading states (injected once)
const loadingCSS = `
  .loading-spinner {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-left: 8px;
  }
  
  .spinner-circle {
    width: 16px;
    height: 16px;
    border: 2px solid var(--amber-glow, #ffd700);
    border-top: 2px solid transparent;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .skeleton-character-card,
  .skeleton-memory-row {
    animation: skeleton-pulse 1.5s ease-in-out infinite alternate;
  }
  
  .skeleton-image {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    border-radius: 8px;
    width: 60px;
    height: 60px;
  }
  
  .skeleton-image.small {
    width: 40px;
    height: 40px;
  }
  
  .skeleton-text {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    height: 1rem;
    border-radius: 4px;
    margin: 0.25rem 0;
  }
  
  .skeleton-text.short {
    width: 60%;
  }
  
  @keyframes skeleton-pulse {
    0% { opacity: 1; }
    100% { opacity: 0.6; }
  }
  
  .page-transition {
    transition: opacity 0.2s ease-out;
  }
  
  .page-loading {
    opacity: 0.7;
    pointer-events: none;
  }
  
  .fade-in {
    animation: fadeIn 0.3s ease-in-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

/**
 * Initialize loading states CSS (call once on page load)
 */
export function initLoadingStyles() {
  if (document.getElementById('loading-styles')) return; // Already injected

  const style = document.createElement('style');
  style.id = 'loading-styles';
  style.textContent = loadingCSS;
  document.head.appendChild(style);
}

/**
 * Show loading spinner next to element
 */
export function showLoadingSpinner(element) {
  if (!element) return null;

  // Remove existing spinner if any
  const existingSpinner = element.querySelector('.loading-spinner');
  if (existingSpinner) return existingSpinner;

  // Add spinner
  const spinnerContainer = document.createElement('span');
  spinnerContainer.innerHTML = spinnerHTML;
  element.appendChild(spinnerContainer.firstElementChild);

  return spinnerContainer.firstElementChild;
}

/**
 * Hide loading spinner from element
 */
export function hideLoadingSpinner(element) {
  if (!element) return;

  const spinner = element.querySelector('.loading-spinner');
  if (spinner) {
    spinner.remove();
  }
}

/**
 * Add page-level loading state
 */
export function startPageLoading() {
  document.body.classList.add('page-transition', 'page-loading');
}

/**
 * Remove page-level loading state
 */
export function endPageLoading() {
  document.body.classList.remove('page-loading');

  // Remove transition class after animation
  setTimeout(() => {
    document.body.classList.remove('page-transition');
  }, 300);
}

/**
 * Show skeleton loading for containers
 */
export function showSkeletonLoading(container, type = 'characterCard', count = 6) {
  if (!container || !skeletonTemplates[type]) return;

  container.innerHTML = '';
  container.setAttribute('aria-busy', 'true');

  for (let i = 0; i < count; i++) {
    const skeleton = document.createElement('div');
    skeleton.innerHTML = skeletonTemplates[type];
    container.appendChild(skeleton.firstElementChild);
  }
}

/**
 * Hide skeleton loading and show content with fade-in
 */
export function hideSkeletonLoading(container, content) {
  if (!container) return;

  container.setAttribute('aria-busy', 'false');
  container.innerHTML = content || '';
  container.classList.add('fade-in');

  // Remove fade-in class after animation
  setTimeout(() => {
    container.classList.remove('fade-in');
  }, 300);
}

/**
 * Enhanced navigation with loading feedback
 */
export function navigateWithLoading(url, sourceElement = null) {
  if (!url) return false;

  try {
    // Show loading feedback
    if (sourceElement) {
      showLoadingSpinner(sourceElement);
    }
    startPageLoading();

    // Navigate with View Transitions support
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        window.location.href = url;
      });
    } else {
      window.location.href = url;
    }

    return true;
  } catch (_error) {
    // Cleanup on error
    if (sourceElement) {
      hideLoadingSpinner(sourceElement);
    }
    endPageLoading();
    console.error('Error:', _error);
    return false;
  }
}
