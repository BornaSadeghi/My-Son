module.exports = {
    name: "avatar",
    short_description: "Displays the avatar of given users.",
    long_description: "Displays the avatar of given users.",
    aliases: ['av'], // other keywords to use this command
    args: false, // are args required to use this command?
    usage: "[user]", // [optional], <required>
    execute (bot, message, args) {

        if (!message.mentions.users.size){
            return message.channel.send(message.author.displayAvatarURL({format: "png", dynamic: true}));
        }

        const avatars = message.mentions.users.map(user => {
            return `${user.username}'s avatar: ${user.displayAvatarURL({format: "png", dynamic: true})}`;
        });
        message.channel.send(avatars);
    }
}
