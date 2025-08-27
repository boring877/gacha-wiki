/**
 * Horizon Walker Clock Timer Functionality
 * Optimized single-server clock with performance improvements
 */

// Constants
const UPDATE_INTERVAL = 1000; // 1 second for main timers
const HOLIDAY_UPDATE_INTERVAL = 3600000; // 1 hour for holiday timers
const HW_TIMEZONE_OFFSET = 9 * 60 * 60 * 1000; // KST in milliseconds

class HorizonWalkerClockTimer {
  constructor() {
    this.clockInterval = null;
    this.holidayInterval = null;
    this.config = null;

    // Only essential DOM elements for single-server setup
    this.clockHours = null;
    this.clockMinutes = null;
    this.clockSeconds = null;
    this.currentDate = null;
    this.currentUTC = null;
    this.launchDays = null;
    this.steamLaunchDays = null;
    this.weeklyTime = null;
    this.monthlyTime = null;
    this.maintenanceStartTime = null;
    this.maintenanceStartLabel = null;
    this.maintenanceEndTime = null;
    this.maintenanceEndLabel = null;
    this.serverStatusDot = null;
    this.serverStatusText = null;
    this.halloweenTime = null;
    this.newyearTime = null;

    this.init();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupClock());
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

      // Initialize only used DOM elements
      this.initializeDOMElements();

      // Initial updates
      this.updateAllDisplays();
      this.updateHolidayTimers();

      // Start intervals
      this.startIntervals();

