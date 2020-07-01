/**
 * Summary: The bot repeats after you!
 * 
 * Useage: !say [words]
 */

exports.run = async (client, message, args, ops) => {

    // Argument to string
    const sayMessage = args.join(' ');

    // Delete user command
    message.delete().catch( O_o => {});

    // Say message
    message.channel.send(sayMessage);
}