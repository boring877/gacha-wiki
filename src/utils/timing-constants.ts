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

// Validation constants
export const VALIDATION = {
  // Character and game data validation
  SUPPORTED_RARITIES: ['SSR', 'SR', 'R'] as const,
  SUPPORTED_ELEMENTS: ['Fire', 'Water', 'Earth', 'Air', 'Light', 'Dark'] as const,
  SUPPORTED_FACTIONS: ['Alliance', 'Empire', 'Neutral'] as const,

  // Image and media validation
  MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB max image size
  SUPPORTED_IMAGE_FORMATS: ['jpg', 'jpeg', 'png', 'webp', 'avif'] as const,
  SUPPORTED_VIDEO_FORMATS: ['mp4', 'webm'] as const,

  // Text validation
  MAX_DESCRIPTION_LENGTH: 1000,
  MAX_NAME_LENGTH: 50,
  MIN_NAME_LENGTH: 2,

  // URL validation
  MAX_URL_LENGTH: 2000,
  ALLOWED_PROTOCOLS: ['http:', 'https:'] as const,
} as const;

// UI Constants
export const UI_CONSTANTS = {
  // Breakpoints (matching CSS)
  BREAKPOINTS: {
    MOBILE: 768,
    TABLET: 1024,
    DESKTOP: 1200,
    WIDE: 1600,
  },

  // Touch target sizes
  MIN_TOUCH_TARGET: 44, // 44px minimum touch target size
  RECOMMENDED_TOUCH_TARGET: 48, // 48px recommended touch target size

  // Accessibility
  REDUCED_MOTION_DURATION: 0.01, // 0.01ms for reduced motion
  FOCUS_OUTLINE_WIDTH: 2, // 2px focus outline width

  // Layout constants
  HEADER_HEIGHT: 60, // 60px header height
  FOOTER_HEIGHT: 200, // 200px footer height
  SIDEBAR_WIDTH: 250, // 250px sidebar width

  // Content limits
  ITEMS_PER_PAGE: 20,
  UPDATES_PER_PAGE: 10,
  SEARCH_RESULTS_LIMIT: 50,
} as const;

// Export commonly used values for backward compatibility
export const ROTATION_INTERVAL = TIMING.SHOWCASE_ROTATION_INTERVAL;
export const CLOCK_INTERVAL = TIMING.CLOCK_UPDATE_INTERVAL;
export const DEBOUNCE_DELAY = TIMING.CALCULATION_DEBOUNCE;
export const ONE_HOUR = TIMING.ONE_HOUR;
