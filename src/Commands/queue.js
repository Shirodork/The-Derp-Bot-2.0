/**
 * Summary: This command relays the current music in queue for the bot. 
 * 
 * Useage: !queue
 */

exports.run = async (client, message, args, ops) => {

    // Fetch Guild Objects from MAP
    let fetched = ops.active.get(message.guild.id);

    if(!fetched) return message.channel.send('There is no music in the queue!');

    // Variables
    let queue =  fetched.queue;
    let nowPlaying = queue[0];

    // Create NowPlaying Response 
    let resp = `**Now Playing:** __${nowPlaying.songTitle}__ **|| Requested By:** *${nowPlaying.requester}*\n\n__**Music Queue**__\n`;

    // Repeat for the queue
    for(var i = 1; i < queue.length; i++){

        resp += `${i}. **${queue[i].songTitle} || Requested By:** *${queue[i].requester}*\n`;

    }

    // Send the created response variable
    message.channel.send(resp);
}