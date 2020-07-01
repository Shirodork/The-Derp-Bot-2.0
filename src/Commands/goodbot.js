/**
 * Summary: This command is for complimenting the bot if you feel like it. You can add extra reponses below.
 * Useage: !goodbot
 * @param {*Discord Bot} client 
 * @param {*Message Channel} message 
 * @param {*User Arguments} args 
 * @param {*Operators} ops 
 */

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
        'Compliment recieved!',
        'Appreciated!',
        'I aim to please!',
        'Thanks!',
        'No U'
    ]

    return message.channel.send(responses[Math.floor(Math.random() * responses.length)])
}