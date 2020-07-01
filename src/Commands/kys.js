/**
 * Summary: Crude Inside Joke within server. Commit Sewer Slide Meme
 * Useage: !kys
 */

exports.run = (client, message, args, ops) => {

  var k = "<a:PPDance:535167355819524096>";
  const embed = {
    "title": `${k} **Kermit Sewerslide!** ${k}`,
    "url": "https://cdn.drawception.com/images/panels/2018/1-17/6w2aCe4sjD-2.png",
    "color": 839204,
    "timestamp": new Date(),
    "footer": {
      "icon_url": message.author.avatarURL,
      "text": message.author.tag
    },
    "image": {
      "url": "https://cdn.drawception.com/images/panels/2018/1-17/6w2aCe4sjD-2.png"
    }
  };

  message.channel.send({ embed });

}