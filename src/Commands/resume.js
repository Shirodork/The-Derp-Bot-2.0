/**
 * Summary: This command allows the bot to resume playback after it has been paused
 */
exports.run = (client, message, args, ops, rol) => {

    // Fetch Guild Objects
    let fetched = ops.active.get(message.guild.id);

     // Check for BANNED role
     if(message.member.roles.some(r => rol.bannedRoles.includes(r.name)) ) {

        return message.channel.send('**Verification Check Failed: You have been temporarily banned from using this command!**');
    }

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