/*  DO NOT USE
Summary: Debugger JS to test commands
*/

const Discord = require("discord.js");
const snekfetch = require('snekfetch');
const jimp = require('jimp')

exports.run = async (client, message, args) => {
    /*

    var randomReddit = [
        'furry',
        'mildlyinfuriating',
        'furry_irl',
        'aww',
        'yiff',
        'pokemon',
        'yiffgif',
        'smashbros34',
        'funny',
        'gfur',
        'UrethraPorn',
        'WTF_Wallpapers',
        'MedicalGore',
        'EarthPorn',
        'SpidersGoneWild',
        'SnotPorn',
        'dbdgonewild',
        'Art',
        'WhyWouldYouFuckThat',
        'photoshopbattles',
        'HotDogPorn',
        'burningporn',
        'facepalm',
        'photography',
        'ectalProlapse',
        'squidsgonewild',
        'dankmemes',
        'DinoBalls',
        'popping',
        'puppies',
        'proteinmodels',
        'rule34',
        'mantits',
        'Penispaint',
        'AnimalsBeingBros',
        'NKGW',
        'ClopClop',
        'AnimalsBeingJerks',
        'tinydick',
        'vomit',
        'woahdude',
        'Puke',
        'diapersgonewild',
        'FearMe',
        'NatureIsFuckingLit',
        'robotporn',
        'comics',
        'fillyfiddlers',
        'UnderTail',
        'Pee',
        'horsemaskgw',
        'FoodPorn',
        'peegonewild',
        'nsfl',
        'legoporn',
        'Shemales',
        'blessedimages',
        'clownbutter',
        'BaguettesInButts',
        'Minecraft',
        'HorseMask',
        'AnimalsWithoutNecks',
        'birdswitharms',
        'dragonsfuckingcars',
        'FuckYouImAShark',
        'NSFW_GIF',
        'AnimalsBeingDerps',
        'cumsluts',



    ]

    var subreddit = randomReddit[Math.floor(Math.random() * randomReddit.length)];

    
    console.log(subreddit)
	try {
        const { body } = await snekfetch
            .get(`https://www.reddit.com/r/${subreddit}.json?sort=top&t=week`)
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => post.data.over_18 || !post.data.over_18);
        if (!allowed.length) return message.channel.send('No NSFW posts Detected!');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        
        var fileName = allowed[randomnumber].data.url;
        const embed = new Discord.RichEmbed()
        .setColor(0x00A2E8)
        .setTitle(allowed[randomnumber].data.title)
        .setDescription("Posted by: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
        .addField("**If no image loads, click the title to check the source. The image may be unsupported or non-existant with the original post**")
        .setFooter(`Memes and Images provided by r/${subreddit}`)
        .setURL(allowed[randomnumber].data.url)
        message.channel.send(`You have rolled the dice! Your fate has been sealed. The subreddit given to you by destiny is: **r/${subreddit}**`)
        message.channel.send(embed)
    } catch (err) {
        console.log(err)
        return message.channel.send("Subreddit must be an image board subreddit!")
    }

    await jimpImage(fileName);
        console.log(subreddit)

        

    async function jimpImage(image){
        const Image = await jimp.read(image)
        var file = 'testImage.' + Image.getExtension();
        await Image.write(file)
    }
    */

    return;
}