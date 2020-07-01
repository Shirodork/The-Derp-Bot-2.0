/**
 * Summary: Similar to that of !reddit, this allows the bot to post NSFW subreddit posts
 * 
 * Useage: !redditnsfw [subreddit]
 */
const Discord = require("discord.js");
const snekfetch = require('snekfetch');

exports.run = async (client, message, args) => {

    // Argument Check
    if(!args[0]) return message.channel.send("Invalid Syntax! Command format is: !reddit [subreddit] (ex. !reddit dankmemes)")

    // Subreddit Variable
    var sreddit = args[0]
        
	try {
        // Get Subreddit JSON
        const { body } = await snekfetch
            .get(`https://www.reddit.com/r/${sreddit}.json?sort=top&t=week`)
            .query({ limit: 800 });

        // Ensure NSFW Subreddit
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => post.data.over_18);
        if (!allowed.length) return message.channel.send('No NSFW posts Detected!');

        // Choose random post
        const randomnumber = Math.floor(Math.random() * allowed.length);

        // Embed and send
        const embed = new Discord.RichEmbed()
        .setColor(0x00A2E8)
        .setTitle(allowed[randomnumber].data.title)
        .setDescription("Posted by: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
        .setFooter(`Memes and Images provided by r/${sreddit}`)
        .setURL(allowed[randomnumber].data.url)
        message.channel.send(embed)

        // Direct Link Backup
        await message.channel.send(`Direct Link Source:  ${allowed[randomnumber].data.url} `)

    // Error Catch
    } catch (err) {
        console.log(err)
        return message.channel.send("An error has occured. The subreddit may not be an image-board, please try another subreddit. A Console Log has been created!")
    }
    
}