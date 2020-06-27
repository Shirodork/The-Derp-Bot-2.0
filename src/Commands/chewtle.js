/*
Summary: Inside gag. Displayes a picture of Chewtle in an discord embed. 
Syntax: !chewtle

Future Update: Feel'in cute, might depreciate this command later
*/

exports.run = (client, message, args, ops) => {

  const embed = {
    "title": `**Chewtle!**`,
    "url": "https://archive-media-0.nyafuu.org/vp/thumb/1573/32/1573329433834s.jpg",
    "color": 839204,
    "timestamp": new Date(),
    "footer": {
      "icon_url": message.author.avatarURL,
      "text": message.author.tag
    },
    "image": {
      "url": "https://archive-media-0.nyafuu.org/vp/thumb/1573/32/1573329433834s.jpg"
    }
  };

  // Send embed
  message.channel.send({ embed });

}