<script lang="ts">
  import { onMount } from 'svelte';
  import { ZONE_NOVA_MEMORIES } from '../../data/zone-nova/memories.js';
  import MobileMemoryNavigation from './MobileMemoryNavigation.svelte';

  export let currentMemorySlug: string = '';

  // Simple state
  let prevMemory: typeof ZONE_NOVA_MEMORIES[0] | null = null;
  let nextMemory: typeof ZONE_NOVA_MEMORIES[0] | null = null;

  // Simple navigation - just get prev/next from the default memory list
  function updateNavigation() {
    const index = ZONE_NOVA_MEMORIES.findIndex(mem => mem.slug === currentMemorySlug);
    
    if (index === -1) {
      prevMemory = null;
      nextMemory = null;
      return;
    }

    prevMemory = ZONE_NOVA_MEMORIES[index > 0 ? index - 1 : ZONE_NOVA_MEMORIES.length - 1];
    nextMemory = ZONE_NOVA_MEMORIES[index < ZONE_NOVA_MEMORIES.length - 1 ? index + 1 : 0];
  }


  // Navigation handlers
  function navigateTo(url: string) {
    if (url && typeof window !== 'undefined') {
      window.location.href = url;
    }
  }

  function handlePrevClick() {
    if (prevMemory) {
      navigateTo(`/guides/zone-nova/memories/${prevMemory.slug}`);
    }
  }

  function handleNextClick() {
    if (nextMemory) {
      navigateTo(`/guides/zone-nova/memories/${nextMemory.slug}`);
    }
  }

  // Reactive: Update navigation when memory changes
  $: if (currentMemorySlug) {
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
{#if currentMemorySlug && prevMemory && nextMemory}
  <!-- Mobile Navigation Component -->
  <MobileMemoryNavigation {prevMemory} {nextMemory} />
{/if}
