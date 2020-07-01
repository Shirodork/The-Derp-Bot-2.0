/**
 * DEPRECIATED: Testing Command. Do Not Use
 */

 /*
const Jimp = require('jimp');

// Dank Dungeon Image
var fileName = 'https://i.imgur.com/BtY6tMA.jpg';

// Empty Variable
var loadedImage;


exports.run = async (client, message, args, ops) => {

    // Temp Lock
    if (message.author.id !== ops.ownerID) return message.channel.send('Sorry! Only __**Authorized**__ users can use this command.');

    // If no Args, Return Message
    if(!args[0]) return message.channel.send("You Must Put In A Statement! (Ex. !meme [Statement Here]")

    // Convert Arguments to Sentence
    var imageCaption = args.join(' ');

    // Jimp Image Handler:
    Jimp.read(fileName)                                                                 // Read Image
        .then(function (image) {                                                        // Then Proccess Image
            loadedImage = image;                                                        // Image Variable
            // Font Handler (Changes font size dynamically based on amount of words)
            if (args.length > 0 && args.length <= 13) {
                return Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            } else if (args.length > 13 && args.length <= 20) {
                return Jimp.loadFont(Jimp.FONT_SANS_8_WHITE);
            } else if (args.length > 20) {
                return Jimp.loadFont(Jimp.FONT_SANS_12_WHITE);
            } else (console.log("DankDungeon Command Failure: Font Size Handler"))      // Error report
        })
            .then(function (font) {
                loadedImage.print(font, 175, 675, imageCaption,200, 1556)
                    .write('meme.jpg');
            })
            .catch(function (err) {
                console.error(`DankDungeon Command Critical Failure:\n${err}`);         // Full error report
            });
}

*/

exports.run = async (client, message, args, ops) => {
    return;
}