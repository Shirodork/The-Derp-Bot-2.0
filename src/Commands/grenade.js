exports.run = (client, message, args, ops) => {
    
    var k = "<a:PPDance:535167355819524096>";
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