module.exports = {
    name: "", // What must be typed after prefix/ping to run this command?
    short_description: "", // Description shown when running !help
    long_description: "", // Description shown when running !help name
    aliases: [], // other keywords to use this command
    args: false, // are args required to use this command?
    usage: "", // [optional], <required>
    execute (bot, message, args) {
        if (!args.length){
            message.channel.send("What?");
        } else {
            // access the specified command's description
        }
    }
}
