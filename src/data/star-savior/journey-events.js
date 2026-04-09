// Journey event choices data - all non-NPC/Bunny reward events with requirements, rewards, and best choice analysis

export const JOURNEY_EVENTS = [
  {
    id: 'noa-breaktime',
    category: 'Choice',
    name: 'Rare Day Off',
    description: 'We finally have a day off. What should we do?',
    choices: [
      {
        text: "Let's go try that limited-time dessert!",

        requirement: { type: 'coin', cost: 50 },
        rewards: [
          { type: 'Condition', label: 'Condition +2', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
      {
        text: 'How about watching the new movie that came out?',

        requirement: { type: 'coin', cost: 30 },
        rewards: [
          { type: 'PP', label: 'PP +30', outcome: 'success' },
          { type: 'Item', label: 'Screening Bonus Poster', outcome: 'success' },
        ],
      },
      {
        text: "Should we pack some sandwiches and go on a picnic?",

        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'Stat', label: 'Endurance +20', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
        ],
      },
      {
        text: "Let's just take it easy and rest today.",

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
    description: 'I ran into Aida by chance, and she offered me potions that were supposed to make Saviors stronger. Which one should we drink...?',
    choices: [
      {
        text: 'The ominously glowing red potion.',

        requirement: { type: 'coin', cost: 20 },
        rewards: [
          { type: 'Stat', label: 'Power +20', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +20', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +20', outcome: 'success' },
          { type: 'Stat', label: 'Focus +20', outcome: 'success' },
          { type: 'Stat', label: 'Protect +20', outcome: 'success' },
          { type: 'Item', label: 'Empty Vial', outcome: 'success' },
          { type: 'Stat', label: 'Power -10', outcome: 'failure' },
          { type: 'Stat', label: 'Vitality -10', outcome: 'failure' },
          { type: 'Stat', label: 'Endurance -10', outcome: 'failure' },
          { type: 'Stat', label: 'Focus -10', outcome: 'failure' },
          { type: 'Stat', label: 'Protect -10', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -20', outcome: 'failure' },
          { type: 'Item', label: 'Empty Vial', outcome: 'failure' },
          { type: 'Buff', label: 'Debuff (Red Potion)', outcome: 'failure' },
        ],
      },
      {
        text: 'The chilling blue potion.',

        requirement: { type: 'coin', cost: 20 },
        rewards: [
          { type: 'Buff', label: 'Buff (Blue Potion)', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
          { type: 'Item', label: 'Empty Vial', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -20', outcome: 'failure' },
          { type: 'Condition', label: 'Condition -1', outcome: 'failure' },
          { type: 'Item', label: 'Empty Vial', outcome: 'failure' },
        ],
      },
      {
        text: 'The dazzling golden-yellow potion.',

        requirement: { type: 'coin', cost: 20 },
        rewards: [
          { type: 'PP', label: 'PP +20', outcome: 'success' },
          { type: 'Coins', label: 'Coins +30', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
          { type: 'Item', label: 'Empty Vial', outcome: 'success' },
          { type: 'Buff', label: 'Debuff (Yellow Potion)', outcome: 'failure' },
          { type: 'Item', label: 'Empty Vial', outcome: 'failure' },
        ],
      },
      {
        text: 'The plain-looking drink sitting to the side.',

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
    description: 'I met a man who wanted to trade for the first screening bonus of The 13th Voidborn 13.',
    choices: [
      {
        text: 'Accept the trade.',

        requirement: { type: 'item', label: 'Item x1' },
        rewards: [
          { type: 'Item', label: 'Suspicious Box', outcome: 'success' },
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
    description: "A maid's encouragement made me realize how little I had to show for my efforts in the Journey lately. What should I do?",
    choices: [
      {
        text: "Throw all I've got into training and believe it pays off!",

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
    description: 'A swarm of slimes suddenly flooded the streets! The Town Guard issued an evacuation order.',
    choices: [
      {
        text: "Let's help drive out the slimes.",

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
    description: 'While focused on training, I noticed something buried beneath the dirt.',
    choices: [
      {
        text: "It'll take some effort... but let's dig it up!",

        requirement: { type: 'stamina', cost: 10 },
        rewards: [
          { type: 'Item', label: 'Suspicious Box', outcome: 'success' },
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
    description: 'The Apocalypse shop is holding a raffle for those who owned a ticket.',
    choices: [
      {
        text: 'Insert the ticket in the left box.',

        requirement: { type: 'item', label: 'Ticket x1' },
        rewards: [
          { type: 'Coins', label: 'Coins +150', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
        ],
      },
      {
        text: 'Insert the ticket in the right box.',

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
    description: 'Supplies arrived from NOA. But due to budget limits, I could only choose one item...',
    choices: [
      {
        text: 'Ask for supplements.',

        rewards: [
          { type: 'Stat', label: 'Power +10', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: 'Ask for the soft pillow.',

        rewards: [
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: 'Ask for spicy food.',

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
    description: 'A maid told us about the secret training from hell.',
    choices: [
      {
        text: 'How to master the punching machine.',

        requirement: { type: 'coin', cost: 20 },
        rewards: [
          { type: 'Buff', label: 'Buff (Punch Training)', outcome: 'success' },
          { type: 'Item', label: 'Strength Training Certificate', outcome: 'success' },
        ],
      },
      {
        text: 'How to run without tiring.',

        requirement: { type: 'coin', cost: 20 },
        rewards: [
          { type: 'Buff', label: 'Buff (Running Training)', outcome: 'success' },
          { type: 'Item', label: 'Vitality Training Certificate', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-aida-00b',
    category: 'Random Aida',
    name: 'Suspicious Outsider at Training',
    description: 'I ran into Aida by chance, and she offered me potions that were supposed to make Saviors stronger.',
    choices: [
      {
        text: "Guess we're drinking it, then!",

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
    description: 'On the way to fulfill a quest, we fell into a trap set by the Raiders!',
    choices: [
      {
        text: "Let's teach them a lesson!",

        requirement: { type: 'stat', stat: 'Power', threshold: 300 },
        rewards: [
          { type: 'PP', label: 'PP +10', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
        ],
      },
      {
        text: "Let's try talking them down.",

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
    description: 'While checking the quest board, I saw a post about a Suspicious Box...',
    choices: [
      {
        text: "Let's open it.",

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
    description: 'I received a request to complete a survey for the new department.',
    choices: [
      {
        text: 'Survey Response: Good',

        rewards: [
          { type: 'Coins', label: 'Coins +10', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
        ],
      },
      {
        text: 'Survey Response: Average',

        rewards: [
          { type: 'Coins', label: 'Coins +30', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
        ],
      },
      {
        text: 'Survey Response: Poor',

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
    description: 'We completed the secret training from hell.',
    choices: [
      {
        text: "I won't forget what I've learned.",

        requirement: { type: 'item', label: 'Training Item x1' },
        rewards: [
          { type: 'Item', label: 'Strength Training Completion Badge', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-encounter-00c',
    category: 'Random Encounter',
    name: 'Surrounded by Armed Knights',
    description: 'On our way to complete a quest, we suddenly found ourselves surrounded by armed knights.',
    choices: [
      {
        text: "Let's take them down!",

        requirement: { type: 'stat', stat: 'Health', threshold: 300 },
        rewards: [
          { type: 'PP', label: 'PP +10', outcome: 'success' },
          { type: 'Stat', label: 'Power +10', outcome: 'success' },
        ],
      },
      {
        text: 'I hope this helps our future cooperation.',

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
    description: 'During an expedition, we came across a mysterious statue.',
    choices: [
      {
        text: 'Pray to the woman holding the sword.',

        rewards: [
          { type: 'Stat', label: 'Power +20', outcome: 'success' },
          { type: 'Stat', label: 'Vitality -20', outcome: 'success' },
          { type: 'Item', label: 'Statue\'s Sword', outcome: 'success' },
        ],
      },
      {
        text: 'Pray to the woman holding the flowers.',

        rewards: [
          { type: 'Stat', label: 'Vitality +20', outcome: 'success' },
          { type: 'Stat', label: 'Power -20', outcome: 'success' },
          { type: 'Item', label: 'Statue\'s Flower', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-training-00c',
    category: 'Random Training',
    name: 'Secret Training Completion',
    description: 'We completed the secret training from hell.',
    choices: [
      {
        text: "I won't forget what I've learned.",

        requirement: { type: 'item', label: 'Training Item x1' },
        rewards: [
          { type: 'Item', label: 'Vitality Training Completion Badge', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-weather-00c',
    category: 'Random Weather',
    name: 'Perfect Weather',
    description: 'The weather is especially nice today. On days like this...',
    choices: [
      {
        text: 'I have to enjoy the peace and quiet while I can.',

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
    description: 'The flower from the statue we brought back from the expedition is glowing with an unearthly light.',
    choices: [
      {
        text: 'Pick up the flower.',

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
    description: 'During training, a thick fog rolled in, dense enough to make it hard to see even a few steps ahead. On days like this...',
    choices: [
      {
        text: "It's just a little less visibility, that's all!",

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
    description: 'During training, a thick fog rolled in, dense enough to make it hard to see even a few steps ahead. On days like this...',
    choices: [
      {
        text: "It's just a little less visibility, that's all!",

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
    description: 'The sword from the statue we brought back from the expedition is glowing with an unearthly light.',
    choices: [
      {
        text: 'Pick up the sword.',

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
    description: 'During training, thunder suddenly roared and lightning flashed across the sky overhead. On days like this...',
    choices: [
      {
        text: "I'm not backing down from a little thunder and lightning!",

        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'PP', label: 'PP +30', outcome: 'success' },
          { type: 'Condition', label: 'Condition -1', outcome: 'failure' },
          { type: 'PP', label: 'PP +30', outcome: 'failure' },
        ],
      },
      {
        text: 'We should find shelter instead of pushing ourselves.',

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
    description: 'During training, thunder suddenly roared and lightning flashed across the sky overhead. On days like this...',
    choices: [
      {
        text: "I'm not backing down from a little thunder and lightning!",

        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'PP', label: 'PP +30', outcome: 'success' },
          { type: 'Condition', label: 'Condition -1', outcome: 'failure' },
          { type: 'PP', label: 'PP +30', outcome: 'failure' },
        ],
      },
      {
        text: 'We should find shelter instead of pushing ourselves.',

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
    description: 'The Monolith Order asked me to sell them the Mysterious Relic.',
    choices: [
      {
        text: 'Sell the relic to the Order.',

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
    description: 'The suffocating heat wrapped around the quarters like a thick blanket. On days like this...',
    choices: [
      {
        text: "Let's use a handy fan.",

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
    description: 'Aida told me how to draw out the hidden power of the Mysterious Relic.',
    choices: [
      {
        text: 'Strike it with moderate force.',

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

        requirement: { type: 'item', label: 'Relic x1' },
        rewards: [
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
        ],
      },
      {
        text: 'Say that relics need to be handled with care.',

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
    description: 'The suffocating heat wrapped around the quarters like a thick blanket. On days like this...',
    choices: [
      {
        text: "Let's use a handy fan.",

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
    description: 'Cold wind seeped through the window cracks, and even under a thick blanket, the chill wouldn\'t fade. On days like this...',
    choices: [
      {
        text: "Let's use a hand warmer.",

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
    description: 'Cold wind seeped through the window cracks, and even under a thick blanket, the chill wouldn\'t fade. On days like this...',
    choices: [
      {
        text: "Let's use a hand warmer.",

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
    description: 'When I stopped by Apocalypse, Lisette the manager was busy organizing stock.',
    choices: [
      {
        text: "Let's help her.",

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
    description: 'I met a workshop employee selling swords modeled after legendary weapons.',
    choices: [
      {
        text: 'Buy one.',

        requirement: { type: 'coin', cost: 50 },
        rewards: [
          { type: 'Stamina', label: 'Stamina +15', outcome: 'success' },
          { type: 'Item', label: 'Legendary Sword (Replica)', outcome: 'success' },
        ],
      },
      {
        text: 'Look for a weak spot.',

        requirement: { type: 'stat', stat: 'Focus', threshold: 30 },
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stat', label: 'Power +15', outcome: 'success' },
          { type: 'Item', label: 'Legendary Sword (Replica)', outcome: 'success' },
        ],
      },
      {
        text: 'Take on the challenge.',

        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'Buff', label: 'Buff (Legend Savior PP)', outcome: 'success' },
          { type: 'Stat', label: 'Power +20', outcome: 'success' },
          { type: 'Item', label: 'Legendary Sword (Replica)', outcome: 'success' },
        ],
      },
      {
        text: 'Just walk past.',

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
    description: 'At Apocalypse, I found Lisa debating whether to buy the last item in stock.',
    choices: [
      {
        text: 'Buy it for her.',

        requirement: { type: 'coin', cost: 30 },
        rewards: [
          { type: 'Item', label: 'Moonlight Perfume Sample', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
          { type: 'Item', label: 'Moonlight Lip Balm Sample', outcome: 'success' },
          { type: 'Stat', label: 'Focus +10', outcome: 'success' },
          { type: 'Item', label: 'Moonlight Essence Sample', outcome: 'success' },
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

        requirement: { type: 'coin', cost: 50 },
        rewards: [
          { type: 'Stamina', label: 'Stamina +20', outcome: 'success' },
          { type: 'Item', label: 'Mysterious Relic', outcome: 'success' },
        ],
      },
      {
        text: 'What if I operate the crane myself?',

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
    description: 'While exploring the labyrinth, we were suddenly attacked by an ancient construct!',
    choices: [
      {
        text: 'Use the terrain to evade it.',

        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'Stat', label: 'Focus +10', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: SPD +1~5', outcome: 'success' },
        ],
      },
      {
        text: 'Stay calm and focus on defense.',

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
    description: 'While on leave from work, Lisette mentioned she was craving cotton candy.',
    choices: [
      {
        text: 'Well, wandering around to find it sounds fun in itself.',

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

        requirement: { type: 'stat', stat: 'Focus', threshold: 100 },
        rewards: [
          { type: 'Stat', label: 'Vitality +30', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: 'Overwhelm them with momentum.',

        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'Stat', label: 'Focus +30', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: "...We'll figure it out somehow!",

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

        requirement: { type: 'stat', stat: 'Protect', threshold: 100 },
        rewards: [
          { type: 'Stat', label: 'Power +30', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: 'We should head to our quarters now.',

        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'Stat', label: 'Protect +30', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: 'Time to run for it!',

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

        requirement: { type: 'coin', cost: 80 },
        rewards: [
          { type: 'Stamina', label: 'Stamina +40', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
      {
        text: 'Take a few deep breaths to relax.',

        requirement: { type: 'stat', stat: 'Focus', threshold: 125 },
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stat', label: 'Power +30', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: 'Do our best, like always.',

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

        requirement: { type: 'coin', cost: 80 },
        rewards: [
          { type: 'Stamina', label: 'Stamina +40', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
      {
        text: "Let's find out why they won't leave.",

        requirement: { type: 'stat', stat: 'Protect', threshold: 125 },
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +30', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: "Let's team up with the locals.",

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

        requirement: { type: 'item', label: 'Safe Key x1' },
        rewards: [
          { type: 'Item', label: 'Antique Key', outcome: 'success' },
          { type: 'PP', label: 'PP +15', outcome: 'success' },
        ],
      },
      {
        text: 'How about calling a skilled locksmith?',

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

        rewards: [
          { type: 'Item', label: 'Old Hourglass', outcome: 'success' },
        ],
      },
      {
        text: "I'll pass.",

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

        requirement: { type: 'coin', cost: 30 },
        rewards: [
          { type: 'SE Potential', label: 'SE Potential: ATK +2%', outcome: 'success' },
        ],
      },
      {
        text: 'A tome focused on survival.',

        requirement: { type: 'coin', cost: 30 },
        rewards: [
          { type: 'SE Potential', label: 'SE Potential: HP +2%', outcome: 'success' },
        ],
      },
      {
        text: 'Is there one useful in any situation?',

        requirement: { type: 'coin', cost: 50 },
        rewards: [
          { type: 'SE Potential', label: 'SE Potential: SPD +2', outcome: 'success' },
        ],
      },
      {
        text: "I don't need anything.",

        rewards: [
          { type: 'SE Potential', label: 'SE Potential: Effect Evasion +4%', outcome: 'success' },
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

        rewards: [
          { type: 'Item', label: 'Basic Training Manual - Offense', outcome: 'success' },
        ],
      },
      {
        text: 'A training manual that helps with survival',

        rewards: [
          { type: 'Item', label: 'Basic Training Manual - Survival', outcome: 'success' },
        ],
      },
      {
        text: 'A training manual that helps in various situations',

        rewards: [
          { type: 'Item', label: 'Basic Training Manual - Applied Tactics', outcome: 'success' },
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

        rewards: [
          { type: 'Stamina', label: 'Stamina +5', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +5', outcome: 'failure' },
          { type: 'Condition', label: 'Condition -1', outcome: 'failure' },
        ],
      },
      {
        text: "Let's train safely.",

        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'PP', label: 'PP +15', outcome: 'success' },
          { type: 'Buff', label: 'Buff (Training Success Up)', outcome: 'success' },
          { type: 'PP', label: 'PP +15', outcome: 'failure' },
        ],
      },
      {
        text: 'Hand out a Vitality Potion.',

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
    name: 'Annah: Blue and Boutique',
    description: 'Pressured by Annah, I ended up trying on and taking off all sorts of wild outfits.',
    arcana: 'Annah',
    arcanaGrade: 'SSR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_OFFICER_POLICE_02.png',
    choices: [
      {
        text: 'Do as she wishes.',

        rewards: [
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +15', outcome: 'success' },
        ],
      },
      {
        text: 'Maintain my dignity.',

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
    name: 'Bell: It Even Has Stripes',
    description: 'Bell lost a prideful stone-showcase contest and was unable to swallow her frustration.',
    arcana: 'Bell',
    arcanaGrade: 'SSR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_MAID_BELL_02.png',
    choices: [
      {
        text: 'I liked yours better.',

        rewards: [
          { type: 'Stat', label: 'Focus +5', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: Effect Hit +4%', outcome: 'success' },
        ],
      },
      {
        text: "Let's go find a better one!",

        rewards: [
          { type: 'Stat', label: 'Power +5', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: Effect Hit +4%', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'bell-deep-mourning-03',
    category: 'Arcana',
    name: 'Bell: Clash of Inflated Egos',
    description: 'While cleaning up the mess Muriel made after bursting into her room, Bell found a curse potion.',
    arcana: 'Bell',
    arcanaGrade: 'SSR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_MAID_BELL_02.png',
    choices: [
      {
        text: "You're not going to use that dangerous spell, are you?",

        rewards: [
          { type: 'Stat', label: 'Power +10', outcome: 'success' },
          { type: 'Stat', label: 'Focus +15', outcome: 'success' },
          { type: 'PP', label: 'PP +15', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: Ranger SE', outcome: 'success' },
          { type: 'Stat', label: 'Power +8', outcome: 'failure' },
          { type: 'Stat', label: 'Focus +12', outcome: 'failure' },
          { type: 'PP', label: 'PP +10', outcome: 'failure' },
          { type: 'SE Potential', label: 'SE Potential: Ranger SE', outcome: 'failure' },
        ],
      },
      {
        text: 'Bell Rhys. Hand me the vial and start running.',

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
    name: 'Besta: A Treasure in This Industry',
    description: 'While treasure hunting with Besta, I discovered a suspicious-looking red book.',
    arcana: 'Besta',
    arcanaGrade: 'SSR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_WEST_LANCER_02.png',
    choices: [
      {
        text: 'Open the book.',

        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
      {
        text: 'Let Besta have it.',

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
    name: 'Besta: Besta\'s Tactics Time',
    description: 'The Western Liberators were studying strategy at the library when Besta suddenly lost control.',
    arcana: 'Besta',
    arcanaGrade: 'SSR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_WEST_LANCER_02.png',
    choices: [
      {
        text: 'Stop Besta.',

        rewards: [
          { type: 'Stat', label: 'Vitality +8', outcome: 'success' },
          { type: 'Stat', label: 'Focus +8', outcome: 'success' },
          { type: 'Stat', label: 'Protect +15', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: Super Armor +2', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +8', outcome: 'failure' },
          { type: 'Stat', label: 'Focus +8', outcome: 'failure' },
          { type: 'Stat', label: 'Protect +15', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -20', outcome: 'failure' },
          { type: 'SE Potential', label: 'SE Potential: Super Armor +2', outcome: 'failure' },
        ],
      },
      {
        text: 'Stay back and watch.',

        rewards: [
          { type: 'Stat', label: 'Protect +15', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: Super Armor +2', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'carmen-night-view-beyond-the-window-01',
    category: 'Arcana',
    name: 'Carmen: For Whom the Soup Boils',
    description: 'I found Carmen serving soup at a relief shelter.',
    arcana: 'Carmen',
    arcanaGrade: 'SSR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_KINGDOM_SHIELDER_01.png',
    choices: [
      {
        text: 'Sure, I\'ll take a bowl.',

        rewards: [
          { type: 'Stat', label: 'Protect +5', outcome: 'success' },
          { type: 'Buff', label: 'Buff (FEEL_CONFIDENT +2)', outcome: 'success' },
        ],
      },
      {
        text: 'No, I\'ll settle for the civilian version...',

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
    name: 'Carmen: The Art of Shrimp Survival',
    description: 'The Monastir Knights were arguing and asked me to fill out a fake application form.',
    arcana: 'Carmen',
    arcanaGrade: 'SSR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_KINGDOM_SHIELDER_02.png',
    choices: [
      {
        text: 'Got it. I\'ll make it as hopeless as possible.',

        rewards: [
          { type: 'Stat', label: 'Endurance +8', outcome: 'success' },
          { type: 'Stat', label: 'Protect +12', outcome: 'success' },
        ],
      },
      {
        text: 'I actually have an even better idea...',

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
    name: 'Carmen: Traces of a Companion',
    description: 'I spotted Carmen browsing the Apocalypse shop. She seems interested in something...',
    arcana: 'Carmen',
    arcanaGrade: 'SSR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_KINGDOM_SHIELDER_02.png',
    choices: [
      {
        text: 'If it means that much to you, I\'ll buy it for you.',

        rewards: [
          { type: 'Stat', label: 'Protect +5', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: Carmen Unique SE', outcome: 'success' },
        ],
      },
      {
        text: 'Better to act on your feelings now than regret it later.',

        rewards: [
          { type: 'Stat', label: 'Endurance +8', outcome: 'success' },
          { type: 'Stat', label: 'Protect +12', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: Carmen Unique SE', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'charlotte-a-knight-s-oath-01',
    category: 'Arcana',
    name: 'Charlotte: A Knight\'s Oath',
    description: 'Charlotte helped Dana after a merchant tried to scam her. But as she talked about her hometown, she began to cry -- then bolted in embarrassment.',
    arcana: 'Charlotte',
    arcanaGrade: 'SSR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_KINGDOM_KNIGHT_01.png',
    choices: [
      {
        text: 'Call after her.',

        rewards: [
          { type: 'Stat', label: 'Vitality +5', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +15', outcome: 'success' },
          { type: 'Stat', label: 'Power +10', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
        ],
      },
      {
        text: 'Wait quietly for her to return.',

        rewards: [
          { type: 'Stat', label: 'Vitality +15', outcome: 'success' },
          { type: 'PP', label: 'PP +30', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: SPD +2', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'claire-the-perfect-bunny-girl-01',
    category: 'Arcana',
    name: 'Claire: A Bunny Next to a Bunny Next to a Bunny',
    description: 'I had a weird dream about a gathering of bunnies from all over Lavistar when Claire woke me up.',
    arcana: 'Claire',
    arcanaGrade: 'SSR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_BUNNY_SPEAR_01.png',
    choices: [
      {
        text: 'Confess everything.',

        rewards: [
          { type: 'Stat', label: 'Power +5', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'PP', label: 'PP +15', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: Claire Unique SE (HP +6%, Crit Rate +6%)', outcome: 'success' },
          { type: 'Stat', label: 'Power +5', outcome: 'failure' },
          { type: 'Stat', label: 'Vitality +5', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'failure' },
          { type: 'PP', label: 'PP +10', outcome: 'failure' },
          { type: 'SE Potential', label: 'SE Potential: Claire Unique SE (HP +6%, Crit Rate +6%)', outcome: 'failure' },
        ],
      },
      {
        text: 'Make a vague excuse.',

        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: HP +3%', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'elisa-divine-trial-01',
    category: 'Arcana',
    name: 'Elisa: Tell Us About Your First Love',
    description: 'Elisa, serving as a temporary teacher, worried about how to handle the children.',
    arcana: 'Elisa',
    arcanaGrade: 'SSR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_SAINTESS_ELF_01.png',
    choices: [
      {
        text: 'Tell a story the children will enjoy.',

        rewards: [
          { type: 'Stat', label: 'Endurance +15', outcome: 'success' },
        ],
      },
      {
        text: 'Stay strong!',

        rewards: [
          { type: 'Stat', label: 'Endurance +5', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +25', outcome: 'success' },
          { type: 'Buff', label: 'Debuff (UNIQUE_BURNOUT -5)', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: DEF +1~5', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'frey-the-indomitable-masterpiece-01',
    category: 'Arcana',
    name: 'Frey: A Bunny Next to a Bunny Next to a Bunny',
    description: 'I found Frey in the Candle Square lobby in wearing her make-or-break outfit, facing Luna in a card game.',
    arcana: 'Frey',
    arcanaGrade: 'SSR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_BUNNY_PRAY_01.png',
    choices: [
      {
        text: 'Bet on Frey to win.',

        rewards: [
          { type: 'Stat', label: 'Power +10', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +15', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: Frey Unique SE (Crit DMG +12%, HP +4%)', outcome: 'success' },
          { type: 'Stat', label: 'Power +10', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina +15', outcome: 'failure' },
          { type: 'Buff', label: 'Debuff (UNIQUE_WASTED -3)', outcome: 'failure' },
          { type: 'PP', label: 'PP +30', outcome: 'failure' },
          { type: 'SE Potential', label: 'SE Potential: Frey Unique SE (Crit DMG +12%, HP +4%)', outcome: 'failure' },
        ],
      },
      {
        text: 'Bet on Luna to win.',

        rewards: [
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: Frey Unique SE (Crit DMG +12%, HP +4%)', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'hilde-nostalgia-strikes-back-02',
    category: 'Arcana',
    name: 'Hilde: When Kids Run Wild',
    description: 'After taking care of the children with Hilde, Lyn offered us something in return.',
    arcana: 'Hilde',
    arcanaGrade: 'SSR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_COUNTERSIDE_HILDE_02.png',
    choices: [
      {
        text: 'Receive what Lyn has prepared.',

        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +20', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: DEF +2%', outcome: 'success' },
          { type: 'Buff', label: 'Buff (UNIQUE_OPERATION +3)', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +25', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'failure' },
        ],
      },
      {
        text: 'Point to the doll lying on the floor.',

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
    name: 'Hilde: Train as You Fight',
    description: 'Joining forces with Ceres, Hilde put me through training that was indistinguishable from real combat...',
    arcana: 'Hilde',
    arcanaGrade: 'SSR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_COUNTERSIDE_HILDE_02.png',
    choices: [
      {
        text: 'Pretend to be hurt!',

        rewards: [
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +25', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: Preemptive Defend +20%', outcome: 'success' },
        ],
      },
      {
        text: 'Bluff my way through it!',

        rewards: [
          { type: 'Stat', label: 'Power +5', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: Preemptive Defend +20%', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'kyra-as-cute-as-kyra-03',
    category: 'Arcana',
    name: 'Kyra: It May Have Been Easy to Get In, But...',
    description: 'I visited Kyra\'s home, but when I tried to leave, she grabbed me, insisting we play together all night.',
    arcana: 'Kyra',
    arcanaGrade: 'SSR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_MUTANT_MASK_03.png',
    choices: [
      {
        text: 'Run away.',

        rewards: [
          { type: 'Stat', label: 'Power +12', outcome: 'success' },
          { type: 'Stat', label: 'Focus +8', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: Kyra Unique SE (Assassin SE)', outcome: 'success' },
          { type: 'Stat', label: 'Power +10', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'failure' },
          { type: 'SE Potential', label: 'SE Potential: Kyra Unique SE (Assassin SE)', outcome: 'failure' },
        ],
      },
      {
        text: 'Accept my fate.',

        rewards: [
          { type: 'Stat', label: 'Power +5', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: Kyra Unique SE (Assassin SE)', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'lily-there-s-only-one-truth-02',
    category: 'Arcana',
    name: 'Lily: Donut Deduction',
    description: 'Lily and I met Annah, the donut-loving town guard, at Street Bakers.',
    arcana: 'Lily',
    arcanaGrade: 'SSR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_DETECTIVE_WATSON_02.png',
    choices: [
      {
        text: "You didn't do anything wrong, Lily.",

        rewards: [
          { type: 'Buff', label: 'Buff (UNIQUE_KEEN_EYE +3)', outcome: 'success' },
        ],
      },
      {
        text: 'I think you went a bit too far.',

        rewards: [
          { type: 'Stamina', label: 'Stamina -15', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: Effect Hit +4%', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'lyn-under-the-glass-moon-over-the-pavilion-02',
    category: 'Arcana',
    name: 'Lyn: The Value of All Things',
    description: 'While staying at the quarters, Lyn and I found a discarded wooden box.',
    arcana: 'Lyn',
    arcanaGrade: 'SSR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_EASTERN_OWL_02.png',
    choices: [
      {
        text: "Wait, I'll check it first.",

        rewards: [
          { type: 'Stat', label: 'Protect +25', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
        ],
      },
      {
        text: "...What if there's something weird inside?",

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
    name: 'Marcille: Temperance',
    description: 'Clarissa and Marcille ran into each other while hunting a mutant rabbit.',
    arcana: 'Marcille',
    arcanaGrade: 'SR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_CONSTRUCT_WRENCH_01.png',
    choices: [
      {
        text: 'Wait, Clarissa...!',

        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +5', outcome: 'success' },
        ],
      },
      {
        text: 'I heard there\'s a monster mimicking a rabbit around here!',

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
    name: 'Marcille: Mutant Rabbit Trap',
    description: 'Marcille mentioned a creature like a Voidborn that tempts people into corruption.',
    arcana: 'Marcille',
    arcanaGrade: 'SR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_CONSTRUCT_WRENCH_02.png',
    choices: [
      {
        text: 'There\'s no way something like that exists.',

        rewards: [
          { type: 'SE Potential', label: 'SE Potential: DEF +1~5', outcome: 'success' },
        ],
      },
      {
        text: 'Th-that\'s terrifying...',

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
    name: 'Omega: O-Mega Generous',
    description: 'Omega is creating a ton of counterfeit money for Muriel and Elisa.',
    arcana: 'Omega',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'Watch quietly.',

        rewards: [
          { type: 'Stat', label: 'Power +12', outcome: 'success' },
          { type: 'Stat', label: 'Focus +8', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: Omega Unique SE (Defender SE)', outcome: 'success' },
        ],
      },
      {
        text: 'Intervene.',

        rewards: [
          { type: 'Stat', label: 'Power +12', outcome: 'success' },
          { type: 'Stat', label: 'Focus +8', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: Omega Unique SE (Defender SE)', outcome: 'success' },
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
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_CONSTRUCT_BOMB_01.png',
    choices: [
      {
        text: 'The dewy rose shade...?',

        rewards: [
          { type: 'Stat', label: 'Power +5', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +5', outcome: 'success' },
          { type: 'Stat', label: 'Focus +12', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: ATK +1~5', outcome: 'success' },
        ],
      },
      {
        text: 'The tangy grapefruit orange...?',

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
    name: 'Roberta: Ride Safe!',
    description: 'Roberta picked up a new hobby from Harley!',
    arcana: 'Roberta',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'Should I ask what happened?',

        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: Roberta Unique SE', outcome: 'success' },
        ],
      },
      {
        text: 'She looks busy, so I should leave her be...',

        rewards: [
          { type: 'Stamina', label: 'Stamina +15', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: Roberta Unique SE', outcome: 'success' },
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
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_BUNNY_SCISSORS_01.png',
    choices: [
      {
        text: 'Should we try convincing her together?',

        rewards: [
          { type: 'Stat', label: 'Power +20', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: Scarlet Unique SE', outcome: 'success' },
          { type: 'Stat', label: 'Power +10', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'failure' },
          { type: 'SE Potential', label: 'SE Potential: Scarlet Unique SE', outcome: 'failure' },
        ],
      },
      {
        text: 'Maybe she really is more comfortable alone.',

        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: ATK +3%', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'scarlet-the-great-and-amazing-bunny-girl-01a',
    category: 'Arcana',
    name: 'Scarlet: Spreading Her Wings',
    description: 'While playing with children in the park, Scarlet noticed a shy girl sitting apart from the others.',
    arcana: 'Scarlet',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'I believe in you, Scarlet! I can\'t wait to see you fly!',

        rewards: [
          { type: 'Stat', label: 'Power +10', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +8', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
      {
        text: 'Be careful, Scarlet...!',

        rewards: [
          { type: 'Stamina', label: 'Stamina +15', outcome: 'success' },
          { type: 'Buff', label: 'Debuff (UNIQUE_MUSCLE_INJURY -3)', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +3', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: HP +1~5', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'scarlet-the-great-and-amazing-bunny-girl-02',
    category: 'Arcana',
    name: 'Scarlet: A Refined Palate',
    description: 'Scarlet entered a pancake-eating contest held in the shopping district.',
    arcana: 'Scarlet',
    arcanaGrade: 'SSR',
    choices: [
      {
        text: 'Root for Scarlet.',

        rewards: [
          { type: 'Stat', label: 'Power +15', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: ATK +2%', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +12', outcome: 'success' },
          { type: 'PP', label: 'PP +15', outcome: 'success' },
        ],
      },
      {
        text: 'Root for Charlotte.',

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
    name: 'Smile: Evolution of a Species',
    description: 'When Smile said she didn\'t like cats, Asherah encouraged her to try petting one.',
    arcana: 'Smile',
    arcanaGrade: 'SR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_VOYAGER_SMILE_01.png',
    choices: [
      {
        text: 'Try petting its head gently.',

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
    name: 'Trish: Frish Express Errand Agency',
    description: 'Trish and Frey argued over their new business venture and asked for my opinion.',
    arcana: 'Trish',
    arcanaGrade: 'SR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_STELLAR_THIEF_02.png',
    choices: [
      {
        text: 'Maybe it\'s best to start with what you can do now.',

        rewards: [
          { type: 'Stat', label: 'Power +18', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: 'Money isn\'t everything.',

        rewards: [
          { type: 'Stat', label: 'Power +8', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential: ATK +3%', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'yoo-mina-experienced-mercenary-01',
    category: 'Arcana',
    name: 'Yoo Mina: Nothing in This World Comes Easy',
    description: 'Delivery job just doesn\'t seem to suit Mina.',
    arcana: 'Yoo Mina',
    arcanaGrade: 'SSR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_COUNTERSIDE_MINA_01_1.png',
    choices: [
      {
        text: 'Let\'s try something else!',

        rewards: [
          { type: 'Stamina', label: 'Stamina +15', outcome: 'success' },
        ],
      },
      {
        text: 'Let\'s eat something good and forget about it!',

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
    name: 'Yoo Mina: Workaholism, Taken Too Far',
    description: 'Due to her time in a brutally demanding workplace seems to feel more at ease as the heavier her workload becomes...',
    arcana: 'Yoo Mina',
    arcanaGrade: 'SSR',
    bgImage: '/images/games/star-savior/journey-bg/ILLUST_BG_JOURNEY_COUNTERSIDE_MINA_02.png',
    choices: [
      {
        text: 'What if you replicate that old routine?',

        rewards: [
          { type: 'PP', label: 'PP +40', outcome: 'success' },
        ],
      },
      {
        text: 'Let\'s take a long break.',

        rewards: [
          { type: 'SE Potential', label: 'SE Potential: Crit DMG +4%', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
];
