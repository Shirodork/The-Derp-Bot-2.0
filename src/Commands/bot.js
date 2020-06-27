const Discord = require('discord.js');


exports.run = async (client, message, args, ops) => {

    const embed = {
        "title": "Bot Information",
        "description": "'The Derp Bot ©' is an all purpose bot created by ShiroDork#0001.'",
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
            "value": "If you encounter bugs or errors, contact the owner"
        },
        {
            "name": "Get Started",
            "value": 'To get started, type "!help" to get a list of commands.'
        },
      
        ]
    };

    return message.channel.send({embed});
}