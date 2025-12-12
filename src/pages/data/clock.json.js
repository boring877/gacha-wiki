// Game Server Clocks API Endpoint
// Generates /data/clock.json

import { zoneNovaConfig } from '../../data/clock/zone-nova.js';
import { silverAndBloodConfig } from '../../data/clock/silver-and-blood.js';
import { horizonWalkerConfig } from '../../data/clock/horizon-walker.js';
import { stellaSoraConfig } from '../../data/clock/stella-sora.js';
import { bustyBurstConfig } from '../../data/clock/busty-burst.js';

export const prerender = true;

export async function GET() {
  const games = [
    // Zone Nova
    {
      id: zoneNovaConfig.id,
      name: zoneNovaConfig.name,
      launchDate: zoneNovaConfig.launchDate,
      displayDate: zoneNovaConfig.displayDate,
      hasRegions: zoneNovaConfig.hasRegions,
      defaultRegion: zoneNovaConfig.currentRegion,
      clockPage: '/clock/zone-nova',
      regions: Object.entries(zoneNovaConfig.regions).map(([key, region]) => ({
        id: key,
        name: region.name,
        resetTime: {
          hour: region.resetHour,
          minute: region.resetMinute,
          description: region.status,
        },
      })),
      maintenance: zoneNovaConfig.timers?.['ero-labs']?.maintenance
        ? {
            start: zoneNovaConfig.timers['ero-labs'].maintenance.startDate,
            end: zoneNovaConfig.timers['ero-labs'].maintenance.endDate,
            duration: zoneNovaConfig.timers['ero-labs'].maintenance.duration,
            subtitle: zoneNovaConfig.timers['ero-labs'].maintenance.subtitle,
          }
        : null,
      guildWar: zoneNovaConfig.timers?.['ero-labs']?.guildWar
        ? {
            firstStart: zoneNovaConfig.timers['ero-labs'].guildWar.firstGuildWarStart,
            cycleDays: zoneNovaConfig.timers['ero-labs'].guildWar.cycleDays,
            battlesPerSeason: zoneNovaConfig.timers['ero-labs'].guildWar.battlesPerSeason,
          }
        : null,
    },

    // Silver and Blood
    {
      id: silverAndBloodConfig.id,
      name: silverAndBloodConfig.name,
      launchDate: silverAndBloodConfig.launchDate,
      displayDate: silverAndBloodConfig.displayDate,
      hasRegions: silverAndBloodConfig.hasRegions,
      defaultRegion: silverAndBloodConfig.currentRegion,
      clockPage: '/clock/silver-and-blood',
      regions: Object.entries(silverAndBloodConfig.regions).map(([key, region]) => ({
        id: key,
        name: region.name,
        timezone: region.utcLabel,
        resetTime: {
          hour: region.resetHour,
          minute: region.resetMinute,
          description: region.status?.replace(/<br\s*\/?>/gi, ' '),
        },
      })),
      events: silverAndBloodConfig.timers?.us?.events?.map(event => ({
        name: event.name,
        startDate: event.startDate,
        endDate: event.endDate,
        displayPeriod: `${event.startDisplay} - ${event.endDisplay}`,
      })),
    },

    // Horizon Walker
    {
      id: horizonWalkerConfig.id,
      name: horizonWalkerConfig.name,
      launchDate: horizonWalkerConfig.launchDate,
      displayDate: horizonWalkerConfig.displayDate,
      steamLaunchDate: horizonWalkerConfig.steamLaunchDate,
      steamDisplayDate: horizonWalkerConfig.steamDisplayDate,
      hasRegions: false,
      clockPage: '/clock/horizon-walker',
      server: {
        name: horizonWalkerConfig.server.name,
        timezone: `UTC+${horizonWalkerConfig.server.timezone}`,
        resetTime: {
          hour: horizonWalkerConfig.server.resetHour,
          minute: horizonWalkerConfig.server.resetMinute,
          description: horizonWalkerConfig.server.status,
        },
      },
      weeklyResetDay: horizonWalkerConfig.weeklyResetDay,
      maintenance: horizonWalkerConfig.maintenance
        ? {
            date: horizonWalkerConfig.maintenance.date,
            duration: horizonWalkerConfig.maintenance.duration,
            subtitle: horizonWalkerConfig.maintenance.subtitle,
          }
        : null,
    },

    // Stella Sora
    {
      id: stellaSoraConfig.id,
      name: stellaSoraConfig.name,
      shortName: stellaSoraConfig.shortName,
      launchDate: stellaSoraConfig.launchDate,
      displayDate: stellaSoraConfig.displayDate,
      hasRegions: false,
      clockPage: '/clock/stella-sora',
      server: {
        name: stellaSoraConfig.server.name,
        timezone: stellaSoraConfig.server.timezone,
        resetTime: {
          hour: stellaSoraConfig.server.resetHour,
          minute: stellaSoraConfig.server.resetMinute,
          description: stellaSoraConfig.server.status,
        },
      },
      weeklyResetDay: stellaSoraConfig.weeklyResetDay,
      maintenance: stellaSoraConfig.maintenance
        ? {
            start: stellaSoraConfig.maintenance.start,
            end: stellaSoraConfig.maintenance.end,
            duration: stellaSoraConfig.maintenance.duration,
            subtitle: stellaSoraConfig.maintenance.subtitle,
          }
        : null,
      currentEvent: stellaSoraConfig.event
        ? {
            name: stellaSoraConfig.event.name,
            start: stellaSoraConfig.event.start,
            durationEnd: stellaSoraConfig.event.durationEnd,
            shopEnd: stellaSoraConfig.event.shopEnd,
            subtitle: stellaSoraConfig.event.subtitle,
          }
        : null,
      banners: stellaSoraConfig.banners
        ? Object.entries(stellaSoraConfig.banners).map(([key, banner]) => ({
            id: key,
            title: banner.title,
            character: banner.character,
            disc: banner.disc,
            startDate: banner.startDate,
            endDate: banner.endDate,
            type: banner.type,
          }))
        : [],
      timers: {
        weeklyReset: stellaSoraConfig.timers?.weeklyReset,
        monthlyReset: stellaSoraConfig.timers?.monthlyReset,
      },
    },

    // Busty Burst
    {
      id: bustyBurstConfig.id,
      name: bustyBurstConfig.name,
      shortName: bustyBurstConfig.shortName,
      launchDate: bustyBurstConfig.launchDate,
      displayDate: bustyBurstConfig.displayDate,
      hasRegions: false,
      clockPage: '/clock/busty-burst',
      server: {
        name: bustyBurstConfig.server.name,
        timezone: bustyBurstConfig.server.timezone,
        resetTime: {
          hour: bustyBurstConfig.server.resetHour,
          minute: bustyBurstConfig.server.resetMinute,
          description: bustyBurstConfig.server.status,
        },
      },
      maintenance: bustyBurstConfig.maintenance
        ? {
            start: bustyBurstConfig.maintenance.start,
            end: bustyBurstConfig.maintenance.end,
            duration: bustyBurstConfig.maintenance.duration,
            subtitle: bustyBurstConfig.maintenance.subtitle,
          }
        : null,
      timers: {
        weeklyReset: bustyBurstConfig.timers?.weeklyReset,
        monthlyReset: bustyBurstConfig.timers?.monthlyReset,
      },
    },
  ];

  const response = {
    name: 'Game Server Clocks',
    type: 'clock',
    description:
      'Server reset times, maintenance schedules, event timers, and banner countdowns for all games. Times are in UTC unless otherwise specified.',
    lastUpdated: new Date().toISOString().split('T')[0],
    usage: {
      note: 'All times are in ISO 8601 format (UTC). Convert to local timezone as needed.',
      resetCalculation:
        'To calculate next reset: find next occurrence of resetTime.hour:resetTime.minute in UTC',
    },
    games,
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=1800',
    },
  });
}
