/**
 * Summary: Deletes a specified number of chats from both users and bots
 * Useage: !purge [number]
 */

const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
    
    // Check for Moderator Role role
    if(!message.member.roles.some(r => rol.moderatorRoles.includes(r.name)) ) {

        return message.channel.send('**Verification Check Failed: You must have a Moderator Role!**');
    }

    // Check for arguments
    if(!args[0]) return message.channel.send("Input a number");

    // Delete the user command
    message.delete().catch( O_o => {});

    // Fetched and delete the messages
    message.channel.fetchMessages({limit: args[0]}).then(messages => {
        const botMessages = messages.filter(message => message.author);
        message.channel.bulkDelete(botMessages);
        messagesDeleted = botMessages.array().length;

        // Result
        message.channel.send("Clear Successful! Deleted: " + messagesDeleted + " Messages");
        
        // Console logging
        console.log("Clear Command Initiated By: " + message.author.tag + " | Deleted: " + messagesDeleted + " Messages");
    }).catch(err => {
        console.log("Purge Error Detected!");
        console.log(err);
    })

}