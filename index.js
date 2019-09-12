const Discord = require('discord.js');
const {Client, Attachment} = require('discord.js');
const AriClient = new Client();


const token = 'NjA3NTU0NTE2NTMxMDE5Nzg2.XUoMYw.Q1-OwYUZ2CoVPjT9aYZCzuFfmkI';
const custPrefix = 'ari!';
var version = '0.0.3, alpha';
AriClient.login(token);

AriClient.on('ready', () =>{

    console.log('Ari is online!');
    
})


/**
 * 
 * RANDOM PHRASES FOR ARI BASED ON INSTANCE
 * 
 */




/**
 * 
 *  ARI'S CHAT COMMANDS
 * 
 */

AriClient.on('message', msg=>{

    /**
     * 
     * PRE-WRITTEN ARRAYS FOR ARI RESPONSES.
     * 
     */

    var grabArisAttention = ["Huh?", "Was I summoned?", "You rang?", "Did you say something?", "Yes?", "Oh, hi!", "That's me!", "*waves*", "Hello!"];
    
    var ariAlien = ["Huh?", "Uh...", "No... what makes you say that? :sweat_drops: ", "How'd you know?!", "Ehh... Kinda??", "How about I take you back to my planet and find out? :)", "Shhhh.", "Don't tell anyone.", "... Maybe"];

    var ariLove = ["Uhh...", "W-Well then, <@" + msg.author.id + ">... I never knew you felt that way.", "Not sure how I feel about that-", "I'm just a bot you know...", "I mean, I guess???", "I'm flattered, I guess?",
    "I know. :heart: :flame:", "You told me at least 100 times now.", "*holds up mace* Stay back.", "**Blush**", 
    "I know, and so does everyone in this server, LOL", "You do...?", "I love you too. :heart:", "I love you too, but I'm sorta stuck behind this screen..."]; //10 slots
    
    var ariHate = ["Sheesh, dude...", "...", "Hate is a strong word...", "I was literally minding my own business, what the hell, <@" + msg.author.id + ">?", 
    "What did I do...?", "Wow.", "But... But... :brokenheart:", "Did I do something wrong?"]; //8 slots
    
    var ariFuckYou = ["Sheesh, fuck you too.", "Wh-?!", "Fuckin' rude...", "What the fuck did I do?", "...", "FUCK YOU TOO", "Why are you being mean to me??", "This is bot abuse..."];//8 slots
    
    var ariMarry = ["Uh. No thanks.", "No???", "I'm a bot, though.", "I would but I'm not interested.",
    "This is the 50th time you've asked. No.", "I'm literally stuck behind this screen.", "**holds up gun**",
     "**gasps** ... <@" + msg.author.id + ">... :heart:", "I thought you'd never ask. :heart:"];//9 slots

     /**
      * 
      * ARI TO USER RESPONSES.
      * 
      */

     var userMsg = msg.content;
     var lowercaseMsg = userMsg.toLowerCase();
     
        if (userMsg === "<@607554516531019786>"){
        var randomRespo = Math.floor(Math.random() * 8) + 1;
        var ariRandRespo = grabArisAttention[randomRespo];

            msg.channel.send(ariRandRespo);        

    } 


    if(lowercaseMsg.includes("ari") && !lowercaseMsg.includes("ari!") && lowercaseMsg.includes("are you an alien") | lowercaseMsg.includes("alien")){
        var randomRespo = Math.floor(Math.random() * 8) + 1;
        var ariRandRespo = ariAlien[randomRespo];

            msg.channel.send(ariRandRespo);        

    }

    
    if(lowercaseMsg.includes("ari") && !lowercaseMsg.includes("ari!") && lowercaseMsg.includes("i love you")){
        var randomRespo = Math.floor(Math.random() * 9) + 1;
        var ariRandLove = ariLove[randomRespo]; 

            msg.channel.send(ariRandLove);        

    }
    
    if(lowercaseMsg.includes("ari") && !lowercaseMsg.includes("ari!") && lowercaseMsg.includes("hate you") | lowercaseMsg.includes("i hate you")){
        var randomRespo = Math.floor(Math.random() * 7) + 1;
        var ariRandHate = ariHate[randomRespo]; 

            msg.channel.send(ariRandHate);

    }
    
    if(lowercaseMsg.includes("ari") && !lowercaseMsg.includes("ari!") && lowercaseMsg.includes("fuck you") | lowercaseMsg.includes("go fuck yourself") | lowercaseMsg.includes("fuck himself")){
        var randomRespo = Math.floor(Math.random() * 8) + 1;
        var ariRandFuckYou = ariFuckYou[randomRespo]; 

            msg.channel.send(ariRandFuckYou);
    }
    
    if(lowercaseMsg.includes("ari") && !lowercaseMsg.includes("ari!") && lowercaseMsg.includes("marry me") | lowercaseMsg.includes("marry")){
        var randomRespo = Math.floor(Math.random() * 8) + 1;
        var ariRandMarry = ariMarry[randomRespo]; 

            msg.channel.send(ariRandMarry);

    }
    
    let args = msg.content.substring(custPrefix.length).split(" ");

        switch(args[0]){

            case 'ari':

                const attachment = new Attachment('https://i.ibb.co/Z2v8hhk/awake.png');
                msg.channel.send('That\'s me!', attachment);

                break;
            case 'help':

                    const embedhelp = new Discord.RichEmbed()
                    .setTitle('Ari\'s Command Guide')
                    .addField('Hey! I\'m Ari Bot.', 'How can I help you today, <@' + msg.author.id + '>?')
                    .setColor(0x44B9FF)
                    .addField('ari!ari', 'It shows Ari\'s beautiful face.')
                    .addField('ari!help', 'Displays the command guide')
                    .addField('ari!ping', 'Tests Ari\'s sending speed')
                    .addField('ari!version', 'Displays Ari\'s version')
                    .addField('ari!hug', 'Give Ari a hug!')
                    .addField('ari!kiss', 'Give Ari a kiss. :heart:')
                    .addField('ari!slap', 'Ari slaps you.')
                    .addField('ari!punch', 'Ari punches you to the nth dimension.')
                    .addField('ari!kill', 'Ari kills you for no reason.')
                    .addField('ari!cuddle', 'Ari asks to cuddle with you.')

                    msg.channel.send(embedhelp);
                
                break;

            case 'ping':
                msg.channel.send('Pong! Was I fast enough? :D');
                break;            

            case 'version':

                    msg.channel.send('I am version <@' + msg.author.id + '>!');

                break;
            case 'hug':
                msg.channel.send('Ari gives <@' + msg.author.id + '> a hug. Aww. :heart:');
            
                break;
            case 'kiss':
                msg.channel.send('Ari gave <@' + msg.author.id + '> a kiss on the cheek. :heart:');
                break;
            case 'slap':
                msg.channel.send('Ari just slapped <@' + msg.author.id + '>! Ouch.');
                break;
            case 'punch':
                msg.channel.send('Ari punched <@' + msg.author.id + '>\'s lights out!');
                break;
            case 'pet':
                msg.channel.send('Ari just gave <@' + msg.author.id + '> a pat on the head.');
                break;
            case 'kill':
                msg.channel.send('For some reason, Ari just killed <@' + msg.author.id + '>. :knife:');
                break;
            case 'cuddle':
                msg.channel.send('Ari would like to cuddle with you, <@' + msg.author.id + '>.');
                break;
            case 'rpplot':
                msg.channel.send('The current roleplay plot is:\n ```Something strange started in this world where humans were being born with strange markings, ' + 
                'scars, and even tattoos of numbers on their body. Along these numbers come with powerful abilities attached to them, ' + 
                'those who were marked cannot get rid of their abilities and must have to live among the powerless like a regular human the best they can.' + 
                'Some take their mark as power while others treat it like a curse, some are even hunted and used for their abilities.' + 
                'There are no current name for these beings besides being called "The Numbered" or "The Marked One" some people simply refer to them as just "Numbers".' + 
                'However, it\'s been agreed that they were deemed "too dangerous" to live freely, and needed more research done on Numbers.' + 
                'In facilities, they were constantly tested on and treated like animals, undeserving of equal human treatment.' + 'Tired of the abuse, they decide to escape.```');

            
            }
/**
 * 
 *  ARI'S TAG RESPONSES
 * 
 */
           

 
})