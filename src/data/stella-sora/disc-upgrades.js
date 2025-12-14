// Consolidated Disc Upgrade Data for Stella Sora
// This file consolidates all disc upgrade requirements from individual disc files

// ============================================
// DISC UPGRADE MATERIALS DATABASE
// ============================================

export const discUpgradeItems = {
  // Type 1: Eerie materials
  21071: { id: 21071, name: "Eerie Breath", rarity: 1, image: "item_21071" },
  21072: { id: 21072, name: "Phantom Step Remnant", rarity: 2, image: "item_21072" },
  21073: { id: 21073, name: "Frenzied Waltz Essence", rarity: 3, image: "item_21073" },

  // Type 2: Duloos materials
  21081: { id: 21081, name: "Duloos Breath", rarity: 1, image: "item_21081" },
  21082: { id: 21082, name: "Duloos Soul Remnant", rarity: 2, image: "item_21082" },
  21083: { id: 21083, name: "Duloos Essence", rarity: 3, image: "item_21083" },

  // Type 3: Faint Light materials
  21091: { id: 21091, name: "Faint Light Breath", rarity: 1, image: "item_21091" },
  21092: { id: 21092, name: "Emberflies Soul", rarity: 2, image: "item_21092" },
  21093: { id: 21093, name: "Flame Light Essence", rarity: 3, image: "item_21093" },
};

// Helper to generate slug from disc name
function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[★☆♥]/g, '')
    .replace(/'/g, '-')  // Convert apostrophe to hyphen (e.g., "Witch's" -> "witch-s")
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .trim();
}

// ============================================
// DISC UPGRADES DATA
// ============================================

import { disc as aMomentInTheAfternoon } from './discs/a-moment-in-the-afternoon.js';
import { disc as auspiciousGlow } from './discs/auspicious-glow.js';
import { disc as braveTheWind } from './discs/brave-the-wind.js';
import { disc as bubbles } from './discs/bubbles.js';
import { disc as cageOfRoses } from './discs/cage-of-roses.js';
import { disc as colorsPierceTheGrey } from './discs/colors-pierce-the-grey.js';
import { disc as crispMorning } from './discs/crisp-morning.js';
import { disc as dancingWithTheBones } from './discs/dancing-with-the-bones.js';
import { disc as deersSong } from './discs/deer-s-song.js';
import { disc as delusion } from './discs/delusion.js';
import { disc as dreamFactoryOfTruth } from './discs/dream-factory-of-truth.js';
import { disc as eclipse } from './discs/eclipse.js';
import { disc as elysium } from './discs/elysium.js';
import { disc as emeraldDream } from './discs/emerald-dream.js';
import { disc as fireworks } from './discs/fireworks.js';
import { disc as fistOfCourage } from './discs/fist-of-courage.js';
import { disc as flareFrenzy } from './discs/flare-frenzy.js';
import { disc as fortitude } from './discs/fortitude.js';
import { disc as grandFeast } from './discs/grand-feast.js';
import { disc as holidayBubble } from './discs/holiday-bubble.js';
import { disc as homewardPath } from './discs/homeward-path.js';
import { disc as indigoSunset } from './discs/indigo-sunset.js';
import { disc as leafHerToMe } from './discs/leaf-her-to-me.js';
import { disc as lemonBlackTea } from './discs/lemon-black-tea.js';
import { disc as lonelyDunes } from './discs/lonely-dunes.js';
import { disc as loveRiversCurse } from './discs/love-river-s-curse.js';
import { disc as meowRhythm } from './discs/meow-rhythm.js';
import { disc as meowingCatGod } from './discs/meowing-cat-god.js';
import { disc as miraculousAnthem } from './discs/miraculous-anthem.js';
import { disc as newStarPrelude } from './discs/new-star-prelude.js';
import { disc as oneShotOneDown } from './discs/one-shot-one-down.js';
import { disc as oneTwoThreeJump } from './discs/one-two-three-jump.js';
import { disc as pinkDream } from './discs/pink-dream.js';
import { disc as prayerBeneathLight } from './discs/prayer-beneath-light.js';
import { disc as pureWhite } from './discs/pure-white.js';
import { disc as rainyTune } from './discs/rainy-tune.js';
import { disc as rollingLife } from './discs/rolling-life.js';
import { disc as scorchingNightsEnd } from './discs/scorching-night-s-end.js';
import { disc as skyFlowersPoem } from './discs/sky-flowers-poem.js';
import { disc as sodaShopping } from './discs/soda-shopping.js';
import { disc as sparklingMoment } from './discs/sparkling-moment.js';
import { disc as starlitHope } from './discs/starlit-hope.js';
import { disc as starryNightOde } from './discs/starry-night-ode.js';
import { disc as steamSyndrome } from './discs/steam-syndrome.js';
import { disc as summerAfternoonRain } from './discs/summer-afternoon-rain.js';
import { disc as summerSanctuary } from './discs/summer-sanctuary.js';
import { disc as sunnyBreeze } from './discs/sunny-breeze.js';
import { disc as sweetCreek } from './discs/sweet-creek.js';
import { disc as sweetInvitation } from './discs/sweet-invitation.js';
import { disc as sweetTimes } from './discs/sweet-times.js';
import { disc as theClashOfBladeAndAxe } from './discs/the-clash-of-blade-and-axe.js';
import { disc as theKnightsSmith } from './discs/the-knight-s-smith.js';
import { disc as theMeow } from './discs/the-meow.js';
import { disc as theShining } from './discs/the-shining.js';
import { disc as thoseWithAmbition } from './discs/those-with-ambition.js';
import { disc as tranquilRetreat } from './discs/tranquil-retreat.js';
import { disc as twinMoonMischief } from './discs/twin-moon-mischief.js';
import { disc as unitedByFate } from './discs/united-by-fate.js';
import { disc as unknownFragrance } from './discs/unknown-fragrance.js';
import { disc as ventItOut } from './discs/vent-it-out.js';
import { disc as voyageBlueprint } from './discs/voyage-blueprint.js';
import { disc as whoopla } from './discs/whoopla.js';
import { disc as witchsSwing } from './discs/witch-s-swing.js';
import { disc as bamBamGirl } from './discs/bam-bam-girl.js';
import { disc as clawTheClaw } from './discs/claw-the-claw.js';
import { disc as daylightGarden } from './discs/daylight-garden.js';
import { disc as goodNight } from './discs/good-night.js';
import { disc as midnightMayhem } from './discs/midnight-mayhem.js';
import { disc as mysticBrushstrokes } from './discs/mystic-brushstrokes.js';
import { disc as ripplesOfNostalgia } from './discs/ripples-of-nostalgia.js';
import { disc as sunlitBlossom } from './discs/sunlit-blossom.js';
import { disc as swordAgainstStream } from './discs/sword-against-stream.js';
import { disc as theLostPilgrim } from './discs/the-lost-pilgrim.js';

