module.exports = {
    name: "ping",
    short_description: "Tests the latency of the bot.",
    long_description: "Tests the latency of the bot.",
    aliases: [], // other keywords to use this command
    args: false, // are args required to use this command?
    usage: "", // [optional], <required>
    execute (bot, message, args) {
        if (!args.length){
            message.channel.send("Pong!");
        } else {
            // access the specified command's description
        }
    }
}
