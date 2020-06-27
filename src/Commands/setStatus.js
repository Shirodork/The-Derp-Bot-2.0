exports.run = (client, message, args, ops) => {

    var status = args.join(' ');

    if(message.member.roles.some(r=>["Ultimate Supreme Owner", "Skynet Operator", "Tech Support", "Dev"].includes(r.name)) ) {
    
        message.channel.send(`Elevated Role Verified: <@${message.author.id}> || Command Accepted\nStatus Updated!`);

        client.user.setActivity(`${status}`, {type: "PLAYING"});



    
      } else {
    
        return message.channel.send('Invalid Role! Must have "Tech Support" or higher elevated role!');
      }
    
}