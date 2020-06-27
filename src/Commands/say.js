exports.run = async (client, message, args, ops) => {

    const sayMessage = args.join(' ');
    message.delete().catch( O_o => {});
    message.channel.send(sayMessage);
}