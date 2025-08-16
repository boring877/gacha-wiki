/**
 * Zone Nova Clock Timer Functionality
 * Handles the countdown timer for Zone Nova daily resets and events
 */

class ZoneNovaClockTimer {
  constructor() {
    this.clockInterval = null;

    // DOM elements
    this.clockHours = null;
    this.clockMinutes = null;
    this.clockSeconds = null;

    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupClock());
    } else {
      this.setupClock();
    }
  }

  setupClock() {
    // Get DOM elements - Main Clock
    this.clockHours = document.getElementById('clockHours');
    this.clockMinutes = document.getElementById('clockMinutes');
    this.clockSeconds = document.getElementById('clockSeconds');
    this.currentDate = document.getElementById('currentDate');
    this.currentUTC = document.getElementById('currentUTC');

    // Timer Cards
    this.launchDays = document.getElementById('launchDays');
    this.rift1Name = document.getElementById('rift1Name');
    this.rift1Time = document.getElementById('rift1Time');
    this.rift2Name = document.getElementById('rift2Name');
    this.rift2Time = document.getElementById('rift2Time');
    this.weeklyTime = document.getElementById('weeklyTime');
    this.monthlyTime = document.getElementById('monthlyTime');
    this.maintenanceStartTime = document.getElementById('maintenanceStartTime');
    this.maintenanceStartLabel = document.getElementById('maintenanceStartLabel');
    this.maintenanceEndTime = document.getElementById('maintenanceEndTime');
    this.maintenanceEndLabel = document.getElementById('maintenanceEndLabel');
    this.serverStatusDot = document.getElementById('serverStatusDot');
    this.serverStatusText = document.getElementById('serverStatusText');

    // Start the clock
    this.updateClock();
    this.updateCurrentDateTime();
    this.updateAllTimerCards();
    this.clockInterval = setInterval(() => {
      this.updateClock();
      this.updateCurrentDateTime();
      this.updateAllTimerCards();
    }, 1000);

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => this.cleanup());
  }

  /**
   * Calculate time remaining until next Zone Nova reset (20:00 UTC = 04:00 UTC+8)
   * @returns {Object} Object with hours, minutes, seconds
   */
  getTimeUntilReset() {
    const now = new Date();
    const resetTime = new Date();
    resetTime.setUTCHours(20, 0, 0, 0); // 20:00 UTC = 04:00 UTC+8 next day

    // If reset time has passed today, set it for tomorrow
    if (resetTime <= now) {
      resetTime.setUTCDate(resetTime.getUTCDate() + 1);
    }

    // Calculate time difference
    const timeDiff = resetTime.getTime() - now.getTime();
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return {
      hours: Math.max(0, hours),
      minutes: Math.max(0, minutes),
      seconds: Math.max(0, seconds),
    };
  }

  /**
   * Update the clock display with current countdown
   */
  updateClock() {
    const time = this.getTimeUntilReset();

    // Update with flip animation
    this.updateTimeValue(this.clockHours, time.hours);
    this.updateTimeValue(this.clockMinutes, time.minutes);
    this.updateTimeValue(this.clockSeconds, time.seconds);
  }

  /**
   * Update the clock display with current countdown
   */
  updateTimeValue(element, value) {
    if (!element) return;

    const newValue = String(value).padStart(2, '0');
    element.textContent = newValue;
  }

  /**
   * Update current date and UTC time display
   */
  updateCurrentDateTime() {
    const now = new Date();

    // Format current date
    if (this.currentDate) {
      const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC',
      };
      const dateStr = now.toLocaleDateString('en-US', options);
      this.currentDate.textContent = dateStr;
    }

    // Format current UTC+8 time
    if (this.currentUTC) {
      const utc8Time = new Date(now.getTime() + 8 * 60 * 60 * 1000);
      const utc8Hours = String(utc8Time.getUTCHours()).padStart(2, '0');
      const utc8Minutes = String(utc8Time.getUTCMinutes()).padStart(2, '0');
      const utc8Seconds = String(utc8Time.getUTCSeconds()).padStart(2, '0');
      this.currentUTC.textContent = `UTC+8 ${utc8Hours}:${utc8Minutes}:${utc8Seconds}`;
    }
  }

  /**
   * Update all timer cards
   */
  updateAllTimerCards() {
    this.updateLaunchTimer();
    this.updateRiftTimers();
    this.updateWeeklyTimer();
    this.updateMonthlyTimer();
    this.updateMaintenanceTimer();
  }

  /**
   * Update launch timer - days since April 29, 2025
   */
  updateLaunchTimer() {
    if (!this.launchDays) return;

    const now = new Date();
    const launchDate = new Date('2025-04-29T00:00:00Z');
    const timeDiff = now.getTime() - launchDate.getTime();
    const daysSinceLaunch = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    this.launchDays.textContent =
      daysSinceLaunch >= 0 ? daysSinceLaunch : Math.abs(daysSinceLaunch);
  }

  /**
   * Update Zone Nova rift timers - Dynamic version using server-side data
   */
  updateRiftTimers() {
    if (!this.rift1Name || !this.rift1Time || !this.rift2Name || !this.rift2Time) return;

    const now = new Date();

    // Get active rifts from server-side data (passed via window.zoneNovaActiveRifts)
    const activeRifts = window.zoneNovaActiveRifts || [];

    // Ensure we have at least 2 slots for rifts (pad with empty if needed)
    const rifts = [activeRifts[0] || null, activeRifts[1] || null];

    // Update Rift 1
    if (rifts[0]) {
      const rift1EndDate = new Date(rifts[0].endDate);
      const rift1TimeDiff = rift1EndDate.getTime() - now.getTime();

      if (rift1TimeDiff <= 0) {
        this.rift1Name.textContent = 'No Active Rift';
        this.rift1Time.textContent = '--:--:--';
      } else {
        this.rift1Name.textContent = rifts[0].name;
        this.formatRiftTime(rift1TimeDiff, this.rift1Time);
      }
    } else {
      this.rift1Name.textContent = 'No Active Rift';
      this.rift1Time.textContent = '--:--:--';
    }

    // Update Rift 2
    if (rifts[1]) {
      const rift2EndDate = new Date(rifts[1].endDate);
      const rift2TimeDiff = rift2EndDate.getTime() - now.getTime();

      if (rift2TimeDiff <= 0) {
        this.rift2Name.textContent = 'No Active Rift';
        this.rift2Time.textContent = '--:--:--';
      } else {
        this.rift2Name.textContent = rifts[1].name;
        this.formatRiftTime(rift2TimeDiff, this.rift2Time);
      }
    } else {
      this.rift2Name.textContent = 'No Active Rift';
      this.rift2Time.textContent = '--:--:--';
    }
  }

  /**
   * Format rift time display
   */
  formatRiftTime(timeDiff, element) {
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    if (days > 0) {
      element.textContent = `${days}d ${hours}h`;
    } else if (hours > 0) {
      element.textContent = `${hours}h ${minutes}m`;
    } else {
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      element.textContent = `${minutes}:${String(seconds).padStart(2, '0')}`;
    }
  }

  /**
   * Update weekly reset timer - resets every Sunday at 4:00 UTC+8 (20:00 UTC)
   */
  updateWeeklyTimer() {
    if (!this.weeklyTime) return;

    const now = new Date();
    const nextSunday = new Date();

    // Get days until next Sunday (0 = Sunday, 1 = Monday, etc.)
    const daysUntilSunday = (0 - now.getUTCDay() + 7) % 7 || 7;

    nextSunday.setUTCDate(now.getUTCDate() + daysUntilSunday);
    nextSunday.setUTCHours(20, 0, 0, 0); // 4:00 UTC+8 = 20:00 UTC

    // If it's Sunday and before 20:00 UTC, use today
    if (now.getUTCDay() === 0 && now.getUTCHours() < 20) {
      nextSunday.setUTCDate(now.getUTCDate());
    }

    const timeDiff = nextSunday.getTime() - now.getTime();
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    if (days > 0) {
      this.weeklyTime.textContent = `${days}d ${hours}h`;
    } else {
      this.weeklyTime.textContent = `${hours}h ${minutes}m`;
    }
  }

  /**
   * Update monthly reset timer - resets 1st of each month at 4:00 UTC+8 (20:00 UTC)
   */
  updateMonthlyTimer() {
    if (!this.monthlyTime) return;

    const now = new Date();
    const nextMonth = new Date();

    // Set to first day of next month
    nextMonth.setUTCMonth(now.getUTCMonth() + 1, 1);
    nextMonth.setUTCHours(20, 0, 0, 0); // 4:00 UTC+8 = 20:00 UTC

    // If we're already past the monthly reset time this month, use next month
    const thisMonthReset = new Date();
    thisMonthReset.setUTCDate(1);
    thisMonthReset.setUTCHours(20, 0, 0, 0);

    let targetDate;
    if (now < thisMonthReset) {
      // This month's reset hasn't happened yet
      targetDate = thisMonthReset;
    } else {
      // Use next month's reset
      targetDate = nextMonth;
    }

    const timeDiff = targetDate.getTime() - now.getTime();

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    if (days > 0) {
      this.monthlyTime.textContent = `${days}d ${hours}h`;
    } else {
      this.monthlyTime.textContent = `${hours}h ${minutes}m`;
    }
  }

  /**
   * Update Zone Nova maintenance timers - Auto-remove expired maintenance
   */
  updateMaintenanceTimer() {
    if (!this.maintenanceStartTime || !this.maintenanceEndTime) return;

    const now = new Date();

    // Check if there's a scheduled maintenance from server-side data
    const maintenanceData = window.zoneNovaMaintenance || null;
    const maintenanceStart = maintenanceData?.startDate
      ? new Date(maintenanceData.startDate)
      : null;
    const maintenanceEnd = maintenanceData?.endDate ? new Date(maintenanceData.endDate) : null;

    // If no maintenance is scheduled, show waiting message
    if (!maintenanceStart || !maintenanceEnd) {
      // No maintenance scheduled - show waiting message
      if (this.serverStatusDot) {
        this.serverStatusDot.classList.remove('maintenance');
      }
      if (this.serverStatusText) {
        this.serverStatusText.textContent = 'Online';
        this.serverStatusText.classList.remove('maintenance');
      }

      this.maintenanceStartLabel.textContent = 'Next Maintenance';
      this.maintenanceStartTime.textContent = 'Waiting for announcement';
      this.maintenanceEndLabel.textContent = 'Server Status';
      this.maintenanceEndTime.textContent = 'Online';
      return;
    }

    const startTimeDiff = maintenanceStart.getTime() - now.getTime();
    const endTimeDiff = maintenanceEnd.getTime() - now.getTime();

    // Auto-remove maintenance if it has ended (more than 1 hour past end time)
    if (endTimeDiff < -3600000) {
      // 1 hour buffer after maintenance ends
      // Maintenance ended over an hour ago, clear it
      if (this.serverStatusDot) {
        this.serverStatusDot.classList.remove('maintenance');
      }
      if (this.serverStatusText) {
        this.serverStatusText.textContent = 'Online';
        this.serverStatusText.classList.remove('maintenance');
      }

      this.maintenanceStartLabel.textContent = 'Next Maintenance';
      this.maintenanceStartTime.textContent = 'Waiting for announcement';
      this.maintenanceEndLabel.textContent = 'Server Status';
      this.maintenanceEndTime.textContent = 'Online';
      return;
    }

    // Update Server Status
    if (now >= maintenanceStart && now <= maintenanceEnd) {
      // During maintenance - red dot
      if (this.serverStatusDot) {
        this.serverStatusDot.classList.add('maintenance');
      }
      if (this.serverStatusText) {
        this.serverStatusText.textContent = 'Maintenance';
        this.serverStatusText.classList.add('maintenance');
      }
    } else {
      // Outside maintenance - green dot
      if (this.serverStatusDot) {
        this.serverStatusDot.classList.remove('maintenance');
      }
      if (this.serverStatusText) {
        this.serverStatusText.textContent = 'Online';
        this.serverStatusText.classList.remove('maintenance');
      }
    }

    // Update Start Timer
    if (startTimeDiff > 0) {
      // Before maintenance starts
      this.maintenanceStartLabel.textContent = 'Until Start';
      this.formatRiftTime(startTimeDiff, this.maintenanceStartTime);
    } else {
      // Maintenance has started or ended
      this.maintenanceStartLabel.textContent = 'Started';
      this.maintenanceStartTime.textContent = '--:--:--';
    }

    // Update End Timer (only counts during maintenance)
    if (now < maintenanceStart) {
      // Before maintenance starts - no countdown yet
      this.maintenanceEndLabel.textContent = 'Servers Back';
      this.maintenanceEndTime.textContent = '--:--:--';
    } else if (now >= maintenanceStart && now <= maintenanceEnd) {
      // During maintenance - countdown to end
      this.maintenanceEndLabel.textContent = 'Servers Back';
      this.formatRiftTime(endTimeDiff, this.maintenanceEndTime);
    } else {
      // Maintenance has ended
      this.maintenanceEndLabel.textContent = 'Online';
      this.maintenanceEndTime.textContent = '--:--:--';
    }
  }

  /**
   * Clean up intervals and event listeners
   */
  cleanup() {
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
      this.clockInterval = null;
    }
  }
}

// Initialize Zone Nova clock when script loads
const zoneNovaClockTimer = new ZoneNovaClockTimer();

// Export for potential use in other modules
window.ZoneNovaClockTimer = ZoneNovaClockTimer;
window.zoneNovaClockTimer = zoneNovaClockTimer;
