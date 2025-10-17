<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  export let prevCharacter: { name: string; detailUrl: string };
  export let nextCharacter: { name: string; detailUrl: string };

  // Element references
  let mobileSwipeLeft: HTMLElement;
  let mobileSwipeRight: HTMLElement;

  // Performance manager
  const mobilePerfManager = {
    touchStartTime: 0,
    touchMoved: false,
    lastNavigation: 0,
    navigationThrottle: 300,
  };

  // Navigation handler
  function handleNavigation(url: string) {
    if (!url || typeof window === 'undefined' || typeof document === 'undefined') return false;

    const now = Date.now();
    if (now - mobilePerfManager.lastNavigation < mobilePerfManager.navigationThrottle) {
      return false;
    }
    mobilePerfManager.lastNavigation = now;

    try {
      // Add visual feedback
      const targetButton = document.querySelector(`[data-character-url="${url}"]`) as HTMLElement;
      if (targetButton) {
        targetButton.style.opacity = '0.6';
        targetButton.style.transform = 'scale(0.95)';
        targetButton.style.transition = 'all 0.08s ease';
        targetButton.style.pointerEvents = 'none';
      }

      // Use href for more reliable navigation
      window.location.href = url;
      return true;
    } catch (error) {
      // Reset element state on error
      const targetButton = document.querySelector(`[data-character-url="${url}"]`) as HTMLElement;
      if (targetButton) {
        targetButton.style.opacity = '1';
        targetButton.style.transform = 'scale(1)';
        targetButton.style.pointerEvents = '';
      }
      return false;
    }
  }

  // Touch handling for mobile navigation
  function handleMobileNavigation(element: HTMLElement) {
    element.addEventListener('touchstart', (e) => {
      mobilePerfManager.touchStartTime = Date.now();
      mobilePerfManager.touchMoved = false;
      e.stopPropagation();
    }, { passive: true });

    element.addEventListener('touchmove', () => {
      mobilePerfManager.touchMoved = true;
    }, { passive: true });

    element.addEventListener('touchend', (e) => {
      const touchDuration = Date.now() - mobilePerfManager.touchStartTime;

      if (!mobilePerfManager.touchMoved && touchDuration < 400 && touchDuration > 50) {
        e.preventDefault();
        const url = element.getAttribute('data-character-url');
        if (url) {
          handleNavigation(url);
        }
      }
    });

    element.addEventListener('click', (e) => {
      e.preventDefault();
      const url = element.getAttribute('data-character-url');
      if (url) {
        handleNavigation(url);
      }
    });
  }

  // Update mobile navigation data
  function updateMobileNavigation() {
    if (mobileSwipeLeft) {
      mobileSwipeLeft.setAttribute('data-character-url', prevCharacter.detailUrl);
      mobileSwipeLeft.setAttribute('title', `Previous: ${prevCharacter.name}`);
    }
    if (mobileSwipeRight) {
      mobileSwipeRight.setAttribute('data-character-url', nextCharacter.detailUrl);
      mobileSwipeRight.setAttribute('title', `Next: ${nextCharacter.name}`);
    }
  }

  // Lifecycle
  onMount(() => {
    // Initialize mobile navigation
    handleMobileNavigation(mobileSwipeLeft);
    handleMobileNavigation(mobileSwipeRight);

    // Expose update function globally for compatibility (browser only)
    if (typeof window !== 'undefined') {
      (window as any).updateZnMobileNavigation = updateMobileNavigation;
    }
  });

  onDestroy(() => {
    // Cleanup (browser only)
    if (typeof window !== 'undefined') {
      delete (window as any).updateZnMobileNavigation;
    }
  });

  // Update when character data changes
  $: if (prevCharacter && nextCharacter && mobileSwipeLeft && mobileSwipeRight) {
    updateMobileNavigation();
  }
</script>

<!-- Mobile Invisible Swipe Zones -->
<div
  class="mobile-swipe-left"
  bind:this={mobileSwipeLeft}
  data-direction="prev"
  data-character-url={prevCharacter.detailUrl}
  title={`Previous: ${prevCharacter.name}`}
></div>
<div
  class="mobile-swipe-right"
  bind:this={mobileSwipeRight}
  data-direction="next"
  data-character-url={nextCharacter.detailUrl}
  title={`Next: ${nextCharacter.name}`}
></div>
