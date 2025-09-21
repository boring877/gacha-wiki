/**
 * Silver and Blood Clock Timer Functionality
 * Optimized clock with performance improvements matching Horizon Walker
 * Handles countdown timers for Silver and Blood daily resets, events, and region switching
 */

// Constants for performance optimization
const SAB_HOLIDAY_UPDATE_INTERVAL = 3600000; // 1 hour for holiday timers
const MS_PER_DAY = 1000 * 60 * 60 * 24;
const MS_PER_HOUR = 1000 * 60 * 60;
const MS_PER_MINUTE = 1000 * 60;

class SilverAndBloodClockTimer {
  constructor() {
    this.animationFrame = null;
    this.holidayInterval = null;
    this.currentRegion = 'us'; // default region
    this.config = null;
    this.elements = {}; // Store all DOM elements in one object for better performance
    this.cleanupHandler = null; // Store cleanup handler reference

    // Performance monitoring
    this.performanceStats = {
      updateCount: 0,
      lastFPS: 0,
      frameCount: 0,
      lastFrameTime: performance.now(),
    };

    this.init();
  }

  init() {
    // Initialize immediately for faster load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupClock(), { once: true });
    } else {
      this.setupClock();
    }
  }

  setupClock() {
    try {
      // Get configuration from window object (set by layout)
      this.config = window.silverAndBloodConfig;
      if (!this.config) {
        console.warn('Silver and Blood config not found');
        return;
      }

      this.currentRegion = this.config.currentRegion || 'us';

      // Initialize DOM elements efficiently
      this.initializeDOMElements();

      // Check if critical elements exist before proceeding
      if (!this.elements.clockHours) {
        console.warn('Clock elements not found');
        return;
      }

      // Setup region switcher
      this.setupRegionSwitcher();

      // Initial updates
      this.updateAllDisplays();
      this.updateHolidayTimers();

      // Start optimized clock loop
      this.startClockLoop();

      // Setup cleanup handler
      this.cleanupHandler = () => this.cleanup();
      window.addEventListener('beforeunload', this.cleanupHandler);

      // Also cleanup on page visibility change for better performance
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.pauseClockLoop();
        } else {
          this.resumeClockLoop();
        }
      });
    } catch (error) {
      console.error('Failed to setup Silver and Blood clock:', error);
      this.cleanup();
    }
  }

  initializeDOMElements() {
    // Batch DOM queries for better performance
    const elementIds = [
      'clockHours',
      'clockMinutes',
      'clockSeconds',
      'currentDate',
      'currentUTC',
      'utcNote',
      'regionName',
      'gameStatus',
      'timerDescription',
      'launchDays',
      'weeklyTime',
      'monthlyTime',
      'weeklyResetSubtitle',
      'monthlyResetSubtitle',
      'maintenanceStartTime',
      'maintenanceStartLabel',
      'maintenanceEndTime',
      'maintenanceEndLabel',
      'maintenanceSubtitle',
      'serverStatusDot',
      'serverStatusText',
      'halloweenTime',
      'newyearTime',
    ];

    // Query all elements at once and validate existence
    elementIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        this.elements[id] = element;
      }
    });

    // Create shortcuts for frequently accessed elements
    this.clockHours = this.elements.clockHours;
    this.clockMinutes = this.elements.clockMinutes;
    this.clockSeconds = this.elements.clockSeconds;
  }

  /**
   * Start optimized clock loop using requestAnimationFrame with performance monitoring
   */
  startClockLoop() {
    let lastSecond = Math.floor(Date.now() / 1000);

    const loop = () => {
      const currentTime = performance.now();
      const currentSecond = Math.floor(Date.now() / 1000);

      // Only update when second actually changes for better performance
      if (currentSecond !== lastSecond) {
        this.updateAllDisplays();
        this.performanceStats.updateCount++;
        lastSecond = currentSecond;
      }

      // Update performance stats
      this.performanceStats.frameCount++;
      if (currentTime - this.performanceStats.lastFrameTime >= 1000) {
        this.performanceStats.lastFPS = this.performanceStats.frameCount;
        this.performanceStats.frameCount = 0;
        this.performanceStats.lastFrameTime = currentTime;
      }

      this.animationFrame = requestAnimationFrame(loop);
    };

    this.animationFrame = requestAnimationFrame(loop);

    // Holiday timers update every hour (performance optimization)
    this.holidayInterval = setInterval(() => {
      this.updateHolidayTimers();
    }, SAB_HOLIDAY_UPDATE_INTERVAL);
  }

  pauseClockLoop() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }

  resumeClockLoop() {
    if (!this.animationFrame) {
      this.startClockLoop();
    }
  }

  updateAllDisplays() {
    this.updateClock();
    this.updateCurrentDateTime();
    this.updateAllTimerCards();
  }

  setupRegionSwitcher() {
    const regionButtons = document.querySelectorAll('.region-button');
    regionButtons.forEach(button => {
      button.addEventListener('click', e => {
        e.preventDefault();
        const newRegion = e.target.getAttribute('data-region');
        if (newRegion && newRegion !== this.currentRegion) {
          this.switchRegion(newRegion);
        }
      });
    });
  }

  switchRegion(newRegion) {
    if (!this.config.regions[newRegion]) return;

    this.currentRegion = newRegion;

    // Update active button
    document.querySelectorAll('.region-button').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-region') === newRegion) {
        btn.classList.add('active');
      }
    });

    // Immediately update all displays for instant feedback
    this.updateRegionDisplay();
    this.updateAllDisplays();
  }

  updateRegionDisplay() {
    const regionConfig = this.config.regions[this.currentRegion];
    if (!regionConfig) return;

    // Use elements object and value comparison for better performance
    this.setElementText(this.elements.regionName, regionConfig.name);
    this.setElementText(this.elements.gameStatus, regionConfig.status);
    this.setElementText(this.elements.utcNote, `This is based on ${regionConfig.utcLabel}`);

    // Update reset subtitles based on region
    const resetHourLocal = this.currentRegion === 'apac' ? '09:00' : '05:00';
    const resetLabel = `Every Sunday at ${resetHourLocal} ${regionConfig.utcLabel}`;
    const monthlyLabel = `Last day of each month at ${resetHourLocal} ${regionConfig.utcLabel}`;

    this.setElementText(this.elements.weeklyResetSubtitle, resetLabel);
    this.setElementText(this.elements.monthlyResetSubtitle, monthlyLabel);

    // Update maintenance subtitle
    const maintenanceConfig = this.config.timers[this.currentRegion].maintenance;
    this.setElementText(this.elements.maintenanceSubtitle, maintenanceConfig.subtitle);
  }

  /**
   * Calculate time remaining until next Silver and Blood reset
   */
  getTimeUntilReset() {
    const now = new Date();
    const regionConfig = this.config.regions[this.currentRegion];
    const resetTime = new Date();
    resetTime.setUTCHours(regionConfig.resetHour, regionConfig.resetMinute, 0, 0);

    // If reset time has passed today, set it for tomorrow
    if (resetTime <= now) {
      resetTime.setUTCDate(resetTime.getUTCDate() + 1);
    }

    // Calculate time difference
    const timeDiff = resetTime.getTime() - now.getTime();
    const hours = Math.floor(timeDiff / MS_PER_HOUR);
    const minutes = Math.floor((timeDiff % MS_PER_HOUR) / MS_PER_MINUTE);
    const seconds = Math.floor((timeDiff % MS_PER_MINUTE) / 1000);

    return {
      hours: Math.max(0, hours),
      minutes: Math.max(0, minutes),
      seconds: Math.max(0, seconds),
    };
  }

  /**
   * Update the main countdown clock
   */
  updateClock() {
    const time = this.getTimeUntilReset();

    // Update with flip animation
    this.updateTimeValue(this.clockHours, time.hours);
    this.updateTimeValue(this.clockMinutes, time.minutes);
    this.updateTimeValue(this.clockSeconds, time.seconds);
  }

  /**
   * Update the clock display with current countdown - optimized with value comparison
   */
  updateTimeValue(element, value) {
    if (!element) return;
    const newValue = String(value).padStart(2, '0');
    // Only update DOM if value actually changed
    if (element.textContent !== newValue) {
      element.textContent = newValue;
    }
  }

  /**
   * Update current date and UTC time display - optimized with value comparison
   */
  updateCurrentDateTime() {
    const now = new Date();
    const regionConfig = this.config.regions[this.currentRegion];
    const currentDate = this.elements.currentDate;
    const currentUTC = this.elements.currentUTC;

    // Update current date (only if element exists and every 60 seconds for performance)
    if (currentDate && now.getSeconds() === 0) {
      const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      const newDate = now.toLocaleDateString('en-US', dateOptions);
      this.setElementText(currentDate, newDate);
    }

    // Update UTC time for selected region
    if (currentUTC) {
      const utcHours = now.getUTCHours();
      const utcMinutes = now.getUTCMinutes();
      const utcSeconds = now.getUTCSeconds();

      // Adjust for region UTC offset
      let regionalHours = utcHours + regionConfig.utcOffset;
      if (regionalHours < 0) regionalHours += 24;
      if (regionalHours >= 24) regionalHours -= 24;

      const regionalMinutes = String(utcMinutes).padStart(2, '0');
      const regionalSeconds = String(utcSeconds).padStart(2, '0');
      regionalHours = String(regionalHours).padStart(2, '0');

      const newTime = `${regionConfig.utcLabel} ${regionalHours}:${regionalMinutes}:${regionalSeconds}`;
      this.setElementText(currentUTC, newTime);
    }
  }

  /**
   * Update all timer cards
   */
  updateAllTimerCards() {
    try {
      this.updateLaunchTimer();
      this.updateWeeklyTimer();
      this.updateMonthlyTimer();
      this.updateMaintenanceTimer();
      this.updateSpecialEventTimers();
    } catch (error) {
      console.error('Error updating timer cards:', error);
    }
  }

  /**
   * Update launch timer - days since launch
   */
  updateLaunchTimer() {
    const launchDays = this.elements.launchDays;
    if (!launchDays || !this.config.launchDate) return;

    const now = new Date();
    const launchDate = new Date(this.config.launchDate);
    const timeDiff = now.getTime() - launchDate.getTime();
    const daysSinceLaunch = Math.floor(timeDiff / MS_PER_DAY);

    this.setElementText(launchDays, Math.abs(daysSinceLaunch).toString());
  }

  /**
   * Update weekly reset timer
   */
  updateWeeklyTimer() {
    const weeklyTime = this.elements.weeklyTime;
    if (!weeklyTime) return;

    const now = new Date();
    const regionConfig = this.config.regions[this.currentRegion];

    // Calculate next Sunday reset (day 0)
    const nextSunday = new Date(now);
    const daysUntilSunday = (7 - now.getUTCDay()) % 7;
    nextSunday.setUTCDate(now.getUTCDate() + (daysUntilSunday || 7));
    nextSunday.setUTCHours(regionConfig.resetHour, regionConfig.resetMinute, 0, 0);

    // If it's Sunday and before reset time, use today
    if (now.getUTCDay() === 0 && now.getUTCHours() < regionConfig.resetHour) {
      nextSunday.setUTCDate(now.getUTCDate());
    }

    const timeDiff = nextSunday.getTime() - now.getTime();
    this.formatTimeDiff(timeDiff, weeklyTime);
  }

  /**
   * Update monthly reset timer
   */
  updateMonthlyTimer() {
    const monthlyTime = this.elements.monthlyTime;
    if (!monthlyTime) return;

    const now = new Date();
    const regionConfig = this.config.regions[this.currentRegion];

    // Calculate last day of current month reset
    const lastDayThisMonth = new Date(now.getUTCFullYear(), now.getUTCMonth() + 1, 0);
    lastDayThisMonth.setUTCHours(regionConfig.resetHour, regionConfig.resetMinute, 0, 0);

    let targetDate;
    if (now < lastDayThisMonth) {
      // Current month's reset hasn't happened yet
      targetDate = lastDayThisMonth;
    } else {
      // Use next month's last day
      targetDate = new Date(now.getUTCFullYear(), now.getUTCMonth() + 2, 0);
      targetDate.setUTCHours(regionConfig.resetHour, regionConfig.resetMinute, 0, 0);
    }

    const timeDiff = targetDate.getTime() - now.getTime();
    this.formatTimeDiff(timeDiff, monthlyTime);
  }

  /**
   * Update maintenance timer
   */
  updateMaintenanceTimer() {
    const maintenanceConfig = this.config.timers[this.currentRegion].maintenance;
    if (!maintenanceConfig) return;

    const maintenanceStartTime = this.elements.maintenanceStartTime;
    const maintenanceStartLabel = this.elements.maintenanceStartLabel;
    const maintenanceEndTime = this.elements.maintenanceEndTime;
    const maintenanceEndLabel = this.elements.maintenanceEndLabel;

    // Check if maintenance date is null or invalid
    if (!maintenanceConfig.date) {
      // No maintenance scheduled
      this.setElementText(maintenanceStartTime, '--:--:--');
      this.setElementText(maintenanceStartLabel, 'Until Start');
      this.setElementText(maintenanceEndTime, '--:--:--');
      this.setElementText(maintenanceEndLabel, 'Servers Back');
      return;
    }

    const now = new Date();
    const maintenanceDate = new Date(maintenanceConfig.date);
    const maintenanceEndDate = new Date(
      maintenanceDate.getTime() + maintenanceConfig.duration * MS_PER_HOUR
    );

    // Update maintenance start time
    const startTimeDiff = maintenanceDate.getTime() - now.getTime();
    if (startTimeDiff > 0) {
      this.formatTimeDiff(startTimeDiff, maintenanceStartTime);
      this.setElementText(maintenanceStartLabel, 'Maintenance Start');
    } else {
      this.setElementText(maintenanceStartTime, 'Started');
      this.setElementText(maintenanceStartLabel, 'Maintenance Status');
    }

    // Update maintenance end time
    const endTimeDiff = maintenanceEndDate.getTime() - now.getTime();
    if (endTimeDiff > 0) {
      this.formatTimeDiff(endTimeDiff, maintenanceEndTime);
      this.setElementText(maintenanceEndLabel, 'Maintenance End');
    } else {
      this.setElementText(maintenanceEndTime, 'Complete');
      this.setElementText(maintenanceEndLabel, 'Maintenance Status');
    }
  }

  /**
   * Format time difference display - optimized with value comparison
   */
  formatTimeDiff(timeDiff, element) {
    if (!element) return;

    // Handle negative time (past events)
    if (timeDiff < 0) {
      this.setElementText(element, 'Expired');
      return;
    }

    const days = Math.floor(timeDiff / MS_PER_DAY);
    const hours = Math.floor((timeDiff % MS_PER_DAY) / MS_PER_HOUR);
    const minutes = Math.floor((timeDiff % MS_PER_HOUR) / MS_PER_MINUTE);
    const seconds = Math.floor((timeDiff % MS_PER_MINUTE) / 1000);

    let display;
    if (days > 0) {
      display = `${days}d ${hours}h`;
    } else if (hours > 0) {
      display = `${hours}h ${minutes}m`;
    } else {
      display = `${minutes}:${String(seconds).padStart(2, '0')}`;
    }

    this.setElementText(element, display);
  }

  /**
   * Update holiday timers (called less frequently for performance)
   */
  updateHolidayTimers() {
    this.updateHalloweenTimer();
    this.updateNewYearTimer();
  }

  /**
   * Update special event timers - Halloween and New Year (alias for compatibility)
   */
  updateSpecialEventTimers() {
    this.updateHolidayTimers();
  }

  /**
   * Update Halloween timer - October 31st
   */
  updateHalloweenTimer() {
    const halloweenTime = this.elements.halloweenTime;
    if (!halloweenTime) return;

    const now = new Date();
    const currentYear = now.getFullYear();

    // Set Halloween date for this year
    let halloween = new Date(currentYear, 9, 31, 23, 59, 59, 999); // October 31st, end of day

    // If Halloween has passed this year, show next year's Halloween
    if (now > halloween) {
      halloween = new Date(currentYear + 1, 9, 31, 23, 59, 59, 999);
    }

    const timeDiff = halloween.getTime() - now.getTime();
    const days = Math.floor(timeDiff / MS_PER_DAY);

    this.setElementText(halloweenTime, days.toString());
  }

  /**
   * Update New Year timer - January 1st
   */
  updateNewYearTimer() {
    const newyearTime = this.elements.newyearTime;
    if (!newyearTime) return;

    const now = new Date();
    const nextYear = now.getFullYear() + 1;

    // New Year's Day of next year at midnight
    const newYear = new Date(nextYear, 0, 1, 0, 0, 0, 0);

    const timeDiff = newYear.getTime() - now.getTime();
    const days = Math.floor(timeDiff / MS_PER_DAY);

    this.setElementText(newyearTime, days.toString());
  }

  /**
   * Helper method to set element text with value comparison
   */
  setElementText(element, text) {
    if (element && element.textContent !== text) {
      element.textContent = text;
    }
  }

  /**
   * Get performance statistics for monitoring
   */
  getPerformanceStats() {
    return {
      ...this.performanceStats,
      currentRegion: this.currentRegion,
      elementsCount: Object.keys(this.elements).length,
    };
  }

  /**
   * Cleanup intervals and event listeners - comprehensive memory management
   */
  cleanup() {
    // Clear animation frame and intervals
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
    if (this.holidayInterval) {
      clearInterval(this.holidayInterval);
      this.holidayInterval = null;
    }

    // Remove event listener properly
    if (this.cleanupHandler) {
      window.removeEventListener('beforeunload', this.cleanupHandler);
      this.cleanupHandler = null;
    }

    // Clear DOM references to prevent memory leaks
    this.elements = {};
    this.clockHours = null;
    this.clockMinutes = null;
    this.clockSeconds = null;
    this.config = null;
    this.performanceStats = null;
  }
}

// Initialize Silver and Blood clock when script loads
const silverAndBloodClockTimer = new SilverAndBloodClockTimer();

// Export for potential use in other modules
window.SilverAndBloodClockTimer = SilverAndBloodClockTimer;
window.silverAndBloodClockTimer = silverAndBloodClockTimer;
