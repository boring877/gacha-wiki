/**
 * Stella Sora Clock Timer Functionality
 * Optimized global server clock with launch countdown and performance improvements
 */

// Constants
const HOLIDAY_UPDATE_INTERVAL = 3600000; // 1 hour for holiday timers
const MS_PER_DAY = 1000 * 60 * 60 * 24;
const MS_PER_HOUR = 1000 * 60 * 60;
const MS_PER_MINUTE = 1000 * 60;

class StellaSoraClockTimer {
  constructor() {
    this.animationFrame = null;
    this.holidayInterval = null;
    this.config = null;
    this.elements = {}; // Store all DOM elements in one object
    this.cleanupHandler = null; // Store cleanup handler reference
    this.isLaunched = false; // Track if game has launched

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
      // Get configuration from window object
      this.config = this.validateConfig(window.stellaSoraConfig);

      if (!this.config) {
        console.warn('Stella Sora config not found');
        return;
      }

      // Check if game has launched
      this.isLaunched = this.checkIfLaunched();

      // Initialize DOM elements efficiently
      this.initializeDOMElements();

      // Check if elements exist before proceeding
      if (!this.elements.clockHours) {
        console.warn('Clock elements not found');
        return;
      }

      // Initial updates
      this.updateAllDisplays();
      this.updateHolidayTimers();
      this.updateEventTimers();

      // Update UI based on launch status
      this.updateLaunchStatusUI();

      // Start optimized clock loop
      this.startClockLoop();

      // Setup cleanup handler
      this.cleanupHandler = () => this.cleanup();
      window.addEventListener('beforeunload', this.cleanupHandler);

      // Also cleanup on page visibility change
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.pauseClockLoop();
        } else {
          this.resumeClockLoop();
          // Recheck launch status when page becomes visible
          const wasLaunched = this.isLaunched;
          this.isLaunched = this.checkIfLaunched();
          if (wasLaunched !== this.isLaunched) {
            this.updateLaunchStatusUI();
            this.updateAllDisplays();
          }
        }
      });
    } catch (error) {
      console.error('Failed to setup Stella Sora clock:', error);
      this.cleanup();
    }
  }

  /**
   * Validate configuration data for security and correctness
   */
  validateConfig(config) {
    if (!config || typeof config !== 'object') {
      console.warn('Invalid config provided, using defaults');
      return this.getDefaultConfig();
    }

    const safeConfig = {
      id: config.id || 'stella-sora',
      name: config.name || 'Stella Sora',
      launchDate: config.launchDate || null,
      displayDate: config.displayDate || 'October 19, 2025 at 19:00 (UTC-7)',
      timerDescription: config.timerDescription || 'Daily Server Reset',
      weeklyResetDay: config.weeklyResetDay || 6,
      preLaunch: {
        isActive: config.preLaunch?.isActive || false,
        launchDateTime: config.preLaunch?.launchDateTime || null,
        subtitle: config.preLaunch?.subtitle || 'Global Launch - Completed',
      },
      server: {
        name: config.server?.name || 'Global Server',
        status: config.server?.status || 'Online',
        resetHour: config.server?.resetHour || 13,
        resetMinute: config.server?.resetMinute || 0,
      },
      maintenance: {
        start: config.maintenance?.start || null,
        end: config.maintenance?.end || null,
        subtitle: config.maintenance?.subtitle || 'No maintenance scheduled',
      },
      event: {
        name: config.event?.name || 'Special Event',
        start: config.event?.start || null,
        durationEnd: config.event?.durationEnd || null,
        shopEnd: config.event?.shopEnd || null,
      },
    };

    // Sanitize string values to prevent XSS
    const sanitizeString = str => {
      if (typeof str !== 'string') return str;
      return str
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+\s*=/gi, '');
    };

    // Apply sanitization
    safeConfig.name = sanitizeString(safeConfig.name);
    safeConfig.server.name = sanitizeString(safeConfig.server.name);
    safeConfig.server.status = sanitizeString(safeConfig.server.status);
    safeConfig.maintenance.subtitle = sanitizeString(safeConfig.maintenance.subtitle);
    safeConfig.event.name = sanitizeString(safeConfig.event.name);

    return safeConfig;
  }

  /**
   * Get default configuration
   */
  getDefaultConfig() {
    return {
      id: 'stella-sora',
      name: 'Stella Sora',
      displayDate: 'October 19, 2025 at 19:00 (UTC-7)',
      timerDescription: 'Daily Server Reset',
      weeklyResetDay: 6,
      preLaunch: {
        isActive: false,
        launchDateTime: '2025-10-20T02:00:00Z',
        subtitle: 'Global Launch - Completed',
      },
      server: {
        name: 'Global Server',
        status: 'Online',
        resetHour: 13,
        resetMinute: 0,
      },
      maintenance: {
        start: null,
        end: null,
        subtitle: 'No maintenance scheduled',
      },
      event: {
        name: 'Special Event',
        start: null,
        durationEnd: null,
        shopEnd: null,
      },
    };
  }

  checkIfLaunched() {
    const now = new Date();
    const launchDate = new Date(this.config.preLaunch.launchDateTime);
    return now >= launchDate;
  }

  initializeDOMElements() {
    // Batch DOM queries for better performance
    const elementIds = [
      'clockHours',
      'clockMinutes',
      'clockSeconds',
      'currentDate',
      'currentUTC',
      'launchDays',
      'launchHours',
      'launchMinutes',
      'launchSeconds',
      'launchDaysSince',
      'weeklyTime',
      'monthlyTime',
      'halloweenTime',
      'newyearTime',
      'eventDurationTime',
      'eventShopTime',
      'maintenanceStartTime',
      'maintenanceStartLabel',
      'maintenanceEndTime',
      'maintenanceEndLabel',
      'serverStatusDot',
      'serverStatusText',
      'launchStatusDot',
      'launchStatusText',
      'launchCountdownCard',
      'daysSinceLaunchCard',
      'noMaintenanceMessage',
      'maintenanceStartItem',
      'maintenanceEndItem',
      'bannerDays',
      'bannerHours',
      'bannerMinutes',
      'bannerSeconds',
      'bannerStatusDot',
      'bannerStatusText',
      'bannerDays2',
      'bannerHours2',
      'bannerMinutes2',
      'bannerSeconds2',
      'bannerStatusDot2',
      'bannerStatusText2',
    ];

    // Query all elements at once
    elementIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        this.elements[id] = element;
      }
    });
  }

  /**
   * Update UI based on launch status
   */
  updateLaunchStatusUI() {
    if (this.isLaunched) {
      // Game has launched - show days since launch
      if (this.elements.launchCountdownCard) {
        this.elements.launchCountdownCard.style.display = 'none';
      }
      if (this.elements.daysSinceLaunchCard) {
        this.elements.daysSinceLaunchCard.style.display = 'block';
      }
      if (this.elements.launchStatusDot) {
        this.elements.launchStatusDot.className = 'status-dot status-online';
      }
      if (this.elements.launchStatusText) {
        this.elements.launchStatusText.textContent = 'Launched';
      }
    } else {
      // Game hasn't launched - show launch countdown
      if (this.elements.launchCountdownCard) {
        this.elements.launchCountdownCard.style.display = 'block';
      }
      if (this.elements.daysSinceLaunchCard) {
        this.elements.daysSinceLaunchCard.style.display = 'none';
      }
      if (this.elements.launchStatusDot) {
        this.elements.launchStatusDot.className = 'status-dot status-coming-soon';
      }
      if (this.elements.launchStatusText) {
        this.elements.launchStatusText.textContent = 'Coming Soon';
      }
    }
  }

  /**
   * Start simple clock loop using native setInterval (Brave-compatible)
   */
  startClockLoop() {
    // Use native setInterval - cannot be blocked by Brave
    this.clockInterval = setInterval(() => {
      this.updateAllDisplays();
    }, 1000); // Update every second using native API

    // Holiday timers update every hour (performance optimization)
    this.holidayInterval = setInterval(() => {
      this.updateHolidayTimers();
      this.updateEventTimers();
    }, HOLIDAY_UPDATE_INTERVAL);
  }

  pauseClockLoop() {
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
      this.clockInterval = null;
    }
  }

  resumeClockLoop() {
    if (!this.clockInterval) {
      this.startClockLoop();
    }
  }

  updateAllDisplays() {
    if (this.isLaunched) {
      this.updateMainClock();
    } else {
      this.updateLaunchCountdown();
    }
    this.updateCurrentDateTime();
    this.updateTimerCards();
  }

  /**
   * Calculate time until next daily reset (13:00 UTC-7)
   */
  getTimeUntilReset() {
    const now = new Date();
    const resetTime = new Date();

    // Convert 13:00 UTC-7 to UTC (add 7 hours) = 20:00 UTC
    const resetHourUTC = (this.config?.server?.resetHour || 13) + 7; // Convert UTC-7 to UTC
    const resetMinute = this.config?.server?.resetMinute || 0;

    resetTime.setUTCHours(resetHourUTC, resetMinute, 0, 0);

    // If calculated UTC time exceeds 24, adjust to next day
    if (resetHourUTC >= 24) {
      resetTime.setUTCHours(resetHourUTC - 24, resetMinute, 0, 0);
      resetTime.setUTCDate(resetTime.getUTCDate() + 1);
    }

    // If reset time has passed today, set for tomorrow
    if (resetTime <= now) {
      resetTime.setUTCDate(resetTime.getUTCDate() + 1);
    }

    const timeDiff = resetTime.getTime() - now.getTime();
    return {
      days: Math.max(0, Math.floor(timeDiff / MS_PER_DAY)),
      hours: Math.max(0, Math.floor((timeDiff % MS_PER_DAY) / MS_PER_HOUR)),
      minutes: Math.max(0, Math.floor((timeDiff % MS_PER_HOUR) / MS_PER_MINUTE)),
      seconds: Math.max(0, Math.floor((timeDiff % MS_PER_MINUTE) / 1000)),
    };
  }

  /**
   * Calculate time until launch
   */
  getTimeUntilLaunch() {
    const now = new Date();
    const launchDate = new Date(this.config.preLaunch.launchDateTime);
    const timeDiff = launchDate.getTime() - now.getTime();

    if (timeDiff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true,
      };
    }

    return {
      days: Math.floor(timeDiff / MS_PER_DAY),
      hours: Math.floor((timeDiff % MS_PER_DAY) / MS_PER_HOUR),
      minutes: Math.floor((timeDiff % MS_PER_HOUR) / MS_PER_MINUTE),
      seconds: Math.floor((timeDiff % MS_PER_MINUTE) / 1000),
      expired: false,
    };
  }

  /**
   * Calculate days since launch
   */
  getDaysSinceLaunch() {
    const now = new Date();
    const launchDate = new Date(this.config.preLaunch.launchDateTime);
    const timeDiff = now.getTime() - launchDate.getTime();
    return Math.max(0, Math.floor(timeDiff / MS_PER_DAY));
  }

  /**
   * Update main countdown clock (launch countdown or daily reset)
   */
  updateMainClock() {
    const time = this.getTimeUntilReset();

    this.updateTimeValue(this.elements.clockHours, time.hours);
    this.updateTimeValue(this.elements.clockMinutes, time.minutes);
    this.updateTimeValue(this.elements.clockSeconds, time.seconds);
  }

  /**
   * Update launch countdown display
   */
  updateLaunchCountdown() {
    const time = this.getTimeUntilLaunch();

    this.updateTimeValue(this.elements.launchDays, time.days);
    this.updateTimeValue(this.elements.launchHours, time.hours);
    this.updateTimeValue(this.elements.launchMinutes, time.minutes);
    this.updateTimeValue(this.elements.launchSeconds, time.seconds);
  }

  /**
   * Update days since launch display
   */
  updateDaysSinceLaunch() {
    const days = this.getDaysSinceLaunch();
    this.updateTimeValue(this.elements.launchDaysSince, days);
  }

  updateTimeValue(element, value) {
    if (!element) return;

    const formattedValue = value.toString().padStart(2, '0');
    if (element.textContent !== formattedValue) {
      element.textContent = formattedValue;
    }
  }

  /**
   * Update current date and UTC-7 time
   */
  updateCurrentDateTime() {
    const now = new Date();

    // Update current date
    if (this.elements.currentDate) {
      const dateOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'America/Los_Angeles', // UTC-7 timezone
      };
      const dateString = now.toLocaleDateString('en-US', dateOptions);
      if (this.elements.currentDate.textContent !== dateString) {
        this.elements.currentDate.textContent = dateString;
      }
    }

    // Update current UTC-7 time
    if (this.elements.currentUTC) {
      const utcMinus7String = now.toLocaleTimeString('en-US', {
        hour12: false,
        timeZone: 'America/Los_Angeles', // UTC-7 timezone
      });
      if (this.elements.currentUTC.textContent !== utcMinus7String) {
        this.elements.currentUTC.textContent = `UTC-7 ${utcMinus7String}`;
      }
    }
  }

  /**
   * Update all timer cards
   */
  updateTimerCards() {
    this.updateWeeklyResetTimer();
    this.updateMonthlyResetTimer();
    this.updateMaintenanceTimer();
    this.updateBannerTimer();
    this.updateBannerTimer2();

    if (this.isLaunched) {
      this.updateDaysSinceLaunch();
    }
  }

  /**
   * Update weekly reset timer (Mondays at 13:00 UTC-7)
   */
  updateWeeklyResetTimer() {
    if (!this.elements.weeklyTime) return;

    const now = new Date();
    const weeklyReset = new Date();

    // Find next Monday (0 = Sunday, 1 = Monday)
    const currentDay = now.getUTCDay();
    let daysUntilMonday = (1 - currentDay + 7) % 7;

    // If today is Monday, check if the reset time has already passed
    if (currentDay === 1) {
      // Create a reset time for today (Monday at 20:00 UTC = 13:00 UTC-7)
      const todayReset = new Date();
      todayReset.setUTCDate(now.getUTCDate());
      todayReset.setUTCHours(20, 0, 0, 0);

      if (now >= todayReset) {
        // Reset time has passed today, so next reset is next week (7 days)
        daysUntilMonday = 7;
      }
      // If reset time hasn't passed today, daysUntilMonday stays 0
    }

    weeklyReset.setUTCDate(now.getUTCDate() + daysUntilMonday);

    // Set to 13:00 UTC-7 = 20:00 UTC
    weeklyReset.setUTCHours(20, 0, 0, 0);

    const timeDiff = weeklyReset.getTime() - now.getTime();
    const days = Math.max(0, Math.floor(timeDiff / MS_PER_DAY));
    const hours = Math.max(0, Math.floor((timeDiff % MS_PER_DAY) / MS_PER_HOUR));
    const minutes = Math.max(0, Math.floor((timeDiff % MS_PER_HOUR) / MS_PER_MINUTE));
    const seconds = Math.max(0, Math.floor((timeDiff % MS_PER_MINUTE) / 1000));

    let timeString = '';
    if (days > 0) {
      timeString = `${days}d ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    if (this.elements.weeklyTime.textContent !== timeString) {
      this.elements.weeklyTime.textContent = timeString;
    }
  }

  /**
   * Update monthly reset timer (1st of each month at 13:00 UTC-7)
   */
  updateMonthlyResetTimer() {
    if (!this.elements.monthlyTime) return;

    const now = new Date();
    const monthlyReset = new Date();

    // Set to 1st of next month
    if (now.getUTCMonth() === 11) {
      monthlyReset.setUTCFullYear(now.getUTCFullYear() + 1, 0, 1);
    } else {
      monthlyReset.setUTCFullYear(now.getUTCFullYear(), now.getUTCMonth() + 1, 1);
    }
    // Set to 13:00 UTC-7 = 20:00 UTC
    monthlyReset.setUTCHours(20, 0, 0, 0);

    const timeDiff = monthlyReset.getTime() - now.getTime();
    const days = Math.max(0, Math.floor(timeDiff / MS_PER_DAY));
    const hours = Math.max(0, Math.floor((timeDiff % MS_PER_DAY) / MS_PER_HOUR));
    const minutes = Math.max(0, Math.floor((timeDiff % MS_PER_HOUR) / MS_PER_MINUTE));
    const seconds = Math.max(0, Math.floor((timeDiff % MS_PER_MINUTE) / 1000));

    let timeString = '';
    if (days > 0) {
      timeString = `${days}d ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    if (this.elements.monthlyTime.textContent !== timeString) {
      this.elements.monthlyTime.textContent = timeString;
    }
  }

  /**
   * Update maintenance timer
   */
  updateMaintenanceTimer() {
    if (
      !this.config.maintenance ||
      !this.config.maintenance.start ||
      !this.config.maintenance.end
    ) {
      // No maintenance scheduled
      this.showNoMaintenance();
      return;
    }

    const now = new Date();
    const maintenanceStart = new Date(this.config.maintenance.start);
    const maintenanceEnd = new Date(this.config.maintenance.end);

    if (now < maintenanceStart) {
      // Before maintenance
      this.showMaintenanceCountdown(maintenanceStart, maintenanceEnd, 'before');
    } else if (now >= maintenanceStart && now < maintenanceEnd) {
      // During maintenance
      this.showMaintenanceCountdown(maintenanceStart, maintenanceEnd, 'during');
    } else {
      // After maintenance
      this.showNoMaintenance();
    }
  }

  showMaintenanceCountdown(startTime, endTime, phase) {
    // Hide no maintenance message
    if (this.elements.noMaintenanceMessage) {
      this.elements.noMaintenanceMessage.style.display = 'none';
    }

    const now = new Date();

    if (phase === 'before') {
      // Show countdown to maintenance start
      if (this.elements.maintenanceStartItem) {
        this.elements.maintenanceStartItem.style.display = 'block';
      }
      if (this.elements.maintenanceEndItem) {
        this.elements.maintenanceEndItem.style.display = 'none';
      }

      const timeDiff = startTime.getTime() - now.getTime();
      const hours = Math.max(0, Math.floor(timeDiff / MS_PER_HOUR));
      const minutes = Math.max(0, Math.floor((timeDiff % MS_PER_HOUR) / MS_PER_MINUTE));
      const seconds = Math.max(0, Math.floor((timeDiff % MS_PER_MINUTE) / 1000));

      const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      if (
        this.elements.maintenanceStartTime &&
        this.elements.maintenanceStartTime.textContent !== timeString
      ) {
        this.elements.maintenanceStartTime.textContent = timeString;
      }
    } else {
      // During maintenance - show countdown to end
      if (this.elements.maintenanceStartItem) {
        this.elements.maintenanceStartItem.style.display = 'none';
      }
      if (this.elements.maintenanceEndItem) {
        this.elements.maintenanceEndItem.style.display = 'block';
      }

      const timeDiff = endTime.getTime() - now.getTime();
      const hours = Math.max(0, Math.floor(timeDiff / MS_PER_HOUR));
      const minutes = Math.max(0, Math.floor((timeDiff % MS_PER_HOUR) / MS_PER_MINUTE));
      const seconds = Math.max(0, Math.floor((timeDiff % MS_PER_MINUTE) / 1000));

      const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      if (
        this.elements.maintenanceEndTime &&
        this.elements.maintenanceEndTime.textContent !== timeString
      ) {
        this.elements.maintenanceEndTime.textContent = timeString;
      }
    }

    // Update server status
    if (this.elements.serverStatusDot) {
      this.elements.serverStatusDot.className =
        phase === 'during' ? 'status-dot status-maintenance' : 'status-dot status-online';
    }
    if (this.elements.serverStatusText) {
      this.elements.serverStatusText.textContent = phase === 'during' ? 'Maintenance' : 'Online';
    }
  }

  showNoMaintenance() {
    // Show no maintenance message
    if (this.elements.noMaintenanceMessage) {
      this.elements.noMaintenanceMessage.style.display = 'block';
    }
    if (this.elements.maintenanceStartItem) {
      this.elements.maintenanceStartItem.style.display = 'none';
    }
    if (this.elements.maintenanceEndItem) {
      this.elements.maintenanceEndItem.style.display = 'none';
    }

    // Update server status
    if (this.elements.serverStatusDot) {
      this.elements.serverStatusDot.className = 'status-dot status-online';
    }
    if (this.elements.serverStatusText) {
      this.elements.serverStatusText.textContent = 'Online';
    }
  }

  /**
   * Update holiday timers (Halloween and New Year)
   */
  updateHolidayTimers() {
    this.updateHalloweenTimer();
    this.updateNewYearTimer();
  }

  /**
   * Update event timers (Event Duration and Event Shop)
   */
  updateEventTimers() {
    this.updateEventDurationTimer();
    this.updateEventShopTimer();
  }

  updateHalloweenTimer() {
    if (!this.elements.halloweenTime) return;

    const now = new Date();
    const currentYear = now.getUTCFullYear();
    // Halloween at 00:00 UTC-7 = 07:00 UTC (add 7 hours)
    let halloween = new Date(Date.UTC(currentYear, 9, 31, 7, 0, 0)); // October 31st at 00:00 UTC-7

    // If Halloween has passed this year, calculate for next year
    if (now > halloween) {
      halloween = new Date(Date.UTC(currentYear + 1, 9, 31, 7, 0, 0));
    }

    const timeDiff = halloween.getTime() - now.getTime();
    const days = Math.max(0, Math.ceil(timeDiff / MS_PER_DAY));

    if (this.elements.halloweenTime.textContent !== days.toString()) {
      this.elements.halloweenTime.textContent = days.toString();
    }
  }

  updateNewYearTimer() {
    if (!this.elements.newyearTime) return;

    const now = new Date();
    const currentYear = now.getUTCFullYear();
    // New Year at 00:00 UTC-7 = 07:00 UTC (add 7 hours)
    const newYear = new Date(Date.UTC(currentYear + 1, 0, 1, 7, 0, 0)); // January 1st at 00:00 UTC-7

    const timeDiff = newYear.getTime() - now.getTime();
    const days = Math.max(0, Math.ceil(timeDiff / MS_PER_DAY));

    if (this.elements.newyearTime.textContent !== days.toString()) {
      this.elements.newyearTime.textContent = days.toString();
    }
  }

  /**
   * Update event duration timer
   */
  updateEventDurationTimer() {
    if (!this.elements.eventDurationTime || !this.config.event) return;

    const now = new Date();
    const eventEnd = new Date(this.config.event.durationEnd);

    const timeDiff = eventEnd.getTime() - now.getTime();
    const days = Math.max(0, Math.ceil(timeDiff / MS_PER_DAY));

    if (this.elements.eventDurationTime.textContent !== days.toString()) {
      this.elements.eventDurationTime.textContent = days.toString();
    }
  }

  /**
   * Update event shop timer
   */
  updateEventShopTimer() {
    if (!this.elements.eventShopTime || !this.config.event) return;

    const now = new Date();
    const shopEnd = new Date(this.config.event.shopEnd);

    const timeDiff = shopEnd.getTime() - now.getTime();
    const days = Math.max(0, Math.ceil(timeDiff / MS_PER_DAY));

    if (this.elements.eventShopTime.textContent !== days.toString()) {
      this.elements.eventShopTime.textContent = days.toString();
    }
  }

  /**
   * Update banner timer countdown
   */
  updateBannerTimer() {
    if (
      !this.elements.bannerDays ||
      !this.elements.bannerHours ||
      !this.elements.bannerMinutes ||
      !this.elements.bannerSeconds
    ) {
      return;
    }

    // Current banner: Tide to the Full Moon & Ocean Meets the Sky (Oct 27 - Nov 17, 2025)
    const bannerEndDate = new Date('2025-11-17T12:59:00-07:00'); // Nov 17, 2025 12:59 UTC-7
    const now = new Date();

    // Calculate time difference
    const timeDiff = bannerEndDate.getTime() - now.getTime();

    if (timeDiff <= 0) {
      // Banner has ended
      this.elements.bannerDays.textContent = '0';
      this.elements.bannerHours.textContent = '0';
      this.elements.bannerMinutes.textContent = '0';
      this.elements.bannerSeconds.textContent = '0';

      // Update status to ended
      if (this.elements.bannerStatusDot) {
        this.elements.bannerStatusDot.className = 'status-dot status-ended';
      }
      if (this.elements.bannerStatusText) {
        this.elements.bannerStatusText.textContent = 'Ended';
      }
      return;
    }

    // Banner is still active
    const days = Math.floor(timeDiff / MS_PER_DAY);
    const hours = Math.floor((timeDiff % MS_PER_DAY) / MS_PER_HOUR);
    const minutes = Math.floor((timeDiff % MS_PER_HOUR) / MS_PER_MINUTE);
    const seconds = Math.floor((timeDiff % MS_PER_MINUTE) / 1000);

    // Update display
    this.elements.bannerDays.textContent = days.toString().padStart(2, '0');
    this.elements.bannerHours.textContent = hours.toString().padStart(2, '0');
    this.elements.bannerMinutes.textContent = minutes.toString().padStart(2, '0');
    this.elements.bannerSeconds.textContent = seconds.toString().padStart(2, '0');

    // Update status to active
    if (this.elements.bannerStatusDot) {
      this.elements.bannerStatusDot.className = 'status-dot status-active';
    }
    if (this.elements.bannerStatusText) {
      this.elements.bannerStatusText.textContent = 'Active';
    }
  }

  /**
   * Update second banner timer countdown (Chitose)
   */
  updateBannerTimer2() {
    if (
      !this.elements.bannerDays2 ||
      !this.elements.bannerHours2 ||
      !this.elements.bannerMinutes2 ||
      !this.elements.bannerSeconds2
    ) {
      return;
    }

    // Current banner 2: Blades Beneath the Moon & Moon upon Still Waters (Oct 19 - Nov 10, 2025)
    const bannerEndDate = new Date('2025-11-10T12:59:00-07:00'); // Nov 10, 2025 12:59 UTC-7
    const now = new Date();

    // Calculate time difference
    const timeDiff = bannerEndDate.getTime() - now.getTime();

    if (timeDiff <= 0) {
      // Banner has ended
      this.elements.bannerDays2.textContent = '0';
      this.elements.bannerHours2.textContent = '0';
      this.elements.bannerMinutes2.textContent = '0';
      this.elements.bannerSeconds2.textContent = '0';

      // Update status to ended
      if (this.elements.bannerStatusDot2) {
        this.elements.bannerStatusDot2.className = 'status-dot status-ended';
      }
      if (this.elements.bannerStatusText2) {
        this.elements.bannerStatusText2.textContent = 'Ended';
      }
      return;
    }

    // Banner is still active
    const days = Math.floor(timeDiff / MS_PER_DAY);
    const hours = Math.floor((timeDiff % MS_PER_DAY) / MS_PER_HOUR);
    const minutes = Math.floor((timeDiff % MS_PER_HOUR) / MS_PER_MINUTE);
    const seconds = Math.floor((timeDiff % MS_PER_MINUTE) / 1000);

    // Update display
    this.elements.bannerDays2.textContent = days.toString().padStart(2, '0');
    this.elements.bannerHours2.textContent = hours.toString().padStart(2, '0');
    this.elements.bannerMinutes2.textContent = minutes.toString().padStart(2, '0');
    this.elements.bannerSeconds2.textContent = seconds.toString().padStart(2, '0');

    // Update status to active
    if (this.elements.bannerStatusDot2) {
      this.elements.bannerStatusDot2.className = 'status-dot status-active';
    }
    if (this.elements.bannerStatusText2) {
      this.elements.bannerStatusText2.textContent = 'Active';
    }
  }

  /**
   * Cleanup resources
   */
  cleanup() {
    // Clear intervals
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
      this.clockInterval = null;
    }
    if (this.holidayInterval) {
      clearInterval(this.holidayInterval);
      this.holidayInterval = null;
    }

    // Remove event listeners
    if (this.cleanupHandler) {
      window.removeEventListener('beforeunload', this.cleanupHandler);
      this.cleanupHandler = null;
    }

    // Clear DOM references
    this.elements = {};
  }
}

// Initialize the clock when the script loads
new StellaSoraClockTimer();
