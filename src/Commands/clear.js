/** 
* Summary: Clean-up command. Clears BOT-ONLY messages in the amount specified, from most recent to oldest.
* Syntax: !clear [number]
*/

const Discord = require('discord.js');

exports.run = (client, message, args, ops, rol) => {

    // Checks for moderator/admin roles - Customizable
    if(!message.member.roles.some(r => rol.moderatorRoles.includes(r.name)) ) {

        return message.channel.send('**Verification Check Failed: You must have a Moderator Role!**');
    }

    // Checks for a number input
    if(!args[0]) return message.channel.send("Input a number");

    // Delete previous user command
    message.delete().catch( O_o => {});

    // Fetches messages according to the user amount
    message.channel.fetchMessages({limit: args[0]}).then(messages => {
        const botMessages = messages.filter(message => message.author.bot);     // Filter found messages to that of the bots
        message.channel.bulkDelete(botMessages);                                // Bulk delete messages found
        messagesDeleted = botMessages.array().length;                           // Set deleted amount

        message.channel.send("Clear Successful! Deleted: " + messagesDeleted + " Messages");    // Channel confirmation
        console.log("Clear Command Initiated By: " + message.author.tag + " | Deleted: " + messagesDeleted + " Messages");  // Console confirmation
    }).catch(err => {
        console.log("Error Clearing Messages!");    // Returns Error and displays error in console
        console.log(err);
    })

}