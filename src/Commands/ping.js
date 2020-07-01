/**
 * Summary: Test the latency on the server [Acceptable Range (0-250ms)], and test the Discord API latency [Acceptable Range (5-250ms)]
 * Useage: !ping
 */

exports.run = async (client, message, args) => {
    
    const m = await message.channel.send("Ping?!");
    var apiTime = Math.round(client.ping);
    m.edit(`The Local Bot Latency is ${m.createdTimestamp - message.createdTimestamp}ms. The API Latency is ${apiTime}ms!`);
    
}