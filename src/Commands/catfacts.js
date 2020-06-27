/*
Summary: Pulls a random cat fact from the JSON repository
Syntax: !catfacts

FUTURE Update: Pull from an API/Website instead of the limited JSON file.
*/

// Construct catFacts from the cat fact JSON repository
const catFacts = require('../Assets/catfacts.json');

exports.run = async (client, message, args, ops) => {

    // Choose a random cat fact from the premade construct
    await message.channel.send(catFacts[Math.floor(Math.random() * catFacts.length)])
}