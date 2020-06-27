const ytdl = require('ytdl-core');

exports.run = async (client, message, args, ops) => {

    // Member Voice Channel Check 
    if (!message.member.voiceChannel) return message.channel.send('You must be in a voice channel to use this command!');

    // Bot Voice Channel Check
    if(!message.guild.me.voiceChannel) return message.channel.send('I\'m not in the channel!');

    // Check if user and bot are in the same channel
    if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('You must be connected to the same channel as me!');

        //// TESTING
    
    data.connection.dispatcher.end();

    return console.log('Testing');
    ///// TESTING


    // Leave Channel
    message.guild.me.voiceChannel.leave();

    // Send Message
    message.channel.send('Ending music playback and leaving channel...');
}