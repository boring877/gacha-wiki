/**
 * Star Savior Clock Timer
 * Server-side rendered panels with show/hide region switching
 * All times in UTC+9, daily reset at 04:00 UTC+9 (19:00 UTC)
 */

const MS_PER_DAY = 1000 * 60 * 60 * 24;
const MS_PER_HOUR = 1000 * 60 * 60;
const MS_PER_MINUTE = 1000 * 60;
const JST_OFFSET = 9 * 60 * 60 * 1000;
const RESET_HOUR_UTC = 19;
const RESET_MINUTE_UTC = 0;

class StarSaviorClockTimer {
  constructor() {
    this.interval = null;
    this.init();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup(), { once: true });
    } else {
      this.setup();
    }
  }

  setup() {
    this.updateAll();
    this.interval = setInterval(() => this.updateAll(), 1000);
  }

  updateAll() {
    this.updateClocks();
    this.updateJSTTime();
    this.updateWeeklyTimers();
    this.updateMonthlyTimers();
    this.updateDaysSinceLaunch();
    this.updateDaysUntil();
  }

  updateClocks() {
    const now = new Date();
    const reset = new Date();
    reset.setUTCHours(RESET_HOUR_UTC, RESET_MINUTE_UTC, 0, 0);
    if (reset <= now) reset.setUTCDate(reset.getUTCDate() + 1);
    const diff = reset.getTime() - now.getTime();
    const h = String(Math.floor(diff / MS_PER_HOUR)).padStart(2, '0');
    const m = String(Math.floor((diff % MS_PER_HOUR) / MS_PER_MINUTE)).padStart(2, '0');
    const s = String(Math.floor((diff % MS_PER_MINUTE) / 1000)).padStart(2, '0');
    document.querySelectorAll('.clock-hours').forEach(el => el.textContent = h);
    document.querySelectorAll('.clock-minutes').forEach(el => el.textContent = m);
    document.querySelectorAll('.clock-seconds').forEach(el => el.textContent = s);
  }

  updateJSTTime() {
    const now = new Date();
    const jst = new Date(now.getTime() + JST_OFFSET);
    const str = `UTC+9 ${String(jst.getUTCHours()).padStart(2, '0')}:${String(jst.getUTCMinutes()).padStart(2, '0')}:${String(jst.getUTCSeconds()).padStart(2, '0')}`;
    document.querySelectorAll('.current-utc, .current-utc-jst').forEach(el => el.textContent = str);
  }

  updateWeeklyTimers() {
    const now = new Date();
    const resetDay = 0;
    const daysUntil = (resetDay - now.getUTCDay() + 7) % 7 || 7;
    const target = new Date();
    target.setUTCDate(now.getUTCDate() + daysUntil);
    target.setUTCHours(RESET_HOUR_UTC, RESET_MINUTE_UTC, 0, 0);
    if (now.getUTCDay() === resetDay && now.getUTCHours() < RESET_HOUR_UTC) {
      target.setUTCDate(now.getUTCDate());
    }
    const display = this.formatDiff(target.getTime() - now.getTime());
    document.querySelectorAll('.weekly-time').forEach(el => el.textContent = display);
  }

  updateMonthlyTimers() {
    const now = new Date();
    const next = new Date();
    next.setUTCMonth(now.getUTCMonth() + 1, 1);
    next.setUTCHours(RESET_HOUR_UTC, RESET_MINUTE_UTC, 0, 0);
    const thisMonth = new Date();
    thisMonth.setUTCDate(1);
    thisMonth.setUTCHours(RESET_HOUR_UTC, RESET_MINUTE_UTC, 0, 0);
    const target = now < thisMonth ? thisMonth : next;
    const display = this.formatDiff(target.getTime() - now.getTime());
    document.querySelectorAll('.monthly-time').forEach(el => el.textContent = display);
  }

  updateDaysSinceLaunch() {
    const now = Date.now();
    document.querySelectorAll('.days-since-launch').forEach(el => {
      const launch = new Date(el.dataset.launch).getTime();
      const days = Math.max(0, Math.floor((now - launch) / MS_PER_DAY));
      el.textContent = days;
    });
  }

  updateDaysUntil() {
    const now = Date.now();
    document.querySelectorAll('.days-until').forEach(el => {
      const target = new Date(el.dataset.target).getTime();
      const days = Math.ceil((target - now) / MS_PER_DAY);
      el.textContent = days > 0 ? days : `+${Math.abs(days)}`;
    });
  }

  formatDiff(timeDiff) {
    if (timeDiff < 0) return 'Expired';
    const d = Math.floor(timeDiff / MS_PER_DAY);
    const h = Math.floor((timeDiff % MS_PER_DAY) / MS_PER_HOUR);
    const m = Math.floor((timeDiff % MS_PER_HOUR) / MS_PER_MINUTE);
    if (d > 0) return `${d}d ${h}h`;
    if (h > 0) return `${h}h ${m}m`;
    const s = Math.floor((timeDiff % MS_PER_MINUTE) / 1000);
    return `${m}:${String(s).padStart(2, '0')}`;
  }
}

new StarSaviorClockTimer();
