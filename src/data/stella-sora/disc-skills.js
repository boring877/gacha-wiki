// Stella Sora Disc Skills Data
// Consolidates all disc skill data for the disc skills database page
//
// Skill Types:
// - Melody Skill: The main skill that levels up with disc dupes (1-6 dupes = Lv.1-6)
// - Harmony Skills: Secondary skills unlocked with Melody Notes from support discs or Ascension

// Helper to generate slug from disc name
function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[★☆♥]/g, '')
    .replace(/'/g, '-')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .trim();
}

// Import all discs
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
// New discs
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

// Collect all discs
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
  // New discs
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

// Helper to format skill description by replacing placeholders with params
function formatDescription(description, params) {
  if (!description || !params || params.length === 0) return description;

  let formatted = description;
  // Replace {1}, {2}, etc. with corresponding params (1-indexed)
  params.forEach((param, index) => {
    const placeholder = `{${index + 1}}`;
    formatted = formatted.replace(new RegExp(placeholder.replace(/[{}]/g, '\\$&'), 'g'), param);
  });

  // Remove color tags for plain text version
  formatted = formatted.replace(/<color=[^>]*>([^<]*)<\/color>/g, '$1');
  // Replace vertical tab with newline for display
  formatted = formatted.replace(/\u000b/g, '\n');

  return formatted;
}

// Extract unique tags from all discs
function extractUniqueTags(discs) {
  const tags = new Set();
  discs.forEach(disc => {
    if (disc && disc.tag) {
      disc.tag.forEach(t => tags.add(t));
    }
  });
  return Array.from(tags).sort();
}

// Extract unique elements from all discs
function extractUniqueElements(discs) {
  const elements = new Set();
  discs.forEach(disc => {
    if (disc && disc.element) {
      elements.add(disc.element);
    }
  });
  return Array.from(elements).sort();
}

// Process and export disc skills data sorted by name
export const discSkills = allDiscs
  .filter(disc => disc && disc.mainSkill)
  .map(disc => ({
    id: disc.id,
    name: disc.name,
    slug: generateSlug(disc.name),
    star: disc.star,
    element: disc.element,
    tag: disc.tag || [],
    // Melody Skill - main skill that levels up with dupes
    melodySkill: {
      name: disc.mainSkill.name,
      icon: disc.mainSkill.icon,
      iconBackground: disc.mainSkill.iconBackground,
      description: disc.mainSkill.description,
      params: disc.mainSkill.params,
      // Pre-formatted descriptions for each dupe level (index 0 = base/no dupe, 1 = 1 dupe, etc.)
      formattedDescriptions: disc.mainSkill.params.map(levelParams =>
        formatDescription(disc.mainSkill.description, levelParams)
      ),
      // Max level is number of param sets (typically 6 for 5-star, varies for others)
      maxLevel: disc.mainSkill.params.length,
    },
    // Harmony Skills - secondary skills unlocked with Melody Notes
    harmonySkills: (disc.secondarySkills || []).map(skill => ({
      name: skill.name,
      icon: skill.icon,
      iconBackground: skill.iconBackground,
      description: skill.description,
      params: skill.params,
      // Requirements are the Melody Notes needed for each level
      requirements: skill.requirements,
      // Pre-formatted descriptions for each level
      formattedDescriptions: skill.params.map(levelParams =>
        formatDescription(skill.description, levelParams)
      ),
      maxLevel: skill.params.length,
    })),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

// Export unique tags for filtering
export const uniqueTags = extractUniqueTags(allDiscs);

// Export unique elements for filtering
export const uniqueElements = extractUniqueElements(allDiscs);

// Count stats
export const skillStats = {
  totalDiscs: discSkills.length,
  byRarity: {
    3: discSkills.filter(d => d.star === 3).length,
    4: discSkills.filter(d => d.star === 4).length,
    5: discSkills.filter(d => d.star === 5).length,
  },
  byElement: uniqueElements.reduce((acc, el) => {
    acc[el] = discSkills.filter(d => d.element === el).length;
    return acc;
  }, {}),
  withHarmonySkills: discSkills.filter(d => d.harmonySkills.length > 0).length,
};

export default discSkills;
