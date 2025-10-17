<script lang="ts">
  import { onMount } from 'svelte';

  export let prevMemory: { slug: string; name: string };
  export let nextMemory: { slug: string; name: string };

  // Performance tracking
  let lastNavigation: number = 0;
  const navigationThrottle: number = 300;

  // Navigation handler
  function handleNavigation(slug: string) {
    if (!slug || typeof window === 'undefined') {
      return;
    }

    // Throttle navigation to prevent rapid clicks
    const now = Date.now();
    if (now - lastNavigation < navigationThrottle) {
      return;
    }
    lastNavigation = now;

    try {
      const url = `/guides/zone-nova/memories/${slug}`;
      const targetButton = document.querySelector(`[data-memory-slug="${slug}"]`) as HTMLElement;
      if (targetButton) {
        targetButton.style.opacity = '0.6';
        targetButton.style.transform = 'scale(0.95)';
        targetButton.style.transition = 'all 0.08s ease';
        targetButton.style.pointerEvents = 'none';
      }

      window.location.href = url;
    } catch (error) {
      const targetButton = document.querySelector(`[data-memory-slug="${slug}"]`) as HTMLElement;
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

  function handleTouchEnd(e: TouchEvent, slug: string) {
    const touchDuration = Date.now() - touchStartTime;

    // Enhanced touch validation
    if (!touchMoved && touchDuration < 400 && touchDuration > 50) {
      handleNavigation(slug);
    }
  }

  function handleClick(e: MouseEvent, slug: string) {
    handleNavigation(slug);
  }

  function handleKeydown(e: KeyboardEvent, slug: string) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavigation(slug);
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
      
      return () => {
        window.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  });
</script>

<!-- Mobile Invisible Swipe Zones -->
<div
  class="mobile-swipe-left"
  role="button"
  tabindex="0"
  aria-label={`Previous memory: ${prevMemory.name}`}
  data-direction="prev"
  data-memory-slug={prevMemory.slug}
  title={`Previous: ${prevMemory.name}`}
  on:touchstart={handleTouchStart}
  on:touchmove={handleTouchMove}
  on:touchend={(e) => handleTouchEnd(e, prevMemory.slug)}
  on:click={(e) => handleClick(e, prevMemory.slug)}
  on:keydown={(e) => handleKeydown(e, prevMemory.slug)}
></div>
<div
  class="mobile-swipe-right"
  role="button"
  tabindex="0"
  aria-label={`Next memory: ${nextMemory.name}`}
  data-direction="next"
  data-memory-slug={nextMemory.slug}
  title={`Next: ${nextMemory.name}`}
  on:touchstart={handleTouchStart}
  on:touchmove={handleTouchMove}
  on:touchend={(e) => handleTouchEnd(e, nextMemory.slug)}
  on:click={(e) => handleClick(e, nextMemory.slug)}
  on:keydown={(e) => handleKeydown(e, nextMemory.slug)}
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
    outline: 2px solid var(--zn-accent-blue, #0891b2);
    outline-offset: 2px;
  }
</style>
