// Cloudinary Video Utilities
// Helper functions for video processing and optimization

export const CLOUDINARY_CONFIG = {
  cloudName: 'dtiiaqlah',
  baseUrl: 'https://res.cloudinary.com/dtiiaqlah',
  videoUploadPath: '/video/upload/',
  imageUploadPath: '/image/upload/',
  autoOptimize: true,
  format: 'auto',
  quality: 'auto',
};

/**
 * Generate optimized Cloudinary video URL with transformations
 */
export function getOptimizedVideoUrl(cloudinaryId, transformations = {}) {
  const {
    width = 'auto',
    height = 'auto',
    crop = 'fill',
    quality = 'auto',
    format = 'auto',
    startOffset = null,
    endOffset = null,
  } = transformations;

  let transformParams = `w_${width},h_${height},c_${crop},q_${quality},f_${format}`;

  // Add video trimming if specified
  if (startOffset && endOffset) {
    transformParams += `,so_${startOffset},eo_${endOffset}`;
  } else if (startOffset) {
    transformParams += `,so_${startOffset}`;
  }

  return `${CLOUDINARY_CONFIG.baseUrl}${CLOUDINARY_CONFIG.videoUploadPath}${transformParams}/${cloudinaryId}`;
}

/**
 * Generate thumbnail URL from video
 */
export function getVideoThumbnail(cloudinaryId, options = {}) {
  const {
    width = 400,
    height = 300,
    crop = 'fill',
    quality = 'auto',
    format = 'jpg',
    timeOffset = 'auto',
  } = options;

  const transformParams = `w_${width},h_${height},c_${crop},q_${quality},f_${format},so_${timeOffset}`;

  return `${CLOUDINARY_CONFIG.baseUrl}${CLOUDINARY_CONFIG.videoUploadPath}${transformParams}/${cloudinaryId}`;
}

/**
 * Generate responsive video URLs for different screen sizes
 */
export function getResponsiveVideoUrls(cloudinaryId) {
  return {
    mobile: getOptimizedVideoUrl(cloudinaryId, { width: 480, height: 270 }),
    tablet: getOptimizedVideoUrl(cloudinaryId, { width: 768, height: 432 }),
    desktop: getOptimizedVideoUrl(cloudinaryId, { width: 1200, height: 675 }),
    fullscreen: getOptimizedVideoUrl(cloudinaryId, { width: 1920, height: 1080 }),
  };
}

/**
 * Generate video player configuration for different skill types
 */
export function getSkillVideoConfig(skillType, _duration) {
  const baseConfig = {
    controls: true,
    autoplay: false,
    muted: true,
    loop: false,
    preload: 'metadata',
    playsinline: true,
  };

  switch (skillType.toLowerCase()) {
    case 'normal':
      return {
        ...baseConfig,
        loop: true, // Normal attacks can loop
        autoplay: true, // Quick preview
      };
    case 'special':
      return {
        ...baseConfig,
        autoplay: false,
        preload: 'auto', // Preload special skills
      };
    case 'passive':
      return {
        ...baseConfig,
        loop: true,
        autoplay: true,
        controls: false, // Passive skills auto-play without controls
      };
    case 'ultimate':
      return {
        ...baseConfig,
        preload: 'auto',
        autoplay: false,
        controls: true, // Ultimate skills need full controls
      };
    default:
      return baseConfig;
  }
}

/**
 * Create video element with Cloudinary optimizations
 */
