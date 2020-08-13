/**
 * Summary: Meme generator. Create your own Meme
 * Meme: Scroll of truth
 * 
 * Useage: !memetruth [text]
 */

const Jimp = require('jimp');
const Discord = require('discord.js');
// Dank Dungeon Image
var fileName = 'https://i.imgur.com/jZKy8Vc.jpg';
var textName = 'https://i.imgur.com/6X6SeLv.png';


// Empty Variable
var loadedImage;


exports.run = async (client, message, args, ops) => {

    var Lfont;
    
    /* // Temp Lock
    if (message.author.id !== ops.ownerID) return message.channel.send('Sorry! Only __**Authorized**__ users can use this command.');
    */
    // If no Args, Return Message
    if (!args[0]) return message.channel.send("You Must Put In A Statement! (Ex. !meme [Statement Here]")

    // Convert Arguments to Sentence
    var imageCaption = args.join(' ');
    message.delete().catch( O_o => {});

    if (args.length > 0 && args.length <= 5) {
        console.log("Font set to 64");
        await jimpText64(textName);
        await message.channel.send('Proccessing Text')
        console.log("Text Print Complete")
        await jimpImage(fileName);
        await message.channel.send('Proccessing Image')
        console.log("Image Complete")
        await relayImage();

    } else if (args.length > 5 && args.length <= 15) {
        console.log("Font set to 32");
        await jimpText32(textName);
        await message.channel.send('Proccessing Text')
        console.log("Text Print Complete")
        await jimpImage(fileName);
        await message.channel.send('Proccessing Image')
        console.log("Image Complete")
        await relayImage();

    } else if (args.length > 15) {
        console.log("Font set to 16");
        await jimpText16(textName)
        await message.channel.send('Proccessing Text')
        console.log("Text Print Complete")
        await jimpImage(fileName);
        await message.channel.send('Proccessing Image')
        console.log("Image Complete")
        await relayImage();
    } else (console.log("DankDungeon Command Failure: Font Size Handler"))      // Error report


    async function jimpImage(memeImage) {
        const Image = await Jimp.read(memeImage);
        const textjimp = await Jimp.read('./Meme Repository/text.png');

        /*await textjimp.rotate(-12);*/
        await Image.composite(textjimp, 0, 0, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacitySource: 1,
            opacityDest: 1
        })

        await Image.write('./Meme Repository/meme.jpg');

    }

    async function rotImage(rotateImage) {
        const rImage = await Jimp.read(rotateImage);

        rImage.rotate(-15);

        await rImage.write('./Meme Repository/text.png')
    }

    async function jimpText64(textImage) {
        const tImage = await Jimp.read(textImage);

        Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(function (font) {
            tImage.print(font, 250, 730, imageCaption, 200, 300)
                .write('./Meme Repository/text.png');
        })


    }
    async function jimpText32(textImage) {
        const tImage = await Jimp.read(textImage);

        Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
            tImage.print(font, 250, 730, imageCaption, 200, 300)
                .write('./Meme Repository/text.png');
        })
    }
    async function jimpText16(textImage) {
        const tImage = await Jimp.read(textImage);

        Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(function (font) {
            tImage.print(font, 250, 730, imageCaption, 200, 300)
                .write('./Meme Repository/text.png');
        })
    }

    async function relayImage() {
        const file = new Discord.Attachment('./Meme Repository/meme.jpg');
        
        const embed = {
            title: '**Scroll of Truth Meme**',
            color: 65483,
            timestamp: new Date(),
            footer: {
                icon_url: message.author.avatarURL,
                text: message.author.tag
            },
            image: {
                url: 'attachment://meme.jpg'
            },
            "fields": [
                {
                    "name": "**Created by:**",
                    "value": message.author.tag,
                }]
        }

        message.channel.send(`Proccessing Meme!`);
        return message.channel.send({ files: [file], embed: embed});
    }
}