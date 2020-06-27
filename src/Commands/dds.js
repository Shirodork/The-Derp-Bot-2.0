/*  DEPRECIATED - Use !google instead
Summary: Debugger for the DuckDuckGo search engine. 
Syntax: !ddg [searchterm]
*/

const serp = require('serp');

exports.run = async (client, message, args, ops) => {

  /*
    searchterm = args.join(' ');
var options = {
  host : "google.be",
  qs : {
    q : searchterm,
    filter : 0,
    pws : 0
  },
  num : 3,
  safe: 'images'
};

let string = '';
const links = await serp.search(options);
    
for( i=0 ; i < links.length; i++){
    string = string + `\n**Search Result ${i}:** __***${links[i].title}***__ -- **Link: ** ${links[i].url}`

}


console.log(links);
return message.channel.send(string);

*/

return message.channel.send('Depreciated! Use !google instead!')
}