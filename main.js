const Discord = require('discord.js');
const config = require('./config.json'); //needs to be added if you clone the directory from github

const client = new Discord.Client();
const prefix = config.prefix;
const fs = require('fs'); //file system to be able to implement the commands in different files
client.commands = new Discord.Collection(); //collection for the commands

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {

    //if the author is the bot, it's going to ignore it
    if(message.author.bot) return;

    //please ignore this part, it's for my friends
    //don't worry about the dark humour, it's just for the joke okay?
    if(message.content === 'o/') {
        message.reply('\\o');
    }else if(message.author.id == "325261805674954754") {
        var randNum = Math.floor(Math.random() * 3);
        switch(randNum) {
            case 0:
                message.channel.send("fuck you roushd c: -kamil");
                break;
            case 1:
                message.channel.send("go die you depressive piece of garbage -kamil");
                break;
            default:
                message.channel.send("explode like the good muslim you are -kamil");
        }
    }

    //if the message doesn't start with the prefix, it's going to ignore it
    if(!message.content.startsWith(config.prefix)) return; 

    //will take all the words after the command as arguments
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }


});

client.login(config.token);