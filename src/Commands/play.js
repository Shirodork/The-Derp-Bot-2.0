const ytdl = require('ytdl-core');

exports.run = async (client, message, args, ops) => {
    
     // Check for BANNED role
     if(message.member.roles.has('580452048659546125')) return message.channel.send('You have been temporarily banned from using this command!');
   
    // Member Voice Channel Check 
    if (!message.member.voiceChannel) return message.channel.send('You must be in a voice channel to use this command!');

    // URL check
    if(!args[0]) return message.channel.send('Please input a URL or Keywork to search!');

    // URL validation
    let validate = await ytdl.validateURL(args[0]);

    // Check validation
    if (!validate) {

        let commandFile = require('./search.js');
        return commandFile.run(client, message, args, ops);


    }
    //
    let info =  await ytdl.getInfo(args[0]);

    let data = ops.active.get(message.guild.id) || {};

    // Update the data
    if(!data.connection) data.connection = await message.member.voiceChannel.join();    // If no connection
    if(!data.queue) data.queue = [];
    data.guildID = message.guild.id;

    //////////////
    await  console.log(info.title);
    console.log(args[0]);

    let debug = ytdl.getInfo(args[0]);

    console.log(debug.songTitle);

    // Add song to queue
    data.queue.push({
        songTitle: info.title,
        requester: message.author.tag,
        url: args[0],
        announceChannel: message.channel.id
    });

    // Dispatcher Exists Check
    if(!data.dispatcher) play(client, ops, data);
    else {

        // Send Message: Song Added
        message.channel.send(`**Added to Queue:** __${info.title}__ **| Requested By:** <@${message.author.id}>`)
    }

    // Update MAP
    ops.active.set(message.guild.id, data);

}

// FUNCTION: PLAY
async function play(client, ops, data){

    await console.log('Fetching music')
    // Send Message: Now Playing
    client.channels.get(data.queue[0].announceChannel).send(`**Now Playing:** __${data.queue[0].songTitle}__ **| Requested By:** ${data.queue[0].requester}`);

    // Updat Dispatcher Data
    data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, {filter: 'audioonly'}));
    data.dispatcher.guildID = data.guildID;

    // Listener: Runs when song ends
    data.dispatcher.once('end', function() {

        // Runs a finish Function
        finish(client, ops, data);
    })
}

function finish(client, ops, dispatcher){

    // Fetch Guild Object from Map    
    let fetched = ops.active.get(dispatcher.guildID);

    // Remove first item in queue
    fetched.queue.shift();
 
    // Check if Queue is Empty
    if(fetched.queue.length > 0) {

        // Update Map with Queue
        ops.active.set(dispatcher.guildID, fetched);

        play(client, ops, fetched);
    } else {

        ops.active.delete(dispatcher.guildID);

        let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;
        if(vc) vc.leave();
    }
}