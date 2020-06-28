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

    /*
    // Fetch number of users in the channel
    let userCount =  message.member.voiceChannel.members.size;

    // Calculate Votes Required to skip
    let required = Math.ceil(userCount/2);

    // Update Fetched
    if(!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];

    // Check if user already voted
    if(fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`You already voted to skip! ${fetched.queue[0].voteSkips.length} required.`);

    // Add user to vote skip
    fetched.queue[0].voteSkips.push(message.member.id);

    // Update Map
    ops.active.set(message.guild.id, fetched);
*/
    if(message.member.roles.some(r => rol.moderatorRoles.includes(r.name)) ){

        message.channel.send(`**Role Verification Successful:** <@${message.author.id}> __[Authorized Moderator]__ \n**Command:** Force Skip Completed!`);

        return fetched.dispatcher.end();


    }

    message.channel.send(`Successfully sent vote to skip! ${fetched.queue[0].voteSkips.length}/${required} required.`);



}