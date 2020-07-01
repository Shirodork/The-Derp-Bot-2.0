/**
 * WARNING: I do not recommend the use of this command in LARGE servers. High amounts of pings to google could result in an IP ban. You may use
 *          certain proxies to bypass this. You may want to limit this command to moderators or disable this command altogether.
 * 
 * Summary: This command allows you to perform a google search. The command will take your search terms, and return the top three google results. The amount
 *          of search links can be increased in the code.
 * 
 * Useage: !google [search term(s)]
 */

const serp = require('serp');

exports.run = async (client, message, args, ops) => {

    // Join Arguments into serach query
    searchterm = args.join(' ');

    // Set up options for search via SERP
    var options = {
        // search query
        qs: {
            // Search term 
            q: searchterm,
            // Ignore 'x' amount of first results
            filter: 0,
            // Personalized Web Search (0 for off, 1 for on)
            pws: 0
        },
        // Maximum number of links to return
        num: 3,
        // Safe search (Active for on, images for off)
        safe: 'images'
    };

    // Set up string
    let string = '';

    // Complete the search, results in a links array
    const links = await serp.search(options);

    // Create response
    for (i = 0; i < links.length; i++) {
        string = string + `\n**Search Result ${i}:** __***${links[i].title}***__ -- **Link: ** ${links[i].url}`

    }

    // console.log(links);
    
    // Return results into channel
    return message.channel.send(string);
}