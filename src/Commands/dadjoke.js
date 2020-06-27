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

    // Error Catch
        if (err) {
            return;
        }

        // The Joke
        message.channel.send(body.joke);
    });
}
