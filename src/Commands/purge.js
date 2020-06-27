const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
    
    // Check for OPERATOR role
    if(!message.member.roles.has('580451191973085184')) return message.channel.send('**SKYNET OPERATOR VERIFICATION FAILED: MUST HAVE <@Skynet Operator> ROLE!**');

    if(!args[0]) return message.channel.send("Input a number");

    var ClrLenght = (args[0] + 1);
    message.delete().catch( O_o => {});

    message.channel.fetchMessages({limit: args[0]}).then(messages => {
        const botMessages = messages.filter(message => message.author);
        message.channel.bulkDelete(botMessages);
        messagesDeleted = botMessages.array().length;

        message.channel.send("Clear Successful! Deleted: " + messagesDeleted + " Messages");
        console.log("Clear Command Initiated By: " + message.author.tag + " | Deleted: " + messagesDeleted + " Messages");
    }).catch(err => {
        console.log("Error Clearing!");
        console.log(err);
    })

}