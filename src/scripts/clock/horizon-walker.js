/**
 * Horizon Walker Clock Timer Functionality
 * Optimized single-server clock with performance improvements
 */

// Constants
const UPDATE_INTERVAL = 1000; // 1 second for main timers
const HOLIDAY_UPDATE_INTERVAL = 3600000; // 1 hour for holiday timers
const HW_TIMEZONE_OFFSET = 9 * 60 * 60 * 1000; // KST in milliseconds
const MS_PER_DAY = 1000 * 60 * 60 * 24;
const MS_PER_HOUR = 1000 * 60 * 60;
const MS_PER_MINUTE = 1000 * 60;

class HorizonWalkerClockTimer {
  constructor() {
    this.clockInterval = null;
    this.holidayInterval = null;
    this.config = null;
    this.elements = {}; // Store all DOM elements in one object
    this.cleanupHandler = null; // Store cleanup handler reference

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
      this.config = window.horizonWalkerConfig;
      if (!this.config) {
        console.warn('Horizon Walker config not found');
        return;
      }

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

      // Start intervals
      this.startIntervals();

      // Setup cleanup handler
      this.cleanupHandler = () => this.cleanup();
      window.addEventListener('beforeunload', this.cleanupHandler);

      // Also cleanup on page visibility change
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.pauseIntervals();
        } else {
          this.resumeIntervals();
        }
      });
    } catch (error) {
      console.error('Failed to setup Horizon Walker clock:', error);
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
      'launchDays',
      'steamLaunchDays',
      'weeklyTime',
      'monthlyTime',
      'maintenanceStartTime',
      'maintenanceStartLabel',
      'maintenanceEndTime',
      'maintenanceEndLabel',
      'serverStatusDot',
      'serverStatusText',
      'halloweenTime',
      'newyearTime',
    ];

    // Query all elements at once
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

  startIntervals() {
    // Main clock updates every second
    this.clockInterval = setInterval(() => {
      this.updateAllDisplays();
    }, UPDATE_INTERVAL);

    // Holiday timers update every hour (performance optimization)
    this.holidayInterval = setInterval(() => {
      this.updateHolidayTimers();
    }, HOLIDAY_UPDATE_INTERVAL);
  }

  pauseIntervals() {
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
      this.clockInterval = null;
    }
  }

  resumeIntervals() {
    if (!this.clockInterval) {
      this.clockInterval = setInterval(() => {
        this.updateAllDisplays();
      }, UPDATE_INTERVAL);
    }
  }

  updateAllDisplays() {
    this.updateMainClock();
    this.updateCurrentDateTime();
    this.updateTimerCards();
  }

  /**
   * Calculate time until next daily reset (01:00 UTC = 10:00 KST)
   */
  getTimeUntilReset() {
    const now = new Date();
    const resetTime = new Date();
    const resetHour = this.config?.server?.resetHour || 1; // Default 01:00 UTC
    const resetMinute = this.config?.server?.resetMinute || 0;
    resetTime.setUTCHours(resetHour, resetMinute, 0, 0);

    // If reset time has passed today, set for tomorrow
    if (resetTime <= now) {
      resetTime.setUTCDate(resetTime.getUTCDate() + 1);
    }

    const timeDiff = resetTime.getTime() - now.getTime();
    return {
      hours: Math.max(0, Math.floor(timeDiff / MS_PER_HOUR)),
      minutes: Math.max(0, Math.floor((timeDiff % MS_PER_HOUR) / MS_PER_MINUTE)),
      seconds: Math.max(0, Math.floor((timeDiff % MS_PER_MINUTE) / 1000)),
    };
  }

  /**
   * Update main countdown clock
   */
  updateMainClock() {
    const time = this.getTimeUntilReset();

    this.updateTimeValue(this.clockHours, time.hours);
    this.updateTimeValue(this.clockMinutes, time.minutes);
    this.updateTimeValue(this.clockSeconds, time.seconds);
  }

  updateTimeValue(element, value) {
    if (!element) return;
    const newValue = String(value).padStart(2, '0');
    if (element.textContent !== newValue) {
      element.textContent = newValue;
    }
  }

  /**
   * Update current date and KST time display
   */
  updateCurrentDateTime() {
    const now = new Date();
    const currentDate = this.elements.currentDate;
    const currentUTC = this.elements.currentUTC;

    // Update current date (only if element exists and every 60 seconds)
    if (currentDate && now.getSeconds() === 0) {
      const dateOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC',
      };
      const newDate = now.toLocaleDateString('en-US', dateOptions);
      if (currentDate.textContent !== newDate) {
        currentDate.textContent = newDate;
      }
    }

    // Update KST time
    if (currentUTC) {
      const kstTime = new Date(now.getTime() + HW_TIMEZONE_OFFSET);
      const hours = String(kstTime.getUTCHours()).padStart(2, '0');
      const minutes = String(kstTime.getUTCMinutes()).padStart(2, '0');
      const seconds = String(kstTime.getUTCSeconds()).padStart(2, '0');
      const newTime = `KST ${hours}:${minutes}:${seconds}`;
      if (currentUTC.textContent !== newTime) {
        currentUTC.textContent = newTime;
      }
    }
  }

  /**
   * Update timer cards
   */
  updateTimerCards() {
    this.updateLaunchTimer();
    this.updateSteamLaunchTimer();
    this.updateWeeklyTimer();
    this.updateMonthlyTimer();
    this.updateMaintenanceTimer();
  }

  updateLaunchTimer() {
    const launchDays = this.elements.launchDays;
    if (!launchDays || !this.config.launchDate) return;

    const now = new Date();
    const launchDate = new Date(this.config.launchDate);
    const timeDiff = now.getTime() - launchDate.getTime();
    const daysSinceLaunch = Math.floor(timeDiff / MS_PER_DAY);

    launchDays.textContent = Math.abs(daysSinceLaunch);
  }

  updateSteamLaunchTimer() {
    const steamLaunchDays = this.elements.steamLaunchDays;
    if (!steamLaunchDays || !this.config.steamLaunchDate) return;

    const now = new Date();
    const steamLaunchDate = new Date(this.config.steamLaunchDate);
    const timeDiff = now.getTime() - steamLaunchDate.getTime();
    const daysSinceSteamLaunch = Math.floor(timeDiff / MS_PER_DAY);

    steamLaunchDays.textContent = Math.abs(daysSinceSteamLaunch);
  }

  updateWeeklyTimer() {
    const weeklyTime = this.elements.weeklyTime;
    if (!weeklyTime) return;

    try {
      const now = new Date();
      const nextThursday = new Date();

      // Calculate days until next Thursday (4 = Thursday)
      const weeklyResetDay = this.config?.weeklyResetDay || 4; // Thursday
      const daysUntilThursday = (weeklyResetDay - now.getUTCDay() + 7) % 7 || 7;

      nextThursday.setUTCDate(now.getUTCDate() + daysUntilThursday);
      nextThursday.setUTCHours(this.config.server.resetHour, this.config.server.resetMinute, 0, 0);

      // If it's Thursday and before reset time, use today
      if (now.getUTCDay() === weeklyResetDay && now.getUTCHours() < this.config.server.resetHour) {
        nextThursday.setUTCDate(now.getUTCDate());
      }

      const timeDiff = nextThursday.getTime() - now.getTime();
      this.formatTimeDiff(timeDiff, weeklyTime);
    } catch (error) {
      console.error('Error updating weekly timer:', error);
      this.setElementText(weeklyTime, '--:--:--');
    }
  }

  updateMonthlyTimer() {
    const monthlyTime = this.elements.monthlyTime;
    if (!monthlyTime) return;

    try {
      const now = new Date();
      const nextMonth = new Date();

      // Set to first day of next month
      nextMonth.setUTCMonth(now.getUTCMonth() + 1, 1);
      // Monthly reset is at 00:00 KST, not at the daily reset hour
      nextMonth.setUTCHours(0, 0, 0, 0);

      // Check if this month's reset hasn't happened yet
      const thisMonthReset = new Date();
      thisMonthReset.setUTCDate(1);
      // Monthly reset is at 00:00 KST
      thisMonthReset.setUTCHours(0, 0, 0, 0);

      const targetDate = now < thisMonthReset ? thisMonthReset : nextMonth;
      const timeDiff = targetDate.getTime() - now.getTime();

      this.formatTimeDiff(timeDiff, monthlyTime);
    } catch (error) {
      console.error('Error updating monthly timer:', error);
      this.setElementText(monthlyTime, '--:--:--');
    }
  }

  updateMaintenanceTimer() {
    const maintenance = this.config?.maintenance;
    if (!maintenance) {
      console.warn('No maintenance config found');
      return;
    }

    // No maintenance scheduled
    if (!maintenance.date) {
      this.updateServerStatus(false);
      this.updateMaintenanceDisplay('--:--:--', 'Until Start', '--:--:--', 'Online');
      return;
    }

    const now = new Date();
    const maintenanceStart = new Date(maintenance.date);
    const maintenanceEnd = new Date(
      maintenanceStart.getTime() + (maintenance.duration || 0) * MS_PER_HOUR
    );

    const isInMaintenance = now >= maintenanceStart && now <= maintenanceEnd;
    this.updateServerStatus(isInMaintenance);

    // Update Start Timer
    const startTimeDiff = maintenanceStart.getTime() - now.getTime();
    const endTimeDiff = maintenanceEnd.getTime() - now.getTime();

    const maintenanceStartTime = this.elements.maintenanceStartTime;
    const maintenanceStartLabel = this.elements.maintenanceStartLabel;
    const maintenanceEndTime = this.elements.maintenanceEndTime;
    const maintenanceEndLabel = this.elements.maintenanceEndLabel;

    if (startTimeDiff > 0) {
      // Before maintenance - countdown to start
      this.setElementText(maintenanceStartLabel, 'Until Start');
      this.formatTimeDiff(startTimeDiff, maintenanceStartTime);
    } else {
      // Maintenance has started or ended
      this.setElementText(maintenanceStartLabel, 'Started');
      this.setElementText(maintenanceStartTime, '--:--:--');
    }

    // Update End Timer (only counts during maintenance)
    if (now < maintenanceStart) {
      // Before maintenance starts - no countdown yet
      this.setElementText(maintenanceEndLabel, 'Servers Back');
      this.setElementText(maintenanceEndTime, '--:--:--');
    } else if (now >= maintenanceStart && now <= maintenanceEnd) {
      // During maintenance - countdown to end
      this.setElementText(maintenanceEndLabel, 'Servers Back');
      this.formatTimeDiff(endTimeDiff, maintenanceEndTime);
    } else {
      // Maintenance has ended
      this.setElementText(maintenanceEndLabel, 'Online');
      this.setElementText(maintenanceEndTime, '--:--:--');
    }
  }

  updateServerStatus(inMaintenance) {
    const serverStatusDot = this.elements.serverStatusDot;
    const serverStatusText = this.elements.serverStatusText;

    if (serverStatusDot) {
      serverStatusDot.classList.toggle('maintenance', inMaintenance);
    }
    if (serverStatusText) {
      serverStatusText.textContent = inMaintenance ? 'Maintenance' : 'Online';
      serverStatusText.classList.toggle('maintenance', inMaintenance);
    }
  }

  updateMaintenanceDisplay(startTime, startLabel, endTime, endLabel) {
    this.setElementText(this.elements.maintenanceStartTime, startTime);
    this.setElementText(this.elements.maintenanceStartLabel, startLabel);
    this.setElementText(this.elements.maintenanceEndTime, endTime);
    this.setElementText(this.elements.maintenanceEndLabel, endLabel);
  }

  /**
   * Update holiday timers (called less frequently for performance)
   */
  updateHolidayTimers() {
    this.updateHalloweenTimer();
    this.updateNewYearTimer();
  }

  updateHalloweenTimer() {
    const halloweenTime = this.elements.halloweenTime;
    if (!halloweenTime) return;

    const now = new Date();
    const currentYear = now.getFullYear();
    let halloween = new Date(currentYear, 9, 31, 23, 59, 59, 999);

    if (now > halloween) {
      halloween = new Date(currentYear + 1, 9, 31, 23, 59, 59, 999);
    }

    const days = Math.floor((halloween.getTime() - now.getTime()) / MS_PER_DAY);
    halloweenTime.textContent = days.toString();
  }

  updateNewYearTimer() {
    const newyearTime = this.elements.newyearTime;
    if (!newyearTime) return;

    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYear = new Date(nextYear, 0, 1, 0, 0, 0, 0);

    const days = Math.floor((newYear.getTime() - now.getTime()) / MS_PER_DAY);
    newyearTime.textContent = days.toString();
  }

  /**
   * Helper methods
   */
  formatTimeDiff(timeDiff, element) {
    if (!element) return;

    // Handle negative time (past events)
    if (timeDiff < 0) {
      element.textContent = 'Expired';
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

    if (element.textContent !== display) {
      element.textContent = display;
    }
  }

  setElementText(element, text) {
    if (element && element.textContent !== text) {
      element.textContent = text;
    }
  }

  /**
   * Cleanup intervals and event listeners
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
  }
}

// Initialize clock when script loads
const horizonWalkerClockTimer = new HorizonWalkerClockTimer();

// Export for potential external use
window.HorizonWalkerClockTimer = HorizonWalkerClockTimer;
window.horizonWalkerClockTimer = horizonWalkerClockTimer;
