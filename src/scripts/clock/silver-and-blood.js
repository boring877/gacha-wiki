/**
 * Silver and Blood Clock Timer Functionality
 * Handles countdown timers for Silver and Blood daily resets, events, and region switching
 */

class SilverAndBloodClockTimer {
  constructor() {
    this.clockInterval = null;
    this.currentRegion = 'us'; // default region

    // Configuration data
    this.config = {
      regions: {
        apac: {
          name: 'APAC Server',
          resetHour: 1, // 09:00 UTC+8 = 01:00 UTC
          resetMinute: 0,
          status: 'Daily reset timer<br />Resets at 01:00 UTC (09:00 UTC+8)',
          description: 'APAC Server with reset at 09:00 UTC+8',
          utcOffset: 8,
          utcLabel: 'UTC+8'
        },
        us: {
          name: 'US & Other Regions',
          resetHour: 12, // 05:00 UTC-8 with DST = 12:00 UTC
          resetMinute: 0,
          status: 'Daily reset timer<br />Resets at 12:00 UTC (05:00 UTC-8)',
          description: 'US & Other Regions with reset at 05:00 UTC-8',
          utcOffset: -8,
          utcLabel: 'UTC-8'
        }
      },
      timers: {
        apac: {
          maintenance: {
            date: '2025-08-05T06:00:00Z',
            duration: 2,
            subtitle: 'Waiting for game announcement'
          },
          raids: [
            {
              name: 'Prophecy Unbound - Weathered Flames of War',
              startDate: '2025-08-16T20:00:00Z',
              endDate: '2025-08-22T07:59:00Z',
              startDisplay: 'August 17, 04:00 UTC+8',
              endDisplay: 'August 22, 15:59 UTC+8'
            }
          ],
          events: [
            {
              name: 'Summertime Ensemble Event',
              startDate: '2025-07-17T02:00:00Z',
              endDate: '2025-08-06T19:00:00Z',
              startDisplay: 'July 17, 10:00 UTC+8',
              endDisplay: 'August 7, 03:00 UTC+8'
            },
            {
              name: 'Daybreak Sonata',
              startDate: '2025-08-07T02:00:00Z',
              endDate: '2025-08-20T19:00:00Z',
              startDisplay: 'August 7, 10:00 UTC+8',
              endDisplay: 'August 21, 03:00 UTC+8'
            }
          ],
          signinEvents: [
            {
              name: 'Path of the Blooming Lotus',
              startDate: '2025-07-24T12:00:00Z',
              endDate: '2025-08-21T12:00:00Z',
              startDisplay: 'July 24, 20:00 UTC+8',
              endDisplay: 'August 21, 20:00 UTC+8',
              totalDays: 28,
              description: '28-Day Login Reward Event',
              reward: 'Hati Outfit [Midnight Lotus]'
            },
            {
              name: "Selena's Agenda",
              startDate: '2025-07-17T13:00:00Z',
              endDate: '2025-08-07T12:00:00Z',
              startDisplay: 'July 17, 21:00 UTC+8',
              endDisplay: 'August 7, 20:00 UTC+8',
              totalDays: 21,
              description: 'Limited Sign-in Event',
              reward: "Selena's Special Rewards"
            }
          ],
          outfits: [
            {
              name: 'Pearlescent Dreams',
              character: 'Starry-Eyed Aiona',
              startDate: '2025-07-17T13:00:00Z',
              endDate: '2025-08-07T12:00:00Z',
              startDisplay: 'July 17, 21:00 UTC+8',
              endDisplay: 'August 7, 20:00 UTC+8'
            }
          ],
          specialEvents: [
            {
              name: 'Double Skill XP and Gear Week',
              description: '2x Reward Event',
              startDate: '2025-08-02T13:00:00Z',
              endDate: '2025-08-09T13:00:00Z',
              startDisplay: 'August 2, 21:00 UTC+8',
              endDisplay: 'August 9, 21:00 UTC+8',
              duration: 7,
              reward: '2x Skill XP and Gear Rewards'
            }
          ]
        },
        us: {
          maintenance: {
            date: '2025-08-05T06:00:00Z',
            duration: 2,
            subtitle: 'Waiting for game announcement'
          },
          raids: [
            {
              name: 'Prophecy Unbound - Weathered Flames of War',
              startDate: '2025-08-16T20:00:00Z',
              endDate: '2025-08-22T07:59:00Z',
              startDisplay: 'August 16, 12:00 UTC-8',
              endDisplay: 'August 21, 23:59 UTC-8'
            }
          ],
          events: [
            {
              name: 'Summertime Ensemble Event',
              startDate: '2025-07-17T12:00:00Z',
              endDate: '2025-08-07T11:00:00Z',
              startDisplay: 'July 17, 05:00 UTC-8',
              endDisplay: 'August 7, 04:00 UTC-8'
            },
            {
              name: 'Daybreak Sonata',
              startDate: '2025-08-07T12:00:00Z',
              endDate: '2025-08-21T11:00:00Z',
              startDisplay: 'August 7, 05:00 UTC-8',
              endDisplay: 'August 21, 04:00 UTC-8'
            }
          ],
          signinEvents: [
            {
              name: 'Path of the Blooming Lotus',
              startDate: '2025-07-24T12:00:00Z',
              endDate: '2025-08-21T12:00:00Z',
              startDisplay: 'July 24, 04:00 UTC-8',
              endDisplay: 'August 21, 04:00 UTC-8',
              totalDays: 28,
              description: '28-Day Login Reward Event',
              reward: 'Hati Outfit [Midnight Lotus]'
            },
            {
              name: "Selena's Agenda",
              startDate: '2025-07-17T12:00:00Z',
              endDate: '2025-08-07T11:00:00Z',
              startDisplay: 'July 17, 05:00 UTC-8',
              endDisplay: 'August 7, 04:00 UTC-8',
              totalDays: 21,
              description: 'Limited Sign-in Event',
              reward: "Selena's Special Rewards"
            }
          ],
          outfits: [
            {
              name: 'Pearlescent Dreams',
              character: 'Starry-Eyed Aiona',
              startDate: '2025-07-17T12:00:00Z',
              endDate: '2025-08-07T11:00:00Z',
              startDisplay: 'July 17, 05:00 UTC-8',
              endDisplay: 'August 7, 04:00 UTC-8'
            }
          ],
          specialEvents: [
            {
              name: 'Double Skill XP and Gear Week',
              description: '2x Reward Event',
              startDate: '2025-08-02T12:00:00Z',
              endDate: '2025-08-09T12:00:00Z',
              startDisplay: 'August 2, 05:00 UTC-8',
              endDisplay: 'August 9, 05:00 UTC-8',
              duration: 7,
              reward: '2x Skill XP and Gear Rewards'
            }
          ]
        }
      },
      launchDate: '2025-06-26T00:00:00Z',
      displayDate: 'June 26, 2025'
    };

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
    this.utcNote = document.getElementById('utcNote');

    // Region elements
    this.regionName = document.getElementById('regionName');
    this.gameStatus = document.getElementById('gameStatus');
    this.timerDescription = document.getElementById('timerDescription');

    // Timer Cards
    this.launchDays = document.getElementById('launchDays');
    this.raid1Name = document.getElementById('raid1Name');
    this.raid1Time = document.getElementById('raid1Time');
    this.raid2Name = document.getElementById('raid2Name');
    this.raid2Time = document.getElementById('raid2Time');
    this.weeklyTime = document.getElementById('weeklyTime');
    this.monthlyTime = document.getElementById('monthlyTime');
    this.weeklyResetSubtitle = document.getElementById('weeklyResetSubtitle');
    this.monthlyResetSubtitle = document.getElementById('monthlyResetSubtitle');
    this.maintenanceStartTime = document.getElementById('maintenanceStartTime');
    this.maintenanceStartLabel = document.getElementById('maintenanceStartLabel');
    this.maintenanceEndTime = document.getElementById('maintenanceEndTime');
    this.maintenanceEndLabel = document.getElementById('maintenanceEndLabel');
    this.maintenanceSubtitle = document.getElementById('maintenanceSubtitle');
    this.serverStatusDot = document.getElementById('serverStatusDot');
    this.serverStatusText = document.getElementById('serverStatusText');
    
    // Signin Events
    this.signinEventStatus = document.getElementById('signinEventStatus');
    this.signinEventStartDate = document.getElementById('signinEventStartDate');
    this.signinEventEndDate = document.getElementById('signinEventEndDate');
    this.signinEventTime = document.getElementById('signinEventTime');
    this.signinEventTimeLabel = document.getElementById('signinEventTimeLabel');
    
    // Outfit Availability
    this.outfitStatus = document.getElementById('outfitStatus');
    this.outfitStartDate = document.getElementById('outfitStartDate');
    this.outfitEndDate = document.getElementById('outfitEndDate');
    this.outfitTime = document.getElementById('outfitTime');
    this.outfitTimeLabel = document.getElementById('outfitTimeLabel');
    
    // Special Events
    this.specialEventStatus = document.getElementById('specialEventStatus');
    this.specialEventStartDate = document.getElementById('specialEventStartDate');
    this.specialEventEndDate = document.getElementById('specialEventEndDate');
    this.specialEventTime = document.getElementById('specialEventTime');
    this.specialEventTimeLabel = document.getElementById('specialEventTimeLabel');

    // Setup region switcher
    this.setupRegionSwitcher();
    
    // Update UI with current region
    this.updateRegionDisplay();

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

  setupRegionSwitcher() {
    const regionButtons = document.querySelectorAll('.region-button');
    regionButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const newRegion = e.target.dataset.region;
        if (newRegion && newRegion !== this.currentRegion) {
          this.switchRegion(newRegion);
        }
      });
    });
  }

  switchRegion(newRegion) {
    this.currentRegion = newRegion;
    
    // Update button states
    document.querySelectorAll('.region-button').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.region === newRegion) {
        btn.classList.add('active');
      }
    });
    
    // Update region display
    this.updateRegionDisplay();
  }

  updateRegionDisplay() {
    const regionConfig = this.config.regions[this.currentRegion];
    
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
    const resetLabel = `Every Monday at ${resetHourLocal} ${regionConfig.utcLabel}`;
    const monthlyLabel = `1st of each month at ${resetHourLocal} ${regionConfig.utcLabel}`;
    
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
   * @returns {Object} Object with hours, minutes, seconds
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
    const regionConfig = this.config.regions[this.currentRegion];

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

    // Format current regional time
    if (this.currentUTC) {
      const regionalTime = new Date(now.getTime() + (regionConfig.utcOffset * 60 * 60 * 1000));
      const regionalHours = String(regionalTime.getUTCHours()).padStart(2, '0');
      const regionalMinutes = String(regionalTime.getUTCMinutes()).padStart(2, '0');
      const regionalSeconds = String(regionalTime.getUTCSeconds()).padStart(2, '0');
      this.currentUTC.textContent = `${regionConfig.utcLabel} ${regionalHours}:${regionalMinutes}:${regionalSeconds}`;
    }
  }

  /**
   * Update all timer cards
   */
  updateAllTimerCards() {
    this.updateLaunchTimer();
    this.updateRaidTimers();
    this.updateWeeklyTimer();
    this.updateMonthlyTimer();
    this.updateMaintenanceTimer();
    this.updateSigninEventTimer();
    this.updateOutfitTimer();
    this.updateSpecialEventTimer();
  }

  /**
   * Update launch timer - days since June 26, 2025
   */
  updateLaunchTimer() {
    if (!this.launchDays) return;

    const now = new Date();
    const launchDate = new Date(this.config.launchDate);
    const timeDiff = now.getTime() - launchDate.getTime();
    const daysSinceLaunch = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    this.launchDays.textContent =
      daysSinceLaunch >= 0 ? daysSinceLaunch : Math.abs(daysSinceLaunch);
  }

  /**
   * Update Silver and Blood raid timers
   */
  updateRaidTimers() {
    if (!this.raid1Name || !this.raid1Time || !this.raid2Name || !this.raid2Time) return;

    const now = new Date();
    const raids = this.config.timers[this.currentRegion].raids;

    if (raids.length > 0) {
      // Update Raid 1
      const raid1StartDate = new Date(raids[0].startDate);
      const raid1EndDate = new Date(raids[0].endDate);
      
      if (now < raid1StartDate) {
        // Raid hasn't started yet
        this.raid1Name.textContent = raids[0].name;
        const startTimeDiff = raid1StartDate.getTime() - now.getTime();
        this.formatTimeDiff(startTimeDiff, this.raid1Time);
      } else if (now >= raid1StartDate && now <= raid1EndDate) {
        // Raid is active
        this.raid1Name.textContent = raids[0].name;
        const endTimeDiff = raid1EndDate.getTime() - now.getTime();
        this.formatTimeDiff(endTimeDiff, this.raid1Time);
      } else {
        // Raid has ended
        this.raid1Name.textContent = 'No Active Raid';
        this.raid1Time.textContent = '--:--:--';
      }
    } else {
      this.raid1Name.textContent = 'No Active Raid';
      this.raid1Time.textContent = '--:--:--';
    }

    // For now, show no second raid
    this.raid2Name.textContent = 'No Active Raid';
    this.raid2Time.textContent = '--:--:--';
  }

  /**
   * Format time difference display
   */
  formatTimeDiff(timeDiff, element) {
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
   * Update weekly reset timer - resets every Monday
   */
  updateWeeklyTimer() {
    if (!this.weeklyTime) return;

    const now = new Date();
    const regionConfig = this.config.regions[this.currentRegion];
    const nextMonday = new Date();

    // Get days until next Monday (0 = Sunday, 1 = Monday, etc.)
    const daysUntilMonday = (1 - now.getUTCDay() + 7) % 7 || 7;

    nextMonday.setUTCDate(now.getUTCDate() + daysUntilMonday);
    nextMonday.setUTCHours(regionConfig.resetHour, regionConfig.resetMinute, 0, 0);

    // If it's Monday and before reset time, use today
    if (now.getUTCDay() === 1 && now.getUTCHours() < regionConfig.resetHour) {
      nextMonday.setUTCDate(now.getUTCDate());
    }

    const timeDiff = nextMonday.getTime() - now.getTime();
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
   * Update monthly reset timer - resets 1st of each month
   */
  updateMonthlyTimer() {
    if (!this.monthlyTime) return;

    const now = new Date();
    const regionConfig = this.config.regions[this.currentRegion];
    const nextMonth = new Date();

    // Set to first day of next month
    nextMonth.setUTCMonth(now.getUTCMonth() + 1, 1);
    nextMonth.setUTCHours(regionConfig.resetHour, regionConfig.resetMinute, 0, 0);

    // If we're already past the monthly reset time this month, use next month
    const thisMonthReset = new Date();
    thisMonthReset.setUTCDate(1);
    thisMonthReset.setUTCHours(regionConfig.resetHour, regionConfig.resetMinute, 0, 0);

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
   * Update Silver and Blood maintenance timers
   */
  updateMaintenanceTimer() {
    if (!this.maintenanceStartTime || !this.maintenanceEndTime) return;

    const now = new Date();
    const maintenanceConfig = this.config.timers[this.currentRegion].maintenance;
    const maintenanceStart = new Date(maintenanceConfig.date);
    const maintenanceEnd = new Date(maintenanceStart.getTime() + (maintenanceConfig.duration * 60 * 60 * 1000));

    const startTimeDiff = maintenanceStart.getTime() - now.getTime();
    const endTimeDiff = maintenanceEnd.getTime() - now.getTime();

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
      this.formatTimeDiff(startTimeDiff, this.maintenanceStartTime);
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
      // During maintenance - countdown
      this.maintenanceEndLabel.textContent = 'Servers Back';
      this.formatTimeDiff(endTimeDiff, this.maintenanceEndTime);
    } else {
      // Maintenance has ended
      this.maintenanceEndLabel.textContent = 'Online';
      this.maintenanceEndTime.textContent = '--:--:--';
    }
  }

  /**
   * Update Silver and Blood signin event timer
   */
  updateSigninEventTimer() {
    if (!this.signinEventStatus || !this.signinEventTime) return;

    const now = new Date();
    const signinEvents = this.config.timers[this.currentRegion].signinEvents;
    
    // Find the most relevant active signin event
    let activeEvent = null;
    for (const event of signinEvents) {
      const eventStart = new Date(event.startDate);
      const eventEnd = new Date(event.endDate);
      
      if (now >= eventStart && now <= eventEnd) {
        activeEvent = event;
        break;
      }
    }

    if (activeEvent) {
      const eventEnd = new Date(activeEvent.endDate);
      const endTimeDiff = eventEnd.getTime() - now.getTime();

      // Update static dates
      if (this.signinEventStartDate) {
        this.signinEventStartDate.textContent = activeEvent.startDisplay;
      }
      if (this.signinEventEndDate) {
        this.signinEventEndDate.textContent = activeEvent.endDisplay;
      }

      this.signinEventStatus.textContent = `Active: ${activeEvent.name}`;
      this.signinEventStatus.classList.remove('inactive');
      this.formatTimeDiff(endTimeDiff, this.signinEventTime);
      this.signinEventTimeLabel.textContent = 'Event End';
    } else {
      // Check for upcoming events
      let upcomingEvent = null;
      for (const event of signinEvents) {
        const eventStart = new Date(event.startDate);
        if (now < eventStart) {
          upcomingEvent = event;
          break;
        }
      }

      if (upcomingEvent) {
        if (this.signinEventStartDate) {
          this.signinEventStartDate.textContent = upcomingEvent.startDisplay;
        }
        if (this.signinEventEndDate) {
          this.signinEventEndDate.textContent = upcomingEvent.endDisplay;
        }
        this.signinEventStatus.textContent = `Upcoming: ${upcomingEvent.name}`;
        this.signinEventStatus.classList.remove('inactive');
        this.signinEventTime.textContent = '--:--:--';
        this.signinEventTimeLabel.textContent = 'Event End';
      } else {
        this.signinEventStatus.textContent = 'No Active Signin';
        this.signinEventStatus.classList.add('inactive');
        this.signinEventTime.textContent = '--:--:--';
        this.signinEventTimeLabel.textContent = 'Event End';
        if (this.signinEventStartDate) this.signinEventStartDate.textContent = '--';
        if (this.signinEventEndDate) this.signinEventEndDate.textContent = '--';
      }
    }
  }

  /**
   * Update Silver and Blood outfit availability timer
   */
  updateOutfitTimer() {
    if (!this.outfitStatus || !this.outfitTime) return;

    const now = new Date();
    const outfits = this.config.timers[this.currentRegion].outfits;
    
    if (outfits.length === 0) {
      this.outfitStatus.textContent = 'No Active Outfit';
      this.outfitStatus.classList.add('inactive');
      this.outfitTime.textContent = '--:--:--';
      return;
    }

    const outfit = outfits[0]; // Use first outfit
    const outfitStart = new Date(outfit.startDate);
    const outfitEnd = new Date(outfit.endDate);

    // Update static dates
    if (this.outfitStartDate) {
      this.outfitStartDate.textContent = outfit.startDisplay;
    }
    if (this.outfitEndDate) {
      this.outfitEndDate.textContent = outfit.endDisplay;
    }

    const endTimeDiff = outfitEnd.getTime() - now.getTime();

    if (now < outfitStart) {
      // Outfit hasn't started yet
      this.outfitStatus.textContent = `Upcoming: ${outfit.name}`;
      this.outfitStatus.classList.remove('inactive');
      this.outfitTime.textContent = '--:--:--';
      this.outfitTimeLabel.textContent = 'Outfit End';
    } else if (now >= outfitStart && now <= outfitEnd) {
      // Outfit is active
      this.outfitStatus.textContent = `Active: ${outfit.name}`;
      this.outfitStatus.classList.remove('inactive');
      this.formatTimeDiff(endTimeDiff, this.outfitTime);
      this.outfitTimeLabel.textContent = 'Outfit End';
    } else {
      // Outfit has ended
      this.outfitStatus.textContent = 'No Active Outfit';
      this.outfitStatus.classList.add('inactive');
      this.outfitTime.textContent = '--:--:--';
      this.outfitTimeLabel.textContent = 'Outfit End';
    }
  }

  /**
   * Update Silver and Blood special event timer (2x rewards)
   */
  updateSpecialEventTimer() {
    if (!this.specialEventStatus || !this.specialEventTime) return;

    const now = new Date();
    const specialEvents = this.config.timers[this.currentRegion].specialEvents;
    
    if (specialEvents.length === 0) {
      this.specialEventStatus.textContent = 'No Active 2x Rewards';
      this.specialEventStatus.classList.add('inactive');
      this.specialEventTime.textContent = '--:--:--';
      return;
    }

    const event = specialEvents[0]; // Use first event
    const eventStart = new Date(event.startDate);
    const eventEnd = new Date(event.endDate);

    // Update static dates
    if (this.specialEventStartDate) {
      this.specialEventStartDate.textContent = event.startDisplay;
    }
    if (this.specialEventEndDate) {
      this.specialEventEndDate.textContent = event.endDisplay;
    }

    const endTimeDiff = eventEnd.getTime() - now.getTime();

    if (now < eventStart) {
      // Event hasn't started yet
      this.specialEventStatus.textContent = 'Upcoming 2x Rewards';
      this.specialEventStatus.classList.remove('inactive');
      this.specialEventTime.textContent = '--:--:--';
      this.specialEventTimeLabel.textContent = '2x Rewards End';
    } else if (now >= eventStart && now <= eventEnd) {
      // Event is active
      this.specialEventStatus.textContent = 'Active: Double Skill XP & Gear';
      this.specialEventStatus.classList.remove('inactive');
      this.formatTimeDiff(endTimeDiff, this.specialEventTime);
      this.specialEventTimeLabel.textContent = '2x Rewards End';
    } else {
      // Event has ended
      this.specialEventStatus.textContent = 'No Active 2x Rewards';
      this.specialEventStatus.classList.add('inactive');
      this.specialEventTime.textContent = '--:--:--';
      this.specialEventTimeLabel.textContent = '2x Rewards End';
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

// Initialize Silver and Blood clock when script loads
const silverAndBloodClockTimer = new SilverAndBloodClockTimer();

// Export for potential use in other modules
window.SilverAndBloodClockTimer = SilverAndBloodClockTimer;
window.silverAndBloodClockTimer = silverAndBloodClockTimer;