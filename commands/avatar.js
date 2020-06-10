module.exports = {
    name: "avatar",
    description: "Displays the avatar of given users.",
    execute (message, args) {
        if (!message.mentions.users.size){
            return message.channel.send(message.author.displayAvatarURL({format: "png", dynamic: true}));
        }
        const avatars = message.mentions.users.map(user => {
            return `${user.username}'s avatar: ${user.displayAvatarURL({format: "png", dynamic: true})}`;
        });
        message.channel.send(avatars);
    }
}