      // Cleanup on page unload
      window.addEventListener('beforeunload', () => this.cleanup());
    } catch (error) {
      console.error('Failed to setup Horizon Walker clock:', error);
    }
  }

  initializeDOMElements() {
    // Main clock display
    this.clockHours = document.getElementById('clockHours');
    this.clockMinutes = document.getElementById('clockMinutes');
    this.clockSeconds = document.getElementById('clockSeconds');
    this.currentDate = document.getElementById('currentDate');
    this.currentUTC = document.getElementById('currentUTC');

    // Timer cards - only essential ones
    this.launchDays = document.getElementById('launchDays');
    this.steamLaunchDays = document.getElementById('steamLaunchDays');
    this.weeklyTime = document.getElementById('weeklyTime');
    this.monthlyTime = document.getElementById('monthlyTime');

    // Maintenance elements
    this.maintenanceStartTime = document.getElementById('maintenanceStartTime');
    this.maintenanceStartLabel = document.getElementById('maintenanceStartLabel');
    this.maintenanceEndTime = document.getElementById('maintenanceEndTime');
    this.maintenanceEndLabel = document.getElementById('maintenanceEndLabel');

    // Server status
    this.serverStatusDot = document.getElementById('serverStatusDot');
    this.serverStatusText = document.getElementById('serverStatusText');

    // Holiday timers (updated less frequently)
    this.halloweenTime = document.getElementById('halloweenTime');
    this.newyearTime = document.getElementById('newyearTime');
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

  updateAllDisplays() {
    this.updateMainClock();
    this.updateCurrentDateTime();
    this.updateTimerCards();
  }

  /**
   * Calculate time until next reset (01:00 UTC = 10:00 KST)
   */
  getTimeUntilReset() {
    const now = new Date();
    const resetTime = new Date();
    resetTime.setUTCHours(this.config.server.resetHour, this.config.server.resetMinute, 0, 0);

    // If reset time has passed today, set for tomorrow
    if (resetTime <= now) {
      resetTime.setUTCDate(resetTime.getUTCDate() + 1);
    }

    const timeDiff = resetTime.getTime() - now.getTime();
    return {
      hours: Math.max(0, Math.floor(timeDiff / (1000 * 60 * 60))),
      minutes: Math.max(0, Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))),
      seconds: Math.max(0, Math.floor((timeDiff % (1000 * 60)) / 1000)),
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

    // Update current date (less frequent updates needed)
    if (this.currentDate) {
      const dateOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC',
      };
      this.currentDate.textContent = now.toLocaleDateString('en-US', dateOptions);
    }

    // Update KST time
    if (this.currentUTC) {
      const utc9Time = new Date(now.getTime() + HW_TIMEZONE_OFFSET);
      const hours = String(utc9Time.getUTCHours()).padStart(2, '0');
      const minutes = String(utc9Time.getUTCMinutes()).padStart(2, '0');
      const seconds = String(utc9Time.getUTCSeconds()).padStart(2, '0');
      this.currentUTC.textContent = `KST ${hours}:${minutes}:${seconds}`;
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
    if (!this.launchDays || !this.config.launchDate) return;

    const now = new Date();
    const launchDate = new Date(this.config.launchDate);
    const timeDiff = now.getTime() - launchDate.getTime();
    const daysSinceLaunch = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    this.launchDays.textContent = Math.abs(daysSinceLaunch);
  }

  updateSteamLaunchTimer() {
    if (!this.steamLaunchDays || !this.config.steamLaunchDate) return;

    const now = new Date();
    const steamLaunchDate = new Date(this.config.steamLaunchDate);
    const timeDiff = now.getTime() - steamLaunchDate.getTime();
    const daysSinceSteamLaunch = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    this.steamLaunchDays.textContent = Math.abs(daysSinceSteamLaunch);
  }

  updateWeeklyTimer() {
    if (!this.weeklyTime) return;

    const now = new Date();
    const nextThursday = new Date();

    // Calculate days until next Thursday (4 = Thursday)
    const weeklyResetDay = this.config.weeklyResetDay || 4; // Thursday
    const daysUntilThursday = (weeklyResetDay - now.getUTCDay() + 7) % 7 || 7;

    nextThursday.setUTCDate(now.getUTCDate() + daysUntilThursday);
    nextThursday.setUTCHours(this.config.server.resetHour, this.config.server.resetMinute, 0, 0);

    // If it's Thursday and before reset time, use today
    if (now.getUTCDay() === weeklyResetDay && now.getUTCHours() < this.config.server.resetHour) {
      nextThursday.setUTCDate(now.getUTCDate());
    }

    const timeDiff = nextThursday.getTime() - now.getTime();
    this.formatTimeDiff(timeDiff, this.weeklyTime);
  }

  updateMonthlyTimer() {
    if (!this.monthlyTime) return;

    const now = new Date();
    const nextMonth = new Date();

    // Set to first day of next month
    nextMonth.setUTCMonth(now.getUTCMonth() + 1, 1);
    nextMonth.setUTCHours(this.config.server.resetHour, this.config.server.resetMinute, 0, 0);

    // Check if this month's reset hasn't happened yet
    const thisMonthReset = new Date();
    thisMonthReset.setUTCDate(1);
    thisMonthReset.setUTCHours(this.config.server.resetHour, this.config.server.resetMinute, 0, 0);

    const targetDate = now < thisMonthReset ? thisMonthReset : nextMonth;
    const timeDiff = targetDate.getTime() - now.getTime();

    this.formatTimeDiff(timeDiff, this.monthlyTime);
  }

  updateMaintenanceTimer() {
    const maintenance = this.config.maintenance;
    if (!maintenance) return;

    // No maintenance scheduled
    if (!maintenance.date) {
      this.updateServerStatus(false);
      this.updateMaintenanceDisplay(
        '--:--:--',
        'Next Maintenance',
        'Waiting for announcement',
        'Server Status'
      );
      return;
    }

    const now = new Date();
    const maintenanceStart = new Date(maintenance.date);
    const maintenanceEnd = new Date(
      maintenanceStart.getTime() + maintenance.duration * 60 * 60 * 1000
    );

    const isInMaintenance = now >= maintenanceStart && now <= maintenanceEnd;
    this.updateServerStatus(isInMaintenance);

    // Update timers
    const startTimeDiff = maintenanceStart.getTime() - now.getTime();
    const endTimeDiff = maintenanceEnd.getTime() - now.getTime();

    if (startTimeDiff > 0) {
      this.formatTimeDiff(startTimeDiff, this.maintenanceStartTime);
      this.setElementText(this.maintenanceStartLabel, 'Until Start');
    } else {
      this.setElementText(this.maintenanceStartTime, 'Started');
      this.setElementText(this.maintenanceStartLabel, 'Status');
    }

    if (endTimeDiff > 0 && isInMaintenance) {
      this.formatTimeDiff(endTimeDiff, this.maintenanceEndTime);
      this.setElementText(this.maintenanceEndLabel, 'Servers Back');
    } else {
      this.setElementText(this.maintenanceEndTime, '--:--:--');
      this.setElementText(this.maintenanceEndLabel, isInMaintenance ? 'Complete' : 'Server Status');
    }
  }

  updateServerStatus(inMaintenance) {
    if (this.serverStatusDot) {
      this.serverStatusDot.classList.toggle('maintenance', inMaintenance);
    }
    if (this.serverStatusText) {
      this.serverStatusText.textContent = inMaintenance ? 'Maintenance' : 'Online';
      this.serverStatusText.classList.toggle('maintenance', inMaintenance);
    }
  }

  updateMaintenanceDisplay(startTime, startLabel, endTime, endLabel) {
    this.setElementText(this.maintenanceStartTime, startTime);
    this.setElementText(this.maintenanceStartLabel, startLabel);
    this.setElementText(this.maintenanceEndTime, endTime);
    this.setElementText(this.maintenanceEndLabel, endLabel);
  }

  /**
   * Update holiday timers (called less frequently for performance)
   */
  updateHolidayTimers() {
    this.updateHalloweenTimer();
    this.updateNewYearTimer();
  }

  updateHalloweenTimer() {
    if (!this.halloweenTime) return;

    const now = new Date();
    const currentYear = now.getFullYear();
    let halloween = new Date(currentYear, 9, 31, 23, 59, 59, 999);

    if (now > halloween) {
      halloween = new Date(currentYear + 1, 9, 31, 23, 59, 59, 999);
    }

    const days = Math.floor((halloween.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    this.halloweenTime.textContent = days.toString();
  }

  updateNewYearTimer() {
    if (!this.newyearTime) return;

    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYear = new Date(nextYear, 0, 1, 0, 0, 0, 0);

    const days = Math.floor((newYear.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    this.newyearTime.textContent = days.toString();
  }

  /**
   * Helper methods
   */
  formatTimeDiff(timeDiff, element) {
    if (!element || timeDiff < 0) return;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

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
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
      this.clockInterval = null;
    }
    if (this.holidayInterval) {
      clearInterval(this.holidayInterval);
      this.holidayInterval = null;
    }
  }
}

// Initialize clock when script loads
const horizonWalkerClockTimer = new HorizonWalkerClockTimer();

// Export for potential external use
window.HorizonWalkerClockTimer = HorizonWalkerClockTimer;
window.horizonWalkerClockTimer = horizonWalkerClockTimer;
