/*
Summary: Flip a coin. This method involves a JSON repository as opposed to a random number generator between 0 and 1. 
            This allows for custom responses such as "Landed on it's side" or other story elements. Must add enough heads
            and tails to allow for proper probablility. Probably better ways to complete this.
Syntax: !coinflip
*/

exports.run = (client, message, args, ops) => {

    // Holds possible responses. Can add custom responses
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

    // Message Response
    message.channel.send("You flip a coin...\n")
    return message.channel.send(responses[Math.floor(Math.random() * responses.length)])
}