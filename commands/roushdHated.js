module.exports = {
    name: "roushdHated",
    description: "if roushd sends a message, he will automatically be insulted",
    execute(message) {
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
}