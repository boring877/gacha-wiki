/**
 * Silver and Blood Clock Timer Functionality
 * Handles countdown timers for Silver and Blood daily resets, events, and region switching
 */

class SilverAndBloodClockTimer {
  constructor() {
    this.clockInterval = null;
    this.currentRegion = 'us'; // default region
    this.config = null;

    // DOM elements - will be set in setupClock
    this.clockHours = null;
    this.clockMinutes = null;
    this.clockSeconds = null;
    this.currentDate = null;
    this.currentUTC = null;
    this.utcNote = null;
    this.regionName = null;
    this.gameStatus = null;
    this.timerDescription = null;
    this.launchDays = null;
    this.weeklyTime = null;
    this.monthlyTime = null;
    this.weeklyResetSubtitle = null;
    this.monthlyResetSubtitle = null;
    this.maintenanceStartTime = null;
    this.maintenanceStartLabel = null;
    this.maintenanceEndTime = null;
    this.maintenanceEndLabel = null;
    this.maintenanceSubtitle = null;
    this.serverStatusDot = null;
    this.serverStatusText = null;

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
    // Get configuration from window object (set by layout)
    this.config = window.silverAndBloodConfig;
    if (!this.config) {
      console.error('Silver and Blood config not found');
      return;
    }

    this.currentRegion = this.config.currentRegion || 'us';

    // Initialize DOM elements
    this.initializeDOMElements();

    // Setup region switcher
    this.setupRegionSwitcher();

    // Initial UI update
    this.updateAllDisplays();

    // Start the clock interval
    this.startClockInterval();

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => this.cleanup());
  }

  initializeDOMElements() {
    // Main clock elements
    this.clockHours = document.getElementById('clockHours');
    this.clockMinutes = document.getElementById('clockMinutes');
    this.clockSeconds = document.getElementById('clockSeconds');
    this.currentDate = document.getElementById('currentDate');
    this.currentUTC = document.getElementById('currentUTC');
    this.utcNote = document.getElementById('utcNote');

    // Region and status elements
    this.regionName = document.getElementById('regionName');
    this.gameStatus = document.getElementById('gameStatus');
    this.timerDescription = document.getElementById('timerDescription');

    // Timer cards
    this.launchDays = document.getElementById('launchDays');
    this.weeklyTime = document.getElementById('weeklyTime');
    this.monthlyTime = document.getElementById('monthlyTime');
    this.weeklyResetSubtitle = document.getElementById('weeklyResetSubtitle');
    this.monthlyResetSubtitle = document.getElementById('monthlyResetSubtitle');

    // Maintenance elements
    this.maintenanceStartTime = document.getElementById('maintenanceStartTime');
    this.maintenanceStartLabel = document.getElementById('maintenanceStartLabel');
    this.maintenanceEndTime = document.getElementById('maintenanceEndTime');
    this.maintenanceEndLabel = document.getElementById('maintenanceEndLabel');
    this.maintenanceSubtitle = document.getElementById('maintenanceSubtitle');

    // Server status elements
    this.serverStatusDot = document.getElementById('serverStatusDot');
    this.serverStatusText = document.getElementById('serverStatusText');
  }

  startClockInterval() {
    this.clockInterval = setInterval(() => {
      this.updateAllDisplays();
    }, 1000);
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

    if (this.regionName) {
      this.regionName.textContent = regionConfig.name;
    }

    if (this.gameStatus) {
      this.gameStatus.innerHTML = regionConfig.status;
    }

    if (this.utcNote) {
      this.utcNote.textContent = `This is based on ${regionConfig.utcLabel}`;
    }

    // Update reset subtitles based on region
    const resetHourLocal = this.currentRegion === 'apac' ? '09:00' : '05:00';
    const resetLabel = `Every Sunday at ${resetHourLocal} ${regionConfig.utcLabel}`;
    const monthlyLabel = `Last day of each month at ${resetHourLocal} ${regionConfig.utcLabel}`;

    if (this.weeklyResetSubtitle) {
      this.weeklyResetSubtitle.textContent = resetLabel;
    }

    if (this.monthlyResetSubtitle) {
      this.monthlyResetSubtitle.textContent = monthlyLabel;
    }

    // Update maintenance subtitle
    const maintenanceConfig = this.config.timers[this.currentRegion].maintenance;
    if (this.maintenanceSubtitle) {
      this.maintenanceSubtitle.textContent = maintenanceConfig.subtitle;
    }
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
    const regionConfig = this.config.regions[this.currentRegion];

    // Update current date
    if (this.currentDate) {
      const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      this.currentDate.textContent = now.toLocaleDateString('en-US', dateOptions);
    }

    // Update UTC time for selected region
    if (this.currentUTC) {
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

      this.currentUTC.textContent = `${regionConfig.utcLabel} ${regionalHours}:${regionalMinutes}:${regionalSeconds}`;
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
    } catch (error) {
      console.warn('Error updating timer cards:', error);
    }
  }

  /**
   * Update launch timer - days since launch
   */
  updateLaunchTimer() {
    if (!this.launchDays || !this.config.launchDate) return;

    const now = new Date();
    const launchDate = new Date(this.config.launchDate);
    const timeDiff = now.getTime() - launchDate.getTime();
    const daysSinceLaunch = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    this.launchDays.textContent = Math.abs(daysSinceLaunch);
  }

  /**
   * Update weekly reset timer
   */
  updateWeeklyTimer() {
    if (!this.weeklyTime) return;

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
    this.formatTimeDiff(timeDiff, this.weeklyTime);
  }

  /**
   * Update monthly reset timer
   */
  updateMonthlyTimer() {
    if (!this.monthlyTime) return;

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
    this.formatTimeDiff(timeDiff, this.monthlyTime);
  }

  /**
   * Update maintenance timer
   */
  updateMaintenanceTimer() {
    const maintenanceConfig = this.config.timers[this.currentRegion].maintenance;
    if (!maintenanceConfig) return;

    // Check if maintenance date is null or invalid
    if (!maintenanceConfig.date) {
      // No maintenance scheduled
      if (this.maintenanceStartTime) {
        this.maintenanceStartTime.textContent = '--:--:--';
        if (this.maintenanceStartLabel) {
          this.maintenanceStartLabel.textContent = 'Until Start';
        }
      }
      if (this.maintenanceEndTime) {
        this.maintenanceEndTime.textContent = '--:--:--';
        if (this.maintenanceEndLabel) {
          this.maintenanceEndLabel.textContent = 'Servers Back';
        }
      }
      return;
    }

    const now = new Date();
    const maintenanceDate = new Date(maintenanceConfig.date);
    const maintenanceEndDate = new Date(
      maintenanceDate.getTime() + maintenanceConfig.duration * 60 * 60 * 1000
    );

    // Update maintenance start time
    if (this.maintenanceStartTime) {
      const startTimeDiff = maintenanceDate.getTime() - now.getTime();
      if (startTimeDiff > 0) {
        this.formatTimeDiff(startTimeDiff, this.maintenanceStartTime);
        if (this.maintenanceStartLabel) {
          this.maintenanceStartLabel.textContent = 'Maintenance Start';
        }
      } else {
        this.maintenanceStartTime.textContent = 'Started';
        if (this.maintenanceStartLabel) {
          this.maintenanceStartLabel.textContent = 'Maintenance Status';
        }
      }
    }

    // Update maintenance end time
    if (this.maintenanceEndTime) {
      const endTimeDiff = maintenanceEndDate.getTime() - now.getTime();
      if (endTimeDiff > 0) {
        this.formatTimeDiff(endTimeDiff, this.maintenanceEndTime);
        if (this.maintenanceEndLabel) {
          this.maintenanceEndLabel.textContent = 'Maintenance End';
        }
      } else {
        this.maintenanceEndTime.textContent = 'Complete';
        if (this.maintenanceEndLabel) {
          this.maintenanceEndLabel.textContent = 'Maintenance Status';
        }
      }
    }
  }

  /**
   * Format time difference display
   */
  formatTimeDiff(timeDiff, element) {
    if (!element || timeDiff < 0) return;

    const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
    const MILLISECONDS_IN_HOUR = 1000 * 60 * 60;
    const MILLISECONDS_IN_MINUTE = 1000 * 60;

    const days = Math.floor(timeDiff / MILLISECONDS_IN_DAY);
    const hours = Math.floor((timeDiff % MILLISECONDS_IN_DAY) / MILLISECONDS_IN_HOUR);
    const minutes = Math.floor((timeDiff % MILLISECONDS_IN_HOUR) / MILLISECONDS_IN_MINUTE);
    const seconds = Math.floor((timeDiff % MILLISECONDS_IN_MINUTE) / 1000);

    if (days > 0) {
      element.textContent = `${days}d ${hours}h`;
    } else if (hours > 0) {
      element.textContent = `${hours}h ${minutes}m`;
    } else {
      element.textContent = `${minutes}:${String(seconds).padStart(2, '0')}`;
    }
  }

  cleanup() {
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
      this.clockInterval = null;
    }
  }
}

// Initialize Silver and Blood clock when script loads
const silverAndBloodClockTimer = new SilverAndBloodClockTimer();

// Export for potential use in other modules
window.SilverAndBloodClockTimer = SilverAndBloodClockTimer;
window.silverAndBloodClockTimer = silverAndBloodClockTimer;
