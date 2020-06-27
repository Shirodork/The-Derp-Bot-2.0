/*
Summary: This command pulls dog facts from a JSON repository
Syntax: !dogfacts

Future Update: Utilize a website API as opposed to a JSON repository
*/

// Dog Fact JSON repository
const dogFacts = require('../Assets/dogfacts.json');

exports.run = async (client, message, args, ops) => {

    // Choose a random dog fact from the JSON
    await message.channel.send(dogFacts[Math.floor(Math.random() * dogFacts.length)])
}