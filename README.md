# The-Derp-Bot-2.0
A multi-purpose discord bot made on Node.JS running on JavaScript.

## Description
This is a multipurpose discord bot. The bot runs on Javascript and utilizes Node.js. This bot is still a work-in-progress and is constantly being updated with new commands. The bot has been specially made to allow for easy custom commands. The bot currently employs a variety of utility, entertainment and moderation commands. The bot also features a detailed `!help` command to allow for ease of use. If you find any bugs, please report it to the appropriate Github tracker. Please see each folder for a description of contents and how each can be edited.

## Installation
Installation required the following programs to run. Each can be obtained for free:
* Python 2.7 (With PATH)
* FFMPEG (with PATH)
* Node.JS
* Windows Build Tools 4.0.0
* Google Developer Youtube-Data-API Key (https://console.developers.google.com/)
* Discord Developer App Bot Token (https://discord.com/developers)
* (optional) Visual Studio Code

Once the necessary programs and keys have been obtained, read the following to get the bot up and running
1. Clone the Directory to your computer
2. Add a folder within the SRC folder labeled "config"
3. Within the config folder, add a javascript file named Config.js
4. Copy paste the following, ensuring to insert the correct information: 
exports.TOKEN = 'INSERT TOKEN KEY HERE';
exports.PREFIX = '!';
exports.GOOGLE_API_KEY = 'INSERT API KEY HERE';
3. Open a CMD or Node terminal
4. Navigate to the bot directory src folder
5. Initiate a `npm install` command
6. All necessary packages should install
7. Within the config.js file, add appropriate API keys
8. Once added, run the bot via the Node terminal with: `node thederpbot.js`

## Current Commands (Constant Updates)
### !Help command
Use this command to find a summarized list of commands from within Discord. The help command has two syntaxes: 
1. `!help` - List all commands organized by category
2. `!help [category]` - List detailed explaination of commands within a category (Example: !help fun)

### General & Utility Commands
  - `!bot`: Bot information
  - `!botinfo`: Bot information
  - `!help`: List help commands (HIGHLY RECCOMMENDED YOU DO!)
  - `!say`: Make the bot repeat what you say
  - `!timer [minute] [second]`: Start a timer and have the bot ping you once the timer is complete (Example: `!timer 0 30` for a 30 second timer)
  - `!goodbot`: Tell the bot it's doing a good job
  - `!badbot`: Tell the bot its doing a bad job
### Music Commands
  - `!play [Search Term(s) or URL]`: Seaches, lists, and plays a video from YouTube based on input. (Example: `!play Wii Shop Theme` )
  - `!pause`: Pauses current track
  - `!resume`: Resumes current track
  - `!skip`: Skips current track. Based on a majority vote system 
  - `!leave`: Ends music playback and leaves the VC
  - `!volume [number (0-200)]`: Adjust the bot's volume. Distortion occurs past 100.
  - `!queue`: See the current queue
  - `!search`: Use the `!play` command instead of the search command
### Fun Commands
  - `!ascii [message]`: Converts your message to Ascii-style art
  - `!chewtle`: Embeded message with Chewtle
  - `!kys`: Embeded message with the Kermit Sewer Slide Meme Image
  - `!knock`: Pulls from a JSON repository of knock knock jokes
  - `!loot`: "Maybe the real treasure was the friends you made along the way!"
  - `!say [message]`: The bot repeats what you say, and deletes the command input.
  - `!nou`: Uno "Reverse" card text art
  - `!reddit [subreddit]`: Pulls a random image from a subreddit. Subreddit must be an image-based subreddit. Built in NSFW filer
  - `!randomchamp`: Chooses a random League of Legends champ for you to play
  - `!redditnsfw [subreddit]`: Same as !reddit, but allows for NSFW subreddit images. USE AT OWN RISK!
  - `!pun`: Pulls from a JSON repository of puns.
  - `!puppies`: Posts a random puppy image
  - `!heavenorhell`: Roll the dice! This command pulls an image/post from a random subreddit! There are some gross subreddits out there, so use at your own peril!
  - `!8ball [Question]`: Ask the 8ball a question!
  - `!coinflip`: Flip a coin! 
  - `!catfacts`: Pulls from a JSON repository of cat facts!
  - `!dogfacts`: Pulls from a JSON repository of dog facts!
### Meme Generation Commands
  - `!memeDungeon`: Darkest Dungeon "DISPAIR" meme
  - `!memeRetarded`: "Oh no, its Retarded" Meme
  - `!memeTruth`: Scroll of Truth Meme
  - `!memeSpongebob`: Spongebob "Professional Retard" Meme 
  - `!waiting`: Baby Yoda, Waiting meme
### Moderation Commands - Must have "Skynet Operator" role
  - `!fskip`: Forces a music skip
  - `!clear [number]`: Clears defined number of bot-only messages
  - `!purge [Number]`: Deletes defined number bot and user messages 
  - `!ping`: Ping local bot latency and Discord API latency
  - `!setstatus [Stauts]`: Set the bot's status!
  - `!tempban [@user] [minutes] [seconds]`: Temporarily ban a user from using bot commands. (Example: `!tempban @Ediphus 0 30` - Bans @ediphys from using bot commands for 30 seconds)
