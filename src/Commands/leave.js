
exports.run = (client, message, args, ops) => {

        // Fetch Guild Objects
        let fetched = ops.active.get(message.guild.id);
    
        // Check for LOCKMUSIC Role
        if(message.member.roles.has('580452048659546125')) return message.channel.send('You have been temporarily banned from using this command!');
    
        // Check if there is a queue
        if(!fetched) return message.channel.send('There is no music in the queue!');
    
        // Check if user is in the channel
        if(message.member.voiceChannelID !== message.guild.me.voiceChannelID) return message.channel.send('You must be in the voice channel to use this command!');
    
        // Renew Queue to Empty
        fetched.queue = [];
    
        // Update MAP with new queue
        ops.active.set(message.guild.id, fetched);
    
        // Run an END command
        fetched.dispatcher.end();
        
    // Send Message
    message.channel.send('Ending music playback and leaving channel...');
}