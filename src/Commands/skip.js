/**
 * Summary: This command handles skips for regular users. The command initiates a skip only once majority listeners input the command
 * 
 * Useage: !skip
 */

exports.run = async (client, message, args, ops, rol) => {

    // Fetch Guild Objects
    let fetched = ops.active.get(message.guild.id);

    // Check for BANNED role
    if(message.member.roles.some(r => rol.bannedRoles.includes(r.name)) ) {

        return message.channel.send('**Verification Check Failed: You have been temporarily banned from using this command!**');
    }

    // Check Queue
    if(!fetched) return message.channel.send('Theres no music in the queue!');

    // Check if user is in the channel
    if(message.member.voiceChannelID !== message.guild.me.voiceChannelID) return message.channel.send('You must be in the voice channel to use this command!');

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

    // Check for vote requirement
    if (fetched.queue[0].voteSkips.length >= required){

        message.channel.send('Skip Successful!');

        return fetched.dispatcher.end();
    }

    message.channel.send(`Successfully sent vote to skip! ${fetched.queue[0].voteSkips.length}/${required} required.`);



}