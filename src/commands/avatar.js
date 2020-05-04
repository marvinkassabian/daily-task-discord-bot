module.exports = Object.freeze({
    name: "avatar",
    execute: () => ({ channel, author, mentions }, _args) => {
        if (!mentions.users.size) {
            return channel.send(`Your avatar: <${author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }

        const avatarList = mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        });

        channel.send(avatarList);
    }
})