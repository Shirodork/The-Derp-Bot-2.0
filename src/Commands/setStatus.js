/*
Summary: Command lets a moderator update the status of the bot
Useage: !setstatus [message]
*/

exports.run = (client, message, args, ops) => {

  // Create Status string
  var status = args.join(' ');

  // Role check
  if (message.member.roles.some(r => rol.moderatorRoles.includes(r.name))) {

    message.channel.send(`**Role Verification Successful:** <@${message.author.id}> __[Authorized Moderator]__ \n**Command:** Force Skip Completed!`);

    client.user.setActivity(`${status}`, { type: "PLAYING" });

  } else {

    return message.channel.send('**Verification Check Failed: You must have a Moderator Role!**');
  }

}