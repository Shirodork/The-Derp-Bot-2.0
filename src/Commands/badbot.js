exports.run = (client, message, args, ops) => {

    var responses =
    [
        'Sorry!',
        'If there is an issue with this command, Let Tech Support Know',
        'Appologies',
        'The bot is sorry',
        'Did I do something wrong?',
        'Dont say that!',
        'I dont want to hear that!',
        'Commit no live, please',
        `Sorry that I couldn't help`,
        'Please forgive this mistake!',
        '~~Death be upon you~~'
    ]

    return message.channel.send(responses[Math.floor(Math.random() * responses.length)])
}