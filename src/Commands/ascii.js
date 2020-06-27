// Ascii-Art Package
const ascii = require('ascii-art');

// Command Handler
exports.run = (client, message, args, ops) => {

    // Font Generation
    ascii.font(args.join(' '), 'Doom', function(rendered){

        // Remove white spaces to the right of the string
        rendered = rendered.trimRight();

        // Checks if string is above a certain limit
        if(rendered.length > 2000) return message.channel.send('Error: Message too long!');

        // If no returns, send the message
        message.channel.send(rendered, {
            code: 'md'
        });
    })
}