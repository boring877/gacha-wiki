// Journey event choices data - all non-NPC/Bunny reward events with requirements, rewards, and best choice analysis

export const JOURNEY_EVENTS = [
  {
    id: 'noa-breaktime',
    category: 'Choice',
    name: 'Rare Day Off',
    description: 'It was a rare day off, but nothing in particular came to mind to do.',
    choices: [
      {
        text: "Let's go try that limited-time dessert!",
        best: false,
        requirement: { type: 'coin', cost: 50 },
        rewards: [
          { type: 'Condition', label: 'Condition +2', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
      {
        text: 'How about watching the new movie that came out?',
        best: true,
        requirement: { type: 'coin', cost: 30 },
        rewards: [
          { type: 'PP', label: 'PP +30', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: "Should we pack some sandwiches and go on a picnic?",
        best: false,
        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'Stat', label: 'Endurance +20', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
        ],
      },
      {
        text: "Let's just take it easy and rest today.",
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-aida-00a',
    category: 'Random Aida',
    name: "Aida's Surprise Encounter",
    description: 'Muhuhu. What a surprise meeting you here.',
    choices: [
      {
        text: 'The ominously glowing red potion.',
        best: true,
        requirement: { type: 'coin', cost: 20 },
        rewards: [
          { type: 'Stat', label: 'Power +20', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +20', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +20', outcome: 'success' },
          { type: 'Stat', label: 'Focus +20', outcome: 'success' },
          { type: 'Stat', label: 'Protect +20', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
          { type: 'Stat', label: 'Power -10', outcome: 'failure' },
          { type: 'Stat', label: 'Vitality -10', outcome: 'failure' },
          { type: 'Stat', label: 'Endurance -10', outcome: 'failure' },
          { type: 'Stat', label: 'Focus -10', outcome: 'failure' },
          { type: 'Stat', label: 'Protect -10', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -20', outcome: 'failure' },
          { type: 'Item', label: 'Item +1', outcome: 'failure' },
          { type: 'Buff', label: 'Debuff (Red Potion)', outcome: 'failure' },
        ],
      },
      {
        text: 'The chilling blue potion.',
        best: false,
        requirement: { type: 'coin', cost: 20 },
        rewards: [
          { type: 'Buff', label: 'Buff (Blue Potion)', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -20', outcome: 'failure' },
          { type: 'Condition', label: 'Condition -1', outcome: 'failure' },
          { type: 'Item', label: 'Item +1', outcome: 'failure' },
        ],
      },
      {
        text: 'The dazzling golden-yellow potion.',
        best: false,
        requirement: { type: 'coin', cost: 20 },
        rewards: [
          { type: 'PP', label: 'PP +20', outcome: 'success' },
          { type: 'Coins', label: 'Coins +30', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
          { type: 'Buff', label: 'Debuff (Yellow Potion)', outcome: 'failure' },
          { type: 'Item', label: 'Item +1', outcome: 'failure' },
        ],
      },
      {
        text: 'The plain-looking drink sitting to the side.',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-charm-00a',
    category: 'Random Charm',
    name: 'Unusual Quest Board Posting',
    description: 'While checking the quest board at Candle Square, I found a rather unusual posting.',
    choices: [
      {
        text: 'Accept the trade.',
        best: true,
        requirement: { type: 'item', label: 'Item x1' },
        rewards: [
          { type: 'Item', label: 'Item +1', outcome: 'success' },
          { type: 'Coins', label: 'Coins +50', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-cheer-00a',
    category: 'Random Cheer',
    name: 'Cool Towel Delivery',
    description: 'I brought you a cool towel.',
    choices: [
      {
        text: "Throw all I've got into training and believe it pays off!",
        best: true,
        requirement: { type: 'stamina', cost: 10 },
        rewards: [
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
          { type: 'Buff', label: 'Buff (Cheer Success)', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +5', outcome: 'failure' },
          { type: 'Buff', label: 'Debuff (Cheer Failure)', outcome: 'failure' },
        ],
      },
      {
        text: 'Train a bit more than usual.',
        best: false,
        requirement: { type: 'stamina', cost: 10 },
        rewards: [
          { type: 'Stat', label: 'Endurance +5', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-encounter-00a',
    category: 'Random Encounter',
    name: 'Street Covered in Slimes',
    description: 'The entire street was covered in slimes!',
    choices: [
      {
        text: "Let's help drive out the slimes.",
        best: true,
        requirement: { type: 'stat', stat: 'Focus', threshold: 60 },
        rewards: [
          { type: 'PP', label: 'PP +10', outcome: 'success' },
          { type: 'Stat', label: 'Power +5', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +5', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +5', outcome: 'success' },
        ],
      },
      {
        text: "Let's assist with the evacuation.",
        best: false,
        requirement: { type: 'stamina', cost: 10 },
        rewards: [
          { type: 'Coins', label: 'Coins +30', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-find-00a',
    category: 'Random Find',
    name: 'Mysterious Dig Site',
    description: 'Maybe we got too caught up in training -- before we knew it, the entire training ground floor had been dug up.',
    choices: [
      {
        text: "It'll take some effort... but let's dig it up!",
        best: true,
        requirement: { type: 'stamina', cost: 10 },
        rewards: [
          { type: 'Item', label: 'Item +1', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-lisseth-00a',
    category: 'Random Lisseth',
    name: "Lisseth's Box Game",
    description: 'Right or left? Please pick the box you like!',
    choices: [
      {
        text: 'Insert the ticket in the left box.',
        best: true,
        requirement: { type: 'item', label: 'Ticket x1' },
        rewards: [
          { type: 'Coins', label: 'Coins +150', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
        ],
      },
      {
        text: 'Insert the ticket in the right box.',
        best: false,
        requirement: { type: 'item', label: 'Ticket x1' },
        rewards: [
          { type: 'Coins', label: 'Coins +150', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-supply-00a',
    category: 'Random Supply',
    name: 'Observer Supply Delivery',
    description: 'When I returned to Candle Square after finishing the day\'s schedule, an unfamiliar Observer greeted me.',
    choices: [
      {
        text: 'Ask for supplements.',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Power +10', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: 'Ask for the soft pillow.',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: 'Ask for spicy food.',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-training-00a',
    category: 'Random Training',
    name: 'Underwhelming Journey Progress',
    description: 'Lately, our progress in the [Journey] has been underwhelming.',
    choices: [
      {
        text: 'How to master the punching machine.',
        best: true,
        requirement: { type: 'coin', cost: 20 },
        rewards: [
          { type: 'Buff', label: 'Buff (Punch Training)', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: 'How to run without tiring.',
        best: false,
        requirement: { type: 'coin', cost: 20 },
        rewards: [
          { type: 'Buff', label: 'Buff (Running Training)', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-aida-00b',
    category: 'Random Aida',
    name: 'Suspicious Outsider at Training',
    description: 'While we were deeply focused on training, a suspicious outsider appeared.',
    choices: [
      {
        text: "Guess we're drinking it, then!",
        best: true,
        requirement: { type: 'coin', cost: 20 },
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stat', label: 'Power +10', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
          { type: 'Condition', label: 'Condition -1', outcome: 'failure' },
          { type: 'Stat', label: 'Power -10', outcome: 'failure' },
          { type: 'Stat', label: 'Vitality -10', outcome: 'failure' },
          { type: 'Stat', label: 'Endurance -10', outcome: 'failure' },
        ],
      },
      {
        text: "I'll take the normal drink.",
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-encounter-00b',
    category: 'Random Encounter',
    name: 'Leaf-Covered Trap',
    description: 'We fell straight into a trap covered with leaves!',
    choices: [
      {
        text: "Let's teach them a lesson!",
        best: true,
        requirement: { type: 'stat', stat: 'Power', threshold: 300 },
        rewards: [
          { type: 'PP', label: 'PP +10', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
        ],
      },
      {
        text: "Let's try talking them down.",
        best: false,
        requirement: { type: 'pp', cost: 10 },
        rewards: [
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'Stat', label: 'Focus +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-find-00b',
    category: 'Random Find',
    name: 'Old Box Notice',
    description: 'While checking the quest board, I found a notice seeking an old box.',
    choices: [
      {
        text: "Let's open it.",
        best: true,
        requirement: { type: 'item', label: 'Old Box x1' },
        rewards: [
          { type: 'Stat', label: 'Power +10', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-supply-00b',
    category: 'Random Supply',
    name: 'Observer Satisfaction Survey',
    description: 'The Observer from the [Journey] support department, whom I\'d met before, came by again.',
    choices: [
      {
        text: 'Survey Response: Good',
        best: false,
        rewards: [
          { type: 'Coins', label: 'Coins +10', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
        ],
      },
      {
        text: 'Survey Response: Average',
        best: true,
        rewards: [
          { type: 'Coins', label: 'Coins +30', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
        ],
      },
      {
        text: 'Survey Response: Poor',
        best: false,
        rewards: [
          { type: 'Coins', label: 'Coins +20', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
          { type: 'Condition', label: 'Condition -1', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-training-00b',
    category: 'Random Training',
    name: 'Secret Training Graduation',
    description: "It's been quite some time since we began the secret training from hell.",
    choices: [
      {
        text: "I won't forget what I've learned.",
        best: true,
        requirement: { type: 'item', label: 'Training Item x1' },
        rewards: [
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-encounter-00c',
    category: 'Random Encounter',
    name: 'Surrounded by Armed Knights',
    description: 'Suddenly, we found ourselves surrounded by armed knights.',
    choices: [
      {
        text: "Let's take them down!",
        best: true,
        requirement: { type: 'stat', stat: 'Health', threshold: 300 },
        rewards: [
          { type: 'PP', label: 'PP +10', outcome: 'success' },
          { type: 'Stat', label: 'Power +10', outcome: 'success' },
        ],
      },
      {
        text: 'I hope this helps our future cooperation.',
        best: false,
        requirement: { type: 'coin', cost: 20 },
        rewards: [
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-find-00c',
    category: 'Random Find',
    name: 'Mysterious Statue',
    description: 'On the way to complete a quest, we came across a statue we\'d never seen before.',
    choices: [
      {
        text: 'Pray to the woman holding the sword.',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Power +20', outcome: 'success' },
          { type: 'Stat', label: 'Vitality -20', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: 'Pray to the woman holding the flowers.',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Vitality +20', outcome: 'success' },
          { type: 'Stat', label: 'Power -20', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-training-00c',
    category: 'Random Training',
    name: 'Secret Training Completion',
    description: "It's been quite some time since we began the secret training from hell.",
    choices: [
      {
        text: "I won't forget what I've learned.",
        best: true,
        requirement: { type: 'item', label: 'Training Item x1' },
        rewards: [
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-weather-00c',
    category: 'Random Weather',
    name: 'Perfect Weather',
    description: 'The weather couldn\'t be better today.',
    choices: [
      {
        text: 'I have to enjoy the peace and quiet while I can.',
        best: true,
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
          { type: 'PP', label: 'PP +30', outcome: 'success' },
          { type: 'Condition', label: 'Condition -1', outcome: 'failure' },
          { type: 'PP', label: 'PP +15', outcome: 'failure' },
        ],
      },
      {
        text: "I shouldn't deviate from my plans.",
        best: false,
        rewards: [
          { type: 'PP', label: 'PP +10', outcome: 'success' },
          { type: 'Stat', label: 'Focus +5', outcome: 'success' },
          { type: 'Stat', label: 'Protect +5', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-find-00d',
    category: 'Random Find',
    name: 'Glowing Flower in Supplies',
    description: 'While organizing supplies, a faint, unfamiliar light began to shine from the back of the room.',
    choices: [
      {
        text: 'Pick up the flower.',
        best: true,
        requirement: { type: 'item', label: 'Flower x1' },
        rewards: [
          { type: 'Stat', label: 'Vitality +20', outcome: 'success' },
          { type: 'Stat', label: 'Power +20', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +20', outcome: 'failure' },
          { type: 'Stat', label: 'Power +10', outcome: 'failure' },
          { type: 'Buff', label: 'Debuff (Flower Curse)', outcome: 'failure' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-weather-00d',
    category: 'Random Weather',
    name: 'Thick Training Fog',
    description: 'During training, a thick fog rolled in, dense enough to make it hard to see even a few steps ahead.',
    choices: [
      {
        text: "It's just a little less visibility, that's all!",
        best: true,
        rewards: [
          { type: 'Stat', label: 'Focus +20', outcome: 'success' },
          { type: 'Stat', label: 'Protect +20', outcome: 'success' },
          { type: 'PP', label: 'PP +30', outcome: 'success' },
          { type: 'Stat', label: 'Focus +10', outcome: 'failure' },
          { type: 'Stat', label: 'Protect +10', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'failure' },
        ],
      },
      {
        text: 'We should head back to the quarters since it\'s dangerous.',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-weather-00d-current',
    category: 'Random Weather',
    name: 'Thick Training Fog (Current)',
    description: 'Dense fog during training -- same event but triggers mid-run.',
    choices: [
      {
        text: "It's just a little less visibility, that's all!",
        best: true,
        rewards: [
          { type: 'Stat', label: 'Focus +20', outcome: 'success' },
          { type: 'Stat', label: 'Protect +20', outcome: 'success' },
          { type: 'PP', label: 'PP +30', outcome: 'success' },
          { type: 'Stat', label: 'Focus +10', outcome: 'failure' },
          { type: 'Stat', label: 'Protect +10', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'failure' },
        ],
      },
      {
        text: 'We should head back to the quarters since it\'s dangerous.',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-find-00e',
    category: 'Random Find',
    name: 'Glowing Sword in Supplies',
    description: 'While organizing supplies, a faint, unfamiliar light began to shine from the back of the room.',
    choices: [
      {
        text: 'Pick up the sword.',
        best: true,
        requirement: { type: 'item', label: 'Sword x1' },
        rewards: [
          { type: 'Stat', label: 'Power +20', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +20', outcome: 'success' },
          { type: 'Stat', label: 'Power +20', outcome: 'failure' },
          { type: 'Stat', label: 'Vitality +10', outcome: 'failure' },
          { type: 'Buff', label: 'Debuff (Sword Curse)', outcome: 'failure' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-weather-00e',
    category: 'Random Weather',
    name: 'Thunder and Lightning',
    description: 'During training, thunder suddenly roared and lightning flashed across the sky overhead.',
    choices: [
      {
        text: "I'm not backing down from a little thunder and lightning!",
        best: true,
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'PP', label: 'PP +30', outcome: 'success' },
          { type: 'Condition', label: 'Condition -1', outcome: 'failure' },
          { type: 'PP', label: 'PP +30', outcome: 'failure' },
        ],
      },
      {
        text: 'We should find shelter instead of pushing ourselves.',
        best: false,
        rewards: [
          { type: 'Condition', label: 'Condition -1', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-weather-00e-current',
    category: 'Random Weather',
    name: 'Thunder and Lightning (Current)',
    description: 'Thunder and lightning during training -- same event but triggers mid-run.',
    choices: [
      {
        text: "I'm not backing down from a little thunder and lightning!",
        best: true,
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'PP', label: 'PP +30', outcome: 'success' },
          { type: 'Condition', label: 'Condition -1', outcome: 'failure' },
          { type: 'PP', label: 'PP +30', outcome: 'failure' },
        ],
      },
      {
        text: 'We should find shelter instead of pushing ourselves.',
        best: false,
        rewards: [
          { type: 'Condition', label: 'Condition -1', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-find-00f',
    category: 'Random Find',
    name: 'Captain, May I Have a Moment?',
    description: 'Captain, may I have a moment of your time?',
    choices: [
      {
        text: 'Sell the relic to the Order.',
        best: true,
        requirement: { type: 'item', label: 'Relic x1' },
        rewards: [
          { type: 'Coins', label: 'Coins +80', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-weather-00g2',
    category: 'Random Weather',
    name: 'Suffocating Heat (Bound)',
    description: 'The suffocating heat wrapped around the quarters like a thick blanket.',
    choices: [
      {
        text: "Let's use a handy fan.",
        best: true,
        requirement: { type: 'item', label: 'Fan x1' },
        rewards: [
          { type: 'Stat', label: 'Endurance +20', outcome: 'success' },
          { type: 'Stat', label: 'Protect +20', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
      {
        text: "I'll power through it.",
        best: false,
        rewards: [
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
          { type: 'Condition', label: 'Condition -1', outcome: 'success' },
          { type: 'Remove Buff', label: 'Remove Positive Buff', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-find-00g',
    category: 'Random Find',
    name: "Aida's Relic",
    description: 'Muhuhu. You caught me.',
    choices: [
      {
        text: 'Strike it with moderate force.',
        best: true,
        requirement: { type: 'item', label: 'Relic x1' },
        rewards: [
          { type: 'Stat', label: 'Endurance +20', outcome: 'success' },
          { type: 'Stat', label: 'Protect +20', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Condition', label: 'Condition -1', outcome: 'failure' },
        ],
      },
      {
        text: 'Hit it with full power.',
        best: false,
        requirement: { type: 'item', label: 'Relic x1' },
        rewards: [
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
        ],
      },
      {
        text: 'Say that relics need to be handled with care.',
        best: false,
        rewards: [
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-weather-00g',
    category: 'Random Weather',
    name: 'Suffocating Heat',
    description: 'The suffocating heat wrapped around the quarters like a thick blanket.',
    choices: [
      {
        text: "Let's use a handy fan.",
        best: true,
        requirement: { type: 'item', label: 'Fan x1' },
        rewards: [
          { type: 'Stat', label: 'Endurance +20', outcome: 'success' },
          { type: 'Stat', label: 'Protect +20', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
      {
        text: "I'll power through it.",
        best: false,
        rewards: [
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
          { type: 'Condition', label: 'Condition -1', outcome: 'success' },
          { type: 'Remove Buff', label: 'Remove Positive Buff', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-weather-00h2',
    category: 'Random Weather',
    name: 'Heavy Snowfall (Bound)',
    description: 'The temperature suddenly plummeted, and a heavy snowfall began.',
    choices: [
      {
        text: "Let's use a hand warmer.",
        best: true,
        requirement: { type: 'item', label: 'Hand Warmer x1' },
        rewards: [
          { type: 'Stat', label: 'Endurance +20', outcome: 'success' },
          { type: 'Stat', label: 'Protect +20', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
      {
        text: 'Enduring the cold... could be its own kind of training!',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'Remove Buff', label: 'Remove Positive Buff', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-weather-00h',
    category: 'Random Weather',
    name: 'Heavy Snowfall',
    description: 'The temperature suddenly plummeted, and a heavy snowfall began.',
    choices: [
      {
        text: "Let's use a hand warmer.",
        best: true,
        requirement: { type: 'item', label: 'Hand Warmer x1' },
        rewards: [
          { type: 'Stat', label: 'Endurance +20', outcome: 'success' },
          { type: 'Stat', label: 'Protect +20', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
      {
        text: 'Enduring the cold... could be its own kind of training!',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'Remove Buff', label: 'Remove Positive Buff', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-06-apocalypse',
    category: 'Standby',
    name: 'Apocalypse Part-Time Help',
    description: 'With the [basic trial] looming ahead, I stopped by [Apocalypse].',
    choices: [
      {
        text: "Let's help her.",
        best: true,
        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'Buff', label: 'Buff (Apocalypse Worker)', outcome: 'success' },
          { type: 'Coins', label: 'Coins +30', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-09-crowd',
    category: 'Standby',
    name: 'Crowd at the Quest',
    description: 'On the way to fulfill a quest, I spotted a crowd gathered ahead.',
    choices: [
      {
        text: 'Buy one.',
        best: false,
        requirement: { type: 'coin', cost: 50 },
        rewards: [
          { type: 'Stamina', label: 'Stamina +15', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: 'Look for a weak spot.',
        best: false,
        requirement: { type: 'stat', stat: 'Focus', threshold: 30 },
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stat', label: 'Power +15', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: 'Take on the challenge.',
        best: true,
        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'Buff', label: 'Buff (Legend Savior PP)', outcome: 'success' },
          { type: 'Stat', label: 'Power +20', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: 'Just walk past.',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-12-sale',
    category: 'Standby',
    name: 'Lisa\'s Cosmetics Sale',
    description: 'Welcome! Today we\'re holding a special cosmetics sale!',
    choices: [
      {
        text: 'Buy it for her.',
        best: true,
        requirement: { type: 'coin', cost: 30 },
        rewards: [
          { type: 'Item', label: 'Item +1 (Cosmetic A)', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
          { type: 'Item', label: 'Item +1 (Cosmetic B)', outcome: 'success' },
          { type: 'Stat', label: 'Focus +10', outcome: 'success' },
          { type: 'Item', label: 'Item +1 (Cosmetic C)', outcome: 'success' },
          { type: 'Stat', label: 'Protect +5', outcome: 'success' },
          { type: 'Stat', label: 'Focus +5', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-18-boulder',
    category: 'Standby',
    name: 'Labyrinth Boulder',
    description: 'While tracking traces of the ancient construct deep into the labyrinth, I found the passage blocked by a massive boulder.',
    choices: [
      {
        text: 'Would this amount be enough?',
        best: false,
        requirement: { type: 'coin', cost: 50 },
        rewards: [
          { type: 'Stamina', label: 'Stamina +20', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: 'What if I operate the crane myself?',
        best: true,
        requirement: { type: 'stat', stat: 'Protect', threshold: 50 },
        rewards: [
          { type: 'Stat', label: 'Endurance +20', outcome: 'success' },
          { type: 'PP', label: 'PP +15', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-19-underground',
    category: 'Standby',
    name: 'Underground Construct Sensing',
    description: 'While searching for traces of the ancient construct deep underground, I sensed something strange.',
    choices: [
      {
        text: 'Use the terrain to evade it.',
        best: true,
        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'Stat', label: 'Focus +10', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #20004', outcome: 'success' },
        ],
      },
      {
        text: 'Stay calm and focus on defense.',
        best: false,
        requirement: { type: 'stat', stat: 'Endurance', threshold: 125 },
        rewards: [
          { type: 'Stat', label: 'Focus +10', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-26-lisette',
    category: 'Standby',
    name: 'Lisette Wants Cotton Candy',
    description: 'Ah! Welcome! What can I get you?',
    choices: [
      {
        text: 'Well, wandering around to find it sounds fun in itself.',
        best: true,
        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'Item', label: 'Item +1', outcome: 'success' },
          { type: 'Stat', label: 'Focus +30', outcome: 'success' },
          { type: 'Stat', label: 'Protect +15', outcome: 'success' },
          { type: 'Buff', label: 'Buff (Sweet Taste)', outcome: 'success' },
        ],
      },
      {
        text: "There's a place nearby.",
        best: false,
        rewards: [
          { type: 'Stat', label: 'Focus +8', outcome: 'success' },
          { type: 'Stat', label: 'Protect +8', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-31a-florian',
    category: 'Standby',
    name: 'Florian Tourist Challenge',
    description: "Haven't seen your faces before. Tourists?",
    choices: [
      {
        text: "Target the opponent's weak spots.",
        best: true,
        requirement: { type: 'stat', stat: 'Power', threshold: 200 },
        rewards: [
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
          { type: 'Stat', label: 'Focus +10', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: "Play to our team's strengths.",
        best: false,
        requirement: { type: 'stat', stat: 'Focus', threshold: 100 },
        rewards: [
          { type: 'Stat', label: 'Vitality +30', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: 'Overwhelm them with momentum.',
        best: false,
        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'Stat', label: 'Focus +30', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: "...We'll figure it out somehow!",
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-31b-kheldor',
    category: 'Standby',
    name: 'Kheldor Festival',
    description: 'Hey! I told you this pillar should go a little more to the right!',
    choices: [
      {
        text: "Can't say no to a bear!",
        best: true,
        requirement: { type: 'stat', stat: 'Health', threshold: 200 },
        rewards: [
          { type: 'Stat', label: 'Power +10', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: "It's traditional food time!",
        best: false,
        requirement: { type: 'stat', stat: 'Protect', threshold: 100 },
        rewards: [
          { type: 'Stat', label: 'Power +30', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: 'We should head to our quarters now.',
        best: false,
        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'Stat', label: 'Protect +30', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: 'Time to run for it!',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-32a-florian-waiting',
    category: 'Standby',
    name: 'Waiting Room Visitor',
    description: 'While we were resting in the waiting room, someone approached us.',
    choices: [
      {
        text: 'Grab a good meal first.',
        best: false,
        requirement: { type: 'coin', cost: 80 },
        rewards: [
          { type: 'Stamina', label: 'Stamina +40', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
      {
        text: 'Take a few deep breaths to relax.',
        best: true,
        requirement: { type: 'stat', stat: 'Focus', threshold: 125 },
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stat', label: 'Power +30', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: 'Do our best, like always.',
        best: false,
        rewards: [
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-32b-kheldor-monsters',
    category: 'Standby',
    name: 'Prowling Monsters',
    description: 'Among the monsters that swarmed here before, some are still prowling around this area.',
    choices: [
      {
        text: 'What if we lure them with bait?',
        best: false,
        requirement: { type: 'coin', cost: 80 },
        rewards: [
          { type: 'Stamina', label: 'Stamina +40', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
      {
        text: "Let's find out why they won't leave.",
        best: true,
        requirement: { type: 'stat', stat: 'Protect', threshold: 125 },
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +30', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: "Let's team up with the locals.",
        best: false,
        rewards: [
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-37-safe-key',
    category: 'Standby',
    name: 'Lost Safe Key',
    description: 'I was supposed to finish the settlement report and contact the head office today, but I lost the key to the safe. I can\'t open it.',
    choices: [
      {
        text: "Could this be the safe key you're looking for?",
        best: true,
        requirement: { type: 'item', label: 'Safe Key x1' },
        rewards: [
          { type: 'Item', label: 'Item +1', outcome: 'success' },
          { type: 'PP', label: 'PP +15', outcome: 'success' },
        ],
      },
      {
        text: 'How about calling a skilled locksmith?',
        best: false,
        rewards: [
          { type: 'PP', label: 'PP +15', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-hard-future',
    category: 'Standby',
    name: 'Fierce-Looking Woman',
    description: 'As I walked along, a woman with a fierce look approached and spoke to me.',
    choices: [
      {
        text: "I'll hold onto it.",
        best: true,
        rewards: [
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: "I'll pass.",
        best: false,
        rewards: [
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-hard-mystery',
    category: 'Standby',
    name: 'Mysterious Tome Merchant',
    description: "It's a pleasure to meet you, Journey Captain. Is there anything you're looking for?",
    choices: [
      {
        text: 'A tome suited for offense.',
        best: true,
        requirement: { type: 'coin', cost: 30 },
        rewards: [
          { type: 'SE Potential', label: 'SE Potential #21001', outcome: 'success' },
        ],
      },
      {
        text: 'A tome focused on survival.',
        best: false,
        requirement: { type: 'coin', cost: 30 },
        rewards: [
          { type: 'SE Potential', label: 'SE Potential #21002', outcome: 'success' },
        ],
      },
      {
        text: 'Is there one useful in any situation?',
        best: false,
        requirement: { type: 'coin', cost: 50 },
        rewards: [
          { type: 'SE Potential', label: 'SE Potential #21004', outcome: 'success' },
        ],
      },
      {
        text: "I don't need anything.",
        best: false,
        rewards: [
          { type: 'SE Potential', label: 'SE Potential #21008', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-hard-select01',
    category: 'Standby',
    name: 'Journey Strategy Discussion',
    description: 'Captain! Have you brainstormed any plans for progressing through the [Journey]?',
    choices: [
      {
        text: 'A training manual that helps with offense',
        best: true,
        rewards: [
          { type: 'Item', label: 'Item +1 (Offense Manual)', outcome: 'success' },
        ],
      },
      {
        text: 'A training manual that helps with survival',
        best: false,
        rewards: [
          { type: 'Item', label: 'Item +1 (Survival Manual)', outcome: 'success' },
        ],
      },
      {
        text: 'A training manual that helps in various situations',
        best: false,
        rewards: [
          { type: 'Item', label: 'Item +1 (Versatile Manual)', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'request-defeat',
    category: 'Request',
    name: 'Quest Failure Recovery',
    description: '[CHARACTER_NAME] looked unwell after failing the quest.',
    choices: [
      {
        text: "Let's head back...",
        best: false,
        rewards: [
          { type: 'Coins', label: 'Coins +30', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'Coins', label: 'Coins +30', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'failure' },
          { type: 'Condition', label: 'Condition -1', outcome: 'failure' },
        ],
      },
      {
        text: 'Hand out a Vitality Potion.',
        best: true,
        requirement: { type: 'item', label: 'Vitality Potion x1' },
        rewards: [
          { type: 'Coins', label: 'Coins +30', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
          { type: 'Coins', label: 'Coins +30', outcome: 'failure' },
          { type: 'PP', label: 'PP +10', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -5', outcome: 'failure' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'training-failure',
    category: 'Training Failure',
    name: 'Training Gone Wrong',
    description: 'As Captain, what should I do?',
    choices: [
      {
        text: "Let's call it a day.",
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +5', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +5', outcome: 'failure' },
          { type: 'Condition', label: 'Condition -1', outcome: 'failure' },
        ],
      },
      {
        text: "Let's train safely.",
        best: true,
        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'PP', label: 'PP +15', outcome: 'success' },
          { type: 'Buff', label: 'Buff (Training Success Up)', outcome: 'success' },
          { type: 'PP', label: 'PP +15', outcome: 'failure' },
        ],
      },
      {
        text: 'Hand out a Vitality Potion.',
        best: false,
        requirement: { type: 'item', label: 'Vitality Potion x1' },
        rewards: [
          { type: 'Stamina', label: 'Stamina +30', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'annah-undercover-cop-02',
    category: 'Arcana',
    name: 'Annah: I was walking through NOA\'s streets...',
    description: 'I was walking through NOA\'s streets when I ran into Annah.',
    arcana: 'Annah',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'Do as she wishes.',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +15', outcome: 'success' },
        ],
      },
      {
        text: 'Maintain my dignity.',
        best: true,
        rewards: [
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'bell-deep-mourning-02',
    category: 'Arcana',
    name: 'Bell: While I was out enjoying a...',
    description: 'While I was out enjoying a weekend in downtown NOA, something in the plaza caught my eye.',
    arcana: 'Bell',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'I liked yours better.',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Focus +5', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #21007', outcome: 'success' },
        ],
      },
      {
        text: "Let's go find a better one!",
        best: false,
        rewards: [
          { type: 'Stat', label: 'Power +5', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #21007', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'bell-deep-mourning-03',
    category: 'Arcana',
    name: 'Bell: Finally, a peaceful day off. No...',
    description: 'Finally, a peaceful day off. No bothersome pests buzzing around.',
    arcana: 'Bell',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: "You're not going to use that dangerous spell, are you?",
        best: true,
        rewards: [
          { type: 'Stat', label: 'Power +10', outcome: 'success' },
          { type: 'Stat', label: 'Focus +15', outcome: 'success' },
          { type: 'PP', label: 'PP +15', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #32004', outcome: 'success' },
          { type: 'Stat', label: 'Power +8', outcome: 'failure' },
          { type: 'Stat', label: 'Focus +12', outcome: 'failure' },
          { type: 'PP', label: 'PP +10', outcome: 'failure' },
          { type: 'SE Potential', label: 'SE Potential #32004', outcome: 'failure' },
        ],
      },
      {
        text: 'Bell Rhys. Hand me the vial and start running.',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +20', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'besta-a-satisfying-meal-02',
    category: 'Arcana',
    name: 'Besta: Captain? What brings you here',
    description: 'Captain? What brings you here?',
    arcana: 'Besta',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'Open the book.',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
      {
        text: 'Let Besta have it.',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Vitality +8', outcome: 'success' },
          { type: 'Stat', label: 'Focus +8', outcome: 'success' },
          { type: 'Stat', label: 'Protect +12', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'Stat', label: 'Protect +15', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'failure' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'besta-a-satisfying-meal-03',
    category: 'Arcana',
    name: 'Besta: I was covering the front desk...',
    description: 'I was covering the front desk for the librarian when some familiar faces showed up.',
    arcana: 'Besta',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'Stop Besta.',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Vitality +8', outcome: 'success' },
          { type: 'Stat', label: 'Focus +8', outcome: 'success' },
          { type: 'Stat', label: 'Protect +15', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #30004', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +8', outcome: 'failure' },
          { type: 'Stat', label: 'Focus +8', outcome: 'failure' },
          { type: 'Stat', label: 'Protect +15', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -20', outcome: 'failure' },
          { type: 'SE Potential', label: 'SE Potential #30004', outcome: 'failure' },
        ],
      },
      {
        text: 'Stay back and watch.',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Protect +15', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #30004', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'carmen-night-view-beyond-the-window-01',
    category: 'Arcana',
    name: 'Carmen: I heard rumors that a lot...',
    description: 'I heard rumors that a lot of relief shelters had popped up in the city lately.',
    arcana: 'Carmen',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'Sure, I\'ll take a bowl.',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Protect +5', outcome: 'success' },
          { type: 'Buff', label: 'Buff (FEEL_CONFIDENT +2)', outcome: 'success' },
        ],
      },
      {
        text: 'No, I\'ll settle for the civilian version...',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Protect +5', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'carmen-night-view-beyond-the-window-02',
    category: 'Arcana',
    name: 'Carmen: While I was walking through NOA\'s...',
    description: 'While I was walking through NOA\'s streets, I heard a commotion, so I decided to check it out.',
    arcana: 'Carmen',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'Got it. I\'ll make it as hopeless as possible.',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Endurance +8', outcome: 'success' },
          { type: 'Stat', label: 'Protect +12', outcome: 'success' },
        ],
      },
      {
        text: 'I actually have an even better idea...',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'carmen-night-view-beyond-the-window-03',
    category: 'Arcana',
    name: 'Carmen: While I was walking through the...',
    description: 'While I was walking through the plaza, I spotted Carmen lingering near the entrance of the Apocalypse shop.',
    arcana: 'Carmen',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'If it means that much to you, I\'ll buy it for you.',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Protect +5', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #11011', outcome: 'success' },
        ],
      },
      {
        text: 'Better to act on your feelings now than regret it later.',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Endurance +8', outcome: 'success' },
          { type: 'Stat', label: 'Protect +12', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #11011', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'charlotte-a-knight-s-oath-01',
    category: 'Arcana',
    name: 'Charlotte: Ah, Captain. Just a moment, please',
    description: 'Ah, Captain. Just a moment, please.',
    arcana: 'Charlotte',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'Call after her.',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Vitality +5', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +15', outcome: 'success' },
          { type: 'Stat', label: 'Power +10', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
        ],
      },
      {
        text: 'Wait quietly for her to return.',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Vitality +15', outcome: 'success' },
          { type: 'PP', label: 'PP +30', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #21004', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'claire-the-perfect-bunny-girl-01',
    category: 'Arcana',
    name: 'Claire: I woke up to loud chatter...',
    description: 'I woke up to loud chatter around me.',
    arcana: 'Claire',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'Confess everything.',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Power +5', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'PP', label: 'PP +15', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #23039', outcome: 'success' },
          { type: 'Stat', label: 'Power +5', outcome: 'failure' },
          { type: 'Stat', label: 'Vitality +5', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'failure' },
          { type: 'PP', label: 'PP +10', outcome: 'failure' },
          { type: 'SE Potential', label: 'SE Potential #23039', outcome: 'failure' },
        ],
      },
      {
        text: 'Make a vague excuse.',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #22002', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'elisa-divine-trial-01',
    category: 'Arcana',
    name: 'Elisa: When a frantic voice came from...',
    description: 'When a frantic voice came from beyond the window of a nearby building.',
    arcana: 'Elisa',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'Tell a story the children will enjoy.',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Endurance +15', outcome: 'success' },
        ],
      },
      {
        text: 'Stay strong!',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Endurance +5', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +25', outcome: 'success' },
          { type: 'Buff', label: 'Debuff (UNIQUE_BURNOUT -5)', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #20003', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'frey-the-indomitable-masterpiece-01',
    category: 'Arcana',
    name: 'Frey: I spotted an unfamiliar pair sitting...',
    description: 'I spotted an unfamiliar pair sitting at a table across the lobby.',
    arcana: 'Frey',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'Bet on Frey to win.',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Power +10', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +15', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #23050', outcome: 'success' },
          { type: 'Stat', label: 'Power +10', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina +15', outcome: 'failure' },
          { type: 'Buff', label: 'Debuff (UNIQUE_WASTED -3)', outcome: 'failure' },
          { type: 'PP', label: 'PP +30', outcome: 'failure' },
          { type: 'SE Potential', label: 'SE Potential #23050', outcome: 'failure' },
        ],
      },
      {
        text: 'Bet on Luna to win.',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #23050', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'hilde-nostalgia-strikes-back-02',
    category: 'Arcana',
    name: 'Hilde: I suddenly received a quest from...',
    description: 'I suddenly received a quest from Lyn, asking if I could help out with some work.',
    arcana: 'Hilde',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'Receive what Lyn has prepared.',
        best: true,
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +20', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #21003', outcome: 'success' },
          { type: 'Buff', label: 'Buff (UNIQUE_OPERATION +3)', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +25', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'failure' },
        ],
      },
      {
        text: 'Point to the doll lying on the floor.',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +15', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'hilde-nostalgia-strikes-back-03',
    category: 'Arcana',
    name: 'Hilde: Too soft',
    description: 'Too soft!',
    arcana: 'Hilde',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'Pretend to be hurt!',
        best: true,
        rewards: [
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +25', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #30006', outcome: 'success' },
        ],
      },
      {
        text: 'Bluff my way through it!',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Power +5', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #30006', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'kyra-as-cute-as-kyra-03',
    category: 'Arcana',
    name: 'Kyra: Kyra follows me around all day...',
    description: 'Kyra follows me around all day like a puppy.',
    arcana: 'Kyra',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'Run away.',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Power +12', outcome: 'success' },
          { type: 'Stat', label: 'Focus +8', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #34002', outcome: 'success' },
          { type: 'Stat', label: 'Power +10', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'failure' },
          { type: 'SE Potential', label: 'SE Potential #34002', outcome: 'failure' },
        ],
      },
      {
        text: 'Accept my fate.',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Power +5', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #34002', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'lily-there-s-only-one-truth-02',
    category: 'Arcana',
    name: 'Lily: I was waiting in line with...',
    description: 'I was waiting in line with Lily to buy the limited bread from Street Bakers.',
    arcana: 'Lily',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: "You didn't do anything wrong, Lily.",
        best: false,
        rewards: [
          { type: 'Buff', label: 'Buff (UNIQUE_KEEN_EYE +3)', outcome: 'success' },
        ],
      },
      {
        text: 'I think you went a bit too far.',
        best: true,
        rewards: [
          { type: 'Stamina', label: 'Stamina -15', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #21007', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'lyn-under-the-glass-moon-over-the-pavilion-02',
    category: 'Arcana',
    name: 'Lyn: Discarded Wooden Box',
    description: 'While staying at the quarters, Lyn and I found a discarded wooden box. I decided to...',
    arcana: 'Lyn',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: "Wait, I'll check it first.",
        best: true,
        rewards: [
          { type: 'Stat', label: 'Protect +25', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
        ],
      },
      {
        text: "...What if there's something weird inside?",
        best: false,
        rewards: [
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
          { type: 'PP', label: 'PP +15', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'marcille-rabbit-town-01',
    category: 'Arcana',
    name: 'Marcille: I was gathering ingredients for a...',
    description: 'I was gathering ingredients for a Vitality Potion in the hills when someone suddenly covered my eyes from behind.',
    arcana: 'Marcille',
    arcanaGrade: 'SR',
    choices: [
      {
        text: 'Wait, Clarissa...!',
        best: true,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +5', outcome: 'success' },
        ],
      },
      {
        text: 'I heard there\'s a monster mimicking a rabbit around here!',
        best: false,
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +5', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'marcille-rabbit-town-02',
    category: 'Arcana',
    name: 'Marcille: I spotted Marcille darting into an...',
    description: 'I spotted Marcille darting into an alleyway and followed her.',
    arcana: 'Marcille',
    arcanaGrade: 'SR',
    choices: [
      {
        text: 'There\'s no way something like that exists.',
        best: true,
        rewards: [
          { type: 'SE Potential', label: 'SE Potential #20003', outcome: 'success' },
        ],
      },
      {
        text: 'Th-that\'s terrifying...',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'omega-the-imaginary-pioneer-03',
    category: 'Arcana',
    name: 'Omega: We were enjoying a luxurious lunch...',
    description: 'We were enjoying a luxurious lunch for the first time in a while.',
    arcana: 'Omega',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'Watch quietly.',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Power +12', outcome: 'success' },
          { type: 'Stat', label: 'Focus +8', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #25002', outcome: 'success' },
        ],
      },
      {
        text: 'Intervene.',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Power +12', outcome: 'success' },
          { type: 'Stat', label: 'Focus +8', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #25002', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'petra-made-by-petra-02',
    category: 'Arcana',
    name: 'Petra: Laa, laa ♪',
    description: 'Laa, laa ♪',
    arcana: 'Petra',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'The dewy rose shade...?',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Power +5', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +5', outcome: 'success' },
          { type: 'Stat', label: 'Focus +12', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #20001', outcome: 'success' },
        ],
      },
      {
        text: 'The tangy grapefruit orange...?',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'roberta-responsibility-atop-a-pile-of-paperwork-03',
    category: 'Arcana',
    name: 'Roberta: Being stuck in a corner scribbling...',
    description: 'Being stuck in a corner scribbling reports just isn\'t my thing.',
    arcana: 'Roberta',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'Should I ask what happened?',
        best: false,
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #11026', outcome: 'success' },
        ],
      },
      {
        text: 'She looks busy, so I should leave her be...',
        best: true,
        rewards: [
          { type: 'Stamina', label: 'Stamina +15', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #11026', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'scarlet-the-great-and-amazing-bunny-girl-01',
    category: 'Arcana',
    name: 'Scarlet: I can tell where you\'re hiding...',
    description: 'I can tell where you\'re hiding at a glance!',
    arcana: 'Scarlet',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'Should we try convincing her together?',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Power +20', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #11043', outcome: 'success' },
          { type: 'Stat', label: 'Power +10', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'failure' },
          { type: 'SE Potential', label: 'SE Potential #11043', outcome: 'failure' },
        ],
      },
      {
        text: 'Maybe she really is more comfortable alone.',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #22001', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'scarlet-the-great-and-amazing-bunny-girl-01a',
    category: 'Arcana',
    name: 'Scarlet: While passing through the plaza, I...',
    description: 'While passing through the plaza, I spotted Scarlet playing with the local kids.',
    arcana: 'Scarlet',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'I believe in you, Scarlet! I can\'t wait to see you fly!',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Power +10', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +8', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
      {
        text: 'Be careful, Scarlet...!',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +15', outcome: 'success' },
          { type: 'Buff', label: 'Debuff (UNIQUE_MUSCLE_INJURY -3)', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +3', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #20002', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'scarlet-the-great-and-amazing-bunny-girl-02',
    category: 'Arcana',
    name: 'Scarlet: How did you find us, Scarlet?!...',
    description: 'How did you find us, Scarlet?! I was sure we were hide-and-seek champions!',
    arcana: 'Scarlet',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'Root for Scarlet.',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Power +15', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #21001', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +12', outcome: 'success' },
          { type: 'PP', label: 'PP +15', outcome: 'success' },
        ],
      },
      {
        text: 'Root for Charlotte.',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +20', outcome: 'success' },
          { type: 'Buff', label: 'Debuff (UNIQUE_SURFEIT -3)', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +3', outcome: 'success' },
          { type: 'Condition', label: 'Condition -1', outcome: 'success' },
          { type: 'Buff', label: 'Buff (ARCANAPOINT_BONUS +1)', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'smile-cats-do-not-smile-01',
    category: 'Arcana',
    name: 'Smile: One day, while passing through the...',
    description: 'One day, while passing through the park, I spotted Asherah and Smile crouched quietly in a corner.',
    arcana: 'Smile',
    arcanaGrade: 'SR',
    choices: [
      {
        text: 'Try petting its head gently.',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Focus +8', outcome: 'success' },
          { type: 'Stat', label: 'Protect +5', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stat', label: 'Focus +8', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'failure' },
        ],
      },
      {
        text: 'Now\'s your chance! Go for the belly like Asherah!',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Focus +8', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +5', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'trish-choosing-the-next-prey-02',
    category: 'Arcana',
    name: 'Trish: As I was walking down the...',
    description: 'As I was walking down the street, I heard some familiar voices.',
    arcana: 'Trish',
    arcanaGrade: 'SR',
    choices: [
      {
        text: 'Maybe it\'s best to start with what you can do now.',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Power +18', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: 'Money isn\'t everything.',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Power +8', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #22001', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'yoo-mina-experienced-mercenary-01',
    category: 'Arcana',
    name: 'Yoo Mina: At this rate, a part-time job...',
    description: 'At this rate, a part-time job at a cafe would be better.',
    arcana: 'Yoo Mina',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'Let\'s try something else!',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +15', outcome: 'success' },
        ],
      },
      {
        text: 'Let\'s eat something good and forget about it!',
        best: true,
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'yoo-mina-experienced-mercenary-02',
    category: 'Arcana',
    name: 'Yoo Mina: Do I? I didn\'t think I...',
    description: 'Do I? I didn\'t think I was tired.',
    arcana: 'Yoo Mina',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'What if you replicate that old routine?',
        best: true,
        rewards: [
          { type: 'PP', label: 'PP +40', outcome: 'success' },
        ],
      },
      {
        text: 'Let\'s take a long break.',
        best: false,
        rewards: [
          { type: 'SE Potential', label: 'SE Potential #21006', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
];
