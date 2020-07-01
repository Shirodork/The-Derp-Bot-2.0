/**
 * Summary: Initiate a temporary ban timeout for a user.
 */

const Timer = require('tiny-timer');

exports.run = async (client, message, args, ops) => {

    // Elevated User Check
    if(!message.member.roles.some(r => rol.moderatorRoles.includes(r.name)) ) {

        return message.channel.send('**Verification Check Failed: You must have a Moderator Role!**');
    }

    // Bot Check
    if (message.member.roles.some(r => rol.botRoles.includes(r.name))) return message.channel.send("Sorry Idjit, but you cant ban me!");                 

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

    // If no additional arguments
    if (!args[1]) {

        var secMS = 0;
        second = 0;
    } else {
        var secMS = second * 1000;
    }

    // Total time
    var totalMS = minMS + secMS

    // Add role to user and catch error
    banUser.addRole(myRole).catch(console.error);

    // Resposne
    message.channel.send(`${banUser} has banned from using commands for ${minute} minute(s) and ${second} second(s).\nI will notify ${banUser} when their ban is up!`)

    // Timer function call
    setTimeout(timerRing, totalMS, user);

    // Timer function with user pass
    function timerRing(user) {

        // Remove role after timer is done
        banUser.removeRole(myRole).catch(console.error);

        // Remind user that ban is up. Can be changed for repetition
        for (i = 0; i < 1; i++) {
            message.channel.send(`${banUser} || Your Temp Ban is up!`)
        }

        return;
    }
}