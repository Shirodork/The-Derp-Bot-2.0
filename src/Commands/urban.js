const urban = require('urban');
const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {

    // Check for arguments
    if (!args[0]) {
        return message.channel.send("Please enter a word to define! [ Syntax: !urban (word) || Example: !urban Karen ]")
    }
            // Join Arguments to string
            let input = args.join(' ');
    if (args == 'randomword') {

        urban.random().first(json => {
            // Finding Definitions and separating them via (match function) into an array
            let definition = json.definition.match(/(.|[\r\n]){1,1024}/g);
            let example = json.example.match(/(.|[\r\n]){1,2040}/g);
            // DEBUG CONSOLE FOR JSON -- console.log(json);
            // DEBUG CONSOLE FOR DEFINITION -- console.log(definition)

            // Checking to see if word has more than 1 definition

            if (example[0].length > 1024) {
                example[0] = example[0].substring(0, 1018) + `[...]`;
            }
            const embed = {
                "title": json.word,
                "url": json.permalink,
                "description": definition[0] + '...',
                "color": 839204,
                "timestamp": new Date(),
                "footer": {
                    "icon_url": message.author.avatarURL,
                    "text": `Requested by: ${message.author.tag} || Definition by: ${json.author}`
                },
                "thumbnail": {
                    "url": "https://is4-ssl.mzstatic.com/image/thumb/Purple111/v4/7e/49/85/7e498571-a905-d7dc-26c5-33dcc0dc04a8/source/512x512bb.jpg"
                },
                "author": {
                    "name": "Urban Dictionary",
                    "url": "https://www.urbandictionary.com/",
                    "icon_url": "https://is4-ssl.mzstatic.com/image/thumb/Purple111/v4/7e/49/85/7e498571-a905-d7dc-26c5-33dcc0dc04a8/source/512x512bb.jpg"
                },
                "fields": [

                    {
                        "name": "Example",
                        "value": example[0],
                        "inline": false
                    },
                    {
                        "name": "Upvotes",
                        "value": json.thumbs_up,
                        "inline": true
                    },
                    {
                        "name": "Downvotes",
                        "value": json.thumbs_down,
                        "inline": true
                    }
                ]

            };
            return message.channel.send({ embed });
        })
    } else {


        // Call Urban API
        urban(input).first(json => {

            // If no JSON is returned (Word does not exist)
            if (!json) {
                return message.channel.send("This word does not exist within Urban Dictionary")
            }

            // Finding Definitions and separating them via (match function) into an array
            let definition = json.definition.match(/(.|[\r\n]){1,1024}/g);
            let example = json.example.match(/(.|[\r\n]){1,2040}/g);
            // DEBUG CONSOLE FOR JSON -- console.log(json);
            // DEBUG CONSOLE FOR DEFINITION -- console.log(definition)

            // Checking to see if word has more than 1 definition

            if (example[0].length > 1024) {
                example[0] = example[0].substring(0, 1018) + `[...]`;
            }
            console.log(definition[0])
            const embed = {
                "title": json.word,
                "url": json.permalink,
                "description": definition[0] + '...',
                "color": 839204,
                "timestamp": new Date(),
                "footer": {
                    "icon_url": message.author.avatarURL,
                    "text": `Requested by: ${message.author.tag} || Definition by: ${json.author}`
                },
                "thumbnail": {
                    "url": "https://is4-ssl.mzstatic.com/image/thumb/Purple111/v4/7e/49/85/7e498571-a905-d7dc-26c5-33dcc0dc04a8/source/512x512bb.jpg"
                },
                "author": {
                    "name": "Urban Dictionary",
                    "url": "https://www.urbandictionary.com/",
                    "icon_url": "https://is4-ssl.mzstatic.com/image/thumb/Purple111/v4/7e/49/85/7e498571-a905-d7dc-26c5-33dcc0dc04a8/source/512x512bb.jpg"
                },
                "fields": [

                    {
                        "name": "Example",
                        "value": example[0],
                        "inline": false
                    },
                    {
                        "name": "Upvotes",
                        "value": json.thumbs_up,
                        "inline": true
                    },
                    {
                        "name": "Downvotes",
                        "value": json.thumbs_down,
                        "inline": true
                    }
                ]

            };
            return message.channel.send({ embed });



            /*
                    else {
                        const def = new Discord.MessageEmbed()
                        .setColor('839204')
                        .setTitle(json.word)
                        .setURL(json.permalink, true)
                        .setDescription(json.definition)
                        .setThumbnail('https://is4-ssl.mzstatic.com/image/thumb/Purple111/v4/7e/49/85/7e498571-a905-d7dc-26c5-33dcc0dc04a8/source/512x512bb.jpg')
                        .addField('Example', json.example)
                        .addField('Upvotes', json.thumbs_up, true)
                        .addField('Downvotes', json.thumbs_down, true)
                        .setTimestamp(new Date())
                        .setFooter(`Definition by: ${json.author} || Requested by: ${message.author.tag}`)        
                    
                        message.channel.send(def);
            
                    }
                    */
        })
    }
}