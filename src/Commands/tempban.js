const Timer = require('tiny-timer');

exports.run = async (client, message, args, ops) => {

    // Elevated User Check
    if (!message.member.roles.some(r => ["Ultimate Supreme Owner", "Skynet Operator", "Tech Support", "Dev"].includes(r.name))) return message.channel.send("You do not have enough permissions to use this command!")

    if (message.member.roles.some(r => ["Skynet"].includes(r.name))) return message.channel.send("Sorry Idjit, but you cant ban me!");                 


    // Variable initialization
    var user = message.author.id;
    const minute = parseInt(args[0]);
    const second = parseInt(args[1]);
    let banUser = message.mentions.members.first();

    // Minute Conversion to ms
    var minMS = minute * 60000

    // Role Variable Initialization
    let myRole = message.guild.roles.find(role => role.name === "Spam Ban");

    // Check for unban
    if (args[0] == 'unban') {

        banUser.removeRole(myRole).catch(console.error);
        return message.channel.send(`${banUser} || Your Temp Ban has been reverted by ${message.author}!`)

    }

    // Number input check
    if (isNaN(minute) || isNaN(second)) return message.channel.send("Invalid Syntax: !tempban [minute] [second] [@user]")

    // Unbannable role check
    if (banUser.roles.some(role => role.name === "Skynet Operator")) return message.channel.send("You cant ban a Skynet Operator!");

    // Unbannable role check
    if (banUser.roles.some(role => role.name === "Spam Ban")) return message.channel.send("This user already has a temp ban restriction on them!");


    if (!args[1]) {

        var secMS = 0;
        second = 0;
    } else {
        var secMS = second * 1000;
    }

    var totalMS = minMS + secMS

    banUser.addRole(myRole).catch(console.error);

    message.channel.send(`${banUser} has banned from using commands for ${minute} minute(s) and ${second} second(s).\nI will notify ${banUser} when their ban is up!`)

    setTimeout(timerRing, totalMS, user);

    function timerRing(user) {

        banUser.removeRole(myRole).catch(console.error);
        for (i = 0; i < 1; i++) {
            message.channel.send(`${banUser} || Your Temp Ban is up!`)
        }

        return;
    }
}