// Collect all discs (only those that export 'disc' with upgrades data)
const allDiscs = [
  aMomentInTheAfternoon,
  auspiciousGlow,
  braveTheWind,
  bubbles,
  cageOfRoses,
  colorsPierceTheGrey,
  crispMorning,
  dancingWithTheBones,
  deersSong,
  delusion,
  dreamFactoryOfTruth,
  eclipse,
  elysium,
  emeraldDream,
  fireworks,
  fistOfCourage,
  flareFrenzy,
  fortitude,
  grandFeast,
  holidayBubble,
  homewardPath,
  indigoSunset,
  leafHerToMe,
  lemonBlackTea,
  lonelyDunes,
  loveRiversCurse,
  meowRhythm,
  meowingCatGod,
  miraculousAnthem,
  newStarPrelude,
  oneShotOneDown,
  oneTwoThreeJump,
  pinkDream,
  prayerBeneathLight,
  pureWhite,
  rainyTune,
  rollingLife,
  scorchingNightsEnd,
  skyFlowersPoem,
  sodaShopping,
  sparklingMoment,
  starlitHope,
  starryNightOde,
  steamSyndrome,
  summerAfternoonRain,
  summerSanctuary,
  sunnyBreeze,
  sweetCreek,
  sweetInvitation,
  sweetTimes,
  theClashOfBladeAndAxe,
  theKnightsSmith,
  theMeow,
  theShining,
  thoseWithAmbition,
  tranquilRetreat,
  twinMoonMischief,
  unitedByFate,
  unknownFragrance,
  ventItOut,
  voyageBlueprint,
  whoopla,
  witchsSwing,
  bamBamGirl,
  clawTheClaw,
  daylightGarden,
  goodNight,
  midnightMayhem,
  mysticBrushstrokes,
  ripplesOfNostalgia,
  sunlitBlossom,
  swordAgainstStream,
  theLostPilgrim,
];

// Process and export disc upgrades data sorted by name
export const discUpgrades = allDiscs
  .filter(disc => disc && disc.upgrades && disc.upgrades.length > 0)
  .map(disc => ({
    id: disc.id,
    name: disc.name,
    slug: generateSlug(disc.name),
    star: disc.star,
    element: disc.element,
    icon: disc.icon,
    upgrades: disc.upgrades,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

// Calculate total materials needed for a disc
export function calculateTotalMaterials(upgrades) {
  const totals = {
    items: {},
    dorra: 0
  };

  upgrades.forEach(upgrade => {
    if (upgrade.currency?.dorra) {
      totals.dorra += upgrade.currency.dorra;
    }

    upgrade.items?.forEach(item => {
      if (!totals.items[item.id]) {
        totals.items[item.id] = {
          id: item.id,
          name: item.name,
          quantity: 0
        };
      }
      totals.items[item.id].quantity += item.quantity;
    });
  });

  return totals;
}

// Export summary stats
export const discUpgradeStats = {
  totalDiscs: discUpgrades.length,
  by5Star: discUpgrades.filter(d => d.star === 5).length,
  by4Star: discUpgrades.filter(d => d.star === 4).length,
  by3Star: discUpgrades.filter(d => d.star === 3).length,
};
