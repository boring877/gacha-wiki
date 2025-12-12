// Silver and Blood Redeem Codes API Endpoint
// Generates /data/silver-and-blood/redeem-codes.json

import { silverAndBloodRedeemCodes } from '../../../data/silver-and-blood/redeem-codes.js';

export const prerender = true;

export async function GET() {
  const response = {
    game: 'Silver and Blood',
    type: 'redeem-codes',
    description: 'Active and expired gift/promo codes for free in-game rewards',
    lastUpdated: new Date().toISOString().split('T')[0],
    activeCodes: silverAndBloodRedeemCodes.availableCodes.map(code => ({
      code: code.code,
      status: code.status,
      rewards: code.rewards,
      serverRestriction: code.serverRestriction,
      lastChecked: code.lastChecked,
      dateAdded: code.dateAdded,
    })),
    expiredCodes: (silverAndBloodRedeemCodes.expiredCodes || []).map(code => ({
      code: code.code,
      status: code.status,
      expiryDate: code.expiryDate,
    })),
    howToRedeem: silverAndBloodRedeemCodes.redeemInstructions?.steps?.map(step => ({
      title: step.title,
      description: step.description,
      substeps: step.substeps,
    })),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=1800',
    },
  });
}
