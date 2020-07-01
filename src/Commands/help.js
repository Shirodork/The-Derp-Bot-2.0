/**
 * Summary: This command lists all available commands. You can add a category to get a more detailed list of command functions.
 * 
 * Useage: !help    OR      !help [Category]
 */

exports.run = async (client, message, args, ops) => {

    // If there are no arguemnts, list commands
    if (!args[0]) {
        const embed = {
            "title": "Commands",
            "description": 'To find out more information about what commands do, type "!help [category]" to get a list of descriptions!',
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
                    "name": "General & Utility",
                    "value": "**!bot | !botinfo | !help | !say | !ping | !timer | !goodbot | !badbot | !google | !**",
                },
                {
                    "name": "Music",
                    "value": '**!play | !search | !queue | !resume | !pause | !leave | !skip | !fskip | !volume**',
                },
                {
                    "name": "Fun",
                    "value": "**!ascii | !chewtle | !kys | !knock | !loot | !say | !zechping | !zech | !nou | !grenade | !reddit | !redditnsfw | !randomchamp | !pun | !dadjoke | !puppies | !heavenorhell | !8ball | !coinflip | !catfacts | !dogfacts | !urban**",
                },
                {
                    "name": "Memes",
                    "value": "**!memeddungeon** | **!memeRetarded** | **!memeTruth** | **!memeSpongebob** | **!waiting**" 
                },
                {
                    "name": "Emotes",
                    "value": "**!thinkhole**"
                },
                {
                    "name": "Moderation",
                    "value": "**!clear | !ping | !purge | !fskip | !setstatus | !tempban**"
                },



            ]
        };

        return message.channel.send({ embed });

    }

    // If there are arguments, show commands
    else if(args[0].toLowerCase() == 'general'){

        const embed = {
            "title": "General Commands",
            "description": 'General Commands and their functions.',
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
                    "name": "General",
                    "value": "**!bot/!botinfo**\t\t-Displays Bot Information\n**!help**\t-!help [Category]: Displays Available Commands\n**!say**\t-!say [Message]: Bot Repeats Message\n**!ping**\t-Pings The Bot\n**!timer**\t-!timer [Minutes] [Seconds]: Sets a timer\n**!goodbot/!badbot**\t-Tell the bot how its doing"
                },

            ]
        };

        return message.channel.send({embed});
    }
    else if(args[0].toLowerCase() == 'music'){

        const embed = {
            "title": "Music Commands",
            "description": 'Music Commands and their functions. You must be in a Voice Channel to use these commands!',
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
                    "name": "Music",
                    "value": '**!play**\t-!play [Search Term/URL]: Searches For a Song Or Plays a YT URL\n**!search**\t-!search [Search Term]: Use The !play Command Instead\n**!queue**\t-Shows The Current Music Queue (If applicable)\n**!resume**\t-Resumes Paused Playback\n**!pause**\t-Pauses The Current Song\n**!leave**\t-Stops Playback And Forces The Bot To Leave\n**!skip**\t-Skips Current Song. VOTE MODE: ENABLED\n**!fskip**-Forces Song Skip. Must Have "@SkyNet Operator" Role!\n**!volume**\t-!volume [1-20]: Allows For Volume Control. WARNING: Volumes Over 10 May Result In Loss Of Quality!',
                },

            ]
        };
        return message.channel.send({embed});
    }
    else if(args[0].toLowerCase() == 'fun'){

        const embed = {
            "title": "Fun Commands",
            "description": 'Fun Commands and their functions.',
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
                    "name": "Fun",
                    "value": "**!ascii**\t-!ascii [input]: Converts Text to Ascii Text\n**!chewtle**\t-Chewtle Picture is sad\n**!kys**\t-Kermit SewerSlide!\n**!knock**\t-Tells a Knock Knock Joke\n**!loot**\t-Cancer....\n**!say**\t-!say [Message] Bot Repeats After You!\n**!zech**\t-!zech [x]: Ping The Boi 'x' Amount\n**!nou**\t-Uno Reverse Card Ascii\n**!grenade**\t-The Zach Apex Special!\n**!reddit**\t-!reddit [Subreddit]: Posts an image from a subreddit\n**!redditnsfw**\t-Same as reddit, but for nsfw subreddits\n**!randomchamp**\t-Picks a random LoL champ\n**!pun**\t-What a pun-ny joke (killme)\n**!dadjoke**\t-Random dad joke\n**!puppies**\t-Random Puppy Image\n**!heavenorhell**\t-Basically Reddit 50/50 but worse\n**!catFacts**\t-Random Cat Facts\n**!dogFacts**\t-Random Dog Facts\n**!urban**\t-Look up the Urban Dictionary Definition of a word"
                },

            ]
        };

        return message.channel.send({embed});
    }
    else if(args[0].toLowerCase() == 'memes' || args[0].toLowerCase() == 'meme'){

        const embed = {
            "title": "Meme Commands",
            "description": 'Meme Commands and their functions.',
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
                    "name": "Meme",
                    "value": '**!memeDdungeon**\t-!dankdungeon [input]: Darkest Dungeon Meme\n**!memeRetarded**\t-!memeRetarded [input]: "Oh No, It\'s Retarded"\n**!memeTruth**\t-!memeTruth [Input]: Scroll of Truth Meme\n**!memeSpongebob**\t-!memeSpongebob [Input]: Professional Retard Meme\n**!waiting**\t-!waiting [Opt. Input]: Baby Yoda waiting...'
                },

            ]
        };
        return message.channel.send({embed});
    }
    else if(args[0].toLowerCase() == 'emotes' || args[0].toLowerCase() == 'emote'){
        var k = "<a:ThinkHole:526646802766757898>";
        const embed = {
            "title": "Emote Commands",
            "description": 'Emote Commands and their functions.',
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
                    "name": "Emotes",
                    "value": `**!thinkhole**\t-${k}`
                },

            ]
        };
        return message.channel.send({embed});
    }
    else if(args[0].toLowerCase() == 'moderation' || args[0].toLowerCase() == 'mods'){
        return message.channel.send("Moderator Commands, for Mods only! Check the mod file for a list of commands!")
    } 

        return message.channel.send("Invalid Syntax! Try again!");

}