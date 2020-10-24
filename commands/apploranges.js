const fetch = require("node-fetch");

module.exports = {
    name: "apploranges",
    short_description: "Runs Apploranges on a given image url.",
    long_description: "Runs Apploranges on a given image url. Apploranges is a web server that classifies images of apples and oranges in order to tell you which fruit is in the image",
    aliases: [], // other keywords to use this command
    args: true, // are args required to use this command?
    usage: "<image URL>", // [optional], <required>
    execute (bot, message, args) {
        const url = "https://apploranges.herokuapp.com/?img_url=" + args[0];
        fetch(url)
            .then(res => res.json())
            .then(res => {
                return message.channel.send(res)
            }).catch(() => {
                return message.channel.send(`Invalid image URL for apploranges: ${args[0]}`)
            });
    }
}
