exports.run = async (client, message, args, ops) => {

    // Fetch Guild Objects
    let fetched = ops.active.get(message.guild.id);

    // Check for BANNED role
    if(!message.member.roles.has('580451191973085184')) return message.channel.send('**SKYNET OPERATOR VERIFICATION FAILED: MUST HAVE <@580451191973085184> ROLE!**');

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

    if(message.member.roles.has('580451191973085184')) {

        message.channel.send(`**SKYNET OPERATOR VERIFIED:** <@${message.author.id}> \nForce Skip Successful!`);

        return fetched.dispatcher.end();


    }

    message.channel.send(`Successfully sent vote to skip! ${fetched.queue[0].voteSkips.length}/${required} required.`);



}