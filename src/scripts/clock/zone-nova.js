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

    // Special Event Timers
    this.halloweenTime = document.getElementById('halloweenTime');
    this.newyearTime = document.getElementById('newyearTime');

    // Guild War Elements
    this.guildWarStatusDot = document.getElementById('guildWarStatusDot');
    this.guildWarStatusText = document.getElementById('guildWarStatusText');
    this.guildWarCurrentPhase = document.getElementById('guildWarCurrentPhase');
    this.guildWarPhaseTime = document.getElementById('guildWarPhaseTime');
    this.guildWarNextPhase = document.getElementById('guildWarNextPhase');
    this.guildWarNextTime = document.getElementById('guildWarNextTime');

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
    this.updateGuildWarTimer();
    this.updateSpecialEventTimers();
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
   * Update Guild War timer - phases and schedule
   */
  updateGuildWarTimer() {
    if (!this.guildWarStatusDot || !this.guildWarStatusText || !this.guildWarCurrentPhase) return;

    const now = new Date();
    const guildWarConfig = window.zoneNovaGuildWar;

    if (!guildWarConfig) {
      this.guildWarStatusText.textContent = 'Config Error';
      this.guildWarCurrentPhase.textContent = 'Unable to load';
      return;
    }

    const firstGuildWarStart = new Date(guildWarConfig.firstGuildWarStart);
    const daysSinceFirst = Math.floor(
      (now.getTime() - firstGuildWarStart.getTime()) / (1000 * 60 * 60 * 24)
    );

    // Determine if we're in a Guild War week or Guild Raid week
    const weeksSinceFirst = Math.floor(daysSinceFirst / 7);
    const isGuildWarWeek = Math.floor(weeksSinceFirst / 2) % 2 === 0;

    if (now < firstGuildWarStart) {
      // Before first Guild War
      this.guildWarStatusText.textContent = 'Coming Soon';
      this.guildWarStatusDot.className = 'status-dot offline';
      this.guildWarCurrentPhase.textContent = 'Guild War starts Sept 8';
      this.guildWarPhaseTime.textContent = this.formatTimeUntil(firstGuildWarStart - now.getTime());
      this.guildWarNextPhase.textContent = 'First Guild War';
      this.guildWarNextTime.textContent = '--:--:--';
      return;
    }

    if (!isGuildWarWeek) {
      // Guild Raid week
      this.guildWarStatusText.textContent = 'Guild Raid Active';
      this.guildWarStatusDot.className = 'status-dot online';
      this.guildWarCurrentPhase.textContent = 'Guild Raid Period';

      // Calculate next Guild War start
      const nextGuildWarWeek = Math.ceil(weeksSinceFirst / 2) * 2;
      const nextGuildWarStart = new Date(
        firstGuildWarStart.getTime() + nextGuildWarWeek * 7 * 24 * 60 * 60 * 1000
      );
      const timeUntilNextGuildWar = nextGuildWarStart.getTime() - now.getTime();

      this.guildWarPhaseTime.textContent = this.formatTimeUntil(timeUntilNextGuildWar);
      this.guildWarNextPhase.textContent = 'Next Guild War';
      this.guildWarNextTime.textContent = 'Sept ' + nextGuildWarStart.getUTCDate();
      return;
    }

    // Guild War week - determine current phase
    this.guildWarStatusText.textContent = 'Guild War Active';
    this.guildWarStatusDot.className = 'status-dot active';

    const currentPhase = this.getCurrentGuildWarPhase(now);
    const nextPhase = this.getNextGuildWarPhase(now, currentPhase);

    this.guildWarCurrentPhase.textContent = currentPhase.name;
    this.guildWarPhaseTime.textContent = this.formatTimeUntil(currentPhase.timeRemaining);
    this.guildWarNextPhase.textContent = nextPhase.name;
    this.guildWarNextTime.textContent = this.formatTimeUntil(nextPhase.timeUntil);
  }

  /**
   * Get current Guild War phase based on day and time
   */
  getCurrentGuildWarPhase(now) {
    const utcDay = now.getUTCDay(); // 0 = Sunday, 1 = Monday, etc.
    const utcHour = now.getUTCHours();
    const utcMinute = now.getUTCMinutes();
    const currentMinutes = utcHour * 60 + utcMinute;

    // Convert UTC+8 schedule to UTC for comparison
    // Preparation: Monday & Friday (05:00-03:59 next day UTC+8) = Sunday & Thursday (21:00-19:59 next day UTC)
    // Battle: Tuesday & Saturday (04:00-23:59 UTC+8) = Monday & Friday (20:00-15:59 next day UTC)
    // Settlement: Thursday & Monday (00:00-03:59 UTC+8) = Wednesday & Sunday (16:00-19:59 UTC)

    // Check Settlement phases first (shorter periods)
    if (
      (utcDay === 3 && currentMinutes >= 16 * 60) || // Wednesday 16:00+ UTC
      (utcDay === 4 && currentMinutes < 20 * 60) || // Thursday before 20:00 UTC
      (utcDay === 0 && currentMinutes >= 16 * 60) || // Sunday 16:00+ UTC
      (utcDay === 1 && currentMinutes < 20 * 60)
    ) {
      // Monday before 20:00 UTC

      let nextPhaseTime;
      if (utcDay === 3 || (utcDay === 4 && currentMinutes < 20 * 60)) {
        // Wednesday settlement -> Thursday 20:00 UTC (Friday 04:00 UTC+8)
        nextPhaseTime = new Date(now);
        nextPhaseTime.setUTCDate(nextPhaseTime.getUTCDate() + (utcDay === 3 ? 1 : 0));
        nextPhaseTime.setUTCHours(20, 0, 0, 0);
      } else {
        // Sunday settlement -> Monday 20:00 UTC (Tuesday 04:00 UTC+8)
        nextPhaseTime = new Date(now);
        nextPhaseTime.setUTCDate(nextPhaseTime.getUTCDate() + (utcDay === 0 ? 1 : 0));
        nextPhaseTime.setUTCHours(20, 0, 0, 0);
      }

      return {
        name: 'Settlement Phase',
        timeRemaining: nextPhaseTime.getTime() - now.getTime(),
      };
    }

    // Check Battle phases
    if (
      (utcDay === 1 && currentMinutes >= 20 * 60) || // Monday 20:00+ UTC
      (utcDay === 2 && currentMinutes < 16 * 60) || // Tuesday before 16:00 UTC
      (utcDay === 5 && currentMinutes >= 20 * 60) || // Friday 20:00+ UTC
      (utcDay === 6 && currentMinutes < 16 * 60)
    ) {
      // Saturday before 16:00 UTC

      let nextPhaseTime;
      if (utcDay === 1 || (utcDay === 2 && currentMinutes < 16 * 60)) {
        // Monday/Tuesday battle -> Wednesday 16:00 UTC (Thursday 00:00 UTC+8)
        nextPhaseTime = new Date(now);
        nextPhaseTime.setUTCDate(nextPhaseTime.getUTCDate() + (utcDay === 1 ? 2 : 1));
        nextPhaseTime.setUTCHours(16, 0, 0, 0);
      } else {
        // Friday/Saturday battle -> Sunday 16:00 UTC (Monday 00:00 UTC+8)
        nextPhaseTime = new Date(now);
        nextPhaseTime.setUTCDate(nextPhaseTime.getUTCDate() + (utcDay === 5 ? 2 : 1));
        nextPhaseTime.setUTCHours(16, 0, 0, 0);
      }

      return {
        name: 'Battle Phase',
        timeRemaining: nextPhaseTime.getTime() - now.getTime(),
      };
    }

    // Default to Preparation phase
    let nextPhaseTime;
    if (utcDay === 0 && currentMinutes >= 21 * 60) {
      // Sunday preparation -> Monday 20:00 UTC (Tuesday 04:00 UTC+8)
      nextPhaseTime = new Date(now);
      nextPhaseTime.setUTCDate(nextPhaseTime.getUTCDate() + 1);
      nextPhaseTime.setUTCHours(20, 0, 0, 0);
    } else if (utcDay === 4 && currentMinutes >= 21 * 60) {
      // Thursday preparation -> Friday 20:00 UTC (Saturday 04:00 UTC+8)
      nextPhaseTime = new Date(now);
      nextPhaseTime.setUTCDate(nextPhaseTime.getUTCDate() + 1);
      nextPhaseTime.setUTCHours(20, 0, 0, 0);
    } else {
      // Default next phase
      nextPhaseTime = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    }

    return {
      name: 'Preparation Phase',
      timeRemaining: nextPhaseTime.getTime() - now.getTime(),
    };
  }

  /**
   * Get next Guild War phase info
   */
  getNextGuildWarPhase(now, currentPhase) {
    // Simple logic - next phase rotates through Prep -> Battle -> Settlement
    let nextPhaseName;
    if (currentPhase.name === 'Preparation Phase') {
      nextPhaseName = 'Battle Phase';
    } else if (currentPhase.name === 'Battle Phase') {
      nextPhaseName = 'Settlement Phase';
    } else {
      nextPhaseName = 'Preparation Phase';
    }

    return {
      name: nextPhaseName,
      timeUntil: currentPhase.timeRemaining,
    };
  }

  /**
   * Format time duration for display
   */
  formatTimeUntil(timeDiff) {
    if (timeDiff <= 0) return '00:00:00';

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    if (hours >= 24) {
      const days = Math.floor(hours / 24);
      const remainingHours = hours % 24;
      return `${days}d ${remainingHours}h`;
    }

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  /**
   * Update special event timers - Halloween and New Year
   */
  updateSpecialEventTimers() {
    this.updateHalloweenTimer();
    this.updateNewYearTimer();
  }

  /**
   * Update Halloween timer - October 31st
   */
  updateHalloweenTimer() {
    if (!this.halloweenTime) return;

    const now = new Date();
    const currentYear = now.getFullYear();

    // Set Halloween date for this year
    let halloween = new Date(currentYear, 9, 31, 23, 59, 59, 999); // October 31st, end of day

    // If Halloween has passed this year, show next year's Halloween
    if (now > halloween) {
      halloween = new Date(currentYear + 1, 9, 31, 23, 59, 59, 999);
    }

    const timeDiff = halloween.getTime() - now.getTime();
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    this.halloweenTime.textContent = days.toString();
  }

  /**
   * Update New Year timer - January 1st
   */
  updateNewYearTimer() {
    if (!this.newyearTime) return;

    const now = new Date();
    const nextYear = now.getFullYear() + 1;

    // New Year's Day of next year at midnight
    const newYear = new Date(nextYear, 0, 1, 0, 0, 0, 0);

    const timeDiff = newYear.getTime() - now.getTime();
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    this.newyearTime.textContent = days.toString();
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
