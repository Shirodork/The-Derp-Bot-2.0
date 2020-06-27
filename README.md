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
2. Open a CMD or Node terminal
3. Navigate to the bot directory src folder
4. Initiate a `npm install` command
5. All necessary packages should install
6. Within the config.js file, add appropriate API keys
7. Once added, run the bot via the Node terminal with: `node thederpbot.js`

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
### Meme Generation Commands
### Emotes Commands
### Moderation Commands
