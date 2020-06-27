exports.run = (client, message, args, ops) => {

    // Fetch Guild Objects
    let fetched = ops.active.get(message.guild.id);

     // Check for BANNED role
     if(message.member.roles.has('580452048659546125')) return message.channel.send('You have been temporarily banned from using this command!');

    // Check if Fetched Exists
    if(!fetched) return message.channel.send('There are no songs in the queue!')

    // User VC check
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('You must be in the same voice channel as me!');

    // Check if already paused
    if(!fetched.dispatcher.paused) return message.channel.send('The music is not paused!');

    // Pause if no return
    fetched.dispatcher.resume();

    // Message output
    message.channel.send(`**Resumed:** ${fetched.queue[0].songTitle}`)
    
}