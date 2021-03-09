#DEPRECIATED AS OF 3/9/2021! FIND THE NEW AND IMPROVED [Derp Bot 3](https://github.com/Shirodork/The-Derp-Bot-3)

# The-Derp-Bot-2.0
A multi-purpose discord bot made on Node.JS running on JavaScript. Please see [Wiki](https://github.com/Shirodork/The-Derp-Bot-2.0/wiki) for more details. 

## Description
This is a multipurpose discord bot. The bot runs on Javascript and utilizes Node.js. This bot is still a work-in-progress and is constantly being updated with new commands. The bot has been specially made to allow for easy custom commands. The bot currently employs a variety of utility, entertainment and moderation commands. The bot also features a detailed `!help` command to allow for ease of use. If you find any bugs, please report it to the appropriate Github tracker. Please see each folder for a description of contents and how each can be edited.

## Installation
[Click Here for complete installation instructions GitWiki Page](https://github.com/Shirodork/The-Derp-Bot-2.0/wiki/Complete-Installation-Guide-%5BWINDOWS%5D):

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
  - `!google [Search Term(s)]`: Performs a search on Google and returns the top three results
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
  - `!dankmeme`: Pulls a meme from the subreddit r/dankmemes
  - `!edgelord`: Edgelord copypasta meme 
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
  - `!urban [word]` or `!urban randomword`: Looks up a word in the Urban Dictionary. You can substitute a word with "randomword" to pull a random word definition.
### Meme Generation Commands
  - `!memeDungeon [text]`: Darkest Dungeon "DISPAIR" meme
  - `!memeRetarded [text]`: "Oh no, its Retarded" Meme
  - `!memeTruth [text]`: Scroll of Truth Meme
  - `!memeSpongebob [text]`: Spongebob "Professional Retard" Meme 
  - `!memeDoubt [text]`: Doubt meme
  - `!waiting [text]`: Baby Yoda, Waiting meme
### Moderation Commands - Must have a defined moderator role
  - `!fskip`: Forces a music skip
  - `!clear [number]`: Clears defined number of bot-only messages
  - `!purge [Number]`: Deletes defined number bot and user messages 
  - `!ping`: Ping local bot latency and Discord API latency
  - `!setstatus [Stauts]`: Set the bot's status!
  - `!tempban [@user] [minutes] [seconds]`: Temporarily ban a user from using bot commands. (Example: `!tempban @Ediphus 0 30` - Bans @ediphys from using bot commands for 30 seconds)
