const fetch = require("node-fetch");

module.exports = {
    name: "apploranges",
    description: "Runs Apploranges on a given image url.",
    execute (message, args) {
        if (!args.length){
            return message.channel.send("apploranges requires a url argument: `!apploranges <image url>`")
        }
        const url = "https://apploranges.herokuapp.com/?img_url=" + args[0];
        fetch(url)
            .then(res => res.json())
            .then(res => {
                return message.channel.send(res)
            });
    }
}