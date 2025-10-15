<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  export let prevCharacter: { name: string; detailUrl: string };
  export let nextCharacter: { name: string; detailUrl: string };

  // Performance tracking
  let lastNavigation: number = 0;
  const navigationThrottle: number = 300;

  // Navigation handler
  function handleNavigation(url: string) {
    if (!url || typeof window === 'undefined') {
      return;
    }

    // Throttle navigation to prevent rapid clicks
    const now = Date.now();
    if (now - lastNavigation < navigationThrottle) {
      return;
    }
    lastNavigation = now;

    try {
      // Add visual feedback to navigation element
      const targetButton = document.querySelector(`[data-character-url="${url}"]`) as HTMLElement;
      if (targetButton) {
        targetButton.style.opacity = '0.6';
        targetButton.style.transform = 'scale(0.95)';
        targetButton.style.transition = 'all 0.08s ease';
        targetButton.style.pointerEvents = 'none';
      }

      // Use replace for instant feel
      window.location.replace(url);
    } catch (error) {
      // Reset element state on error
      const targetButton = document.querySelector(`[data-character-url="${url}"]`) as HTMLElement;
      if (targetButton) {
        targetButton.style.opacity = '1';
        targetButton.style.transform = 'scale(1)';
        targetButton.style.pointerEvents = '';
      }
    }
  }

  // Touch handling for mobile swipe zones
  let touchStartTime: number = 0;
  let touchMoved: boolean = false;

  function handleTouchStart(e: TouchEvent) {
    touchStartTime = Date.now();
    touchMoved = false;
  }

  function handleTouchMove(e: TouchEvent) {
    touchMoved = true;
  }

  function handleTouchEnd(e: TouchEvent, url: string) {
    const touchDuration = Date.now() - touchStartTime;

    // Enhanced touch validation
    if (!touchMoved && touchDuration < 400 && touchDuration > 50) {
      handleNavigation(url);
    }
  }

  function handleClick(e: MouseEvent, url: string) {
    handleNavigation(url);
  }

  function handleKeydown(e: KeyboardEvent, url: string) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavigation(url);
    }
  }

  // Visibility change handler to reset throttle
  function handleVisibilityChange() {
    if (typeof document !== 'undefined' && document.visibilityState === 'hidden') {
      lastNavigation = 0;
    }
  }

  // Lifecycle
  onMount(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('visibilitychange', handleVisibilityChange);
    }
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('visibilitychange', handleVisibilityChange);
    }
  });
</script>

<!-- Mobile Invisible Swipe Zones -->
<div
  class="mobile-swipe-left"
  role="button"
  tabindex="0"
  aria-label={`Previous character: ${prevCharacter.name}`}
  data-direction="prev"
  data-character-url={prevCharacter.detailUrl}
  title={`Previous: ${prevCharacter.name}`}
  on:touchstart={handleTouchStart}
  on:touchmove={handleTouchMove}
  on:touchend={(e) => handleTouchEnd(e, prevCharacter.detailUrl)}
  on:click={(e) => handleClick(e, prevCharacter.detailUrl)}
  on:keydown={(e) => handleKeydown(e, prevCharacter.detailUrl)}
></div>
<div
  class="mobile-swipe-right"
  role="button"
  tabindex="0"
  aria-label={`Next character: ${nextCharacter.name}`}
  data-direction="next"
  data-character-url={nextCharacter.detailUrl}
  title={`Next: ${nextCharacter.name}`}
  on:touchstart={handleTouchStart}
  on:touchmove={handleTouchMove}
  on:touchend={(e) => handleTouchEnd(e, nextCharacter.detailUrl)}
  on:click={(e) => handleClick(e, nextCharacter.detailUrl)}
  on:keydown={(e) => handleKeydown(e, nextCharacter.detailUrl)}
></div>

<style>
  .mobile-swipe-left,
  .mobile-swipe-right {
    position: fixed;
    top: 0;
    width: 80px;
    height: 100vh;
    z-index: 1000;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .mobile-swipe-left {
    left: 0;
  }

  .mobile-swipe-right {
    right: 0;
  }

  /* Only show on mobile devices */
  @media (min-width: 768px) {
    .mobile-swipe-left,
    .mobile-swipe-right {
      display: none;
    }
  }

  /* Visual feedback for accessibility */
  .mobile-swipe-left:focus,
  .mobile-swipe-right:focus {
    outline: 2px solid var(--sab-calm-red, #dc3545);
    outline-offset: 2px;
  }
</style>
