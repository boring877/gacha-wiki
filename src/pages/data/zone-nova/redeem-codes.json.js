// Zone Nova Redeem Codes API Endpoint
// Generates /data/zone-nova/redeem-codes.json

import { zoneNovaRedeemCodes } from '../../../data/zone-nova/redeem-codes.js';

export const prerender = true;

export async function GET() {
  const response = {
    game: 'Zone Nova',
    type: 'redeem-codes',
    description: 'Active and expired gift/promo codes for free in-game rewards',
    lastUpdated: new Date().toISOString().split('T')[0],
    activeCodes: zoneNovaRedeemCodes.availableCodes.map(code => ({
      code: code.code,
      status: code.status,
      lastChecked: code.lastChecked,
      dateAdded: code.dateAdded,
    })),
    expiredCodes: zoneNovaRedeemCodes.expiredCodes.map(code => ({
      code: code.code,
      status: code.status,
      expiryDate: code.expiryDate,
    })),
    howToRedeem: zoneNovaRedeemCodes.redeemInstructions.steps.map(step => ({
      title: step.title,
      description: step.description,
      substeps: step.substeps,
    })),
    warnings: zoneNovaRedeemCodes.warnings,
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=1800', // 30 min cache for codes
    },
  });
}
