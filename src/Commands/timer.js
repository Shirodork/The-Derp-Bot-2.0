exports.run = (client, message, args , ops) => {

    var user = message.author.id;
    const minute = parseInt(args[0]);
    const second = parseInt(args[1]);

    // Number input check
    if(isNaN(minute) || isNaN(second)) return message.channel.send("Invalid Syntax: !timer [minute] [second]")

    var minMS = minute * 60000

    if(!args[1]){

        var secMS = 0;
        second = 0;
    } else {
        var secMS = second * 1000;
    }
    
    var totalMS = minMS + secMS

    message.channel.send(`<@${user}> has set a Timer for ${minute} minute(s) and ${second} second(s).\nI will notify you once the timer is complete!`)

    setTimeout(timerRing, totalMS, user);

    function timerRing(user){

        for(i=0; i<3; i++){
            message.channel.send(`<@${user}> || Your Timer is Up!`)
        }

        return;
    }
}