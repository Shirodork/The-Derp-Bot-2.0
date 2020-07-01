/**
 * WARNING: THIS COMMAND CONTAINS EXTREME DEGENERACY. PLEASE EXERSICE CAUTION WHEN USING THIS COMMAND!
 * 
 * Summary: Similar to that of Reddit 50/50. This command holds a mix of good and bad subreddits. 
 *          If you use this command, expect to see a variety of subreddit images, even if you did not want to.
 * 
 * Useage: !heavenorhell
 */

const Discord = require("discord.js");      // Discord API
const snekfetch = require('snekfetch');     // HTTP Fetcher
exports.run = async (client, message, args) => {

    // Subreddits. Feel free to add or remove. Subreddit should be an imageboard subreddit. Some discussions work as well. WARNING: EXTREME DEGENERACY
    var randomReddit = [
        'furry',
        'mildlyinfuriating',
        'furry_irl',
        'aww',
        'yiff',
        'pokemon',
        'yiffgif',
        'reverseanimalrescue',
        'smashbros34',
        'funny',
        'gfur',
        'dataisbeautiful',
        'UrethraPorn',
        'holdmyredbull',
        'WTF_Wallpapers',
        'MedicalGore',
        'EarthPorn',
        'SpidersGoneWild',
        'foodporn',
        'SnotPorn',
        'carporn',
        'pcmasterrace',
        'dbdgonewild',
        'Art',
        'Fire_Emblem_R34',
        'Design',
        'mariorule34',
        'InternetIsBeautiful',
        'WhyWouldYouFuckThat',
        'Coffee',
        'HotDogPorn',
        'facepalm',
        'burningporn',
        'facepalm',
        'ImGoingToHellForThis',
        'photography',
        'ectalProlapse',
        'HistoryPorn',
        'squidsgonewild',
        'dankmemes',
        'DinoBalls',
        'me_irl',
        'popping',
        'awwnime',
        'Metroid34',
        'puppies',
        'proteinmodels',
        'minimalism',
        'food',
        'rule34',
        'lifehacks',
        'PokePorn',
        'travel',
        'mantits',
        'wholesomememes',
        'Penispaint',
        'CityPorn',
        'AnimalsBeingBros',
        'NKGW',
        'creepy',
        'ClopClop',
        'OldSchoolCool',
        'trypophobia',
        'MechanicalKeyboards',
        'Slutoon',
        'teenagers',
        'GayPokePorn',
        'MapPorn',
        'animalcrossingr34',
        'AnimalsBeingJerks',
        'tinydick',
        'Whatcouldgowrong',
        'trypophobia',
        'insanepeoplefacebook',
        'vomit',
        'woahdude',
        'NSFW_GIF',
        'reactiongifs',
        'NSFW_Korea',
        'PewdiepieSubmissions',
        'NSFW_Japan',
        'Unexpected',
        'creampies',
        'gardening',
        'boobies',
        'instant_regret',
        'ass',
        'drawing',
        'hentai_gif',
        'rarepuppers',
        'Rule34LoL',
        'itookapicture',
        'MechanicalSluts',
        'europe',
        'MonsterGirl',
        'Damnthatsinteresting',
        'ArousingAvians',
        'ContagiousLaughter',
        'WholesomeYiff',
        'BetterEveryLoop',
        'femyiff',
        'GifRecipes',
        'gwpublic',
        'CrappyDesign',
        'Breeding',
        'slowcooking',
        'Puke',
        'oddlysatisfying',
        'diapersgonewild',
        'iamverybadass',
        'FearMe',
        'NatureIsFuckingLit',
        'robotporn',
        'comics',
        'cummingonfigurines',
        'Tinder',
        'PornhubComments',
        'futanari',
        'trippinthroughtime',
        'DragonPenis',
        'BikiniBottomTwitter',
        'lesbians',
        'tattoos',
        'fillyfiddlers',
        'WinStupidPrizes',
        'GoneWild',
        'Wellthatsucks',
        'UnderTail',
        'cringepics',
        'Pee',
        'WatchPeopleDieInside',
        'horsemaskgw',
        'FoodPorn',
        'peegonewild',
        'interestingasfuck',
        'nsfl',
        'funny',
        'legoporn',
        'pics',
        'FeralPokePorn',
        'nextfuckinglevel',
        'PokePorn',
        'blessedimages',
        'clownbutter',
        'Awwducational',
        'hentai',
        'Gifs',
        'BaguettesInButts',
        'Minecraft',
        'Shemales',
        'HorseMask',
        'AnimalsWithoutNecks',
        'TIHI',
        'Nonononoyes',
        'furryporn',
        'birdswitharms',
        'dragonsfuckingcars',
        'FuckYouImAShark',
        'NSFW_GIF',
        'AnimalsBeingDerps',
        'cumsluts',
    ]

    // Quirky responses to go with the choice. Feel free to add your own. Follow up with **/r${subreddit}**!
    var responses = [
    `You see a portal. You decide to hop in. On the other side, you find yourself in **r/${subreddit}**`,
    `You have rolled the dice! Your fate has been sealed. The subreddit given to you by destiny is: **r/${subreddit}**`,
    `You’re on the run from space pirates! As a last resort, you enter a dimensional wormhole. Alas, you find yourself in **r/${subreddit}**`,
    `You’re enjoying an icecream when all of a sudden a canvas bag is put over you. You’ve been kidnapped! Hours later you are dumped in **r/${subreddit}**`,
    `You’re enjoying your day when Thanos appears beside you. He picks you up and **YEETS** you into **r/${subreddit}**`,
    `You’re at a party. You take a huge hit from the public bong. You start tripping out in **r/${subreddit}**`,
    `You’re standing beside a phonebooth when the phone suddenly rings. You answer the phone and suddenly you awaken, realizing you were stuck in the matrix. The real world is actually **r/${subreddit}**`,
    `You’re walking down the stairs when suddenly you trip and die. Your afterlife is constant exposure to **r/${subreddit}**`,
    `You decide that life isn’t worth living anymore. You off yourself. You now spend eternity in **r/${subreddit}**. Was it worth it?`,
    `You’re fighting along side Wraith. She sets up a portal. You enter, but **Oh No!**, its malfunctioned. You find yourself stuck in **r/${subreddit}**`,
    `All dogs go to heaven, but not you! You’re going to **r/${subreddit}**!`,


    ]

    // Choose random subreddit
    var subreddit = randomReddit[Math.floor(Math.random() * randomReddit.length)];

    // Choose random response
    var botResponse = responses[Math.floor(Math.random() * responses.length)];
        
	try {
        // Obtain Subreddit JSON
        const { body } = await snekfetch
            .get(`https://www.reddit.com/r/${subreddit}.json?sort=top&t=week`)
            .query({ limit: 800 });

        // NSFW Check
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => post.data.over_18 || !post.data.over_18);
        if (!allowed.length) return message.channel.send('No NSFW posts Detected!');

        // Choose Random Post
        const randomnumber = Math.floor(Math.random() * allowed.length)

        // Console Logs
        console.log(subreddit)

        // Embed and send message
        const embed = new Discord.RichEmbed()
        .setColor(0x00A2E8)
        .setTitle(allowed[randomnumber].data.title)
        .setDescription("Posted by: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments + "\n**If no image loads, click the title to check the source. The image may be unsupported or non-existant with the original post**")
        .setFooter(`Memes and Images provided by r/${subreddit}`)
        .setURL(allowed[randomnumber].data.url)
        message.channel.send(`${botResponse}`)
        await message.channel.send(embed)
        await message.channel.send(`Direct Link Source:  ${allowed[randomnumber].data.url} `)

    // Error Catch
    } catch (err) {
        console.log(err)
        return message.channel.send("An Error Has Occured. Please check the Console Logs!")
    }


    
}