/*  
Summary: Administrator forced skip for youtube playback
Syntax: !fskip
*/

exports.run = async (client, message, args, ops, rol) => {

    if(!message.member.roles.some(r => rol.moderatorRoles.includes(r.name)) ) {

        return message.channel.send('**Verification Check Failed: You must have a Moderator Role!**');
    }

    // Fetch Guild Objects
    let fetched = ops.active.get(message.guild.id);

    // Check to see if there is a queue
    if(!fetched) return message.channel.send('Theres no music in the queue!');

    // Check if user is in the channel
    if(message.member.voiceChannelID !== message.guild.me.voiceChannelID) return message.channel.send('You must be in the voice channel to use this command!');


    // Check for Appropriate Role
    if(message.member.roles.some(r => rol.moderatorRoles.includes(r.name)) ){

        message.channel.send(`**Role Verification Successful:** <@${message.author.id}> __[Authorized Moderator]__ \n**Command:** Force Skip Completed!`);

        // End Current music
        return fetched.dispatcher.end();
    }
}