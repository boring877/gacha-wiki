<script lang="ts">
  import { onMount } from 'svelte';

  export let prevWeapon: { name: string; character: { slug: string } };
  export let nextWeapon: { name: string; character: { slug: string } };

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
      const url = `/guides/horizon-walker/weapons/${slug}`;
      const targetButton = document.querySelector(`[data-weapon-slug="${slug}"]`) as HTMLElement;
      if (targetButton) {
        targetButton.style.opacity = '0.6';
        targetButton.style.transform = 'scale(0.95)';
        targetButton.style.transition = 'all 0.08s ease';
        targetButton.style.pointerEvents = 'none';
      }

      window.location.href = url;
    } catch (error) {
      const targetButton = document.querySelector(`[data-weapon-slug="${slug}"]`) as HTMLElement;
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
  aria-label={`Previous weapon: ${prevWeapon.name}`}
  data-direction="prev"
  data-weapon-slug={prevWeapon.character.slug}
  title={`Previous: ${prevWeapon.name}`}
  on:touchstart={handleTouchStart}
  on:touchmove={handleTouchMove}
  on:touchend={(e) => handleTouchEnd(e, prevWeapon.character.slug)}
  on:click={(e) => handleClick(e, prevWeapon.character.slug)}
  on:keydown={(e) => handleKeydown(e, prevWeapon.character.slug)}
></div>
<div
  class="mobile-swipe-right"
  role="button"
  tabindex="0"
  aria-label={`Next weapon: ${nextWeapon.name}`}
  data-direction="next"
  data-weapon-slug={nextWeapon.character.slug}
  title={`Next: ${nextWeapon.name}`}
  on:touchstart={handleTouchStart}
  on:touchmove={handleTouchMove}
  on:touchend={(e) => handleTouchEnd(e, nextWeapon.character.slug)}
  on:click={(e) => handleClick(e, nextWeapon.character.slug)}
  on:keydown={(e) => handleKeydown(e, nextWeapon.character.slug)}
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
    outline: 2px solid var(--hw-primary-purple, #9333ea);
    outline-offset: 2px;
  }
</style>
