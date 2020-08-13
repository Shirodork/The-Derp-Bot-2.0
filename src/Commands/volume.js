/**
 * Summary: Control volume for the music playback. [1-100] Normal Volume || [101-200] Extreme Volume
 * 
 * Useage: !volume [1-200]
 */

exports.run = (client, message, args, ops, rol) => {

    // Fetch Guild Objects
    let fetched = ops.active.get(message.guild.id);

    if(message.member.roles.some(r => rol.bannedRoles.includes(r.name)) ) {

        return message.channel.send('**Verification Check Failed: You have been temporarily banned from using this command!**');
    }

    // Check if Fetched Exists
    if(!fetched) return message.channel.send('There are no songs in the queue!')

    // User VC check
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('You must be in the same voice channel as me!');

    // Check number input is between 0 and 200
    if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send('Input a number between 0 and 200. __[**PLEASE NOTE**: Volumes over 100 can be considered **DANGEROUS**!__');

    // Change Volume
    fetched.dispatcher.setVolume(args[0]/100);

    // Send output
    message.channel.send(`**Song:** ${fetched.queue[0].songTitle} **|| Volume Set To:** ${args[0]}.`);
}