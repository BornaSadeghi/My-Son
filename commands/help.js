module.exports = {
    name: "help",
    description: "Lists all commands.",
    execute (message, args) {
        message.channel.send("```\nCommands\n========\n!apploranges <url> - run apploranges on an image url.\n!avatar - display your avatar.```");
    }
}