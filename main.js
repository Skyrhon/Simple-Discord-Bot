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

client.on('message', msg => {

    //if the author is the bot, it's going to ignore it
    if (msg.author.bot) return;

    if (msg.content === 'o/') {
        msg.reply('\\o');
    }

    //if the message doesn't start with the prefix, it's going to ignore it
    if (!msg.content.startsWith(config.prefix)) return; 

    //will take all the words after the command as arguments
    const args = msg.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        msg.channel.send('pong!');
    }


});

client.login(config.token);