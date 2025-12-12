// Zone Nova Crafting Items API Endpoint
// Generates /data/zone-nova/crafting-items.json
// Crafting items for rune customization (Dice, Card, Laser Machine)

import {
  craftingItems,
  runeSubStats,
  runePositions,
  diceUsageTips,
} from '../../../data/zone-nova/crafting-items.js';

export const prerender = true;

export async function GET() {
  const response = {
    game: 'Zone Nova',
    type: 'crafting-items',
    description:
      'Complete guide to crafting items for rune customization including Dice, Card, and Laser Machine with usage tips and substat information',
    lastUpdated: new Date().toISOString().split('T')[0],

    // Summary
    summary: {
      totalItems: craftingItems.length,
      categories: [
        'Substat Reroll (Dice)',
        'Substat Selection (Card)',
        'Main Stat Selection (Laser)',
      ],
    },

    // Crafting items
    items: craftingItems.map(item => ({
      id: item.id,
      name: item.name,
      image: item.image,
      description: item.description,
      requirements: item.requirements || null,
      cost: item.cost || null,
      limit: item.limit || null,
      note: item.note || null,
      usage: item.usage,
    })),

    // Rune substat reference
    runeSubStats: runeSubStats.map(stat => ({
      type: stat.type,
      exampleValue: stat.exampleValue,
    })),

    // Rune position reference
    runePositions: runePositions.map(pos => ({
      position: pos.position,
      mainStatType: pos.mainStatType,
      description: pos.description,
    })),

    // Dice usage tips
    diceUsageTips: {
      highPriority: {
        stats: ['HP (%)', 'HP (Flat)', 'Critical Rate (%)', 'Critical Damage (%)'],
        reason: diceUsageTips.hpCritRateCritDamage.reason,
      },
      lowPriority: {
        stats: ['Attack (%)', 'Attack (Flat)', 'Defense (%)', 'Defense (Flat)'],
        reason: diceUsageTips.attackAndDefense.reason,
      },
      mediumPriority: {
        stats: ['Penetration (Flat)'],
        reason: diceUsageTips.penetration.reason,
      },
    },

    // Quick reference
    quickReference: {
      dice: {
        purpose: 'Reroll substat values',
        requirement: '+15 Rainbow rune',
        tip: 'Aim for Crit Damage > Crit Rate > HP',
      },
      card: {
        purpose: 'Choose substats when crafting',
        limit: '2 cards max per rune',
        tip: 'Use to guarantee important substats',
      },
      laserMachine: {
        purpose: 'Choose main stat when crafting',
        positions: '4, 5, 6 only',
        tip: 'Positions 1-3 have fixed main stats',
      },
    },

    // Important notes
    notes: [
      'You cannot have the same stats in main and sub stats',
      'All runes can roll any combination of sub stats',
      'Actual values depend on rune rarity and upgrade level',
      'Card is found in bag > crafting page',
      'Must click on rune type first before using Card',
    ],
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
