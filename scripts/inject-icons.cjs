// Match wiki skill names to game parentNames and inject gameKey + icon into character data
// Data chain: Hero.json -> HeroClass.json -> SkillList.json -> icon + ko-KR.json -> Korean name
// Matching priority: 1) existing gameKey  2) exact normalized name  3) gameKey from damage value
// NO fuzzy matching - only deterministic matches

const hero = require('D:/horizon-walker-output/decrypted/Hero.json');
const hc = require('D:/horizon-walker-output/decrypted/HeroClass.json');
const skl = require('D:/horizon-walker-output/decrypted/SkillList.json');
const ko = require('D:/horizon-walker-output/decrypted/ko-KR.json');
const fs = require('fs');
const path = require('path');

const nameToIcon = {};
skl.forEach(e => { if(e[22]) nameToIcon[e[2]] = e[22]; });
const hcById = {};
hc.forEach(e => { hcById[e[0]] = e; });

// Build game data: heroName -> [{ parentName, krName, icon }]
const gameData = {};
hero.forEach(h => {
  const heroName = h[5];
  const tiers = h[14];
  if (!tiers) return;
  tiers.forEach(tier => {
    const hcId = tier[1][0];
    const hcEntry = hcById[hcId];
    if (!hcEntry || !hcEntry[5] || !hcEntry[5][0]) return;
    hcEntry[5][0].forEach(pn => {
      if (pn === 'Character_Common_Waiting') return;
      const icon = nameToIcon[pn];
      const krName = ko['SkillList.SkillName.' + pn] || '';
      if (icon) {
        if (!gameData[heroName]) gameData[heroName] = [];
        if (!gameData[heroName].find(s => s.parentName === pn)) {
          gameData[heroName].push({ parentName: pn, krName, icon });
        }
      }
    });
  });
});

// Load skill-levels.js to get known gameKey values
const skillLevelsContent = fs.readFileSync('C:/Users/Borin/OneDrive/Documents/gacha-wiki/src/data/horizon-walker/skill-levels.js', 'utf8');
const knownGameKeys = new Set();
const gm = skillLevelsContent.matchAll(/SKILL_LEVELS\['([^']+)'\]/g);
for (const m of gm) knownGameKeys.add(m[1]);

// Wiki hero name -> game hero name mapping
const wikiToGame = {
  'Maximilia': 'Maximilia',
  'Echidna': 'Echidna',
  'Araha': 'Araha',
  'Bella': 'Bella',
  'Berga': 'Berga',
  'Canisk': 'Canisk',
  'Cora': 'Cora',
  'Delia': 'Delia',
  'Efreeti': 'Efreeti',
  'Erneste': 'Erneste',
  'Eugenia': 'Eugenia',
  'Everette': 'Everette',
  'Fammene': 'Fammene',
  'Griselda': 'Griselda',
  'Gulam': 'Gulam',
  'Gulsni': 'Gulsni',
  'Headless Knight': 'CutThroatKnight',
  'Ines': 'Ines',
  'Juha': 'Juha',
  'Kalina': 'Kalina',
  'Kalma': 'Kalma',
  'Kaul': 'Kaul',
  'Kilon': 'Kilon',
  'Kim Ga-young': 'KimGayeong',
  'Korabi': 'Korabi',
  'Leah': 'Leah',
  'Lisandria': 'Lisandria',
  'Luise': 'Luise',
  'Mahari': 'Mahari',
  'Marhim': 'Marhim',
  'Marika': 'Marika',
  'Matrotho': 'Matrotho',
  'Min Eun-sol': 'MinEunsol',
  'Mira': 'Mira',
  'Mirana': 'Mirana',
  'Nari': 'Nari',
  'Nika': 'Nika',
  'Nonoha': 'Nonoha',
  'Nymset': 'Nymset',
  'Olivia': 'Olivia',
  'Osla': 'Osla',
  'Palekar': 'Palekar',
  'Pantheri': 'Pantheri',
  'Platina': 'Platina',
  'Rhasadina': 'Rhasadina',
  'Re-De-Da': 'Re-De-Da',
  'Samarika': 'Samarika',
  'So Joo-hee': 'SoJoohee',
  'TX - Manticore': 'TX_Manticore',
  'Valeta': 'Valeta',
  'Vlissing': 'Vlissing',
  'Yeon Chae-young': 'YeonChaeYoung',
  'Yeonwoo': 'Yeonwoo',
  'Yui': 'Yui',
  'Yvonna': 'Yvonna',
};

