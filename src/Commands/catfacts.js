const catFacts = require('../Assets/catfacts.json');

exports.run = async (client, message, args, ops) => {

    await message.channel.send(catFacts[Math.floor(Math.random() * catFacts.length)])
}