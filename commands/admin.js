module.exports = {
    name: "admin",
    description: "make someone admin for some reason. It's a troll feature.",
    execute(message, args) {
        message.channel.send('Congratz! You are now an admin :)');
        message.member.roles.add('378609185274986497').catch(console.error);
    }
}