function findGameName(wikiName) {
  if (wikiToGame[wikiName]) return wikiToGame[wikiName];
  if (gameData[wikiName]) return wikiName;
  const norm = wikiName.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (const gn of Object.keys(gameData)) {
    if (gn.toLowerCase().replace(/[^a-z0-9]/g, '') === norm) return gn;
  }
  return null;
}

function normalize(s) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Split PascalCase into lowercase words
function pascalToWords(s) {
  return s.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2').toLowerCase().split(/[^a-z0-9]+/).filter(w => w.length >= 3);
}

// Split wiki name into lowercase words (strip possessives, articles, etc.)
function wikiToWords(s) {
  return s.toLowerCase().replace(/'s/g, '').replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(w => w.length >= 3);
}

// Comprehensive manual mapping: wikiSkillKey@wikiName -> gameParentName
// Built by analyzing semantic correspondence between English wiki names and game internal names
const manualMapping = {
  // Araha
  'supportFire@Araha': 'ShootingSupport',
  'wireManeuverShot@Araha': 'WireShot',
  // Bella
  'guardiansStrike@Bella': 'ProtectiveStrike',
  'graceOfHealing@Bella': 'CuringGrace',
  'lifeRegeneration@Bella': 'VitalityRegeneration',
  'revivingBoughSkill@Bella': 'BranchResurrection',
  // Berga
  'hideSplitter@Berga': 'CuttingLeather',
  'giantsLeap@Berga': 'LeapOfTheGiant',
  'adaptiveMuscle@Berga': 'AdaptiveMuscles',
  'bladeStorm@Berga': 'StormEdge',
  'oathOfPunishmentAndCrushing@Berga': 'OathOfRetributionandCrushing',
  // Canisk
  'brotherhoodsStrike@Canisk': 'StrikeOfBrotherhood',
  'thousandArmsStance@Canisk': 'ThousandArmed',
  'tauntingRoar@Canisk': 'CryOfProvoke',
  'splitTheCrown@Canisk': 'CrownSplitting',
  // Cora
  'spatialShift@Cora': 'SpaceWarp',
  'forbiddenLand@Cora': 'ProhibitedPlace',
  // Delia
  'spatialShift@Delia': 'SpaceWarp',
  'starlightGaze@Delia': 'SummonStarlight',
  'warpedStarlight@Delia': 'DistortedStarlight',
  'castStarlightShower@Delia': 'CastingStarlightShower',
  // Echidna
  'arcanePurge@Echidna': 'ArcaneBaptism',
  'toxicCarrier@Echidna': 'SpiritsToxicPayload',
  'fleshEatingFroth@Echidna': 'FleshEatingFoamActive',
  'comfortingVenom@Echidna': 'PeacefulPoison',
  'lingeringMiasma@Echidna': 'LingeringPoison',
  // Efreeti
  'arcanePurge@Efreeti': 'ArcaneBaptism',
  'emberVortex@Efreeti': 'BlazingVortex',
  'blazingMandate@Efreeti': 'BlazingDiscipline',
  'eternalFlamestorm@Efreeti': 'ProminenceStorm',
  'pactOfFlame@Efreeti': 'EmberCovenant',
  // Erneste
  'poleBreak@Erneste': 'PoleBreaking',
  'gottaProtectMyself@Erneste': 'ProtectMyself',
  'formationDestruction@Erneste': 'FormationBreakdown',
  'crisisToOpportunity@Erneste': 'TurnCrisisIntoOpportunity',
  // Everette
  'spatialShift@Everette': 'SpaceWarp',
  'starlightGaze@Everette': 'SummonStarlight',
  'delayedAurora@Everette': 'DistortedStarlight',
  'warpedStarlight@Everette': 'CastingStarlightShower',
  'castStarlightShower@Everette': 'CastingStarlightShower',
  'starlightShower@Everette': 'CastingStarlightShower',
  'starlightShowerUltimate@Everette': 'CastingStarlightShower',
  // Fammene
  'bladewind@Fammene': 'WindEdge',
  'windsGathering@Fammene': 'WindGathering',
  'windShield@Fammene': 'WindBarrier',
  'monsoon@Fammene': 'SeasonalWind',
  // Griselda
  'arcanePurge@Griselda': 'ArcaneBaptism',
  'undefinedSpace@Griselda': 'UncertainSpace',
  'certainFortune@Griselda': 'DeterminedLuck',
  'reversalOfCausality@Griselda': 'ReversedCausality',
  // Gulam
  'undergroundTwinSwords@Gulam': 'DualSwordThrust',
  'burrow@Gulam': 'TunnelMovement',
  'undergroundEvasion@Gulam': 'EvasiveTechniqueUnderGround',
  'lostElegance@Gulam': 'StyleLosing',
  'explodingElegance@Gulam': 'StyleExplosion',
  // Gulsni
  'undergroundTwinSwords@Gulsni': 'DualSwordThrust',
  'burrow@Gulsni': 'TunnelMovement',
  'undergroundDefenseTechniques@Gulsni': 'DefenseTechniqueUnderGround',
  'undergroundExplosion@Gulsni': 'BangingExplosionUnderGround',
  // Headless Knight
  'sicle@Headless Knight': 'Chop',
  'noDefiance@Headless Knight': 'NoRebellion',
  'decapitation@Headless Knight': 'Execution',
  'rake@Headless Knight': 'Harvest',
  // Ines
  'skyCleaver@Ines': 'CuttingSky',
  'worldCleaver@Ines': 'DividingWorld',
  'naturalForm@Ines': 'NaturalBody',
  'dividingTheEarth@Ines': 'DividingWorld',
  // Juha
  'militaryShooting@Juha': 'StandardizedShooting',
  'combatRoll@Juha': 'RollingMove',
  'mentalCorrosion@Juha': 'SpiritDecay',
  'blazingZeal@Juha': 'BurningFanaticism',
  'theExecutioner@Juha': 'EnforcementShooter',
  'brothersAndSistersOfFaith@Juha': 'FaithfulBrothersAndSisters',
  // Kalina
  'harpeArt@Kalina': 'HarpeSlash',
  'hunterOnVine@Kalina': 'RangerOnTheVine',
  'assault@Kalina': 'DescentRaid',
  'bladesOfTyranny@Kalina': 'BladeOfTyranny',
  // Kalma
  'boltSlash@Kalma': 'LightningEdge',
  'chargeAccumulation@Kalma': 'VoltWeave',
  'boltChaser@Kalma': 'FollowingThunderBolt',
  'lightningCascade@Kalma': 'SpreadingLightning',
  'ragingThunderstorm@Kalma': 'RagingLightningStorm',
  'flashbreak@Kalma': 'OpeningMoment',
  // Kaul
  'gapStab@Kaul': 'StingTheGap',
  'recklessLeap@Kaul': 'DaringLeap',
  'timeToFeast@Kaul': 'TimeToEnjoy',
  'masochisticFrenzy@Kaul': 'Masochism',
  'slaughterTheWeak@Kaul': 'ThrillingShiver',
  'irresistibleUrge@Kaul': 'ThrillingShiver',
  'thrillOfAgony@Kaul': 'ThrillingShiver',
  // Kilon
  'brotherhoodsStrike@Kilon': 'StrikeOfBrotherhood',
  'thousandArmsStance@Kilon': 'ThousandArmed',
  'tauntingRoar@Kilon': 'CryOfProvoke',
  'splitTheCrown@Kilon': 'CrownSplitting',
  // Kim Ga-young
  'supportFire@Kim Ga-young': 'ShootingSupport',
  'wireManeuverShot@Kim Ga-young': 'WireShot',
  // Korabi
  'bloodPact@Korabi': 'BloodContract',
  'crimsonCurse@Korabi': 'BloodCurse',
  'whirlwindOfBloodlust@Korabi': 'CycloneOfVitality',
  // Leah
  'soulflameStrike@Leah': 'SpiritfireDescent',
  'sereneEye@Leah': 'SilentShadowsEye',
  'swiftpawsBlessing@Leah': 'SwiftCatsBlessing',
  'spiritclawRite@Leah': 'SpiritCatRite',
  'soulflameFury@Leah': 'SpiritfireClaw',
  // Lisandria
  'spinningSlash@Lisandria': 'MoulinetAndCut',
  'swordOfTheUnknown@Lisandria': 'SwordOfUnknown',
  'exorcistsCrusade@Lisandria': 'HolyWarOfExorcism',
  // Luise
  'flameArrow@Luise': 'FireBolt',
  'ember@Luise': 'FireFlakes',
  'fireflakeExplosion@Luise': 'FireFlakesExplosion',
  'blazeOfAscension@Luise': 'SoaringFire',
  // Mahari
  'gapStab@Mahari': 'StingTheGap',
  'resolveOfReversal@Mahari': 'BurningTheFightingSpiritForAReversal',
  'willOfResistance@Mahari': 'WillToResist',
  // Marhim
  'catAttack@Marhim': 'CatLikeRaid',
  'markOfSilentBlood@Marhim': 'MarkOfBloodInSecret',
  'bloodsoakedExecution@Marhim': 'ExecutionOfBloodiness',
  'crimsonTerror@Marhim': 'BloodRedFear',
  // Matrotho
  'sabreStrike@Matrotho': 'ArmingSwordAttack',
  'determination@Matrotho': 'MindCatchUp',
  'nomination@Matrotho': 'OpponentsNomination',
  'swordOfTheFlowingRiver@Matrotho': 'SwordOfTheRiverFlows',
  // Min Eun-sol
  'devourWill@Min Eun-sol': 'LifeWillEater',
  'kingsFavor@Min Eun-sol': 'KingsConcern',
  'kingsWrath@Min Eun-sol': 'KingsAnger',
  // Nari
  'skill1@Nari': 'StandardizedShooting',
  'skill2@Nari': 'RollingMove',
  'skill3@Nari': 'PrecisionFiringPosition',
  'skill4@Nari': 'FocusFiring',
  'skill5@Nari': 'DeathBulletOfPenetration',
  'skill6@Nari': 'SilentInside',
  // Nika
  'catAttack@Nika': 'CatLikeRaid',
  'poisonArrow@Nika': 'ToxicBolt',
  'lethalPoison@Nika': 'DeadlyPoison',
  // Nonoha
  'bladewind@Nonoha': 'WindEdge',
  'windsGathering@Nonoha': 'WindGathering',
  'windShield@Nonoha': 'WindBarrier',
  'monsoon@Nonoha': 'SeasonalWind',
  // Nymset
  'guardiansStrike@Nymset': 'ProtectiveStrike',
  'graceOfHealing@Nymset': 'CuringGrace',
  'consecratedDomain@Nymset': 'SanctuaryProclamation',
  'divineTongue@Nymset': 'HolyWord',
  // Olivia
  'skyCleaver@Olivia': 'CuttingSky',
  'worldCleaver@Olivia': 'DividingWorld',
  'limitlessForm@Olivia': 'InfiniteBody',
  'ascendantThousandfoldExecution@Olivia': 'StandingLikeSky',
  'thousandExecution@Olivia': 'StandingLikeSky',
  // Osla
  'hideSplitter@Osla': 'CuttingLeather',
  'predatoryRange@Osla': 'PredatoryDistance',
  'afflictPain@Osla': 'Threatening',
  'cryOfTheAncients@Osla': 'CryOfTheAncientTimes',
  'endlessMalice@Osla': 'EndlessKillingAura',
  // Palekar
  'danceOfPrimalGrace@Palekar': 'CircleDance',
  'bladeDance@Palekar': 'DanceOfBlades',
  'trajectoryOfSeverance@Palekar': 'TrailOfFatality',
  'verseOfOrdeal@Palekar': 'QuotesAboutTrials',
  'relentlessSworddance@Palekar': 'UnendingSwordDance',
  // Pantheri
  'sabreStrike@Pantheri': 'ArmingSwordAttack',
  'determination@Pantheri': 'MindCatchUp',
  'outlawsMockery@Pantheri': 'OutlawsTaunt',
  'masterOfSkirmish@Pantheri': 'MeleeMaster',
  'thatOneStrike@Pantheri': 'OnlyOneStrike',
  // Platina
  'shieldBash@Platina': 'ShieldCharging',
  'songOfTheSword@Platina': 'SongOfSword',
  'gravityFall@Platina': 'GravitationalDrop',
  'heartOfPlatinum@Platina': 'PlatinumCore',
  // Rhasadina
  'fruitThrow@Rhasadina': 'ThrowingFruit',
  'aspectShift@Rhasadina': 'PhaseShift',
  'finalFortune@Rhasadina': 'LastLuck',
  // Samarika
  'skill1@Samarika': 'HarpeSlash',
  'skill2@Samarika': 'RangerOnTheVine',
  'skill3@Samarika': 'BogDownPrey',
  'skill4@Samarika': 'TheFangsOfABog',
  // So Joo-hee
  'pistolFire@So Joo-hee': 'AkimboShot',
  'conceal@So Joo-hee': 'Ambush',
  'massExecution@So Joo-hee': 'AllOutExecution',
  'unavoidableEyes@So Joo-hee': 'InevitableSight',
  // TX - Manticore
  'designatedFire@TX - Manticore': 'PointAndShoot',
  'tacticalClearing@TX - Manticore': 'TacticalSecurity',
  'openFire@TX - Manticore': 'VolleyFiring',
  'airspaceRadar@TX - Manticore': 'AirspaRadar',
  'delayedBombardment@TX - Manticore': 'DelayedBombing',
  'detectionShot@TX - Manticore': 'PointAndShoot',
  // Valeta
  'spinningSlash@Valeta': 'MoulinetAndCut',
  'swordOfTheUnknown@Valeta': 'SwordOfUnknown',
  'exorcistsCrusade@Valeta': 'HolyWarOfExorcism',
  'thornwhipOfJudgment@Valeta': 'CheckDarkSacrament',
  // Vlissing
  'ebbAndFlow@Vlissing': 'TurnWaterWay',
  // Yeon Chae-Young
  'pistolFire@Yeon Chae-Young': 'AkimboShot',
  'conceal@Yeon Chae-Young': 'Ambush',
  'massExecution@Yeon Chae-Young': 'AllOutExecution',
  'unavoidableEyes@Yeon Chae-Young': 'InevitableSight',
  // Yeonwoo
  'gluttonsMight@Yeonwoo': 'ThePowerOfGluttony',
  'snackTime@Yeonwoo': 'TakeItOutAndEatIt',
  'leapingChomp@Yeonwoo': 'JumpAndAttack',
  'allFueledUp@Yeonwoo': 'BecauseIAteItRight',
  'oneForTheRoad@Yeonwoo': 'EatAndGo',
  'boomBoomSlam@Yeonwoo': 'TheEmbodimentOfGluttony',
  'avatarOfGluttony@Yeonwoo': 'TheEmbodimentOfGluttony',
  'yumYummyBeam@Yeonwoo': 'TheEmbodimentOfGluttony',
  // Yvonna
  'surroundingFrost@Yvonna': 'SharpWave',
  'shroudOfFrost@Yvonna': 'CounterWave',
  'freezingGrasp@Yvonna': 'FreezingGrasph',
  'frostResonance@Yvonna': 'SensingResponseAboutFrost',
  'gatheredFrost@Yvonna': 'GreatColdWave',
  'theColdsnap@Yvonna': 'GreatColdWave',
};

// Process each wiki character file
const charsDir = 'C:/Users/Borin/OneDrive/Documents/gacha-wiki/src/data/horizon-walker/characters';
const files = fs.readdirSync(charsDir).filter(f => f.endsWith('.js') && f !== 'emilia.js');

let totalSkills = 0, matched = 0, updated = 0, unmatched = 0;
const unmatchedList = [];
const matchedList = [];

files.forEach(f => {
  const filePath = path.join(charsDir, f);
  let content = fs.readFileSync(filePath, 'utf8');

  const nameMatch = content.match(/name:\s*'([^']+)'/) || content.match(/name:\s*"([^"]+)"/);
  if (!nameMatch) return;
  const wikiName = nameMatch[1];

  const gameName = findGameName(wikiName);
  if (!gameName || !gameData[gameName]) {
    console.log('NO GAME DATA for ' + wikiName + ' (tried: ' + gameName + ')');
    return;
  }
  const gameSkills = gameData[gameName];
  const usedGameSkills = new Set();

  const sm = content.match(/skills:\s*\{([\s\S]*?)\n  \}/);
  if (!sm) return;

  let cur = null, curGK = null, curIC = false;
  const wikiSkills = [];
  sm[1].split('\n').forEach(l => {
    const km = l.match(/^\s{4}(\w+):\s*\{/);
    if (km) { cur = km[1]; curGK = null; curIC = false; }
    if (cur) {
      const n = l.match(/name:\s*'([^']+)'/) || l.match(/name:\s*"([^"]+)"/);
      const g = l.match(/gameKey:\s*'([^']+)'/) || l.match(/gameKey:\s*"([^"]+)"/);
      const ic = l.match(/icon:\s*'([^']+)'/) || l.match(/icon:\s*"([^"]+)"/);
      if (g) curGK = g[1];
      if (ic) curIC = true;
      if (n) {
        wikiSkills.push({
          key: cur,
          name: n[1],
          gameKey: curGK,
          hasIcon: curIC
        });
        cur = null;
      }
    }
  });

  // First pass: match skills with existing gameKey (highest confidence)
  // Second pass: match remaining by exact name
  // Third pass: match remaining by manual mapping
  // This prevents a gameKey-less skill from stealing a gameKey'd skill's match

  const results = new Map();

  // Pass 1: gameKey matches
  wikiSkills.forEach(ws => {
    if (!ws.gameKey) return;
    const found = gameSkills.find(s => s.parentName === ws.gameKey && !usedGameSkills.has(s.parentName));
    if (found) {
      results.set(ws.key, { ...found, method: 'gameKey' });
      usedGameSkills.add(found.parentName);
    }
  });

  // Pass 2: exact normalized name matches
  wikiSkills.forEach(ws => {
    if (results.has(ws.key)) return;
    const wikiNorm = normalize(ws.name);
    const found = gameSkills.find(s => !usedGameSkills.has(s.parentName) && normalize(s.parentName) === wikiNorm);
    if (found) {
      results.set(ws.key, { ...found, method: 'exact' });
      usedGameSkills.add(found.parentName);
    }
  });

  // Pass 3: manual mapping
  wikiSkills.forEach(ws => {
    if (results.has(ws.key)) return;
    const lookup = ws.key + '@' + wikiName;
    const target = manualMapping[lookup];
    if (target) {
      const found = gameSkills.find(s => s.parentName === target && !usedGameSkills.has(s.parentName));
      if (found) {
        results.set(ws.key, { ...found, method: 'manual' });
        usedGameSkills.add(found.parentName);
      } else {
        // Game skill already used by a higher-priority pass, or not found
        // Try to find it even if used (the higher-priority match might be wrong)
        const foundAny = gameSkills.find(s => s.parentName === target);
        if (foundAny) {
          results.set(ws.key, { ...foundAny, method: 'manual' });
          // Don't add to usedGameSkills since it's already used
        }
      }
    }
  });

  // Apply results
  wikiSkills.forEach(ws => {
    totalSkills++;
    const result = results.get(ws.key);
    if (result) {
      matched++;
      let modified = false;

      if (!ws.gameKey) {
        const pattern = new RegExp('(    ' + ws.key + ':\\s*\\{\\s*\\n)(      name:)');
        if (pattern.test(content)) {
          content = content.replace(pattern, '$1      gameKey: \'' + result.parentName + '\',\n$2');
          ws.gameKey = result.parentName;
          modified = true;
        }
      }

      if (!ws.hasIcon) {
        const iconField = 'icon: \'' + result.icon + '\'';
        if (ws.gameKey) {
          const gkPattern = new RegExp("(      gameKey: '" + (ws.gameKey || result.parentName).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "',\\s*\\n)(      name:)");
          if (gkPattern.test(content)) {
            content = content.replace(gkPattern, '$1      ' + iconField + ',\n$2');
            modified = true;
          }
        } else {
          const pattern2 = new RegExp('(    ' + ws.key + ':\\s*\\{\\s*\\n)(      name:)');
          if (pattern2.test(content)) {
            content = content.replace(pattern2, '$1      ' + iconField + ',\n$2');
            modified = true;
          }
        }
      }

      if (modified) {
        updated++;
        fs.writeFileSync(filePath, content);
      }

      matchedList.push(wikiName + '.' + ws.key + ': ' + ws.name + ' -> ' + result.parentName + ' [' + result.method + '] -> ' + result.icon);
    } else {
      unmatched++;
      unmatchedList.push(wikiName + ': ' + ws.name + ' (gameKey: ' + ws.gameKey + ', available: ' + gameSkills.filter(s => !usedGameSkills.has(s.parentName)).map(s => s.parentName).join(', ') + ')');
    }
  });
});

console.log('=== RESULTS ===');
console.log('Total wiki skills:', totalSkills);
console.log('Matched:', matched);
console.log('Updated:', updated);
console.log('Unmatched:', unmatched);
console.log();
console.log('Matched skills:');
matchedList.forEach(s => console.log('  ' + s));
console.log();
if (unmatchedList.length > 0) {
  console.log('UNMATCHED skills (need manual review):');
  unmatchedList.forEach(s => console.log('  ' + s));
}
