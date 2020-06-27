// Package Requirements
const Discord = require('discord.js');  // Discord.js
const { TOKEN, PREFIX, GOOGLE_API_KEY } = require('./config');          // Pulls the token and prefix from our config
const client = new Discord.Client();    // New Client Via Discord.js

// Constant Variables
const prefix = '!';                     // Sets Command Prefix (!)
const ownerID = '203320605611655168';   // Bot Owner set to Discord User ID
const active = new Map();
// Server Stat Container
const serverStats = {
    guildID: '203321557026734080',
    totalUsersID: '579512481173602314',
    memberCountID: '579512556931252249',
    botCountID: '579512598819504128'
};

// Listener Events
client.on('message', message => {       // Run when a new message is created in a channel accessable by the bot
    
    // Variables
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    // Return Statements
    if (message.author.bot) return;                 
    if (!message.content.startsWith(prefix)) return;
    if (!message.channel.guildID === 'NULL'){
    if(message.member.roles.some(r=>["Spam Ban"].includes(r.name)) ) return message.channel.send("You have been temporarily **banned** from using Bot Commands!")
    }
    // Command Handler
    try {

        let ops = {
            ownerID: ownerID,
            active: active
        }
        var currentdate = new Date(); 
        var datetime = "TimeStamp: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        let commandFile = require(`./Commands/${cmd}.js`);  // Requires Commands Folder and File
        commandFile.run(client, message, args, ops);             // Pass three variables to command file
        console.log(`Command: "!${cmd}" was inputted by ${message.author.tag} on ${datetime}`)


        
    } catch (e) {                                           // Error Catcher
        console.log(`Invalid Command ${cmd} Inputted By <@${message.author.tag}>!`); 
        message.channel.send(`<@${message.author.id}> || !${cmd} is **NOT** a valid Command. Type !help for a List of Commands!`)                              // Logs Error In Console
    }
});

// Ready Event - Runs When Bot Goes Online
client.on('ready', () => {
    
    var generalChannel = client.channels.get("203321557026734080");

    console.log('Bot is Launched!');

   //generalChannel.send('Beep Boop! Online!');

   client.user.setActivity('the days go by...', {type: "WATCHING"});
   console.log("Status Set!\nBot Awaiting Commands")
    
});  // On Bot Start

client.on('guildMemberAdd', member => {

    if (member.guild.id !== serverStats.guildID) return;
    
    client.channels.get(serverStats.totalUsersID).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.get(serverStats.memberCountID).setName(`Member Count: ${member.guild.members.filter(m => !m.user.bot).size}`);
    client.channels.get(serverStats.botCountID).setName(`Bot Count: ${member.guild.members.filter(m => m.user.bot).size}`);
    
});

client.on('guildMemberRemove', member => {

    if (member.guild.id !== serverStats.guildID) return;

    client.channels.get(serverStats.totalUsersID).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.get(serverStats.memberCountID).setName(`Member Count: ${member.guild.members.filter(m => !m.bot).size}`);
    client.channels.get(serverStats.botCountID).setName(`Bot Count: ${member.guild.members.filter(m => m.bot).size}`);

});
client.login(TOKEN);