const { prefix } = require('../config.json');

module.exports = {
    name: "help",
    short_description: "Lists all available commands.",
    long_description: "Lists all available commands.",
    aliases: ['', '?'], // other keywords to use this command
    args: false, // are args required to use this command?
    usage: "[command]", // [optional], <required>
    execute (bot, message, args) {
        if (!args.length){
            // General help command
            let reply = '**All Commands**\n';

            bot.commands.forEach( cmd => { reply += `\n\`${cmd.name}\` - ${cmd.short_description}\n` } );
            console.log(reply);

            message.channel.send(reply);

        } else {
            // Command-specific help command

            let commandToHelpWith = args[0];
            if (!bot.commands.has(commandToHelpWith)) {
                message.channel.send(`There is no '${commandToHelpWith}' command. See *${prefix}help* for a list of available commands.`);
                return;
            }

            const command = bot.commands.get(commandToHelpWith);
            message.channel.send(
                `Command **${commandToHelpWith}**\n\n${command.long_description}\n\nUsage: \`!${command.name} ${command.usage}\`\nAliases: ${command.aliases.length ? command.aliases : 'n/a'}`
            );
        }
    }
}
