exports.run = (client, message, args, ops) => {

    var responses =
    [
        'Thank you!',
        'Your compliment is noted',
        'Beep boop!',
        'Thanks!',
        `~~you\'re all going to die~~`,
        'Haha, yeah',
        '*Happy Whirring*',
        'Glad I could help!',
        'Compliment recieved!'
    ]

    return message.channel.send(responses[Math.floor(Math.random() * responses.length)])
}