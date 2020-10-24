const discord = require("discord.js");
const fs = require("fs");
const { prefix } = require("./config.json");
const dotenv = require('dotenv');
dotenv.config();

const bot = new discord.Client();
bot.commands = new discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
bot.aliases = []; // 'commandname': ['alias1', 'alias2']

for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

bot.on("ready", () => {
    console.log("Bot online.")
});

bot.on("message", message => {
    // If the message came from the bot or doesn't start with the prefix or ping the bot, return
    if (message.author.bot || !(message.content.startsWith(prefix) || message.mentions.has(bot.user)) ) return;

    let splitMessage = '';
    if (message.content.startsWith(prefix)){
        splitMessage = message.content.slice(prefix.length).trim().toLowerCase().split(/ +/);
    } else if (message.mentions.has(bot.user)) {
        // Get rid of mentions
        splitMessage = message.content.replace(/<@(.*?)> */, '').trim().toLowerCase().split(/ +/);
    } else return;

    const commandName = splitMessage[0];
    const args = splitMessage.slice(1);

    if (!commandName) return;

    console.log(`new message`)
    console.log(`* message content: ${message.content}`);
    console.log(`* command name: ${commandName}`);
    console.log(`* args: ${args}`);

    const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    // Command is the string after the prefix or ping, args are the commands that follow
    if (!command) {
        message.channel.send(`That isn't a command. See ${prefix}help for a list of available commands.`);
        return;
    }

    if (command.args && !args.length){
        message.channel.send(`Command '${commandName}' requires arguments. See ${prefix}help ${commandName}.`);
        return
    }

    command.execute(bot, message, args);
});

bot.login(process.env.TOKEN);
