/**
 * Timing constants for consistent intervals and delays across the application
 * Replaces hardcoded magic numbers with named constants
 */

// Animation and UI timing constants
export const TIMING = {
  // Showcase and clock rotation intervals
  SHOWCASE_ROTATION_INTERVAL: 6000, // 6 seconds
  CLOCK_UPDATE_INTERVAL: 1000, // 1 second

  // Debounce delays
  CALCULATION_DEBOUNCE: 150, // 150ms for user input debouncing
  RESIZE_DEBOUNCE: 100, // 100ms for window resize debouncing

  // Animation durations
  TRANSITION_FAST: 150, // 150ms for quick transitions
  TRANSITION_NORMAL: 300, // 300ms for normal transitions
  TRANSITION_SLOW: 500, // 500ms for slow transitions

  // Reset intervals
  DAILY_RESET_HOUR: 4, // 4 AM UTC for daily resets
  WEEKLY_RESET_DAY: 1, // Monday for weekly resets

  // Cache and refresh intervals
  ONE_MINUTE: 60 * 1000, // 1 minute in milliseconds
  ONE_HOUR: 60 * 60 * 1000, // 1 hour in milliseconds
  ONE_DAY: 24 * 60 * 60 * 1000, // 1 day in milliseconds

  // Performance optimization
  LAZY_LOAD_THRESHOLD: 50, // 50px before element enters viewport
  ANIMATION_FRAME_RATE: 60, // 60 FPS for smooth animations

  // User interaction delays
  CLICK_DEBOUNCE: 300, // 300ms to prevent double-clicks
  SEARCH_DEBOUNCE: 500, // 500ms for search input debouncing

  // Loading states
  LOADING_SPINNER_DELAY: 200, // 200ms before showing loading spinner
  SKELETON_LOADING_DURATION: 1000, // 1 second for skeleton loading

  // Error handling
  RETRY_DELAY: 1000, // 1 second initial retry delay
  MAX_RETRY_ATTEMPTS: 3, // Maximum retry attempts

  // Notification display
  NOTIFICATION_DURATION: 5000, // 5 seconds for notifications
  TOAST_FADE_DURATION: 300, // 300ms for toast fade animation
} as const;

// Export commonly used values for backward compatibility
export const ROTATION_INTERVAL = TIMING.SHOWCASE_ROTATION_INTERVAL;
export const CLOCK_INTERVAL = TIMING.CLOCK_UPDATE_INTERVAL;
export const DEBOUNCE_DELAY = TIMING.CALCULATION_DEBOUNCE;
export const ONE_HOUR = TIMING.ONE_HOUR;
