/**
 * Summary: Extension of !play Command. If !play does not recieve a URL, a Youtube search is
 *          initiated. The command lists 10 videos and awaits a user response. Once a video is
 *          chosen, the !search command converts the video to URL and passes it back to !play
 * Useage: !search [search terms] 
 *          (Recommended to use !play instead of !search)
 */
const search = require('yt-search');

exports.run = async (client, message, args, ops) => {

        // Check for BANNED role
        if(message.member.roles.has('580452048659546125')) return message.channel.send('You have been temporarily banned from using this command!');


    search(args.join(' '), async function(err, res) {

        if(err){
            console.log(err);
            return message.channel.send('Error. <@203320605611655168> Check Logs!');
        } 

        let videos = await res.videos.slice(0, 10);
        let resp = '';
        for(var i in videos){
            resp += `**[${parseInt(i)+1}]:** \`${videos[i].title}\`\n`;
        }

        //Text Info
        resp += `\n**Choose By Entering 1-10`;

        // Send output
        await message.channel.send(resp);

        // Message Collector
        const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;

        const collector = message.channel.createMessageCollector(filter);

        // Update Collecetor
        collector.videos = videos;

        // console.log(videos.title);

        collector.once('collect', function(m){

            console.log(this.videos[parseInt(m.content)-1].url);
            // Run Play
            let commandFile = require(`./play.js`);
            commandFile.run(client, message, [this.videos[parseInt(m.content)-1].url], ops);

        })



    });
}