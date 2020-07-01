/**
 * Summary: Inside joke ping. Can be edited for other users
 * 
 * Usage: !stebbersping
 */

const ascii = require('ascii-art');

exports.run = (client, message, args, ops) => {

    var x = 3;
	var i = 0;
	
	ascii.font('STEBBERS', 'Doom', function(rendered){
		
		rendered = rendered.trimRight();

		for(i=0;i<x;i++){
			message.channel.send(`${rendered} `, {
				code: 'md'
			})

			message.channel.send('<@194611436243124225>')
		}
	})

	} 

