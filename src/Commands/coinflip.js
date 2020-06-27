exports.run = (client, message, args, ops) => {

    var responses =
    [
       'Heads',       'Tails',       'Heads',       'Tails',       'Heads',
       'Heads',       'Heads',       'Tails',       'Heads',       'Heads',
       'Tails',       'Tails',       'Heads',       'Heads',       'Heads',
       'Heads',       'Heads',       'Heads',       'Heads',       'Heads',
       'Tails',       'Heads',       'Heads',       'Tails',       'Tails',
       'Heads',       'Tails',       'Tails',       'Tails',       'Heads',
       'Tails',       'Tails',       'Tails',       'Heads',       'Tails',
       'Tails',       'Heads',       'Tails',       'Tails',       'Tails',
       'Tails',       'Tails',       'Heads',       'Tails',       'Heads',
       'Heads',       'Tails',       'Tails',       'Heads',       'Tails',
        `Wow! It landed on it's side!`


    ]

    message.channel.send("You flip a coin...\n")
    return message.channel.send(responses[Math.floor(Math.random() * responses.length)])
}