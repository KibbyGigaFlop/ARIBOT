const Discord = require('discord.js');
const {Client, Attachment} = require('discord.js');
const AriClient = new Client();


const token = 123456; //HIDDEN
const custPrefix = 'ari!';
var version = '0.0.2, alpha';
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
    
    var ariLove = ["Uhh...", "W-Well then, " + msg.author.username + "... I never knew you felt that way.", "Not sure how I feel about that-", "I'm just a bot you know...", "I mean, I guess???", "I'm flattered, I guess?",
    "I know. :heart: :flame:", "You told me at least 100 times now.", "*holds up mace* Stay back.", "**Blush**", 
    "I know, and so does everyone in this server, LOL", "You do...?", "I love you too. :heart:", "I love you too, but I'm sorta stuck behind this screen..."]; //10 slots
    
    var ariHate = ["Sheesh, dude...", "...", "Hate is a strong word...", "I was literally minding my own business, what the hell, " + msg.author.username + "?", 
    "What did I do...?", "Wow.", "But... But... :brokenheart:", "Did I do something wrong?"]; //8 slots
    
    var ariFuckYou = ["Sheesh, fuck you too.", "Wh-?!", "Fuckin' rude...", "What the fuck did I do?", "...", "FUCK YOU TOO", "Why are you being mean to me??", "This is bot abuse..."];//8 slots
    
    var ariMarry = ["Uh. No thanks.", "No???", "I'm a bot, though.", "I would but I'm not interested.",
    "This is the 50th time you've asked. No.", "I'm literally stuck behind this screen.", "**holds up gun**",
     "**gasps** ... " + msg.author.username + "... :heart:", "I thought you'd never ask. :heart:"];//9 slots

     /**
      * 
      * ARI TO USER RESPONSES.
      * 
      */

    if(msg.content === "Ari?" | msg.content === "ARI" | msg.content === "Ari..." | msg.content === "Hi, Ari!" | msg.content === "hi ari!!" | msg.content === "ARI!!" | msg.content === "ari!!"){
        var randomRespo = Math.floor(Math.random() * 8) + 1;
        var ariRandRespo = grabArisAttention[randomRespo];

            msg.channel.send(ariRandRespo);        

    } 
    
    if(msg.content === "Ari, I love you!" | msg.content === "ari i love you" | msg.content === "Ari i love you" | msg.content === "I love you, ari" | msg.content === "I love you ari"){
        var randomRespo = Math.floor(Math.random() * 9) + 1;
        var ariRandLove = ariLove[randomRespo]; 

            msg.channel.send(ariRandLove);        

    }
    
    if(msg.content === "Ari, I hate you" | msg.content === "ari i hate you" | msg.content === "Ari i hate you" | msg.content === "I hate you, ari" | msg.content === "I hate you ari"){
        var randomRespo = Math.floor(Math.random() * 7) + 1;
        var ariRandHate = ariHate[randomRespo]; 

            msg.channel.send(ariRandHate);

    }
    
    if(msg.content === "Ari, fuck you" | msg.content === "ari fuck you" | msg.content === "ari fuck you!" | msg.content === "fuck you, ari" | msg.content === "fuck you ari"){
        var randomRespo = Math.floor(Math.random() * 8) + 1;
        var ariRandFuckYou = ariFuckYou[randomRespo]; 

            msg.channel.send(ariRandFuckYou);
    }
    
    if(msg.content === "Ari, please marry me" | msg.content === "ari please marry me" | msg.content === "Ari marry me" | msg.content === "ari marry me" | msg.content === "Ari please marry me"){
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
                    .addField('Hey! I\'m Ari Bot.', 'How can I help you today, ' + msg.author.username + '?')
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

                    msg.channel.send('I am version ' + version + '!');

                break;
            case 'hug':
                msg.channel.send('Ari gives ' + msg.author.username + ' a hug. Aww. :heart:');
            
                break;
            case 'kiss':
                msg.channel.send('Ari gave ' + msg.author.username + ' a kiss on the cheek. :heart:');
                break;
            case 'slap':
                msg.channel.send('Ari just slapped ' + msg.author.username + '! Ouch.');
                break;
            case 'punch':
                msg.channel.send('Ari punched ' + msg.author.username + '\'s lights out!');
                break;
            case 'pet':
                msg.channel.send('Ari just gave ' + msg.author.username + ' a pat on the head.');
                break;
            case 'kill':
                msg.channel.send('For some reason, Ari just killed ' + msg.author.username + '. :knife:');
                break;
            case 'cuddle':
                msg.channel.send('Ari would like to cuddle with you, ' + msg.author.username + ".");
                break;

            
            }
/**
 * 
 *  ARI'S TAG RESPONSES
 * 
 */
           

 
})