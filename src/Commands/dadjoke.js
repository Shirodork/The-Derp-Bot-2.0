/*
Summary: This command utilizes an HTTP request to pull a dad joke from the website https://icanhazdadjoke.com/api.
Syntax: !dadjoke
*/

// HTTP Requester NPM module
const request = require('request');

// As per request of the website, a custom header is applied to the API Call (https://icanhazdadjoke.com/api)
let options = {
    headers: {
        'User-Agent': 'The Derp Bot [A Discord Bot] Github Temporarily Unavailable'
    },
    json: true
};

// Function
exports.run = (client, message, args, ops) => {
    
    // Utilize request function with options and error catching
    request('https://icanhazdadjoke.com/', options, (err, res, body) => {

    // Error Catch with console reporting
        if (err) {
            console.log(err);
            return;
        }

        // console.log(body)    // Debug to see what is returned from HTTP request

        // The Joke
        message.channel.send(body.joke);
    });
}
