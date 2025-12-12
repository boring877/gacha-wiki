// Stella Sora Events API Endpoint
// Generates /data/stella-sora/events.json

import { stellaSoraEvents } from '../../../data/stella-sora/events.js';
import { stellaSoraShopEvents } from '../../../data/stella-sora/shop-events.js';

export const prerender = true;

export async function GET() {
  // Process general events
  const events = stellaSoraEvents.map(event => ({
    id: event.id,
    title: event.title,
    date: event.date,
    startDate: event.startDate,
    endDate: event.endDate,
    summary: event.summary,
    description: event.description,
    rewards: event.rewards,
    detailUrl: event.url,

    // Optional fields
    newContent: event.newContent,
    eventPeriod: event.eventPeriod,
    enemyInfo: event.enemyInfo,
    participation: event.participation,
    awards: event.awards,
    merchandise: event.merchandise,
    events: event.events,
    requirements: event.requirements,
  }));

  // Process shop events with detailed shop info
  const shopEvents = stellaSoraShopEvents.map(event => ({
    id: event.id,
    title: event.title,
    subtitle: event.subtitle,
    date: event.date,
    startDate: event.startDate,
    endDate: event.endDate,
    shopEndDate: event.shopEndDate,
    summary: event.summary,
    description: event.description,
    detailUrl: event.url,

    // Event currency
    currency: event.currency,

    // Shop items with full details
    shopItems: event.shopItems?.map(item => ({
      id: item.id,
      name: item.name,
      type: item.type,
      rarity: item.rarity,
      price: item.price,
      currency: item.currency?.name,
      stock: item.stock,
      quantity: item.quantity,
      description: item.description,
      featured: item.featured,
      category: item.category,
    })),

    // Quest system
    quests: event.quests
      ? {
          common: event.quests.common
            ? {
                title: event.quests.common.title,
                description: event.quests.common.description,
                completionRewards: event.quests.common.completionRewards,
                questCount: event.quests.common.quests?.length || 0,
                quests: event.quests.common.quests,
              }
            : null,
          challenge: event.quests.challenge
            ? {
                title: event.quests.challenge.title,
                description: event.quests.challenge.description,
                completionRewards: event.quests.challenge.completionRewards,
                questCount: event.quests.challenge.quests?.length || 0,
                quests: event.quests.challenge.quests,
              }
            : null,
          adventure: event.quests.adventure
            ? {
                title: event.quests.adventure.title,
                description: event.quests.adventure.description,
                completionRewards: event.quests.adventure.completionRewards,
                questCount: event.quests.adventure.quests?.length || 0,
                quests: event.quests.adventure.quests,
              }
            : null,
          special: event.quests.special
            ? {
                title: event.quests.special.title,
                description: event.quests.special.description,
                completionRewards: event.quests.special.completionRewards,
                questCount: event.quests.special.quests?.length || 0,
                quests: event.quests.special.quests,
              }
            : null,
        }
      : null,

    // Stage system
    stages: event.stages
      ? {
          normal: event.stages.normal
            ? {
                title: event.stages.normal.title,
                description: event.stages.normal.description,
                replayReward: event.stages.normal.replayReward,
                stageCount: event.stages.normal.stages?.length || 0,
                stages: event.stages.normal.stages,
                totalFirstClearRewards: event.stages.normal.totalFirstClearRewards,
                totalGemsRewards: event.stages.normal.totalGemsRewards,
              }
            : null,
          hard: event.stages.hard
            ? {
                title: event.stages.hard.title,
                description: event.stages.hard.description,
                replayReward: event.stages.hard.replayReward,
                stageCount: event.stages.hard.stages?.length || 0,
                stages: event.stages.hard.stages,
                totalFirstClearRewards: event.stages.hard.totalFirstClearRewards,
                totalGemsRewards: event.stages.hard.totalGemsRewards,
              }
            : null,
        }
      : null,

    rewards: event.rewards,
    highlights: event.highlights,
  }));

  const response = {
    game: 'Stella Sora',
    type: 'events',
    description:
      'Game events including version updates, limited events, and detailed shop events with items, quests, and stages',
    lastUpdated: new Date().toISOString().split('T')[0],
    events: {
      count: events.length,
      items: events,
    },
    shopEvents: {
      count: shopEvents.length,
      description:
        'Detailed shop events with currency info, purchasable items, quest systems, and stage progressions',
      items: shopEvents,
    },
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=1800',
    },
  });
}
