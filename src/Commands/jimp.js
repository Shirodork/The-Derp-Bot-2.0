const Jimp = require('jimp');
const Discord = require('discord.js');
// Dank Dungeon Image
var fileName = 'https://i.imgur.com/BtY6tMA.jpg';
var textName = 'https://i.imgur.com/tC9BJae.png';


// Empty Variable
var loadedImage;


exports.run = async (client, message, args, ops) => {

    var Lfont;
    // Temp Lock
    if (message.author.id !== ops.ownerID) return message.channel.send('Sorry! Only __**Authorized**__ users can use this command.');

    // If no Args, Return Message
    if (!args[0]) return message.channel.send("You Must Put In A Statement! (Ex. !meme [Statement Here]")

    // Convert Arguments to Sentence
    var imageCaption = args.join(' ');

    if (args.length > 0 && args.length <= 11) {
        console.log("Font set to 32");
        await jimpText32(textName);
        console.log("Text Print Complete")
        await jimpImage(fileName);
        console.log("Image Complete")
        await relayImage();

    } else if (args.length > 11 && args.length <= 20) {
        console.log("Font set to 16");
        await jimpText16(textName);
        console.log("Text Print Complete")
        await jimpImage(fileName);
        console.log("Image Complete")
        await relayImage();
    } else if (args.length > 20) {
        console.log("Font set to 8");
        return Jimp.loadFont(Jimp.FONT_SANS_8_WHITE);
    } else (console.log("DankDungeon Command Failure: Font Size Handler"))      // Error report


    async function jimpImage(memeImage) {
        const Image = await Jimp.read(memeImage);
        const textjimp = await Jimp.read('text.png');

        await textjimp.rotate(-12);
        await Image.composite(textjimp, 0, 0, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacitySource: 1,
            opacityDest: 1
        })

        await Image.write('meme.jpg');

    }

    async function rotImage(rotateImage) {
        const rImage = await Jimp.read(rotateImage);

        rImage.rotate(-15);

        await rImage.write('text.png')
    }

    async function jimpText32(textImage) {
        const tImage = await Jimp.read(textImage);

        Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function (font) {
            tImage.print(font, 65, 655, imageCaption, 200, 1556)
                .write('text.png');
        })


    }
    async function jimpText16(textImage) {
        const tImage = await Jimp.read(textImage);

        Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(function (font) {
            tImage.print(font, 175, 675, imageCaption, 200, 1556)
                .write('text.png');
        })
    }
    async function jimpText8(textImage) {
        const tImage = await Jimp.read(textImage);

        Jimp.loadFont(Jimp.FONT_SANS_8_WHITE).then(function (font) {
            tImage.print(font, 175, 675, imageCaption, 200, 1556)
                .write('text.png');
        })
    }

    function relayImage() {
        const file = new Discord.Attachment('./meme.jpg');
        
        const embed = {
            title: '**Dankest Dungeon Meme**',
            color: 65483,
            timestamp: new Date(),
            footer: {
                icon_url: message.author.avatarURL,
                text: message.author.tag
            },
            image: {
                url: 'attachment://meme.jpg'
            }
        }

        return message.channel.send({ files: [file], embed: embed});
    }
}