// This command reloads other commands for fast debug 

exports.run = (client, message, args, ops) => {

    message.delete().catch( O_o => {});

    if(message.author.id !== ops.ownerID) return message.channel.send('Sorry! Only __**Authorized**__ users can use this command.');

    try{
        delete require.cache[require.resolve(`./${args[0]}.js`)];

    } catch(e) {

        return message.channel.send(`Unable to reload ${args[0]}`);
    }

    

    message.channel.send(`Successfully reloaded: ${args[0]}`);
}