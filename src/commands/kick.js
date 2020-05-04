module.exports = Object.freeze({
    name: "kick",
    execute: () => (message, _args) => {
        const taggedUser = message.mentions.users.first();

        if (!taggedUser)
            message.reply('you need to tag a user in order to kick them!');
        else
            message.channel.send(`You wanted to kick: ${taggedUser}`);
    }
})