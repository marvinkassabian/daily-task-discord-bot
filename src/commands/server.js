module.exports = Object.freeze({
    name: "server",
    execute: () => (message, _args) => {
        message.channel.send(`Server name: ${message.guild.name}
Total members: ${message.guild.memberCount}
Created at: ${message.guild.createdAt}
Region: ${message.guild.region}`);
    }
})