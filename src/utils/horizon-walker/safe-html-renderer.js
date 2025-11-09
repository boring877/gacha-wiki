/**
 * Safe HTML Renderer for Horizon Walker
 * Provides additional validation for HTML content to be rendered with set:html
 */

/**
 * Validates HTML content for safe rendering
 * @param {string} htmlContent - The HTML content to validate
 * @returns {Object} { isValid: boolean, sanitizedContent: string, errors: string[] }
 */
export function validateHtmlContent(htmlContent) {
  const errors = [];
  let sanitizedContent = htmlContent || '';

  // Input validation
  if (typeof htmlContent !== 'string') {
    return {
      isValid: false,
      sanitizedContent: '',
      errors: ['Invalid input type: expected string'],
    };
  }

  // Length validation to prevent content injection attacks
  if (htmlContent.length > 50000) {
    errors.push('Content too long - potential injection risk');
    sanitizedContent = htmlContent.substring(0, 50000);
  }

  // Check for dangerous patterns that might bypass existing sanitization
  const dangerousPatterns = [
    /javascript:/gi,
    /data:text\/html/gi,
    /vbscript:/gi,
    /<script[^>]*>.*?<\/script>/gis,
    /on\w+\s*=/gi, // Event handlers like onclick, onload, etc.
    /<iframe[^>]*>/gi,
    /<object[^>]*>/gi,
    /<embed[^>]*>/gi,
    /<form[^>]*>/gi,
    /expression\s*\(/gi, // CSS expressions
  ];

  dangerousPatterns.forEach(pattern => {
    if (pattern.test(htmlContent)) {
      errors.push(`Dangerous content detected: ${pattern.source}`);
    }
  });

  // Remove dangerous content
  dangerousPatterns.forEach(pattern => {
    sanitizedContent = sanitizedContent.replace(pattern, '');
  });

  // Validate allowed HTML tags (whitelist approach)
  const allowedTags = [
    'span',
    'strong',
    'em',
    'b',
    'i',
    'u',
    'br',
    'p',
    'div',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'ul',
    'ol',
    'li',
    'dl',
    'dt',
    'dd',
    'small',
    'sub',
    'sup',
    'code',
    'pre',
  ];

  // Simple tag validation - remove any tags not in whitelist
  const tagRegex = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>/g;
  const foundTags = [];
  let match;

  while ((match = tagRegex.exec(htmlContent)) !== null) {
    const tagName = match[1].toLowerCase();
    if (!allowedTags.includes(tagName)) {
      errors.push(`Disallowed HTML tag: ${tagName}`);
      foundTags.push(tagName);
    }
  }

  // Remove disallowed tags
  foundTags.forEach(tag => {
    const tagPattern = new RegExp(`<\\/?${tag}[^>]*>`, 'gi');
    sanitizedContent = sanitizedContent.replace(tagPattern, '');
  });

  // Final validation
  const isValid = errors.length === 0 && htmlContent.length > 0 && sanitizedContent.length > 0;

  return {
    isValid,
    sanitizedContent: sanitizedContent.trim(),
    errors,
  };
}

/**
 * Safe HTML rendering function with fallback
 * @param {string} htmlContent - The HTML content to render
 * @param {string} fallbackText - Fallback plain text if HTML is invalid
 * @returns {Object} { content: string, isHtml: boolean, isValid: boolean }
 */
export function safeHtmlRenderer(htmlContent, fallbackText = '') {
  const validation = validateHtmlContent(htmlContent);

  if (!validation.isValid) {
    // Log validation errors for debugging (in production, this should go to a monitoring service)
    if (validation.errors.length > 0) {
      console.warn('HTML validation failed:', validation.errors);
    }

    // Return fallback text or plain text version
    return {
      content: fallbackText || htmlContent.replace(/<[^>]*>/g, ''), // Strip HTML as fallback
      isHtml: false,
      isValid: false,
      errors: validation.errors,
    };
  }

  return {
    content: validation.sanitizedContent,
    isHtml: true,
    isValid: true,
    errors: [],
  };
}

/**
 * Batch validation for multiple HTML contents
 * @param {Object} htmlContents - Object with HTML content values
 * @returns {Object} Validation results for each content
 */
export function batchValidateHtml(htmlContents) {
  const results = {};
  let hasErrors = false;

  Object.keys(htmlContents).forEach(key => {
    const content = htmlContents[key];
    if (content) {
      const validation = validateHtmlContent(content);
      results[key] = validation;
      if (!validation.isValid) {
        hasErrors = true;
      }
    } else {
      results[key] = { isValid: true, sanitizedContent: '', errors: [] };
    }
  });

  return {
    results,
    hasErrors,
    overallValid: !hasErrors,
  };
}

/**
 * Performance monitoring wrapper for HTML validation
 * @param {Function} validationFunction - The validation function to monitor
 * @returns {Function} Wrapped function with performance tracking
 */
export function withPerformanceMonitoring(validationFunction) {
  return function (...args) {
    const startTime = performance.now();
    const result = validationFunction.apply(this, args);
    const endTime = performance.now();

    const executionTime = endTime - startTime;

    // Log performance warnings for slow operations
    if (executionTime > 10) {
      // 10ms threshold
      console.warn(`HTML validation took ${executionTime.toFixed(2)}ms - consider optimization`);
    }

    return {
      ...result,
      performance: {
        executionTime: executionTime.toFixed(2) + 'ms',
      },
    };
  };
}

// Export performance-monitored versions
export const validateHtmlContentWithMonitoring = withPerformanceMonitoring(validateHtmlContent);
export const safeHtmlRendererWithMonitoring = withPerformanceMonitoring(safeHtmlRenderer);
