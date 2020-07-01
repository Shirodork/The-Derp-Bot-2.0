/**
 * Summary: Pulls a random post/image from a specified subreddit
 * 
 * Useage: !reddit [subreddit]
 */

const Discord = require("discord.js");
const snekfetch = require('snekfetch');

exports.run = async (client, message, args) => {

    // Argument Check
    if(!args[0]) return message.channel.send("Invalid Syntax! Command format is: !reddit [subreddit] (ex. !reddit dankmemes)")

    // Set subreddit var
    var sreddit = args[0]
        
	try {
        // Grab Subreddit JSON
        const { body } = await snekfetch
            .get(`https://www.reddit.com/r/${sreddit}.json?sort=top&t=week`)
            .query({ limit: 800 });

        // Filter OUT NSFW
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('It seems were out of SFW Memes! Dont TEST my filter >:C');

        // Choose a random post
        const randomnumber = Math.floor(Math.random() * allowed.length)

        // Create the embed
        const embed = new Discord.RichEmbed()
        .setColor(0x00A2E8)
        .setTitle(allowed[randomnumber].data.title)
        .setDescription("Posted by: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
        .setFooter(`Memes and Images provided by r/${sreddit}`)
        .setURL(allowed[randomnumber].data.url)
        message.channel.send(embed)

        // Send message
        await message.channel.send(`Direct Link Source:  ${allowed[randomnumber].data.url} `)

    // Catch Error
    } catch (err) {
        console.log(err)
        return message.channel.send("An error has occured. The subreddit may not be an image-board, please try another subreddit. A Console Log has been created!")
    }
    
}