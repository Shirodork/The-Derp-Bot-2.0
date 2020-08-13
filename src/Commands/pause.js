/**
 * Summary: Pause the currently playing song
 * 
 * Useage: !pause
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
    if(fetched.dispatcher.paused) return message.channel.send('The music is already paused!');

    // Pause if no return
    fetched.dispatcher.pause();

    // Message output
    message.channel.send(`**Paused:** ${fetched.queue[0].songTitle}`)

}