exports.run = (client, message, args, ops) => {

  var k = "<:derpgares:644055757750403073>";
  const embed = {
    "title": `**Fetal Alcohol Syndrome!**`,
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

  message.channel.send({ embed });

}