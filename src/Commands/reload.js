/**
 * Summary: This command allows you to reload commands while the bot is running
 *          Essentially, this command will allow you to create/edit commands without restarting the bot. You will need to use this command ever time
 *          you want to test any edits or new commands. Be sure to save the command file, then reload the command and test
 * 
 * Useage: !reload [command]
 */

exports.run = (client, message, args, ops) => {

    // Delete user input
    message.delete().catch( O_o => {});

    // Check for Admin Role
    if(!message.member.roles.some(r => rol.adminRoles.includes(r.name)) ) {

        return message.channel.send('**Verification Check Failed: You must have an __ADMIN__ Role!**');
    }

    try{
        // Delete bot command cache memory
        delete require.cache[require.resolve(`./${args[0]}.js`)];

    // Error Handler
    } catch(e) {

        return message.channel.send(`Unable to reload ${args[0]}`);
    }

    // Response
    message.channel.send(`Successfully reloaded: ${args[0]}`);
}