
exports.run = async (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id)
    if (!fetched) return message.channel.send("There is no songs in the queue")
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("You must be in the same voice channel as me!")
    ops.active.set(message.guild.id, fetched);
    fetched.queue.shift()

    if (fetched.queue.length > 0) {
        async function play(client, ops, data) {


            const ytdl = require("ytdl-core")
            client.channels.get(data.queue[0].announceChannel).send(`__**Skipping:**__ __${data.queue[0].songTitle}__`)
            data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: 'audioonly' }))
            data.dispatcher.guildID = data.guildID
        /*    data.dispatcher.once('finish', function () {
                finish(client, ops, this)
            }) */
        }
        ops.active.set(fetched.dispatcher.guildID, fetched)
        play(client, ops, fetched)
    } else if (fetched.queue.length <= 0) {
        ops.active.delete(fetched.dispatcher.guildID)
        let vc = client.guilds.get(fetched.dispatcher.guildID).me.voiceChannel
        if (vc) vc.leave()
    }

    return;

}