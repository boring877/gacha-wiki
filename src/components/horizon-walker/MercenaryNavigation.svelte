<script lang="ts">
  import { onMount } from 'svelte';
  import { HORIZON_WALKER_MERCENARIES } from '../../data/horizon-walker/mercenaries.js';
  import MobileMercenaryNavigation from './MobileMercenaryNavigation.svelte';

  export let currentMercenarySlug: string = '';

  // Simple state
  let prevMercenary: typeof HORIZON_WALKER_MERCENARIES[0] | null = null;
  let nextMercenary: typeof HORIZON_WALKER_MERCENARIES[0] | null = null;

  // Simple navigation - just get prev/next from the default mercenary list
  function updateNavigation() {
    const index = HORIZON_WALKER_MERCENARIES.findIndex(merc => merc.slug === currentMercenarySlug);
    
    if (index === -1) {
      prevMercenary = null;
      nextMercenary = null;
      return;
    }

    prevMercenary = HORIZON_WALKER_MERCENARIES[index > 0 ? index - 1 : HORIZON_WALKER_MERCENARIES.length - 1];
    nextMercenary = HORIZON_WALKER_MERCENARIES[index < HORIZON_WALKER_MERCENARIES.length - 1 ? index + 1 : 0];
  }


  // Navigation handlers
  function navigateTo(url: string) {
    if (url && typeof window !== 'undefined') {
      window.location.href = url;
    }
  }

  function handlePrevClick() {
    if (prevMercenary) {
      navigateTo(`/guides/horizon-walker/mercenaries/${prevMercenary.slug}`);
    }
  }

  function handleNextClick() {
    if (nextMercenary) {
      navigateTo(`/guides/horizon-walker/mercenaries/${nextMercenary.slug}`);
    }
  }

  // Reactive: Update navigation when mercenary changes
  $: if (currentMercenarySlug) {
    updateNavigation();
  }

  // Initialize component when it mounts
  onMount(() => {
    
    // Add keyboard navigation
    const handleKeydown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        e.ctrlKey ||
        e.altKey ||
        e.metaKey
      ) {
        return;
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevClick();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextClick();
      }
    };
    
    document.addEventListener('keydown', handleKeydown);
    
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

<!-- No visible UI - keyboard navigation only -->
{#if currentMercenarySlug && prevMercenary && nextMercenary}
  <!-- Mobile Navigation Component -->
  <MobileMercenaryNavigation {prevMercenary} {nextMercenary} />
{/if}
