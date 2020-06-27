/*
Summary: Pulls a Dank Meme from the subreddit r/DankMeme
Syntax: !dankmeme
*/

const Discord = require("discord.js");
const snekfetch = require('snekfetch');     // HTTP Requester

exports.run = async (client, message, args) => {


	try {

        // Retrieve HTTP Request into body
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/dankmemes.json?sort=top&t=week')
            .query({ limit: 800 });

        // NSFW Filter
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);

        // If nothing returns
        if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');

        // Generate random number to choose random post
        const randomnumber = Math.floor(Math.random() * allowed.length);

        // Create a discord rich embed for meme
        const embed = new Discord.RichEmbed()
        .setColor(0x00A2E8)
        .setTitle(allowed[randomnumber].data.title)
        .setDescription("Posted by: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
        .setFooter("Memes provided by r/dankmemes")
        .setURL(allowed[randomnumber].data.url);

        // Send embed (await for embed to be sent before direct link)
        await message.channel.send(embed);

        // Send direct link - I make the bot do this just in case the embed dosent load the image, you can take this out.
        message.channel.send( `Direct Link: ${allowed[randomnumber].data.url}`);

    // Error catch
    } catch (err) {
        return message.channel.send('Error Occured'. err);
        return console.log(err);    // Console log error
    }
}