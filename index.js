const Discord = require('discord.js');
const {Client, Attachment} = require('discord.js');
const AriClient = new Client();


const token = //HIDDEN;
const custPrefix = 'ari!';
var version = '0.0.1, alpha';
AriClient.login(token);

AriClient.on('ready', () =>{

    console.log('Ari is online!');
    
})


/**
 * 
 * Random number generator.
 * 
 */

var freeResponses = ["Huh?", "Was I summoned?", "You rang?", "Did you say something?", "Yes?", "Oh, hi!", "That's me!", "*waves*", "Hello!"];

var randomRespo = (Math.random() * 8);
 


/**
 * 
 *  ARI'S CHAT COMMANDS
 * 
 */
AriClient.on('message', msg=>{

    if(msg.content === "bby"){
        
        msg.reply('You rang? :)');
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

