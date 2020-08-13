/*
Summary: Contains information pertaining to the bot and the creator!
Syntax: !bot
*/

const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {

    const embed = {
        "title": "Bot Information",
        "description": "'The Derp Bot ©' is an all purpose bot created by a degenerate.'",
        "color": 65483,
        "timestamp": new Date(),
        "footer": {
            "icon_url": client.user.avatarURL,
            "text": `${client.user.username} ©`
        },
        "thumbnail": {
            "url": client.user.avatarURL
        },
        "fields": [
        {
            "name": "Feedback",
            "value": "If you encounter bugs or errors, contact the owner or post an issue at the GitHub here: https://github.com/Shirodork/The-Derp-Bot-2.0"
        },
        {
            "name": "Get Started",
            "value": 'To get started, type "!help" to get a list of commands.'
        },
      
        ]
    };

    return message.channel.send({embed});
}