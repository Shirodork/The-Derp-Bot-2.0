/**
 * Summary: This command is a inside joke within the server. Feel free to remove this command or modify it. If you get errors with this command, it is most likely
 *          the emote, which is local server-based. 
 * 
 * Useage: !grenade
 */

exports.run = (client, message, args, ops) => {
    
    var k = "<a:PPDance:535167355819524096>"; // This WILL cause issues. Remove or update with your own server emoji. 
    const embed = {
      "title": ` **Zach Be Like...** `,
      "url": "https://i.imgur.com/pDpDukd.jpg",
      "color": 839204,
      "timestamp": new Date(),
      "footer": {
        "icon_url": message.author.avatarURL,
        "text": message.author.tag
      },
      "image": {
        "url": "https://i.imgur.com/pDpDukd.jpg"
      }
    };
  
    message.channel.send({ embed });
}