export function createOptimizedVideoElement(videoData, options = {}) {
  const {
    className = '',
    width = 'auto',
    height = 'auto',
    showControls = true,
    autoplay = false,
    muted = true,
    loop = false,
  } = options;

  // Get responsive URLs
  const responsiveUrls = getResponsiveVideoUrls(videoData.cloudinaryId);

  // Create video element configuration
  const videoConfig = getSkillVideoConfig(videoData.skillType, videoData.duration);

  return {
    src: responsiveUrls.desktop,
    poster: videoData.thumbnailUrl,
    className: `cloudinary-video ${className}`,
    width: width,
    height: height,
    controls: showControls && videoConfig.controls,
    autoplay: autoplay || videoConfig.autoplay,
    muted: muted || videoConfig.muted,
    loop: loop || videoConfig.loop,
    preload: videoConfig.preload,
    playsinline: videoConfig.playsinline,
    'data-cloudinary-id': videoData.cloudinaryId,
    'data-skill-type': videoData.skillType,
    'data-duration': videoData.duration,
  };
}

/**
 * Generate video sources for different formats and quality levels
 */
export function getVideoSources(cloudinaryId) {
  return [
    {
      src: getOptimizedVideoUrl(cloudinaryId, { format: 'webm', quality: 'auto' }),
      type: 'video/webm',
    },
    {
      src: getOptimizedVideoUrl(cloudinaryId, { format: 'mp4', quality: 'auto' }),
      type: 'video/mp4',
    },
    {
      src: getOptimizedVideoUrl(cloudinaryId, { format: 'ogg', quality: 'auto' }),
      type: 'video/ogg',
    },
  ];
}

/**
 * Add overlay text to video (for skill names, damage numbers, etc.)
 */
export function addVideoOverlay(cloudinaryId, overlayText, options = {}) {
  const {
    fontSize = 40,
    fontFamily = 'Arial',
    fontColor = 'white',
    fontWeight = 'bold',
    position = 'south',
    background = 'black_80',
  } = options;

  const overlayParams = `l_text:${fontFamily}_${fontSize}_${fontWeight}:${encodeURIComponent(overlayText)},co_${fontColor},g_${position},bg_${background}`;

  return getOptimizedVideoUrl(cloudinaryId, { custom: overlayParams });
}

/**
 * Create video playlist for skill sequence
 */
export function createSkillPlaylist(skills) {
  return skills.map(skill => ({
    src: getOptimizedVideoUrl(skill.cloudinaryId),
    poster: skill.thumbnailUrl,
    title: skill.skillName,
    description: skill.description,
    duration: skill.duration,
    type: skill.skillType,
  }));
}

/**
 * Get video analytics tracking parameters
 */
export function getVideoAnalytics(characterId, skillName) {
  return {
    'data-analytics-character': characterId,
    'data-analytics-skill': skillName,
    'data-analytics-category': 'skill-video',
    'data-analytics-action': 'play',
  };
}

/**
 * Progressive video loading for better performance
 */
export function createProgressiveVideoLoader(_videoData, _container) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target;
          const actualSrc = video.getAttribute('data-src');
          if (actualSrc) {
            video.src = actualSrc;
            video.removeAttribute('data-src');
          }
          observer.unobserve(video);
        }
      });
    },
    {
      rootMargin: '50px',
    }
  );

  return observer;
}

/**
 * Handle video errors with fallback
 */
export function handleVideoError(videoElement, fallbackUrl) {
  videoElement.addEventListener('error', e => {
    // console.warn('Video failed to load:', e.target.src);
    if (fallbackUrl && e.target.src !== fallbackUrl) {
      e.target.src = fallbackUrl;
    } else {
      // Show placeholder image or error message
      const placeholder = document.createElement('div');
      placeholder.className = 'video-error-placeholder';
      placeholder.innerHTML = `
        <div class="error-message">
          <span>Video unavailable</span>
          <button onclick="this.parentElement.parentElement.previousElementSibling.load()">Retry</button>
        </div>
      `;
      videoElement.parentNode.insertBefore(placeholder, videoElement.nextSibling);
    }
  });
}

export default {
  getOptimizedVideoUrl,
  getVideoThumbnail,
  getResponsiveVideoUrls,
  getSkillVideoConfig,
  createOptimizedVideoElement,
  getVideoSources,
  addVideoOverlay,
  createSkillPlaylist,
  getVideoAnalytics,
  createProgressiveVideoLoader,
  handleVideoError,
};
