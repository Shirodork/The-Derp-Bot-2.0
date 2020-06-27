const dogFacts = require('../Assets/dogfacts.json');

exports.run = async (client, message, args, ops) => {

    await message.channel.send(dogFacts[Math.floor(Math.random() * dogFacts.length)])
}