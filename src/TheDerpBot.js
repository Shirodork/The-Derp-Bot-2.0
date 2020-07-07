// Package Requirements
const Discord = require('discord.js');                                  // Discord.js
const { TOKEN, PREFIX, GOOGLE_API_KEY, GUILDID, TOTALUSERSID, MEMBERCOUNTID, BOTCOUNTID, OWNERID, GENERALCHANNEL} = require('./config/config');   // Pulls the token and prefix from our config
const client = new Discord.Client();                                    // New Client Via Discord.js
var fs = require('fs');

// Constant Variables
const prefix = PREFIX;                     // Sets Command Prefix (!)
const ownerID = OWNERID;   // Bot Owner set to Discord User ID
const active = new Map();      

// Role Setup
var roleListPath = './Roles/roles.json';
var jsonRoleRead = fs.readFileSync(roleListPath);    

// Server Stat Container
const serverStats = {
    guildID: GUILDID,               // Discord server ID
    totalUsersID: TOTALUSERSID,     // Channel ID for user counting
    memberCountID: MEMBERCOUNTID,   // Channel ID for memeber counting
    botCountID: BOTCOUNTID          // Channel ID for bot counting
};

// Listener Events
client.on('message', message => {       // Run when a new message is created in a channel accessable by the bot
    
    // Variables
    let args = message.content.slice(prefix.length).trim().split(' ');  // User Command Arguments
    let cmd = args.shift().toLowerCase();                               // Arguments to command variable. Convert to lowercase
    let rol = JSON.parse(jsonRoleRead);                                // Set up roles to pass to commands

    // Return Statements
    if (message.author.bot) return;                     // Prevent self-run commands (bot-initiated commands)
    if (!message.content.startsWith(prefix)) return;    // Prefix check
    if (!message.channel.guildID === 'NULL'){           // Bot is in a discord server
    if(message.member.roles.some(r=>["Spam Ban"].includes(r.name)) ) return message.channel.send("You have been temporarily **banned** from using Bot Commands!")   // Temp ban check
    }

    // Command Handler
    try {
        // Setting up operators
        let ops = {
            ownerID: ownerID,
            active: active
        }

        // Grab command date
        var currentdate = new Date(); 

        // String Command Timestamp
        var datetime = "TimeStamp: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        
        let commandFile = require(`./Commands/${cmd}.js`);  // Requires Commands Folder and File (Checks for command in commands folder)
        commandFile.run(client, message, args, ops, rol);        // Pass variables to command file and execute command script
        console.log(`Command: "!${cmd}" was inputted by ${message.author.tag} on ${datetime}`)  // Console log command (What command, Who initiated, When initiated)

    // Error Catcher
    } catch (e) {                                           
        console.log(`Invalid Command ${cmd} Inputted By <@${message.author.tag}>!`);    // Logs Error In Console
        console.log(e);
        message.channel.send(`<@${message.author.id}> || !${cmd} is **NOT** a valid Command. Type !help for a List of Commands!`)   // Returns Command not found message
    }
});

// Ready Event - Runs When Bot First Goes Online
client.on('ready', () => {
    
    var generalChannel = client.channels.get(GENERALCHANNEL); // Grabs general channel
    

    console.log('Bot is Launched!');    // Console Log

    // generalChannel.send('Beep Boop! Online!');


   client.user.setActivity('!help for command list', {type: "WATCHING"});    // Set inital status - Customizable [Type : WATCHING, PLAYING, STREAMING]
   console.log("Status Set!\nBot Awaiting Commands")    // Status set log
    
});

// Bot user counting - Add user
client.on('guildMemberAdd', member => {

    if (member.guild.id !== serverStats.guildID) return;
    
    client.channels.get(serverStats.totalUsersID).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.get(serverStats.memberCountID).setName(`Member Count: ${member.guild.members.filter(m => !m.user.bot).size}`);
    client.channels.get(serverStats.botCountID).setName(`Bot Count: ${member.guild.members.filter(m => m.user.bot).size}`);
    
});

// Bot user counting - Remove user
client.on('guildMemberRemove', member => {

    if (member.guild.id !== serverStats.guildID) return;

    client.channels.get(serverStats.totalUsersID).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.get(serverStats.memberCountID).setName(`Member Count: ${member.guild.members.filter(m => !m.bot).size}`);
    client.channels.get(serverStats.botCountID).setName(`Bot Count: ${member.guild.members.filter(m => m.bot).size}`);

});
client.login(TOKEN);