// This is the Ping command file

exports.run = async (client, message, args) => {
    
    const m = await message.channel.send("Ping?!");
    var apiTime = Math.round(client.ping);
    m.edit(`The Local Bot Latency is ${m.createdTimestamp - message.createdTimestamp}ms. The API Latency is ${apiTime}ms!`);
    
}