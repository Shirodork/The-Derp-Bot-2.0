exports.run = (client, message, args, ops) => {

    // Local Repository of commands
    var responses =
    [
        'Sorry!',
        'If there is an issue with this command, Let Tech Support Know or report it on GitHub @ https://github.com/Shirodork/The-Derp-Bot-2.0!',
        'Apologies',
        'The bot is sorry',
        'Did I do something wrong?',
        'Dont say that!',
        'I dont want to hear that!',
        'Commit no live, please',
        `Sorry that I couldn't help`,
        'Please forgive this mistake!',
        '~~Death be upon you~~',
        'Forgive Me!',
        'Not My Problem!',
        'Must be a coding error, HA!'
    ]

    // Returns a random response
    return message.channel.send(responses[Math.floor(Math.random() * responses.length)])
}