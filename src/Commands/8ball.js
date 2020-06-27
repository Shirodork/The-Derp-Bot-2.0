exports.run = (client, message, args, ops) => {

  var responses =
    [
      'Maybe.',
      'Certainly not.',
      'I hope so.',
      'Not in your wildest dreams.',
      'There is a good chance.',
      'Quite likely.',
      'I think so.',
      'I hope not.',
      'I hope so.',
      'Never!',
      'Pfft.',
      'Sorry, bucko.',
      'Hell, yes.',
      'Hell to the no.',
      'The future is bleak.',
      'The future is uncertain.',
      'I would rather not say.',
      'Who cares?',
      'Possibly.',
      'Never, ever, ever.',
      'There is a small chance.',
      'Yes!',
      'lol no.',
      'There is a high probability.',
      'What difference does it makes?',
      'Not my problem.',
      'Ask someone else.',
      '*cough* ~~zach sucks~~ *WHEEZE*'
    ]

  return message.channel.send(responses[Math.floor(Math.random() * responses.length)])
}