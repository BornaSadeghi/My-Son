const discord = require("discord.js");
const fs = require("fs");
const {prefix, token} = require(".\\config.json");

const bot = new discord.Client();
bot.commands = new discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

bot.on("ready", () => {
    console.log("Bot online.")
});

bot.on("message", message => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();
    // command is the string after !, args are the commands that follow
    bot.commands.get(command).execute(message, args);
    
})

bot.login(token);
