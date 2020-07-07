/**
 * Summary: This command takes a location input and outputs the weather forecast. 
 * 
 * Useage: !weather [city] [state/country]
 */

 const weather = require('weather-js');
 const fs = require('fs');

 exports.run = (client, message, args, ops) => {
     
    if(!args[0]) return message.channel.send('Invalid Syntax! Please input a location [Useage: !weather [city] [state/country]]')
    weather.find({search: args.join(', '), degreeType: 'F'}, function(err, result) {

        if(err){
            console.log(err);
            message.channel.send('An Error Has Occured. Please check the logs.')
        }

        // console.log(JSON.stringify(result, null, 2))
        let res = JSON.stringify(result, null, 2)

        let res1 = JSON.parse(res)

        console.log(res1);

        /*
        const embed = {
            "title": `Weather Forecast`,
            "description": `Weather Information For: ${res.location.name} on ${res.current.date} at ${res.current.observationtime}`,
            "color": 65483,
            "timestamp": new Date(),
            "footer": {
                "icon_url": client.user.avatarURL,
                "text": `${client.user.username} ©`
            },
            "thumbnail": {
                "url": 'https://cdn2.iconfinder.com/data/icons/weather-icons-8/512/day-clear-512.png'
            },
            "fields": [
            {
                "name": "Temperature",
                "value": res.current.temperature
            },
            {
                "name": "Feels Like",
                "value": res.current.feelslike
            },
            {
                "name": "Humidity",
                "value": res.current.humidity
            },
            {
                "name": "Wind Speed",
                "value": res.current.windspeed
            }
          
            ]
        };

        return message.channel.send({embed});
*/
    })
 }