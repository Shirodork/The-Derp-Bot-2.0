/**
 * Summary: Create a timer. 
 */
exports.run = (client, message, args , ops) => {

    var user = message.author.id;
    const minute = parseInt(args[0]);
    const second = parseInt(args[1]);

    // Number input check
    if(isNaN(minute) || isNaN(second)) return message.channel.send("Invalid Syntax: !timer [minute] [second]")

    // Convert minutes to ms
    var minMS = minute * 60000

    // Argument check
    if(!args[1]){

        var secMS = 0;
        second = 0;

    // Convert seconds to ms
    } else {
        var secMS = second * 1000;
    }
    
    // Total up time
    var totalMS = minMS + secMS

    // Timer set reminder
    message.channel.send(`<@${user}> has set a Timer for ${minute} minute(s) and ${second} second(s).\nI will notify you once the timer is complete!`)

    // Call timer function
    setTimeout(timerRing, totalMS, user);

    // Timer Function
    function timerRing(user){

        // Reminder
        for(i=0; i<3; i++){
            message.channel.send(`<@${user}> || Your Timer for is Up!`)
        }

        return;
    }
}