const Discord = require('discord.js');
const {prefix, token} = require('./config.json'); //needs to be added if you clone the directory from github

const client = new Discord.Client();
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

client.on('message', async (message) => {

    //if the author is the bot, it's going to ignore it
    if(message.author.bot) return;

    //please ignore this part, it's for my friends
    //don't worry about the dark humour, it's just for the joke okay?
    if(message.content === 'o/') {
        message.reply('\\o');
    }else if(message.author.id == "325261805674954754") {
        client.commands.get('roushdHated').execute(message);
    }

    //if the message doesn't start with the prefix, it's going to ignore it
    if(!message.content.startsWith(prefix)) return; 

    //will take all the words after the command as arguments
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //search for the discord collection of commands then execute them
    if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }else if(command === 'server') {
        client.commands.get('server').execute(message, args);
    }


});

client.login(token);